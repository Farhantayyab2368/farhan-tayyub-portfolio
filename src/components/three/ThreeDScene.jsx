import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Shared pointer (whole window, not just the canvas)                */
/* ------------------------------------------------------------------ */
function useWindowPointer() {
  const p = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      p.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      p.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return p;
}

const COLORS = {
  violet: '#8b6bff',
  lime: '#c6ff3d',
  blue: '#4c7dff',
  body: '#16141f',
  screen: '#0c0b16',
};

/* ------------------------------------------------------------------ */
/*  Smartphone with an app UI rendered from simple planes             */
/* ------------------------------------------------------------------ */
function Block({ p, s, c, o = 1 }) {
  return (
    <mesh position={[p[0], p[1], 0.087]}>
      <planeGeometry args={s} />
      <meshBasicMaterial color={c} transparent opacity={o} toneMapped={false} />
    </mesh>
  );
}

function Phone({ pointer, reduce }) {
  const ref = useRef();
  useFrame((_, dt) => {
    if (!ref.current || reduce) return;
    const k = 1 - Math.pow(0.001, dt);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, -0.35 + pointer.current.x * 0.35, k);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0.08 - pointer.current.y * 0.2, k);
  });

  return (
    <group ref={ref} rotation={[0.08, -0.35, 0]}>
      <RoundedBox args={[1.72, 3.45, 0.16]} radius={0.22} smoothness={6}>
        <meshStandardMaterial color={COLORS.body} metalness={0.7} roughness={0.25} />
      </RoundedBox>
      {/* edge glow */}
      <RoundedBox args={[1.76, 3.49, 0.12]} radius={0.23} smoothness={4} position={[0, 0, -0.03]}>
        <meshBasicMaterial color={COLORS.violet} transparent opacity={0.35} toneMapped={false} />
      </RoundedBox>
      {/* screen */}
      <mesh position={[0, 0, 0.083]}>
        <planeGeometry args={[1.56, 3.26]} />
        <meshBasicMaterial color={COLORS.screen} toneMapped={false} />
      </mesh>
      {/* notch */}
      <Block p={[0, 1.5]} s={[0.42, 0.08]} c="#000000" />
      {/* header */}
      <Block p={[-0.45, 1.28]} s={[0.5, 0.07]} c="#ffffff" o={0.85} />
      <mesh position={[0.56, 1.28, 0.087]}>
        <circleGeometry args={[0.08, 24]} />
        <meshBasicMaterial color={COLORS.lime} toneMapped={false} />
      </mesh>
      {/* hero card */}
      <Block p={[0, 0.78]} s={[1.36, 0.72]} c={COLORS.violet} o={0.9} />
      <Block p={[-0.28, 0.9]} s={[0.66, 0.07]} c="#ffffff" />
      <Block p={[-0.38, 0.76]} s={[0.46, 0.05]} c="#ffffff" o={0.6} />
      <Block p={[-0.42, 0.56]} s={[0.36, 0.13]} c={COLORS.lime} />
      {/* chips */}
      {[-0.46, -0.04, 0.38].map((x, i) => (
        <Block key={x} p={[x, 0.26]} s={[0.36, 0.12]} c={i === 0 ? COLORS.blue : '#26243a'} />
      ))}
      {/* list rows */}
      {[-0.05, -0.43, -0.81].map((y, i) => (
        <group key={y}>
          <Block p={[0, y]} s={[1.36, 0.3]} c="#1a1830" />
          <Block p={[-0.52, y]} s={[0.2, 0.2]} c={[COLORS.lime, COLORS.violet, COLORS.blue][i]} o={0.9} />
          <Block p={[-0.05, y + 0.05]} s={[0.6, 0.05]} c="#ffffff" o={0.8} />
          <Block p={[-0.15, y - 0.06]} s={[0.4, 0.04]} c="#ffffff" o={0.35} />
        </group>
      ))}
      {/* CTA */}
      <Block p={[0, -1.2]} s={[1.36, 0.2]} c={COLORS.lime} />
      {/* bottom nav */}
      <Block p={[0, -1.47]} s={[1.56, 0.001]} c="#ffffff" o={0.1} />
      {[-0.5, -0.17, 0.17, 0.5].map((x, i) => (
        <mesh key={x} position={[x, -1.46, 0.088]}>
          <circleGeometry args={[0.045, 16]} />
          <meshBasicMaterial color={i === 0 ? COLORS.lime : '#ffffff'} transparent opacity={i === 0 ? 1 : 0.35} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Game controller built from primitives                             */
/* ------------------------------------------------------------------ */
function Controller(props) {
  const mat = <meshStandardMaterial color="#1d1b2a" metalness={0.5} roughness={0.35} />;
  return (
    <group {...props}>
      <RoundedBox args={[1.5, 0.62, 0.3]} radius={0.15} smoothness={4}>
        {mat}
      </RoundedBox>
      {[-0.62, 0.62].map((x) => (
        <mesh key={x} position={[x, -0.2, 0]} rotation={[0, 0, x > 0 ? -0.4 : 0.4]}>
          <capsuleGeometry args={[0.24, 0.35, 6, 12]} />
          {mat}
        </mesh>
      ))}
      {/* d-pad */}
      <mesh position={[-0.42, 0.04, 0.16]}>
        <boxGeometry args={[0.26, 0.08, 0.04]} />
        <meshBasicMaterial color="#3a3754" />
      </mesh>
      <mesh position={[-0.42, 0.04, 0.16]}>
        <boxGeometry args={[0.08, 0.26, 0.04]} />
        <meshBasicMaterial color="#3a3754" />
      </mesh>
      {/* buttons */}
      {[
        [0.42, 0.14, COLORS.lime],
        [0.42, -0.06, COLORS.violet],
        [0.32, 0.04, COLORS.blue],
        [0.52, 0.04, '#ffffff'],
      ].map(([x, y, c]) => (
        <mesh key={`${x}${y}`} position={[x, y, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.04, 16]} />
          <meshBasicMaterial color={c} toneMapped={false} />
        </mesh>
      ))}
      {/* sticks */}
      {[-0.18, 0.18].map((x) => (
        <mesh key={x} position={[x, -0.14, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.06, 20]} />
          <meshStandardMaterial color="#2c2942" />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Particles                                                         */
/* ------------------------------------------------------------------ */
function Particles({ count, pointer, reduce }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, [count]);
  useFrame((_, dt) => {
    if (!ref.current || reduce) return;
    ref.current.rotation.y += dt * 0.015;
    const k = 1 - Math.pow(0.02, dt);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, pointer.current.x * -0.25, k);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, pointer.current.y * -0.15, k);
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#cbbcff" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene                                                             */
/* ------------------------------------------------------------------ */
function Scene({ tier, reduce }) {
  const pointer = useWindowPointer();
  const rig = useRef();
  const isDesktop = tier === 'desktop';
  const isMobile = tier === 'mobile';
  const speed = reduce ? 0 : 1.4;

  useFrame((_, dt) => {
    if (!rig.current || reduce) return;
    const k = 1 - Math.pow(0.01, dt);
    rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, pointer.current.x * 0.12, k);
    rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, -pointer.current.y * 0.06, k);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <pointLight position={[-3, 1, 2]} intensity={18} color={COLORS.violet} />
      <pointLight position={[3, -2, 2]} intensity={10} color={COLORS.lime} />

      <group ref={rig} scale={isMobile ? 0.82 : 1}>
        <Float speed={speed} rotationIntensity={0.15} floatIntensity={0.5}>
          <Phone pointer={pointer} reduce={reduce} />
        </Float>

        <Float speed={speed * 1.1} rotationIntensity={0.4} floatIntensity={0.7}>
          <Controller position={isMobile ? [-1.35, -1.35, 0.6] : [-1.85, -1.3, 0.6]} rotation={[0.35, 0.4, 0.15]} scale={isMobile ? 0.6 : 0.75} />
        </Float>

        {/* geometric accents */}
        <Float speed={speed * 0.8} rotationIntensity={1.2} floatIntensity={1}>
          <mesh position={[2.05, 1.75, -0.8]}>
            <icosahedronGeometry args={[0.38, 0]} />
            <meshBasicMaterial color={COLORS.violet} wireframe transparent opacity={0.8} />
          </mesh>
        </Float>
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={0.8}>
          <mesh position={[-1.9, 1.8, -0.6]} rotation={[0.8, 0.3, 0]}>
            <torusGeometry args={[0.26, 0.07, 16, 48]} />
            <meshStandardMaterial color={COLORS.lime} emissive={COLORS.lime} emissiveIntensity={0.35} roughness={0.3} />
          </mesh>
        </Float>
        <Float speed={speed * 1.2} rotationIntensity={1} floatIntensity={1.2}>
          <mesh position={[1.9, -1.9, 0.2]}>
            <octahedronGeometry args={[0.24, 0]} />
            <meshStandardMaterial color={COLORS.blue} metalness={0.6} roughness={0.2} />
          </mesh>
        </Float>
        {!isMobile && (
          <Float speed={speed * 0.9} rotationIntensity={0.6} floatIntensity={1}>
            <mesh position={[0.2, 2.25, -1.4]}>
              <sphereGeometry args={[0.12, 24, 24]} />
              <meshStandardMaterial color="#ffffff" emissive="#cbbcff" emissiveIntensity={0.5} />
            </mesh>
          </Float>
        )}

      </group>

      {!isMobile && <Particles count={isDesktop ? 320 : 140} pointer={pointer} reduce={reduce} />}
    </>
  );
}

/**
 * Hero 3D workspace. Rendering pauses automatically when scrolled out of view.
 */
export default function ThreeDScene({ tier = 'desktop', reduce = false }) {
  const wrap = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.01 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 42 }}
        dpr={tier === 'desktop' ? [1, 1.75] : [1, 1.25]}
        gl={{ antialias: tier !== 'mobile', alpha: true, powerPreference: 'high-performance' }}
        frameloop={visible ? (reduce ? 'demand' : 'always') : 'never'}
      >
        <Scene tier={tier} reduce={reduce} />
      </Canvas>
    </div>
  );
}

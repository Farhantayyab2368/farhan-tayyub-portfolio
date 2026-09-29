import { getIcon } from '../utils/icons';
import { getAccent } from '../utils/accent';

/**
 * A layered, extruded "3D" icon built with CSS transforms.
 * Straightens towards the viewer when its parent `.group` is hovered.
 */
export default function Icon3D({ icon, accent = 'violet', size = 'md' }) {
  const Icon = getIcon(icon);
  const a = getAccent(accent);
  const dim = size === 'lg' ? 'h-20 w-20' : size === 'sm' ? 'h-12 w-12' : 'h-16 w-16';
  const iconSize = size === 'lg' ? 34 : size === 'sm' ? 20 : 28;
  return (
    <div className="[perspective:600px]" aria-hidden>
      <div
        className={`relative ${dim} transition-transform duration-700 ease-out [transform-style:preserve-3d] [transform:rotateX(20deg)_rotateY(-26deg)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)_translateZ(10px)]`}
      >
        {[3, 2, 1, 0].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-2xl border"
            style={{
              transform: `translateZ(${-i * 5}px)`,
              borderColor: `${a.hex}${i === 0 ? '70' : '26'}`,
              background:
                i === 0
                  ? `linear-gradient(145deg, ${a.hex}38, rgba(20,18,34,0.92))`
                  : `rgba(15,14,26,${0.95 - i * 0.2})`,
              boxShadow: i === 3 ? `0 22px 40px -12px ${a.glow}` : 'none',
            }}
          />
        ))}
        <span
          className={`absolute inset-0 grid place-items-center ${a.text}`}
          style={{ transform: 'translateZ(14px)', filter: `drop-shadow(0 0 10px ${a.glow})` }}
        >
          <Icon size={iconSize} strokeWidth={1.6} />
        </span>
      </div>
    </div>
  );
}

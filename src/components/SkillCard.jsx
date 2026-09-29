import { motion, useReducedMotion } from 'framer-motion';
import { getAccent } from '../utils/accent';
import TiltCard from './TiltCard';
import Icon3D from './Icon3D';

export default function SkillCard({ group, index }) {
  const a = getAccent(group.accent);
  const reduce = useReducedMotion();
  return (
    <TiltCard max={5} className="glass h-full overflow-hidden rounded-3xl p-7">
      <div
        className="absolute -left-20 -top-20 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: a.glow }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-5">
          <Icon3D icon={group.icon} accent={group.accent} size="sm" />
          <div>
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <p className="mt-1 text-sm text-muted">{group.summary}</p>
          </div>
        </div>
        <span className="font-mono text-xs text-soft" aria-label={`${group.skills.length} skills`}>
          {String(index + 1).padStart(2, '0')}/{String(group.skills.length).padStart(2, '0')}
        </span>
      </div>
      <motion.ul
        className="relative mt-7 flex flex-wrap gap-2"
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        variants={{ show: { transition: { staggerChildren: 0.035 } } }}
      >
        {group.skills.map((s) => (
          <motion.li
            key={s}
            variants={{ hidden: { opacity: 0, y: 10, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } }}
            className={`cursor-default rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2 text-sm text-white/85 transition-colors duration-300 ${a.hoverBorder} hover:bg-white/[0.07]`}
          >
            <span className={`mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle ${a.bg}`} aria-hidden />
            {s}
          </motion.li>
        ))}
      </motion.ul>
    </TiltCard>
  );
}

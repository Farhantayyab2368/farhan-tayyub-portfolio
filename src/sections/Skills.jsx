import { skillGroups } from '../data/portfolio.config';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import Reveal from '../components/Reveal';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-navy/60 blur-[120px]" aria-hidden />
      <SectionHeading
        index="02"
        eyebrow="Toolkit"
        title="Skills that connect design and quality"
        id="skills-title"
        text="I design interfaces with testing in mind — and test products with a designer’s eye for usability."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.id} delay={i * 0.06}>
            <SkillCard group={g} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

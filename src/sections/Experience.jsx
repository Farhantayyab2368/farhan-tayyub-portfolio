import { experience } from '../data/portfolio.config';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <SectionHeading
        index="05"
        eyebrow="Career"
        title="Experience"
        id="experience-title"
        align="center"
        text="Where I have applied design and technical skills in real teams."
      />
      <ExperienceTimeline items={experience} />
    </section>
  );
}

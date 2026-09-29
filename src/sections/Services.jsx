import { services } from '../data/portfolio.config';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section">
      <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-violet-deep/40 blur-[140px]" aria-hidden />
      <SectionHeading
        index="06"
        eyebrow="How I can help"
        title="Services"
        id="services-title"
        text="Design, testing, or both — for websites, mobile apps and games."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 3) * 0.07}>
            <ServiceCard service={s} index={i} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

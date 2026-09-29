import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, id, align = 'left', index, as = 'h2' }) {
  const center = align === 'center';
  const H = as;
  return (
    <Reveal className={`mb-14 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${center ? 'justify-center' : ''}`}>
        {index && <span className="text-soft">{index}</span>}
        <span className="h-px w-6 bg-lime/60" aria-hidden />
        {eyebrow}
      </p>
      <H id={id} className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
        {title}
      </H>
      {text && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{text}</p>}
    </Reveal>
  );
}

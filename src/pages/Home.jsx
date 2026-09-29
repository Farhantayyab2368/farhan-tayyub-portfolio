import Hero from '../sections/Hero';
import QuickIntro from '../sections/QuickIntro';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Stats from '../sections/Stats';
import Projects from '../sections/Projects';
import DesignProcess from '../sections/DesignProcess';
import Testing from '../sections/Testing';
import Experience from '../sections/Experience';
import Services from '../sections/Services';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';

export default function Home({ ready, onOpenProject }) {
  return (
    <>
      <Hero ready={ready} />
      <QuickIntro />
      <About />
      <Stats />
      <Skills />
      <Projects onOpen={onOpenProject} />
      <DesignProcess />
      <Testing onOpen={onOpenProject} />
      <Experience />
      <Services />
      <Resume />
      <Contact />
    </>
  );
}

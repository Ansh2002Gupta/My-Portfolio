import SiteFooter from './components/layout/SiteFooter';
import SiteHeader from './components/layout/SiteHeader';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Recognition from './components/sections/Recognition';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import { useInitialHashScroll, useRevealOnScroll } from './lib/hooks';

/**
 * Single-page layout. Section order matches site.nav, which drives both the
 * navigation and the active-section tracking, so the two cannot drift apart.
 *
 * No section is clamped to the viewport height and there is no scroll
 * snapping — every section is as tall as its content needs to be.
 */
export default function App() {
  useRevealOnScroll();
  useInitialHashScroll();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Skills />
        <Recognition />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}

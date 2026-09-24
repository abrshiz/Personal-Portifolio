import { useEffect } from 'react';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { PROFILE } from './data';

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.section, .hero-copy, .hero-terminal, .stat-strip');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-in'));
      return;
    }
    nodes.forEach((node) => node.classList.add('reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="wrap footer-inner mono">
          <p>© {new Date().getFullYear()} {PROFILE.name}</p>
          <p>
            Built with React · Deployed on Vercel
          </p>
        </div>
      </footer>
    </>
  );
}

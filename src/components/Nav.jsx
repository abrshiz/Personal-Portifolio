import { useEffect, useState } from 'react';
import { PROFILE, SECTIONS } from '../data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand mono" onClick={close}>
          <span className="nav-brand-mark" aria-hidden="true">
            &gt;_
          </span>
          {PROFILE.handle}
        </a>

        <nav className="nav-links" aria-label="Sections">
          {SECTIONS.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link mono ${active === section.id ? 'is-active' : ''}`}
            >
              <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
              {section.label}
            </a>
          ))}
        </nav>

        <div className="nav-side">
          <a
            className="btn btn-sm btn-outline mono"
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <button
            type="button"
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="nav-panel"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="nav-panel" className={`nav-panel ${open ? 'is-open' : ''}`} {...(!open && { inert: true })}>
        {SECTIONS.map((section, index) => (
          <a key={section.id} href={`#${section.id}`} className="nav-panel-link mono" onClick={close}>
            <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
            {section.label}
          </a>
        ))}
        <a
          className="nav-panel-link mono"
          href={PROFILE.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <span className="nav-index">05</span>
          Resume
        </a>
      </div>
    </header>
  );
}

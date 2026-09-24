import React, { useCallback, useEffect, useRef, useState } from 'react';
import './index.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '/Doc/AbrhamWendesenTadesseCV.pdf', label: 'Resume', external: true },
  { href: '#contact', label: "Let's Talk", cta: true },
];

const SKILLS = [
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
];

const HIGHLIGHTS = [
  { icon: 'fas fa-code', label: 'Full-Stack Development' },
  { icon: 'fas fa-database', label: 'Database Design & Optimization' },
  { icon: 'fas fa-plug', label: 'REST API Development' },
  { icon: 'fas fa-mobile-alt', label: 'Responsive & Mobile-First' },
  { icon: 'fas fa-brain', label: 'Machine Learning Basics' },
];

const STATS = [
  { value: '11+', label: 'Projects shipped' },
  { value: '10+', label: 'Technologies' },
  { value: '3+', label: 'Years coding' },
];

const PROJECTS = [
  { name: 'AI Resume Analyzer', repo: 'abrshiz/AI-Resume-Analyzer', desc: 'AI-powered tool that parses and grades resumes automatically.', tags: ['Node.js', 'AI', 'Puter'], img: '/images/ScreenShoots/Ai%20Resume.png' },
  { name: 'Local Services Marketplace', repo: 'abrshiz/Local-Services-Marketplace', desc: 'Connect with local service providers in your area.', tags: ['React', 'Node.js', 'MongoDB'], img: '/images/ScreenShoots/Local%20Service%20Market.png' },
  { name: 'Restaurant Management', repo: 'yab147/Restaurant-Management-system', desc: 'End-to-end management system for restaurant operations.', tags: ['React', 'Node.js', 'MySQL'], img: '/images/ScreenShoots/Restaurant-Management-System.jpg' },
  { name: 'Heart Disease Prediction', repo: 'abrshiz/Heart-Disease-prediction', desc: 'ML model that predicts heart disease risk from patient data.', tags: ['Python', 'ML', 'Scikit-learn'], img: '/images/ScreenShoots/Heart%20Disease.png' },
  { name: 'Chaos Security Monkey', repo: 'Ethiopian-Cursor-Community/Chaos-Security-Monkey', desc: 'Security testing tool for checking infrastructure resilience.', tags: ['Security', 'Testing', 'DevOps'], img: '/images/ScreenShoots/Chaos%20Monkey.webp' },
  { name: 'WorkDesk', repo: 'abrshiz/WorkDesk', desc: 'A workspace and productivity management tool.', tags: ['React', 'Node.js'], img: '/images/ScreenShoots/WorkDEsk.png' },
  { name: 'Simple E-Commerce', repo: 'abrshiz/Simple-E-Commerce', desc: 'A clean, lightweight online shopping platform.', tags: ['JavaScript', 'CSS', 'HTML'], img: '/images/ScreenShoots/E-Commerce.jpg' },
  { name: 'Attendance Checker', repo: 'abrshiz/Attendance-Checker', desc: 'Streamlined tool for tracking student attendance.', tags: ['Java', 'MySQL'], img: '/images/ScreenShoots/Attendance.jpg' },
  { name: 'OpenGL Rolling Ball', repo: 'abrshiz/Rolling-Ball', desc: '3D graphics game built from scratch with OpenGL.', tags: ['C++', 'OpenGL', 'GLUT'], img: '/images/ScreenShoots/Open%20GL.webp' },
  { name: 'Real-time Chat App', repo: 'abrshiz/Java-Oriented-Socket-Chat-App', desc: 'Multi-client chat system with under 20ms local latency.', tags: ['Java', 'Sockets', 'Threading'], img: '/images/ScreenShoots/chatApp.avif' },
  { name: 'Hospital Management', repo: 'wegen-jr/java-project', desc: 'Full hospital suite — patients, scheduling, billing.', tags: ['Java', 'Swing', 'MySQL'], img: '/images/ScreenShoots/HMS.webp' },
];

const SOCIALS = [
  { href: 'https://github.com/abrshiz', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://linkedin.com/in/abrshiz', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://t.me/abrshiz', icon: 'fab fa-telegram-plane', label: 'Telegram' },
  { href: 'mailto:abrshiz@yahoo.com', icon: 'fas fa-envelope', label: 'Email' },
];

const CONTACT = [
  { icon: 'fas fa-envelope', text: 'abrshiz@yahoo.com', href: 'mailto:abrshiz@yahoo.com' },
  { icon: 'fas fa-phone', text: '+251 987 075 109', href: 'tel:+251987075109' },
  { icon: 'fas fa-map-marker-alt', text: 'Dire Dawa, Ethiopia' },
  { icon: 'fas fa-clock', text: 'EAT (UTC+3) · Remote friendly', mono: true },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Tilt({ as: Tag = 'div', strength = 9, lift = 10, className = '', children, ...rest }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${(-y * strength).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * strength).toFixed(2)}deg`);
    el.style.setProperty('--tz', `${lift}px`);
    el.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--tz', '0px');
  };

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`.trim()}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      <div className="tilt-inner">{children}</div>
    </Tag>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (prefersReducedMotion()) {
      nodes.forEach((node) => node.classList.add('is-revealed'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), []);
  return [theme, toggle];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, toggleTheme] = useTheme();
  const sceneRef = useRef(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((open) => !open), []);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle('is-scrolled', window.scrollY > 24);
      const progress = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => setActiveSection(entry.target.id));
      },
      { threshold: 0.3, rootMargin: '-20% 0px -40% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || prefersReducedMotion()) return;
    const handleMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      scene.style.setProperty('--px', x.toFixed(3));
      scene.style.setProperty('--py', y.toFixed(3));
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  const renderNavLink = (link, className) => {
    const isActive = !link.external && activeSection === link.href.slice(1);
    const props = {
      key: link.href,
      href: link.href,
      className: [className, link.cta && 'nav-cta', isActive && 'is-active'].filter(Boolean).join(' '),
      onClick: closeMenu,
      ...(link.external && { target: '_blank', rel: 'noopener noreferrer' }),
    };
    return (
      <a {...props}>
        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop-grid" />
        <div className="backdrop-orb backdrop-orb-a" />
        <div className="backdrop-orb backdrop-orb-b" />
      </div>

      <header className="navbar">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-cube" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            abrshiz
          </a>

          <div className="nav-links">{NAV_LINKS.map((link) => renderNavLink(link, 'nav-link'))}</div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`menu-scrim ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        {...(!isMenuOpen && { inert: true })}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => renderNavLink(link, 'mobile-link'))}
        </nav>
      </aside>

      <main>
        <section className="hero" id="home">
          <div className="shell hero-layout" ref={sceneRef}>
            <div className="hero-copy">
              <p className="eyebrow" data-reveal>
                <span className="pulse-dot" aria-hidden="true" />
                Open to opportunities
              </p>
              <h1 className="hero-title" data-reveal>
                <span className="hero-line">I build things</span>
                <span className="hero-line">
                  for the <span className="gradient-word">web</span>.
                </span>
              </h1>
              <p className="hero-desc" data-reveal>
                Hey, I&apos;m Suhel — a full-stack developer from Dire Dawa. I like turning ideas into
                real, working software. Currently focused on React, Node, and Java.
              </p>
              <div className="hero-actions" data-reveal>
                <a href="#projects" className="btn btn-primary">
                  See my work
                  <i className="fas fa-arrow-down" aria-hidden="true" />
                </a>
                <a
                  href="/Doc/AbrhamWendesenTadesseCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <i className="fas fa-file-alt" aria-hidden="true" />
                  View Resume
                </a>
              </div>
              <div className="stat-row" data-reveal>
                {STATS.map((stat) => (
                  <Tilt key={stat.label} className="stat-card" strength={12} lift={8}>
                    <h3 className="mono">{stat.value}</h3>
                    <p>{stat.label}</p>
                  </Tilt>
                ))}
              </div>
            </div>

            <div className="hero-stage" data-reveal>
              <Tilt className="portrait" strength={14} lift={18}>
                <div className="portrait-frame">
                  <img
                    src="/images/photo_2025-12-29_12-17-17.jpg"
                    alt="Abrham Wendesen Tadesse"
                    width={480}
                    height={560}
                    decoding="async"
                    fetchPriority="high"
                  />
                  <span className="portrait-sheen" aria-hidden="true" />
                </div>
                <span className="float-chip float-chip-a mono" aria-hidden="true">
                  <i className="devicon-react-original colored" /> React
                </span>
                <span className="float-chip float-chip-b mono" aria-hidden="true">
                  <i className="devicon-java-plain colored" /> Java
                </span>
                <span className="float-chip float-chip-c mono" aria-hidden="true">
                  <i className="devicon-nodejs-plain colored" /> Node
                </span>
              </Tilt>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="shell">
            <header className="section-head" data-reveal>
              <p className="section-label mono">01 — About</p>
              <h2 className="section-title">A bit about me</h2>
            </header>
            <div className="about-layout">
              <div className="about-text" data-reveal>
                <p>
                  I got into programming because I wanted to understand how things work under the hood.
                  That curiosity turned into a real passion for building — from backend APIs and database
                  systems to clean, responsive frontends.
                </p>
                <p>
                  I care about writing code that&apos;s easy to read and maintain. Whether it&apos;s a solo
                  project or a team collaboration, I try to keep things simple, tested, and well-documented.
                </p>
                <p>
                  Outside of coding, I&apos;m usually exploring new tools, mentoring other devs, or just
                  enjoying life in Dire Dawa.
                </p>
              </div>
              <div className="about-cards" data-reveal>
                {HIGHLIGHTS.map((item) => (
                  <Tilt key={item.label} className="highlight-card" strength={8} lift={6}>
                    <span className="highlight-icon">
                      <i className={item.icon} aria-hidden="true" />
                    </span>
                    <span>{item.label}</span>
                  </Tilt>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="shell">
            <header className="section-head" data-reveal>
              <p className="section-label mono">02 — Skills</p>
              <h2 className="section-title">What I work with</h2>
            </header>
            <div className="skills-grid" data-reveal>
              {SKILLS.map((skill) => (
                <Tilt key={skill.name} className="skill-card" strength={16} lift={14}>
                  <i className={skill.icon} aria-hidden="true" />
                  <span className="mono">{skill.name}</span>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="shell">
            <header className="section-head" data-reveal>
              <p className="section-label mono">03 — Projects</p>
              <h2 className="section-title">Things I&apos;ve built</h2>
            </header>
            <div className="projects-grid">
              {PROJECTS.map((project) => (
                <Tilt
                  key={project.repo}
                  as="article"
                  className="project-card"
                  strength={7}
                  lift={12}
                  data-reveal
                >
                  <div className="project-thumb">
                    <img
                      src={project.img}
                      alt={project.name}
                      width={640}
                      height={360}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="project-body">
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="tag mono" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://github.com/${project.repo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github" aria-hidden="true" />
                      View on GitHub
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="shell">
          <Tilt className="contact-card" strength={4} lift={6} data-reveal>
            <div className="contact-intro">
              <p className="section-label mono">04 — Contact</p>
              <h2 className="contact-title">Let&apos;s work together.</h2>
              <p className="contact-desc">
                Got a project in mind or just want to chat? I&apos;m always open to new opportunities and
                collaborations.
              </p>
              <div className="social-row">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-icon"
                    title={social.label}
                    aria-label={social.label}
                    {...(social.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noreferrer',
                    })}
                  >
                    <i className={social.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <ul className="contact-list">
              {CONTACT.map((item) => (
                <li key={item.text}>
                  <i className={item.icon} aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href}>{item.text}</a>
                  ) : (
                    <span className={item.mono ? 'mono' : undefined}>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </Tilt>

          <div className="footer-bottom">
            <p className="mono">© {new Date().getFullYear()} Abrham Wendesen Tadesse</p>
            <p className="mono">Built with React</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

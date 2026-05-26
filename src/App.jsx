import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain' }
  ];

  const projects = [
    { name: "AI Resume Analyzer", repo: "abrshiz/AI-Resume-Analyzer", desc: "AI-powered tool that parses and grades resumes automatically.", tags: ["Node.js", "AI", "Puter"], img: "/images/ScreenShoots/Ai%20Resume.png" },
    { name: "Local Services Marketplace", repo: "abrshiz/Local-Services-Marketplace", desc: "Connect with local service providers in your area.", tags: ["React", "Node.js", "MongoDB"], img: "/images/ScreenShoots/Local%20Service%20Market.png" },
    { name: "Restaurant Management", repo: "yab147/Restaurant-Management-system", desc: "End-to-end management system for restaurant operations.", tags: ["React", "Node.js", "MySQL"], img: "/images/ScreenShoots/Restaurant-Management-System.jpg" },
    { name: "Heart Disease Prediction", repo: "abrshiz/Heart-Disease-prediction", desc: "ML model that predicts heart disease risk from patient data.", tags: ["Python", "ML", "Scikit-learn"], img: "/images/ScreenShoots/Heart%20Disease.png" },
    { name: "Chaos Security Monkey", repo: "Ethiopian-Cursor-Community/Chaos-Security-Monkey", desc: "Security testing tool for checking infrastructure resilience.", tags: ["Security", "Testing", "DevOps"], img: "/images/ScreenShoots/Chaos%20Monkey.webp" },
    { name: "WorkDesk", repo: "abrshiz/WorkDesk", desc: "A workspace and productivity management tool.", tags: ["React", "Node.js"], img: "/images/ScreenShoots/WorkDEsk.png" },
    { name: "Simple E-Commerce", repo: "abrshiz/Simple-E-Commerce", desc: "A clean, lightweight online shopping platform.", tags: ["JavaScript", "CSS", "HTML"], img: "/images/ScreenShoots/E-Commerce.jpg" },
    { name: "Attendance Checker", repo: "abrshiz/Attendance-Checker", desc: "Streamlined tool for tracking student attendance.", tags: ["Java", "MySQL"], img: "/images/ScreenShoots/Attendance.jpg" },
    { name: "OpenGL Rolling Ball", repo: "abrshiz/Rolling-Ball", desc: "3D graphics game built from scratch with OpenGL.", tags: ["C++", "OpenGL", "GLUT"], img: "/images/ScreenShoots/Open%20GL.webp" },
    { name: "Real-time Chat App", repo: "abrshiz/Java-Oriented-Socket-Chat-App", desc: "Multi-client chat system with under 20ms local latency.", tags: ["Java", "Sockets", "Threading"], img: "/images/ScreenShoots/chatApp.avif" },
    { name: "Hospital Management", repo: "wegen-jr/java-project", desc: "Full hospital suite — patients, scheduling, billing.", tags: ["Java", "Swing", "MySQL"], img: "/images/ScreenShoots/HMS.webp" }
  ];

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="nav-logo">abrshiz<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="/Doc/AbrhamWendesenTadesseCV.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="#contact" className="nav-cta">Let's Talk</a>
          </div>
          <button className="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Open to opportunities
            </div>
            <h1>
              I build things<br />
              for the <span className="accent">web</span>.
            </h1>
            <p className="hero-desc">
              Hey, I'm Abrham — a full-stack developer from Dire Dawa. I like turning ideas into real,
              working software. Currently focused on React, Node, and Java.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-arrow-down"></i> See my work
              </a>
              <a href="/Doc/AbrhamWendesenTadesseCV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <i className="fas fa-file-alt"></i> View Resume
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>11+</h3>
                <p>Projects shipped</p>
              </div>
              <div className="hero-stat">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
              <div className="hero-stat">
                <h3>3+</h3>
                <p>Years coding</p>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/images/photo_2025-12-29_12-17-17.jpg" alt="Abrham Wendesen Tadesse" />
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="section" id="about">
        <div className="container">
          <p className="section-label">About</p>
          <h2 className="section-title">A bit about me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I got into programming because I wanted to understand how things work under the hood.
                That curiosity turned into a real passion for building — from backend APIs and database
                systems to clean, responsive frontends.
              </p>
              <p>
                I care about writing code that's easy to read and maintain. Whether it's a solo project
                or a team collaboration, I try to keep things simple, tested, and well-documented.
              </p>
              <p>
                Outside of coding, I'm usually exploring new tools, mentoring other devs, or just
                enjoying life in Dire Dawa.
              </p>
            </div>
            <div className="about-highlights">
              <div className="about-highlight">
                <i className="fas fa-code"></i>
                <span>Full-Stack Development</span>
              </div>
              <div className="about-highlight">
                <i className="fas fa-database"></i>
                <span>Database Design & Optimization</span>
              </div>
              <div className="about-highlight">
                <i className="fas fa-plug"></i>
                <span>REST API Development</span>
              </div>
              <div className="about-highlight">
                <i className="fas fa-mobile-alt"></i>
                <span>Responsive & Mobile-First</span>
              </div>
              <div className="about-highlight">
                <i className="fas fa-brain"></i>
                <span>Machine Learning Basics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section className="section" id="skills">
        <div className="container">
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-card">
                <i className={s.icon}></i>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section className="section" id="projects">
        <div className="container">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <div className="project-card" key={i}>
                <div className="project-thumb">
                  <img src={proj.img} alt={proj.name} />
                </div>
                <div className="project-body">
                  <h3>{proj.name}</h3>
                  <p>{proj.desc}</p>
                  <div className="project-tags">
                    {proj.tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={`https://github.com/${proj.repo}`} target="_blank" rel="noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View on GitHub <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer / Contact ─── */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h2 className="footer-heading">Let's work together.</h2>
              <p className="footer-desc">
                Got a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
              </p>
              <div className="social-row">
                <a href="https://github.com/abrshiz" className="social-icon" target="_blank" rel="noreferrer" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/abrshiz" className="social-icon" target="_blank" rel="noreferrer" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://t.me/abrshiz" className="social-icon" target="_blank" rel="noreferrer" title="Telegram">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="mailto:abrshiz@yahoo.com" className="social-icon" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:abrshiz@yahoo.com">abrshiz@yahoo.com</a>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+251987075109">+251 987 075 109</a>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Dire Dawa, Ethiopia</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-clock"></i>
                <span>EAT (UTC+3) · Remote friendly</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Abrham Wendesen Tadesse</p>
            <p>Built with React</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

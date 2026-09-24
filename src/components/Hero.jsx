import { PROFILE, SOCIALS, STATS } from '../data';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="status mono">
            <span className="status-dot" aria-hidden="true" />
            {PROFILE.status}
          </p>

          <p className="hero-kicker mono">{PROFILE.role}</p>
          <h1 className="hero-name">{PROFILE.name}</h1>
          <p className="hero-summary">{PROFILE.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="#work">
              View work
            </a>
            <a className="btn btn-outline" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-arrow-down" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <ul className="hero-socials">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="icon-link"
                  aria-label={social.label}
                  title={social.label}
                  {...(social.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-terminal">
          <Terminal />
        </div>
      </div>

      <div className="wrap">
        <dl className="stat-strip">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="mono">{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
          <div className="stat stat-text">
            <dt className="mono">{PROFILE.location}</dt>
            <dd>{PROFILE.timezone}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

import { FOCUS_AREAS, PROFILE } from '../data';
import SectionHead from './SectionHead';
import Tilt from './Tilt';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead index="01" label="About" title="Curious by default, methodical by habit" />

        <div className="about-grid">
          <div className="about-aside">
            <Tilt className="portrait-frame" max={14} restX={7} restY={-10}>
              <figure className="portrait">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  width={420}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
                <span className="glare" aria-hidden="true" />
              </figure>
            </Tilt>
            <ul className="meta-list mono">
              <li>
                <span>Name</span>
                {PROFILE.name}
              </li>
              <li>
                <span>Role</span>
                {PROFILE.role}
              </li>
              <li>
                <span>Based in</span>
                {PROFILE.location}
              </li>
              <li>
                <span>Alias</span>
                {PROFILE.alias}
              </li>
            </ul>
          </div>

          <div className="about-main">
            <div className="prose">
              {PROFILE.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <ul className="focus-list">
              {FOCUS_AREAS.map((area) => (
                <li key={area.title}>
                  <span className="focus-icon" aria-hidden="true">
                    <i className={area.icon} />
                  </span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

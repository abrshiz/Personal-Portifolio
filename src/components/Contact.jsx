import { CONTACT, PROFILE, SOCIALS } from '../data';
import SectionHead from './SectionHead';
import Tilt from './Tilt';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead
          index="04"
          label="Contact"
          title="Let's work together"
          note="Got a project in mind or just want to chat? I'm always open to new opportunities and collaborations."
        />

        <div className="contact-grid">
          <div className="contact-cta">
            <a className="btn btn-solid btn-lg" href="mailto:abrshiz@yahoo.com">
              <i className="fas fa-envelope" aria-hidden="true" />
              Send me an email
            </a>
            <p className="contact-hint mono">
              Usually replies within a day · {PROFILE.timezone}
            </p>
            <ul className="social-list">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="social-row mono"
                    {...(social.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                  >
                    <i className={social.icon} aria-hidden="true" />
                    <span>{social.label}</span>
                    <span className="social-handle">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Tilt className="contact-panel" max={10} restX={6} restY={8}>
            <ul className="contact-details">
              {CONTACT.map((item) => (
                <li key={item.key}>
                  <span className="contact-label mono">{item.label}</span>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

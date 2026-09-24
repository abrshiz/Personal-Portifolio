import { PROJECTS } from '../data';
import SectionHead from './SectionHead';

const featured = PROJECTS.filter((project) => project.featured);
const rest = PROJECTS.filter((project) => !project.featured);

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead
          index="03"
          label="Work"
          title="Selected projects"
          note={`${PROJECTS.length} shipped repositories — here are the ones worth a closer look.`}
        />

        <div className="featured">
          {featured.map((project, index) => (
            <article className="feature" key={project.repo}>
              <a
                className="feature-media"
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={project.img}
                  alt=""
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <div className="feature-body">
                <p className="feature-index mono">{String(index + 1).padStart(2, '0')} / Featured</p>
                <h3>{project.name}</h3>
                <p className="feature-desc">{project.detail || project.desc}</p>
                <ul className="tag-row">
                  {project.tags.map((tag) => (
                    <li className="tag mono" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  className="text-link mono"
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                  View source
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <h3 className="subhead mono">More projects</h3>
        <ul className="repo-list">
          {rest.map((project, index) => (
            <li key={project.repo}>
              <a href={`https://github.com/${project.repo}`} target="_blank" rel="noreferrer">
                <span className="repo-index mono">{String(index + 4).padStart(2, '0')}</span>
                <span className="repo-main">
                  <span className="repo-name">{project.name}</span>
                  <span className="repo-desc">{project.desc}</span>
                </span>
                <span className="repo-tags mono">{project.tags.join(' · ')}</span>
                <i className="fas fa-arrow-up-right-from-square repo-icon" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

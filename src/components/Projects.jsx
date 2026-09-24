import { PROJECTS } from '../data';
import SectionHead from './SectionHead';
import Tilt from './Tilt';

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
          note={`${PROJECTS.length} shipped repositories — each one with a screenshot of the actual product.`}
        />

        <div className="featured">
          {featured.map((project, index) => (
            <article className="feature" key={project.repo}>
              <Tilt className="feature-frame" max={14} restX={index % 2 ? 7 : 8} restY={index % 2 ? 10 : -10}>
                <a
                  className="feature-media"
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={project.img}
                    alt={`${project.name} screenshot`}
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="glare" aria-hidden="true" />
                </a>
              </Tilt>

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
        <div className="work-grid">
          {rest.map((project, index) => (
            <Tilt
              as="article"
              className="work-card"
              max={13}
              restX={6}
              restY={index % 2 ? 8 : -8}
              key={project.repo}
            >
              <a href={`https://github.com/${project.repo}`} target="_blank" rel="noreferrer">
                <span className="work-media">
                  <img
                    src={project.img}
                    alt={`${project.name} screenshot`}
                    width={560}
                    height={340}
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className="work-body">
                  <span className="work-top mono">
                    <span className="work-index">{String(index + 4).padStart(2, '0')}</span>
                    <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                  </span>
                  <span className="work-name">{project.name}</span>
                  <span className="work-desc">{project.desc}</span>
                  <span className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag mono" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>

                <span className="glare" aria-hidden="true" />
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

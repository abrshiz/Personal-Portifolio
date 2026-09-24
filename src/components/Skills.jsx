import { SKILL_GROUPS } from '../data';
import SectionHead from './SectionHead';
import Tilt from './Tilt';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead
          index="02"
          label="Stack"
          title="What I build with"
          note="The tools I reach for most — picked for the job, not the hype."
        />

        <div className="stack">
          {SKILL_GROUPS.map((group) => (
            <div className="stack-row" key={group.title}>
              <h3 className="stack-title mono">{group.title}</h3>
              <ul className="stack-items">
                {group.items.map((item, index) => (
                  <Tilt as="li" className="chip" max={18} restX={8} restY={index % 2 ? 10 : -10} key={item.name}>
                    <span className="chip-inner">
                      <i className={`${item.icon} colored`} aria-hidden="true" />
                      <span className="mono">{item.name}</span>
                    </span>
                  </Tilt>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

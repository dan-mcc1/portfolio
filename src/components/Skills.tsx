import { skills } from '../data/profile'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="border-b px-5 py-20 sm:px-6" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-7 font-mono text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Skills
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div>
                <div className="mb-3 text-[0.925rem] font-semibold" style={{ color: 'var(--text)' }}>
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

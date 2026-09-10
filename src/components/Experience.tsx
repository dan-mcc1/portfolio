import { experience } from '../data/profile'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="border-b px-5 py-20 sm:px-6" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-7 font-mono text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Experience
          </h2>
        </Reveal>

        <div className="flex flex-col gap-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <div>
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-[1.1rem] font-bold">{job.company}</div>
                    <div className="mt-0.5 text-[0.95rem] font-medium" style={{ color: 'var(--accent)' }}>
                      {job.role}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="text-[0.9rem] font-medium" style={{ color: 'var(--muted)' }}>
                      {job.date}
                    </div>
                    <div className="text-[0.9rem]" style={{ color: 'var(--muted)' }}>
                      {job.location}
                    </div>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="bullet-item max-w-3xl text-[0.975rem] leading-[1.75]"
                      style={{ color: 'var(--muted)' }}
                      dangerouslySetInnerHTML={{ __html: bullet }}
                    />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

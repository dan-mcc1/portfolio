import { education, profile } from '../data/profile'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="border-b px-5 py-20 sm:px-6" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-7 font-mono text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            About Me
          </h2>
        </Reveal>

        {profile.about.map((paragraph, i) => (
          <Reveal key={i} delay={i * 60}>
            <p className="mb-4 max-w-3xl text-[1.075rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>
              {paragraph}
            </p>
          </Reveal>
        ))}

        <Reveal delay={180}>
          <div className="mt-8 flex flex-col gap-3">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-wrap items-baseline justify-between gap-4 rounded-lg border px-5 py-4"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <div className="text-base font-semibold">{edu.degree}</div>
                  <div className="text-[0.9rem]" style={{ color: 'var(--muted)' }}>
                    {edu.school}
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-[0.9rem] font-medium" style={{ color: 'var(--muted)' }}>
                    {edu.date}
                  </div>
                  {edu.gpa && (
                    <div className="mt-0.5 text-[0.85rem] font-semibold" style={{ color: 'var(--accent)' }}>
                      {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="border-b px-5 py-20 sm:px-6" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-7 font-mono text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Projects
          </h2>
        </Reveal>

        <div className="flex flex-col gap-5">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mb-4 mt-10 text-[0.7rem] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            Also built
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

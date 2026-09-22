import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'
import { ProjectGallery } from './ProjectGallery'
import { ChevronDownIcon, ExternalLinkIcon, GitHubIcon, LinkIcon, LockIcon } from './icons'

function withInlineMarkup(text: string) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="inline-code">
          {part.slice(1, -1)}
        </code>
      )
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold" style={{ color: 'var(--text)' }}>
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

const TONE: Record<Project['accent'], string> = {
  blue: 'var(--tone-blue)',
  violet: 'var(--tone-violet)',
  emerald: 'var(--tone-emerald)',
  amber: 'var(--tone-amber)',
  rose: 'var(--tone-rose)',
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.slug}-details`

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === `#${project.slug}`) setOpen(true)
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [project.slug])

  return (
    <div
      id={project.slug}
      className="card scroll-mt-20 overflow-hidden"
      style={{ '--card-accent': TONE[project.accent] } as CSSProperties}
    >
      <div className="p-7 sm:p-9">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <h3 className="group text-2xl font-bold">
            <a href={`#${project.slug}`} className="inline-flex items-center gap-1.5" style={{ color: 'inherit', textDecoration: 'none' }}>
              {project.name}
              <LinkIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-60" />
            </a>
          </h3>
          <span className="whitespace-nowrap text-[0.875rem] font-medium" style={{ color: 'var(--muted)' }}>
            {project.period}
          </span>
        </div>

        <span className="badge mb-4">{project.badge}</span>

        <p className="mb-5 max-w-3xl text-[1.05rem] leading-[1.75]" style={{ color: 'var(--muted)' }}>
          {project.tagline}
        </p>

        <ProjectGallery images={project.images} projectName={project.name} />

        <p className="proof mb-5 max-w-3xl text-[1.02rem] leading-[1.7]">{project.proof}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span key={m} className="metric">
              {m}
            </span>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-1 text-[0.9rem] font-semibold"
            style={{ color: 'var(--text)' }}
          >
            {open ? 'Hide' : 'Technical'} details
            <ChevronDownIcon
              className="h-3.5 w-3.5 transition-transform duration-200"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link) =>
              link.kind === 'private' ? (
                <span
                  key={link.label}
                  className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium"
                  style={{ color: 'var(--muted)' }}
                >
                  <LockIcon className="h-3.5 w-3.5" /> {link.label}
                </span>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noopener" className="link-accent inline-flex items-center gap-1.5 text-[0.9rem]">
                  {link.kind === 'github' ? (
                    <GitHubIcon className="h-3.5 w-3.5" />
                  ) : (
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  )}
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div
            className="border-t px-7 py-7 sm:px-9"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-subtle)' }}
          >
            <p className="mb-4 max-w-3xl text-[1.05rem] leading-[1.75]" style={{ color: 'var(--muted)' }}>
              {project.description}
            </p>
            <ul className="flex flex-col gap-2">
              {project.highlights.map((h) => (
                <li key={h} className="bullet-item max-w-3xl text-[1rem] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                  {withInlineMarkup(h)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

import { profile } from '../data/profile'
import { FileTextIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export function Hero() {
  return (
    <header className="px-5 pb-16 pt-24 text-center sm:px-6 sm:pt-28">
      <p
        className="mb-4 font-mono text-base"
        style={{ color: 'var(--accent)' }}
      >
        hi, I&apos;m
      </p>
      <h1 className="mb-3 text-5xl font-extrabold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mb-2 text-xl" style={{ color: 'var(--muted)' }}>
        {profile.role}
      </p>
      <p className="mx-auto mb-9 max-w-2xl text-lg sm:text-xl" style={{ color: 'var(--muted)' }}>
        {profile.tagline}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <a href={profile.resume} target="_blank" rel="noopener" className="hero-link hero-link-primary">
          <FileTextIcon className="h-3.5 w-3.5" /> Resume
        </a>
        <a href={`mailto:${profile.email}`} className="hero-link">
          <MailIcon className="h-3.5 w-3.5" /> {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noopener" className="hero-link">
          <GitHubIcon className="h-3.5 w-3.5" /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener" className="hero-link">
          <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn
        </a>
      </div>
    </header>
  )
}

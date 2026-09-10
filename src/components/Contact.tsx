import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-7 font-mono text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Contact
          </h2>
          <p className="mb-8 max-w-2xl text-[1.075rem] leading-[1.8]" style={{ color: 'var(--muted)' }}>
            Feel free to reach out — I&apos;d love to connect. You can also{' '}
            <a href={profile.resume} target="_blank" rel="noopener" className="link-accent">
              view my resume
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-2.5">
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
        </Reveal>
      </div>
    </section>
  )
}

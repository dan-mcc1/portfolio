export type ProjectLink = {
  label: string
  href: string
  kind: 'live' | 'github' | 'private'
}

export type ProjectImage = {
  src: string
  alt: string
  caption?: string
}

export type Project = {
  slug: string
  name: string
  tagline: string
  period: string
  badge: string
  proof: string
  description: string
  highlights: string[]
  metrics: string[]
  tags: string[]
  images: ProjectImage[]
  links: ProjectLink[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'mccs-capstone',
    name: 'MCCS Sponsored Graduate Capstone',
    tagline: 'Team-leading a graduate capstone for the U.S. Marine Corps Community Services.',
    period: 'Aug 2026 – Present',
    badge: 'Capstone · team lead',
    proof:
      'Leading the team on an externally sponsored capstone — real stakeholders, real requirements, real delivery date.',
    description:
      'A graduate capstone sponsored by U.S. Marine Corps Community Services (MCCS): an augmented reality application that delivers real-time information to help consumers evaluate products while shopping.',
    highlights: [
      'Leading a team through requirements gathering, design, and delivery for an external sponsor',
      'Augmented reality application surfacing real-time product information at the point of decision',
    ],
    metrics: ['Sponsored by U.S. Marine Corps Community Services', 'Team lead'],
    tags: ['Augmented Reality', 'Team Leadership', 'Capstone'],
    images: [],
    links: [],
    featured: true,
  },
  {
    slug: 'releaseradar',
    name: 'Release Radar',
    tagline: 'A full-stack watchlist app for tracking movies & TV — live in production.',
    period: 'Oct 2025 – Present',
    badge: 'Live product',
    proof:
      'Shipped end to end and running in production: Firebase auth, Stripe subscriptions, a social graph, and five background jobs keeping three external APIs in sync. Its background-work demands are what led me to build durable-queue.',
    description:
      'Track what you’re watching, follow friends, and never miss a release. ReleaseRadar combines watch tracking at the season/episode level with social features, a release calendar, and email alerts, all backed by a FastAPI service layer running five scheduled background jobs.',
    highlights: [
      'React + TypeScript + Vite frontend with TanStack Query for server-state caching and persistence',
      'FastAPI + SQLAlchemy backend on PostgreSQL (Neon), with a router-per-feature / service-layer architecture',
      'Firebase auth, Stripe subscription billing, and rate limiting via SlowAPI',
      'Aggregates TMDb, OMDb, and TVMaze data, cached in Postgres to cut external API calls by 30% and dashboard load time from ~10s to under 1s',
      'Five async background loops: cache pruning, episode refresh, daily email digests, premiere alerts, and streaming-availability checks',
      'Social layer: friend graph, activity feed, reviews, shareable shelves, and an admin moderation panel',
    ],
    metrics: ['219 commits', 'Live at releaseradar.co', '~10s → <1s dashboard load', '30% fewer API calls'],
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Stripe', 'Firebase'],
    images: [
      { src: '/shots/release-radar-calendar.webp', alt: 'Release Radar main calendar', caption: 'Personalized calendar' },
      { src: '/shots/release-radar-discover.webp', alt: 'Release Radar discover page', caption: 'Discover new shows and movies' },
      {
        src: '/shots/release-radar-box-office.webp',
        alt: 'Release Radar box office page',
        caption: 'View monthly, yearly, and all-time box office numbers',
      },
      { src: '/shots/release-radar-landing.webp', alt: 'Release Radar landing page', caption: 'Landing page' },
      { src: '/shots/release-radar-sign-in.webp', alt: 'Release Radar sign in page', caption: 'Sign in page' },
    ],
    links: [
      { label: 'releaseradar.co', href: 'https://releaseradar.co', kind: 'live' },
      { label: 'Source', href: 'https://github.com/dan-mcc1/ReleaseRadar', kind: 'github' },
    ],
    featured: true,
  },
  {
    slug: 'durable-queue',
    name: 'durable-queue',
    tagline: 'A Postgres-only job queue with exactly-once semantics, proven by killing workers mid-job.',
    period: 'Sep 2026',
    badge: 'Systems project',
    proof:
      'Chaos tests kill real worker subprocesses mid-job at random. Transactional tasks duplicated 0 effects out of 24 runs, where the external-effect path duplicated 4–6 — the measured difference the design actually buys.',
    description:
      'A standalone Python library that turns a Postgres table into a durable job runner — no Redis, no Kafka, no broker. Because the queue is a table in the same database, enqueueing a job and committing business data happen in one transaction, which makes tasks that write to Postgres genuinely exactly-once instead of merely retried-until-probably-fine.',
    highlights: [
      'Atomic job claiming via `FOR UPDATE SKIP LOCKED` so concurrent workers never double-claim',
      'Crash recovery through leases, heartbeats, and a bounded skip-locked reaper, with a ceiling so a hung task can’t hold its lease forever',
      'Three-layer idempotency: enqueue-time dedup, an effects ledger, and true transactional atomicity for tasks that take a `conn` parameter',
      'A profiling-driven optimisation trail took 4-worker throughput from 162 to 4,452 jobs/sec — 27x, every commit still fsynced',
      '`LISTEN/NOTIFY` wakes idle workers on enqueue, cutting p50 enqueue-to-start latency from 719ms to 6.9ms',
      'Ends up faster than hand-written one-at-a-time SQL (281 vs 160 jobs/sec) because batch claiming amortises a round trip per job',
      'Measured that Postgres group-commit already makes durability cheap under load: the fsync cost falls from 49% to 9% between 4 and 64 jobs in flight, so the safe default stays on',
      'Diagnosed a hard stall (63 backends parked on `LWLock:LockManager`) down to three stacked causes — an incremental-sort blowup in the claim query, an unbounded reaper, and a 30,000-notification stampede on bulk enqueue',
      'Adding `id` to the pending index turned a 5.18ms sort of the whole backlog into a 0.052ms index-ordered scan; `enqueue_many` took 30k jobs from ~30s to 0.35s',
      'Recurring schedules via `pg_try_advisory_lock` leader election; a CLI for `ls / show / retry / dead / stats`',
    ],
    metrics: ['0/24 duplicated effects', '27x from profiling', '6,098 jobs/sec fully durable', 'p50 719ms → 6.9ms'],
    tags: ['Python', 'PostgreSQL', 'Concurrency', 'Systems Design'],
    images: [],
    links: [{ label: 'Source', href: 'https://github.com/dan-mcc1/durable-queue', kind: 'github' }],
    featured: true,
  },
  {
    slug: 'ai-xss-vulnerability',
    name: 'AI XSS Vulnerability Analysis',
    tagline: 'Does AI-generated code protect against XSS? An automated pipeline finds out.',
    period: 'Jan 2026 – May 2026',
    badge: 'Security research',
    proof:
      'Runs LLM-generated code in isolated Docker environments, injects XSS payloads, and logs every result to SQL for cross-model comparison.',
    description:
      'A comparative security study of LLM-generated code. The pipeline prompts multiple AI tools with the same web-development tasks, spins up isolated Docker environments to run the generated code, injects XSS payloads, and runs static (and optional dynamic) analysis on the result — logging everything to SQL for a generated HTML report with pandas/matplotlib charts.',
    highlights: [
      'Compares code generated by ChatGPT, Claude, and Gemini against the same prompt set',
      'Dockerized, isolated execution environments per generated sample',
      'Static + dynamic XSS analysis with results persisted to SQL',
      'CLI pipeline: `collect → analyze → report`, plus a manual/batch input mode for hand-collected samples',
      'Auto-generated HTML report with pandas/matplotlib visualizations',
    ],
    metrics: ['3 AI tools compared', 'Dockerized test harness'],
    tags: ['Python', 'Docker', 'Security Research', 'SQL'],
    images: [],
    links: [{ label: 'Source', href: 'https://github.com/dan-mcc1/ai-xss-vulnerability', kind: 'github' }],
    featured: false,
  },
  {
    slug: 'hokie-scheduler-ii',
    name: 'Hokie Scheduler II',
    tagline: 'Reviving Virginia Tech’s discontinued course-scheduling tool as a CS capstone.',
    period: 'Aug 2025 – Dec 2025',
    badge: 'Capstone · team project',
    proof:
      'Load-tested to 100+ concurrent users against 1,000+ course records ingested from multiple upstream sources.',
    description:
      'When the university discontinued the original Hokie Scheduler, students were left piecing together schedules from outdated timetables. This capstone team project rebuilt it: a course-scheduling platform that ingests timetable data from multiple sources and lets students browse courses and generate conflict-free schedules.',
    highlights: [
      'React + Tailwind frontend for browsing, filtering, and building schedules',
      'RESTful API in Express + TypeScript, load-tested for 100+ concurrent users',
      'Dockerized scraper service ingesting 1,000+ course records from multiple sources',
      'Separate notifier service and PostgreSQL data layer',
    ],
    metrics: ['1,000+ records ingested', '100+ concurrent users', '131 commits'],
    tags: ['React', 'TypeScript', 'Express', 'Docker', 'PostgreSQL'],
    images: [],
    links: [{ label: 'Private repo (VT GitLab)', href: '', kind: 'private' }],
    featured: false,
  },
]

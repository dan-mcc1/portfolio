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
    slug: `tollgate`,
    name: `Tollgate`,
    tagline: `A multi-tenant gateway for model API traffic, where every security claim is measured against the baseline it has to beat.`,
    period: `Sep 2026`,
    badge: `Live on AWS`,
    proof: `A 1,200-case benchmark scores every detector against the regex baseline it has to beat. The classifier raises prompt-injection recall from 0.374 to 0.666 at higher precision — and flags 23.2% of benign security-related prompts, the false-positive rate most filters never publish.`,
    description: `A multi-tenant reverse proxy that sits between an application and a model API. It authenticates tenants, enforces per-tenant rate limits and hard spend budgets, caches what it can safely cache, inspects traffic in both directions, and records every token — while staying byte-compatible with the provider's API, so adoption is a one-line base URL change and the official SDK keeps working.`,
    highlights: [
      `Deployed on AWS ECS Fargate behind an ALB, with every resource — VPC, load balancer, ACM certificate, IAM roles, Secrets Manager, log group, billing alarm — declared in Terraform and rebuildable from nothing in about five minutes`,
      `GitHub Actions pipeline authenticating by OIDC with no stored AWS keys: lints, type-checks and tests against a Postgres service container, deploys by image digest, runs migrations as a one-off Fargate task, smoke-tests the live URL, and rolls the task definition back when it fails`,
      `Server-sent events relayed event by event and never buffered, with usage parsed out of the stream so accounting stays correct when a client hangs up mid-response or the upstream fails after a 200 has already been sent`,
      "Per-tenant token buckets in Redis behind an atomic Lua script: in-process counters drift to **+388%** of the permitted rate across 5 tasks where the shared bucket stays exact at any count",
      `Money in integer micro-cents with a test that fails the build on any float column; a streamed request reserves budget from its own ceiling before the upstream call and reconciles at settlement to 0 micro-cents of error`,
      `Two-tier cache keyed on a versioned hash of the normalised request, scoped per tenant in the key as well as the query — cutting upstream spend 59–96% depending on traffic shape, with hits served in 14.6ms against 122ms`,
      "Shipped the semantic cache tier switched **off**, because a 51-pair precision–recall sweep found no safe similarity threshold for `gemini-embedding-001`: `Convert JSON to YAML` and `Convert YAML to JSON` score 0.9913, higher than genuine paraphrases",
      `Prompt-injection detection as a regex baseline plus a pinned ONNX classifier, both scored on every eval run so the comparison stays honest; credential and PII scanning on the way back, with a hold-back window that contains a leak on a stream instead of noticing one`,
      `One OpenTelemetry trace per request with the upstream call as its own span, separating gateway overhead (+12ms, flat to 60 req/sec) from provider latency — plus a test that fails the build if a prompt reaches a span, a metric label or a log line`,
      `k6 load tests reporting the throughput ceiling as the whole stack's rather than the gateway's, because the mock upstream saturates at the same time — the distinction a load test is usually written to avoid`,
      `A written threat model covering twelve threats as asset → attack → mitigation → residual risk, including the gaps it does not close: 0.666 injection recall, no request body size cap, and replay bounded rather than prevented`,
    ],
    metrics: [
      `0.374 → 0.666 injection recall`,
      `+12ms gateway overhead`,
      `59–96% upstream spend cut`,
      `~5 min merge to live`,
    ],
    tags: [`Python`, `FastAPI`, `AWS ECS Fargate`, `Terraform`, `OpenTelemetry`, `pgvector`],
    images: [
      { src: `/shots/tollgate-dashboard.webp`, alt: `Tollgate Grafana dashboard showing traffic, latency and spend`, caption: `Traffic, latency and spend per tenant` },
      { src: `/shots/tollgate-cache.webp`, alt: `Tollgate dashboard showing cache tiers and savings`, caption: `Cache outcomes by tier, and what each saved` },
      { src: `/shots/tollgate-detection.webp`, alt: `Tollgate dashboard showing detection verdicts and inspection cost`, caption: `Detection verdicts, inspection cost, output findings` },
      { src: `/shots/tollgate-sweep.webp`, alt: `Precision-recall curve for the semantic cache similarity threshold`, caption: `The sweep that turned the semantic tier off` },
    ],
    links: [
      { label: `tollgate.danmccabe.dev`, href: `https://tollgate.danmccabe.dev`, kind: `live` },
      { label: `Source`, href: `https://github.com/dan-mcc1/tollgate`, kind: `github` },
    ],
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
    metrics: ['4,452 jobs/sec at 4×8', '27x from profiling', 'p50 719ms → 6.9ms', 'durability costs 9%, not 49%'],
    tags: ['Python', 'PostgreSQL', 'Concurrency', 'Systems Design'],
    images: [],
    links: [{ label: 'Source', href: 'https://github.com/dan-mcc1/durable-queue', kind: 'github' }],
    featured: true,
  },
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
    slug: 'ai-xss-vulnerability',
    name: 'AI XSS Vulnerability Analysis',
    tagline: 'Does AI-generated code defend against XSS? 480 samples, attacked in Docker, say mostly no.',
    period: 'Jan 2026 – May 2026',
    badge: 'Security research',
    proof:
      'Every model shipped exploitable XSS under normal prompting, with 5.4–6.6% of injected payloads executing. One security clause in the prompt took Claude to 0.0% while ChatGPT and Gemini only reached 4.3% and 3.3% — and obfuscated payloads scored lower than plain ones, because there was no sanitization left to evade.',
    description:
      'A comparative security study of LLM-generated code. The pipeline prompts three AI tools with the same web-development tasks, deploys each result in an isolated Docker container, injects XSS payloads, and cross-validates static against dynamic analysis — logging everything to SQL for a generated HTML report. It extends prior baseline work along two axes: security-aware defense prompts, and obfuscated payloads built to slip past sanitization filters.',
    highlights: [
      'Eight web-app prompts run 10 times per model across GPT-5 mini, Claude Sonnet 4.6 and Gemini 3.0 Flash, in standard and security-aware variants — **480 generated samples** in total',
      'Each sample deployed in an isolated Docker container and attacked with two payload families: plain vectors, and obfuscated ones using double URL encoding, HTML entities, Unicode escapes, base64 data URIs, SVG/MathML injection, `fromCharCode` and mutation XSS',
      'Baseline result: all three models produced exploitable XSS, **5.4–6.6%** of payloads executing, with the overwhelming majority of static findings rated Critical',
      'A single security clause in the prompt took Claude to a **0.0%** dynamic hit rate and cut its Critical findings from ~725 to ~20; ChatGPT and Gemini only fell to 4.3% and 3.3%, so compliance with a security instruction varies sharply by model',
      'The obfuscation paradox: obfuscated payloads scored **lower** than plain ones on every model — 7.6% vs 3.6% on ChatGPT — because evasion only helps when a filter exists to evade, and most generated code had no sanitization at all',
      'Cross-validated static against dynamic per sample into true positives, false-positive candidates and false-negative candidates: static over-reported in every condition and still missed exploitable samples, so neither method stands alone',
      'Stated the limits in the report rather than around them — three free-tier models, eight prompt shapes, and single-file Flask apps with no template auto-escaping, which likely inflates the rates against what a real project would show',
    ],
    metrics: ['480 samples, 3 models', '5.4–6.6% baseline hit rate', 'Claude 0.0% with defense prompts', '~725 → ~20 critical findings'],
    tags: ['Python', 'Docker', 'Security Research', 'LLM Evaluation', 'SQL'],
    images: [],
    links: [
      { label: 'Read the paper (PDF)', href: '/System_Security_Final_Report.pdf', kind: 'live' },
      { label: 'Source', href: 'https://github.com/dan-mcc1/ai-xss-vulnerability', kind: 'github' }
    ],
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

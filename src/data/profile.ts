export const profile = {
  name: 'Dan McCabe',
  role: 'CS & Cybersecurity · Virginia Tech',
  tagline: 'I build full-stack applications, from the interface down to the database.',
  email: 'danmccabe1@vt.edu',
  github: 'https://github.com/dan-mcc1',
  linkedin: 'https://linkedin.com/in/daniel-mccabe8',
  resume: '/Daniel_McCabe_Resume.pdf',
  about: [
    'I’m a Computer Science graduate student at Virginia Tech, completing an accelerated BS/MEng with a concentration in cybersecurity. My focus is software engineering: designing and building full-stack applications and backend systems, from architecture and data modeling through production deployment.',
    'Most of what I build starts as a problem I ran into myself. Release Radar is a production web application I built end to end — React and TypeScript on the front, a FastAPI service layer, and a PostgreSQL data model behind five scheduled background jobs — and its background work is what led me to write durable-queue, a library that turns a Postgres table into a fault-tolerant job runner with exactly-once semantics. Tollgate went further in the same direction: a multi-tenant gateway for model API traffic, deployed on AWS with Terraform, inspecting requests in both directions while staying byte-compatible with the provider’s API. I’m also leading a graduate capstone team building an augmented reality application for an external sponsor. What ties the work together is measurement — scoring a system against the baseline it has to beat, and reporting the result even when it’s unflattering.',
    'My security background shapes how I build rather than defining what I build. I’ve applied it professionally, monitoring enterprise endpoint security and automating threat reporting during an internship, and academically, through research on how AI-generated code handles cross-site scripting vulnerabilities. In practice it means I design with failure modes and misuse in mind, which produces more reliable software in any domain.',
  ],
}

export const contact = {
  blurb:
    'I finish my MEng in December 2026 and am looking for full-time software engineering roles across the stack. If you’re hiring, or just want to talk about anything on this page, my inbox is open.',
}

export const outside = {
  intro:
    "As much as I enjoy coding and solving problems, my hobbies help me clear my head and have fun. They are often what inspire ideas for personal projects such as Release Radar and durable-queue.",
  interests: [
    {
      icon : 'golf',
      title: "Golf",
      body: "I've been playing golf since middle school, played on my high school team, and have continued playing since. It is one of my favorite ways to relax and decompress when I need it (even if it drives me crazy sometimes)."
    },
    {
      icon: 'basketball',
      title: 'Basketball',
      body: "I play basketball every day to keep myself active and get out of the house. Also helps clear my head and stop thinking about problems I have been staring at all day."
    },
    {
      icon: 'trophy',
      title: 'Watching sports',
      body: 'I grew up in Massachusetts so I\'m a fan of any and all Boston sports and will watch whenever I can.',
    },
    {
      icon: 'film',
      title: 'Movies & TV',
      body: "I have always enjoyed watching movies and tv shows. I found myself forgetting when shows and movies were coming out so I built Release Radar to help, which I now use daily to keep track of what I'm watching.",
    },
    {
      icon: 'book',
      title: 'Reading',
      body: "I have gotten back into reading in the past few years and is my favorite way to wind down at night. I read science fiction, fantasy, mystery, or anything I find interesting.",
    },
    {
      icon: 'plane',
      title: 'Travel',
      body: "I love traveling, seeing new things, and experiencing different places. Recently I went on a cruise to Alaska with my family, before that we've gone to Italy, Costa Rica, Aruba, and more.",
    },
  ]
}

export const education = [
  {
    degree: 'MEng in Computer Science & Applications — Cybersecurity',
    school: 'Virginia Tech · Accelerated Program',
    date: 'Expected Dec 2026',
  },
  {
    degree: 'BS in Computer Science',
    school: 'Virginia Tech · Minors in Cybersecurity & Mathematics',
    date: 'Dec 2025',
    gpa: 'GPA 3.97 · Rank 32/906',
  },
]

export const experience = [
  {
    company: 'Basis Digital Biotech',
    role: 'Cybersecurity Intern',
    date: 'May – Aug 2025',
    location: 'Boston, MA',
    bullets: [
      'Monitored Microsoft Defender for Endpoint across client environments, identifying threats, analyzing risky user behavior, and escalating security incidents.',
      'Helped clients achieve a Microsoft Secure Score <strong>56% above the industry average</strong> for similarly sized organizations through consistent monitoring and security hardening.',
      'Ran internal phishing simulations resulting in a <strong>~20% improvement</strong> in phishing detection rates.',
      'Automated monthly security threat reports using Python and the Microsoft Graph API, delivering executive-level summaries of Defender alerts, phishing activity, and user risk scores.',
      'Created tailored IT security policies (Acceptable Use, Incident Response, Disaster Recovery) aligned with each client’s risk profile.',
    ],
  },
  {
    company: 'Boston College',
    role: 'Data Analytics Intern',
    date: 'May – Aug 2024',
    location: 'Boston, MA',
    bullets: [
      'Analyzed data from over 900 customers across 15 variables to optimize sales strategies and target specific customers, supporting the assistant director of data analytics.',
      'Developed comprehensive reports on customer demographics and renewal rates, leading to actionable insights.',
      'Presented analyses in weekly meetings, earning positive feedback and contributing to improved sales performance.',
    ],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript / JavaScript', 'Java', 'C', 'SQL', 'MATLAB'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'FastAPI', 'Express', 'SQLAlchemy', 'Tailwind CSS', 'TanStack Query', 'NumPy', 'Pandas', 'Matplotlib', 'ONNX'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS (ECS Fargate, ALB, IAM)', 'Terraform', 'Docker', 'Linux', 'Git'],
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL', 'Redis', 'pgvector', 'Firebase', 'Stripe', 'REST APIs'],
  },
  {
    category: 'Observability & Delivery',
    items: ['OpenTelemetry', 'Grafana', 'k6', 'GitHub Actions'],
  },
  {
    category: 'Security',
    items: [
      'Threat modeling',
      'Prompt-injection detection',
      'PII & secret scanning',
      'Multi-tenant isolation',
      'Microsoft Defender for Endpoint',
      'Microsoft Graph API',
      'XSS analysis',
      'TLS internals',
    ],
  },
]

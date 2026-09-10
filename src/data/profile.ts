export const profile = {
  name: 'Dan McCabe',
  role: 'CS & Cybersecurity · Virginia Tech',
  tagline: 'I build things well, and try to understand how they break.',
  email: 'danmccabe1@vt.edu',
  github: 'https://github.com/dan-mcc1',
  linkedin: 'https://linkedin.com/in/daniel-mccabe8',
  resume: '/Daniel_McCabe_Resume.pdf',
  about: [
    'I’m a Computer Science graduate student at Virginia Tech, completing an accelerated BS/MEng with a concentration in cybersecurity. My focus is software engineering: designing and building full-stack applications and backend systems, from architecture and data modeling through production deployment.',
    'I have built many different projects that I am proud of across the stack. Release Radar is a production web application I designed and built end to end — a React and TypeScript frontend, a FastAPI service layer, and a PostgreSQL data model supported by scheduled background jobs. From there I built durable-queue, a systems library that turns Postgres into a fault-tolerant job runner to help with Release Radar’s background tasks. I’m also currently leading a graduate capstone team developing an augmented reality application for an external sponsor.',
    'My security background shapes how I build rather than defining what I build. I’ve applied it professionally, monitoring enterprise endpoint security and automating threat reporting during an internship, and academically, through research on how AI-generated code handles cross-site scripting vulnerabilities. In practice it means I design with failure modes and misuse in mind, which produces more reliable software in any domain.',
  ],
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
      body: "I have always enjoyed watching movies and tv shows. I found myself forgetting when shows and movies were coming out so I built Release Radar to help which I now use pretty much daily to find and keep track of what I'm watching.",
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
    items: ['React', 'FastAPI', 'Express', 'SQLAlchemy', 'Tailwind CSS', 'TanStack Query', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    category: 'Infrastructure & Data',
    items: ['PostgreSQL', 'Docker', 'Git', 'Linux', 'Firebase', 'Stripe', 'REST APIs'],
  },
  {
    category: 'Security',
    items: ['Microsoft Defender for Endpoint', 'Microsoft Graph API', 'XSS analysis', 'TLS internals'],
  },
]

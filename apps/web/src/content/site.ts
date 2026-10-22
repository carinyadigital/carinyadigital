export const site = {
  name: 'Carinya Digital',
  shortName: 'CD',
  url: 'https://carinyadigital.com',
  description:
    'Carinya Digital designs, builds, and runs AI agents that handle the recurring work inside small and medium businesses.',
  tagline: 'Design, build, and run — AI agents for small and medium business',
  github: 'https://github.com/carinyadigital',
} as const;

export const nav = {
  items: [
    { href: '/claude-cowork', label: 'Claude Cowork' },
    { href: '/waratah', label: 'Waratah' },
    { href: '/agent-resources', label: 'Agent Resources' },
  ],
  cta: { href: 'mailto:hello@carinyadigital.com', label: 'Contact us →' },
} as const;

export const footer = [
  {
    heading: 'Services',
    links: [{ label: 'Claude Cowork Setup', href: '/claude-cowork' }],
  },
  {
    heading: 'Agent Harness',
    links: [{ label: 'Waratah', href: '/waratah' }],
  },
  {
    heading: 'Agent Plugins',
    links: [
      { label: 'Digital Agency', href: '/agent-plugins' },
      { label: 'Financial Planners', href: '/financial-planners' },
      { label: 'Change Practice', href: '/change-practice' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Agent Resources', href: '/agent-resources' },
      { label: 'Docs (coming soon)' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: nav.cta.href },
      { label: 'GitHub', href: site.github },
    ],
  },
] as const;

export const home = {
  features: [
    {
      headline: 'Design',
      description:
        'We design agents that do the recurring work in the background, on your tools, under your review.',
    },
    {
      headline: 'Build',
      description:
        'We package what we build as open, inspectable agent resources: plugins for Claude Code and Claude Cowork, and agent directories you can deploy yourself.',
    },
    {
      headline: 'Run',
      description: 'Nothing runs unsupervised — every output is a draft for a person to review.',
    },
  ],
  cowork: {
    eyebrow: 'New',
    headline: 'claude cowork for your business',
    description:
      'We configure Claude Cowork around your tools, your files, and the recurring work that eats a day every week — with a trust spine, security boundaries, and your regulatory obligations built in from day one.',
    href: '/claude-cowork',
    linkLabel: 'See how a setup works',
    mediaLabel: 'Screenshot of Claude Cowork configured for a business',
  },
  waratah: {
    eyebrow: 'Agent framework',
    headline: 'define an agent once, run it anywhere',
    description:
      'A portable way to define an agent once — identity, instructions, connectors, schedules — and deploy it to Claude and beyond. The directory is the source of truth; built artifacts are reviewable diffs.',
    href: '/waratah',
    linkLabel: 'See how waratah works',
    mediaLabel: 'Directory-structure diagram of a waratah agent',
  },
  resources: {
    headline: 'agent resources',
    description:
      'Practice plugins for Claude Code, Claude Cowork, and Cursor — free to inspect, fork, and run yourself.',
    items: [
      {
        tag: 'Plugin marketplace',
        title: 'agent plugins',
        description:
          'Practice plugins for brand, content, product, design, search, and engineering — for Claude Code, Claude Cowork, and Cursor.',
        href: '/agent-plugins',
        linkLabel: 'View resource',
      },
      {
        tag: 'Plugin marketplace',
        title: 'financial planners',
        description:
          'Claude Code plugins that draft meeting prep, file notes, SOA/BID scaffolds, and compliance checklists for AU advisers, brokers, and compliance teams.',
        href: '/financial-planners',
        linkLabel: 'View resource',
      },
      {
        tag: 'Plugin marketplace',
        title: 'change practice',
        description:
          'A practice plugin for change managers — stakeholder analysis, impact, comms, readiness, and adoption — for Claude Cowork and ChatGPT Work.',
        href: '/change-practice',
        linkLabel: 'View resource',
      },
    ],
  },
} as const;

export const resources = [
  {
    slug: 'agent-plugins',
    tag: 'Plugin marketplace',
    status: 'Available',
    title: 'agent plugins',
    description:
      'Plugins for brand, content, product, design, search, and engineering. Install them in Claude Code, Claude Cowork, or Cursor. Every output is a draft for you to review.',
    href: '/agent-plugins',
    githubHref: 'https://github.com/carinyadigital/agent-plugins',
  },
  {
    slug: 'financial-planners',
    tag: 'Plugin marketplace',
    status: 'Available',
    title: 'financial planners',
    description:
      'Plugins for AU advisers, mortgage brokers, and compliance teams — meeting prep, file notes, SOA/ROA/CAR and BID scaffolds, compliance checklists. Every output is a draft for licensed human review.',
    href: '/financial-planners',
    githubHref: 'https://github.com/carinyadigital/financial-planners',
  },
  {
    slug: 'change-practice',
    tag: 'Plugin marketplace',
    status: 'Available',
    title: 'change practice',
    description:
      'A practice plugin for change managers and organisational change practitioners — stakeholder analysis, impact, comms, readiness, and adoption. Install it in Claude Cowork or ChatGPT Work. Every output is a draft for you to review.',
    href: '/change-practice',
    githubHref: 'https://github.com/carinyadigital/change-practice',
  },
  {
    slug: 'waratah',
    tag: 'Agent framework',
    status: 'Available',
    title: 'waratah',
    description:
      'Define an agent once — identity, instructions, connectors, schedules — and deploy it to Claude and other providers. The directory is the source of truth; built artifacts are reviewable diffs.',
    href: '/waratah',
    githubHref: 'https://github.com/carinyadigital/waratah',
  },
  {
    slug: 'claude-cowork',
    tag: 'Managed setup',
    status: 'Available',
    title: 'claude cowork for business',
    description:
      'We configure Claude Cowork around your business — the tools, the files, the recurring work — with a trust spine, security boundaries, and your regulatory obligations built in from day one.',
    href: '/claude-cowork',
    githubHref: site.github,
  },
  {
    slug: 'more',
    tag: 'In progress',
    status: 'Coming soon',
    title: 'more resources',
    description:
      "New agent resources get published here as they're built and proven. Watch the GitHub org for updates.",
    href: site.github,
    githubHref: site.github,
  },
] as const;

export const agentPlugins = {
  github: 'https://github.com/carinyadigital/agent-plugins',
  install: `/plugin marketplace add carinyadigital/agent-plugins
/plugin install brand-creative@agent-plugins`,
  stats: [
    { value: '11', label: 'practice plugins for brand, product, and engineering' },
    { value: '3', label: 'install surfaces — Claude Code, Cowork, and Cursor' },
    { value: '0', label: 'outputs shipped without a human review' },
  ],
  plugins: [
    {
      name: 'brand-creative',
      bestFor: 'Brand voice and visual identity',
      command: '/brand-creative:setup',
    },
    {
      name: 'content-marketing',
      bestFor: 'Editorial calendar, social curation, CMS seed drafts',
      command: '/content-marketing:setup',
    },
    {
      name: 'design',
      bestFor: 'Wireframes, live UX review, and UX design fix',
      command: '/design:setup',
    },
    {
      name: 'search-optimisation',
      bestFor: 'Keyword research, technical SEO audits, on-page review',
      command: '/search-optimisation:setup',
    },
    {
      name: 'product-management',
      bestFor: 'Strategy, roadmap, specs, research, backlog, and sprint cadence',
      command: '/product-management:setup',
    },
    {
      name: 'architecture',
      bestFor: 'Solution design and architecture decision records',
      command: '/architecture:setup',
    },
    {
      name: 'engineering',
      bestFor: 'Implementation, code review, QA, and platform ops',
      command: '/engineering:setup',
    },
    {
      name: 'ralph-loop',
      bestFor: 'Self-referential delivery loops',
      command: '/ralph-loop-setup',
    },
    {
      name: 'skills-index',
      bestFor: 'Install-aware skill router',
      command: '/skills-index:find',
    },
    {
      name: 'plugin-management',
      bestFor: 'Create and customise plugins, plus skill quality gates',
      command: '/plugin-management:create-plugin',
    },
    {
      name: 'document-management',
      bestFor: 'Scaffold, reorganise, and keep current the docs tree',
      command: '/document-management:docs-setup',
    },
  ],
  faqs: [
    {
      q: 'Who is this for?',
      a: 'Small and medium business owners who need brand, content, product, design, or search work done through the agent they already use. You do not need an engineering team to start.',
    },
    {
      q: 'Are the outputs finished work?',
      a: 'Every output is a draft for your review — not a production-ready deliverable without a person checking it. You verify accuracy, brand fit, and compliance before anything ships.',
    },
    {
      q: 'Which plugin do I install first?',
      a: 'Start with brand-creative if you are standing up a brand, or the practice that matches the work in front of you. Run setup before other commands — skipping it is why output stays generic.',
    },
    {
      q: 'Does this work in Cursor?',
      a: 'Yes. Add the GitHub repo from Cursor Settings → Plugins, then install the practice plugins you need. Individual skills can also be installed via skills.sh.',
    },
  ],
} as const;

export const financialPlanners = {
  github: 'https://github.com/carinyadigital/financial-planners',
  install: `/plugin marketplace add carinyadigital/financial-planners
/plugin install advice-core@claude-for-financial-planners`,
  stats: [
    { value: '4', label: 'plugins covering advice, broking, and compliance' },
    { value: 'AU', label: 'built against the Corporations Act and NCCP' },
    { value: '0', label: 'outputs sent, lodged, or filed without a human gate' },
  ],
  plugins: [
    {
      name: 'advice-core',
      bestFor: 'Setup, meeting prep, file notes, CRM hygiene, client letters, marketing review',
      command: '/advice-core:practice-setup',
    },
    {
      name: 'financial-adviser',
      bestFor: 'Fact-find, SOA/ROA/CAR drafts, review packs, APL research, DDO/TMD',
      command: '/financial-adviser:practice-setup',
    },
    {
      name: 'mortgage-broker',
      bestFor: 'Needs analysis, policy research, serviceability comparison, BID rationale, trail book',
      command: '/mortgage-broker:practice-setup',
    },
    {
      name: 'compliance',
      bestFor: 'File review, complaints, breach triage, REP 798 AI governance, audit export',
      command: '/compliance:practice-setup',
    },
  ],
  tiers: [
    {
      badge: 'Free',
      tone: 'light' as const,
      name: 'Open source',
      price: '$0',
      description:
        'The full plugin marketplace, self-hosted. Install it yourself in Claude Code or Cowork, run setup, and keep your data on your own machine.',
    },
    {
      badge: 'Coming soon',
      tone: 'dark' as const,
      name: 'Pro',
      price: 'TBD',
      description:
        'Managed setup, licensee-wide rollout, priority updates as regulation changes, and support from Carinya Digital. Pricing to be announced.',
    },
  ],
  faqs: [
    {
      q: 'Is this personal advice or credit assistance?',
      a: 'Nothing here provides personal advice or credit assistance, or certifies Best Interests Duty, responsible lending, or TMD fit.',
    },
    {
      q: 'Who authorises what goes out the door?',
      a: 'You remain the authorising signatory. There is an explicit gate before anything is sent, lodged, or filed.',
    },
    {
      q: 'Are the outputs finished documents?',
      a: 'Every output is a draft, never a decision. Source tags sit on product facts, rates, and fees. Incomplete-information warnings are called out at the top.',
    },
  ],
} as const;

export const changePractice = {
  github: 'https://github.com/carinyadigital/change-practice',
  install: `/plugin marketplace add carinyadigital/change-practice
/plugin install change-practice@change-practice`,
  setupCommand: '/change-practice:setup',
  hero: {
    eyebrow: 'Plugin for Claude Cowork and ChatGPT Work',
    headline: 'run your change practice from one shared record',
    subheadline:
      'Change Practice drafts the stakeholder, impact, communications, training, and readiness work for a people change, and saves every piece to one change record your team can read. You review each draft. Nothing is sent to staff.',
  },
  installSteps: [
    { label: 'Paste into Claude Code or Claude Cowork' },
    { label: 'Run setup once', command: '/change-practice:setup' },
    { label: 'Ask for your first draft', command: '/change-practice:understand-change' },
  ],
  worksWith: ['Claude Cowork', 'ChatGPT Work', 'Microsoft 365', 'Teams'],
  stats: [
    { value: '27', label: 'skills across Prepare, Manage, and Sustain' },
    { value: '5', label: 'specialist personas sharing one skill library' },
    { value: '1', label: 'change record that every skill reads and writes' },
    { value: '0', label: 'messages sent to employees without a person' },
  ],
  problem: {
    headline: 'the work of change is scattered. the record should not be.',
    description:
      'A change manager carries the stakeholder register, the impact assessment, the comms plan, the training plan, and the readiness checklist in a dozen files and three inboxes. They drift apart, and the history leaves when the project closes.',
    items: [
      {
        headline: 'Registers stop agreeing',
        description:
          'The stakeholder, impact, and risk registers are written weeks apart and never reconciled, so the same group is high-impact in one and missing from another.',
      },
      {
        headline: 'Every message starts blank',
        description:
          'The town hall slide, the all-staff email, and the manager talking points each tell the change story a little differently.',
      },
      {
        headline: 'Readiness is judged by feel',
        description:
          'Go-live gets a go or no-go in a meeting, with the evidence spread across spreadsheets and people’s heads.',
      },
      {
        headline: 'Handover loses the history',
        description:
          'The decisions, the lessons, and the open issues leave with the change manager when the project ends.',
      },
    ],
  },
  howItWorks: {
    headline: 'three steps from project notes to a working change record',
    steps: [
      {
        title: 'Install and run setup',
        command: '/change-practice:setup',
        description:
          'Setup asks how your team works: the method you follow, how you report, and what your templates look like. It saves that as a practice profile, and every later skill reads it so the drafts sound like your team.',
      },
      {
        title: 'Describe the change',
        command: '/change-practice:understand-change',
        description:
          'Hand over the project notes you already have. You get a change definition in scope.md: what is changing, for whom, and why now. Where the notes are silent, the draft says so and asks you to confirm.',
      },
      {
        title: 'Build on the record',
        command: '/change-practice:skills-index',
        description:
          'Each skill reads what came before and writes the next piece, so the comms plan knows the stakeholders and the readiness review knows the training plan. Unsure what to run next? Ask, and the plugin reads the record and recommends it.',
      },
    ],
  },
  trust: {
    eyebrow: 'The trust spine',
    headline: 'you decide. change practice drafts.',
    description:
      'Every output is a draft for a person to review, and the plugin is built so that nothing reaches your staff, your sponsors, or your leaders without one.',
    items: [
      {
        title: 'Drafts, never sends',
        description:
          'Communications are saved to the change record. Sending, posting, and calendar invites stay with a person. In Claude Cowork, a guard asks before any connected tool sends anything.',
      },
      {
        title: 'Groups and roles, not names',
        description:
          'People are recorded as groups and roles unless you ask otherwise. A guard asks before a personal email or phone number is written, and sentiment is only reported for groups above a minimum size.',
      },
      {
        title: 'Unknowns are marked, not invented',
        description:
          'Where the source material is silent, the draft says so in plain sight. No names, numbers, or quotes are made up to fill a gap.',
      },
      {
        title: 'Gates give a verdict, people decide',
        description:
          'Five review skills write only a verdict and name the skill that fixes each finding. Sponsor health, readiness, go or no-go, and adoption stay decisions for named people.',
      },
    ],
  },
  personas: [
    {
      name: 'change-lead',
      bestFor: 'Change definition, impact, risk, strategy, go-live, and handover',
      command: '/change-practice:understand-change',
    },
    {
      name: 'stakeholder-sponsor-coach',
      bestFor: 'Stakeholders, sponsors, champion network, and resistance',
      command: '/change-practice:stakeholder-analysis',
    },
    {
      name: 'comms-specialist',
      bestFor: 'Communications plan, message drafts, and reinforcement',
      command: '/change-practice:communications-plan',
    },
    {
      name: 'training-designer',
      bestFor: 'Training needs analysis, plan, and job aids',
      command: '/change-practice:training-needs-analysis',
    },
    {
      name: 'readiness-adoption-analyst',
      bestFor: 'Measurement, business readiness, go or no-go, and adoption',
      command: '/change-practice:measurement-plan',
    },
  ],
  phases: [
    {
      name: 'Prepare',
      summary: 'Understand the change and plan the approach.',
      skills: [
        { command: 'understand-change', writes: 'scope.md', description: 'Change definition' },
        {
          command: 'stakeholder-analysis',
          writes: 'stakeholder-register.md',
          description: 'Stakeholder register and grid',
        },
        {
          command: 'change-impact-assessment',
          writes: 'impact-register.md',
          description: 'Impact by group, process, and system',
        },
        {
          command: 'change-risk-assessment',
          writes: 'risk-register.md',
          description: 'People-change risks and mitigations',
        },
        {
          command: 'sponsor-assessment',
          writes: 'pct-assessment.md',
          description: 'Sponsor and project health verdict',
          gate: true,
        },
        {
          command: 'change-strategy',
          writes: 'strategy.md',
          description: 'Strategy, case for change, force field',
        },
        {
          command: 'measurement-plan',
          writes: 'measurement-plan.md',
          description: 'What adoption looks like and how it is measured',
        },
      ],
    },
    {
      name: 'Manage',
      summary: 'Engage, communicate, train, and get ready for go-live.',
      skills: [
        { command: 'sponsor-engagement', writes: 'sponsor-plan.md', description: 'Sponsor plan' },
        {
          command: 'stakeholder-engagement',
          writes: 'engagement-plan.md',
          description: 'Stakeholder engagement plan',
        },
        {
          command: 'change-network',
          writes: 'change-network.md',
          description: 'Champion network, feedback log, champion pack',
        },
        {
          command: 'communications-plan',
          writes: 'comms-plan.md',
          description: 'Change story and comms plan',
        },
        { command: 'comms-draft', writes: 'comms/', description: 'Message drafts, saved and never sent' },
        {
          command: 'training-needs-analysis',
          writes: 'tna.md',
          description: 'Training needs, plan, schedule, quick reference guides',
        },
        {
          command: 'business-readiness',
          writes: 'readiness-checklist.md',
          description: 'Readiness tracked against the checklist',
          gate: true,
        },
        {
          command: 'readiness-review',
          writes: 'go-no-go.md',
          description: 'Go or no-go evidence and verdict',
          gate: true,
        },
        {
          command: 'resistance-management',
          writes: 'resistance-log.md',
          description: 'Resistance log and transition plan',
        },
        {
          command: 'golive-transition',
          writes: 'golive-plan.md',
          description: 'Go-live plan and daily hypercare check-ins',
        },
        {
          command: 'portfolio-saturation',
          writes: 'portfolio-heatmap.md',
          description: 'Heatmap of change load across groups',
          gate: true,
        },
        { command: 'stakeholder-pulse', writes: 'pulse/', description: 'Pulse check-ins and survey designs' },
        { command: 'meeting-prep', description: 'Meeting preparation and follow-ups' },
      ],
    },
    {
      name: 'Sustain',
      summary: 'Measure adoption, reinforce, and hand over.',
      skills: [
        {
          command: 'adoption-measurement',
          writes: 'adoption-report.md',
          description: 'Adoption against the measurement plan',
          gate: true,
        },
        { command: 'reinforcement', writes: 'reinforcement-plan.md', description: 'Reinforcement plan' },
        { command: 'bau-handover', writes: 'handover-pack.md', description: 'Handover pack for business as usual' },
      ],
    },
    {
      name: 'Throughout',
      summary: 'Keep the record current from kick-off to close.',
      skills: [
        { command: 'setup', writes: 'practice profile', description: 'How your team works. Run this first' },
        { command: 'skills-index', description: 'Which skill to run next' },
        { command: 'lessons-learned', writes: 'lessons-learned.md', description: 'Lessons log and retro sheets' },
        { command: 'weekly-status', writes: 'status/', description: 'RAG status report drafted from the record' },
      ],
    },
  ],
  routines: {
    headline: 'it fits the week you already have',
    description:
      'Most of a change manager’s week is the same handful of routines. Each one reads the record, drafts the next piece, and leaves the sending and the deciding to you.',
    items: [
      {
        when: 'Every day',
        command: 'stakeholder-pulse',
        description:
          'A short check-in on how each group is travelling. When a theme keeps coming up, it points you to resistance-management.',
      },
      {
        when: 'Before a meeting',
        command: 'meeting-prep',
        description:
          'Who is in the room, what the record says about them, and what you need from them. Run it again afterwards for the follow-ups.',
      },
      {
        when: 'When a message is due',
        command: 'comms-draft',
        description:
          'A draft that follows the change story and the comms plan, saved to the record. You approve it and send it.',
      },
      {
        when: 'On a cadence',
        command: 'business-readiness',
        description:
          'Readiness tracked against the checklist, then readiness-review at the gate for the go or no-go.',
      },
      {
        when: 'Every week',
        command: 'weekly-status',
        description: 'The RAG status report, drafted from what changed in the record this week.',
      },
      {
        when: 'During hypercare',
        command: 'golive-transition',
        description: 'The daily hypercare check-in, drafted from the issue log.',
      },
    ],
  },
  record: {
    eyebrow: 'The change record',
    headline: 'one folder your whole team can read',
    description:
      'Every skill writes to docs/change/ in plain Markdown and CSV, so the record lives with the project, opens in any editor, and leaves nothing behind when the plugin is gone. Later conversations build on earlier ones because the record is the memory.',
    tree: [
      { name: 'docs/change/', kind: 'dir', depth: 0 },
      { name: 'scope.md', kind: 'file', depth: 1 },
      { name: 'strategy.md', kind: 'file', depth: 1 },
      { name: 'stakeholder-register.md', kind: 'file', depth: 1 },
      { name: 'impact-register.md', kind: 'file', depth: 1 },
      { name: 'risk-register.md', kind: 'file', depth: 1 },
      { name: 'comms-plan.md', kind: 'file', depth: 1 },
      { name: 'comms/', kind: 'dir', depth: 1 },
      { name: '2026-03-02-roster-update.md', kind: 'file', depth: 2 },
      { name: 'tna.md', kind: 'file', depth: 1 },
      { name: 'readiness-checklist.md', kind: 'file', depth: 1 },
      { name: 'go-no-go.md', kind: 'file', depth: 1 },
      { name: 'adoption-report.md', kind: 'file', depth: 1 },
      { name: 'handover-pack.md', kind: 'file', depth: 1 },
      { name: 'lessons-learned.md', kind: 'file', depth: 1 },
      { name: 'status/', kind: 'dir', depth: 1 },
      { name: '2026-W10.md', kind: 'file', depth: 2 },
    ],
  },
  platforms: [
    {
      name: 'Claude Cowork',
      steps: [
        'Open the Cowork tab, then Customize, Plugins, and Discover, and install Change Practice. Or paste the snippet into Claude Code.',
        'Connect Microsoft 365 and Teams on the Connectors tab if you want, or skip it and paste material in.',
        'Run setup, then start a task and type / to choose a skill, or just ask in plain language.',
      ],
      note: 'Guards run here: the plugin asks before any send, personal-data write, or profile change.',
    },
    {
      name: 'ChatGPT Work',
      steps: [
        'A workspace admin publishes Change Practice from ChatGPT Plugins.',
        'Switch to Work, open Plugins, find it under your workspace or Personal, and add it.',
        'Accept the setup conversation on first use, or ask to set up your change practice.',
      ],
      note: 'Guards do not run on the web, so read each draft carefully before sharing it.',
    },
  ],
  faqs: [
    {
      q: 'Who is this for?',
      a: 'Change managers and organisational change practitioners helping groups of people adopt a new system, process, structure, or policy. You do not need an engineering team to start.',
    },
    {
      q: 'Is this IT change control?',
      a: 'No. It covers people change only. It does not draft change requests, CAB papers, or release approvals.',
    },
    {
      q: 'Does it send messages to staff?',
      a: 'No. Comms are saved to the change record as drafts. Sending, posting, and calendar invites stay with a person. People data is recorded as groups and roles, not named individuals, unless you ask.',
    },
    {
      q: 'Which change method does it follow?',
      a: 'Yours. Setup records how your team works and later skills follow it. Where the skills draw on Prosci, Kotter, Bridges, or ACMP, they describe those ideas in their own words with attribution.',
    },
    {
      q: 'Do I need Microsoft 365 or Teams connected?',
      a: 'No. Both are optional. Every skill works with material you paste or upload.',
    },
    {
      q: 'Does this work in ChatGPT?',
      a: 'Yes. A workspace admin publishes Change Practice from ChatGPT Plugins, then you add it in ChatGPT Work. Claude Cowork installs from Discover or from the GitHub marketplace.',
    },
    {
      q: 'What does it cost?',
      a: 'Nothing. Change Practice is open source under the MIT licence. Install it yourself and keep the change record on your own systems.',
    },
  ],
} as const;

export const waratah = {
  github: 'https://github.com/carinyadigital/waratah',
  docs: 'https://github.com/carinyadigital/waratah/tree/main/docs',
  stats: [
    { value: '1', label: 'directory defines the whole agent' },
    { value: '2', label: 'providers rendered today — Claude, Cursor' },
    { value: '0', label: 'credentials committed to dist/' },
  ],
  coordination: [
    {
      title: 'Version-pinned rosters',
      desc: 'a coordinator declares exactly which subagents, at which version, ship with it.',
    },
    {
      title: 'Checked both directions',
      desc: 'an undeclared subagent and an orphaned directory both fail the build.',
    },
    {
      title: 'One level of delegation',
      desc: 'a subagent has no clock of its own and declares no subagents of its own.',
    },
  ],
  providers: [
    {
      name: 'claude',
      status: 'Deploy target',
      desc: 'Emits agent.json plus skills and multiagent where declared, and one deployment per schedule.',
    },
    {
      name: 'cursor',
      status: 'Rendered',
      desc: "Emits agent.json. No publisher yet — deploy refuses it rather than shipping partial support.",
    },
  ],
  faqs: [
    {
      q: 'What is waratah, exactly?',
      a: "A portable way to define an agent once — identity, instructions, connectors, schedules — and render it into provider-specific artifacts, instead of hand-writing each provider's config format.",
    },
    {
      q: 'Do I need to know every provider’s API?',
      a: "No. You write the directory once; each provider's renderer knows how to turn it into that provider's request shape.",
    },
    {
      q: 'What happens if a provider can’t support something my agent needs?',
      a: 'The build fails loudly at that combination — never a silent, degraded artifact you discover in production.',
    },
    {
      q: 'Is dist/ safe to trust?',
      a: "Yes — it's committed output, and deploy refuses to ship a stale dist/, so what ships is always what was reviewed.",
    },
  ],
} as const;

export const claudeCowork = {
  github: site.github,
  contactHref: 'mailto:hello@carinyadigital.com',
  stats: [
    {
      value: '3',
      label: 'steps — find the recurring work, set up Claude Cowork around it, then keep it tuned',
    },
    { value: '0', label: 'tasks that ship without a person reviewing them first' },
    { value: 'AU', label: 'built and run for Australian small and medium businesses' },
  ],
  cards: [
    {
      headline: 'sharper business processes',
      description:
        'Claude Cowork works inside the folders and tools your team already uses — reading a spreadsheet, drafting a document, updating a record — across a whole task end to end, not one file at a time.',
    },
    {
      headline: 'answers, not another search',
      description:
        'Instead of hunting through shared drives, inboxes, and old threads, your team asks a question and gets a sourced answer pulled from the files and systems they already have access to.',
    },
    {
      headline: 'less busywork, more of the work people enjoy',
      description:
        'The recurring, repetitive parts of a role — chasing information, reformatting reports, updating the same three systems — move to Claude Cowork, so people spend their day on the work that actually needs a person.',
    },
    {
      headline: 'the trust spine',
      description:
        'Every output is a draft for a person to review. Claude Cowork asks before acting on anything consequential, and nothing goes out the door without someone accountable signing off.',
    },
    {
      headline: 'information security by design',
      description:
        'Claude Cowork only reaches the folders and tools you connect it to — nothing else. You decide what it can read, write, or send before it runs a single task.',
    },
    {
      headline: 'set up with your obligations in mind',
      description:
        'We configure Claude Cowork around the record-keeping, privacy, and industry rules your business already carries. You and your advisers stay responsible for what it produces — we make sure the setup does not work against you.',
    },
  ],
  faqs: [
    {
      q: 'What is Claude Cowork?',
      a: 'Claude Cowork is Anthropic’s product for handing multi-step work to Claude across the files and tools you use. It works in the background and comes back with something ready for you to review.',
    },
    {
      q: 'What does a setup with Carinya Digital include?',
      a: 'We map the recurring work worth automating, configure Claude Cowork around your actual folders, tools, and approval points, and stay on to tune it as your business changes.',
    },
    {
      q: 'Do we need an engineering team?',
      a: 'No — that is the point. We do the configuration; your team keeps working the way it already does, just without the recurring admin.',
    },
    {
      q: 'Is our data safe?',
      a: 'Claude Cowork can only reach the folders and tools you explicitly connect. Nothing else is visible to it, and nothing goes out the door without a person reviewing it first.',
    },
    {
      q: 'How is this different from just giving our team Claude Cowork directly?',
      a: 'Nothing stops a team from doing that — most get stuck on which tasks to hand over and how to set the guardrails. We do that configuration work up front and keep it maintained afterwards.',
    },
  ],
} as const;

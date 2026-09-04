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
  resources: { href: '/agent-resources', label: 'Agent Resources' },
  github: { href: site.github, label: 'GitHub →' },
} as const;

export const home = {
  announcement: {
    href: '/financial-planners',
    text: 'financial planners is available',
    cta: 'View resource',
  },
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
  stats: {
    headline: 'what is already published',
    description:
      'Two agent resources, four plugins for Australian advice and credit work, and a hard rule: nothing is sent, lodged, or filed without a person.',
    items: [
      { value: '2', label: 'published agent resources' },
      { value: '4', label: 'plugins covering advice, broking, and compliance' },
      { value: '0', label: 'outputs sent, lodged, or filed without a human gate' },
    ],
  },
} as const;

export const homeResources = [
  {
    tag: 'Plugin marketplace',
    title: 'financial planners',
    description:
      'Claude Code plugins that draft meeting prep, file notes, SOA/BID scaffolds, and compliance checklists for AU advisers, brokers, and compliance teams.',
    href: '/financial-planners',
    linkLabel: 'View resource',
  },
  {
    tag: 'Agent framework',
    title: 'waratah',
    description:
      'A portable way to define an agent once — identity, instructions, connectors, schedules — and deploy it to Claude and beyond.',
    href: '/waratah',
    linkLabel: 'View resource',
  },
  {
    tag: 'More soon',
    title: 'more resources on the way',
    description: "New agent resources get published as they're built and proven.",
    href: '/agent-resources',
    linkLabel: 'See all resources',
  },
] as const;

export const resources = [
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

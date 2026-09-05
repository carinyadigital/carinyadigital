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
    ],
  },
  {
    heading: 'Learn',
    links: [{ label: 'Docs (coming soon)' }],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
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

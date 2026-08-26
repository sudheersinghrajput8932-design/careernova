import {
  BusinessIdeaResult,
  MarketingStrategyResult,
  SwotAnalysisResult,
  CompetitorAnalysisResult,
  BusinessPlanResult,
  SocialContentResult,
  TabConfig
} from '../types';

export const NAVIGATION_TABS: TabConfig[] = [
  {
    id: 'home',
    name: 'Home',
    shortName: 'Home',
    description: 'Turn your ideas into growth with AI tools and career roadmaps',
    iconName: 'Home',
    badge: 'Growth Engine',
    category: 'Core Navigation',
  },
  {
    id: 'services',
    name: 'Services',
    shortName: 'Services',
    description: 'Career acceleration, startup blueprints, digital marketing & AI solutions',
    iconName: 'Layers',
    badge: '4 Pillars',
    category: 'Core Navigation',
  },
  {
    id: 'tools',
    name: 'Tools Hub',
    shortName: 'Tools',
    description: '14+ interactive calculators, ATS builders, and generator suites',
    iconName: 'Wrench',
    badge: '14+ Tools',
    category: 'Core Navigation',
  },
  {
    id: 'career',
    name: 'Career Solutions',
    shortName: 'Career',
    description: 'ATS resume builder, STAR interview coach, roadmaps & CTC salary calc',
    iconName: 'Briefcase',
    badge: 'Students & Jobs',
    category: 'Solutions & Growth',
  },
  {
    id: 'business',
    name: 'Business Strategy',
    shortName: 'Business',
    description: 'Idea validation, business plans, SWOT matrix & break-even economics',
    iconName: 'TrendingUp',
    badge: 'Founders',
    category: 'Solutions & Growth',
  },
  {
    id: 'ai-hub',
    name: 'AI Intelligence Hub',
    shortName: 'AI Hub',
    description: 'Gemini 3.7 Flash server-side assistants for career, copy & business',
    iconName: 'Bot',
    badge: 'Gemini AI',
    category: 'Solutions & Growth',
  },
  {
    id: 'resources',
    name: 'Resources & Vault',
    shortName: 'Resources',
    description: 'Battle-tested guides, templates, pitch decks & checklists',
    iconName: 'BookOpen',
    badge: 'Free Vault',
    category: 'Knowledge & Traffic',
  },
  {
    id: 'blog',
    name: 'Insights & Blog',
    shortName: 'Blog',
    description: 'In-depth career guides, MBA insights, startup ideas & marketing plays',
    iconName: 'FileText',
    badge: 'Articles',
    category: 'Knowledge & Traffic',
  },
  {
    id: 'about',
    name: 'About CareerNova',
    shortName: 'About',
    description: 'Our mission, vision, values, and lead creator Sudhir Singh',
    iconName: 'Compass',
    badge: 'Mission',
    category: 'Trust & Direct Connect',
  },
  {
    id: 'pricing',
    name: 'Pricing & Plans',
    shortName: 'Pricing',
    description: 'Free tier vs Pro AI speed & enterprise business consulting',
    iconName: 'Zap',
    badge: 'Free Tier',
    category: 'Trust & Direct Connect',
  },
  {
    id: 'contact',
    name: 'Contact & Support',
    shortName: 'Contact',
    description: 'Direct inquiries, partnership requests & developer hotline',
    iconName: 'Headphones',
    badge: 'Direct Connect',
    category: 'Trust & Direct Connect',
  },
];

export const INITIAL_BUSINESS_IDEA: BusinessIdeaResult = {
  ideaName: "SyncPulse AI",
  tagline: "Autonomous Meeting Summarizer and Task Execution Bridge for Remote Engineering Teams",
  problemStatement: "Engineering leads spend 6+ hours weekly transcribing video standups, manually updating Jira tickets, and context-switching between Slack and GitHub, leading to missed deliverables and fragmented documentation.",
  solutionOverview: "A privacy-first AI platform that hooks into Google Meet and Zoom, automatically generates engineering-accurate sprint action items, and creates pull requests / Jira issues directly with zero human data entry.",
  targetAudience: [
    {
      segment: "Remote Tech Startups (15-80 Engineers)",
      description: "Fast-moving engineering teams struggling with synchronous meeting fatigue and cross-timezone sync."
    },
    {
      segment: "Agile Development Agencies",
      description: "Client-facing development firms needing transparent, automated sprint reporting to demonstrate client deliverables."
    },
    {
      segment: "Technical Project Managers & Scrum Masters",
      description: "Managers seeking 1-click sprint retrospective reports and automated velocity tracking."
    }
  ],
  monetizationStrategies: [
    {
      model: "Pro Team Tier ($19 / user / month)",
      details: "Unlimited audio/video meeting transcriptions, automated Jira/GitHub task creation, Slack digest bot."
    },
    {
      model: "Enterprise Dedicated ($49 / user / month)",
      details: "Self-hosted LLM connector, SOC-2 Type II audit reports, custom glossary fine-tuning, SSO."
    },
    {
      model: "Annual Upfront Commitment",
      details: "2 months free plus dedicated customer success architect onboarding."
    }
  ],
  executionSteps: [
    {
      phase: "Phase 1: Validation & Beta Waitlist (Weeks 1-4)",
      tasks: [
        "Interview 25 Engineering Leads on Y Combinator and Reddit dev subreddits.",
        "Launch interactive demo landing page capturing 500+ waitlist emails.",
        "Test Chrome Extension prototype transcribing Google Meet with Gemini Flash API."
      ]
    },
    {
      phase: "Phase 2: Core MVP Build & Jira Integration (Weeks 5-8)",
      tasks: [
        "Deploy bi-directional webhook synchronization with Jira, Linear, and GitHub.",
        "Implement end-to-end client-side encryption for sensitive meeting audio.",
        "Onboard 15 alpha teams for weekly qualitative feedback loops."
      ]
    },
    {
      phase: "Phase 3: Public Launch & Growth Engine (Weeks 9-12)",
      tasks: [
        "Launch on Product Hunt, Hacker News Show HN, and Indie Hackers.",
        "Deploy viral 'Meeting Cost Calculator' widget driving high-intent inbound organic leads.",
        "Roll out automated 14-day free trial with interactive onboarding checklist."
      ]
    },
    {
      phase: "Phase 4: Scale & Enterprise Motion (Months 4-6)",
      tasks: [
        "Introduce SOC-2 compliance badges and automated security questionnaires.",
        "Scale targeted LinkedIn outbound campaigns to VP of Engineering personas.",
        "Target $25k MRR milestone and prepare Seed round pitch deck."
      ]
    }
  ],
  uniqueSellingPoints: [
    "Zero-bot passive recording mode (no awkward third-party participant bot in meetings)",
    "Deep native syntax awareness (accurately differentiates React, Rust, Kubernetes, and AWS jargon)",
    "Instant 1-click task sync directly to Linear, Jira, and GitHub without copy-pasting"
  ],
  potentialRisks: [
    {
      risk: "Incumbent video platforms (Zoom AI Companion, Microsoft Copilot) adding basic summaries.",
      mitigation: "Focus deeply on specialized developer workflow integrations (Linear/GitHub/GitLab PRs) where generalists cannot compete."
    },
    {
      risk: "Enterprise privacy concerns regarding meeting audio recording.",
      mitigation: "Offer on-premise local model processing and strict zero-data-retention compliance guarantees."
    }
  ],
  estimatedStartupCost: "$3,200 - $7,500 (Cloud infra, legal terms, domain & basic ads)",
  projectedPaybackPeriod: "3.5 months to cash-flow positive"
};

export const INITIAL_MARKETING_STRATEGY: MarketingStrategyResult = {
  strategySummary: "A multi-pronged developer-first inbound engine coupled with high-intent paid search and programmatic mini-tools to drive high-velocity trial signups.",
  positioningStatement: "For remote software development teams, SyncPulse AI is the autonomous sprint workflow assistant that converts meeting audio into production-ready Jira tickets, saving 6 hours per engineer weekly without intrusive recording bots.",
  budgetAllocation: [
    {
      channel: "Targeted Paid Search (Google Ads)",
      percentage: 35,
      monthlySpend: "$1,050",
      focus: "High-intent keywords: 'Jira AI automation', 'meeting notes for engineers', 'standup transcription'"
    },
    {
      channel: "Developer Content & SEO Hub",
      percentage: 25,
      monthlySpend: "$750",
      focus: "Deep engineering comparisons, remote team async playbooks, and Git workflow tutorials"
    },
    {
      channel: "Micro-Sponsorships & Tech Newsletters",
      percentage: 20,
      monthlySpend: "$600",
      focus: "Sponsored placements in Substack developer newsletters (TLDR, Bytes, Pointer)"
    },
    {
      channel: "Lifecycle Email & Product Drips",
      percentage: 10,
      monthlySpend: "$300",
      focus: "Automated onboarding sequences, milestone celebration emails, and churn re-engagement"
    },
    {
      channel: "Viral Engineering Calculator Mini-Tool",
      percentage: 10,
      monthlySpend: "$300",
      focus: "Free 'Meeting Cost vs Engineering Salary' interactive calculator for viral backlinks"
    }
  ],
  roadmap: [
    {
      period: "Month 1: Infrastructure & High-Intent Conversion",
      focus: "Establish high-converting landing page, implement tracking, launch high-intent search ads",
      keyActions: [
        "Implement post-signup event tracking in PostHog & GA4",
        "Publish 3 cornerstone comparison guides ('SyncPulse vs Otter for Dev Teams')",
        "Launch Google Ads campaign targeting 10 exact-match high-intent keywords"
      ]
    },
    {
      period: "Month 2: Developer Ecosystem & Social Proof",
      focus: "Activate community partnerships, launch on Product Hunt, publish case studies",
      keyActions: [
        "Execute Product Hunt #1 Product of the Day launch campaign",
        "Publish 2 customer video breakdowns showing 70% time reduction in sprint documentation",
        "Sponsor 3 top software engineering newsletters with targeted founder discount code"
      ]
    },
    {
      period: "Month 3: Product-Led Viral Loop & Referral Engine",
      focus: "Activate team expansion invites, launch affiliate program for dev consultants",
      keyActions: [
        "Incentivize team invites: 'Invite 3 teammates to unlock unlimited AI transcription credits'",
        "Launch 25% recurring affiliate partner program for Agile coaches and Scrum consultants",
        "Deploy retargeting ad campaigns to 30-day website visitors with testimonial snippets"
      ]
    }
  ],
  keyPerformanceIndicators: [
    {
      metric: "Customer Acquisition Cost (CAC)",
      target: "< $65 per paid seat",
      benchmark: "B2B SaaS average: $110 - $160"
    },
    {
      metric: "Visitor-to-Trial Conversion",
      target: "4.8%",
      benchmark: "Industry baseline: 2.5%"
    },
    {
      metric: "Trial-to-Paid Conversion",
      target: "18.5%",
      benchmark: "Freemium SaaS average: 12%"
    },
    {
      metric: "Monthly Recurring Revenue (MRR)",
      target: "$15,000 by Month 3",
      benchmark: "Targeting 240 active team seats"
    }
  ],
  quickGrowthHacks: [
    "Growth Hack 1: Embed a 'Generated automatically by SyncPulse AI' watermark on exported meeting summaries sent to Slack channels.",
    "Growth Hack 2: Create a free standalone 'Meeting Hourly Cost Calculator' Chrome extension that links back to the main app.",
    "Growth Hack 3: Host a weekly 'Async Engineering Teardowns' live stream analyzing real workflow bottlenecks."
  ]
};

export const INITIAL_SWOT_ANALYSIS: SwotAnalysisResult = {
  businessName: "SyncPulse AI",
  executiveSummary: "SyncPulse AI occupies a high-margin sweet spot in the remote developer tooling vertical. By focusing strictly on Jira/GitHub automation rather than generic transcriptions, it avoids direct price wars with commodity transcription apps.",
  strengths: [
    {
      id: "s1",
      title: "Deep Git & Jira Bi-Directional Integration",
      description: "Direct mapping of spoken action items into structured sprint tickets with automated priority tagging.",
      impact: "High"
    },
    {
      id: "s2",
      title: "Zero-Bot Passive Recording Technology",
      description: "Captures audio directly from browser tab without forcing an intrusive bot to enter private executive or engineering calls.",
      impact: "High"
    },
    {
      id: "s3",
      title: "Optimized Low-Latency Cloud Architecture",
      description: "Sub-2-second summary generation powered by Gemini Flash server-side pipelines.",
      impact: "High"
    },
    {
      id: "s4",
      title: "High Net Revenue Retention (NRR)",
      description: "Once an engineering team adopts the workflow, switching costs are high due to established ticket mapping rules.",
      impact: "Medium"
    }
  ],
  weaknesses: [
    {
      id: "w1",
      title: "Early Brand Awareness vs Legacy Incumbents",
      description: "Incumbents like Otter and Fireflies possess millions in backlink equity and organic traffic.",
      impact: "High"
    },
    {
      id: "w2",
      title: "Reliance on Third-Party Meeting Platform APIs",
      description: "Subject to platform policy shifts or audio API rate limits from Zoom and Google Meet.",
      impact: "Medium"
    },
    {
      id: "w3",
      title: "Lean Engineering & Customer Support Team",
      description: "Current 2-person founder team requires continuous automation to maintain sub-1-hour support SLAs.",
      impact: "Medium"
    }
  ],
  opportunities: [
    {
      id: "o1",
      title: "Enterprise On-Premise & Private Cloud Deployments",
      description: "Large fintech and healthcare enterprises willing to pay $1,200+/month for zero-data-retention on-premise clusters.",
      impact: "High"
    },
    {
      id: "o2",
      title: "Atlassian & GitHub Marketplace Distribution",
      description: "Featuring prominently in Atlassian Marketplace to tap into 250,000+ active Jira enterprise organizations.",
      impact: "High"
    },
    {
      id: "o3",
      title: "Multilingual Tech Translation Engine",
      description: "Real-time English synthesis for distributed teams speaking Japanese, German, Hindi, and Spanish.",
      impact: "Medium"
    }
  ],
  threats: [
    {
      id: "t1",
      title: "Bundled AI Assistants from Big Tech",
      description: "Microsoft Copilot or Zoom expanding native developer ticket creation natively in their suites.",
      impact: "High"
    },
    {
      id: "t2",
      title: "Model Cost Fluctuations & API Token Pricing",
      description: "Sudden cloud LLM pricing adjustments impacting gross margins on long transcriptions.",
      impact: "Medium"
    },
    {
      id: "t3",
      title: "Economic Downturn in Tech Hiring",
      description: "Reductions in engineering headcount affecting total per-seat subscription volume.",
      impact: "Medium"
    }
  ],
  strategicRecommendations: [
    "Build proprietary developer semantic prompt templates that make our Jira ticket quality 3x better than generic LLMs.",
    "Form fast-track integration partnerships with modern project tools like Linear and Height to capture modern tech startups.",
    "Introduce SOC-2 Type II audit compliance early to win security-conscious enterprise deals."
  ]
};

export const INITIAL_COMPETITOR_ANALYSIS: CompetitorAnalysisResult = {
  industryOverview: "The AI meeting notes and workflow automation sector is valued at $2.8B and growing at 32% CAGR. While broad transcription tools battle over commodity features, specialized vertical tools capturing deep developer integrations command 3x higher pricing power.",
  comparisonMatrix: [
    {
      id: "comp-our",
      name: "SyncPulse AI (Our Product)",
      type: "Our Venture",
      priceRange: "$19 - $49 / user / mo",
      coreFeatures: [
        "Jira & Linear Auto-Ticket Creator",
        "Zero-Bot Passive Browser Capture",
        "Technical Syntax Accuracy (React/Python/AWS)",
        "1-Click PDF & Markdown Export",
        "Instant Gemini 3.7 Flash Processing"
      ],
      marketPositioning: "Specialized, developer-first meeting intelligence engine for high-velocity software engineering teams.",
      keyStrengths: "Flawless Jira formatting, zero intrusive bots, transparent pricing, sub-2s generation.",
      mainWeaknesses: "Early stage brand, no native mobile app yet.",
      overallScore: 9.6
    },
    {
      id: "comp-alpha",
      name: "Otter.ai / Fireflies (Generalist AI)",
      type: "Market Leader (Generalist)",
      priceRange: "$18 - $39 / user / mo",
      coreFeatures: [
        "Generic Transcript & Summary",
        "Meeting Calendar Sync",
        "Basic CRM Integration (Salesforce/HubSpot)",
        "Keyword Search"
      ],
      marketPositioning: "Horizontal meeting assistant for broad enterprise sales and HR meetings.",
      keyStrengths: "Massive brand recognition, multi-language speech recognition, huge user base.",
      mainWeaknesses: "Requires intrusive participant bot in calls, fails completely on software code & Jira syntax, noisy summaries.",
      overallScore: 7.8
    },
    {
      id: "comp-beta",
      name: "Grain / Fathom (Sales Focused)",
      type: "Niche Competitor (Sales & Success)",
      priceRange: "$24 - $55 / user / mo",
      coreFeatures: [
        "Customer Call Video Snippets",
        "CRM Deal Field Auto-Fill",
        "Sales Call Scorecards",
        "Email Follow-up Drafts"
      ],
      marketPositioning: "Sales pipeline intelligence and deal coaching for SDRs and Account Executives.",
      keyStrengths: "Great video clipping UX, good HubSpot and Salesforce bi-directional sync.",
      mainWeaknesses: "Zero engineering/developer support, no Jira or GitHub integrations, expensive per-seat minimums.",
      overallScore: 8.1
    },
    {
      id: "comp-gamma",
      name: "Microsoft Teams Copilot / Zoom AI",
      type: "Platform Native (Incumbent)",
      priceRange: "$30 / user / mo (Add-on)",
      coreFeatures: [
        "Native Meeting Catch-up",
        "Office 365 / Word Integration",
        "Chat Summarization",
        "Slide Generation"
      ],
      marketPositioning: "Built-in productivity companion for traditional Fortune 500 corporate IT ecosystems.",
      keyStrengths: "Single billing for existing Microsoft/Zoom customers, deep security clearances.",
      mainWeaknesses: "Rigid corporate licensing, zero agile developer tools, poor customization of prompts.",
      overallScore: 7.2
    }
  ],
  featureComparison: [
    {
      feature: "Native Jira & Linear Task Generation",
      ourProduct: "✓ Full (With code blocks & priority)",
      competitor1: "✗ Generic text only",
      competitor2: "✗ None (Sales CRM only)"
    },
    {
      feature: "Intrusive Bot Requirement",
      ourProduct: "✓ No Bot Required (Tab Audio)",
      competitor1: "✗ Bot must join call",
      competitor2: "✗ Bot must join call"
    },
    {
      feature: "Technical Developer Jargon Accuracy",
      ourProduct: "✓ 98.4% (Fine-tuned for code)",
      competitor1: "⚠️ 64.2% (Often mistranscribes)",
      competitor2: "⚠️ 58.0% (Generic vocab)"
    },
    {
      feature: "Export Capabilities (PDF / MD / Jira / Slack)",
      ourProduct: "✓ Instant 1-Click All Formats",
      competitor1: "⚠️ Text & basic PDF",
      competitor2: "⚠️ Video clips only"
    },
    {
      feature: "Setup & Time to First Value",
      ourProduct: "✓ 60 Seconds",
      competitor1: "⚠️ 10-15 Minutes",
      competitor2: "⚠️ 25-45 Minutes"
    }
  ],
  moatStrategy: [
    "Moat 1 (Workflow Stickiness): Direct Jira/Linear webhook automation creates immense switching costs as teams rely on our custom ticket schema.",
    "Moat 2 (Speed & UX): Maintaining sub-2s generation with Gemini 3.7 Flash gives engineers an instantaneous experience that large legacy monoliths cannot match.",
    "Moat 3 (Developer Community): Cultivating open-source CLI integrations and GitHub action plugins to capture grassroots developer mindshare."
  ]
};

export const INITIAL_BUSINESS_PLAN: BusinessPlanResult = {
  companyName: "SyncPulse AI Inc.",
  executiveSummary: "SyncPulse AI is an enterprise-grade AI workflow platform that turns engineering meeting conversations into structured, production-ready software deliverables. By automating sprint ticket generation and pull request drafting, SyncPulse recovers 6+ hours per engineer weekly. Targeting 1.2M remote software engineers globally, we are building the definitive AI orchestration layer for modern software development.",
  problemSolution: {
    problem: "Software teams waste over 20% of their billable engineering hours in synchronous standups, backlog groomings, and post-meeting administrative ticket updates. Vital technical requirements get lost in translation, creating costly sprint delays.",
    solution: "SyncPulse AI captures technical meeting context with zero-bot passive audio streaming, identifies architectural decisions with 98% accuracy, and automatically populates Jira, Linear, and GitHub repositories with structured user stories, acceptance criteria, and subtasks."
  },
  marketSize: {
    tam: "$24.6 Billion (Total global software development productivity & workflow tooling market)",
    sam: "$4.8 Billion (Serviceable market: Remote and hybrid software engineering organizations globally)",
    som: "$120 Million (Obtainable market over 3 years: 2,500 mid-market tech companies & agencies)"
  },
  revenueModel: [
    {
      tier: "Starter Tier",
      price: "$19 / user / month",
      target: "Early-stage dev teams (3-15 engineers)",
      features: "Unlimited transcriptions, automated Jira/Linear ticket export, 30-day audio history, Slack integration."
    },
    {
      tier: "Scale Pro Tier",
      price: "$49 / user / month",
      target: "Mid-market tech companies (15-100 engineers)",
      features: "Custom engineering prompt templates, GitHub PR auto-generation, SOC-2 audit logs, priority SLA support."
    },
    {
      tier: "Enterprise Dedicated",
      price: "$89+ / user / month (Custom)",
      target: "Large enterprises & security-critical firms",
      features: "Private cloud VPC deployment, zero-data-retention LLM connector, custom SSO, dedicated customer architect."
    }
  ],
  financialProjections: [
    {
      year: "Year 1 (Bootstrap & Seed)",
      revenue: "$180,000",
      expenses: "$95,000",
      netProfit: "$85,000",
      activeCustomers: 65,
      growthRate: "Baseline Launch"
    },
    {
      year: "Year 2 (Product-Led Acceleration)",
      revenue: "$720,000",
      expenses: "$340,000",
      netProfit: "$380,000",
      activeCustomers: 220,
      growthRate: "+300% YoY"
    },
    {
      year: "Year 3 (Enterprise Scale & Expansion)",
      revenue: "$2,450,000",
      expenses: "$1,100,000",
      netProfit: "$1,350,000",
      activeCustomers: 640,
      growthRate: "+240% YoY"
    }
  ],
  goToMarketStrategy: [
    "Developer Inbound: High-ranking technical guides comparing async workflows, sprint estimation templates, and Git best practices.",
    "Marketplace Ecosystem: Featured placement on Atlassian Marketplace, GitHub Marketplace, and Google Workspace Store.",
    "Product-Led Referral: Meeting summaries sent to Slack include 1-click team join invites with bonus AI token credits.",
    "Direct Enterprise Outbound: Account-based marketing targeting CTOs and VPs of Engineering at Series A-C venture-backed tech startups."
  ],
  milestones: [
    {
      quarter: "Q1 Milestone",
      goal: "Beta launch with 25 pilot engineering teams; finalize SOC-2 Type I compliance framework."
    },
    {
      quarter: "Q2 Milestone",
      goal: "Launch self-serve checkout, achieve $20,000 MRR, and roll out GitHub PR automated drafting."
    },
    {
      quarter: "Q3 Milestone",
      goal: "Pass $50,000 MRR milestone; onboard first 5 enterprise annual contract agreements ($25k+ ACV)."
    },
    {
      quarter: "Q4 Milestone",
      goal: "Achieve cash-flow positive profitability; expand team to 6 full-time engineers and customer success reps."
    }
  ]
};

export const INITIAL_SOCIAL_CONTENT: SocialContentResult = {
  niche: "Tech Entrepreneurship, AI Tools & SaaS Growth",
  weeklyTheme: "The Lean Founder Playbook: Building, Validating & Scaling with Modern AI Systems",
  contentPillars: [
    "Tactical Frameworks & Blueprints",
    "Founder Behind-the-Scenes",
    "Data & Industry Contrarian Insights",
    "Social Proof & Real Metrics"
  ],
  viralHooks: [
    {
      type: "Contrarian Angle",
      hook: "Most founders spend 3 months building what could have been validated in 72 hours. Here is our 3-step rapid validation sprint:",
      explanation: "Challenges common belief with high contrast numbers (3 months vs 72 hours), triggering founders to read."
    },
    {
      type: "Metric-Driven Breakdown",
      hook: "Hot take: 'More features' is the #1 reason early-stage SaaS apps fail. Here's why subtraction beats addition:",
      explanation: "Piques curiosity around counter-intuitive business wisdom."
    },
    {
      type: "Behind-the-Scenes Proof",
      hook: "How we cut customer onboarding drop-off from 42% down to 8% with one simple tweak:",
      explanation: "Dramatic metric improvement backed by actionable before/after comparison."
    }
  ],
  weeklySchedule: [
    {
      day: "Monday",
      theme: "Tactical MVP Framework",
      format: "Step-by-Step Breakdown",
      objective: "High saves and bookmarks from early-stage builders"
    },
    {
      day: "Tuesday",
      theme: "Contrarian Product Philosophy",
      format: "Short-form Discussion Post",
      objective: "Ignite comments and healthy founder debate"
    },
    {
      day: "Wednesday",
      theme: "Conversion Optimization Case Study",
      format: "Before vs After Teardown",
      objective: "Establish technical and marketing authority"
    },
    {
      day: "Thursday",
      theme: "Engineering War Room",
      format: "Behind-the-Scenes Story",
      objective: "Build deep founder connection and trust"
    },
    {
      day: "Friday",
      theme: "Curated AI Growth Stack",
      format: "Listicle Resource Hub",
      objective: "High viral shares and reposts"
    },
    {
      day: "Saturday",
      theme: "Mindset & Psychology",
      format: "Inspirational Narrative",
      objective: "Weekend engagement and emotional resonance"
    },
    {
      day: "Sunday",
      theme: "Strategy Reset & Goal Accountability",
      format: "Community Discussion Prompt",
      objective: "High comment velocity ahead of the new week"
    }
  ],
  contentDrafts: [
    {
      id: "post-1",
      platform: "LinkedIn",
      format: "Tactical Thought Leadership",
      fullPost: `Most founders spend 3 months building what could have been validated in 72 hours.\n\nInstead of jumping straight into full-stack code, run this lean sprint:\n\n1. Write a 1-page high-converting value proposition highlighting ONE painful bottleneck.\n2. Conduct 25 qualitative discovery calls by offering free workflow audits.\n3. Pre-sell an early-bird lifetime pass. If 5 people pay upfront, you have real product pull.\n\nStop guessing. Start validating with real capital.`,
      callToAction: "What is your favorite method to validate ideas before writing a line of code?",
      hashtags: ["#Startups", "#Entrepreneurship", "#BuildInPublic", "#SaaS", "#ProductManagement"]
    },
    {
      id: "post-2",
      platform: "Twitter / X Thread",
      format: "Short-form Punchy Teardown",
      fullPost: `How we cut customer onboarding drop-off from 42% down to 8%:\n\n❌ Old Flow: 6 form fields -> Email confirmation -> Blank dashboard -> Churn.\n\n✅ New Flow: 1-click Google Auth -> Pre-loaded sample workspace -> 30-second interactive win.\n\nTime-to-value dropped from 9 minutes to 18 seconds. Conversions doubled immediately.\n\nFriction kills early retention.`,
      callToAction: "Retweet if you believe frictionless onboarding is the #1 growth unlock.",
      hashtags: ["#GrowthHacking", "#ProductDesign", "#IndieHackers", "#SaaSMetrics"]
    }
  ],
  engagementTips: [
    "Reply to every comment within the first 60 minutes of posting to maximize algorithm reach.",
    "Format with 1-2 sentence line breaks on mobile for maximum scannability.",
    "Place external links in the first comment rather than the main post body to avoid algorithmic reach suppression."
  ],
  days: [
    {
      dayNumber: 1,
      dayName: "Monday",
      pillar: "Tactical Framework",
      hook: "Most founders spend 3 months building what could have been validated in 72 hours.",
      caption: "Instead of jumping straight into full-stack development, run this exact test...",
      visualPrompt: "Clean comparison graphic: '3 Months of Guesswork' vs '72-Hour Sprint'",
      callToAction: "Bookmark this framework for your next product launch.",
      hashtags: ["#Startups", "#Entrepreneurship", "#BuildInPublic"],
      bestPostingTime: "08:15 AM EST"
    }
  ]
};

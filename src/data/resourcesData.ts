import { ResourceItem } from '../types';

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: 'res-career-01',
    title: 'Off-Campus Placement & Tech Job Search Master Checklist',
    category: 'Career Guides',
    format: 'Checklist',
    tags: ['Placement', 'Tech Jobs', 'ATS Resume', 'Interview Prep'],
    badge: 'Popular',
    description: 'A 25-point comprehensive checklist covering resume optimization, LinkedIn networking, cold outreach, and DSA/System Design interview preparation.',
    contentSnippet: [
      '✓ Ensure resume is 1-page, single-column, standard font (10-12pt) with ATS score > 85%.',
      '✓ Create a live portfolio with 2-3 production-grade deployed projects (with GitHub repos + live URLs).',
      '✓ Send 5 personalized LinkedIn outreach messages to engineering managers daily.',
      '✓ Practice 50 core LeetCode Medium problems + top 20 Behavioral STAR answers.',
      '✓ Prepare 3 insightful reverse-questions for the interviewer.'
    ],
    fullDetails: [
      'Phase 1: Resume & Online Presence Polish (Days 1-7)',
      'Phase 2: Targeted Cold Outreach & Referral Hunting (Days 8-21)',
      'Phase 3: Mock Interview Sprints & Technical Drill (Days 22-45)'
    ]
  },
  {
    id: 'res-career-02',
    title: 'High-Impact LinkedIn Profile Optimization Blueprint',
    category: 'Career Guides',
    format: 'Interactive Guide',
    tags: ['LinkedIn', 'Personal Branding', 'Recruiter Inbound'],
    description: 'Step-by-step framework to optimize your headline, About section, featured media, and recommendation strategy to attract inbound recruiters.',
    contentSnippet: [
      '• Headline formula: [Target Role] | Helping [Companies/Clients] achieve [Metric] with [Key Tech Stack].',
      '• About section: Tell your origin story in 3 short paragraphs + bulleted core competencies.',
      '• Featured section: Pin your live projects, open source contributions, or top article teardowns.',
      '• Creator mode: Post 2-3 technical learnings or build-in-public updates weekly.'
    ]
  },
  {
    id: 'res-biz-01',
    title: 'Startup 72-Hour Rapid Idea Validation Sprint Template',
    category: 'Business Guides',
    format: 'Template',
    tags: ['Validation', 'Lean Startup', 'Customer Discovery', 'MVP'],
    badge: 'Founder Favorite',
    description: 'Stop building in the dark. Use this 3-day sprint template to test customer pain points, pre-sell value propositions, and validate demand before coding.',
    contentSnippet: [
      'Day 1: Problem Definition & 20 Customer Persona Profiles.',
      'Day 2: 1-Page High-Converting Landing Page with Early-Bird Waitlist / Pre-order button.',
      'Day 3: 25 Direct Outreach Discovery Calls & Smoke Test Metrics Review.'
    ]
  },
  {
    id: 'res-biz-02',
    title: 'VC & Angel Pitch Deck 10-Slide Standard Framework',
    category: 'Business Guides',
    format: 'Framework',
    tags: ['Fundraising', 'Pitch Deck', 'Angel Investors', 'Venture Capital'],
    description: 'The battle-tested 10-slide structure used by top Silicon Valley & Indian startups to raise Pre-Seed and Seed funding rounds.',
    contentSnippet: [
      'Slide 1: Problem Statement (The burning market pain).',
      'Slide 2: Solution & Product Demo (The unfair technological advantage).',
      'Slide 3: Market Sizing (TAM / SAM / SOM calculation).',
      'Slide 4: Traction & Early Metrics (MoM growth, retention cohorts).',
      'Slide 5: Business Model & Unit Economics (CAC, LTV, Gross Margins).',
      'Slide 6: Competitive Moat Matrix.',
      'Slide 7: Go-To-Market Engine.',
      'Slide 8: Founding Team & Domain Credentials.',
      'Slide 9: Financial Projections & Milestones.',
      'Slide 10: The Ask (Capital amount & allocation breakdown).'
    ]
  },
  {
    id: 'res-mkt-01',
    title: 'Zero-Budget Organic SEO & Content Engine Playbook',
    category: 'Marketing Guides',
    format: 'Cheat Sheet',
    tags: ['SEO', 'Content Strategy', 'Organic Traffic', 'Blogging'],
    description: 'How to rank on Google without paying for high-priced backlink agencies. Keyword clustering, programmatic pages, and internal linking strategies.',
    contentSnippet: [
      '• Target low-competition "How to / Calculator / Alternative" long-tail keywords (KD < 25).',
      '• Match search intent with high-density skimmable headings and interactive calculators.',
      '• Refresh and update cornerstone blog posts every 90 days with updated timestamps.'
    ]
  },
  {
    id: 'res-mkt-02',
    title: 'High-Converting B2B Cold Outreach Email Scripts (10 Pack)',
    category: 'Templates',
    format: 'Template',
    tags: ['Cold Email', 'Sales', 'Lead Gen', 'Copywriting'],
    badge: 'Ready to Copy',
    description: 'Plug-and-play email sequences tailored for founders, agency owners, software developers, and freelance consultants.',
    contentSnippet: [
      'Template 1: The "Loom Video Audit" Hook (45% Response Rate)',
      'Template 2: The "Mutual Connection & Trigger Event" Angle',
      'Template 3: The "Quick Feedback on your Roadmap" Message',
      'Template 4: The "Permission-Based Teaser" Script'
    ]
  },
  {
    id: 'res-fin-01',
    title: 'Startup Financial Modeling & Unit Economics Cheat Sheet',
    category: 'Finance Basics',
    format: 'Cheat Sheet',
    tags: ['Finance', 'CAC', 'LTV', 'Burn Rate', 'Runway'],
    description: 'Master the core formulas every founder and manager must know: Customer Acquisition Cost (CAC), Lifetime Value (LTV), Churn, Runway, and Contribution Margin.',
    contentSnippet: [
      '• LTV Formula = (Average Revenue Per User × Gross Margin %) / Churn Rate',
      '• Healthy LTV:CAC Ratio = 3:1 or higher.',
      '• Runway = Current Cash in Bank / Monthly Net Burn Rate.',
      '• Payback Period = CAC / (Monthly ARPU × Gross Margin %) [Target < 12 months].'
    ]
  },
  {
    id: 'res-fin-02',
    title: 'Salary Negotiation & Equity Compensation Handbook',
    category: 'Finance Basics',
    format: 'Interactive Guide',
    tags: ['Salary', 'ESOPs', 'Stock Options', 'Compensation'],
    description: 'Learn how to evaluate CTC vs in-hand components, negotiate base salary increases, and understand ESOP vesting schedules and strike prices.',
    contentSnippet: [
      '• Distinguish fixed in-hand pay from variable bonuses and long-term ESOPs.',
      '• Always counter-offer using market percentile benchmarks (e.g. 75th percentile).',
      '• Negotiate sign-on bonuses or performance review timelines if base is capped.'
    ]
  }
];

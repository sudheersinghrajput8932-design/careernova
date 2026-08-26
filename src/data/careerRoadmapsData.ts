import { CareerRoadmap } from '../types';

export const CAREER_ROADMAPS: CareerRoadmap[] = [
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Software Engineer (Modern Web & Cloud)',
    role: 'Full-Stack Developer',
    avgSalaryIndia: '₹8 LPA – ₹28 LPA',
    avgSalaryGlobal: '$85,000 – $165,000',
    timeline: '6 - 9 Months',
    difficulty: 'Intermediate',
    description: 'Master frontend architecture (React, Next.js, Tailwind), backend APIs (Node.js, Express, Postgres/MongoDB), and cloud deployment (Docker, CI/CD, AWS/Vercel).',
    phases: [
      {
        phaseName: 'Phase 1: Modern Frontend Core & TypeScript',
        duration: 'Month 1 - 2',
        skillsToLearn: ['HTML5/CSS3 Semantic Mastery', 'JavaScript (ES6+, Async, DOM, Closures)', 'TypeScript Fundamentals', 'React 19 & State Management', 'Tailwind CSS'],
        recommendedTools: ['VS Code', 'Git/GitHub', 'Chrome DevTools', 'Postman'],
        milestoneProject: 'Interactive Task Management Dashboard with LocalStorage and responsive UI'
      },
      {
        phaseName: 'Phase 2: Backend Architecture, Databases & APIs',
        duration: 'Month 3 - 4',
        skillsToLearn: ['Node.js & Express.js', 'RESTful API Design & OpenAPI', 'PostgreSQL / Prisma ORM & MongoDB', 'Authentication (JWT, OAuth2, Session Security)', 'Caching with Redis'],
        recommendedTools: ['DBeaver / Supabase', 'Docker', 'Postman / Insomnia'],
        milestoneProject: 'Full-Stack E-Commerce or SaaS API with Auth, Payments, and Database Indexing'
      },
      {
        phaseName: 'Phase 3: System Design, Testing & Cloud CI/CD',
        duration: 'Month 5 - 6',
        skillsToLearn: ['Microservices vs Monoliths', 'Message Queues (RabbitMQ/Kafka)', 'Unit & Integration Testing (Vitest, Playwright)', 'Docker & GitHub Actions CI/CD', 'AWS S3 / Cloudflare CDN'],
        recommendedTools: ['AWS / GCP', 'GitHub Actions', 'Datadog / Sentry'],
        milestoneProject: 'Production-ready Multi-tenant SaaS with real-time WebSockets and automated deployment'
      }
    ],
    certificationsRecommended: ['AWS Certified Solutions Architect Associate', 'Meta Front-End Developer Certificate'],
    interviewFocusAreas: ['Data Structures & Algorithms (Arrays, Trees, Dynamic Programming)', 'System Design (Scale to 100k QPS)', 'JavaScript internals & React rendering lifecycle']
  },
  {
    id: 'ai-data-engineer',
    title: 'AI, LLM & Machine Learning Engineer',
    role: 'AI & Data Scientist',
    avgSalaryIndia: '₹10 LPA – ₹35 LPA',
    avgSalaryGlobal: '$110,000 – $210,000',
    timeline: '8 - 12 Months',
    difficulty: 'Advanced',
    description: 'Learn Python data engineering, LLM orchestration (LangChain, LlamaIndex, Gemini/OpenAI SDKs), vector databases (Pinecone, ChromaDB), and production ML pipelines.',
    phases: [
      {
        phaseName: 'Phase 1: Python, Mathematics & Data Foundations',
        duration: 'Month 1 - 3',
        skillsToLearn: ['Advanced Python & NumPy/Pandas', 'Linear Algebra, Probability & Statistics', 'SQL & Data Wrangling', 'Data Visualization (Matplotlib, Seaborn)'],
        recommendedTools: ['Jupyter Notebooks', 'Google Colab', 'Pandas', 'PostgreSQL'],
        milestoneProject: 'Automated Financial Market Exploratory Data Analysis & Sentiment Analyzer'
      },
      {
        phaseName: 'Phase 2: Machine Learning & Deep Learning Core',
        duration: 'Month 4 - 6',
        skillsToLearn: ['Scikit-Learn (Supervised/Unsupervised)', 'PyTorch & Neural Networks', 'CNNs, RNNs, and Transformer Architecture', 'Model Evaluation & Hyperparameter Tuning'],
        recommendedTools: ['PyTorch', 'Hugging Face Transformers', 'Weights & Biases'],
        milestoneProject: 'Custom Image & Text Classification Pipeline with High Precision Benchmark'
      },
      {
        phaseName: 'Phase 3: Generative AI, RAG & LLM Deployment',
        duration: 'Month 7 - 9',
        skillsToLearn: ['Retrieval Augmented Generation (RAG)', 'Vector Embeddings & Semantic Search', 'Agentic Workflows & Tool Calling', 'Model Quantization & vLLM Serving', 'FastAPI & Production AI Guardrails'],
        recommendedTools: ['Pinecone', 'Gemini API SDK', 'LangChain / LangGraph', 'Docker'],
        milestoneProject: 'Enterprise Multi-Document RAG Knowledge Base with Source Grounding and Citations'
      }
    ],
    certificationsRecommended: ['Google Cloud Professional Data Engineer', 'DeepLearning.AI Generative AI for Everyone'],
    interviewFocusAreas: ['Transformer Attention Mechanisms', 'RAG Retrieval Optimization & Chunking Strategies', 'Probability & Python live coding']
  },
  {
    id: 'product-manager',
    title: 'Tech Product Manager (PM & Product Lead)',
    role: 'Product Manager',
    avgSalaryIndia: '₹14 LPA – ₹36 LPA',
    avgSalaryGlobal: '$100,000 – $190,000',
    timeline: '4 - 6 Months',
    difficulty: 'Intermediate',
    description: 'Lead product strategy, write crisp PRDs, prioritize feature backlogs with data, align engineering & business teams, and drive product-led growth (PLG).',
    phases: [
      {
        phaseName: 'Phase 1: Customer Discovery & Problem Definition',
        duration: 'Month 1 - 2',
        skillsToLearn: ['User Research & Jobs To Be Done (JTBD)', 'User Persona & Journey Mapping', 'Market Sizing & Competitive Benchmarking', 'Product Teardowns & Heuristic Evaluations'],
        recommendedTools: ['Figma', 'Miro / Whimsical', 'Loom', 'Notion'],
        milestoneProject: 'Comprehensive Product Teardown & Redesign Case Study for a Top SaaS App'
      },
      {
        phaseName: 'Phase 2: PRD Writing, Roadmapping & Metrics',
        duration: 'Month 3 - 4',
        skillsToLearn: ['Writing Engineering-Ready PRDs', 'Prioritization Frameworks (RICE, Kano, Value vs Effort)', 'Product Analytics (Mixpanel, PostHog, Amplitude)', 'AARRR Funnel Optimization & Unit Economics'],
        recommendedTools: ['Jira / Linear', 'PostHog', 'Mixpanel', 'Google Analytics 4'],
        milestoneProject: 'Full Product Requirement Document (PRD) with interactive wireframes and telemetry plan'
      },
      {
        phaseName: 'Phase 3: Execution, GTM & Experimentation',
        duration: 'Month 5 - 6',
        skillsToLearn: ['Agile Sprint Planning & Scrum', 'A/B Testing & Statistical Significance', 'Go-To-Market (GTM) Strategy', 'Stakeholder & Executive Communication'],
        recommendedTools: ['Optimizely', 'Linear', 'Google Slides / Pitch'],
        milestoneProject: 'Live 0-to-1 Beta Product Launch Campaign with measured onboarding funnel conversion'
      }
    ],
    certificationsRecommended: ['Product School Certified Product Manager (CPM)', 'Reforge Growth Series'],
    interviewFocusAreas: ['Product Sense & Design Questions (e.g. Design a parking app for blind users)', 'Analytical / Metrics Diagnosis (Retention drop triage)', 'Behavioral Conflict Leadership']
  },
  {
    id: 'growth-marketer',
    title: 'Growth Marketer & Performance Strategy Lead',
    role: 'Digital Marketing Lead',
    avgSalaryIndia: '₹8 LPA – ₹25 LPA',
    avgSalaryGlobal: '$75,000 – $145,000',
    timeline: '4 - 6 Months',
    difficulty: 'Beginner',
    description: 'Drive profitable customer acquisition and retention through Paid Ads (Meta, Google, LinkedIn), Organic SEO, Email Marketing Automations, and Conversion Rate Optimization (CRO).',
    phases: [
      {
        phaseName: 'Phase 1: Copywriting, Funnels & Organic SEO',
        duration: 'Month 1 - 2',
        skillsToLearn: ['High-Conversion Landing Page Copywriting', 'Technical & On-Page SEO Architecture', 'Keyword Research & Clustering', 'Content Marketing & Lead Magnets'],
        recommendedTools: ['Ahrefs / Semrush', 'WordPress / Webflow', 'Google Search Console'],
        milestoneProject: '10-Article Organic SEO Content Hub ranking for 5+ buyer-intent keywords'
      },
      {
        phaseName: 'Phase 2: Paid Acquisition & Conversion Tracking',
        duration: 'Month 3 - 4',
        skillsToLearn: ['Meta Ads Manager (Audiences, Creative Testing, CBO)', 'Google Search & PMax Campaigns', 'Pixel Setup & Server-Side Tracking (CAPI)', 'Ad Creative Scripting & Hook Formulas'],
        recommendedTools: ['Meta Ads Manager', 'Google Ads', 'Canva Pro', 'Triple Whale / GA4'],
        milestoneProject: 'Live Ad Campaign Spend Test with verified ROAS > 2.5x and lead capture'
      },
      {
        phaseName: 'Phase 3: Retention, Email Automations & Viral Loops',
        duration: 'Month 5 - 6',
        skillsToLearn: ['Email Drip Workflows (Klaviyo, Mailchimp)', 'Customer Retention & Churn Reduction', 'Product-Led Referral Loops & Viral Mechanics', 'A/B Split Testing & CRO'],
        recommendedTools: ['Klaviyo', 'Postmark', 'VWO / Google Optimize', 'Hotjar'],
        milestoneProject: 'Automated 7-Day High-Converting Email Nurture Sequence with 40%+ open rates'
      }
    ],
    certificationsRecommended: ['Google Ads Search & Measurement Certification', 'HubSpot Inbound Marketing'],
    interviewFocusAreas: ['CAC/LTV Optimization Scenarios', 'Ad Creative Fatigue & Scaling Strategies', 'Funnel Bottleneck Diagnosis']
  }
];

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  BarChart3,
  Workflow,
  Kanban,
  Code2,
  Globe,
  Smartphone,
  CloudCog,
  Rocket,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  ExternalLink,
  MessageCircle,
  X,
  Phone,
  Filter,
  Star,
  Award,
  Share2,
  Target,
  Megaphone,
  GraduationCap,
  Users,
  LineChart,
  BrainCircuit,
  MousePointer2,
  Check,
  Layers3
} from 'lucide-react';
import { TabId } from '../../types';
import { copyToClipboard } from '../../utils/exportUtils';

export interface ExpertiseCardItem {
  id: string;
  cardNumber: number;
  title: string;
  category: 'Business & Analytics' | 'Web & CMS' | 'Mobile & iOS' | 'Cloud & Growth';
  focus: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  image: string;
  description: string;
  motivationalQuote: string;
  deliverables: string[];
  techStack: string[];
  businessImpact: string;
  whatsappMessage: string;
}

interface SpecialistsExpertiseViewProps {
  onNavigate?: (tab: TabId, subTool?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

const smoothTransition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const EXPERTISE_CARDS: ExpertiseCardItem[] = [
  {
    id: 'financial-modeling',
    cardNumber: 1,
    title: 'Financial Modeling & Business Analysis',
    category: 'Business & Analytics',
    focus: 'Data-driven financial forecasting, metrics, and business strategy',
    tag: 'Strategic Finance',
    icon: TrendingUp,
    accentColor: 'from-blue-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    description:
      'Transform complex operational data into crystal-clear 3-statement financial models, discounted cash flow (DCF) valuations, and investor-ready unit economics. We construct resilient scenario models that empower founders and executive leadership to make high-conviction capital allocation decisions.',
    motivationalQuote: 'Turn financial ambiguity into predictable mathematical clarity.',
    deliverables: [
      '3-Statement Integrated Projections (P&L, Balance Sheet, Cash Flow)',
      'Venture Capital Valuation & DCF Sensitivity Matrices',
      'Unit Economics Architecture (LTV, CAC, Payback Period, Net Margin)',
      'Dynamic Runway Burn Rate & Break-Even Modeling',
      'Investor-Ready Financial Pitch Decks & Data Rooms'
    ],
    techStack: ['Advanced Excel / Google Sheets', 'DCF Valuation', 'Monte Carlo Simulation', 'Power Query', 'Financial KPIs'],
    businessImpact: 'Average 40% reduction in forecasting variance and institutional-grade investor presentation confidence.',
    whatsappMessage: 'Hi Sudhir! I am interested in your Financial Modeling & Business Analysis consulting services.'
  },
  {
    id: 'business-intelligence',
    cardNumber: 2,
    title: 'Business Intelligence & Data Analytics',
    category: 'Business & Analytics',
    focus: 'Advanced data processing, insights, and reporting tools',
    tag: 'Enterprise BI',
    icon: BarChart3,
    accentColor: 'from-indigo-600 to-violet-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description:
      'Unify fragmented data streams into automated, real-time executive dashboards and predictive analytical pipelines. We build scalable reporting layers that eliminate manual spreadsheet reporting and surface actionable growth opportunities before your competitors spot them.',
    motivationalQuote: 'Decisions guided by verified data consistently outperform opinions.',
    deliverables: [
      'Executive Power BI & Tableau Real-Time Command Centers',
      'Automated SQL ETL Data Warehousing Pipelines',
      'Cohort Retention, Churn Diagnostics & Funnel Analytics',
      'Automated Multi-Channel Revenue & Margin Telemetry',
      'Self-Service Analytics Frameworks for Departmental Leads'
    ],
    techStack: ['Power BI', 'Tableau', 'PostgreSQL / Snowflake', 'Python (Pandas)', 'Looker', 'Metabase'],
    businessImpact: 'Eliminate 15+ hours of weekly manual reporting while uncovering hidden revenue leakage.',
    whatsappMessage: 'Hi Sudhir! I would like to consult on Business Intelligence & Data Analytics systems.'
  },
  {
    id: 'crm-erp-bpm',
    cardNumber: 3,
    title: 'CRM, ERP & Business Process Management',
    category: 'Business & Analytics',
    focus: 'Workflow optimization, resource planning, and enterprise tooling',
    tag: 'Process Scaling',
    icon: Workflow,
    accentColor: 'from-violet-600 to-purple-600',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description:
      'Eliminate operational friction and siloed departments through tailored CRM configurations, enterprise resource planning (ERP) workflows, and intelligent business process automations that keep your revenue engine humming seamlessly.',
    motivationalQuote: 'Systematize the predictable so you can humanize the exceptional.',
    deliverables: [
      'Custom CRM Pipeline Setup, Field Architecture & Data Migration',
      'Automated Lead Qualification, Scoring & SDR Lifecycle Routing',
      'Enterprise Resource Planning (ERP) Supply Chain & Inventory Mapping',
      'Cross-Department Standard Operating Procedure (SOP) Digitization',
      'Multi-App Enterprise Integrations via Zapier & Make.com'
    ],
    techStack: ['HubSpot CRM', 'Salesforce', 'Zoho One', 'Odoo ERP', 'Zapier', 'Make.com', 'Jira Service Desk'],
    businessImpact: 'Up to 3x faster lead-to-opportunity conversions and zero dropped inquiries.',
    whatsappMessage: 'Hi Sudhir! I would like to optimize our CRM, ERP & Business Process Management workflows.'
  },
  {
    id: 'project-stakeholder-management',
    cardNumber: 4,
    title: 'Project & Stakeholder Management',
    category: 'Business & Analytics',
    focus: 'Agile execution, cross-functional leadership, and delivery tracking',
    tag: 'Agile Leadership',
    icon: Kanban,
    accentColor: 'from-purple-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description:
      'Bridge the gap between business vision and engineering execution. We implement disciplined Agile frameworks, transparent sprint cadence, and cross-functional leadership that ensures projects ship on time, on budget, and beyond stakeholder expectations.',
    motivationalQuote: 'Excellence in execution turns ambitious strategy into reality.',
    deliverables: [
      'Agile / Scrum Sprint Planning, Backlog Grooming & Velocity Tracking',
      'Stakeholder Communication Matrices & Executive Roadmap Dashboards',
      'Risk Identification, Critical Path Analysis & Mitigation Governance',
      'Milestone SLA Auditing & Cross-Functional Team Alignment',
      'Comprehensive Engineering-to-Business Handoff Documentation'
    ],
    techStack: ['Jira Software', 'Linear', 'Confluence', 'Asana', 'Notion', 'Agile / Scrum', 'Gantt Charting'],
    businessImpact: 'Deliver complex software milestones 30% faster with total stakeholder alignment.',
    whatsappMessage: 'Hi Sudhir! I need assistance with Project & Stakeholder Management and Agile delivery.'
  },
  {
    id: 'fullstack-web-dev',
    cardNumber: 5,
    title: 'Full-Stack Web Development',
    category: 'Web & CMS',
    focus: 'Modern HTML, CSS, JavaScript, PHP, and Java Spring Boot solutions',
    tag: 'Production Grade',
    icon: Code2,
    accentColor: 'from-emerald-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    description:
      'Construct rock-solid, production-grade web applications with modern frontend responsiveness and robust enterprise backend architectures. From reactive JavaScript interfaces to scalable Java Spring Boot microservices and resilient PHP applications, we write clean, maintainable, and type-safe code.',
    motivationalQuote: 'Clean code and scalable architecture are the foundations of digital durability.',
    deliverables: [
      'Reactive Frontend SPAs engineered with Modern JavaScript, React & TypeScript',
      'High-Throughput Enterprise Backend Microservices with Java Spring Boot',
      'Resilient Server-Side Web Architectures with Modern PHP (Laravel)',
      'Semantic, Responsive & Accessible Styling with HTML5, CSS3 & Tailwind',
      'Secure Authentication, Database Indexing & Cloud API Gateways'
    ],
    techStack: ['JavaScript (ES6+)', 'React / TypeScript', 'Java Spring Boot', 'PHP / Laravel', 'HTML5 / Tailwind CSS', 'Node.js'],
    businessImpact: 'Sub-second load times, 99.9% uptime architecture, and effortless feature extensibility.',
    whatsappMessage: 'Hi Sudhir! I want to discuss Full-Stack Web Development for our application.'
  },
  {
    id: 'custom-wordpress',
    cardNumber: 6,
    title: 'Custom WordPress Development & Ecosystems',
    category: 'Web & CMS',
    focus: 'Scalable CMS architecture, themes, and plugin integrations',
    tag: 'Bespoke CMS',
    icon: Globe,
    accentColor: 'from-teal-600 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    description:
      'Elevate beyond off-the-shelf templates with custom-coded WordPress themes, proprietary plugins, and headless CMS architectures. We engineer ultra-fast, security-hardened WordPress platforms optimized for high editorial velocity and seamless WooCommerce checkout conversions.',
    motivationalQuote: 'Empower marketing teams with effortless editing without compromising code integrity.',
    deliverables: [
      'Pixel-Perfect Custom Theme Development from Figma & XD Designs',
      'Bespoke WordPress Plugin Engineering for Custom Business Logic',
      'WooCommerce Payment Gateway, Shipping & Subscription Architectures',
      'Google Core Web Vitals 95+ PageSpeed & Asset Optimization',
      'Hardened Security Protocols, Automated Backups & WP-CLI Deployments'
    ],
    techStack: ['WordPress Core', 'PHP 8.2+', 'ACF Pro', 'WooCommerce', 'Gutenberg Blocks', 'Redis Object Cache', 'WP-CLI'],
    businessImpact: '95+ Google PageSpeed score and full autonomy for non-technical content editors.',
    whatsappMessage: 'Hi Sudhir! I am looking for Custom WordPress Development & Theme Engineering.'
  },
  {
    id: 'native-ios-swift',
    cardNumber: 7,
    title: 'Native iOS & Swift App Development',
    category: 'Mobile & iOS',
    focus: 'Swift, SwiftUI, UIKit, Xcode, and iOS SDK development',
    tag: '100% Native iOS',
    icon: Smartphone,
    accentColor: 'from-indigo-600 to-sky-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    description:
      'Craft fluid, battery-efficient, and visually stunning native Apple applications built strictly in Swift and SwiftUI. Leveraging the latest Apple SDKs, 120Hz ProMotion animations, and Human Interface Guidelines, we deliver mobile experiences users love and retain.',
    motivationalQuote: 'Native craftsmanship creates the unforgettable tactile feel of Apple software.',
    deliverables: [
      'Intuitive, Fluid User Interfaces using Declarative SwiftUI & UIKit',
      'Native Device Hardware Integrations (Camera, FaceID, Biometrics, CoreLocation)',
      'Local Data Caching & Offline-First UX with Core Data & SwiftData',
      'StoreKit 2 In-App Purchases, Auto-Renewing Subscriptions & Paywalls',
      'Strict Compliance with Apple Human Interface Guidelines (HIG)'
    ],
    techStack: ['Swift 5.10+', 'SwiftUI', 'UIKit', 'Xcode 16', 'Combine', 'Core Data', 'StoreKit 2', 'iOS SDKs'],
    businessImpact: 'Silky smooth 60/120fps performance, 5-star user ratings, and zero hybrid-web sluggishness.',
    whatsappMessage: 'Hi Sudhir! I want to build a Native iOS App with Swift & SwiftUI.'
  },
  {
    id: 'api-networking-cloud',
    cardNumber: 8,
    title: 'API Integration, Networking & Cloud Databases',
    category: 'Cloud & Growth',
    focus: 'REST APIs, JSON, Core Data, Git/GitHub, and Firebase',
    tag: 'Cloud Infrastructure',
    icon: CloudCog,
    accentColor: 'from-sky-600 to-blue-600',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    description:
      'Connect complex systems with bulletproof networking layers, reliable JSON data serialization, and cloud-native databases. We establish automated CI/CD pipelines, robust Git workflows, and synchronized Firebase backends that never drop a packet.',
    motivationalQuote: 'Invisible, resilient infrastructure powers the world’s best digital products.',
    deliverables: [
      'RESTful & GraphQL Client Networking with Type-Safe JSON Parsing',
      'Firebase Firestore Real-Time Synchronization, Auth & Security Rules',
      'Offline-First Local Storage Architecture with Core Data & SQLite',
      'Automated Git Branching, Code Review & GitHub Actions CI/CD',
      'Third-Party Payment, Messaging & Webhook Ingestion Gateways'
    ],
    techStack: ['REST APIs', 'JSON / Codable', 'URLSession', 'Firebase Firestore', 'Core Data', 'Git / GitHub Actions', 'Postman'],
    businessImpact: 'Fault-tolerant network resiliency and instant real-time cloud data synchronization.',
    whatsappMessage: 'Hi Sudhir! I need help with API Integration, Cloud Databases & Backend Networking.'
  },
  {
    id: 'app-store-deployment',
    cardNumber: 9,
    title: 'App Store Deployment & Performance Optimization',
    category: 'Mobile & iOS',
    focus: 'TestFlight, App Store publishing, debugging, and push notifications',
    tag: 'Launch & Release',
    icon: Rocket,
    accentColor: 'from-amber-600 to-orange-600',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80',
    description:
      'Navigate the App Store approval process with zero friction. We conduct deep Xcode Instruments profiling, memory leak elimination, and TestFlight cohort testing, paired with high-engagement Apple Push Notification Services (APNs) that drive re-engagement.',
    motivationalQuote: 'A successful launch is the culmination of obsessive testing and flawless distribution.',
    deliverables: [
      'End-to-End App Store Submission, Guideline Auditing & Review Approval',
      'TestFlight Internal & External Beta Cohort Distribution Pipelines',
      'Apple Push Notification Service (APNs) & Rich Notification Delivery',
      'Xcode Instruments Memory Leak, CPU & Thermal Profiling',
      'App Store Optimization (ASO) Metadata, Screenshots & Keyword Strategy'
    ],
    techStack: ['App Store Connect', 'TestFlight', 'APNs / FCM', 'Xcode Instruments', 'Crashlytics', 'ASO Tools'],
    businessImpact: 'First-time App Store approval rate and 99.9% crash-free user sessions.',
    whatsappMessage: 'Hi Sudhir! I need App Store Deployment & Performance Optimization support.'
  },
  {
    id: 'seo-growth-strategy',
    cardNumber: 10,
    title: 'Search Engine Optimization (SEO) & Growth Strategy',
    category: 'Cloud & Growth',
    focus: 'On-page/off-page SEO, visibility, and digital ranking',
    tag: 'Organic Growth',
    icon: Search,
    accentColor: 'from-rose-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description:
      'Dominate search engine results and generate compound organic traffic through data-backed technical SEO, high-intent keyword clustering, schema structured data, and high-authority link acquisition strategies built for sustainable market leadership.',
    motivationalQuote: 'Organic search is the most valuable long-term customer acquisition asset you can own.',
    deliverables: [
      'Comprehensive Technical SEO Audits (Crawl Budget, Canonicalization, Indexing)',
      'High-Intent Commercial Keyword Clustering & Content Gap Mapping',
      'Schema.org Structured Data & Rich Snippet Implementation',
      'Authoritative White-Hat Backlink Acquisition & Digital PR',
      'Conversion Rate Optimization (CRO) & Heatmap Behavioral Analysis'
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Schema.org JSON-LD', 'Google Analytics 4'],
    businessImpact: 'Sustainable 3x+ growth in qualified organic inbound inquiries within 90-180 days.',
    whatsappMessage: 'Hi Sudhir! I want to scale our rankings with your Search Engine Optimization (SEO) & Growth Strategy.'
  },
  {
    id: 'marketing-campaign-growth',
    cardNumber: 11,
    title: 'Marketing Campaign & Growth Strategy',
    category: 'Cloud & Growth',
    focus: 'Campaign planning, audience targeting, funnels, content strategy, and measurable growth',
    tag: 'Campaign Strategy',
    icon: Megaphone,
    accentColor: 'from-fuchsia-600 to-violet-600',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    description:
      'Turn scattered promotion into a structured growth engine. We help define the audience, positioning, offer, campaign architecture, creative direction, lead funnel, tracking framework, and optimization cycle so every campaign has a clear purpose and measurable outcome.',
    motivationalQuote: 'Great campaigns do not just create attention; they create a path from attention to action.',
    deliverables: [
      'Audience Segmentation, Positioning & Customer Persona Mapping',
      'Campaign Objective, Offer & Channel Strategy',
      'Creative Direction, Copy Angles & Content Calendar',
      'Landing Page, Lead Funnel & Conversion Tracking Plan',
      'KPI Dashboard, A/B Testing & Campaign Optimization Framework'
    ],
    techStack: ['Google Ads', 'Meta Ads', 'Google Analytics 4', 'Search Console', 'Canva', 'Looker Studio', 'UTM Tracking'],
    businessImpact: 'A clearer acquisition system with measurable campaign performance and repeatable optimization.',
    whatsappMessage: 'Hi Sudhir! I want help with Marketing Campaign & Growth Strategy.'
  },
  {
    id: 'student-career-digital-tools',
    cardNumber: 12,
    title: 'Student Career & Digital Tools',
    category: 'Cloud & Growth',
    focus: 'Career roadmaps, AI-assisted productivity, profile building, and practical digital skills',
    tag: 'Student Growth',
    icon: GraduationCap,
    accentColor: 'from-cyan-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    description:
      'Connect learning with opportunity through practical career planning, skill-gap analysis, AI-assisted workflows, portfolio development, productivity systems, and project-based preparation designed around real student outcomes.',
    motivationalQuote: 'Skills become valuable when you can demonstrate them clearly and apply them confidently.',
    deliverables: [
      'Personalized Career Direction & Skill-Gap Roadmap',
      'Resume, LinkedIn & Portfolio Positioning Guidance',
      'AI-Assisted Research, Writing & Productivity Workflows',
      'Project Planning, Documentation & Portfolio Evidence',
      'Placement, Interview & Professional Communication Preparation'
    ],
    techStack: ['ChatGPT / AI Tools', 'Excel / Google Sheets', 'Notion', 'Canva', 'LinkedIn', 'GitHub', 'Productivity Systems'],
    businessImpact: 'A practical roadmap that turns learning progress into stronger projects, profiles, and career opportunities.',
    whatsappMessage: 'Hi Sudhir! I want help with Student Career & Digital Tools and a practical roadmap.'
  },
  {
    id: 'business-growth-revenue-strategy',
    cardNumber: 13,
    title: 'Business Growth & Revenue Strategy',
    category: 'Business & Analytics',
    focus: 'Revenue planning, pricing, unit economics, customer growth, and scalable business systems',
    tag: 'Revenue Growth',
    icon: LineChart,
    accentColor: 'from-emerald-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    description:
      'Build a practical revenue growth system around customer acquisition, pricing, unit economics, retention, sales processes, and performance measurement. The goal is to identify what drives profitable growth and turn it into a repeatable operating plan.',
    motivationalQuote: 'Sustainable growth comes from understanding the economics behind every customer and every channel.',
    deliverables: [
      'Revenue Model, Pricing & Monetization Analysis',
      'Customer Acquisition, Retention & Expansion Strategy',
      'Unit Economics, CAC, LTV & Contribution Margin Review',
      'Sales Funnel, Conversion & Revenue Pipeline Design',
      'Growth KPI Framework, Targets & Monthly Review System'
    ],
    techStack: ['Excel / Google Sheets', 'Power BI', 'Google Analytics 4', 'CRM Systems', 'Looker Studio', 'Financial KPIs'],
    businessImpact: 'Clearer revenue drivers, stronger unit economics, and a measurable operating framework for growth.',
    whatsappMessage: 'Hi Sudhir! I want to discuss Business Growth & Revenue Strategy.'
  }
];

export const SpecialistsExpertiseView: React.FC<SpecialistsExpertiseViewProps> = ({ onNavigate, addToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCard, setActiveCard] = useState<ExpertiseCardItem | null>(null);

  const categories = ['All', 'Business & Analytics', 'Web & CMS', 'Mobile & iOS', 'Cloud & Growth'];

  const filteredCards = useMemo(() => {
    return EXPERTISE_CARDS.filter((card) => {
      const matchesCat = selectedCategory === 'All' || card.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        card.title.toLowerCase().includes(q) ||
        card.focus.toLowerCase().includes(q) ||
        card.category.toLowerCase().includes(q) ||
        card.tag.toLowerCase().includes(q) ||
        card.techStack.some((t) => t.toLowerCase().includes(q)) ||
        card.deliverables.some((d) => d.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getWhatsAppLink = (message: string) =>
    `https://wa.me/917007260391?text=${encodeURIComponent(message)}`;

  const handleShareCard = async (card: ExpertiseCardItem) => {
    const cardUrl = `${window.location.origin}/expertise?card=${card.id}`;
    const shareText = `Check out "${card.title}" (${card.focus}) on CareerNova:\n${cardUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${card.title} | CareerNova Core Expertise`,
          text: `Explore ${card.title} - ${card.focus} on CareerNova:`,
          url: cardUrl,
        });
        return;
      } catch {}
    }

    const ok = await copyToClipboard(shareText);
    if (ok && addToast) {
      addToast('Link Copied to Clipboard', `Shareable link for ${card.title} is ready.`, 'success');
    }
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* HERO — banner image carries its own title/copy, no overlaid text */}
      <section className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-indigo-100 shadow-[0_25px_80px_-35px_rgba(79,70,229,0.35)] bg-slate-950">
        <div className="flex h-[190px] w-full items-center justify-center sm:h-[260px] lg:h-[320px]">
          <img
            src="/assets/core-expertise-hero-banner.png"
            alt="CareerNova Core Expertise — Turn Skills, Strategy & Technology Into Growth"
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      {/* Floating capability strip */}
      <section className="relative -mt-5 px-2 sm:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)] sm:grid-cols-4">
          {[
            [Target, 'Strategy First', 'Clear objectives before execution'],
            [BrainCircuit, 'Practical Thinking', 'Tools that solve real problems'],
            [MousePointer2, 'Action Oriented', 'Plans designed to be implemented'],
            [Layers3, 'End-to-End', 'Business, tech & career in one view']
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="group border-b border-slate-100 p-4 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600 transition group-hover:scale-110">
                  {React.createElement(Icon as React.ComponentType<{ className?: string }>, { className: 'h-4 w-4' })}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">{String(title)}</div>
                  <div className="mt-1 text-[10px] leading-4 text-slate-500">{String(text)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise library */}
      <section id="expertise-library" className="scroll-mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" /> Core Expertise Library
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Explore The Right Expertise For Your Goal</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Browse the complete library, filter by discipline, or search for a tool, skill or deliverable.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm md:flex-row md:items-center md:justify-between"
        >
          <div className="flex w-full gap-1.5 overflow-x-auto pb-1 md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-[11px] font-extrabold transition ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/15'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search disciplines, tools, skills..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-xs font-medium text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10"
            />
          </div>
        </motion.div>

        <div className="mt-5 flex items-center justify-between px-1">
          <div className="text-xs font-bold text-slate-500">
            Showing <span className="text-slate-900">{filteredCards.length}</span> expertise areas
          </div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Click a card for full specifications</div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ ...smoothTransition, delay: (idx % 3) * 0.045 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveCard(card)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:border-indigo-200 hover:shadow-[0_22px_55px_-25px_rgba(79,70,229,.35)]"
              >
                {/* Per-card color strip so every card reads as its own colour */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${card.accentColor}`} />

                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-[9px] font-black text-slate-900">Card #{card.cardNumber}</span>
                    <span className="rounded-full border border-white/20 bg-slate-950/60 px-2.5 py-1 text-[9px] font-bold text-indigo-100 backdrop-blur">{card.tag}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end gap-2">
                    <div className={`rounded-xl bg-gradient-to-r ${card.accentColor} p-2 text-white shadow-lg`}>
                      <IconComp className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-indigo-200">{card.category}</div>
                      <div className="truncate text-xs font-black text-white">{card.title}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="min-h-[42px] text-xs leading-5 text-slate-500">{card.focus}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className={`flex items-center gap-1.5 text-[11px] font-black bg-gradient-to-r ${card.accentColor} bg-clip-text text-transparent`}>
                      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${card.accentColor}`} />
                      View Specifications
                    </span>
                    <span className={`rounded-lg bg-gradient-to-r ${card.accentColor} p-1.5 text-white shadow-sm transition group-hover:scale-110`}>
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {filteredCards.length === 0 && (
          <div className="mt-5 rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
            <Search className="mx-auto h-7 w-7 text-slate-300" />
            <div className="mt-3 text-sm font-black text-slate-800">No expertise matched your search.</div>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="mt-3 text-xs font-bold text-indigo-600">
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Marketing campaign highlight */}
      <section className="overflow-hidden rounded-[32px] border border-fuchsia-100 bg-gradient-to-br from-white via-violet-50/50 to-indigo-50 p-6 shadow-sm sm:p-9">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-violet-700 shadow-sm">
              <Megaphone className="h-3.5 w-3.5" /> Marketing Campaign Strategy
            </div>
            <h2 className="mt-4 max-w-2xl text-2xl font-black leading-tight text-slate-950 sm:text-4xl">
              Don't just promote. Build a campaign people can understand, follow and act on.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Campaign objective → audience → offer → creative → landing page → lead capture → measurement → optimization.
              This section makes the strategy visible instead of hiding it behind generic marketing language.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {['Audience & positioning', 'Campaign structure', 'Creative & copy angles', 'Lead funnel & tracking'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-white bg-white/80 p-3 text-xs font-bold text-slate-700">
                  <Check className="h-3.5 w-3.5 text-emerald-600" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-4 rounded-full bg-violet-300/30 blur-3xl" />
            <div className="relative rounded-[28px] border border-white bg-slate-950 p-5 text-white shadow-2xl">
              <div className="text-[9px] font-bold uppercase tracking-widest text-indigo-300">Campaign Flow</div>
              <div className="mt-5 space-y-3">
                {['Audience', 'Message', 'Channel', 'Action', 'Measure'].map((item, i) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-xs font-black text-indigo-300">{String(i + 1).padStart(2, '0')}</div>
                    <div className="flex-1 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-xs font-bold">{item}</div>
                    {i < 4 && <ArrowRight className="h-3.5 w-3.5 text-slate-600" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student tools */}
      <section className="rounded-[32px] border border-cyan-100 bg-white p-6 shadow-sm sm:p-9">
        <div className="grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 to-indigo-950 p-7 text-white">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <GraduationCap className="relative h-9 w-9 text-cyan-300" />
            <h2 className="relative mt-4 text-2xl font-black">Student Career & Digital Tools</h2>
            <p className="relative mt-2 text-sm leading-6 text-slate-300">
              Career planning, AI-assisted workflows, portfolio building, productivity and practical digital skills — organized around outcomes.
            </p>
            <a
              href={getWhatsAppLink('Hi Sudhir! I want help with student career tools and a practical roadmap.')}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-slate-950"
            >
              Discuss a Roadmap <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-700">Built Around Student Needs</div>
            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Tools that connect learning with opportunity.</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                [GraduationCap, 'Career Roadmaps', 'Skill-gap analysis and practical milestones.'],
                [BrainCircuit, 'AI-Powered Workflows', 'Use AI responsibly for research and productivity.'],
                [Users, 'Profile Building', 'Resume, LinkedIn and portfolio positioning.'],
                [Rocket, 'Project & Placement Prep', 'Turn projects into stronger evidence of skills.']
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    {React.createElement(Icon as React.ComponentType<{ className?: string }>, { className: 'h-4 w-4' })}
                  </div>
                  <div className="mt-3 text-xs font-black text-slate-900">{String(title)}</div>
                  <div className="mt-1 text-[11px] leading-5 text-slate-500">{String(text)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: .96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: .96, y: 20 }}
              transition={smoothTransition}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-slate-200 bg-white shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden rounded-t-[28px] sm:h-60">
                <img src={activeCard.image} alt={activeCard.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <button
                  onClick={() => setActiveCard(null)}
                  aria-label="Close specifications"
                  className="absolute right-3 top-3 rounded-xl border border-white/20 bg-black/50 p-2 text-white backdrop-blur"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-black text-white">Card #{activeCard.cardNumber}</span>
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">{activeCard.category}</span>
                  </div>
                  <h2 className="text-xl font-black leading-tight text-white sm:text-2xl">{activeCard.title}</h2>
                </div>
              </div>

              <div className="space-y-6 p-5 sm:p-7">
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-sm leading-6 text-slate-700">
                  <div className="mb-1 text-xs font-black uppercase tracking-wider text-indigo-700">Strategic Objective</div>
                  {activeCard.focus}
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-black text-slate-900">
                    <Layers className="h-4 w-4 text-indigo-600" /> Methodology & Scope
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{activeCard.description}</p>
                </div>

                <div className="border-l-2 border-indigo-500 py-1 pl-4 text-sm italic text-slate-600">
                  "{activeCard.motivationalQuote}"
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-800">
                    <Award className="h-4 w-4" /> Expected Business / Career Outcome
                  </div>
                  <p className="mt-1 text-sm leading-6 text-emerald-900">{activeCard.businessImpact}</p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-black text-slate-900">
                    <ShieldCheck className="h-4 w-4 text-indigo-600" /> Deliverables
                  </h3>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {activeCard.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tools / Stack</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeCard.techStack.map((tech) => (
                      <span key={tech} className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-700">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    onClick={() => handleShareCard(activeCard)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-700 transition hover:bg-slate-200"
                  >
                    <Share2 className="h-3.5 w-3.5" /> Share
                  </button>
                  <div className="flex gap-2">
                    <a
                      href={getWhatsAppLink(activeCard.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-emerald-600/20"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                    <button onClick={() => setActiveCard(null)} className="rounded-xl bg-slate-200 px-4 py-2.5 text-xs font-black text-slate-800">Close</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-7 text-white shadow-2xl shadow-indigo-600/20 sm:p-10"
      >
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-200" /> Direct Access to Sudhir Singh
            </div>
            <h2 className="mt-4 text-2xl font-black sm:text-3xl">Have a goal? Let's turn it into a practical plan.</h2>
            <p className="mt-2 text-sm leading-6 text-indigo-100">
              Discuss business growth, marketing campaigns, technology, career tools or a custom project roadmap.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <a href="tel:+917007260391" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-black text-white backdrop-blur">
              <Phone className="h-4 w-4" /> +91 7007260391
            </a>
            <a
              href={getWhatsAppLink('Hi Sudhir! I would like to discuss a CareerNova consultation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-black text-slate-950 shadow-lg"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

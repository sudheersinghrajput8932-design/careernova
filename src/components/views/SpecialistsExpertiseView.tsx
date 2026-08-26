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
  Zap,
  Terminal,
  Server,
  Share2
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
      const matchesSearch =
        searchQuery.trim() === '' ||
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        card.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/917007260391?text=${encodeURIComponent(message)}`;
  };

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
      } catch {
        // User cancelled or fallback
      }
    }

    const ok = await copyToClipboard(shareText);
    if (ok && addToast) {
      addToast('Link Copied to Clipboard', `Sharable link with preview metadata for ${card.title} is ready.`, 'success');
    }
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* 1. PROFESSIONAL MAIN HEADER BACKGROUND WITH METRICS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 shadow-2xl p-5 sm:p-8 lg:p-10"
      >
        {/* Subtle geometric glowing background layers */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-xs sm:text-sm font-bold backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Mastery Across 10 Technical &amp; Strategic Disciplines</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Core Engineering &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-sky-300">
              Technical Expertise
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Consolidated, battle-tested solutions tailored for high-growth ventures, corporate leaders, and visionary founders. We build, scale, and optimize across the full software and business lifecycle with absolute precision.
          </p>

          {/* Quick Metrics Strip */}
          <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 border-t border-white/10 text-left">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-black text-white">10</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Core Disciplines</div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Production Quality</div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-black text-indigo-400">24-48h</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Fast Turnaround</div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-black text-amber-400">Zero</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Content Fluff</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. FILTER & SEARCH CONTROLS HUB */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.05 }}
        className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs"
      >
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search disciplines, tools, skills..."
            className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500/30 transition-all font-medium"
          />
        </div>
      </motion.div>

      {/* 3. COMPACT & INTERACTIVE EXPERTISE CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
        {filteredCards.map((card, idx) => {
          const IconComp = card.icon;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...smoothTransition, delay: (idx % 3) * 0.05 }}
              onClick={() => setActiveCard(card)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveCard(card);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View specifications for ${card.title}`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--card-spotlight-x', `${x}px`);
                e.currentTarget.style.setProperty('--card-spotlight-y', `${y}px`);
                e.currentTarget.style.setProperty('--card-spotlight-opacity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--card-spotlight-opacity', '0');
              }}
              className="group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 shadow-xs flex flex-col justify-between overflow-hidden cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              {/* Dynamic Glowing Blue Movable Card Spotlight Aura */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-300 z-10"
                style={{
                  opacity: 'var(--card-spotlight-opacity, 0)',
                  background:
                    'radial-gradient(320px circle at var(--card-spotlight-x, 0px) var(--card-spotlight-y, 0px), rgba(99, 102, 241, 0.14), rgba(59, 130, 246, 0.05), transparent 70%)',
                }}
              />

              {/* COMPACT THUMBNAIL HEADER WITH BADGES & GRADIENT OVERLAY */}
              <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-white/95 text-slate-900 border border-slate-200 backdrop-blur-md shadow-xs">
                    Card #{card.cardNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-indigo-300 border border-white/20 backdrop-blur-md flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-indigo-400" />
                    {card.tag}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-2">
                  <div className={`p-1.5 rounded-xl bg-gradient-to-r ${card.accentColor} text-white shadow-md shrink-0`}>
                    <IconComp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[11px] font-extrabold text-white truncate drop-shadow-sm">
                    {card.category}
                  </span>
                </div>
              </div>

              {/* COMPACT EXTERIOR CONTENT BODY */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  {/* Clean Short Title */}
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-1">
                    {card.title}
                  </h2>

                  {/* Crisp One-Line Short Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 sm:line-clamp-1 font-normal leading-relaxed">
                    {card.focus}
                  </p>
                </div>

                {/* Interactive Expand Action Prompt */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform" />
                    <span>View Specifications</span>
                  </span>
                  <div className="p-1 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. COMPREHENSIVE DETAIL SPECIFICATION MODAL / DRAWER */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={smoothTransition}
              className="relative w-full max-w-2xl lg:max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto custom-scrollbar text-left"
            >
              {/* Modal Top Cover */}
              <div className="relative w-full h-44 sm:h-56 overflow-hidden rounded-t-3xl bg-slate-100">
                <img
                  src={activeCard.image}
                  alt={activeCard.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <button
                  onClick={() => setActiveCard(null)}
                  className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Close specifications modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3.5 left-4 right-4 sm:left-6 sm:right-6 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-600 text-white shadow-xs">
                      Card #{activeCard.cardNumber}
                    </span>
                    <span className="text-xs text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                      {activeCard.category}
                    </span>
                    <span className="text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                      Verified Practice
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-black text-white leading-snug drop-shadow-md">
                    {activeCard.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-5 sm:p-7 space-y-5 pt-0 text-slate-900">
                {/* Focus Callout */}
                <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  <strong className="text-indigo-700 block mb-1">Strategic Objective:</strong>
                  {activeCard.focus}
                </div>

                {/* In-Depth Description */}
                <div className="space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-3.5 rounded-full bg-indigo-600" />
                    <span>Technical Architecture &amp; Methodology</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeCard.description}
                  </p>
                </div>

                {/* Motivational Quote */}
                <div className="pl-3.5 border-l-2 border-indigo-500 py-1 text-xs italic text-slate-700 font-medium">
                  "{activeCard.motivationalQuote}"
                </div>

                {/* Business Impact Metric */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm space-y-1">
                  <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Quantified Business Outcome</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed font-normal">
                    {activeCard.businessImpact}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span>Included Milestone Deliverables</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCard.deliverables.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Full Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCard.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                  <button
                    onClick={() => handleShareCard(activeCard)}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer border border-slate-200"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Specification</span>
                  </button>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={getWhatsAppLink(activeCard.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Direct WhatsApp Consultation</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setActiveCard(null)}
                      className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. BOTTOM LEADERSHIP & CONSULTATION CARD */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-xl shadow-indigo-600/20 flex flex-col md:flex-row items-center justify-between gap-5"
      >
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Direct Access to Principal Architect Sudhir Singh</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            Need a Custom Architecture or Team Engagement?
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 font-normal leading-relaxed">
            Whether you need end-to-end iOS application delivery, automated BI reporting pipelines, or bespoke WordPress setups, we provide dedicated advisory and full-cycle engineering.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto shrink-0">
          <a
            href="tel:+917007260391"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call: +91 7007260391</span>
          </a>

          <a
            href="https://wa.me/917007260391?text=Hi%20Sudhir!%20I%20would%20like%20to%20discuss%20a%20custom%20engineering%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Chat on WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

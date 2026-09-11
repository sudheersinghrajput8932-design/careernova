import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  TrendingUp,
  Share2,
  Bot,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Smartphone,
  ShoppingBag,
  Palette,
  ArrowUpRight,
  Workflow,
  Target,
  Zap
} from 'lucide-react';
import { TabId } from '../../types';

interface ServicesViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}


interface ServiceItem {
  id: string;
  category: 'web' | 'ios' | 'ecommerce' | 'ai' | 'design' | 'marketing' | 'growth' | 'support';
  title: string;
  eyebrow: string;
  tagline: string;
  outcome: string;
  features: string[];
  whatsappMessage: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    category: 'web',
    title: 'Web Development',
    eyebrow: 'DIGITAL PRESENCE',
    tagline: 'Professional websites and web applications designed around your business goals.',
    outcome: 'A fast, credible and conversion-focused digital experience.',
    features: [
      'Business Websites',
      'Landing Pages',
      'Web Applications',
      'Business Dashboards',
      'Custom Digital Platforms',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss Web Development services.',
  },
  {
    id: 'ios-development',
    category: 'ios',
    title: 'iOS App Development',
    eyebrow: 'MOBILE PRODUCTS',
    tagline: 'Turn your product idea into a polished and reliable iPhone or iPad experience.',
    outcome: 'A user-friendly mobile product built around your users and business goals.',
    features: [
      'iPhone & iPad Applications',
      'Custom App Interfaces',
      'API & Backend Integration',
      'App Feature Development',
      'App Launch Support',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss iOS App Development services.',
  },
  {
    id: 'ecommerce',
    category: 'ecommerce',
    title: 'E-commerce Development',
    eyebrow: 'ONLINE COMMERCE',
    tagline: 'Build an online store that makes browsing, buying and managing products simpler.',
    outcome: 'A smoother buying journey with a stronger digital sales foundation.',
    features: [
      'Online Store Development',
      'Product & Catalog Setup',
      'Payment Integration',
      'Checkout Experience',
      'Store Analytics Setup',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss E-commerce Development services.',
  },
  {
    id: 'ai-automation',
    category: 'ai',
    title: 'AI & Automation',
    eyebrow: 'SMARTER WORKFLOWS',
    tagline: 'Use intelligent digital workflows to reduce repetitive work and improve operations.',
    outcome: 'Less manual work and more efficient business processes.',
    features: [
      'AI-Powered Features',
      'Business Workflow Automation',
      'AI Assistants',
      'Process Automation',
      'Third-Party Integrations',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss AI & Automation services.',
  },
  {
    id: 'ui-ux-product-design',
    category: 'design',
    title: 'UI/UX & Product Design',
    eyebrow: 'PRODUCT EXPERIENCE',
    tagline: 'Create digital experiences that are clear, intuitive and easier for people to use.',
    outcome: 'A cleaner product experience that helps users understand and take action.',
    features: [
      'Website UI Design',
      'Mobile App UI',
      'User Experience Design',
      'Product Interfaces',
      'Design Systems',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss UI/UX & Product Design services.',
  },
  {
    id: 'digital-marketing-seo',
    category: 'marketing',
    title: 'Digital Marketing & SEO',
    eyebrow: 'VISIBILITY & DEMAND',
    tagline: 'Turn online visibility into relevant traffic, stronger positioning and business opportunities.',
    outcome: 'Better visibility with measurable digital growth.',
    features: [
      'Search Engine Optimization',
      'Search Visibility',
      'Social Media Strategy',
      'Content Strategy',
      'Analytics & Reporting',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss Digital Marketing & SEO services.',
  },
  {
    id: 'business-growth',
    category: 'growth',
    title: 'Business Growth',
    eyebrow: 'STRATEGY & GROWTH',
    tagline: 'Connect your digital presence with a clearer strategy for acquiring and converting customers.',
    outcome: 'Better decisions and a more focused path toward sustainable growth.',
    features: [
      'Growth Strategy',
      'Customer Acquisition',
      'Conversion Optimization',
      'Digital Positioning',
      'Growth Roadmaps',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss Business Growth services.',
  },
  {
    id: 'maintenance-support',
    category: 'support',
    title: 'Maintenance & Support',
    eyebrow: 'ONGOING IMPROVEMENT',
    tagline: 'Keep your digital products stable, updated and ready for continuous improvement.',
    outcome: 'Reliable digital systems that stay healthy after launch.',
    features: [
      'Website Updates',
      'Bug Fixes',
      'Performance Improvements',
      'Technical Support',
      'Ongoing Enhancements',
    ],
    whatsappMessage: 'Hi CareerNova team, I want to discuss Maintenance & Support services.',
  },
];

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

const CATEGORY_STYLES: Record<
  ServiceItem['category'],
  {
    icon: typeof Briefcase;
    accent: string;
    soft: string;
    text: string;
    border: string;
    hoverBorder: string;
  }
> = {
  web: {
    icon: Briefcase,
    accent: 'from-indigo-600 to-blue-600',
    soft: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
    hoverBorder: 'hover:border-indigo-300',
  },
  ios: {
    icon: Smartphone,
    accent: 'from-violet-600 to-purple-600',
    soft: 'bg-violet-50',
    text: 'text-violet-700',
    border: 'border-violet-200',
    hoverBorder: 'hover:border-violet-300',
  },
  ecommerce: {
    icon: ShoppingBag,
    accent: 'from-cyan-600 to-blue-600',
    soft: 'bg-cyan-50',
    text: 'text-cyan-700',
    border: 'border-cyan-200',
    hoverBorder: 'hover:border-cyan-300',
  },
  ai: {
    icon: Bot,
    accent: 'from-amber-500 to-orange-600',
    soft: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    hoverBorder: 'hover:border-amber-300',
  },
  design: {
    icon: Palette,
    accent: 'from-fuchsia-600 to-rose-500',
    soft: 'bg-fuchsia-50',
    text: 'text-fuchsia-700',
    border: 'border-fuchsia-200',
    hoverBorder: 'hover:border-fuchsia-300',
  },
  marketing: {
    icon: Share2,
    accent: 'from-pink-600 to-rose-600',
    soft: 'bg-pink-50',
    text: 'text-pink-700',
    border: 'border-pink-200',
    hoverBorder: 'hover:border-pink-300',
  },
  growth: {
    icon: TrendingUp,
    accent: 'from-emerald-600 to-teal-500',
    soft: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-300',
  },
  support: {
    icon: CheckCircle2,
    accent: 'from-slate-600 to-slate-900',
    soft: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-200',
    hoverBorder: 'hover:border-slate-300',
  },
};
export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isHeroSliderPaused, setIsHeroSliderPaused] = useState(false);

  useEffect(() => {
    if (isHeroSliderPaused) return;
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % HERO_SLIDER_ITEMS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHeroSliderPaused]);

  const categories = [
    { id: 'all', label: 'All Services', icon: null },
    { id: 'web', label: 'Web', icon: Briefcase },
    { id: 'ios', label: 'iOS', icon: Smartphone },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingBag },
    { id: 'ai', label: 'AI & Automation', icon: Bot },
    { id: 'design', label: 'UI/UX & Design', icon: Palette },
    { id: 'marketing', label: 'Marketing & SEO', icon: Share2 },
    { id: 'growth', label: 'Business Growth', icon: TrendingUp },
    { id: 'support', label: 'Support', icon: CheckCircle2 },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((service) => service.category === selectedCategory);

  const getWhatsAppLink = (message: string) =>
    `https://wa.me/917007260391?text=${encodeURIComponent(message)}`;

  return () => clearInterval(timer);
  }, [isHeroSliderPaused]);

  const categories = [
    { id: 'all', label: 'All Services (8)', icon: null },
    { id: 'career', label: 'Career (₹299+)', icon: Briefcase },
    { id: 'business', label: 'Business & Legal (₹599+)', icon: TrendingUp },
    { id: 'marketing', label: 'Digital Marketing (₹999+)', icon: Share2 },
    { id: 'ai', label: 'AI-Powered (₹399+)', icon: Bot },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/917007260391?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* HERO — compact title on top, full-bleed auto-slider directly underneath, no side gutters */}
      <div className="space-y-4 sm:space-y-5">
        {/* 1. HERO TITLE — just the headline, tightened up, no illustrations or extra copy eating up height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={smoothTransition}
          className="text-center max-w-3xl mx-auto px-4 space-y-2"
        >
          <motion.div
            animate={{ y: [-3, 0, -3] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 text-xs font-bold shadow-md max-w-full"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-normal sm:whitespace-nowrap">CAREER & BUSINESS SERVICES MARKETPLACE</span>
          </motion.div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Professional Growth Services at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
              Honest Pricing
            </span>
          </h1>
        </motion.div>

        {/* 2. HERO AUTO-SLIDER — full width, edge-to-edge, sits right below the title, true left-to-right slide transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="relative w-full rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          onMouseEnter={() => setIsHeroSliderPaused(true)}
          onMouseLeave={() => setIsHeroSliderPaused(false)}
          onTouchStart={() => setIsHeroSliderPaused(true)}
          onTouchEnd={() => setIsHeroSliderPaused(false)}
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={HERO_SLIDER_ITEMS[activeHeroSlide].id}
                src={HERO_SLIDER_ITEMS[activeHeroSlide].image}
                alt={HERO_SLIDER_ITEMS[activeHeroSlide].title}
                initial={{ opacity: 0, x: '6%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 0, x: '-6%' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                loading="eager"
              />
            </AnimatePresence>
          </div>

          {/* Dots — tap a dot to jump to that slide (also pauses auto-rotation) */}
          <div className="flex items-center justify-center gap-1.5 py-3">
            {HERO_SLIDER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsHeroSliderPaused(true);
                  setActiveHeroSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeHeroSlide ? 'w-6 bg-indigo-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* SERVICES INTRO */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="max-w-3xl mx-auto text-center px-4"
      >
        <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">
          <Sparkles className="w-3.5 h-3.5" />
          What we can help you build
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
          Practical digital services for real business goals.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Choose the area you need help with. Each service is focused on a clear business
          need — without turning this page into a list of technologies.
        </p>
      </motion.section>

      {/* SERVICE FILTER */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="flex justify-center"
      >
        <div className="flex max-w-full items-center gap-1.5 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm custom-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[11px] font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {cat.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={smoothTransition}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredServices.map((service, index) => {
            const theme = CATEGORY_STYLES[service.category];
            const Icon = theme.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ ...smoothTransition, delay: (index % 4) * 0.06 }}
                className={`group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.border} ${theme.hoverBorder}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.accent}`} />

                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.soft} ${theme.text}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-5">
                  <p className={`text-[9px] font-black uppercase tracking-[0.16em] ${theme.text}`}>
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-1.5 text-base font-black leading-tight text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-wider text-slate-400">
                    What we deliver
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-[11px] leading-4 text-slate-600">
                        <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${theme.text}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-5">
                  <div className={`rounded-xl border ${theme.border} ${theme.soft} p-3`}>
                    <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                      Outcome
                    </p>
                    <p className="mt-1 text-[11px] font-semibold leading-4 text-slate-700">
                      {service.outcome}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-2.5 text-[11px] font-bold text-white transition-all hover:bg-indigo-600"
                  >
                    Discuss this service
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      {/* WHICH SERVICE DO I NEED? */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
        className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 sm:p-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">
            Not sure where to start?
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
            Tell us the goal. We’ll help identify the right service.
          </h2>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            You do not need to know the technical solution before reaching out.
            Start with the business problem and we’ll take it from there.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Need a professional website', 'Web Development', Briefcase],
            ['Have an app idea', 'iOS App Development', Smartphone],
            ['Want more online customers', 'Digital Marketing & SEO', Share2],
            ['Too much manual work', 'AI & Automation', Bot],
          ].map(([problem, solution, Icon]) => {
            const ProblemIcon = Icon as typeof Briefcase;
            return (
              <button
                key={problem as string}
                type="button"
                onClick={() => {
                  const match = SERVICES_DATA.find((service) => service.title === solution);
                  if (match) setSelectedCategory(match.category);
                }}
                className="group rounded-2xl border border-white bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <ProblemIcon className="h-4 w-4" />
                  </span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500" />
                </div>
                <p className="mt-4 text-[11px] font-semibold leading-4 text-slate-500">
                  {problem as string}
                </p>
                <p className="mt-1 text-xs font-black text-slate-900">
                  {solution as string}
                </p>
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* HOW WE WORK */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
      >
        <div className="mb-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">
            How we work
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
            From idea to outcome.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500">
            A simple process designed to keep projects clear, practical and moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ['01', 'Understand', 'We understand your goals, audience and current situation.', Target],
            ['02', 'Plan', 'We define the right scope, priorities and next steps.', Workflow],
            ['03', 'Design', 'We shape the experience and direction before execution.', Sparkles],
            ['04', 'Build', 'We develop and deliver the agreed solution.', Zap],
            ['05', 'Improve', 'We support, optimize and help you move forward.', TrendingUp],
          ].map(([number, title, description, Icon]) => {
            const StepIcon = Icon as typeof Sparkles;
            return (
              <div key={number as string} className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-widest text-indigo-500">{number as string}</span>
                  <StepIcon className="h-4 w-4 text-slate-300" />
                </div>
                <h3 className="mt-4 text-sm font-black text-slate-900">{title as string}</h3>
                <p className="mt-1.5 text-[11px] leading-5 text-slate-500">{description as string}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* WHY CAREERNOVA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
        className="rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 p-6 text-white shadow-xl shadow-indigo-900/10 sm:p-9"
      >
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-200">
              Why CareerNova
            </span>
            <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
              Practical solutions, without unnecessary complexity.
            </h2>
            <p className="mt-3 text-xs leading-6 text-indigo-100/75">
              We start with what you are trying to achieve and then shape the right digital
              solution around it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              ['Business First', 'We begin with the objective, not the technology.', Target],
              ['Clear Scope', 'You know what is being delivered before work begins.', CheckCircle2],
              ['Connected Approach', 'Design, development and growth can work together.', Workflow],
              ['Built to Improve', 'Solutions can evolve as your business grows.', TrendingUp],
            ].map(([title, description, Icon]) => {
              const BenefitIcon = Icon as typeof Target;
              return (
                <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <BenefitIcon className="h-4 w-4 text-cyan-300" />
                  <h3 className="mt-3 text-xs font-black text-white">{title as string}</h3>
                  <p className="mt-1 text-[10px] leading-5 text-indigo-100/65">{description as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-6 text-center sm:p-9"
      >
        <div className="mx-auto max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">
            Ready when you are
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Have something you want to build, improve or grow?
          </h2>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Tell us what you are trying to achieve and we’ll help you choose the right next step.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-2.5 sm:flex-row">
            <a
              href={getWhatsAppLink('Hi CareerNova, I want to discuss a project or service requirement.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Start a Conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition-all hover:border-indigo-200 hover:text-indigo-600"
            >
              Open Contact Desk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

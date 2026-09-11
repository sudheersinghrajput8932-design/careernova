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

const HERO_SLIDER_ITEMS = [
  {
    id: 'verified-specialists',
    title: 'Verified Specialists You Can Trust',
    image: '/assets/hero-slide-verified-specialists.png',
  },
  {
    id: 'satisfaction-guaranteed',
    title: '100% Satisfaction Guaranteed',
    image: '/assets/hero-slide-satisfaction-guaranteed.png',
  },
  {
    id: 'our-services',
    title: 'Expert Services for a Brighter Tomorrow',
    image: '/assets/hero-slide-our-services.png',
  },
  {
    id: 'goals-services',
    title: 'Your Goals. Our Services. A Brighter Tomorrow.',
    image: '/assets/hero-slide-goals-services.png',
  },
];

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
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

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
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-[0_20px_70px_-35px_rgba(79,70,229,0.35)] sm:px-8 sm:py-10"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-violet-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            Services built around outcomes
          </span>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            One goal. The right digital service.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Explore each service, flip the card for the full scope, and start a conversation when
            you are ready.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-bold text-white shadow-lg shadow-slate-950/10">
            <ArrowUpRight className="h-3.5 w-3.5" />
            Tap or hover a card to explore
          </div>
        </div>
      </motion.section>

      {/* SERVICE FILTER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
      >
        <div className="mb-4 flex items-end justify-between gap-4 px-1">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">
              Explore services
            </p>
            <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
              What do you need built?
            </h2>
          </div>
          <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-400 sm:inline-flex">
            {filteredServices.length} of {SERVICES_DATA.length}
          </span>
        </div>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[10px] font-black transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700'
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {cat.label}
              </motion.button>
            );
          })}
        </div>
      </motion.section>

      {/* FLIP SERVICE CARDS */}
      <motion.section
        id="services-grid"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.06 }}
        transition={smoothTransition}
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service, index) => {
            const theme = CATEGORY_STYLES[service.category];
            const Icon = theme.icon;
            const isFlipped = Boolean(flippedCards[service.id]);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ ...smoothTransition, delay: (index % 4) * 0.055 }}
                whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
                className="group [perspective:1200px]"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`${isFlipped ? 'Show front of' : 'Show details for'} ${service.title}`}
                  aria-pressed={isFlipped}
                  onClick={() =>
                    setFlippedCards((prev) => ({
                      ...prev,
                      [service.id]: !prev[service.id],
                    }))
                  }
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setFlippedCards((prev) => ({
                        ...prev,
                        [service.id]: !prev[service.id],
                      }));
                    }
                  }}
                  className="block w-full cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-[330px] w-full sm:h-[350px]"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* FRONT */}
                    <div
                      className={`absolute inset-0 overflow-hidden rounded-[1.35rem] border bg-gradient-to-br ${theme.accent} p-3.5 text-white shadow-lg transition-shadow duration-300 group-hover:shadow-2xl sm:p-4`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
                      <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-black/15 blur-2xl" />

                      <div className="relative flex items-center justify-between">
                        <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.14em] backdrop-blur-sm">
                          0{index + 1}
                        </span>
                        <span className="rounded-full border border-white/20 bg-black/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] backdrop-blur-sm">
                          {service.eyebrow}
                        </span>
                      </div>

                      {/* PNG PLACEHOLDER — replace this area with /assets/services/{service.id}.png later */}
                      <div
                        className="relative mt-3 flex h-[142px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-inner backdrop-blur-[2px] sm:h-[150px]"
                        data-service-png={service.id}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.24),transparent_55%)]" />
                        <div className="relative flex flex-col items-center gap-2 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-lg backdrop-blur-sm">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/70">
                            Service Visual
                          </span>
                        </div>
                      </div>

                      <div className="relative mt-3">
                        <h3 className="text-[15px] font-black leading-tight tracking-tight sm:text-lg">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-white/75 sm:text-[11px]">
                          {service.tagline}
                        </p>
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between sm:bottom-4 sm:left-4 sm:right-4">
                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/60">
                          Tap to flip
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-sm">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-[1.35rem] border border-slate-800 bg-slate-950 p-4 text-white shadow-2xl sm:p-4.5"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.accent}`} />
                      <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-indigo-500/15 blur-3xl" />

                      <div className="relative flex items-center justify-between gap-2">
                        <div>
                          <p className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-500">
                            What we deliver
                          </p>
                          <h3 className="mt-1 text-sm font-black leading-tight sm:text-base">
                            {service.title}
                          </h3>
                        </div>
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${theme.soft} ${theme.text}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                      </div>

                      <ul className="relative mt-4 space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-[9px] leading-3.5 text-slate-300 sm:text-[10px]">
                            <CheckCircle2 className={`mt-0.5 h-3 w-3 shrink-0 ${theme.text}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="relative mt-3 rounded-xl border border-white/10 bg-white/[0.045] p-2.5">
                        <p className={`text-[8px] font-black uppercase tracking-[0.14em] ${theme.text}`}>
                          Outcome
                        </p>
                        <p className="mt-1 text-[9px] leading-3.5 text-slate-300">
                          {service.outcome}
                        </p>
                      </div>

                      <div className="relative mt-3 flex gap-2">
                        <a
                          href={getWhatsAppLink(service.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl bg-white px-2.5 py-2.5 text-[9px] font-black text-slate-950 transition-all hover:bg-indigo-50"
                        >
                          Discuss service
                          <ArrowRight className="h-3 w-3" />
                        </a>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      <p className="relative mt-2 text-center text-[7px] font-bold uppercase tracking-[0.16em] text-slate-600">
                        Tap to return
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* SERVICE MATCHMAKER */}
      <motion.section
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.55)] sm:p-8"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-60 w-60 rounded-full bg-violet-600/15 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-indigo-200">
              Not sure where to start?
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              Start with the problem.
              <span className="block text-indigo-300">We’ll find the service.</span>
            </h2>
            <p className="mt-3 max-w-md text-xs leading-5 text-slate-400">
              Pick the situation closest to yours and we’ll take you to the most relevant service.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              ['Need a website', 'Web Development', Briefcase],
              ['Have an app idea', 'iOS App Development', Smartphone],
              ['Need more customers', 'Digital Marketing & SEO', Share2],
              ['Too much manual work', 'AI & Automation', Bot],
            ].map(([problem, solution, Icon]) => {
              const ProblemIcon = Icon as typeof Briefcase;
              return (
                <motion.button
                  key={problem as string}
                  type="button"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const match = SERVICES_DATA.find((service) => service.title === solution);
                    if (match) {
                      setSelectedCategory(match.category);
                      document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-left backdrop-blur-sm transition-all hover:border-indigo-400/40 hover:bg-white/[0.09]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-indigo-200">
                    <ProblemIcon className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-[9px] font-semibold leading-3.5 text-slate-400">
                    {problem as string}
                  </p>
                  <p className="mt-1 text-[10px] font-black leading-3.5 text-white">
                    {solution as string}
                  </p>
                  <ArrowRight className="mt-3 h-3.5 w-3.5 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-indigo-300" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* HOW WE WORK */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={smoothTransition}
      >
        <div className="mb-6 text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-indigo-700">
            How we work
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            From first conversation to continuous improvement.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500">
            A simple, visible process keeps the project focused without making the experience feel rigid.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ['01', 'Understand', 'Goals, audience and current situation.', Target],
            ['02', 'Plan', 'Scope, priorities and a clear route forward.', Workflow],
            ['03', 'Design', 'Shape the experience before execution.', Sparkles],
            ['04', 'Build', 'Develop and deliver the agreed solution.', Zap],
            ['05', 'Improve', 'Support, optimize and keep moving.', TrendingUp],
          ].map(([number, title, description, Icon], index) => {
            const StepIcon = Icon as typeof Sparkles;
            return (
              <motion.div
                key={number as string}
                whileHover={{ y: -5, rotateX: 2 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-xl hover:shadow-indigo-900/5"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-indigo-500 to-violet-500' : 'from-cyan-500 to-blue-500'}`} />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.18em] text-indigo-500">
                    {number as string}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-all group-hover:bg-indigo-50 group-hover:text-indigo-600">
                    <StepIcon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-5 text-sm font-black text-slate-900">{title as string}</h3>
                <p className="mt-1.5 text-[10px] leading-4.5 text-slate-500">{description as string}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* WHY CAREERNOVA */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 p-6 text-white shadow-[0_30px_90px_-45px_rgba(49,46,129,0.8)] sm:p-9"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-indigo-200">
              Why CareerNova
            </span>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
              Premium execution.
              <span className="block text-indigo-300">Practical thinking.</span>
            </h2>
            <p className="mt-3 max-w-md text-xs leading-6 text-indigo-100/65">
              Every engagement starts with the outcome you want and stays focused on making that outcome easier to reach.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ['Business First', 'We begin with the objective, not the technology.', Target],
              ['Clear Scope', 'You know what is being delivered before work begins.', CheckCircle2],
              ['Connected Approach', 'Design, development and growth can work together.', Workflow],
              ['Built to Improve', 'Solutions can evolve as your business grows.', TrendingUp],
            ].map(([title, description, Icon]) => {
              const BenefitIcon = Icon as typeof Target;
              return (
                <motion.div
                  key={title as string}
                  whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm transition-all hover:border-indigo-300/25 hover:bg-white/[0.085]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-indigo-200">
                    <BenefitIcon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-[11px] font-black text-white">{title as string}</h3>
                  <p className="mt-1.5 text-[9px] leading-4 text-indigo-100/55">{description as string}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 text-center shadow-[0_25px_70px_-45px_rgba(79,70,229,0.4)] sm:p-9"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-indigo-700">
            Ready when you are
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-slate-950/15 transition-all hover:-translate-y-0.5 hover:bg-indigo-600"
            >
              Start a Conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
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

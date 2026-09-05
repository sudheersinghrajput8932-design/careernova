import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  TrendingUp,
  Share2,
  Bot,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MessageCircle,
  Award,
  PhoneCall,
  Check,
  Star
} from 'lucide-react';
import { TabId } from '../../types';
import heroBanner from '../../assets/hero-banner.png';

interface ServicesViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

interface ServiceItem {
  id: string;
  category: 'career' | 'business' | 'marketing' | 'ai';
  title: string;
  price: string;
  billingType?: string;
  popular?: boolean;
  badge?: string;
  tagline: string;
  deliveryTime: string;
  features: string[];
  whatsappMessage: string;
}

const SERVICES_DATA: ServiceItem[] = [
  // Category 1: Career Services
  {
    id: 'ats-resume',
    category: 'career',
    title: 'ATS Resume & Cover Letter',
    price: '₹299',
    popular: true,
    badge: 'Best Seller for Job Seekers',
    tagline: 'Beat automated ATS filters with quantified Google XYZ metric formulas.',
    deliveryTime: '24 Hours Delivery',
    features: [
      'ATS-Optimized Single-Column Format (Tested)',
      'Keyword Targeted to Your Job Description',
      'PDF + Word Fully Editable Source Files',
      'Matching Professional Cover Letter Included',
      '24-Hour Express Delivery Guarantee'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the ATS Resume & Cover Letter service for ₹299.',
  },
  {
    id: 'linkedin-opt',
    category: 'career',
    title: 'LinkedIn Profile Optimization',
    price: '₹499',
    badge: 'Recruiter Inbound Magnet',
    tagline: 'Transform your profile into an inbound recruiter magnet with custom banner and SEO keywords.',
    deliveryTime: '24-48 Hours Delivery',
    features: [
      'High-Impact Headline & Keyword-Rich Bio',
      'Strategic Skill Endorsement & Recommendations Plan',
      'Custom Brand Header Banner Design',
      'SEO & Recruiter Inbound Search Visibility Boost',
      'Direct Connection Outreach Templates'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the LinkedIn Profile Optimization service for ₹499.',
  },

  // Category 2: Business & Legal Services
  {
    id: 'msme-udyam',
    category: 'business',
    title: 'MSME / Udyam Registration Support',
    price: '₹599',
    badge: 'Govt Certified',
    tagline: 'Official government certificate assistance to unlock business loans, subsidies, and tax rebates.',
    deliveryTime: '1-Day Processing',
    features: [
      'Official Government Certificate Filing Support',
      'MSME Subsidies & Tax Benefit Guidance',
      'Fast 1-Day Processing & Document Review',
      'Bank Account & Priority Lending Advisory',
      '100% Error-Free Application Guarantee'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the MSME / Udyam Registration Support service for ₹599.',
  },
  {
    id: 'pitch-deck',
    category: 'business',
    title: 'Business Pitch Deck & Presentation',
    price: '₹1,499',
    popular: true,
    badge: 'VC & Investor Ready',
    tagline: 'High-converting investor decks, executive summaries, and board presentation slides.',
    deliveryTime: '48 Hours Delivery',
    features: [
      '8-10 High-Impact Custom Canva / PPT Slides',
      'Custom Typography, Color Palette & Brand Styling',
      'Investor-Ready Financial & Market Layout',
      'Editable Presentation Source Files Included',
      '2 Free Revision Rounds'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the Business Pitch Deck & Presentation Design service for ₹1,499.',
  },

  // Category 3: Digital Marketing Services
  {
    id: 'gmb-seo',
    category: 'marketing',
    title: 'Google My Business & Local SEO',
    price: '₹999',
    badge: 'Local Customer Traffic',
    tagline: 'Rank #1 on Google Maps and drive direct calls and foot traffic from nearby customers.',
    deliveryTime: '2-3 Days Setup',
    features: [
      'Google Maps Verification & Profile Setup',
      'Category & High-Intent Keyword Optimization',
      'Automated 5-Star Review Growth Strategy',
      'Geo-Tagged Business Photos Upload',
      'Local Citation & Search Discovery Setup'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the Google My Business (GMB) Setup & Local SEO service for ₹999.',
  },
  {
    id: 'social-bundle',
    category: 'marketing',
    title: 'Monthly Social Media Post Bundle',
    price: '₹1,999',
    billingType: '/ month',
    popular: true,
    badge: 'Complete Growth Plan',
    tagline: 'Consistent, premium branding across Instagram, LinkedIn, and Facebook to build brand authority.',
    deliveryTime: 'Monthly Delivery',
    features: [
      '12 High-Quality Festive & Promotional Graphics',
      'Custom Logo, Palette & Contact Watermarks',
      'Copywriting: Viral Captions & Hashtags Included',
      'Instagram Story & Feed Formats (1080x1080 & 1080x1920)',
      'Monthly Content Publishing Calendar'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the Monthly Social Media Post Design Bundle for ₹1,999/month.',
  },

  // Category 4: AI-Powered Services
  {
    id: 'ai-article',
    category: 'ai',
    title: 'AI Content & Article Writing',
    price: '₹399',
    badge: 'SEO Optimized',
    tagline: 'High-ranking blogs, landing page copy, and authority technical articles written with precision.',
    deliveryTime: 'Same Day Delivery',
    features: [
      '100% SEO-Optimized Articles / Blogs (1,200+ Words)',
      'Plagiarism-Free with Human Fact-Checking',
      'Native AI Semantic Structuring & H2/H3 Tags',
      'Meta Description & Social Excerpt Included',
      'Direct Markdown or Google Docs Delivery'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the AI Content & Article Writing service for ₹399.',
  },
  {
    id: 'ai-photo-enhance',
    category: 'ai',
    title: 'AI Product Photo Enhancement',
    price: '₹699',
    billingType: '(Pack of 10)',
    popular: true,
    badge: 'E-commerce Conversion',
    tagline: 'Studio-grade e-commerce product photos that boost click-through rates and buyer conversion.',
    deliveryTime: '24 Hours Delivery',
    features: [
      'Pack of 10 High-Resolution Product Images',
      'Studio Quality Background Removal & Placement',
      'Natural Lighting, Realistic Shadow & HD Polish',
      'Amazon, Flipkart & Shopify Compliance',
      'Fast 24-Hour Turnaround'
    ],
    whatsappMessage: 'Hi CareerNova team, I want to order the AI Product Photo Enhancement Pack (10 Images) for ₹699.',
  },
];

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

// Per-category color tokens so every service card reads as clearly, distinctly colorful
const CATEGORY_STYLES: Record<
  ServiceItem['category'],
  {
    icon: typeof Briefcase;
    accentBar: string;
    iconChip: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    check: string;
    ring: string;
    border: string;
    hoverBorder: string;
    ribbon: string;
    priceChip: string;
  }
> = {
  career: {
    icon: Briefcase,
    accentBar: 'from-sky-500 to-blue-600',
    iconChip: 'bg-sky-100 text-sky-600',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200',
    check: 'text-sky-600',
    ring: 'ring-sky-500/20',
    border: 'border-sky-500',
    hoverBorder: 'hover:border-sky-400/80',
    ribbon: 'from-sky-600 to-blue-600 shadow-sky-600/30',
    priceChip: 'bg-sky-50 border-sky-200 text-sky-700',
  },
  business: {
    icon: TrendingUp,
    accentBar: 'from-violet-500 to-purple-600',
    iconChip: 'bg-violet-100 text-violet-600',
    badgeBg: 'bg-violet-50',
    badgeText: 'text-violet-700',
    badgeBorder: 'border-violet-200',
    check: 'text-violet-600',
    ring: 'ring-violet-500/20',
    border: 'border-violet-500',
    hoverBorder: 'hover:border-violet-400/80',
    ribbon: 'from-violet-600 to-purple-600 shadow-violet-600/30',
    priceChip: 'bg-violet-50 border-violet-200 text-violet-700',
  },
  marketing: {
    icon: Share2,
    accentBar: 'from-pink-500 to-rose-600',
    iconChip: 'bg-pink-100 text-pink-600',
    badgeBg: 'bg-pink-50',
    badgeText: 'text-pink-700',
    badgeBorder: 'border-pink-200',
    check: 'text-pink-600',
    ring: 'ring-pink-500/20',
    border: 'border-pink-500',
    hoverBorder: 'hover:border-pink-400/80',
    ribbon: 'from-pink-600 to-rose-600 shadow-pink-600/30',
    priceChip: 'bg-pink-50 border-pink-200 text-pink-700',
  },
  ai: {
    icon: Bot,
    accentBar: 'from-amber-500 to-orange-600',
    iconChip: 'bg-amber-100 text-amber-600',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    badgeBorder: 'border-amber-200',
    check: 'text-amber-600',
    ring: 'ring-amber-500/20',
    border: 'border-amber-500',
    hoverBorder: 'hover:border-amber-400/80',
    ribbon: 'from-amber-500 to-orange-600 shadow-amber-600/30',
    priceChip: 'bg-amber-50 border-amber-200 text-amber-700',
  },
};

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
      {/* 1. HERO HEADER — illustrated staircase (left) + growth panel (right) framing the headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="relative max-w-6xl mx-auto rounded-3xl border border-slate-200 px-6 py-10 sm:py-14 overflow-hidden"
      >
        {/* Real illustration as full hero background */}
        <img
          src={heroBanner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft white wash so the centered text stays readable over the illustration */}
        <div className="absolute inset-0 bg-white/55" />

        {/* CENTER: headline content */}
        <div className="relative z-20 text-center max-w-2xl mx-auto space-y-4">
          {/* Floating Top Badge */}
          <motion.div
            animate={{ y: [-4, 0, -4] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 text-xs font-bold shadow-md max-w-full"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-normal sm:whitespace-nowrap">CAREER & BUSINESS SERVICES MARKETPLACE</span>
          </motion.div>

          {/* Shimmering Hero Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Professional Growth Services at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
              Honest Pricing
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Accelerate your career, legal compliance, digital marketing, and AI workflow. Verified specialists, transparent INR pricing, and dedicated human support.
          </p>

          {/* Trust Guarantee Badges with Entrance & Hover Glow */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-600">
            <div className="feature-badge-glow flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs cursor-default">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-bold text-slate-900 whitespace-nowrap">100% Satisfaction Guaranteed</span>
            </div>
            <div className="feature-badge-glow flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs cursor-default">
              <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="font-bold text-slate-900 whitespace-nowrap">Fast 24-48h Delivery</span>
            </div>
            <div className="feature-badge-glow flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs cursor-default">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-bold text-slate-900 whitespace-nowrap">Verified Specialists</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. CATEGORY SELECTOR PILLS WITH SLIDING TAB INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="flex items-center justify-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs gap-1.5 overflow-x-auto max-w-fit mx-auto custom-scrollbar"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap z-10 ${
                isSelected
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="servicesActiveTab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl shadow-md shadow-indigo-600/30 -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              {Icon && <Icon className="w-3.5 h-3.5" />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* 3. SERVICE CARDS MARKETPLACE GRID WITH STAGGERED CASCADE ENTRANCE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredServices.map((service, index) => {
          const isCareer = service.category === 'career';
          const isBusiness = service.category === 'business';
          const isMarketing = service.category === 'marketing';
          const theme = CATEGORY_STYLES[service.category];
          const CategoryIcon = theme.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...smoothTransition, delay: (index % 4) * 0.08 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--service-spotlight-x', `${x}px`);
                e.currentTarget.style.setProperty('--service-spotlight-y', `${y}px`);
                e.currentTarget.style.setProperty('--service-spotlight-opacity', '1');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--service-spotlight-opacity', '0');
              }}
              className={`relative p-4 sm:p-5 pt-6 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between gap-4 hover:shadow-xl hover:-translate-y-1.5 ${
                service.popular
                  ? `${theme.border} shadow-md ring-1 ${theme.ring}`
                  : `border-slate-200 shadow-xs ${theme.hoverBorder}`
              }`}
            >
              {/* Clipped inner layer: colored top accent bar + movable spotlight aura (kept off the card edge so ribbons never get cut) */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.accentBar}`} />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300"
                  style={{
                    opacity: 'var(--service-spotlight-opacity, 0)',
                    background:
                      'radial-gradient(380px circle at var(--service-spotlight-x, 0px) var(--service-spotlight-y, 0px), rgba(59, 130, 246, 0.12), rgba(99, 102, 241, 0.05), transparent 70%)',
                  }}
                />
              </div>

              {/* Highlight Ribbon for Popular Services — sits outside the clipped layer so it's never cut off */}
              {service.popular && (
                <div className={`absolute top-0 right-6 -translate-y-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r ${theme.ribbon} text-white text-[11px] font-bold shadow-md flex items-center gap-1 z-10`}>
                  <Star className="w-3 h-3 fill-white shrink-0" />
                  <span className="whitespace-nowrap">Popular</span>
                </div>
              )}

              {/* Top Details */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${theme.iconChip}`}>
                    <CategoryIcon className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 flex-1 min-w-0">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} break-words`}>
                      {service.badge}
                    </span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium shrink-0">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="whitespace-nowrap">{service.deliveryTime}</span>
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                  {service.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {service.price}
                  </span>
                  {service.billingType && (
                    <span className="text-xs text-slate-500 font-semibold whitespace-nowrap">
                      {service.billingType}
                    </span>
                  )}
                  <span className={`text-[11px] ml-auto font-bold flex items-center gap-1 border px-2 py-0.5 rounded-md whitespace-nowrap ${theme.priceChip}`}>
                    <Check className="w-3.5 h-3.5 shrink-0" /> All Inclusive
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="mt-3.5 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                    What's Included:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${theme.check}`} />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: Direct WhatsApp Order + Free Self-Serve Option */}
              <div className="relative z-10 space-y-2 pt-3 border-t border-slate-100">
                <a
                  href={getWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span className="whitespace-nowrap">Order via WhatsApp ({service.price})</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-slate-500 px-1">
                  <span className="whitespace-nowrap">Fast reply within ~15 mins</span>
                  <button
                    onClick={() => {
                      if (isCareer) onNavigate('career');
                      else if (isBusiness) onNavigate('business');
                      else if (isMarketing) onNavigate('tools', 'marketing-tools');
                      else onNavigate('ai-hub');
                    }}
                    className={`font-bold cursor-pointer hover:underline whitespace-nowrap ${theme.check}`}
                  >
                    Try Free Self-Serve Tool →
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. CUSTOM ENTERPRISE OR BUNDLE INQUIRY BANNER WITH SCROLL REVEAL */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.2 }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-xl shadow-indigo-600/20 space-y-5 text-center relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto space-y-2 relative z-10">
          <span className="text-xs uppercase font-bold text-indigo-200 tracking-wider">
            Need a custom package or bulk corporate training?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Talk Directly to Our Strategy & Tech Leads
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-normal">
            We customize end-to-end solutions for colleges, recruitment agencies, and early-stage startup batches across India.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
          <a
            href="https://wa.me/917007260391?text=Hi%20CareerNova%2C%20I%20have%20a%20custom%20service%20or%20bulk%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Chat on WhatsApp (+91 7007260391)</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Open Contact Desk</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Award,
  Check,
  Star
} from 'lucide-react';
import { TabId } from '../../types';

interface PricingViewProps {
  onNavigate: (tab: TabId) => void;
  onOpenAuth: () => void;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const PricingView: React.FC<PricingViewProps> = ({ onNavigate, onOpenAuth }) => {
  const pricingTiers = [
    {
      name: 'Free Explorer',
      badge: '100% Free Forever',
      price: '₹0',
      period: '/ forever',
      description: 'Ideal for students, freshers, and early planners needing core tools and roadmaps.',
      popular: false,
      buttonText: 'Start Free Now',
      buttonAction: () => onNavigate('tools'),
      features: [
        'Unlimited Financial Calculators (EMI, Salary, Break-Even)',
        'Standard ATS Resume Builder & Live Preview',
        'Full Access to Career Curriculum Roadmaps',
        'Free Resources, Guides & Blog Vault',
        'Standard Text & Copy-Friendly Exports'
      ]
    },
    {
      name: 'Pro Career & Growth',
      badge: 'Most Popular',
      price: '₹499',
      period: '/ month',
      description: 'For ambitious professionals and founders seeking unfair AI advantages and interview coaching.',
      popular: true,
      buttonText: 'Upgrade to Pro',
      buttonAction: onOpenAuth,
      features: [
        'Everything in Free +',
        'Unlimited AI Resume Bullet Optimizations (Google XYZ)',
        'Interactive AI Mock Interview Simulator with STAR Grading',
        'AI Cold Email Generator with 3 high-converting angles',
        'Direct High-Res PDF & Word Document Downloads'
      ]
    },
    {
      name: 'Business & Founder',
      badge: 'Scaleup Ready',
      price: '₹1,499',
      period: '/ month',
      description: 'For startup founders, agencies, and teams creating complete investor decks and GTM engines.',
      popular: false,
      buttonText: 'Contact for Business Plan',
      buttonAction: () => onNavigate('contact'),
      features: [
        'Everything in Pro +',
        'AI Business Plan Generator with 3-Year Financial Forecasts',
        'AI SWOT Analysis Studio & Risk Mitigation Matrix',
        'AI 90-Day GTM Marketing Strategy & Budget Allocation',
        'Priority 1-on-1 Support & Direct Strategy Advisory'
      ]
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Simple, Transparent Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Career &amp; Business Growth</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Start 100% free with unlimited calculators and standard builders, or upgrade for unrestricted high-speed Gemini 3.7 AI intelligence and deep exports.
        </p>
      </motion.div>

      {/* 2. Pricing Cards Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
        {pricingTiers.map((tier, idx) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...smoothTransition, delay: idx * 0.1 }}
            className={`p-7 sm:p-8 rounded-3xl bg-white flex flex-col justify-between space-y-6 transition-all duration-300 relative shadow-xs ${
              tier.popular
                ? 'border-2 border-indigo-600 shadow-md shadow-indigo-600/10 ring-2 ring-indigo-600/20 -translate-y-1'
                : 'border border-slate-200 hover:border-slate-300 hover:shadow-sm'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-[11px] uppercase tracking-wider shadow-md shadow-indigo-600/30 flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                <span>{tier.badge}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-indigo-600 tracking-wider">
                  {tier.name}
                </span>
                {!tier.popular && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {tier.badge}
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1 pt-1">
                <span className="text-4xl font-black text-slate-900 tracking-tight">
                  {tier.price}
                </span>
                <span className="text-xs text-slate-500 font-semibold">{tier.period}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed min-h-[36px] font-normal">
                {tier.description}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block">
                  Features &amp; Included Tools:
                </span>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={tier.buttonAction}
              className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all shadow-xs active:scale-95 cursor-pointer ${
                tier.popular
                  ? 'ambient-glow-cta bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-indigo-600/25 hover:shadow-md hover:shadow-indigo-600/35 hover:-translate-y-0.5'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
              }`}
            >
              {tier.buttonText}
            </button>
          </motion.div>
        ))}
      </div>

      {/* 3. Satisfaction & Security Guarantee with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.2 }}
        className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">100% Risk-Free Guarantee</h4>
            <p className="text-xs text-slate-600 mt-0.5 font-normal">
              Cancel anytime with 1-click. Free tier accounts stay active forever without credit card requirements.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors shrink-0 cursor-pointer border border-slate-200"
        >
          Have Custom Questions?
        </button>
      </motion.div>
    </div>
  );
};

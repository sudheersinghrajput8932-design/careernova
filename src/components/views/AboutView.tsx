import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  BarChart3,
  Code2,
  Briefcase,
  Wallet,
  Building2,
  BookOpen,
  Hammer,
  TrendingUp,
  Lightbulb,
  Users,
  RefreshCw,
  Target,
  GraduationCap,
  Rocket,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { TabId } from '../../types';

interface AboutViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

// Who We Are — five practice areas CareerNova is built around
const PRACTICE_AREAS = [
  { icon: Briefcase, label: 'Career Development' },
  { icon: Building2, label: 'Business Solutions' },
  { icon: Code2, label: 'Digital Transformation' },
  { icon: BarChart3, label: 'Analytics & AI' },
  { icon: Wallet, label: 'Financial Expertise' },
];

// Our Mission — the three-word brand language: Learn, Build, Grow
const MISSION_PILLARS = [
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Gain practical knowledge that applies directly to what you\u2019re working on.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description: 'Turn that knowledge into a real, usable capability.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Create progress you can actually measure.',
  },
];

// What We Believe — four principles, kept monotone (not a rainbow of colours)
const BELIEFS = [
  {
    icon: Lightbulb,
    title: 'Practicality Over Complexity',
    description: 'Solutions should be simple, useful and something you can act on the same day you receive them.',
  },
  {
    icon: Users,
    title: 'People + Technology',
    description: 'We use AI and technology to strengthen human judgement, not replace it.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'Markets and technology keep changing, so the way we work has to keep changing with them.',
  },
  {
    icon: Target,
    title: 'Results Matter',
    description: 'A good idea only becomes valuable once it changes something in the real world.',
  },
];

// Our Expertise — a flow, not a repeat of the homepage / services list
const EXPERTISE_FLOWS = [
  {
    icon: BarChart3,
    title: 'Business & Analytics',
    steps: ['Data', 'Insights', 'Decisions'],
    accent: 'text-violet-600',
    chip: 'bg-violet-100 text-violet-600',
  },
  {
    icon: Code2,
    title: 'Digital & Technology',
    steps: ['Ideas', 'Solutions', 'Digital Growth'],
    accent: 'text-sky-600',
    chip: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Briefcase,
    title: 'Career & Finance',
    steps: ['Skills', 'Confidence', 'Opportunities'],
    accent: 'text-amber-600',
    chip: 'bg-amber-100 text-amber-600',
  },
];

// Who We Help — four audiences
const AUDIENCES = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Build skills and career confidence before you graduate.',
    chip: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Briefcase,
    title: 'Professionals',
    description: 'Upgrade your skills and accelerate the next move.',
    chip: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Make smarter decisions and build better digital systems.',
    chip: 'bg-violet-100 text-violet-600',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurs',
    description: 'Turn an idea into something that can actually scale.',
    chip: 'bg-amber-100 text-amber-600',
  },
];

const WHY_POINTS = [
  'Practical approach',
  'Modern technology',
  'Personalized solutions',
  'Long-term growth mindset',
];

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. ABOUT HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto px-4"
      >
        {/* Left: eyebrow, heading, subheading */}
        <div className="space-y-4 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            ABOUT CAREERNOVA
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Building Better Futures Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
              Expertise &amp; Innovation
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            CareerNova brings together career intelligence, business expertise, technology and practical
            solutions to help individuals and organizations move forward with confidence.
          </p>
        </div>

        {/* Right: one restrained abstract visual — a growth panel, not a wall of cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="relative aspect-[4/3] rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 overflow-hidden"
        >
          {/* Subtle grid backdrop */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.12) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Rising growth bars */}
          <div className="absolute bottom-8 left-8 right-8 flex items-end gap-3 h-32">
            {[40, 65, 50, 85, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-600 to-violet-500"
              />
            ))}
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [-4, 0, -4] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute top-6 right-6 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-slate-200 shadow-md"
          >
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-900 whitespace-nowrap">Real Progress</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 2. WHO WE ARE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="max-w-4xl mx-auto px-4 text-center space-y-5"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          More Than a Service Platform
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          CareerNova is built around a simple idea \u2014 the right knowledge, the right tools and the right
          guidance can turn potential into progress. We don\u2019t think of ourselves as a list of services.
          We\u2019re a working system that connects career development, business solutions, digital
          transformation, analytics and financial expertise, because real progress rarely comes from a
          single skill on its own.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700"
            >
              <area.icon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="text-xs font-bold whitespace-nowrap">{area.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. OUR MISSION & VISION */}
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-5">
        {/* Mission — light panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={smoothTransition}
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5"
        >
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To make professional growth and practical expertise more accessible, useful and impactful.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {MISSION_PILLARS.map((pillar) => (
              <div key={pillar.title} className="space-y-2 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <pillar.icon className="w-4 h-4" />
                </div>
                <div className="text-sm font-black text-slate-900">{pillar.title}</div>
                <p className="text-[11px] text-slate-600 leading-snug">{pillar.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vision — dark, futuristic panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="relative rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 flex flex-col justify-center space-y-3 overflow-hidden min-h-[220px]"
        >
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(129,140,248,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(129,140,248,0.35) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative z-10 space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Our Vision</h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              To create a future where every learner, professional and business has access to the expertise
              and technology needed to move forward.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4. WHAT WE BELIEVE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="max-w-6xl mx-auto px-4 space-y-8"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">What We Believe</h2>
          <p className="text-sm text-slate-600">A few ideas guide every decision we make.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {BELIEFS.map((belief) => (
            <div
              key={belief.title}
              className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <belief.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-black text-slate-900">{belief.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{belief.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. OUR EXPERTISE — a flow / ecosystem, not a repeat of the services grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="max-w-6xl mx-auto px-4 space-y-8"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Our Expertise</h2>
          <p className="text-sm text-slate-600">Three areas of practice, each built to move you from a starting point to an outcome.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {EXPERTISE_FLOWS.map((flow) => (
            <div key={flow.title} className="p-5 rounded-2xl border border-slate-200 bg-white space-y-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${flow.chip}`}>
                <flow.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-900">{flow.title}</h3>
              <div className="flex items-center flex-wrap gap-1.5">
                {flow.steps.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className={`text-xs font-bold ${flow.accent}`}>{step}</span>
                    {i < flow.steps.length - 1 && <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* 6. MEET THE FOUNDER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center text-3xl font-black shrink-0">
            SS
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase font-bold text-indigo-600 tracking-wider">
              The Mind Behind CareerNova
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">Sudhir Singh</h2>
              <p className="text-xs sm:text-sm text-slate-500 font-bold">Founder, CareerNova</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Building CareerNova with a focus on practical technology, analytics, career development and
              digital solutions \u2014 with the goal of making expert-level guidance accessible without the
              usual complexity or cost.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
              {['Analytics', 'Technology', 'Career', 'Digital Solutions'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 7. WHO WE HELP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="max-w-6xl mx-auto px-4 space-y-8"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Built For People Who Want to Move Forward
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUDIENCES.map((aud) => (
            <div
              key={aud.title}
              className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 text-center sm:text-left"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto sm:mx-0 ${aud.chip}`}>
                <aud.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-900">{aud.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{aud.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 8. FINAL CTA — with the "Why CareerNova" trust points folded in */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-xl shadow-indigo-600/20 space-y-6 text-center relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto space-y-2 relative z-10">
          <span className="text-xs uppercase font-bold text-indigo-200 tracking-wider">
            One platform. Multiple areas of expertise. One goal \u2014 your growth.
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Your Next Chapter Starts Here</h2>
          <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-normal">
            Whether you\u2019re learning a new skill, building a business or planning your next career move,
            we\u2019re ready to help you take the next step.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 relative z-10">
          {WHY_POINTS.map((point) => (
            <div
              key={point}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span className="text-[11px] font-bold whitespace-nowrap">{point}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
          <button
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-indigo-700 font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917007260391?text=Hi%20CareerNova%2C%20I%27d%20like%20to%20know%20more%20about%20your%20team%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Talk to CareerNova</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

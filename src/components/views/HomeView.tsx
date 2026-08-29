import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Bot,
  Calculator,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Star,
  FileText,
  DollarSign,
  Compass,
  PieChart,
  Layers,
  ChevronRight,
  Quote,
  Target,
  Rocket,
  BarChart3,
  Megaphone,
  Code2,
  GraduationCap,
  Search,
  LineChart,
  MousePointer2,
  BrainCircuit,
  Workflow,
  Gauge,
  CircleDollarSign,
  Lightbulb,
  ClipboardList,
  Settings2,
  CheckCircle,
  Smartphone,
  Globe2,
  PenTool,
  Presentation,
  ArrowUpRight
} from 'lucide-react';

import { TabId } from '../../types';
import { ParticleMeshCanvas } from '../home/ParticleMeshCanvas';
import { InfiniteMarqueeBanner } from '../home/InfiniteMarqueeBanner';
import { openAiAssistant } from '../../utils/aiAssistantTrigger';

interface HomeViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenAuth?: () => void;
}

/* -------------------------------------------------------------------------- */
/* HERO VISUALS                                                               */
/* -------------------------------------------------------------------------- */

const HeroVisual = ({ type }: { type: number }) => {
  const visuals = [
    {
      label: 'Business Analytics',
      metric: '+240%',
      metricLabel: 'Revenue Growth',
      icon: BarChart3,
      accent: 'from-indigo-500 to-violet-500'
    },
    {
      label: 'Marketing Growth',
      metric: '78%',
      metricLabel: 'Campaign Performance',
      icon: Megaphone,
      accent: 'from-fuchsia-500 to-indigo-500'
    },
    {
      label: 'Career Intelligence',
      metric: '92%',
      metricLabel: 'Career Readiness',
      icon: GraduationCap,
      accent: 'from-violet-500 to-blue-500'
    },
    {
      label: 'Engineering',
      metric: '10x',
      metricLabel: 'Scalable Workflow',
      icon: Code2,
      accent: 'from-blue-500 to-cyan-400'
    }
  ];

  const current = visuals[type];
  const MainIcon = current.icon;

  return (
    <div className="relative h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] w-full overflow-hidden rounded-[2rem] bg-[#090a2b]">
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[330px] w-[330px] rounded-full bg-violet-600/30 blur-[90px]"
      />

      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.35) 1px, transparent 1px)',
            backgroundSize: '42px 42px'
          }}
        />
      </div>

      {/* Floating nodes */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <motion.div
          key={item}
          animate={{
            y: [0, -15, 0],
            x: [0, item % 2 === 0 ? 8 : -8, 0],
            opacity: [0.3, 0.9, 0.3]
          }}
          transition={{
            duration: 3 + item * 0.3,
            repeat: Infinity,
            delay: item * 0.2
          }}
          className="absolute h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(139,92,246,.9)]"
          style={{
            left: `${12 + item * 13}%`,
            top: `${12 + (item % 3) * 27}%`
          }}
        />
      ))}

      {/* Orbit rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-[54%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-[54%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/20"
      />

      {/* Central growth engine */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.025, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full border border-violet-300/30 bg-gradient-to-br from-indigo-500/20 via-violet-600/30 to-purple-700/20 shadow-[0_0_80px_rgba(124,58,237,.45)] backdrop-blur-xl">
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-full border border-violet-300/20" />

          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-600 to-fuchsia-500 shadow-[0_0_40px_rgba(139,92,246,.7)]"
          >
            <Rocket className="h-9 w-9 sm:h-11 sm:w-11 text-white" />
          </motion.div>
        </div>

        {/* Rocket flame */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.25, 0.7],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="absolute left-1/2 top-full h-20 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-300 via-purple-500 to-transparent blur-md"
        />
      </motion.div>

      {/* Top analytics card */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity }}
        className="absolute left-[5%] top-[8%] w-[180px] rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:w-[210px]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-white/60">
              {current.label}
            </p>
            <p className="mt-1 text-lg font-black text-white">
              {current.metric}
            </p>
          </div>
          <div className={`rounded-xl bg-gradient-to-br ${current.accent} p-2`}>
            <MainIcon className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="mt-4 flex items-end gap-1">
          {[25, 38, 30, 55, 48, 72, 64, 92].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 5 }}
              animate={{ height }}
              transition={{
                duration: 1,
                delay: index * 0.08,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="flex-1 rounded-t bg-gradient-to-t from-violet-500 to-fuchsia-300"
            />
          ))}
        </div>
      </motion.div>

      {/* Revenue card */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
        className="absolute right-[5%] top-[13%] w-[175px] rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:w-[200px]"
      >
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-emerald-500/20 p-2">
            <TrendingUp className="h-4 w-4 text-emerald-300" />
          </div>
          <span className="text-[10px] font-semibold text-white/60">
            Growth Signal
          </span>
        </div>

        <p className="mt-3 text-2xl font-black text-emerald-300">+240%</p>
        <p className="text-[10px] text-white/50">vs previous cycle</p>
      </motion.div>

      {/* Bottom left card */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-[10%] left-[7%] w-[175px] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:w-[205px]"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-white/60">
            Project Progress
          </span>
          <span className="text-xs font-bold text-violet-300">86%</span>
        </div>

        <div className="mt-3 space-y-2">
          {[
            ['Planning', 100],
            ['Build', 85],
            ['Testing', 70]
          ].map(([label, value]) => (
            <div key={String(label)}>
              <div className="mb-1 flex justify-between text-[9px] text-white/50">
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom right card */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-[9%] right-[6%] w-[165px] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:w-[190px]"
      >
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-fuchsia-500/20 p-2">
            <Target className="h-4 w-4 text-fuchsia-300" />
          </div>
          <span className="text-[10px] font-bold text-white">
            Performance
          </span>
        </div>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-xl font-black text-white">92%</span>
          <span className="mb-1 text-[9px] text-emerald-300">+18%</span>
        </div>
      </motion.div>

      {/* Header badge */}
      <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-wide text-violet-100 backdrop-blur-xl">
        CAREERNOVA GROWTH ENGINE
      </div>

      {/* Slide number */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/20 px-4 py-2 text-[10px] font-bold text-white/60 backdrop-blur-md">
        0{type + 1} / 04
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* PROCESS                                                                    */
/* -------------------------------------------------------------------------- */

const processSteps = [
  {
    number: '01',
    title: 'Ideate',
    desc: 'Understand challenges, identify opportunities, and define the right direction.',
    icon: Lightbulb,
    color: 'from-indigo-500 to-violet-500'
  },
  {
    number: '02',
    title: 'Plan',
    desc: 'Turn ideas into practical strategies, roadmaps, priorities, and measurable goals.',
    icon: ClipboardList,
    color: 'from-violet-500 to-fuchsia-500'
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Execute with technology, marketing systems, digital tools, and expert guidance.',
    icon: Settings2,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    number: '04',
    title: 'Measure',
    desc: 'Track outcomes, optimize performance, and continuously improve growth.',
    icon: LineChart,
    color: 'from-emerald-500 to-teal-500'
  }
];

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenAuth
}) => {
  const typewriterWords = [
    'Growth.',
    'Success.',
    'Impact.',
    'Innovation.',
    'Leadership.'
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  const [heroSlide, setHeroSlide] = useState(0);

  /* Typewriter */
  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.substring(
          0,
          displayText.length + 1
        );

        setDisplayText(nextText);

        if (nextText === currentWord) {
          setTypingSpeed(100);

          setTimeout(() => {
            setIsDeleting(true);
          }, 1700);
        } else {
          setTypingSpeed(80 + Math.random() * 45);
        }
      } else {
        const nextText = currentWord.substring(
          0,
          Math.max(0, displayText.length - 1)
        );

        setDisplayText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setWordIndex(
            (previous) => (previous + 1) % typewriterWords.length
          );
          setTypingSpeed(300);
        } else {
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    typingSpeed
  ]);

  /* Hero slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((previous) => (previous + 1) % 4);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const allReviews = [
    {
      quote:
        "CareerNova's financial and break-even calculators gave us absolute clarity on our startup's unit economics before our seed round.",
      name: 'Aarav Sharma',
      role: 'Tech Founder & CEO',
      rating: 5,
      badge: 'Startup Founder',
      category: 'Tools & Finance'
    },
    {
      quote:
        'The full-stack engineering expertise and architecture guidance helped our team scale traffic 10x without downtime.',
      name: 'Vikram Malhotra',
      role: 'CTO & Lead Architect',
      rating: 5,
      badge: 'Core Expertise',
      category: 'Web Engineering'
    },
    {
      quote:
        'The AI career roadmap and resume analyzer tools completely transformed my interview preparation.',
      name: 'Priya Verma',
      role: 'Software Engineer',
      rating: 5,
      badge: 'Career Roadmap',
      category: 'Tools & AI'
    },
    {
      quote:
        'The cold email generator and strategic positioning templates saved our sales team dozens of hours.',
      name: 'Rohan Mehta',
      role: 'Growth & Marketing Lead',
      rating: 5,
      badge: 'B2B Outreach',
      category: 'Business Strategy'
    },
    {
      quote:
        'Their mobile development execution is clean, modern, and delivered with excellent attention to detail.',
      name: 'Neha Kapoor',
      role: 'Product Manager',
      rating: 5,
      badge: 'Core Expertise',
      category: 'Mobile Apps'
    },
    {
      quote:
        'The strategic lead generation framework optimized our sales pipeline and improved qualified inbound leads.',
      name: 'Aditya Roy',
      role: 'Head of Sales',
      rating: 5,
      badge: 'Lead Generation',
      category: 'Business Growth'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 animate-in fade-in duration-500">
      {/* ================================================================== */}
      {/* HERO                                                              */}
      {/* ================================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] border border-indigo-200/60 bg-white shadow-xl shadow-indigo-100/40"
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          {/* Hero copy */}
          <div className="relative z-20 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-indigo-50/40 to-violet-50/60 px-7 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <ParticleMeshCanvas />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-4 py-2 text-xs font-black tracking-wide text-indigo-700 shadow-sm backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-violet-600" />
                <span>CAREERNOVA GROWTH ENGINE</span>
              </motion.div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.3rem]">
                Turn Skills,
                <br />
                Strategy &amp;
                <br />
                Technology Into
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="ml-1 inline-block h-10 w-1 translate-y-1 rounded-full bg-violet-600 animate-pulse sm:h-14" />
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore practical expertise across business analytics,
                digital marketing, engineering, career tools, and growth
                systems — built to move ideas from planning to execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  id="hero-explore-tools-btn"
                  onClick={() => onNavigate('tools')}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/35"
                >
                  Explore Core Expertise
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  id="hero-consult-btn"
                  onClick={() =>
                    openAiAssistant({ mode: 'consultation' })
                  }
                  className="group inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-black text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
                >
                  <Bot className="h-4 w-4 text-indigo-600" />
                  Consult With Expert
                </button>
              </div>

              {/* Trust metrics */}
              <div className="mt-9 flex flex-wrap gap-5 border-t border-slate-200 pt-6">
                <div>
                  <div className="text-xl font-black text-slate-950">
                    500+
                  </div>
                  <div className="text-[10px] font-medium text-slate-500">
                    Happy Clients
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <div className="text-xl font-black text-slate-950">
                    13+
                  </div>
                  <div className="text-[10px] font-medium text-slate-500">
                    Expertise Areas
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <div className="text-xl font-black text-slate-950">
                    100+
                  </div>
                  <div className="text-[10px] font-medium text-slate-500">
                    Tools &amp; Frameworks
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <div className="flex items-center gap-1 text-xl font-black text-slate-950">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    4.9/5
                  </div>
                  <div className="text-[10px] font-medium text-slate-500">
                    Client Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated visual */}
          <div className="relative min-h-[480px] bg-[#090a2b] lg:min-h-[650px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlide}
                initial={{ opacity: 0, x: 35, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -35, scale: 0.98 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <HeroVisual type={heroSlide} />
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute right-5 top-5 z-30 flex gap-2">
              <button
                aria-label="Previous slide"
                onClick={() =>
                  setHeroSlide((previous) =>
                    previous === 0 ? 3 : previous - 1
                  )
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/15"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>

              <button
                aria-label="Next slide"
                onClick={() =>
                  setHeroSlide((previous) => (previous + 1) % 4)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/15"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setHeroSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    heroSlide === index
                      ? 'w-9 bg-violet-400'
                      : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================================================== */}
      {/* QUICK SIGNAL BAR                                                  */}
      {/* ================================================================== */}

      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-4">
        {[
          {
            icon: ShieldCheck,
            title: 'Free & Secure',
            desc: 'Privacy-focused tools'
          },
          {
            icon: BrainCircuit,
            title: 'AI-Powered',
            desc: 'Smart assistance'
          },
          {
            icon: Zap,
            title: 'Fast Execution',
            desc: 'Actionable outputs'
          },
          {
            icon: CheckCircle,
            title: 'Practical',
            desc: 'Built for outcomes'
          }
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-3 border-b border-slate-100 p-4 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <div className="rounded-xl bg-indigo-50 p-2.5">
                <Icon className="h-4 w-4 text-indigo-600" />
              </div>

              <div>
                <p className="text-xs font-black text-slate-900">
                  {item.title}
                </p>
                <p className="text-[10px] text-slate-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <InfiniteMarqueeBanner />

      {/* ================================================================== */}
      {/* PROVEN PROCESS                                                    */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/50 px-5 py-12 sm:px-10 sm:py-14 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-sm">
            How CareerNova Works
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            From Idea to Impact
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            A simple, data-driven approach that connects strategy,
            technology, marketing, career development, and measurable
            outcomes.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl">
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-indigo-200 via-violet-300 to-emerald-200 lg:block" />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div
                    className={`relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-indigo-100`}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color}`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div className="mt-5 text-[10px] font-black tracking-widest text-indigo-500">
                    {step.number}
                  </div>

                  <h3 className="mt-1 text-lg font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[230px] text-xs leading-5 text-slate-600">
                    {step.desc}
                  </p>

                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-10 hidden h-5 w-5 text-indigo-300 lg:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHAT WE DO                                                        */}
      {/* ================================================================== */}

      <section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-violet-100 bg-violet-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-violet-600">
            What We Do Best
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Expertise That Moves You Forward
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Connect business strategy, growth marketing, engineering, and
            career intelligence through one practical ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Business & Analytics',
              desc: 'Financial modeling, BI dashboards, forecasting, unit economics, and data-driven insights.',
              icon: BarChart3,
              bg: 'bg-indigo-50',
              color: 'text-indigo-600',
              tab: 'business' as TabId
            },
            {
              title: 'Marketing & Growth',
              desc: 'Campaign strategy, funnels, content, ads, lead generation, and growth systems.',
              icon: Megaphone,
              bg: 'bg-fuchsia-50',
              color: 'text-fuchsia-600',
              tab: 'business' as TabId
            },
            {
              title: 'Engineering & Tech',
              desc: 'Web, mobile, cloud, APIs, automation, AI workflows, and scalable digital products.',
              icon: Code2,
              bg: 'bg-blue-50',
              color: 'text-blue-600',
              tab: 'career' as TabId
            },
            {
              title: 'Career & Student Tools',
              desc: 'Resume tools, mock interviews, career guidance, learning resources, and roadmaps.',
              icon: GraduationCap,
              bg: 'bg-emerald-50',
              color: 'text-emerald-600',
              tab: 'tools' as TabId
            }
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                onClick={() => onNavigate(item.tab)}
                className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950 transition-colors group-hover:text-indigo-600">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-black text-indigo-600">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================================================================== */}
      {/* MARKETING CAMPAIGN                                                 */}
      {/* ================================================================== */}

      <section className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 p-7 sm:p-10 lg:p-14">
            <span className="inline-flex rounded-full border border-violet-100 bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-violet-600">
              Marketing Campaign &amp; Growth Strategy
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Turn Attention Into
              <span className="text-indigo-600"> Measurable Growth.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Build campaigns around clear audiences, compelling offers,
              conversion paths, and measurable growth targets instead of
              random posting and guesswork.
            </p>

            <div className="mt-8 space-y-4">
              {[
                ['Audience & Positioning', Target],
                ['Campaign Planning', ClipboardList],
                ['Content & Distribution', PenTool],
                ['Conversion & Measurement', Gauge]
              ].map(([label, Icon]) => {
                const ItemIcon = Icon as React.ElementType;

                return (
                  <div
                    key={String(label)}
                    className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 p-3 shadow-sm"
                  >
                    <div className="rounded-xl bg-indigo-50 p-2">
                      <ItemIcon className="h-4 w-4 text-indigo-600" />
                    </div>

                    <span className="text-sm font-bold text-slate-800">
                      {label}
                    </span>

                    <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-500" />
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onNavigate('business')}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              Explore Growth Strategy
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#0b0b30] p-7">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute h-[330px] w-[330px] rounded-full border border-violet-400/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute h-[240px] w-[240px] rounded-full border border-fuchsia-400/20"
            />

            <div className="relative z-10 w-full max-w-md">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-[0_0_70px_rgba(139,92,246,.45)]"
              >
                <Megaphone className="h-11 w-11 text-white" />
              </motion.div>

              {[
                {
                  title: 'Reach',
                  value: '2.4M',
                  icon: Users,
                  position: 'left-0 top-10'
                },
                {
                  title: 'Engagement',
                  value: '78%',
                  icon: MousePointer2,
                  position: 'right-0 top-20'
                },
                {
                  title: 'Conversions',
                  value: '+42%',
                  icon: TrendingUp,
                  position: 'left-6 bottom-8'
                },
                {
                  title: 'ROI',
                  value: '3.8x',
                  icon: CircleDollarSign,
                  position: 'right-6 bottom-0'
                }
              ].map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    animate={{ y: [0, index % 2 ? 7 : -7, 0] }}
                    transition={{
                      duration: 3 + index * 0.4,
                      repeat: Infinity
                    }}
                    className={`absolute ${card.position} w-36 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-violet-300" />
                      <span className="text-[9px] font-bold text-white/60">
                        {card.title}
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-black text-white">
                      {card.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STUDENT TOOLS                                                      */}
      {/* ================================================================== */}

      <section>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600">
            Student Career &amp; Digital Tools
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Build a Career That Compounds
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Practical tools for resumes, interviews, career planning,
            finance, productivity, and smarter professional decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: FileText,
              title: 'Resume & CV Tools',
              desc: 'Create, improve, and optimize professional resumes.',
              tab: 'tools' as TabId
            },
            {
              icon: Briefcase,
              title: 'Career Roadmaps',
              desc: 'Turn your target role into a practical learning plan.',
              tab: 'tools' as TabId
            },
            {
              icon: Calculator,
              title: 'Finance Calculators',
              desc: 'Understand salary, savings, break-even, and money decisions.',
              tab: 'tools' as TabId
            },
            {
              icon: BrainCircuit,
              title: 'AI Career Assistance',
              desc: 'Use intelligent guidance for career and interview preparation.',
              tab: 'tools' as TabId
            }
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => onNavigate(item.tab)}
                className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-50 p-2.5">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>

                  <h3 className="text-sm font-black text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center gap-1 text-[11px] font-black text-indigo-600">
                  Open Tool
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================================================================== */}
      {/* BUSINESS GROWTH                                                    */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-7 text-white shadow-2xl shadow-indigo-600/20 sm:p-10 lg:p-14">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-violet-100">
              Business Growth &amp; Revenue Strategy
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
              Strategy Should End With Numbers.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-indigo-100">
              Connect market positioning, lead generation, unit economics,
              conversion systems, and revenue planning into one practical
              growth framework.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                'Market Positioning',
                'Lead Generation',
                'Unit Economics',
                'Revenue Planning'
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[430px] lg:grid-cols-2">
            {[
              ['Pipeline', '+62%', TrendingUp],
              ['Conversion', '3.4x', Gauge],
              ['Revenue', '+48%', CircleDollarSign],
              ['Efficiency', '91%', Zap]
            ].map(([label, value, Icon]) => {
              const MetricIcon = Icon as React.ElementType;

              return (
                <motion.div
                  key={String(label)}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                >
                  <MetricIcon className="h-5 w-5 text-violet-200" />
                  <p className="mt-3 text-xl font-black">
                    {value}
                  </p>
                  <p className="text-[10px] text-indigo-100">
                    {label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* REVIEWS                                                            */}
      {/* ================================================================== */}

      <section className="overflow-hidden">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-violet-100 bg-violet-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-violet-600">
            Trusted by Professionals &amp; Students
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            What People Say About CareerNova
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Feedback across tools, technology, career guidance, marketing,
            and business strategy.
          </p>
        </div>

        <div className="relative flex w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 30,
              repeat: Infinity
            }}
            className="flex shrink-0 gap-5 px-3 py-3"
          >
            {[...allReviews, ...allReviews].map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex w-[315px] shrink-0 flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-lg sm:w-[370px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[9px] font-bold text-indigo-700">
                      {review.category}
                    </span>
                  </div>

                  <Quote className="mt-5 h-6 w-6 text-indigo-200" />

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-black text-white">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-black text-slate-900">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA                                                          */}
      {/* ================================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 px-7 py-12 text-center text-white shadow-2xl shadow-indigo-600/25 sm:px-10 sm:py-14"
      >
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
            <Rocket className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
            Ready to Turn Your Next Idea Into Growth?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
            Explore practical tools, expert capabilities, growth
            strategies, and career systems designed to help you move
            from planning to execution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              id="bottom-explore-tools-btn"
              onClick={() => onNavigate('tools')}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-black text-indigo-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Explore All Tools
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              id="bottom-consult-btn"
              onClick={() =>
                openAiAssistant({ mode: 'consultation' })
              }
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              <Bot className="h-4 w-4" />
              Get Free Consultation
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

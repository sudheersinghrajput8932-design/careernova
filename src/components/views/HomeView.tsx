import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
  Award,
  Layers,
  ChevronRight,
  Quote,
  CheckCircle,
  MessageSquareQuote,
  BookOpen,
  ArrowUpRight,
  Target,
  Rocket
} from 'lucide-react';
import { TabId } from '../../types';
import { ParticleMeshCanvas } from '../home/ParticleMeshCanvas';
import { TiltCard } from '../home/TiltCard';
import { InfiniteMarqueeBanner } from '../home/InfiniteMarqueeBanner';
import { EXPERTISE_CARDS } from './SpecialistsExpertiseView';
import { openAiAssistant } from '../../utils/aiAssistantTrigger';

interface HomeViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenAuth?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenAuth }) => {
  // Dynamic Typewriter headline words
  const typewriterWords = ['Growth.', 'Success.', 'Impact.', 'Innovation.', 'Leadership.'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(90 + Math.random() * 40);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed]);

  const featuredTools = [
    {
      id: 'resume-builder',
      title: 'ATS Resume Builder',
      badge: 'Career Tools',
      subBadge: '98% ATS Pass',
      category: 'career',
      icon: FileText,
      color: 'indigo',
      description: 'Single-column tech resume formatter with Google XYZ metric bullets and instant PDF export.',
      accentClass: 'text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      id: 'business-plan',
      title: 'AI Business Plan',
      badge: 'Business Tools',
      subBadge: 'VC Ready',
      category: 'business',
      icon: PieChart,
      color: 'violet',
      description: 'Generate comprehensive executive summaries, revenue models, and 3-year financial forecasts.',
      accentClass: 'text-violet-600 bg-violet-50 border-violet-100 group-hover:bg-violet-600 group-hover:text-white',
      badgeClass: 'bg-violet-50 text-violet-700 border-violet-200',
    },
    {
      id: 'emi-calculator',
      title: 'Loan EMI & Finance',
      badge: 'Finance Tools',
      subBadge: 'Real-Time',
      category: 'tools',
      icon: Calculator,
      color: 'emerald',
      description: 'Accurate amortization math for business loans, personal credit, and mortgage planning.',
      accentClass: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'swot-analysis',
      title: 'AI SWOT Analysis',
      badge: 'Strategy Tools',
      subBadge: 'Matrix',
      category: 'ai-hub',
      icon: Compass,
      color: 'purple',
      description: '4-quadrant strategic matrix evaluating internal strengths, risks, threats, and market gaps.',
      accentClass: 'text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:text-white',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    },
  ];

  const quickServices = [
    {
      id: 'interview-coach',
      title: 'AI Mock Interview Coach',
      desc: 'Role-specific simulation with STAR method answer grading.',
      icon: Bot,
      tab: 'career',
      sub: 'interview-coach',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      id: 'career-roadmap',
      title: 'Tech Career Roadmaps',
      desc: 'Curated pathways for Full-Stack, AI Engineering, and DevOps.',
      icon: Rocket,
      tab: 'career',
      sub: 'roadmap-guide',
      color: 'text-violet-600 bg-violet-50 border-violet-100',
    },
    {
      id: 'cold-email',
      title: 'AI Cold Email Writer',
      desc: 'High-conversion B2B sales outreach and recruiter pitches.',
      icon: Zap,
      tab: 'business',
      sub: 'cold-email',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      id: 'break-even',
      title: 'Break-Even Calculator',
      desc: 'Calculate unit economics and required monthly sales targets.',
      icon: TrendingUp,
      tab: 'tools',
      sub: 'break-even',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  const latestBlogs = [
    {
      id: 'b1',
      title: 'How to Build an ATS-Friendly Tech Resume in 2026',
      desc: 'Discover the exact single-column format and Google XYZ bullet method that passes recruiter screening filters.',
      tag: 'Career Advice',
      readTime: '4 min read',
      date: 'Aug 2026',
      author: 'Sudhir Singh',
    },
    {
      id: 'b2',
      title: 'The Solo Founder Guide: Validating Ideas Without Capital',
      desc: 'Step-by-step framework to test unit economics, calculate break-even, and land your first 10 paying customers.',
      tag: 'Startup Guide',
      readTime: '6 min read',
      date: 'Aug 2026',
      author: 'Ashwani Kumar',
    },
    {
      id: 'b3',
      title: 'Mastering the STAR Method for Technical Interviews',
      desc: 'How to structure your behavioral and architectural answers to impress senior engineering managers.',
      tag: 'Interview Prep',
      readTime: '5 min read',
      date: 'Aug 2026',
      author: 'Ritesh Chaurasiya',
    },
  ];

  const reviewsList = [
    {
      id: 'rev-1',
      name: 'Aman Verma',
      role: 'SDE-1 at FinTech Startup',
      location: 'Bangalore',
      avatarGradient: 'from-indigo-600 to-violet-600',
      initials: 'AV',
      tag: 'ATS Resume Builder',
      quote:
        'CareerNova ka ATS Resume Assistant use karke meri resume shortlist ho gayi aur mujhe 3 off-campus interview calls mile. The Google XYZ bullet formatting is incredible!',
      rating: 5,
      verified: 'Verified Student',
    },
    {
      id: 'rev-2',
      name: 'Pooja Sharma',
      role: 'Founder',
      location: 'EcoPack Innovations',
      avatarGradient: 'from-violet-600 to-purple-600',
      initials: 'PS',
      tag: 'Business Plan & Break-Even',
      quote:
        'The Business Plan generator and Break-Even calculator saved us weeks of research. We presented the executive summary to our first angel investor with total confidence.',
      rating: 5,
      verified: 'Verified Founder',
    },
    {
      id: 'rev-3',
      name: 'Rohan Mehta',
      role: 'Freelance Growth Marketer',
      location: 'Remote',
      avatarGradient: 'from-emerald-500 to-teal-600',
      initials: 'RM',
      tag: 'AI Cold Email & Marketing',
      quote:
        'Clean UI, zero clutter, and fast response times. The AI cold email variations helped me land 4 new marketing retainer clients in one month without expensive tools.',
      rating: 5,
      verified: 'Verified Operator',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 animate-in fade-in duration-300">
      {/* 1. HERO SECTION WITH CLEAN LIGHT GRADIENT & PARTICLE MESH */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 border border-slate-200 p-8 sm:p-14 lg:p-20 text-center space-y-8 shadow-sm"
      >
        {/* Subtle Ambient Glow Orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-200/30 via-violet-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-36 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-violet-200/20 via-purple-200/20 to-indigo-200/20 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Interactive Particle Mesh Canvas */}
        <ParticleMeshCanvas />

        {/* Top Badge Pill */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-700 text-xs font-bold tracking-wide shadow-xs backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
          <span>Next-Gen Career &amp; Business Growth Engine</span>
        </div>

        {/* Headline with Dynamic Typewriter Effect */}
        <div className="max-w-4xl mx-auto space-y-5 relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
            Turn Your Ideas Into{' '}
            <span className="inline-block relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
                {displayText}
              </span>
              <span className="inline-block w-1 h-8 sm:h-12 bg-gradient-to-b from-indigo-600 to-violet-600 ml-1 translate-y-1 sm:translate-y-2 rounded-full animate-cursor-blink shadow-xs shadow-indigo-500/50" />
            </span>
          </h1>
         <p className="text-center mx-auto max-w-2xl text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
  Delivering enterprise-grade core expertise in full-stack web engineering, custom iOS and Android app development, and high-conversion strategic lead generation. Backed by next-generation AI tools and smart digital solutions, we empower businesses and professionals to build scalable software infrastructure, automate complex workflows, and fast-track digital growth.
</p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
          <button
            id="hero-explore-tools-btn"
            onClick={() => onNavigate('tools')}
            className="ambient-glow-cta group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm transition-all duration-300 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore Tools</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            id="hero-get-free-consultation-btn"
            onClick={() => openAiAssistant({ mode: 'consultation' })}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Bot className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>Get Free Consultation</span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          </button>
        </div>

        {/* Live System Trust Badge */}
        <div className="flex items-center justify-center pt-1 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-xs shadow-emerald-500/50"></span>
            </span>
            <span className="font-bold text-slate-900">100% Free &amp; Secure Engine</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-emerald-700 font-semibold text-[11px] hidden sm:inline flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified &amp; Active
            </span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 border-t border-slate-200 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs text-slate-600 relative z-10">
          <span className="flex items-center gap-1.5 font-semibold bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 100% Free Calculators
          </span>
          <span className="flex items-center gap-1.5 font-semibold bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> AI-Powered Assistants
          </span>
          <span className="flex items-center gap-1.5 font-semibold bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0" /> Instant PDF &amp; Text Export
          </span>
        </div>
      </motion.section>

      {/* 2. INFINITE MARQUEE BANNER (SECTION DIVIDER) */}
      <InfiniteMarqueeBanner />

      {/* 3. 🔥 POPULAR TOOLS & 3D INTERACTIVE TILT CARDS */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-600 tracking-wider">
              🔥 Trending Right Now
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Popular Tools</h2>
          </div>
          <button
            onClick={() => onNavigate('tools')}
            className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer w-fit"
          >
            <span>View All 12+ Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <TiltCard
                key={tool.id}
                onClick={() => onNavigate(tool.category as TabId, tool.id)}
                className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xs overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border ${tool.badgeClass}`}
                    >
                      {tool.badge}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {tool.subBadge}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-3 rounded-2xl border shrink-0 mt-0.5 transition-all duration-300 ${tool.accentClass}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {tool.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between text-xs font-bold text-indigo-600 border-t border-slate-100 group-hover:text-indigo-700">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Launch Tool</span>
                  </span>
                  <div className="p-1 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </motion.section>

      {/* 4. ⚡ QUICK SERVICES LAUNCHPAD */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {quickServices.map((srv) => {
          const SrvIcon = srv.icon;
          return (
            <TiltCard
              key={srv.id}
              onClick={() => onNavigate(srv.tab as TabId, srv.sub)}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-violet-300 transition-all cursor-pointer group flex items-start gap-3.5"
            >
              <div
                className={`p-2.5 rounded-xl border shrink-0 group-hover:scale-105 transition-transform ${srv.color}`}
              >
                <SrvIcon className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {srv.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-snug">{srv.desc}</p>
              </div>
            </TiltCard>
          );
        })}
      </motion.section>

      {/* 4.5 🌟 CORE ENGINEERING & TECHNICAL EXPERTISE (10 CONSOLIDATED DISCIPLINES) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>CORE EXPERTISE &amp; TECHNICAL PRACTICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              10 Consolidated Professional Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal">
              High-impact solutions from data-driven financial modeling and full-stack web architectures to native iOS Swift ecosystems and SEO growth strategies.
            </p>
          </div>

          <button
            onClick={() => onNavigate('expertise')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm shadow-indigo-600/25 cursor-pointer whitespace-nowrap"
          >
            <span>Explore All 10 Disciplines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {EXPERTISE_CARDS.map((card) => {
            const CardIcon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onNavigate('expertise')}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
                  e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
                  e.currentTarget.style.setProperty('--spotlight-opacity', '1');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('--spotlight-opacity', '0');
                }}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xs hover:-translate-y-0.5"
              >
                {/* Dynamic Glowing Blue Movable Card Spotlight Aura */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 z-10"
                  style={{
                    opacity: 'var(--spotlight-opacity, 0)',
                    background:
                      'radial-gradient(240px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), rgba(59, 130, 246, 0.14), rgba(99, 102, 241, 0.05), transparent 70%)',
                  }}
                />

                <div className="relative w-full h-32 overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-white/95 text-slate-900 border border-slate-200">
                      Card #{card.cardNumber}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${card.accentColor} text-white shrink-0 shadow-xs`}>
                      <CardIcon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[11px] font-extrabold text-white truncate drop-shadow-sm">
                      {card.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 font-normal leading-relaxed">
                      {card.focus}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-indigo-600">
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 5. 💼 CAREER SOLUTIONS WITH STAGGERED ENTRANCE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs uppercase font-bold text-indigo-600 tracking-wider">
            💼 For Job Seekers &amp; Professionals
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Career Solutions that accelerate your placement.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Stop sending 200 generic applications that get lost in ATS filters. Access modern resume builders, AI interview coaches, roadmap guides, and salary calculators.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs hover:border-indigo-300 transition-colors">
              <strong className="text-slate-900 block font-bold">ATS Resume Formats</strong>
              <span className="text-slate-500 text-[11px]">Rank in top 5% of candidate screening</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs hover:border-indigo-300 transition-colors">
              <strong className="text-slate-900 block font-bold">AI Interview Prep</strong>
              <span className="text-slate-500 text-[11px]">STAR method grading &amp; role questions</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs hover:border-indigo-300 transition-colors">
              <strong className="text-slate-900 block font-bold">Career Roadmaps</strong>
              <span className="text-slate-500 text-[11px]">Step-by-step tracks for Web &amp; AI</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs hover:border-indigo-300 transition-colors">
              <strong className="text-slate-900 block font-bold">Salary Calculator</strong>
              <span className="text-slate-500 text-[11px]">Calculate in-hand net take home</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('career')}
            className="ambient-glow-cta flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-md shadow-indigo-600/25 cursor-pointer hover:scale-[1.02]"
          >
            <span>Explore Career Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-800">Interactive Career Hub Preview</span>
            <span className="text-[11px] text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
              Live Demo
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2 shadow-xs">
            <div className="flex justify-between">
              <span className="font-bold text-slate-900">Full-Stack Engineer Track</span>
              <span className="text-emerald-600 font-bold">₹8 - ₹28 LPA</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-indigo-600 rounded-full" />
            </div>
            <span className="text-[11px] text-slate-500 block">
              3 Phases • 12 Core Competencies • Ready Projects
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2 shadow-xs">
            <div className="flex justify-between">
              <span className="font-bold text-slate-900">AI &amp; Machine Learning Track</span>
              <span className="text-emerald-600 font-bold">₹10 - ₹35 LPA</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-violet-600 rounded-full" />
            </div>
            <span className="text-[11px] text-slate-500 block">
              PyTorch, RAG Pipelines, and Gemini SDK integration
            </span>
          </div>
        </div>
      </motion.section>

      {/* 6. 📈 BUSINESS SOLUTIONS WITH STAGGERED ENTRANCE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <div className="lg:col-span-6 order-2 lg:order-1 p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-800">Founder Strategy Dashboard</span>
            <span className="text-[11px] text-violet-700 font-bold bg-violet-50 px-2 py-0.5 rounded-md border border-violet-200">
              Real-Time Plan
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Idea Viability</span>
              <strong className="text-emerald-600 text-sm font-black">94/100 High Margin</strong>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">Break-Even</span>
              <strong className="text-indigo-600 text-sm font-black">250 units / month</strong>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1 shadow-xs">
            <span className="text-[11px] text-slate-500 font-bold">90-Day GTM Focus:</span>
            <p className="text-xs text-slate-700">
              Direct LinkedIn Loom audits + Apollo cold email sequences to acquire initial 10 paying customers.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
          <span className="text-xs uppercase font-bold text-violet-600 tracking-wider">
            📈 For Founders &amp; Entrepreneurs
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Business Solutions to validate &amp; scale faster.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Turn napkin ideas into structured business blueprints. Validate market size, generate investor-ready business plans, perform SWOT analysis, and map competitor positioning.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              • Market Sizing (TAM/SAM/SOM)
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              • Pricing &amp; Unit Economics
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              • 90-Day Marketing Roadmap
            </span>
          </div>

          <button
            onClick={() => onNavigate('business')}
            className="ambient-glow-cta flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs transition-all shadow-md shadow-violet-600/25 cursor-pointer hover:scale-[1.02]"
          >
            <span>Explore Business Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.section>

      {/* 7. ⭐ WHY CHOOSE US WITH STAGGERED FADE-IN */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="space-y-8 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold text-indigo-600 tracking-wider">
            ⭐ Why Choose CareerNova
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Built for clarity, speed, and real-world results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <TiltCard className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-indigo-300 hover:shadow-md">
            <div className="p-3 w-fit rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">AI-Powered Precision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Powered by server-side Gemini 3.7 Flash. Generates structured, actionable JSON insights rather than generic textbook paragraphs.
            </p>
          </TiltCard>

          <TiltCard className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-violet-300 hover:shadow-md">
            <div className="p-3 w-fit rounded-2xl bg-violet-50 text-violet-600 border border-violet-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">100% Practical Roadmaps</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              No fluff, no vague advice. Step-by-step tactical frameworks, checklists, and calculators tested by real practitioners.
            </p>
          </TiltCard>

          <TiltCard className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-emerald-300 hover:shadow-md">
            <div className="p-3 w-fit rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Free &amp; Accessible For All</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our core mission is making career development and business planning tools democratized and accessible to everyone.
            </p>
          </TiltCard>
        </div>
      </motion.section>

      {/* 8. 📊 QUICK STATS */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="py-8 px-6 sm:px-10 rounded-3xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          <div className="pt-3 lg:pt-0">
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-indigo-600 block">
              1,000+
            </span>
            <span className="text-xs text-slate-600 font-semibold mt-1.5 block leading-snug">
              Career Resumes &amp; Roadmaps Generated
            </span>
          </div>

          <div className="pt-3 lg:pt-0 lg:pl-6">
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-violet-600 block">
              500+
            </span>
            <span className="text-xs text-slate-600 font-semibold mt-1.5 block leading-snug">
              Business &amp; Strategy Blueprints
            </span>
          </div>

          <div className="pt-3 lg:pt-0 lg:pl-6">
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-amber-500 block">
                4.9/5
              </span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline-block -mt-1" />
            </div>
            <span className="text-xs text-slate-600 font-semibold mt-1.5 block leading-snug">
              Average User Rating
            </span>
          </div>

          <div className="pt-3 lg:pt-0 lg:pl-6">
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-emerald-600 block">
              15+
            </span>
            <span className="text-xs text-slate-600 font-semibold mt-1.5 block leading-snug">
              AI Tools &amp; Growth Calculators
            </span>
          </div>
        </div>
      </motion.section>

      {/* 9. 📰 LATEST BLOGS & GUIDES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-600 tracking-wider">
              📰 Latest Guides &amp; Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Read Our Latest Articles
            </h2>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer w-fit"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestBlogs.map((post) => (
            <TiltCard
              key={post.id}
              onClick={() => onNavigate('blog')}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                    {post.tag}
                  </span>
                  <span className="text-slate-500 font-medium">{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                <span className="text-slate-500 font-normal">By {post.author}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </motion.section>

      {/* 10. 💬 TESTIMONIALS & COMMUNITY STORIES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="space-y-6 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold tracking-wide mb-1">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>COMMUNITY STORIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Real Reviews from Students &amp; Founders
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px]">Hover cards to pause &amp; inspect</span>
          </div>
        </div>

        {/* Continuous Smooth Infinite Marquee Slider */}
        <div className="relative w-full overflow-hidden py-2 pause-marquee">
          {/* Left Fade Gradient Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Right Fade Gradient Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee-smooth flex gap-5">
            {[...reviewsList, ...reviewsList, ...reviewsList].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 p-6 rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 flex flex-col justify-between space-y-4 shadow-xs cursor-pointer group"
              >
                {/* Header: User Avatar, Verification & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${review.avatarGradient} flex items-center justify-center text-white font-black text-sm shadow-xs`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <strong className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {review.name}
                        </strong>
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {review.role} • <span className="text-slate-400">{review.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Body Quote */}
                <div className="relative">
                  <Quote className="w-5 h-5 text-slate-300 absolute -top-2 -left-1 -z-0 opacity-80" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed relative z-10 italic">
                    "{review.quote}"
                  </p>
                </div>

                {/* Footer Tag & Verified Badge */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                    {review.tag}
                  </span>
                  <span className="text-slate-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {review.verified}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 11. 🚀 CALL TO ACTION BANNER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white text-center space-y-6 shadow-xl shadow-indigo-600/20"
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to transform your Career or launch your Business?
          </h2>
          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed font-normal">
            Join thousands of students, professionals, and founders who use CareerNova every day to reach their goals.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            id="bottom-explore-tools-btn"
            onClick={() => onNavigate('tools')}
            className="ambient-glow-cta px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-indigo-700 font-black text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] cursor-pointer"
          >
            Explore All Free Tools
          </button>
          <button
            id="bottom-get-free-consultation-btn"
            onClick={() => openAiAssistant({ mode: 'consultation' })}
            className="px-8 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-colors border border-white/25 cursor-pointer backdrop-blur-xs flex items-center gap-2"
          >
            <Bot className="w-4 h-4 text-indigo-200" />
            <span>Get Free Consultation</span>
          </button>
        </div>
      </motion.section>
    </div>
  );
};

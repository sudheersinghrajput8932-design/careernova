import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
{/* Clean & Professional Home View Sections (Updated with Core Expertise & Direct Navigation) */}
<div className="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/80 space-y-28 py-16">

  {/* 1. Core Expertise & Business Growth Section (Clickable & Direct Landing) */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 tracking-wider uppercase mb-4 inline-block">
        🚀 Strategic Growth & Expertise
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
        Accelerate Your Business & Career
      </h2>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Explore our core consulting disciplines, high-conversion growth strategies, and advanced technical solutions.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { 
          title: 'Full-Stack & AI Engineering', 
          desc: 'Build scalable, high-speed web architectures and intelligent AI-driven workflows.', 
          color: 'from-blue-500 to-indigo-600', 
          bg: 'bg-blue-50', 
          text: 'text-blue-600',
          tab: 'career',
          sub: 'roadmap-guide'
        },
        { 
          title: 'High-Conversion B2B Outreach', 
          desc: 'Scale your sales pipeline and recruiter pitches with intelligent cold email strategies.', 
          color: 'from-emerald-500 to-teal-600', 
          bg: 'bg-emerald-50', 
          text: 'text-emerald-600',
          tab: 'business',
          sub: 'cold-email'
        },
        { 
          title: 'Unit Economics & Break-Even', 
          desc: 'Calculate precise financial metrics, burn rates, and required monthly sales targets.', 
          color: 'from-purple-500 to-pink-600', 
          bg: 'bg-purple-50', 
          text: 'text-purple-600',
          tab: 'tools',
          sub: 'break-even'
        },
        { 
          title: 'Strategic Market Positioning', 
          desc: 'Optimize your digital footprint, capture target market share, and maximize revenue growth.', 
          color: 'from-amber-500 to-orange-600', 
          bg: 'bg-amber-50', 
          text: 'text-amber-600',
          tab: 'business',
          sub: 'strategy'
        }
      ].map((item, idx) => (
        <div 
          key={idx} 
          onClick={() => onNavigate(item.tab, item.sub)}
          className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-6 overflow-hidden cursor-pointer"
        >
          <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
          <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
            ✦
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
            <span className="inline-flex items-center gap-1.5 mt-5 text-indigo-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
              Explore Expertise <span>→</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* 2. Professional Disciplines Section */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-600 border border-purple-100 tracking-wider uppercase mb-4 inline-block">
        💡 Core Domains
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
        Consulted Professional Disciplines
      </h2>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Specialized expertise to solve your toughest business challenges.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {[
        { title: 'AI & Custom Development', desc: 'Build scalable, intelligent applications with cutting-edge AI integration.', color: 'from-indigo-500 to-purple-600', tab: 'career' },
        { title: 'Growth Strategy & Marketing', desc: 'Leverage data-driven strategies to capture market share and scale revenue.', color: 'from-pink-500 to-rose-600', tab: 'business' },
        { title: 'Product & UI/UX Design', desc: 'Create intuitive, user-centric digital experiences that convert.', color: 'from-cyan-500 to-blue-600', tab: 'tools' }
      ].map((item, idx) => (
        <div 
          key={idx} 
          onClick={() => onNavigate(item.tab)}
          className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer"
        >
          <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.color}`}></div>
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-md group-hover:rotate-6 transition-transform">
              ⚡
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-purple-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
            Learn More <span>→</span>
          </span>
        </div>
      ))}
    </div>
  </section>

  {/* 3. Latest Articles Section with Colorful Gradient Thumbnails */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 tracking-wider uppercase mb-4 inline-block">
        📰 Thought Leadership
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
        Read Our Latest Articles
      </h2>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Insights and thought leadership on AI, tech, and business scaling.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: 'The Future of Scalable Web Architecture', cat: 'Technology', gradient: 'from-blue-600 via-indigo-600 to-purple-700' },
        { title: 'Mastering AI Integration in Modern SaaS', cat: 'Artificial Intelligence', gradient: 'from-purple-600 via-pink-600 to-rose-600' },
        { title: 'Growth Hacks for B2B Startup Founders', cat: 'Business Growth', gradient: 'from-emerald-600 via-teal-600 to-cyan-700' }
      ].map((art, idx) => (
        <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
          <div className={`h-52 bg-gradient-to-tr ${art.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10 backdrop-opacity-20 group-hover:bg-transparent transition-colors"></div>
            <span className="relative z-10 text-xs font-bold text-white/90 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-max">
              {art.cat}
            </span>
            <div className="relative z-10 text-white font-black text-lg tracking-wide opacity-90">
              CareerNova Insights
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
              {art.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              Unlocking high performance and reliability through modern frameworks, clean code practices, and smart strategic scaling...
            </p>
            <span className="inline-flex items-center gap-1.5 mt-6 text-indigo-600 font-bold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
              Read Article <span>→</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* 4. Auto-Sliding Client Reviews (8 Vibrant Cards with Infinite Marquee Animation) */}
  <section className="py-12 overflow-hidden bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]"></div>
    <div className="text-center max-w-3xl mx-auto mb-14 px-4 relative z-10">
      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 text-indigo-300 border border-white/10 tracking-wider uppercase mb-4 inline-block">
        ⭐ Verified Testimonials
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
        Trusted by Founders & Leaders
      </h2>
      <p className="mt-4 text-lg text-gray-300 leading-relaxed">
        Real feedback on our core expertise, technical execution, and business scaling results.
      </p>
    </div>

    {/* Infinite Sliding Marquee Wrapper */}
    <div className="relative w-full flex overflow-x-hidden group py-4">
      <div className="flex space-x-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {[
          { name: 'Rahul Sharma', role: 'Startup Founder', expertise: 'AI & Full-Stack', review: 'The core expertise in building scalable backends completely transformed our product speed.', rating: '★★★★★' },
          { name: 'Ankit Verma', role: 'Product Head', expertise: 'Growth Strategy', review: 'Strategic market positioning and funnels helped us scale user acquisition by over 200%.', rating: '★★★★★' },
          { name: 'Priya Singh', role: 'iOS Lead', expertise: 'Native Mobile Apps', review: 'Flawless native iOS development and seamless API integrations. Attention to detail is incredible.', rating: '★★★★★' },
          { name: 'Vikram Malhotra', role: 'CTO', expertise: 'Cloud Architecture', review: 'Exceptional architectural roadmaps and robust engineering execution. Saved us months of development time.', rating: '★★★★★' },
          { name: 'Neha Gupta', role: 'Marketing Director', expertise: 'Brand Scaling', review: 'Their data-driven growth framework skyrocketed our conversion rates within weeks. Highly professional!', rating: '★★★★★' },
          { name: 'Amit Patel', role: 'SaaS Founder', expertise: 'UI/UX Design', review: 'Clean, modern layouts and lightning-fast frontend delivery. Our users absolutely love the interface.', rating: '★★★★★' },
          { name: 'Sneha Rao', role: 'Operations Manager', expertise: 'Workflow Automation', review: 'Seamless system integration and automation tools that streamlined our daily operational overhead.', rating: '★★★★★' },
          { name: 'Karan Mehra', role: 'Tech Lead', expertise: 'Backend Security', review: 'Robust security audits and bulletproof API endpoints. Absolute masterclass in engineering standards.', rating: '★★★★★' },
          // Duplicate set for flawless infinite loop effect
          { name: 'Rahul Sharma', role: 'Startup Founder', expertise: 'AI & Full-Stack', review: 'The core expertise in building scalable backends completely transformed our product speed.', rating: '★★★★★' },
          { name: 'Ankit Verma', role: 'Product Head', expertise: 'Growth Strategy', review: 'Strategic market positioning and funnels helped us scale user acquisition by over 200%.', rating: '★★★★★' },
          { name: 'Priya Singh', role: 'iOS Lead', expertise: 'Native Mobile Apps', review: 'Flawless native iOS development and seamless API integrations. Attention to detail is incredible.', rating: '★★★★★' },
          { name: 'Vikram Malhotra', role: 'CTO', expertise: 'Cloud Architecture', review: 'Exceptional architectural roadmaps and robust engineering execution. Saved us months of development time.', rating: '★★★★★' }
        ].map((item, idx) => (
          <div key={idx} className="w-[360px] sm:w-[400px] shrink-0 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/15 shadow-xl flex flex-col justify-between whitespace-normal hover:bg-white/15 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-indigo-200 bg-indigo-500/30 px-3 py-0.5 rounded-full border border-indigo-400/20">{item.expertise}</span>
                <span className="text-amber-400 text-sm tracking-widest">{item.rating}</span>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed italic mb-6">"{item.review}"</p>
            </div>
            <div className="border-t border-white/10 pt-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-extrabold text-white shrink-0 shadow-md">
                {item.name[0]}
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm">{item.name}</h4>
                <p className="text-indigo-300 text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

</div>

  </div>
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

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

  return (
    <div className="space-y-16 sm:space-y-20 animate-in fade-in duration-300">
      {/* 1. HERO SECTION WITH CLEAN LIGHT GRADIENT & PARTICLE MESH */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 border border-slate-200 p-8 sm:p-14 lg:p-20 text-center space-y-8 shadow-sm"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-200/30 via-violet-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-36 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-violet-200/20 via-purple-200/20 to-indigo-200/20 rounded-full blur-3xl pointer-events-none z-0" />

        <ParticleMeshCanvas />

        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-700 text-xs font-bold tracking-wide shadow-xs backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
          <span>Next-Gen Career &amp; Business Growth Engine</span>
        </div>

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

      {/* Content Sections */}
      <div className="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/80 space-y-28 py-16 rounded-3xl">
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
              { title: 'Full-Stack & AI Engineering', desc: 'Build scalable, high-speed web architectures and intelligent AI-driven workflows.', color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', text: 'text-blue-600', tab: 'career', sub: 'roadmap-guide' },
              { title: 'High-Conversion B2B Outreach', desc: 'Scale your sales pipeline and recruiter pitches with intelligent cold email strategies.', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', text: 'text-emerald-600', tab: 'business', sub: 'cold-email' },
              { title: 'Unit Economics & Break-Even', desc: 'Calculate precise financial metrics, burn rates, and required monthly sales targets.', color: 'from-purple-500 to-pink-600', bg: 'bg-purple-50', text: 'text-purple-600', tab: 'tools', sub: 'break-even' },
              { title: 'Strategic Market Positioning', desc: 'Optimize your digital footprint, capture target market share, and maximize revenue growth.', color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', text: 'text-amber-600', tab: 'business', sub: 'strategy' }
            ].map((item, idx) => (
              <div key={idx} onClick={() => onNavigate(item.tab, item.sub)} className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-6 overflow-hidden cursor-pointer">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>✦</div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-indigo-600 font-bold text-sm group-hover:translate-x-1 transition-transform">Explore Expertise <span>→</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white text-center space-y-6 shadow-2xl relative overflow-hidden mx-4 sm:mx-8"
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
              className="ambient-glow-cta px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-indigo-700 font-black text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              Explore All Free Tools
            </button>
            <button
              id="bottom-get-free-consultation-btn"
              onClick={() => openAiAssistant({ mode: 'consultation' })}
              className="px-8 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20 flex items-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-indigo-200" />
              <span>Get Free Consultation</span>
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

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
{/* Clean & Professional Home View Sections (Hero section ke niche ka code) */}
  <div className="bg-gray-50 space-y-24 py-12">

    {/* 1. Featured Tools Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
          Unlock Your Digital Potential
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          High-performance tools designed to accelerate your business growth and engineering workflows.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Salary Estimator Pro', desc: 'Calculate market-competitive salaries for tech roles instantly.' },
          { title: 'Project Cost Calculator', desc: 'Get accurate budget estimates for your development projects.' },
          { title: 'Competitor Analysis Tool', desc: 'Benchmark your digital presence against industry leaders.' },
          { title: 'Lead Gen Audit', desc: 'Identify and fix bottlenecks in your conversion funnel.' }
        ].map((tool, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl shrink-0">
              ⚡
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{tool.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{tool.desc}</p>
              <span className="inline-block mt-4 text-indigo-600 font-semibold text-sm hover:underline cursor-pointer">Explore Tool →</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* 2. Professional Disciplines Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
          Consulted Professional Disciplines
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Specialized expertise to solve your toughest business challenges.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          { title: 'AI & Custom Development', desc: 'Build scalable, intelligent applications with cutting-edge AI integration.' },
          { title: 'Growth Strategy & Marketing', desc: 'Leverage data-driven strategies to capture market share and scale revenue.' },
          { title: 'Product & UI/UX Design', desc: 'Create intuitive, user-centric digital experiences that convert.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl mb-6">
                ✦
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
            </div>
            <span className="text-indigo-600 font-semibold text-sm hover:underline cursor-pointer">Learn More →</span>
          </div>
        ))}
      </div>
    </section>

    {/* 3. Latest Articles Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
          Read Our Latest Articles
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Insights and thought leadership on AI, tech, and business scaling.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-indigo-50 flex items-center justify-center text-indigo-300 font-medium text-sm">
              Article Thumbnail
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">Technology</span>
              <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2 leading-snug">The Future of Scalable Web Architecture</h3>
              <p className="text-gray-600 text-sm line-clamp-2">Unlocking high performance and reliability through modern backend frameworks and cloud strategies...</p>
              <span className="inline-block mt-5 text-indigo-600 font-semibold text-sm hover:underline cursor-pointer">Read Article →</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* 4. Auto-Sliding Client Reviews & Core Expertise Section */}
    <section className="py-8 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
          Trusted by Founders & Leaders
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Real feedback on our core expertise, technical execution, and business scaling results.
        </p>
      </div>

      {/* Sliding Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex space-x-6 animate-marquee py-4 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[
            {
              name: 'Rahul Sharma',
              role: 'Startup Founder',
              expertise: 'AI & Full-Stack Architecture',
              review: 'The core expertise in building scalable backends and intelligent systems completely transformed our product speed. Exceptional execution!',
              rating: '★★★★★'
            },
            {
              name: 'Ankit Verma',
              role: 'Product Head',
              expertise: 'Growth Strategy & Funnels',
              review: 'Their strategic market positioning and acquisition funnel design helped us scale user acquisition by over 200%. Top-tier professional work.',
              rating: '★★★★★'
            },
            {
              name: 'Priya Singh',
              role: 'iOS Lead',
              expertise: 'Native Mobile Apps',
              review: 'Flawless native iOS development and seamless API integrations. The attention to UI/UX detail and performance is incredible.',
              rating: '★★★★★'
            },
            // Duplicate items for infinite smooth loop effect
            {
              name: 'Rahul Sharma',
              role: 'Startup Founder',
              expertise: 'AI & Full-Stack Architecture',
              review: 'The core expertise in building scalable backends and intelligent systems completely transformed our product speed. Exceptional execution!',
              rating: '★★★★★'
            },
            {
              name: 'Ankit Verma',
              role: 'Product Head',
              expertise: 'Growth Strategy & Funnels',
              review: 'Their strategic market positioning and acquisition funnel design helped us scale user acquisition by over 200%. Top-tier professional work.',
              rating: '★★★★★'
            }
          ].map((item, idx) => (
            <div key={idx} className="w-[350px] sm:w-[400px] shrink-0 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between whitespace-normal">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">{item.expertise}</span>
                  <span className="text-amber-500 text-sm tracking-widest">{item.rating}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-6">"{item.review}"</p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700 shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

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

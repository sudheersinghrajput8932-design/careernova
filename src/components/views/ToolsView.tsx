import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  Search,
  Sparkles,
  FileText,
  Lightbulb,
  PieChart,
  Compass,
  Swords,
  Target,
  Share2,
  Calculator,
  DollarSign,
  TrendingUp,
  Mic,
  Mail,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Presentation,
  Bot,
  Brain,
  Zap,
  CheckCircle2,
  Lock,
  Download,
  ShieldCheck
} from 'lucide-react';
import { ResumeBuilder } from '../career/ResumeBuilder';
import { AiResumeAssistant } from '../ai/AiResumeAssistant';
import { AiInterviewCoach } from '../ai/AiInterviewCoach';
import { AiEmailWriter } from '../ai/AiEmailWriter';
import { BusinessIdeaGenerator } from '../tools/BusinessIdeaGenerator';
import { BusinessPlanGenerator } from '../tools/BusinessPlanGenerator';
import { SwotAnalysis } from '../tools/SwotAnalysis';
import { CompetitorAnalysis } from '../tools/CompetitorAnalysis';
import { MarketingStrategyGenerator } from '../tools/MarketingStrategyGenerator';
import { MarketingToolsDirectory } from '../tools/MarketingToolsDirectory';
import { SocialMediaContentIdeas } from '../tools/SocialMediaContentIdeas';
import { CalculatorsHub } from '../calculators/CalculatorsHub';

interface ToolsViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onSaveItem?: (title: string, data: any) => void;
  initialTool?: string;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const ToolsView: React.FC<ToolsViewProps> = ({ onNotify, addToast, onSaveItem, initialTool }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
    else if (addToast) addToast(title, description, type);
  };
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRunningTool, setActiveRunningTool] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#tool-')) {
      return window.location.hash.replace('#tool-', '');
    }
    return initialTool || null;
  });

  // Open tool with history pushState
  const handleOpenTool = useCallback((toolId: string) => {
    setActiveRunningTool(toolId);
    try {
      if (window.location.hash !== `#tool-${toolId}`) {
        window.history.pushState({ type: 'tool', toolId }, '', `#tool-${toolId}`);
      }
    } catch (e) {
      console.debug('History pushState error:', e);
    }
    window.scrollTo({ top: 180, behavior: 'smooth' });
  }, []);

  // Close tool and return to directory with clean history
  const handleCloseTool = useCallback(() => {
    setActiveRunningTool(null);
    try {
      if (window.location.hash.startsWith('#tool-')) {
        const cleanUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, '', cleanUrl);
      }
    } catch (e) {
      console.debug('History replaceState error:', e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Listen for browser Back/Forward buttons and Hash changes
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#tool-')) {
        const toolId = hash.replace('#tool-', '');
        setActiveRunningTool(toolId);
      } else if (!hash || hash === '#') {
        setActiveRunningTool(null);
      }
    };

    window.addEventListener('popstate', handleHashSync);
    window.addEventListener('hashchange', handleHashSync);
    return () => {
      window.removeEventListener('popstate', handleHashSync);
      window.removeEventListener('hashchange', handleHashSync);
    };
  }, []);

  // Update initial tool if prop changes
  useEffect(() => {
    if (initialTool) {
      handleOpenTool(initialTool);
    }
  }, [initialTool, handleOpenTool]);

  const toolsCatalog = [
    {
      id: 'resume-builder',
      name: 'Interactive ATS Resume Builder',
      category: 'Career Tools',
      icon: FileText,
      badge: '98% ATS Pass',
      gradient: 'from-indigo-600 to-violet-600',
      description: 'Single-column ATS-tested resume editor with live preview, section reordering, and PDF export.'
    },
    {
      id: 'ai-resume',
      name: 'AI Resume Assistant & Bullet Polisher',
      category: 'Career Tools',
      icon: Brain,
      badge: 'AI Gemini',
      gradient: 'from-indigo-500 to-blue-600',
      description: 'Quantify weak drafts into high-impact Google XYZ metric bullet points with instant ATS score audits.'
    },
    {
      id: 'ai-interview',
      name: 'AI Interview Coach & Simulator',
      category: 'Career Tools',
      icon: Mic,
      badge: 'AI Coach',
      gradient: 'from-violet-600 to-purple-600',
      description: 'Role-specific behavioral & technical questions with real-time rubric answer evaluation & tips.'
    },
    {
      id: 'salary-calculator',
      name: 'Salary In-Hand (CTC) Calculator',
      category: 'Finance Tools',
      icon: DollarSign,
      badge: 'New Regime 2026',
      gradient: 'from-emerald-500 to-teal-600',
      description: 'Calculate monthly take-home net pay with PF, Basic, HRA, and tax deductions under New Tax Regime.'
    },
    {
      id: 'emi-calculator',
      name: 'Loan EMI & Amortization Calculator',
      category: 'Finance Tools',
      icon: Calculator,
      badge: 'Instant Math',
      gradient: 'from-emerald-600 to-green-600',
      description: 'Calculate monthly EMIs, total interest, and complete month-by-month repayment schedules for loans.'
    },
    {
      id: 'breakeven-calculator',
      name: 'Break-Even & ROI Unit Calculator',
      category: 'Finance Tools',
      icon: TrendingUp,
      badge: 'Founder Metric',
      gradient: 'from-teal-500 to-emerald-600',
      description: 'Find required monthly sales volume, unit margin contribution, and revenue to achieve profitability.'
    },
    {
      id: 'business-idea',
      name: 'AI Business Idea Generator',
      category: 'Business Tools',
      icon: Lightbulb,
      badge: 'AI Gemini',
      gradient: 'from-amber-500 to-orange-600',
      description: 'Generate validated startup niches, market opportunity sizes, execution roadmaps, and revenue streams.'
    },
    {
      id: 'business-plan',
      name: 'Business Plan & Pitch Deck Generator',
      category: 'Business Tools',
      icon: Presentation,
      badge: 'VC Ready',
      gradient: 'from-indigo-600 to-blue-600',
      description: 'Create comprehensive executive summaries, 10-slide pitch decks, market sizes, and financial forecasts.'
    },
    {
      id: 'swot-analysis',
      name: 'SWOT Analysis Studio',
      category: 'Business Tools',
      icon: Compass,
      badge: 'Strategic Matrix',
      gradient: 'from-purple-500 to-indigo-600',
      description: '4-quadrant interactive matrix evaluating internal strengths, weaknesses, opportunities, and threats.'
    },
    {
      id: 'competitor-analysis',
      name: 'Competitor Analysis Matrix',
      category: 'Business Tools',
      icon: Swords,
      badge: 'Market Intel',
      gradient: 'from-violet-500 to-indigo-600',
      description: 'Editable matrix benchmarking pricing, key features, positioning, market share, and USPs.'
    },
    {
      id: 'marketing-strategy',
      name: '90-Day Marketing Strategy Generator',
      category: 'Marketing Tools',
      icon: Target,
      badge: 'Growth Funnel',
      gradient: 'from-emerald-500 to-indigo-600',
      description: 'Channel budget allocation, customer acquisition funnels, and weekly growth milestones.'
    },
    {
      id: 'social-content',
      name: 'Social Media Content Engine',
      category: 'Marketing Tools',
      icon: Share2,
      badge: 'AI Viral Hooks',
      gradient: 'from-rose-500 to-violet-600',
      description: '7-day viral post schedules, engagement hooks, and hashtags for LinkedIn, Instagram & X.'
    },
    {
      id: 'email-writer',
      name: 'AI Cold Email & Pitch Writer',
      category: 'Marketing Tools',
      icon: Mail,
      badge: 'AI Gemini',
      gradient: 'from-rose-500 to-indigo-600',
      description: 'Craft 3 distinct high-converting cold email angles for hiring leads, angel investors, or client outreach.'
    },
    {
      id: 'marketing-tools-dir',
      name: 'GMB & Marketing Tools Directory',
      category: 'Marketing Tools',
      icon: MapPin,
      badge: '25+ Tools & SEO',
      gradient: 'from-indigo-600 to-cyan-600',
      description: 'Searchable directory of top SEO, Google My Business, Analytics, Content, and Social Media software.'
    },
  ];

  const categories = ['All', 'Career Tools', 'Business Tools', 'Marketing Tools', 'Finance Tools', 'AI Tools'];

  const filteredTools = toolsCatalog.filter((tool) => {
    const matchesCategory =
      selectedCategory === 'All'
        ? true
        : selectedCategory === 'AI Tools'
        ? tool.badge.includes('AI') || tool.name.includes('AI')
        : tool.category === selectedCategory;

    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const activeToolMetadata = toolsCatalog.find((t) => t.id === activeRunningTool);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Section Title (Outside / Above the Banner) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="text-center"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Tools &amp; Generative Utilities Hub
        </h1>

        {/* Vibrant Gradient Banner Box Directly Below Title */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-2xl px-4 py-5 sm:p-8 shadow-xl shadow-indigo-600/20 max-w-4xl mx-auto text-center">
          <span className="text-[10px] md:text-xs tracking-widest text-indigo-200 uppercase mb-2 block text-center font-semibold">
            OUR GUIDING PRINCIPLES
          </span>
          <p className="text-center text-white text-sm md:text-base font-medium leading-normal max-w-2xl mx-auto">
            Supercharge your workflow with CareerNova’s suite of generative AI tools and career calculators. Get instant ATS resumes, startup plans, and financial estimates—100% free with complete privacy and zero sign-ups.
          </p>

          {/* Active Tool Back Button (if currently open) */}
          {activeRunningTool && (
            <div className="mt-5 flex justify-center">
              <button
                onClick={handleCloseTool}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-xs text-white border border-white/30 text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tools Directory</span>
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* 2. If a tool is currently open in active execution mode */}
      {activeRunningTool && (
        <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md shadow-indigo-600/5 animate-in fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <button
                onClick={handleCloseTool}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold transition-all hover:text-indigo-600 cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>← Back to Directory</span>
              </button>
              <div className="flex items-center gap-2.5">
                {activeToolMetadata && (
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${activeToolMetadata.gradient} text-white shadow-xs shrink-0`}>
                    <activeToolMetadata.icon className="w-4 h-4" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900">
                      {activeToolMetadata?.name || 'Active Tool Session'}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    {activeToolMetadata?.category} • Client-Side Execution
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% Free Engine
              </span>
              <button
                onClick={handleCloseTool}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>

          <div className="pt-2">
            {activeRunningTool === 'resume-builder' && <ResumeBuilder onNotify={onNotify} onSaveItem={onSaveItem} />}
            {activeRunningTool === 'ai-resume' && <AiResumeAssistant onNotify={onNotify} onSaveItem={onSaveItem} />}
            {activeRunningTool === 'ai-interview' && <AiInterviewCoach onNotify={onNotify} />}
            {activeRunningTool === 'salary-calculator' && <CalculatorsHub onNotify={onNotify} defaultTab="salary" />}
            {activeRunningTool === 'emi-calculator' && <CalculatorsHub onNotify={onNotify} defaultTab="emi" />}
            {activeRunningTool === 'breakeven-calculator' && <CalculatorsHub onNotify={onNotify} defaultTab="breakeven" />}
            {activeRunningTool === 'business-idea' && <BusinessIdeaGenerator onNotify={onNotify} />}
            {activeRunningTool === 'business-plan' && <BusinessPlanGenerator onNotify={onNotify} />}
            {activeRunningTool === 'swot-analysis' && <SwotAnalysis onNotify={onNotify} />}
            {activeRunningTool === 'competitor-analysis' && <CompetitorAnalysis onNotify={onNotify} />}
            {activeRunningTool === 'marketing-strategy' && <MarketingStrategyGenerator onNotify={onNotify} />}
            {activeRunningTool === 'social-content' && <SocialMediaContentIdeas onNotify={onNotify} />}
            {activeRunningTool === 'email-writer' && <AiEmailWriter onNotify={onNotify} onSaveItem={onSaveItem} />}
            {activeRunningTool === 'marketing-tools-dir' && <MarketingToolsDirectory onNotify={onNotify} />}
          </div>

          {/* Bottom Back Button for long tool pages */}
          <div className="pt-6 border-t border-slate-100 flex justify-center">
            <button
              onClick={handleCloseTool}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 hover:border-indigo-500/50 text-xs font-bold transition-all cursor-pointer shadow-xs hover:scale-[1.02]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Tools Directory</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. Directory Search & Filter Controls with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-80 lg:w-96">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tool name, role, or keyword (e.g. ATS, CGPA, Legal)..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
          />
        </div>
      </motion.div>

      {/* 4. Grid of Tools with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTools.map((tool, idx) => {
          const Icon = tool.icon;
          const isSelected = activeRunningTool === tool.id;
          return (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...smoothTransition, delay: (idx % 6) * 0.06 }}
              onClick={() => handleOpenTool(tool.id)}
              className={`group p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 shadow-xs relative overflow-hidden ${
                isSelected
                  ? 'border-indigo-500 ring-2 ring-indigo-500/30 shadow-md shadow-indigo-600/10'
                  : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              {/* Subtle top gradient accent on hover */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="space-y-3.5">
                {/* Category Pill & Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                    {tool.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${tool.gradient} text-white shadow-2xs`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Tool Icon + Title Inline Layout */}
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${tool.gradient} text-white shadow-sm shadow-indigo-600/20 shrink-0 mt-0.5 group-hover:scale-105 transition-all duration-300`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2 font-normal">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3.5 mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 border-t border-slate-100 group-hover:text-indigo-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:animate-ping" />
                  <span>{isSelected ? 'Currently Open' : 'Launch Tool'}</span>
                </span>
                <div className="p-1 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

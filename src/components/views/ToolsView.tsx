import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wrench,
  Search,
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
  AlertTriangle,
  RotateCw,
  X,
  SearchX
} from 'lucide-react';

// Code-split every tool: each one only downloads when the user actually
// opens it, keeping the directory itself fast and light.
const ResumeBuilder = React.lazy(() =>
  import('../career/ResumeBuilder').then((m) => ({ default: m.ResumeBuilder }))
);
const AiResumeAssistant = React.lazy(() =>
  import('../ai/AiResumeAssistant').then((m) => ({ default: m.AiResumeAssistant }))
);
const AiInterviewCoach = React.lazy(() =>
  import('../ai/AiInterviewCoach').then((m) => ({ default: m.AiInterviewCoach }))
);
const AiEmailWriter = React.lazy(() =>
  import('../ai/AiEmailWriter').then((m) => ({ default: m.AiEmailWriter }))
);
const BusinessIdeaGenerator = React.lazy(() =>
  import('../tools/BusinessIdeaGenerator').then((m) => ({ default: m.BusinessIdeaGenerator }))
);
const BusinessPlanGenerator = React.lazy(() =>
  import('../tools/BusinessPlanGenerator').then((m) => ({ default: m.BusinessPlanGenerator }))
);
const SwotAnalysis = React.lazy(() =>
  import('../tools/SwotAnalysis').then((m) => ({ default: m.SwotAnalysis }))
);
const CompetitorAnalysis = React.lazy(() =>
  import('../tools/CompetitorAnalysis').then((m) => ({ default: m.CompetitorAnalysis }))
);
const MarketingStrategyGenerator = React.lazy(() =>
  import('../tools/MarketingStrategyGenerator').then((m) => ({ default: m.MarketingStrategyGenerator }))
);
const MarketingToolsDirectory = React.lazy(() =>
  import('../tools/MarketingToolsDirectory').then((m) => ({ default: m.MarketingToolsDirectory }))
);
const SocialMediaContentIdeas = React.lazy(() =>
  import('../tools/SocialMediaContentIdeas').then((m) => ({ default: m.SocialMediaContentIdeas }))
);
const CalculatorsHub = React.lazy(() =>
  import('../calculators/CalculatorsHub').then((m) => ({ default: m.CalculatorsHub }))
);

/**
 * Catches any runtime crash inside a single tool so it can never take down
 * the rest of the page. Shows a calm, branded recovery card instead of a
 * white screen or a raw stack trace.
 */
class ToolErrorBoundary extends React.Component<
  { children: React.ReactNode; toolName?: string; onRetry: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; toolName?: string; onRetry: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // Logged for diagnostics only — never surfaced raw to the user.
    console.error(`[ToolsView] "${this.props.toolName ?? 'Unknown tool'}" crashed:`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-14 px-6 rounded-2xl bg-rose-50 border border-rose-200">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">This tool hit a snag</h4>
          <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
            {this.props.toolName || 'This tool'} ran into an unexpected error. Your other tools and data are safe — just retry, or head back to the directory.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              this.props.onRetry();
            }}
            className="mt-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCw className="w-3.5 h-3.5" />
            Retry Tool
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/** Branded shimmer placeholder shown while a tool's code chunk downloads. */
const ToolLoadingSkeleton = () => (
  <div className="space-y-4 py-2" aria-busy="true" aria-label="Loading tool">
    <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
      <span className="w-3.5 h-3.5 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin" />
      Loading tool…
    </div>
    <div className="h-6 w-52 rounded-lg bg-slate-200 animate-pulse" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="h-28 rounded-2xl bg-slate-200 animate-pulse" />
      <div className="h-28 rounded-2xl bg-slate-200 animate-pulse" />
    </div>
    <div className="h-36 rounded-2xl bg-slate-100 animate-pulse" />
  </div>
);

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
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [heroImageFailed, setHeroImageFailed] = useState(false);
  const [activeRunningTool, setActiveRunningTool] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#tool-')) {
      return window.location.hash.replace('#tool-', '');
    }
    return initialTool || null;
  });

  // Debounce the search query so filtering never fights with fast typing —
  // input stays instantly responsive even as the catalog grows.
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 150);
    return () => clearTimeout(timer);
  }, [searchQuery]);

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

  // Escape closes the active tool — small touch, feels like a native app
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeRunningTool) {
        handleCloseTool();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeRunningTool, handleCloseTool]);

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

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      counts[cat] =
        cat === 'All'
          ? toolsCatalog.length
          : cat === 'AI Tools'
          ? toolsCatalog.filter((t) => t.badge.includes('AI') || t.name.includes('AI')).length
          : toolsCatalog.filter((t) => t.category === cat).length;
    });
    return counts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTools = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    return toolsCatalog.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : selectedCategory === 'AI Tools'
          ? tool.badge.includes('AI') || tool.name.includes('AI')
          : tool.category === selectedCategory;

      const matchesSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, debouncedQuery]);

  const activeToolMetadata = toolsCatalog.find((t) => t.id === activeRunningTool);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Hero Banner — banner image carries its own title/copy, no overlaid text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
      >
        {/* Shimmer placeholder while the banner loads, so there's never a blank flash */}
        {!heroImageLoaded && !heroImageFailed && (
          <div className="w-full aspect-[21/9] bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100 animate-pulse" />
        )}

        {/* Graceful fallback if the banner asset ever fails to load — no broken-image icon */}
        {heroImageFailed && (
          <div className="w-full aspect-[21/9] flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-center px-6">
            <Wrench className="w-7 h-7" />
            <h2 className="text-lg font-black">Tools &amp; Generative Utilities Hub</h2>
            <p className="text-xs text-indigo-100 max-w-md">
              A growing suite of career, business, marketing and finance tools — built to move ideas into real outcomes.
            </p>
          </div>
        )}

        {/* Illustration banner (already contains title, description & badges) */}
        <img
          src="/assets/tools-hero-banner.png"
          alt="Tools & Generative Utilities Hub"
          onLoad={() => setHeroImageLoaded(true)}
          onError={() => setHeroImageFailed(true)}
          className={`w-full h-auto object-cover block transition-opacity duration-500 ${
            heroImageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
        />

        {/* Active Tool Back Button (if currently open) */}
        {activeRunningTool && (
          <div className="absolute inset-0 flex items-end justify-center pb-5 sm:pb-6">
            <button
              onClick={handleCloseTool}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 backdrop-blur-xs text-white border border-indigo-500/30 text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer shadow-md shadow-indigo-600/30"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Tools Directory</span>
            </button>
          </div>
        )}
      </motion.div>

      {/* 2. If a tool is currently open in active execution mode */}
      <AnimatePresence mode="wait">
        {activeRunningTool && (
          <motion.div
            key={activeRunningTool}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={smoothTransition}
            className="space-y-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md shadow-indigo-600/5"
          >
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
            <ToolErrorBoundary
              toolName={activeToolMetadata?.name}
              onRetry={() => activeRunningTool && handleOpenTool(activeRunningTool)}
            >
              <React.Suspense fallback={<ToolLoadingSkeleton />}>
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
              </React.Suspense>
            </ToolErrorBoundary>
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Directory Search & Filter Controls with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 border border-indigo-200/70 shadow-sm shadow-indigo-600/5"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-indigo-900/70 hover:text-indigo-900 hover:bg-white/70'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat ? 'bg-white/25 text-white' : 'bg-indigo-100 text-indigo-600'
                }`}
              >
                {categoryCounts[cat]}
              </span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-80 lg:w-96">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-indigo-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tool name, role, or keyword (e.g. ATS, CGPA, Legal)..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-white/80 border border-indigo-200 text-xs text-slate-900 placeholder-indigo-400/70 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-2 w-4 h-4 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Result count — quiet confirmation that filtering is live and working */}
      <p className="text-[11px] font-semibold text-slate-400 -mt-2">
        Showing {filteredTools.length} of {toolsCatalog.length} tools
        {debouncedQuery && <> for &ldquo;{debouncedQuery}&rdquo;</>}
      </p>

      {/* 4. Grid of Tools with Staggered Scroll Reveal */}
      {filteredTools.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center gap-3 py-16 px-6 rounded-2xl bg-slate-50 border border-dashed border-slate-300">
          <div className="w-12 h-12 rounded-full bg-white text-slate-400 border border-slate-200 flex items-center justify-center">
            <SearchX className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-800">No tools match that search</h4>
          <p className="text-xs text-slate-500 max-w-sm">
            Try a different keyword, or clear filters to see the full directory.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-1 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTools.map((tool, idx) => {
          const Icon = tool.icon;
          const isSelected = activeRunningTool === tool.id;
          return (
            <motion.div
              key={tool.id}
              layout
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...smoothTransition, delay: (idx % 6) * 0.06 }}
              onClick={() => handleOpenTool(tool.id)}
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                // DOM-level tracking (no setState) keeps the hover spotlight
                // perfectly smooth — zero re-renders while the mouse moves.
                const card = e.currentTarget as HTMLDivElement;
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--spot-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
                card.style.setProperty('--spot-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
              }}
              className={`group p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 shadow-xs relative overflow-hidden ${
                isSelected
                  ? 'border-indigo-500 ring-2 ring-indigo-500/30 shadow-md shadow-indigo-600/10'
                  : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              {/* Mouse-tracking spotlight — premium glass feel, GPU-cheap */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.10), transparent 70%)',
                }}
              />

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
                  {isSelected ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:animate-ping" />
                  )}
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
      )}
    </div>
  );
};

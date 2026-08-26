import React from 'react';
import {
  Sparkles,
  Bot,
  FileText,
  Calculator,
  Zap,
  TrendingUp,
  ShieldCheck,
  Award,
  Compass,
  PieChart
} from 'lucide-react';

export const InfiniteMarqueeBanner: React.FC = () => {
  const marqueeItems = [
    { label: 'AI Career Guidance', icon: Bot, highlight: 'Smart' },
    { label: 'ATS Resume Assistant', icon: FileText, highlight: '98% Pass' },
    { label: 'Business Calculators', icon: Calculator, highlight: '100% Free' },
    { label: 'Instant PDF & Text Export', icon: Zap, highlight: '1-Click' },
    { label: '100% Free Access', icon: ShieldCheck, highlight: 'No Sign-Up' },
    { label: 'Market Intelligence', icon: TrendingUp, highlight: 'TAM / SAM' },
    { label: 'Financial & EMI Modeling', icon: PieChart, highlight: 'Real-Time' },
    { label: 'Strategic SWOT Matrix', icon: Compass, highlight: 'AI Matrix' },
    { label: 'STAR Interview Coach', icon: Award, highlight: 'AI Graded' },
  ];

  return (
    <div className="relative w-full overflow-hidden py-3.5 bg-slate-50 border-y border-slate-200">
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling Strip */}
      <div className="animate-marquee-divider flex items-center gap-6 sm:gap-8">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`marquee-divider-${idx}`}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs shrink-0 select-none group hover:border-indigo-300 transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Icon className="w-3 h-3 text-indigo-600" />
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-tight whitespace-nowrap">
                {item.label}
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-2xs">
                {item.highlight}
              </span>
              <span className="text-indigo-300 ml-1 font-bold">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

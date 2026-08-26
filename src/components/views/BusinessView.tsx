import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Lightbulb,
  PieChart,
  Compass,
  Swords,
  Target,
  Calculator,
  Sparkles,
  ArrowRight,
  Layers
} from 'lucide-react';
import { BusinessIdeaGenerator } from '../tools/BusinessIdeaGenerator';
import { BusinessPlanGenerator } from '../tools/BusinessPlanGenerator';
import { SwotAnalysis } from '../tools/SwotAnalysis';
import { CompetitorAnalysis } from '../tools/CompetitorAnalysis';
import { MarketingStrategyGenerator } from '../tools/MarketingStrategyGenerator';
import { CalculatorsHub } from '../calculators/CalculatorsHub';

interface BusinessViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  initialSubTab?: string;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const BusinessView: React.FC<BusinessViewProps> = ({ onNotify, addToast, initialSubTab }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
    else if (addToast) addToast(title, description, type);
  };
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab || 'business-idea');

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-black shadow-md shadow-indigo-600/25 shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 flex flex-wrap items-center gap-2 tracking-tight">
              <span>Business Solutions &amp; Strategy Hub</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                For Founders &amp; Scaleups
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
              Rapid validation, investor-ready business plans, SWOT modeling, and unit economics calculations.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. Sub Navigation Bar with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="flex items-center gap-2 overflow-x-auto pb-1 p-2 rounded-2xl bg-white border border-slate-200 shadow-xs custom-scrollbar"
      >
        <button
          onClick={() => setActiveSubTab('business-idea')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'business-idea'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>Business Idea Generator</span>
        </button>

        <button
          onClick={() => setActiveSubTab('business-plan')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'business-plan'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <PieChart className="w-4 h-4" />
          <span>Business Plan Builder</span>
        </button>

        <button
          onClick={() => setActiveSubTab('swot-analysis')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'swot-analysis'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>SWOT Analysis Studio</span>
        </button>

        <button
          onClick={() => setActiveSubTab('competitor-analysis')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'competitor-analysis'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Swords className="w-4 h-4" />
          <span>Competitor Matrix</span>
        </button>

        <button
          onClick={() => setActiveSubTab('marketing-strategy')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'marketing-strategy'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>90-Day GTM Strategy</span>
        </button>

        <button
          onClick={() => setActiveSubTab('unit-economics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'unit-economics'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Break-Even Calculator</span>
        </button>
      </motion.div>

      {/* 3. Subtab Dynamic Views */}
      {activeSubTab === 'business-idea' && <BusinessIdeaGenerator onNotify={onNotify} />}
      {activeSubTab === 'business-plan' && <BusinessPlanGenerator onNotify={onNotify} />}
      {activeSubTab === 'swot-analysis' && <SwotAnalysis onNotify={onNotify} />}
      {activeSubTab === 'competitor-analysis' && <CompetitorAnalysis onNotify={onNotify} />}
      {activeSubTab === 'marketing-strategy' && <MarketingStrategyGenerator onNotify={onNotify} />}
      {activeSubTab === 'unit-economics' && <CalculatorsHub onNotify={onNotify} defaultTab="breakeven" />}
    </div>
  );
};

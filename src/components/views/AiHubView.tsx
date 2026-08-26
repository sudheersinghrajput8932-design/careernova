import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  Sparkles,
  FileText,
  Lightbulb,
  PieChart,
  Target,
  Compass,
  Share2,
  Mail,
  Mic,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { AiResumeAssistant } from '../ai/AiResumeAssistant';
import { AiInterviewCoach } from '../ai/AiInterviewCoach';
import { AiEmailWriter } from '../ai/AiEmailWriter';
import { BusinessIdeaGenerator } from '../tools/BusinessIdeaGenerator';
import { BusinessPlanGenerator } from '../tools/BusinessPlanGenerator';
import { MarketingStrategyGenerator } from '../tools/MarketingStrategyGenerator';
import { SwotAnalysis } from '../tools/SwotAnalysis';
import { SocialMediaContentIdeas } from '../tools/SocialMediaContentIdeas';

interface AiHubViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onSaveItem?: (title: string, data: any) => void;
  initialSubTab?: string;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const AiHubView: React.FC<AiHubViewProps> = ({ onNotify, addToast, onSaveItem, initialSubTab }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
    else if (addToast) addToast(title, description, type);
  };
  const [activeTool, setActiveTool] = useState<string>(initialSubTab || 'ai-resume');

  const toolsList = [
    { id: 'ai-resume', name: 'AI Resume Assistant', icon: FileText, category: 'Career', desc: 'ATS Google XYZ bullets & score polish' },
    { id: 'ai-interview', name: 'AI Interview Coach', icon: Mic, category: 'Career', desc: 'Role simulation & STAR answer grading' },
    { id: 'ai-email', name: 'AI Cold Email & Pitch', icon: Mail, category: 'Growth', desc: '3 high-converting outreach variations' },
    { id: 'ai-idea', name: 'AI Business Idea Gen', icon: Lightbulb, category: 'Startup', desc: 'Market niches, monetizations & MVP steps' },
    { id: 'ai-plan', name: 'AI Business Plan Builder', icon: PieChart, category: 'Startup', desc: 'VC-ready executive summaries & financials' },
    { id: 'ai-marketing', name: 'AI Marketing Strategist', icon: Target, category: 'Growth', desc: '90-day GTM funnels & budget allocation' },
    { id: 'ai-swot', name: 'AI SWOT Studio', icon: Compass, category: 'Startup', desc: '4-quadrant strategic matrix with risk mitigation' },
    { id: 'ai-social', name: 'AI Social Content Engine', icon: Share2, category: 'Growth', desc: '7-day viral calendars, hooks & hashtags' },
  ];

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
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 flex flex-wrap items-center gap-2 tracking-tight">
              <span>AI Hub &amp; Intelligence Studio</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                Gemini 3.7 Flash
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
              Dedicated server-side generative engines for career acceleration, startup modeling, and copy generation.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. Grid of AI Assistant Selectors with Staggered Scroll Reveal */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {toolsList.map((tool, idx) => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          return (
            <motion.button
              key={tool.id}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...smoothTransition, delay: idx * 0.05 }}
              onClick={() => setActiveTool(tool.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 space-y-2 cursor-pointer ${
                isActive
                  ? 'bg-indigo-50 border-indigo-400 shadow-xs ring-1 ring-indigo-400 text-slate-900'
                  : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-900 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`p-2 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-500">
                  {tool.category}
                </span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  {tool.name}
                </h3>
                <p className="text-[10px] text-slate-500 truncate mt-0.5 font-normal">{tool.desc}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* 3. Active AI Workspace */}
      <div className="pt-2">
        {activeTool === 'ai-resume' && <AiResumeAssistant onNotify={onNotify} onSaveItem={onSaveItem} />}
        {activeTool === 'ai-interview' && <AiInterviewCoach onNotify={onNotify} />}
        {activeTool === 'ai-email' && <AiEmailWriter onNotify={onNotify} onSaveItem={onSaveItem} />}
        {activeTool === 'ai-idea' && <BusinessIdeaGenerator onNotify={onNotify} />}
        {activeTool === 'ai-plan' && <BusinessPlanGenerator onNotify={onNotify} />}
        {activeTool === 'ai-marketing' && <MarketingStrategyGenerator onNotify={onNotify} />}
        {activeTool === 'ai-swot' && <SwotAnalysis onNotify={onNotify} />}
        {activeTool === 'ai-social' && <SocialMediaContentIdeas onNotify={onNotify} />}
      </div>
    </div>
  );
};

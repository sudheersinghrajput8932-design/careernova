import React, { useState } from 'react';
import {
  Target,
  Sparkles,
  Copy,
  Download,
  FileText,
  Check,
  TrendingUp,
  DollarSign,
  PieChart,
  Calendar,
  Zap,
  BarChart,
  RefreshCw,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { MarketingStrategyResult } from '../../types';
import { INITIAL_MARKETING_STRATEGY } from '../../data/initialData';
import { copyToClipboard, downloadAsTextFile, generateAndDownloadPdf } from '../../utils/exportUtils';
import { generateMarketingStrategy } from '../../utils/aiGeneratorEngine';

interface MarketingStrategyGeneratorProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const MarketingStrategyGenerator: React.FC<MarketingStrategyGeneratorProps> = ({ onNotify }) => {
  const [data, setData] = useState<MarketingStrategyResult>(INITIAL_MARKETING_STRATEGY);
  const [productName, setProductName] = useState('SyncPulse AI');
  const [productType, setProductType] = useState('B2B SaaS Developer Workflow Tool');
  const [targetAudience, setTargetAudience] = useState('Remote engineering teams, agile leads, and technical founders');
  const [budget, setBudget] = useState('$3,000 / month');
  const [primaryGoal, setPrimaryGoal] = useState('Customer Acquisition & MRR Growth');
  const [timeline, setTimeline] = useState('90 Days');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const generatedStrategy = await generateMarketingStrategy({
        productName,
        productType,
        targetAudience,
        budget,
        primaryGoal,
        timeline,
      });
      setData(generatedStrategy);
      onNotify('success', 'Marketing Strategy Created', 'Complete 90-day acquisition roadmap generated.');
    } catch (err: any) {
      onNotify('info', 'Strategy Ready', 'Generated 90-day go-to-market plan.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyAll = async () => {
    const textContent = `
=== GO-TO-MARKET MARKETING STRATEGY ===
Product: ${productName}
Primary Goal: ${primaryGoal}
Budget: ${budget} | Timeline: ${timeline}

[EXECUTIVE STRATEGY SUMMARY]
${data.strategySummary}

[POSITIONING STATEMENT]
${data.positioningStatement}

[BUDGET ALLOCATION]
${data.budgetAllocation.map((b) => `• ${b.channel} (${b.percentage}% - ${b.monthlySpend}): ${b.focus}`).join('\n')}

[90-DAY EXECUTION ROADMAP]
${data.roadmap
  .map(
    (r) => `--- ${r.period} ---
Focus: ${r.focus}
Key Actions:
${r.keyActions.map((a) => `  • ${a}`).join('\n')}`
  )
  .join('\n\n')}

[KEY PERFORMANCE INDICATORS]
${data.keyPerformanceIndicators.map((k) => `• ${k.metric}: Target ${k.target} (Benchmark: ${k.benchmark})`).join('\n')}

[GROWTH HACKS]
${data.quickGrowthHacks.map((g) => `• ${g}`).join('\n')}
    `.trim();

    const ok = await copyToClipboard(textContent);
    if (ok) {
      setCopiedField('all');
      setTimeout(() => setCopiedField(null), 2000);
      onNotify('success', 'Copied to Clipboard', 'Marketing plan copied.');
    }
  };

  const handleDownloadPdf = () => {
    generateAndDownloadPdf(
      `Marketing Strategy & 90-Day Roadmap: ${productName}`,
      [
        {
          heading: 'Executive Strategy Overview',
          body: [
            { label: 'Product / Service', value: productName },
            { label: 'Strategic Goal', value: primaryGoal },
            { label: 'Monthly Budget', value: budget },
            { label: 'Timeline', value: timeline },
            { label: 'Positioning Statement', value: data.positioningStatement },
          ],
        },
        { heading: 'Core Go-To-Market Angle', body: data.strategySummary },
        {
          heading: 'Monthly Budget Allocation & Channel Split',
          body: data.budgetAllocation.map(
            (b) => `${b.channel} (${b.percentage}% - ${b.monthlySpend}): ${b.focus}`
          ),
        },
        {
          heading: '90-Day Step-by-Step Execution Roadmap',
          body: data.roadmap.map(
            (r) => `${r.period} (Focus: ${r.focus}): ${r.keyActions.join(', ')}`
          ),
        },
        {
          heading: 'Target Key Performance Indicators (KPIs)',
          body: data.keyPerformanceIndicators.map(
            (k) => `${k.metric} -> Target: ${k.target} (Industry Benchmark: ${k.benchmark})`
          ),
        },
        {
          heading: 'Growth Hacks & Tactical Advantage',
          body: data.quickGrowthHacks,
        },
      ],
      `${productName.toLowerCase().replace(/\s+/g, '-')}-marketing-strategy.pdf`
    );
    onNotify('success', 'PDF Downloaded', 'Marketing roadmap PDF downloaded.');
  };

  const handleDownloadText = () => {
    const textContent = `MARKETING STRATEGY: ${productName}\n\nSummary:\n${data.strategySummary}\n\nPositioning:\n${data.positioningStatement}\n\nBudget Allocation:\n${data.budgetAllocation.map(b => `${b.channel}: ${b.percentage}% (${b.monthlySpend}) - ${b.focus}`).join('\n')}`;
    downloadAsTextFile(`${productName.toLowerCase().replace(/\s+/g, '-')}-marketing-roadmap.txt`, textContent);
    onNotify('info', 'File Saved', 'Text roadmap downloaded.');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-cyan-950/30 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Marketing Strategy & Growth Roadmap</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Construct high-converting marketing funnels, intelligent budget allocation percentages, 90-day acquisition sprints, and target KPI benchmarks tailored to your product.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-colors"
            >
              {copiedField === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedField === 'all' ? 'Copied' : 'Copy Plan'}</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Text</span>
            </button>
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-indigo-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Generator Form */}
      <form onSubmit={handleGenerate} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Strategy Customization Parameters
          </h3>
          <span className="text-[11px] text-slate-500">Gemini 3.7 CMO Engine</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Product / Brand Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500/60"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Product Category / Model</label>
            <input
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500/60"
              placeholder="e.g. B2B SaaS, E-commerce, Agency"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Monthly Marketing Budget</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500/60"
            >
              <option value="$500 / month (Organic / Low Budget)">$500 / month (Organic / Low Budget)</option>
              <option value="$1,500 / month (Seed Paid Search)">$1,500 / month (Seed Paid Search)</option>
              <option value="$3,000 / month (Multi-Channel Scale)">$3,000 / month (Multi-Channel Scale)</option>
              <option value="$7,500+ / month (Aggressive Acquisition)">$7,500+ / month (Aggressive Acquisition)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Target Customer Demographic</label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500/60"
              placeholder="Describe your ideal customer persona..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Primary Objective</label>
            <select
              value={primaryGoal}
              onChange={(e) => setPrimaryGoal(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500/60"
            >
              <option value="Customer Acquisition & Paid Signups">Customer Acquisition & Paid Signups</option>
              <option value="Brand Awareness & SEO Content Authority">Brand Awareness & SEO Content Authority</option>
              <option value="Product-Led Viral Loops & Referrals">Product-Led Viral Loops & Referrals</option>
              <option value="High-Ticket B2B Lead Generation">High-Ticket B2B Lead Generation</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setData(INITIAL_MARKETING_STRATEGY)}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Sample Roadmap
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 hover:from-indigo-400 hover:to-cyan-300 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                <span>Formulating Roadmap...</span>
              </>
            ) : (
              <>
                <Rocket className="w-4 h-4 text-slate-950" />
                <span>Generate Strategy Roadmap</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Results View */}
      <div className="space-y-6">
        {/* Positioning & Executive Summary */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 shadow-xl space-y-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              Executive Strategic Angle
            </span>
            <h3 className="text-lg font-bold text-slate-100">GTM Strategy & Brand Positioning</h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">{data.strategySummary}</p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/20">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
              Core Positioning Formula
            </h4>
            <p className="text-xs text-slate-200 italic font-medium leading-relaxed">
              "{data.positioningStatement}"
            </p>
          </div>
        </div>

        {/* Budget Allocation Breakdown */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PieChart className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-slate-200">Recommended Monthly Budget Allocation</h3>
            </div>
            <span className="text-xs text-emerald-400 font-semibold">{budget}</span>
          </div>

          <div className="space-y-3">
            {data.budgetAllocation.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">{item.channel}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-medium">{item.monthlySpend} / mo</span>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 font-bold text-[11px]">
                      {item.percentage}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-400">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 90-Day Execution Roadmap */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-200">90-Day Step-by-Step Marketing Sprints</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {data.roadmap.map((phase, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">
                      M{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200 leading-tight">{phase.period}</h4>
                  </div>
                  <p className="text-[11px] text-indigo-300/90 font-medium bg-indigo-950/20 p-2 rounded-lg border border-indigo-500/20">
                    {phase.focus}
                  </p>
                  <ul className="space-y-1.5 pt-1 text-[11px] text-slate-300">
                    {phase.keyActions.map((action, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI Dashboard & Growth Hacks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* KPI Dashboard */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <BarChart className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-bold text-slate-200">Target Key Performance Indicators</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.keyPerformanceIndicators.map((kpi, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    {kpi.metric}
                  </span>
                  <div className="text-base font-black text-emerald-400">{kpi.target}</div>
                  <span className="text-[10px] text-slate-500 block">{kpi.benchmark}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Growth Hacks */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-bold text-slate-200">Growth Hacks & Distribution Levers</h3>
            </div>
            <div className="space-y-2.5">
              {data.quickGrowthHacks.map((hack, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5">
                  <span className="p-1 rounded-md bg-amber-500/10 text-amber-400 text-[10px] font-bold shrink-0 mt-0.5">
                    #{idx + 1}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{hack}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

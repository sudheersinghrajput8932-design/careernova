import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  Copy,
  Download,
  Check,
  TrendingUp,
  DollarSign,
  PieChart,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Building,
  Target,
  BarChart3,
  Calendar,
  Layers,
  RefreshCw
} from 'lucide-react';
import { BusinessPlanResult } from '../../types';
import { INITIAL_BUSINESS_PLAN } from '../../data/initialData';
import { copyToClipboard, downloadAsTextFile, generateAndDownloadPdf } from '../../utils/exportUtils';
import { generateBusinessPlan } from '../../utils/aiGeneratorEngine';

interface BusinessPlanGeneratorProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const BusinessPlanGenerator: React.FC<BusinessPlanGeneratorProps> = ({ onNotify }) => {
  const [data, setData] = useState<BusinessPlanResult>(INITIAL_BUSINESS_PLAN);
  const [companyName, setCompanyName] = useState('SyncPulse AI Inc.');
  const [industry, setIndustry] = useState('B2B SaaS Developer Tooling & Productivity');
  const [mission, setMission] = useState('Automate meeting workflows so remote engineering teams can focus 100% on writing code.');
  const [targetMarket, setTargetMarket] = useState('1.2M remote software engineers, agile tech startups, and digital agencies worldwide.');
  const [monetization, setMonetization] = useState('Tiered monthly subscription ($19 - $49/seat) with enterprise custom VPC deployments.');
  const [initialCapital, setInitialCapital] = useState('$50,000 Seed / Founder Capital');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalSteps = 5;

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const generatedPlan = await generateBusinessPlan({
        companyName,
        industry,
        mission,
        targetMarket,
        monetization,
        initialCapital,
      });
      setData(generatedPlan);
      setCurrentStep(5); // Jump to complete plan
      onNotify('success', 'Business Plan Generated', `Investor-ready business plan ready for ${companyName}.`);
    } catch (err: any) {
      onNotify('info', 'Business Plan Ready', 'Generated comprehensive business plan.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyAll = async () => {
    const text = `
=== INVESTOR-READY BUSINESS PLAN: ${data.companyName} ===

[1. EXECUTIVE SUMMARY]
${data.executiveSummary}

[2. PROBLEM & SOLUTION]
• The Market Inefficiency: ${data.problemSolution.problem}
• Our Solution: ${data.problemSolution.solution}

[3. MARKET OPPORTUNITY & SIZE]
• TAM (Total Addressable Market): ${data.marketSize.tam}
• SAM (Serviceable Addressable Market): ${data.marketSize.sam}
• SOM (Serviceable Obtainable Market): ${data.marketSize.som}

[4. REVENUE TIERS & PRICING]
${data.revenueModel.map((r) => `• ${r.tier} (${r.price}): ${r.target}\n  Features: ${r.features}`).join('\n')}

[5. 3-YEAR FINANCIAL PROJECTIONS]
${data.financialProjections
  .map((p) => `• ${p.year}: Revenue: ${p.revenue} | Expenses: ${p.expenses} | Net Profit: ${p.netProfit} | Customers: ${p.activeCustomers} (${p.growthRate})`)
  .join('\n')}

[6. GO-TO-MARKET STRATEGY]
${data.goToMarketStrategy.map((g) => `• ${g}`).join('\n')}

[7. KEY QUARTERLY MILESTONES]
${data.milestones.map((m) => `• ${m.quarter}: ${m.goal}`).join('\n')}
    `.trim();

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onNotify('success', 'Copied to Clipboard', 'Complete business plan copied.');
    }
  };

  const handleDownloadPdf = () => {
    generateAndDownloadPdf(
      `Investor Business Plan: ${data.companyName}`,
      [
        { heading: 'Executive Summary', body: data.executiveSummary },
        {
          heading: 'Problem vs. Solution Overview',
          body: [
            `Core Problem: ${data.problemSolution.problem}`,
            `Proprietary Solution: ${data.problemSolution.solution}`,
          ],
        },
        {
          heading: 'Market Size & Addressable Opportunity',
          body: [
            `TAM: ${data.marketSize.tam}`,
            `SAM: ${data.marketSize.sam}`,
            `SOM: ${data.marketSize.som}`,
          ],
        },
        {
          heading: 'Revenue Architecture & Pricing Tiers',
          body: data.revenueModel.map((r) => `${r.tier} [${r.price}]: ${r.target} - ${r.features}`),
        },
        {
          heading: '3-Year Financial Forecast & Growth Trajectory',
          body: data.financialProjections.map(
            (p) => `${p.year}: Revenue ${p.revenue} | Expenses ${p.expenses} | Net Profit ${p.netProfit} | Active Customers: ${p.activeCustomers} (${p.growthRate})`
          ),
        },
        {
          heading: 'Go-To-Market Channels & Customer Acquisition',
          body: data.goToMarketStrategy,
        },
        {
          heading: 'Key Execution Milestones',
          body: data.milestones.map((m) => `${m.quarter}: ${m.goal}`),
        },
      ],
      `${data.companyName.toLowerCase().replace(/\s+/g, '-')}-business-plan.pdf`
    );
    onNotify('success', 'PDF Downloaded', 'Investor business plan PDF saved.');
  };

  const handleDownloadText = () => {
    const text = `BUSINESS PLAN: ${data.companyName}\n\nExecutive Summary:\n${data.executiveSummary}\n\nFinancial Projections:\n${data.financialProjections.map(p => `${p.year}: ${p.revenue} (Net: ${p.netProfit})`).join('\n')}`;
    downloadAsTextFile(`${data.companyName.toLowerCase().replace(/\s+/g, '-')}-business-plan.txt`, text);
    onNotify('info', 'File Saved', 'Text business plan downloaded.');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/30 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Multi-Step Business Plan & Financial Model</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              An interactive 5-step wizard generating comprehensive Executive Summaries, TAM/SAM/SOM market sizes, revenue tiers, and 3-year financial forecasts.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy All'}</span>
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
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
        {[
          { num: 1, title: 'Overview & Mission' },
          { num: 2, title: 'Problem & Market Size' },
          { num: 3, title: 'Revenue & Pricing' },
          { num: 4, title: '3-Year Financials' },
          { num: 5, title: 'Complete Plan' },
        ].map((s) => (
          <button
            key={s.num}
            onClick={() => setCurrentStep(s.num)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              currentStep === s.num
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950/40'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                currentStep === s.num ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {s.num}
            </span>
            <span>{s.title}</span>
          </button>
        ))}
      </div>

      {/* Wizard Step 1: Overview & Parameters Form */}
      {currentStep === 1 && (
        <form onSubmit={handleGenerate} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              Step 1: Venture Identity & Mission Architecture
            </h3>
            <span className="text-xs text-slate-400">Step 1 of 5</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Company / Legal Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Industry / Vertical</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Core Mission & Vision Statement</label>
            <textarea
              value={mission}
              onChange={(e) => setMission(e.target.value)}
              rows={2}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Target Market Persona</label>
              <input
                type="text"
                value={targetMarket}
                onChange={(e) => setTargetMarket(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Initial Seed Capital / Budget</label>
              <input
                type="text"
                value={initialCapital}
                onChange={(e) => setInitialCapital(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setData(INITIAL_BUSINESS_PLAN)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Sample Data
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <span>Next: Problem & Market</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
              >
                {isLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                <span>Auto-Generate Plan</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Step 2: Problem & Market Opportunity */}
      {currentStep === 2 && (
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-400" />
              Step 2: Problem, Solution & TAM / SAM / SOM Sizing
            </h3>
            <span className="text-xs text-slate-400">Step 2 of 5</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-2">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">The Market Problem</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{data.problemSolution.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Our Solution</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{data.problemSolution.solution}</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Addressable Market Sizing</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">TAM (Total Addressable)</span>
                <p className="text-xs text-slate-200 font-medium leading-snug">{data.marketSize.tam}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">SAM (Serviceable Market)</span>
                <p className="text-xs text-slate-200 font-medium leading-snug">{data.marketSize.sam}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] text-emerald-400 font-bold uppercase">SOM (Year 1-3 Obtainable)</span>
                <p className="text-xs text-emerald-300 font-medium leading-snug">{data.marketSize.som}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => setCurrentStep(1)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back: Overview
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold"
            >
              <span>Next: Revenue & Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Revenue & Pricing Tiers */}
      {currentStep === 3 && (
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              Step 3: Revenue Model & Tiered Pricing Architecture
            </h3>
            <span className="text-xs text-slate-400">Step 3 of 5</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.revenueModel.map((tier, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">{tier.tier}</span>
                    <span className="text-xs font-black text-emerald-400">{tier.price}</span>
                  </div>
                  <p className="text-[11px] text-cyan-300/80 font-medium">Target: {tier.target}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{tier.features}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back: Market Size
            </button>
            <button
              onClick={() => setCurrentStep(4)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold"
            >
              <span>Next: Financial Projections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: 3-Year Financial Projections */}
      {currentStep === 4 && (
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-400" />
              Step 4: 3-Year Projections, Milestones & Go-To-Market
            </h3>
            <span className="text-xs text-slate-400">Step 4 of 5</span>
          </div>

          {/* Financials Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4 font-bold uppercase text-[10px]">Forecast Year</th>
                  <th className="py-3 px-4 font-bold uppercase text-[10px] text-emerald-400">Gross Revenue</th>
                  <th className="py-3 px-4 font-bold uppercase text-[10px] text-rose-400">Total Expenses</th>
                  <th className="py-3 px-4 font-bold uppercase text-[10px] text-cyan-400">Net Profit</th>
                  <th className="py-3 px-4 font-bold uppercase text-[10px]">Paid Customers</th>
                  <th className="py-3 px-4 font-bold uppercase text-[10px]">Growth YoY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {data.financialProjections.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-950/50">
                    <td className="py-3 px-4 font-bold text-slate-100">{p.year}</td>
                    <td className="py-3 px-4 font-semibold text-emerald-400">{p.revenue}</td>
                    <td className="py-3 px-4 text-rose-400/90">{p.expenses}</td>
                    <td className="py-3 px-4 font-bold text-cyan-300">{p.netProfit}</td>
                    <td className="py-3 px-4 text-slate-300">{p.activeCustomers}</td>
                    <td className="py-3 px-4 font-medium text-indigo-400">{p.growthRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Milestones */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Quarterly Execution Milestones</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.milestones.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-300">
                    {m.quarter}
                  </span>
                  <p className="text-xs text-slate-300 leading-snug">{m.goal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back: Revenue
            </button>
            <button
              onClick={() => setCurrentStep(5)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold"
            >
              <span>View Full Business Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Full Investor Business Plan */}
      {currentStep === 5 && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/50 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Investor Pitch Ready
                </span>
                <h3 className="text-xl font-black text-slate-100 mt-1">{data.companyName}</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPdf}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-cyan-500/20"
                >
                  <Download className="w-3.5 h-3.5" /> Download Plan PDF
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{data.executiveSummary}</p>
          </div>

          {/* Problem / Solution & Market */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Problem vs. Solution</h4>
              <div className="space-y-2 text-xs">
                <p className="text-rose-300/90 bg-rose-950/20 p-3 rounded-xl border border-rose-500/20">
                  <strong className="text-rose-400">Problem: </strong>
                  {data.problemSolution.problem}
                </p>
                <p className="text-emerald-300/90 bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20">
                  <strong className="text-emerald-400">Solution: </strong>
                  {data.problemSolution.solution}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Market Opportunity (TAM/SAM/SOM)</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">TAM:</span>
                  <span className="font-semibold text-slate-200">{data.marketSize.tam}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">SAM:</span>
                  <span className="font-semibold text-slate-200">{data.marketSize.sam}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">SOM:</span>
                  <span className="font-semibold text-emerald-300">{data.marketSize.som}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Year Financial Forecasts */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">3-Year Projections Table</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.financialProjections.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">{p.year}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 font-bold">
                      {p.growthRate}
                    </span>
                  </div>
                  <div className="text-lg font-black text-emerald-400">{p.revenue}</div>
                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>Net Profit:</span>
                    <span className="font-bold text-cyan-300">{p.netProfit}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>Customers:</span>
                    <span className="text-slate-200">{p.activeCustomers}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GTM & Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Go-To-Market Acquisition</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {data.goToMarketStrategy.map((gtm, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{gtm}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Quarterly Execution Targets</h4>
              <div className="space-y-2 text-xs">
                {data.milestones.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2">
                    <span className="text-[10px] font-bold text-indigo-400 shrink-0">{m.quarter}:</span>
                    <span className="text-slate-300">{m.goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

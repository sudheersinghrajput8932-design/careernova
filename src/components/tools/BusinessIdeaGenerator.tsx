import React, { useState } from 'react';
import {
  Lightbulb,
  Sparkles,
  Copy,
  Download,
  FileText,
  Check,
  DollarSign,
  TrendingUp,
  ShieldAlert,
  Users,
  Layers,
  ArrowRight,
  RefreshCw,
  Clock,
  Zap,
  Globe
} from 'lucide-react';
import { BusinessIdeaResult } from '../../types';
import { INITIAL_BUSINESS_IDEA } from '../../data/initialData';
import { copyToClipboard, downloadAsTextFile, generateAndDownloadPdf } from '../../utils/exportUtils';
import { generateBusinessIdea } from '../../utils/aiGeneratorEngine';

interface BusinessIdeaGeneratorProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const BusinessIdeaGenerator: React.FC<BusinessIdeaGeneratorProps> = ({ onNotify }) => {
  const [data, setData] = useState<BusinessIdeaResult>(INITIAL_BUSINESS_IDEA);
  const [industry, setIndustry] = useState('Technology & B2B SaaS');
  const [interest, setInterest] = useState('Developer productivity, meeting summaries, and automated Jira workflows');
  const [targetRegion, setTargetRegion] = useState('Global / Remote Tech Teams');
  const [budgetRange, setBudgetRange] = useState('$2,000 - $10,000 (Lean Startup)');
  const [experienceLevel, setExperienceLevel] = useState('Intermediate Founder');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const quickIndustries = [
    'B2B SaaS & DevTools',
    'AI & Automation',
    'Creator Economy & Media',
    'HealthTech & Wellness',
    'FinTech & SMB Invoicing',
    'GreenTech & Clean Energy',
    'E-commerce & Logistics',
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const generatedData = await generateBusinessIdea({
        industry,
        interest,
        targetRegion,
        budgetRange,
        experienceLevel,
      });
      setData(generatedData);
      onNotify('success', 'Business Concept Generated!', `Created comprehensive blueprint for ${generatedData.ideaName || 'new idea'}.`);
    } catch (err: any) {
      onNotify('info', 'Idea Generated', 'Loaded updated business blueprint.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyAll = async () => {
    const textContent = `
=== BUSINESS IDEA BLUEPRINT: ${data.ideaName} ===
Tagline: ${data.tagline}
Startup Cost Estimate: ${data.estimatedStartupCost || 'N/A'}
Projected Payback: ${data.projectedPaybackPeriod || 'N/A'}

[PROBLEM STATEMENT]
${data.problemStatement}

[SOLUTION OVERVIEW]
${data.solutionOverview}

[TARGET AUDIENCE]
${data.targetAudience.map((a) => `• ${a.segment}: ${a.description}`).join('\n')}

[MONETIZATION STRATEGIES]
${data.monetizationStrategies.map((m) => `• ${m.model}: ${m.details}`).join('\n')}

[EXECUTION ROADMAP]
${data.executionSteps
  .map(
    (step) => `--- ${step.phase} ---
${step.tasks.map((t) => `  - ${t}`).join('\n')}`
  )
  .join('\n\n')}

[UNIQUE SELLING POINTS]
${data.uniqueSellingPoints.map((u) => `• ${u}`).join('\n')}

[RISKS & MITIGATION]
${data.potentialRisks.map((r) => `• Risk: ${r.risk}\n  Mitigation: ${r.mitigation}`).join('\n')}
    `.trim();

    const ok = await copyToClipboard(textContent);
    if (ok) {
      setCopiedField('all');
      setTimeout(() => setCopiedField(null), 2000);
      onNotify('success', 'Copied to Clipboard', 'Complete business idea blueprint copied.');
    }
  };

  const handleDownloadText = () => {
    const textContent = `BUSINESS IDEA BLUEPRINT: ${data.ideaName}\n${data.tagline}\n\nProblem:\n${data.problemStatement}\n\nSolution:\n${data.solutionOverview}\n\nTarget Audience:\n${data.targetAudience.map(a => `${a.segment}: ${a.description}`).join('\n')}`;
    downloadAsTextFile(`${data.ideaName.toLowerCase().replace(/\s+/g, '-')}-idea-blueprint.txt`, textContent);
    onNotify('info', 'File Downloaded', 'Text blueprint saved to your downloads.');
  };

  const handleDownloadPdf = () => {
    generateAndDownloadPdf(
      `Business Idea Blueprint: ${data.ideaName}`,
      [
        {
          heading: 'Executive Overview',
          body: [
            { label: 'Concept Name', value: data.ideaName },
            { label: 'Value Tagline', value: data.tagline },
            { label: 'Est. Startup Cost', value: data.estimatedStartupCost || 'Variable' },
            { label: 'Payback Period', value: data.projectedPaybackPeriod || 'Variable' },
          ],
        },
        { heading: 'Problem Statement', body: data.problemStatement },
        { heading: 'Solution Architecture', body: data.solutionOverview },
        {
          heading: 'Target Audience Personas',
          body: data.targetAudience.map((a) => `${a.segment}: ${a.description}`),
        },
        {
          heading: 'Monetization Models',
          body: data.monetizationStrategies.map((m) => `${m.model} — ${m.details}`),
        },
        {
          heading: 'Execution Phases & Action Steps',
          body: data.executionSteps.map(
            (step) => `${step.phase}: ${step.tasks.join(', ')}`
          ),
        },
        {
          heading: 'Unique Selling Propositions (USPs)',
          body: data.uniqueSellingPoints,
        },
        {
          heading: 'Risk Assessment & Mitigation Strategy',
          body: data.potentialRisks.map((r) => `Risk: ${r.risk} | Mitigation: ${r.mitigation}`),
        },
      ],
      `${data.ideaName.toLowerCase().replace(/\s+/g, '-')}-blueprint.pdf`
    );
    onNotify('success', 'PDF Generated', 'Professional PDF blueprint downloaded.');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/30 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Business Idea & Venture Generator</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Turn any industry or problem hypothesis into a fully articulated venture concept, complete with monetization tiers, customer personas, execution roadmap, and defensive moats.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-colors"
            >
              {copiedField === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedField === 'all' ? 'Copied' : 'Copy All'}</span>
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

      {/* Input Generator Form */}
      <form onSubmit={handleGenerate} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Venture Parameters & AI Prompting
          </h3>
          <span className="text-[11px] text-slate-500">Powered by Gemini 3.7 Flash</span>
        </div>

        {/* Quick Industry Chips */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400">Quick Industry Presets:</label>
          <div className="flex flex-wrap gap-2">
            {quickIndustries.map((ind) => (
              <button
                type="button"
                key={ind}
                onClick={() => setIndustry(ind)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  industry === ind
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Industry / Sector</label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors"
              placeholder="e.g. B2B SaaS, HealthTech, CleanTech"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Target Region / Market</label>
            <input
              type="text"
              value={targetRegion}
              onChange={(e) => setTargetRegion(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors"
              placeholder="e.g. North America, Global, India & APAC"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Starting Budget Level</label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors"
            >
              <option value="$500 - $2,500 (Bootstrapped / Ultra-Lean)">$500 - $2,500 (Bootstrapped / Ultra-Lean)</option>
              <option value="$2,500 - $10,000 (Lean Seed Capital)">$2,500 - $10,000 (Lean Seed Capital)</option>
              <option value="$10,000 - $50,000 (Funded Launch)">$10,000 - $50,000 (Funded Launch)</option>
              <option value="$50,000+ (Venture Scale)">$50,000+ (Venture Scale)</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Specific Interests, Problem Hypothesis, or Core Skills
          </label>
          <textarea
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            rows={2}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
            placeholder="Describe the bottleneck or opportunity you want to solve..."
            required
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setData(INITIAL_BUSINESS_IDEA)}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Sample Concept
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                <span>Architecting Venture...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Generate Business Concept</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Generated Results Dashboard */}
      <div className="space-y-6">
        {/* Hero Concept Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Validated Concept
              </span>
              <h3 className="text-2xl font-black text-slate-100 tracking-tight">{data.ideaName}</h3>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {data.estimatedStartupCost && (
                <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Cost: {data.estimatedStartupCost}</span>
                </div>
              )}
              {data.projectedPaybackPeriod && (
                <div className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Payback: {data.projectedPaybackPeriod}</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm font-medium text-cyan-200/90 leading-relaxed italic bg-cyan-950/20 p-3 rounded-xl border border-cyan-500/20">
            "{data.tagline}"
          </p>

          {/* Problem vs Solution 2-Col Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-rose-950/15 border border-rose-500/20 space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> Core Pain Point & Friction
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{data.problemStatement}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/20 space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Innovative Solution & Engine
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{data.solutionOverview}</p>
            </div>
          </div>
        </div>

        {/* Target Audience & Monetization Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Target Audience */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-slate-200">Target Audience Personas</h3>
            </div>
            <div className="space-y-3">
              {data.targetAudience.map((audience, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-200">{audience.segment}</h4>
                    <span className="text-[10px] text-slate-500">Tier {idx + 1}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monetization Models */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-bold text-slate-200">Monetization & Revenue Architecture</h3>
            </div>
            <div className="space-y-3">
              {data.monetizationStrategies.map((model, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-emerald-400">{model.model}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 font-medium">
                      Revenue Stream
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{model.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Phase Execution Roadmap */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-200">Execution Roadmap & Milestones</h3>
            </div>
            <span className="text-xs text-slate-400">Step-by-Step Validation & Scale</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.executionSteps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200 leading-tight">{step.phase}</h4>
                  </div>
                  <ul className="space-y-2 text-[11px] text-slate-300">
                    {step.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* USPs and Risk Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* USPs */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Defensive Moats & Unique Selling Propositions
            </h3>
            <div className="space-y-2.5">
              {data.uniqueSellingPoints.map((usp, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">{usp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risks & Mitigation */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              Strategic Risk Mitigation Matrix
            </h3>
            <div className="space-y-3">
              {data.potentialRisks.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <span>⚠️ {item.risk}</span>
                  </div>
                  <div className="pl-4 border-l-2 border-emerald-500/40">
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      <span className="font-semibold text-emerald-400">Mitigation: </span>
                      {item.mitigation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

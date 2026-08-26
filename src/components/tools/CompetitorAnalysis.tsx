import React, { useState } from 'react';
import {
  BarChart2,
  Sparkles,
  Copy,
  Download,
  FileText,
  Check,
  Plus,
  Trash2,
  ShieldCheck,
  Star,
  Award,
  RefreshCw,
  Edit2,
  DollarSign,
  Zap,
  TrendingUp,
  Layers
} from 'lucide-react';
import { CompetitorAnalysisResult, CompetitorProfile } from '../../types';
import { INITIAL_COMPETITOR_ANALYSIS } from '../../data/initialData';
import { copyToClipboard, downloadAsTextFile, generateAndDownloadPdf } from '../../utils/exportUtils';
import { generateCompetitorAnalysis } from '../../utils/aiGeneratorEngine';

interface CompetitorAnalysisProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const CompetitorAnalysis: React.FC<CompetitorAnalysisProps> = ({ onNotify }) => {
  const [data, setData] = useState<CompetitorAnalysisResult>(INITIAL_COMPETITOR_ANALYSIS);
  const [myProduct, setMyProduct] = useState('SyncPulse AI');
  const [industry, setIndustry] = useState('AI Meeting Intelligence & Dev Productivity');
  const [rivalNames, setRivalNames] = useState('Otter.ai, Fireflies.ai, Grain, Microsoft Teams Copilot');
  const [focusArea, setFocusArea] = useState('Developer Integrations, Latency, Privacy, Pricing');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Add Competitor modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCompName, setNewCompName] = useState('');
  const [newCompType, setNewCompType] = useState('Market Competitor');
  const [newCompPrice, setNewCompPrice] = useState('$20 - $50 / mo');
  const [newCompStrengths, setNewCompStrengths] = useState('');
  const [newCompWeaknesses, setNewCompWeaknesses] = useState('');
  const [newCompPosition, setNewCompPosition] = useState('');
  const [newCompScore, setNewCompScore] = useState<number>(8.0);

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const generatedData = await generateCompetitorAnalysis({
        myProduct,
        industry,
        rivalNames,
        focusArea,
      });
      setData(generatedData);
      onNotify('success', 'Competitor Matrix Generated', 'Comparative intelligence analysis ready.');
    } catch (err: any) {
      onNotify('info', 'Matrix Ready', 'Updated competitor benchmarking.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCompetitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompName.trim()) return;

    const newComp: CompetitorProfile = {
      id: `comp-${Date.now()}`,
      name: newCompName.trim(),
      type: newCompType,
      priceRange: newCompPrice,
      coreFeatures: ['Feature Tracking', 'Dashboard Reporting', 'Basic Sync'],
      marketPositioning: newCompPosition || 'Direct Niche Rival',
      keyStrengths: newCompStrengths || 'Established user base',
      mainWeaknesses: newCompWeaknesses || 'Limited custom integrations',
      overallScore: Number(newCompScore) || 7.5,
    };

    setData((prev) => ({
      ...prev,
      comparisonMatrix: [...prev.comparisonMatrix, newComp],
    }));

    setNewCompName('');
    setNewCompStrengths('');
    setNewCompWeaknesses('');
    setNewCompPosition('');
    setIsAddModalOpen(false);
    onNotify('success', 'Competitor Added', `Added ${newComp.name} to the matrix.`);
  };

  const handleDeleteCompetitor = (id: string) => {
    setData((prev) => ({
      ...prev,
      comparisonMatrix: prev.comparisonMatrix.filter((c) => c.id !== id),
    }));
    onNotify('info', 'Competitor Removed', 'Deleted profile from comparison.');
  };

  const handleCopyAll = async () => {
    const text = `
=== COMPETITOR BENCHMARKING & MATRIX ===
My Product: ${myProduct}
Industry: ${industry}

[INDUSTRY OVERVIEW]
${data.industryOverview}

[COMPETITIVE MATRIX]
${data.comparisonMatrix
  .map(
    (c) => `--- ${c.name} (${c.type}) ---
Score: ${c.overallScore} / 10 | Price: ${c.priceRange}
Positioning: ${c.marketPositioning}
Strengths: ${c.keyStrengths}
Weaknesses: ${c.mainWeaknesses}
Core Features: ${c.coreFeatures.join(', ')}`
  )
  .join('\n\n')}

[FEATURE SHOWDOWN]
${data.featureComparison
  .map((f) => `• ${f.feature}: [Our: ${f.ourProduct}] vs [Comp 1: ${f.competitor1}] vs [Comp 2: ${f.competitor2}]`)
  .join('\n')}

[MOAT & DEFENSE STRATEGY]
${data.moatStrategy.map((m) => `• ${m}`).join('\n')}
    `.trim();

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onNotify('success', 'Copied to Clipboard', 'Competitor matrix copied.');
    }
  };

  const handleDownloadPdf = () => {
    generateAndDownloadPdf(
      `Competitor Matrix & Intelligence Report: ${myProduct}`,
      [
        { heading: 'Industry Overview & Dynamics', body: data.industryOverview },
        {
          heading: 'Competitor Comparison Profiles',
          body: data.comparisonMatrix.map(
            (c) =>
              `${c.name} [${c.type} | Score: ${c.overallScore}/10 | Pricing: ${c.priceRange}]\nPositioning: ${c.marketPositioning}\nStrengths: ${c.keyStrengths}\nWeaknesses: ${c.mainWeaknesses}`
          ),
        },
        {
          heading: 'Head-to-Head Feature Showdown',
          body: data.featureComparison.map(
            (f) => `${f.feature} -> Our Venture: ${f.ourProduct} | Rival A: ${f.competitor1} | Rival B: ${f.competitor2}`
          ),
        },
        {
          heading: 'Defensive Moats & Sustainable Advantage',
          body: data.moatStrategy,
        },
      ],
      `${myProduct.toLowerCase().replace(/\s+/g, '-')}-competitor-matrix.pdf`
    );
    onNotify('success', 'PDF Downloaded', 'Competitor analysis PDF saved.');
  };

  const handleDownloadText = () => {
    const text = `COMPETITOR BENCHMARK: ${myProduct}\n\n${data.industryOverview}\n\nProfiles:\n${data.comparisonMatrix.map(c => `${c.name}: ${c.priceRange} - ${c.marketPositioning}`).join('\n')}`;
    downloadAsTextFile(`${myProduct.toLowerCase().replace(/\s+/g, '-')}-competitor-matrix.txt`, text);
    onNotify('info', 'File Saved', 'Text matrix saved.');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/30 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Competitor Benchmarking & Intelligence Matrix</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Perform deep head-to-head comparison on pricing tiers, feature showdowns, market positioning, strengths, and vulnerabilities against key market rivals.
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

      {/* Generator Prompt Box */}
      <form onSubmit={handleGenerate} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Competitive Intelligence Benchmarking
          </h3>
          <span className="text-[11px] text-slate-500">Gemini Competitive Radar</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Your Product / Service</label>
            <input
              type="text"
              value={myProduct}
              onChange={(e) => setMyProduct(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Industry / Sector</label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Rival Competitor Names</label>
            <input
              type="text"
              value={rivalNames}
              onChange={(e) => setRivalNames(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              placeholder="e.g. Incumbent A, Startup B, BigCorp C"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Focus Comparison Levers</label>
            <input
              type="text"
              value={focusArea}
              onChange={(e) => setFocusArea(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              placeholder="e.g. Pricing, Speed, Ease of Use, AI"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setData(INITIAL_COMPETITOR_ANALYSIS)}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Sample Matrix
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                <span>Benchmarking Rival Products...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Generate Competitor Matrix</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Industry Overview & Scoring Cards */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            Market Intelligence Overview
          </span>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Competitor
          </button>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{data.industryOverview}</p>
      </div>

      {/* Competitor Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.comparisonMatrix.map((comp) => {
          const isOur = comp.type.toLowerCase().includes('our');
          return (
            <div
              key={comp.id}
              className={`p-5 rounded-2xl border flex flex-col justify-between space-y-4 transition-all shadow-xl ${
                isOur
                  ? 'bg-gradient-to-b from-cyan-950/40 to-slate-900 border-cyan-500/50 shadow-cyan-950/30'
                  : 'bg-slate-900/90 border-slate-800 shadow-slate-950/40'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider inline-block ${
                        isOur
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {comp.type}
                    </span>
                    <h3 className="text-sm font-bold text-slate-100 mt-1 leading-snug">{comp.name}</h3>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800 text-xs font-bold text-amber-400">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{comp.overallScore}</span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  <span>{comp.priceRange}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Positioning</span>
                    <p className="text-slate-300 text-[11px] leading-snug">{comp.marketPositioning}</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase block">Key Strengths</span>
                    <p className="text-slate-300 text-[11px] leading-snug">{comp.keyStrengths}</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-rose-400 font-semibold uppercase block">Vulnerabilities</span>
                    <p className="text-slate-300 text-[11px] leading-snug">{comp.mainWeaknesses}</p>
                  </div>
                </div>
              </div>

              {!isOur && (
                <div className="pt-2 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => handleDeleteCompetitor(comp.id)}
                    className="text-[11px] text-slate-500 hover:text-rose-400 flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" /> Remove
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Feature-by-Feature Showdown Table */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-slate-200">Head-to-Head Feature Showdown</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="py-3 px-4 font-bold uppercase tracking-wider text-[10px]">Key Capability / Feature</th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider text-[10px] text-cyan-400 bg-cyan-950/20 rounded-t-lg">
                  Our Product ({myProduct})
                </th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider text-[10px]">Competitor Alpha</th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider text-[10px]">Competitor Beta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {data.featureComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-950/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-200">{row.feature}</td>
                  <td className="py-3.5 px-4 font-medium text-cyan-300 bg-cyan-950/15">{row.ourProduct}</td>
                  <td className="py-3.5 px-4 text-slate-400">{row.competitor1}</td>
                  <td className="py-3.5 px-4 text-slate-400">{row.competitor2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Moat & Defensive Strategy */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-slate-200">Sustainable Moat Strategy & Win Angles</h3>
        </div>
        <div className="space-y-2.5">
          {data.moatStrategy.map((moat, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">{moat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Competitor Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <form
            onSubmit={handleAddCompetitor}
            className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4 animate-in zoom-in-95"
          >
            <h3 className="text-sm font-bold text-slate-100">Add Competitor Profile</h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400">Competitor Name</label>
                <input
                  type="text"
                  value={newCompName}
                  onChange={(e) => setNewCompName(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">Type / Classification</label>
                <input
                  type="text"
                  value={newCompType}
                  onChange={(e) => setNewCompType(e.target.value)}
                  placeholder="e.g. Legacy Leader"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">Price Range</label>
                <input
                  type="text"
                  value={newCompPrice}
                  onChange={(e) => setNewCompPrice(e.target.value)}
                  placeholder="e.g. $49 - $199 / mo"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">Score (out of 10)</label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="10"
                  value={newCompScore}
                  onChange={(e) => setNewCompScore(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400">Positioning</label>
              <input
                type="text"
                value={newCompPosition}
                onChange={(e) => setNewCompPosition(e.target.value)}
                placeholder="e.g. Enterprise focus with heavy sales cycles"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400">Key Strengths</label>
              <input
                type="text"
                value={newCompStrengths}
                onChange={(e) => setNewCompStrengths(e.target.value)}
                placeholder="e.g. Huge brand equity, vast integrations"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400">Main Vulnerabilities</label>
              <input
                type="text"
                value={newCompWeaknesses}
                onChange={(e) => setNewCompWeaknesses(e.target.value)}
                placeholder="e.g. Dated slow UI, inflexible pricing"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold"
              >
                Add Competitor
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

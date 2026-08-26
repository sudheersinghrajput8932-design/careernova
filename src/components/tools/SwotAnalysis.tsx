import React, { useState } from 'react';
import {
  Grid,
  Sparkles,
  Copy,
  Download,
  FileText,
  Check,
  Plus,
  Trash2,
  TrendingUp,
  Shield,
  AlertTriangle,
  Lightbulb,
  ShieldAlert,
  RefreshCw
} from 'lucide-react';
import { SwotAnalysisResult, SwotItem } from '../../types';
import { INITIAL_SWOT_ANALYSIS } from '../../data/initialData';
import { copyToClipboard, downloadAsTextFile, generateAndDownloadPdf } from '../../utils/exportUtils';
import { generateSwotAnalysis } from '../../utils/aiGeneratorEngine';

interface SwotAnalysisProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const SwotAnalysis: React.FC<SwotAnalysisProps> = ({ onNotify }) => {
  const [data, setData] = useState<SwotAnalysisResult>(INITIAL_SWOT_ANALYSIS);
  const [businessName, setBusinessName] = useState('SyncPulse AI');
  const [industry, setIndustry] = useState('Developer SaaS & Meeting Intelligence');
  const [description, setDescription] = useState('AI meeting assistant that automates Jira tickets & GitHub PR drafting');
  const [keyCompetitors, setKeyCompetitors] = useState('Otter.ai, Fireflies.ai, Microsoft Copilot');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // New item modal/inline state
  const [activeQuadrant, setActiveQuadrant] = useState<'strengths' | 'weaknesses' | 'opportunities' | 'threats' | null>(null);
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');
  const [newItemImpact, setNewItemImpact] = useState<'High' | 'Medium' | 'Low'>('High');

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const generatedSwot = await generateSwotAnalysis({
        businessName,
        industry,
        description,
        keyCompetitors,
      });

      const sanitizeItems = (items: any[] = []) =>
        items.map((item, idx) => ({
          id: item.id || `item-${Date.now()}-${idx}`,
          title: item.title || 'Untitled Item',
          description: item.description || '',
          impact: item.impact || 'High',
        }));

      setData({
        businessName: generatedSwot.businessName || businessName,
        executiveSummary: generatedSwot.executiveSummary || '',
        strengths: sanitizeItems(generatedSwot.strengths),
        weaknesses: sanitizeItems(generatedSwot.weaknesses),
        opportunities: sanitizeItems(generatedSwot.opportunities),
        threats: sanitizeItems(generatedSwot.threats),
        strategicRecommendations: generatedSwot.strategicRecommendations || [],
      });
      onNotify('success', 'SWOT Matrix Generated', `Complete 2x2 strategic analysis ready for ${businessName}.`);
    } catch (err: any) {
      onNotify('info', 'SWOT Ready', 'Updated SWOT analysis matrix.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddItem = (quadrant: 'strengths' | 'weaknesses' | 'opportunities' | 'threats') => {
    if (!newItemTitle.trim()) return;

    const newItem: SwotItem = {
      id: `custom-${Date.now()}`,
      title: newItemTitle.trim(),
      description: newItemDesc.trim(),
      impact: newItemImpact,
    };

    setData((prev) => ({
      ...prev,
      [quadrant]: [...prev[quadrant], newItem],
    }));

    setNewItemTitle('');
    setNewItemDesc('');
    setActiveQuadrant(null);
    onNotify('success', 'Item Added', `Added new entry to ${quadrant.toUpperCase()}.`);
  };

  const handleDeleteItem = (quadrant: 'strengths' | 'weaknesses' | 'opportunities' | 'threats', id: string) => {
    setData((prev) => ({
      ...prev,
      [quadrant]: prev[quadrant].filter((item) => item.id !== id),
    }));
    onNotify('info', 'Item Removed', 'Card deleted from SWOT grid.');
  };

  const handleCopyAll = async () => {
    const text = `
=== SWOT STRATEGIC ANALYSIS: ${data.businessName} ===

[EXECUTIVE STRATEGIC SUMMARY]
${data.executiveSummary}

[STRENGTHS (Internal Factors)]
${data.strengths.map((s) => `• [${s.impact} Impact] ${s.title}: ${s.description}`).join('\n')}

[WEAKNESSES (Internal Factors)]
${data.weaknesses.map((w) => `• [${w.impact} Impact] ${w.title}: ${w.description}`).join('\n')}

[OPPORTUNITIES (External Market)]
${data.opportunities.map((o) => `• [${o.impact} Impact] ${o.title}: ${o.description}`).join('\n')}

[THREATS (External Market)]
${data.threats.map((t) => `• [${t.impact} Impact] ${t.title}: ${t.description}`).join('\n')}

[STRATEGIC ACTION RECOMMENDATIONS]
${data.strategicRecommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}
    `.trim();

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onNotify('success', 'Copied to Clipboard', 'Full SWOT analysis copied.');
    }
  };

  const handleDownloadPdf = () => {
    generateAndDownloadPdf(
      `SWOT Strategic Analysis Matrix: ${data.businessName}`,
      [
        {
          heading: 'Executive Strategic Assessment',
          body: data.executiveSummary,
        },
        {
          heading: 'Strengths (Internal Advantages)',
          body: data.strengths.map((s) => `[${s.impact || 'High'} Impact] ${s.title}: ${s.description}`),
        },
        {
          heading: 'Weaknesses (Internal Vulnerabilities)',
          body: data.weaknesses.map((w) => `[${w.impact || 'Medium'} Impact] ${w.title}: ${w.description}`),
        },
        {
          heading: 'Opportunities (External Growth Catalysts)',
          body: data.opportunities.map((o) => `[${o.impact || 'High'} Impact] ${o.title}: ${o.description}`),
        },
        {
          heading: 'Threats (External Market Risks)',
          body: data.threats.map((t) => `[${t.impact || 'High'} Impact] ${t.title}: ${t.description}`),
        },
        {
          heading: 'Strategic Recommendations & Takeaways',
          body: data.strategicRecommendations,
        },
      ],
      `${data.businessName.toLowerCase().replace(/\s+/g, '-')}-swot-matrix.pdf`
    );
    onNotify('success', 'PDF Downloaded', 'SWOT matrix PDF saved.');
  };

  const handleDownloadText = () => {
    const text = `SWOT MATRIX: ${data.businessName}\n\nStrengths:\n${data.strengths.map(s => `- ${s.title}: ${s.description}`).join('\n')}\n\nWeaknesses:\n${data.weaknesses.map(w => `- ${w.title}: ${w.description}`).join('\n')}`;
    downloadAsTextFile(`${data.businessName.toLowerCase().replace(/\s+/g, '-')}-swot.txt`, text);
    onNotify('info', 'File Saved', 'SWOT text file downloaded.');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/30 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Grid className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Interactive SWOT Analysis Matrix</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Evaluate internal Strengths & Weaknesses alongside external Opportunities & Threats. Add custom strategic cards, adjust impact priority levels, and generate strategic recommendations.
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
            AI SWOT Evaluator
          </h3>
          <span className="text-[11px] text-slate-500">Gemini Strategic Engine</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Venture / Brand</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
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
            <label className="text-xs font-semibold text-slate-300">Key Competitors</label>
            <input
              type="text"
              value={keyCompetitors}
              onChange={(e) => setKeyCompetitors(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              placeholder="e.g. Incumbent A, Player B"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Brief Value Proposition</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              placeholder="What makes your solution unique?"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setData(INITIAL_SWOT_ANALYSIS)}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Sample SWOT
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                <span>Evaluating SWOT Factors...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Auto-Generate SWOT Matrix</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Executive Summary Card */}
      {data.executiveSummary && (
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
          <span className="font-bold text-cyan-400 uppercase tracking-wider text-[10px]">
            Strategic Posture Summary
          </span>
          <p>{data.executiveSummary}</p>
        </div>
      )}

      {/* 2x2 Interactive SWOT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. STRENGTHS */}
        <div className="p-6 rounded-2xl bg-slate-900/95 border border-emerald-500/30 shadow-xl shadow-emerald-950/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-emerald-400">Strengths (S)</h3>
                <span className="text-[10px] text-slate-400">Internal Competitive Advantages</span>
              </div>
            </div>

            <button
              onClick={() => setActiveQuadrant('strengths')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          <div className="space-y-3">
            {data.strengths.map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 group">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.impact || 'High'} Impact
                    </span>
                    <button
                      onClick={() => handleDeleteItem('strengths', item.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-rose-400 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. WEAKNESSES */}
        <div className="p-6 rounded-2xl bg-slate-900/95 border border-rose-500/30 shadow-xl shadow-rose-950/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-rose-400">Weaknesses (W)</h3>
                <span className="text-[10px] text-slate-400">Internal Bottlenecks & Gaps</span>
              </div>
            </div>

            <button
              onClick={() => setActiveQuadrant('weaknesses')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          <div className="space-y-3">
            {data.weaknesses.map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 group">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                      {item.impact || 'High'} Impact
                    </span>
                    <button
                      onClick={() => handleDeleteItem('weaknesses', item.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-rose-400 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. OPPORTUNITIES */}
        <div className="p-6 rounded-2xl bg-slate-900/95 border border-cyan-500/30 shadow-xl shadow-cyan-950/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-cyan-400">Opportunities (O)</h3>
                <span className="text-[10px] text-slate-400">External Market Catalysts</span>
              </div>
            </div>

            <button
              onClick={() => setActiveQuadrant('opportunities')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-semibold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          <div className="space-y-3">
            {data.opportunities.map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 group">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {item.impact || 'High'} Impact
                    </span>
                    <button
                      onClick={() => handleDeleteItem('opportunities', item.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-rose-400 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. THREATS */}
        <div className="p-6 rounded-2xl bg-slate-900/95 border border-amber-500/30 shadow-xl shadow-amber-950/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-amber-400">Threats (T)</h3>
                <span className="text-[10px] text-slate-400">External Market & Competitive Risks</span>
              </div>
            </div>

            <button
              onClick={() => setActiveQuadrant('threats')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-semibold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          <div className="space-y-3">
            {data.threats.map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 group">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {item.impact || 'High'} Impact
                    </span>
                    <button
                      onClick={() => handleDeleteItem('threats', item.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-rose-400 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Takeaway Action Recommendations */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-cyan-400" />
          Strategic Synthesis & Action Recommendations
        </h3>
        <div className="space-y-2.5">
          {data.strategicRecommendations.map((rec, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0">
                {idx + 1}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Item Modal Overlay */}
      {activeQuadrant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4 animate-in zoom-in-95">
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide">
              Add Item to {activeQuadrant}
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400">Title</label>
                <input
                  type="text"
                  value={newItemTitle}
                  onChange={(e) => setNewItemTitle(e.target.value)}
                  placeholder="e.g. Proprietary Patent or Low Capital"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 mt-1"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">Detailed Description</label>
                <textarea
                  value={newItemDesc}
                  onChange={(e) => setNewItemDesc(e.target.value)}
                  placeholder="Describe why this factor creates an advantage or risk..."
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60 mt-1 resize-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">Impact Level</label>
                <select
                  value={newItemImpact}
                  onChange={(e) => setNewItemImpact(e.target.value as any)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 mt-1"
                >
                  <option value="High">High Impact</option>
                  <option value="Medium">Medium Impact</option>
                  <option value="Low">Low Impact</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveQuadrant(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleAddItem(activeQuadrant)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-md shadow-cyan-500/20"
              >
                Save Entry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

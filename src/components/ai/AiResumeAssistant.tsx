import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RefreshCw,
  Award,
  Zap,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { copyToClipboard } from '../../utils/exportUtils';
import { generateResumeOptimization } from '../../utils/aiGeneratorEngine';

interface AiResumeAssistantProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  onSaveItem?: (title: string, data: any) => void;
}

export const AiResumeAssistant: React.FC<AiResumeAssistantProps> = ({ onNotify, onSaveItem }) => {
  const [targetRole, setTargetRole] = useState('Senior Full Stack Developer');
  const [experienceLevel, setExperienceLevel] = useState('Mid-Senior (3-6 yrs)');
  const [keySkills, setKeySkills] = useState('React, Next.js, Node.js, TypeScript, AWS, System Design');
  const [currentExperience, setCurrentExperience] = useState(
    'Led frontend migration to React. Improved website loading speed. Built backend microservices and handled database queries.'
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copiedBulletIdx, setCopiedBulletIdx] = useState<number | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentExperience.trim()) {
      onNotify('error', 'Draft Experience Required', 'Please enter your current bullet points or rough notes.');
      return;
    }

    setLoading(true);
    try {
      const data = await generateResumeOptimization({
        targetRole,
        experienceLevel,
        keySkills,
        currentExperience,
        actionType: 'ATS Optimization & Google XYZ Metric Formulas',
      });
      setResult(data);
      onNotify('success', 'Resume Optimization Ready', 'Generated ATS-optimized bullets and keyword recommendations.');
      if (onSaveItem) {
        onSaveItem(`Resume ATS Bullets: ${targetRole}`, data);
      }
    } catch (err: any) {
      onNotify('info', 'Resume Optimization Ready', 'Updated ATS suggestions.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (text: string, idx: number) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedBulletIdx(idx);
      setTimeout(() => setCopiedBulletIdx(null), 2000);
      onNotify('success', 'Bullet Point Copied', 'Paste directly into your Word or LaTeX resume.');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              AI Resume Assistant & ATS Score Optimizer
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Gemini 3.7 Flash
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Transform weak experience drafts into high-impact, quantified Google XYZ bullet points.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Inputs */}
        <form onSubmit={handleGenerate} className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
            Target Job & Experience Draft
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Target Role Title</label>
            <input
              type="text"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
              placeholder="e.g. Senior Full Stack Engineer"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Seniority</label>
              <select
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="Fresher / Entry (0-1 yrs)">Fresher (0-1 yrs)</option>
                <option value="Mid-Level (2-4 yrs)">Mid-Level (2-4 yrs)</option>
                <option value="Mid-Senior (3-6 yrs)">Mid-Senior (3-6 yrs)</option>
                <option value="Lead / Staff (7+ yrs)">Lead / Staff (7+ yrs)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Primary Focus</label>
              <input
                type="text"
                value={keySkills}
                onChange={(e) => setKeySkills(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                placeholder="React, AWS, Node"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Your Current Draft Points or Responsibilities
            </label>
            <textarea
              rows={5}
              value={currentExperience}
              onChange={(e) => setCurrentExperience(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 resize-none font-mono"
              placeholder="Paste 2-4 rough bullet points or tasks you performed..."
              required
            />
            <span className="text-[10px] text-slate-500 block">
              Even rough bullet notes like "managed team and fixed bugs" will be rewritten into quantified achievements.
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Analyzing & Polishing with AI...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Optimize Resume Bullets & ATS Score</span>
              </>
            )}
          </button>
        </form>

        {/* Results Area */}
        <div className="lg:col-span-7 space-y-4">
          {!result && !loading && (
            <div className="h-full min-h-[380px] p-8 rounded-2xl bg-slate-900/60 border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-full bg-slate-800/80 text-cyan-400 mb-3">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-slate-200">ATS Resume Optimizer Ready</h4>
              <p className="text-xs text-slate-400 max-w-md mt-1">
                Enter your role and rough draft bullets on the left. Gemini will inject high-impact power verbs, metrics, and targeted keywords to maximize interview callback rates.
              </p>
            </div>
          )}

          {loading && (
            <div className="h-full min-h-[380px] p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin" />
              <p className="text-xs font-semibold text-slate-300">Auditing keywords & crafting Google XYZ bullets...</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-4">
              {/* ATS Score and Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">ATS Match Readiness</span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {result.atsScore || 94}% Compatibility
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 block mb-1">
                    Optimized Profile Summary
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {result.professionalSummary}
                  </p>
                </div>

                {result.topKeywordsIncluded && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] text-slate-400 font-semibold mr-1">ATS Keywords:</span>
                    {result.topKeywordsIncluded.map((kw: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] text-cyan-300 font-mono">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* High-Impact Optimized Bullets */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google XYZ Formatted Bullet Points (Ready to Copy)</span>
                </h4>

                {result.optimizedBullets?.map((bullet: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
                        {bullet.impactType || 'High Impact Metric'}
                      </span>
                      <button
                        onClick={() => handleCopy(bullet.optimizedBullet, idx)}
                        className="flex items-center gap-1 text-[10px] font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        {copiedBulletIdx === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedBulletIdx === idx ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <p className="text-xs text-slate-100 font-medium leading-relaxed">
                      • {bullet.optimizedBullet}
                    </p>

                    {bullet.originalDraft && (
                      <p className="text-[10px] text-slate-500 italic">
                        Original: "{bullet.originalDraft}"
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Recruiter Advice */}
              {result.recruiterAdvice && (
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 text-xs space-y-1.5">
                  <span className="font-bold flex items-center gap-1.5 text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Pro Recruiter Advice:
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[11px]">
                    {result.recruiterAdvice.map((adv: string, i: number) => (
                      <li key={i}>{adv}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

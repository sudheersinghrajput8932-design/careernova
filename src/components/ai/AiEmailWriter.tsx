import React, { useState } from 'react';
import {
  Mail,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Send,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { copyToClipboard } from '../../utils/exportUtils';
import { generateColdEmails } from '../../utils/aiGeneratorEngine';

interface AiEmailWriterProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  onSaveItem?: (title: string, data: any) => void;
}

export const AiEmailWriter: React.FC<AiEmailWriterProps> = ({ onNotify, onSaveItem }) => {
  const [purpose, setPurpose] = useState('Job Application / Cold Outreach to Hiring Lead');
  const [recipientRole, setRecipientRole] = useState('VP of Engineering / Hiring Manager');
  const [senderBackground, setSenderBackground] = useState(
    'Full-Stack Developer with 3+ years experience building high-throughput React & Node microservices'
  );
  const [valueOffer, setValueOffer] = useState(
    'Can accelerate frontend shipping velocity and reduce site latency by 40% based on proven past results'
  );
  const [tone, setTone] = useState('Concise, Metric-Driven & Confident');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const emailVariations = await generateColdEmails({
        purpose,
        recipientRole,
        senderBackground,
        valueOffer,
        tone,
      });
      setResult(emailVariations);
      onNotify('success', 'Email Templates Generated', '3 high-converting outreach variations ready.');
      if (onSaveItem) {
        onSaveItem(`Cold Email: ${recipientRole}`, emailVariations);
      }
    } catch (err: any) {
      onNotify('info', 'Generated Result', 'Created cold email outreach templates.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (subject: string, body: string, idx: number) => {
    const fullText = `Subject: ${subject}\n\n${body}`;
    const ok = await copyToClipboard(fullText);
    if (ok) {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
      onNotify('success', 'Email Copied to Clipboard', 'Ready to paste into Gmail or LinkedIn InMail.');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              AI Cold Email & Pitch Generator
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Gemini 3.7 Flash
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Craft 3 high-converting cold outreach variations with proven response psychology.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form */}
        <form onSubmit={handleGenerate} className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
            Outreach Parameters
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Outreach Objective</label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
            >
              <option value="Job Application / Cold Outreach to Hiring Lead">Job Application / Hiring Lead Outreach</option>
              <option value="Freelance Client Pitch & High-Ticket Proposal">Freelance Client Pitch & Proposal</option>
              <option value="Angel Investor & VC Teaser Pitch">Angel Investor & VC Teaser Pitch</option>
              <option value="B2B SaaS Sales Partnership Intro">B2B SaaS Sales Partnership Intro</option>
              <option value="Podcast / Guest Post Collaboration">Podcast / Guest Post Collaboration</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Target Recipient Role / Company</label>
            <input
              type="text"
              value={recipientRole}
              onChange={(e) => setRecipientRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
              placeholder="e.g. CTO, Head of Talent, Founder"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Your Credentials / Background</label>
            <textarea
              rows={2}
              value={senderBackground}
              onChange={(e) => setSenderBackground(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500 resize-none"
              placeholder="Full stack engineer with 3+ yrs experience..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">The "Unfair Value" Offer or Metric</label>
            <textarea
              rows={2}
              value={valueOffer}
              onChange={(e) => setValueOffer(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500 resize-none"
              placeholder="Can cut load time by 40% or generate 20 leads..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-rose-500/20 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Crafting High-Conversion Angles...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate 3 High-Impact Email Variations</span>
              </>
            )}
          </button>
        </form>

        {/* Results Area */}
        <div className="lg:col-span-7 space-y-4">
          {!result && !loading && (
            <div className="h-full min-h-[380px] p-8 rounded-2xl bg-slate-900/60 border border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-full bg-slate-800/80 text-rose-400 mb-3">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-slate-200">High-Conversion Email Generator Ready</h4>
              <p className="text-xs text-slate-400 max-w-md mt-1">
                Say goodbye to generic spam emails that get ignored. We generate 3 psychologically proven variations (Metric Hook, Loom Audit, and Executive Summary).
              </p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-4">
              {result.variations?.map((item: any, idx: number) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {item.name}
                    </span>
                    <button
                      onClick={() => handleCopy(item.subjectLine, item.body, idx)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-rose-300"
                    >
                      {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIndex === idx ? 'Copied' : 'Copy Email'}</span>
                    </button>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-500 font-mono">Subject: </span>
                    <strong className="text-slate-100 font-semibold">{item.subjectLine}</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-sans text-xs text-slate-200 whitespace-pre-line leading-relaxed">
                    {item.body}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span><strong>Why it works:</strong> {item.whyItWorks}</span>
                    <span className="text-rose-400/90 font-mono">Best for: {item.bestFor}</span>
                  </div>
                </div>
              ))}

              {result.followUpTemplate && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      Automated 4-Day Follow-Up Note
                    </span>
                    <span className="text-[10px] text-slate-500">{result.followUpTemplate.timing}</span>
                  </div>
                  <div className="text-xs text-slate-300 whitespace-pre-line bg-slate-900/80 p-3 rounded-lg border border-slate-800/80">
                    {result.followUpTemplate.body}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

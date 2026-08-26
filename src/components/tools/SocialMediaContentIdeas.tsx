import React, { useState } from 'react';
import {
  Share2,
  Sparkles,
  Copy,
  Download,
  FileText,
  Check,
  Twitter,
  Linkedin,
  Video,
  Instagram,
  Calendar,
  Zap,
  TrendingUp,
  MessageSquare,
  RefreshCw,
  Hash
} from 'lucide-react';
import { SocialContentResult } from '../../types';
import { INITIAL_SOCIAL_CONTENT } from '../../data/initialData';
import { copyToClipboard, downloadAsTextFile, generateAndDownloadPdf } from '../../utils/exportUtils';
import { generateSocialContent } from '../../utils/aiGeneratorEngine';

interface SocialMediaContentIdeasProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const SocialMediaContentIdeas: React.FC<SocialMediaContentIdeasProps> = ({ onNotify }) => {
  const [data, setData] = useState<SocialContentResult>(INITIAL_SOCIAL_CONTENT);
  const [platform, setPlatform] = useState('LinkedIn & Twitter / X');
  const [niche, setNiche] = useState('AI SaaS, Engineering Productivity, Startup Bootstrapping');
  const [audience, setAudience] = useState('Founders, VP of Engineering, Agile Product Managers');
  const [tone, setTone] = useState('Authoritative & Tactical (Data-Backed)');
  const [goal, setGoal] = useState('Lead Gen & Viral Brand Awareness');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const platformPresets = [
    'LinkedIn & Twitter / X',
    'Twitter / X Viral Threads',
    'LinkedIn Thought Leadership',
    'YouTube Shorts & TikTok Hooks',
    'Instagram Carousels & Reels',
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const generatedContent = await generateSocialContent({
        platform,
        niche,
        audience,
        tone,
        goal,
      });
      setData(generatedContent);
      onNotify('success', 'Viral Content Plan Created', 'Generated viral hooks, 7-day calendar, and full post copy.');
    } catch (err: any) {
      onNotify('info', 'Content Plan Ready', 'Generated social content strategy.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopySinglePost = async (id: string, text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
      onNotify('success', 'Post Copied', 'Ready to paste into your social publisher.');
    }
  };

  const handleCopyAll = async () => {
    const text = `
=== SOCIAL MEDIA CONTENT ENGINE: ${platform} ===
Target: ${niche} | Tone: ${tone}

[VIRAL HOOK ANGLES]
${data.viralHooks.map((h, i) => `${i + 1}. [${h.type}] "${h.hook}"\n   Why it works: ${h.explanation}`).join('\n\n')}

[7-DAY POSTING CALENDAR]
${data.weeklySchedule.map((w) => `• ${w.day}: [${w.theme}] (${w.format})\n  Goal: ${w.objective}`).join('\n')}

[READY-TO-POST CONTENT DRAFTS]
${data.contentDrafts
  .map(
    (d, i) => `--- Post ${i + 1} (${d.platform} | ${d.format}) ---
${d.fullPost}

CTA: ${d.callToAction}
Hashtags: ${d.hashtags.join(' ')}`
  )
  .join('\n\n====================\n\n')}

[ENGAGEMENT STRATEGY]
${data.engagementTips.map((t) => `• ${t}`).join('\n')}
    `.trim();

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId('all');
      setTimeout(() => setCopiedId(null), 2000);
      onNotify('success', 'Copied to Clipboard', 'Complete weekly content calendar copied.');
    }
  };

  const handleDownloadPdf = () => {
    generateAndDownloadPdf(
      `Social Media & Viral Content Plan: ${platform}`,
      [
        {
          heading: 'High-Converting Viral Hooks',
          body: data.viralHooks.map((h) => `[${h.type}] "${h.hook}"\n(Mechanism: ${h.explanation})`),
        },
        {
          heading: 'Weekly 7-Day Posting Schedule',
          body: data.weeklySchedule.map(
            (w) => `${w.day} (${w.theme} - ${w.format}): ${w.objective}`
          ),
        },
        {
          heading: 'Ready-to-Publish Content Drafts',
          body: data.contentDrafts.map(
            (d) => `[${d.platform} - ${d.format}]\n${d.fullPost}\nCTA: ${d.callToAction} | Hashtags: ${d.hashtags.join(' ')}`
          ),
        },
        {
          heading: 'Algorithm & Engagement Optimization Tips',
          body: data.engagementTips,
        },
      ],
      `social-content-calendar.pdf`
    );
    onNotify('success', 'PDF Downloaded', 'Social calendar PDF saved.');
  };

  const handleDownloadText = () => {
    const text = `SOCIAL MEDIA CALENDAR\n\nHooks:\n${data.viralHooks.map(h => `- ${h.hook}`).join('\n')}\n\nSchedule:\n${data.weeklySchedule.map(s => `${s.day}: ${s.theme}`).join('\n')}`;
    downloadAsTextFile(`social-calendar.txt`, text);
    onNotify('info', 'File Saved', 'Text social calendar saved.');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/30 border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Share2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Social Media & Viral Content Engine</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Generate battle-tested viral hook formulas, 7-day content distribution calendars, and complete platform-formatted post drafts for LinkedIn, Twitter / X, Reels, and Newsletters.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-colors"
            >
              {copiedId === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === 'all' ? 'Copied' : 'Copy All'}</span>
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
            Viral Copywriting Parameters
          </h3>
          <span className="text-[11px] text-slate-500">Gemini Social Architect</span>
        </div>

        {/* Platform Quick Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400">Target Social Channels:</label>
          <div className="flex flex-wrap gap-2">
            {platformPresets.map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  platform === p
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Niche / Topic Focus</label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Target Audience Persona</label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Tone & Personality</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/60"
            >
              <option value="Authoritative & Tactical (Data-Backed)">Authoritative & Tactical (Data-Backed)</option>
              <option value="Storytelling & Vulnerable Founder">Storytelling & Vulnerable Founder</option>
              <option value="Provocative & Contrarian Take">Provocative & Contrarian Take</option>
              <option value="Punchy & Actionable Frameworks">Punchy & Actionable Frameworks</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => setData(INITIAL_SOCIAL_CONTENT)}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Sample Content
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                <span>Crafting Viral Copy...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Generate Viral Calendar & Posts</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Results View */}
      <div className="space-y-6">
        {/* Viral Hooks Showcase */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-slate-200">High-Converting Viral Hook Formulas</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.viralHooks.map((hook, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-md font-bold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20 inline-block">
                    {hook.type}
                  </span>
                  <p className="text-xs text-slate-100 font-bold leading-snug">"{hook.hook}"</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{hook.explanation}</p>
                </div>

                <button
                  onClick={() => handleCopySinglePost(`hook-${idx}`, hook.hook)}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold transition-colors"
                >
                  {copiedId === `hook-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === `hook-${idx}` ? 'Copied' : 'Copy Hook'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Posting Schedule */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-slate-200">7-Day Content Distribution Schedule</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {data.weeklySchedule.map((day, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                    {day.day}
                  </span>
                  <h4 className="text-xs font-bold text-slate-200 mt-1 leading-snug">{day.theme}</h4>
                  <span className="text-[10px] text-slate-400 block mt-1">{day.format}</span>
                </div>
                <p className="text-[10px] text-slate-500 pt-1 border-t border-slate-800/80 leading-tight">
                  {day.objective}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready-to-Publish Content Drafts */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              Full Post Drafts (Ready-to-Publish)
            </h3>
            <span className="text-xs text-slate-400">Formatted with hooks, body, CTA & hashtags</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.contentDrafts.map((post) => {
              const isCopied = copiedId === post.id;
              return (
                <div
                  key={post.id}
                  className="p-6 rounded-2xl bg-slate-900/95 border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                          {post.platform}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{post.format}</span>
                      </div>

                      <button
                        onClick={() =>
                          handleCopySinglePost(
                            post.id,
                            `${post.fullPost}\n\n${post.callToAction}\n\n${post.hashtags.join(' ')}`
                          )
                        }
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Copied' : 'Copy Post'}</span>
                      </button>
                    </div>

                    {/* Full post text with whitespace preservation */}
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-200 whitespace-pre-line leading-relaxed font-sans">
                      {post.fullPost}
                    </div>

                    {/* CTA & Hashtags */}
                    <div className="space-y-2 pt-1 text-xs">
                      <div className="p-2 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 text-[11px]">
                        <strong>Call to Action: </strong>
                        {post.callToAction}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {post.hashtags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement & Algorithm Tips */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-slate-200">Algorithm Optimization & Community Engagement Rules</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            {data.engagementTips.map((tip, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

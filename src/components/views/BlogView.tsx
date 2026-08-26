import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Search,
  Sparkles,
  Share2,
  CheckCircle2,
  X,
  MessageCircle,
  ShieldCheck,
  ExternalLink,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../../data/blogData';
import { BlogPost, TabId } from '../../types';
import { copyToClipboard } from '../../utils/exportUtils';

interface BlogViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onNavigate?: (tab: TabId, subTool?: string) => void;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const BlogView: React.FC<BlogViewProps> = ({ onNotify, addToast, onNavigate }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
    else if (addToast) addToast(title, description, type);
  };
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Career', 'Business', 'Marketing', 'AI'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShare = async (post: BlogPost) => {
    const ok = await copyToClipboard(`${window.location.origin}/#blog/${post.slug}`);
    if (ok) {
      notifyFn('success', 'Article Link Copied', 'Share this guide with friends or on LinkedIn.');
    }
  };

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/917007260391?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Knowledge &amp; Strategy Vault</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          CareerNova <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Blog &amp; Playbooks</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Actionable recruitment hacks, VC pitch models, SEO growth checklists, and AI productivity guides tested by industry practitioners.
        </p>
      </motion.div>

      {/* 2. Filter & Search Bar with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, tags, or topics..."
            className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500/30 transition-all"
          />
        </div>
      </motion.div>

      {/* 3. Blog Cards Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredPosts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...smoothTransition, delay: (idx % 4) * 0.08 }}
            onClick={() => setActivePost(post)}
            className="group relative rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl shadow-xs overflow-hidden"
          >
            {/* Top Cover Image */}
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
              <img
                src={post.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80'}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Floating Category Badge & Read Time */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-white/95 text-indigo-700 border border-slate-200 backdrop-blur-md shadow-xs">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/60 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-indigo-300" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service CTA Preview & Read Link */}
              <div className="pt-4 border-t border-slate-100 space-y-3 mt-4">
                {post.cta && (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                      <span className="text-[11px] text-slate-800 truncate font-semibold">
                        Specialist Service Available ({post.cta.price})
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider shrink-0 ml-2">
                      {post.cta.badge || 'Service'}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500 text-[11px] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {post.author}
                  </span>
                  <span className="text-indigo-600 group-hover:text-indigo-800 font-bold flex items-center gap-1">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto custom-scrollbar">
            {/* Modal Hero Cover Image */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-3xl bg-slate-100">
              <img
                src={activePost.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80'}
                alt={activePost.title}
                loading="lazy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-600 text-white shadow-xs">
                    {activePost.category}
                  </span>
                  <span className="text-xs text-white/90 flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <Clock className="w-3 h-3 text-indigo-300" /> {activePost.readTime}
                  </span>
                  <span className="text-xs text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    By {activePost.author} • {activePost.date}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-white leading-snug drop-shadow-md">
                  {activePost.title}
                </h1>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 pt-0 text-slate-900">
              {/* Intro Lead */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium">
                {activePost.content.intro}
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {activePost.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-2.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-1.5 h-4 rounded-full bg-indigo-600" />
                      <span>{section.heading}</span>
                    </h3>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {section.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {section.keyTakeaways && (
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                        <strong className="text-indigo-700 font-semibold block text-[11px]">Key Highlights:</strong>
                        {section.keyTakeaways.map((k, kIdx) => (
                          <div key={kIdx} className="flex items-center gap-1.5 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{k}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.actionStep && (
                      <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900">
                        <strong className="text-indigo-700 font-bold">Tactical Action Step: </strong> {section.actionStep}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <strong className="text-slate-900 font-semibold block">Editorial Conclusion:</strong>
                <p className="leading-relaxed font-normal">{activePost.content.conclusion}</p>
              </div>

              {/* Service Call to Action */}
              {activePost.cta && (
                <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>CAREERNOVA VERIFIED SERVICE</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-200 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" />
                      <span>100% Satisfaction Guaranteed</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      {activePost.cta.title}
                    </h2>
                    <p className="text-xs text-indigo-100 font-normal">
                      Skip the trial-and-error. Get our dedicated human specialists to deliver ready-to-use results with fast 24-48h turnaround.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href={getWhatsAppLink(activePost.cta.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      <span>{activePost.cta.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {onNavigate && (
                      <button
                        onClick={() => {
                          setActivePost(null);
                          onNavigate('services');
                        }}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/20 font-semibold text-xs transition-all cursor-pointer"
                      >
                        <span>Explore Services Marketplace</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Share and Close */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => handleShare(activePost)}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Article Link</span>
                </button>

                <button
                  onClick={() => setActivePost(null)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

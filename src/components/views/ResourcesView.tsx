import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Search,
  Filter,
  Download,
  Copy,
  Check,
  Sparkles,
  FileText,
  CheckCircle2,
  ExternalLink,
  Tag,
  ArrowRight,
  X
} from 'lucide-react';
import { RESOURCE_ITEMS } from '../../data/resourcesData';
import { ResourceItem } from '../../types';
import { copyToClipboard } from '../../utils/exportUtils';

interface ResourcesViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNotify, addToast }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
    else if (addToast) addToast(title, description, type);
  };
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalItem, setActiveModalItem] = useState<ResourceItem | null>(null);

  const categories = ['All', 'Career Guides', 'Business Guides', 'Marketing Guides', 'Finance Basics', 'Templates'];

  const filteredItems = RESOURCE_ITEMS.filter((item) => {
    const matchesCategory = selectedCat === 'All' || item.category === selectedCat;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopyItem = async (item: ResourceItem) => {
    const text = `${item.title.toUpperCase()}\nCategory: ${item.category} (${item.format})\n\n${item.description}\n\nKey Action Points:\n${item.contentSnippet.join('\n')}`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
      onNotify('success', 'Resource Content Copied', 'Ready to paste into your notes or docs.');
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* 1. Top Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-black shadow-md shadow-indigo-600/25 shrink-0">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 flex flex-wrap items-center gap-2 tracking-tight">
              <span>Resources, Guides &amp; Template Vault</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                100% Free Access
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
              Battle-tested frameworks, cold email scripts, pitch deck structures, and financial formulas.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. Filter and Search Bar with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, templates..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
          />
        </div>
      </motion.div>

      {/* 3. Cards Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...smoothTransition, delay: (idx % 4) * 0.08 }}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {item.category} • {item.format}
                </span>
                {item.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.description}</p>

              {/* Snippet box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5 font-sans">
                {item.contentSnippet.map((line, lIdx) => (
                  <p key={lIdx} className="leading-snug text-[11px] text-slate-700 font-normal">
                    {line}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveModalItem(item)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleCopyItem(item)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer border border-slate-200"
              >
                {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === item.id ? 'Copied' : 'Copy All'}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. Full Details Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase text-indigo-600">
                  {activeModalItem.category} • {activeModalItem.format}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{activeModalItem.title}</h2>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">{activeModalItem.description}</p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Actionable Protocol</h4>
              {activeModalItem.contentSnippet.map((s, i) => (
                <div key={i} className="text-xs text-slate-700 leading-relaxed font-normal">
                  {s}
                </div>
              ))}
            </div>

            {activeModalItem.fullDetails && (
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 space-y-2">
                <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Phase Breakdown</h4>
                {activeModalItem.fullDetails.map((f, i) => (
                  <div key={i} className="text-xs text-slate-700 font-normal">
                    • {f}
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  handleCopyItem(activeModalItem);
                  setActiveModalItem(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/25 cursor-pointer"
              >
                Copy Content to Clipboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

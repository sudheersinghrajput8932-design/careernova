import React, { useState, useMemo } from 'react';
import {
  Compass,
  Search,
  ExternalLink,
  Star,
  Bookmark,
  Filter,
  Layers,
  Copy,
  Check,
  Zap,
  Sparkles,
  Award,
  ChevronDown
} from 'lucide-react';
import { MarketingTool } from '../../types';
import { MARKETING_TOOLS_DIRECTORY } from '../../data/marketingToolsData';
import { copyToClipboard } from '../../utils/exportUtils';

interface MarketingToolsDirectoryProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const MarketingToolsDirectory: React.FC<MarketingToolsDirectoryProps> = ({ onNotify }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
  };
  const [tools, setTools] = useState<MarketingTool[]>(MARKETING_TOOLS_DIRECTORY);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPricing, setSelectedPricing] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    'All',
    'SEO & Keyword Intelligence',
    'Analytics & CRO',
    'AI Copywriting & Media',
    'Social & Community',
    'Email & Automation',
    'CRM & Sales Pipeline',
    'Paid Ads & Attribution',
  ];

  const pricingModels = ['All', 'Freemium', 'Free Trial', 'Paid', 'Free Open-Source'];

  const toggleBookmark = (id: string, name: string) => {
    setBookmarkedIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      notifyFn(
        'info',
        exists ? 'Removed Bookmark' : 'Saved to Favorites',
        `${name} ${exists ? 'removed from' : 'saved to'} your quick tools.`
      );
      return updated;
    });
  };

  const handleCopyTool = async (tool: MarketingTool) => {
    const text = `
Tool: ${tool.name}
Category: ${tool.category}
Pricing: ${tool.pricingModel} (${tool.startingPrice})
Description: ${tool.description}
Key Features: ${tool.keyFeatures.join(', ')}
Best For: ${tool.bestFor}
Website: ${tool.websiteUrl}
    `.trim();

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(tool.id);
      setTimeout(() => setCopiedId(null), 2000);
      notifyFn('success', 'Tool Copied', `Copied ${tool.name} profile.`);
    }
  };

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // Search query
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.keyFeatures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;

      // Pricing filter
      const matchesPricing = selectedPricing === 'All' || tool.pricingModel === selectedPricing;

      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === 'All' || tool.difficulty === selectedDifficulty;

      // Bookmarks only
      const matchesBookmarks = !onlyBookmarks || bookmarkedIds.includes(tool.id);

      return matchesSearch && matchesCategory && matchesPricing && matchesDifficulty && matchesBookmarks;
    });
  }, [tools, searchQuery, selectedCategory, selectedPricing, selectedDifficulty, onlyBookmarks, bookmarkedIds]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Digital Marketing &amp; Growth Tools Directory</h2>
            </div>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl font-normal">
              Curated, searchable database of top-tier growth software across SEO, analytics, copywriting, email automations, CRM pipelines, and viral media.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOnlyBookmarks(!onlyBookmarks)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                onlyBookmarks
                  ? 'bg-amber-50 text-amber-700 border border-amber-200 shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarks ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}`} />
              <span>Saved Tools ({bookmarkedIds.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls Hub */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 28+ tools by keyword, capability (e.g. 'Backlinks', 'A/B testing', 'Email drips')..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
          />
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Secondary Filter Dropdowns */}
        <div className="flex items-center gap-3 flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[11px] font-semibold uppercase">Pricing:</span>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-indigo-500 focus:bg-white cursor-pointer"
            >
              {pricingModels.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[11px] font-semibold uppercase">Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-indigo-500 focus:bg-white cursor-pointer"
            >
              <option value="All">All Skill Levels</option>
              <option value="Beginner">Beginner Friendly</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced Pro</option>
            </select>
          </div>

          <div className="ml-auto text-xs text-slate-500">
            Showing <strong className="text-indigo-600">{filteredTools.length}</strong> of {tools.length} Tools
          </div>
        </div>
      </div>

      {/* Tools Cards Grid */}
      {filteredTools.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <Compass className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-sm font-bold text-slate-800">No tools matched your criteria</h3>
          <p className="text-xs text-slate-500">Try clearing filters or searching for broader terms.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedPricing('All');
              setSelectedDifficulty('All');
              setOnlyBookmarks(false);
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs text-slate-700 font-semibold transition-colors mt-2 cursor-pointer border border-slate-200"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => {
            const isBookmarked = bookmarkedIds.includes(tool.id);
            const isCopied = copiedId === tool.id;

            return (
              <div
                key={tool.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md group"
              >
                <div className="space-y-3">
                  {/* Card Header: Category & Bookmark */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-md font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {tool.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => toggleBookmark(tool.id, tool.name)}
                        className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                          isBookmarked
                            ? 'bg-amber-50 border-amber-200 text-amber-600'
                            : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700'
                        }`}
                        title="Save to favorites"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                      </button>

                      <button
                        onClick={() => handleCopyTool(tool)}
                        className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                        title="Copy tool summary"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Title & Rating */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2 font-normal">
                      {tool.description}
                    </p>
                  </div>

                  {/* Pricing & Best For badges */}
                  <div className="flex items-center gap-2 flex-wrap text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                      {tool.pricingModel} • {tool.startingPrice}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-medium border border-indigo-100">
                      {tool.difficulty}
                    </span>
                  </div>

                  {/* Key Features Chips */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      Key Capabilities
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.keyFeatures.map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Best For & External Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  <span className="text-[10px] text-slate-500 truncate max-w-[140px]">
                    Best for: <strong className="text-slate-700">{tool.bestFor}</strong>
                  </span>

                  <a
                    href={tool.websiteUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold border border-indigo-200 transition-colors shrink-0"
                  >
                    <span>Visit Tool</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

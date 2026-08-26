import React from 'react';
import {
  Home,
  Layers,
  Wrench,
  Briefcase,
  TrendingUp,
  Bot,
  BookOpen,
  FileText,
  Compass,
  Zap,
  Headphones,
  Phone,
  Mail,
  User,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { TabId } from '../../types';
import { NAVIGATION_TABS } from '../../data/initialData';

interface SidebarProps {
  activeTab: TabId;
  onSelectTab: (tabId: TabId) => void;
  onOpenCreator: () => void;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
  Bot: <Bot className="w-4 h-4" />,
  BookOpen: <BookOpen className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  Compass: <Compass className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Headphones: <Headphones className="w-4 h-4" />,
};

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  onOpenCreator,
  isMobileNavOpen,
  setIsMobileNavOpen,
}) => {
  const categories = [
    'Core Navigation',
    'Solutions & Growth',
    'Knowledge & Traffic',
    'Trust & Direct Connect',
  ] as const;

  const handleTabClick = (tabId: TabId) => {
    onSelectTab(tabId);
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden animate-in fade-in"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-[57px] bottom-0 left-0 z-40 w-72 bg-slate-950 border-r border-slate-800/90 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Navigation Tools List */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6 custom-scrollbar">
          {categories.map((category) => {
            const tabsInCategory = NAVIGATION_TABS.filter((t) => t.category === category);
            return (
              <div key={category} className="space-y-1.5">
                <h3 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {category}
                </h3>
                <div className="space-y-1">
                  {tabsInCategory.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`w-full text-left flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-transparent text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-950/40'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                              isActive
                                ? 'bg-cyan-500/20 text-cyan-400'
                                : 'bg-slate-900 text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-800'
                            }`}
                          >
                            {ICON_MAP[tab.iconName] || <Sparkles className="w-4 h-4" />}
                          </div>
                          <div className="min-w-0 truncate">
                            <span className="block truncate font-semibold">{tab.name}</span>
                            <span className="text-[10px] text-slate-400 truncate block">
                              {tab.shortName}
                            </span>
                          </div>
                        </div>

                        {tab.badge && (
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded-md font-medium shrink-0 uppercase tracking-tight ${
                              isActive
                                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                                : 'bg-slate-900 text-slate-400 border border-slate-800'
                            }`}
                          >
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Creator & Contact Sidebar Footer Box */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/90 shrink-0 space-y-3">
          <div
            onClick={onOpenCreator}
            className="p-3 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center text-xs font-bold text-cyan-400">
                    SS
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      Sudhir Singh
                    </h4>
                  </div>
                  <p className="text-[10px] text-slate-400">Creator & Lead Architect</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>

            <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
              Full-Stack & AI Systems Architect. Direct developer hotline available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="tel:+917007260391"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>
            <a
              href="mailto:sudheersinghrajput8932@gmail.com"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[11px] font-semibold transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

import React, { useState } from 'react';
import {
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { TabId, UserProfile } from '../../types';

interface HeaderProps {
  activeTab?: TabId;
  currentTab?: TabId;
  onSelectTab?: (tabId: TabId) => void;
  onNavigate?: (tabId: TabId) => void;
  onOpenAuth?: (mode?: 'signin' | 'signup') => void;
  onLogout?: () => void;
  onOpenCreator?: () => void;
  user?: UserProfile | null;
  userProfile?: UserProfile | null;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  currentTab,
  onSelectTab,
  onNavigate,
  onOpenAuth = () => {},
  onLogout,
  onOpenCreator,
  user,
  userProfile,
}) => {
  const currentActiveTab = currentTab || activeTab || 'home';
  const effectiveUser = userProfile !== undefined ? userProfile : user;
  const navigateFn = onNavigate || onSelectTab || (() => {});

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items with "Tools" added right between Services and Core Expertise
  const navItems: { id: TabId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'tools', label: 'Tools' },
    { id: 'expertise', label: 'Core Expertise' },
    { id: 'blog', label: 'Blog' },
  ];

  const handleNavClick = (tabId: TabId) => {
    navigateFn(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo and CareerNova text placed closely together */}
          <a href="index.html" className="flex items-center gap-2 text-decoration-none">
            <img src="/logo.png" alt="CareerNova" style={{ height: '44px', width: '44px', objectFit: 'contain' }} />
            <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f172a' }} className="tracking-tight">CareerNova</span>
          </a>

          {/* Desktop Navigation Links with Glowing Blue Movable Spotlight Hover Effect */}
          <nav
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
              e.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
              e.currentTarget.style.setProperty('--spotlight-opacity', '1');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--spotlight-opacity', '0');
            }}
            className="relative hidden md:flex items-center gap-2 p-1.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs backdrop-blur-xs"
          >
            {/* Movable blue spotlight aura behind links */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 z-0"
              style={{
                opacity: 'var(--spotlight-opacity, 0)',
                background: 'radial-gradient(160px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), rgba(59, 130, 246, 0.18), rgba(99, 102, 241, 0.08), transparent 70%)',
              }}
            />

            {navItems.map((item) => {
              const isActive = currentActiveTab === item.id || (item.id === 'tools' && ['tools', 'career', 'business', 'ai-hub', 'resources'].includes(currentActiveTab));
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative z-10 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer focus:outline-hidden ${
                    isActive
                      ? 'bg-white text-indigo-600 shadow-xs border border-indigo-100'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {effectiveUser ? (
              <button
                onClick={() => onOpenAuth()}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-800 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center text-[10px] font-black">
                  {effectiveUser.name.charAt(0)}
                </div>
                <span>{effectiveUser.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('expertise')}
                className="ambient-glow-cta flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-bold transition-all duration-300 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = currentActiveTab === item.id || (item.id === 'tools' && ['tools', 'career', 'business', 'ai-hub', 'resources'].includes(currentActiveTab));
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              onClick={() => handleNavClick('expertise')}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-bold text-center shadow-md shadow-indigo-600/25 cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold cursor-pointer"
            >
              {effectiveUser ? effectiveUser.name.split(' ')[0] : 'Sign In'}
            </button>
          </div>

          {/* Quick Mobile Contact & Support row */}
          <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
            <a
              href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20have%20an%20inquiry%20regarding%20your%20services%20and%20tools."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+917007260391"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-600" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

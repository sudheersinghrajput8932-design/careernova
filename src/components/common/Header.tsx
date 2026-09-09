import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  MessageSquare,
  Home,
  Info,
  Briefcase,
  Wrench,
  GraduationCap,
  BookOpen
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
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrink + solidify the header once the page has scrolled a little
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navigation items with "Tools" added right between Services and Core Expertise
  const navItems: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'expertise', label: 'Core Expertise', icon: GraduationCap },
    { id: 'blog', label: 'Blog', icon: BookOpen },
  ];

  const handleNavClick = (tabId: TabId) => {
    navigateFn(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md border-slate-200 shadow-sm'
          : 'bg-white/95 backdrop-blur-md border-slate-200 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-18'
          }`}
        >
         {/* Logo and CareerNova tightly bound and perfectly centered */}
          <motion.a
            href="index.html"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center -ml-3 text-decoration-none"
          >
            <motion.img
              src="/logo.png"
              alt="CareerNova"
              whileHover={{ rotate: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              className="w-10 h-10 object-contain"
            />
            <span className="text-[22px] font-bold text-slate-900 tracking-tight ml-1">CareerNova</span>
          </motion.a>

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
            className="relative hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs backdrop-blur-xs"
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
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors duration-200 cursor-pointer focus:outline-hidden ${
                    isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {/* Sliding active pill — animates smoothly between tabs */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 -z-10 rounded-xl bg-white shadow-xs border border-indigo-100"
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 shrink-0 transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
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
                onClick={() => {
                  sessionStorage.setItem('cn_scrollTo', 'contact-form-section');
                  handleNavClick('about');
                }}
                className="ambient-glow-cta group relative flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-bold transition-all duration-300 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer overflow-hidden"
              >
                {/* Shimmer sweep — CSS-only, plays on hover instead of looping forever.
                    An always-on Framer Motion animate loop kept running on this button
                    even while it's display:none on mobile (Tailwind's `hidden` doesn't
                    pause JS-driven animation), burning main-thread cycles that showed up
                    as jank when opening the mobile menu. This has zero cost until hovered. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-transform duration-700 ease-out -translate-x-[120%] group-hover:translate-x-[420%]"
                />
                <span className="relative">Contact Us</span>
                <ArrowRight className="relative w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
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
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu.
          Two changes from before, both aimed at the "lag" when opening this panel:
          1. Animating `height` forces the browser to recalculate layout on every
             single animation frame (it's a layout property, not a compositor one).
             With ~6 nav items plus the two footer rows, that's a real reflow cost on
             a mid-range phone. Swapped to animating opacity + a small y offset instead,
             which the browser can run entirely on the compositor thread (GPU), so it
             stays smooth regardless of how much content is inside.
          2. Dropped `backdrop-blur-xl` here — this panel sits directly under the
             header, which is already blurred, so a second heavy blur layer was
             compositing on top of the first every frame of the open/close animation.
             Solid white looks effectively identical this close under the header,
             at a fraction of the GPU cost. */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-slate-200 bg-white overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-5 space-y-2">
              {navItems.map((item, idx) => {
                const isActive = currentActiveTab === item.id || (item.id === 'tools' && ['tools', 'career', 'business', 'ai-hub', 'resources'].includes(currentActiveTab));
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-2.5 text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    {item.label}
                  </motion.button>
                );
              })}

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    sessionStorage.setItem('cn_scrollTo', 'contact-form-section');
                    handleNavClick('about');
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-bold text-center shadow-md shadow-indigo-600/25 cursor-pointer"
                >
                  Contact Us
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

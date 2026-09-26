import React from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Youtube,
  Send,
  Activity,
  Sparkle,
  Zap,
  Globe2,
  ShieldCheck,
  Clock3
} from 'lucide-react';
import { TabId } from '../../types';

interface FooterProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenCreator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreator = () => {} }) => {
  return (
    <footer
      id="corporate-footer"
      className="relative w-full overflow-hidden bg-slate-50 text-slate-600 border-t border-slate-200"
    >
      {/* Live ambient background — CSS only, no extra image asset required. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl animate-pulse" />
        <div className="absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-violet-200/35 blur-3xl animate-pulse [animation-delay:900ms]" />
        <div className="absolute left-1/3 bottom-[-8rem] h-72 w-72 rounded-full bg-blue-200/20 blur-3xl animate-pulse [animation-delay:1600ms]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 lg:pt-10">
        {/* Live activity / newsletter-style CTA panel inspired by the reference layout. */}
        <div className="relative mb-10 overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 p-5 text-white shadow-[0_24px_70px_rgba(79,70,229,0.22)] sm:p-7 lg:p-8">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/15 animate-[spin_16s_linear_infinite]" />
          <div aria-hidden="true" className="absolute -right-5 -bottom-24 h-56 w-56 rounded-full border border-white/10 animate-[spin_22s_linear_infinite_reverse]" />
          <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-cyan-300/10 via-transparent to-transparent" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur-md">
                <Sparkle className="h-7 w-7 text-cyan-100 animate-pulse" />
                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100">
                  <Activity className="h-3.5 w-3.5" />
                  CareerNova Live
                  <span className="rounded-full bg-emerald-300/15 px-2 py-0.5 text-[9px] text-emerald-100 ring-1 ring-emerald-200/20">
                    ACTIVE
                  </span>
                </div>
                <h3 className="text-xl font-black tracking-tight sm:text-2xl lg:text-3xl">
                  Build smarter. Grow continuously.
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
                  Digital products, technology, automation and growth support — connected in one practical ecosystem.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:min-w-[390px]">
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur-sm">
                <Zap className="mb-2 h-4 w-4 text-amber-200" />
                <div className="text-[10px] uppercase tracking-wider text-indigo-100">Fast</div>
                <div className="text-sm font-bold">Execution</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur-sm">
                <Globe2 className="mb-2 h-4 w-4 text-cyan-200" />
                <div className="text-[10px] uppercase tracking-wider text-indigo-100">Digital</div>
                <div className="text-sm font-bold">Systems</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur-sm">
                <ShieldCheck className="mb-2 h-4 w-4 text-emerald-200" />
                <div className="text-[10px] uppercase tracking-wider text-indigo-100">Reliable</div>
                <div className="text-sm font-bold">Support</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur-sm">
                <Clock3 className="mb-2 h-4 w-4 text-fuchsia-200" />
                <div className="text-[10px] uppercase tracking-wider text-indigo-100">Always</div>
                <div className="text-sm font-bold">Improving</div>
              </div>
            </div>
          </div>

          {/* Moving activity rail */}
          <div className="relative mt-6 overflow-hidden rounded-full border border-white/10 bg-black/10 px-4 py-2">
            <div className="flex min-w-max items-center gap-6 text-[10px] font-semibold text-indigo-100 animate-[footerTicker_22s_linear_infinite]">
              <span>● Digital systems active</span>
              <span>• Web &amp; app development</span>
              <span>• AI &amp; automation</span>
              <span>• Analytics &amp; growth</span>
              <span>• Design &amp; product</span>
              <span>• Technology &amp; support</span>
              <span>● Digital systems active</span>
            </div>
          </div>
        </div>
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-indigo-100 text-[10px] font-bold tracking-widest text-indigo-600 mb-6">
          LEARN <span className="text-slate-300">•</span> GROW <span className="text-slate-300">•</span> BUILD <span className="text-slate-300">•</span> SUCCEED
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-5 lg:pr-6">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 p-0.5 shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-all">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-indigo-600 font-black">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-slate-900 tracking-tight">
                  Career<span className="text-indigo-600">Nova</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Software Solution &amp; Business Growth
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              CareerNova builds digital products, software solutions, automation systems and growth strategies for businesses, brands and founders — from web and mobile development to AI, design, marketing, and ongoing technical support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white hover:bg-indigo-600 text-slate-500 hover:text-white border border-slate-200 hover:border-indigo-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white hover:bg-pink-600 text-slate-500 hover:text-white border border-slate-200 hover:border-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white hover:bg-red-600 text-slate-500 hover:text-white border border-slate-200 hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-xl bg-white hover:bg-slate-900 text-slate-500 hover:text-white border border-slate-200 hover:border-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-white hover:bg-slate-900 text-slate-500 hover:text-white border border-slate-200 hover:border-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Quote */}
            <div className="relative inline-block mt-2 px-4 py-3 rounded-2xl bg-white/70 border border-slate-200 shadow-xs">
              <span className="absolute -top-2 left-3 text-2xl text-indigo-300 font-serif">&ldquo;</span>
              <p
                className="text-sm text-slate-700 -rotate-1"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Better People<br />Brighter Tomorrows
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-violet-600">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 pt-1">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Services Marketplace</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Interactive Tools</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Blog &amp; Guides</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-violet-600">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 pt-1">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Web Development</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>iOS App Development</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>E-commerce Development</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>AI &amp; Automation</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>UI/UX &amp; Product Design</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Digital Marketing &amp; SEO</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Business Growth</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Maintenance &amp; Support</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Technology &amp; Growth Stack</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-violet-600">
              Let's Connect
            </h4>
            <div className="space-y-3 text-xs text-slate-600 pt-1">
              <a
                href="tel:+917007260391"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-indigo-100 hover:bg-indigo-50 transition-colors group"
              >
                <Phone className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wide">
                    Phone / WhatsApp
                  </div>
                  <div className="font-bold text-slate-800 group-hover:text-indigo-600">+91 7007260391</div>
                </div>
              </a>

              <a
                href="mailto:sudheersinghrajput8932@gmail.com"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-indigo-100 hover:bg-indigo-50 transition-colors group"
              >
                <Mail className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wide">
                    Official Email
                  </div>
                  <div className="font-bold text-slate-800 group-hover:text-indigo-600 break-all">
                    sudheersinghrajput8932@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-indigo-100">
                <MapPin className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wide">
                    Address
                  </div>
                  <div className="font-bold text-slate-800">
                    298B, Almari Gali, New Ashok Nagar, Delhi
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20want%20to%20start%20a%20conversation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-xs font-bold transition-all hover:scale-[1.02] text-center cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[10px] text-slate-400 text-center -mt-1">
                We usually reply within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center lg:text-left">
            © 2026 <strong className="text-slate-700">CareerNova</strong>. All rights reserved.
            <br className="lg:hidden" /> Built for businesses, brands &amp; digital growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-500">
            <button onClick={() => onNavigate('privacy' as TabId)} className="hover:text-indigo-600 cursor-pointer">Privacy Policy</button>
            <span className="text-slate-300">|</span>
            <button onClick={() => onNavigate('terms' as TabId)} className="hover:text-indigo-600 cursor-pointer">Terms of Service</button>
            <span className="text-slate-300">|</span>
            <button onClick={() => onNavigate('disclaimer' as TabId)} className="hover:text-indigo-600 cursor-pointer">Disclaimer</button>
            <span className="text-slate-300">|</span>
            <button onClick={() => onNavigate('refund' as TabId)} className="hover:text-indigo-600 cursor-pointer">Refund &amp; Cancellation</button>
            <span className="text-slate-300">|</span>
            <button onClick={() => onNavigate('cookies' as TabId)} className="hover:text-indigo-600 cursor-pointer">Cookie Policy</button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="text-base leading-none">🇮🇳</span>
              <div className="leading-tight">
                <div className="font-bold text-slate-800 text-[11px]">India</div>
                <div className="text-[10px] text-slate-400">Turning Ideas Into Opportunities</div>
              </div>
            </div>
            <button
              onClick={onOpenCreator}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-50 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Keep Growing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes footerTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-38%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          [class*="animate-[spin_"],
          [class*="animate-[footerTicker_"] {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

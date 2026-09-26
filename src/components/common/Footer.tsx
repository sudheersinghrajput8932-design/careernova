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
  Clock3,
  Bot
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
      className="relative w-full overflow-hidden bg-[#eef3ff] text-slate-700"
    >
      {/* Soft animated atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl animate-pulse" />
        <div className="absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl animate-pulse [animation-delay:900ms]" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl animate-pulse [animation-delay:1600ms]" />
      </div>

      {/* CTA / live activity area */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-0 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 px-5 py-7 shadow-[0_24px_70px_rgba(79,70,229,0.12)] backdrop-blur-xl sm:px-8 lg:px-12 lg:py-10">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-100/70 blur-2xl" />
          <div aria-hidden="true" className="absolute right-32 bottom-[-6rem] h-52 w-52 rounded-full bg-violet-100/70 blur-2xl" />

          {/* animated orbit particles */}
          <div aria-hidden="true" className="absolute right-[30%] top-8 hidden h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)] lg:block animate-bounce" />
          <div aria-hidden="true" className="absolute right-[23%] top-24 hidden h-1.5 w-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_14px_rgba(217,70,239,0.8)] lg:block animate-pulse" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-indigo-700">
                <Activity className="h-3.5 w-3.5 animate-pulse" />
                CareerNova Live
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              </div>
              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Start Your Digital
                <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Journey Today
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Build better digital products, connect the right technology and keep your business moving with CareerNova.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20want%20to%20start%20a%20conversation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  onClick={() => onNavigate('tools')}
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-3 text-xs font-black text-indigo-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
                >
                  Explore Technology
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Live AI avatar / activity visual */}
            <div className="relative mx-auto flex h-56 w-full max-w-sm items-center justify-center sm:h-64">
              <div aria-hidden="true" className="absolute h-44 w-44 rounded-full border border-indigo-200/70 animate-[spin_16s_linear_infinite]" />
              <div aria-hidden="true" className="absolute h-52 w-52 rounded-full border border-cyan-200/60 animate-[spin_22s_linear_infinite_reverse]" />
              <span aria-hidden="true" className="absolute right-[17%] top-[16%] h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(217,70,239,0.9)] animate-ping" />
              <span aria-hidden="true" className="absolute left-[17%] bottom-[17%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)] animate-pulse" />

              <div className="relative flex h-36 w-36 animate-[footerFloat_4s_ease-in-out_infinite] items-center justify-center rounded-[2rem] border border-white/90 bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 shadow-[0_20px_55px_rgba(79,70,229,0.28)]">
                <div className="absolute inset-3 rounded-[1.4rem] border border-white/20 bg-white/10 backdrop-blur-sm" />
                <Bot className="relative z-10 h-16 w-16 text-white drop-shadow-lg" />
                <span className="absolute right-5 top-5 h-3.5 w-3.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,1)]" />
              </div>

              <div className="absolute bottom-1 right-[5%] rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-[9px] font-black text-emerald-600 shadow-md">
                ● SYSTEMS ACTIVE
              </div>
            </div>
          </div>

          {/* Moving service rail */}
          <div className="relative mt-7 overflow-hidden rounded-full border border-indigo-100 bg-indigo-50/70 px-4 py-2.5">
            <div className="flex min-w-max items-center gap-7 text-[10px] font-bold text-indigo-600 animate-[footerTicker_24s_linear_infinite]">
              <span>Web Development</span><span>•</span><span>iOS Development</span><span>•</span>
              <span>Backend &amp; Cloud</span><span>•</span><span>Design &amp; Product</span><span>•</span>
              <span>Analytics &amp; Growth</span><span>•</span><span>AI &amp; Automation</span><span>•</span>
              <span>Web Development</span><span>•</span><span>AI &amp; Automation</span>
            </div>
          </div>
        </section>
      </div>

      {/* Dark navy footer body with a reference-style wave top edge */}
      <section className="relative z-10 mt-[-2rem] overflow-hidden bg-[#111a36] pt-24 text-white">
        <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-20 bg-[#eef3ff] [clip-path:ellipse(72%_100%_at_50%_0%)]" />
        <div aria-hidden="true" className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[-5rem] bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-5 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-black tracking-[0.18em] text-indigo-200">
              LEARN <span className="text-white/30">•</span> GROW <span className="text-white/30">•</span> BUILD <span className="text-white/30">•</span> SUCCEED
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />
              CareerNova systems are active
            </div>
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
                <span className="font-black text-xl text-white tracking-tight">
                  Career<span className="text-indigo-600">Nova</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Software Solution &amp; Business Growth
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              CareerNova builds digital products, software solutions, automation systems and growth strategies for businesses, brands and founders — from web and mobile development to AI, design, marketing, and ongoing technical support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white hover:bg-indigo-600 text-slate-500 hover:text-white border border-white/10 hover:border-indigo-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white hover:bg-pink-600 text-slate-500 hover:text-white border border-white/10 hover:border-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white hover:bg-red-600 text-slate-500 hover:text-white border border-white/10 hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-xl bg-white hover:bg-slate-900 text-slate-500 hover:text-white border border-white/10 hover:border-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-white hover:bg-slate-900 text-slate-500 hover:text-white border border-white/10 hover:border-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Quote */}
            <div className="relative inline-block mt-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 shadow-xs">
              <span className="absolute -top-2 left-3 text-2xl text-indigo-300 font-serif">&ldquo;</span>
              <p
                className="text-sm text-slate-200 -rotate-1"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Better People<br />Brighter Tomorrows
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-violet-600">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>Services Marketplace</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>Interactive Tools</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>Blog &amp; Guides</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-violet-600">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Web Development</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>iOS App Development</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>E-commerce Development</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>AI &amp; Automation</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>UI/UX &amp; Product Design</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Digital Marketing &amp; SEO</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Business Growth</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Maintenance &amp; Support</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer">
                  <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Technology &amp; Growth Stack</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-violet-600">
              Let's Connect
            </h4>
            <div className="space-y-3 text-xs text-slate-300 pt-1">
              <a
                href="tel:+917007260391"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/95 border-white/20 hover:bg-indigo-50 transition-colors group"
              >
                <Phone className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wide">
                    Phone / WhatsApp
                  </div>
                  <div className="font-bold text-slate-900 group-hover:text-indigo-600">+91 7007260391</div>
                </div>
              </a>

              <a
                href="mailto:sudheersinghrajput8932@gmail.com"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/95 border-white/20 hover:bg-indigo-50 transition-colors group"
              >
                <Mail className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wide">
                    Official Email
                  </div>
                  <div className="font-bold text-slate-900 group-hover:text-indigo-600 break-all">
                    sudheersinghrajput8932@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/95 border-white/20">
                <MapPin className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wide">
                    Address
                  </div>
                  <div className="font-bold text-slate-900">
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
              <p className="text-[10px] text-slate-500 text-center -mt-1">
                We usually reply within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center lg:text-left">
            © 2026 <strong className="text-slate-200">CareerNova</strong>. All rights reserved.
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
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-base leading-none">🇮🇳</span>
              <div className="leading-tight">
                <div className="font-bold text-slate-900 text-[11px]">India</div>
                <div className="text-[10px] text-slate-500">Turning Ideas Into Opportunities</div>
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
      <style>{`
        @keyframes footerTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-42%); }
        }
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          [class*="animate-[spin_"],
          [class*="animate-[footerTicker_"],
          [class*="animate-[footerFloat_"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
    </footer>
  );
};

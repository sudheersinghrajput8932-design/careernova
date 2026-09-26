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
  Bot,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { TabId } from '../../types';

interface FooterProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenCreator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreator = () => {} }) => {
  return (
    <footer id="corporate-footer" className="cn-footer relative w-full overflow-hidden text-slate-200">
      <style>{`
        .cn-footer {
          background: #0b1530;
          isolation: isolate;
        }
        .cn-footer-wave {
          position: absolute;
          top: -1px;
          left: -2%;
          width: 104%;
          height: 105px;
          background: #f8fafc;
          border-radius: 0 0 52% 48% / 0 0 100% 100%;
          z-index: 0;
        }
        .cn-footer-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 999px;
          filter: blur(70px);
          pointer-events: none;
          opacity: .24;
          animation: cnFooterDrift 12s ease-in-out infinite alternate;
        }
        .cn-footer-glow-a { background: #2563eb; top: 120px; left: -100px; }
        .cn-footer-glow-b { background: #7c3aed; right: -120px; bottom: 80px; animation-delay: -4s; }
        .cn-footer-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .cn-footer-particles span {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgba(147,197,253,.75);
          box-shadow: 0 0 14px rgba(96,165,250,.7);
          animation: cnFooterParticle 8s linear infinite;
        }
        .cn-footer-particles span:nth-child(1){left:8%;top:48%;animation-delay:-1s}
        .cn-footer-particles span:nth-child(2){left:19%;top:78%;animation-delay:-5s}
        .cn-footer-particles span:nth-child(3){left:34%;top:39%;animation-delay:-3s}
        .cn-footer-particles span:nth-child(4){left:52%;top:72%;animation-delay:-7s}
        .cn-footer-particles span:nth-child(5){left:68%;top:44%;animation-delay:-2s}
        .cn-footer-particles span:nth-child(6){left:82%;top:68%;animation-delay:-6s}
        .cn-footer-particles span:nth-child(7){left:92%;top:35%;animation-delay:-4s}
        @keyframes cnFooterParticle {
          0% { transform: translate3d(0,28px,0) scale(.6); opacity:0; }
          20% { opacity:1; }
          70% { opacity:.75; }
          100% { transform: translate3d(18px,-95px,0) scale(1); opacity:0; }
        }
        @keyframes cnFooterDrift {
          from { transform: translate3d(-15px,0,0) scale(.95); }
          to { transform: translate3d(18px,-12px,0) scale(1.08); }
        }
        .cn-footer-bot {
          animation: cnFooterBotFloat 4.8s ease-in-out infinite;
        }
        .cn-footer-bot-ring {
          animation: cnFooterRing 2.8s ease-out infinite;
        }
        @keyframes cnFooterBotFloat {
          0%,100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes cnFooterRing {
          0% { transform: scale(.78); opacity:.65; }
          80%,100% { transform: scale(1.3); opacity:0; }
        }
        .cn-footer-marquee {
          animation: cnFooterMarquee 22s linear infinite;
        }
        @keyframes cnFooterMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cn-footer-glow,
          .cn-footer-particles span,
          .cn-footer-bot,
          .cn-footer-bot-ring,
          .cn-footer-marquee { animation: none !important; }
        }
      `}</style>

      <div className="cn-footer-wave" aria-hidden="true" />
      <div className="cn-footer-glow cn-footer-glow-a" aria-hidden="true" />
      <div className="cn-footer-glow cn-footer-glow-b" aria-hidden="true" />
      <div className="cn-footer-particles" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, index) => <span key={index} />)}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-5">
        {/* Live activity / CTA panel */}
        <div className="relative overflow-hidden rounded-[28px] border border-blue-300/20 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-2xl shadow-indigo-950/30 mb-12">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,white,transparent_22%),radial-gradient(circle_at_80%_20%,#fbbf24,transparent_20%)]" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-7 px-6 py-7 sm:px-8 lg:px-10">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0 w-20 h-20 flex items-center justify-center">
                <span className="cn-footer-bot-ring absolute inset-1 rounded-full border border-white/50" />
                <div className="cn-footer-bot relative w-16 h-16 rounded-2xl bg-white/95 text-indigo-700 shadow-xl flex items-center justify-center">
                  <Bot className="w-9 h-9" />
                  <span className="absolute -right-1 -top-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-blue-100 mb-1">
                  <Activity className="w-3.5 h-3.5" /> Live CareerNova systems
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">Build something that keeps growing.</h3>
                <p className="text-sm text-blue-100 mt-1 max-w-2xl">Digital products, software solutions, automation systems and growth strategies for businesses, brands and founders.</p>
              </div>
            </div>
            <a
              href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20want%20to%20start%20a%20conversation."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-indigo-700 shadow-lg hover:scale-[1.03] transition-transform"
            >
              <Send className="w-4 h-4" /> Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Moving activity rail */}
        <div className="mb-10 overflow-hidden rounded-full border border-white/10 bg-white/[.045] py-2.5">
          <div className="cn-footer-marquee flex w-max items-center gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-[.16em] text-blue-100">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Web Development</span>
            <span>•</span><span>iOS App Development</span><span>•</span><span>AI &amp; Automation</span><span>•</span><span>UI/UX &amp; Product Design</span><span>•</span><span>Digital Marketing &amp; SEO</span><span>•</span><span>Business Growth</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Web Development</span>
            <span>•</span><span>iOS App Development</span><span>•</span><span>AI &amp; Automation</span><span>•</span><span>UI/UX &amp; Product Design</span><span>•</span><span>Digital Marketing &amp; SEO</span><span>•</span><span>Business Growth</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-10">
          {/* Brand & Bio */}
          <div className="space-y-5 lg:pr-5">
            <div onClick={() => onNavigate('home')} className="flex items-center gap-3 cursor-pointer group w-fit">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-500 to-violet-500 p-[1px] shadow-lg shadow-blue-950/30 group-hover:scale-105 transition-all">
                <div className="w-full h-full bg-[#101d3b] rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight">Career<span className="text-blue-400">Nova</span></span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200/70">Software Solution &amp; Business Growth</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">CareerNova builds digital products, software solutions, automation systems and growth strategies for businesses, brands and founders — from web and mobile development to AI, design, marketing, and ongoing technical support.</p>

            <div className="flex items-center gap-3 pt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"><Linkedin className="w-4 h-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-600 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"><Instagram className="w-4 h-4" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-600 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"><Youtube className="w-4 h-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"><Twitter className="w-4 h-4" /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"><Github className="w-4 h-4" /></a>
            </div>

            <div className="relative inline-block mt-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="absolute -top-2 left-3 text-2xl text-blue-300/70 font-serif">&ldquo;</span>
              <p className="text-sm text-blue-100 -rotate-1" style={{ fontFamily: "'Brush Script MT', cursive" }}>Better People<br />Brighter Tomorrows</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-violet-400">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-blue-400" /><span>Home</span></button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-blue-400" /><span>About Us</span></button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-blue-400" /><span>Services Marketplace</span></button></li>
              <li><button onClick={() => onNavigate('tools')} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-blue-400" /><span>Interactive Tools</span></button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-blue-400" /><span>Blog &amp; Guides</span></button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-blue-400" /><span>Contact Us</span></button></li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-violet-400">Expertise</h4>
            <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
              {[
                ['services','Web Development'],['services','iOS App Development'],['services','E-commerce Development'],['services','AI & Automation'],['services','UI/UX & Product Design'],['services','Digital Marketing & SEO'],['services','Business Growth'],['services','Maintenance & Support'],['tools','Technology & Growth Stack']
              ].map(([tab, label]) => (
                <li key={label}><button onClick={() => onNavigate(tab as TabId)} className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-violet-400 shrink-0" /><span>{label}</span></button></li>
              ))}
            </ul>
          </div>

          {/* Let's Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-violet-400">Let's Connect</h4>
            <div className="space-y-3 text-xs text-slate-300 pt-1">
              <a href="tel:+917007260391" className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"><Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" /><div><div className="text-[10px] text-blue-200/70 uppercase font-semibold tracking-wide">Phone / WhatsApp</div><div className="font-bold text-white group-hover:text-blue-300">+91 7007260391</div></div></a>
              <a href="mailto:sudheersinghrajput8932@gmail.com" className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"><Mail className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" /><div><div className="text-[10px] text-blue-200/70 uppercase font-semibold tracking-wide">Official Email</div><div className="font-bold text-white group-hover:text-violet-300 break-all">sudheersinghrajput8932@gmail.com</div></div></a>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10"><MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" /><div><div className="text-[10px] text-blue-200/70 uppercase font-semibold tracking-wide">Address</div><div className="font-bold text-white">298B, Almari Gali, New Ashok Nagar, Delhi</div></div></div>
              <a href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20want%20to%20start%20a%20conversation." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-bold transition-all hover:scale-[1.02] text-center cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-950/30"><Send className="w-3.5 h-3.5" /><span>Start a Conversation</span><ArrowRight className="w-3.5 h-3.5" /></a>
              <p className="text-[10px] text-slate-400 text-center -mt-1">We usually reply within 24 hours.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center lg:text-left">© 2026 <strong className="text-white">CareerNova</strong>. All rights reserved.<br className="lg:hidden" /> Built for businesses, brands &amp; digital growth.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <button onClick={() => onNavigate('privacy' as TabId)} className="hover:text-white cursor-pointer">Privacy Policy</button><span className="text-white/20">|</span>
            <button onClick={() => onNavigate('terms' as TabId)} className="hover:text-white cursor-pointer">Terms of Service</button><span className="text-white/20">|</span>
            <button onClick={() => onNavigate('disclaimer' as TabId)} className="hover:text-white cursor-pointer">Disclaimer</button><span className="text-white/20">|</span>
            <button onClick={() => onNavigate('refund' as TabId)} className="hover:text-white cursor-pointer">Refund &amp; Cancellation</button><span className="text-white/20">|</span>
            <button onClick={() => onNavigate('cookies' as TabId)} className="hover:text-white cursor-pointer">Cookie Policy</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5"><span className="text-base leading-none">🇮🇳</span><div className="leading-tight"><div className="font-bold text-white text-[11px]">India</div><div className="text-[10px] text-slate-500">Turning Ideas Into Opportunities</div></div></div>
            <button onClick={onOpenCreator} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-blue-300/20 text-blue-200 text-xs font-bold hover:bg-white/10 transition-all cursor-pointer"><Sparkles className="w-3.5 h-3.5" /><span>Keep Growing</span><ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

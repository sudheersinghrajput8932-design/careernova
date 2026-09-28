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
  Rocket,
  Laptop,
  Smartphone,
  Cloud,
} from 'lucide-react';
import { TabId } from '../../types';

interface FooterProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenCreator?: () => void;
}

/* ---------- Skyline data (generated once, not on every render) ---------- */
const NAVY = '#0b1530';

const HILL: [number, number][] = [
  [0, 118], [120, 112], [200, 90], [340, 64], [480, 52], [600, 62],
  [700, 84], [800, 104], [960, 108], [1100, 100], [1300, 88], [1440, 92],
];

const hillY = (x: number) => {
  for (let i = 0; i < HILL.length - 1; i++) {
    const [x1, y1] = HILL[i];
    const [x2, y2] = HILL[i + 1];
    if (x >= x1 && x <= x2) return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
  }
  return 100;
};

const smoothPath = (pts: [number, number][]) => {
  let d = `M${pts[0][0]},180 L${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  return `${d} L${pts[pts.length - 1][0]},180 Z`;
};

const HILL_PATH = smoothPath(HILL);

const BUILDINGS = [
  { x: 790, w: 26, top: 78 }, { x: 820, w: 20, top: 58 }, { x: 845, w: 30, top: 88 },
  { x: 885, w: 24, top: 74 }, { x: 912, w: 18, top: 90 },
  { x: 1052, w: 24, top: 70 }, { x: 1080, w: 20, top: 88 }, { x: 1104, w: 28, top: 56 },
  { x: 1136, w: 20, top: 76 }, { x: 1160, w: 26, top: 86 },
];

const WINDOWS = BUILDINGS.flatMap((b, bi) => {
  const out: { x: number; y: number; d: string; k: string }[] = [];
  const cols = Math.max(1, Math.floor((b.w - 6) / 7));
  const limit = hillY(b.x + b.w / 2) - 8;
  for (let r = 0; b.top + 8 + r * 10 <= limit; r++) {
    for (let c = 0; c < cols; c++) {
      const h = (bi * 31 + r * 17 + c * 13) % 9;
      if (h < 3) continue;
      out.push({ x: b.x + 4 + c * 7, y: b.top + 8 + r * 10, d: (h * 0.7).toFixed(1), k: `${bi}-${r}-${c}` });
    }
  }
  return out;
});

const TREES = [
  { x: 20, r: 9 }, { x: 46, r: 12 }, { x: 128, r: 8 }, { x: 156, r: 11 }, { x: 770, r: 9 },
  { x: 1215, r: 10 }, { x: 1246, r: 12 }, { x: 1292, r: 8 }, { x: 1398, r: 10 }, { x: 1424, r: 12 },
];

const WHEEL = { cx: 990, cy: 64, r: 44 };
const SPOKES = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);

const SOCIALS = [
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin, hover: 'hover:bg-blue-600' },
  { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram, hover: 'hover:bg-pink-600' },
  { href: 'https://youtube.com', label: 'YouTube', Icon: Youtube, hover: 'hover:bg-red-600' },
  { href: 'https://twitter.com', label: 'Twitter / X', Icon: Twitter, hover: 'hover:bg-slate-700' },
  { href: 'https://github.com', label: 'GitHub', Icon: Github, hover: 'hover:bg-slate-700' },
];

const WA_LINK = 'https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20want%20to%20start%20a%20conversation.';

const headingCls =
  "inline-flex items-center rounded-lg border border-blue-300/25 bg-gradient-to-r from-blue-600/25 via-indigo-500/25 to-violet-600/25 px-3 py-2 text-xs font-black text-white uppercase tracking-wider shadow-sm shadow-blue-950/20";

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreator = () => {} }) => {
  return (
    <footer id="corporate-footer" className="cn-footer relative w-full overflow-hidden text-slate-200">
      <style>{`
        .cn-sky { position: relative; height: clamp(110px, 12.5vw, 240px); margin-bottom: -1px; }
        .cn-body { background: ${NAVY}; isolation: isolate; }

        /* floating tiles that sit on the hills */
        .cn-tile {
          position: absolute; display: flex; align-items: center; justify-content: center;
          width: clamp(36px, 4.4vw, 64px); aspect-ratio: 1; border-radius: 18px; color: #fff;
          background: linear-gradient(135deg, #3b82f6, #7c3aed);
          box-shadow: 0 12px 26px rgba(59,130,246,.35), inset 0 1px 0 rgba(255,255,255,.35);
          animation: cnTile 5s ease-in-out infinite;
        }
        .cn-tile-cyan { background: linear-gradient(135deg, #06b6d4, #3b82f6); width: clamp(30px, 3.4vw, 50px); animation-duration: 6.5s; animation-delay: -2s; }
        .cn-tile-rocket { background: linear-gradient(135deg, #f59e0b, #ec4899 55%, #7c3aed); width: clamp(34px, 3.8vw, 56px); border-radius: 999px; animation: cnRocket 4.2s ease-in-out infinite; }
        .cn-tile-shadow { position: absolute; height: 8px; width: clamp(30px, 3.6vw, 54px); border-radius: 50%; background: rgba(11,21,48,.35); filter: blur(4px); animation: cnShadow 5s ease-in-out infinite; }
        .cn-trail { position: absolute; width: 6px; height: 6px; border-radius: 999px; background: #f59e0b; animation: cnTrail 1.8s ease-out infinite; }
        .cn-sky-dot { position: absolute; width: 6px; height: 6px; border-radius: 999px; animation: cnDot 7s ease-in-out infinite; }
        @keyframes cnTile { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-9px) rotate(2deg); } }
        @keyframes cnShadow { 0%,100% { transform: scale(1); opacity: .5; } 50% { transform: scale(.75); opacity: .25; } }
        @keyframes cnRocket { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(8px,-12px) rotate(4deg); } }
        @keyframes cnTrail { 0% { transform: translate(0,0) scale(1); opacity: .9; } 100% { transform: translate(-26px,26px) scale(.2); opacity: 0; } }
        @keyframes cnDot { 0%,100% { transform: translateY(0); opacity: .35; } 50% { transform: translateY(-14px); opacity: 1; } }

        /* skyline life */
        .cn-wheel { transform-box: fill-box; transform-origin: center; animation: cnSpin 40s linear infinite; }
        @keyframes cnSpin { to { transform: rotate(360deg); } }
        .cn-win { fill: #93c5fd; opacity: .3; animation: cnWin 4.5s ease-in-out infinite; }
        @keyframes cnWin { 0%,100% { opacity: .18; } 50% { opacity: .95; } }

        /* body background life */
        .cn-footer-glow { position: absolute; width: 320px; height: 320px; border-radius: 999px; filter: blur(70px); pointer-events: none; opacity: .24; animation: cnFooterDrift 12s ease-in-out infinite alternate; }
        .cn-footer-glow-a { background: #2563eb; top: 40px; left: -100px; }
        .cn-footer-glow-b { background: #7c3aed; right: -120px; bottom: 40px; animation-delay: -4s; }
        .cn-footer-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .cn-footer-particles span { position: absolute; width: 6px; height: 6px; border-radius: 999px; background: rgba(147,197,253,.9); box-shadow: 0 0 16px rgba(96,165,250,.85); animation: cnFooterParticle 8s linear infinite; }
        @keyframes cnFooterParticle { 0% { transform: translate3d(0,28px,0) scale(.6); opacity: 0; } 20% { opacity: 1; } 70% { opacity: .75; } 100% { transform: translate3d(18px,-95px,0) scale(1); opacity: 0; } }
        @keyframes cnFooterDrift { from { transform: translate3d(-15px,0,0) scale(.95); } to { transform: translate3d(18px,-12px,0) scale(1.08); } }

        .cn-live { position: relative; width: 8px; height: 8px; border-radius: 999px; background: #34d399; }
        .cn-live::after { content: ''; position: absolute; inset: 0; border-radius: 999px; background: #34d399; animation: cnPing 2s ease-out infinite; }
        @keyframes cnPing { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3); opacity: 0; } }

        .cn-hide-sm { display: none; }
        @media (min-width: 640px) { .cn-hide-sm { display: flex; } }

        @media (prefers-reduced-motion: reduce) {
          .cn-tile, .cn-tile-shadow, .cn-trail, .cn-sky-dot, .cn-wheel, .cn-win,
          .cn-footer-glow, .cn-footer-particles span, .cn-live::after { animation: none !important; }
        }
      `}</style>

      {/* ================= Skyline (top edge) ================= */}
      <div className="cn-sky" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 180" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
          {/* wheel sits behind the hill */}
          <g stroke={NAVY} strokeWidth="3" fill="none">
            <path d={`M${WHEEL.cx},${WHEEL.cy} L${WHEEL.cx - 24},112 M${WHEEL.cx},${WHEEL.cy} L${WHEEL.cx + 24},112`} />
            <g className="cn-wheel">
              <circle cx={WHEEL.cx} cy={WHEEL.cy} r={WHEEL.r} />
              <circle cx={WHEEL.cx} cy={WHEEL.cy} r={WHEEL.r - 10} strokeWidth="1.5" />
              {SPOKES.map((a, i) => (
                <line key={i} x1={WHEEL.cx} y1={WHEEL.cy} x2={WHEEL.cx + Math.cos(a) * WHEEL.r} y2={WHEEL.cy + Math.sin(a) * WHEEL.r} strokeWidth="1.5" />
              ))}
              {SPOKES.map((a, i) => (
                <circle key={`g${i}`} cx={WHEEL.cx + Math.cos(a) * WHEEL.r} cy={WHEEL.cy + Math.sin(a) * WHEEL.r} r="4.5" fill={NAVY} stroke="none" />
              ))}
            </g>
            <circle cx={WHEEL.cx} cy={WHEEL.cy} r="5" fill={NAVY} stroke="none" />
          </g>

          <path d={HILL_PATH} fill={NAVY} />

          {BUILDINGS.map((b, i) => (
            <rect key={i} x={b.x} y={b.top} width={b.w} height={180 - b.top} fill={NAVY} />
          ))}
          <line x1="834" y1="58" x2="834" y2="44" stroke={NAVY} strokeWidth="2" />
          <line x1="1118" y1="56" x2="1118" y2="40" stroke={NAVY} strokeWidth="2" />

          {TREES.map((t, i) => {
            const hy = hillY(t.x);
            return (
              <g key={i} fill={NAVY}>
                <line x1={t.x} y1={hy - 12} x2={t.x} y2={hy + 8} stroke={NAVY} strokeWidth="2.5" />
                <circle cx={t.x} cy={hy - 12 - t.r} r={t.r} />
              </g>
            );
          })}

          {WINDOWS.map((w) => (
            <rect key={w.k} className="cn-win" x={w.x} y={w.y} width="3" height="4" rx="0.5" style={{ animationDelay: `-${w.d}s` }} />
          ))}
        </svg>

        {/* floating elements over the hills */}
        <div className="cn-tile-shadow cn-hide-sm" style={{ left: '6.2%', bottom: '31%' }} />
        <div className="cn-tile cn-hide-sm" style={{ left: '6%', bottom: '35%' }}><Laptop className="w-1/2 h-1/2" /></div>

        <div className="cn-tile cn-tile-cyan cn-hide-sm" style={{ left: '22%', bottom: '68%' }}><Cloud className="w-1/2 h-1/2" /></div>

        <div className="cn-tile-shadow cn-hide-sm" style={{ right: '6.6%', bottom: '43%' }} />
        <div className="cn-tile cn-hide-sm" style={{ right: '6.4%', bottom: '47%', animationDelay: '-2.5s' }}><Smartphone className="w-1/2 h-1/2" /></div>

        <div className="absolute" style={{ left: '61%', top: '14%' }}>
          <span className="cn-trail" style={{ left: -6, top: 30 }} />
          <span className="cn-trail" style={{ left: -2, top: 36, animationDelay: '-.6s' }} />
          <span className="cn-trail" style={{ left: -10, top: 42, animationDelay: '-1.2s' }} />
          <div className="cn-tile cn-tile-rocket" style={{ position: 'relative' }}><Rocket className="w-1/2 h-1/2" /></div>
        </div>

        {[
          ['14%', '58%', '#60a5fa', '0s'], ['33%', '30%', '#a78bfa', '-2s'], ['48%', '22%', '#22d3ee', '-4s'],
          ['76%', '34%', '#60a5fa', '-1s'], ['88%', '20%', '#a78bfa', '-3s'],
        ].map(([l, t, c, d], i) => (
          <span key={i} className="cn-sky-dot" style={{ left: l, top: t, background: c, boxShadow: `0 0 12px ${c}`, animationDelay: d }} />
        ))}
      </div>

      {/* ================= Body ================= */}
      <div className="cn-body relative overflow-hidden">
        <div className="cn-footer-glow cn-footer-glow-a" aria-hidden="true" />
        <div className="cn-footer-glow cn-footer-glow-b" aria-hidden="true" />
        <div className="cn-footer-particles" aria-hidden="true">
          {[[6, 46, -1], [16, 70, -5], [28, 38, -3], [40, 76, -7], [52, 48, -4], [64, 68, -8], [76, 40, -2.5], [88, 72, -6.5], [95, 50, -1.5]].map(([l, t, d], i) => (
            <span key={i} style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${d}s` }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-9 lg:gap-12">
            {/* Brand (takes the newsletter slot from the reference) */}
            <div className="space-y-5 lg:pr-4">
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

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">CareerNova builds digital products, software solutions, automation systems and growth strategies for businesses, brands and founders — from web and mobile development to AI, design, marketing, and ongoing technical support.</p>

              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-950/40 transition-all hover:scale-[1.03]">
                <Send className="w-3.5 h-3.5" /> Start a Conversation <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white">Follow CareerNova</span>
                <div className="flex items-center gap-2">
                  {SOCIALS.map(({ href, label, Icon, hover }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`w-8 h-8 rounded-lg bg-white/5 ${hover} text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5`}>
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative inline-block px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="absolute -top-2 left-3 text-2xl text-blue-300/70 font-serif">&ldquo;</span>
                <p className="text-sm text-blue-100 -rotate-1" style={{ fontFamily: "'Brush Script MT', cursive" }}>Better People<br />Brighter Tomorrows</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className={headingCls}>Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
                {([
                  ['home', 'Home'], ['about', 'About Us'], ['services', 'Services Marketplace'],
                  ['tools', 'Interactive Tools'], ['blog', 'Blog & Guides'], ['contact', 'Contact Us'],
                ] as [TabId, string][]).map(([tab, label]) => (
                  <li key={label}><button onClick={() => onNavigate(tab)} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-blue-400" /><span>{label}</span></button></li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="space-y-4">
              <h4 className={headingCls}>Expertise</h4>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
                {[
                  ['services', 'Web Development'], ['services', 'iOS App Development'], ['services', 'E-commerce Development'],
                  ['services', 'AI & Automation'], ['services', 'UI/UX & Product Design'], ['services', 'Digital Marketing & SEO'],
                  ['services', 'Business Growth'], ['services', 'Maintenance & Support'], ['tools', 'Technology & Growth Stack'],
                ].map(([tab, label]) => (
                  <li key={label}><button onClick={() => onNavigate(tab as TabId)} className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer"><ArrowRight className="w-3 h-3 text-violet-400 shrink-0" /><span>{label}</span></button></li>
                ))}
              </ul>
            </div>

            {/* Let's Connect (plain text lines like the reference's Contact column) */}
            <div className="space-y-4">
              <h4 className={headingCls}>Let's Connect</h4>
              <div className="space-y-4 text-xs text-slate-300 pt-1">
                <a href="tel:+917007260391" className="flex items-start gap-2.5 group">
                  <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div><div className="font-bold text-white">Phone / WhatsApp</div><div className="group-hover:text-blue-300 transition-colors">+91 7007260391</div></div>
                </a>
                <a href="mailto:sudheersinghrajput8932@gmail.com" className="flex items-start gap-2.5 group">
                  <Mail className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  <div><div className="font-bold text-white">Official Email</div><div className="group-hover:text-violet-300 transition-colors break-all">sudheersinghrajput8932@gmail.com</div></div>
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div><div className="font-bold text-white">Address</div><div>298B, Almari Gali, New Ashok Nagar, Delhi</div></div>
                </div>
                <p className="text-[11px] text-slate-400">We usually reply within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Bottom bar: left badge / centered legal + copyright / right actions (same 3-part layout as the reference) */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-5 text-xs text-slate-400">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-8 h-[22px] shrink-0 rounded-[2px] shadow-sm" viewBox="0 0 30 20" role="img" aria-label="Indian national flag" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="20" fill="#fff" />
                <rect width="30" height="6.67" fill="#FF9933" />
                <rect y="13.33" width="30" height="6.67" fill="#138808" />
                <circle cx="15" cy="10" r="2.45" fill="none" stroke="#000080" strokeWidth="0.65" />
                <circle cx="15" cy="10" r="0.45" fill="#000080" />
                {Array.from({ length: 24 }, (_, i) => <line key={i} x1="15" y1="7.55" x2="15" y2="12.45" stroke="#000080" strokeWidth="0.28" transform={`rotate(${i * 15} 15 10)`} />)}
              </svg>
              <div className="leading-tight"><div className="text-[10px] text-slate-300">Turning Ideas Into Opportunities</div></div>
            </div>

            <div className="text-center space-y-2">
              <p>Built for businesses, brands &amp; digital growth.</p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <button onClick={() => onNavigate('privacy' as TabId)} className="hover:text-white cursor-pointer">Privacy Policy</button><span className="text-white/20">|</span>
                <button onClick={() => onNavigate('terms' as TabId)} className="hover:text-white cursor-pointer">Terms of Service</button><span className="text-white/20">|</span>
                <button onClick={() => onNavigate('disclaimer' as TabId)} className="hover:text-white cursor-pointer">Disclaimer</button><span className="text-white/20">|</span>
                <button onClick={() => onNavigate('refund' as TabId)} className="hover:text-white cursor-pointer">Refund &amp; Cancellation</button><span className="text-white/20">|</span>
                <button onClick={() => onNavigate('cookies' as TabId)} className="hover:text-white cursor-pointer">Cookie Policy</button>
              </div>
              <p>© 2026 <strong className="text-white">CareerNova</strong>. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold text-blue-100"><span className="cn-live" /> Live CareerNova systems</span>
              <button onClick={onOpenCreator} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-blue-300/20 text-blue-200 text-xs font-bold hover:bg-white/10 transition-all cursor-pointer">
                <Sparkles className="w-3.5 h-3.5" /><span>Keep Growing</span><ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

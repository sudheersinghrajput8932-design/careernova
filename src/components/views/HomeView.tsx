import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Star,
  MessageCircle,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Target,
  Rocket,
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  LineChart,
  Users,
  Zap,
  CheckCircle,
} from 'lucide-react';

import { TabId } from '../../types';
import { ParticleMeshCanvas } from '../home/ParticleMeshCanvas';
import { InfiniteMarqueeBanner } from '../home/InfiniteMarqueeBanner';
import { openAiAssistant } from '../../utils/aiAssistantTrigger';

interface HomeViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenAuth?: () => void;
}

type HeroSlide = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  stat: string;
  statLabel: string;
  visual: 'growth' | 'marketing' | 'career' | 'business';
};

const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: 'CAREERNOVA GROWTH ENGINE',
    title: (
      <>
        Turn Skills, Strategy &amp; Technology Into{' '}
        <span className="cn-hero-gradient">Leadership.</span>
      </>
    ),
    description:
      'Explore practical expertise across business analytics, digital marketing, engineering, career tools, and growth systems — built to move ideas from planning to execution.',
    stat: '500+',
    statLabel: 'Clients & Users',
    visual: 'growth',
  },
  {
    eyebrow: 'MARKETING & GROWTH ENGINE',
    title: (
      <>
        Build Campaigns That Turn{' '}
        <span className="cn-hero-gradient">Attention Into Growth.</span>
      </>
    ),
    description:
      'Plan smarter campaigns, understand your audience, improve conversion journeys, and build repeatable digital growth systems.',
    stat: '78%',
    statLabel: 'Growth Potential',
    visual: 'marketing',
  },
  {
    eyebrow: 'CAREER & STUDENT ENGINE',
    title: (
      <>
        Turn Your Skills Into A{' '}
        <span className="cn-hero-gradient">Stronger Career.</span>
      </>
    ),
    description:
      'Use practical career tools, skill planning, resume guidance, assessments, and structured roadmaps to move from learning to opportunity.',
    stat: '13+',
    statLabel: 'Expertise Areas',
    visual: 'career',
  },
  {
    eyebrow: 'BUSINESS STRATEGY ENGINE',
    title: (
      <>
        Transform Business Ideas Into{' '}
        <span className="cn-hero-gradient">Measurable Results.</span>
      </>
    ),
    description:
      'Connect business strategy, analytics, revenue planning, technology, and execution into one practical growth framework.',
    stat: '100+',
    statLabel: 'Tools & Frameworks',
    visual: 'business',
  },
];

/* ---------------------------------------------------------
   FLOATING CONTACT / SOCIAL RAIL
--------------------------------------------------------- */

const CareerNovaSocialRail = () => {
  const whatsappMessage = encodeURIComponent(
    'Hi Sudhir! I would like to discuss a CareerNova consultation.'
  );

  return (
    <>
      <style>{`
        .cn-social-rail {
          position: fixed;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 80;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cn-social-item {
          width: 43px;
          height: 43px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,.3);
          box-shadow: 0 9px 24px rgba(30,25,75,.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition:
            transform .22s ease,
            box-shadow .22s ease,
            filter .22s ease;
        }

        .cn-social-item:hover {
          transform: translateX(-5px) scale(1.06);
          box-shadow: 0 14px 30px rgba(30,25,75,.28);
          filter: brightness(1.08);
        }

        .cn-social-item svg {
          width: 19px;
          height: 19px;
        }

        .cn-social-whatsapp {
          background: linear-gradient(145deg,#25D366,#128C7E);
        }

        .cn-social-email {
          background: linear-gradient(145deg,#6366f1,#4338ca);
        }

        .cn-social-call {
          background: linear-gradient(145deg,#7c3aed,#5b21b6);
        }

        .cn-social-linkedin {
          background: linear-gradient(145deg,#0A66C2,#07529b);
        }

        .cn-social-instagram {
          background: linear-gradient(145deg,#833AB4,#E1306C,#FCAF45);
        }

        @media (max-width: 640px) {
          .cn-social-rail {
            right: 7px;
            gap: 6px;
          }

          .cn-social-item {
            width: 36px;
            height: 36px;
            border-radius: 11px;
          }

          .cn-social-item svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>

      <div className="cn-social-rail" aria-label="CareerNova contact links">
        <a
          className="cn-social-item cn-social-whatsapp"
          href={`https://wa.me/917007260391?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
        >
          <MessageCircle />
        </a>

        <a
          className="cn-social-item cn-social-email"
          href="mailto:sudheersinghrajput8932@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <Mail />
        </a>

        <a
          className="cn-social-item cn-social-call"
          href="tel:+917007260391"
          aria-label="Call"
          title="Call"
        >
          <Phone />
        </a>

        <a
          className="cn-social-item cn-social-linkedin"
          href="https://www.linkedin.com/in/sudhir-singh-rajput-2a894128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin />
        </a>

        <a
          className="cn-social-item cn-social-instagram"
          href="https://www.instagram.com/thakur_sudhir_singh_rajput?igsi=cm1oZzFlenduem45"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <Instagram />
        </a>
      </div>
    </>
  );
};

/* ---------------------------------------------------------
   HERO VISUALS
--------------------------------------------------------- */

const RocketVisual = () => (
  <div className="relative w-full h-full min-h-[350px] sm:min-h-[430px] lg:min-h-[500px] overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] rounded-full border border-violet-400/20 animate-[spin_18s_linear_infinite]" />
      <div className="absolute w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] rounded-full border border-purple-400/20 animate-[spin_12s_linear_infinite_reverse]" />

      <div className="absolute w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] rounded-full bg-violet-600/20 blur-[70px] animate-pulse" />

      <div className="relative z-10 -translate-y-4 sm:-translate-y-8">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="absolute -left-7 top-28 w-12 h-16 bg-gradient-to-br from-violet-600 to-indigo-900 rounded-l-full -rotate-12" />
          <div className="absolute -right-7 top-28 w-12 h-16 bg-gradient-to-bl from-violet-600 to-indigo-900 rounded-r-full rotate-12" />

          <div className="w-[72px] h-[150px] sm:w-[88px] sm:h-[185px] rounded-[50%_50%_38%_38%] bg-gradient-to-r from-slate-200 via-white to-violet-200 border-2 border-white/70 shadow-[0_0_35px_rgba(139,92,246,.65)] relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[48px] border-l-transparent border-r-transparent border-b-violet-500" />

            <div className="absolute top-12 sm:top-14 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950 border-[4px] border-violet-500 shadow-[0_0_20px_rgba(168,85,247,.9)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
            </div>
          </div>

          <div className="absolute top-[145px] sm:top-[178px] left-1/2 -translate-x-1/2 w-10 sm:w-14 h-24 sm:h-28">
            <div className="absolute inset-0 rounded-b-full bg-gradient-to-b from-white via-fuchsia-400 to-violet-700 blur-[2px] animate-pulse" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 sm:w-4 h-16 sm:h-20 bg-white rounded-full" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-[17%] left-1/2 -translate-x-1/2 w-[210px] sm:w-[290px] h-12 sm:h-16 rounded-[50%] border-2 border-violet-500/70 shadow-[0_0_35px_rgba(139,92,246,.7)]">
        <div className="absolute inset-3 rounded-[50%] bg-violet-500/20 blur-sm" />
      </div>
    </div>

    <div className="absolute top-[10%] left-[3%] sm:left-[4%] w-[145px] sm:w-[190px] rounded-2xl bg-slate-900/90 border border-violet-400/25 p-3 sm:p-4 shadow-2xl backdrop-blur-xl animate-[float_4s_ease-in-out_infinite]">
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-300">
        <span>Business Analytics</span>
        <BarChart3 className="w-4 h-4 text-violet-400" />
      </div>
      <div className="text-xl sm:text-2xl font-black text-white mt-2">+240%</div>
      <div className="flex items-end gap-1 h-10 mt-2">
        {[30, 48, 38, 62, 52, 78, 94].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t bg-gradient-to-t from-violet-700 to-fuchsia-400"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>

    <div className="absolute top-[14%] right-[3%] sm:right-[4%] w-[145px] sm:w-[185px] rounded-2xl bg-slate-900/90 border border-emerald-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl animate-[float_4.5s_ease-in-out_infinite]">
      <div className="text-[9px] sm:text-[10px] text-slate-400">Revenue Growth</div>
      <div className="text-xl sm:text-2xl font-black text-emerald-300 mt-2">+18.6%</div>
      <div className="text-[8px] text-slate-500 mt-1">vs previous cycle</div>
    </div>

    <div className="absolute bottom-[12%] right-[2%] sm:right-[5%] w-[160px] sm:w-[200px] rounded-2xl bg-slate-900/90 border border-fuchsia-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl animate-[float_5s_ease-in-out_infinite]">
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400">
        <span>User Engagement</span>
        <TrendingUp className="w-4 h-4 text-fuchsia-400" />
      </div>
      <div className="h-10 mt-3 relative">
        <svg viewBox="0 0 220 60" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0 43 C20 10, 32 54, 53 30 S78 12, 94 34 S120 48, 137 24 S162 13, 178 31 S200 49, 220 17"
            fill="none"
            stroke="#b24dff"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>

    <div className="absolute bottom-[25%] left-[3%] sm:left-[6%] rounded-xl bg-violet-600/90 px-3 py-2 shadow-xl">
      <div className="flex items-center gap-2">
        <Rocket className="w-4 h-4 text-white" />
        <span className="text-[9px] sm:text-[10px] font-bold text-white">Growth Engine Active</span>
      </div>
    </div>
  </div>
);

const MarketingVisual = () => (
  <div className="relative w-full h-full min-h-[350px] sm:min-h-[430px] lg:min-h-[500px] overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      {[210, 290, 370].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 18 + index * 4, repeat: Infinity, ease: 'linear' }}
          className="absolute rounded-full border border-fuchsia-400/20"
          style={{ width: size, height: size }}
        />
      ))}

      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-700 shadow-[0_0_75px_rgba(217,70,239,.6)] flex flex-col items-center justify-center text-white relative z-10">
        <Target className="w-7 h-7 sm:w-9 sm:h-9 mb-1" />
        <span className="text-[8px] tracking-[3px]">CAMPAIGN</span>
        <strong className="text-3xl sm:text-4xl font-black">78%</strong>
        <span className="text-[8px] tracking-[2px]">CONVERSION</span>
      </div>
    </div>

    <div className="absolute top-[11%] left-[3%] w-[155px] sm:w-[185px] rounded-2xl bg-slate-900/90 border border-fuchsia-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Campaign Reach</span>
      <strong className="block text-xl sm:text-2xl text-white mt-2">1.8M</strong>
      <div className="flex gap-1 items-end h-7 mt-2">
        {[35, 55, 45, 75, 95].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t bg-gradient-to-t from-fuchsia-700 to-pink-400"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>

    <div className="absolute top-[18%] right-[3%] w-[155px] sm:w-[185px] rounded-2xl bg-slate-900/90 border border-emerald-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Campaign ROI</span>
      <strong className="block text-xl sm:text-2xl text-emerald-300 mt-2">4.6x</strong>
      <span className="text-[8px] text-slate-500">Return generated</span>
    </div>

    <div className="absolute bottom-[13%] left-[4%] w-[155px] sm:w-[190px] rounded-2xl bg-slate-900/90 border border-violet-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Audience Segments</span>
      <div className="flex items-center gap-2 mt-3">
        <Users className="w-5 h-5 text-violet-400" />
        <div className="flex -space-x-2">
          {['A', 'B', 'C', 'D'].map((letter) => (
            <div key={letter} className="w-7 h-7 rounded-full bg-violet-600 border-2 border-slate-900 flex items-center justify-center text-[9px] font-bold text-white">
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-[14%] right-[3%] w-[160px] sm:w-[195px] rounded-2xl bg-slate-900/90 border border-blue-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Conversion Path</span>
      <div className="flex items-center gap-2 mt-3">
        {[1, 2, 3].map((item) => (
          <React.Fragment key={item}>
            <div className="w-7 h-7 rounded-full border border-fuchsia-400 text-fuchsia-300 flex items-center justify-center text-[9px] font-bold">
              {item}
            </div>
            {item < 3 && <div className="flex-1 h-px bg-fuchsia-400/40" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const CareerVisual = () => (
  <div className="relative w-full h-full min-h-[350px] sm:min-h-[430px] lg:min-h-[500px] overflow-hidden">
    <div className="absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-emerald-400 shadow-[0_0_18px_rgba(139,92,246,.5)]" />

    {[
      { left: '3%', num: '01', icon: <GraduationCap />, title: 'Learn', sub: 'Skills' },
      { left: '27%', num: '02', icon: <Code2 />, title: 'Build', sub: 'Projects' },
      { left: '52%', num: '03', icon: <CheckCircle />, title: 'Prove', sub: 'Ability' },
      { left: '76%', num: '04', icon: <ArrowRight />, title: 'Launch', sub: 'Career' },
    ].map((node, index) => (
      <motion.div
        key={node.num}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3 + index * .3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -translate-y-1/2 text-center w-[80px] sm:w-[100px]"
        style={{ left: node.left }}
      >
        <div className="text-[9px] text-violet-300 font-black mb-2">{node.num}</div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-900 border border-violet-300/30 shadow-[0_0_25px_rgba(124,58,237,.3)] flex items-center justify-center text-white">
          {React.cloneElement(node.icon as React.ReactElement, { className: 'w-5 h-5 sm:w-7 sm:h-7' })}
        </div>
        <strong className="block text-white text-[11px] sm:text-xs mt-2">{node.title}</strong>
        <span className="block text-slate-500 text-[8px] sm:text-[9px]">{node.sub}</span>
      </motion.div>
    ))}

    <div className="absolute top-[8%] left-[4%] w-[150px] sm:w-[185px] rounded-2xl bg-slate-900/90 border border-violet-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Skill Score</span>
      <strong className="block text-xl sm:text-2xl text-white mt-1">92%</strong>
      <div className="h-1.5 rounded-full bg-slate-700 mt-3 overflow-hidden">
        <div className="w-[92%] h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
      </div>
    </div>

    <div className="absolute top-[11%] right-[3%] w-[155px] sm:w-[190px] rounded-2xl bg-slate-900/90 border border-emerald-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Career Match</span>
      <strong className="block text-lg sm:text-xl text-emerald-300 mt-1">Excellent</strong>
      <span className="text-[8px] text-slate-500">Profile alignment</span>
    </div>

    <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[190px] sm:w-[220px] rounded-2xl bg-slate-900/90 border border-fuchsia-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl text-center">
      <span className="text-[9px] text-slate-400">Next Career Goal</span>
      <strong className="block text-sm sm:text-base text-white mt-1">Build Portfolio</strong>
      <span className="text-[8px] text-slate-500">3 milestones remaining</span>
    </div>
  </div>
);

const BusinessVisual = () => (
  <div className="relative w-full h-full min-h-[350px] sm:min-h-[430px] lg:min-h-[500px] overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      {[230, 310, 390].map((size, index) => (
        <motion.div
          key={size}
          animate={{ scale: [1, 1.04, 1], rotate: index % 2 === 0 ? [0, 360] : [360, 0] }}
          transition={{
            duration: 12 + index * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute rounded-full border border-violet-400/20"
          style={{ width: size, height: size }}
        />
      ))}

      <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-violet-600 to-indigo-950 border border-violet-300/40 shadow-[0_0_70px_rgba(124,58,237,.65)] flex flex-col items-center justify-center text-white">
        <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
        <strong className="text-lg sm:text-xl tracking-[3px]">GROWTH</strong>
        <span className="text-[8px] tracking-[4px] text-violet-200">ENGINE</span>
      </div>
    </div>

    <div className="absolute top-[10%] left-[3%] w-[155px] sm:w-[190px] rounded-2xl bg-slate-900/90 border border-violet-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Revenue</span>
      <strong className="block text-xl sm:text-2xl text-white mt-1">₹24.8L</strong>
      <span className="text-[8px] text-emerald-300">+18.6% this quarter</span>
    </div>

    <div className="absolute top-[15%] right-[3%] w-[155px] sm:w-[190px] rounded-2xl bg-slate-900/90 border border-emerald-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Market Position</span>
      <div className="h-1.5 rounded-full bg-slate-700 mt-3 overflow-hidden">
        <div className="w-[82%] h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-400" />
      </div>
      <strong className="block text-lg text-emerald-300 mt-2">82%</strong>
    </div>

    <div className="absolute bottom-[10%] left-[3%] w-[155px] sm:w-[190px] rounded-2xl bg-slate-900/90 border border-fuchsia-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Strategy Score</span>
      <strong className="block text-xl sm:text-2xl text-emerald-300 mt-1">94/100</strong>
      <div className="flex gap-1 mt-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className={`h-1.5 flex-1 rounded-full ${item === 5 ? 'bg-slate-700' : 'bg-violet-500'}`} />
        ))}
      </div>
    </div>

    <div className="absolute bottom-[11%] right-[3%] w-[155px] sm:w-[190px] rounded-2xl bg-slate-900/90 border border-blue-400/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <span className="text-[9px] text-slate-400">Execution</span>
      <strong className="block text-lg text-white mt-1">On Track</strong>
      <div className="h-1.5 rounded-full bg-slate-700 mt-3 overflow-hidden">
        <div className="w-[84%] h-full rounded-full bg-emerald-400" />
      </div>
    </div>
  </div>
);

const HeroVisual = ({ type }: { type: HeroSlide['visual'] }) => {
  if (type === 'marketing') return <MarketingVisual />;
  if (type === 'career') return <CareerVisual />;
  if (type === 'business') return <BusinessVisual />;
  return <RocketVisual />;
};

/* ---------------------------------------------------------
   HOME VIEW
--------------------------------------------------------- */

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  /* GUARANTEED AUTOPLAY - DOES NOT PAUSE ON HOVER */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  const allReviews = [
    {
      quote:
        "CareerNova's financial and break-even calculators gave us absolute clarity on our startup's unit economics before our seed round.",
      name: "Aarav Sharma",
      role: "Tech Founder & CEO",
      rating: 5,
      badge: "Startup Founder",
      category: "Tools & Finance",
    },
    {
      quote:
        "The full-stack web engineering expertise and architecture guidance helped our team scale traffic 10x without any downtime.",
      name: "Vikram Malhotra",
      role: "CTO & Lead Architect",
      rating: 5,
      badge: "Core Expertise",
      category: "Web Engineering",
    },
    {
      quote:
        "The AI career roadmap and resume analyzer tools completely transformed my interview prep. Landed an SDE role at a top product company!",
      name: "Priya Verma",
      role: "Senior Software Engineer",
      rating: 5,
      badge: "Career Roadmap",
      category: "Tools & AI",
    },
    {
      quote:
        "Incredible suite of free tools. The cold email generator and strategic positioning templates saved our sales team dozens of hours.",
      name: "Rohan Mehta",
      role: "Growth & Marketing Lead",
      rating: 5,
      badge: "B2B Outreach",
      category: "Business Strategy",
    },
    {
      quote:
        "Their custom iOS and Android app development execution is top-tier. Clean code, smooth animations, and delivered right on schedule.",
      name: "Neha Kapoor",
      role: "Product Manager",
      rating: 5,
      badge: "Core Expertise",
      category: "Mobile Apps",
    },
    {
      quote:
        "The strategic lead generation framework optimized our entire sales pipeline and doubled our monthly inbound qualified leads.",
      name: "Aditya Roy",
      role: "Head of Sales",
      rating: 5,
      badge: "Lead Generation",
      category: "Business Growth",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 animate-in fade-in duration-300">
      <CareerNovaSocialRail />

      {/* =====================================================
          NEW HERO ONLY
      ====================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-[#080a2d] border border-violet-500/30 shadow-[0_25px_80px_rgba(54,35,130,.18)] mx-0"
      >
        <style>{`
          @keyframes cn-float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          @keyframes cn-grid-pulse {
            0%,100% { opacity:.3; }
            50% { opacity:.55; }
          }

          .cn-hero-grid {
            background-image:
              linear-gradient(rgba(124,77,255,.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,77,255,.055) 1px, transparent 1px);
            background-size: 42px 42px;
            animation: cn-grid-pulse 4s ease-in-out infinite;
          }

          .cn-hero-gradient {
            background: linear-gradient(100deg,#7652ff,#c13cff,#8b5cf6);
            -webkit-background-clip:text;
            background-clip:text;
            color:transparent;
          }

          .cn-hero-content {
            animation: cn-hero-content-in .65s ease both;
          }

          @keyframes cn-hero-content-in {
            from {
              opacity:0;
              transform:translateX(-18px);
            }
            to {
              opacity:1;
              transform:translateX(0);
            }
          }

          .cn-hero-visual {
            animation: cn-hero-visual-in .7s ease both;
          }

          @keyframes cn-hero-visual-in {
            from {
              opacity:0;
              transform:scale(.96) translateX(18px);
            }
            to {
              opacity:1;
              transform:scale(1) translateX(0);
            }
          }
        `}</style>

        <div className="absolute inset-0 cn-hero-grid pointer-events-none" />

        <div className="absolute -top-40 -right-20 w-[480px] h-[480px] rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />

        <div className="absolute -bottom-40 left-[25%] w-[420px] h-[420px] rounded-full bg-fuchsia-600/10 blur-[100px] pointer-events-none" />

        <ParticleMeshCanvas />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[45%_55%] min-h-[620px]">
          {/* HERO COPY */}
          <div className="cn-hero-content flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-16 py-12 lg:py-14">
            <div className="w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-200 text-[10px] sm:text-xs font-black tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-violet-300 animate-pulse" />
              {slide.eyebrow}
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-[60px] font-black text-white tracking-[-2.5px] leading-[1.02] max-w-[650px]">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-[590px] text-sm sm:text-[15px] text-slate-300 leading-7">
              {slide.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-7">
              <button
                id="hero-explore-tools-btn"
                onClick={() => onNavigate('tools')}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-fuchsia-600 text-white font-black text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-violet-700/25 hover:-translate-y-1"
              >
                <span>Explore Tools</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-get-free-consultation-btn"
                onClick={() => openAiAssistant({ mode: 'consultation' })}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1"
              >
                <Bot className="w-4 h-4 text-violet-300" />
                <span>Get Free Consultation</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-8">
              <div>
                <strong className="block text-xl text-white">{slide.stat}</strong>
                <span className="text-[9px] text-slate-500">{slide.statLabel}</span>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div>
                <strong className="block text-xl text-white">13+</strong>
                <span className="text-[9px] text-slate-500">Expertise Areas</span>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div>
                <strong className="block text-xl text-white">100+</strong>
                <span className="text-[9px] text-slate-500">Tools & Frameworks</span>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <div>
                  <strong className="block text-xl text-white">4.9/5</strong>
                  <span className="text-[9px] text-slate-500">Client Rating</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[9px] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Free Calculators
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[9px] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                AI-Powered
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[9px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Secure
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div
            key={`visual-${activeSlide}`}
            className="cn-hero-visual relative min-h-[390px] sm:min-h-[470px] lg:min-h-[620px]"
          >
            <HeroVisual type={slide.visual} />
          </div>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-30 flex items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous hero slide"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/25 hover:bg-violet-600/60 border border-white/15 text-white flex items-center justify-center backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next hero slide"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/25 hover:bg-violet-600/60 border border-white/15 text-white flex items-center justify-center backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((heroSlide, index) => (
            <button
              key={heroSlide.eyebrow}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'w-8 bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-[0_0_12px_rgba(168,85,247,.7)]'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </motion.section>

      {/* =====================================================
          EXISTING MARQUEE - RETAINED
      ====================================================== */}

      <InfiniteMarqueeBanner />

      {/* =====================================================
          EXISTING CONTENT - RETAINED
      ====================================================== */}

      <div className="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/80 space-y-28 py-16 rounded-3xl">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 tracking-wider uppercase mb-4 inline-block">
              🚀 Strategic Growth &amp; Expertise
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
              Accelerate Your Business &amp; Career
            </h2>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Explore our core consulting disciplines, high-conversion growth strategies, and advanced technical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Full-Stack & AI Engineering',
                desc: 'Build scalable, high-speed web architectures and intelligent AI-driven workflows.',
                color: 'from-blue-500 to-indigo-600',
                bg: 'bg-blue-50',
                text: 'text-blue-600',
                tab: 'career' as TabId,
                sub: 'roadmap-guide',
              },
              {
                title: 'High-Conversion B2B Outreach',
                desc: 'Scale your sales pipeline and recruiter pitches with intelligent cold email strategies.',
                color: 'from-emerald-500 to-teal-600',
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
                tab: 'business' as TabId,
                sub: 'cold-email',
              },
              {
                title: 'Unit Economics & Break-Even',
                desc: 'Calculate precise financial metrics, burn rates, and required monthly sales targets.',
                color: 'from-purple-500 to-pink-600',
                bg: 'bg-purple-50',
                text: 'text-purple-600',
                tab: 'tools' as TabId,
                sub: 'break-even',
              },
              {
                title: 'Strategic Market Positioning',
                desc: 'Optimize your digital footprint, capture target market share, and maximize revenue growth.',
                color: 'from-amber-500 to-orange-600',
                bg: 'bg-amber-50',
                text: 'text-amber-600',
                tab: 'business' as TabId,
                sub: 'strategy',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(item.tab, item.sub)}
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-6 overflow-hidden cursor-pointer"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center font-bold text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
                  ✦
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <span className="inline-flex items-center gap-1.5 mt-5 text-indigo-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Explore Expertise <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            EXISTING SLIDING REVIEWS - RETAINED
        ====================================================== */}

        <section className="py-10 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-14 px-4">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-violet-50 text-violet-600 border border-violet-100 tracking-wider uppercase mb-4 inline-block">
              ⭐ Trusted by Leaders &amp; Engineers
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Clients Say About Our Tools &amp; Core Expertise
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Real feedback covering our free digital tools, engineering solutions, and strategic consulting.
            </p>
          </div>

          <div className="relative w-full overflow-hidden flex mask-gradient-x">
            <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 28,
                repeat: Infinity,
              }}
              className="flex gap-6 shrink-0 py-4 px-3"
            >
              {[...allReviews, ...allReviews].map((review, idx) => (
                <div
                  key={idx}
                  className="w-[340px] sm:w-[380px] bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between space-y-5 shrink-0 group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {review.category}
                        </span>

                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed italic group-hover:text-slate-900 transition-colors">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {review.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            EXISTING FINAL CTA - RETAINED
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white text-center space-y-6 shadow-2xl relative overflow-hidden mx-4 sm:mx-8"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to transform your Career or launch your Business?
            </h2>

            <p className="text-sm sm:text-base text-indigo-100 leading-relaxed font-normal">
              Join thousands of students, professionals, and founders who use CareerNova every day to reach their goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="bottom-explore-tools-btn"
              onClick={() => onNavigate('tools')}
              className="px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-indigo-700 font-black text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              Explore All Free Tools
            </button>

            <button
              id="bottom-get-free-consultation-btn"
              onClick={() => openAiAssistant({ mode: 'consultation' })}
              className="px-8 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20 flex items-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-indigo-200" />
              <span>Get Free Consultation</span>
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

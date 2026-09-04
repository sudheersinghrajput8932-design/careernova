import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  LineChart,
  Megaphone,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Lock,
  Coins,
  Target,
  TrendingUp,
  Users,
  Zap,
  Globe2,
  Layers3,
  Lightbulb,
  Presentation,
  Bot,
  Workflow,
  PieChart,
  PenTool,
} from 'lucide-react';
type HomeViewProps = {
  onNavigate: (tab: any) => void;
  onOpenAuth?: () => void;
};

const VISUAL_SPRITE = '/assets/careernova-visuals.svg';

const AssetVisual = ({ id, label, className = '', fit = 'meet', box = '0 0 220 160' }: { id: string; label?: string; className?: string; fit?: 'meet' | 'slice'; box?: string }) => (
  <svg
    className={`cn-asset-visual ${className}`}
    viewBox={box}
    preserveAspectRatio={`xMidYMid ${fit}`}
    role={label ? 'img' : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
    focusable="false"
  >
    <use href={`${VISUAL_SPRITE}#${id}`} />
  </svg>
);

/* =========================================================
   HERO DATA
========================================================= */

const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'CAREERNOVA GROWTH ENGINE',
    title: (
      <>
        Turn Skills, Strategy &
        <span> Technology Into Leadership.</span>
      </>
    ),
    description:
      'Explore practical expertise across business analytics, digital marketing, engineering, career tools and growth systems built to move ideas toward measurable outcomes.',
    type: 'growth',
  },
  {
    id: 2,
    eyebrow: 'DIGITAL MARKETING & GROWTH',
    title: (
      <>
        Build Attention.
        <span> Measure Growth.</span>
      </>
    ),
    description:
      'Turn positioning, content, campaigns and digital strategy into structured growth systems designed for consistent execution.',
    type: 'marketing',
  },
  {
    id: 3,
    eyebrow: 'BUSINESS ANALYTICS',
    title: (
      <>
        Transform Data Into
        <span> Better Decisions.</span>
      </>
    ),
    description:
      'Use financial modeling, dashboards, forecasting and analytical frameworks to understand performance and identify opportunities.',
    type: 'analytics',
  },
  {
    id: 4,
    eyebrow: 'ENGINEERING & TECHNOLOGY',
    title: (
      <>
        Build Smarter.
        <span> Scale Faster.</span>
      </>
    ),
    description:
      'From web products and APIs to automation and digital systems, create technology that supports real business objectives.',
    type: 'technology',
  },
  {
    id: 5,
    eyebrow: 'CAREER & STUDENT ENGINE',
    title: (
      <>
        Learn With Direction.
        <span> Launch With Confidence.</span>
      </>
    ),
    description:
      'Connect skills, projects, career planning and practical tools into a clearer path from learning to meaningful professional outcomes.',
    type: 'career',
  },
];

/* =========================================================
   HERO VISUALS
   No external image fetching.
   Pure professional vector illustrations.
========================================================= */

const heroImages: Record<string, string> = {
  growth: '/assets/hero-growth.png',
  marketing: '/assets/hero-marketing.png',
  analytics: '/assets/hero-analytics.png',
  technology: '/assets/hero-technology.png',
  career: '/assets/hero-career.png',
};

const HeroVisual = ({ type }: { type: string }) => {
  return (
    <motion.div className="cn-hero-visual" initial={{ opacity: 0, scale: .94, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .6, ease: 'easeOut' }}>
      <div className="cn-hero-photo-frame">
        <img
          src={heroImages[type] || heroImages.growth}
          alt={`${type} illustration`}
          className="cn-hero-photo"
          loading="eager"
        />
      </div>
    </motion.div>
  );
};

/* =========================================================
   PROCESS SECTION
========================================================= */

const ProcessSection = () => {
  const differentiators = [
    {
      title: 'One Team, Not Five Vendors',
      typical: 'Juggling separate agencies for strategy, design, code & growth',
      ours: 'Strategy, engineering, analytics and growth — one accountable team',
      icon: Users,
      avatarId: 'avatar-m1',
      persona: 'Trusted by founders',
      tone: 'tone-a',
    },
    {
      title: 'Decisions Backed By Data',
      typical: 'Recommendations based on templates or guesswork',
      ours: 'Every decision grounded in real financial and analytics modeling',
      icon: BarChart3,
      avatarId: 'avatar-f1',
      persona: 'Loved by analysts',
      tone: 'tone-b',
    },
    {
      title: 'We Build It, Not Just Plan It',
      typical: 'Slide decks and strategy PDFs that never ship',
      ours: 'Working products, tools and systems you can actually use',
      icon: Code2,
      avatarId: 'avatar-m2',
      persona: 'Backed by developers',
      tone: 'tone-c',
    },
    {
      title: 'Transparent Pricing, Always',
      typical: 'Hidden hours and surprise invoices',
      ours: 'Clear scope and honest pricing — no surprises',
      icon: ShieldCheck,
      avatarId: 'avatar-f2',
      persona: 'Trusted by clients',
      tone: 'tone-d',
    },
  ];

  return (
    <section className="cn-section cn-diff-section">
      <div className="cn-diff-particles" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </div>

      <div className="cn-section-heading">
        <span>WHY BUSINESSES CHOOSE US OVER OTHERS</span>
        <h2 className="cn-diff-heading">Not Just Another Agency. Here's The Difference.</h2>
        <p className="cn-diff-sub">
          Most agencies sell you a plan. We sell you the outcome — built,
          tested and delivered by one team you can actually reach.
        </p>
      </div>

      <div className="cn-diff-grid">
        {differentiators.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              className={`cn-diff-card ${item.tone}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -6 }}
            >
              <div className="cn-diff-top">
                <div className="cn-diff-icon">
                  <Icon size={20} />
                </div>

                <div className="cn-diff-persona">
                  <div className="cn-diff-avatar">
                    <AssetVisual id={item.avatarId} label={item.persona} fit="slice" box="0 0 160 160" />
                  </div>
                  <span>{item.persona}</span>
                </div>
              </div>

              <h3>{item.title}</h3>

              <div className="cn-diff-row cn-diff-row-no">
                <span className="cn-diff-tag">Typical agencies</span>
                <p>{item.typical}</p>
              </div>

              <div className="cn-diff-row cn-diff-row-yes">
                <span className="cn-diff-tag">CareerNova</span>
                <p>{item.ours}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
/* =========================================================
   TOOLS SECTION
========================================================= */

const toolImages: Record<string, string> = {
  analytics: '/assets/tool-analytics.png',
  marketing: '/assets/tool-marketing.png',
  engineering: '/assets/tool-engineering.png',
  career: '/assets/tool-career.png',
};

const ToolsSection = ({ onNavigate }: { onNavigate: (tab: any) => void }) => {
  const tools = [
    {
      title: 'Business Analytics',
      text: 'Turn raw numbers into financial models, live dashboards and forecasts you can act on.',
      icon: BarChart3,
      className: 'tool-purple',
      key: 'analytics',
    },
    {
      title: 'Marketing & Growth',
      text: 'Plan campaigns, build content systems and turn growth funnels into consistent digital reach.',
      icon: Megaphone,
      className: 'tool-pink',
      key: 'marketing',
    },
    {
      title: 'Engineering & Tech',
      text: 'Ship modern web apps, APIs, automation and cloud-ready systems that actually scale.',
      icon: Code2,
      className: 'tool-blue',
      key: 'engineering',
    },
    {
      title: 'Career & Student Tools',
      text: 'Map your skills, sharpen your resume and turn learning into a clear career roadmap.',
      icon: GraduationCap,
      className: 'tool-green',
      key: 'career',
    },
  ];

  return (
    <section className="cn-section cn-tools-section">
      <div className="cn-section-heading">
        <span>OUR CORE CAPABILITIES</span>
        <h2>What We Do Best</h2>
        <p>
          Practical tools and frameworks designed around real career,
          business and technology goals.
        </p>
      </div>

      <div className="cn-tools-grid">
        {tools.map((tool, index) => {
          const Icon = tool.icon;

          return (
            <motion.article
              key={tool.title}
              className={`cn-tool-card ${tool.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{
                y: -7,
                rotateX: 2,
                rotateY: index % 2 === 0 ? -2 : 2,
              }}
            >
              <div className="cn-tool-visual" aria-hidden="true">
                <img src={toolImages[tool.key]} alt="" className="cn-tool-photo" loading="lazy" />
                <div className="cn-tool-photo-overlay" />
                <div className="cn-tool-icon">
                  <Icon size={22} />
                </div>
              </div>

              <h3>{tool.title}</h3>
              <p>{tool.text}</p>

              <button onClick={() => onNavigate('tools')}>
                Explore <ArrowUpRight size={17} />
              </button>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

/* =========================================================
   CORE EXPERTISE / OFFERINGS
========================================================= */


/* =========================================================
   CORE EXPERTISE — PREMIUM LANDING SECTION
========================================================= */

const OfferingsSection = ({
  onNavigate,
}: {
  onNavigate: (tab: TabId, subTool?: string) => void;
}) => {
  const expertise = [
    {
      title: 'Business Analytics',
      text: 'Transform business data into actionable insights and smarter strategic decisions.',
      icon: BarChart3,
      className: 'cnx-purple',
      sub: 'business',
    },
    {
      title: 'Digital Marketing',
      text: 'Build data-driven campaigns, stronger positioning and measurable digital growth.',
      icon: Megaphone,
      className: 'cnx-blue',
      sub: 'strategy',
    },
    {
      title: 'Financial Modeling',
      text: 'Build practical financial models for planning, forecasting and decision support.',
      icon: Calculator,
      className: 'cnx-green',
      sub: 'break-even',
    },
    {
      title: 'Web Development',
      text: 'Modern, responsive websites and applications built with scalable technologies.',
      icon: Code2,
      className: 'cnx-orange',
      sub: 'full-stack-web-dev',
    },
    {
      title: 'Data Science & AI',
      text: 'Use intelligent analysis and AI-assisted workflows to solve practical problems.',
      icon: Bot,
      className: 'cnx-pink',
      sub: 'business-intelligence',
    },
    {
      title: 'Automation & Tools',
      text: 'Automate repetitive workflows and create smarter productivity systems.',
      icon: Zap,
      className: 'cnx-violet',
      sub: 'tools',
    },
    {
      title: 'Career & Student Growth',
      text: 'Turn learning into practical skills, stronger profiles and better opportunities.',
      icon: GraduationCap,
      className: 'cnx-cyan',
      sub: 'roadmap-guide',
    },
    {
      title: 'Strategy & Growth',
      text: 'Connect strategy, positioning and execution into a clear growth framework.',
      icon: Target,
      className: 'cnx-red',
      sub: 'strategy',
    },
  ];

  const specialists = [
    {
      name: 'Sudhir Singh',
      role: 'Principal Architect',
      image:
       '/Sudhir.png',
      className: 'cnx-specialist-purple',
      description:
        'Business intelligence, analytics, financial modelling and digital growth strategy.',
      specializations: [
        'Business Intelligence & Data Analytics',
        'Financial Modelling',
        'Digital Marketing',
        'Marketing Strategy',
      ],
      skills: [
        ['▥', 'Power BI'],
        ['SQL', 'SQL'],
        ['X', 'Excel'],
        ['⌁', 'Analytics'],
      ],
    },
    {
      name: 'Ashwani Kumar',
      role: 'Web Development Specialist',
      image:
        '/Ashwani.png',
      className: 'cnx-specialist-blue',
      description:
        'Modern web engineering across frontend technologies and enterprise backend systems.',
      specializations: [
        'JavaScript',
        'HTML & CSS',
        'PHP',
        'Java Spring Boot',
      ],
      skills: [
        ['JS', 'JavaScript'],
        ['H5', 'HTML5'],
        ['C3', 'CSS3'],
        ['PHP', 'PHP'],
        ['SB', 'Spring Boot'],
      ],
    },
    {
      name: 'Ritesh Chaurasiya',
      role: 'iOS Developer',
      image:
       '/Ritesh.png',
      className: 'cnx-specialist-pink',
      description:
        'Native Apple application development focused on smooth, reliable mobile experiences.',
      specializations: [
        'iOS Development',
        'Swift / SwiftUI',
        'Native iOS Apps',
        'App Development',
      ],
      skills: [
        ['S', 'Swift'],
        ['UI', 'SwiftUI'],
        ['X', 'Xcode'],
        ['', 'iOS'],
      ],
    },
  ];

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Proven Expertise',
      text: 'Practical experience across business, technology, analytics and growth.',
      className: 'cnx-trust-purple',
    },
    {
      icon: Target,
      title: 'Result-Oriented',
      text: 'Every solution is designed around a clear objective and measurable outcome.',
      className: 'cnx-trust-blue',
    },
    {
      icon: Lightbulb,
      title: 'Practical Solutions',
      text: 'Simple, actionable frameworks instead of unnecessary complexity.',
      className: 'cnx-trust-green',
    },
    {
      icon: Users,
      title: 'Client First',
      text: 'Clear communication, transparent thinking and long-term relationships.',
      className: 'cnx-trust-orange',
    },
    {
      icon: Lock,
      title: 'Trusted & Secure',
      text: 'Professional handling of business information and project requirements.',
      className: 'cnx-trust-pink',
    },
    {
      icon: Rocket,
      title: 'Continuous Innovation',
      text: 'Constantly improving tools, workflows and technology-led solutions.',
      className: 'cnx-trust-cyan',
    },
  ];

  const trustStats = [
    { icon: Users, value: '500+', label: 'Happy Clients', className: 'tone-purple' },
    { icon: Rocket, value: '50+', label: 'Solutions Delivered', className: 'tone-blue' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction', className: 'tone-green' },
  ];

  return (
    <section className="cnx-core-expertise">
      <style>{`
        .cnx-core-expertise {
          position: relative;
          width: 100%;
          margin-top: 70px;
          overflow: hidden;
          background: #fff;
          color: #111936;
        }

        .cnx-core-expertise *,
        .cnx-core-expertise *::before,
        .cnx-core-expertise *::after {
          box-sizing: border-box;
        }

        .cnx-core-expertise button {
          font: inherit;
        }

        .cnx-dark-expertise {
          position: relative;
          overflow: hidden;
          padding: 76px 42px 64px;
          background:
            radial-gradient(
              circle at 8% 20%,
              rgba(108, 66, 255, 0.28),
              transparent 27%
            ),
            radial-gradient(
              circle at 92% 75%,
              rgba(16, 155, 255, 0.18),
              transparent 25%
            ),
            linear-gradient(145deg, #090d2c 0%, #0b1036 52%, #080c29 100%);
        }

        .cn-dark-expertise::before {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          right: -190px;
          top: -190px;
          border-radius: 50%;
          border: 1px solid rgba(180, 125, 255, 0.16);
          box-shadow:
            0 0 0 70px rgba(180, 125, 255, 0.025),
            0 0 0 140px rgba(180, 125, 255, 0.02);
          pointer-events: none;
        }

        .cn-dark-heading {
          position: relative;
          z-index: 2;
          max-width: 850px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .cn-dark-heading .cnx-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          color: #b56dff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .cn-dark-heading .cnx-eyebrow::before,
        .cn-dark-heading .cnx-eyebrow::after {
          content: '✦';
          font-size: 12px;
        }

        .cn-dark-heading h2 {
          margin: 0;
         color: #3426a8;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -1.8px;
        }

        .cn-dark-heading p {
          max-width: 700px;
          margin: 14px auto 0;
          color: #53627a;
          font-size: 15px;
          line-height: 1.7;
        }

        .cnx-expertise-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          max-width: 1450px;
          margin: 0 auto;
        }

        .cnx-expertise-card {
          position: relative;
          min-height: 150px;
          padding: 20px 19px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 15px;
          color: #fff;
          text-align: left;
          cursor: pointer;
          box-shadow: 0 18px 45px rgba(0,0,0,.20);
          transition:
            transform .28s ease,
            box-shadow .28s ease,
            border-color .28s ease;
        }

        .cnx-expertise-card::before {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          right: -35px;
          bottom: -65px;
          border-radius: 50%;
          background: rgba(255,255,255,.13);
          filter: blur(2px);
        }

        .cnx-expertise-card::after {
          content: '';
          position: absolute;
          left: -40px;
          top: -55px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,.09);
          filter: blur(8px);
        }

        .cnx-expertise-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 28px 55px rgba(0,0,0,.30);
          border-color: rgba(255,255,255,.45);
        }

        .cnx-expertise-card h3 {
          position: relative;
          z-index: 2;
          max-width: 72%;
          margin: 0 0 8px;
          font-size: 17px;
          line-height: 1.2;
          font-weight: 900;
        }

        .cnx-expertise-card p {
          position: relative;
          z-index: 2;
          max-width: 75%;
          margin: 0;
          color: rgba(255,255,255,.88);
          font-size: 11.5px;
          line-height: 1.55;
        }

        .cnx-expertise-icon {
          position: absolute;
          z-index: 2;
          right: 18px;
          bottom: 18px;
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          border-radius: 15px;
          background: rgba(255,255,255,.18);
          border: 1px solid rgba(255,255,255,.28);
          backdrop-filter: blur(8px);
        }

        .cnx-expertise-icon svg {
          width: 31px;
          height: 31px;
        }

        .cnx-expertise-arrow {
          position: absolute;
          z-index: 3;
          left: 18px;
          bottom: 18px;
          display: grid;
          width: 29px;
          height: 29px;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: #4220a8;
          transition: transform .25s ease;
        }

        .cnx-expertise-card:hover .cnx-expertise-arrow {
          transform: translateX(4px);
        }

        .cnx-purple {
          background: linear-gradient(135deg,#4a17b8,#7137e9);
        }

        .cnx-blue {
          background: linear-gradient(135deg,#0751bd,#0b7ee9);
        }

        .cnx-green {
          background: linear-gradient(135deg,#008d62,#10b981);
        }

        .cnx-orange {
          background: linear-gradient(135deg,#e97605,#ffb31b);
        }

        .cnx-pink {
          background: linear-gradient(135deg,#c31372,#ec4899);
        }

        .cnx-violet {
          background: linear-gradient(135deg,#6e20d2,#9333ea);
        }

        .cnx-cyan {
          background: linear-gradient(135deg,#009bbd,#12b9d4);
        }

        .cnx-red {
          background: linear-gradient(135deg,#d62f35,#f05b44);
        }

        .cnx-expertise-cta {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 18px;
        }

        .cnx-expertise-cta button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 20px;
          border: 1px solid rgba(190,128,255,.8);
          border-radius: 12px;
          background: rgba(255,255,255,.035);
          color: #c981ff;
          font-size: 12px;
          font-weight: 900;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: .25s ease;
        }

        .cnx-expertise-cta button:hover {
          background: rgba(168,85,247,.13);
          transform: translateY(-2px);
        }

        /* =================================================
           SPECIALISTS
        ================================================= */

        .cnx-specialists {
          position: relative;
          padding: 58px 42px 66px;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(124,58,237,.055),
              transparent 26%
            ),
            #fff;
        }

        .cnx-light-heading {
          max-width: 820px;
          margin: 0 auto 32px;
          text-align: center;
        }

        .cnx-light-heading span {
          color: #7642ee;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.35px;
          text-transform: uppercase;
        }

        .cnx-light-heading h2 {
          margin: 7px 0 0;
          color: #10172f;
          font-size: clamp(28px, 3vw, 38px);
          line-height: 1.12;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .cnx-heading-line {
          width: 48px;
          height: 4px;
          margin: 10px auto 0;
          border-radius: 10px;
          background: linear-gradient(90deg,#6f38ff,#c047ff);
        }

        .cnx-light-heading p {
          max-width: 680px;
          margin: 11px auto 0;
          color: #69738d;
          font-size: 13px;
          line-height: 1.65;
        }

        .cnx-specialist-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          max-width: 1260px;
          margin: 0 auto;
        }

        .cnx-specialist-card {
          position: relative;
          overflow: hidden;
          min-height: 390px;
          padding: 25px 24px 20px;
          border: 1px solid;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 20px 55px rgba(31,41,91,.09);
          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .cnx-specialist-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 30px 70px rgba(31,41,91,.15);
        }

        .cnx-specialist-card::before {
          content: '';
          position: absolute;
          width: 190px;
          height: 190px;
          top: -110px;
          right: -70px;
          border-radius: 50%;
          opacity: .45;
        }

        .cnx-specialist-purple {
          border-color: #d8c8ff;
          background: linear-gradient(150deg,#fff,#faf7ff);
        }

        .cnx-specialist-purple::before {
          background: #d9c7ff;
        }

        .cnx-specialist-blue {
          border-color: #b9ddff;
          background: linear-gradient(150deg,#fff,#f5fbff);
        }

        .cnx-specialist-blue::before {
          background: #bce2ff;
        }

        .cnx-specialist-pink {
          border-color: #ffc4e1;
          background: linear-gradient(150deg,#fff,#fff7fb);
        }

        .cnx-specialist-pink::before {
          background: #ffd0e7;
        }

        .cnx-specialist-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .cnx-specialist-photo {
          flex: 0 0 105px;
          width: 105px;
          height: 105px;
          padding: 5px;
          border: 1px solid rgba(124,58,237,.22);
          border-radius: 50%;
          background: linear-gradient(145deg,#fff,#eee8ff);
          box-shadow: 0 12px 28px rgba(50,40,100,.12);
        }

        .cnx-specialist-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 50%;
        }

        .cnx-specialist-name {
          min-width: 0;
        }

        .cnx-specialist-name h3 {
          margin: 0;
          color: #111936;
          font-size: 19px;
          font-weight: 950;
          line-height: 1.15;
        }

        .cnx-specialist-name span {
          display: block;
          margin-top: 5px;
          font-size: 11px;
          font-weight: 900;
        }

        .cnx-specialist-purple .cnx-specialist-name span {
          color: #7542df;
        }

        .cnx-specialist-blue .cnx-specialist-name span {
          color: #1476d4;
        }

        .cnx-specialist-pink .cnx-specialist-name span {
          color: #d72d87;
        }

        .cnx-specialist-description {
          position: relative;
          z-index: 2;
          margin: 17px 0 12px;
          color: #69738c;
          font-size: 12px;
          line-height: 1.6;
        }

        .cnx-specializations {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 7px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .cnx-specializations li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          color: #28314c;
          font-size: 11.5px;
          font-weight: 650;
          line-height: 1.4;
        }

        .cnx-specializations li::before {
          content: '•';
          font-size: 17px;
          line-height: 11px;
        }

        .cnx-specialist-purple .cnx-specializations li::before {
          color: #7542df;
        }

        .cnx-specialist-blue .cnx-specializations li::before {
          color: #1476d4;
        }

        .cnx-specialist-pink .cnx-specializations li::before {
          color: #d72d87;
        }

        .cnx-specialist-skills {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(90,100,130,.12);
        }

        .cnx-skill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border: 1px solid #e6e8f0;
          border-radius: 9px;
          background: rgba(255,255,255,.78);
          color: #4a526b;
          font-size: 9px;
          font-weight: 850;
          box-shadow: 0 4px 12px rgba(30,40,80,.05);
        }

        .cnx-skill b {
          display: grid;
          min-width: 19px;
          height: 19px;
          padding: 2px;
          place-items: center;
          border-radius: 6px;
          background: #f0ebff;
          color: #7140dd;
          font-size: 8px;
          font-weight: 950;
        }

        .cnx-specialist-blue .cnx-skill b {
          background: #e5f3ff;
          color: #0874cc;
        }

        .cnx-specialist-pink .cnx-skill b {
          background: #ffe7f2;
          color: #d62b82;
        }

        /* =================================================
           TRUST — HERO + SOLUTIONS PANEL
        ================================================= */

        .cnx-trust-section {
          padding: 54px 42px 70px;
          border-top: 1px solid #edf0f6;
          background: linear-gradient(180deg,#fff,#fafbff);
        }

        .cnx-trust-hero {
          display: grid;
          grid-template-columns: minmax(0,460px) minmax(0,1fr);
          align-items: center;
          gap: 40px;
          max-width: 1370px;
          margin: 0 auto;
        }

        .cnx-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 999px;
          background: #f1e9ff;
          color: #7642ee;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }

        .cnx-trust-badge svg {
          width: 13px;
          height: 13px;
          fill: currentColor;
        }

        .cnx-trust-hero-title {
          margin: 16px 0 0;
          color: #10172f;
          font-size: clamp(30px, 3.6vw, 44px);
          line-height: 1.14;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .cnx-trust-hero-title span {
          background: linear-gradient(90deg,#7c3aed,#d946ef);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cnx-trust-hero .cnx-heading-line {
          margin: 16px 0;
        }

        .cnx-trust-hero-copy p {
          max-width: 460px;
          margin: 0 0 28px;
          color: #69738d;
          font-size: 14px;
          line-height: 1.75;
        }

        .cnx-trust-stats {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .cnx-trust-stat {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .cnx-trust-stat-icon {
          display: grid;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          place-items: center;
          border-radius: 13px;
        }

        .cnx-trust-stat-icon svg {
          width: 19px;
          height: 19px;
        }

        .cnx-trust-stat strong {
          display: block;
          font-size: 21px;
          font-weight: 950;
          line-height: 1.1;
        }

        .cnx-trust-stat small {
          display: block;
          margin-top: 3px;
          color: #808aa2;
          font-size: 10.5px;
          font-weight: 750;
        }

        .cnx-trust-stat.tone-purple .cnx-trust-stat-icon { background: #f0eaff; color: #7340e8; }
        .cnx-trust-stat.tone-purple strong { color: #7340e8; }
        .cnx-trust-stat.tone-blue .cnx-trust-stat-icon { background: #e8f5ff; color: #1478d4; }
        .cnx-trust-stat.tone-blue strong { color: #1478d4; }
        .cnx-trust-stat.tone-green .cnx-trust-stat-icon { background: #e8fbf1; color: #07965f; }
        .cnx-trust-stat.tone-green strong { color: #07965f; }

        .cnx-trust-divider {
          width: 1px;
          height: 34px;
          background: #e5e8f0;
        }

        .cnx-trust-hero-visual {
          display: flex;
          justify-content: center;
        }

        .cnx-trust-hero-visual img {
          width: 100%;
          max-width: 560px;
          height: auto;
          display: block;
          filter: drop-shadow(0 22px 40px rgba(60,40,140,.14));
        }

        .cnx-trust-panel {
          max-width: 1370px;
          margin: 46px auto 0;
          padding: 44px 36px 38px;
          border-radius: 30px;
          background: #fff;
          border: 1px solid #eef0f7;
          box-shadow: 0 26px 60px rgba(40,50,90,.08);
        }

        .cnx-trust-panel .cnx-light-heading {
          margin-bottom: 30px;
        }

        .cnx-trust-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0,1fr));
          gap: 16px;
        }

        .cnx-trust-item {
          min-height: 190px;
          padding: 26px 18px 22px;
          text-align: center;
          border: 1px solid;
          border-radius: 20px;
          background: #fff;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .cnx-trust-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(40,50,90,.1);
        }

        .cnx-trust-icon {
          display: grid;
          width: 54px;
          height: 54px;
          margin: 0 auto 15px;
          place-items: center;
          border-radius: 16px;
        }

        .cnx-trust-icon svg {
          width: 24px;
          height: 24px;
        }

        .cnx-trust-purple { border-color: #e7dcff; background: #faf7ff; }
        .cnx-trust-purple .cnx-trust-icon { background: linear-gradient(150deg,#8b5cf6,#7c3aed); color: #fff; }

        .cnx-trust-blue { border-color: #d3e9ff; background: #f5faff; }
        .cnx-trust-blue .cnx-trust-icon { background: #e8f5ff; color: #1478d4; }

        .cnx-trust-green { border-color: #cdf0dc; background: #f4fbf6; }
        .cnx-trust-green .cnx-trust-icon { background: #e8fbf1; color: #07965f; }

        .cnx-trust-orange { border-color: #ffe1bd; background: #fffaf3; }
        .cnx-trust-orange .cnx-trust-icon { background: #fff2df; color: #e17a00; }

        .cnx-trust-pink { border-color: #ffd3e9; background: #fff7fb; }
        .cnx-trust-pink .cnx-trust-icon { background: #ffeaf4; color: #d62c83; }

        .cnx-trust-cyan { border-color: #c9f0f6; background: #f2fcfd; }
        .cnx-trust-cyan .cnx-trust-icon { background: #e5f9fc; color: #079ab4; }

        .cnx-trust-item h3 {
          margin: 0 0 8px;
          color: #151c36;
          font-size: 14px;
          font-weight: 950;
        }

        .cnx-trust-item p {
          margin: 0;
          color: #717a91;
          font-size: 11px;
          line-height: 1.6;
        }

        .cnx-trust-underline {
          display: block;
          width: 26px;
          height: 3px;
          margin: 14px auto 0;
          border-radius: 10px;
        }

        .cnx-trust-purple .cnx-trust-underline { background: #7c3aed; }
        .cnx-trust-blue .cnx-trust-underline { background: #1478d4; }
        .cnx-trust-green .cnx-trust-underline { background: #07965f; }
        .cnx-trust-orange .cnx-trust-underline { background: #e17a00; }
        .cnx-trust-pink .cnx-trust-underline { background: #d62c83; }
        .cnx-trust-cyan .cnx-trust-underline { background: #079ab4; }

        .cnx-trust-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 34px;
        }

        .cnx-trust-btn-outline,
        .cnx-trust-btn-solid {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          border: none;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .cnx-trust-btn-outline {
          border: 1.5px solid #c9b3ff;
          background: #fff;
          color: #7340e8;
        }

        .cnx-trust-btn-solid {
          background: linear-gradient(120deg,#7c3aed,#a855f7);
          color: #fff;
          box-shadow: 0 14px 30px rgba(124,58,237,.3);
        }

        .cnx-trust-btn-outline:hover,
        .cnx-trust-btn-solid:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1100px) {
          .cnx-trust-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cnx-trust-hero-copy p {
            margin-left: auto;
            margin-right: auto;
          }

          .cnx-trust-stats {
            justify-content: center;
          }

          .cnx-trust-hero-visual {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .cnx-trust-panel {
            padding: 30px 18px 28px;
            border-radius: 22px;
          }

          .cnx-trust-stats {
            gap: 14px;
          }

          .cnx-trust-divider {
            display: none;
          }

          .cnx-trust-cta {
            flex-direction: column;
          }

          .cnx-trust-btn-outline,
          .cnx-trust-btn-solid {
            width: 100%;
            justify-content: center;
          }
        }

        /* =================================================
           CAPABILITIES
        ================================================= */

        .cnx-capabilities {
          padding: 54px 42px 68px;
          background: #fff;
        }

        .cnx-cap-hero {
          display: grid;
          grid-template-columns: minmax(0,480px) minmax(0,1fr);
          align-items: center;
          gap: 40px;
          max-width: 1370px;
          margin: 0 auto 46px;
        }

        .cnx-cap-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 999px;
          background: #f1e9ff;
          color: #7642ee;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }

        .cnx-cap-badge svg {
          width: 13px;
          height: 13px;
        }

        .cnx-cap-title {
          margin: 16px 0 0;
          color: #10172f;
          font-size: clamp(28px, 3.4vw, 40px);
          line-height: 1.16;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .cnx-cap-title .cnx-cap-highlight {
          position: relative;
          background: linear-gradient(90deg,#7c3aed,#d946ef);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cnx-cap-title .cnx-cap-highlight::after {
          content: '';
          position: absolute;
          left: 2px;
          right: 2px;
          bottom: -4px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg,#7c3aed,#d946ef);
        }

        .cnx-cap-hero-copy p {
          max-width: 470px;
          margin: 16px 0 26px;
          color: #69738d;
          font-size: 14px;
          line-height: 1.75;
        }

        .cnx-cap-points {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
        }

        .cnx-cap-point {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cnx-cap-point-icon {
          display: grid;
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 8px 18px rgba(40,50,90,.1);
        }

        .cnx-cap-point-icon svg {
          width: 16px;
          height: 16px;
        }

        .cnx-cap-point.tone-purple .cnx-cap-point-icon { color: #7340e8; }
        .cnx-cap-point.tone-blue .cnx-cap-point-icon { color: #1478d4; }
        .cnx-cap-point.tone-pink .cnx-cap-point-icon { color: #d62c83; }

        .cnx-cap-point strong {
          display: block;
          color: #151c36;
          font-size: 12.5px;
          font-weight: 950;
        }

        .cnx-cap-point span {
          display: block;
          margin-top: 2px;
          color: #838ca3;
          font-size: 11px;
          font-weight: 650;
        }

        .cnx-cap-hero-visual {
          display: flex;
          justify-content: center;
        }

        .cnx-cap-hero-visual img {
          width: 100%;
          max-width: 600px;
          height: auto;
          display: block;
          filter: drop-shadow(0 22px 40px rgba(60,40,140,.14));
        }

        .cnx-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(6,minmax(0,1fr));
          gap: 15px;
          max-width: 1370px;
          margin: 0 auto;
        }

        .cnx-capability {
          min-height: 200px;
          padding: 22px 18px;
          border: 1px solid;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .cnx-capability:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(40,50,90,.1);
        }

        .cnx-capability-icon {
          display: grid;
          width: 46px;
          height: 46px;
          margin-bottom: 13px;
          place-items: center;
          border-radius: 15px;
          background: #fff;
        }

        .cnx-capability-icon svg {
          width: 21px;
          height: 21px;
        }

        .cnx-capability h3 {
          margin: 0 0 6px;
          color: #18203b;
          font-size: 13.5px;
          font-weight: 950;
        }

        .cnx-capability p {
          margin: 0;
          color: #727b91;
          font-size: 11px;
          line-height: 1.55;
          flex: 1;
        }

        .cnx-capability-cta {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 14px;
          font-size: 11.5px;
          font-weight: 950;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .cnx-capability-cta span {
          display: grid;
          width: 26px;
          height: 26px;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          border: 1px solid;
          transition: transform .2s ease;
        }

        .cnx-capability-cta span svg {
          width: 13px;
          height: 13px;
        }

        .cnx-capability:hover .cnx-capability-cta span {
          transform: translateX(3px);
        }

        .cnx-cap-blue { border-color: #d3e9ff; background: #f5faff; }
        .cnx-cap-blue .cnx-capability-icon,
        .cnx-cap-blue .cnx-capability-cta,
        .cnx-cap-blue .cnx-capability-cta span { color: #1478d4; }
        .cnx-cap-blue .cnx-capability-cta span { border-color: #1478d4; }

        .cnx-cap-purple { border-color: #e7dcff; background: #faf7ff; }
        .cnx-cap-purple .cnx-capability-icon,
        .cnx-cap-purple .cnx-capability-cta,
        .cnx-cap-purple .cnx-capability-cta span { color: #7340e8; }
        .cnx-cap-purple .cnx-capability-cta span { border-color: #7340e8; }

        .cnx-cap-pink { border-color: #ffd3dd; background: #fff7f8; }
        .cnx-cap-pink .cnx-capability-icon,
        .cnx-cap-pink .cnx-capability-cta,
        .cnx-cap-pink .cnx-capability-cta span { color: #d6284f; }
        .cnx-cap-pink .cnx-capability-cta span { border-color: #d6284f; }

        .cnx-cap-green { border-color: #cdf0dc; background: #f4fbf6; }
        .cnx-cap-green .cnx-capability-icon,
        .cnx-cap-green .cnx-capability-cta,
        .cnx-cap-green .cnx-capability-cta span { color: #07965f; }
        .cnx-cap-green .cnx-capability-cta span { border-color: #07965f; }

        .cnx-cap-orange { border-color: #ffe1bd; background: #fffaf3; }
        .cnx-cap-orange .cnx-capability-icon,
        .cnx-cap-orange .cnx-capability-cta,
        .cnx-cap-orange .cnx-capability-cta span { color: #e17a00; }
        .cnx-cap-orange .cnx-capability-cta span { border-color: #e17a00; }

        .cnx-cap-magenta { border-color: #f6cdf3; background: #fdf4fd; }
        .cnx-cap-magenta .cnx-capability-icon,
        .cnx-cap-magenta .cnx-capability-cta,
        .cnx-cap-magenta .cnx-capability-cta span { color: #b3299b; }
        .cnx-cap-magenta .cnx-capability-cta span { border-color: #b3299b; }

        .cnx-capabilities-stats {
          max-width: 1370px;
          margin: 34px auto 0;
        }

        /* =================================================
           RESPONSIVE
        ================================================= */

        @media (max-width: 1100px) {
          .cnx-expertise-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }

          .cnx-trust-grid {
            grid-template-columns: repeat(3,minmax(0,1fr));
          }

          .cnx-capabilities-grid {
            grid-template-columns: repeat(3,minmax(0,1fr));
          }

          .cnx-cap-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cnx-cap-hero-copy p {
            margin-left: auto;
            margin-right: auto;
          }

          .cnx-cap-points {
            justify-content: center;
          }

          .cnx-cap-hero-visual {
            order: -1;
          }
        }

        @media (max-width: 820px) {
          .cnx-specialist-grid {
            grid-template-columns: 1fr;
            max-width: 560px;
          }

          .cnx-specialist-card {
            min-height: auto;
          }

          .cnx-trust-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }
        }

        @media (max-width: 640px) {
          .cn-dark-expertise,
          .cnx-specialists,
          .cnx-trust-section,
          .cnx-capabilities {
            padding-left: 17px;
            padding-right: 17px;
          }

          .cn-dark-expertise {
            padding-top: 52px;
            padding-bottom: 48px;
          }

          .cnx-expertise-grid {
            grid-template-columns: 1fr;
          }

          .cnx-expertise-card {
            min-height: 138px;
          }

          .cnx-specialist-top {
            align-items: center;
          }

          .cnx-specialist-photo {
            flex-basis: 88px;
            width: 88px;
            height: 88px;
          }

          .cnx-specialist-name h3 {
            font-size: 17px;
          }

          .cnx-trust-grid,
          .cnx-capabilities-grid {
            grid-template-columns: 1fr;
          }

          .cnx-capability {
            min-height: auto;
          }

          .cnx-cap-points {
            gap: 14px;
          }
        }
      `}</style>

      {/* =================================================
          TOP — COLORFUL CORE EXPERTISE
      ================================================= */}

      <div className="cn-dark-expertise">
        <div className="cn-dark-heading">
          <span className="cnx-eyebrow">Our Core Strength</span>

          <h2>Core Expertise</h2>

          <p>
            End-to-end capabilities that combine business thinking,
            technology, analytics and growth to turn ideas into measurable
            outcomes.
          </p>
        </div>

        <div className="cnx-expertise-grid">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.title}
                type="button"
                className={`cnx-expertise-card ${item.className}`}
                onClick={() => onNavigate('expertise', item.sub)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.045,
                  ease: 'easeOut',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="cnx-expertise-icon">
                  <Icon />
                </div>

                <span className="cnx-expertise-arrow">
                  <ArrowRight size={16} />
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="cnx-expertise-cta">
          <button
            type="button"
            onClick={() => onNavigate('expertise')}
          >
            Explore All Expertise
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* =================================================
          SPECIALISTS
      ================================================= */}

      <div className="cnx-specialists">
        <div className="cnx-light-heading">
          <span>Meet Our Specialists</span>

          <h2>Experts Driving Your Success</h2>

          <div className="cnx-heading-line" />

          <p>
            A focused team bringing together business intelligence, financial
            strategy, web engineering and native mobile development.
          </p>
        </div>

        <div className="cnx-specialist-grid">
          {specialists.map((person, index) => (
            <motion.article
              key={person.name}
              className={`cnx-specialist-card ${person.className}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.5,
                delay: index * 0.09,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="cnx-specialist-top">
                <div className="cnx-specialist-photo">
                  <img
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                    loading="lazy"
                  />
                </div>

                <div className="cnx-specialist-name">
                  <h3>{person.name}</h3>
                  <span>{person.role}</span>
                </div>
              </div>

              <p className="cnx-specialist-description">
                {person.description}
              </p>

              <ul className="cnx-specializations">
                {person.specializations.map((specialization) => (
                  <li key={specialization}>{specialization}</li>
                ))}
              </ul>

              <div className="cnx-specialist-skills">
                {person.skills.map(([shortName, label]) => (
                  <span className="cnx-skill" key={label}>
                    <b>{shortName}</b>
                    {label}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =================================================
          WHY CHOOSE CAREERNOVA
      ================================================= */}

      <div className="cnx-trust-section">
        <div className="cnx-trust-hero">
          <div className="cnx-trust-hero-copy">
            <span className="cnx-trust-badge">
              <Star size={13} />
              Why Choose CareerNova
            </span>

            <h2 className="cnx-trust-hero-title">
              Trusted Expertise.
              <br />
              Real <span>Impact.</span>
            </h2>

            <div className="cnx-heading-line" />

            <p>
              We combine practical knowledge, modern technology and a
              result-oriented approach to create solutions people can
              actually use and grow with.
            </p>

            <div className="cnx-trust-stats">
              {trustStats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <React.Fragment key={stat.label}>
                    <div className={`cnx-trust-stat ${stat.className}`}>
                      <div className="cnx-trust-stat-icon">
                        <Icon />
                      </div>

                      <div>
                        <strong>{stat.value}</strong>
                        <small>{stat.label}</small>
                      </div>
                    </div>

                    {index < trustStats.length - 1 && (
                      <span className="cnx-trust-divider" aria-hidden="true" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="cnx-trust-hero-visual">
            <img
              src="/assets/why-choose-illustration.png"
              alt="CareerNova specialist working with AI tools, web development and automation"
              loading="lazy"
            />
          </div>
        </div>

        <div className="cnx-trust-panel">
          <div className="cnx-light-heading">
            <span>What Makes Us Different</span>

            <h2>Solutions That Create Real Value</h2>

            <div className="cnx-heading-line" />
          </div>

          <div className="cnx-trust-grid">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  className={`cnx-trust-item ${point.className}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                >
                  <div className="cnx-trust-icon">
                    <Icon />
                  </div>

                  <h3>{point.title}</h3>

                  <p>{point.text}</p>

                  <span className="cnx-trust-underline" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>

          <div className="cnx-trust-cta">
            <button
              type="button"
              className="cnx-trust-btn-outline"
              onClick={() => onNavigate('expertise')}
            >
              Explore Our Services
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="cnx-trust-btn-solid"
              onClick={() => onNavigate('contact')}
            >
              Let's Work Together
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* =================================================
          CAPABILITIES / TOOLS
      ================================================= */}

      <div className="cnx-capabilities">
        <div className="cnx-cap-hero">
          <div className="cnx-cap-hero-copy">
            <span className="cnx-cap-badge">
              <Zap size={13} />
              Powerful Capabilities
            </span>

            <h2 className="cnx-cap-title">
              Everything You Need
              <br />
              to <span className="cnx-cap-highlight">Grow,</span> In One Place.
            </h2>

            <p>
              From finance to technology, we bring a powerful stack of tools,
              insights and automation to help individuals and businesses
              achieve real growth — faster and smarter.
            </p>

            <div className="cnx-cap-points">
              <div className="cnx-cap-point tone-purple">
                <div className="cnx-cap-point-icon">
                  <Rocket />
                </div>
                <div>
                  <strong>Smart Solutions</strong>
                  <span>Built for real results</span>
                </div>
              </div>

              <div className="cnx-cap-point tone-blue">
                <div className="cnx-cap-point-icon">
                  <ShieldCheck />
                </div>
                <div>
                  <strong>Trusted Platform</strong>
                  <span>Secure &amp; Reliable</span>
                </div>
              </div>

              <div className="cnx-cap-point tone-pink">
                <div className="cnx-cap-point-icon">
                  <Users />
                </div>
                <div>
                  <strong>Used by 500+</strong>
                  <span>Learners &amp; Businesses</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cnx-cap-hero-visual">
            <img
              src="/assets/capabilities-illustration.png"
              alt="CareerNova specialist surrounded by AI tools, cloud solutions, analytics, productivity, development and marketing capabilities"
              loading="lazy"
            />
          </div>
        </div>

        <div className="cnx-capabilities-grid">
          {[
            {
              icon: Coins,
              title: 'Financial Tools',
              text: 'Plan, analyse and manage your finances with clarity and confidence.',
              className: 'cnx-cap-blue',
            },
            {
              icon: PieChart,
              title: 'Analytics Tools',
              text: 'Turn data into actionable insights and make smarter decisions.',
              className: 'cnx-cap-purple',
            },
            {
              icon: Zap,
              title: 'Productivity',
              text: 'Automate tasks, organize your work and get more done every day.',
              className: 'cnx-cap-pink',
            },
            {
              icon: Bot,
              title: 'AI & Automation',
              text: 'Use intelligent workflows to scale your ideas and execution.',
              className: 'cnx-cap-green',
            },
            {
              icon: Megaphone,
              title: 'Marketing Tools',
              text: 'Reach, engage and convert the right audience effectively.',
              className: 'cnx-cap-orange',
            },
            {
              icon: Code2,
              title: 'Development',
              text: 'Build, deploy and scale modern digital products with ease.',
              className: 'cnx-cap-magenta',
            },
          ].map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.div
                className={`cnx-capability ${tool.className}`}
                key={tool.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.4,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="cnx-capability-icon">
                  <Icon />
                </div>

                <h3>{tool.title}</h3>

                <p>{tool.text}</p>

                <button
                  type="button"
                  className="cnx-capability-cta"
                  onClick={() => onNavigate('tools')}
                >
                  Explore Now
                  <span>
                    <ArrowRight />
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="cnx-capabilities-stats">
          <MetricsSection />
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   METRICS
========================================================= */

const MetricsSection = () => {
  const metrics = [
    { target: 2, suffix: '+', label: 'Years of Impact', icon: Sparkles, tone: 'metric-violet' },
    { target: 30, suffix: '+', label: 'Clients', icon: Users, tone: 'metric-blue' },
    { target: 10, suffix: '+', label: 'Expertise Areas', icon: Layers3, tone: 'metric-pink' },
    { target: 25, suffix: '+', label: 'Tools & Frameworks', icon: Workflow, tone: 'metric-cyan' },
    { target: 4.9, suffix: '/5', label: 'Client Rating', icon: Sparkles, tone: 'metric-orange' },
    { target: 3, suffix: '+', label: 'Countries Reached', icon: Globe2, tone: 'metric-green' },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(metrics.map((metric) => {
        const value = metric.target * eased;
        return metric.target === 4.9
          ? Math.min(4.9, Number(value.toFixed(1)))
          : Math.floor(value);
      }));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="cn-metrics" aria-label="CareerNova impact metrics">
      <div className="cn-metrics-blob cn-metrics-blob-a" aria-hidden="true" />
      <div className="cn-metrics-blob cn-metrics-blob-b" aria-hidden="true" />

      <div className="cn-metrics-brand">
        <span className="cn-metrics-logo">C</span>
        <div>
          <strong>
            Career<span>Nova</span>
          </strong>
          <p>Tools Today. Brighter Tomorrows.</p>
        </div>
      </div>

      {metrics.map((metric, index) => {
        const Icon = metric.icon;

        return (
          <motion.div
            className={`cn-metric ${metric.tone}`}
            key={metric.label}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <div className="cn-metric-icon">
              <Icon size={18} />
            </div>
            <strong>
              {metric.target === 4.9
                ? counts[index].toFixed(1)
                : counts[index]}
              {metric.suffix}
            </strong>
            <span>{metric.label}</span>
          </motion.div>
        );
      })}
    </section>
  );
};

/* =========================================================
   REVIEW AVATARS
========================================================= */

/* =========================================================
   REVIEWS
========================================================= */

const REVIEWS = [
  {
    category: 'Career Planning',
    quote:
      'The resume and career planning tools made my preparation much more structured than generic career advice.',
    name: 'Aarav Mehta',
    role: 'Student & Career Builder',
    gender: 'male',
    className: 'review-blue',
  },
  {
    category: 'Business Analytics',
    quote:
      'The analytics and strategy approach helped us look at our business numbers with much more clarity and confidence.',
    name: 'Riya Kapoor',
    role: 'Startup Founder',
    gender: 'female',
    className: 'review-purple',
  },
  {
    category: 'Digital Marketing',
    quote:
      'The digital growth guidance was focused on practical execution rather than just theory. That made a big difference.',
    name: 'Karan Singh',
    role: 'Growth Professional',
    gender: 'male',
    className: 'review-green',
  },
  {
    category: 'Technology',
    quote:
      'The technology guidance helped us turn a rough idea into a much clearer digital product direction.',
    name: 'Ananya Sharma',
    role: 'Product Learner',
    gender: 'female',
    className: 'review-orange',
  },
  {
    category: 'AI & Automation',
    quote:
      'The AI and automation concepts were practical and easy to understand. I could immediately see where they fit.',
    name: 'Vikram Rao',
    role: 'Business Professional',
    gender: 'male',
    className: 'review-cyan',
  },
  {
    category: 'Business Strategy',
    quote:
      'The structured approach gave us clarity on priorities, execution and the next steps for sustainable growth.',
    name: 'Neha Verma',
    role: 'Entrepreneur',
    gender: 'female',
    className: 'review-pink',
  },
];

/* =========================================================
   REVIEW CARD
========================================================= */

const ReviewCard = ({ review }: { review: (typeof REVIEWS)[number] }) => {
  const avatarMap: Record<string, string> = {
    'Aarav Mehta': 'avatar-m1', 'Riya Kapoor': 'avatar-f1', 'Karan Singh': 'avatar-m2',
    'Ananya Sharma': 'avatar-f2', 'Vikram Rao': 'avatar-m3', 'Neha Verma': 'avatar-f3',
  };
  return (
  <motion.article
    className={`cn-review-card ${review.className}`}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
  >
    <div className="cn-review-top">
      <div className="cn-stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <div className="cn-quote-mark">“</div>
    </div>

    <span className="cn-review-category">{review.category}</span>

    <p className="cn-review-text">“{review.quote}”</p>

    <div className="cn-review-person">
      <div className="cn-avatar">
        <AssetVisual id={avatarMap[review.name] || (review.gender === 'male' ? 'avatar-m1' : 'avatar-f1')} label={`${review.gender} profile avatar`} fit="slice" box="0 0 160 160" />
      </div>

      <div>
        <strong>{review.name}</strong>
        <span>{review.role}</span>
      </div>
    </div>
  </motion.article>
  );
};

/* =========================================================
   REVIEWS SECTION
========================================================= */

const ReviewsSection = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReview = () => {
    setDirection(1);
    setReviewIndex((current) => (current + 1) % REVIEWS.length);
  };

  const previousReview = () => {
    setDirection(-1);
    setReviewIndex(
      (current) => (current - 1 + REVIEWS.length) % REVIEWS.length,
    );
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setReviewIndex((current) => (current + 1) % REVIEWS.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  const visibleReviews = [0, 1, 2].map(
    (offset) => REVIEWS[(reviewIndex + offset) % REVIEWS.length],
  );

  const slideVariants = {
    enter: (slideDirection: number) => ({
      x: slideDirection > 0 ? '105%' : '-105%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (slideDirection: number) => ({
      x: slideDirection > 0 ? '-105%' : '105%',
      opacity: 0,
    }),
  };

  return (
    <section className="cn-reviews-section">
      <div className="cn-section-heading">
        <span>TRUSTED BY LEARNERS & LEADERS</span>
        <h2>What People Say About CareerNova</h2>
        <p>
          Practical tools, structured guidance and measurable outcomes built
          around real career and business goals.
        </p>
      </div>

      <div className="cn-review-slider">
        <button
          className="cn-review-nav left"
          onClick={previousReview}
          aria-label="Previous reviews"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="cn-review-viewport">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="sync"
          >
            <motion.div
              key={reviewIndex}
              className="cn-review-track"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.35 },
              }}
            >
              {visibleReviews.map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="cn-review-nav right"
          onClick={nextReview}
          aria-label="Next reviews"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="cn-review-dots">
        {REVIEWS.map((_, index) => (
          <button
            key={index}
            className={index === reviewIndex ? 'active' : ''}
            onClick={() => {
              setDirection(index >= reviewIndex ? 1 : -1);
              setReviewIndex(index);
            }}
            aria-label={`Review ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/* =========================================================
   CTA
========================================================= */

const FinalCTA = ({ onNavigate }: { onNavigate: (tab: any) => void }) => (
  <section className="cn-final-cta">
    <div>
      <span>READY TO MOVE FORWARD?</span>
      <h2>Turn Your Next Idea Into Real Progress.</h2>
      <p>
        Explore the tools, expertise and practical systems designed to help
        you learn, build, grow and lead.
      </p>
    </div>

    <button onClick={() => onNavigate('tools')}>
      Explore Core Tools
      <ArrowRight size={19} />
    </button>
  </section>
);

/* =========================================================
   RIGHT SOCIAL RAIL
   Real brand-style SVG marks, no external image fetch.
========================================================= */

const SocialRail = () => (
  <aside className="cn-social-rail" aria-label="CareerNova social links">
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="cn-social-link whatsapp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5A11.7 11.7 0 0 0 12.15.05C5.7.05.45 5.3.45 11.75c0 2.06.54 4.08 1.56 5.84L.35 23.95l6.51-1.62a11.7 11.7 0 0 0 5.28 1.26h.01c6.45 0 11.7-5.25 11.7-11.7 0-3.13-1.22-6.07-3.35-8.39ZM12.15 21.55h-.01a9.7 9.7 0 0 1-4.94-1.35l-.35-.2-3.86.96 1.03-3.76-.23-.38a9.68 9.68 0 0 1-1.49-5.07c0-5.35 4.35-9.7 9.7-9.7 2.59 0 5.03 1.01 6.86 2.84a9.64 9.64 0 0 1 2.84 6.87c0 5.34-4.35 9.69-9.7 9.69Zm5.32-7.26c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.58-.89-2.17-.23-.57-.47-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 0.98-1 2.39s1.02 2.77 1.16 2.96c.15.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" />
      </svg>
    </a>

    <a
      href="mailto:"
      aria-label="Email"
      className="cn-social-link email"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Zm0 2.15v.1l8.5 5.43 8.5-5.43v-.1h-17Zm17 1.89-7.98 5.1a1 1 0 0 1-1.04 0L3.5 9.54V17h17V9.54Z" />
      </svg>
    </a>

    <a
      href="tel:"
      aria-label="Phone"
      className="cn-social-link phone"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 2.5h2.1c.45 0 .84.3.96.74l.91 3.37c.1.37-.02.76-.3 1.02L8.95 8.97a15.7 15.7 0 0 0 6.08 6.08l1.34-1.34c.26-.26.65-.38 1.02-.28l3.37.9c.44.12.74.52.74.97v2.08c0 .64-.52 1.16-1.16 1.16C11.45 18.54 5.46 12.55 4.46 3.66 4.39 3.03 4.88 2.5 5.51 2.5h1.11Z" />
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="cn-social-link linkedin"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.12 3.5A2.12 2.12 0 1 1 5.1 7.74 2.12 2.12 0 0 1 5.12 3.5ZM3.25 8.9h3.75V21H3.25V8.9Zm5.95 0h3.6v1.65h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.73V21h-3.75v-5.92c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.53-2.27 3.12V21H9.2V8.9Z" />
      </svg>
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="cn-social-link instagram"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.7" r="1.2" fill="currentColor" />
      </svg>
    </a>
  </aside>
);

/* =========================================================
   HOME VIEW
========================================================= */

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  const slide = HERO_SLIDES[activeSlide];

  useEffect(() => {
    if (isHeroPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isHeroPaused]);

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  };

  return (
    <>
      <style>{`
        .cn-home {
          width: 100%;
          max-width: 100%;
          position: relative;
          overflow: hidden;
          color: #111936;
        }

        .cn-home *,
        .cn-home *::before,
        .cn-home *::after {
          box-sizing: border-box;
        }

        /* =================================================
           HERO
        ================================================= */

        .cn-hero {
          position: relative;
          min-height: 380px;
          border-radius: 30px;
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 25%, rgba(124,58,237,.24), transparent 25%),
            radial-gradient(circle at 65% 85%, rgba(37,99,235,.18), transparent 28%),
            linear-gradient(135deg,#080b2d 0%,#111445 48%,#18114b 100%);
          border: 1px solid rgba(124,58,237,.28);
          box-shadow: 0 30px 80px rgba(40,30,100,.18);
        }

        .cn-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .42;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .cn-hero::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          right: -190px;
          top: -170px;
          border: 1px solid rgba(168,85,247,.18);
          box-shadow:
            0 0 0 50px rgba(168,85,247,.025),
            0 0 0 100px rgba(168,85,247,.018);
          pointer-events: none;
        }

        .cn-hero-inner {
          position: relative;
          z-index: 3;
          min-height: 380px;
          padding: 34px 48px 40px;
          display: grid;
          grid-template-columns: minmax(0,1.05fr) minmax(360px,.95fr);
          align-items: center;
          gap: 30px;
        }

        .cn-hero-copy {
          max-width: 680px;
        }

        .cn-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 17px;
          border-radius: 999px;
          border: 1px solid rgba(168,85,247,.42);
          background: rgba(124,58,237,.11);
          color: #d8c8ff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.25px;
        }

        .cn-hero-eyebrow svg {
          width: 18px;
        }

        .cn-hero-title {
          margin: 16px 0 12px;
          max-width: 730px;
          color: #fff;
          font-size: clamp(34px,3.6vw,56px);
          line-height: 1.04;
          letter-spacing: -2px;
          font-weight: 850;
        }

        .cn-hero-title span {
          display: inline;
          color: #a855f7;
          background: linear-gradient(90deg,#a855f7,#8b5cf6,#38bdf8);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cn-hero-description {
          max-width: 650px;
          color: #bdc5df;
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
        }

        .cn-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        .cn-hero-primary,
        .cn-hero-secondary {
          height: 54px;
          padding: 0 20px;
          border-radius: 15px;
          border: 1px solid transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          font-weight: 800;
          font-size: 14px;
          transition: .25s ease;
        }

        .cn-hero-primary {
          color: #fff;
          background: linear-gradient(100deg,#6738ff,#a42cff);
          box-shadow: 0 12px 35px rgba(124,58,237,.35);
        }

        .cn-hero-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 17px 40px rgba(124,58,237,.45);
        }

        .cn-hero-secondary {
          color: #fff;
          background: rgba(255,255,255,.035);
          border-color: rgba(255,255,255,.18);
        }

        .cn-hero-secondary:hover {
          background: rgba(255,255,255,.08);
          transform: translateY(-3px);
        }

        /* Hero vector */

        .cn-hero-visual {
          min-height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .cn-vector-scene {
          width: min(430px,100%);
          height: 340px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cn-vector-core {
          width: 165px;
          height: 165px;
          border-radius: 38px;
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          background:
            linear-gradient(145deg,rgba(124,58,237,.92),rgba(37,99,235,.7));
          border: 1px solid rgba(255,255,255,.24);
          box-shadow:
            0 30px 60px rgba(0,0,0,.35),
            inset 0 1px 0 rgba(255,255,255,.2);
          animation: cn-core-float 3s ease-in-out infinite;
        }

        .cn-core-bars {
          height: 28px;
          display: flex;
          align-items: end;
          gap: 4px;
          margin-top: 10px;
        }

        .cn-core-bars i {
          display: block;
          width: 6px;
          border-radius: 4px;
          background: #fff;
        }

        .cn-core-bars i:nth-child(1) { height: 8px; }
        .cn-core-bars i:nth-child(2) { height: 15px; }
        .cn-core-bars i:nth-child(3) { height: 22px; }
        .cn-core-bars i:nth-child(4) { height: 13px; }
        .cn-core-bars i:nth-child(5) { height: 27px; }

        .cn-orbit,
        .cn-marketing-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(168,85,247,.28);
        }

        .orbit-a {
          width: 310px;
          height: 145px;
          transform: rotate(-22deg);
          animation: cn-orbit-spin 9s linear infinite;
        }

        .orbit-b {
          width: 390px;
          height: 185px;
          transform: rotate(28deg);
          border-color: rgba(56,189,248,.2);
          animation: cn-orbit-spin-reverse 12s linear infinite;
        }

        .ring-one {
          width: 315px;
          height: 315px;
          border-color: rgba(236,72,153,.25);
          animation: cn-ring-pulse 4s ease-in-out infinite;
        }

        .ring-two {
          width: 405px;
          height: 190px;
          transform: rotate(-30deg);
          border-color: rgba(168,85,247,.28);
        }

        .cn-floating-node {
          width: 62px;
          height: 62px;
          border-radius: 19px;
          position: absolute;
          z-index: 6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: rgba(18,20,67,.86);
          border: 1px solid rgba(168,85,247,.48);
          box-shadow: 0 18px 35px rgba(0,0,0,.28);
          animation: cn-node-float 3.5s ease-in-out infinite;
        }

        .cn-floating-node.node-one {
          top: 42px;
          right: 52px;
        }

        .cn-floating-node.node-two {
          bottom: 50px;
          right: 16px;
          animation-delay: .7s;
        }

        .cn-floating-node.node-three {
          left: 30px;
          bottom: 90px;
          animation-delay: 1.2s;
        }

        .cn-chart-grid {
          position: absolute;
          inset: 60px 35px;
          background:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
          background-size: 38px 38px;
          border-radius: 30px;
        }

        .cn-chart-line {
          position: absolute;
          width: 330px;
          height: 150px;
          left: 48px;
          top: 90px;
          transform: rotate(-5deg);
        }

        .cn-chart-line::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          top: 60%;
          transform: rotate(-10deg);
          background: linear-gradient(90deg,#8b5cf6,#38bdf8,#34d399);
          box-shadow: 0 0 15px rgba(56,189,248,.6);
        }

        .cn-chart-line i {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 15px #8b5cf6;
        }

        .cn-chart-line i:nth-child(1) { left: 4%; top: 78%; }
        .cn-chart-line i:nth-child(2) { left: 22%; top: 68%; }
        .cn-chart-line i:nth-child(3) { left: 40%; top: 75%; }
        .cn-chart-line i:nth-child(4) { left: 58%; top: 47%; }
        .cn-chart-line i:nth-child(5) { left: 76%; top: 34%; }
        .cn-chart-line i:nth-child(6) { left: 94%; top: 16%; }

        .cn-mini-chart {
          display: flex;
          align-items: end;
          height: 25px;
          gap: 4px;
          margin-top: 9px;
        }

        .cn-mini-chart b {
          width: 7px;
          border-radius: 3px;
          background: #fff;
        }

        .cn-mini-chart b:nth-child(1) { height: 8px; }
        .cn-mini-chart b:nth-child(2) { height: 13px; }
        .cn-mini-chart b:nth-child(3) { height: 18px; }
        .cn-mini-chart b:nth-child(4) { height: 24px; }

        .cn-tech-network {
          position: absolute;
          inset: 30px;
        }

        .cn-tech-network::before,
        .cn-tech-network::after {
          content: "";
          position: absolute;
          left: 10%;
          top: 50%;
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg,transparent,#7c3aed,#38bdf8,transparent);
          transform: rotate(25deg);
        }

        .cn-tech-network::after {
          transform: rotate(-25deg);
        }

        .cn-tech-network span {
          width: 13px;
          height: 13px;
          position: absolute;
          border-radius: 50%;
          background: #8b5cf6;
          box-shadow: 0 0 18px #8b5cf6;
          animation: cn-network-pulse 2s ease-in-out infinite;
        }

        .cn-tech-network .t1 { left: 8%; top: 23%; }
        .cn-tech-network .t2 { right: 12%; top: 17%; animation-delay: .3s; }
        .cn-tech-network .t3 { left: 5%; bottom: 20%; animation-delay: .6s; }
        .cn-tech-network .t4 { right: 8%; bottom: 22%; animation-delay: .9s; }
        .cn-tech-network .t5 { left: 50%; top: 5%; animation-delay: 1.2s; }
        .cn-tech-network .t6 { left: 50%; bottom: 4%; animation-delay: 1.5s; }

        .cn-code-lines {
          width: 75px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 9px;
        }

        .cn-code-lines i {
          height: 4px;
          border-radius: 5px;
          background: rgba(255,255,255,.8);
        }

        .cn-code-lines i:nth-child(2) { width: 60%; }
        .cn-code-lines i:nth-child(3) { width: 82%; }

        .cn-career-path {
          position: absolute;
          width: 390px;
          height: 120px;
          border-bottom: 2px dashed rgba(168,85,247,.35);
          border-radius: 50%;
          transform: rotate(-12deg);
        }

        .cn-career-path span {
          position: absolute;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: #8b5cf6;
          box-shadow: 0 0 20px rgba(168,85,247,.7);
        }

        .cn-career-path span:nth-child(1) { left: 3%; bottom: 3%; }
        .cn-career-path span:nth-child(2) { left: 30%; bottom: 30%; }
        .cn-career-path span:nth-child(3) { left: 60%; bottom: 65%; }
        .cn-career-path span:nth-child(4) { right: 3%; bottom: 95%; }

        .cn-career-checks {
          display: flex;
          gap: 7px;
          margin-top: 9px;
        }

        .cn-career-checks i {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,.13);
        }

        .cn-slider-arrows {
          position: absolute;
          right: 32px;
          top: 30px;
          z-index: 10;
          display: flex;
          gap: 9px;
        }

        .cn-slider-arrows button {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          color: #fff;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.18);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: .25s ease;
        }

        .cn-slider-arrows button:hover {
          background: rgba(124,58,237,.4);
          transform: translateY(-2px);
        }

        .cn-slide-dots {
          position: absolute;
          z-index: 10;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
        }

        .cn-slide-dots button {
          width: 8px;
          height: 8px;
          padding: 0;
          border: 0;
          border-radius: 99px;
          background: rgba(255,255,255,.3);
          cursor: pointer;
          transition: .25s ease;
        }

        .cn-slide-dots button.active {
          width: 29px;
          background: linear-gradient(90deg,#8b5cf6,#38bdf8);
        }

        /* =================================================
           COMMON SECTIONS
        ================================================= */

        .cn-section {
          margin-top: 70px;
        }

        .cn-section-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .cn-section-heading.left {
          text-align: left;
        }

        .cn-section-heading > span {
          display: inline-block;
          color: #633cff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.8px;
          margin-bottom: 9px;
        }

        .cn-section-heading h2 {
          margin: 0;
          color: #111936;
          font-size: clamp(32px,4vw,49px);
          letter-spacing: -2px;
          line-height: 1.05;
          font-weight: 800;
        }

        .cn-section-heading p {
          margin: 12px auto 0;
          max-width: 760px;
          color: #617099;
          font-size: 16px;
          line-height: 1.7;
        }

        .cn-section-heading.left p {
          margin-left: 0;
        }

        /* =================================================
           PROCESS
        ================================================= */

       /* ===== PREMIUM PROCESS SECTION ===== */

.cn-diff-section {
  position: relative;
  overflow: hidden;
  padding: 58px 46px 54px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 12% 15%, rgba(139, 92, 246, 0.22), transparent 30%),
    radial-gradient(circle at 88% 85%, rgba(56, 189, 248, 0.16), transparent 32%),
    linear-gradient(150deg, #0a0d2e 0%, #12123f 55%, #180f38 100%);
  border: 1px solid rgba(139, 92, 246, 0.25);
  box-shadow: 0 30px 70px rgba(25, 15, 70, 0.22);
}

.cn-diff-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.cn-diff-particles span {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(196, 181, 253, 0.55);
  animation: cnDiffFloat 6s ease-in-out infinite;
}

.cn-diff-particles span:nth-child(1) { left: 8%; top: 20%; animation-delay: 0s; }
.cn-diff-particles span:nth-child(2) { left: 22%; top: 70%; animation-delay: .8s; background: rgba(103,232,249,.5); }
.cn-diff-particles span:nth-child(3) { left: 48%; top: 12%; animation-delay: 1.6s; }
.cn-diff-particles span:nth-child(4) { left: 68%; top: 60%; animation-delay: 2.4s; background: rgba(244,114,182,.5); }
.cn-diff-particles span:nth-child(5) { left: 84%; top: 25%; animation-delay: 3.2s; }
.cn-diff-particles span:nth-child(6) { left: 92%; top: 75%; animation-delay: 4s; background: rgba(103,232,249,.5); }

@keyframes cnDiffFloat {
  0%, 100% { transform: translateY(0) scale(1); opacity: .5; }
  50% { transform: translateY(-22px) scale(1.4); opacity: 1; }
}

.cn-diff-heading {
  color: #fff !important;
}

.cn-diff-section .cn-section-heading > span {
  color: #c4b5fd !important;
}

.cn-diff-sub {
  color: #b9c0e0 !important;
}

.cn-diff-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.cn-diff-card {
  position: relative;
  padding: 22px 20px 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 40px rgba(10, 8, 40, 0.25);
  transition: border-color .3s ease, box-shadow .3s ease;
}

.cn-diff-card:hover {
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: 0 24px 55px rgba(10, 8, 40, 0.35);
}

.cn-diff-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.cn-diff-icon {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #fff;
}

.tone-a .cn-diff-icon { background: linear-gradient(135deg,#7c3aed,#a855f7); }
.tone-b .cn-diff-icon { background: linear-gradient(135deg,#0ea5e9,#38bdf8); }
.tone-c .cn-diff-icon { background: linear-gradient(135deg,#db2777,#ec4899); }
.tone-d .cn-diff-icon { background: linear-gradient(135deg,#059669,#10b981); }

.cn-diff-persona {
  display: flex;
  align-items: center;
  gap: 7px;
}

.cn-diff-avatar {
  width: 26px;
  height: 26px;
  flex: 0 0 26px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
}

.cn-diff-avatar .cn-asset-visual {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.cn-diff-persona span {
  color: rgba(255, 255, 255, 0.55);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: .2px;
  max-width: 78px;
  line-height: 1.25;
}

.cn-diff-card h3 {
  margin: 0 0 14px;
  color: #fff;
  font-size: 17px;
  font-weight: 850;
  line-height: 1.25;
  letter-spacing: -.2px;
}

.cn-diff-row {
  padding: 10px 12px;
  border-radius: 12px;
  margin-bottom: 8px;
}

.cn-diff-row:last-child {
  margin-bottom: 0;
}

.cn-diff-row-no {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.cn-diff-row-no p {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: line-through;
  text-decoration-color: rgba(248, 113, 113, 0.5);
}

.cn-diff-row-yes {
  background: rgba(139, 92, 246, 0.14);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.cn-diff-row-yes p {
  color: #fff;
}

.cn-diff-tag {
  display: block;
  margin-bottom: 4px;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .8px;
  text-transform: uppercase;
}

.cn-diff-row-no .cn-diff-tag { color: rgba(248, 113, 113, 0.75); }
.cn-diff-row-yes .cn-diff-tag { color: #c4b5fd; }

.cn-diff-row p {
  margin: 0;
  font-size: 12.5px;
  line-height: 1.5;
}

@media (max-width: 1000px) {
  .cn-diff-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .cn-diff-section {
    padding: 40px 20px 34px;
  }

  .cn-diff-grid {
    grid-template-columns: 1fr;
  }
}
        /* =================================================
           TOOLS
        ================================================= */

        .cn-tools-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 13px;
        }

        .cn-tool-card {
          min-height: 275px;
          padding: 20px;
          border: 1px solid #dfe3f2;
          border-radius: 23px;
          background: #fff;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: box-shadow .25s ease;
        }

        .cn-tool-card:hover {
          box-shadow: 0 22px 45px rgba(42,49,91,.13);
        }

        .cn-tool-card::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          right: -65px;
          top: -65px;
          border-radius: 50%;
          opacity: .2;
        }

        .tool-purple::before { background: #8b5cf6; }
        .tool-pink::before { background: #ec4899; }
        .tool-blue::before { background: #2563eb; }
        .tool-green::before { background: #10b981; }


        .cn-tool-visual {
          height: 140px;
          margin: -3px -4px 16px;
          border-radius: 17px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
        }

        .cn-tool-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cn-tool-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,10,40,0) 40%, rgba(15,10,40,.55) 100%);
        }

        .cn-tool-visual-grid {
          position: absolute;
          inset: 0;
          opacity: .45;
          background-image:
            linear-gradient(rgba(99,60,255,.10) 1px, transparent 1px),
            linear-gradient(90deg,rgba(99,60,255,.10) 1px,transparent 1px);
          background-size: 18px 18px;
        }

        .cn-tool-visual-orbit {
          position: absolute;
          width: 145px;
          height: 55px;
          border: 1px dashed rgba(99,60,255,.28);
          border-radius: 50%;
          transform: rotate(-18deg);
          animation: cn-tool-orbit 7s linear infinite;
        }

        .cn-tool-spark {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: currentColor;
          opacity: .75;
          animation: cn-spark-pulse 1.8s ease-in-out infinite;
        }

        .cn-tool-spark.spark-a { left: 18px; top: 17px; }
        .cn-tool-spark.spark-b { right: 20px; bottom: 15px; animation-delay: .7s; }

        @keyframes cn-tool-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes cn-spark-pulse {
          0%,100% { transform: scale(.65); opacity: .35; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        .cn-tool-icon {
          position: relative;
          z-index: 2;
          margin: 0 0 0 14px;
          transform: translateY(-14px);
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 10px 22px rgba(20,10,50,.28);
          border: 2px solid #fff;
        }

        .tool-purple .cn-tool-icon { background: linear-gradient(145deg,#7c3aed,#4f46e5); }
        .tool-pink .cn-tool-icon { background: linear-gradient(145deg,#ec4899,#d946ef); }
        .tool-blue .cn-tool-icon { background: linear-gradient(145deg,#2563eb,#0ea5e9); }
        .tool-green .cn-tool-icon { background: linear-gradient(145deg,#10b981,#14b8a6); }

        .cn-tool-card h3 {
          margin: 0 0 9px;
          font-size: 18px;
        }

        .cn-tool-card p {
          margin: 0;
          color: #6a7591;
          font-size: 13px;
          line-height: 1.65;
        }

        .cn-tool-card button {
          position: absolute;
          left: 20px;
          bottom: 19px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #653cff;
          font-weight: 850;
          cursor: pointer;
        }

        /* =================================================
           OFFERINGS
        ================================================= */

        .cn-offerings-section {
          display: grid;
          grid-template-columns: 76px 1fr;
          gap: 30px;
          padding: 45px 42px;
          border-radius: 30px;
          background: linear-gradient(135deg,#fbfbff,#f7f8ff);
          border: 1px solid #e1e4f2;
        }

        .cn-vertical-label {
          border-right: 1px solid #d7dcef;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 8px;
          gap: 4px;
        }

        .cn-vertical-label span,
        .cn-vertical-label strong {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: #653cff;
          font-size: 12px;
          letter-spacing: 1.5px;
        }

        .cn-vertical-label strong {
          font-size: 17px;
        }

        .cn-offerings-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .cn-offering-card {
          min-height: 330px;
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #dfe4f3;
          transform-style: preserve-3d;
          box-shadow: 0 12px 32px rgba(45,51,92,.06);
          transition: box-shadow .25s ease;
        }

        .cn-offering-card:hover {
          box-shadow: 0 25px 55px rgba(45,51,92,.14);
        }

        .cn-offering-visual {
          height: 125px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .offer-orange .cn-offering-visual {
          background: linear-gradient(135deg,#fff1df,#ffd6bd);
          color: #ea580c;
        }

        .offer-pink .cn-offering-visual {
          background: linear-gradient(135deg,#ffe7f1,#ead8ff);
          color: #db2777;
        }

        .offer-blue .cn-offering-visual {
          background: linear-gradient(135deg,#dcecff,#d9f2ff);
          color: #2563eb;
        }

        .offer-green .cn-offering-visual {
          background: linear-gradient(135deg,#dcfbea,#d5f6f1);
          color: #059669;
        }

        .offer-violet .cn-offering-visual {
          background: linear-gradient(135deg,#eee4ff,#e0e7ff);
          color: #7c3aed;
        }

        .offer-cyan .cn-offering-visual {
          background: linear-gradient(135deg,#d9faff,#dceeff);
          color: #0891b2;
        }

        .cn-offering-icon {
          width: 69px;
          height: 69px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(255,255,255,.8);
          box-shadow: 0 15px 30px rgba(30,40,80,.12);
          z-index: 2;
        }

        .cn-offering-orbit {
          position: absolute;
          width: 150px;
          height: 70px;
          border: 1px dashed currentColor;
          opacity: .28;
          border-radius: 50%;
          transform: rotate(25deg);
          animation: cn-orbit-spin 9s linear infinite;
        }

        .cn-offering-particles i {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: currentColor;
          opacity: .55;
        }

        .cn-offering-particles i:nth-child(1) {
          top: 24px;
          left: 25px;
        }

        .cn-offering-particles i:nth-child(2) {
          right: 30px;
          top: 45px;
        }

        .cn-offering-particles i:nth-child(3) {
          bottom: 19px;
          left: 80px;
        }

        .cn-offering-body {
          padding: 19px;
        }

        .cn-offering-tag {
          display: inline-flex;
          padding: 6px 10px;
          border-radius: 999px;
          background: #f4f1ff;
          color: #673cff;
          font-size: 10px;
          font-weight: 850;
        }

        .cn-offering-body h3 {
          margin: 11px 0 7px;
          font-size: 18px;
          line-height: 1.25;
        }

        .cn-offering-body p {
          margin: 0;
          color: #6a7591;
          font-size: 12.5px;
          line-height: 1.6;
        }

        .cn-offering-body button {
          margin-top: 14px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #653cff;
          font-size: 12px;
          font-weight: 850;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
        }

        /* =================================================
           METRICS
        ================================================= */

        .cn-metrics {
          position: relative;
          overflow: hidden;
          margin-top: 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 28px;
          padding: 34px 40px;
          border-radius: 28px;
          background: linear-gradient(120deg,#0e0a2e 0%,#1b1050 55%,#0c1c3f 100%);
          border: 1px solid rgba(147,90,255,.22);
          box-shadow: 0 26px 60px rgba(20,10,55,.28);
        }

        .cn-metrics-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(46px);
          opacity: .35;
          pointer-events: none;
        }

        .cn-metrics-blob-a {
          width: 260px;
          height: 260px;
          left: -80px;
          top: -110px;
          background: #7c3aed;
        }

        .cn-metrics-blob-b {
          width: 220px;
          height: 220px;
          right: -70px;
          bottom: -100px;
          background: #d946ef;
        }

        .cn-metrics-brand {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-right: auto;
        }

        .cn-metrics-logo {
          display: grid;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          place-items: center;
          border-radius: 13px;
          background: linear-gradient(135deg,#7c3aed,#3b82f6);
          color: #fff;
          font-size: 19px;
          font-weight: 950;
        }

        .cn-metrics-brand strong {
          display: block;
          color: #fff;
          font-size: 16px;
          font-weight: 950;
        }

        .cn-metrics-brand strong span {
          background: linear-gradient(90deg,#c084fc,#f0abfc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cn-metrics-brand p {
          margin: 3px 0 0;
          color: rgba(220,214,255,.65);
          font-size: 11px;
          font-weight: 650;
        }

        .cn-metric {
          position: relative;
          z-index: 1;
          display: flex;
          flex: 1 1 90px;
          min-width: 90px;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cn-metric-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          color: currentColor;
        }

        .cn-metric strong {
          font-size: 24px;
          line-height: 1;
          letter-spacing: -1px;
          color: currentColor;
        }

        .cn-metric span {
          color: rgba(220,214,255,.65);
          font-size: 10.5px;
          margin-top: 7px;
          font-weight: 650;
        }

        .metric-violet { color: #c084fc; }
        .metric-blue { color: #60a5fa; }
        .metric-pink { color: #f472b6; }
        .metric-cyan { color: #22d3ee; }
        .metric-orange { color: #fbbf24; }
        .metric-green { color: #34d399; }

        /* =================================================
           REVIEWS
        ================================================= */

        .cn-reviews-section {
          margin-top: 75px;
          padding: 65px 0 25px;
        }

        .cn-review-slider {
          position: relative;
          padding: 0 54px;
        }

        .cn-review-viewport {
          position: relative;
          overflow: hidden;
          min-height: 410px;
          border-radius: 27px;
        }

        .cn-review-track {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 18px;
          width: 100%;
        }

        .cn-review-card {
          min-height: 410px;
          padding: 26px;
          border-radius: 25px;
          border: 1px solid rgba(124,58,237,.15);
          position: relative;
          overflow: hidden;
          box-shadow: 0 17px 40px rgba(38,44,83,.08);
          transition: transform .3s ease;
        }

        .cn-review-card:hover {
          transform: translateY(-7px);
        }

        .cn-review-card::before {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -110px;
          top: -100px;
          border-radius: 50%;
          background: rgba(255,255,255,.5);
        }

        .review-blue {
          background: linear-gradient(145deg,#f8fbff,#dff9ff);
        }

        .review-purple {
          background: linear-gradient(145deg,#fffaff,#f0e4ff);
        }

        .review-green {
          background: linear-gradient(145deg,#fafffd,#ddfff4);
        }

        .review-orange {
          background: linear-gradient(145deg,#fffdf8,#ffebd7);
        }

        .review-cyan {
          background: linear-gradient(145deg,#f7ffff,#dff7ff);
        }

        .review-pink {
          background: linear-gradient(145deg,#fffaff,#ffe1ef);
        }

        .cn-review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cn-stars {
          display: flex;
          gap: 4px;
          color: #f59e0b;
          font-size: 21px;
        }

        .cn-quote-mark {
          width: 53px;
          height: 53px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg,#7c3aed,#c026d3);
          color: #fff;
          font-size: 31px;
          font-weight: 900;
          line-height: 1;
          box-shadow: 0 10px 25px rgba(124,58,237,.25);
        }

        .cn-review-category {
          display: inline-flex;
          margin-top: 14px;
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(255,255,255,.72);
          color: #633cff;
          font-size: 10px;
          font-weight: 850;
        }

        .cn-review-text {
          margin: 25px 0 27px;
          color: #243761;
          font-size: 16px;
          line-height: 1.75;
          min-height: 125px;
        }

        .cn-review-person {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .cn-avatar {
          width: 68px;
          height: 68px;
          flex: 0 0 68px;
          overflow: hidden;
          border-radius: 50%;
          box-shadow: 0 10px 22px rgba(39,46,90,.12);
        }

        .cn-avatar-svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .cn-review-person strong {
          display: block;
          color: #101a38;
          font-size: 14px;
        }

        .cn-review-person span {
          display: block;
          margin-top: 3px;
          color: #71809f;
          font-size: 11px;
        }

        .cn-review-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid #dfe3f2;
          background: #fff;
          color: #633cff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 4;
          box-shadow: 0 10px 25px rgba(35,42,78,.1);
        }

        .cn-review-nav:hover {
          background: #653cff;
          color: #fff;
        }

        .cn-review-nav.left {
          left: 0;
        }

        .cn-review-nav.right {
          right: 0;
        }

        .cn-review-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 23px;
        }

        .cn-review-dots button {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #cbd1e3;
          cursor: pointer;
          transition: .25s ease;
        }

        .cn-review-dots button.active {
          width: 30px;
          border-radius: 99px;
          background: #7041ff;
        }

        /* =================================================
           FINAL CTA
        ================================================= */

        .cn-final-cta {
          margin-top: 70px;
          margin-bottom: 20px;
          padding: 40px 45px;
          border-radius: 27px;
          color: #fff;
          background:
            radial-gradient(circle at 80% 30%,rgba(168,85,247,.35),transparent 30%),
            linear-gradient(120deg,#10133d,#25105b);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .cn-final-cta > div {
          max-width: 700px;
        }

        .cn-final-cta span {
          color: #bdaaff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .cn-final-cta h2 {
          margin: 9px 0;
          font-size: clamp(28px,4vw,43px);
          letter-spacing: -1.5px;
        }

        .cn-final-cta p {
          margin: 0;
          color: #bbc3dd;
          line-height: 1.65;
        }

        .cn-final-cta button {
          flex: 0 0 auto;
          height: 53px;
          padding: 0 20px;
          border: 0;
          border-radius: 14px;
          background: #fff;
          color: #37217c;
          font-weight: 850;
          display: flex;
          align-items: center;
          gap: 9px;
          cursor: pointer;
        }

        /* =================================================
           ANIMATIONS
        ================================================= */

        @keyframes cn-core-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-11px); }
        }

        @keyframes cn-node-float {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-9px) rotate(2deg); }
        }

        @keyframes cn-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes cn-orbit-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes cn-ring-pulse {
          0%,100% { transform: scale(1); opacity: .65; }
          50% { transform: scale(1.04); opacity: 1; }
        }

        @keyframes cn-network-pulse {
          0%,100% { transform: scale(.8); opacity: .55; }
          50% { transform: scale(1.25); opacity: 1; }
        }

        /* =================================================
           RIGHT SOCIAL RAIL
        ================================================= */

        .cn-social-rail {
          position: fixed;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 9px;
          border-radius: 18px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(111,87,220,.16);
          box-shadow: 0 18px 45px rgba(38,42,82,.14);
          backdrop-filter: blur(14px);
        }

        .cn-social-link {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #fff;
          box-shadow: 0 9px 20px rgba(35,42,78,.14);
          transition: transform .22s ease, filter .22s ease;
        }

        .cn-social-link:hover {
          transform: translateX(-4px) scale(1.06);
          filter: brightness(1.05);
        }

        .cn-social-link svg {
          width: 21px;
          height: 21px;
          fill: currentColor;
        }

        .cn-social-link.whatsapp { background: #25d366; }
        .cn-social-link.email { background: linear-gradient(145deg,#6366f1,#8b5cf6); }
        .cn-social-link.phone { background: linear-gradient(145deg,#0ea5e9,#2563eb); }
        .cn-social-link.linkedin { background: #0a66c2; }
        .cn-social-link.instagram { background: linear-gradient(145deg,#833ab4,#fd1d1d 58%,#fcb045); }

        /* =================================================
           RESPONSIVE
        ================================================= */

        @media (max-width: 1100px) {
          .cn-hero-inner {
            grid-template-columns: 1fr .8fr;
            padding: 32px 40px 36px;
          }

          .cn-hero-title {
            font-size: clamp(32px,4vw,46px);
          }

          .cn-tools-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .cn-offerings-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .cn-metrics {
            justify-content: center;
            padding: 28px 26px;
          }

          .cn-metrics-brand {
            flex: 1 1 100%;
            justify-content: center;
            margin-right: 0;
            margin-bottom: 6px;
          }

          .cn-review-track {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }

          .cn-review-card:nth-child(3) {
            display: none;
          }

          .cn-review-viewport {
            min-height: 410px;
          }
        }

        @media (max-width: 780px) {
          .cn-social-rail {
            right: 8px;
            padding: 6px;
            gap: 6px;
            border-radius: 15px;
          }

          .cn-social-link {
            width: 35px;
            height: 35px;
            border-radius: 10px;
          }

          .cn-social-link svg {
            width: 18px;
            height: 18px;
          }

          .cn-hero {
            min-height: auto;
            border-radius: 22px;
          }

          .cn-hero-inner {
            min-height: auto;
            grid-template-columns: 1fr;
            padding: 24px 20px 30px;
            gap: 0;
          }

          .cn-hero-title {
            margin-top: 14px;
            font-size: clamp(28px,8vw,40px);
            letter-spacing: -1.5px;
          }

          .cn-hero-description {
            font-size: 14px;
            line-height: 1.65;
          }

          .cn-hero-actions {
            margin-top: 22px;
          }

          .cn-hero-primary,
          .cn-hero-secondary {
            width: 100%;
          }

          .cn-hero-visual {
            min-height: 190px;
            margin-top: 12px;
          }

          .cn-vector-scene {
            height: 255px;
            transform: scale(.76);
          }

          .cn-vector-core {
            width: 145px;
            height: 145px;
          }

          .cn-floating-node {
            width: 52px;
            height: 52px;
          }

          .cn-slider-arrows {
            right: 18px;
            top: 18px;
          }

          .cn-slider-arrows button {
            width: 39px;
            height: 39px;
          }

          .cn-section {
            margin-top: 50px;
          }

          .cn-process-card {
            grid-template-columns: 1fr 1fr;
            padding: 25px 18px;
          }

          .cn-process-line,
          .cn-process-arrow {
            display: none;
          }

          .cn-process-mini-visual {
            width: 72px;
            height: 20px;
          }

          .cn-process-step p {
            max-width: none;
          }

          .cn-offerings-section {
            grid-template-columns: 1fr;
            padding: 32px 18px;
          }

          .cn-vertical-label {
            display: none;
          }

          .cn-offerings-grid {
            grid-template-columns: 1fr;
          }

          .cn-offering-card {
            min-height: 305px;
          }

          .cn-metrics {
            gap: 18px 22px;
            padding: 24px 20px;
          }

          .cn-metric {
            flex: 1 1 28%;
            min-width: 80px;
          }

          .cn-metric strong {
            font-size: 22px;
          }

          .cn-review-slider {
            padding: 0;
          }

          .cn-review-viewport {
            min-height: 380px;
          }

          .cn-review-track {
            grid-template-columns: 1fr;
          }

          .cn-review-card {
            min-height: 380px;
          }

          .cn-review-card:nth-child(2),
          .cn-review-card:nth-child(3) {
            display: none;
          }

          .cn-review-nav {
            width: 43px;
            height: 43px;
            top: 50%;
          }

          .cn-review-nav.left {
            left: 8px;
          }

          .cn-review-nav.right {
            right: 8px;
          }

          .cn-review-viewport {
            border-radius: 22px;
          }

          .cn-final-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 24px;
          }

          .cn-final-cta button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .cn-hero-inner {
            padding-left: 15px;
            padding-right: 15px;
          }

          .cn-home {
            width: 100%;
            max-width: 100%;
          }

          .cn-hero-eyebrow {
            font-size: 10px;
            padding: 8px 11px;
          }

          .cn-hero-title {
            font-size: 28px;
          }

          .cn-hero-visual {
            min-height: 170px;
          }

          .cn-vector-scene {
            transform: scale(.64);
            margin-top: -10px;
          }

          .cn-process-card {
            grid-template-columns: 1fr;
          }

          .cn-tools-grid {
            grid-template-columns: 1fr;
          }

          .cn-metrics {
            padding: 22px 16px;
            gap: 16px;
            border-radius: 22px;
          }

          .cn-metric {
            flex: 1 1 40%;
          }

          .cn-metric strong {
            font-size: 22px;
          }

          .cn-review-text {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cn-vector-core,
          .cn-floating-node,
          .cn-orbit,
          .cn-marketing-ring,
          .cn-offering-orbit,
          .cn-tech-network span {
            animation: none !important;
          }
        }
        /* =================================================
           SVG ASSET VISUALS
        ================================================= */
        .cn-asset-visual { width: 100%; height: 100%; display: block; overflow: visible; }
        .cn-hero-asset { width: min(520px, 100%); height: 390px; filter: drop-shadow(0 24px 38px rgba(55,35,130,.22)); }
        .cn-hero-photo-frame {
          width: min(460px, 100%);
          aspect-ratio: 16 / 10;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          box-shadow: none;
          padding: 0;
        }
        .cn-hero-photo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0;
          display: block;
        }
        @media (max-width: 640px) {
          .cn-hero-photo-frame { width: 100%; aspect-ratio: 16 / 9; }
        }
        .cn-section-asset { width: 100%; height: 92px; margin: 0 0 10px; border-radius: 18px; overflow: hidden; }
        .cn-process-asset { background: linear-gradient(135deg,rgba(99,102,241,.06),rgba(236,72,153,.06)); }
        .cn-card-asset { position: absolute; inset: 0; width: 100%; height: 100%; padding: 4px; opacity: .96; pointer-events: none; }
        .cn-tool-visual > .cn-card-asset, .cn-offering-visual > .cn-card-asset { z-index: 1; }
        .cn-tool-visual-grid, .cn-tool-visual-orbit, .cn-tool-icon, .cn-tool-spark, .cn-offering-orbit, .cn-offering-icon, .cn-offering-particles { z-index: 2; }
        .cn-avatar { width: 68px; height: 68px; flex: 0 0 68px; border-radius: 50%; overflow: hidden; background: #eef2ff; display: flex; align-items: center; justify-content: center; }
        .cn-avatar .cn-asset-visual { width: 100%; height: 100%; overflow: hidden; }
        @media (max-width: 640px) {
          .cn-home { width: 100%; max-width: 100%; }
          .cn-hero, .cn-section, .cn-metrics, .cn-reviews-section, .cn-final-cta { max-width: 100%; }
          .cn-hero-asset { height: 285px; width: 100%; }
          .cn-section-asset { height: 78px; }
        }

      `}</style>

      <div className="cn-home">
        <SocialRail />

        {/* =================================================
            HERO
            5 tech/vector illustrations
            Auto changes every 3 seconds
        ================================================== */}

        <section
          className="cn-hero"
          onMouseEnter={() => setIsHeroPaused(true)}
          onMouseLeave={() => setIsHeroPaused(false)}
          onTouchStart={() => setIsHeroPaused(true)}
          onTouchEnd={() => setIsHeroPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="cn-hero-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="cn-hero-copy">
                <div className="cn-hero-eyebrow">
                  <Sparkles size={17} />
                  {slide.eyebrow}
                </div>

                <h1 className="cn-hero-title">
                  {slide.title}
                </h1>

                <p className="cn-hero-description">
                  {slide.description}
                </p>

                <div className="cn-hero-actions">
                  <button
                    className="cn-hero-primary"
                    onClick={() => onNavigate('tools')}
                  >
                    Explore Core Tools
                    <ArrowRight size={19} />
                  </button>

                  <button
                    className="cn-hero-secondary"
                    onClick={() => onNavigate('contact')}
                  >
                    <Bot size={19} />
                    Get Free Consultation
                  </button>
                </div>
              </div>

              <HeroVisual type={slide.type} />
            </motion.div>
          </AnimatePresence>

          <div className="cn-slider-arrows">
            <button
              onClick={previousSlide}
              aria-label="Previous hero slide"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next hero slide"
            >
              <ChevronRight size={21} />
            </button>
          </div>

          <div className="cn-slide-dots">
            {HERO_SLIDES.map((item, index) => (
              <button
                key={item.id}
                className={activeSlide === index ? 'active' : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`Hero slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* =================================================
            PROCESS
        ================================================== */}

        <ProcessSection />

        {/* =================================================
            TOOLS
        ================================================== */}

        <ToolsSection onNavigate={onNavigate} />

        {/* =================================================
            CORE EXPERTISE / OFFERINGS
        ================================================== */}

        <OfferingsSection onNavigate={onNavigate} />

        {/* =================================================
            REVIEWS
            Below metrics
            6 reviews
            2.7 second automatic slide
        ================================================== */}

        <ReviewsSection />

        {/* =================================================
            FINAL CTA
        ================================================== */}

        <FinalCTA onNavigate={onNavigate} />
      </div>
    </>
  );
};

export default HomeView;



import React, { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  metricA: string;
  metricALabel: string;
  metricB: string;
  metricBLabel: string;
  metricC: string;
  metricCLabel: string;
  metricD: string;
  metricDLabel: string;
  theme: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: "CAREER & STUDENT ENGINE",
    title: (
      <>
        Turn Your Skills Into A{" "}
        <span className="cn-gradient-text">Stronger Career.</span>
      </>
    ),
    description:
      "Use practical career tools, skill planning, resume guidance, assessments, and structured roadmaps to move from learning to opportunity.",
    metricA: "92%",
    metricALabel: "Skill Score",
    metricB: "Excellent",
    metricBLabel: "Career Match",
    metricC: "100+",
    metricCLabel: "Tools & Frameworks",
    metricD: "4.9/5",
    metricDLabel: "Client Rating",
    theme: "career",
  },
  {
    eyebrow: "BUSINESS STRATEGY ENGINE",
    title: (
      <>
        Transform Business Ideas Into{" "}
        <span className="cn-gradient-text">Measurable Growth.</span>
      </>
    ),
    description:
      "Turn business challenges into practical strategy, analytics, digital execution, and measurable growth frameworks.",
    metricA: "500+",
    metricALabel: "Happy Clients",
    metricB: "13+",
    metricBLabel: "Expertise Areas",
    metricC: "25+",
    metricCLabel: "Markets Reached",
    metricD: "4.9/5",
    metricDLabel: "Client Rating",
    theme: "business",
  },
  {
    eyebrow: "SKILLS • STRATEGY • TECHNOLOGY",
    title: (
      <>
        Turn Skills, Strategy & Technology Into{" "}
        <span className="cn-gradient-text">Leadership.</span>
      </>
    ),
    description:
      "Explore practical expertise across business analytics, digital marketing, engineering, career tools, and growth systems.",
    metricA: "100+",
    metricALabel: "Tools",
    metricB: "13+",
    metricBLabel: "Expertise Areas",
    metricC: "500+",
    metricCLabel: "Clients",
    metricD: "4.9/5",
    metricDLabel: "Rating",
    theme: "leadership",
  },
];

const REVIEWS = [
  {
    quote:
      "CareerNova helped me turn scattered skills into a clear career direction. The tools and guidance were practical and easy to act on.",
    name: "CareerNova User",
    role: "Student & Career Builder",
    rating: "5.0",
  },
  {
    quote:
      "The financial modelling and business guidance made complicated decisions much easier to understand and execute.",
    name: "CareerNova Client",
    role: "Business Professional",
    rating: "4.9",
  },
  {
    quote:
      "The resume, career and skill-planning approach feels much more practical than generic career advice.",
    name: "CareerNova Member",
    role: "Working Professional",
    rating: "5.0",
  },
];

const CORE_EXPERTISE = [
  {
    number: "01",
    title: "Business Analytics",
    subtitle: "Data → Decisions",
    description:
      "Financial modelling, BI dashboards, forecasting, KPI analysis and data-driven business decisions.",
    className: "orange",
  },
  {
    number: "02",
    title: "Financial Modelling",
    subtitle: "Numbers → Strategy",
    description:
      "Valuation, forecasting, scenario analysis, financial planning and decision-ready models.",
    className: "purple",
  },
  {
    number: "03",
    title: "Digital Marketing",
    subtitle: "Reach → Growth",
    description:
      "Campaign strategy, content systems, funnels, audience growth and digital positioning.",
    className: "blue",
  },
  {
    number: "04",
    title: "Engineering & Technology",
    subtitle: "Build → Scale",
    description:
      "Web, mobile, cloud, APIs and scalable digital product development.",
    className: "green",
  },
  {
    number: "05",
    title: "Career & Student Tools",
    subtitle: "Skills → Opportunity",
    description:
      "Resume tools, mock tests, career guidance, skill planning and practical learning resources.",
    className: "pink",
  },
];

const TOOL_CAPABILITIES = [
  {
    icon: "▥",
    title: "Excel & Financial Models",
    text: "Advanced Excel, financial modelling, forecasting and valuation workflows.",
    className: "tool-purple",
  },
  {
    icon: "◫",
    title: "BI & Analytics",
    text: "Dashboards, KPI tracking, business intelligence and decision analytics.",
    className: "tool-blue",
  },
  {
    icon: "</>",
    title: "Web & APIs",
    text: "Modern web interfaces, APIs, integrations and scalable digital systems.",
    className: "tool-indigo",
  },
  {
    icon: "↗",
    title: "Marketing Frameworks",
    text: "Campaign planning, funnels, content strategy and growth frameworks.",
    className: "tool-pink",
  },
  {
    icon: "◎",
    title: "Career Assessment",
    text: "Resume analysis, skill assessment, mock tests and career planning tools.",
    className: "tool-green",
  },
  {
    icon: "◆",
    title: "AI-Powered Tools",
    text: "Practical AI workflows for productivity, research and career growth.",
    className: "tool-cyan",
  },
];

const PROCESS = [
  {
    number: "01",
    icon: "✦",
    title: "Ideate",
    text: "We understand your challenge and identify the right opportunity.",
  },
  {
    number: "02",
    icon: "□",
    title: "Plan",
    text: "We design a practical strategy and actionable roadmap.",
  },
  {
    number: "03",
    icon: "</>",
    title: "Build",
    text: "We build, integrate and implement with speed and precision.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Measure",
    text: "We track results, optimize continuously and drive sustainable growth.",
  },
];

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "right" ? (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      ) : (
        <>
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </>
      )}
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2.8 2.82 5.72 6.31.92-4.56 4.45 1.08 6.29L12 17.2l-5.65 2.98 1.08-6.29-4.56-4.45 6.31-.92L12 2.8Z" />
    </svg>
  );
}

function SocialRail() {
  const whatsappMessage = encodeURIComponent(
    "Hi Sudhir! I would like to discuss a CareerNova consultation."
  );

  return (
    <div className="cn-social-rail" aria-label="CareerNova contact links">
      <a
        className="cn-social-item cn-social-whatsapp"
        href={`https://wa.me/917007260391?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.6a11.8 11.8 0 0 0 5.5 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.8-9.9 9.8Zm5.4-7.4c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>

      <a
        className="cn-social-item cn-social-email"
        href="mailto:sudheersinghrajput8932@gmail.com"
        aria-label="Email"
        title="Email"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>

      <a
        className="cn-social-item cn-social-call"
        href="tel:+917007260391"
        aria-label="Call"
        title="Call"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.7.5 2.6.6a2 2 0 0 1 2 2.4Z" />
        </svg>
      </a>

      <a
        className="cn-social-item cn-social-linkedin"
        href="https://www.linkedin.com/in/sudhir-singh-rajput-2a894128a"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.8 2.6 4.8 6.1V21h-4v-5.6c0-1.3 0-3.1-1.9-3.1-1.8 0-2.1 1.5-2.1 3V21H9V9Z" />
        </svg>
      </a>

      <a
        className="cn-social-item cn-social-instagram"
        href="https://www.instagram.com/thakur_sudhir_singh_rajput"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}

function GrowthGraph() {
  const graphSteps = [
    {
      number: "01",
      title: "Discover",
      label: "Identify",
      icon: "⌕",
      className: "graph-orange",
    },
    {
      number: "02",
      title: "Strategize",
      label: "Plan",
      icon: "✦",
      className: "graph-purple",
    },
    {
      number: "03",
      title: "Build",
      label: "Execute",
      icon: "</>",
      className: "graph-blue",
    },
    {
      number: "04",
      title: "Optimize",
      label: "Improve",
      icon: "✓",
      className: "graph-green",
    },
    {
      number: "05",
      title: "Grow",
      label: "Scale",
      icon: "↗",
      className: "graph-pink",
    },
  ];

  return (
    <section className="cn-growth-graph">
      <div className="cn-section-kicker">CAREERNOVA GROWTH ENGINE</div>
      <h2>From Idea to Measurable Impact</h2>
      <p>
        A connected approach that moves from discovery and strategy to
        execution, optimization and sustainable growth.
      </p>

      <div className="cn-graph-track">
        <div className="cn-graph-line" />

        {graphSteps.map((step) => (
          <div className="cn-graph-step" key={step.number}>
            <div className={`cn-graph-number ${step.className}`}>
              {step.number}
            </div>

            <div className={`cn-graph-node ${step.className}`}>
              <span>{step.icon}</span>
            </div>

            <h3>{step.title}</h3>
            <span className="cn-graph-label">{step.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeStyles() {
  return (
    <style>{`
      .cn-home {
        --cn-purple: #5b2cff;
        --cn-purple-2: #8b3dff;
        --cn-blue: #246bff;
        --cn-green: #12b981;
        --cn-text: #111936;
        --cn-muted: #607096;
        --cn-border: #e5e8f3;
        width: 100%;
        overflow: hidden;
        background:
          radial-gradient(circle at 15% 15%, rgba(105,72,255,.08), transparent 28%),
          radial-gradient(circle at 90% 45%, rgba(64,132,255,.06), transparent 25%),
          #f8f9fd;
        color: var(--cn-text);
      }

      .cn-home *,
      .cn-home *::before,
      .cn-home *::after {
        box-sizing: border-box;
      }

      .cn-container {
        width: min(1240px, calc(100% - 36px));
        margin: 0 auto;
      }

      /* -------------------------------------------------
         SOCIAL RAIL
      ------------------------------------------------- */

      .cn-social-rail {
        position: fixed;
        right: 18px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .cn-social-item {
        width: 48px;
        height: 48px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-decoration: none;
        box-shadow: 0 12px 28px rgba(30, 36, 75, .20);
        transition: transform .25s ease, box-shadow .25s ease;
      }

      .cn-social-item:hover {
        transform: translateX(-5px) scale(1.05);
        box-shadow: 0 16px 34px rgba(30, 36, 75, .28);
      }

      .cn-social-item svg {
        width: 22px;
        height: 22px;
      }

      .cn-social-whatsapp {
        background: linear-gradient(145deg, #25d366, #11a66a);
      }

      .cn-social-email {
        background: linear-gradient(145deg, #6250ff, #4930d9);
      }

      .cn-social-call {
        background: linear-gradient(145deg, #8439ed, #5420bc);
      }

      .cn-social-linkedin {
        background: linear-gradient(145deg, #1685d5, #0759a7);
      }

      .cn-social-instagram {
        background: linear-gradient(145deg, #833ab4, #e1306c, #fcb045);
      }

      /* IMPORTANT:
         No left-side support button is rendered anywhere.
      */

      /* -------------------------------------------------
         HERO
      ------------------------------------------------- */

      .cn-hero-wrap {
        padding: 20px 0 0;
      }

      .cn-hero {
        position: relative;
        min-height: 500px;
        border-radius: 28px;
        overflow: hidden;
        background:
          radial-gradient(circle at 72% 50%, rgba(123,58,255,.30), transparent 23%),
          radial-gradient(circle at 92% 15%, rgba(42,104,255,.20), transparent 24%),
          linear-gradient(115deg, #080b2d 0%, #0d0b3e 52%, #16104c 100%);
        border: 1px solid rgba(125, 91, 255, .55);
        box-shadow: 0 24px 70px rgba(39, 31, 108, .20);
      }

      .cn-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        opacity: .30;
        background-image:
          linear-gradient(rgba(143, 110, 255, .08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(143, 110, 255, .08) 1px, transparent 1px);
        background-size: 46px 46px;
        pointer-events: none;
      }

      .cn-hero::after {
        content: "";
        position: absolute;
        width: 560px;
        height: 560px;
        right: 5%;
        top: -160px;
        border-radius: 50%;
        border: 1px solid rgba(154, 117, 255, .13);
        box-shadow:
          0 0 0 70px rgba(125, 78, 255, .035),
          0 0 0 140px rgba(125, 78, 255, .025);
        pointer-events: none;
      }

      .cn-hero-content {
        position: relative;
        z-index: 4;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(380px, .92fr);
        gap: 30px;
        padding: 54px 52px 42px;
        min-height: 500px;
        align-items: center;
      }

      .cn-hero-copy {
        max-width: 650px;
      }

      .cn-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 9px 15px;
        border: 1px solid rgba(155, 117, 255, .35);
        background: rgba(91, 44, 255, .12);
        color: #d9ccff;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: .08em;
      }

      .cn-hero h1 {
        margin: 23px 0 17px;
        max-width: 670px;
        color: #fff;
        font-size: clamp(42px, 5vw, 67px);
        line-height: .98;
        letter-spacing: -2.7px;
        font-weight: 850;
      }

      .cn-gradient-text {
        background: linear-gradient(100deg, #713cff, #d447ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .cn-hero-description {
        max-width: 600px;
        margin: 0;
        color: #c7cbe2;
        font-size: 16px;
        line-height: 1.75;
      }

      .cn-hero-actions {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        margin-top: 27px;
      }

      .cn-btn {
        min-height: 46px;
        border-radius: 13px;
        padding: 0 20px;
        border: 1px solid transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        text-decoration: none;
        font-weight: 800;
        font-size: 13px;
        cursor: pointer;
        transition: transform .25s ease, box-shadow .25s ease;
      }

      .cn-btn:hover {
        transform: translateY(-2px);
      }

      .cn-btn-primary {
        color: #fff;
        background: linear-gradient(135deg, #6530ff, #9a3cff);
        box-shadow: 0 12px 30px rgba(111, 47, 255, .35);
      }

      .cn-btn-secondary {
        color: #fff;
        border-color: rgba(255,255,255,.28);
        background: rgba(255,255,255,.055);
      }

      .cn-hero-metrics {
        display: flex;
        flex-wrap: wrap;
        gap: 0;
        margin-top: 31px;
      }

      .cn-metric {
        min-width: 120px;
        padding: 0 18px;
        border-right: 1px solid rgba(255,255,255,.18);
      }

      .cn-metric:first-child {
        padding-left: 0;
      }

      .cn-metric:last-child {
        border-right: 0;
      }

      .cn-metric-value {
        display: block;
        color: #fff;
        font-size: 21px;
        font-weight: 850;
      }

      .cn-metric-label {
        display: block;
        margin-top: 4px;
        color: #9da5c4;
        font-size: 10px;
      }

      /* Hero visual */

      .cn-hero-visual {
        position: relative;
        min-height: 360px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cn-visual-orbit {
        position: absolute;
        width: 330px;
        height: 330px;
        border: 1px solid rgba(159, 106, 255, .25);
        border-radius: 50%;
        box-shadow:
          0 0 80px rgba(117, 59, 255, .14),
          inset 0 0 80px rgba(117, 59, 255, .06);
      }

      .cn-visual-orbit::before,
      .cn-visual-orbit::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        border: 1px solid rgba(159, 106, 255, .16);
        inset: 35px;
      }

      .cn-visual-orbit::after {
        inset: 72px;
      }

      .cn-visual-core {
        position: relative;
        z-index: 2;
        width: 142px;
        height: 142px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle at 40% 35%, #b36aff, #5a24dc 52%, #291075);
        border: 1px solid rgba(255,255,255,.28);
        box-shadow:
          0 0 30px rgba(148, 69, 255, .65),
          0 0 80px rgba(107, 48, 255, .35);
        color: #fff;
      }

      .cn-core-arrow {
        font-size: 33px;
        line-height: 1;
      }

      .cn-core-text {
        margin-top: 8px;
        font-size: 10px;
        font-weight: 900;
        letter-spacing: .22em;
      }

      .cn-float-card {
        position: absolute;
        z-index: 3;
        min-width: 155px;
        padding: 16px 17px;
        border-radius: 17px;
        border: 1px solid rgba(150, 133, 255, .20);
        background: rgba(15, 21, 49, .90);
        backdrop-filter: blur(16px);
        box-shadow: 0 18px 35px rgba(0,0,0,.22);
      }

      .cn-float-card span {
        display: block;
        color: #8991b0;
        font-size: 10px;
      }

      .cn-float-card strong {
        display: block;
        margin-top: 7px;
        color: #fff;
        font-size: 23px;
      }

      .cn-float-card .cn-mini-bar {
        height: 6px;
        margin-top: 9px;
        overflow: hidden;
        border-radius: 999px;
        background: #303a58;
      }

      .cn-float-card .cn-mini-bar::after {
        content: "";
        display: block;
        width: 82%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg,#7041ff,#e253ff);
      }

      .cn-float-1 {
        top: 12px;
        left: 5px;
      }

      .cn-float-2 {
        top: 72px;
        right: -2px;
      }

      .cn-float-3 {
        bottom: 14px;
        left: 18px;
      }

      .cn-float-4 {
        bottom: 20px;
        right: 25px;
      }

      .cn-hero-controls {
        position: absolute;
        top: 17px;
        right: 17px;
        z-index: 7;
        display: flex;
        gap: 8px;
      }

      .cn-round-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.18);
        color: #fff;
        background: rgba(8, 11, 42, .55);
        display: grid;
        place-items: center;
        cursor: pointer;
        transition: background .2s ease, transform .2s ease;
      }

      .cn-round-btn:hover {
        background: rgba(92, 50, 255, .5);
        transform: translateY(-2px);
      }

      .cn-hero-dots {
        position: absolute;
        bottom: 18px;
        left: 50%;
        z-index: 7;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
      }

      .cn-dot {
        width: 8px;
        height: 8px;
        border: 0;
        border-radius: 50%;
        background: rgba(255,255,255,.45);
        cursor: pointer;
        transition: width .25s ease, background .25s ease;
      }

      .cn-dot.active {
        width: 24px;
        border-radius: 999px;
        background: #a74aff;
      }

      .cn-slide-progress {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 8;
        width: 100%;
        height: 3px;
        background: rgba(255,255,255,.07);
      }

      .cn-slide-progress span {
        display: block;
        height: 100%;
        width: 100%;
        transform-origin: left;
        background: linear-gradient(90deg,#6431ff,#e54dff);
        animation: cnProgress 6s linear infinite;
      }

      @keyframes cnProgress {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }

      /* -------------------------------------------------
         REVIEWS
      ------------------------------------------------- */

      .cn-review-section {
        padding: 48px 0 18px;
      }

      .cn-review-shell {
        position: relative;
        overflow: hidden;
        padding: 38px 38px 34px;
        border: 1px solid var(--cn-border);
        border-radius: 26px;
        background: rgba(255,255,255,.92);
        box-shadow: 0 18px 50px rgba(41, 52, 95, .07);
      }

      .cn-review-heading {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 26px;
      }

      .cn-section-kicker {
        color: #6333ff;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: .13em;
      }

      .cn-review-heading h2,
      .cn-growth-graph h2,
      .cn-two-column h2,
      .cn-offerings h2 {
        margin: 8px 0 8px;
        font-size: clamp(29px, 3vw, 43px);
        letter-spacing: -1.5px;
      }

      .cn-review-heading p,
      .cn-growth-graph > p,
      .cn-two-column > div > p,
      .cn-offerings > p {
        color: var(--cn-muted);
        line-height: 1.65;
        margin: 0;
      }

      .cn-review-card {
        max-width: 900px;
        min-height: 175px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 22px;
        align-items: center;
        padding: 26px 28px;
        border-radius: 21px;
        border: 1px solid #e5e1ff;
        background:
          radial-gradient(circle at 90% 15%, rgba(119,75,255,.12), transparent 25%),
          linear-gradient(135deg,#fff,#faf9ff);
      }

      .cn-stars {
        display: flex;
        gap: 3px;
        color: #ffb900;
      }

      .cn-review-quote {
        margin: 11px 0;
        font-size: 16px;
        line-height: 1.7;
        color: #2c3656;
      }

      .cn-review-author {
        color: #65718e;
        font-size: 12px;
      }

      .cn-review-author strong {
        color: #18213d;
      }

      .cn-review-score {
        width: 125px;
        height: 125px;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(145deg,#6730ff,#a340ff);
        color: #fff;
        box-shadow: 0 15px 30px rgba(103,48,255,.22);
      }

      .cn-review-score strong {
        font-size: 28px;
      }

      .cn-review-score span {
        margin-top: 4px;
        font-size: 10px;
        opacity: .85;
      }

      .cn-review-controls {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 19px;
      }

      .cn-review-dot {
        width: 7px;
        height: 7px;
        border: 0;
        padding: 0;
        border-radius: 50%;
        background: #cfd3e1;
        cursor: pointer;
      }

      .cn-review-dot.active {
        width: 22px;
        border-radius: 999px;
        background: #6730ff;
      }

      /* -------------------------------------------------
         WEBLLISTO-INSPIRED CONNECTED GRAPH
      ------------------------------------------------- */

      .cn-growth-graph {
        margin-top: 26px;
        padding: 42px 32px 35px;
        border: 1px solid #e6e9f2;
        border-radius: 26px;
        background: #fff;
        text-align: center;
        box-shadow: 0 15px 45px rgba(38, 47, 88, .05);
      }

      .cn-growth-graph > p {
        max-width: 750px;
        margin: 0 auto;
      }

      .cn-graph-track {
        position: relative;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 15px;
        margin-top: 36px;
      }

      .cn-graph-line {
        position: absolute;
        top: 78px;
        left: 10%;
        right: 10%;
        height: 5px;
        border-radius: 999px;
        background: linear-gradient(
          90deg,
          #ff7420 0%,
          #b52db8 25%,
          #2774d8 50%,
          #43bd7d 75%,
          #8a27ef 100%
        );
        z-index: 0;
      }

      .cn-graph-line::before,
      .cn-graph-line::after {
        content: "";
        position: absolute;
        width: 45px;
        height: 45px;
        top: -20px;
        border-top: 5px solid currentColor;
        border-radius: 50%;
        opacity: .8;
      }

      .cn-graph-line::before {
        left: 18%;
        color: #c0349c;
        transform: rotate(13deg);
      }

      .cn-graph-line::after {
        right: 18%;
        color: #27b4bb;
        transform: rotate(-13deg);
      }

      .cn-graph-step {
        position: relative;
        z-index: 2;
        min-width: 0;
      }

      .cn-graph-number {
        margin-bottom: 10px;
        font-size: 35px;
        line-height: 1;
        font-weight: 900;
      }

      .graph-orange .cn-graph-number,
      .cn-graph-number.graph-orange { color: #f36c21; }

      .graph-purple .cn-graph-number,
      .cn-graph-number.graph-purple { color: #b229a4; }

      .graph-blue .cn-graph-number,
      .cn-graph-number.graph-blue { color: #2772c8; }

      .graph-green .cn-graph-number,
      .cn-graph-number.graph-green { color: #41b97c; }

      .graph-pink .cn-graph-number,
      .cn-graph-number.graph-pink { color: #8522ef; }

      .cn-graph-node {
        width: 128px;
        height: 108px;
        margin: 0 auto;
        display: grid;
        place-items: center;
        clip-path: polygon(
          25% 5%, 75% 5%,
          100% 50%, 75% 95%,
          25% 95%, 0 50%
        );
        background: currentColor;
        filter: drop-shadow(0 10px 15px rgba(30,40,80,.10));
      }

      .cn-graph-node::before {
        content: "";
        position: absolute;
        width: 116px;
        height: 96px;
        clip-path: inherit;
        background: #fff;
      }

      .cn-graph-node span {
        position: relative;
        z-index: 2;
        color: currentColor;
        font-size: 25px;
        font-weight: 800;
      }

      .graph-orange { color: #f36c21; }
      .graph-purple { color: #b229a4; }
      .graph-blue { color: #2772c8; }
      .graph-green { color: #41b97c; }
      .graph-pink { color: #8522ef; }

      .cn-graph-step h3 {
        margin: 12px 0 4px;
        font-size: 15px;
      }

      .cn-graph-label {
        color: #77819d;
        font-size: 11px;
      }

      /* -------------------------------------------------
         PROCESS + TOOLS
      ------------------------------------------------- */

      .cn-two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px;
        margin-top: 26px;
      }

      .cn-panel {
        padding: 34px;
        border: 1px solid var(--cn-border);
        border-radius: 26px;
        background: rgba(255,255,255,.92);
        box-shadow: 0 15px 45px rgba(38,47,88,.05);
      }

      .cn-process-row {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 13px;
        margin-top: 30px;
      }

      .cn-process-item {
        position: relative;
      }

      .cn-process-icon {
        width: 54px;
        height: 54px;
        border: 1px solid #ded8ff;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: #6934ff;
        font-weight: 800;
        background: #fff;
        margin-bottom: 14px;
      }

      .cn-process-item:not(:last-child)::after {
        content: "→";
        position: absolute;
        top: 16px;
        right: -10px;
        color: #8d98b7;
        font-size: 18px;
      }

      .cn-process-number {
        color: #8b95ad;
        font-size: 10px;
      }

      .cn-process-item h3 {
        margin: 7px 0 5px;
        font-size: 15px;
      }

      .cn-process-item p {
        margin: 0;
        color: #667392;
        font-size: 11px;
        line-height: 1.6;
      }

      .cn-tool-grid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 10px;
        margin-top: 27px;
      }

      .cn-tool-card {
        min-height: 143px;
        padding: 16px;
        border-radius: 17px;
        border: 1px solid #e1e5f0;
        background: #fff;
        transition: transform .25s ease, box-shadow .25s ease;
      }

      .cn-tool-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 14px 30px rgba(39, 48, 89, .10);
      }

      .cn-tool-icon {
        width: 37px;
        height: 37px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        font-weight: 900;
        margin-bottom: 12px;
      }

      .tool-purple .cn-tool-icon { background: linear-gradient(135deg,#5c2cff,#933eff); }
      .tool-blue .cn-tool-icon { background: linear-gradient(135deg,#1976ed,#3264ff); }
      .tool-indigo .cn-tool-icon { background: linear-gradient(135deg,#3949d8,#6657ff); }
      .tool-pink .cn-tool-icon { background: linear-gradient(135deg,#ed3c9c,#ff4c78); }
      .tool-green .cn-tool-icon { background: linear-gradient(135deg,#10aa70,#22c878); }
      .tool-cyan .cn-tool-icon { background: linear-gradient(135deg,#08a8bc,#18c6da); }

      .cn-tool-card h3 {
        margin: 0 0 7px;
        font-size: 13px;
      }

      .cn-tool-card p {
        margin: 0;
        color: #697594;
        font-size: 10px;
        line-height: 1.55;
      }

      /* -------------------------------------------------
         CORE EXPERTISE
      ------------------------------------------------- */

      .cn-offerings {
        margin-top: 26px;
        padding: 55px 32px 50px;
        border-radius: 28px;
        background:
          radial-gradient(circle at 20% 0%, rgba(255, 198, 95, .14), transparent 20%),
          radial-gradient(circle at 80% 0%, rgba(106, 92, 255, .13), transparent 23%),
          #fff;
        border: 1px solid #e7e9f1;
        text-align: center;
      }

      .cn-offerings > p {
        max-width: 800px;
        margin: 0 auto;
      }

      .cn-offering-grid {
        display: grid;
        grid-template-columns: repeat(5,1fr);
        gap: 17px;
        margin-top: 42px;
      }

      .cn-offering-card {
        min-height: 330px;
        padding: 0 16px 22px;
        text-align: left;
        border-radius: 20px;
        background: #fff;
        border: 1px solid #e1e4ed;
        overflow: hidden;
        perspective: 900px;
        transition:
          transform .25s ease,
          box-shadow .25s ease,
          border-color .25s ease;
        transform-style: preserve-3d;
      }

      .cn-offering-card:hover {
        transform: perspective(900px) rotateX(3deg) rotateY(-5deg) translateY(-8px);
        box-shadow: 0 25px 50px rgba(41,48,88,.15);
      }

      .cn-offering-top {
        height: 9px;
        margin: 0 -16px 18px;
      }

      .cn-offering-card.orange .cn-offering-top { background: #f36c21; }
      .cn-offering-card.purple .cn-offering-top { background: #ae2ca3; }
      .cn-offering-card.blue .cn-offering-top { background: #2d70c8; }
      .cn-offering-card.green .cn-offering-top { background: #43bb7d; }
      .cn-offering-card.pink .cn-offering-top { background: #8a28ed; }

      .cn-offering-number {
        font-size: 36px;
        font-weight: 900;
        line-height: 1;
        margin-bottom: 13px;
      }

      .cn-offering-card.orange .cn-offering-number { color: #f36c21; }
      .cn-offering-card.purple .cn-offering-number { color: #ae2ca3; }
      .cn-offering-card.blue .cn-offering-number { color: #2d70c8; }
      .cn-offering-card.green .cn-offering-number { color: #43bb7d; }
      .cn-offering-card.pink .cn-offering-number { color: #8a28ed; }

      .cn-offering-icon {
        width: 62px;
        height: 62px;
        margin-bottom: 16px;
        display: grid;
        place-items: center;
        border-radius: 16px;
        font-size: 25px;
        font-weight: 800;
        color: #fff;
      }

      .cn-offering-card.orange .cn-offering-icon { background: linear-gradient(145deg,#ff8a38,#ef5b0e); }
      .cn-offering-card.purple .cn-offering-icon { background: linear-gradient(145deg,#ca38b4,#8220a5); }
      .cn-offering-card.blue .cn-offering-icon { background: linear-gradient(145deg,#4591e5,#2163ba); }
      .cn-offering-card.green .cn-offering-icon { background: linear-gradient(145deg,#57c98e,#26a56b); }
      .cn-offering-card.pink .cn-offering-icon { background: linear-gradient(145deg,#a949f4,#7620dc); }

      .cn-offering-card h3 {
        margin: 0 0 6px;
        font-size: 16px;
      }

      .cn-offering-subtitle {
        color: #6f7996;
        font-size: 11px;
        font-weight: 800;
      }

      .cn-offering-card p {
        margin: 15px 0 18px;
        color: #66718e;
        font-size: 11px;
        line-height: 1.65;
      }

      .cn-explore {
        color: #6333ff;
        font-size: 11px;
        font-weight: 900;
      }

      /* -------------------------------------------------
         STATS
      ------------------------------------------------- */

      .cn-stats {
        display: grid;
        grid-template-columns: repeat(6,1fr);
        margin: 26px 0 35px;
        padding: 25px 10px;
        border: 1px solid #e2e5ee;
        border-radius: 22px;
        background: #fff;
      }

      .cn-stat {
        text-align: center;
        padding: 0 12px;
        border-right: 1px solid #e7e9f0;
      }

      .cn-stat:last-child {
        border-right: 0;
      }

      .cn-stat-icon {
        color: #6333ff;
        font-size: 22px;
      }

      .cn-stat strong {
        display: block;
        margin-top: 6px;
        font-size: 20px;
      }

      .cn-stat span {
        color: #75809b;
        font-size: 9px;
      }

      /* -------------------------------------------------
         RESPONSIVE
      ------------------------------------------------- */

      @media (max-width: 1050px) {
        .cn-hero-content {
          grid-template-columns: 1fr .85fr;
          padding: 45px 38px 38px;
        }

        .cn-hero h1 {
          font-size: 51px;
        }

        .cn-offering-grid {
          grid-template-columns: repeat(3,1fr);
        }

        .cn-stats {
          grid-template-columns: repeat(3,1fr);
          gap: 20px 0;
        }

        .cn-stat:nth-child(3) {
          border-right: 0;
        }
      }

      @media (max-width: 800px) {
        .cn-container {
          width: min(100% - 24px, 680px);
        }

        .cn-social-rail {
          right: 8px;
          gap: 7px;
        }

        .cn-social-item {
          width: 40px;
          height: 40px;
          border-radius: 12px;
        }

        .cn-social-item svg {
          width: 18px;
          height: 18px;
        }

        .cn-hero {
          min-height: 0;
          border-radius: 21px;
        }

        .cn-hero-content {
          display: block;
          min-height: 0;
          padding: 35px 24px 30px;
        }

        .cn-hero h1 {
          font-size: 42px;
          line-height: 1.01;
          letter-spacing: -1.8px;
          max-width: 560px;
        }

        .cn-hero-description {
          font-size: 13px;
          line-height: 1.65;
        }

        .cn-hero-visual {
          min-height: 285px;
          margin-top: 15px;
        }

        .cn-visual-orbit {
          width: 245px;
          height: 245px;
        }

        .cn-visual-core {
          width: 108px;
          height: 108px;
        }

        .cn-float-card {
          min-width: 120px;
          padding: 11px 12px;
        }

        .cn-float-card strong {
          font-size: 17px;
        }

        .cn-float-1 {
          top: 8px;
          left: 0;
        }

        .cn-float-2 {
          top: 40px;
          right: 0;
        }

        .cn-float-3 {
          bottom: 0;
          left: 2px;
        }

        .cn-float-4 {
          bottom: 0;
          right: 2px;
        }

        .cn-two-column {
          grid-template-columns: 1fr;
        }

        .cn-graph-track {
          grid-template-columns: repeat(5, minmax(95px,1fr));
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .cn-graph-line {
          left: 10%;
          right: 10%;
          min-width: 550px;
        }

        .cn-graph-step {
          min-width: 105px;
        }

        .cn-offering-grid {
          grid-template-columns: repeat(2,1fr);
        }

        .cn-tool-grid {
          grid-template-columns: repeat(2,1fr);
        }
      }

      @media (max-width: 560px) {
        .cn-container {
          width: calc(100% - 18px);
        }

        .cn-hero-wrap {
          padding-top: 10px;
        }

        .cn-hero-content {
          padding: 28px 18px 25px;
        }

        .cn-eyebrow {
          font-size: 9px;
          padding: 8px 11px;
        }

        .cn-hero h1 {
          font-size: 34px;
          margin-top: 17px;
        }

        .cn-hero-description {
          font-size: 12px;
        }

        .cn-hero-actions {
          gap: 8px;
          margin-top: 20px;
        }

        .cn-btn {
          min-height: 42px;
          padding: 0 14px;
          font-size: 11px;
        }

        .cn-hero-metrics {
          margin-top: 22px;
        }

        .cn-metric {
          min-width: 25%;
          padding: 0 8px;
        }

        .cn-metric-value {
          font-size: 15px;
        }

        .cn-metric-label {
          font-size: 8px;
        }

        .cn-hero-visual {
          min-height: 245px;
        }

        .cn-visual-orbit {
          width: 205px;
          height: 205px;
        }

        .cn-visual-core {
          width: 88px;
          height: 88px;
        }

        .cn-core-arrow {
          font-size: 23px;
        }

        .cn-core-text {
          font-size: 7px;
        }

        .cn-float-card {
          min-width: 91px;
          padding: 9px;
          border-radius: 12px;
        }

        .cn-float-card span {
          font-size: 7px;
        }

        .cn-float-card strong {
          font-size: 13px;
        }

        .cn-float-card .cn-mini-bar {
          height: 4px;
        }

        .cn-hero-controls {
          top: 10px;
          right: 10px;
        }

        .cn-round-btn {
          width: 36px;
          height: 36px;
        }

        .cn-review-section {
          padding-top: 25px;
        }

        .cn-review-shell,
        .cn-panel,
        .cn-growth-graph,
        .cn-offerings {
          padding: 24px 16px;
          border-radius: 20px;
        }

        .cn-review-card {
          grid-template-columns: 1fr;
          min-height: 0;
          padding: 20px;
        }

        .cn-review-score {
          width: 100%;
          height: 70px;
          border-radius: 15px;
          flex-direction: row;
          gap: 8px;
        }

        .cn-review-score strong {
          font-size: 22px;
        }

        .cn-process-row {
          grid-template-columns: repeat(2,1fr);
          row-gap: 24px;
        }

        .cn-process-item:not(:last-child)::after {
          display: none;
        }

        .cn-tool-grid {
          grid-template-columns: 1fr 1fr;
        }

        .cn-offering-grid {
          grid-template-columns: 1fr;
        }

        .cn-offering-card {
          min-height: 0;
        }

        .cn-stats {
          grid-template-columns: repeat(2,1fr);
        }

        .cn-stat {
          border-right: 0;
          border-bottom: 1px solid #e7e9f0;
          padding-bottom: 15px;
        }

        .cn-stat:nth-last-child(-n+2) {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .cn-social-rail {
          right: 5px;
        }

        .cn-social-item {
          width: 36px;
          height: 36px;
        }
      }
    `}</style>
  );
}

export const HomeView: React.FC = () => {
  const [heroIndex, setHeroIndex] = useState(2);
  const [reviewIndex, setReviewIndex] = useState(0);

  const currentHero = useMemo(
    () => HERO_SLIDES[heroIndex],
    [heroIndex]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % REVIEWS.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goHero = (direction: number) => {
    setHeroIndex((current) => {
      const next = current + direction;

      if (next < 0) return HERO_SLIDES.length - 1;
      if (next >= HERO_SLIDES.length) return 0;

      return next;
    });
  };

  const goReview = (direction: number) => {
    setReviewIndex((current) => {
      const next = current + direction;

      if (next < 0) return REVIEWS.length - 1;
      if (next >= REVIEWS.length) return 0;

      return next;
    });
  };

  const review = REVIEWS[reviewIndex];

  return (
    <>
      <HomeStyles />

      <div className="cn-home">
        <SocialRail />

        {/* ================= HERO ================= */}
        <div className="cn-hero-wrap">
          <div className="cn-container">
            <section className={`cn-hero cn-theme-${currentHero.theme}`}>
              <div className="cn-hero-controls">
                <button
                  type="button"
                  className="cn-round-btn"
                  onClick={() => goHero(-1)}
                  aria-label="Previous slide"
                >
                  <ArrowIcon direction="left" />
                </button>

                <button
                  type="button"
                  className="cn-round-btn"
                  onClick={() => goHero(1)}
                  aria-label="Next slide"
                >
                  <ArrowIcon />
                </button>
              </div>

              <div className="cn-hero-content">
                <div className="cn-hero-copy">
                  <div className="cn-eyebrow">
                    ✦ {currentHero.eyebrow}
                  </div>

                  <h1>{currentHero.title}</h1>

                  <p className="cn-hero-description">
                    {currentHero.description}
                  </p>

                  <div className="cn-hero-actions">
                    <a className="cn-btn cn-btn-primary" href="#core-expertise">
                      Explore Core Expertise
                      <ArrowIcon />
                    </a>

                    <a className="cn-btn cn-btn-secondary" href="#contact">
                      ◉ Get Free Consultation
                    </a>
                  </div>

                  <div className="cn-hero-metrics">
                    <div className="cn-metric">
                      <span className="cn-metric-value">
                        {currentHero.metricA}
                      </span>
                      <span className="cn-metric-label">
                        {currentHero.metricALabel}
                      </span>
                    </div>

                    <div className="cn-metric">
                      <span className="cn-metric-value">
                        {currentHero.metricB}
                      </span>
                      <span className="cn-metric-label">
                        {currentHero.metricBLabel}
                      </span>
                    </div>

                    <div className="cn-metric">
                      <span className="cn-metric-value">
                        {currentHero.metricC}
                      </span>
                      <span className="cn-metric-label">
                        {currentHero.metricCLabel}
                      </span>
                    </div>

                    <div className="cn-metric">
                      <span className="cn-metric-value">
                        {currentHero.metricD}
                      </span>
                      <span className="cn-metric-label">
                        {currentHero.metricDLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cn-hero-visual" aria-hidden="true">
                  <div className="cn-visual-orbit" />

                  <div className="cn-float-card cn-float-1">
                    <span>Skill Score</span>
                    <strong>{currentHero.metricA}</strong>
                    <div className="cn-mini-bar" />
                  </div>

                  <div className="cn-float-card cn-float-2">
                    <span>Career Match</span>
                    <strong>{currentHero.metricB}</strong>
                  </div>

                  <div className="cn-float-card cn-float-3">
                    <span>Tools & Frameworks</span>
                    <strong>{currentHero.metricC}</strong>
                  </div>

                  <div className="cn-float-card cn-float-4">
                    <span>Client Rating</span>
                    <strong>{currentHero.metricD}</strong>
                  </div>

                  <div className="cn-visual-core">
                    <span className="cn-core-arrow">↗</span>
                    <span className="cn-core-text">GROWTH ENGINE</span>
                  </div>
                </div>
              </div>

              <div className="cn-hero-dots">
                {HERO_SLIDES.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`cn-dot ${
                      heroIndex === index ? "active" : ""
                    }`}
                    onClick={() => setHeroIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="cn-slide-progress">
                <span key={heroIndex} />
              </div>
            </section>
          </div>
        </div>

        {/* ================= REVIEWS ================= */}
        <section className="cn-review-section">
          <div className="cn-container">
            <div className="cn-review-shell">
              <div className="cn-review-heading">
                <div className="cn-section-kicker">
                  ★ TRUSTED BY LEARNERS & LEADERS
                </div>
                <h2>What Clients Say About CareerNova</h2>
                <p>
                  Practical tools, structured guidance and measurable outcomes
                  built around real career and business goals.
                </p>
              </div>

              <div className="cn-review-card">
                <div>
                  <div className="cn-stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>

                  <p className="cn-review-quote">
                    “{review.quote}”
                  </p>

                  <div className="cn-review-author">
                    <strong>{review.name}</strong> • {review.role}
                  </div>
                </div>

                <div className="cn-review-score">
                  <strong>{review.rating}</strong>
                  <span>CLIENT RATING</span>
                </div>
              </div>

              <div className="cn-review-controls">
                <button
                  type="button"
                  className="cn-round-btn"
                  onClick={() => goReview(-1)}
                  aria-label="Previous review"
                  style={{ width: 34, height: 34, color: "#34235f" }}
                >
                  <ArrowIcon direction="left" />
                </button>

                {REVIEWS.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`cn-review-dot ${
                      reviewIndex === index ? "active" : ""
                    }`}
                    onClick={() => setReviewIndex(index)}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}

                <button
                  type="button"
                  className="cn-round-btn"
                  onClick={() => goReview(1)}
                  aria-label="Next review"
                  style={{ width: 34, height: 34, color: "#34235f" }}
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>

            {/* ================= GRAPH ================= */}
            <GrowthGraph />

            {/* ================= PROCESS + TOOLS ================= */}
            <div className="cn-two-column">
              <section className="cn-panel">
                <div className="cn-section-kicker">
                  HOW WE CREATE IMPACT
                </div>
                <h2>Our Proven Process</h2>
                <p>
                  From idea to impact — we follow a simple, data-driven
                  approach.
                </p>

                <div className="cn-process-row">
                  {PROCESS.map((item) => (
                    <div className="cn-process-item" key={item.number}>
                      <div className="cn-process-icon">{item.icon}</div>
                      <div className="cn-process-number">{item.number}</div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="cn-panel">
                <div className="cn-section-kicker">
                  OUR TOOL ECOSYSTEM
                </div>
                <h2>What We Do Best</h2>
                <p>
                  Practical tools and frameworks to help you learn, build,
                  analyze and grow.
                </p>

                <div className="cn-tool-grid">
                  {TOOL_CAPABILITIES.map((tool) => (
                    <article
                      className={`cn-tool-card ${tool.className}`}
                      key={tool.title}
                    >
                      <div className="cn-tool-icon">{tool.icon}</div>
                      <h3>{tool.title}</h3>
                      <p>{tool.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            {/* ================= CORE EXPERTISE / OFFERINGS ================= */}
            <section className="cn-offerings" id="core-expertise">
              <div className="cn-section-kicker">CORE EXPERTISE</div>

              <h2>Our Offerings</h2>

              <p>
                Explore CareerNova's core expertise across business,
                technology, marketing, finance and career development —
                designed to turn knowledge into practical outcomes.
              </p>

              <div className="cn-offering-grid">
                {CORE_EXPERTISE.map((item) => (
                  <article
                    key={item.number}
                    className={`cn-offering-card ${item.className}`}
                  >
                    <div className="cn-offering-top" />

                    <div className="cn-offering-number">
                      {item.number}
                    </div>

                    <div className="cn-offering-icon">
                      {item.className === "orange" && "⌕"}
                      {item.className === "purple" && "₹"}
                      {item.className === "blue" && "</>"}
                      {item.className === "green" && "↗"}
                      {item.className === "pink" && "✦"}
                    </div>

                    <h3>{item.title}</h3>

                    <div className="cn-offering-subtitle">
                      {item.subtitle}
                    </div>

                    <p>{item.description}</p>

                    <span className="cn-explore">
                      Explore →
                    </span>
                  </article>
                ))}
              </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="cn-stats">
              <div className="cn-stat">
                <div className="cn-stat-icon">♜</div>
                <strong>5+</strong>
                <span>Years of Impact</span>
              </div>

              <div className="cn-stat">
                <div className="cn-stat-icon">♧</div>
                <strong>500+</strong>
                <span>Happy Clients</span>
              </div>

              <div className="cn-stat">
                <div className="cn-stat-icon">◉</div>
                <strong>13+</strong>
                <span>Expertise Areas</span>
              </div>

              <div className="cn-stat">
                <div className="cn-stat-icon">🚀</div>
                <strong>100+</strong>
                <span>Tools & Frameworks</span>
              </div>

              <div className="cn-stat">
                <div className="cn-stat-icon">☆</div>
                <strong>4.9/5</strong>
                <span>Client Rating</span>
              </div>

              <div className="cn-stat">
                <div className="cn-stat-icon">◎</div>
                <strong>25+</strong>
                <span>Countries Reached</span>
              </div>
            </section>

            <div id="contact" style={{ height: 1 }} />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeView;

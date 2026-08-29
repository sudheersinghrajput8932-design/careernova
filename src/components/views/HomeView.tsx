import React, { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  accent: string;
  stat: string;
  statLabel: string;
  visual: "growth" | "marketing" | "career" | "business";
};

const slides: Slide[] = [
  {
    eyebrow: "CAREERNOVA GROWTH ENGINE",
    title: (
      <>
        Turn Skills,
        <br />
        Strategy &
        <br />
        Technology Into
        <br />
        <span className="cn-gradient-text">Leadership.</span>
      </>
    ),
    description:
      "Explore practical expertise across business analytics, digital marketing, engineering, career tools, and growth systems — built to move ideas from planning to execution.",
    accent: "#7138ff",
    stat: "500+",
    statLabel: "Happy Clients",
    visual: "growth",
  },
  {
    eyebrow: "MARKETING & GROWTH ENGINE",
    title: (
      <>
        Build Campaigns
        <br />
        That Turn
        <br />
        Attention Into
        <br />
        <span className="cn-gradient-text">Growth.</span>
      </>
    ),
    description:
      "Plan smarter campaigns, understand your audience, improve conversion journeys, and build repeatable digital growth systems.",
    accent: "#a855f7",
    stat: "78%",
    statLabel: "Campaign Growth",
    visual: "marketing",
  },
  {
    eyebrow: "CAREER & STUDENT ENGINE",
    title: (
      <>
        Turn Your
        <br />
        Skills Into
        <br />
        A Stronger
        <br />
        <span className="cn-gradient-text">Career.</span>
      </>
    ),
    description:
      "Use practical career tools, skill planning, resume guidance, mock assessments, and structured roadmaps to move from learning to opportunity.",
    accent: "#6366f1",
    stat: "13+",
    statLabel: "Expertise Areas",
    visual: "career",
  },
  {
    eyebrow: "BUSINESS STRATEGY ENGINE",
    title: (
      <>
        Transform
        <br />
        Business Ideas
        <br />
        Into Measurable
        <br />
        <span className="cn-gradient-text">Results.</span>
      </>
    ),
    description:
      "Connect business strategy, analytics, revenue planning, technology, and execution into one practical growth framework.",
    accent: "#8b5cf6",
    stat: "100+",
    statLabel: "Tools & Frameworks",
    visual: "business",
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <>
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </>
      )}
    </svg>
  );
}

function Rocket() {
  return (
    <div className="cn-rocket-wrap">
      <div className="cn-orbit orbit-one" />
      <div className="cn-orbit orbit-two" />
      <div className="cn-orbit orbit-three" />

      <div className="cn-rocket-glow" />

      <div className="cn-rocket">
        <div className="cn-rocket-fin left" />
        <div className="cn-rocket-fin right" />

        <div className="cn-rocket-body">
          <div className="cn-rocket-window">
            <div className="cn-window-core" />
          </div>
        </div>

        <div className="cn-rocket-nose" />

        <div className="cn-flame">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="cn-platform">
        <div className="cn-platform-ring ring-a" />
        <div className="cn-platform-ring ring-b" />
        <div className="cn-platform-ring ring-c" />
        <div className="cn-platform-core" />
      </div>

      <div className="cn-particle p1" />
      <div className="cn-particle p2" />
      <div className="cn-particle p3" />
      <div className="cn-particle p4" />
      <div className="cn-particle p5" />
      <div className="cn-particle p6" />
    </div>
  );
}

function GrowthVisual() {
  return (
    <div className="cn-visual">
      <Rocket />

      <div className="cn-data-card card-top-left">
        <div className="data-card-head">
          <span>Business Analytics</span>
          <span className="mini-icon purple">▥</span>
        </div>
        <strong>+240%</strong>
        <div className="bar-chart">
          <i style={{ height: "30%" }} />
          <i style={{ height: "48%" }} />
          <i style={{ height: "38%" }} />
          <i style={{ height: "65%" }} />
          <i style={{ height: "56%" }} />
          <i style={{ height: "78%" }} />
          <i style={{ height: "92%" }} />
        </div>
      </div>

      <div className="cn-data-card card-top-right">
        <div className="data-card-head">
          <span>Revenue Growth</span>
          <span className="mini-icon green">↗</span>
        </div>
        <strong className="green-text">+240%</strong>
        <small>vs previous cycle</small>
      </div>

      <div className="cn-data-card card-left">
        <div className="data-card-head">
          <span>Marketing Growth</span>
          <span className="mini-icon pink">⌁</span>
        </div>
        <div className="donut">
          <span>78%</span>
        </div>
        <div className="tiny-lines">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="cn-data-card card-right">
        <div className="data-card-head">
          <span>Project Progress</span>
        </div>
        {["Planning", "Development", "Testing", "Launch"].map(
          (item, index) => (
            <div className="progress-row" key={item}>
              <span>{item}</span>
              <div>
                <i style={{ width: `${100 - index * 20}%` }} />
              </div>
            </div>
          )
        )}
      </div>

      <div className="cn-data-card card-bottom-right">
        <div className="data-card-head">
          <span>User Engagement</span>
        </div>
        <div className="line-graph">
          <svg viewBox="0 0 220 60" preserveAspectRatio="none">
            <path d="M0 43 C20 10, 32 54, 53 30 S78 12, 94 34 S120 48, 137 24 S162 13, 178 31 S200 49, 220 17" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="cn-visual">
      <div className="marketing-core">
        <div className="marketing-ring ring1" />
        <div className="marketing-ring ring2" />
        <div className="marketing-ring ring3" />

        <div className="campaign-core">
          <span>CAMPAIGN</span>
          <strong>78%</strong>
          <small>CONVERSION</small>
        </div>
      </div>

      <div className="campaign-card campaign-one">
        <span>Reach</span>
        <strong>1.8M</strong>
        <div className="mini-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="campaign-card campaign-two">
        <span>Conversion</span>
        <strong className="pink-text">+42%</strong>
        <div className="conversion-path">
          <b />
          <b />
          <b />
        </div>
      </div>

      <div className="campaign-card campaign-three">
        <span>Audience</span>
        <div className="audience">
          <i>◉</i>
          <i>◉</i>
          <i>◉</i>
          <i>◉</i>
        </div>
        <small>Targeted Segments</small>
      </div>

      <div className="campaign-card campaign-four">
        <span>ROI</span>
        <strong className="green-text">4.6x</strong>
        <small>Campaign Return</small>
      </div>
    </div>
  );
}

function CareerVisual() {
  return (
    <div className="cn-visual">
      <div className="career-roadmap">
        <div className="career-line" />

        {[
          ["01", "Learn", "Skills"],
          ["02", "Build", "Projects"],
          ["03", "Prove", "Ability"],
          ["04", "Launch", "Career"],
        ].map(([num, title, sub], index) => (
          <div className={`career-node node-${index + 1}`} key={num}>
            <span>{num}</span>
            <div className="career-node-icon">
              {index === 0 ? "✦" : index === 1 ? "◆" : index === 2 ? "✓" : "↗"}
            </div>
            <strong>{title}</strong>
            <small>{sub}</small>
          </div>
        ))}
      </div>

      <div className="career-card career-card-one">
        <span>Skill Score</span>
        <strong>92%</strong>
        <div className="score-track">
          <i />
        </div>
      </div>

      <div className="career-card career-card-two">
        <span>Career Match</span>
        <strong className="green-text">Excellent</strong>
        <small>Based on your profile</small>
      </div>

      <div className="career-card career-card-three">
        <span>Next Goal</span>
        <strong>Build Portfolio</strong>
        <small>3 milestones remaining</small>
      </div>
    </div>
  );
}

function BusinessVisual() {
  return (
    <div className="cn-visual">
      <div className="business-center">
        <div className="business-glow" />
        <div className="business-icon">↗</div>
        <strong>GROWTH</strong>
        <small>ENGINE</small>
      </div>

      <div className="business-card bc-one">
        <span>Revenue</span>
        <strong>₹24.8L</strong>
        <small>+18.6% this quarter</small>
      </div>

      <div className="business-card bc-two">
        <span>Market Position</span>
        <div className="market-meter">
          <i />
        </div>
        <strong>82%</strong>
      </div>

      <div className="business-card bc-three">
        <span>Strategy Score</span>
        <strong className="green-text">94/100</strong>
        <div className="strategy-dots">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="business-card bc-four">
        <span>Execution</span>
        <strong>On Track</strong>
        <div className="execution-line">
          <i />
        </div>
      </div>
    </div>
  );
}

function HeroVisual({ type }: { type: Slide["visual"] }) {
  if (type === "marketing") return <MarketingVisual />;
  if (type === "career") return <CareerVisual />;
  if (type === "business") return <BusinessVisual />;
  return <GrowthVisual />;
}

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Ideate",
      icon: "✦",
      text: "We understand your challenges and identify the right opportunities.",
    },
    {
      num: "02",
      title: "Plan",
      icon: "▣",
      text: "We design a practical strategy and actionable roadmap.",
    },
    {
      num: "03",
      title: "Build",
      icon: "</>",
      text: "We build, integrate and implement with speed and precision.",
    },
    {
      num: "04",
      title: "Measure",
      icon: "↗",
      text: "We track results, optimize continuously and drive sustainable growth.",
    },
  ];

  return (
    <section className="cn-process-section">
      <div className="cn-process">
        <div className="section-heading">
          <span className="section-kicker">HOW WE CREATE IMPACT</span>
          <h2>Our Proven Process</h2>
          <p>From idea to impact — we follow a simple, data-driven approach.</p>
        </div>

        <div className="process-flow">
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="process-step">
                <div className={`process-icon icon-${index + 1}`}>
                  {step.icon}
                </div>
                <span className="process-number">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="process-arrow">
                  <ArrowIcon direction="right" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="cn-best">
        <div className="section-heading">
          <span className="section-kicker">OUR CORE CAPABILITIES</span>
          <h2>What We Do Best</h2>
          <p>End-to-end expertise to help you grow, scale and lead.</p>
        </div>

        <div className="capability-grid">
          {[
            {
              icon: "▥",
              title: "Business & Analytics",
              text: "Financial modeling, BI dashboards, forecasting and data-driven insights.",
            },
            {
              icon: "⌁",
              title: "Marketing & Growth",
              text: "Campaign strategy, funnels, content, ads and growth marketing systems.",
            },
            {
              icon: "</>",
              title: "Engineering & Tech",
              text: "Web, mobile, cloud, APIs and scalable digital product development.",
            },
            {
              icon: "◆",
              title: "Career & Student Tools",
              text: "Resume tools, mock tests, career guidance and practical learning resources.",
            },
          ].map((item, index) => (
            <div className="capability-card" key={item.title}>
              <div className={`capability-icon cap-${index + 1}`}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button>Explore <span>→</span></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const metrics = [
    ["✦", "5+", "Years of Impact"],
    ["♧", "500+", "Happy Clients"],
    ["◉", "13+", "Expertise Areas"],
    ["🚀", "100+", "Tools & Frameworks"],
    ["☆", "4.9/5", "Client Rating"],
    ["◎", "25+", "Countries Reached"],
  ];

  return (
    <section className="cn-metrics">
      {metrics.map(([icon, value, label]) => (
        <div className="metric" key={label}>
          <span className="metric-icon">{icon}</span>
          <div>
            <strong>{value}</strong>
            <small>{label}</small>
          </div>
        </div>
      ))}
    </section>
  );
}

export function HomeView() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .cn-home {
          width: 100%;
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 20%, rgba(113,56,255,.07), transparent 28%),
            radial-gradient(circle at 90% 40%, rgba(139,92,246,.06), transparent 30%),
            #f8f9fd;
          color: #11162b;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }

        .cn-home button {
          font-family: inherit;
        }

        .cn-hero {
          width: calc(100% - 100px);
          max-width: 1440px;
          min-height: 650px;
          margin: 28px auto 18px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          background: #080a2d;
          border: 1px solid rgba(115,83,255,.35);
          box-shadow:
            0 25px 80px rgba(54,35,130,.18),
            inset 0 1px 0 rgba(255,255,255,.08);
        }

        .cn-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(121,93,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(121,93,255,.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to right, transparent 0%, black 40%, black 100%);
          pointer-events: none;
        }

        .cn-hero::after {
          content: "";
          position: absolute;
          width: 550px;
          height: 550px;
          right: 5%;
          top: 8%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,.18), transparent 68%);
          filter: blur(20px);
          pointer-events: none;
        }

        .cn-hero-inner {
          min-height: 650px;
          display: grid;
          grid-template-columns: 43% 57%;
          position: relative;
          z-index: 2;
        }

        .cn-hero-copy {
          padding: 58px 20px 45px 70px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          position: relative;
          z-index: 5;
        }

        .cn-eyebrow {
          width: fit-content;
          padding: 10px 18px;
          border-radius: 30px;
          color: #a98cff;
          border: 1px solid rgba(160,133,255,.22);
          background: rgba(120,77,255,.12);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .6px;
          margin-bottom: 30px;
          box-shadow: 0 8px 30px rgba(91,54,200,.12);
        }

        .cn-hero-title {
          color: white;
          font-size: clamp(48px, 5vw, 76px);
          line-height: .98;
          letter-spacing: -4px;
          margin: 0;
          font-weight: 900;
        }

        .cn-gradient-text {
          background: linear-gradient(100deg, #7652ff, #b13cff, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cn-hero-description {
          color: #d7d9ef;
          max-width: 590px;
          font-size: 16px;
          line-height: 1.8;
          margin: 26px 0 28px;
        }

        .cn-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cn-primary-btn,
        .cn-secondary-btn {
          border-radius: 14px;
          padding: 15px 23px;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          transition: .25s ease;
        }

        .cn-primary-btn {
          color: white;
          border: 0;
          background: linear-gradient(100deg,#5734ff,#8b2cff);
          box-shadow: 0 12px 32px rgba(106,54,255,.42);
        }

        .cn-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 38px rgba(106,54,255,.55);
        }

        .cn-secondary-btn {
          color: white;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.55);
        }

        .cn-secondary-btn:hover {
          background: rgba(255,255,255,.1);
          transform: translateY(-3px);
        }

        .cn-hero-stats {
          display: flex;
          align-items: center;
          margin-top: 38px;
          gap: 22px;
          color: white;
        }

        .cn-stat {
          display: flex;
          flex-direction: column;
          min-width: 90px;
        }

        .cn-stat strong {
          font-size: 25px;
          line-height: 1;
        }

        .cn-stat span {
          color: #aeb2ce;
          font-size: 11px;
          margin-top: 7px;
        }

        .cn-stat-divider {
          width: 1px;
          height: 42px;
          background: rgba(255,255,255,.2);
        }

        .cn-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cn-rating-star {
          color: #ffd22e;
          font-size: 23px;
        }

        .cn-slider-controls {
          position: absolute;
          right: 28px;
          top: 28px;
          display: flex;
          gap: 10px;
          z-index: 20;
        }

        .cn-slider-control {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(0,0,0,.28);
          color: white;
          display: grid;
          place-items: center;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: .25s ease;
        }

        .cn-slider-control:hover {
          background: rgba(113,56,255,.5);
          transform: scale(1.05);
        }

        .cn-slide-dots {
          position: absolute;
          bottom: 25px;
          right: 39%;
          z-index: 20;
          display: flex;
          gap: 12px;
        }

        .cn-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          border: 0;
          padding: 0;
          cursor: pointer;
          background: rgba(255,255,255,.75);
          transition: .3s ease;
        }

        .cn-dot.active {
          width: 32px;
          border-radius: 20px;
          background: linear-gradient(90deg,#7c4dff,#b03cff);
          box-shadow: 0 0 18px rgba(125,74,255,.8);
        }

        .cn-visual {
          height: 100%;
          min-height: 650px;
          position: relative;
          overflow: hidden;
          animation: visualEnter .7s ease both;
        }

        @keyframes visualEnter {
          from { opacity: 0; transform: scale(.97) translateX(20px); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }

        .cn-rocket-wrap {
          position: absolute;
          width: 560px;
          height: 560px;
          left: 50%;
          top: 48%;
          transform: translate(-50%,-50%);
        }

        .cn-rocket-glow {
          position: absolute;
          width: 230px;
          height: 230px;
          left: 50%;
          top: 42%;
          transform: translate(-50%,-50%);
          background: #873dff;
          filter: blur(80px);
          opacity: .45;
          animation: glowPulse 2.5s ease-in-out infinite;
        }

        @keyframes glowPulse {
          50% { opacity: .7; transform: translate(-50%,-50%) scale(1.18); }
        }

        .cn-orbit {
          position: absolute;
          left: 50%;
          top: 54%;
          transform: translate(-50%,-50%);
          border: 1px solid rgba(142,99,255,.22);
          border-radius: 50%;
        }

        .orbit-one {
          width: 320px;
          height: 320px;
          animation: orbitPulse 3s infinite;
        }

        .orbit-two {
          width: 430px;
          height: 430px;
          animation: orbitPulse 3s .5s infinite;
        }

        .orbit-three {
          width: 530px;
          height: 530px;
          animation: orbitPulse 3s 1s infinite;
        }

        @keyframes orbitPulse {
          50% { opacity: .35; transform: translate(-50%,-50%) scale(1.03); }
        }

        .cn-rocket {
          position: absolute;
          left: 50%;
          top: 24%;
          width: 110px;
          height: 210px;
          transform: translateX(-50%);
          animation: rocketFloat 3.5s ease-in-out infinite;
          z-index: 5;
        }

        @keyframes rocketFloat {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-13px); }
        }

        .cn-rocket-body {
          position: absolute;
          width: 72px;
          height: 142px;
          left: 19px;
          top: 25px;
          border-radius: 48% 48% 42% 42%;
          background: linear-gradient(105deg,#d6c7ff,#ffffff 45%,#c5b2ff);
          border: 2px solid rgba(255,255,255,.8);
          box-shadow:
            0 0 20px rgba(184,137,255,.9),
            inset -8px 0 14px rgba(95,50,180,.22);
          z-index: 3;
        }

        .cn-rocket-nose {
          position: absolute;
          width: 50px;
          height: 55px;
          left: 30px;
          top: 0;
          border-radius: 70% 70% 25% 25%;
          background: linear-gradient(120deg,#a578ff,#541fff);
          transform: rotate(0deg);
          z-index: 4;
          clip-path: polygon(50% 0,100% 100%,0 100%);
          box-shadow: 0 0 30px rgba(150,86,255,.8);
        }

        .cn-rocket-window {
          position: absolute;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          left: 16px;
          top: 45px;
          background: #16143b;
          border: 5px solid #8e5cff;
          box-shadow: 0 0 18px #a45cff;
          display: grid;
          place-items: center;
        }

        .cn-window-core {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%,#fff,#8bd8ff 30%,#6e35ff 75%);
        }

        .cn-rocket-fin {
          position: absolute;
          width: 38px;
          height: 75px;
          top: 95px;
          background: linear-gradient(140deg,#793aff,#3b21a5);
          z-index: 2;
        }

        .cn-rocket-fin.left {
          left: 0;
          clip-path: polygon(100% 0,100% 100%,0 75%);
        }

        .cn-rocket-fin.right {
          right: 0;
          clip-path: polygon(0 0,100% 75%,0 100%);
        }

        .cn-flame {
          position: absolute;
          top: 153px;
          left: 34px;
          width: 42px;
          height: 90px;
          z-index: 1;
        }

        .cn-flame span {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50% 50% 55% 55%;
          background: linear-gradient(#fff,#b94dff,#5e2dff);
          filter: blur(1px);
        }

        .cn-flame span:nth-child(1) {
          width: 40px;
          height: 88px;
          animation: flame 0.22s infinite alternate;
        }

        .cn-flame span:nth-child(2) {
          width: 24px;
          height: 62px;
          background: linear-gradient(#fff,#d06cff,#813aff);
          animation: flame .18s infinite alternate-reverse;
        }

        .cn-flame span:nth-child(3) {
          width: 10px;
          height: 42px;
          background: white;
          animation: flame .16s infinite alternate;
        }

        @keyframes flame {
          to { transform: translateX(-50%) scaleY(.75) scaleX(1.15); }
        }

        .cn-platform {
          position: absolute;
          left: 50%;
          top: 65%;
          width: 370px;
          height: 100px;
          transform: translateX(-50%);
        }

        .cn-platform-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          border: 3px solid #8b42ff;
          box-shadow: 0 0 22px rgba(139,66,255,.7);
        }

        .ring-a { width: 300px; height: 76px; }
        .ring-b { width: 235px; height: 60px; border-color:#bc55ff; }
        .ring-c { width: 170px; height: 44px; border-color:#6c48ff; }

        .cn-platform-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 130px;
          height: 32px;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          background: #7c38ff;
          box-shadow:
            0 0 40px #9c3dff,
            0 0 80px rgba(156,61,255,.7);
        }

        .cn-particle {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #b68aff;
          box-shadow: 0 0 15px #a66bff;
          animation: particleFloat 3s infinite ease-in-out;
        }

        .p1 { left: 20%; top: 20%; }
        .p2 { left: 78%; top: 25%; animation-delay: .7s; }
        .p3 { left: 15%; top: 65%; animation-delay: 1s; }
        .p4 { left: 85%; top: 62%; animation-delay: 1.4s; }
        .p5 { left: 35%; top: 78%; animation-delay: 1.8s; }
        .p6 { left: 67%; top: 15%; animation-delay: 2.2s; }

        @keyframes particleFloat {
          50% { transform: translateY(-18px); opacity: .45; }
        }

        .cn-data-card,
        .campaign-card,
        .career-card,
        .business-card {
          position: absolute;
          border: 1px solid rgba(176,148,255,.25);
          background: linear-gradient(145deg,rgba(40,39,77,.92),rgba(22,22,54,.88));
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 45px rgba(0,0,0,.25);
          color: white;
          border-radius: 18px;
          z-index: 8;
          animation: cardFloat 4s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-9px) rotate(.5deg); }
        }

        .cn-data-card {
          padding: 17px;
        }

        .data-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #bfc1d7;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 9px;
        }

        .cn-data-card strong {
          font-size: 24px;
          display: block;
        }

        .cn-data-card small {
          color: #8f92ae;
          font-size: 9px;
        }

        .mini-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          font-size: 12px;
        }

        .mini-icon.purple { background:#754aff; }
        .mini-icon.green { background:#164e4e; color:#51e6bd; }
        .mini-icon.pink { background:#542054; color:#e98aff; }

        .green-text { color:#58e5bc !important; }
        .pink-text { color:#f56fc1 !important; }

        .card-top-left {
          width: 225px;
          left: 3%;
          top: 10%;
        }

        .card-top-right {
          width: 215px;
          right: 4%;
          top: 12%;
          animation-delay: .5s;
        }

        .card-left {
          width: 190px;
          left: 5%;
          top: 42%;
          animation-delay: 1s;
        }

        .card-right {
          width: 205px;
          right: 7%;
          top: 36%;
          animation-delay: 1.3s;
        }

        .card-bottom-right {
          width: 210px;
          right: 1%;
          bottom: 10%;
          animation-delay: 1.8s;
        }

        .bar-chart {
          height: 85px;
          display: flex;
          gap: 7px;
          align-items: end;
          margin-top: 8px;
        }

        .bar-chart i {
          flex: 1;
          border-radius: 5px 5px 1px 1px;
          background: linear-gradient(#d681ff,#743fff);
          box-shadow: 0 0 10px rgba(130,66,255,.35);
        }

        .donut {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          margin: 10px auto;
          display: grid;
          place-items: center;
          background: conic-gradient(#8b45ff 0 78%,#29284c 78% 100%);
          position: relative;
        }

        .donut::after {
          content: "";
          position: absolute;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background:#222144;
        }

        .donut span {
          z-index: 2;
          font-weight: 900;
        }

        .tiny-lines {
          display:flex;
          gap:5px;
        }

        .tiny-lines i {
          flex:1;
          height:5px;
          background:#754aff;
          border-radius:5px;
        }

        .progress-row {
          display:grid;
          grid-template-columns: 70px 1fr;
          gap:6px;
          align-items:center;
          margin:10px 0;
          font-size:8px;
          color:#c0c0d5;
        }

        .progress-row div {
          height:5px;
          border-radius:10px;
          background:#323152;
          overflow:hidden;
        }

        .progress-row i {
          display:block;
          height:100%;
          background:linear-gradient(90deg,#8b5cf6,#d55cff);
          border-radius:10px;
        }

        .line-graph {
          height:45px;
          margin-top:5px;
        }

        .line-graph svg {
          width:100%;
          height:100%;
        }

        .line-graph path {
          fill:none;
          stroke:#b74eff;
          stroke-width:3;
          filter:drop-shadow(0 0 4px #9a46ff);
        }

        /* MARKETING VISUAL */

        .marketing-core {
          position:absolute;
          left:50%;
          top:52%;
          width:390px;
          height:390px;
          transform:translate(-50%,-50%);
        }

        .marketing-ring {
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          border-radius:50%;
          border:1px solid rgba(219,83,255,.3);
          animation: rotateRing 8s linear infinite;
        }

        .ring1 { width:230px;height:230px; }
        .ring2 { width:320px;height:320px; animation-direction:reverse; }
        .ring3 { width:390px;height:390px; }

        @keyframes rotateRing {
          to { transform:translate(-50%,-50%) rotate(360deg); }
        }

        .campaign-core {
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          width:160px;
          height:160px;
          border-radius:50%;
          background:radial-gradient(circle,#923eff,#411e9e);
          box-shadow:0 0 70px rgba(159,58,255,.75);
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }

        .campaign-core span,
        .campaign-core small {
          font-size:9px;
          color:#ddd3ff;
          letter-spacing:2px;
        }

        .campaign-core strong {
          font-size:42px;
          margin:5px 0;
        }

        .campaign-card {
          padding:16px;
          min-width:175px;
        }

        .campaign-card span,
        .career-card span,
        .business-card span {
          display:block;
          color:#aaaaca;
          font-size:10px;
          margin-bottom:8px;
        }

        .campaign-card strong,
        .career-card strong,
        .business-card strong {
          display:block;
          font-size:22px;
        }

        .campaign-card small,
        .career-card small,
        .business-card small {
          color:#8588a8;
          font-size:9px;
        }

        .campaign-one { left:5%;top:12%; }
        .campaign-two { right:5%;top:18%; animation-delay:.6s; }
        .campaign-three { left:4%;bottom:15%; animation-delay:1s; }
        .campaign-four { right:5%;bottom:12%; animation-delay:1.5s; }

        .mini-bars {
          height:35px;
          display:flex;
          gap:5px;
          align-items:end;
          margin-top:10px;
        }

        .mini-bars i {
          flex:1;
          background:#d252ff;
          border-radius:3px;
        }

        .mini-bars i:nth-child(1){height:35%}
        .mini-bars i:nth-child(2){height:55%}
        .mini-bars i:nth-child(3){height:42%}
        .mini-bars i:nth-child(4){height:75%}
        .mini-bars i:nth-child(5){height:95%}

        .conversion-path {
          display:flex;
          gap:12px;
          margin-top:12px;
        }

        .conversion-path b {
          width:22px;
          height:22px;
          border-radius:50%;
          border:2px solid #a855f7;
          position:relative;
        }

        .conversion-path b:not(:last-child)::after {
          content:"";
          position:absolute;
          width:12px;
          height:1px;
          background:#a855f7;
          right:-14px;
          top:9px;
        }

        .audience {
          display:flex;
          gap:5px;
          color:#b56cff;
          font-size:22px;
        }

        /* CAREER VISUAL */

        .career-roadmap {
          position:absolute;
          left:50%;
          top:50%;
          width:480px;
          height:380px;
          transform:translate(-50%,-50%);
        }

        .career-line {
          position:absolute;
          left:48px;
          right:48px;
          top:50%;
          height:3px;
          background:linear-gradient(90deg,#7046ff,#ce51ff,#53e1ba);
          box-shadow:0 0 20px rgba(131,69,255,.6);
        }

        .career-node {
          position:absolute;
          top:42%;
          width:100px;
          text-align:center;
          transform:translateY(-50%);
        }

        .career-node span {
          color:#8c7aff;
          font-size:10px;
          font-weight:900;
        }

        .career-node-icon {
          width:70px;
          height:70px;
          margin:7px auto;
          border-radius:20px;
          display:grid;
          place-items:center;
          font-size:27px;
          background:linear-gradient(145deg,#743eff,#2e246f);
          border:1px solid rgba(182,143,255,.45);
          box-shadow:0 0 30px rgba(126,66,255,.3);
        }

        .career-node strong {
          display:block;
          color:white;
          font-size:13px;
        }

        .career-node small {
          color:#8e91ad;
          font-size:9px;
        }

        .node-1{left:0}
        .node-2{left:127px}
        .node-3{right:127px}
        .node-4{right:0}

        .career-card {
          padding:16px;
          min-width:175px;
        }

        .career-card-one { left:2%;top:8%; }
        .career-card-two { right:3%;top:11%; animation-delay:.8s; }
        .career-card-three { left:50%;bottom:6%;transform:translateX(-50%);animation-delay:1.3s; }

        .score-track,
        .execution-line {
          height:6px;
          border-radius:10px;
          background:#303052;
          margin-top:10px;
          overflow:hidden;
        }

        .score-track i {
          display:block;
          width:92%;
          height:100%;
          background:linear-gradient(90deg,#7246ff,#b84eff);
        }

        /* BUSINESS VISUAL */

        .business-center {
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          width:210px;
          height:210px;
          border-radius:50%;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          background:radial-gradient(circle,#783bff,#21184e);
          border:1px solid #a06cff;
          box-shadow:0 0 70px rgba(126,58,255,.7);
          z-index:5;
        }

        .business-glow {
          position:absolute;
          inset:-25px;
          border:1px solid rgba(164,111,255,.25);
          border-radius:50%;
          animation:businessPulse 2s infinite;
        }

        @keyframes businessPulse {
          50%{transform:scale(1.12);opacity:.3}
        }

        .business-icon {
          font-size:50px;
          color:#fff;
        }

        .business-center strong {
          font-size:19px;
          letter-spacing:3px;
        }

        .business-center small {
          color:#b9aaff;
          letter-spacing:4px;
        }

        .business-card {
          padding:17px;
          min-width:180px;
        }

        .bc-one { left:4%;top:12%; }
        .bc-two { right:4%;top:16%;animation-delay:.5s; }
        .bc-three { left:4%;bottom:12%;animation-delay:1s; }
        .bc-four { right:4%;bottom:12%;animation-delay:1.5s; }

        .market-meter {
          height:8px;
          border-radius:20px;
          background:#303052;
          margin:12px 0 7px;
        }

        .market-meter i {
          display:block;
          width:82%;
          height:100%;
          border-radius:20px;
          background:linear-gradient(90deg,#7246ff,#51ddb2);
        }

        .strategy-dots {
          display:flex;
          gap:6px;
          margin-top:10px;
        }

        .strategy-dots i {
          width:18px;
          height:6px;
          border-radius:10px;
          background:#7548ff;
        }

        .strategy-dots i:last-child {
          background:#363650;
        }

        .execution-line i {
          display:block;
          width:82%;
          height:100%;
          background:#55e3b7;
        }

        /* LOWER SECTIONS */

        .cn-process-section {
          width:calc(100% - 100px);
          max-width:1440px;
          margin:0 auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
        }

        .cn-process,
        .cn-best {
          background:rgba(255,255,255,.9);
          border:1px solid #e5e7f2;
          border-radius:22px;
          padding:28px 26px;
          box-shadow:0 10px 35px rgba(30,34,80,.04);
        }

        .section-kicker {
          color:#6645ed;
          font-size:10px;
          font-weight:900;
          letter-spacing:1.2px;
        }

        .section-heading h2 {
          margin:8px 0 5px;
          font-size:27px;
          letter-spacing:-1px;
        }

        .section-heading p {
          margin:0;
          color:#68708d;
          font-size:13px;
          line-height:1.6;
        }

        .process-flow {
          margin-top:32px;
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
        }

        .process-step {
          flex:1;
          min-width:0;
        }

        .process-icon {
          width:64px;
          height:64px;
          border-radius:50%;
          border:1px solid #ddd7ff;
          display:grid;
          place-items:center;
          color:#6945ff;
          font-size:22px;
          background:#fbfaff;
          margin-bottom:10px;
          transition:.3s ease;
        }

        .process-step:hover .process-icon {
          transform:translateY(-6px) rotate(5deg);
          box-shadow:0 12px 25px rgba(105,69,255,.14);
        }

        .icon-2 { color:#2585ff;border-color:#d5e7ff; }
        .icon-3 { color:#9a4cff;border-color:#ead9ff; }
        .icon-4 { color:#19b97c;border-color:#cef4e5; }

        .process-number {
          font-size:10px;
          font-weight:900;
          color:#a0a5bd;
        }

        .process-step h3 {
          font-size:15px;
          margin:5px 0;
        }

        .process-step p {
          font-size:10px;
          color:#68708d;
          line-height:1.55;
          padding-right:8px;
        }

        .process-arrow {
          padding:22px 6px 0;
          color:#9aa0bd;
        }

        .capability-grid {
          margin-top:30px;
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:12px;
        }

        .capability-card {
          border:1px solid #e8e8f3;
          border-radius:16px;
          padding:16px;
          background:#fff;
          transition:.3s ease;
        }

        .capability-card:hover {
          transform:translateY(-5px);
          box-shadow:0 15px 30px rgba(53,38,120,.08);
          border-color:#d6ccff;
        }

        .capability-icon {
          width:38px;
          height:38px;
          border-radius:10px;
          display:grid;
          place-items:center;
          color:#fff;
          font-weight:900;
          margin-bottom:12px;
        }

        .cap-1{background:linear-gradient(135deg,#6541ff,#8e52ff)}
        .cap-2{background:linear-gradient(135deg,#ed489b,#ff6dc0)}
        .cap-3{background:linear-gradient(135deg,#2879ef,#38a3ff)}
        .cap-4{background:linear-gradient(135deg,#16bd70,#35d995)}

        .capability-card h3 {
          font-size:12px;
          margin:0 0 8px;
        }

        .capability-card p {
          color:#747994;
          font-size:10px;
          line-height:1.55;
          min-height:49px;
        }

        .capability-card button {
          border:0;
          background:none;
          color:#613aff;
          font-size:10px;
          font-weight:900;
          padding:0;
          cursor:pointer;
        }

        .capability-card button span {
          font-size:15px;
          margin-left:3px;
        }

        .cn-metrics {
          width:calc(100% - 100px);
          max-width:1440px;
          margin:16px auto 45px;
          background:white;
          border:1px solid #e5e7f2;
          border-radius:22px;
          padding:24px 28px;
          display:grid;
          grid-template-columns:repeat(6,1fr);
          box-shadow:0 10px 35px rgba(30,34,80,.04);
        }

        .metric {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:12px;
          border-right:1px solid #ececf4;
        }

        .metric:last-child {
          border-right:0;
        }

        .metric-icon {
          color:#6744ff;
          font-size:27px;
        }

        .metric strong {
          display:block;
          font-size:22px;
          line-height:1;
        }

        .metric small {
          display:block;
          color:#777d98;
          font-size:9px;
          margin-top:6px;
        }

        /* RESPONSIVE */

        @media (max-width:1100px) {
          .cn-hero,
          .cn-process-section,
          .cn-metrics {
            width:calc(100% - 32px);
          }

          .cn-hero-inner {
            grid-template-columns:1fr;
          }

          .cn-hero {
            min-height:auto;
          }

          .cn-hero-copy {
            min-height:510px;
            padding:55px 45px 40px;
          }

          .cn-visual {
            min-height:580px;
          }

          .cn-slide-dots {
            right:50%;
            transform:translateX(50%);
          }

          .cn-process-section {
            grid-template-columns:1fr;
          }

          .cn-metrics {
            grid-template-columns:repeat(3,1fr);
            gap:20px;
          }

          .metric:nth-child(3) {
            border-right:0;
          }
        }

        @media (max-width:700px) {
          .cn-hero,
          .cn-process-section,
          .cn-metrics {
            width:calc(100% - 20px);
          }

          .cn-hero {
            margin-top:12px;
            border-radius:20px;
          }

          .cn-hero-copy {
            min-height:550px;
            padding:40px 24px 25px;
          }

          .cn-eyebrow {
            font-size:10px;
            margin-bottom:20px;
          }

          .cn-hero-title {
            font-size:45px;
            letter-spacing:-2.8px;
          }

          .cn-hero-description {
            font-size:13px;
            line-height:1.65;
          }

          .cn-hero-stats {
            gap:11px;
            margin-top:25px;
          }

          .cn-stat strong {
            font-size:18px;
          }

          .cn-stat span {
            font-size:8px;
          }

          .cn-slider-controls {
            right:16px;
            top:16px;
          }

          .cn-slider-control {
            width:42px;
            height:42px;
          }

          .cn-visual {
            min-height:520px;
          }

          .cn-rocket-wrap {
            transform:translate(-50%,-50%) scale(.72);
          }

          .cn-data-card {
            transform:scale(.72);
            transform-origin:center;
          }

          .card-top-left {
            left:-5%;
            top:8%;
          }

          .card-top-right {
            right:-7%;
            top:10%;
          }

          .card-left {
            left:-5%;
            top:48%;
          }

          .card-right {
            right:-7%;
            top:42%;
          }

          .card-bottom-right {
            right:-8%;
            bottom:5%;
          }

          .campaign-card,
          .career-card,
          .business-card {
            transform:scale(.72);
          }

          .marketing-core,
          .career-roadmap,
          .business-center {
            transform:translate(-50%,-50%) scale(.72);
          }

          .cn-process,
          .cn-best {
            padding:22px 17px;
          }

          .process-flow {
            flex-direction:column;
            gap:18px;
          }

          .process-step {
            width:100%;
          }

          .process-arrow {
            display:none;
          }

          .capability-grid {
            grid-template-columns:1fr;
          }

          .cn-metrics {
            grid-template-columns:repeat(2,1fr);
            padding:18px 12px;
          }

          .metric {
            border-right:0;
            justify-content:flex-start;
          }

          .metric-icon {
            font-size:21px;
          }

          .metric strong {
            font-size:18px;
          }
        }
      `}</style>

      <main
        className="cn-home"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <section className="cn-hero">
          <div className="cn-hero-inner" key={activeSlide}>
            <div className="cn-hero-copy">
              <div className="cn-eyebrow">✦ &nbsp; {slide.eyebrow}</div>

              <h1 className="cn-hero-title">{slide.title}</h1>

              <p className="cn-hero-description">
                {slide.description}
              </p>

              <div className="cn-actions">
                <button
                  className="cn-primary-btn"
                  onClick={() => {
                    window.location.href = "/expertise";
                  }}
                >
                  Explore Core Expertise&nbsp; →
                </button>

                <button
                  className="cn-secondary-btn"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  ◉ &nbsp; Consult With Expert
                </button>
              </div>

              <div className="cn-hero-stats">
                <div className="cn-stat">
                  <strong>{slide.stat}</strong>
                  <span>{slide.statLabel}</span>
                </div>

                <div className="cn-stat-divider" />

                <div className="cn-stat">
                  <strong>13+</strong>
                  <span>Expertise Areas</span>
                </div>

                <div className="cn-stat-divider" />

                <div className="cn-stat">
                  <strong>100+</strong>
                  <span>Tools & Frameworks</span>
                </div>

                <div className="cn-stat-divider" />

                <div className="cn-rating">
                  <span className="cn-rating-star">★</span>
                  <div className="cn-stat">
                    <strong>4.9/5</strong>
                    <span>Client Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <HeroVisual type={slide.visual} />
          </div>

          <div className="cn-slider-controls">
            <button
              className="cn-slider-control"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              <ArrowIcon direction="left" />
            </button>

            <button
              className="cn-slider-control"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div className="cn-slide-dots">
            {slides.map((item, index) => (
              <button
                key={item.eyebrow}
                className={`cn-dot ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <ProcessSection />

        <MetricsSection />
      </main>
    </>
  );
}

export default HomeView;

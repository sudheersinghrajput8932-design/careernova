import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

import { TabId } from '../../types';
import { openAiAssistant } from '../../utils/aiAssistantTrigger';

interface HomeViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenAuth?: () => void;
}

type HeroVisualType = 'growth' | 'marketing' | 'career' | 'business';

interface HeroSlide {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  stat: string;
  statLabel: string;
  visual: HeroVisualType;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: 'CAREERNOVA GROWTH ENGINE',
    title: (
      <>
        Turn Skills, Strategy &amp; Technology Into{' '}
        <span className="cn-gradient-text">Leadership.</span>
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
        <span className="cn-gradient-text">Attention Into Growth.</span>
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
        <span className="cn-gradient-text">Stronger Career.</span>
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
        <span className="cn-gradient-text">Measurable Results.</span>
      </>
    ),
    description:
      'Connect business strategy, analytics, revenue planning, technology, and execution into one practical growth framework.',
    stat: '100+',
    statLabel: 'Tools & Frameworks',
    visual: 'business',
  },
];

/* =========================================================
   SOCIAL RAIL
========================================================= */

const CareerNovaSocialRail = () => {
  const whatsappMessage = encodeURIComponent(
    'Hi Sudhir! I would like to discuss a CareerNova consultation.'
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
  );
};

/* =========================================================
   HERO VISUALS
========================================================= */

const GrowthVisual = () => (
  <div className="cn-hero-visual">
    <div className="cn-orbit cn-orbit-1" />
    <div className="cn-orbit cn-orbit-2" />
    <div className="cn-orbit cn-orbit-3" />

    <motion.div
      className="cn-growth-core"
      animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Rocket />
      <span>GROWTH</span>
      <strong>94%</strong>
    </motion.div>

    <div className="cn-mini-card cn-mini-top-left">
      <span>Business Analytics</span>
      <strong>+42%</strong>
      <div className="cn-mini-bars">
        <i style={{ height: '35%' }} />
        <i style={{ height: '55%' }} />
        <i style={{ height: '45%' }} />
        <i style={{ height: '72%' }} />
        <i style={{ height: '92%' }} />
      </div>
    </div>

    <div className="cn-mini-card cn-mini-top-right">
      <span>Revenue Growth</span>
      <strong className="cn-green">+240%</strong>
      <div className="cn-progress">
        <span style={{ width: '82%' }} />
      </div>
    </div>

    <div className="cn-mini-card cn-mini-bottom-left">
      <span>Marketing Growth</span>
      <strong>78%</strong>
      <div className="cn-ring">
        <span>78</span>
      </div>
    </div>

    <div className="cn-mini-card cn-mini-bottom-right">
      <span>Project Progress</span>
      <strong className="cn-green">On Track</strong>
      <div className="cn-progress">
        <span style={{ width: '88%' }} />
      </div>
    </div>
  </div>
);

const MarketingVisual = () => (
  <div className="cn-hero-visual">
    <div className="cn-orbit cn-orbit-1" />
    <div className="cn-orbit cn-orbit-2" />

    <motion.div
      className="cn-growth-core cn-marketing-core"
      animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Target />
      <span>CAMPAIGN</span>
      <strong>78%</strong>
      <small>CONVERSION</small>
    </motion.div>

    <div className="cn-mini-card cn-mini-top-left">
      <span>Campaign Reach</span>
      <strong>1.8M</strong>
      <div className="cn-mini-bars">
        <i style={{ height: '40%' }} />
        <i style={{ height: '58%' }} />
        <i style={{ height: '48%' }} />
        <i style={{ height: '76%' }} />
        <i style={{ height: '94%' }} />
      </div>
    </div>

    <div className="cn-mini-card cn-mini-top-right">
      <span>Campaign ROI</span>
      <strong className="cn-green">4.6x</strong>
      <small>Return generated</small>
    </div>

    <div className="cn-mini-card cn-mini-bottom-left">
      <span>Audience Segments</span>
      <div className="cn-avatar-row">
        <b>A</b>
        <b>B</b>
        <b>C</b>
        <b>D</b>
      </div>
    </div>

    <div className="cn-mini-card cn-mini-bottom-right">
      <span>Conversion Path</span>
      <div className="cn-path">
        <b>1</b>
        <i />
        <b>2</b>
        <i />
        <b>3</b>
      </div>
    </div>
  </div>
);

const CareerVisual = () => (
  <div className="cn-hero-visual">
    <div className="cn-career-line" />

    {[
      {
        number: '01',
        title: 'Learn',
        sub: 'Skills',
        icon: <GraduationCap />,
      },
      {
        number: '02',
        title: 'Build',
        sub: 'Projects',
        icon: <Code2 />,
      },
      {
        number: '03',
        title: 'Prove',
        sub: 'Ability',
        icon: <CheckCircle2 />,
      },
      {
        number: '04',
        title: 'Launch',
        sub: 'Career',
        icon: <ArrowRight />,
      },
    ].map((item, index) => (
      <motion.div
        key={item.number}
        className="cn-career-node"
        style={{ left: `${4 + index * 24}%` }}
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3 + index * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span>{item.number}</span>

        <div className="cn-career-icon">{item.icon}</div>

        <strong>{item.title}</strong>
        <small>{item.sub}</small>
      </motion.div>
    ))}

    <div className="cn-mini-card cn-mini-top-left">
      <span>Skill Score</span>
      <strong>92%</strong>
      <div className="cn-progress">
        <span style={{ width: '92%' }} />
      </div>
    </div>

    <div className="cn-mini-card cn-mini-top-right">
      <span>Career Match</span>
      <strong className="cn-green">Excellent</strong>
      <small>Profile alignment</small>
    </div>

    <div className="cn-mini-card cn-mini-bottom-left">
      <span>Next Career Goal</span>
      <strong>Build Portfolio</strong>
      <small>3 milestones remaining</small>
    </div>
  </div>
);

const BusinessVisual = () => (
  <div className="cn-hero-visual">
    <div className="cn-orbit cn-orbit-1" />
    <div className="cn-orbit cn-orbit-2" />

    <motion.div
      className="cn-growth-core"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <TrendingUp />
      <span>GROWTH</span>
      <strong>82%</strong>
    </motion.div>

    <div className="cn-mini-card cn-mini-top-left">
      <span>Revenue</span>
      <strong>₹24.8L</strong>
      <small className="cn-green">+18.6% this quarter</small>
    </div>

    <div className="cn-mini-card cn-mini-top-right">
      <span>Market Position</span>
      <strong className="cn-green">82%</strong>
      <div className="cn-progress">
        <span style={{ width: '82%' }} />
      </div>
    </div>

    <div className="cn-mini-card cn-mini-bottom-left">
      <span>Strategy Score</span>
      <strong className="cn-green">94/100</strong>
      <div className="cn-score-dots">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>

    <div className="cn-mini-card cn-mini-bottom-right">
      <span>Execution</span>
      <strong>On Track</strong>
      <div className="cn-progress">
        <span style={{ width: '84%' }} />
      </div>
    </div>
  </div>
);

const HeroVisual = ({ type }: { type: HeroVisualType }) => {
  if (type === 'marketing') return <MarketingVisual />;
  if (type === 'career') return <CareerVisual />;
  if (type === 'business') return <BusinessVisual />;

  return <GrowthVisual />;
};

/* =========================================================
   PROCESS SECTION
========================================================= */

const ProcessSection = ({
  onNavigate,
}: {
  onNavigate: (tab: TabId, subTool?: string) => void;
}) => {
  const steps = [
    {
      num: '01',
      title: 'Ideate',
      icon: '✦',
      text: 'We understand your challenges and identify the right opportunities.',
    },
    {
      num: '02',
      title: 'Plan',
      icon: '▣',
      text: 'We design a practical strategy and actionable roadmap.',
    },
    {
      num: '03',
      title: 'Build',
      icon: '</>',
      text: 'We build, integrate and implement with speed and precision.',
    },
    {
      num: '04',
      title: 'Measure',
      icon: '↗',
      text: 'We track results, optimize continuously and drive sustainable growth.',
    },
  ];

  const capabilities = [
    {
      title: 'Business & Analytics',
      text: 'Financial modeling, BI dashboards, forecasting and data-driven insights.',
      icon: '▥',
      tab: 'business' as TabId,
      sub: 'analytics',
    },
    {
      title: 'Marketing & Growth',
      text: 'Campaign strategy, funnels, content, ads and growth marketing systems.',
      icon: '⌁',
      tab: 'business' as TabId,
      sub: 'marketing',
    },
    {
      title: 'Engineering & Tech',
      text: 'Web, mobile, cloud, APIs and scalable digital product development.',
      icon: '</>',
      tab: 'services' as TabId,
      sub: 'engineering',
    },
    {
      title: 'Career & Student Tools',
      text: 'Resume tools, mock tests, career guidance and practical learning resources.',
      icon: '◆',
      tab: 'career' as TabId,
      sub: 'roadmap-guide',
    },
  ];

  return (
    <section className="cn-process-section">
      <div className="cn-process-card">
        <div className="cn-section-heading">
          <span>HOW WE CREATE IMPACT</span>
          <h2>Our Proven Process</h2>
          <p>
            From idea to impact — we follow a simple, data-driven approach.
          </p>
        </div>

        <div className="cn-process-grid">
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="cn-process-step">
                <div className={`cn-process-icon icon-${index + 1}`}>
                  {step.icon}
                </div>

                <small>{step.num}</small>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="cn-process-arrow">
                  <ArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="cn-process-card">
        <div className="cn-section-heading">
          <span>OUR CORE CAPABILITIES</span>
          <h2>What We Do Best</h2>
          <p>End-to-end expertise to help you grow, scale and lead.</p>
        </div>

        <div className="cn-capability-grid">
          {capabilities.map((item, index) => (
            <button
              key={item.title}
              className="cn-capability-card"
              onClick={() => onNavigate(item.tab, item.sub)}
              type="button"
            >
              <div className={`cn-capability-icon cap-${index + 1}`}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span>
                Explore <ArrowRight />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   REVIEWS
========================================================= */

interface Review {
  quote: string;
  name: string;
  role: string;
  rating: number;
  badge: string;
  category: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      "CareerNova's financial and break-even calculators gave us absolute clarity on our startup's unit economics before our seed round.",
    name: 'Aarav Sharma',
    role: 'Tech Founder & CEO',
    rating: 5,
    badge: 'Startup Founder',
    category: 'Tools & Finance',
  },
  {
    quote:
      'The full-stack web engineering expertise and architecture guidance helped our team scale traffic 10x without any downtime.',
    name: 'Vikram Malhotra',
    role: 'CTO & Lead Architect',
    rating: 5,
    badge: 'Core Expertise',
    category: 'Web Engineering',
  },
  {
    quote:
      'The AI career roadmap and resume analyzer tools completely transformed my interview prep. Landed an SDE role at a top product company!',
    name: 'Priya Verma',
    role: 'Senior Software Engineer',
    rating: 5,
    badge: 'Career Roadmap',
    category: 'Tools & AI',
  },
  {
    quote:
      'Incredible suite of free tools. The cold email generator and strategic positioning templates saved our sales team dozens of hours.',
    name: 'Rohan Mehta',
    role: 'Growth & Marketing Lead',
    rating: 5,
    badge: 'B2B Outreach',
    category: 'Business Strategy',
  },
  {
    quote:
      'Their custom iOS and Android app development execution is top-tier. Clean code, smooth animations, and delivered right on schedule.',
    name: 'Neha Kapoor',
    role: 'Product Manager',
    rating: 5,
    badge: 'Product Development',
    category: 'Engineering',
  },
  {
    quote:
      'CareerNova helped us turn scattered business ideas into a practical roadmap with measurable milestones and clear priorities.',
    name: 'Aditya Roy',
    role: 'Head of Sales',
    rating: 5,
    badge: 'Lead Generation',
    category: 'Business Growth',
  },
];

/* =========================================================
   GROWTH GRAPH
========================================================= */

const GrowthSignalGraph = () => {
  return (
    <section className="cn-growth-section">
      <div className="cn-growth-panel">
        <div className="cn-growth-header">
          <div>
            <span className="cn-growth-kicker">
              CAREERNOVA GROWTH SIGNAL
            </span>

            <h2>From Strategy to Measurable Growth</h2>

            <p>
              Turning expertise, technology and execution into visible progress.
            </p>
          </div>

          <div className="cn-growth-score">
            <span>Growth Index</span>
            <strong>94/100</strong>
            <small>Strong momentum</small>
          </div>
        </div>

        <div className="cn-growth-chart">
          <div className="cn-chart-grid" />

          <svg
            className="cn-growth-svg"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="cnGrowthLine"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>

              <linearGradient
                id="cnGrowthArea"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#8b5cf6"
                  stopOpacity=".28"
                />
                <stop
                  offset="100%"
                  stopColor="#8b5cf6"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              className="cn-growth-area"
              d="
                M0 250
                C80 235 110 220 170 225
                C230 230 255 180 320 195
                C390 210 420 150 480 165
                C540 180 575 125 635 140
                C700 155 730 105 790 115
                C850 125 900 75 1000 45
                L1000 300
                L0 300 Z
              "
              fill="url(#cnGrowthArea)"
            />

            <path
              className="cn-growth-path"
              d="
                M0 250
                C80 235 110 220 170 225
                C230 230 255 180 320 195
                C390 210 420 150 480 165
                C540 180 575 125 635 140
                C700 155 730 105 790 115
                C850 125 900 75 1000 45
              "
              fill="none"
              stroke="url(#cnGrowthLine)"
              strokeWidth="7"
              strokeLinecap="round"
            />

            <circle cx="170" cy="225" r="8" className="cn-chart-dot" />
            <circle cx="320" cy="195" r="8" className="cn-chart-dot" />
            <circle cx="480" cy="165" r="8" className="cn-chart-dot" />
            <circle cx="635" cy="140" r="8" className="cn-chart-dot" />
            <circle cx="790" cy="115" r="8" className="cn-chart-dot" />
            <circle cx="1000" cy="45" r="9" className="cn-chart-dot" />
          </svg>

          <div className="cn-chart-labels">
            <span>Planning</span>
            <span>Building</span>
            <span>Optimising</span>
            <span>Scaling</span>
            <span>Leadership</span>
          </div>
        </div>

        <div className="cn-growth-bottom">
          <div>
            <strong>01</strong>
            <span>Strategy</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Technology</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Execution</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Measurement</span>
          </div>

          <div className="cn-growth-final">
            <TrendingUp />
            <span>Continuous Growth</span>
          </div>
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
    ['✦', '5+', 'Years of Impact'],
    ['♧', '500+', 'Happy Clients'],
    ['◉', '13+', 'Expertise Areas'],
    ['🚀', '100+', 'Tools & Frameworks'],
    ['☆', '4.9/5', 'Client Rating'],
    ['◎', '25+', 'Countries Reached'],
  ];

  return (
    <section className="cn-metrics">
      {metrics.map(([icon, value, label]) => (
        <div className="cn-metric" key={label}>
          <span>{icon}</span>

          <div>
            <strong>{value}</strong>
            <small>{label}</small>
          </div>
        </div>
      ))}
    </section>
  );
};

/* =========================================================
   HOME VIEW
========================================================= */

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = HERO_SLIDES[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  /*
   * IMPORTANT:
   * Hero autoplay intentionally does NOT pause on hover.
   * This prevents the "slide only changes when arrow is clicked"
   * issue from the earlier version.
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */

        .cn-home {
          width: 100%;
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(113,56,255,.06),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 45%,
              rgba(139,92,246,.05),
              transparent 28%
            ),
            #f8f9fd;
          color: #11162b;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          overflow: hidden;
        }

        .cn-home *,
        .cn-home *::before,
        .cn-home *::after {
          box-sizing: border-box;
        }

        .cn-home button {
          font-family: inherit;
        }

        /* =====================================================
           SOCIAL RAIL
        ===================================================== */

        .cn-social-rail {
          position: fixed;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 90;
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
          border: 1px solid rgba(255,255,255,.35);
          box-shadow: 0 10px 25px rgba(30,25,75,.20);
          transition:
            transform .22s ease,
            box-shadow .22s ease,
            filter .22s ease;
        }

        .cn-social-item:hover {
          transform: translateX(-5px) scale(1.06);
          box-shadow: 0 15px 32px rgba(30,25,75,.30);
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
          background: linear-gradient(
            145deg,
            #833AB4,
            #E1306C,
            #FCAF45
          );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .cn-hero {
          position: relative;
          width: calc(100% - 90px);
          max-width: 1440px;
          height: 475px;
          margin: 14px auto 22px;
          border-radius: 26px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 72% 48%,
              rgba(111,53,255,.20),
              transparent 34%
            ),
            radial-gradient(
              circle at 88% 18%,
              rgba(196,55,255,.10),
              transparent 26%
            ),
            #070a2e;
          border: 1px solid rgba(124,77,255,.42);
          box-shadow:
            0 25px 70px rgba(54,35,130,.18),
            inset 0 1px 0 rgba(255,255,255,.08);
        }

        .cn-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(121,93,255,.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(121,93,255,.055) 1px,
              transparent 1px
            );
          background-size: 42px 42px;
          pointer-events: none;
        }

        .cn-hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 46% 54%;
          height: 100%;
        }

        .cn-hero-copy {
          position: relative;
          z-index: 5;
          padding: 42px 25px 28px 42px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cn-eyebrow {
          width: fit-content;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(124,77,255,.12);
          border: 1px solid rgba(139,92,246,.28);
          color: #c7b7ff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .08em;
          margin-bottom: 18px;
        }

        .cn-hero-title {
          margin: 0;
          max-width: 610px;
          color: #fff;
          font-size: clamp(39px, 4.3vw, 65px);
          line-height: .99;
          letter-spacing: -3px;
          font-weight: 950;
        }

        .cn-gradient-text {
          background:
            linear-gradient(
              100deg,
              #7652ff,
              #c13cff,
              #8b5cf6
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cn-hero-description {
          max-width: 575px;
          margin: 17px 0 0;
          color: #cbd0e5;
          font-size: 13px;
          line-height: 1.65;
        }

        .cn-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .cn-primary-btn,
        .cn-secondary-btn {
          border: 0;
          cursor: pointer;
          min-height: 42px;
          padding: 0 17px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 900;
          transition:
            transform .2s ease,
            box-shadow .2s ease,
            background .2s ease;
        }

        .cn-primary-btn {
          color: #fff;
          background:
            linear-gradient(
              100deg,
              #5b3df5,
              #842cf3
            );
          box-shadow: 0 10px 26px rgba(108,56,255,.30);
        }

        .cn-secondary-btn {
          color: #fff;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.20);
        }

        .cn-primary-btn:hover,
        .cn-secondary-btn:hover {
          transform: translateY(-2px);
        }

        .cn-hero-stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 19px;
        }

        .cn-stat {
          display: flex;
          flex-direction: column;
        }

        .cn-stat strong {
          color: #fff;
          font-size: 18px;
          line-height: 1;
        }

        .cn-stat span {
          margin-top: 5px;
          color: #737b9a;
          font-size: 8px;
        }

        .cn-stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255,255,255,.12);
        }

        .cn-rating {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .cn-rating-star {
          color: #fbbf24;
          font-size: 20px;
        }

        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .cn-hero-visual {
          position: relative;
          width: 100%;
          height: 100%;
          min-width: 0;
          overflow: hidden;
        }

        .cn-orbit {
          position: absolute;
          left: 50%;
          top: 52%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          border: 1px solid rgba(139,92,246,.20);
        }

        .cn-orbit-1 {
          width: 240px;
          height: 240px;
          animation: cn-spin 18s linear infinite;
        }

        .cn-orbit-2 {
          width: 330px;
          height: 330px;
          animation: cn-spin-reverse 25s linear infinite;
        }

        .cn-orbit-3 {
          width: 410px;
          height: 410px;
          animation: cn-spin 32s linear infinite;
        }

        @keyframes cn-spin {
          from {
            transform: translate(-50%,-50%) rotate(0deg);
          }
          to {
            transform: translate(-50%,-50%) rotate(360deg);
          }
        }

        @keyframes cn-spin-reverse {
          from {
            transform: translate(-50%,-50%) rotate(360deg);
          }
          to {
            transform: translate(-50%,-50%) rotate(0deg);
          }
        }

        .cn-growth-core {
          position: absolute;
          left: 50%;
          top: 53%;
          transform: translate(-50%,-50%);
          width: 145px;
          height: 145px;
          border-radius: 50%;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          background:
            radial-gradient(
              circle at 40% 30%,
              #934eff,
              #4422b8 75%
            );
          border: 1px solid rgba(211,194,255,.45);
          box-shadow:
            0 0 60px rgba(123,64,255,.50),
            inset 0 0 25px rgba(255,255,255,.08);
        }

        .cn-growth-core svg {
          width: 26px;
          height: 26px;
          margin-bottom: 3px;
        }

        .cn-growth-core span {
          font-size: 8px;
          letter-spacing: 2px;
          color: #d9ceff;
        }

        .cn-growth-core strong {
          font-size: 29px;
          line-height: 1;
          margin-top: 2px;
        }

        .cn-mini-card {
          position: absolute;
          z-index: 5;
          width: 145px;
          min-height: 72px;
          padding: 11px 13px;
          border-radius: 15px;
          background: rgba(13,17,48,.90);
          border: 1px solid rgba(139,92,246,.22);
          box-shadow: 0 14px 30px rgba(0,0,0,.22);
          backdrop-filter: blur(12px);
          color: #fff;
        }

        .cn-mini-card span {
          display: block;
          color: #8e96b3;
          font-size: 8px;
        }

        .cn-mini-card strong {
          display: block;
          color: #fff;
          margin-top: 5px;
          font-size: 17px;
        }

        .cn-mini-card small {
          display: block;
          margin-top: 3px;
          color: #6f7896;
          font-size: 7px;
        }

        .cn-green {
          color: #54e6b0 !important;
        }

        .cn-mini-top-left {
          top: 8%;
          left: 3%;
        }

        .cn-mini-top-right {
          top: 10%;
          right: 4%;
        }

        .cn-mini-bottom-left {
          bottom: 8%;
          left: 5%;
        }

        .cn-mini-bottom-right {
          bottom: 9%;
          right: 4%;
        }

        .cn-mini-bars {
          height: 22px;
          margin-top: 6px;
          display: flex;
          align-items: end;
          gap: 3px;
        }

        .cn-mini-bars i {
          flex: 1;
          display: block;
          border-radius: 2px 2px 0 0;
          background:
            linear-gradient(
              to top,
              #6d35ff,
              #ca52ff
            );
        }

        .cn-progress {
          height: 5px;
          margin-top: 8px;
          border-radius: 999px;
          background: #282d4a;
          overflow: hidden;
        }

        .cn-progress span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background:
            linear-gradient(
              90deg,
              #7040ff,
              #d04cff
            );
        }

        .cn-ring {
          width: 36px;
          height: 36px;
          margin-top: 4px;
          border-radius: 50%;
          border: 4px solid #7d4cff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 9px;
          font-weight: 900;
        }

        .cn-avatar-row {
          display: flex;
          margin-top: 7px;
        }

        .cn-avatar-row b {
          width: 23px;
          height: 23px;
          margin-right: -5px;
          border-radius: 50%;
          border: 2px solid #0d1130;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #6840dc;
          font-size: 8px;
        }

        .cn-path {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 8px;
        }

        .cn-path b {
          width: 20px;
          height: 20px;
          border: 1px solid #d24bff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e4b8ff;
          font-size: 8px;
        }

        .cn-path i {
          flex: 1;
          height: 1px;
          background: rgba(210,75,255,.45);
        }

        /* =====================================================
           CAREER VISUAL
        ===================================================== */

        .cn-career-line {
          position: absolute;
          left: 7%;
          right: 7%;
          top: 53%;
          height: 3px;
          background:
            linear-gradient(
              90deg,
              #6d3eff,
              #d346ff,
              #4ee3b0
            );
          box-shadow: 0 0 15px rgba(139,92,246,.5);
        }

        .cn-career-node {
          position: absolute;
          top: 53%;
          transform: translateY(-50%);
          width: 74px;
          text-align: center;
          z-index: 5;
        }

        .cn-career-node > span {
          display: block;
          color: #c8b9ff;
          font-size: 8px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .cn-career-icon {
          width: 54px;
          height: 54px;
          margin: auto;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background:
            linear-gradient(
              135deg,
              #6b32db,
              #37206d
            );
          border: 1px solid rgba(196,175,255,.30);
          box-shadow: 0 0 25px rgba(124,58,237,.30);
        }

        .cn-career-icon svg {
          width: 24px;
          height: 24px;
        }

        .cn-career-node strong {
          display: block;
          margin-top: 7px;
          color: #fff;
          font-size: 10px;
        }

        .cn-career-node small {
          color: #6e7692;
          font-size: 7px;
        }

        .cn-marketing-core {
          width: 138px;
          height: 138px;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .cn-process-section {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .cn-process-card {
          padding: 24px;
          border-radius: 22px;
          background: rgba(255,255,255,.86);
          border: 1px solid #e5e7f1;
          box-shadow: 0 12px 35px rgba(30,25,75,.06);
        }

        .cn-section-heading > span {
          color: #7040ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
        }

        .cn-section-heading h2 {
          margin: 5px 0 4px;
          color: #10162d;
          font-size: 25px;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .cn-section-heading p {
          margin: 0;
          color: #64708f;
          font-size: 11px;
          line-height: 1.5;
        }

        .cn-process-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: start;
          gap: 9px;
          margin-top: 20px;
        }

        .cn-process-step {
          min-width: 0;
        }

        .cn-process-icon {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(112,64,255,.18);
          background: #fff;
          color: #7140ff;
          font-size: 17px;
        }

        .cn-process-step small {
          display: block;
          margin-top: 8px;
          color: #8790aa;
          font-size: 8px;
        }

        .cn-process-step h3 {
          margin: 3px 0;
          color: #151a31;
          font-size: 11px;
        }

        .cn-process-step p {
          margin: 0;
          color: #6b7590;
          font-size: 8px;
          line-height: 1.55;
        }

        .cn-process-arrow {
          padding-top: 16px;
          color: #9ca3c0;
        }

        .cn-process-arrow svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           CAPABILITIES
        ===================================================== */

        .cn-capability-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 8px;
          margin-top: 18px;
        }

        .cn-capability-card {
          text-align: left;
          padding: 13px;
          border: 1px solid #e4e7f2;
          border-radius: 15px;
          background: #fff;
          cursor: pointer;
          transition:
            transform .2s ease,
            box-shadow .2s ease,
            border-color .2s ease;
        }

        .cn-capability-card:hover {
          transform: translateY(-3px);
          border-color: #c8baff;
          box-shadow: 0 12px 25px rgba(76,50,180,.10);
        }

        .cn-capability-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 900;
          font-size: 13px;
        }

        .cap-1 {
          background: linear-gradient(135deg,#6037ef,#873cff);
        }

        .cap-2 {
          background: linear-gradient(135deg,#ed3c9c,#ff4cae);
        }

        .cap-3 {
          background: linear-gradient(135deg,#1475df,#315cff);
        }

        .cap-4 {
          background: linear-gradient(135deg,#16b85f,#23c76c);
        }

        .cn-capability-card h3 {
          margin: 9px 0 5px;
          color: #151a31;
          font-size: 10px;
        }

        .cn-capability-card p {
          min-height: 49px;
          margin: 0;
          color: #69738f;
          font-size: 8px;
          line-height: 1.5;
        }

        .cn-capability-card > span {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 9px;
          color: #6737ff;
          font-size: 8px;
          font-weight: 900;
        }

        .cn-capability-card > span svg {
          width: 11px;
          height: 11px;
        }

        /* =====================================================
           REVIEWS
        ===================================================== */

        .cn-reviews-section {
          width: 100%;
          margin-top: 18px;
          padding: 30px 0 8px;
          overflow: hidden;
        }

        .cn-review-heading {
          max-width: 720px;
          margin: 0 auto 20px;
          padding: 0 20px;
          text-align: center;
        }

        .cn-review-heading span {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          color: #6737ff;
          background: #f1edff;
          border: 1px solid #e4dcff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .05em;
        }

        .cn-review-heading h2 {
          margin: 9px 0 5px;
          color: #11162b;
          font-size: clamp(23px,3vw,34px);
          line-height: 1.1;
          letter-spacing: -1.2px;
        }

        .cn-review-heading p {
          margin: 0;
          color: #66708b;
          font-size: 11px;
          line-height: 1.5;
        }

        .cn-review-track-wrap {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .cn-review-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 70px;
          z-index: 5;
          pointer-events: none;
        }

        .cn-review-fade-left {
          left: 0;
          background: linear-gradient(
            90deg,
            #f8f9fd,
            transparent
          );
        }

        .cn-review-fade-right {
          right: 0;
          background: linear-gradient(
            270deg,
            #f8f9fd,
            transparent
          );
        }

        .cn-review-track {
          display: flex;
          width: max-content;
          gap: 15px;
          padding: 8px 10px 15px;
        }

        .cn-review-card {
          width: 330px;
          min-height: 188px;
          padding: 20px;
          border-radius: 20px;
          border: 1px solid #e1e5ef;
          background: #fff;
          box-shadow: 0 9px 25px rgba(30,25,75,.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cn-review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .cn-review-stars {
          display: flex;
          gap: 2px;
        }

        .cn-review-stars svg {
          width: 12px;
          height: 12px;
        }

        .cn-review-tags {
          display: flex;
          gap: 4px;
        }

        .cn-review-tag {
          padding: 4px 6px;
          border-radius: 999px;
          font-size: 7px;
          font-weight: 800;
        }

        .cn-review-tag-blue {
          color: #5032bd;
          background: #f0ecff;
        }

        .cn-review-tag-gray {
          color: #5c667e;
          background: #f2f4f7;
        }

        .cn-review-quote {
          margin: 14px 0;
          color: #505a73;
          font-size: 11px;
          line-height: 1.6;
          font-style: italic;
        }

        .cn-review-user {
          padding-top: 10px;
          border-top: 1px solid #edf0f5;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .cn-review-avatar {
          width: 31px;
          height: 31px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: linear-gradient(
            135deg,
            #6037ef,
            #a238ff
          );
          font-size: 10px;
          font-weight: 900;
        }

        .cn-review-user strong {
          display: block;
          color: #171c31;
          font-size: 9px;
        }

        .cn-review-user span {
          display: block;
          margin-top: 2px;
          color: #7a8399;
          font-size: 7px;
        }

        /* =====================================================
           GROWTH GRAPH
        ===================================================== */

        .cn-growth-section {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 0 auto;
          padding: 8px 0 18px;
        }

        .cn-growth-panel {
          padding: 25px;
          border-radius: 23px;
          border: 1px solid #e1e4f1;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(124,77,255,.07),
              transparent 30%
            ),
            #fff;
          box-shadow: 0 12px 35px rgba(30,25,75,.06);
        }

        .cn-growth-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .cn-growth-kicker {
          color: #7040ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
        }

        .cn-growth-header h2 {
          margin: 6px 0 4px;
          color: #11162b;
          font-size: clamp(22px,2.4vw,31px);
          letter-spacing: -1px;
        }

        .cn-growth-header p {
          margin: 0;
          color: #68738e;
          font-size: 10px;
        }

        .cn-growth-score {
          min-width: 135px;
          padding: 12px 14px;
          border-radius: 15px;
          background: #10142f;
          color: #fff;
        }

        .cn-growth-score span,
        .cn-growth-score small {
          display: block;
          color: #9ca5c1;
          font-size: 7px;
        }

        .cn-growth-score strong {
          display: block;
          margin: 3px 0;
          color: #b36aff;
          font-size: 22px;
        }

        .cn-growth-chart {
          position: relative;
          height: 210px;
          margin-top: 18px;
          overflow: hidden;
          border-radius: 17px;
          background: #fcfcff;
        }

        .cn-chart-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(99,102,241,.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(99,102,241,.07) 1px,
              transparent 1px
            );
          background-size: 70px 42px;
        }

        .cn-growth-svg {
          position: absolute;
          inset: 7px 10px 30px;
          width: calc(100% - 20px);
          height: calc(100% - 37px);
          overflow: visible;
        }

        .cn-growth-path {
          stroke-dasharray: 1800;
          stroke-dashoffset: 1800;
          animation:
            cn-draw-growth 4s ease-out forwards,
            cn-glow-growth 2.5s ease-in-out 4s infinite alternate;
        }

        .cn-growth-area {
          opacity: 0;
          animation: cn-area-growth 1.2s ease 2.5s forwards;
        }

        .cn-chart-dot {
          fill: #fff;
          stroke: #8b5cf6;
          stroke-width: 4;
          animation: cn-dot-pulse 2s ease-in-out infinite;
        }

        @keyframes cn-draw-growth {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes cn-area-growth {
          to {
            opacity: 1;
          }
        }

        @keyframes cn-glow-growth {
          from {
            filter: drop-shadow(
              0 0 2px rgba(139,92,246,.15)
            );
          }
          to {
            filter: drop-shadow(
              0 0 9px rgba(139,92,246,.55)
            );
          }
        }

        @keyframes cn-dot-pulse {
          0%,100% {
            opacity: .8;
          }
          50% {
            opacity: 1;
          }
        }

        .cn-chart-labels {
          position: absolute;
          left: 17px;
          right: 17px;
          bottom: 7px;
          display: flex;
          justify-content: space-between;
          color: #77819b;
          font-size: 7px;
          font-weight: 800;
        }

        .cn-growth-bottom {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 8px;
          margin-top: 10px;
        }

        .cn-growth-bottom > div {
          min-height: 48px;
          padding: 9px 11px;
          border-radius: 12px;
          border: 1px solid #e5e7f1;
          background: #fff;
        }

        .cn-growth-bottom strong {
          display: block;
          color: #7040ff;
          font-size: 9px;
        }

        .cn-growth-bottom span {
          color: #69738d;
          font-size: 8px;
        }

        .cn-growth-final {
          display: flex !important;
          align-items: center;
          gap: 7px;
          color: #fff;
          background:
            linear-gradient(
              135deg,
              #6338f3,
              #9a39ed
            ) !important;
        }

        .cn-growth-final svg {
          width: 16px;
          height: 16px;
        }

        .cn-growth-final span {
          color: #fff;
          font-weight: 900;
        }

        /* =====================================================
           METRICS
        ===================================================== */

        .cn-metrics {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 0 auto 24px;
          padding: 17px 20px;
          border-radius: 19px;
          background: #fff;
          border: 1px solid #e4e7f1;
          display: grid;
          grid-template-columns: repeat(6,1fr);
          box-shadow: 0 9px 25px rgba(30,25,75,.05);
        }

        .cn-metric {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-right: 1px solid #eceef5;
        }

        .cn-metric:last-child {
          border-right: 0;
        }

        .cn-metric > span {
          color: #7040ff;
          font-size: 20px;
        }

        .cn-metric strong {
          display: block;
          color: #11162b;
          font-size: 17px;
          line-height: 1;
        }

        .cn-metric small {
          display: block;
          margin-top: 3px;
          color: #73809b;
          font-size: 7px;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .cn-final-cta {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 0 auto 30px;
          padding: 34px 25px;
          border-radius: 23px;
          text-align: center;
          color: #fff;
          background:
            linear-gradient(
              100deg,
              #5333dc,
              #7138f5,
              #8739dc
            );
          box-shadow: 0 20px 45px rgba(82,50,220,.20);
        }

        .cn-final-cta h2 {
          margin: 0;
          font-size: clamp(22px,3vw,34px);
          letter-spacing: -1px;
        }

        .cn-final-cta p {
          max-width: 650px;
          margin: 9px auto 17px;
          color: #e8e2ff;
          font-size: 10px;
          line-height: 1.6;
        }

        .cn-final-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
        }

        .cn-final-primary,
        .cn-final-secondary {
          min-height: 40px;
          padding: 0 17px;
          border-radius: 11px;
          border: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 900;
        }

        .cn-final-primary {
          color: #5731d7;
          background: #fff;
        }

        .cn-final-secondary {
          color: #fff;
          background: rgba(255,255,255,.13);
          border: 1px solid rgba(255,255,255,.22);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .cn-hero {
            width: calc(100% - 50px);
          }

          .cn-process-section,
          .cn-growth-section,
          .cn-metrics,
          .cn-final-cta {
            width: calc(100% - 50px);
          }

          .cn-hero-title {
            font-size: 48px;
          }

          .cn-mini-card {
            width: 125px;
          }
        }

        @media (max-width: 800px) {
          .cn-social-rail {
            right: 6px;
            gap: 6px;
          }

          .cn-social-item {
            width: 35px;
            height: 35px;
            border-radius: 10px;
          }

          .cn-social-item svg {
            width: 16px;
            height: 16px;
          }

          .cn-hero {
            width: calc(100% - 28px);
            height: 620px;
            margin-top: 10px;
            border-radius: 20px;
          }

          .cn-hero-inner {
            display: flex;
            flex-direction: column;
          }

          .cn-hero-copy {
            min-height: 305px;
            padding: 28px 22px 12px;
            justify-content: flex-start;
          }

          .cn-eyebrow {
            font-size: 8px;
            padding: 7px 11px;
            margin-bottom: 13px;
          }

          .cn-hero-title {
            max-width: 92%;
            font-size: 38px;
            letter-spacing: -2px;
          }

          .cn-hero-description {
            max-width: 94%;
            margin-top: 12px;
            font-size: 10px;
            line-height: 1.55;
          }

          .cn-actions {
            margin-top: 13px;
            gap: 7px;
          }

          .cn-primary-btn,
          .cn-secondary-btn {
            min-height: 35px;
            padding: 0 11px;
            border-radius: 9px;
            font-size: 9px;
          }

          .cn-hero-stats {
            gap: 9px;
            margin-top: 13px;
          }

          .cn-stat strong {
            font-size: 14px;
          }

          .cn-stat span {
            font-size: 6px;
          }

          .cn-stat-divider {
            height: 24px;
          }

          .cn-rating-star {
            font-size: 15px;
          }

          .cn-hero-visual {
            height: 305px;
            min-height: 305px;
          }

          .cn-growth-core {
            width: 105px;
            height: 105px;
          }

          .cn-growth-core strong {
            font-size: 23px;
          }

          .cn-growth-core svg {
            width: 20px;
            height: 20px;
          }

          .cn-orbit-1 {
            width: 170px;
            height: 170px;
          }

          .cn-orbit-2 {
            width: 235px;
            height: 235px;
          }

          .cn-orbit-3 {
            width: 295px;
            height: 295px;
          }

          .cn-mini-card {
            width: 105px;
            min-height: 55px;
            padding: 8px 9px;
            border-radius: 11px;
          }

          .cn-mini-card span {
            font-size: 6px;
          }

          .cn-mini-card strong {
            margin-top: 3px;
            font-size: 12px;
          }

          .cn-mini-card small {
            font-size: 6px;
          }

          .cn-mini-top-left {
            left: 1%;
            top: 4%;
          }

          .cn-mini-top-right {
            right: 2%;
            top: 6%;
          }

          .cn-mini-bottom-left {
            left: 3%;
            bottom: 5%;
          }

          .cn-mini-bottom-right {
            right: 2%;
            bottom: 6%;
          }

          .cn-career-line {
            left: 7%;
            right: 7%;
          }

          .cn-career-node {
            width: 52px;
          }

          .cn-career-icon {
            width: 38px;
            height: 38px;
            border-radius: 11px;
          }

          .cn-career-icon svg {
            width: 18px;
            height: 18px;
          }

          .cn-career-node > span {
            font-size: 6px;
          }

          .cn-career-node strong {
            font-size: 7px;
          }

          .cn-career-node small {
            font-size: 5px;
          }

          .cn-process-section {
            width: calc(100% - 28px);
            display: block;
          }

          .cn-process-card {
            margin-bottom: 10px;
            padding: 17px;
            border-radius: 17px;
          }

          .cn-section-heading h2 {
            font-size: 20px;
          }

          .cn-section-heading p {
            font-size: 9px;
          }

          .cn-process-grid {
            grid-template-columns: repeat(4,1fr);
            gap: 5px;
          }

          .cn-process-arrow {
            display: none;
          }

          .cn-process-icon {
            width: 34px;
            height: 34px;
            font-size: 12px;
          }

          .cn-process-step small {
            font-size: 6px;
          }

          .cn-process-step h3 {
            font-size: 8px;
          }

          .cn-process-step p {
            font-size: 6px;
          }

          .cn-capability-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .cn-capability-card {
            padding: 10px;
          }

          .cn-capability-icon {
            width: 29px;
            height: 29px;
            font-size: 10px;
          }

          .cn-capability-card h3 {
            font-size: 8px;
          }

          .cn-capability-card p {
            min-height: 55px;
            font-size: 6px;
          }

          .cn-capability-card > span {
            font-size: 6px;
          }

          .cn-reviews-section {
            padding-top: 18px;
          }

          .cn-review-heading {
            margin-bottom: 10px;
          }

          .cn-review-heading h2 {
            font-size: 22px;
          }

          .cn-review-heading p {
            font-size: 9px;
          }

          .cn-review-card {
            width: 270px;
            min-height: 165px;
            padding: 15px;
          }

          .cn-review-quote {
            font-size: 9px;
          }

          .cn-growth-section {
            width: calc(100% - 28px);
          }

          .cn-growth-panel {
            padding: 17px;
            border-radius: 18px;
          }

          .cn-growth-header {
            flex-direction: column;
          }

          .cn-growth-score {
            width: 100%;
          }

          .cn-growth-chart {
            height: 170px;
          }

          .cn-growth-bottom {
            grid-template-columns: repeat(2,1fr);
          }

          .cn-growth-final {
            grid-column: 1 / -1;
          }

          .cn-metrics {
            width: calc(100% - 28px);
            grid-template-columns: repeat(2,1fr);
            gap: 0;
            padding: 10px;
          }

          .cn-metric {
            justify-content: flex-start;
            padding: 10px 7px;
            border-right: 0;
            border-bottom: 1px solid #eceef5;
          }

          .cn-metric:nth-child(odd) {
            border-right: 1px solid #eceef5;
          }

          .cn-metric:nth-last-child(-n+2) {
            border-bottom: 0;
          }

          .cn-metric > span {
            font-size: 16px;
          }

          .cn-metric strong {
            font-size: 14px;
          }

          .cn-metric small {
            font-size: 6px;
          }

          .cn-final-cta {
            width: calc(100% - 28px);
            padding: 25px 16px;
          }

          .cn-final-cta h2 {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .cn-hero {
            height: 590px;
          }

          .cn-hero-copy {
            min-height: 300px;
            padding: 25px 17px 10px;
          }

          .cn-hero-title {
            font-size: 34px;
          }

          .cn-hero-description {
            font-size: 9px;
          }

          .cn-hero-visual {
            min-height: 285px;
            height: 285px;
          }

          .cn-mini-card {
            width: 94px;
          }

          .cn-growth-core {
            width: 92px;
            height: 92px;
          }

          .cn-growth-core strong {
            font-size: 20px;
          }

          .cn-career-node {
            width: 45px;
          }

          .cn-career-icon {
            width: 34px;
            height: 34px;
          }

          .cn-review-card {
            width: 255px;
          }
        }
      `}</style>

      <main className="cn-home">
        <CareerNovaSocialRail />

        {/* ===================================================
            COMPACT AUTO-SLIDING HERO
        =================================================== */}

        <motion.section
          key={activeSlide}
          initial={{ opacity: 0.75 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="cn-hero"
        >
          <div className="cn-hero-inner">
            <div className="cn-hero-copy">
              <div className="cn-eyebrow">
                ✦ &nbsp; {slide.eyebrow}
              </div>

              <h1 className="cn-hero-title">{slide.title}</h1>

              <p className="cn-hero-description">
                {slide.description}
              </p>

              <div className="cn-actions">
                <button
                  className="cn-primary-btn"
                  type="button"
                  onClick={() => onNavigate('tools')}
                >
                  Explore Core Expertise
                  <ArrowRight size={14} />
                </button>

                <button
                  className="cn-secondary-btn"
                  type="button"
                  onClick={() =>
                    openAiAssistant({ mode: 'consultation' })
                  }
                >
                  <Bot size={14} />
                  Consult With Expert
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
                  <span>Tools &amp; Frameworks</span>
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

          <div
            style={{
              position: 'absolute',
              right: '15px',
              top: '15px',
              zIndex: 20,
              display: 'flex',
              gap: '7px',
            }}
          >
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              style={{
                width: 39,
                height: 39,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,.16)',
                background: 'rgba(7,10,46,.65)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ArrowRight
                size={17}
                style={{ transform: 'rotate(180deg)' }}
              />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              style={{
                width: 39,
                height: 39,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,.16)',
                background: 'rgba(7,10,46,.65)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ArrowRight size={17} />
            </button>
          </div>

          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '14px',
              transform: 'translateX(-50%)',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
            }}
          >
            {HERO_SLIDES.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  width: activeSlide === index ? 25 : 7,
                  height: 7,
                  padding: 0,
                  border: 0,
                  borderRadius: 999,
                  cursor: 'pointer',
                  background:
                    activeSlide === index
                      ? '#a855f7'
                      : 'rgba(255,255,255,.65)',
                  transition: 'all .25s ease',
                }}
              />
            ))}
          </div>
        </motion.section>

        {/* ===================================================
            EXISTING PROCESS + CORE CAPABILITIES
        =================================================== */}

        <ProcessSection onNavigate={onNavigate} />

        {/* ===================================================
            EXISTING SLIDING REVIEWS
        =================================================== */}

        <section className="cn-reviews-section">
          <div className="cn-review-heading">
            <span>⭐ Trusted by Leaders &amp; Engineers</span>

            <h2>
              What Clients Say About Our Tools &amp; Core Expertise
            </h2>

            <p>
              Real feedback covering our free digital tools,
              engineering solutions, and strategic consulting.
            </p>
          </div>

          <div className="cn-review-track-wrap">
            <div className="cn-review-fade cn-review-fade-left" />
            <div className="cn-review-fade cn-review-fade-right" />

            <motion.div
              className="cn-review-track"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {[...REVIEWS, ...REVIEWS].map((review, index) => (
                <article
                  className="cn-review-card"
                  key={`${review.name}-${index}`}
                >
                  <div>
                    <div className="cn-review-top">
                      <div className="cn-review-stars">
                        {Array.from(
                          { length: review.rating },
                          (_, starIndex) => (
                            <Star
                              key={starIndex}
                              fill="currentColor"
                            />
                          )
                        )}
                      </div>

                      <div className="cn-review-tags">
                        <span className="cn-review-tag cn-review-tag-blue">
                          {review.category}
                        </span>

                        <span className="cn-review-tag cn-review-tag-gray">
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    <p className="cn-review-quote">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="cn-review-user">
                    <div className="cn-review-avatar">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===================================================
            NEW WEBLLISTO-STYLE GROWTH GRAPH
        =================================================== */}

        <GrowthSignalGraph />

        {/* ===================================================
            METRICS
        =================================================== */}

        <MetricsSection />

        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <motion.section
          className="cn-final-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            Ready to transform your Career or launch your Business?
          </h2>

          <p>
            Join students, professionals, and founders using CareerNova
            tools, expertise and practical growth systems to reach their
            goals.
          </p>

          <div className="cn-final-actions">
            <button
              className="cn-final-primary"
              type="button"
              onClick={() => onNavigate('tools')}
            >
              Explore All Free Tools
              <ArrowRight size={13} />
            </button>

            <button
              className="cn-final-secondary"
              type="button"
              onClick={() =>
                openAiAssistant({ mode: 'consultation' })
              }
            >
              <Bot size={13} />
              Get Free Consultation
            </button>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default HomeView;

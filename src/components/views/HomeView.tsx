import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Bot,
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
  CheckCircle2,
  ShieldCheck,
  Calculator,
  FileText,
  PieChart,
  Brain,
  Globe2,
  Layers3,
} from 'lucide-react';

import { TabId } from '../../types';
import { ParticleMeshCanvas } from '../home/ParticleMeshCanvas';
import { openAiAssistant } from '../../utils/aiAssistantTrigger';

interface HomeViewProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenAuth?: () => void;
}

/* =========================================================
   HERO SLIDES
========================================================= */

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  visual: 'growth' | 'marketing' | 'career' | 'business' | 'technology';
};

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'growth',
    eyebrow: 'CAREERNOVA GROWTH ENGINE',
    title: (
      <>
        Turn Skills, Strategy &amp; Technology Into{' '}
        <span className="cn-hero-gradient">Leadership.</span>
      </>
    ),
    description:
      'Explore practical expertise across business analytics, digital marketing, engineering, career tools, and growth systems — built to move ideas from planning to measurable execution.',
    visual: 'growth',
  },
  {
    id: 'marketing',
    eyebrow: 'DIGITAL MARKETING & GROWTH',
    title: (
      <>
        Turn Attention Into{' '}
        <span className="cn-hero-gradient">Measurable Growth.</span>
      </>
    ),
    description:
      'Build smarter campaigns, understand audiences, improve conversion journeys, and create practical growth systems for modern businesses.',
    visual: 'marketing',
  },
  {
    id: 'career',
    eyebrow: 'CAREER & STUDENT ENGINE',
    title: (
      <>
        Turn Your Skills Into A{' '}
        <span className="cn-hero-gradient">Stronger Career.</span>
      </>
    ),
    description:
      'Use practical career tools, skill planning, resume guidance, assessments, and structured roadmaps to move from learning to opportunity.',
    visual: 'career',
  },
  {
    id: 'business',
    eyebrow: 'BUSINESS ANALYTICS & STRATEGY',
    title: (
      <>
        Transform Business Ideas Into{' '}
        <span className="cn-hero-gradient">Measurable Results.</span>
      </>
    ),
    description:
      'Connect analytics, financial planning, market positioning, revenue strategy, and execution into one practical growth framework.',
    visual: 'business',
  },
  {
    id: 'technology',
    eyebrow: 'ENGINEERING & TECHNOLOGY',
    title: (
      <>
        Build Digital Products That{' '}
        <span className="cn-hero-gradient">Scale With Confidence.</span>
      </>
    ),
    description:
      'From web and mobile products to APIs, cloud systems and AI workflows — turn technical ideas into reliable digital experiences.',
    visual: 'technology',
  },
];

/* =========================================================
   SOCIAL RAIL
   IMPORTANT: NO LEFT SUPPORT BUTTON
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
        href="https://www.linkedin.com/in/sudhir-singh-rajput-2a894128a"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <Linkedin />
      </a>

      <a
        className="cn-social-item cn-social-instagram"
        href="https://www.instagram.com/thakur_sudhir_singh_rajput"
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
   HERO VISUAL 01 — GROWTH
========================================================= */

const GrowthVisual = () => (
  <div className="cn-visual">
    <div className="cn-orbit cn-orbit-a" />
    <div className="cn-orbit cn-orbit-b" />
    <div className="cn-orbit cn-orbit-c" />

    <motion.div
      className="cn-growth-core"
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <TrendingUp />
      <span>GROWTH</span>
      <strong>ENGINE</strong>
    </motion.div>

    <div className="cn-floating-card cn-fc-top-left">
      <span>Revenue Growth</span>
      <strong>+42.8%</strong>
      <div className="cn-mini-bars">
        {[35, 48, 42, 65, 58, 82, 96].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>

    <div className="cn-floating-card cn-fc-top-right">
      <span>Business Analytics</span>
      <LineChart />
      <strong>94.6</strong>
      <small>Strategy Score</small>
    </div>

    <div className="cn-floating-card cn-fc-bottom-left">
      <span>Market Position</span>
      <div className="cn-progress">
        <i style={{ width: '82%' }} />
      </div>
      <strong>82%</strong>
    </div>

    <div className="cn-floating-card cn-fc-bottom-right">
      <span>Execution</span>
      <CheckCircle2 />
      <strong>On Track</strong>
    </div>
  </div>
);

/* =========================================================
   HERO VISUAL 02 — MARKETING
========================================================= */

const MarketingVisual = () => (
  <div className="cn-visual">
    <div className="cn-marketing-ring ring-1" />
    <div className="cn-marketing-ring ring-2" />
    <div className="cn-marketing-ring ring-3" />

    <motion.div
      className="cn-marketing-core"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <Target />
      <strong>78%</strong>
      <span>CONVERSION</span>
    </motion.div>

    <div className="cn-floating-card cn-fc-top-left">
      <span>Campaign Reach</span>
      <strong>1.8M</strong>
      <div className="cn-mini-bars">
        {[25, 45, 35, 60, 75, 62, 90].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>

    <div className="cn-floating-card cn-fc-top-right">
      <span>Campaign ROI</span>
      <strong>4.6x</strong>
      <small>Return Generated</small>
    </div>

    <div className="cn-floating-card cn-fc-bottom-left">
      <span>Lead Quality</span>
      <strong>Excellent</strong>
      <div className="cn-progress">
        <i style={{ width: '91%' }} />
      </div>
    </div>

    <div className="cn-floating-card cn-fc-bottom-right">
      <span>Growth Funnel</span>
      <BarChart3 />
      <strong>+36%</strong>
    </div>
  </div>
);

/* =========================================================
   HERO VISUAL 03 — CAREER
========================================================= */

const CareerVisual = () => (
  <div className="cn-visual">
    <div className="cn-career-line" />

    {[
      { icon: <GraduationCap />, title: 'Learn', sub: 'Skills' },
      { icon: <Code2 />, title: 'Build', sub: 'Projects' },
      { icon: <CheckCircle2 />, title: 'Prove', sub: 'Ability' },
      { icon: <Rocket />, title: 'Launch', sub: 'Career' },
    ].map((item, index) => (
      <motion.div
        key={item.title}
        className="cn-career-node"
        style={{ left: `${5 + index * 24}%` }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3 + index * 0.25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <small>0{index + 1}</small>
        <div>{item.icon}</div>
        <strong>{item.title}</strong>
        <span>{item.sub}</span>
      </motion.div>
    ))}

    <div className="cn-floating-card cn-fc-top-left">
      <span>Skill Score</span>
      <strong>92%</strong>
      <div className="cn-progress">
        <i style={{ width: '92%' }} />
      </div>
    </div>

    <div className="cn-floating-card cn-fc-top-right">
      <span>Career Match</span>
      <strong>Excellent</strong>
      <small>Profile Alignment</small>
    </div>

    <div className="cn-floating-card cn-fc-bottom-left">
      <span>Resume Strength</span>
      <strong>88/100</strong>
    </div>

    <div className="cn-floating-card cn-fc-bottom-right">
      <span>Interview Ready</span>
      <CheckCircle2 />
      <strong>Ready</strong>
    </div>
  </div>
);

/* =========================================================
   HERO VISUAL 04 — BUSINESS
========================================================= */

const BusinessVisual = () => (
  <div className="cn-visual">
    <div className="cn-business-grid" />

    <motion.div
      className="cn-business-core"
      animate={{ rotate: [0, 3, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      <PieChart />
      <strong>BUSINESS</strong>
      <span>INTELLIGENCE</span>
    </motion.div>

    <div className="cn-floating-card cn-fc-top-left">
      <span>Profitability</span>
      <strong>+31.4%</strong>
      <small>Improvement</small>
    </div>

    <div className="cn-floating-card cn-fc-top-right">
      <span>Forecast</span>
      <LineChart />
      <strong>96%</strong>
      <small>Confidence</small>
    </div>

    <div className="cn-floating-card cn-fc-bottom-left">
      <span>Financial Model</span>
      <Calculator />
      <strong>Optimized</strong>
    </div>

    <div className="cn-floating-card cn-fc-bottom-right">
      <span>Strategy</span>
      <Target />
      <strong>Focused</strong>
    </div>
  </div>
);

/* =========================================================
   HERO VISUAL 05 — TECHNOLOGY
========================================================= */

const TechnologyVisual = () => (
  <div className="cn-visual">
    <div className="cn-tech-network">
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          style={{
            left: `${10 + ((index * 17) % 80)}%`,
            top: `${12 + ((index * 23) % 72)}%`,
          }}
        />
      ))}
    </div>

    <motion.div
      className="cn-tech-core"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.2, repeat: Infinity }}
    >
      <Code2 />
      <strong>BUILD</strong>
      <span>→ SCALE</span>
    </motion.div>

    <div className="cn-floating-card cn-fc-top-left">
      <span>API Health</span>
      <strong>99.9%</strong>
      <small>Operational</small>
    </div>

    <div className="cn-floating-card cn-fc-top-right">
      <span>Cloud Systems</span>
      <Globe2 />
      <strong>Stable</strong>
    </div>

    <div className="cn-floating-card cn-fc-bottom-left">
      <span>AI Workflow</span>
      <Brain />
      <strong>Active</strong>
    </div>

    <div className="cn-floating-card cn-fc-bottom-right">
      <span>Deployment</span>
      <Rocket />
      <strong>Ready</strong>
    </div>
  </div>
);

const HeroVisual = ({ type }: { type: HeroSlide['visual'] }) => {
  switch (type) {
    case 'marketing':
      return <MarketingVisual />;
    case 'career':
      return <CareerVisual />;
    case 'business':
      return <BusinessVisual />;
    case 'technology':
      return <TechnologyVisual />;
    default:
      return <GrowthVisual />;
  }
};

/* =========================================================
   PROCESS / INFOGRAPHIC
========================================================= */

const ProcessSection = ({
  onNavigate,
}: {
  onNavigate: (tab: TabId, subTool?: string) => void;
}) => {
  const steps = [
    {
      number: '01',
      title: 'Ideate',
      icon: <Sparkles />,
      text: 'Understand the challenge, define the goal and identify the highest-impact opportunity.',
    },
    {
      number: '02',
      title: 'Plan',
      icon: <Target />,
      text: 'Convert the idea into a practical strategy, roadmap and measurable execution plan.',
    },
    {
      number: '03',
      title: 'Build',
      icon: <Code2 />,
      text: 'Build tools, systems, campaigns and digital experiences with speed and precision.',
    },
    {
      number: '04',
      title: 'Measure',
      icon: <TrendingUp />,
      text: 'Track performance, learn from data and continuously optimize for sustainable growth.',
    },
  ];

  return (
    <section className="cn-impact-section">
      <div className="cn-impact-header">
        <span>HOW WE CREATE IMPACT</span>
        <h2>From Idea to Measurable Impact</h2>
        <p>
          A simple four-stage framework that turns ideas into practical,
          trackable outcomes.
        </p>
      </div>

      <div className="cn-impact-infographic">
        <div className="cn-impact-connector" />

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="cn-impact-step"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`cn-impact-icon impact-${index + 1}`}>
              {step.icon}
            </div>

            <span className="cn-impact-number">{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

            {index < steps.length - 1 && (
              <ArrowRight className="cn-impact-arrow" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="cn-impact-bottom">
        <div>
          <span>MEASURE WHAT MATTERS</span>
          <strong>Strategy → Execution → Learning → Growth</strong>
        </div>

        <button onClick={() => onNavigate('tools')}>
          Explore Tools <ArrowRight />
        </button>
      </div>
    </section>
  );
};

/* =========================================================
   WHAT WE DO BEST — TOOLS
========================================================= */

const ToolsSection = ({
  onNavigate,
}: {
  onNavigate: (tab: TabId, subTool?: string) => void;
}) => {
  const tools = [
    {
      title: 'Excel & Financial Models',
      text: 'Advanced Excel workflows, financial modelling, forecasting and decision-support tools.',
      icon: <Calculator />,
      gradient: 'from-emerald-500 to-green-600',
      tab: 'tools' as TabId,
    },
    {
      title: 'Business Analytics',
      text: 'Dashboards, KPI analysis, business intelligence and practical data-driven insights.',
      icon: <BarChart3 />,
      gradient: 'from-indigo-500 to-blue-600',
      tab: 'business' as TabId,
    },
    {
      title: 'Web & API Tools',
      text: 'Web development, APIs, integrations and digital systems designed for real-world use.',
      icon: <Code2 />,
      gradient: 'from-violet-500 to-purple-600',
      tab: 'tools' as TabId,
    },
    {
      title: 'Marketing Frameworks',
      text: 'Campaign planning, funnels, content systems, outreach and growth strategy.',
      icon: <Target />,
      gradient: 'from-pink-500 to-rose-600',
      tab: 'business' as TabId,
    },
    {
      title: 'Career Assessment',
      text: 'Resume analysis, skill assessment, career guidance and structured planning.',
      icon: <GraduationCap />,
      gradient: 'from-cyan-500 to-blue-600',
      tab: 'career' as TabId,
    },
    {
      title: 'AI-Powered Tools',
      text: 'AI workflows for productivity, research, career development and business growth.',
      icon: <Brain />,
      gradient: 'from-fuchsia-500 to-violet-600',
      tab: 'tools' as TabId,
    },
  ];

  return (
    <section className="cn-tools-section">
      <div className="cn-section-heading-center">
        <span>OUR TOOL ECOSYSTEM</span>
        <h2>What We Do Best</h2>
        <p>
          Practical tools and frameworks to help you learn, build, analyze and
          grow.
        </p>
      </div>

      <div className="cn-tools-grid">
        {tools.map((tool, index) => (
          <motion.button
            key={tool.title}
            className="cn-tool-card"
            onClick={() => onNavigate(tool.tab)}
            whileHover={{
              y: -8,
              rotateX: 3,
              rotateY: index % 2 === 0 ? 2 : -2,
            }}
            transition={{ duration: 0.25 }}
          >
            <div className={`cn-tool-icon bg-gradient-to-br ${tool.gradient}`}>
              {tool.icon}
            </div>

            <h3>{tool.title}</h3>
            <p>{tool.text}</p>

            <span>
              Explore <ArrowRight />
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

/* =========================================================
   CORE EXPERTISE / OUR OFFERINGS
========================================================= */

const OfferingsSection = ({
  onNavigate,
}: {
  onNavigate: (tab: TabId, subTool?: string) => void;
}) => {
  const offerings = [
    {
      number: '01',
      title: 'Business Analytics',
      subtitle: 'Data → Decisions',
      text: 'Financial analysis, BI dashboards, forecasting, KPI systems and practical business intelligence.',
      icon: <BarChart3 />,
      color: 'amber',
      tab: 'business' as TabId,
      sub: 'strategy',
    },
    {
      number: '02',
      title: 'Financial Modelling',
      subtitle: 'Numbers → Strategy',
      text: 'Financial models, scenario planning, valuation thinking, break-even analysis and forecasting.',
      icon: <Calculator />,
      color: 'pink',
      tab: 'tools' as TabId,
      sub: 'break-even',
    },
    {
      number: '03',
      title: 'Digital Marketing',
      subtitle: 'Reach → Growth',
      text: 'Campaign strategy, content systems, funnels, outreach and measurable digital growth.',
      icon: <Target />,
      color: 'blue',
      tab: 'business' as TabId,
      sub: 'cold-email',
    },
    {
      number: '04',
      title: 'Engineering & Tech',
      subtitle: 'Build → Scale',
      text: 'Web, mobile, APIs, cloud integrations, automation and scalable digital product development.',
      icon: <Code2 />,
      color: 'green',
      tab: 'career' as TabId,
      sub: 'roadmap-guide',
    },
    {
      number: '05',
      title: 'Career & Student Tools',
      subtitle: 'Skills → Opportunity',
      text: 'Resume tools, assessments, career planning, mock tests and structured learning guidance.',
      icon: <GraduationCap />,
      color: 'purple',
      tab: 'career' as TabId,
      sub: 'roadmap-guide',
    },
    {
      number: '06',
      title: 'AI & Automation',
      subtitle: 'Ideas → Intelligence',
      text: 'AI-assisted workflows, productivity systems, intelligent analysis and practical automation.',
      icon: <Brain />,
      color: 'cyan',
      tab: 'tools' as TabId,
    },
  ];

  return (
    <section className="cn-offerings-section">
      <div className="cn-offering-heading">
        <div className="cn-offering-badge">
          <Layers3 />
          CORE EXPERTISE
        </div>

        <h2>Our Offerings</h2>

        <p>
          Explore CareerNova&apos;s core expertise across business, finance,
          marketing, technology, career development and AI-powered workflows.
        </p>
      </div>

      <div className="cn-offering-flow">
        {offerings.map((item) => (
          <motion.button
            key={item.number}
            className={`cn-offering-card cn-offering-${item.color}`}
            onClick={() => onNavigate(item.tab, item.sub)}
            whileHover={{
              y: -10,
              rotateX: 4,
              rotateY: -3,
              scale: 1.015,
            }}
            transition={{ duration: 0.25 }}
          >
            <div className="cn-offering-top">
              <span>{item.number}</span>
              <div className="cn-offering-icon">{item.icon}</div>
            </div>

            <h3>{item.title}</h3>
            <strong>{item.subtitle}</strong>
            <p>{item.text}</p>

            <span className="cn-offering-link">
              Explore Expertise <ArrowRight />
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

/* =========================================================
   METRICS
========================================================= */

const MetricsSection = () => {
  const metrics = [
    ['✦', '2+', 'Years'],
    ['♧', '30+', 'Clients'],
    ['◉', '10+', 'Expertise'],
    ['🚀', '25+', 'Tools'],
    ['☆', '4.9/5', 'Client Rating'],
    ['◎', '3+', 'Countries'],
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
   REVIEW DATA
========================================================= */

type Review = {
  quote: string;
  name: string;
  role: string;
  category: string;
  gender: 'male' | 'female';
  gradient: string;
};

const REVIEWS: Review[] = [
  {
    quote:
      'CareerNova helped me turn scattered skills into a much clearer career direction. The tools were practical and genuinely easy to act on.',
    name: 'Aarav Sharma',
    role: 'Student & Career Builder',
    category: 'Career Tools',
    gender: 'male',
    gradient: 'from-indigo-50 via-white to-violet-100',
  },
  {
    quote:
      'The financial modelling and business guidance made complicated decisions much easier to understand and execute.',
    name: 'Neha Verma',
    role: 'Business Professional',
    category: 'Financial Modelling',
    gender: 'female',
    gradient: 'from-pink-50 via-white to-rose-100',
  },
  {
    quote:
      'The resume and career planning tools made my preparation much more structured than generic career advice.',
    name: 'Arjun Mehta',
    role: 'Working Professional',
    category: 'Career Planning',
    gender: 'male',
    gradient: 'from-blue-50 via-white to-cyan-100',
  },
  {
    quote:
      'The analytics and strategy approach helped us look at our business numbers with much more clarity and confidence.',
    name: 'Riya Kapoor',
    role: 'Startup Founder',
    category: 'Business Analytics',
    gender: 'female',
    gradient: 'from-fuchsia-50 via-white to-purple-100',
  },
  {
    quote:
      'The digital growth guidance was focused on practical execution rather than just theory. That made a big difference.',
    name: 'Karan Singh',
    role: 'Growth Professional',
    category: 'Digital Marketing',
    gender: 'male',
    gradient: 'from-emerald-50 via-white to-teal-100',
  },
  {
    quote:
      'CareerNova combines tools, guidance and technology in a way that feels useful instead of overwhelming.',
    name: 'Ananya Gupta',
    role: 'Career & Learning User',
    category: 'AI & Career',
    gender: 'female',
    gradient: 'from-amber-50 via-white to-orange-100',
  },
];

/* =========================================================
   ANIMATED REVIEW AVATAR
========================================================= */

const ReviewAvatar = ({ gender }: { gender: Review['gender'] }) => {
  const female = gender === 'female';

  return (
    <motion.div
      className={`cn-review-avatar ${
        female ? 'cn-avatar-female' : 'cn-avatar-male'
      }`}
      animate={{
        y: [0, -5, 0],
        rotate: [0, 1.5, 0, -1.5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="cn-avatar-hair" />
      <div className="cn-avatar-face">
        <span className="cn-eye left" />
        <span className="cn-eye right" />
        <span className="cn-smile" />
      </div>
      <div className="cn-avatar-body" />
    </motion.div>
  );
};

/* =========================================================
   REVIEWS — SLOW AUTOMATIC SLIDER
   3 DESKTOP / 1 MOBILE
========================================================= */

const ReviewsSection = () => {
  const [reviewIndex, setReviewIndex] = useState(0);

  const nextReview = () => {
    setReviewIndex((current) => (current + 1) % REVIEWS.length);
  };

  const previousReview = () => {
    setReviewIndex(
      (current) => (current - 1 + REVIEWS.length) % REVIEWS.length
    );
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % REVIEWS.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleReviews = [0, 1, 2].map(
    (offset) => REVIEWS[(reviewIndex + offset) % REVIEWS.length]
  );

  return (
    <section className="cn-reviews-section">
      <div className="cn-review-heading">
        <span>
          <Star /> TRUSTED BY LEARNERS &amp; LEADERS
        </span>

        <h2>What Clients Say About CareerNova</h2>

        <p>
          Practical tools, structured guidance and measurable outcomes built
          around real career and business goals.
        </p>
      </div>

      <div className="cn-review-carousel">
        <button
          className="cn-review-nav cn-review-prev"
          onClick={previousReview}
          aria-label="Previous reviews"
        >
          <ChevronLeft />
        </button>

        <div className="cn-review-grid">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((review, index) => (
              <motion.article
                key={`${review.name}-${reviewIndex}-${index}`}
                className={`cn-review-card bg-gradient-to-br ${review.gradient}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="cn-review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} fill="currentColor" />
                  ))}
                </div>

                <span className="cn-review-category">
                  {review.category}
                </span>

                <p className="cn-review-quote">
                  &ldquo;{review.quote}&rdquo;
                </p>

                <div className="cn-review-person">
                  <ReviewAvatar gender={review.gender} />

                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                </div>

                <div className="cn-review-mark">“</div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <button
          className="cn-review-nav cn-review-next"
          onClick={nextReview}
          aria-label="Next reviews"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="cn-review-dots">
        {REVIEWS.map((review, index) => (
          <button
            key={review.name}
            className={reviewIndex === index ? 'active' : ''}
            onClick={() => setReviewIndex(index)}
            aria-label={`Show review ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/* =========================================================
   FINAL CTA
========================================================= */

const FinalCTA = ({
  onNavigate,
}: {
  onNavigate: (tab: TabId, subTool?: string) => void;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6 }}
    className="cn-final-cta"
  >
    <div className="cn-final-glow" />

    <div className="cn-final-content">
      <div className="cn-final-badge">
        <ShieldCheck />
        Direct Access to CareerNova
      </div>

      <h2>Ready to turn your goal into a practical plan?</h2>

      <p>
        Explore CareerNova&apos;s tools, core expertise and growth systems —
        or connect directly for a consultation.
      </p>

      <div className="cn-final-actions">
        <button onClick={() => onNavigate('tools')}>
          Explore All Tools
          <ArrowRight />
        </button>

        <button
          className="secondary"
          onClick={() => openAiAssistant({ mode: 'consultation' })}
        >
          <Bot />
          Get Free Consultation
        </button>
      </div>
    </div>
  </motion.section>
);

/* =========================================================
   HOME VIEW
========================================================= */

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

  /* EXACTLY 4 SECOND AUTOPLAY — NEVER PAUSES */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .cn-home {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 10% 20%, rgba(113,56,255,.08), transparent 28%),
            radial-gradient(circle at 90% 40%, rgba(139,92,246,.07), transparent 30%),
            #f7f8fc;
          color: #11162b;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .cn-home button {
          font-family: inherit;
          cursor: pointer;
        }

        /* ================= SOCIAL RAIL ================= */

        .cn-social-rail {
          position: fixed;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
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
          color: white;
          border: 1px solid rgba(255,255,255,.35);
          box-shadow: 0 10px 25px rgba(30,25,75,.2);
          transition: transform .25s ease, filter .25s ease;
        }

        .cn-social-item:hover {
          transform: translateX(-5px) scale(1.07);
          filter: brightness(1.08);
        }

        .cn-social-item svg {
          width: 20px;
          height: 20px;
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

        /* ================= HERO ================= */

        .cn-hero {
          width: calc(100% - 90px);
          max-width: 1440px;
          height: 570px;
          margin: 22px auto 18px;
          position: relative;
          overflow: hidden;
          border-radius: 28px;
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
          background-size: 44px 44px;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 35%,
            black 100%
          );
          pointer-events: none;
        }

        .cn-hero-inner {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 46% 54%;
          height: 100%;
        }

        .cn-hero-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 44px 30px 44px 58px;
          position: relative;
          z-index: 10;
        }

        .cn-hero-eyebrow {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border-radius: 999px;
          background: rgba(124,58,237,.13);
          border: 1px solid rgba(167,139,250,.25);
          color: #d8c8ff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        .cn-hero-eyebrow svg {
          width: 14px;
          height: 14px;
          color: #c084fc;
        }

        .cn-hero-title {
          font-size: clamp(38px, 4.1vw, 62px);
          line-height: .99;
          letter-spacing: -2.8px;
          font-weight: 950;
          color: white;
          max-width: 650px;
        }

        .cn-hero-gradient {
          background: linear-gradient(
            100deg,
            #7652ff,
            #c13cff,
            #9b5cff
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cn-hero-description {
          margin-top: 18px;
          max-width: 600px;
          color: #cbd0e6;
          font-size: 14px;
          line-height: 1.75;
        }

        .cn-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .cn-hero-primary,
        .cn-hero-secondary {
          border-radius: 13px;
          padding: 12px 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 900;
          transition: all .25s ease;
        }

        .cn-hero-primary {
          color: white;
          border: 0;
          background: linear-gradient(100deg,#5b35ff,#9b2cff);
          box-shadow: 0 12px 30px rgba(124,58,237,.35);
        }

        .cn-hero-secondary {
          color: white;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.2);
        }

        .cn-hero-primary:hover,
        .cn-hero-secondary:hover {
          transform: translateY(-2px);
        }

        .cn-hero-stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 17px;
          margin-top: 22px;
        }

        .cn-hero-stat strong {
          display: block;
          color: white;
          font-size: 18px;
          font-weight: 900;
        }

        .cn-hero-stat span {
          display: block;
          color: #858aa5;
          font-size: 8px;
          margin-top: 2px;
        }

        .cn-hero-divider {
          width: 1px;
          height: 28px;
          background: rgba(255,255,255,.12);
        }

        .cn-hero-rating {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cn-hero-rating svg {
          color: #fbbf24;
          fill: #fbbf24;
          width: 18px;
          height: 18px;
        }

        .cn-slider-arrows {
          position: absolute;
          right: 22px;
          top: 20px;
          z-index: 30;
          display: flex;
          gap: 8px;
        }

        .cn-slider-arrows button {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: white;
          background: rgba(10,12,48,.5);
          border: 1px solid rgba(255,255,255,.16);
          backdrop-filter: blur(10px);
          display: grid;
          place-items: center;
        }

        .cn-slider-arrows button:hover {
          background: rgba(124,58,237,.45);
        }

        .cn-slide-dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
          z-index: 40;
        }

        .cn-slide-dots button {
          width: 8px;
          height: 8px;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.45);
          padding: 0;
          transition: all .3s ease;
        }

        .cn-slide-dots button.active {
          width: 28px;
          border-radius: 10px;
          background: #a855f7;
        }

        .cn-visual {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .cn-visual::after {
          content: "";
          position: absolute;
          inset: 10% 5% 8% 5%;
          border-radius: 50%;
          background: rgba(124,58,237,.12);
          filter: blur(65px);
          pointer-events: none;
        }

        .cn-orbit {
          position: absolute;
          left: 50%;
          top: 51%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          border: 1px solid rgba(168,85,247,.28);
          animation: cn-spin 18s linear infinite;
        }

        .cn-orbit-a {
          width: 330px;
          height: 330px;
        }

        .cn-orbit-b {
          width: 250px;
          height: 250px;
          animation-duration: 12s;
          animation-direction: reverse;
        }

        .cn-orbit-c {
          width: 410px;
          height: 410px;
          animation-duration: 25s;
        }

        @keyframes cn-spin {
          to {
            transform: translate(-50%,-50%) rotate(360deg);
          }
        }

        .cn-growth-core,
        .cn-marketing-core,
        .cn-business-core,
        .cn-tech-core {
          position: absolute;
          left: 50%;
          top: 51%;
          transform: translate(-50%,-50%);
          z-index: 10;
          width: 145px;
          height: 145px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          background: radial-gradient(
            circle at 35% 25%,
            #a855f7,
            #5b21b6 62%,
            #21105d
          );
          border: 1px solid rgba(255,255,255,.28);
          box-shadow:
            0 0 60px rgba(139,92,246,.55),
            inset 0 0 30px rgba(255,255,255,.08);
        }

        .cn-growth-core svg,
        .cn-marketing-core svg,
        .cn-business-core svg,
        .cn-tech-core svg {
          width: 30px;
          height: 30px;
          margin-bottom: 5px;
        }

        .cn-growth-core span,
        .cn-growth-core strong,
        .cn-marketing-core span,
        .cn-business-core strong,
        .cn-business-core span,
        .cn-tech-core strong,
        .cn-tech-core span {
          font-size: 9px;
          letter-spacing: 2px;
        }

        .cn-growth-core strong {
          font-size: 15px;
        }

        .cn-marketing-core strong {
          font-size: 38px;
          line-height: 1;
        }

        .cn-floating-card {
          position: absolute;
          z-index: 20;
          width: 155px;
          min-height: 72px;
          padding: 11px 13px;
          border-radius: 16px;
          background: rgba(12,16,43,.88);
          border: 1px solid rgba(167,139,250,.2);
          box-shadow: 0 15px 35px rgba(0,0,0,.25);
          backdrop-filter: blur(14px);
          color: white;
        }

        .cn-floating-card span {
          display: block;
          font-size: 8px;
          color: #9298b4;
          margin-bottom: 4px;
        }

        .cn-floating-card strong {
          font-size: 19px;
          font-weight: 900;
        }

        .cn-floating-card small {
          display: block;
          color: #7f849e;
          font-size: 7px;
          margin-top: 3px;
        }

        .cn-floating-card svg {
          width: 19px;
          height: 19px;
          color: #a78bfa;
          margin: 2px 0;
        }

        .cn-fc-top-left {
          top: 11%;
          left: 2%;
        }

        .cn-fc-top-right {
          top: 15%;
          right: 2%;
        }

        .cn-fc-bottom-left {
          bottom: 13%;
          left: 2%;
        }

        .cn-fc-bottom-right {
          bottom: 14%;
          right: 2%;
        }

        .cn-mini-bars {
          height: 23px;
          display: flex;
          align-items: end;
          gap: 3px;
          margin-top: 7px;
        }

        .cn-mini-bars i {
          flex: 1;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(to top,#7c3aed,#d946ef);
          min-height: 3px;
        }

        .cn-progress {
          width: 100%;
          height: 5px;
          border-radius: 10px;
          overflow: hidden;
          background: #29304d;
          margin-top: 7px;
        }

        .cn-progress i {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg,#8b5cf6,#34d399);
        }

        /* MARKETING */

        .cn-marketing-ring {
          position: absolute;
          left: 50%;
          top: 51%;
          transform: translate(-50%,-50%);
          border: 1px solid rgba(217,70,239,.22);
          border-radius: 50%;
          animation: cn-spin 20s linear infinite;
        }

        .ring-1 {
          width: 210px;
          height: 210px;
        }

        .ring-2 {
          width: 300px;
          height: 300px;
          animation-duration: 15s;
          animation-direction: reverse;
        }

        .ring-3 {
          width: 390px;
          height: 390px;
          animation-duration: 26s;
        }

        .cn-marketing-core {
          background: radial-gradient(circle at 35% 25%,#ec4899,#7c3aed 65%,#26105d);
        }

        .cn-marketing-core strong {
          font-size: 36px;
        }

        .cn-marketing-core span {
          font-size: 7px;
        }

        /* CAREER */

        .cn-career-line {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 51%;
          height: 4px;
          border-radius: 20px;
          background: linear-gradient(
            90deg,
            #7c3aed,
            #d946ef,
            #3b82f6,
            #34d399
          );
          box-shadow: 0 0 20px rgba(139,92,246,.5);
        }

        .cn-career-node {
          position: absolute;
          top: 51%;
          transform: translateY(-50%);
          width: 75px;
          text-align: center;
          z-index: 12;
        }

        .cn-career-node small {
          display: block;
          color: #c4b5fd;
          font-size: 8px;
          font-weight: 900;
          margin-bottom: 5px;
        }

        .cn-career-node div {
          width: 54px;
          height: 54px;
          margin: auto;
          display: grid;
          place-items: center;
          border-radius: 15px;
          color: white;
          background: linear-gradient(145deg,#6d28d9,#312e81);
          border: 1px solid rgba(196,181,253,.3);
          box-shadow: 0 0 25px rgba(124,58,237,.35);
        }

        .cn-career-node svg {
          width: 24px;
          height: 24px;
        }

        .cn-career-node strong {
          display: block;
          color: white;
          font-size: 10px;
          margin-top: 5px;
        }

        .cn-career-node span {
          color: #747b9b;
          font-size: 7px;
        }

        /* BUSINESS */

        .cn-business-grid {
          position: absolute;
          inset: 5%;
          background-image:
            linear-gradient(rgba(99,102,241,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,.08) 1px, transparent 1px);
          background-size: 32px 32px;
          transform: perspective(500px) rotateX(58deg) translateY(70px);
          opacity: .75;
        }

        .cn-business-core {
          background: radial-gradient(circle at 35% 25%,#2563eb,#4f46e5 60%,#21105d);
        }

        /* TECHNOLOGY */

        .cn-tech-network {
          position: absolute;
          inset: 0;
        }

        .cn-tech-network span {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #67e8f9;
          box-shadow: 0 0 15px #22d3ee;
          animation: cn-pulse 2.5s ease-in-out infinite;
        }

        @keyframes cn-pulse {
          50% {
            transform: scale(1.8);
            opacity: .45;
          }
        }

        .cn-tech-core {
          background: radial-gradient(circle at 35% 25%,#06b6d4,#2563eb 60%,#1e1b4b);
        }

        /* ================= IMPACT ================= */

        .cn-impact-section {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 18px auto;
          padding: 42px 36px 32px;
          background: white;
          border: 1px solid #e2e5f0;
          border-radius: 28px;
          box-shadow: 0 15px 50px rgba(31,41,91,.07);
        }

        .cn-impact-header span,
        .cn-section-heading-center span {
          color: #7040ff;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 2px;
        }

        .cn-impact-header h2,
        .cn-section-heading-center h2 {
          margin: 8px 0 4px;
          font-size: clamp(28px,3vw,42px);
          line-height: 1.05;
          letter-spacing: -1.5px;
          color: #11162b;
        }

        .cn-impact-header p,
        .cn-section-heading-center p {
          margin: 0;
          color: #66708f;
          font-size: 13px;
        }

        .cn-impact-infographic {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 22px;
          margin-top: 40px;
        }

        .cn-impact-connector {
          position: absolute;
          left: 12%;
          right: 12%;
          top: 39px;
          height: 3px;
          background: linear-gradient(
            90deg,
            #8b5cf6,
            #c026d3,
            #2563eb,
            #10b981
          );
          z-index: 0;
        }

        .cn-impact-step {
          position: relative;
          z-index: 2;
          padding: 0 8px;
        }

        .cn-impact-icon {
          width: 78px;
          height: 78px;
          margin-bottom: 14px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          border: 7px solid white;
          box-shadow: 0 8px 25px rgba(49,46,129,.16);
        }

        .cn-impact-icon svg {
          width: 27px;
          height: 27px;
        }

        .impact-1 { background: linear-gradient(145deg,#7c3aed,#8b5cf6); }
        .impact-2 { background: linear-gradient(145deg,#2563eb,#4f46e5); }
        .impact-3 { background: linear-gradient(145deg,#c026d3,#ec4899); }
        .impact-4 { background: linear-gradient(145deg,#059669,#10b981); }

        .cn-impact-number {
          color: #9299b3;
          font-size: 9px;
          font-weight: 900;
        }

        .cn-impact-step h3 {
          margin: 5px 0;
          font-size: 18px;
          color: #11162b;
        }

        .cn-impact-step p {
          margin: 0;
          max-width: 230px;
          color: #66708f;
          font-size: 11px;
          line-height: 1.65;
        }

        .cn-impact-arrow {
          position: absolute;
          right: -14px;
          top: 27px;
          color: #9ca3bf;
          width: 22px;
        }

        .cn-impact-bottom {
          margin-top: 30px;
          padding: 16px 20px;
          border-radius: 16px;
          background: linear-gradient(100deg,#f6f2ff,#faf7ff);
          border: 1px solid #e8ddff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .cn-impact-bottom span {
          display: block;
          color: #7c3aed;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .cn-impact-bottom strong {
          display: block;
          margin-top: 3px;
          color: #303653;
          font-size: 13px;
        }

        .cn-impact-bottom button {
          border: 0;
          border-radius: 11px;
          padding: 10px 15px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: white;
          background: linear-gradient(100deg,#6538ff,#a52cff);
          font-size: 11px;
          font-weight: 900;
        }

        .cn-impact-bottom button svg {
          width: 14px;
        }

        /* ================= TOOLS ================= */

        .cn-tools-section {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 18px auto;
          padding: 42px 36px;
          background: white;
          border: 1px solid #e2e5f0;
          border-radius: 28px;
        }

        .cn-section-heading-center {
          text-align: center;
          max-width: 720px;
          margin: auto;
        }

        .cn-tools-grid {
          display: grid;
          grid-template-columns: repeat(6,1fr);
          gap: 12px;
          margin-top: 30px;
          perspective: 1000px;
        }

        .cn-tool-card {
          min-height: 225px;
          text-align: left;
          padding: 17px;
          border-radius: 19px;
          border: 1px solid #e4e7f1;
          background: linear-gradient(145deg,#fff,#fafaff);
          box-shadow: 0 10px 30px rgba(31,41,91,.06);
          transition: box-shadow .25s ease;
        }

        .cn-tool-card:hover {
          box-shadow: 0 20px 45px rgba(79,70,229,.15);
        }

        .cn-tool-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          color: white;
          border-radius: 13px;
          box-shadow: 0 8px 18px rgba(79,70,229,.18);
        }

        .cn-tool-icon svg {
          width: 21px;
          height: 21px;
        }

        .cn-tool-card h3 {
          margin: 14px 0 6px;
          color: #17203b;
          font-size: 13px;
          line-height: 1.3;
        }

        .cn-tool-card p {
          margin: 0;
          color: #6d7592;
          font-size: 9px;
          line-height: 1.65;
        }

        .cn-tool-card > span {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 14px;
          color: #6738ff;
          font-size: 9px;
          font-weight: 950;
        }

        .cn-tool-card > span svg {
          width: 11px;
        }

        /* ================= OFFERINGS ================= */

        .cn-offerings-section {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 18px auto;
          padding: 44px 36px;
          background:
            radial-gradient(circle at 10% 0%,rgba(245,158,11,.06),transparent 30%),
            radial-gradient(circle at 90% 100%,rgba(124,58,237,.07),transparent 30%),
            white;
          border: 1px solid #e2e5f0;
          border-radius: 28px;
        }

        .cn-offering-heading {
          text-align: center;
          max-width: 800px;
          margin: auto;
        }

        .cn-offering-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 13px;
          border-radius: 999px;
          color: #7040ff;
          background: #f3efff;
          border: 1px solid #e5dcff;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .cn-offering-badge svg {
          width: 13px;
        }

        .cn-offering-heading h2 {
          margin: 10px 0 5px;
          font-size: clamp(30px,3vw,44px);
          letter-spacing: -1.5px;
        }

        .cn-offering-heading p {
          margin: 0;
          color: #66708f;
          font-size: 12px;
          line-height: 1.65;
        }

        .cn-offering-flow {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 15px;
          margin-top: 32px;
          perspective: 1200px;
        }

        .cn-offering-card {
          position: relative;
          min-height: 235px;
          padding: 19px;
          text-align: left;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid;
          background: white;
          box-shadow: 0 12px 30px rgba(31,41,91,.07);
          transition: box-shadow .25s ease;
        }

        .cn-offering-card::after {
          content: "";
          position: absolute;
          width: 130px;
          height: 130px;
          right: -55px;
          bottom: -60px;
          border-radius: 50%;
          opacity: .13;
        }

        .cn-offering-card:hover {
          box-shadow: 0 24px 55px rgba(31,41,91,.14);
        }

        .cn-offering-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cn-offering-top > span {
          font-size: 10px;
          font-weight: 950;
          opacity: .7;
        }

        .cn-offering-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          color: white;
          box-shadow: 0 9px 20px rgba(31,41,91,.14);
        }

        .cn-offering-icon svg {
          width: 23px;
        }

        .cn-offering-card h3 {
          margin: 15px 0 3px;
          font-size: 17px;
          color: #17203b;
        }

        .cn-offering-card > strong {
          font-size: 9px;
          letter-spacing: .6px;
        }

        .cn-offering-card p {
          color: #66708f;
          font-size: 10px;
          line-height: 1.65;
          margin: 9px 0 14px;
        }

        .cn-offering-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 9px;
          font-weight: 950;
        }

        .cn-offering-link svg {
          width: 12px;
        }

        .cn-offering-amber {
          border-color: #fde2a9;
          background: linear-gradient(145deg,#fff,#fffaf0);
        }

        .cn-offering-amber .cn-offering-icon {
          background: linear-gradient(145deg,#f59e0b,#ea580c);
        }

        .cn-offering-amber > strong,
        .cn-offering-amber .cn-offering-link {
          color: #d97706;
        }

        .cn-offering-pink {
          border-color: #fbcfe8;
          background: linear-gradient(145deg,#fff,#fff4fa);
        }

        .cn-offering-pink .cn-offering-icon {
          background: linear-gradient(145deg,#ec4899,#db2777);
        }

        .cn-offering-pink > strong,
        .cn-offering-pink .cn-offering-link {
          color: #db2777;
        }

        .cn-offering-blue {
          border-color: #bfdbfe;
          background: linear-gradient(145deg,#fff,#f4f8ff);
        }

        .cn-offering-blue .cn-offering-icon {
          background: linear-gradient(145deg,#3b82f6,#2563eb);
        }

        .cn-offering-blue > strong,
        .cn-offering-blue .cn-offering-link {
          color: #2563eb;
        }

        .cn-offering-green {
          border-color: #bbf7d0;
          background: linear-gradient(145deg,#fff,#f3fff7);
        }

        .cn-offering-green .cn-offering-icon {
          background: linear-gradient(145deg,#10b981,#059669);
        }

        .cn-offering-green > strong,
        .cn-offering-green .cn-offering-link {
          color: #059669;
        }

        .cn-offering-purple {
          border-color: #ddd6fe;
          background: linear-gradient(145deg,#fff,#f8f5ff);
        }

        .cn-offering-purple .cn-offering-icon {
          background: linear-gradient(145deg,#8b5cf6,#6d28d9);
        }

        .cn-offering-purple > strong,
        .cn-offering-purple .cn-offering-link {
          color: #7c3aed;
        }

        .cn-offering-cyan {
          border-color: #a5f3fc;
          background: linear-gradient(145deg,#fff,#f2fdff);
        }

        .cn-offering-cyan .cn-offering-icon {
          background: linear-gradient(145deg,#06b6d4,#2563eb);
        }

        .cn-offering-cyan > strong,
        .cn-offering-cyan .cn-offering-link {
          color: #0891b2;
        }

        /* ================= METRICS ================= */

        .cn-metrics {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 18px auto;
          padding: 20px 18px;
          display: grid;
          grid-template-columns: repeat(6,1fr);
          border-radius: 22px;
          background: white;
          border: 1px solid #e2e5f0;
          box-shadow: 0 12px 35px rgba(31,41,91,.06);
        }

        .cn-metric {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 55px;
          border-right: 1px solid #edf0f6;
        }

        .cn-metric:last-child {
          border-right: 0;
        }

        .cn-metric > span {
          color: #633cff;
          font-size: 21px;
        }

        .cn-metric strong {
          display: block;
          color: #151b35;
          font-size: 19px;
          line-height: 1;
        }

        .cn-metric small {
          display: block;
          margin-top: 4px;
          color: #737b97;
          font-size: 8px;
        }

        /* ================= REVIEWS ================= */

        .cn-reviews-section {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 42px auto 25px;
          padding: 45px 36px 35px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 0% 0%,rgba(124,58,237,.08),transparent 28%),
            radial-gradient(circle at 100% 100%,rgba(236,72,153,.07),transparent 28%),
            white;
          border: 1px solid #e2e5f0;
          box-shadow: 0 18px 55px rgba(31,41,91,.08);
        }

        .cn-review-heading {
          text-align: center;
          max-width: 900px;
          margin: auto;
        }

        .cn-review-heading > span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7040ff;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .cn-review-heading > span svg {
          width: 13px;
          fill: #f59e0b;
          color: #f59e0b;
        }

        .cn-review-heading h2 {
          margin: 10px 0 5px;
          color: #11162b;
          font-size: clamp(29px,3.2vw,46px);
          letter-spacing: -1.7px;
        }

        .cn-review-heading p {
          margin: 0;
          color: #66708f;
          font-size: 13px;
        }

        .cn-review-carousel {
          position: relative;
          margin-top: 30px;
        }

        .cn-review-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
          min-height: 310px;
        }

        .cn-review-card {
          position: relative;
          min-height: 310px;
          padding: 23px;
          border-radius: 22px;
          border: 1px solid rgba(124,58,237,.14);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(31,41,91,.07);
        }

        .cn-review-stars {
          display: flex;
          gap: 3px;
          color: #f59e0b;
        }

        .cn-review-stars svg {
          width: 15px;
          height: 15px;
        }

        .cn-review-category {
          display: inline-flex;
          margin-top: 12px;
          padding: 5px 9px;
          border-radius: 999px;
          background: rgba(255,255,255,.75);
          color: #5b35d5;
          font-size: 8px;
          font-weight: 900;
        }

        .cn-review-quote {
          position: relative;
          z-index: 2;
          min-height: 105px;
          margin: 17px 0 8px;
          color: #39415f;
          font-size: 12px;
          line-height: 1.7;
        }

        .cn-review-person {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 17px;
          display: flex;
          align-items: end;
          gap: 11px;
          z-index: 4;
        }

        .cn-review-person strong {
          display: block;
          color: #171d36;
          font-size: 12px;
        }

        .cn-review-person span {
          display: block;
          color: #747c98;
          font-size: 8px;
          margin-top: 2px;
        }

        .cn-review-mark {
          position: absolute;
          right: 20px;
          top: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          background: linear-gradient(145deg,#7c3aed,#c026d3);
          font-size: 26px;
          font-weight: 900;
          box-shadow: 0 10px 22px rgba(124,58,237,.22);
        }

        /* AVATAR */

        .cn-review-avatar {
          position: relative;
          width: 75px;
          height: 78px;
          flex: 0 0 75px;
        }

        .cn-avatar-face {
          position: absolute;
          z-index: 3;
          left: 16px;
          top: 13px;
          width: 43px;
          height: 45px;
          border-radius: 45% 45% 48% 48%;
          background: #ffd8b9;
          box-shadow: inset -3px -3px 0 rgba(190,120,80,.08);
        }

        .cn-avatar-hair {
          position: absolute;
          z-index: 4;
          left: 13px;
          top: 5px;
          width: 49px;
          height: 27px;
          border-radius: 50% 50% 25% 25%;
          background: #241a2d;
        }

        .cn-avatar-female .cn-avatar-hair {
          left: 9px;
          top: 4px;
          width: 57px;
          height: 52px;
          border-radius: 50% 50% 35% 35%;
          background: #352035;
        }

        .cn-eye {
          position: absolute;
          top: 19px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #29243a;
        }

        .cn-eye.left {
          left: 10px;
        }

        .cn-eye.right {
          right: 10px;
        }

        .cn-smile {
          position: absolute;
          left: 50%;
          bottom: 8px;
          width: 13px;
          height: 6px;
          transform: translateX(-50%);
          border-bottom: 2px solid #a84d55;
          border-radius: 0 0 50% 50%;
        }

        .cn-avatar-body {
          position: absolute;
          z-index: 2;
          left: 6px;
          bottom: 0;
          width: 65px;
          height: 35px;
          border-radius: 35px 35px 8px 8px;
          background: linear-gradient(145deg,#5b35ff,#312e81);
        }

        .cn-avatar-female .cn-avatar-body {
          background: linear-gradient(145deg,#ec4899,#9d174d);
        }

        .cn-review-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 15;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid #dfe2ee;
          background: white;
          color: #5731d5;
          display: grid;
          place-items: center;
          box-shadow: 0 10px 25px rgba(31,41,91,.12);
        }

        .cn-review-nav:hover {
          background: #f5f1ff;
        }

        .cn-review-nav svg {
          width: 20px;
        }

        .cn-review-prev {
          left: -20px;
        }

        .cn-review-next {
          right: -20px;
        }

        .cn-review-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 22px;
        }

        .cn-review-dots button {
          width: 7px;
          height: 7px;
          border: 0;
          padding: 0;
          border-radius: 50%;
          background: #cbd0e0;
        }

        .cn-review-dots button.active {
          width: 25px;
          border-radius: 10px;
          background: #7138ff;
        }

        /* ================= FINAL CTA ================= */

        .cn-final-cta {
          width: calc(100% - 90px);
          max-width: 1440px;
          margin: 25px auto 45px;
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          background: linear-gradient(105deg,#4338ca,#6d28d9,#a21caf);
          color: white;
          padding: 48px 30px;
          box-shadow: 0 25px 60px rgba(79,70,229,.2);
        }

        .cn-final-glow {
          position: absolute;
          width: 330px;
          height: 330px;
          right: -100px;
          top: -160px;
          border-radius: 50%;
          background: rgba(255,255,255,.12);
          filter: blur(30px);
        }

        .cn-final-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: auto;
          text-align: center;
        }

        .cn-final-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(255,255,255,.13);
          border: 1px solid rgba(255,255,255,.2);
          font-size: 9px;
          font-weight: 900;
        }

        .cn-final-badge svg {
          width: 13px;
        }

        .cn-final-content h2 {
          margin: 14px 0 8px;
          font-size: clamp(27px,3.5vw,44px);
          letter-spacing: -1.5px;
        }

        .cn-final-content p {
          margin: auto;
          max-width: 620px;
          color: #e4ddff;
          font-size: 12px;
          line-height: 1.7;
        }

        .cn-final-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .cn-final-actions button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 12px 17px;
          border: 0;
          border-radius: 12px;
          color: #4c1d95;
          background: white;
          font-size: 11px;
          font-weight: 950;
        }

        .cn-final-actions button.secondary {
          color: white;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.22);
        }

        .cn-final-actions svg {
          width: 14px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1100px) {
          .cn-tools-grid {
            grid-template-columns: repeat(3,1fr);
          }

          .cn-metrics {
            grid-template-columns: repeat(3,1fr);
          }

          .cn-metric:nth-child(3) {
            border-right: 0;
          }

          .cn-metric:nth-child(n+4) {
            border-top: 1px solid #edf0f6;
          }
        }

        @media (max-width: 900px) {
          .cn-hero {
            height: auto;
            min-height: 720px;
          }

          .cn-hero-inner {
            grid-template-columns: 1fr;
          }

          .cn-hero-copy {
            padding: 38px 28px 10px;
          }

          .cn-visual {
            min-height: 340px;
          }

          .cn-impact-infographic {
            grid-template-columns: repeat(2,1fr);
          }

          .cn-impact-connector {
            display: none;
          }

          .cn-offering-flow {
            grid-template-columns: repeat(2,1fr);
          }

          .cn-review-grid {
            grid-template-columns: 1fr;
          }

          .cn-review-card {
            display: none;
          }

          .cn-review-card:first-child {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .cn-social-rail {
            right: 7px;
            gap: 6px;
          }

          .cn-social-item {
            width: 35px;
            height: 35px;
            border-radius: 10px;
          }

          .cn-social-item svg {
            width: 17px;
            height: 17px;
          }

          .cn-hero,
          .cn-impact-section,
          .cn-tools-section,
          .cn-offerings-section,
          .cn-metrics,
          .cn-reviews-section,
          .cn-final-cta {
            width: calc(100% - 28px);
          }

          .cn-hero {
            min-height: 650px;
            margin-top: 12px;
            border-radius: 22px;
          }

          .cn-hero-copy {
            padding: 31px 20px 0;
          }

          .cn-hero-eyebrow {
            font-size: 8px;
            padding: 7px 10px;
            margin-bottom: 14px;
          }

          .cn-hero-title {
            font-size: 35px;
            letter-spacing: -1.8px;
          }

          .cn-hero-description {
            font-size: 11px;
            line-height: 1.6;
            margin-top: 14px;
          }

          .cn-hero-actions {
            margin-top: 16px;
          }

          .cn-hero-primary,
          .cn-hero-secondary {
            padding: 10px 12px;
            font-size: 9px;
          }

          .cn-hero-stats {
            gap: 9px;
            margin-top: 16px;
          }

          .cn-hero-stat strong {
            font-size: 14px;
          }

          .cn-hero-stat span {
            font-size: 7px;
          }

          .cn-hero-divider {
            height: 22px;
          }

          .cn-visual {
            min-height: 300px;
          }

          .cn-slider-arrows {
            right: 13px;
            top: 13px;
          }

          .cn-slider-arrows button {
            width: 34px;
            height: 34px;
          }

          .cn-orbit-a {
            width: 220px;
            height: 220px;
          }

          .cn-orbit-b {
            width: 165px;
            height: 165px;
          }

          .cn-orbit-c {
            width: 275px;
            height: 275px;
          }

          .cn-growth-core,
          .cn-marketing-core,
          .cn-business-core,
          .cn-tech-core {
            width: 105px;
            height: 105px;
          }

          .cn-growth-core svg,
          .cn-marketing-core svg,
          .cn-business-core svg,
          .cn-tech-core svg {
            width: 22px;
            height: 22px;
          }

          .cn-growth-core strong,
          .cn-growth-core span,
          .cn-business-core strong,
          .cn-business-core span,
          .cn-tech-core strong,
          .cn-tech-core span {
            font-size: 7px;
          }

          .cn-marketing-core strong {
            font-size: 28px;
          }

          .cn-floating-card {
            width: 112px;
            min-height: 54px;
            padding: 7px 9px;
            border-radius: 11px;
          }

          .cn-floating-card span {
            font-size: 6px;
          }

          .cn-floating-card strong {
            font-size: 13px;
          }

          .cn-floating-card small {
            font-size: 6px;
          }

          .cn-fc-top-left {
            top: 9%;
          }

          .cn-fc-top-right {
            top: 12%;
          }

          .cn-fc-bottom-left {
            bottom: 9%;
          }

          .cn-fc-bottom-right {
            bottom: 10%;
          }

          .cn-career-line {
            left: 7%;
            right: 7%;
          }

          .cn-career-node {
            width: 55px;
          }

          .cn-career-node div {
            width: 43px;
            height: 43px;
            border-radius: 12px;
          }

          .cn-career-node svg {
            width: 18px;
          }

          .cn-career-node strong {
            font-size: 7px;
          }

          .cn-career-node span,
          .cn-career-node small {
            font-size: 6px;
          }

          .cn-impact-section,
          .cn-tools-section,
          .cn-offerings-section,
          .cn-reviews-section {
            padding: 28px 16px;
            border-radius: 21px;
          }

          .cn-impact-header h2,
          .cn-section-heading-center h2,
          .cn-offering-heading h2,
          .cn-review-heading h2 {
            font-size: 27px;
          }

          .cn-impact-header p,
          .cn-section-heading-center p,
          .cn-review-heading p {
            font-size: 10px;
          }

          .cn-impact-infographic {
            grid-template-columns: 1fr 1fr;
            gap: 14px 7px;
            margin-top: 25px;
          }

          .cn-impact-icon {
            width: 57px;
            height: 57px;
            border-width: 5px;
          }

          .cn-impact-icon svg {
            width: 20px;
          }

          .cn-impact-step h3 {
            font-size: 14px;
          }

          .cn-impact-step p {
            font-size: 8px;
          }

          .cn-impact-arrow {
            display: none;
          }

          .cn-impact-bottom {
            flex-direction: column;
            align-items: stretch;
          }

          .cn-impact-bottom button {
            justify-content: center;
          }

          .cn-tools-grid {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
          }

          .cn-tool-card {
            min-height: 185px;
            padding: 13px;
            border-radius: 15px;
          }

          .cn-tool-icon {
            width: 37px;
            height: 37px;
          }

          .cn-tool-card h3 {
            font-size: 10px;
            margin-top: 10px;
          }

          .cn-tool-card p {
            font-size: 7px;
          }

          .cn-tool-card > span {
            font-size: 7px;
          }

          .cn-offering-flow {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .cn-offering-card {
            min-height: 190px;
            padding: 15px;
          }

          .cn-offering-card h3 {
            font-size: 15px;
          }

          .cn-offering-card p {
            font-size: 9px;
          }

          .cn-metrics {
            grid-template-columns: repeat(2,1fr);
            padding: 8px;
          }

          .cn-metric {
            border-right: 1px solid #edf0f6;
            min-height: 57px;
          }

          .cn-metric:nth-child(2n) {
            border-right: 0;
          }

          .cn-metric:nth-child(n+3) {
            border-top: 1px solid #edf0f6;
          }

          .cn-metric > span {
            font-size: 16px;
          }

          .cn-metric strong {
            font-size: 15px;
          }

          .cn-metric small {
            font-size: 6px;
          }

          .cn-review-carousel {
            margin-top: 22px;
            padding: 0 4px;
          }

          .cn-review-card {
            min-height: 330px;
            padding: 18px;
          }

          .cn-review-nav {
            width: 34px;
            height: 34px;
          }

          .cn-review-prev {
            left: -4px;
          }

          .cn-review-next {
            right: -4px;
          }

          .cn-review-quote {
            font-size: 10px;
          }

          .cn-review-person {
            left: 15px;
            right: 15px;
          }

          .cn-final-cta {
            padding: 35px 18px;
            border-radius: 22px;
          }

          .cn-final-content h2 {
            font-size: 26px;
          }

          .cn-final-content p {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cn-orbit,
          .cn-marketing-ring,
          .cn-tech-network span {
            animation: none !important;
          }
        }
      `}</style>

      <div className="cn-home">
        {/* RIGHT CONTACT RAIL ONLY — NO LEFT SUPPORT BUTTON */}
        <CareerNovaSocialRail />

        {/* =================================================
            HERO
        ================================================== */}

        <section className="cn-hero">
          <ParticleMeshCanvas />

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: 'easeInOut' }}
              className="cn-hero-inner"
            >
              <div className="cn-hero-copy">
                <div className="cn-hero-eyebrow">
                  <Sparkles />
                  {slide.eyebrow}
                </div>

                <h1 className="cn-hero-title">{slide.title}</h1>

                <p className="cn-hero-description">
                  {slide.description}
                </p>

                <div className="cn-hero-actions">
                  <button
                    className="cn-hero-primary"
                    onClick={() => onNavigate('tools')}
                  >
                    Explore Core Tools
                    <ArrowRight />
                  </button>

                  <button
                    className="cn-hero-secondary"
                    onClick={() =>
                      openAiAssistant({ mode: 'consultation' })
                    }
                  >
                    <Bot />
                    Get Free Consultation
                  </button>
                </div>

                <div className="cn-hero-stats">
                  <div className="cn-hero-stat">
                    <strong>30+</strong>
                    <span>Clients</span>
                  </div>

                  <div className="cn-hero-divider" />

                  <div className="cn-hero-stat">
                    <strong>10+</strong>
                    <span>Expertise</span>
                  </div>

                  <div className="cn-hero-divider" />

                  <div className="cn-hero-stat">
                    <strong>25+</strong>
                    <span>Tools</span>
                  </div>

                  <div className="cn-hero-divider" />

                  <div className="cn-hero-rating">
                    <Star />
                    <div className="cn-hero-stat">
                      <strong>4.9/5</strong>
                      <span>Client Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              <HeroVisual type={slide.visual} />
            </motion.div>
          </AnimatePresence>

          <div className="cn-slider-arrows">
            <button
              onClick={previousSlide}
              aria-label="Previous hero slide"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next hero slide"
            >
              <ChevronRight />
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
            FROM IDEA TO MEASURABLE IMPACT
        ================================================== */}

        <ProcessSection onNavigate={onNavigate} />

        {/* =================================================
            WHAT WE DO BEST — TOOLS
        ================================================== */}

        <ToolsSection onNavigate={onNavigate} />

        {/* =================================================
            OUR OFFERINGS — CORE EXPERTISE
        ================================================== */}

        <OfferingsSection onNavigate={onNavigate} />

        {/* =================================================
            FINAL REALISTIC METRICS
        ================================================== */}

        <MetricsSection />

        {/* =================================================
            REVIEWS — BELOW METRICS / LOWER HOMEPAGE
        ================================================== */}

        <ReviewsSection />

        {/* =================================================
            EXISTING FINAL CTA
        ================================================== */}

        <FinalCTA onNavigate={onNavigate} />
      </div>
    </>
  );
};

export default HomeView;

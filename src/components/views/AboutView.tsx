import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  Eye,
  Heart,
  Zap,
  Headphones,
  Users,
  ArrowRight,
  ShieldCheck,
  Code2,
  Terminal,
  Cpu,
  Smartphone,
  ExternalLink,
  MessageSquare,
  Mail,
  User,
  Send,
  Phone,
  List,
  Lock,
  Check,
  MessageCircle,
  Briefcase,
  Handshake,
  GraduationCap,
  Laptop,
  Coffee,
  Leaf,
  Target,
  Lightbulb,
  TrendingUp,
  Bot,
  Layers3,
  UsersRound,
  Sparkles,
} from 'lucide-react';
import { TabId } from '../../types';

interface AboutViewProps {
  onNavigate: (tab: TabId) => void;
}

const smoothTransition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [agree, setAgree] = useState(true);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const previousTitle = document.title;
    const description =
      document.querySelector('meta[name="description"]') ||
      document.createElement('meta');

    document.title = 'About CareerNova | Technology, Digital Products & Business Growth';

    description.setAttribute('name', 'description');
    description.setAttribute(
      'content',
      'Learn about CareerNova, a technology and growth company building digital products, automation systems, AI solutions, design experiences and practical growth strategies for businesses, brands and founders.'
    );

    if (!description.parentNode) document.head.appendChild(description);

    const target = sessionStorage.getItem('cn_scrollTo');
    if (target) {
      sessionStorage.removeItem('cn_scrollTo');
      const timer = setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      return () => {
        clearTimeout(timer);
        document.title = previousTitle;
      };
    }

    return () => {
      document.title = previousTitle;
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact-form-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/moeqdlpw', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const engineeringPillars = [
    {
      step: '1. Autonomous Velocity',
      title: 'Automation First',
      desc: 'Designing systems that speed up workflows and minimize manual execution loops across tech infrastructure.',
      badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      cardBg: 'bg-gradient-to-br from-indigo-50 via-white to-indigo-50/40 border-indigo-200 hover:border-indigo-400',
      iconChip: 'bg-indigo-100 text-indigo-600',
    },
    {
      step: '2. Resilient Architecture',
      title: 'Scalable Foundations',
      desc: 'Building robust microservices and cloud deployments designed to scale as traffic and complexity grow.',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      cardBg: 'bg-gradient-to-br from-purple-50 via-white to-purple-50/40 border-purple-200 hover:border-purple-400',
      iconChip: 'bg-purple-100 text-purple-600',
    },
    {
      step: '3. Hyper-Democratization',
      title: 'Accessible Tech',
      desc: 'Providing world-class tools at minimal or no cost to ensure equal opportunity for every user.',
      badgeColor: 'bg-sky-100 text-sky-700 border-sky-200',
      cardBg: 'bg-gradient-to-br from-sky-50 via-white to-sky-50/40 border-sky-200 hover:border-sky-400',
      iconChip: 'bg-sky-100 text-sky-600',
    },
    {
      step: '4. UI/UX Quality Rigor',
      title: 'Polished Experience',
      desc: 'Meticulous pixel-level UI design to guarantee elite enterprise-grade application presentation.',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      cardBg: 'bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 border-emerald-200 hover:border-emerald-400',
      iconChip: 'bg-emerald-100 text-emerald-600',
    },
  ];

  const specialists = [
    {
      initials: 'SS',
      name: 'Sudhir Singh',
      role: 'Master Architect and Founder/Developer',
      badge: 'Overall Management',
      avatarBg: 'bg-gradient-to-tr from-purple-600 via-indigo-600 to-indigo-700',
      badgeStyle: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      bio: 'Driving product growth, roadmap generation strategy, and trusted positioning with robust core-level execution and sustainable technology.',
      tags: ['System Architecture', 'Core Lead', 'Strategic Vision'],
    },
    {
      initials: 'AK',
      name: 'Ashwani Kumar',
      role: 'Principal Full-Stack & Cloud Specialist',
      badge: 'Cloud Architecture',
      avatarBg: 'bg-gradient-to-tr from-pink-600 via-purple-600 to-indigo-600',
      badgeStyle: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      bio: 'Expert in Full-Stack engineering, managing containerized cloud deployments, serverless functions, resilient architectures, and scaling systems.',
      tags: ['Full-Stack Stack', 'Cloud & DevOps', 'Backend'],
    },
    {
      initials: 'RC',
      name: 'Ritesh Chaurasiya',
      role: 'Mobile Application & R&D Developer',
      badge: 'R&D Developer',
      avatarBg: 'bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-700',
      badgeStyle: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      bio: 'Specialized in Flutter, App performance frameworks, intuitive user experiences, native APIs integration, and advanced R&D product ideas.',
      tags: ['R&D Ecosystem', 'Mobile', 'Architecture R&D'],
    },
  ];

  return (
    <div className="w-full space-y-7 sm:space-y-10 py-3 px-2 sm:px-4">
      {/* 1. Hero — semantic HTML heading + separate visual */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="relative mx-auto w-full max-w-[1780px] overflow-hidden rounded-[1.75rem] border border-indigo-200/70 bg-white shadow-[0_24px_70px_-42px_rgba(49,46,129,0.32)]"
      >
        <div className="grid min-h-[235px] grid-cols-1 lg:min-h-[270px] lg:grid-cols-[52%_48%]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-6 xl:px-12">
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-indigo-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
              About CareerNova
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.35rem] xl:text-[4rem]">
              Democratizing{' '}
              <span className="relative inline-block overflow-hidden align-bottom">
                <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Career &amp; Business
                </span>
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/95 to-transparent"
                  initial={{ x: '-180%' }}
                  animate={{ x: '520%' }}
                  transition={{ duration: 1.9, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.8 }}
                />
              </span>{' '}
              Intelligence
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              CareerNova brings technology, design and growth strategy together to help turn ideas
              into digital products, intelligent systems and measurable business progress.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700"
              >
                Start a Conversation
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[170px] overflow-hidden bg-slate-50 lg:min-h-0">
            <img
              src="/assets/about-careernova-hero-right.png"
              alt="CareerNova team collaborating around data, technology and business growth"
              className="h-full w-full object-cover object-center"
              loading="eager"
              draggable={false}
            />
          </div>
        </div>
      </motion.section>

      {/* 2. Who We Are */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="mx-auto w-full max-w-[1500px]"
      >
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[38%_62%]">
          <div className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 shadow-sm sm:min-h-[330px] lg:min-h-[360px]">
            <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />
            <img
              src="/assets/about-who-we-are.png"
              alt="CareerNova technology and business team focused on practical digital solutions"
              loading="lazy"
              className="h-full min-h-[300px] w-full object-contain object-center p-3 transition-transform duration-500 group-hover:scale-[1.015] sm:min-h-[330px] lg:min-h-[360px]"
              draggable={false}
            />
          </div>

          <div className="group relative flex min-h-[300px] flex-col justify-center overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-white via-indigo-50/70 to-cyan-50/70 p-6 shadow-sm sm:min-h-[330px] sm:p-8 lg:min-h-[360px]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-lg">
                <UsersRound className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-indigo-200 bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
                About CareerNova · Who We Are
              </span>
            </div>
            <h2 className="inline-flex w-fit max-w-full rounded-2xl border border-indigo-200/80 bg-white/90 px-4 py-2 text-xl font-black tracking-tight shadow-sm sm:text-2xl">
              <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Technology built around real goals.
              </span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              CareerNova is a technology and growth company focused on making digital solutions
              more practical, accessible and outcome-oriented. We bring product thinking,
              engineering, design, automation and growth strategy together instead of treating
              them as disconnected services.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Our work spans digital products, web and mobile experiences, AI-powered workflows,
              e-commerce, marketing, SEO and business growth — creating useful systems that solve
              genuine problems and keep improving as businesses grow.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. Existing Vision + Why CareerNova content, retained and repositioned */}
      <section className="mx-auto w-full max-w-[1500px] space-y-6">
        <div className="text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-indigo-600">
            What Drives Us
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Our Vision &amp; Purpose
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={smoothTransition}
          className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div className="w-full bg-gradient-to-br from-indigo-100 via-white to-blue-100 md:w-[42%]">
              <img
                src="/assets/about-vision-vr.png"
                alt="CareerNova vision represented through an immersive technology experience"
                loading="lazy"
                className="h-full min-h-[250px] w-full object-contain p-5 sm:p-7"
              />
            </div>
            <div className="flex w-full flex-col justify-center p-7 sm:p-9 md:w-[58%]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-200 bg-white text-indigo-600 shadow-sm">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Our Vision</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                To eliminate information asymmetry in career paths and startup ecosystems. We
                believe that people should have equal access to resources, practical tools and
                financial wisdom.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...smoothTransition, delay: 0.05 }}
          className="overflow-hidden rounded-3xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 shadow-sm"
        >
          <div className="flex flex-col md:flex-row-reverse md:items-stretch">
            <div className="w-full bg-gradient-to-br from-fuchsia-100 via-white to-purple-100 md:w-[42%]">
              <img
                src="/assets/about-why-created-roadmap.png"
                alt="CareerNova roadmap helping people move from confusing choices toward practical technology and growth resources"
                loading="lazy"
                className="h-full min-h-[250px] w-full object-contain p-5 sm:p-7"
              />
            </div>
            <div className="flex w-full flex-col justify-center p-7 sm:p-9 md:w-[58%]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-200 bg-white text-fuchsia-600 shadow-sm">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">Why We Created CareerNova</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Too many ambitious people face outdated information, fragmented tools and unclear
                paths. CareerNova was created to bring useful technology, intelligent tools,
                financial intelligence and action-oriented roadmaps into one connected experience.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. What We Do */}
      <section className="mx-auto w-full max-w-[1500px] space-y-6">
        <div className="text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-fuchsia-600">
            What We Do
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            One connected approach to digital growth.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Build the product, automate the work, improve the experience and create a clearer path
            to growth.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-slate-50/95 to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-slate-50/95 to-transparent sm:w-16" />
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[
              ['Build', 'Digital products & software', Code2, 'from-indigo-500 to-blue-600', 'border-indigo-200 bg-indigo-50/70'],
              ['Automate', 'AI & business workflows', Bot, 'from-violet-500 to-fuchsia-600', 'border-fuchsia-200 bg-fuchsia-50/70'],
              ['Design', 'Product & user experiences', Layers3, 'from-cyan-500 to-indigo-600', 'border-cyan-200 bg-cyan-50/70'],
              ['Grow', 'Marketing, SEO & strategy', TrendingUp, 'from-emerald-500 to-teal-600', 'border-emerald-200 bg-emerald-50/70'],
              ['Build', 'Digital products & software', Code2, 'from-indigo-500 to-blue-600', 'border-indigo-200 bg-indigo-50/70'],
              ['Automate', 'AI & business workflows', Bot, 'from-violet-500 to-fuchsia-600', 'border-fuchsia-200 bg-fuchsia-50/70'],
              ['Design', 'Product & user experiences', Layers3, 'from-cyan-500 to-indigo-600', 'border-cyan-200 bg-cyan-50/70'],
              ['Grow', 'Marketing, SEO & strategy', TrendingUp, 'from-emerald-500 to-teal-600', 'border-emerald-200 bg-emerald-50/70'],
            ].map(([title, desc, Icon, gradient, cardBg], index) => {
              const CapabilityIcon = Icon as React.ComponentType<{ className?: string }>;
              return (
                <motion.div
                  key={`${title as string}-${index}`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`flex min-h-[142px] w-[76vw] shrink-0 flex-col justify-between rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-lg sm:w-[42vw] lg:w-[calc((100vw-120px)/4)] lg:max-w-[360px] ${cardBg as string}`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient as string} text-white shadow-md`}>
                    <CapabilityIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mt-4 text-base font-black text-slate-950">{title as string}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{desc as string}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 transition hover:text-fuchsia-600"
          >
            Explore our Services
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 5. How We Work */}
      <section className="mx-auto w-full max-w-[1500px]">
        <div className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 p-4 shadow-sm sm:p-6">
          <div className="text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-indigo-600">How We Work</span>
            <h2 className="mx-auto mt-2 inline-flex rounded-2xl border border-indigo-200 bg-white px-4 py-2 text-2xl font-black tracking-tight shadow-sm sm:text-3xl">
              <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-500 bg-clip-text text-transparent">From idea to ongoing improvement.</span>
            </h2>
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/80 bg-white/60 sm:mt-5">
            <img
              src="/assets/how-we-work.png"
              alt="CareerNova process from understanding and planning to building, growth and support"
              loading="lazy"
              className="block h-auto max-h-[420px] w-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* 6. Principles Behind Our Work */}
      <section className="mx-auto w-full max-w-[1500px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Zap className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            <span>Our Core Pillars</span>
          </div>
          <h2 className="mx-auto mt-2 inline-flex rounded-2xl border border-indigo-200 bg-white px-4 py-2 text-2xl font-black text-slate-900 shadow-sm sm:text-3xl">
            <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              The Principles That Guide Our Engineering
            </span>
          </h2>
        </div>

        {/* Wide visual banner — replaces the old core-pillars image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={smoothTransition}
          className="group relative mt-4 overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-2 shadow-sm sm:mt-5 sm:p-3"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />
          <img
            src="/assets/careernova-core-pillars-wide.png"
            alt="CareerNova core engineering pillars: Automation First, Scalable Foundations, Accessible Tech and Polished Experience"
            loading="lazy"
            className="block h-auto w-full rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.008]"
            draggable={false}
          />
        </motion.div>
      </section>

      {/* 7. Why CareerNova */}
      <section className="mx-auto w-full max-w-[1500px]">
        <div className="text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
            Why CareerNova
          </span>
          <h2 className="mx-auto mt-2 inline-flex rounded-2xl border border-emerald-200 bg-white px-4 py-2 text-2xl font-black tracking-tight shadow-sm sm:text-3xl">
            <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              Built to be a partner, not just a provider.
            </span>
          </h2>
        </div>

        {/* Text on the left + circular infographic on the right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={smoothTransition}
          className="mt-4 grid items-stretch overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/60 via-white to-indigo-50/60 shadow-sm sm:mt-5 lg:grid-cols-[50%_50%]"
        >
          {/* LEFT: supporting content */}
          <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700 shadow-sm">
              <Handshake className="h-4 w-4" />
              A Partnership Mindset
            </div>

            <h3 className="max-w-xl text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
              Practical technology, clear communication and long-term support.
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {[
                {
                  title: 'Business-First Thinking',
                  desc: 'Start with the real business objective.',
                  Icon: Target,
                  box: 'from-indigo-500 to-violet-600',
                },
                {
                  title: 'Connected Expertise',
                  desc: 'Technology, design and growth work together.',
                  Icon: Layers3,
                  box: 'from-cyan-500 to-blue-600',
                },
                {
                  title: 'Clear Communication',
                  desc: 'Straightforward scope and expectations.',
                  Icon: MessageSquare,
                  box: 'from-fuchsia-500 to-pink-600',
                },
                {
                  title: 'Scalable Foundations',
                  desc: 'Systems designed to evolve as complexity grows.',
                  Icon: TrendingUp,
                  box: 'from-emerald-500 to-teal-600',
                },
                {
                  title: 'Practical Technology',
                  desc: 'Useful outcomes without unnecessary complexity.',
                  Icon: Lightbulb,
                  box: 'from-orange-500 to-amber-500',
                },
                {
                  title: 'Long-Term Support',
                  desc: 'Ongoing improvements and technical support.',
                  Icon: Headphones,
                  box: 'from-blue-500 to-indigo-600',
                },
              ].map(({ title, desc, Icon, box }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-2xl border border-white/90 bg-white/80 p-3 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${box} text-white shadow-md`}>
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-black leading-5 text-slate-900">{title}</h4>
                      <p className="mt-0.5 text-[11px] leading-4 text-slate-500">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: circular infographic */}
          <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border-t border-emerald-100 bg-gradient-to-br from-white via-cyan-50/40 to-indigo-50/60 p-3 sm:min-h-[390px] sm:p-4 lg:min-h-[500px] lg:border-l lg:border-t-0 lg:p-5">
            <div className="pointer-events-none absolute -right-20 top-10 h-52 w-52 rounded-full bg-fuchsia-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-8 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl" />

            <motion.img
              src="/assets/careernova-why-partner-circle.png"
              alt="CareerNova partnership principles: business-first thinking, connected expertise, clear communication, scalable foundations, practical technology and long-term support"
              loading="lazy"
              className="relative z-10 block h-auto max-h-[455px] w-full max-w-[500px] object-contain drop-shadow-[0_18px_34px_rgba(79,70,229,0.14)]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity }}
              draggable={false}
            />
          </div>
        </motion.div>
      </section>


      {/* 8. The People Behind CareerNova */}
      <section className="mx-auto w-full max-w-[1500px]">
        <div className="mb-4 text-center sm:mb-5">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-indigo-600">The People Behind CareerNova</span>
          <h2 className="mx-auto mt-2 inline-flex rounded-2xl border border-indigo-200 bg-white px-4 py-2 text-2xl font-black tracking-tight shadow-sm sm:text-3xl">
            <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">A team focused on building useful things well.</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">Meet the people driving architecture, engineering, mobile development, strategy and growth across CareerNova.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { name: 'Sudhir Singh', role: 'Master Architect & Chief Strategy Officer', badge: 'Overall Management & Growth', bio: 'Driving high-impact business positioning, multi-channel customer acquisition funnel design, and strategic corporate roadmap execution to scale operations globally.', tags: ['Growth Strategy', 'Market Positioning', 'Corporate Scaling'], img: '/Sudhir.png', border: 'border-indigo-200', bg: 'from-indigo-50 via-white to-blue-50', accent: 'from-indigo-500 to-violet-600', text: 'text-indigo-700' },
            { name: 'Ashwani Kumar', role: 'Principal Full-Stack & Cloud Specialist', badge: 'Full-Stack Architecture', bio: 'Architecting high-performance, resilient end-to-end web applications with modern frameworks, containerized cloud infrastructure, and low-latency microservices.', tags: ['Full-Stack Engineering', 'Cloud & DevOps', 'Scalable Backends'], img: '/Ashwani.png', border: 'border-purple-200', bg: 'from-purple-50 via-white to-fuchsia-50', accent: 'from-purple-500 to-fuchsia-600', text: 'text-purple-700' },
            { name: 'Ritesh Chaurasiya', role: 'Senior iOS & Mobile App Developer', badge: 'Native iOS Developer', bio: 'Crafting fluid, high-performance native iOS experiences with Swift, seamless human-interface guidelines compliance, and complex device-level API integrations.', tags: ['Swift & SwiftUI', 'Native iOS APIs', 'App Performance'], img: '/Ritesh.png', border: 'border-emerald-200', bg: 'from-emerald-50 via-white to-teal-50', accent: 'from-emerald-500 to-teal-600', text: 'text-emerald-700' },
          ].map((person) => (
            <motion.article
              key={person.name}
              whileHover={{ y: -4 }}
              className={`group flex min-h-[310px] flex-col overflow-hidden rounded-3xl border bg-gradient-to-br ${person.bg} ${person.border} p-5 shadow-sm transition-all duration-300 hover:shadow-xl`}
            >
              <div className={`absolute hidden`} />
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src={person.img} alt={`${person.name} — CareerNova team member`} className={`h-14 w-14 shrink-0 rounded-2xl border-2 ${person.border} object-cover shadow-md transition-transform duration-300 group-hover:scale-105`} />
                  <div>
                    <h3 className="text-base font-black text-slate-950">{person.name}</h3>
                    <p className={`mt-0.5 text-xs font-bold ${person.text}`}>{person.role}</p>
                  </div>
                </div>
              </div>
              <span className={`mt-4 w-fit rounded-full border ${person.border} bg-white/85 px-2.5 py-1 text-[10px] font-bold ${person.text}`}>{person.badge}</span>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{person.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {person.tags.map((tag) => <span key={tag} className="rounded-lg border border-white/80 bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-slate-600">{tag}</span>)}
              </div>
              <div className={`mt-4 h-1 w-full rounded-full bg-gradient-to-r ${person.accent} opacity-80`} />
            </motion.article>
          ))}
        </div>
      </section>

      {/* 9. Let's Connect - Contact Form */}
      <motion.section
        id="contact-form-section"
        style={{ scrollMarginTop: '24px' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="space-y-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* LEFT: Image replaces the previous contact content; form remains untouched */}
          <div className="relative h-full overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/40 to-fuchsia-50/50 shadow-sm">
            <img
              src="/assets/contact-us-left.png"
              alt="Let's Connect — CareerNova contact support"
              className="block h-full min-h-[620px] w-full object-contain object-center select-none"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* RIGHT: Contact Form Card */}
          <div className="bg-white p-6 sm:p-9 rounded-3xl border border-slate-200 shadow-sm">
            <div className="text-left space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-1 text-[11px] uppercase font-bold tracking-wider text-indigo-700">
                <span>Send Us A Message</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Help</span>
              </h2>
              <p className="text-slate-600 text-sm">
                Fill out the form below and our team will get back to you soon.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Enter your email"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <List className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleFormChange}
                      className={`w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none cursor-pointer ${
                        formData.subject === '' ? 'text-slate-400' : 'text-slate-800'
                      }`}
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="New Projects">New Projects</option>
                      <option value="Partnerships">Partnerships</option>
                      <option value="Career Support">Career Support</option>
                      <option value="General Enquiries">General Enquiries</option>
                    </select>
                    <svg className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your requirement..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              <label htmlFor="agree" className="flex items-start gap-2.5 cursor-pointer select-none">
                <span className="relative flex-shrink-0 mt-0.5">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="peer sr-only"
                  />
                  <span className="flex items-center justify-center w-4.5 h-4.5 rounded-md border-2 border-slate-300 bg-white peer-checked:bg-gradient-to-r peer-checked:from-indigo-600 peer-checked:to-fuchsia-600 peer-checked:border-transparent transition-all">
                    {agree && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </span>
                </span>
                <span className="text-xs text-slate-600">
                  I agree to be contacted by CareerNova regarding my inquiry.
                </span>
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 disabled:opacity-60 text-white text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/25 cursor-pointer"
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <Lock className="w-3 h-3" />
                <span>Your information is safe with us. We never share your data.</span>
              </p>

              {status === 'success' && (
                <p className="text-center text-sm font-semibold text-emerald-600">
                  Thanks! Your message has been sent — we'll get back to you soon.
                </p>
              )}
              {status === 'error' && !agree && (
                <p className="text-center text-sm font-semibold text-red-600">
                  Please agree to be contacted before sending your message.
                </p>
              )}
              {status === 'error' && agree && (
                <p className="text-center text-sm font-semibold text-red-600">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Feature Strip — horizontal colorful cards */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/60 p-4 sm:p-5 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {[
              {
                title: 'Turn Ideas Into Reality',
                desc: "Let's discuss how we can help you grow.",
                Icon: Target,
                box: 'from-indigo-500 to-violet-600',
                glow: 'shadow-indigo-500/20',
              },
              {
                title: 'Innovative Solutions',
                desc: 'Tailored to your unique needs.',
                Icon: Lightbulb,
                box: 'from-cyan-500 to-blue-600',
                glow: 'shadow-cyan-500/20',
              },
              {
                title: 'A Reliable Partner',
                desc: 'Committed to your success.',
                Icon: Users,
                box: 'from-emerald-500 to-teal-600',
                glow: 'shadow-emerald-500/20',
              },
              {
                title: 'Long-Term Growth',
                desc: 'More than a service, a partnership.',
                Icon: TrendingUp,
                box: 'from-orange-500 to-fuchsia-600',
                glow: 'shadow-orange-500/20',
              },
            ].map(({ title, desc, Icon, box, glow }) => (
              <motion.div
                key={title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`group relative min-h-[132px] overflow-hidden rounded-2xl border border-white/80 bg-white p-4 shadow-md ${glow}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${box}`} />
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${box} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="h-5 w-5" strokeWidth={2.3} />
                  </div>
                  <h4 className="text-sm font-black bg-gradient-to-r from-slate-900 via-indigo-700 to-fuchsia-600 bg-clip-text text-transparent">
                    {title}
                  </h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-lg sm:text-xl italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
          Your Next Opportunity Starts Here
        </p>
      </motion.section>
    </div>
  );
};

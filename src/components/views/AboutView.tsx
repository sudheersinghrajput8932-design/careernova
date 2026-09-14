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
    <div className="w-full space-y-12 sm:space-y-16 py-4 px-2 sm:px-4">
      {/* 1. Hero — semantic HTML heading + separate visual */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="relative mx-auto w-full max-w-[1780px] overflow-hidden rounded-[1.75rem] border border-indigo-200/70 bg-white shadow-[0_24px_70px_-42px_rgba(49,46,129,0.32)]"
      >
        <div className="grid min-h-[285px] grid-cols-1 lg:min-h-[330px] lg:grid-cols-[52%_48%]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-8 lg:px-11 lg:py-8 xl:px-14">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-indigo-700 shadow-sm">
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

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              CareerNova brings technology, design and growth strategy together to help turn ideas
              into digital products, intelligent systems and measurable business progress.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
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

          <div className="relative min-h-[210px] overflow-hidden bg-slate-50 lg:min-h-0">
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
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          <div className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-white via-indigo-50/70 to-cyan-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-lg">
                <UsersRound className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">About CareerNova</span>
                <span className="ml-2 inline-block rounded-full border border-indigo-200 bg-white/80 px-2.5 py-1 text-[10px] font-bold text-indigo-700">Who We Are</span>
              </div>
            </div>

            <h2 className="inline-flex w-fit rounded-2xl border border-indigo-200/80 bg-white/85 px-4 py-2 text-xl font-black tracking-tight text-slate-950 shadow-sm sm:text-2xl">
              <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Technology built around real goals.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              CareerNova is a technology and growth company focused on making digital solutions
              more practical, accessible and outcome-oriented. We bring product thinking,
              engineering, design, automation and growth strategy together instead of treating
              them as disconnected services.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Our work spans digital products, web and mobile experiences, AI-powered workflows,
              e-commerce, marketing, SEO and business growth. The goal is simple: create useful
              systems that solve genuine problems and can keep improving as the business grows.
            </p>
          </div>

          <div className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-6">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600" />
            <div className="relative h-[155px] overflow-hidden rounded-2xl border border-white/90 bg-white/75 sm:h-[175px]">
              <img
                src="/assets/about-mission.jpg"
                alt="Mission represented by a target and focused direction"
                loading="lazy"
                className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-md">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="inline-flex rounded-xl border border-indigo-200 bg-white px-3 py-1.5 text-xl font-black text-transparent bg-gradient-to-r from-cyan-600 via-indigo-600 to-fuchsia-600 bg-clip-text sm:text-2xl">
                Our Mission
              </h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Help businesses and ambitious people turn ideas into products, systems and
              opportunities that create measurable progress.
            </p>
            <div className="mt-auto pt-4">
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
              <p className="mt-3 text-sm font-bold text-indigo-700">
                Build smarter. Work better. Grow with purpose.
              </p>
            </div>
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
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 p-6 sm:p-9">
          <div className="text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-indigo-600">
              How We Work
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              From idea to ongoing improvement.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Understand', 'We understand your business, users and goals.', Eye, 'from-indigo-500 to-blue-600', 'border-indigo-200 bg-indigo-50/70'],
              ['02', 'Plan', 'We define the right solution, scope and roadmap.', List, 'from-violet-500 to-fuchsia-600', 'border-violet-200 bg-violet-50/70'],
              ['03', 'Build', 'We design and develop with quality and scalability in mind.', Code2, 'from-cyan-500 to-indigo-600', 'border-cyan-200 bg-cyan-50/70'],
              ['04', 'Grow & Support', 'We improve, measure and support the product beyond launch.', Headphones, 'from-emerald-500 to-teal-600', 'border-emerald-200 bg-emerald-50/70'],
            ].map(([num, title, desc, Icon, gradient, cardBg]) => {
              const WorkIcon = Icon as React.ComponentType<{ className?: string }>;
              return (
                <motion.div
                  key={num as string}
                  whileHover={{ y: -4 }}
                  className={`group relative flex min-h-[190px] h-full flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:shadow-lg ${cardBg as string}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient as string}`} />
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient as string} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                      <WorkIcon className="h-5 w-5" />
                    </div>
                    <span className="rounded-lg bg-white/80 px-2.5 py-1 text-xs font-black text-slate-400">{num as string}</span>
                  </div>
                  <h3 className="mt-5 text-base font-black text-slate-950">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc as string}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Principles Behind Our Work */}
      <section className="space-y-6">
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1 text-xs uppercase font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Our Core Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            The Principles That Guide Our Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {engineeringPillars.map((pillar, idx) => {
            const pillarIcons = [Bot, Layers3, UsersRound, Sparkles];
            const PillarIcon = pillarIcons[idx];

            const pillarTitleGradient = [
              'from-cyan-500 via-indigo-600 to-violet-600',
              'from-violet-500 via-fuchsia-600 to-purple-600',
              'from-sky-500 via-cyan-600 to-emerald-500',
              'from-emerald-500 via-teal-600 to-blue-600',
            ][idx];

            const pillarAvatarGradient = [
              'from-cyan-500 to-indigo-600',
              'from-fuchsia-500 to-violet-600',
              'from-sky-500 to-emerald-500',
              'from-emerald-500 to-blue-600',
            ][idx];

            return (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...smoothTransition, delay: idx * 0.08 }}
                className={`group relative overflow-hidden p-6 sm:p-7 rounded-2xl border shadow-xs space-y-3 hover:shadow-lg transition-all duration-300 ${pillar.cardBg}`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent opacity-70" />

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${pillarAvatarGradient} text-white shadow-lg ring-4 ring-white/70 transition-transform duration-300 group-hover:scale-105`}>
                      <PillarIcon className="h-6 w-6" strokeWidth={2.2} />
                    </div>

                    <div className="relative overflow-hidden">
                      <h3 className={`relative inline-block bg-gradient-to-r ${pillarTitleGradient} bg-clip-text text-base sm:text-lg font-black text-transparent`}>
                        {pillar.title}
                      </h3>
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/90 to-transparent"
                        initial={{ x: '-180%' }}
                        whileInView={{ x: '520%' }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{
                          duration: 1.8,
                          ease: 'easeInOut',
                          repeat: Infinity,
                          repeatDelay: 2.4,
                        }}
                      />
                    </div>
                  </div>

                  <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-lg inline-block border ${pillar.badgeColor}`}>
                    {pillar.step}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-0.5">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 7. Why CareerNova */}
      <section className="mx-auto w-full max-w-[1500px] space-y-6">
        <div className="text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
            Why CareerNova
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Built to be a partner, not just a provider.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Business-First Thinking', 'Solutions begin with the real business objective, not technology for its own sake.', Target, 'from-indigo-500 to-violet-600'],
            ['Connected Expertise', 'Technology, design, automation and growth thinking work together in one approach.', Layers3, 'from-cyan-500 to-blue-600'],
            ['Clear Communication', 'Straightforward scope, expectations and communication throughout the work.', MessageSquare, 'from-fuchsia-500 to-purple-600'],
            ['Scalable Foundations', 'Systems are designed to evolve as traffic, users and business complexity grow.', ShieldCheck, 'from-emerald-500 to-teal-600'],
            ['Practical Technology', 'We focus on technology that creates useful outcomes and reduces unnecessary complexity.', Zap, 'from-orange-500 to-fuchsia-600'],
            ['Long-Term Support', 'The relationship can continue beyond launch through improvements and technical support.', Headphones, 'from-sky-500 to-indigo-600'],
          ].map(([title, desc, Icon, gradient]) => {
            const WhyIcon = Icon as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={title as string}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient as string} text-white shadow-md`}>
                  <WhyIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-black text-slate-950">{title as string}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">{desc as string}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 8. The People Behind CareerNova */}
      <section className="mx-auto w-full max-w-[1500px] space-y-6">
        <div className="text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-indigo-600">
            The People Behind CareerNova
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            A team focused on building useful things well.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Meet the people currently driving architecture, engineering, mobile development,
            strategy and growth across CareerNova.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1500px] space-y-6">
  {/* Sudhir Singh Card */}
  <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-xl p-6 shadow-sm border border-indigo-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div className="flex items-center gap-4">
      <img src="/Sudhir.png" alt="Sudhir Singh" className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-md" />
      <div>
        <h3 className="text-lg font-bold text-slate-900">Sudhir Singh</h3>
        <p className="text-sm font-medium text-indigo-600">Master Architect & Chief Strategy Officer</p>
      </div>
    </div>
    <span className="px-3 py-1 bg-white text-indigo-700 border border-indigo-200 text-xs font-semibold rounded-full">Overall Management & Growth</span>
  </div>
  <p className="text-slate-600 text-sm pl-2">
    Driving high-impact business positioning, multi-channel customer acquisition funnel design, and strategic corporate roadmap execution to scale operations globally.
  </p>
  <div className="flex flex-wrap gap-2 pl-2">
    <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md">Growth Strategy</span>
    <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md">Market Positioning</span>
    <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md">Corporate Scaling</span>
  </div>

  {/* Ashwani Kumar Card */}
  <div className="bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 rounded-xl p-6 shadow-sm border border-purple-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-8">
    <div className="flex items-center gap-4">
      <img src="/Ashwani.png" alt="Ashwani Kumar" className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 shadow-md" />
      <div>
        <h3 className="text-lg font-bold text-slate-900">Ashwani Kumar</h3>
        <p className="text-sm font-medium text-purple-600">Principal Full-Stack & Cloud Specialist</p>
      </div>
    </div>
    <span className="px-3 py-1 bg-white text-purple-700 border border-purple-200 text-xs font-semibold rounded-full">Full-Stack Architecture</span>
  </div>
  <p className="text-slate-600 text-sm pl-2">
    Architecting high-performance, resilient end-to-end web applications with modern frameworks, containerized cloud infrastructure, and low-latency microservices.
  </p>
  <div className="flex flex-wrap gap-2 pl-2">
    <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-md">Full-Stack Engineering</span>
    <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-md">Cloud & DevOps</span>
    <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-md">Scalable Backends</span>
  </div>

  {/* Ritesh Chaurasiya Card */}
  <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-xl p-6 shadow-sm border border-emerald-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-8">
    <div className="flex items-center gap-4">
      <img src="/Ritesh.png" alt="Ritesh Chaurasiya" className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-md" />
      <div>
        <h3 className="text-lg font-bold text-slate-900">Ritesh Chaurasiya</h3>
        <p className="text-sm font-medium text-emerald-600">Senior iOS & Mobile App Developer</p>
      </div>
    </div>
    <span className="px-3 py-1 bg-white text-emerald-700 border border-emerald-200 text-xs font-semibold rounded-full">Native iOS Developer</span>
  </div>
  <p className="text-slate-600 text-sm pl-2">
    Crafting fluid, high-performance native iOS experiences with Swift, seamless human-interface guidelines compliance, and complex device-level API integrations.
  </p>
  <div className="flex flex-wrap gap-2 pl-2">
    <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md">Swift & SwiftUI</span>
    <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md">Native iOS APIs</span>
    <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md">App Performance</span>
  </div>
</div>

      {/* 9. Let's Connect - Contact Form */}
      <motion.section
        id="contact-form-section"
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

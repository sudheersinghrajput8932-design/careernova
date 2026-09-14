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
    const target = sessionStorage.getItem('cn_scrollTo');
    if (target) {
      sessionStorage.removeItem('cn_scrollTo');
      const timer = setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, []);

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
    <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 py-4 px-2 sm:px-4">
      {/* 1. Hero Section — image-led */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] border border-indigo-900/20 bg-slate-950 shadow-[0_30px_90px_-45px_rgba(49,46,129,0.75)]"
      >
        <img
          src="/assets/about-careernova-hero.png"
          alt="CareerNova — Democratizing Career & Business Intelligence"
          className="block h-auto w-full select-none"
          loading="eager"
          draggable={false}
        />
      </motion.section>

      {/* 2. Vision & Platform Purpose — zig-zag image + content rows, each
          image shown in full (object-contain, no crop) beside its text. */}
      <section className="space-y-6">
        {/* Vision Card — image left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...smoothTransition, delay: 0.05 }}
          className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl border border-indigo-200 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all duration-300 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-0">
            <div className="w-full md:w-[42%] aspect-[6/5] bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-4 sm:p-6">
              <img
                src="/assets/about-vision-vr.png"
                alt="Student wearing a VR headset next to a laptop showing the CareerNova logo, representing CareerNova's vision for immersive, technology-driven career guidance"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full md:w-[58%] p-7 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-indigo-600 border border-indigo-200 shadow-sm flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                To eliminate information asymmetry in career paths and startup ecosystems. We believe that every student should have equal access to resources, career tools, and financial wisdom.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why We Created This Platform — text left, image right (mirrored for a zig-zag rhythm) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 rounded-3xl border border-fuchsia-200 shadow-sm hover:shadow-md hover:border-fuchsia-400 transition-all duration-300 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-0">
            <div className="w-full md:w-[42%] aspect-[3/2] bg-gradient-to-br from-fuchsia-100 via-white to-purple-100 flex items-center justify-center p-4 sm:p-6">
              <img
                src="/assets/about-why-created-roadmap.png"
                alt="A student surrounded by confusing career advice and question marks, looking toward a CareerNova signpost pointing to better resources, AI-powered tools, financial intelligence, and real opportunities"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full md:w-[58%] p-7 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-fuchsia-600 border border-fuchsia-200 shadow-sm flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Why We Created This Platform</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Too many ambitious students get filtered out due to outdated ATS scanners and the many gateways to success. CareerNova fills this void with accessible AI-driven tools, financial intelligence, and action roadmaps.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Engineering Principles */}
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

      <div className="space-y-6">
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

      {/* 5. Let's Connect - Hero + Contact Form */}
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

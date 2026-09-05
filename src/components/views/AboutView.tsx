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
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    },
    {
      step: '2. Resilient Architecture',
      title: 'Scalable Foundations',
      desc: 'Building robust microservices and cloud deployments designed to scale as traffic and complexity grow.',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    },
    {
      step: '3. Hyper-Democratization',
      title: 'Accessible Tech',
      desc: 'Providing world-class tools at minimal or no cost to ensure equal opportunity for every user.',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    },
    {
      step: '4. UI/UX Quality Rigor',
      title: 'Polished Experience',
      desc: 'Meticulous pixel-level UI design to guarantee elite enterprise-grade application presentation.',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
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
      {/* 1. Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>About CareerNova</span>
            </div>

            <div className="mt-4 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              People &nbsp;|&nbsp; Skills &nbsp;|&nbsp; Opportunities
            </div>

            <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              <span className="text-slate-900">Democratizing Career &amp; </span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h1>

            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We build next-generation AI and growth-proven frameworks to make high-growth tools accessible to every student, job seeker, and entrepreneur.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">People First</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Driven by real needs</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Skills Growth</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Tools that empower</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Real Opportunities</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Measurable impact</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Illustration */}
          <div className="relative">
            <img
              src="/assets/about-hero.png"
              alt="CareerNova - people, skills and opportunities"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Mission Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-11 h-11 flex-shrink-0 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-indigo-200 block mb-2">
                Our Guiding Mission
              </span>
              <p className="text-lg sm:text-2xl font-bold italic leading-snug max-w-3xl">
                "Our mission is to make career development, business planning and digital tools simple and accessible for everyone."
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="self-start sm:self-center flex-shrink-0 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20 w-fit">
            <Headphones className="w-3.5 h-3.5 text-indigo-200" />
            <span>Direct Support &amp; Active Advisory</span>
          </div>
        </div>
      </motion.section>

      {/* 2. Vision & Platform Purpose Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...smoothTransition, delay: 0.05 }}
          className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md hover:border-indigo-500/50 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            To eliminate information asymmetry in career paths and startup ecosystems. We believe that every student should have equal access to resources, career tools, and financial wisdom.
          </p>
        </motion.div>

        {/* Why We Created This Platform */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center font-bold">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Why We Created This Platform</h2>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            Too many ambitious students get filtered out due to outdated ATS scanners and the many gateways to success. CareerNova fills this void with accessible AI-driven tools, financial intelligence, and action roadmaps.
          </p>
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
          {engineeringPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...smoothTransition, delay: idx * 0.08 }}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-2.5 hover:shadow-md hover:border-indigo-500/50 transition-all duration-300"
            >
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg inline-block border ${pillar.badgeColor}`}>
                {pillar.step}
              </span>
              <h3 className="font-bold text-base text-slate-900">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="space-y-6">
  {/* Sudhir Singh Card */}
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div className="flex items-center gap-4">
      <img src="/Sudhir.png" alt="Sudhir Singh" className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-md" />
      <div>
        <h3 className="text-lg font-bold text-gray-900">Sudhir Singh</h3>
        <p className="text-sm font-medium text-indigo-600">Master Architect & Chief Strategy Officer</p>
      </div>
    </div>
    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">Overall Management & Growth</span>
  </div>
  <p className="text-gray-600 text-sm pl-2">
    Driving high-impact business positioning, multi-channel customer acquisition funnel design, and strategic corporate roadmap execution to scale operations globally.
  </p>
  <div className="flex flex-wrap gap-2 pl-2">
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Growth Strategy</span>
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Market Positioning</span>
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Corporate Scaling</span>
  </div>

  {/* Ashwani Kumar Card */}
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-8">
    <div className="flex items-center gap-4">
      <img src="/Ashwani.png" alt="Ashwani Kumar" className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-md" />
      <div>
        <h3 className="text-lg font-bold text-gray-900">Ashwani Kumar</h3>
        <p className="text-sm font-medium text-purple-600">Principal Full-Stack & Cloud Specialist</p>
      </div>
    </div>
    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">Full-Stack Architecture</span>
  </div>
  <p className="text-gray-600 text-sm pl-2">
    Architecting high-performance, resilient end-to-end web applications with modern frameworks, containerized cloud infrastructure, and low-latency microservices.
  </p>
  <div className="flex flex-wrap gap-2 pl-2">
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Full-Stack Engineering</span>
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Cloud & DevOps</span>
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Scalable Backends</span>
  </div>

  {/* Ritesh Chaurasiya Card */}
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-8">
    <div className="flex items-center gap-4">
      <img src="/Ritesh.png" alt="Ritesh Chaurasiya" className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-md" />
      <div>
        <h3 className="text-lg font-bold text-gray-900">Ritesh Chaurasiya</h3>
        <p className="text-sm font-medium text-emerald-600">Senior iOS & Mobile App Developer</p>
      </div>
    </div>
    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">Native iOS Developer</span>
  </div>
  <p className="text-gray-600 text-sm pl-2">
    Crafting fluid, high-performance native iOS experiences with Swift, seamless human-interface guidelines compliance, and complex device-level API integrations.
  </p>
  <div className="flex flex-wrap gap-2 pl-2">
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Swift & SwiftUI</span>
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">Native iOS APIs</span>
    <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">App Performance</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Hero content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span className="uppercase tracking-wider">Let's Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Let's Build Something Great{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
                Together.
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              Have a project in mind, a question, or just want to explore opportunities? We're always excited to connect and create something meaningful.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Quick Response</h3>
                  <p className="text-xs text-slate-500 mt-0.5">We usually reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">100% Confidential</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Your information is always safe with us.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Expert Guidance</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Get the right advice for your goals.</p>
                </div>
              </div>
            </div>

            {/* Decorative illustration panel — swap this block for your own workspace photo if you have one */}
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 border border-indigo-100 p-6 sm:p-7 overflow-hidden">
              <Send className="w-5 h-5 text-fuchsia-400 absolute top-5 right-6 -rotate-12" />
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600">
                  <Laptop className="w-6 h-6" />
                </div>
                <div className="w-13 h-13 rounded-2xl bg-white shadow-md flex items-center justify-center text-amber-600">
                  <Coffee className="w-6 h-6" />
                </div>
                <div className="w-13 h-13 rounded-2xl bg-white shadow-md flex items-center justify-center text-emerald-600">
                  <Leaf className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="inline-flex items-center gap-1.5 bg-white shadow-xs border border-slate-100 text-[11px] font-bold text-slate-700 px-3 py-1.5 rounded-full">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                  New Projects
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white shadow-xs border border-slate-100 text-[11px] font-bold text-slate-700 px-3 py-1.5 rounded-full">
                  <Handshake className="w-3.5 h-3.5 text-blue-600" />
                  Partnerships
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white shadow-xs border border-slate-100 text-[11px] font-bold text-slate-700 px-3 py-1.5 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  Career Support
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white shadow-xs border border-slate-100 text-[11px] font-bold text-slate-700 px-3 py-1.5 rounded-full">
                  <Mail className="w-3.5 h-3.5 text-orange-600" />
                  General Enquiries
                </span>
              </div>
            </div>
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

        {/* Bottom Feature Strip */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Turn Ideas Into Reality</h4>
              <p className="text-xs text-slate-500 mt-1">Let's discuss how we can help you grow.</p>
              <div className="w-8 h-0.5 bg-indigo-500 rounded-full mt-3" />
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Innovative Solutions</h4>
              <p className="text-xs text-slate-500 mt-1">Tailored to your unique needs.</p>
              <div className="w-8 h-0.5 bg-blue-500 rounded-full mt-3" />
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">A Reliable Partner</h4>
              <p className="text-xs text-slate-500 mt-1">Committed to your success.</p>
              <div className="w-8 h-0.5 bg-emerald-500 rounded-full mt-3" />
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Long-Term Growth</h4>
              <p className="text-xs text-slate-500 mt-1">More than a service, a partnership.</p>
              <div className="w-8 h-0.5 bg-orange-500 rounded-full mt-3" />
            </div>
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

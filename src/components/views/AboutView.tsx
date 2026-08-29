import React from 'react';
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
  MessageSquare
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
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>About CareerNova</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Democratizing Career &amp; Business Intelligence
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We build next-generation AI and growth-proven frameworks to make high-growth tools accessible to every student, job seeker, and entrepreneur.
        </p>

        {/* Mission Banner */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <span className="text-[11px] uppercase tracking-wider font-bold text-indigo-200 block mb-2">
            Our Guiding Mission
          </span>
          <p className="text-lg sm:text-2xl font-bold italic leading-snug max-w-3xl">
            "Our mission is to make career development, business planning and digital tools simple and accessible for everyone."
          </p>
          <div className="mt-6 sm:mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20">
              <Headphones className="w-3.5 h-3.5 text-indigo-200" />
              <span>Direct Support &amp; Active Advisory</span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-bold text-white hover:text-indigo-200 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
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
    </div>
  );
};

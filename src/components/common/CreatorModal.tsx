import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  Mail,
  Sparkles,
  Award,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Smartphone,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface CreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  roleIcon: React.ElementType;
  initials: string;
  avatarGradient: string;
  badgeColor: string;
  about: string;
  expertiseTags: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sudhir',
    name: 'Sudhir Singh',
    badge: 'Growth & Strategy Lead',
    subtitle: 'Market Trends & Lead Generation Specialist',
    roleIcon: TrendingUp,
    initials: 'SS',
    avatarGradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    about:
      'Sudhir drives product growth and market positioning, specializing in market trend analysis, high-converting lead generation strategies, and digital expansion. Built with a vision to connect businesses and professionals with actionable technology.',
    expertiseTags: [
      'Market Trend Analysis',
      'Lead Generation',
      'Growth Marketing',
      'Digital Strategy',
      'Client Acquisition',
    ],
  },
  {
    id: 'ashwani',
    name: 'Ashwani Kumar',
    badge: 'Lead Architect',
    subtitle: 'Principal Full-Stack Engineer & Systems Specialist',
    roleIcon: Cpu,
    initials: 'AK',
    avatarGradient: 'from-indigo-500 via-purple-600 to-pink-600',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    about:
      'Ashwani is a versatile Full-Stack Engineer expert in end-to-end software development, web applications, scalable architectures, and AI integrations. He handles core tech stack infrastructure from frontend design to backend deployment.',
    expertiseTags: [
      'Full-Stack Architecture',
      'React & Node.js',
      'REST APIs & Databases',
      'Cloud Deployment',
      'AI Integrations',
    ],
  },
  {
    id: 'ritesh',
    name: 'Ritesh Chaurasiya',
    badge: 'iOS Specialist',
    subtitle: 'Mobile Application & iOS Developer',
    roleIcon: Smartphone,
    initials: 'RC',
    avatarGradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    about:
      'Ritesh specializes in crafting high-performance, intuitive, and seamless mobile experiences for the Apple ecosystem. He focuses on mobile UI/UX precision, native iOS features, and seamless API integrations.',
    expertiseTags: [
      'iOS Development',
      'Swift & SwiftUI',
      'Mobile UI/UX',
      'Native APIs',
      'App Optimization',
    ],
  },
];

export const CreatorModal: React.FC<CreatorModalProps> = ({ isOpen, onClose }) => {
  const [activeMemberId, setActiveMemberId] = useState<string>('sudhir');

  // Listen for Escape key to close modal smoothly
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentMember = TEAM_MEMBERS.find((m) => m.id === activeMemberId) || TEAM_MEMBERS[0];
  const IconComponent = currentMember.roleIcon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="creator-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header */}
        <div className="relative bg-slate-50 p-5 sm:p-6 border-b border-slate-200 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all border border-slate-200 cursor-pointer hover:scale-105 active:scale-95 z-10"
            aria-label="Close team modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Sparkles className="w-3 h-3" /> LEADERSHIP &amp; SPECIALISTS
              </div>
              <h3 id="creator-modal-title" className="text-xl sm:text-2xl font-black text-slate-900">
                CareerNova Core Team
              </h3>
              <p className="text-xs text-slate-500">
                Engineers, Strategists &amp; Product Leaders behind the platform
              </p>
            </div>
          </div>

          {/* Member Selector Tabs */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200 overflow-x-auto custom-scrollbar pb-1">
            {TEAM_MEMBERS.map((member) => {
              const isSelected = member.id === activeMemberId;
              const TabIcon = member.roleIcon;
              return (
                <button
                  key={member.id}
                  onClick={() => setActiveMemberId(member.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                  <span>{member.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
          {/* Active Member Bio Card */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${currentMember.avatarGradient} p-0.5 shadow-md shrink-0 ring-2 ring-slate-100`}
              >
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-black text-2xl text-slate-900">
                  {currentMember.initials}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                    {currentMember.name}
                  </h4>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border bg-indigo-50 text-indigo-700 border-indigo-200`}
                  >
                    <IconComponent className="w-3 h-3" />
                    {currentMember.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {currentMember.subtitle}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentMember.about}
              </p>
            </div>
          </div>

          {/* Core Expertise Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Core Expertise &amp; Domain Mastery</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentMember.expertiseTags.map((tag, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-1.5 text-xs text-slate-800 font-medium hover:border-indigo-300 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Connect & Consultation Box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Direct Contact &amp; Strategy Inquiries
              </h4>
              <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active for Consulting
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+917007260391"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-all font-medium text-sm group"
              >
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-emerald-700 uppercase tracking-wide font-bold">
                    Call / WhatsApp Hotline
                  </p>
                  <p className="text-xs sm:text-sm font-semibold truncate">+91 7007260391</p>
                </div>
              </a>

              <a
                href="mailto:sudheersinghrajput8932@gmail.com"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 transition-all font-medium text-sm group"
              >
                <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-indigo-700 uppercase tracking-wide font-bold">
                    Official Email
                  </p>
                  <p className="text-xs sm:text-sm font-semibold truncate">sudheersinghrajput8932@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer with clean Close action */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span className="hidden sm:inline">Crafted with precision by the CareerNova engineering &amp; growth team</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-all font-bold cursor-pointer hover:scale-[1.02] active:scale-95"
          >
            Close Team Window
          </button>
        </div>
      </div>
    </div>
  );
};


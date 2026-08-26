import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Wrench,
  Briefcase,
  MessageSquare,
  ArrowRight,
  Compass,
  FileQuestion,
  Sparkles
} from 'lucide-react';
import { TabId } from '../../types';

interface NotFoundViewProps {
  onNavigate: (tabId: TabId) => void;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={smoothTransition}
        className="w-full max-w-2xl text-center space-y-8"
      >
        {/* Visual 404 Badge */}
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute -inset-6 bg-gradient-to-r from-indigo-200/50 via-purple-200/50 to-pink-200/50 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                <Compass className="w-8 h-8 sm:w-10 sm:h-10 animate-spin-slow" />
              </div>
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 tracking-tight">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Content & Typography */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold shadow-2xs">
            <FileQuestion className="w-3.5 h-3.5" />
            <span>Page Not Found</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lost in Cyberspace?
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto font-normal">
            The page you are looking for might have been removed, renamed, or is temporarily unavailable. Let's get you back on track!
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => onNavigate('tools')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-sm shadow-2xs transition-all hover:border-indigo-300 hover:text-indigo-600 cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-indigo-600" />
            <span>Explore AI Tools</span>
          </button>
        </div>

        {/* Suggested Quick Links */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            Popular Destinations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <button
              onClick={() => onNavigate('services')}
              className="p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-all group flex flex-col justify-between shadow-2xs cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="mt-2">
                <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors block">
                  Services
                </span>
                <span className="text-[11px] text-slate-500">
                  Resumes, registrations &amp; branding
                </span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('career')}
              className="p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-purple-200 transition-all group flex flex-col justify-between shadow-2xs cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="mt-2">
                <span className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors block">
                  Career Studio
                </span>
                <span className="text-[11px] text-slate-500">
                  ATS score builder &amp; mock prep
                </span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-emerald-200 transition-all group flex flex-col justify-between shadow-2xs cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="mt-2">
                <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors block">
                  Contact Support
                </span>
                <span className="text-[11px] text-slate-500">
                  Direct hotline &amp; WhatsApp
                </span>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

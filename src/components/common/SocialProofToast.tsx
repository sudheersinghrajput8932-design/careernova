import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Sparkles } from 'lucide-react';

interface ActivityItem {
  id: string;
  name: string;
  location: string;
  action: string;
  tool: string;
  timeAgo: string;
  initials: string;
  gradient: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    name: 'Aman',
    location: 'Lucknow',
    action: 'built an ATS Resume',
    tool: 'ATS Resume Builder',
    timeAgo: '3m ago',
    initials: 'AV',
    gradient: 'from-indigo-600 to-violet-600',
  },
  {
    id: 'act-2',
    name: 'Pooja',
    location: 'Bangalore',
    action: 'ran Break-Even & Unit Economics',
    tool: 'Break-Even Calculator',
    timeAgo: '1m ago',
    initials: 'PS',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    id: 'act-3',
    name: 'Rohan',
    location: 'Delhi NCR',
    action: 'practiced STAR mock interview',
    tool: 'AI Interview Coach',
    timeAgo: '4m ago',
    initials: 'RM',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'act-4',
    name: 'Sneha',
    location: 'Mumbai',
    action: 'generated 90-Day GTM Strategy',
    tool: 'Marketing Strategy Hub',
    timeAgo: '2m ago',
    initials: 'SK',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'act-5',
    name: 'Vikram',
    location: 'Pune',
    action: 'drafted an AI Business Plan',
    tool: 'Business Plan Generator',
    timeAgo: '5m ago',
    initials: 'VP',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 'act-6',
    name: 'Ananya',
    location: 'Hyderabad',
    action: 'calculated Loan EMI amortization',
    tool: 'EMI Calculator',
    timeAgo: '7m ago',
    initials: 'AS',
    gradient: 'from-teal-600 to-emerald-600',
  },
  {
    id: 'act-7',
    name: 'Kunal',
    location: 'Noida',
    action: 'downloaded Full-Stack Roadmap',
    tool: 'Career Roadmaps',
    timeAgo: '6m ago',
    initials: 'KG',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'act-8',
    name: 'Divya',
    location: 'Chennai',
    action: 'crafted B2B cold email pitches',
    tool: 'AI Cold Email Writer',
    timeAgo: '2m ago',
    initials: 'DR',
    gradient: 'from-violet-600 to-indigo-700',
  },
];

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissedPermanently, setIsDismissedPermanently] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 1. Initial delayed popup: appears after 30 seconds (30000ms)
  useEffect(() => {
    if (isDismissedPermanently) return;

    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(initialTimer);
  }, [isDismissedPermanently]);

  // 2. Controlled infrequent cycling: strictly 30 seconds (30000ms) interval between notifications
  useEffect(() => {
    if (isDismissedPermanently) return;

    let dismissTimer: NodeJS.Timeout;
    let cycleTimer: NodeJS.Timeout;

    if (isVisible) {
      // Auto-dismiss after 5 seconds
      if (!isHovered) {
        dismissTimer = setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      }
    } else {
      // Re-trigger strictly every 30 seconds (30000ms) so screen stays clean and un-intrusive
      cycleTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setIsVisible(true);
      }, 30000);
    }

    return () => {
      if (dismissTimer) clearTimeout(dismissTimer);
      if (cycleTimer) clearTimeout(cycleTimer);
    };
  }, [isVisible, isHovered, isDismissedPermanently]);

  const currentActivity = ACTIVITIES[currentIndex];

  if (isDismissedPermanently) return null;

  return (
    <div
      id="social-proof-toasts-container"
      className="fixed bottom-20 left-4 sm:left-6 z-30 pointer-events-none max-w-[calc(100vw-2rem)] sm:max-w-xs md:max-w-sm hidden sm:block print:hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {isVisible && currentActivity && (
          <motion.div
            key={currentActivity.id}
            initial={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 12, scale: 0.96, filter: 'blur(3px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xl hover:border-slate-300 transition-all duration-300 group"
          >
            {/* User Avatar with Initials */}
            <div className="relative shrink-0 mt-0.5">
              <div
                className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${currentActivity.gradient} text-white font-black text-[11px] flex items-center justify-center shadow-xs`}
              >
                {currentActivity.initials}
              </div>
              {/* Verified Live Badge Indicator */}
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white">
                <CheckCircle2 className="w-2 h-2" />
              </div>
            </div>

            {/* Notification Text Body */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {currentActivity.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium truncate">
                    from {currentActivity.location}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-400 shrink-0">
                  {currentActivity.timeAgo}
                </span>
              </div>

              <p className="text-xs text-slate-700 mt-0.5 leading-snug">
                <span className="font-semibold text-indigo-600">{currentActivity.action}</span>
              </p>

              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                  <Sparkles className="w-2.5 h-2.5 text-indigo-600 shrink-0" />
                  <span className="truncate">{currentActivity.tool}</span>
                </span>
                <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                setIsVisible(false);
                setIsDismissedPermanently(true);
              }}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0 -mr-1 -mt-1"
              aria-label="Dismiss notification"
              title="Dismiss notifications"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

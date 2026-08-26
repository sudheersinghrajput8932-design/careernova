import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Mail, X, Headphones, ExternalLink, ChevronUp, Sparkles, Bot } from 'lucide-react';
import { openAiAssistant } from '../../utils/aiAssistantTrigger';

interface FloatingWidgetsProps {
  onOpenCreator?: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenCreator }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      id="floating-support-menu-widget"
      className="fixed bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start print:hidden"
    >
      {/* 1. Expandable Support Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-72 sm:w-80 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xl p-4 backdrop-blur-xl"
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 0 25px rgba(99, 102, 241, 0.1)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                    <span>CareerNova Support</span>
                    <Sparkles className="w-3 h-3 text-indigo-600" />
                  </h4>
                  <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Quick Response Desk</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close support menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Options */}
            <div className="space-y-2">
              {/* Robo AI Instant Consultation */}
              <button
                id="floating-widget-ai-consultation-btn"
                onClick={() => {
                  setIsOpen(false);
                  openAiAssistant({ mode: 'consultation' });
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-950 transition-all duration-200 group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-800 transition-colors flex items-center gap-1.5">
                      <span>Robo AI Consultation</span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-indigo-200 text-indigo-800 font-extrabold">Instant</span>
                    </div>
                    <div className="text-[10px] text-slate-500">Live career &amp; business advisor</div>
                  </div>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </button>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20have%20an%20inquiry%20regarding%20your%20services%20and%20tools."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500 text-white shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      WhatsApp Chat
                    </div>
                    <div className="text-[10px] text-slate-500">Instant direct messaging</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Direct Phone Call */}
              <a
                href="tel:+917007260391"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-950 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-800 transition-colors">
                      Call Support
                    </div>
                    <div className="text-[10px] text-slate-500">+91 7007260391</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Email Support */}
              <a
                href="mailto:sudheersinghrajput8932@gmail.com"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-200 text-slate-700 group-hover:bg-slate-300 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 transition-colors">
                      Email Advisory
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">sudheersinghrajput8932@gmail.com</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Unified Single Support Floating Trigger Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          id="floating-unified-support-btn"
          className="relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-indigo-500 ring-2 ring-indigo-300/30"
          aria-label="Open support and contact options"
          title="Contact & Support"
        >
          {isOpen ? (
            <X className="w-4 h-4 text-white" />
          ) : (
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-white text-indigo-600 font-bold">
                <MessageSquare className="w-3 h-3" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              </div>
              <span className="text-xs font-bold text-white hidden sm:inline">Support</span>
              <ChevronUp className="w-3.5 h-3.5 text-indigo-200" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

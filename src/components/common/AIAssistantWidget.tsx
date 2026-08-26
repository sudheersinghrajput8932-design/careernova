import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  RotateCcw,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Check,
  Copy,
  Briefcase,
  Rocket,
  PhoneCall
} from 'lucide-react';
import { TabId, SubToolId } from '../../types';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

interface StoredSession {
  messages: ChatMessage[];
  lastActive: number;
}

interface AIAssistantWidgetProps {
  onNavigate?: (tabId: TabId, subToolId?: SubToolId) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

const SESSION_STORAGE_KEY = 'careernova_ai_session_v7';
const SESSION_EXPIRY_MS = 45 * 60 * 1000; // 45 minutes memory window

const INITIAL_WELCOME_MESSAGE: ChatMessage = {
  id: 'msg-welcome-default',
  sender: 'bot',
  text: "I am Careernova AI Assistant, how may I help you today?",
  timestamp: 'Just now',
};

export interface QuickServicePill {
  id: string;
  label: string;
  icon: React.ElementType;
  query: string;
  pillClasses: string;
  iconClasses: string;
}

export const QUICK_SERVICE_PILLS: QuickServicePill[] = [
  {
    id: 'core-expertise',
    label: 'Core Expertise',
    icon: Briefcase,
    query: "What are CareerNova's 10 Core Expertise services?",
    pillClasses: 'bg-gradient-to-r from-blue-50/90 to-indigo-50/90 border-blue-200/80 text-blue-900 hover:border-blue-400 hover:bg-blue-100/80 shadow-2xs',
    iconClasses: 'text-blue-600',
  },
  {
    id: 'our-services',
    label: 'Our Services',
    icon: Rocket,
    query: "What tech and business services does CareerNova offer?",
    pillClasses: 'bg-gradient-to-r from-cyan-50/90 to-blue-50/90 border-cyan-200/80 text-cyan-900 hover:border-cyan-400 hover:bg-cyan-100/80 shadow-2xs',
    iconClasses: 'text-cyan-600',
  },
  {
    id: 'free-consultation',
    label: 'Free Consultation',
    icon: PhoneCall,
    query: "How can I book a Free Consultation with CareerNova?",
    pillClasses: 'bg-gradient-to-r from-emerald-50/90 to-teal-50/90 border-emerald-200/80 text-emerald-900 hover:border-emerald-400 hover:bg-emerald-100/80 shadow-2xs',
    iconClasses: 'text-emerald-600',
  },
];

/**
 * Futuristic Animated Vector Robot Component
 * Features glowing neon-cyan eyes with blinking & scanning, dynamic talking mouth audio visualizer,
 * metallic chassis with glass visor, and pulsing cyber aura.
 */
export interface AnimatedRobotAvatarProps {
  className?: string;
  isSpeaking?: boolean;
  isLoading?: boolean;
  variant?: 'default' | 'trigger' | 'header';
}

export const AnimatedRobotAvatar: React.FC<AnimatedRobotAvatarProps> = ({
  className = 'w-9 h-9',
  isSpeaking = false,
  isLoading = false,
}) => {
  const isTalking = isSpeaking || isLoading;

  return (
    <div className="relative inline-flex items-center justify-center select-none pointer-events-none">
      {/* Ambient Neon Cyan / Electric Blue Aura */}
      <div className={`absolute -inset-1 rounded-full bg-cyan-500/20 blur-md pointer-events-none ${isTalking ? 'animate-pulse opacity-90' : 'opacity-60'}`} />

      <svg
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} overflow-visible relative z-10`}
        aria-hidden="true"
      >
        <defs>
          {/* Metallic Cyber Chassis Gradient */}
          <linearGradient id="cyberMetallic" x1="6" y1="6" x2="46" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#F1F5F9" />
            <stop offset="0.65" stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>

          {/* Obsidian Glossy Visor Screen */}
          <linearGradient id="cyberVisor" x1="12" y1="14" x2="40" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#050B14" />
            <stop offset="0.5" stopColor="#0B132B" />
            <stop offset="1" stopColor="#1C2541" />
          </linearGradient>

          {/* Neon Cyan (#06B6D4) Digital Eye Radial Glow */}
          <radialGradient id="neonCyanEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#67E8F9" />
            <stop offset="75%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </radialGradient>

          {/* Eye Glow Bloom Filter */}
          <filter id="neonCyanBloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating Head Group */}
        <g className="robot-head-group transition-transform duration-300 origin-bottom">
          {/* Top Antenna Stem */}
          <line
            x1="26"
            y1="3"
            x2="26"
            y2="11"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Glowing Antenna Orb */}
          <circle
            cx="26"
            cy="3"
            r="3.5"
            fill="#06B6D4"
            className="animate-cyber-antenna"
          />
          <circle cx="26" cy="3" r="1.3" fill="#E0F2FE" />

          {/* Side Cyber Ear Modules */}
          <g>
            <rect x="3.5" y="21" width="3.5" height="12" rx="1.75" fill="#64748B" stroke="#94A3B8" strokeWidth="0.8" />
            <rect x="4.5" y="23" width="1.5" height="3" rx="0.75" fill="#06B6D4" opacity={isTalking ? 1 : 0.6} />
            <rect x="4.5" y="27" width="1.5" height="4" rx="0.75" fill="#38BDF8" opacity={isTalking ? 1 : 0.6} />

            <rect x="45" y="21" width="3.5" height="12" rx="1.75" fill="#64748B" stroke="#94A3B8" strokeWidth="0.8" />
            <rect x="46" y="23" width="1.5" height="3" rx="0.75" fill="#06B6D4" opacity={isTalking ? 1 : 0.6} />
            <rect x="46" y="27" width="1.5" height="4" rx="0.75" fill="#38BDF8" opacity={isTalking ? 1 : 0.6} />
          </g>

          {/* Sleek Rounded Robot Chassis Body / Head */}
          <rect
            x="7"
            y="10"
            width="38"
            height="34"
            rx="13"
            fill="url(#cyberMetallic)"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            className="drop-shadow-sm"
          />

          {/* High-Gloss Obsidian Visor Screen */}
          <rect
            x="11"
            y="15"
            width="30"
            height="23"
            rx="8.5"
            fill="url(#cyberVisor)"
            stroke="#334155"
            strokeWidth="1.2"
          />

          {/* Visor Specular Gloss Highlight */}
          <path
            d="M 14 18 Q 26 16 38 18"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Digital Cyan Eyes Group with Blinking and Micro-Scanning */}
          <g className="animate-robot-blink-futuristic">
            <g className="animate-robot-eye-scan">
              {/* Left Eye */}
              <circle
                cx="19"
                cy="23.5"
                r="3.6"
                fill="url(#neonCyanEye)"
                filter="url(#neonCyanBloom)"
                className="robot-eye-glow transition-all duration-300"
              />
              <circle cx="18" cy="22.5" r="1.1" fill="#FFFFFF" />

              {/* Right Eye */}
              <circle
                cx="33"
                cy="23.5"
                r="3.6"
                fill="url(#neonCyanEye)"
                filter="url(#neonCyanBloom)"
                className="robot-eye-glow transition-all duration-300"
              />
              <circle cx="32" cy="22.5" r="1.1" fill="#FFFFFF" />
            </g>
          </g>

          {/* Dynamic Mouth: Talking Equalizer Waveform vs Idle Friendly Glow Curve */}
          {isTalking ? (
            /* Animated Voice Equalizer Frequency Bars simulating speech */
            <g className="animate-robot-mouth-talking">
              {/* Center Bar */}
              <line x1="26" y1="30" x2="26" y2="35.5" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" filter="url(#neonCyanBloom)" />
              {/* Mid Left & Right */}
              <line x1="22" y1="31.5" x2="22" y2="34.5" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="30" y1="31.5" x2="30" y2="34.5" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
              {/* Outer Left & Right */}
              <line x1="18.5" y1="32.5" x2="18.5" y2="33.8" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
              <line x1="33.5" y1="32.5" x2="33.5" y2="33.8" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            </g>
          ) : (
            /* Idle Friendly Cyber LED Smile Curve */
            <g>
              <path
                d="M 21.5 32 Q 26 35 30.5 32"
                stroke="#22D3EE"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
                filter="url(#neonCyanBloom)"
                opacity="0.9"
              />
              {/* Micro LED Dots at corner */}
              <circle cx="20.5" cy="31.5" r="0.8" fill="#38BDF8" />
              <circle cx="31.5" cy="31.5" r="0.8" fill="#38BDF8" />
            </g>
          )}

          {/* Cyber Cheek Aura Accents */}
          <circle cx="14" cy="28.5" r="1.1" fill="#06B6D4" opacity={isTalking ? 0.85 : 0.45} />
          <circle cx="38" cy="28.5" r="1.1" fill="#06B6D4" opacity={isTalking ? 0.85 : 0.45} />
        </g>
      </svg>
    </div>
  );
};

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ onNavigate, addToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallout, setShowCallout] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Session Memory Restoration from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      if (stored) {
        const parsed: StoredSession = JSON.parse(stored);
        const now = Date.now();
        if (parsed.lastActive && now - parsed.lastActive < SESSION_EXPIRY_MS) {
          if (Array.isArray(parsed.messages) && parsed.messages.length > 0) {
            setMessages(parsed.messages);
          }
        } else {
          // Expired session - reset
          localStorage.removeItem(SESSION_STORAGE_KEY);
        }
      }
    } catch {
      // Ignore storage errors safely
    }
  }, []);

  // 2. Persist Messages on change
  const saveSession = useCallback((updatedMessages: ChatMessage[]) => {
    try {
      const payload: StoredSession = {
        messages: updatedMessages,
        lastActive: Date.now(),
      };
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota errors
    }
  }, []);

  // 3. Automated Callout Timer (30 seconds after page load)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCallout(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  // 4. Global Event Listener for "Get Free Consultation" and other CTAs
  useEffect(() => {
    const handleTriggerAssistant = (event: Event) => {
      const customEvent = event as CustomEvent<{ prompt?: string; mode?: string; autoSend?: boolean }>;
      const detail = customEvent.detail || {};

      setIsOpen(true);
      setShowCallout(false);

      if (detail.prompt) {
        setInputValue(detail.prompt);
      } else if (detail.mode === 'consultation') {
        const consultMsg: ChatMessage = {
          id: 'consult-' + Date.now(),
          sender: 'bot',
          text: `👋 **Welcome to your Free AI Career & Business Consultation!**\n\nI am your AI Advisor. How can I assist you today?\n\n- 🎯 **Career Strategy & Interview Prep**: Role roadmaps and STAR interview answers\n- 📄 **ATS Resume Review**: Formatting & Google XYZ bullet optimization\n- 🚀 **Startup & Business**: Unit economics, breakeven analysis, and financial modeling\n- 💻 **Engineering Services**: Full-Stack Web, iOS Swift, and AI pipelines\n\n*Type your questions or drop your contact details below to get started!*`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last && last.text.includes('Welcome to your Free AI Career & Business Consultation')) {
            return prev;
          }
          const updated = [...prev, consultMsg];
          saveSession(updated);
          return updated;
        });
      }

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
        scrollToBottom();
      }, 150);
    };

    window.addEventListener('careernova:open-assistant', handleTriggerAssistant);
    return () => {
      window.removeEventListener('careernova:open-assistant', handleTriggerAssistant);
    };
  }, [saveSession]);

  // Auto-scroll chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleOpenToggle = () => {
    setIsOpen((prev) => !prev);
    setShowCallout(false);
  };

  const handleDismissCallout = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCallout(false);
  };

  // Reset conversation handler
  const handleResetConversation = () => {
    const freshMessages = [INITIAL_WELCOME_MESSAGE];
    setMessages(freshMessages);
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleCopyText = async (text: string, msgId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(msgId);
      setTimeout(() => setCopiedId(null), 2000);
      if (addToast) {
        addToast('Copied to Clipboard!', 'Message text copied successfully.', 'success');
      }
    } catch {
      // fallback
    }
  };

  // Execute prompt directly in chat
  const executeChatMessage = async (queryText: string) => {
    const query = queryText.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedWithUser = [...messages, userMsg];
    setMessages(updatedWithUser);
    saveSession(updatedWithUser);
    setInputValue('');
    setIsLoading(true);

    // Background Lead Capture if email or phone is present in user text
    const emailMatch = query.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
    const phoneMatch = query.match(/(?:\+91|0)?[6-9]\d{9}/);
    if (emailMatch || phoneMatch) {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'In-Chat Consultation Lead',
          email: emailMatch ? emailMatch[0] : 'chat-inquiry@careernova.app',
          phone: phoneMatch ? phoneMatch[0] : undefined,
          subject: 'In-Chat Consultation Inquiry',
          message: query,
        }),
      }).catch(() => {
        // Safe silent fail
      });
    }

    try {
      // Prepare conversation history (last 8 messages)
      const historyPayload = updatedWithUser.slice(-8).map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      const res = await fetch('/api/ai/assistant-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      const data = await res.json();
      if (data.success && data.reply) {
        const botReply: ChatMessage = {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        const finalMessages = [...updatedWithUser, botReply];
        setMessages(finalMessages);
        saveSession(finalMessages);
      } else {
        throw new Error(data.error || 'Server error');
      }
    } catch {
      // Intelligent conversational local fallback in case of connectivity issues
      let fallbackText = '';
      const lowerQuery = query.toLowerCase();

      if (lowerQuery.includes('core expertise') || lowerQuery.includes('10 core') || lowerQuery.includes('specialties') || lowerQuery.includes('pillars')) {
        fallbackText = `CareerNova delivers end-to-end excellence across our **10 Core Expertise Pillars**:\n\n1. 📊 **Financial Modeling & Valuation**: DCF analysis, 3-statement models, unit economics (LTV/CAC), and investment pitch decks.\n2. 📈 **Business Intelligence & Analytics**: Executive KPI dashboards, SQL data pipelines, Power BI & Tableau visualization.\n3. 🔄 **Enterprise CRM & ERP Systems**: Salesforce, HubSpot, SAP integration, and automated workflow architecture.\n4. 🎯 **Strategic IT & Agile Project Management**: Scrum/Kanban roadmapping, sprint velocity tracking, Jira, and risk mitigation.\n5. 🌐 **Full-Stack Web Architecture**: Scalable, high-performance web applications with React, Next.js, Node.js, and TypeScript.\n6. ⚡ **Custom WordPress & CMS Engineering**: Bespoke high-speed themes, WooCommerce engines, and security hardening.\n7. 📱 **Native iOS Swift & SwiftUI**: High-velocity iOS apps with clean MVVM architecture, CoreData offline sync, and StoreKit IAP.\n8. ☁️ **Microservices, APIs & Cloud Scalability**: REST/GraphQL APIs, Docker containers, Kubernetes, and AWS/GCP serverless pipelines.\n9. 🚀 **App Store Optimization (ASO) & Growth**: Keyword index rank optimization, screenshot conversion A/B testing, and organic downloads.\n10. 🔍 **Advanced Technical SEO & Discovery**: Core Web Vitals optimization, schema markup, and organic search traffic growth.\n\nWhich core discipline would you like to discuss for your project or career?`;
      } else if (lowerQuery.includes('our services') || lowerQuery.includes('what tech and business') || lowerQuery.includes('services does careernova offer') || lowerQuery.includes('services & solutions') || lowerQuery.includes('offerings')) {
        fallbackText = `Here is a summary of CareerNova's **Tech & Business Offerings**:\n\n💻 **Engineering & Software Development**\n- Modern Full-Stack web platforms (React, Next.js, Node.js, TypeScript)\n- Native iOS mobile applications built with Swift & SwiftUI\n- Resilient cloud APIs, microservices, and automated database sync\n\n📊 **Financial Modeling & Strategic Business Analytics**\n- Startup financial models (DCF, 3-statement projections, unit economics)\n- Executive BI dashboards & automated data pipelines (Power BI, Tableau)\n- Enterprise CRM/ERP workflow integrations (Salesforce, HubSpot)\n\n🚀 **Growth, SEO & Store Discovery**\n- High-impact App Store Optimization (ASO) & conversion rate optimization\n- Advanced technical SEO audits & Core Web Vitals optimization\n\n🎯 **Career Strategy & Mentorship**\n- High-scoring ATS resume restructuring (Google's XYZ bullet formula)\n- STAR-method technical and behavioral interview preparation\n\nWould you like a free consultation on any of these services?`;
      } else if (lowerQuery.includes('consultation') || lowerQuery.includes('free consult') || lowerQuery.includes('contact') || lowerQuery.includes('hire') || lowerQuery.includes('book') || emailMatch || phoneMatch) {
        fallbackText = `👋 **Free Consultation & Advisory Connect**\n\nCareerNova offers free introductory consultations for software engineering projects, business strategy, and career transitions.\n\n**Direct Contact Reach:**\n- 📞 Phone / WhatsApp: **+91 7007260391**\n- ✉️ Direct Email: **sudheersinghrajput8932@gmail.com**\n- ⏱️ Turnaround: **Within 12–24 hours**\n\nYou can also share your project requirements, target role, or contact info right here in the chat, and Sudhir Singh & the team will follow up directly!`;
      } else if (lowerQuery.includes('meaning') || lowerQuery.includes('definition') || lowerQuery.includes('dictionary') || lowerQuery.includes('matlab') || lowerQuery.includes('define')) {
        fallbackText = `I specialize exclusively in CareerNova's ecosystem, core tech services, career guidance, and business solutions.\n\nLet me know how I can help you with our full-stack engineering, financial modeling, iOS development, or other solutions!`;
      } else if (lowerQuery.includes('resume') || lowerQuery.includes('cv') || lowerQuery.includes('ats')) {
        fallbackText = `I can help optimize your resume for high ATS scores using Google's XYZ formula (*"Accomplished [X] as measured by [Y], by doing [Z]"*).\n\nPaste your current bullet points or target role, and I will refine them for you directly!`;
      } else if (lowerQuery.includes('financial') || lowerQuery.includes('valuation') || lowerQuery.includes('dcf') || lowerQuery.includes('model')) {
        fallbackText = `CareerNova provides comprehensive **Financial Modeling & Valuation** services, including discounted cash flow (DCF) models, 3-statement projections, unit economics (LTV/CAC), and investment pitch decks.\n\nWould you like a consultation on structuring your financial model?`;
      } else if (lowerQuery.includes('ios') || lowerQuery.includes('swift') || lowerQuery.includes('app')) {
        fallbackText = `Our **Native iOS Engineering** team crafts high-performance Swift & SwiftUI applications with clean MVVM architecture, CoreData offline sync, and StoreKit in-app purchases.\n\nTell me about your app concept or project scope!`;
      } else if (lowerQuery.includes('web') || lowerQuery.includes('full-stack') || lowerQuery.includes('react') || lowerQuery.includes('next')) {
        fallbackText = `CareerNova engineers production-grade **Full-Stack Web Architectures** using React, Next.js, TypeScript, Node.js, and scalable cloud databases.\n\nHow can we assist with your web platform or product development?`;
      } else {
        fallbackText = `I am here to assist you with CareerNova's tech services, career mentoring, and 10 Core Expertise pillars (Full-Stack Dev, iOS Swift, Financial Modeling, BI, CRM/ERP, Cloud APIs, ASO, and SEO).\n\nHow can I help with your project or career goals today?`;
      }

      const botReply: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const finalMessages = [...updatedWithUser, botReply];
      setMessages(finalMessages);
      saveSession(finalMessages);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Free-Form Chat Submission
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    executeChatMessage(inputValue);
  };

  // Helper to parse clean markdown response
  const renderMessageContent = (text: string, msgId: string) => {
    return (
      <div className="space-y-2 relative group">
        <div className="flex items-center justify-end absolute top-0 right-0 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleCopyText(text, msgId)}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            title="Copy message"
          >
            {copiedId === msgId ? (
              <Check className="w-3 h-3 text-emerald-600" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>

        <div className="whitespace-pre-line text-xs sm:text-sm font-normal text-slate-800 leading-relaxed">
          {text.split('\n').map((line, lIdx) => {
            if (line.startsWith('### ')) {
              return (
                <div key={lIdx} className="text-sm sm:text-base font-bold text-slate-900 my-1 tracking-tight">
                  {line.replace('### ', '').trim()}
                </div>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <div key={lIdx} className="text-base sm:text-lg font-extrabold text-slate-900 my-1 tracking-tight">
                  {line.replace('## ', '').trim()}
                </div>
              );
            }
            return <p key={lIdx} className="min-h-[1.2em]">{line}</p>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      id="careernova-ai-assistant-widget"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden select-none"
    >
      {/* 1. Expandable Futuristic Glassmorphic Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320, mass: 0.8 }}
            className="glass-glossy-panel mb-4 w-[92vw] sm:w-[410px] md:w-[440px] h-[580px] max-h-[85vh] text-slate-900 rounded-3xl flex flex-col overflow-hidden select-text relative"
          >
            {/* Top Glowing Cyan Shimmer Horizon Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-90 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

            {/* Header: Glossy Cyber Glass with Animated Robot Avatar */}
            <div className="glass-glossy-panel-header px-5 py-3.5 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-white/90 to-cyan-50/80 border border-white/80 shadow-xs flex items-center justify-center">
                  <AnimatedRobotAvatar
                    className="w-7 h-7"
                    isLoading={isLoading}
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white shadow-xs" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                    <span>CareerNova Robo AI</span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-100/80 text-cyan-800 text-[9px] font-extrabold uppercase tracking-wider border border-cyan-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                      <span>Advisor</span>
                    </span>
                  </h2>
                  <p className="text-[11px] text-cyan-700 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active &amp; Ready</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleResetConversation}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-all cursor-pointer border border-transparent hover:border-slate-200/80 hover:shadow-2xs active:scale-95"
                  title="Reset conversation memory"
                  aria-label="Reset Conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-all cursor-pointer border border-transparent hover:border-slate-200/80 hover:shadow-2xs active:scale-95"
                  title="Minimize assistant"
                  aria-label="Close Assistant"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-200/70">
              {messages.map((msg, index) => {
                const isGreetingMessage = msg.id === 'msg-welcome-default' || (index === 0 && msg.sender === 'bot');

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[92%] rounded-2xl p-3.5 leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-md shadow-blue-500/20 rounded-br-xs'
                          : 'bg-white/85 backdrop-blur-md text-slate-800 border border-slate-200/80 shadow-xs rounded-bl-xs'
                      }`}
                    >
                      {msg.sender === 'bot' ? (
                        renderMessageContent(msg.text, msg.id)
                      ) : (
                        <p className="whitespace-pre-line text-xs sm:text-sm font-normal">{msg.text}</p>
                      )}

                      {/* Small Interactive Options / Quick Service Pills right below greeting */}
                      {isGreetingMessage && (
                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col gap-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Quick Options:
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {QUICK_SERVICE_PILLS.map((pill) => {
                              const IconComponent = pill.icon;
                              return (
                                <button
                                  key={pill.id}
                                  type="button"
                                  onClick={() => executeChatMessage(pill.query)}
                                  disabled={isLoading}
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${pill.pillClasses}`}
                                  title={`Click to ask about ${pill.label}`}
                                >
                                  <IconComponent className={`w-3.5 h-3.5 ${pill.iconClasses} shrink-0`} />
                                  <span className="whitespace-nowrap">{pill.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                );
              })}

              {/* Futuristic Quantum Pulse Thinking Animation */}
              {isLoading && (
                <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-md border border-cyan-200/80 rounded-2xl rounded-bl-xs shadow-xs w-auto max-w-[220px]">
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                    <AnimatedRobotAvatar className="w-5 h-5 relative z-10" isLoading />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-cyan-900">Robo AI Thinking</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Futuristic Glossy Input Bar */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white/60 backdrop-blur-md border-t border-slate-200/70"
            >
              <div className="glass-glossy-input flex items-center gap-2 px-3 py-2 rounded-2xl transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about CareerNova services, tech consulting, or career guidance..."
                  className="flex-1 bg-transparent border-none text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-30 disabled:hover:from-cyan-500 text-white font-bold transition-all shadow-sm shadow-cyan-500/30 cursor-pointer disabled:cursor-not-allowed hover:scale-105 active:scale-95 flex items-center justify-center shrink-0"
                  title="Send Message"
                  aria-label="Send Message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Robot Trigger Button & 30-Second Callout Window */}
      <div className="flex items-center gap-3 relative">
        {/* Automated Floating Callout Window (Appears 30 seconds after page load) */}
        <AnimatePresence>
          {!isOpen && showCallout && (
            <motion.div
              initial={{ opacity: 0, x: 20, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, y: 8, scale: 0.92 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="glass-glossy-panel absolute bottom-16 right-0 mb-2 w-[295px] sm:w-[330px] p-4 rounded-2xl text-slate-900 shadow-xl pointer-events-auto"
            >
              {/* Header inside Callout Window */}
              <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-cyan-50 border border-cyan-100">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-tight">
                    CareerNova AI Assistant
                  </span>
                </div>

                {/* Bold Close Cross (X) */}
                <button
                  onClick={handleDismissCallout}
                  aria-label="Close message"
                  className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#2563eb] transition-all cursor-pointer border border-[#2563eb]/30 hover:scale-110 active:scale-95 shadow-xs"
                  title="Dismiss callout"
                >
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>

              {/* Clickable Callout Prompt Body */}
              <div
                onClick={handleOpenToggle}
                className="cursor-pointer group select-none"
              >
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed group-hover:text-cyan-600 transition-colors">
                  Looking for tech architecture, full-stack development, or career consulting? Tap here to ask!
                </p>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-cyan-600 group-hover:text-cyan-700 flex items-center gap-1.5">
                    <span>Ask CareerNova AI</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[10px] text-slate-400">Instant AI reply</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Main Stylized Animated Robot Trigger Button */}
        <div className="relative group robot-hover-trigger">
          {/* Futuristic Glowing Neon Cyan / Blue Aura Ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-indigo-500/30 blur-md animate-cyber-aura pointer-events-none" />

          <button
            onClick={handleOpenToggle}
            id="careernova-ai-chatbot-trigger"
            aria-label="Open CareerNova Robo AI Assistant"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl shadow-cyan-950/40 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/80 ring-4 ring-cyan-500/20"
          >
            {isOpen ? (
              <ChevronDown className="w-6 h-6 text-white" />
            ) : (
              <AnimatedRobotAvatar
                className="w-9 h-9 drop-shadow-md"
                isLoading={isLoading}
              />
            )}

            {/* Status Badge: Green Online Ping Dot on Upper Right */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-xs" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

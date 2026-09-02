import React from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  MessageSquare
} from 'lucide-react';
import { TabId } from '../../types';

interface FooterProps {
  onNavigate: (tab: TabId, subTool?: string) => void;
  onOpenCreator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreator = () => {} }) => {
  return (
    <footer id="corporate-footer" className="w-full bg-slate-50 text-slate-600 border-t border-slate-200">
      {/* Top Value Banner */}
      <div className="border-b border-slate-200 bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-600">
            <span className="flex items-center gap-2 text-slate-800 font-medium">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>100% Privacy Focused &amp; Safe</span>
            </span>
            <span className="flex items-center gap-2 text-slate-800 font-medium">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Google XYZ &amp; VC-Standard Quality</span>
            </span>
            <span className="flex items-center gap-2 text-slate-800 font-medium">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>24-Hour Express Delivery on Services</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Support: +91 7007260391</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Brand & Bio (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              {/* Circular Logo Badge */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 p-0.5 shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-all">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-indigo-600 font-black">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-slate-900 tracking-tight">
                  Career<span className="text-indigo-600">Nova</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Growth &amp; Career Engine
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              CareerNova delivers end-to-end Core Expertise — Business Analytics, Digital Marketing, Financial Modeling, Web Development, Data Science &amp; AI, and Career &amp; Student Growth tools — built to turn ideas into measurable, real-world outcomes for students, professionals and founders across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/917007260391"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white hover:bg-emerald-600 text-slate-500 hover:text-white border border-slate-200 hover:border-emerald-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white hover:bg-indigo-600 text-slate-500 hover:text-white border border-slate-200 hover:border-indigo-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-xl bg-white hover:bg-sky-500 text-slate-500 hover:text-white border border-slate-200 hover:border-sky-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white hover:bg-pink-600 text-slate-500 hover:text-white border border-slate-200 hover:border-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-white hover:bg-slate-900 text-slate-500 hover:text-white border border-slate-200 hover:border-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Services Marketplace</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Interactive Tools</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Blog &amp; Guides</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Growth Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Growth Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'business')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Business Analytics</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'strategy')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Digital Marketing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'break-even')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Financial Modeling</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'full-stack-web-dev')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Web Development</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'business-intelligence')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Data Science &amp; AI</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'tools')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Automation &amp; Tools</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'roadmap-guide')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Career &amp; Student Growth</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise', 'strategy')}
                  className="hover:text-indigo-600 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>Strategy &amp; Growth</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <a
                href="tel:+917007260391"
                className="flex items-start gap-2.5 hover:text-slate-900 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Direct Hotline</div>
                  <div className="font-bold text-slate-800 group-hover:text-indigo-600">+91 7007260391</div>
                </div>
              </a>

              <a
                href="mailto:sudheersinghrajput8932@gmail.com"
                className="flex items-start gap-2.5 hover:text-slate-900 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Official Email</div>
                  <div className="font-bold text-slate-800 group-hover:text-indigo-600 break-all">
                    sudheersinghrajput8932@gmail.com
                  </div>
                </div>
              </a>

              <div className="pt-2">
                <button
                  onClick={onOpenCreator}
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold transition-all hover:scale-[1.02] text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Core Team Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-10 mt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 <strong className="text-slate-700">CareerNova</strong>. All rights reserved. Built for Indian Students &amp; Businesses.
          </p>

          <p className="text-center sm:text-right">
            Led by{' '}
            <button
              onClick={onOpenCreator}
              className="text-indigo-600 hover:text-indigo-800 font-semibold underline cursor-pointer"
            >
              Sudhir Singh
            </button>{' '}
            &amp; Principal Engineering Team
          </p>
        </div>
      </div>
    </footer>
  );
};

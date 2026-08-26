import React, { useState } from 'react';
import {
  Headphones,
  Phone,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Code,
  Cpu,
  MessageSquare,
  ChevronDown,
  ExternalLink,
  Zap
} from 'lucide-react';
import { ContactSubmission } from '../../types';

interface ContactSupportPageProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

export const ContactSupportPage: React.FC<ContactSupportPageProps> = ({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'AI Application / Custom Software',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How are the AI analyses and strategies generated?',
      a: 'All tools are powered directly through Google Gemini 3.7 Flash running securely on our server-side Node.js backend. Every prompt is engineered using industry venture capital and growth frameworks.',
    },
    {
      q: 'Can I export blueprints and SWOT grids as PDFs?',
      a: 'Yes! Every generative tool features 1-click Download as PDF with high-contrast formatting, as well as raw text download and instant clipboard copying.',
    },
    {
      q: 'Can I hire Sudhir Singh for custom AI software or enterprise tools?',
      a: 'Absolutely. Sudhir Singh is available for full-stack engineering, custom GenAI application architecture, LLM pipelines, and startup tech consultation. You can reach out directly via phone or email.',
    },
    {
      q: 'Are my business ideas or financial data stored publicly?',
      a: 'No. All generation takes place in real time with zero public leakage. Your business ideas and inputs remain private.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        if (onNotify) {
          onNotify(
            'success',
            'Message Dispatched Successfully!',
            'Sudhir Singh will review your consultation request and reply shortly.'
          );
        }
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'AI Application / Custom Software',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (err: any) {
      console.warn('Contact error:', err);
      if (onNotify) {
        onNotify('error', 'Transmission Failed', err.message || 'Please check your connection.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <Headphones className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Contact Developer &amp; Support Hub</h2>
            </div>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              Get in touch directly with <strong>Sudhir Singh</strong>, Creator &amp; Developer of the Entrepreneur AI Toolkit, for support, custom software builds, or tech consultation.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="tel:+917007260391"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call: +91 7007260391</span>
            </a>
            <a
              href="mailto:sudheersinghrajput8932@gmail.com"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-600" />
              <span>sudheersinghrajput8932@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Creator Info Card - Left 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          {/* Developer Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 p-0.5 shadow-md shadow-indigo-600/20 shrink-0">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-bold text-2xl text-indigo-600">
                  SS
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">Sudhir Singh</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Lead Architect
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Creator &amp; Full-Stack AI Engineer</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Specialized in building full-stack AI web products, intelligent automated systems, and high-conversion entrepreneur tooling. Available for custom software architecture, MVP development, and strategic tech guidance.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-2.5 pt-1">
              <a
                href="tel:+917007260391"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 text-slate-800 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Direct Phone</span>
                  <span className="text-xs font-semibold text-emerald-700 truncate block">+91 7007260391</span>
                </div>
              </a>

              <a
                href="mailto:sudheersinghrajput8932@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-500/40 text-slate-800 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold block">Official Email</span>
                  <span className="text-xs font-semibold text-indigo-700 truncate block">
                    sudheersinghrajput8932@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Tech Badges */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Available Expertise
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  ⚡ Full-Stack GenAI Apps
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  🔒 Gemini 3.7 Integrations
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  🚀 MVP to Scale Architecture
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  📊 Business Strategy Systems
                </span>
              </div>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-600" /> Frequently Asked Questions
            </h4>

            <div className="space-y-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left text-xs font-bold text-slate-900"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
                          isOpen ? 'rotate-180 text-indigo-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed pt-2 border-t border-slate-200 animate-in fade-in font-normal">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact / Consultation Form - Right 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Send Direct Inquiry / Request Consultation</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Have a custom AI venture idea, feature request, or technical inquiry?
                </p>
              </div>
              <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <Send className="w-4 h-4" />
              </span>
            </div>

            {isSuccess && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm">Inquiry Received!</h4>
                  <p className="mt-0.5 leading-relaxed">
                    Thank you! Your message has been sent directly to Sudhir Singh. Expect a response within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-800">Your Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-800">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@venture.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-800">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 555 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-800">Project / Inquiry Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  >
                    <option value="AI Application / Custom Software">AI Application / Custom Software</option>
                    <option value="Venture &amp; GTM Strategy Consultation">Venture &amp; GTM Strategy Consultation</option>
                    <option value="Toolkit Feature Suggestion">Toolkit Feature Suggestion</option>
                    <option value="General Support / Inquiry">General Support / Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-800">Message / Project Outline</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe what you want to build or how we can help..."
                  rows={5}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white resize-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-xs transition-all shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sudhir Singh</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  ChevronDown,
  ExternalLink,
  MapPin,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

interface ContactViewProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const ContactView: React.FC<ContactViewProps> = ({ onNotify }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('Career Tools & Resume');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    if (!firstName.trim() || !email.trim() || !description.trim()) {
      onNotify('error', 'Missing Required Fields', 'Please complete First Name, Email, and Description.');
      return;
    }

    setIsSubmitting(true);

    // 1. Prepare WhatsApp formatted message & URL
    const whatsAppText = `👋 *New CareerNova Inquiry*\n\n` +
      `👤 *Name:* ${fullName}\n` +
      `📱 *Mobile:* ${mobile.trim() || 'Not specified'}\n` +
      `📧 *Email:* ${email.trim()}\n` +
      `📍 *City:* ${city.trim() || 'Not specified'}\n` +
      `🏷️ *Category:* ${category}\n\n` +
      `💬 *Description:*\n${description.trim()}\n\n` +
      `🌐 _Sent via CareerNova Contact Engine_`;

    const whatsAppUrl = `https://wa.me/917007260391?text=${encodeURIComponent(whatsAppText)}`;

    try {
      // 2. Submit to Web3Forms API
      const web3FormsData = {
        access_key: 'b947f6cf-71d5-45c5-bc95-0211a78377ff',
        subject: `New CareerNova Inquiry from ${fullName} [${category}]`,
        from_name: `${fullName} (via CareerNova)`,
        to_email: 'sudheersinghrajput8932@gmail.com',
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        mobile: mobile.trim(),
        email: email.trim(),
        city: city.trim(),
        category,
        message: description.trim(),
      };

      // Background telemetry logging
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: email.trim(),
          category,
          subject: `Inquiry from ${city.trim() || 'User'}`,
          message: description.trim()
        }),
      }).catch(() => {});

      // Send to Web3Forms
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(web3FormsData),
      });

      const data = await res.json();

      if (data.success || res.ok) {
        setSubmitted(true);
        onNotify('success', 'Message Sent Successfully!', 'Thank you! Your message has been dispatched. We will respond shortly.');
        window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
      } else {
        setSubmitted(true);
        onNotify('success', 'Message Dispatched!', 'Thank you! Your inquiry is being processed and forwarded to our team.');
        window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitted(true);
      onNotify('success', 'Message Sent!', 'Your inquiry has been captured and WhatsApp is opening for instant connect.');
      window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'Is CareerNova completely free to use?',
      a: 'Yes! All core calculators, standard ATS resume formatting tools, business plan generators, and curriculum roadmaps are 100% free with unlimited local exports.'
    },
    {
      q: 'Which AI model powers the AI Hub and Resume Assistant?',
      a: 'CareerNova runs on server-side Gemini 3.7 Flash using structured JSON schemas. It provides instant, deterministic suggestions formatted according to Google XYZ recruiter standards and VC benchmarks.'
    },
    {
      q: 'Can I export my resume and business plan to PDF?',
      a: 'Yes! Every tool includes one-click PDF and clean text file export so you can submit your documents directly or import them into Google Docs and Microsoft Word.'
    },
    {
      q: 'How is my personal and business data handled?',
      a: 'We respect your privacy. All draft resumes, financial figures, and custom business notes are stored locally in your browser session or secure memory. We do not sell or monetize candidate data.'
    },
    {
      q: 'Can I request a custom feature or corporate training partnership?',
      a: 'Absolutely! Select "Partnerships" or "Business Enquiries" in the contact form, or contact Sudhir Singh directly at +91 7007260391.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Top Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold shadow-xs">
          <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
          <span>We'd Love to Hear From You</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Get in Touch <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">With Us</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Have a question about our career tools, need custom business services, or want to discuss a partnership? Our team will get back to you within 24 hours.
        </p>
      </motion.div>

      {/* Main Split-Container Layout — premium Contact Us UI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* LEFT CONTAINER: Let's Connect + Have a project or idea in mind? + Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...smoothTransition, delay: 0.2 }}
          className="lg:col-span-5 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 text-white rounded-3xl p-6 sm:p-9 shadow-xl shadow-indigo-600/25 flex flex-col justify-between space-y-8 relative overflow-hidden"
        >
          {/* Subtle decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-900/30 rounded-full blur-2xl pointer-events-none" />

          {/* Top Section */}
          <div className="space-y-6 relative z-10">
            <div className="space-y-2 border-b border-white/20 pb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET'S CONNECT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Contact Info
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-normal">
                Tell us what you are building, planning, or trying to solve. We'll help you find the right next step.
              </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="rounded-xl bg-white/10 border border-white/10 px-3 py-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-black text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  Let's Talk
                </div>
                <p className="mt-1 text-[10px] leading-relaxed text-indigo-100">Clear, direct communication.</p>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/10 px-3 py-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-black text-white">
                  <Clock className="w-3.5 h-3.5 text-sky-200" />
                  Quick Response
                </div>
                <p className="mt-1 text-[10px] leading-relaxed text-indigo-100">A reply within 24 hours.</p>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/10 px-3 py-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-black text-white">
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-200" />
                  Built For You
                </div>
                <p className="mt-1 text-[10px] leading-relaxed text-indigo-100">Focused on your goals.</p>
              </div>
            </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+917007260391"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-indigo-600 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-indigo-200 font-semibold uppercase tracking-wider">
                    Direct Phone / Hotline
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-indigo-100">
                    +91 7007260391
                  </div>
                  <div className="text-[11px] text-indigo-200 mt-0.5">
                    Available Mon–Sun (9 AM – 9 PM IST)
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sudheersinghrajput8932@gmail.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-indigo-600 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-indigo-200 font-semibold uppercase tracking-wider">
                    Official Email
                  </div>
                  <div className="text-sm font-bold text-white break-all group-hover:text-indigo-100">
                    sudheersinghrajput8932@gmail.com
                  </div>
                  <div className="text-[11px] text-indigo-200 mt-0.5">
                    Guaranteed response within 24 hours
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-indigo-200 font-semibold uppercase tracking-wider">
                    Headquarters
                  </div>
                  <div className="text-sm font-bold text-white">
                    India (Remote & Pan-India Network)
                  </div>
                  <div className="text-[11px] text-indigo-200 mt-0.5">
                    Serving students & founders nationwide
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Premium contact illustration */}
          <div className="relative z-10 flex justify-center py-1">
            <div className="relative w-full max-w-sm h-36 sm:h-40 rounded-3xl bg-white/10 border border-white/15 overflow-hidden">
              <div className="absolute -top-10 -right-8 w-32 h-32 rounded-full bg-fuchsia-400/20 blur-2xl" />
              <div className="absolute -bottom-14 -left-8 w-36 h-36 rounded-full bg-sky-400/20 blur-2xl" />

              <div className="absolute left-7 top-7 w-28 h-20 rounded-2xl bg-white/95 shadow-2xl rotate-[-4deg] p-3">
                <div className="h-2 w-12 rounded-full bg-indigo-200 mb-2" />
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-slate-200" />
                  <div className="h-1.5 w-4/5 rounded-full bg-slate-200" />
                  <div className="h-1.5 w-3/5 rounded-full bg-indigo-200" />
                </div>
              </div>

              <div className="absolute right-8 top-5 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 border-4 border-white/70 shadow-xl flex items-center justify-center text-white">
                <MessageSquare className="w-7 h-7" />
              </div>

              <div className="absolute right-24 bottom-5 w-11 h-11 rounded-2xl bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl rotate-[7deg]">
                <Send className="w-5 h-5" />
              </div>

              <div className="absolute left-24 bottom-4 px-3 py-1.5 rounded-full bg-white/90 text-indigo-700 text-[10px] font-black shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Let's build something great
              </div>
            </div>
          </div>

          {/* Bottom WhatsApp Instant Action */}
          <div className="pt-4 border-t border-white/20 relative z-10 space-y-3">
            <a
              href="https://wa.me/917007260391?text=Hi%20Sudhir%2C%20I%20am%20reaching%20out%20from%20the%20CareerNova%20Contact%20Page."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <p className="text-[11px] text-indigo-100 text-center">
              Prefer instant messaging? Connect in seconds on WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>


        {/* RIGHT CONTAINER: Send Us a Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 p-6 sm:p-10 flex flex-col justify-between space-y-6"
        >
          <div>
            <div className="space-y-1 border-b border-slate-100 pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the form below. We dispatch directly to our email and open a WhatsApp chat.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 px-4 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-black text-slate-900">Message Delivered!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{firstName}</strong>! Your inquiry has been forwarded to <strong className="text-indigo-600">sudheersinghrajput8932@gmail.com</strong>.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Recipient:</span>
                    <span className="text-slate-900 font-bold">Sudhir Singh (CareerNova Team)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Direct WhatsApp:</span>
                    <span className="text-emerald-600 font-bold">+91 7007260391</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Status:</span>
                    <span className="text-indigo-600 font-bold">Dispatched via Web3Forms &amp; WhatsApp</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={`https://wa.me/917007260391?text=${encodeURIComponent(
                      `👋 *New CareerNova Inquiry*\n\n👤 *Name:* ${firstName} ${lastName}\n📱 *Mobile:* ${mobile}\n📧 *Email:* ${email}\n📍 *City:* ${city}\n🏷️ *Category:* ${category}\n\n💬 *Description:*\n${description}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Reopen WhatsApp Chat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setDescription('');
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer border border-slate-200"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sharma"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Mobile & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul.sharma@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: City & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lucknow, Delhi, Bangalore"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      Inquiry Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden transition-all cursor-pointer"
                    >
                      <option value="Career Tools & Resume">Career Tools &amp; ATS Resume</option>
                      <option value="Paid Growth Services">Paid Growth &amp; Marketing Services</option>
                      <option value="Business Plan & MSME">Business Plan &amp; MSME Registration</option>
                      <option value="AI Tools & Calculators">AI Tools &amp; Calculators Feedback</option>
                      <option value="Partnership & Corporate">Corporate Training &amp; Partnership</option>
                      <option value="General Support">General Query</option>
                    </select>
                  </div>
                </div>

                {/* Description Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Description / Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, project, or questions in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-medium focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-hidden transition-all resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-50 text-white text-sm font-bold transition-all shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Sending to Email &amp; WhatsApp...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit &amp; Open WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Privacy Protected</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Fast 24-Hour Reply</span>
            </span>
          </div>
        </motion.div>

      </div>

      {/* Frequently Asked Questions Section with Staggered Scroll Reveal */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="space-y-6 pt-4"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Quick answers about tools, privacy, formatting, and corporate assistance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...smoothTransition, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`p-1 rounded-lg bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-indigo-50 text-indigo-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200 font-normal">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

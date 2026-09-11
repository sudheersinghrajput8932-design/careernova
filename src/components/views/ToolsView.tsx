import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Palette,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from 'lucide-react';

interface ToolsViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onSaveItem?: (title: string, data: any) => void;
  initialTool?: string;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

const expertise = [
  {
    number: '01', title: 'Web Development',
    description: 'Fast, responsive and scalable websites and web applications designed around real business goals.',
    icon: Globe2, gradient: 'from-indigo-600 to-blue-600',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
  },
  {
    number: '02', title: 'iOS Development',
    description: 'Thoughtful iOS experiences built with modern Apple technologies, clean interfaces and performance in mind.',
    icon: Smartphone, gradient: 'from-violet-600 to-fuchsia-600',
    tags: ['Swift', 'SwiftUI', 'UIKit', 'Xcode'],
  },
  {
    number: '03', title: 'Business Growth',
    description: 'Digital systems and growth strategies that help businesses attract customers, improve conversion and scale.',
    icon: TrendingUp, gradient: 'from-cyan-600 to-emerald-500',
    tags: ['SEO', 'Analytics', 'Strategy', 'Automation'],
  },
];

const stackGroups = [
  {
    title: 'Web Development', eyebrow: 'BUILD',
    description: 'Modern technologies for websites, web apps and digital products.', icon: Code2,
    gradient: 'from-indigo-600 to-blue-600',
    technologies: [
      ['Next.js', 'Web framework'], ['React', 'UI development'], ['TypeScript', 'Typed JavaScript'],
      ['JavaScript', 'Web applications'], ['Node.js', 'Backend runtime'], ['Tailwind CSS', 'Interface styling'],
    ],
  },
  {
    title: 'iOS Development', eyebrow: 'CREATE',
    description: 'Apple-focused tools for polished, native mobile experiences.', icon: Smartphone,
    gradient: 'from-violet-600 to-purple-600',
    technologies: [
      ['Swift', 'Native language'], ['SwiftUI', 'Modern UI framework'], ['UIKit', 'Apple UI framework'],
      ['Xcode', 'Build & test'], ['App Store Connect', 'Release management'],
    ],
  },
  {
    title: 'Backend & Cloud', eyebrow: 'POWER',
    description: 'Reliable data, APIs and cloud infrastructure behind digital products.', icon: Server,
    gradient: 'from-cyan-600 to-blue-600',
    technologies: [
      ['Firebase', 'App backend'], ['Supabase', 'Database & auth'], ['PostgreSQL', 'Relational database'],
      ['REST APIs', 'System integration'], ['AWS', 'Cloud infrastructure'],
    ],
  },
  {
    title: 'Design & Product', eyebrow: 'DESIGN',
    description: 'Design systems that keep products clear, consistent and user-focused.', icon: Palette,
    gradient: 'from-fuchsia-600 to-rose-500',
    technologies: [
      ['Figma', 'UI/UX design'], ['Adobe Creative Cloud', 'Creative production'],
      ['Design Systems', 'Visual consistency'], ['Responsive UI', 'Multi-device design'],
    ],
  },
  {
    title: 'Analytics & Growth', eyebrow: 'MEASURE',
    description: 'Measurement and optimization tools for understanding what drives growth.', icon: BarChart3,
    gradient: 'from-emerald-600 to-teal-500',
    technologies: [
      ['Google Analytics', 'Performance insights'], ['Search Console', 'Search visibility'],
      ['Google Tag Manager', 'Tracking setup'], ['Looker Studio', 'Reporting'], ['SEO', 'Organic growth'],
    ],
  },
  {
    title: 'AI & Automation', eyebrow: 'ACCELERATE',
    description: 'AI-powered workflows and integrations that reduce repetitive work.', icon: Brain,
    gradient: 'from-amber-500 to-orange-600',
    technologies: [
      ['OpenAI APIs', 'AI integrations'], ['AI Workflows', 'Intelligent processes'],
      ['Automation', 'Workflow efficiency'], ['API Integrations', 'Connected systems'],
    ],
  },
];

const technologyColors: Record<string, string> = {
  'Next.js': 'text-slate-900',
  'React': 'text-cyan-600',
  'TypeScript': 'text-blue-600',
  'JavaScript': 'text-amber-600',
  'Node.js': 'text-emerald-600',
  'Tailwind CSS': 'text-sky-600',
  'Swift': 'text-orange-600',
  'SwiftUI': 'text-violet-600',
  'UIKit': 'text-indigo-600',
  'Xcode': 'text-blue-600',
  'App Store Connect': 'text-fuchsia-600',
  'Firebase': 'text-amber-600',
  'Supabase': 'text-emerald-600',
  'PostgreSQL': 'text-blue-700',
  'REST APIs': 'text-cyan-600',
  'AWS': 'text-orange-600',
  'Figma': 'text-fuchsia-600',
  'Adobe Creative Cloud': 'text-rose-600',
  'Design Systems': 'text-violet-600',
  'Responsive UI': 'text-indigo-600',
  'Google Analytics': 'text-orange-600',
  'Search Console': 'text-blue-600',
  'Google Tag Manager': 'text-indigo-600',
  'Looker Studio': 'text-cyan-600',
  'SEO': 'text-emerald-600',
  'OpenAI APIs': 'text-emerald-700',
  'AI Workflows': 'text-violet-600',
  'Automation': 'text-amber-600',
  'API Integrations': 'text-cyan-600',
};

const principles = [
  { icon: Target, title: 'Business-first', description: 'Technology is selected around the outcome, not just the trend.' },
  { icon: ShieldCheck, title: 'Built to scale', description: 'Clean foundations make it easier to improve, maintain and grow.' },
  { icon: Zap, title: 'Performance focused', description: 'Fast, responsive experiences are treated as a core requirement.' },
  { icon: Workflow, title: 'Connected systems', description: 'Web, mobile, analytics and automation work better together.' },
];

export const ToolsView: React.FC<ToolsViewProps> = () => {
  return (
    <div className="space-y-8 sm:space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl shadow-indigo-950/10"
      >
        <img
          src="/assets/technology-growth-stack-hero.png"
          alt="Technology and Growth Stack"
          className="block h-auto w-full select-none"
        />
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={smoothTransition}>
        <div className="mb-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">Core expertise</p>
          <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900">Three areas. One connected approach.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Our technology choices support the three areas CareerNova is built around: development, iOS products and business growth.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ ...smoothTransition, delay: index * 0.07 }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-600/5">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-50 opacity-60 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg shadow-indigo-600/10 transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="h-8 w-8" />
                      </div>
                    <span className="text-[10px] font-black tracking-widest text-slate-300">{item.number}</span>
                  </div>
                  <h3 className={`mt-5 inline-block bg-gradient-to-r ${item.gradient} bg-clip-text text-lg font-black text-transparent`}>
                      {item.title}
                    </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tagIndex) => {
                      const tagColors = [
                        'border-cyan-200 bg-cyan-50 text-cyan-700',
                        'border-violet-200 bg-violet-50 text-violet-700',
                        'border-blue-200 bg-blue-50 text-blue-700',
                        'border-emerald-200 bg-emerald-50 text-emerald-700',
                      ];
                      return (
                        <span
                          key={tag}
                          className={`rounded-lg border px-2 py-1 text-[9px] font-bold ${tagColors[tagIndex % tagColors.length]}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={smoothTransition}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">Our stack</p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900">Technologies we work with</h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-right">The stack is intentionally focused — enough to build strong products without turning the page into a generic software catalogue.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ ...smoothTransition, delay: (index % 2) * 0.06 }} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-600/5">
                <div className="flex items-start gap-4 p-5 pb-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${group.gradient} text-white shadow-sm`}><Icon className="h-5 w-5" /></div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2"><span className="text-[9px] font-black tracking-[0.16em] text-indigo-500">{group.eyebrow}</span><span className="h-1 w-1 rounded-full bg-slate-300" /><span className="text-[9px] font-semibold text-slate-400">CareerNova Stack</span></div>
                    <div className="relative mt-1 inline-block overflow-hidden">
                      <h3 className={`bg-gradient-to-r ${group.gradient} bg-clip-text text-base font-black text-transparent`}>
                        {group.title}
                      </h3>
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                        initial={{ x: '220%' }}
                        whileInView={{ x: '-320%' }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.2 }}
                      />
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{group.description}</p>
                  </div>
                </div>
                <div className="border-t border-slate-100 bg-slate-50/70 p-4">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {group.technologies.map(([name, detail]) => (
                      <div key={name} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white px-3 py-2.5 transition-colors group-hover:border-slate-200">
                        <div className="flex min-w-0 items-center gap-2">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${group.gradient}`} />
                          <span className={`truncate text-[11px] font-bold ${technologyColors[name] ?? 'text-slate-800'}`}>{name}</span>
                        </div>
                        <span className="shrink-0 text-[9px] font-medium text-slate-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
        className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
          <div className="relative min-h-[300px] overflow-hidden bg-slate-950">
            <img
              src="/assets/more-than-tools-avatar.png"
              alt="CareerNova technology and growth approach"
              className="block h-full w-full object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;
              const accent = [
                'from-cyan-500 to-blue-600',
                'from-violet-500 to-fuchsia-600',
                'from-emerald-500 to-teal-600',
                'from-amber-400 to-orange-600',
              ][index % 4];

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-150`} />
                  <div className="relative">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className={`mt-4 bg-gradient-to-r ${accent} bg-clip-text text-base font-black text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={smoothTransition} className="flex flex-col gap-5 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm"><Search className="h-4 w-4" /></div>
          <div><h3 className="text-sm font-black text-slate-900">Looking for the right digital solution?</h3><p className="mt-1 text-xs leading-5 text-slate-500">Tell us what you are trying to build or grow, and we can map the right approach.</p></div>
        </div>
        <button type="button" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700">Start a conversation <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
      </motion.section>

      <div className="flex items-center justify-center gap-2 pb-2 text-[10px] font-semibold text-slate-400"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Focused stack • Practical technology choices • Built for real outcomes</div>
    </div>
  );
};

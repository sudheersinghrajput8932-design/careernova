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
    title: 'Web Development', eyebrow: 'BUILD', image: '/assets/tools-web-development.jpg',
    description: 'Modern technologies for websites, web apps and digital products.', icon: Code2,
    gradient: 'from-indigo-600 to-blue-600',
    technologies: [
      ['Next.js', 'Web framework'], ['React', 'UI development'], ['TypeScript', 'Typed JavaScript'],
      ['JavaScript', 'Web applications'], ['Node.js', 'Backend runtime'], ['Tailwind CSS', 'Interface styling'],
    ],
  },
  {
    title: 'iOS Development', eyebrow: 'CREATE', image: '/assets/tools-ios-development.jpg',
    description: 'Apple-focused tools for polished, native mobile experiences.', icon: Smartphone,
    gradient: 'from-violet-600 to-purple-600',
    technologies: [
      ['Swift', 'Native language'], ['SwiftUI', 'Modern UI framework'], ['UIKit', 'Apple UI framework'],
      ['Xcode', 'Build & test'], ['App Store Connect', 'Release management'],
    ],
  },
  {
    title: 'Backend & Cloud', eyebrow: 'POWER', image: '/assets/tools-backend-cloud.jpg',
    description: 'Reliable data, APIs and cloud infrastructure behind digital products.', icon: Server,
    gradient: 'from-cyan-600 to-blue-600',
    technologies: [
      ['Firebase', 'App backend'], ['Supabase', 'Database & auth'], ['PostgreSQL', 'Relational database'],
      ['REST APIs', 'System integration'], ['AWS', 'Cloud infrastructure'],
    ],
  },
  {
    title: 'Design & Product', eyebrow: 'DESIGN', image: '/assets/tools-design-product.jpg',
    description: 'Design systems that keep products clear, consistent and user-focused.', icon: Palette,
    gradient: 'from-fuchsia-600 to-rose-500',
    technologies: [
      ['Figma', 'UI/UX design'], ['Adobe Creative Cloud', 'Creative production'],
      ['Design Systems', 'Visual consistency'], ['Responsive UI', 'Multi-device design'],
    ],
  },
  {
    title: 'Analytics & Growth', eyebrow: 'MEASURE', image: '/assets/tools-analytics-growth.jpg',
    description: 'Measurement and optimization tools for understanding what drives growth.', icon: BarChart3,
    gradient: 'from-emerald-600 to-teal-500',
    technologies: [
      ['Google Analytics', 'Performance insights'], ['Search Console', 'Search visibility'],
      ['Google Tag Manager', 'Tracking setup'], ['Looker Studio', 'Reporting'], ['SEO', 'Organic growth'],
    ],
  },
  {
    title: 'AI & Automation', eyebrow: 'ACCELERATE', image: '/assets/tools-ai-automation.jpg',
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
    <div className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#f7f4ff_100%)] text-slate-900">
      {/* Hero — dark teal Learn@House-inspired visual language */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[radial-gradient(circle_at_12%_15%,#dff7ff,transparent_28%),radial-gradient(circle_at_90%_20%,#eee2ff,transparent_30%),linear-gradient(135deg,#ffffff,#f4f8ff)] shadow-2xl shadow-indigo-500/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,199,255,0.10),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(139,92,246,0.10),transparent_25%)]" />
        <div className="relative grid min-h-[430px] grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-12">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 shadow-sm backdrop-blur">
              CareerNova Technology Stack
            </div>

            <div className="relative inline-block">
              <h1 className="bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 bg-clip-text text-4xl font-black leading-[1.05] tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                The Technology Behind Better Digital Outcomes
              </h1>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 z-20 w-1/5 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                initial={{ x: "-120%" }}
                animate={{ x: "620%" }}
                transition={{ duration: 2.2, ease: "linear", repeat: Infinity, repeatDelay: 0.7 }}
              />
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore the technologies, development tools, analytics platforms, cloud systems, AI workflows and digital capabilities CareerNova uses to build scalable products and help businesses achieve measurable digital growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/85 px-3 py-2 text-[10px] font-bold text-indigo-700 ring-1 ring-indigo-100 shadow-sm backdrop-blur">Web Development</span>
              <span className="rounded-full bg-white/85 px-3 py-2 text-[10px] font-bold text-indigo-700 ring-1 ring-indigo-100 shadow-sm backdrop-blur">AI & Automation</span>
              <span className="rounded-full bg-white/85 px-3 py-2 text-[10px] font-bold text-indigo-700 ring-1 ring-indigo-100 shadow-sm backdrop-blur">Analytics & Growth</span>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-xl lg:max-w-2xl">
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-2 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
              <img
                src="/assets/tools-hero-robot-glass.png"
                alt="CareerNova technology stack, AI, analytics, cloud and digital development tools"
                className="block h-auto max-h-[420px] w-full rounded-[1.6rem] object-contain object-center sm:max-h-[480px] lg:max-h-[540px]"
              />
            </div>
          </div>
        </div>

        <div className="relative h-8 bg-white [clip-path:ellipse(62%_100%_at_50%_100%)]" />
      </motion.section>

      {/* Core expertise */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
        className="py-8 sm:py-10"
      >
        <div className="mb-5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Core expertise</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Three areas. One connected approach.</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Our technology choices support development, iOS products and business growth through practical digital systems.
          </p>
        </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            const visualGradients = [
              "from-cyan-500 via-blue-600 to-indigo-900",
              "from-violet-500 via-fuchsia-600 to-indigo-950",
              "from-emerald-400 via-cyan-600 to-blue-950",
            ];
            const accent = visualGradients[index % visualGradients.length];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...smoothTransition, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[#10131b] shadow-[0_20px_55px_rgba(15,23,42,0.18)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(79,70,229,0.24)]"
              >
                <div className={`relative h-[230px] overflow-hidden bg-gradient-to-br ${accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.22),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.12),transparent_30%)]" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/15 bg-white/5 blur-sm" />
                  <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full border border-white/10 bg-black/10" />
                  <div className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                    CareerNova
                  </div>
                  <span className="absolute right-5 top-5 z-10 flex h-9 min-w-9 items-center justify-center rounded-full bg-white/15 px-2 text-[10px] font-black text-white ring-1 ring-white/20 backdrop-blur">
                    {item.number}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                      <div className="absolute inset-3 rounded-[1.5rem] border border-white/15" />
                      <Icon className="relative h-16 w-16 text-white drop-shadow-2xl" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                <div className="relative bg-[#10131b] px-5 pb-5 pt-5">
                  <h3 className={`relative inline-block bg-gradient-to-r ${item.gradient} bg-clip-text text-xl font-black text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-400">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[9px] font-bold text-slate-200 transition-colors group-hover:border-white/20 group-hover:bg-white/[0.09]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 opacity-80" />
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      {/* Our stack */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={smoothTransition}
        className="overflow-hidden rounded-[2rem] border border-indigo-100 bg-[linear-gradient(135deg,#eefaff_0%,#f8f4ff_48%,#ffffff_100%)] px-4 py-7 shadow-xl shadow-indigo-500/10 sm:px-6 sm:py-9"
      >
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-600">Our stack</p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent sm:text-3xl">Technologies we work with</h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-right">
            A focused technology stack for strong products, reliable systems and measurable digital outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {stackGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ ...smoothTransition, delay: (index % 2) * 0.06 }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-indigo-100 bg-white shadow-[0_10px_35px_rgba(7,94,90,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(79,70,229,0.16)]"
            >
              <div className="flex items-center gap-4 p-5 pb-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[1.25rem] border-4 border-white bg-white shadow-[0_8px_20px_rgba(79,70,229,0.12)] ring-1 ring-indigo-100 sm:h-[88px] sm:w-[88px]">
                  <img
                    src={group.image}
                    alt={`${group.title} technology`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-black tracking-[0.16em] text-indigo-600">{group.eyebrow}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="text-[9px] font-semibold text-slate-400">CareerNova Stack</span>
                  </div>
                  <div className="relative mt-1 inline-block overflow-hidden">
                    <h3 className={`bg-gradient-to-r ${group.gradient} bg-clip-text text-base font-black text-transparent`}>{group.title}</h3>
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                      initial={{ x: "220%" }}
                      whileInView={{ x: "-320%" }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2 }}
                    />
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{group.description}</p>
                </div>
              </div>

              <div className="border-t border-indigo-100 bg-slate-50/80 p-4">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {group.technologies.map(([name, detail]) => (
                    <div
                      key={name}
                      className="flex min-h-[52px] items-center justify-between gap-3 rounded-xl border border-indigo-100 bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(79,70,229,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-[#f8fcff] hover:shadow-[0_8px_18px_rgba(79,70,229,0.08)]"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${group.gradient}`} />
                        <span className={`truncate text-[11px] font-bold ${technologyColors[name] ?? "text-slate-800"}`}>{name}</span>
                      </div>
                      <span className="shrink-0 text-[9px] font-medium text-slate-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Principles */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
        className="overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[340px] overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 lg:min-h-[420px]">
            <img
              src="/assets/more-than-tools-avatar.png"
              alt="CareerNova technology and growth approach"
              className="block h-full w-full object-contain object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-1 bg-gradient-to-br from-cyan-50/70 via-white to-fuchsia-50/70 p-2 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;
              const accent = [
                "from-[#087f76] to-[#0ca69a]",
                "from-[#f1a92f] to-[#f06d3b]",
                "from-[#087f76] to-[#2b9f91]",
                "from-[#d97735] to-[#f0ad3b]",
              ][index % 4];

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative m-2 overflow-hidden rounded-[1.35rem] bg-white/90 p-6 shadow-[0_8px_25px_rgba(79,70,229,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(79,70,229,0.12)]"
                >
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-150`} />
                  <div className="relative">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className={`mt-4 bg-gradient-to-r ${accent} bg-clip-text text-base font-black text-transparent`}>{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-[0_12px_40px_rgba(79,70,229,0.10)]"
      >
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />
        <div className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Need the right technology?</p>
            <h3 className="mt-1.5 text-xl font-black text-slate-900 sm:text-2xl">Let’s map the right digital solution.</h3>
            <p className="mt-1.5 max-w-2xl text-xs leading-5 text-slate-500">
              Tell us what you are trying to build or grow, and we can map the right approach.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:from-cyan-400 hover:via-blue-500 hover:to-fuchsia-500 hover:shadow-xl"
          >
            Start a conversation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </motion.section>

      <div className="flex items-center justify-center gap-2 pb-2 text-[10px] font-semibold text-slate-400">
        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
        Focused stack • Practical technology choices • Built for real outcomes
      </div>
    </div>
  );
};

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
    <div className="overflow-hidden bg-[#f7fbfa] text-slate-900">
      {/* Hero — dark teal Learn@House-inspired visual language */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] bg-[#075e5a] shadow-2xl shadow-[#075e5a]/15"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,184,77,0.16),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.10),transparent_25%)]" />
        <div className="relative grid min-h-[430px] grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-12">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f5b544]/40 bg-[#f5b544]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#ffd477]">
              CareerNova Technology Stack
            </div>

            <div className="relative inline-block">
              <h1 className="bg-gradient-to-r from-white via-[#e8fffb] to-[#f7b84b] bg-clip-text text-4xl font-black leading-[1.05] tracking-tight text-transparent sm:text-5xl lg:text-6xl">
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

            <p className="mt-5 max-w-xl text-sm leading-7 text-teal-50/90 sm:text-base">
              Explore the technologies, development tools, analytics platforms, cloud systems, AI workflows and digital capabilities CareerNova uses to build scalable products and help businesses achieve measurable digital growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold text-white ring-1 ring-white/15">Web Development</span>
              <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold text-white ring-1 ring-white/15">AI & Automation</span>
              <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold text-white ring-1 ring-white/15">Analytics & Growth</span>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
              <img
                src="/assets/tools-hero-technology-stack.png"
                alt="CareerNova technology stack, AI, analytics, cloud and digital development tools"
                className="block aspect-[4/3] w-full rounded-[1.6rem] object-cover"
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
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0a8177]">Core expertise</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Three areas. One connected approach.</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Our technology choices support development, iOS products and business growth through practical digital systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...smoothTransition, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#d9e8e5] bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#075e5a]/10"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                <div className="flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-slate-300">{item.number}</span>
                </div>
                <h3 className={`mt-5 inline-block bg-gradient-to-r ${item.gradient} bg-clip-text text-lg font-black text-transparent`}>{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`rounded-lg border px-2 py-1 text-[9px] font-bold ${
                        [
                          "border-teal-200 bg-teal-50 text-teal-700",
                          "border-amber-200 bg-amber-50 text-amber-700",
                          "border-slate-200 bg-slate-50 text-slate-700",
                          "border-emerald-200 bg-emerald-50 text-emerald-700",
                        ][tagIndex % 4]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
        className="overflow-hidden rounded-[2rem] bg-[#075e5a] px-4 py-7 shadow-xl shadow-[#075e5a]/10 sm:px-6 sm:py-9"
      >
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ffd477]">Our stack</p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-white sm:text-3xl">Technologies we work with</h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-teal-50/75 sm:text-right">
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
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-lg"
            >
              <div className="flex items-center gap-4 p-5 pb-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md ring-1 ring-slate-200/80 sm:h-[88px] sm:w-[88px]">
                  <img
                    src={group.image}
                    alt={`${group.title} technology`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-black tracking-[0.16em] text-[#0a8177]">{group.eyebrow}</span>
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

              <div className="border-t border-slate-100 bg-[#f8fbfa] p-4">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {group.technologies.map(([name, detail]) => (
                    <div
                      key={name}
                      className="flex min-h-[48px] items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-[#8bc8c2] hover:shadow-sm"
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
        className="overflow-hidden rounded-[2rem] border border-[#d7e7e4] bg-white shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[300px] overflow-hidden bg-[#064f4c]">
            <img
              src="/assets/more-than-tools-avatar.png"
              alt="CareerNova technology and growth approach"
              className="block h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064f4c]/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#d7e7e4] sm:grid-cols-2">
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
                  className="group relative overflow-hidden bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
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
        className="relative overflow-hidden rounded-[2rem] bg-[#075e5a] shadow-xl shadow-[#075e5a]/15"
      >
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f5b544]/20 blur-3xl" />
        <div className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ffd477]">Need the right technology?</p>
            <h3 className="mt-1.5 text-xl font-black text-white sm:text-2xl">Let’s map the right digital solution.</h3>
            <p className="mt-1.5 max-w-2xl text-xs leading-5 text-teal-50/80">
              Tell us what you are trying to build or grow, and we can map the right approach.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f5b544] px-5 py-3 text-xs font-black text-[#164d4a] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#ffc85f]"
          >
            Start a conversation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </motion.section>

      <div className="flex items-center justify-center gap-2 pb-2 text-[10px] font-semibold text-slate-400">
        <CheckCircle2 className="h-3.5 w-3.5 text-[#0a8177]" />
        Focused stack • Practical technology choices • Built for real outcomes
      </div>
    </div>
  );
};

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
      {/* Hero — tools visual on the right, SEO copy on the left */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        className="relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-[radial-gradient(circle_at_8%_20%,rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_88%_18%,rgba(217,70,239,0.18),transparent_30%),linear-gradient(135deg,#eef7ff_0%,#f7f3ff_48%,#ffffff_100%)] shadow-2xl shadow-indigo-500/10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.7)_46%,transparent_62%)] opacity-50" />

        <div className="relative grid min-h-[560px] grid-cols-1 items-center gap-7 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-[0.98fr_1.02fr] lg:gap-2 lg:px-10 lg:py-10 xl:px-14">
          {/* Left: SEO-focused copy */}
          <div className="relative z-20 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-700 shadow-sm backdrop-blur">
              All-in-One Digital Tools
            </div>

            <div className="relative overflow-hidden">
              <h1 className="max-w-2xl text-4xl font-black leading-[1.03] tracking-tight text-slate-950 sm:text-5xl lg:text-[4rem]">
                Smart Tools for{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Your Digital Growth
                </span>
              </h1>

              {/* Continuous left-to-right reflection */}
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/4 z-20 w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[1px]"
                initial={{ x: "-140%" }}
                animate={{ x: "950%" }}
                transition={{
                  duration: 2.4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.9,
                }}
              />
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore practical digital tools for web development, AI automation, analytics, SEO,
              marketing, design and productivity — all selected to help businesses work smarter,
              build better digital products and accelerate growth.
            </p>

            {/* Glass feature boxes */}
            <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Build",
                  text: "Web & App Development Tools",
                  icon: Code2,
                  tone: "from-violet-500 to-blue-600",
                },
                {
                  number: "02",
                  title: "Automate",
                  text: "AI & Productivity Tools",
                  icon: Sparkles,
                  tone: "from-orange-400 to-pink-500",
                },
                {
                  number: "03",
                  title: "Grow",
                  text: "Marketing & Analytics Tools",
                  icon: TrendingUp,
                  tone: "from-emerald-400 to-cyan-600",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-white/80 bg-white/60 p-3.5 shadow-[0_10px_30px_rgba(79,70,229,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_16px_35px_rgba(79,70,229,0.14)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone} text-white shadow-md`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[11px] font-black text-slate-900">{item.title}</div>
                        <div className="mt-0.5 text-[9px] leading-4 text-slate-500">{item.text}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {["Web Development", "AI & Automation", "Analytics", "SEO & Marketing"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-indigo-100 bg-white/75 px-3 py-1.5 text-[10px] font-bold text-indigo-700 shadow-sm backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: generated tools visual */}
          <div className="relative z-10 flex min-h-[330px] items-center justify-center sm:min-h-[410px] lg:min-h-[510px]">
            <div className="absolute right-[5%] top-[10%] h-32 w-32 rounded-full bg-fuchsia-400/20 blur-3xl sm:h-44 sm:w-44" />
            <div className="absolute bottom-[8%] left-[8%] h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl sm:h-48 sm:w-48" />

            <div className="relative w-full max-w-[700px]">
              <img
                src="/assets/tools-hero-avatar-tools-clean.png"
                alt="CareerNova digital tools visual showing development, AI, analytics, SEO, design and productivity tools"
                className="block h-auto w-full object-contain object-center drop-shadow-[0_25px_55px_rgba(79,70,229,0.16)]"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-white/70 [clip-path:ellipse(65%_100%_at_50%_100%)]" />
      </motion.section>

      {/* Technology capabilities */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={smoothTransition}
        className="py-8 sm:py-10"
      >
        <div className="mb-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
            Technology capabilities
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            What you can build with the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
              right technology
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
            From powerful digital products to AI automation and data-driven growth, we use modern tools
            to turn your ideas into real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {[
            {
              number: "01",
              title: "Build Digital Products",
              text: "Modern websites, web applications and digital products designed for real business goals.",
              image: "/assets/tools-capability-digital-products.jpg",
              gradient: "from-cyan-500 via-blue-600 to-indigo-700",
              check: "text-blue-600",
              items: ["Web & App Development", "Custom Solutions", "Scalable & Secure Architecture"],
              button: "Explore Development Tools",
            },
            {
              number: "02",
              title: "Automate Workflows",
              text: "AI-powered automation and smart workflows that save time, reduce manual work and improve efficiency.",
              image: "/assets/tools-capability-automation.jpg",
              gradient: "from-fuchsia-500 via-pink-600 to-purple-700",
              check: "text-pink-600",
              items: ["AI & Automation", "API Integrations", "Smart Workflow Systems"],
              button: "Explore Automation Tools",
            },
            {
              number: "03",
              title: "Turn Data Into Insights",
              text: "Analytics, reporting and data tools to help you understand performance and make better decisions.",
              image: "/assets/tools-capability-analytics.jpg",
              gradient: "from-orange-400 via-amber-500 to-orange-600",
              check: "text-orange-500",
              items: ["Data Analytics & Visualization", "Tracking & Reporting", "Business Intelligence"],
              button: "Explore Analytics Tools",
            },
            {
              number: "04",
              title: "Scale Digital Growth",
              text: "SEO, digital marketing and growth strategies to attract customers, improve conversion and scale.",
              image: "/assets/tools-capability-growth.jpg",
              gradient: "from-emerald-400 via-green-500 to-teal-600",
              check: "text-emerald-600",
              items: ["SEO & Search Visibility", "Digital Marketing", "Conversion Optimization"],
              button: "Explore Growth Tools",
            },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...smoothTransition, delay: index * 0.07 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[1.4rem] border border-white bg-white shadow-[0_14px_35px_rgba(79,70,229,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(79,70,229,0.16)]"
            >
              {/* Reference-style visual frame: circular image above the content */}
              <div className={`relative flex h-[218px] items-center justify-center overflow-hidden bg-gradient-to-br ${item.gradient} px-4 pt-5 sm:h-[238px] sm:px-6`}>
                <div className="absolute inset-0 bg-white/10" />
                <div className="relative z-10 h-[158px] w-[158px] overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_14px_34px_rgba(15,23,42,0.20)] ring-1 ring-slate-200 transition-transform duration-500 group-hover:scale-105 sm:h-[178px] sm:w-[178px]">
                  <img
                    src={item.image}
                    alt={`${item.title} — CareerNova technology capabilities and digital tools`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="absolute left-5 top-5 z-20 flex h-10 min-w-10 items-center justify-center rounded-full bg-white px-2.5 text-[10px] font-black text-slate-800 shadow-lg ring-1 ring-white">
                  {item.number}
                </span>
              </div>

              {/* Title + description */}
              <div className="px-5 pb-4 pt-5 sm:px-6">
                <h3 className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
                  {item.title.includes("Digital") ? (
                    <>
                      {item.title.split("Digital")[0]}
                      <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        Digital{item.title.split("Digital")[1]}
                      </span>
                    </>
                  ) : item.title.includes("Workflows") ? (
                    <>
                      Automate{" "}
                      <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        Workflows
                      </span>
                    </>
                  ) : item.title.includes("Insights") ? (
                    <>
                      Turn Data Into{" "}
                      <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        Insights
                      </span>
                    </>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-2 min-h-[60px] text-[12px] leading-6 text-slate-500 sm:text-xs">
                  {item.text}
                </p>
              </div>

              {/* Feature list */}
              <div className="mx-5 rounded-[1.2rem] border border-slate-100 bg-slate-50/80 p-4 sm:mx-6">
                <div className="space-y-3">
                  {item.items.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-100 ${item.check}`}>
                        <CheckCircle2 className="h-3.5 w-3.5 fill-current text-white [&>path]:stroke-slate-50" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-5 sm:p-6">
                <button
                  type="button"
                  className={`group/btn flex w-full items-center justify-between rounded-full bg-gradient-to-r ${item.gradient} px-4 py-3 text-xs font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl`}
                >
                  <span>{item.button}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-800 shadow-md transition-transform group-hover/btn:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>

              <div className={`h-1 bg-gradient-to-r ${item.gradient}`} />
            </motion.article>
          ))}
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

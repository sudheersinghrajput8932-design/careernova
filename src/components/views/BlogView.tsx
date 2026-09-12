import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  Share2,
  CheckCircle2,
  X,
  MessageCircle,
  ShieldCheck,
  ExternalLink,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TabId } from '../../types';
import { copyToClipboard } from '../../utils/exportUtils';

interface BlogViewProps {
  onNotify?: (type: 'success' | 'error' | 'info', title: string, description?: string) => void;
  addToast?: (title: string, description?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  onNavigate?: (tab: TabId, subTool?: string) => void;
}

const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

// Distinct visual theme per category so cards read differently at a glance
const CATEGORY_THEME: Record<
  string,
  {
    accentBar: string;
    border: string;
    glow: string;
    badge: string;
    title: string;
    tag: string;
    dot: string;
    cta: string;
    ctaBadge: string;
    arrow: string;
  }
> = {
  Career: {
    accentBar: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    border: 'hover:border-blue-300',
    glow: 'hover:shadow-[0_22px_55px_-25px_rgba(37,99,235,0.45)]',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    title: 'text-blue-700 group-hover:text-blue-900',
    tag: 'text-blue-700 bg-blue-50 border-blue-100',
    dot: 'bg-blue-500',
    cta: 'bg-blue-50 border-blue-100',
    ctaBadge: 'text-blue-700',
    arrow: 'text-blue-600 group-hover:text-blue-800'
  },
  Business: {
    accentBar: 'bg-gradient-to-r from-purple-500 to-fuchsia-500',
    border: 'hover:border-purple-300',
    glow: 'hover:shadow-[0_22px_55px_-25px_rgba(147,51,234,0.45)]',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    title: 'text-purple-700 group-hover:text-purple-900',
    tag: 'text-purple-700 bg-purple-50 border-purple-100',
    dot: 'bg-purple-500',
    cta: 'bg-purple-50 border-purple-100',
    ctaBadge: 'text-purple-700',
    arrow: 'text-purple-600 group-hover:text-purple-800'
  },
  Marketing: {
    accentBar: 'bg-gradient-to-r from-orange-500 to-pink-500',
    border: 'hover:border-orange-300',
    glow: 'hover:shadow-[0_22px_55px_-25px_rgba(249,115,22,0.45)]',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    title: 'text-orange-700 group-hover:text-orange-900',
    tag: 'text-orange-700 bg-orange-50 border-orange-100',
    dot: 'bg-orange-500',
    cta: 'bg-orange-50 border-orange-100',
    ctaBadge: 'text-orange-700',
    arrow: 'text-orange-600 group-hover:text-orange-800'
  },
  AI: {
    accentBar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    border: 'hover:border-emerald-300',
    glow: 'hover:shadow-[0_22px_55px_-25px_rgba(16,185,129,0.45)]',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'text-emerald-700 group-hover:text-emerald-900',
    tag: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    dot: 'bg-emerald-500',
    cta: 'bg-emerald-50 border-emerald-100',
    ctaBadge: 'text-emerald-700',
    arrow: 'text-emerald-600 group-hover:text-emerald-800'
  }
};

const DEFAULT_THEME = CATEGORY_THEME.Career;

type ServiceBlogPost = {
  id: string;
  slug: string;
  category: 'Business' | 'Marketing' | 'AI' | 'Career';
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  avatar: string;
  date: string;
  readTime: string;
  tags: string[];
  cta: {
    title: string;
    price: string;
    badge: string;
    buttonText: string;
    whatsappMessage: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaways?: string[];
      actionStep?: string;
    }[];
    conclusion: string;
  };
};

const SERVICE_BLOG_POSTS: ServiceBlogPost[] = [
  {
    id: 'service-web-development',
    slug: 'business-website-that-builds-trust',
    category: 'Business',
    title: 'How a Business Website Turns Attention Into Real Enquiries',
    excerpt: 'A practical look at the pages, messaging and conversion details that make a business website work harder.',
    coverImage: '/assets/web-development.png',
    author: 'CareerNova Web Team',
    avatar: 'CW',
    date: '12 Sep 2026',
    readTime: '6 min read',
    tags: ['Web Development', 'Business Website', 'Conversion'],
    cta: {
      title: 'Build a conversion-focused business website',
      price: 'Custom Quote',
      badge: 'Web Development',
      buttonText: 'Discuss My Website',
      whatsappMessage: 'Hi CareerNova Team, I want to discuss a business website.'
    },
    content: {
      intro: 'A website should do more than look professional. It should explain the offer quickly, build confidence and guide the right visitor toward an enquiry or purchase.',
      sections: [
        {
          heading: 'Start with the customer journey',
          body: [
            'A strong website makes the next step obvious. The homepage introduces the value proposition, service pages answer buying questions and focused calls to action reduce friction.',
            'Responsive layouts are equally important because visitors may arrive from mobile search, social media or a shared link.'
          ],
          keyTakeaways: ['Clear positioning', 'Fast, responsive experience', 'Focused conversion paths']
        },
        {
          heading: 'Design for trust and action',
          body: [
            'Proof points, useful service details, strong visuals and consistent brand presentation help visitors understand why they should choose the business.',
            'The final structure should be shaped around the business goal rather than a generic template.'
          ],
          actionStep: 'List your top three customer questions and make sure the website answers each one clearly.'
        }
      ],
      conclusion: 'The best business website is a working growth asset: clear enough to understand, credible enough to trust and structured enough to convert.'
    }
  },
  {
    id: 'service-ios-development',
    slug: 'building-an-ios-product-people-want-to-use',
    category: 'Career',
    title: 'From App Idea to a Useful iPhone Product: What to Plan First',
    excerpt: 'The product decisions that matter before an iOS app moves into interface design and development.',
    coverImage: '/assets/ios-development.png',
    author: 'CareerNova App Team',
    avatar: 'CA',
    date: '12 Sep 2026',
    readTime: '7 min read',
    tags: ['iOS Development', 'Product Design', 'Mobile App'],
    cta: {
      title: 'Turn your app idea into an iOS product',
      price: 'Custom Quote',
      badge: 'iOS Development',
      buttonText: 'Plan My App',
      whatsappMessage: 'Hi CareerNova Team, I want to plan an iOS application.'
    },
    content: {
      intro: 'A polished app starts with a focused product problem. Before adding features, decide who the app serves, what the core action is and what success should look like.',
      sections: [
        {
          heading: 'Define the core experience',
          body: [
            'Keep the first version centred on the most important user outcome. A smaller, coherent flow is easier to test and improve than a crowded first release.',
            'The interface should make primary actions discoverable and comfortable across iPhone and iPad form factors where relevant.'
          ],
          keyTakeaways: ['One core user outcome', 'Simple navigation', 'Responsive mobile experience']
        },
        {
          heading: 'Connect the product properly',
          body: [
            'API and backend integration should be considered early so authentication, data, notifications and other dependencies do not become last-minute blockers.',
            'Launch preparation also needs a clear checklist for testing, store assets and release readiness.'
          ],
          actionStep: 'Write the single sentence that explains what your app helps a user accomplish.'
        }
      ],
      conclusion: 'A useful iOS product combines a focused problem, intuitive interaction and dependable technical foundations from the beginning.'
    }
  },
  {
    id: 'service-ecommerce',
    slug: 'ecommerce-checkout-that-reduces-friction',
    category: 'Business',
    title: 'E-commerce That Converts: The Small Checkout Details That Matter',
    excerpt: 'How product discovery, trust signals and a smoother checkout can create a stronger digital sales foundation.',
    coverImage: '/assets/ecommerce-development.png',
    author: 'CareerNova Commerce Team',
    avatar: 'CC',
    date: '12 Sep 2026',
    readTime: '6 min read',
    tags: ['E-commerce', 'Checkout', 'Digital Sales'],
    cta: {
      title: 'Create a smoother online buying journey',
      price: 'Custom Quote',
      badge: 'E-commerce',
      buttonText: 'Improve My Store',
      whatsappMessage: 'Hi CareerNova Team, I want to improve my e-commerce store.'
    },
    content: {
      intro: 'Online shoppers need confidence at every step: finding the right product, understanding the offer, paying securely and knowing what happens next.',
      sections: [
        {
          heading: 'Make product discovery effortless',
          body: [
            'Useful categories, strong product presentation and clear calls to action reduce the effort required to compare and decide.',
            'Catalog structure should reflect how customers actually shop rather than how the internal business team stores information.'
          ],
          keyTakeaways: ['Clear catalog structure', 'Useful product information', 'Visible buying actions']
        },
        {
          heading: 'Remove checkout friction',
          body: [
            'A focused checkout should minimise unnecessary fields, explain payment and delivery expectations and give customers confidence before they confirm the order.',
            'Analytics setup helps the business understand where customers drop off and where improvements can have the greatest impact.'
          ],
          actionStep: 'Walk through your store as a first-time buyer and note every moment where you hesitate.'
        }
      ],
      conclusion: 'E-commerce growth comes from making the complete buying journey easier, clearer and more trustworthy—not simply adding more products.'
    }
  },
  {
    id: 'service-ai-automation',
    slug: 'where-ai-automation-actually-helps-businesses',
    category: 'AI',
    title: 'AI & Automation: Where Businesses Should Automate First',
    excerpt: 'A practical framework for finding repetitive workflows where AI and automation can create useful efficiency.',
    coverImage: '/assets/ai-automation.png',
    author: 'CareerNova AI Team',
    avatar: 'AI',
    date: '12 Sep 2026',
    readTime: '7 min read',
    tags: ['AI Automation', 'Workflows', 'Productivity'],
    cta: {
      title: 'Automate a repetitive business workflow',
      price: 'Custom Quote',
      badge: 'AI & Automation',
      buttonText: 'Explore Automation',
      whatsappMessage: 'Hi CareerNova Team, I want to automate a business workflow.'
    },
    content: {
      intro: 'Good automation is not about adding AI everywhere. It is about removing repetitive work while keeping the important human decisions visible and controlled.',
      sections: [
        {
          heading: 'Find repeatable work first',
          body: [
            'Start with tasks that happen frequently, follow predictable rules and consume meaningful staff time. Examples can include lead handling, internal updates, document flows and routine data movement.',
            'A clear process map makes it easier to decide which steps should be automated and which should stay human-led.'
          ],
          keyTakeaways: ['High-frequency task', 'Repeatable process', 'Clear success measure']
        },
        {
          heading: 'Build for reliability',
          body: [
            'Integrations should handle permissions, errors and fallback paths. AI-assisted steps should also have clear review points when the output affects customers or important business decisions.',
            'The objective is dependable workflow improvement, not automation for its own sake.'
          ],
          actionStep: 'Choose one repetitive workflow and measure how much time it currently takes each week.'
        }
      ],
      conclusion: 'The strongest AI workflows combine useful automation with practical controls, measurable outcomes and a clear role for people.'
    }
  },
  {
    id: 'service-uiux',
    slug: 'ui-ux-design-that-makes-products-easier',
    category: 'Marketing',
    title: 'UI/UX Design: Why Clarity Beats Complexity in Digital Products',
    excerpt: 'The design principles that help websites and apps feel easier to understand, navigate and use.',
    coverImage: '/assets/ui-ux-product-design.png',
    author: 'CareerNova Design Team',
    avatar: 'CD',
    date: '12 Sep 2026',
    readTime: '5 min read',
    tags: ['UI/UX', 'Product Design', 'Design Systems'],
    cta: {
      title: 'Design a clearer digital product experience',
      price: 'Custom Quote',
      badge: 'UI/UX Design',
      buttonText: 'Discuss Product Design',
      whatsappMessage: 'Hi CareerNova Team, I want to discuss UI/UX and product design.'
    },
    content: {
      intro: 'Good interface design helps users understand what matters, what they can do next and how the product behaves without making them think unnecessarily.',
      sections: [
        {
          heading: 'Design around user intent',
          body: [
            'Start with the tasks users actually need to complete. Navigation, hierarchy, spacing and interaction states should make those tasks feel natural.',
            'A consistent visual language also reduces cognitive load across screens and devices.'
          ],
          keyTakeaways: ['User-first hierarchy', 'Consistent components', 'Clear interactions']
        },
        {
          heading: 'Use a design system to scale',
          body: [
            'Reusable components and defined visual rules help teams maintain consistency while products evolve.',
            'Responsive behaviour should be designed as part of the experience rather than added after desktop screens are finished.'
          ],
          actionStep: 'Pick your most-used product screen and remove anything that does not support its primary user task.'
        }
      ],
      conclusion: 'The goal of UI/UX is not decoration. It is a clearer path from user intent to successful action.'
    }
  },
  {
    id: 'service-digital-marketing-seo',
    slug: 'seo-and-digital-marketing-that-builds-compounding-visibility',
    category: 'Marketing',
    title: 'SEO + Digital Marketing: Build Visibility That Compounds',
    excerpt: 'How search visibility, content and measurement can work together instead of operating as disconnected activities.',
    coverImage: '/assets/digital-marketing-seo.png',
    author: 'CareerNova Growth Team',
    avatar: 'CG',
    date: '12 Sep 2026',
    readTime: '7 min read',
    tags: ['SEO', 'Digital Marketing', 'Analytics'],
    cta: {
      title: 'Build a measurable digital growth system',
      price: 'Custom Quote',
      badge: 'Marketing & SEO',
      buttonText: 'Plan My Growth',
      whatsappMessage: 'Hi CareerNova Team, I want to plan digital marketing and SEO.'
    },
    content: {
      intro: 'Digital marketing becomes more useful when visibility, content, conversion and measurement are connected to one clear business objective.',
      sections: [
        {
          heading: 'Own the right search opportunities',
          body: [
            'SEO should focus on topics and searches that connect with the services, products or questions your audience actually cares about.',
            'Useful content earns attention by answering real questions rather than simply repeating keywords.'
          ],
          keyTakeaways: ['Relevant search intent', 'Useful content', 'Consistent optimisation']
        },
        {
          heading: 'Measure what moves the business',
          body: [
            'Analytics and reporting should connect traffic and engagement with meaningful outcomes such as enquiries, purchases or qualified leads.',
            'This creates a feedback loop for deciding what content and campaigns deserve more attention.'
          ],
          actionStep: 'Define one primary conversion and make sure your analytics can measure it reliably.'
        }
      ],
      conclusion: 'Sustainable digital visibility comes from connecting search, content, conversion and measurement into one growth loop.'
    }
  },
  {
    id: 'service-business-growth',
    slug: 'business-growth-strategy-from-idea-to-priority',
    category: 'Business',
    title: 'Business Growth Strategy: Stop Doing Everything at Once',
    excerpt: 'A simple way to turn scattered growth ideas into focused priorities, experiments and measurable next steps.',
    coverImage: '/assets/business-growth.png',
    author: 'CareerNova Strategy Team',
    avatar: 'CS',
    date: '12 Sep 2026',
    readTime: '6 min read',
    tags: ['Business Growth', 'Strategy', 'Conversion'],
    cta: {
      title: 'Create a focused growth roadmap',
      price: 'Custom Quote',
      badge: 'Business Growth',
      buttonText: 'Build My Roadmap',
      whatsappMessage: 'Hi CareerNova Team, I want to create a business growth roadmap.'
    },
    content: {
      intro: 'Growth gets harder when every idea looks equally important. A focused roadmap gives the business a sequence: understand the bottleneck, choose a priority, test it and learn.',
      sections: [
        {
          heading: 'Find the real bottleneck',
          body: [
            'Look across acquisition, conversion, retention and operations to identify where the current system is losing the most potential.',
            'The right priority is usually the constraint that limits several other growth efforts.'
          ],
          keyTakeaways: ['Identify the bottleneck', 'Prioritise impact', 'Create measurable targets']
        },
        {
          heading: 'Turn strategy into action',
          body: [
            'A roadmap should define what happens first, what will be measured and when the team will review the result.',
            'Small, measurable experiments make it easier to learn before committing large amounts of time or budget.'
          ],
          actionStep: 'Choose one growth metric and write the next three actions that could improve it.'
        }
      ],
      conclusion: 'Focused growth is less about doing more and more about choosing the right next move with evidence behind it.'
    }
  },
  {
    id: 'service-maintenance',
    slug: 'why-digital-products-need-post-launch-care',
    category: 'AI',
    title: 'Why Digital Products Need Support After Launch',
    excerpt: 'Launch is the beginning of a product lifecycle. Here is why maintenance, performance and ongoing improvements matter.',
    coverImage: '/assets/maintenance-support.png',
    author: 'CareerNova Support Team',
    avatar: 'CT',
    date: '12 Sep 2026',
    readTime: '5 min read',
    tags: ['Maintenance', 'Performance', 'Support'],
    cta: {
      title: 'Keep your digital system reliable',
      price: 'Custom Quote',
      badge: 'Maintenance & Support',
      buttonText: 'Get Support',
      whatsappMessage: 'Hi CareerNova Team, I want ongoing website or product support.'
    },
    content: {
      intro: 'Digital products live in changing environments. Updates, bugs, performance issues and new business requirements can appear after a successful launch.',
      sections: [
        {
          heading: 'Protect reliability',
          body: [
            'Regular checks and timely fixes help prevent small technical problems from becoming larger customer-facing issues.',
            'Performance improvements also protect the experience for users on different devices and network conditions.'
          ],
          keyTakeaways: ['Bug fixes', 'Performance checks', 'Ongoing technical support']
        },
        {
          heading: 'Keep improving the product',
          body: [
            'Support should not only react to problems. Usage insights and business feedback can reveal useful enhancements for future releases.',
            'A lightweight improvement cycle keeps the product aligned with changing customer needs.'
          ],
          actionStep: 'Create a monthly checklist covering updates, bugs, performance and the next product improvement.'
        }
      ],
      conclusion: 'A well-supported digital product stays dependable while continuing to evolve with the people and business it serves.'
    }
  }
];


export const BlogView: React.FC<BlogViewProps> = ({ onNotify, addToast, onNavigate }) => {
  const notifyFn = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    if (onNotify) onNotify(type, title, description);
    else if (addToast) addToast(title, description, type);
  };
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<ServiceBlogPost | null>(null);

  const categories = ['All', 'Career', 'Business', 'Marketing', 'AI'];

  const filteredPosts = SERVICE_BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShare = async (post: BlogPost) => {
    const ok = await copyToClipboard(`${window.location.origin}/#blog/${post.slug}`);
    if (ok) {
      notifyFn('success', 'Article Link Copied', 'Share this guide with friends or on LinkedIn.');
    }
  };

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/917007260391?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Hero Banner — image carries its own title/copy, no overlaid text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={smoothTransition}
        className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
      >
        <img
          src="/assets/blog-hero-banner.png"
          alt="CareerNova Blog — Insights. Guidance. Opportunities."
          className="w-full h-auto object-cover block"
        />
      </motion.div>

      {/* 2. Filter & Search Bar with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs"
      >
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, tags, or topics..."
            className="w-full pl-10 pr-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500/30 transition-all"
          />
        </div>
      </motion.div>

      {/* 3. Blog Cards Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 items-stretch">
        {filteredPosts.map((post, idx) => {
          const theme = CATEGORY_THEME[post.category] || DEFAULT_THEME;
          return (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...smoothTransition, delay: (idx % 4) * 0.08 }}
            onClick={() => setActivePost(post)}
            className={`group relative min-w-0 rounded-3xl bg-white border border-slate-200 transition-all duration-300 cursor-pointer flex h-full flex-col justify-between hover:-translate-y-1 shadow-xs overflow-hidden ${theme.border} ${theme.glow}`}
          >
            {/* Per-category color strip */}
            <div className={`h-1.5 w-full ${theme.accentBar}`} />

            {/* Top Cover Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src={post.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80'}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-slate-950/45 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                <span className={`h-2 w-2 rounded-full ${theme.dot} shadow-[0_0_12px_currentColor]`} />
                Service Insight
              </div>

              {/* Floating Category Badge & Read Time */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold border backdrop-blur-md shadow-xs ${theme.badge}`}>
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/60 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-indigo-300" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between min-w-0">
              <div className="space-y-2.5">
                <h2 className={`text-base sm:text-lg font-black leading-snug transition-colors line-clamp-2 ${theme.title}`}>
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] px-2.5 py-1 rounded-lg border font-medium ${theme.tag}`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service CTA Preview & Read Link */}
              <div className="pt-4 border-t border-slate-100 space-y-3 mt-4">
                {post.cta && (
                  <div className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${theme.cta}`}>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`w-2 h-2 rounded-full shrink-0 animate-pulse ${theme.dot}`} />
                      <span className="text-[11px] text-slate-800 truncate font-semibold">
                        Specialist Service Available ({post.cta.price})
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider shrink-0 ml-2 ${theme.ctaBadge}`}>
                      {post.cta.badge || 'Service'}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500 text-[11px] flex items-center gap-2 min-w-0">
                    <span
                      className={`w-7 h-7 shrink-0 rounded-full text-white flex items-center justify-center text-[9px] font-black shadow-sm ring-2 ring-white ${
                        post.category === 'Business'
                          ? 'bg-gradient-to-br from-purple-500 to-fuchsia-500'
                          : post.category === 'Marketing'
                          ? 'bg-gradient-to-br from-orange-500 to-pink-500'
                          : post.category === 'AI'
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-500'
                          : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                      }`}
                      aria-hidden="true"
                    >
                      {post.avatar}
                    </span>
                    <span className="truncate">{post.author}</span>
                  </span>
                  <span className={`font-bold flex items-center gap-1 transition-colors ${theme.arrow}`}>
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
          );
        })}
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto custom-scrollbar">
            {/* Modal Hero Cover Image */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-3xl bg-slate-100">
              <img
                src={activePost.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80'}
                alt={activePost.title}
                loading="lazy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-600 text-white shadow-xs">
                    {activePost.category}
                  </span>
                  <span className="text-xs text-white/90 flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <Clock className="w-3 h-3 text-indigo-300" /> {activePost.readTime}
                  </span>
                  <span className="text-xs text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    By {activePost.author} • {activePost.date}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-white leading-snug drop-shadow-md">
                  {activePost.title}
                </h1>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 pt-0 text-slate-900">
              {/* Intro Lead */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans font-medium">
                {activePost.content.intro}
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {activePost.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-2.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-1.5 h-4 rounded-full bg-indigo-600" />
                      <span>{section.heading}</span>
                    </h3>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {section.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {section.keyTakeaways && (
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                        <strong className="text-indigo-700 font-semibold block text-[11px]">Key Highlights:</strong>
                        {section.keyTakeaways.map((k, kIdx) => (
                          <div key={kIdx} className="flex items-center gap-1.5 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{k}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.actionStep && (
                      <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900">
                        <strong className="text-indigo-700 font-bold">Tactical Action Step: </strong> {section.actionStep}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                <strong className="text-slate-900 font-semibold block">Editorial Conclusion:</strong>
                <p className="leading-relaxed font-normal">{activePost.content.conclusion}</p>
              </div>

              {/* Service Call to Action */}
              {activePost.cta && (
                <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>CAREERNOVA VERIFIED SERVICE</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-200 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" />
                      <span>100% Satisfaction Guaranteed</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      {activePost.cta.title}
                    </h2>
                    <p className="text-xs text-indigo-100 font-normal">
                      Skip the trial-and-error. Get our dedicated human specialists to deliver ready-to-use results with fast 24-48h turnaround.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href={getWhatsAppLink(activePost.cta.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      <span>{activePost.cta.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {onNavigate && (
                      <button
                        onClick={() => {
                          setActivePost(null);
                          onNavigate('services');
                        }}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/20 font-semibold text-xs transition-all cursor-pointer"
                      >
                        <span>Explore Services Marketplace</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Share and Close */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => handleShare(activePost)}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Article Link</span>
                </button>

                <button
                  onClick={() => setActivePost(null)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

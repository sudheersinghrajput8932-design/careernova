import { TabId } from '../types';

export interface RouteMeta {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  canonicalPath: string;
  ogImage: string;
  ogImageType?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
}

export const ROUTE_METADATA: Record<TabId, RouteMeta> = {
  home: {
    title: 'CareerNova | Web Development, Custom Software & Business Growth Solutions',
    description: 'CareerNova delivers high-impact web development, custom software engineering, native mobile apps, AI copilots, and digital growth strategies across India.',
    keywords: 'CareerNova, Web Development Agency, Custom Software Development, Software Engineering, Native iOS Apps, Digital Marketing, AI Tools, ATS Resume Optimizer',
    ogTitle: 'CareerNova | Web Development & Digital Growth Agency',
    ogDescription: 'Transform your business with modern web architecture, AI tools, custom apps, and growth advisory.',
    canonicalPath: '/',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  privacy: {
    title: 'Privacy Policy | CareerNova',
    description: 'Read CareerNova’s Privacy Policy to understand what information we collect, why we use it, how we protect it, and the choices available to you.',
    keywords: 'CareerNova Privacy Policy, data privacy, personal information, website privacy',
    ogTitle: 'Privacy Policy - CareerNova',
    ogDescription: 'How CareerNova collects, uses, protects, and handles personal information.',
    canonicalPath: '/privacy-policy',
    ogImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },

  terms: {
    title: 'Terms of Service | CareerNova',
    description: 'Review the Terms of Service governing access to the CareerNova website, digital services, enquiries, projects, payments, intellectual property, and acceptable use.',
    keywords: 'CareerNova Terms of Service, service terms, website terms, software services',
    ogTitle: 'Terms of Service - CareerNova',
    ogDescription: 'The terms governing use of CareerNova and its digital services.',
    canonicalPath: '/terms-of-service',
    ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },

  disclaimer: {
    title: 'Disclaimer | CareerNova',
    description: 'Read CareerNova’s Disclaimer covering website information, business and growth guidance, technology and AI outputs, third-party services, and expected results.',
    keywords: 'CareerNova Disclaimer, AI disclaimer, business advice disclaimer, website disclaimer',
    ogTitle: 'Disclaimer - CareerNova',
    ogDescription: 'Important limitations and disclosures for CareerNova’s website, guidance, tools, and services.',
    canonicalPath: '/disclaimer',
    ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },

  refund: {
    title: 'Refund & Cancellation Policy | CareerNova',
    description: 'Review CareerNova’s Refund & Cancellation Policy for service enquiries, project cancellations, eligible refunds, work already started, revisions, and refund processing.',
    keywords: 'CareerNova Refund Policy, cancellation policy, service refund, project cancellation',
    ogTitle: 'Refund & Cancellation Policy - CareerNova',
    ogDescription: 'Clear guidelines for cancellations, eligible refunds, and service-related payments.',
    canonicalPath: '/refund-cancellation',
    ogImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },

  cookies: {
    title: 'Cookie Policy | CareerNova',
    description: 'Learn how CareerNova uses cookies and similar technologies for essential functionality, preferences, analytics, performance, and website improvement.',
    keywords: 'CareerNova Cookie Policy, cookies, analytics cookies, website cookies',
    ogTitle: 'Cookie Policy - CareerNova',
    ogDescription: 'How CareerNova uses cookies and similar technologies on its website.',
    canonicalPath: '/cookie-policy',
    ogImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },

  services: {
    title: 'Professional Web Engineering & Software Development Services | CareerNova',
    description: 'High-impact technical services including Full-Stack Web Architecture, Native iOS Development, AI Automation Workflows, and Custom Enterprise Solutions.',
    keywords: 'CareerNova Services, Software Engineering, Mobile App Development, iOS Swift, React Web Apps, AI Workflows, Cloud Infrastructure, Web Development',
    ogTitle: 'Professional Web & Software Services - CareerNova',
    ogDescription: 'High-impact technical services including Full-Stack Web Architecture, Native iOS Development, and AI Automation.',
    canonicalPath: '/services',
    ogImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  expertise: {
    title: 'Expertise & Digital Growth Capabilities | CareerNova',
    description: 'Explore CareerNova expertise across digital strategy, business intelligence, financial modeling, CRM and ERP workflows, AI-enabled productivity, and modern technology solutions.',
    keywords: 'CareerNova Expertise, Business Intelligence, Financial Modeling, CRM ERP, Digital Strategy, AI Productivity, Technology Consulting',
    ogTitle: 'Expertise & Digital Growth Capabilities - CareerNova',
    ogDescription: 'Explore CareerNova capabilities across business, technology, analytics and digital growth.',
    canonicalPath: '/expertise',
    ogImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  tools: {
    title: 'AI Tools & Financial Growth Calculators | CareerNova',
    description: 'Access interactive calculators: ROI Calculator, SaaS Runway Estimator, CAC:LTV Model, Equity Splitter, and Freelance Rate Benchmark.',
    keywords: 'AI Calculators, ROI Calculator, SaaS Runway Estimator, CAC LTV Model, Equity Splitter, Freelance Rate Benchmark, Business Tools',
    ogTitle: 'AI Tools & Financial Growth Calculators - CareerNova',
    ogDescription: 'Interactive, client-side AI tools designed to accelerate your job search and business strategy.',
    canonicalPath: '/tools',
    ogImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  career: {
    title: 'Career Hub & ATS Resume Optimization Studio | CareerNova',
    description: 'Supercharge your job search with ATS-tested resumes, STAR interview simulators, and personalized career roadmaps.',
    keywords: 'Career Hub, ATS Resume Builder, STAR Interview Simulator, Career Roadmaps, Tech Resume Optimization, Job Search Tools',
    ogTitle: 'Career Hub & ATS Resume Studio - CareerNova',
    ogDescription: 'Free ATS resume optimization and mock interview coaching designed for ambitious job seekers.',
    canonicalPath: '/career',
    ogImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  business: {
    title: 'Business Engine & Startup Strategy Matrix | CareerNova',
    description: 'Generate comprehensive business plans, SWOT breakdowns, competitor intelligence matrices, and financial projections.',
    keywords: 'Business Strategy, Startup Plan Generator, SWOT Analysis, Competitor Matrix, Financial Forecasting, Venture Building',
    ogTitle: 'Business Engine & Strategy Matrix - CareerNova',
    ogDescription: 'Turn your business vision into actionable execution roadmaps and financial models.',
    canonicalPath: '/business',
    ogImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  'ai-hub': {
    title: 'AI Intelligence Hub & Generative Copilots | CareerNova',
    description: 'Explore cutting-edge generative tools for cold outreach, marketing campaigns, viral social hooks, and career acceleration.',
    keywords: 'AI Intelligence Hub, Generative AI, Cold Email Writer, Viral Hooks Generator, Copywriting Copilot, Marketing AI',
    ogTitle: 'AI Intelligence Hub & Generative Copilots - CareerNova',
    ogDescription: 'Next-gen generative AI solutions for career and venture builders.',
    canonicalPath: '/ai-hub',
    ogImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  resources: {
    title: 'Free Resources, Cheatsheets & Curated Guides | CareerNova',
    description: 'Download curated interview cheatsheets, tech career roadmaps, startup financial models, and email templates.',
    keywords: 'Free Career Resources, Interview Cheatsheets, Software Engineer Roadmaps, Startup Financial Templates, Email Scripts',
    ogTitle: 'Free Resources & Curated Guides - CareerNova',
    ogDescription: 'Curated knowledge library for career growth and startup execution.',
    canonicalPath: '/resources',
    ogImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  blog: {
    title: 'Blog & Technical Growth Insights | CareerNova',
    description: 'Read actionable breakdowns on software engineering, salary negotiation, startup growth hacks, and AI workflows.',
    keywords: 'CareerNova Blog, Software Engineering Insights, Salary Negotiation, Tech Career Guide, Startup Growth, AI Tutorials',
    ogTitle: 'Blog & Technical Growth Insights - CareerNova',
    ogDescription: 'Practical career advice and business strategies written by industry operators.',
    canonicalPath: '/blog',
    ogImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  about: {
    title: 'About CareerNova | Mission, Values & Software Advisory',
    description: 'Learn about CareerNova’s mission to democratize elite career intelligence and modern business acceleration.',
    keywords: 'About CareerNova, Sudhir Singh Founder, Mission, Values, Engineering Team, Tech Mentorship',
    ogTitle: 'About CareerNova - Democratizing Growth Intelligence',
    ogDescription: 'Built to empower students, professionals and founders globally.',
    canonicalPath: '/about',
    ogImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  pricing: {
    title: 'Transparent Pricing & Free Core Tier | CareerNova',
    description: 'Transparent pricing with a 100% free core utility tier and flexible pro scaling options.',
    keywords: 'CareerNova Pricing, Free AI Tools, Premium Career Coaching, Custom Engineering Rates',
    ogTitle: 'Pricing & Tiers - CareerNova',
    ogDescription: 'Free forever access to core tools with premium scaling options.',
    canonicalPath: '/pricing',
    ogImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  contact: {
    title: 'Contact & Direct Advisory Connect | CareerNova',
    description: 'Get in touch with the CareerNova team for custom software engineering, web development, mentorship, and enterprise inquiries.',
    keywords: 'Contact CareerNova, Hire Engineers, WhatsApp Advisory, Support',
    ogTitle: 'Contact CareerNova - Direct Advisory Connect',
    ogDescription: 'Reach out via WhatsApp, phone hotline, or direct email for support and advisory.',
    canonicalPath: '/contact',
    ogImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  '404': {
    title: '404: Page Not Found | CareerNova',
    description: 'The requested page could not be found. Return to CareerNova to explore our suite of AI tools, career calculators, and business services.',
    keywords: '404 Not Found, CareerNova',
    ogTitle: '404: Page Not Found - CareerNova',
    ogDescription: 'The requested page could not be found. Return to CareerNova.',
    canonicalPath: '/404',
    ogImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
};

/**
 * SEO-safe URL helpers.
 *
 * Notes:
 * - Canonicals are always built from the configured production origin.
 * - Query-string tool routes are kept in the URL, but metadata remains
 *   controlled by the parent route unless a dedicated metadata entry exists.
 */
const SITE_URL = 'https://careernova-official.vercel.app';
const SITE_NAME = 'CareerNova';
const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80';


const BLOG_ARTICLE_METADATA: Record<string, RouteMeta> = {
  'business-website-that-builds-trust': {
    title: 'How a Business Website Turns Attention Into Real Enquiries | CareerNova',
    description: 'A practical look at the pages, messaging and conversion details that make a business website work harder.',
    keywords: 'business website, website development, website conversion, business enquiries, CareerNova',
    ogTitle: 'How a Business Website Turns Attention Into Real Enquiries',
    ogDescription: 'A practical look at the pages, messaging and conversion details that make a business website work harder.',
    canonicalPath: '/blog/business-website-that-builds-trust',
    ogImage: 'https://careernova-official.vercel.app/assets/web-development.png',
  },
  'building-an-ios-product-people-want-to-use': {
    title: 'From App Idea to a Useful iPhone Product: What to Plan First | CareerNova',
    description: 'The product decisions that matter before an iOS app moves into interface design and development.',
    keywords: 'iOS development, iPhone app development, product design, mobile app, CareerNova',
    ogTitle: 'From App Idea to a Useful iPhone Product: What to Plan First',
    ogDescription: 'The product decisions that matter before an iOS app moves into interface design and development.',
    canonicalPath: '/blog/building-an-ios-product-people-want-to-use',
    ogImage: 'https://careernova-official.vercel.app/assets/ios-development.png',
  },
  'ecommerce-checkout-that-reduces-friction': {
    title: 'E-commerce That Converts: The Small Checkout Details That Matter | CareerNova',
    description: 'How product discovery, trust signals and a smoother checkout can create a stronger digital sales foundation.',
    keywords: 'ecommerce, checkout optimization, ecommerce UX, digital sales, CareerNova',
    ogTitle: 'E-commerce That Converts: The Small Checkout Details That Matter',
    ogDescription: 'How product discovery, trust signals and a smoother checkout can create a stronger digital sales foundation.',
    canonicalPath: '/blog/ecommerce-checkout-that-reduces-friction',
    ogImage: 'https://careernova-official.vercel.app/assets/ecommerce-development.png',
  },
  'where-ai-automation-actually-helps-businesses': {
    title: 'AI & Automation: Where Businesses Should Automate First | CareerNova',
    description: 'A practical framework for finding repetitive workflows where AI and automation can create useful efficiency.',
    keywords: 'AI automation, business automation, workflow automation, AI workflows, CareerNova',
    ogTitle: 'AI & Automation: Where Businesses Should Automate First',
    ogDescription: 'A practical framework for finding repetitive workflows where AI and automation can create useful efficiency.',
    canonicalPath: '/blog/where-ai-automation-actually-helps-businesses',
    ogImage: 'https://careernova-official.vercel.app/assets/ai-automation.png',
  },
  'ui-ux-design-that-makes-products-easier': {
    title: 'UI/UX Design: Why Clarity Beats Complexity in Digital Products | CareerNova',
    description: 'The design principles that help websites and apps feel easier to understand, navigate and use.',
    keywords: 'UI UX design, product design, UX design, design systems, CareerNova',
    ogTitle: 'UI/UX Design: Why Clarity Beats Complexity in Digital Products',
    ogDescription: 'The design principles that help websites and apps feel easier to understand, navigate and use.',
    canonicalPath: '/blog/ui-ux-design-that-makes-products-easier',
    ogImage: 'https://careernova-official.vercel.app/assets/ui-ux-product-design.png',
  },
  'seo-and-digital-marketing-that-builds-compounding-visibility': {
    title: 'SEO + Digital Marketing: Build Visibility That Compounds | CareerNova',
    description: 'How search visibility, content and measurement can work together instead of operating as disconnected activities.',
    keywords: 'SEO, digital marketing, search visibility, content marketing, CareerNova',
    ogTitle: 'SEO + Digital Marketing: Build Visibility That Compounds',
    ogDescription: 'How search visibility, content and measurement can work together instead of operating as disconnected activities.',
    canonicalPath: '/blog/seo-and-digital-marketing-that-builds-compounding-visibility',
    ogImage: 'https://careernova-official.vercel.app/assets/digital-marketing-seo.png',
  },
  'business-growth-strategy-from-idea-to-priority': {
    title: 'Business Growth Strategy: Stop Doing Everything at Once | CareerNova',
    description: 'A simple way to turn scattered growth ideas into focused priorities, experiments and measurable next steps.',
    keywords: 'business growth strategy, growth planning, business priorities, growth experiments, CareerNova',
    ogTitle: 'Business Growth Strategy: Stop Doing Everything at Once',
    ogDescription: 'A simple way to turn scattered growth ideas into focused priorities, experiments and measurable next steps.',
    canonicalPath: '/blog/business-growth-strategy-from-idea-to-priority',
    ogImage: 'https://careernova-official.vercel.app/assets/business-growth.png',
  },
  'why-digital-products-need-post-launch-care': {
    title: 'Why Digital Products Need Support After Launch | CareerNova',
    description: 'Launch is the beginning of a product lifecycle. Here is why maintenance, performance and ongoing improvements matter.',
    keywords: 'software maintenance, post-launch support, digital product support, website maintenance, CareerNova',
    ogTitle: 'Why Digital Products Need Support After Launch',
    ogDescription: 'Launch is the beginning of a product lifecycle. Here is why maintenance, performance and ongoing improvements matter.',
    canonicalPath: '/blog/why-digital-products-need-post-launch-care',
    ogImage: 'https://careernova-official.vercel.app/assets/maintenance-support.png',
  },
};

function getBlogArticleMeta(slug?: string): RouteMeta | null {
  if (!slug) return null;
  return BLOG_ARTICLE_METADATA[slug] || null;
}

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
}

function absoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return `${SITE_URL}${normalized === '/' ? '/' : normalized}`;
}

function setMetaTag(
  selector: string,
  attrName: 'name' | 'property',
  attrValue: string,
  contentValue: string,
): void {
  if (typeof document === 'undefined') return;

  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', contentValue);
}

function setLinkTag(
  selector: string,
  rel: string,
  href: string,
): void {
  if (typeof document === 'undefined') return;

  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: unknown): void {
  if (typeof document === 'undefined') return;

  let script = document.querySelector(
    `script#${id}`,
  ) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string): void {
  if (typeof document === 'undefined') return;
  document.querySelector(`script#${id}`)?.remove();
}

/**
 * Extracts the TabId and optional sub-tool from the browser URL location.
 */
export function parseRouteFromLocation(): { tab: TabId; subTool?: string } {
  if (typeof window === 'undefined') {
    return { tab: 'home' };
  }

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const searchParams = new URLSearchParams(window.location.search);
  const toolParam =
    searchParams.get('tool') || searchParams.get('sub') || undefined;

  const cleanPath = pathname.toLowerCase();

  if (cleanPath === '/' || cleanPath === '/home' || cleanPath === '/index.html') {
    return { tab: 'home' };
  }

  if (
    cleanPath === '/expertise' ||
    cleanPath === '/specialists' ||
    cleanPath === '/disciplines'
  ) {
    return { tab: 'expertise' };
  }

  if (cleanPath === '/resume' || cleanPath === '/cv') {
    return { tab: 'career', subTool: 'resume-assistant' };
  }

  if (cleanPath === '/calculators' || cleanPath === '/calculator') {
    return { tab: 'tools' };
  }

  if (cleanPath === '/vocab' || cleanPath === '/vocabulary') {
    return { tab: 'resources' };
  }

  if (cleanPath === '/privacy-policy' || cleanPath === '/privacy') {
    return { tab: 'privacy' };
  }

  if (cleanPath === '/terms-of-service' || cleanPath === '/terms') {
    return { tab: 'terms' };
  }

  if (cleanPath === '/disclaimer') {
    return { tab: 'disclaimer' };
  }

  if (cleanPath === '/refund-cancellation' || cleanPath === '/refund') {
    return { tab: 'refund' };
  }

  if (cleanPath === '/cookie-policy' || cleanPath === '/cookies') {
    return { tab: 'cookies' };
  }

  // Individual blog articles use clean, crawlable URLs: /blog/:slug
  if (cleanPath.startsWith('/blog/')) {
    const blogSlug = cleanPath.slice('/blog/'.length).replace(/\/+$/, '');
    if (blogSlug) return { tab: 'blog', subTool: blogSlug };
  }

  const segments = cleanPath.split('/').filter(Boolean);
  const rootSegment = segments[0] as TabId;

  if (rootSegment === '404') {
    return { tab: '404' };
  }

  const validTabs: TabId[] = [
    'home',
    'services',
    'tools',
    'career',
    'business',
    'ai-hub',
    'resources',
    'blog',
    'about',
    'contact',
    'pricing',
    'privacy',
    'terms',
    'disclaimer',
    'refund',
    'cookies',
    'expertise',
  ];

  if (validTabs.includes(rootSegment)) {
    const subTool = segments[1] || toolParam;
    return { tab: rootSegment, subTool };
  }

  return { tab: '404' };
}

/**
 * Generates the clean target URL for a tab and optional sub-tool.
 */
export function getRouteUrl(tab: TabId, subTool?: string): string {
  if (tab === 'home') return '/';
  if (tab === '404') return '/404';

  if (subTool) {
    if (tab === 'blog') {
      return `/blog/${encodeURIComponent(subTool)}`;
    }
    return `/${tab}?tool=${encodeURIComponent(subTool)}`;
  }

  return `/${tab}`;
}

/**
 * Dynamically updates title, meta description, canonical, Open Graph,
 * Twitter/X cards, robots directives, language metadata, and structured data.
 *
 * This is client-side SEO support for the SPA. For maximum crawlability,
 * the production site should also expose the same canonical metadata in
 * the initial HTML/SSR/prerendered output.
 */
export function updateDocumentMetadata(
  tab: TabId,
  subTool?: string,
): void {
  if (typeof document === 'undefined') return;

  const articleMeta = tab === 'blog' ? getBlogArticleMeta(subTool) : null;
  const meta = articleMeta || ROUTE_METADATA[tab] || ROUTE_METADATA.home;
  const currentPath = getRouteUrl(tab, subTool);
  const fullUrl = absoluteUrl(currentPath);

  const is404 = tab === '404';

  // Keep title concise and route-specific.
  document.title = meta.title;

  // Primary SEO.
  setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
  setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
  setMetaTag('meta[name="robots"]', 'name', 'robots', is404 ? 'noindex, nofollow' : 'index, follow');
  setMetaTag('meta[name="googlebot"]', 'name', 'googlebot', is404 ? 'noindex, nofollow' : 'index, follow');
  setMetaTag('meta[name="bingbot"]', 'name', 'bingbot', is404 ? 'noindex, nofollow' : 'index, follow');
  setMetaTag('meta[name="author"]', 'name', 'author', SITE_NAME);
  setMetaTag('meta[name="application-name"]', 'name', 'application-name', SITE_NAME);
  setMetaTag('meta[name="theme-color"]', 'name', 'theme-color', '#0f172a');

  // Locale / language.
  document.documentElement.lang = 'en-IN';
  setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

  // Canonical: one canonical URL per route.
  setLinkTag('link[rel="canonical"]', 'canonical', fullUrl);

  // Open Graph.
  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;
  const ogType = tab === 'blog' ? 'website' : 'website';

  setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.ogTitle);
  setMetaTag(
    'meta[property="og:description"]',
    'property',
    'og:description',
    meta.ogDescription,
  );
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
  setMetaTag(
    'meta[property="og:image:secure_url"]',
    'property',
    'og:image:secure_url',
    ogImage,
  );
  setMetaTag(
    'meta[property="og:image:type"]',
    'property',
    'og:image:type',
    meta.ogImageType || 'image/jpeg',
  );
  setMetaTag(
    'meta[property="og:image:width"]',
    'property',
    'og:image:width',
    String(meta.ogImageWidth || 1200),
  );
  setMetaTag(
    'meta[property="og:image:height"]',
    'property',
    'og:image:height',
    String(meta.ogImageHeight || 630),
  );
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);

  // Twitter / X.
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.ogTitle || meta.title);
  setMetaTag(
    'meta[name="twitter:description"]',
    'name',
    'twitter:description',
    meta.ogDescription || meta.description,
  );
  setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', fullUrl);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

  // Structured data: keep global organization/service information separate
  // from route-specific WebPage data.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
    telephone: '+917007260391',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '298B Almari gali, New Ashok Nagar',
      addressLocality: 'Delhi',
      postalCode: '110096',
      addressCountry: 'IN',
    },
    sameAs: [SITE_URL],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': is404 ? 'WebPage' : 'WebPage',
    '@id': `${fullUrl}#webpage`,
    url: fullUrl,
    name: meta.title,
    description: meta.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: ogImage,
      width: meta.ogImageWidth || 1200,
      height: meta.ogImageHeight || 630,
    },
  };

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'CareerNova',
      item: SITE_URL,
    },
  ];

  if (tab !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: meta.title.replace(/\s*\|\s*CareerNova\s*$/i, ''),
      item: fullUrl,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  setJsonLd('careernova-organization-schema', organizationSchema);
  setJsonLd('careernova-website-schema', websiteSchema);
  setJsonLd('careernova-webpage-schema', pageSchema);
  setJsonLd('careernova-breadcrumb-schema', breadcrumbSchema);

  // Article structured data for clean /blog/:slug URLs.
  if (articleMeta && subTool) {
    setJsonLd('careernova-article-schema', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${fullUrl}#article`,
      headline: articleMeta.title.replace(/\s*\|\s*CareerNova\s*$/i, ''),
      description: articleMeta.description,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${fullUrl}#webpage` },
      url: fullUrl,
      image: [articleMeta.ogImage || DEFAULT_OG_IMAGE],
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
      keywords: articleMeta.keywords,
    });
  } else {
    removeJsonLd('careernova-article-schema');
  }

  // Remove the old single-schema implementation if a previous build left it.
  document.querySelector('script#json-ld-schema')?.remove();

  // GA4 SPA pageview.
  if (typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('event', 'page_view', {
        page_title: meta.title,
        page_location: fullUrl,
        page_path: currentPath,
      });
    } catch (error) {
      console.debug('GA tracking event error:', error);
    }
  }
}

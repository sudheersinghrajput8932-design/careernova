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
    title: 'CareerNova - AI-Powered Career Hub, Engineering & Growth Solutions',
    description: 'Discover professional AI tools, full-stack web engineering, native iOS Swift development, and strategic lead generation services tailored for your growth.',
    keywords: 'CareerNova, AI tools, ATS resume optimizer, mock interview simulator, full-stack engineering, iOS app development, startup strategy, financial modeling',
    ogTitle: 'CareerNova - AI-Powered Career Hub & Growth Solutions',
    ogDescription: 'Scale your business and career with expert full-stack development, iOS apps, AI integrations, and targeted growth strategies.',
    canonicalPath: '/',
    ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  expertise: {
    title: 'Core Engineering & Technical Expertise (10 Disciplines) | CareerNova',
    description: 'Explore 10 consolidated professional disciplines: Financial Modeling, BI Data Analytics, CRM & ERP, Agile Management, Full-Stack Web, Custom WordPress, Native iOS Swift, Cloud APIs, App Store Deployment, and SEO Growth Strategy.',
    keywords: 'Core Expertise, 10 Technical Disciplines, Financial Modeling, BI Data Analytics, CRM ERP, Agile Project Management, Full-Stack Web Development, Custom WordPress, Native iOS Swift, Cloud APIs, App Store Deployment, SEO Growth Strategy',
    ogTitle: 'Core Engineering & Technical Expertise (10 Disciplines) - CareerNova',
    ogDescription: 'Explore 10 consolidated professional disciplines: Financial Modeling, BI Data Analytics, CRM & ERP, Agile Management, Full-Stack Web, Custom WordPress, Native iOS Swift, Cloud APIs, App Store Deployment, and SEO Growth Strategy.',
    canonicalPath: '/expertise',
    ogImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80',
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  services: {
    title: 'Professional Engineering & Growth Services | CareerNova',
    description: 'High-impact technical services including Full-Stack Web Architecture, Native iOS Development, AI Automation Workflows, and Custom Enterprise Solutions.',
    keywords: 'CareerNova Services, Software Engineering, Mobile App Development, iOS Swift, React Web Apps, AI Workflows, Cloud Infrastructure',
    ogTitle: 'Professional Engineering & Growth Services - CareerNova',
    ogDescription: 'High-impact technical services including Full-Stack Web Architecture, Native iOS Development, AI Automation Workflows, and Custom Enterprise Solutions.',
    canonicalPath: '/services',
    ogImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80',
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
    title: 'About CareerNova | Mission, Values & Founder Story',
    description: 'Learn about CareerNova’s mission to democratize elite career intelligence and modern business acceleration.',
    keywords: 'About CareerNova, Sudhir Singh Founder, Mission, Values, Engineering Team, Tech Mentorship',
    ogTitle: 'About CareerNova - Democratizing Growth Intelligence',
    ogDescription: 'Built with passion by Sudhir Singh to empower students and founders globally.',
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
    description: 'Get in touch with the CareerNova team for custom software engineering, iOS development, mentorship, and enterprise inquiries.',
    keywords: 'Contact CareerNova, Hire Engineers, WhatsApp Advisory, Sudhir Singh Contact, Support',
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
 * Extracts the TabId and optional sub-tool from the browser URL location.
 */
export function parseRouteFromLocation(): { tab: TabId; subTool?: string } {
  if (typeof window === 'undefined') {
    return { tab: 'home' };
  }

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const searchParams = new URLSearchParams(window.location.search);
  const toolParam = searchParams.get('tool') || searchParams.get('sub') || undefined;

  const cleanPath = pathname.toLowerCase();

  if (cleanPath === '/' || cleanPath === '/home' || cleanPath === '/index.html') {
    return { tab: 'home' };
  }

  // Common direct route aliases
  if (cleanPath === '/expertise' || cleanPath === '/specialists' || cleanPath === '/disciplines') {
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
    'expertise',
  ];

  if (validTabs.includes(rootSegment)) {
    const subTool = segments[1] || toolParam;
    return { tab: rootSegment, subTool };
  }

  // Any non-empty unmatched URL resolves to 404 page
  return { tab: '404' };
}

/**
 * Generates the clean target URL for a tab and optional sub-tool
 */
export function getRouteUrl(tab: TabId, subTool?: string): string {
  if (tab === 'home') {
    return '/';
  }
  if (tab === '404') {
    return '/404';
  }
  if (subTool) {
    return `/${tab}?tool=${encodeURIComponent(subTool)}`;
  }
  return `/${tab}`;
}

/**
 * Dynamically updates document.title, Open Graph tags, Twitter Card tags,
 * and tracks the pageview in Google Analytics without a page reload.
 */
export function updateDocumentMetadata(tab: TabId, subTool?: string) {
  if (typeof document === 'undefined') return;

  const meta = ROUTE_METADATA[tab] || ROUTE_METADATA.home;
  const baseUrl = 'https://careernova-mu.vercel.app';
  const currentPath = getRouteUrl(tab, subTool);
  const fullUrl = `${baseUrl}${currentPath === '/' ? '/' : currentPath}`;

  // 1. Update Title
  document.title = meta.title;

  // Helper function to safely set meta attributes
  const setMetaTag = (selector: string, attrName: string, attrValue: string, contentValue: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', contentValue);
  };

  // 2. Primary SEO Meta Tags
  setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
  setMetaTag('meta[name="title"]', 'name', 'title', meta.title);
  setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);

  const ogImage = meta.ogImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80';
  const ogImageType = meta.ogImageType || 'image/jpeg';
  const ogImageWidth = String(meta.ogImageWidth || 1200);
  const ogImageHeight = String(meta.ogImageHeight || 630);

  // 3. Open Graph / Facebook / LinkedIn / WhatsApp Tags
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.ogTitle);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.ogDescription);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
  setMetaTag('meta[property="og:image:secure_url"]', 'property', 'og:image:secure_url', ogImage);
  setMetaTag('meta[property="og:image:type"]', 'property', 'og:image:type', ogImageType);
  setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', ogImageWidth);
  setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', ogImageHeight);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'CareerNova');

  // 4. Twitter Card Tags
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
  setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', fullUrl);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

  // 5. Update Canonical link if present or create it
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', fullUrl);

  // 6. Notify Google Analytics (GA4)
  if (typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('event', 'page_view', {
        page_title: meta.title,
        page_location: fullUrl,
        page_path: currentPath,
      });
    } catch (e) {
      console.debug('GA tracking event error:', e);
    }
  }
}

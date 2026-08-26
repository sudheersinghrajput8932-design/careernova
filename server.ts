import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

interface ServerRouteSEO {
  title: string;
  description: string;
  keywords?: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalPath: string;
}

const SERVER_ROUTE_METADATA: Record<string, ServerRouteSEO> = {
  "/": {
    title: "CareerNova - AI-Powered Career Hub, Engineering & Growth Solutions",
    description: "Discover professional AI tools, full-stack web engineering, native iOS Swift development, and strategic lead generation services tailored for your growth.",
    keywords: "CareerNova, AI tools, ATS resume optimizer, mock interview simulator, full-stack engineering, iOS app development, startup strategy, financial modeling",
    ogTitle: "CareerNova - AI-Powered Career Hub & Growth Solutions",
    ogDescription: "Scale your business and career with expert full-stack development, iOS apps, AI integrations, and targeted growth strategies.",
    ogImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/",
  },
  "/expertise": {
    title: "Core Engineering & Technical Expertise (10 Disciplines) | CareerNova",
    description: "Explore 10 consolidated professional disciplines: Financial Modeling, BI Data Analytics, CRM & ERP, Agile Management, Full-Stack Web, Custom WordPress, Native iOS Swift, Cloud APIs, App Store Deployment, and SEO Growth Strategy.",
    keywords: "Core Expertise, 10 Technical Disciplines, Financial Modeling, BI Data Analytics, CRM ERP, Agile Project Management, Full-Stack Web Development, Custom WordPress, Native iOS Swift, Cloud APIs, App Store Deployment, SEO Growth Strategy",
    ogTitle: "Core Engineering & Technical Expertise (10 Disciplines) - CareerNova",
    ogDescription: "Explore 10 consolidated professional disciplines: Financial Modeling, BI Data Analytics, CRM & ERP, Agile Management, Full-Stack Web, Custom WordPress, Native iOS Swift, Cloud APIs, App Store Deployment, and SEO Growth Strategy.",
    ogImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/expertise",
  },
  "/services": {
    title: "Professional Engineering & Growth Services | CareerNova",
    description: "High-impact technical services including Full-Stack Web Architecture, Native iOS Development, AI Automation Workflows, and Custom Enterprise Solutions.",
    keywords: "CareerNova Services, Software Engineering, Mobile App Development, iOS Swift, React Web Apps, AI Workflows, Cloud Infrastructure",
    ogTitle: "Professional Engineering & Growth Services - CareerNova",
    ogDescription: "High-impact technical services including Full-Stack Web Architecture, Native iOS Development, AI Automation Workflows, and Custom Enterprise Solutions.",
    ogImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/services",
  },
  "/tools": {
    title: "AI Tools & Financial Growth Calculators | CareerNova",
    description: "Access interactive calculators: ROI Calculator, SaaS Runway Estimator, CAC:LTV Model, Equity Splitter, and Freelance Rate Benchmark.",
    keywords: "AI Calculators, ROI Calculator, SaaS Runway Estimator, CAC LTV Model, Equity Splitter, Freelance Rate Benchmark, Business Tools",
    ogTitle: "AI Tools & Financial Growth Calculators - CareerNova",
    ogDescription: "Interactive, client-side AI tools designed to accelerate your job search and business strategy.",
    ogImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/tools",
  },
  "/career": {
    title: "Career Hub & ATS Resume Optimization Studio | CareerNova",
    description: "Supercharge your job search with ATS-tested resumes, STAR interview simulators, and personalized career roadmaps.",
    keywords: "Career Hub, ATS Resume Builder, STAR Interview Simulator, Career Roadmaps, Tech Resume Optimization, Job Search Tools",
    ogTitle: "Career Hub & ATS Resume Studio - CareerNova",
    ogDescription: "Free ATS resume optimization and mock interview coaching designed for ambitious job seekers.",
    ogImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/career",
  },
  "/business": {
    title: "Business Engine & Startup Strategy Matrix | CareerNova",
    description: "Generate comprehensive business plans, SWOT breakdowns, competitor intelligence matrices, and financial projections.",
    keywords: "Business Strategy, Startup Plan Generator, SWOT Analysis, Competitor Matrix, Financial Forecasting, Venture Building",
    ogTitle: "Business Engine & Strategy Matrix - CareerNova",
    ogDescription: "Turn your business vision into actionable execution roadmaps and financial models.",
    ogImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/business",
  },
  "/ai-hub": {
    title: "AI Intelligence Hub & Generative Copilots | CareerNova",
    description: "Explore cutting-edge generative tools for cold outreach, marketing campaigns, viral social hooks, and career acceleration.",
    keywords: "AI Intelligence Hub, Generative AI, Cold Email Writer, Viral Hooks Generator, Copywriting Copilot, Marketing AI",
    ogTitle: "AI Intelligence Hub & Generative Copilots - CareerNova",
    ogDescription: "Next-gen generative AI solutions for career and venture builders.",
    ogImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/ai-hub",
  },
  "/resources": {
    title: "Free Resources, Cheatsheets & Curated Guides | CareerNova",
    description: "Download curated interview cheatsheets, tech career roadmaps, startup financial models, and email templates.",
    keywords: "Free Career Resources, Interview Cheatsheets, Software Engineer Roadmaps, Startup Financial Templates, Email Scripts",
    ogTitle: "Free Resources & Curated Guides - CareerNova",
    ogDescription: "Curated knowledge library for career growth and startup execution.",
    ogImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/resources",
  },
  "/blog": {
    title: "Blog & Technical Growth Insights | CareerNova",
    description: "Read actionable breakdowns on software engineering, salary negotiation, startup growth hacks, and AI workflows.",
    keywords: "CareerNova Blog, Software Engineering Insights, Salary Negotiation, Tech Career Guide, Startup Growth, AI Tutorials",
    ogTitle: "Blog & Technical Growth Insights - CareerNova",
    ogDescription: "Practical career advice and business strategies written by industry operators.",
    ogImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/blog",
  },
  "/about": {
    title: "About CareerNova | Mission, Values & Founder Story",
    description: "Learn about CareerNova’s mission to democratize elite career intelligence and modern business acceleration.",
    keywords: "About CareerNova, Sudhir Singh Founder, Mission, Values, Engineering Team, Tech Mentorship",
    ogTitle: "About CareerNova - Democratizing Growth Intelligence",
    ogDescription: "Built with passion by Sudhir Singh to empower students and founders globally.",
    ogImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/about",
  },
  "/pricing": {
    title: "Transparent Pricing & Free Core Tier | CareerNova",
    description: "Transparent pricing with a 100% free core utility tier and flexible pro scaling options.",
    keywords: "CareerNova Pricing, Free AI Tools, Premium Career Coaching, Custom Engineering Rates",
    ogTitle: "Pricing & Tiers - CareerNova",
    ogDescription: "Free forever access to core tools with premium scaling options.",
    ogImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/pricing",
  },
  "/contact": {
    title: "Contact & Direct Advisory Connect | CareerNova",
    description: "Get in touch with the CareerNova team for custom software engineering, iOS development, mentorship, and enterprise inquiries.",
    keywords: "Contact CareerNova, Hire Engineers, WhatsApp Advisory, Sudhir Singh Contact, Support",
    ogTitle: "Contact CareerNova - Direct Advisory Connect",
    ogDescription: "Reach out via WhatsApp, phone hotline, or direct email for support and advisory.",
    ogImage: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/contact",
  },
  "/404": {
    title: "404: Page Not Found | CareerNova",
    description: "The requested page could not be found. Return to CareerNova to explore our suite of AI tools, career calculators, and business services.",
    keywords: "404 Not Found, CareerNova",
    ogTitle: "404: Page Not Found - CareerNova",
    ogDescription: "The requested page could not be found. Return to CareerNova.",
    ogImage: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&h=630&q=80",
    canonicalPath: "/404",
  },
};

function injectMetaTags(html: string, reqPath: string): string {
  const cleanPath = (reqPath.replace(/\/+$/, "") || "/").toLowerCase();
  let meta = SERVER_ROUTE_METADATA[cleanPath];

  if (!meta) {
    if (cleanPath === "/specialists" || cleanPath === "/disciplines") {
      meta = SERVER_ROUTE_METADATA["/expertise"];
    } else if (cleanPath === "/resume" || cleanPath === "/cv") {
      meta = SERVER_ROUTE_METADATA["/career"];
    } else if (cleanPath === "/calculators" || cleanPath === "/calculator") {
      meta = SERVER_ROUTE_METADATA["/tools"];
    } else if (cleanPath === "/vocab" || cleanPath === "/vocabulary") {
      meta = SERVER_ROUTE_METADATA["/resources"];
    } else {
      meta = SERVER_ROUTE_METADATA["/"] || SERVER_ROUTE_METADATA["/404"];
    }
  }

  const baseUrl = "https://careernova-mu.vercel.app";
  const fullUrl = `${baseUrl}${meta.canonicalPath === "/" ? "/" : meta.canonicalPath}`;

  let transformed = html;

  // 1. Replace Title
  transformed = transformed.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);
  transformed = transformed.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${meta.title}" />`);

  // 2. Replace Description & Keywords
  transformed = transformed.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${meta.description}" />`);
  if (meta.keywords) {
    transformed = transformed.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${meta.keywords}" />`);
  }

  // 3. Replace Open Graph Tags
  transformed = transformed.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${meta.ogTitle}" />`);
  transformed = transformed.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${meta.ogDescription}" />`);
  transformed = transformed.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${fullUrl}" />`);
  transformed = transformed.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${meta.ogImage}" />`);
  transformed = transformed.replace(/<meta property="og:image:secure_url" content=".*?" \/>/i, `<meta property="og:image:secure_url" content="${meta.ogImage}" />`);

  // 4. Replace Twitter Tags
  transformed = transformed.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${meta.title}" />`);
  transformed = transformed.replace(/<meta property="twitter:title" content=".*?" \/>/i, `<meta property="twitter:title" content="${meta.title}" />`);
  transformed = transformed.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${meta.description}" />`);
  transformed = transformed.replace(/<meta property="twitter:description" content=".*?" \/>/i, `<meta property="twitter:description" content="${meta.description}" />`);
  transformed = transformed.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${meta.ogImage}" />`);
  transformed = transformed.replace(/<meta property="twitter:image" content=".*?" \/>/i, `<meta property="twitter:image" content="${meta.ogImage}" />`);
  transformed = transformed.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${fullUrl}" />`);
  transformed = transformed.replace(/<meta property="twitter:url" content=".*?" \/>/i, `<meta property="twitter:url" content="${fullUrl}" />`);

  return transformed;
}

let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey.trim(),
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

function generateAssistantFallbackReply(userMessage: string): string {
  const lowerQuery = userMessage.toLowerCase();
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
  const phoneRegex = /(\+?[0-9]{10,14})/;
  const emailMatch = userMessage.match(emailRegex);
  const phoneMatch = userMessage.match(phoneRegex);

  if (lowerQuery.includes('core expertise') || lowerQuery.includes('10 core') || lowerQuery.includes('specialties') || lowerQuery.includes('pillars') || lowerQuery.includes('discipline')) {
    return `CareerNova delivers end-to-end excellence across our **10 Core Expertise Pillars**:\n\n1. 📊 **Financial Modeling & Valuation**: DCF analysis, 3-statement models, unit economics (LTV/CAC), and investment pitch decks.\n2. 📈 **Business Intelligence & Analytics**: Executive KPI dashboards, SQL data pipelines, Power BI & Tableau visualization.\n3. 🔄 **Enterprise CRM & ERP Systems**: Salesforce, HubSpot, SAP integration, and automated workflow architecture.\n4. 🎯 **Strategic IT & Agile Project Management**: Scrum/Kanban roadmapping, sprint velocity tracking, Jira, and risk mitigation.\n5. 🌐 **Full-Stack Web Architecture**: Scalable, high-performance web applications with React, Next.js, Node.js, and TypeScript.\n6. ⚡ **Custom WordPress & CMS Engineering**: Bespoke high-speed themes, WooCommerce engines, and security hardening.\n7. 📱 **Native iOS Swift & SwiftUI**: High-velocity iOS apps with clean MVVM architecture, CoreData offline sync, and StoreKit IAP.\n8. ☁️ **Microservices, APIs & Cloud Scalability**: REST/GraphQL APIs, Docker containers, Kubernetes, and AWS/GCP serverless pipelines.\n9. 🚀 **App Store Optimization (ASO) & Growth**: Keyword index rank optimization, screenshot conversion A/B testing, and organic downloads.\n10. 🔍 **Advanced Technical SEO & Discovery**: Core Web Vitals optimization, schema markup, and organic search traffic growth.\n\nWhich core discipline would you like to discuss for your project or career?`;
  }

  if (lowerQuery.includes('service') || lowerQuery.includes('offering') || lowerQuery.includes('what do you do') || lowerQuery.includes('what can you do') || lowerQuery.includes('what tech and business')) {
    return `Here is a summary of CareerNova's **Tech & Business Offerings**:\n\n💻 **Engineering & Software Development**\n- Modern Full-Stack web platforms (React, Next.js, Node.js, TypeScript)\n- Native iOS mobile applications built with Swift & SwiftUI\n- Resilient cloud APIs, microservices, and automated database sync\n\n📊 **Financial Modeling & Strategic Business Analytics**\n- Startup financial models (DCF, 3-statement projections, unit economics)\n- Executive BI dashboards & automated data pipelines (Power BI, Tableau)\n- Enterprise CRM/ERP workflow integrations (Salesforce, HubSpot)\n\n🚀 **Growth, SEO & Store Discovery**\n- High-impact App Store Optimization (ASO) & conversion rate optimization\n- Advanced technical SEO audits & Core Web Vitals optimization\n\n🎯 **Career Strategy & Mentorship**\n- High-scoring ATS resume restructuring (Google's XYZ bullet formula)\n- STAR-method technical and behavioral interview preparation\n\nWould you like a free consultation on any of these services?`;
  }

  if (lowerQuery.includes('consultation') || lowerQuery.includes('contact') || lowerQuery.includes('hire') || lowerQuery.includes('book') || lowerQuery.includes('call') || emailMatch || phoneMatch) {
    return `👋 **Free Consultation & Advisory Connect**\n\nCareerNova offers free introductory consultations for software engineering projects, business strategy, and career transitions.\n\n**Direct Contact Reach:**\n- 📞 Phone / WhatsApp: **+91 7007260391**\n- ✉️ Direct Email: **sudheersinghrajput8932@gmail.com**\n- ⏱️ Turnaround: **Within 12–24 hours**\n\nYou can also share your project requirements, target role, or contact info right here in the chat, and Sudhir Singh & the advisory team will follow up directly!`;
  }

  if (lowerQuery.includes('meaning') || lowerQuery.includes('definition') || lowerQuery.includes('dictionary') || lowerQuery.includes('matlab') || lowerQuery.includes('define') || lowerQuery.includes('synonym')) {
    return `I specialize exclusively in CareerNova's ecosystem, core tech services, career guidance, and business solutions.\n\nLet me know how I can help you with our full-stack engineering, financial modeling, iOS development, or other solutions!`;
  }

  if (lowerQuery.includes('resume') || lowerQuery.includes('cv') || lowerQuery.includes('ats')) {
    return `I can help optimize your resume for high ATS scores using Google's XYZ formula (*"Accomplished [X] as measured by [Y], by doing [Z]"*).\n\nPaste your current bullet points or target role, and I will refine them for you directly!`;
  }

  if (lowerQuery.includes('interview') || lowerQuery.includes('star method') || lowerQuery.includes('mock interview')) {
    return `CareerNova's interview coaching uses the **STAR Framework** (Situation, Task, Action, Result):\n\n• **Situation**: Set the technical or business challenge in 1-2 sentences.\n• **Task**: Explicitly state your direct ownership and responsibility.\n• **Action**: Highlight tools, architecture choices, and trade-offs.\n• **Result**: Quantify outcomes (e.g., *latency reduced by 40%*, *saved $35k/year*).\n\nWhat role or question would you like to practice today?`;
  }

  if (lowerQuery.includes('financial') || lowerQuery.includes('valuation') || lowerQuery.includes('dcf') || lowerQuery.includes('model') || lowerQuery.includes('runway')) {
    return `CareerNova provides comprehensive **Financial Modeling & Valuation** services, including discounted cash flow (DCF) models, 3-statement projections, SaaS runway estimations, and investment pitch decks.\n\nWould you like a consultation on structuring your financial model?`;
  }

  if (lowerQuery.includes('ios') || lowerQuery.includes('swift') || lowerQuery.includes('app store') || lowerQuery.includes('mobile')) {
    return `Our **Native iOS Engineering** team crafts high-performance Swift & SwiftUI applications with clean MVVM architecture, CoreData offline sync, and StoreKit in-app purchases.\n\nTell me about your app concept or project scope!`;
  }

  if (lowerQuery.includes('web') || lowerQuery.includes('full-stack') || lowerQuery.includes('react') || lowerQuery.includes('next') || lowerQuery.includes('typescript')) {
    return `CareerNova engineers production-grade **Full-Stack Web Architectures** using React, Next.js, TypeScript, Node.js, and scalable cloud databases.\n\nHow can we assist with your web platform or product development?`;
  }

  return `I am CareerNova AI Assistant, ready to assist with your engineering projects, business strategy, and career trajectory across our 10 Core Expertise disciplines (Full-Stack Dev, iOS Swift, Financial Modeling, BI Data Analytics, CRM/ERP, Cloud APIs, ASO, and SEO).\n\nHow can I help with your project or career goals today?`;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({
      status: "ok",
      hasApiKey: Boolean(process.env.GEMINI_API_KEY),
      timestamp: new Date().toISOString(),
    });
  });

  // 1. Business Idea Generator API
  app.post("/api/ai/business-idea", async (req: Request, res: Response) => {
    try {
      const { industry, interest, targetRegion, budgetRange, experienceLevel } = req.body;
      const prompt = `You are a world-class startup accelerator director and venture builder.
Analyze and generate an innovative, high-potential business concept based on:
- Industry: ${industry || "Technology / SaaS"}
- Interest/Domain: ${interest || "AI Productivity Tools for Remote Teams"}
- Target Region: ${targetRegion || "Global / Digital"}
- Capital Level: ${budgetRange || "Bootstrapped / Low Capital"}
- Founder Experience: ${experienceLevel || "Intermediate"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "ideaName": "Catchy Brandable Name",
  "tagline": "A punchy one-sentence value proposition",
  "problemStatement": "Detailed description of the pressing customer pain point",
  "solutionOverview": "Clear explanation of the innovative solution",
  "targetAudience": [
    { "segment": "Primary Persona", "description": "Demographics and key motivation" },
    { "segment": "Secondary Persona", "description": "Demographics and secondary motivation" }
  ],
  "monetizationStrategies": [
    { "model": "Tiered Subscription", "details": "Pricing tiers and features" },
    { "model": "Enterprise / B2B", "details": "Custom onboarding and licensing" },
    { "model": "Marketplace Commission", "details": "Take-rate or transaction fee" }
  ],
  "executionSteps": [
    { "phase": "Phase 1: Validation (Weeks 1-4)", "tasks": ["Task 1", "Task 2", "Task 3"] },
    { "phase": "Phase 2: MVP Build (Weeks 5-8)", "tasks": ["Task 1", "Task 2", "Task 3"] },
    { "phase": "Phase 3: Beta Launch & Traction (Weeks 9-12)", "tasks": ["Task 1", "Task 2", "Task 3"] },
    { "phase": "Phase 4: Scale & Growth (Months 4-6)", "tasks": ["Task 1", "Task 2"] }
  ],
  "uniqueSellingPoints": ["USP 1", "USP 2", "USP 3"],
  "potentialRisks": [
    { "risk": "Primary Risk", "mitigation": "Strategic mitigation tactic" },
    { "risk": "Secondary Risk", "mitigation": "Strategic mitigation tactic" }
  ],
  "estimatedStartupCost": "$2,500 - $10,000",
  "projectedPaybackPeriod": "4 - 7 months"
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating business idea:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate business idea. Please try again.",
      });
    }
  });

  // 2. Marketing Strategy Generator API
  app.post("/api/ai/marketing-strategy", async (req: Request, res: Response) => {
    try {
      const { productName, productType, targetAudience, budget, primaryGoal, timeline } = req.body;
      const prompt = `You are a Chief Marketing Officer (CMO) for top hypergrowth tech startups.
Create a comprehensive, ROI-focused Marketing Strategy & Roadmap for:
- Product Name: ${productName || "NextGen App"}
- Product Type: ${productType || "B2B SaaS / Productivity Platform"}
- Target Audience: ${targetAudience || "Tech founders, agency leaders, remote managers"}
- Monthly Budget: ${budget || "$2,500/month"}
- Primary Goal: ${primaryGoal || "Customer Acquisition & MRR Growth"}
- Timeline: ${timeline || "90 Days"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "strategySummary": "A concise 2-3 sentence executive summary of the go-to-market marketing angle",
  "positioningStatement": "For [target audience], [Product] is the [category] that [core differentiator] unlike [alternatives].",
  "budgetAllocation": [
    { "channel": "Paid Search & Meta Ads", "percentage": 35, "monthlySpend": "$875", "focus": "High intent keywords & retargeting" },
    { "channel": "Organic SEO & Content Engine", "percentage": 25, "monthlySpend": "$625", "focus": "Thought leadership & technical guides" },
    { "channel": "Influencer & Community Co-Marketing", "percentage": 20, "monthlySpend": "$500", "focus": "Micro-creators & newsletter sponsorships" },
    { "channel": "Lifecycle & Email Automation", "percentage": 10, "monthlySpend": "$250", "focus": "Drip campaigns, churn reduction" },
    { "channel": "Experimental & Viral Loops", "percentage": 10, "monthlySpend": "$250", "focus": "Referral bonuses, interactive free tools" }
  ],
  "roadmap": [
    {
      "period": "Month 1: Foundation & Brand Engine",
      "focus": "Landing page optimization, tracking pixels, initial lead magnet launch",
      "keyActions": ["Install GA4 & Meta Pixel with custom events", "Publish 4 high-intent cornerstone articles", "Launch cold outreach + social proof sequence"]
    },
    {
      "period": "Month 2: Channel Validation & Paid Amplification",
      "focus": "Scale profitable ad creative, activate community partnerships",
      "keyActions": ["A/B test top 3 value propositions on search ads", "Partner with 5 niche micro-influencers", "Implement automated email nurturing sequence"]
    },
    {
      "period": "Month 3: Scale, Retention & Referral Loops",
      "focus": "Double down on best CAC/LTV channels, launch customer referral incentives",
      "keyActions": ["Deploy product-led viral referral loop", "Retarget 60-day engaged website visitors", "Publish customer case study video & ROI calculator"]
    }
  ],
  "keyPerformanceIndicators": [
    { "metric": "Target CAC", "target": "< $45 per customer", "benchmark": "Industry avg: $85" },
    { "metric": "Visitor-to-Trial Conversion", "target": "4.2%", "benchmark": "Industry avg: 2.5%" },
    { "metric": "Monthly Qualified Leads (MQL)", "target": "250+", "benchmark": "Month 1 baseline: 60" },
    { "metric": "Organic Traffic Growth", "target": "+120% QoQ", "benchmark": "3,000 monthly unique visitors" }
  ],
  "quickGrowthHacks": [
    "Growth Hack 1: Launch on Product Hunt and BetaList with specialized founder discount perks.",
    "Growth Hack 2: Create a free standalone mini-tool that ranks for high-intent pain-point queries.",
    "Growth Hack 3: Leverage LinkedIn founder-led storytelling with behind-the-scenes metrics."
  ]
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating marketing strategy:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate marketing strategy.",
      });
    }
  });

  // 3. SWOT Analysis Generator API
  app.post("/api/ai/swot-analysis", async (req: Request, res: Response) => {
    try {
      const { businessName, industry, description, keyCompetitors } = req.body;
      const prompt = `You are a Senior Strategic Management Consultant.
Perform an in-depth, actionable SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats) for:
- Business/Product Name: ${businessName || "My Venture"}
- Industry: ${industry || "E-commerce & SaaS"}
- Brief Description: ${description || "AI-powered inventory and price optimization software"}
- Competitor Landscape: ${keyCompetitors || "Established legacy ERPs and modern niche SaaS"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "businessName": "${businessName || "My Venture"}",
  "executiveSummary": "A concise strategic evaluation summarizing the core competitive posture",
  "strengths": [
    { "title": "Proprietary AI Algorithm", "description": "Predicts inventory shortages with 94% accuracy, outperforming legacy heuristics.", "impact": "High" },
    { "title": "Rapid Deployment & Integration", "description": "Connects with Shopify/WooCommerce in under 5 minutes without engineering overhead.", "impact": "High" },
    { "title": "Lean Cost Structure", "description": "Serverless cloud architecture keeps operational overhead exceptionally low.", "impact": "Medium" },
    { "title": "Superior User Experience", "description": "Minimalist, intuitive UI designed for non-technical store managers.", "impact": "Medium" }
  ],
  "weaknesses": [
    { "title": "Early Brand Recognition", "description": "Low baseline search presence compared to 10-year incumbent competitors.", "impact": "High" },
    { "title": "Limited Native Integrations", "description": "Currently supports only top 4 e-commerce platforms; enterprise legacy connectors pending.", "impact": "Medium" },
    { "title": "Small Support Team", "description": "24/7 global customer support coverage not yet established.", "impact": "Medium" }
  ],
  "opportunities": [
    { "title": "Expanding Cross-Border SMB Market", "description": "Rapid growth of global DTC merchants seeking automated currency & stock hedging.", "impact": "High" },
    { "title": "App Marketplace Distribution", "description": "Listing as a featured partner on Shopify App Store and Salesforce AppExchange.", "impact": "High" },
    { "title": "B2B Wholesaler Vertical", "description": "Adapting the engine for mid-market distributors with high ticket contract sizes.", "impact": "High" }
  ],
  "threats": [
    { "title": "Aggressive Feature Cloning", "description": "Established legacy ERP players integrating similar AI dashboards into bundles.", "impact": "High" },
    { "title": "Platform API Changes", "description": "Shifts in third-party marketplace data access policies and rate limits.", "impact": "Medium" },
    { "title": "Macro Economic Tightening", "description": "SMB merchants reducing software spend during retail downturns.", "impact": "Medium" }
  ],
  "strategicRecommendations": [
    "Leverage UX simplicity to convert SMB users alienated by complex legacy software.",
    "Form strategic co-marketing partnerships with Shopify agencies to accelerate distribution.",
    "Introduce a free audit tool to capture merchant leads and demonstrate immediate ROI."
  ]
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating SWOT analysis:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate SWOT analysis.",
      });
    }
  });

  // 4. Competitor Analysis API
  app.post("/api/ai/competitor-analysis", async (req: Request, res: Response) => {
    try {
      const { myProduct, industry, rivalNames, focusArea } = req.body;
      const prompt = `You are a Competitive Intelligence Analyst.
Create a comprehensive, comparative Competitor Matrix and Benchmarking Report for:
- My Product/Service: ${myProduct || "VentureForge AI"}
- Industry: ${industry || "Business Software & AI Productivity"}
- Competitors to Compare: ${rivalNames || "Competitor A (Legacy Incumbent), Competitor B (Low-cost Alternative)"}
- Key Focus Area: ${focusArea || "Pricing, AI Capabilities, Ease of Use, Speed"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "industryOverview": "Brief synopsis of current market dynamics and competitive rivalry",
  "comparisonMatrix": [
    {
      "name": "${myProduct || "Our Product"}",
      "type": "Our Venture",
      "priceRange": "$29 - $99/mo",
      "coreFeatures": ["Real-time AI Workflows", "1-Click PDF Export", "Interactive Canvas", "Zero-setup Setup"],
      "marketPositioning": "Modern, Agile, AI-First Builder for SMBs & Solo Founders",
      "keyStrengths": "Blazing fast UX, transparent pricing, tailored AI generation",
      "mainWeaknesses": "Brand awareness in early stage",
      "overallScore": 9.4
    },
    {
      "name": "Competitor Alpha (Enterprise Incumbent)",
      "type": "Legacy Leader",
      "priceRange": "$299 - $1,200/mo",
      "coreFeatures": ["Extensive Customization", "Enterprise SSO", "Dedicated Account Rep", "Complex Reporting"],
      "marketPositioning": "Heavyweight Enterprise Solution for Fortune 500",
      "keyStrengths": "Huge brand trust, deep compliance, extensive legacy integrations",
      "mainWeaknesses": "Clunky dated UI, mandatory annual lock-in, slow implementation (weeks)",
      "overallScore": 8.2
    },
    {
      "name": "Competitor Beta (Budget Player)",
      "type": "Budget Alternative",
      "priceRange": "$0 - $19/mo",
      "coreFeatures": ["Basic Templates", "Static Forms", "Community Forum"],
      "marketPositioning": "Ultra low-cost basic utility for casual hobbyists",
      "keyStrengths": "Low barrier to entry, freemium tier",
      "mainWeaknesses": "No intelligent AI automation, poor support, rigid static layouts",
      "overallScore": 6.8
    }
  ],
  "featureComparison": [
    { "feature": "AI-Powered Generation Speed", "ourProduct": "Instant (<2s)", "competitor1": "Slow / Batch", "competitor2": "Manual Templates Only" },
    { "feature": "Interactive Canvas & Live Edits", "ourProduct": "Full Support", "competitor1": "Partial", "competitor2": "None" },
    { "feature": "Setup & Time-to-Value", "ourProduct": "0 Minutes", "competitor1": "14-30 Days", "competitor2": "15 Minutes" },
    { "feature": "Export Options (PDF/Text/Markdown)", "ourProduct": "1-Click Full", "competitor1": "PDF with watermark", "competitor2": "Copy-paste only" },
    { "feature": "Pricing Transparency", "ourProduct": "100% Public", "competitor1": "Contact Sales / Demo Call", "competitor2": "Freemium with heavy upsell" }
  ],
  "moatStrategy": [
    "Position as the fastest, friction-free alternative for nimble founders who hate sales demos.",
    "Offer transparent, pay-as-you-grow pricing with generous pre-loaded value.",
    "Continuously improve AI generation quality with real-time prompt engineering benchmarks."
  ]
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating competitor analysis:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate competitor analysis.",
      });
    }
  });

  // 5. Business Plan Generator API
  app.post("/api/ai/business-plan", async (req: Request, res: Response) => {
    try {
      const { companyName, industry, mission, targetMarket, monetization, initialCapital } = req.body;
      const prompt = `You are a Venture Capital Partner and Startup Mentor.
Generate a structured, professional Business Plan & Financial Model for:
- Company Name: ${companyName || "AeroVenture AI"}
- Industry: ${industry || "B2B SaaS / Logistics Intelligence"}
- Mission & Vision: ${mission || "Empowering supply chain operators with real-time predictive delivery routing"}
- Target Market: ${targetMarket || "Mid-market fleet managers and 3PL fulfillment companies"}
- Monetization Model: ${monetization || "Tiered monthly subscription + usage tier"}
- Initial Seed Capital: ${initialCapital || "$50,000"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "companyName": "${companyName || "AeroVenture AI"}",
  "executiveSummary": "A compelling 3-4 sentence overview of the venture, market opportunity, and vision.",
  "problemSolution": {
    "problem": "Clear articulation of the market inefficiencies and pain point.",
    "solution": "How this product eliminates the pain point and saves 10x time/cost."
  },
  "marketSize": {
    "tam": "$18.4 Billion (Total Addressable Market globally)",
    "sam": "$3.2 Billion (Serviceable Addressable Market in target regions)",
    "som": "$140 Million (Serviceable Obtainable Market in Year 1-3)"
  },
  "revenueModel": [
    { "tier": "Starter Tier", "price": "$99 / month", "target": "Early-stage fleets (1-10 vehicles)", "features": "Core tracking, basic analytics, 2 users" },
    { "tier": "Growth Pro Tier", "price": "$299 / month", "target": "Expanding logistics (10-50 vehicles)", "features": "Predictive AI routing, multi-depot, API access" },
    { "tier": "Enterprise Custom", "price": "$899+ / month", "target": "Large 3PLs (50+ vehicles)", "features": "Custom ERP connector, dedicated SLA, custom models" }
  ],
  "financialProjections": [
    { "year": "Year 1", "revenue": "$120,000", "expenses": "$85,000", "netProfit": "$35,000", "activeCustomers": 45, "growthRate": "Baseline" },
    { "year": "Year 2", "revenue": "$480,000", "expenses": "$240,000", "netProfit": "$240,000", "activeCustomers": 160, "growthRate": "+300%" },
    { "year": "Year 3", "revenue": "$1,450,000", "expenses": "$620,000", "netProfit": "$830,000", "activeCustomers": 420, "growthRate": "+202%" }
  ],
  "goToMarketStrategy": [
    "Direct outbound to fleet operations directors using targeted ROI case studies.",
    "Integration partnerships with top telematics hardware providers.",
    "Inbound content hub focusing on fuel savings calculators and compliance guides."
  ],
  "milestones": [
    { "quarter": "Q1", "goal": "Beta launch with 10 design partners, achieve 90% weekly retention." },
    { "quarter": "Q2", "goal": "Launch self-serve onboarding and hit $15k MRR." },
    { "quarter": "Q3", "goal": "Roll out enterprise predictive engine and expand sales team." },
    { "quarter": "Q4", "goal": "Cross $40k MRR and initiate Seed/Series A funding round." }
  ]
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating business plan:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate business plan.",
      });
    }
  });

  // 6. Social Media Content Ideas API
  app.post("/api/ai/social-content", async (req: Request, res: Response) => {
    try {
      const { niche, platform, audience, goal, tone } = req.body;
      const prompt = `You are a Viral Social Media Strategist and Growth Copywriter.
Create an actionable 7-Day Social Media Content Calendar tailored for:
- Niche/Industry: ${niche || "Entrepreneurship, Startups & Tech"}
- Primary Platform: ${platform || "LinkedIn & Twitter/X"}
- Target Audience: ${audience || "Founders, builders, freelancers, indie hackers"}
- Campaign Goal: ${goal || "Authority Building, Audience Growth & Product Conversions"}
- Brand Tone: ${tone || "Inspiring, Tactical, Data-Backed, Authentic"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "niche": "${niche || "Entrepreneurship"}",
  "weeklyTheme": "High-impact weekly theme summarizing the narrative arc",
  "contentPillars": ["Tactical Frameworks", "Behind The Scenes / Founder Story", "Contrarian Industry Insight", "Social Proof / Case Study"],
  "days": [
    {
      "dayNumber": 1,
      "dayName": "Monday",
      "pillar": "Tactical Framework",
      "hook": "90% of founders waste their first $5k on the wrong tools. Here is the exact lean tech stack we used:",
      "caption": "When launching a product, complexity is your biggest enemy. Instead of paying for 10 disconnected subscriptions, stick to these 3 core pillars:\\n\\n1. A fast, single-purpose landing page\\n2. Direct customer feedback loops\\n3. Automated lead routing\\n\\nWhat is the one tool you could never launch without?",
      "visualPrompt": "Clean infographic comparing a bloated $800/mo stack vs a streamlined $50/mo stack.",
      "callToAction": "Save this post for your next launch blueprint.",
      "hashtags": ["#Startups", "#Entrepreneurship", "#TechStack", "#LeanStartup"],
      "bestPostingTime": "08:30 AM EST"
    },
    {
      "dayNumber": 2,
      "dayName": "Tuesday",
      "pillar": "Contrarian Insight",
      "hook": "Unpopular opinion: You don't need a 30-page business plan in 2026. You need a 30-minute validation test.",
      "caption": "The traditional advice tells you to spend 3 months researching TAM. The modern founder builds a prototype in a weekend and asks 20 target users for real feedback.\\n\\nAction beats speculation every single time.",
      "visualPrompt": "Minimalist high-contrast quote card with bold typography.",
      "callToAction": "Drop an emoji if you agree or share your take in the replies.",
      "hashtags": ["#IndieHacker", "#ProductManagement", "#FounderTips", "#BuildInPublic"],
      "bestPostingTime": "11:15 AM EST"
    },
    {
      "dayNumber": 3,
      "dayName": "Wednesday",
      "pillar": "Case Study / Proof",
      "hook": "How one bootstrapped founder went from $0 to $12,000 MRR in 90 days with zero paid ads:",
      "caption": "Breakdown of the 3 key levers:\\n• Lever 1: Answering every user question inside niche communities\\n• Lever 2: Offering free audits that naturally demonstrated software value\\n• Lever 3: 1-click customer referrals\\n\\nSteal this playbook for your own niche.",
      "visualPrompt": "Step-by-step 3-step carousel diagram.",
      "callToAction": "Comment 'PLAYBOOK' and I will DM you the step-by-step breakdown template.",
      "hashtags": ["#GrowthMarketing", "#SaaSGrowth", "#CaseStudy", "#Entrepreneur"],
      "bestPostingTime": "01:45 PM EST"
    },
    {
      "dayNumber": 4,
      "dayName": "Thursday",
      "pillar": "Behind the Scenes",
      "hook": "What our day actually looks like building AI tools (it's not all glamorous coffee shops):",
      "caption": "7:00 AM: Review user feedback logs\\n9:30 AM: Ship 2 UI improvements\\n1:00 PM: 3 customer discovery calls\\n4:00 PM: Optimize server response times\\n\\nThe secret to momentum is showing up every day consistently.",
      "visualPrompt": "Authentic workspace photo or dual-screen setup snapshot.",
      "callToAction": "What's the main project taking up your focus this week?",
      "hashtags": ["#BuildInPublic", "#StartupLife", "#Productivity", "#DevLife"],
      "bestPostingTime": "09:00 AM EST"
    },
    {
      "dayNumber": 5,
      "dayName": "Friday",
      "pillar": "Tool Recommendation / Curated List",
      "hook": "5 underrated AI tools that will save you 15+ hours of work every week:",
      "caption": "1. VentureForge - Instant business ideas, SWOT, & marketing plans\\n2. Perplexity - Deep real-time web research\\n3. Claude / Gemini - Complex reasoning and code execution\\n4. Descript - Effortless video/audio editing\\n5. Notion AI - Unified team knowledge base\\n\\nWhich one is your favorite?",
      "visualPrompt": "Numbered modern card grid listing the 5 tools with clean icons.",
      "callToAction": "Bookmark this list for your weekend productivity reset.",
      "hashtags": ["#AITools", "#ArtificialIntelligence", "#ProductivityHacks", "#TechTools"],
      "bestPostingTime": "10:30 AM EST"
    },
    {
      "dayNumber": 6,
      "dayName": "Saturday",
      "pillar": "Inspiration / Mindset",
      "hook": "The biggest risk in entrepreneurship isn't failure. It's spending 5 years building something nobody wanted.",
      "caption": "Talk to your customers before you write a single line of code. Validate the pain point first. Everything else flows naturally from there.",
      "visualPrompt": "High-impact typographic visual with moody dark lighting.",
      "callToAction": "Share this with a founder who needs to hear this today.",
      "hashtags": ["#Mindset", "#Motivation", "#Leadership", "#StartupWisdom"],
      "bestPostingTime": "12:00 PM EST"
    },
    {
      "dayNumber": 7,
      "dayName": "Sunday",
      "pillar": "Weekly Reset & Challenge",
      "hook": "Sunday Planning Challenge: What is the ONE needle-moving task you will complete by Friday?",
      "caption": "Don't write a 20-item to-do list that overwhelms you. Pick 1 major milestone that makes everything else easier or unnecessary.\\n\\nDrop your #1 priority below to stay accountable for the week ahead! 🚀",
      "visualPrompt": "Minimalist planner notebook with a single checked box.",
      "callToAction": "Drop your #1 goal in the comments and let's crush it together.",
      "hashtags": ["#SundayReset", "#WeeklyGoals", "#GoalSetting", "#Accountability"],
      "bestPostingTime": "06:00 PM EST"
    }
  ]
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating social content:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate social media content ideas.",
      });
    }
  });

  // 7. AI Resume Assistant & Optimizer API
  app.post("/api/ai/resume-assistant", async (req: Request, res: Response) => {
    try {
      const { targetRole, experienceLevel, currentExperience, keySkills, actionType } = req.body;
      const prompt = `You are an elite Tech Career Coach & ATS Resume Specialist.
Generate an optimized, high-impact resume enhancement package for:
- Target Role: ${targetRole || "Senior Full Stack Engineer"}
- Experience Level: ${experienceLevel || "Mid-Senior"}
- Key Skills: ${keySkills || "React, Node.js, TypeScript, Cloud Architecture, System Design"}
- Draft Notes/Experience: ${currentExperience || "Led frontend team and improved website load time. Built backend microservices."}
- Goal / Action: ${actionType || "Full Optimization & ATS Bullet Generation"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "professionalSummary": "A powerful 3-4 line ATS-optimized executive resume summary targeting the role.",
  "atsScore": 94,
  "topKeywordsIncluded": ["React 19", "Microservices Architecture", "Performance Optimization", "TypeScript", "CI/CD Pipelines", "Cross-functional Leadership"],
  "optimizedBullets": [
    {
      "originalDraft": "Led frontend team and improved website load time.",
      "optimizedBullet": "Architected modular frontend systems using React & Next.js, slashing page load latency by 48% (from 2.4s to 1.2s) and elevating Core Web Vitals across 250k+ monthly active users.",
      "impactType": "Performance & Architecture",
      "powerVerbs": ["Architected", "Slashing", "Elevating"]
    },
    {
      "originalDraft": "Built backend microservices for data processing.",
      "optimizedBullet": "Engineered distributed Node.js/TypeScript microservices with Redis caching, increasing event throughput by 3.2x while cutting AWS container infrastructure costs by 22%.",
      "impactType": "Scalability & Cost Reduction",
      "powerVerbs": ["Engineered", "Increasing", "Cutting"]
    },
    {
      "originalDraft": "Worked with product managers on new feature releases.",
      "optimizedBullet": "Spearheaded bi-weekly agile delivery sprints in tandem with Product & Design, delivering 6 major client-requested capabilities on schedule with 99.8% crash-free sessions.",
      "impactType": "Agile & Delivery",
      "powerVerbs": ["Spearheaded", "Delivering"]
    }
  ],
  "recommendedSkillsToAdd": ["Kubernetes", "GraphQL", "Observability (Datadog)", "A/B Testing"],
  "recruiterAdvice": [
    "Quantify metrics using the X-Y-Z formula: Accomplished [X], as measured by [Y], by doing [Z].",
    "Tailor the first 3 bullet points to exactly mirror the keywords in the target job description."
  ]
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating resume assistant response:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate resume recommendations.",
      });
    }
  });

  // 8. AI Interview Coach & Simulator API
  app.post("/api/ai/interview-coach", async (req: Request, res: Response) => {
    try {
      const { role, seniority, companyType, topicFocus, candidateAnswer, evaluateQuestion } = req.body;
      
      if (candidateAnswer && evaluateQuestion) {
        // Evaluation Mode
        const prompt = `You are a Principal Hiring Manager and Interview Bar Raiser.
Evaluate the candidate's answer for the role of ${role || "Software Engineer"}:
- Interview Question: "${evaluateQuestion}"
- Candidate Answer: "${candidateAnswer}"

Respond strictly with a valid JSON object matching this structure:
{
  "score": 85,
  "verdict": "Strong Hire / Needs Polish",
  "strengths": ["Clear explanation of technical trade-offs", "Good structured delivery"],
  "improvements": ["Needs more concrete metrics (e.g. latency numbers, team size)", "Could emphasize STAR situation more clearly"],
  "idealStarAnswer": "In my previous role at [Company], we faced [Situation]. I was tasked with [Task]. I implemented [Action using technical tools]. As a result, [Result with measurable metric].",
  "followUpQuestion": "How would you handle this if your database replica had a 5-second lag during peak traffic?"
}`;

        const ai = getAi();
        const response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            temperature: 0.7,
          },
        });
        const text = response.text || "{}";
        const parsed = JSON.parse(text);
        return res.json({ success: true, data: parsed });
      }

      // Question Generation Mode
      const prompt = `You are an Executive Hiring Lead at top tech companies.
Generate a tailored interview question bank with STAR framework answers for:
- Role: ${role || "Product Manager"}
- Seniority: ${seniority || "Mid-Level"}
- Company Archetype: ${companyType || "High-Growth Tech Startup / Scaleup"}
- Focus Area: ${topicFocus || "Behavioral & System Design"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "role": "${role || "Product Manager"}",
  "difficulty": "Medium-High",
  "overview": "Key skills tested: Strategic prioritization, analytical rigor, stakeholder management, and resilience under ambiguity.",
  "questions": [
    {
      "id": "q1",
      "category": "Behavioral (Conflict & Leadership)",
      "question": "Tell me about a time you strongly disagreed with an engineering lead or stakeholder on product priority. How did you resolve it?",
      "interviewerExpectation": "Looking for data-driven influence, emotional intelligence, and customer-first alignment without being defensive.",
      "starFramework": {
        "situation": "Our quarterly roadmap had conflicting deadlines between core infra debt vs a revenue-generating enterprise feature.",
        "task": "Align engineering and commercial teams on a unified sprint plan within 48 hours without demoralizing either group.",
        "action": "Ran a joint impact-effort matrix workshop; separated non-negotiable security patches from general refactors and scheduled them in parallel.",
        "result": "Delivered the enterprise feature on time securing $140k ARR while completing 80% of critical infra milestones."
      },
      "tipsToStandOut": "Mention pre-meeting alignment calls with individual stakeholders before the group negotiation."
    },
    {
      "id": "q2",
      "category": "Technical & Problem Solving",
      "question": "Walk me through how you would diagnose a sudden 20% drop in day-1 user retention after a mobile release.",
      "interviewerExpectation": "Systematic root-cause hypothesis generation, cohort segmentation, and telemetry verification.",
      "starFramework": {
        "situation": "Post v2.4 release, day-1 retention fell 18% in the Android app.",
        "task": "Isolate the root cause within 4 hours to decide between emergency rollback or hotfix.",
        "action": "Segmented metrics by OS version, geo-region, and crash rates in Sentry; discovered an auth token validation timeout on 3G connections.",
        "result": "Issued a hotfix within 6 hours, restoring retention to baseline 44% with zero customer churn."
      },
      "tipsToStandOut": "Specify that you verify analytics pipeline integrity first before assuming consumer behavioral changes."
    },
    {
      "id": "q3",
      "category": "Strategic Vision & Prioritization",
      "question": "How do you decide what NOT to build when you have 10 high-value customer feature requests?",
      "interviewerExpectation": "Ability to use frameworks (RICE, Kano) and align with North Star metrics over loud voices.",
      "starFramework": {
        "situation": "3 tier-1 clients requested custom integrations that were outside our core product roadmap.",
        "task": "Maintain customer trust without derailing the long-term scalable platform vision.",
        "action": "Evaluated TAM impact across entire customer base; built public API webhooks enabling clients to build custom connectors themselves.",
        "result": "Retained all 3 clients while launching an open developer platform that onboarded 40+ partners."
      },
      "tipsToStandOut": "Frame 'saying no' as protecting the team's ability to deliver world-class execution on the core promise."
    }
  ]
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating interview coach response:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate interview coaching module.",
      });
    }
  });

  // 9. AI Cold Email & Pitch Writer API
  app.post("/api/ai/email-writer", async (req: Request, res: Response) => {
    try {
      const { purpose, recipientRole, senderBackground, valueOffer, tone } = req.body;
      const prompt = `You are a High-Conversion Copywriter and Cold Outreach Specialist.
Write 3 distinct, high-converting outreach email variations for:
- Purpose: ${purpose || "Job Application / Cold Outreach to Hiring Manager"}
- Recipient: ${recipientRole || "VP of Engineering at Tech Startup"}
- Sender Profile: ${senderBackground || "Full Stack Developer with 4 years experience in Next.js, Node.js"}
- Core Value/Offer: ${valueOffer || "Can help optimize frontend load times and ship features 2x faster with clean TypeScript code"}
- Tone: ${tone || "Professional, Confident, Direct (No Fluff)"}

Respond strictly with a valid JSON object matching this exact structure:
{
  "purpose": "${purpose || "Outreach"}",
  "variations": [
    {
      "name": "Variation 1: The 'Direct Value & Metrics' Hook",
      "subjectLine": "Quick idea on improving [Company] load times + portfolio",
      "body": "Hi [Name],\\n\\nI noticed [Company] recently launched your new dashboard—huge congratulations on the rollout!\\n\\nI’m a full-stack engineer who specializes in React and high-throughput Node.js microservices. In my last role, I cut our main application latency by 45% while managing 250k daily active users.\\n\\nI took a quick look at your current open engineering role. I'd love to share 2 specific ideas on how I could help [Company] accelerate your Q3 feature roadmap without tech debt.\\n\\nDo you have 5 minutes for a brief chat this Thursday?\\n\\nBest,\\n[My Name]\\n[LinkedIn / Portfolio Link]",
      "whyItWorks": "Starts with genuine observation, proves competence with real metric, ends with low-friction 5-minute ask.",
      "bestFor": "Direct outreach to engineering leaders & hiring managers"
    },
    {
      "name": "Variation 2: The 'Problem Solver / Free Audit' Angle",
      "subjectLine": "Noticed a quick fix on [Company] checkout flow",
      "body": "Hi [Name],\\n\\nBig fan of what you're building at [Company].\\n\\nWhile exploring your product yesterday, I noticed a small optimization opportunity on the mobile onboarding flow that might be costing you 5-10% in mobile signups.\\n\\nI recorded a 90-second Loom showing the fix + code snippet: [Loom Link].\\n\\nNo strings attached—just thought this might be useful for your team. Would love to connect if you're ever looking for high-velocity engineers.\\n\\nCheers,\\n[My Name]",
      "whyItWorks": "Delivers undeniable value upfront before asking for anything in return.",
      "bestFor": "Standing out from 500+ generic applicant inboxes"
    },
    {
      "name": "Variation 3: The 'Concise Executive Summary'",
      "subjectLine": "Full Stack Engineer (ex-[Past Company]) for [Company]",
      "body": "Hi [Name],\\n\\nShort and sweet: I’m an engineer with 4+ years scaling web applications in TypeScript and cloud systems.\\n\\nKey highlights:\\n• Scaled backend from 10k to 250k MAU with 99.9% uptime\\n• Built 12 production web apps shipped on time\\n• Strong product instincts & autonomous execution\\n\\nAre you free for a 10-minute intro call sometime this week?\\n\\nBest regards,\\n[My Name]",
      "whyItWorks": "Scannable bullet points for busy executives who read email on mobile.",
      "bestFor": "Founders, CTOs, and busy hiring managers"
    }
  ],
  "followUpTemplate": {
    "timing": "Send 3-4 days after initial email",
    "subjectLine": "Re: [Original Subject]",
    "body": "Hi [Name],\\n\\nJust bumping this to the top of your inbox in case it got buried under your sprint planning.\\n\\nStill eager to learn if [Company] is looking for engineers who can hit the ground running on day one.\\n\\nBest,\\n[My Name]"
  }
}`;

      const ai = getAi();
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Error generating cold email response:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate email templates.",
      });
    }
  });

  // 10. AI Assistant Chatbot & Autonomous Multi-Domain Expert AI Brain
  app.post("/api/ai/assistant-chat", async (req: Request, res: Response) => {
    try {
      const { message, history } = req.body;
      const userMessage = (message || "").trim();

      if (!userMessage) {
        return res.status(400).json({
          success: false,
          error: "Message is required.",
        });
      }

      const systemInstruction = `You are CareerNova AI Assistant, an elite, highly articulate AI Advisor and Technical Consultant specializing exclusively in the CareerNova ecosystem, its 10 Core Expertise services, and business & career solutions.

PRIMARY DIRECTIVES:
1. PURE CAREERNOVA KNOWLEDGE BASE & EXPERTISE:
   - Focus 100% on CareerNova's offerings, career mentoring, and the 10 Core Expertise pillars:
     1. 📊 Financial Modeling & Valuation (DCF, LTV/CAC, unit economics, startup pitch decks, breakeven math)
     2. 📈 Business Intelligence & Predictive Analytics (Power BI, Tableau, SQL pipelines, KPI dashboards)
     3. 🔄 Enterprise CRM & ERP Systems (Salesforce, HubSpot, SAP integration, workflow automation)
     4. 🎯 Strategic IT & Agile Project Management (Scrum/Kanban, sprint roadmapping, Jira, risk mitigation)
     5. 🌐 Full-Stack Web Architecture (React, Next.js, Node.js, TypeScript, Tailwind CSS, high-scale web apps)
     6. ⚡ Custom WordPress & Headless CMS Engineering (High-speed custom themes, WooCommerce, security hardening)
     7. 📱 Native iOS Swift & SwiftUI Engineering (Clean architecture, CoreData, StoreKit, TestFlight deployments)
     8. ☁️ Microservices, APIs & Cloud Scalability (REST/GraphQL, Docker, Kubernetes, AWS/GCP serverless)
     9. 🚀 App Store Optimization (ASO) & Growth (Keyword ranking, conversion optimization, screenshot A/B testing)
     10. 🔍 Advanced SEO, Performance & Digital Discovery (Technical SEO, Core Web Vitals, schema markup, organic traffic growth)

2. GUIDING STUDENTS, JOB SEEKERS & ENTREPRENEURS:
   - Students & Job Seekers: Provide sharp ATS resume advice (Google XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]"), tech interview prep (STAR method), portfolio strategies, and career roadmap guidance.
   - Entrepreneurs & Founders: Provide architecture consulting, MVP scoping, unit economics analysis, and tech stack recommendations.

3. STRICT IN-CHAT INTERACTION & LEAD CAPTURE:
   - Answer all questions directly, concisely, and helpfully inside this chat window.
   - If the user provides contact information (email, phone, name) or requests a consultation / service inquiry:
     • Confirm warmly that their request and details have been logged for review by Sudhir Singh and the advisory team.
     • Provide direct reach details:
       - 📞 Phone / WhatsApp: +91 7007260391
       - ✉️ Direct Email: sudheersinghrajput8932@gmail.com
       - ⏱️ Turnaround: Free consultation callback / email within 12–24 hours.

4. NO DICTIONARY OR GENERAL GRAMMAR LOOKUPS:
   - Do NOT provide dictionary definitions, vocabulary lists, phonetics, or grammar testing.
   - If a user asks for a dictionary word meaning, translation, or general vocabulary definition, politely and warmly inform them:
     "I specialize exclusively in CareerNova's ecosystem, core tech services, career guidance, and business solutions. Let me know how I can help you with our full-stack engineering, financial modeling, iOS development, or other solutions!"

5. TONE & FORMATTING:
   - Professional, intelligent, confident, crisp, and welcoming.
   - Use clean Markdown with bold accents and concise bullet points. Never spam feature lists or hardcoded menus.`;

      const ai = getAi();
      if (!ai) {
        // Safe and intelligent fallback when GEMINI_API_KEY is not yet populated
        const fallbackReply = generateAssistantFallbackReply(userMessage);
        return res.json({ success: true, reply: fallbackReply });
      }

      // Build structured contents with conversation history if available
      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history) && history.length > 0) {
        // Take up to last 8 turns for context
        const recentHistory = history.slice(-8);
        for (const item of recentHistory) {
          if (item.sender === 'user' && typeof item.text === 'string' && item.text.trim()) {
            contents.push({ role: 'user', parts: [{ text: item.text.trim() }] });
          } else if (item.sender === 'bot' && typeof item.text === 'string' && item.text.trim()) {
            contents.push({ role: 'model', parts: [{ text: item.text.trim() }] });
          }
        }
      }

      // Add current user message
      contents.push({ role: 'user', parts: [{ text: userMessage }] });

      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        const replyText = response.text || generateAssistantFallbackReply(userMessage);
        return res.json({ success: true, reply: replyText });
      } catch (geminiError: any) {
        console.warn("Gemini generation notice (falling back gracefully):", geminiError?.message || geminiError);
        const fallbackReply = generateAssistantFallbackReply(userMessage);
        return res.json({ success: true, reply: fallbackReply });
      }
    } catch (error: any) {
      console.error("Error in AI assistant chat:", error);
      const fallbackReply = generateAssistantFallbackReply(req.body?.message || "");
      res.json({
        success: true,
        reply: fallbackReply,
      });
    }
  });

  // 11. Contact Inquiries Endpoint (Universal handler)
  app.post(["/api/contact", "/api/contact/submit"], (req: Request, res: Response) => {
    const { name, email, subject, message, phone, projectType } = req.body;
    const inquiryId = "INQ-" + Math.floor(100000 + Math.random() * 900000);
    const timestamp = new Date().toISOString();

    console.log(`[Contact Submission] ID: ${inquiryId}, Name: ${name}, Email: ${email}, Subject: ${subject || projectType}`);

    res.json({
      success: true,
      inquiryId,
      timestamp,
      message: "Thank you! Your inquiry has been routed to Sudhir Singh directly. You will receive a response within 12-24 hours.",
    });
  });

  // Vite middleware for development & production SSR meta injection
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
    app.use("*", async (req: Request, res: Response, next) => {
      const url = req.originalUrl || req.url;
      // Skip API routes if any somehow fell through
      if (url.startsWith("/api")) {
        return next();
      }
      try {
        const templatePath = path.resolve(process.cwd(), "index.html");
        let template = fs.readFileSync(templatePath, "utf-8");
        template = injectMetaTags(template, url);
        const html = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));
    app.get("*", (req: Request, res: Response) => {
      try {
        const indexPath = path.join(distPath, "index.html");
        if (fs.existsSync(indexPath)) {
          const rawHtml = fs.readFileSync(indexPath, "utf-8");
          const injectedHtml = injectMetaTags(rawHtml, req.originalUrl || req.path);
          res.setHeader("Content-Type", "text/html; charset=utf-8").send(injectedHtml);
        } else {
          res.sendFile(indexPath);
        }
      } catch (err) {
        res.sendFile(path.join(distPath, "index.html"));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Entrepreneur AI Toolkit Server running on http://localhost:${PORT}`);
  });
}

startServer();

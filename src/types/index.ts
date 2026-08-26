export type TabId =
  | 'home'
  | 'services'
  | 'tools'
  | 'career'
  | 'business'
  | 'ai-hub'
  | 'resources'
  | 'blog'
  | 'about'
  | 'contact'
  | 'pricing'
  | 'expertise'
  | '404';

export type SubToolId =
  | 'business-idea'
  | 'business-plan'
  | 'marketing-strategy'
  | 'swot-analysis'
  | 'competitor-analysis'
  | 'marketing-tools'
  | 'social-content'
  | 'resume-builder'
  | 'interview-coach'
  | 'email-writer'
  | 'emi-calculator'
  | 'salary-calculator'
  | 'breakeven-calculator';

export interface TabConfig {
  id: TabId;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  badge?: string;
  category?: 'Core Navigation' | 'Solutions & Growth' | 'Knowledge & Traffic' | 'Trust & Direct Connect';
}

export interface BlogCTA {
  title: string;
  badge?: string;
  price: string;
  buttonText: string;
  serviceCategory: 'career' | 'business' | 'marketing' | 'ai';
  whatsappMessage: string;
  targetServiceId?: string;
}

// Blog Post Interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Career' | 'Business' | 'Marketing' | 'AI' | 'Finance' | 'Technology';
  excerpt: string;
  readTime: string;
  author: string;
  date: string;
  featured?: boolean;
  coverGradient: string;
  coverImage?: string;
  tags: string[];
  cta?: BlogCTA;
  content: {
    intro: string;
    sections: Array<{
      heading: string;
      body: string[];
      keyTakeaways?: string[];
      actionStep?: string;
    }>;
    conclusion: string;
  };
}

// Resource Guide & Template Interface
export interface ResourceItem {
  id: string;
  title: string;
  category: 'Career Guides' | 'Business Guides' | 'Marketing Guides' | 'Finance Basics' | 'Templates' | 'Checklists';
  description: string;
  format: 'Interactive Guide' | 'Checklist' | 'Template' | 'Cheat Sheet' | 'Framework';
  tags: string[];
  downloadable?: boolean;
  badge?: string;
  contentSnippet: string[];
  fullDetails?: string[];
}

// Career Roadmap Interface
export interface CareerRoadmap {
  id: string;
  title: string;
  role: string;
  avgSalaryIndia: string;
  avgSalaryGlobal: string;
  timeline: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  phases: Array<{
    phaseName: string;
    duration: string;
    skillsToLearn: string[];
    recommendedTools: string[];
    milestoneProject: string;
  }>;
  certificationsRecommended: string[];
  interviewFocusAreas: string[];
}

// Saved User Items (LocalStorage / State Sync)
export interface SavedItem {
  id: string;
  type: 'resume' | 'business-plan' | 'swot' | 'idea' | 'marketing' | 'social' | 'note';
  title: string;
  date: string;
  summary: string;
  data: any;
}

export interface UserProfile {
  name: string;
  email: string;
  plan: 'Free' | 'Pro' | 'Business';
  savedItemsCount: number;
  joinDate: string;
}

// 1. Business Idea
export interface BusinessIdeaResult {
  ideaName: string;
  tagline: string;
  problemStatement: string;
  solutionOverview: string;
  targetAudience: Array<{
    segment: string;
    description: string;
  }>;
  monetizationStrategies: Array<{
    model: string;
    details: string;
  }>;
  executionSteps: Array<{
    phase: string;
    tasks: string[];
  }>;
  uniqueSellingPoints: string[];
  potentialRisks: Array<{
    risk: string;
    mitigation: string;
  }>;
  estimatedStartupCost?: string;
  projectedPaybackPeriod?: string;
}

// 2. Marketing Strategy
export interface MarketingBudgetAllocation {
  channel: string;
  percentage: number;
  monthlySpend: string;
  focus: string;
}

export interface MarketingRoadmapPhase {
  period: string;
  focus: string;
  keyActions: string[];
}

export interface MarketingKPI {
  metric: string;
  target: string;
  benchmark: string;
}

export interface MarketingStrategyResult {
  strategySummary: string;
  positioningStatement: string;
  budgetAllocation: MarketingBudgetAllocation[];
  roadmap: MarketingRoadmapPhase[];
  keyPerformanceIndicators: MarketingKPI[];
  quickGrowthHacks: string[];
}

// 3. SWOT Analysis
export interface SwotItem {
  id: string;
  title: string;
  description: string;
  impact?: 'High' | 'Medium' | 'Low';
}

export interface SwotAnalysisResult {
  businessName: string;
  executiveSummary: string;
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
  strategicRecommendations: string[];
}

// 4. Competitor Analysis
export interface CompetitorProfile {
  id: string;
  name: string;
  type: string;
  priceRange: string;
  coreFeatures: string[];
  marketPositioning: string;
  keyStrengths: string;
  mainWeaknesses: string;
  overallScore: number;
}

export interface FeatureComparisonRow {
  feature: string;
  ourProduct: string;
  competitor1: string;
  competitor2: string;
}

export interface CompetitorAnalysisResult {
  industryOverview: string;
  comparisonMatrix: CompetitorProfile[];
  featureComparison: FeatureComparisonRow[];
  moatStrategy: string[];
}

// 5. Business Plan
export interface RevenueTier {
  tier: string;
  price: string;
  target: string;
  features: string;
}

export interface FinancialProjectionYear {
  year: string;
  revenue: string;
  expenses: string;
  netProfit: string;
  activeCustomers: number;
  growthRate: string;
}

export interface BusinessPlanResult {
  companyName: string;
  executiveSummary: string;
  problemSolution: {
    problem: string;
    solution: string;
  };
  marketSize: {
    tam: string;
    sam: string;
    som: string;
  };
  revenueModel: RevenueTier[];
  financialProjections: FinancialProjectionYear[];
  goToMarketStrategy: string[];
  milestones: Array<{
    quarter: string;
    goal: string;
  }>;
}

// 6. Marketing Tools Directory
export type ToolCategory =
  | 'All'
  | 'SEO'
  | 'Analytics'
  | 'Ads & PPC'
  | 'Automation'
  | 'CRM & Sales'
  | 'Social & Video'
  | 'Email Marketing'
  | 'AI & Content'
  | string;

export interface MarketingTool {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  category: string;
  rating: number;
  reviewCount?: number;
  pricing?: 'Free' | 'Freemium' | 'Paid' | 'Free Trial';
  pricingModel?: string;
  startingPrice: string;
  bestFor: string;
  keyFeatures: string[];
  pros?: string[];
  cons?: string[];
  url?: string;
  websiteUrl?: string;
  badge?: string;
  logoIcon?: string;
  difficulty?: string;
}

// 7. Social Media Content
export interface SocialContentDay {
  dayNumber?: number;
  dayName?: string;
  day?: string;
  pillar?: string;
  theme?: string;
  format?: string;
  hook?: string;
  caption?: string;
  visualPrompt?: string;
  callToAction?: string;
  hashtags?: string[];
  bestPostingTime?: string;
  objective?: string;
}

export interface ViralHook {
  type: string;
  hook: string;
  explanation: string;
}

export interface ContentDraft {
  id: string;
  platform: string;
  format: string;
  fullPost: string;
  callToAction: string;
  hashtags: string[];
}

export interface SocialContentResult {
  niche?: string;
  weeklyTheme?: string;
  contentPillars?: string[];
  days?: SocialContentDay[];
  viralHooks: ViralHook[];
  weeklySchedule: Array<{
    day: string;
    theme: string;
    format: string;
    objective: string;
  }>;
  contentDrafts: ContentDraft[];
  engagementTips: string[];
}

// 8. Contact & Support
export interface ContactInquiry {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  projectType?: string;
  message: string;
  serviceInterest?: string;
}

export type ContactSubmission = ContactInquiry;

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  description?: string;
}

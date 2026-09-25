import React, { useState, useEffect, useCallback } from 'react';
import { TabId, ToastMessage, UserProfile } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { AIAssistantWidget } from './components/common/AIAssistantWidget';
import { SocialProofToast } from './components/common/SocialProofToast';
import { ToastContainer } from './components/common/Toast';
import { CreatorModal } from './components/common/CreatorModal';
import { AuthModal } from './components/auth/AuthModal';
import { CursorSpotlight } from './components/common/CursorSpotlight';
import { 
  parseRouteFromLocation, 
  getRouteUrl, 
  updateDocumentMetadata 
} from './utils/seoAndRouting';

// Dedicated Views
import HomeView from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { ToolsView } from './components/views/ToolsView';
import { CareerView } from './components/views/CareerView';
import { BusinessView } from './components/views/BusinessView';
import { AiHubView } from './components/views/AiHubView';
import { ResourcesView } from './components/views/ResourcesView';
import { BlogView } from './components/views/BlogView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { PricingView } from './components/views/PricingView';
import { NotFoundView } from './components/views/NotFoundView';
import LegalPoliciesView from './components/views/LegalPoliciesView';

/* =========================================================
   GLOBAL SOCIAL / CONTACT RAIL
   Rendered once at App level so it appears on every route.
========================================================= */

const CareerNovaSocialRail = () => {
  const whatsappMessage = encodeURIComponent(
    'Hi Sudhir! I would like to discuss a CareerNova consultation.'
  );

  return (
    <>
      <style>{`
        .cn-global-social-rail {
          position: fixed;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 9px;
          border-radius: 18px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(111,87,220,.16);
          box-shadow: 0 18px 45px rgba(38,42,82,.14);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .cn-global-social-link {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #fff;
          box-shadow: 0 9px 20px rgba(35,42,78,.14);
          transition: transform .22s ease, filter .22s ease;
        }

        .cn-global-social-link:hover {
          transform: translateX(4px) scale(1.06);
          filter: brightness(1.05);
        }

        .cn-global-social-link:focus-visible {
          outline: 3px solid rgba(99,102,241,.35);
          outline-offset: 3px;
        }

        .cn-global-social-link svg {
          width: 21px;
          height: 21px;
          fill: currentColor;
        }

        .cn-global-social-link.whatsapp { background: #25d366; }
        .cn-global-social-link.email { background: linear-gradient(145deg,#6366f1,#8b5cf6); }
        .cn-global-social-link.phone { background: linear-gradient(145deg,#0ea5e9,#2563eb); }
        .cn-global-social-link.linkedin { background: #0a66c2; }
        .cn-global-social-link.instagram { background: linear-gradient(145deg,#833ab4,#fd1d1d 58%,#fcb045); }

        @media (max-width: 780px) {
          .cn-global-social-rail {
            left: 8px;
            padding: 6px;
            gap: 6px;
            border-radius: 15px;
          }

          .cn-global-social-link {
            width: 35px;
            height: 35px;
            border-radius: 10px;
          }

          .cn-global-social-link svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>

      <aside className="cn-global-social-rail" aria-label="CareerNova contact and social links">
        <a
          href={`https://wa.me/917007260391?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="cn-global-social-link whatsapp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 3.5A11.7 11.7 0 0 0 12.15.05C5.7.05.45 5.3.45 11.75c0 2.06.54 4.08 1.56 5.84L.35 23.95l6.51-1.62a11.7 11.7 0 0 0 5.28 1.26h.01c6.45 0 11.7-5.25 11.7-11.7 0-3.13-1.22-6.07-3.35-8.39ZM12.15 21.55h-.01a9.7 9.7 0 0 1-4.94-1.35l-.35-.2-3.86.96 1.03-3.76-.23-.38a9.68 9.68 0 0 1-1.49-5.07c0-5.35 4.35-9.7 9.7-9.7 2.59 0 5.03 1.01 6.86 2.84a9.64 9.64 0 0 1 2.84 6.87c0 5.34-4.35 9.69-9.7 9.69Zm5.32-7.26c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.58-.89-2.17-.23-.57-.47-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 0.98-1 2.39s1.02 2.77 1.16 2.96c.15.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" />
          </svg>
        </a>

        <a
          href="mailto:sudheersinghrajput8932@gmail.com"
          aria-label="Email"
          title="Email"
          className="cn-global-social-link email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Zm0 2.15v.1l8.5 5.43 8.5-5.43v-.1h-17Zm17 1.89-7.98 5.1a1 1 0 0 1-1.04 0L3.5 9.54V17h17V9.54Z" />
          </svg>
        </a>

        <a
          href="tel:+917007260391"
          aria-label="Phone"
          title="Call CareerNova"
          className="cn-global-social-link phone"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 2.5h2.1c.45 0 .84.3.96.74l.91 3.37c.1.37-.02.76-.3 1.02L8.95 8.97a15.7 15.7 0 0 0 6.08 6.08l1.34-1.34c.26-.26.65-.38 1.02-.28l3.37.9c.44.12.74.52.74.97v2.08c0 .64-.52 1.16-1.16 1.16C11.45 18.54 5.46 12.55 4.46 3.66 4.39 3.03 4.88 2.5 5.51 2.5h1.11Z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/sudhir-singh-rajput-2a894128a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="cn-global-social-link linkedin"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.12 3.5A2.12 2.12 0 1 1 5.1 7.74 2.12 2.12 0 0 1 5.12 3.5ZM3.25 8.9h3.75V21H3.25V8.9Zm5.95 0h3.6v1.65h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.73V21h-3.75v-5.92c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.53-2.27 3.12V21H9.2V8.9Z" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/thakur_sudhir_singh_rajput"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="cn-global-social-link instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.5" cy="6.7" r="1.2" fill="currentColor" />
          </svg>
        </a>
      </aside>
    </>
  );
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabId>(() => {
    return parseRouteFromLocation().tab;
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [creatorModalOpen, setCreatorModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('careernova_user');
    return saved ? JSON.parse(saved) : null;
  });

  const addToast = useCallback((title: string, description?: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, title, description, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleNavigate = useCallback((tab: TabId, subTool?: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newUrl = getRouteUrl(tab, subTool);
    window.history.pushState({ tab, subTool }, '', newUrl);
    updateDocumentMetadata(tab, subTool);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const route = parseRouteFromLocation();
      setCurrentTab(route.tab);
      updateDocumentMetadata(route.tab, route.subTool);
    };

    window.addEventListener('popstate', handlePopState);

    // Read the actual URL on every route change so SEO metadata also works
    // for direct visits and URLs containing ?tool=... or a sub-tool segment.
    const route = parseRouteFromLocation();
    updateDocumentMetadata(route.tab, route.subTool);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentTab]);

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    setUserProfile(null);
    localStorage.removeItem('careernova_user');
    addToast('Logged out successfully', 'You have been signed out of your account.', 'info');
  };

  const renderCurrentView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} onOpenAuth={() => handleOpenAuth('signin')} />;
      case 'services':
        return <ServicesView onNavigate={handleNavigate} addToast={addToast} />;
      case 'tools':
        return <ToolsView addToast={addToast} />;
      case 'career':
        return <CareerView addToast={addToast} />;
      case 'business':
        return <BusinessView addToast={addToast} />;
      case 'ai-hub':
        return <AiHubView addToast={addToast} />;
      case 'resources':
        return <ResourcesView addToast={addToast} />;
      case 'blog':
        return <BlogView onNavigate={handleNavigate} />;
      case 'about':
        return <AboutView onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactView onNotify={(type, title, desc) => addToast(title, desc, type)} />;
      case 'pricing':
        return <PricingView onNavigate={handleNavigate} onOpenAuth={() => handleOpenAuth('signup')} />;
      case 'privacy':
      case 'terms':
      case 'disclaimer':
      case 'refund':
      case 'cookies':
        return <LegalPoliciesView policy={currentTab} onNavigate={handleNavigate} />;
      case '404':
        return <NotFoundView onNavigate={handleNavigate} />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-indigo-600/15 selection:text-indigo-800 relative overflow-x-hidden">
      
      {/* Global Interactive Cursor Spotlight & Glowing Blue Movable Aura */}
      <CursorSpotlight />

      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <Header 
        currentTab={currentTab} 
        onNavigate={handleNavigate} 
        userProfile={userProfile}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        onOpenCreator={() => setCreatorModalOpen(true)}
      />

      {/* Global social/contact rail — visible on every route */}
      <CareerNovaSocialRail />

      {/* Main Content View with Semantic ID for Crawlers */}
      <main id="main-content" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Widgets & Notifications */}
      <AIAssistantWidget addToast={addToast} />
      <SocialProofToast />
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Modals */}
      <CreatorModal 
        isOpen={creatorModalOpen} 
        onClose={() => setCreatorModalOpen(false)} 
      />
      <AuthModal 
        isOpen={authModalOpen}
        mode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(profile) => {
          setUserProfile(profile);
          localStorage.setItem('careernova_user', JSON.stringify(profile));
          addToast(authMode === 'signin' ? 'Welcome back!' : 'Account created!', `Signed in as ${profile.name}`, 'success');
        }}
      />
    </div>
  );
}

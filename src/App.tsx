import React, { useState, useEffect, useCallback } from 'react';
import { TabId, ToastMessage, UserProfile } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingWidgets } from './components/common/FloatingWidgets';
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
import { SpecialistsExpertiseView } from './components/views/SpecialistsExpertiseView';
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

  const handleNavigate = useCallback((tab: TabId) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newUrl = getRouteUrl(tab);
    window.history.pushState({ tab }, '', newUrl);
    updateDocumentMetadata(tab);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const route = parseRouteFromLocation();
      setCurrentTab(route.tab);
      updateDocumentMetadata(route.tab);
    };

    window.addEventListener('popstate', handlePopState);
    updateDocumentMetadata(currentTab);

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
      case 'expertise':
        return <SpecialistsExpertiseView onNavigate={handleNavigate} addToast={addToast} />;
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

      {/* Main Content View */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Widgets & Notifications */}
      <FloatingWidgets onOpenCreator={() => setCreatorModalOpen(true)} />
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

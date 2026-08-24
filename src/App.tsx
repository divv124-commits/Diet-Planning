import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Toast } from './components/Toast';
import { ConsultationModal } from './components/ConsultationModal';
import { initAuth } from './services/authService';
import { notifySiteVisitor } from './services/emailService';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NutritionPage } from './pages/NutritionPage';
import { FitnessPage } from './pages/FitnessPage';
import { HabitsPage } from './pages/HabitsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { PodcastPage } from './pages/PodcastPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);

  // Initialize Auth & Workspace Token Listener
  useEffect(() => {
    const unsub = initAuth(
      (user, token) => {
        if (token) {
          console.log('Gmail OAuth token active for notifications.');
        }
      },
      () => {
        // User not logged in
      }
    );
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  // Track Site Visit Once Per Session
  useEffect(() => {
    try {
      const hasVisited = sessionStorage.getItem('nm_session_visit_notified');
      if (!hasVisited) {
        sessionStorage.setItem('nm_session_visit_notified', 'true');
        notifySiteVisitor({
          pageUrl: window.location.href,
          referrer: document.referrer || 'Direct Visit',
          userAgent: navigator.userAgent,
          screenSize: `${window.screen.width}x${window.screen.height}`,
          timestamp: new Date().toLocaleString()
        }).catch((err) => {
          console.log('Visitor session logged locally:', err);
        });
      }
    } catch (e) {
      // Storage unavailable fallback
    }
  }, []);

  // Sync with browser URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash && ['home', 'about', 'nutrition', 'fitness', 'habits', 'services', 'resources', 'blog', 'podcast', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* GLOBAL PERSISTENT DISCLAIMER BANNER */}
      <DisclaimerBanner />

      {/* TOP NAVIGATION BAR */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* MAIN VIEW ROUTING */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'nutrition' && (
          <NutritionPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'fitness' && (
          <FitnessPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'habits' && (
          <HabitsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            selectedPostSlug={selectedPostSlug}
            onSelectPost={setSelectedPostSlug}
          />
        )}

        {currentPage === 'podcast' && (
          <PodcastPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onShowToast={showToast}
      />

      {/* INTAKE / CONSULTATION APPLICATION MODAL */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onShowToast={showToast}
      />

      {/* TOAST FEEDBACK NOTIFICATION */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}

export default App;

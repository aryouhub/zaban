import { useState, useEffect, ReactNode } from 'react';
import Icon from './Icon';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

type Page = 'home' | 'flashcard' | 'quiz' | 'wordlist' | 'dashboard';

interface LayoutProps {
  children: ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Desktop Sidebar */}
      {isDesktop && (
        <Sidebar
          currentPage={currentPage}
          onNavigate={onNavigate}
          isOpen={true}
          onClose={() => {}}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      {!isDesktop && (
        <Sidebar
          currentPage={currentPage}
          onNavigate={onNavigate}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`${isDesktop ? 'mr-64' : ''} pb-20 lg:pb-0`}>
        {/* Mobile Header */}
        {!isDesktop && (
          <header className="sticky top-0 z-20 glass-strong border-b border-white/10">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Icon name="menu" size={20} />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Icon name="graduation" size={16} className="text-white" />
                </div>
                <h1 className="font-bold text-sm">آموزش لغات</h1>
              </div>
              <div className="w-10" /> {/* Spacer for centering */}
            </div>
          </header>
        )}

        {/* Page Content */}
        <main className="animate-fade-in">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav currentPage={currentPage} onNavigate={onNavigate} />
    </div>
  );
}

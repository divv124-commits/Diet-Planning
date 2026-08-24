import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ChevronDown, Sparkles, BookOpen, Mic, HelpCircle, FileText, Info, Dumbbell, Apple } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const primaryNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'habits', label: 'Habit Lab' },
    { id: 'services', label: 'Coaching' },
  ];

  const secondaryNavItems: { id: PageId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'about', label: 'About & Credentials', icon: Info },
    { id: 'resources', label: 'Printable Toolkits', icon: FileText },
    { id: 'blog', label: 'Research Journal', icon: BookOpen },
    { id: 'podcast', label: 'Podcast & Media', icon: Mic },
    { id: 'contact', label: 'Contact Desk', icon: HelpCircle },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          
          {/* ZONE 1: BRAND TITLE */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNav('home')}
              className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-600 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                NM
              </div>
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 uppercase whitespace-nowrap">
                NOURISH<span className="text-emerald-600">&</span>MOVE
              </span>
            </button>
          </div>

          {/* ZONE 2: NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Dropdown for secondary pages */}
            <div className="relative ml-1">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-3.5 py-2 rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  secondaryNavItems.some((n) => n.id === currentPage)
                    ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>Library</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
              </button>

              {moreDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setMoreDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-30 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                      Knowledge & Media
                    </div>
                    {secondaryNavItems.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = currentPage === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNav(item.id)}
                          className={`w-full px-3.5 py-2.5 text-left text-xs font-medium flex items-center gap-3 transition-colors cursor-pointer ${
                            isItemActive
                              ? 'bg-emerald-50 text-emerald-800 font-bold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-emerald-600" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* ZONE 3: ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4.5 py-2 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0 hover:shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for Coaching</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            {primaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3.5 py-2.5 text-left text-xs font-semibold rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
            {secondaryNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 text-left text-xs font-medium rounded-lg transition-colors flex items-center gap-2.5 ${
                    currentPage === item.id
                      ? 'bg-emerald-50 text-emerald-700 font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-center text-xs font-bold shadow-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply for Coaching Program</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

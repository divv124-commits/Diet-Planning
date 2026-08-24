import React, { useState } from 'react';
import { PageId } from '../types';
import { Mail, ArrowRight, ShieldCheck, Youtube, Linkedin, Instagram, Bell } from 'lucide-react';
import { GoogleAuthButton } from './GoogleAuthButton';
import { ADMIN_NOTIFICATION_EMAIL } from '../services/emailService';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please enter a valid email address.');
      return;
    }
    onShowToast('Subscription confirmed. You will receive the weekly science & habit briefing.');
    setEmail('');
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter & Core Briefing Banner */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 mb-16 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>The Sunday Nutrition & Movement Briefing</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2 tracking-tight">
                Don’t follow another diet. Learn how to eat.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                Practical macronutrient breakdowns, strength templates, and behavioral engineering frameworks delivered every Sunday. Zero dogmatism, zero fads.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-950 text-white placeholder-slate-500 text-xs pl-10 pr-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] font-mono text-slate-500">
                  Read by 4,500+ professionals across tech, finance, consulting & creative sectors.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-slate-950 flex items-center justify-center font-mono font-bold text-xs">
                NM
              </div>
              <span className="text-xl font-extrabold tracking-tight uppercase text-white font-heading">
                NOURISH<span className="text-emerald-400">&</span>MOVE
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Evidence-grounded nutrition systems, progressive resistance training protocols, and sustainable lifestyle habit coaching for high-demand careers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/watch?v=r_Gew2qKYJs&t=366s"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="YouTube podcast video"
                title="YouTube Podcast"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/divyaratnakar/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="LinkedIn profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/divv_a_tara/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Instagram profile"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:divyaratnakar07@gmail.com"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Email directly"
                title="Email: divyaratnakar07@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4">
              Nutrition Systems
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('nutrition')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Protein Demystified
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nutrition')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Carbohydrate Bioenergetics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nutrition')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Dietary Fiber & Satiety
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nutrition')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Healthy Fats & Hormones
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nutrition')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Plate Simulator (50-25-25)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4">
              Movement & Habits
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('fitness')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Strength Training for Longevity
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fitness')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Daily Steps & NEAT
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fitness')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Desk Mobility Protocols
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('habits')} className="text-slate-400 hover:text-white transition-colors text-left">
                  30-Day Habit Tracker Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('habits')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Behavioral Architecture
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4">
              Programs & Desk
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('services')} className="text-slate-400 hover:text-white transition-colors text-left">
                  30-Day Healthy Habits Program
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-slate-400 hover:text-white transition-colors text-left">
                  1-on-1 Lifestyle Coaching
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Downloadable Toolkits
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('podcast')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Podcast & Media Series
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Research Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="text-slate-400 hover:text-white transition-colors text-left">
                  Inquiries & Contact
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Real-Time Email Notification Dispatch Bar */}
        <div className="mt-12 p-4 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 shrink-0">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-slate-200 flex items-center gap-2">
                <span>Direct Gmail Notification Dispatch</span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  {ADMIN_NOTIFICATION_EMAIL}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Automated email dispatches on program enrollments, inquiries, and visitor activity.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <GoogleAuthButton compact={true} />
          </div>
        </div>

        {/* Legal & Medical Scope Notice */}
        <div className="pt-8 text-xs text-slate-500 leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-mono font-bold uppercase text-[11px] tracking-wider">Educational & Non-Medical Scope</span>
          </div>
          <p className="text-[11px] max-w-5xl text-slate-400">
            Disclaimer: All educational resources, nutritional calculators, meal models, and habit coaching frameworks are published for general wellness purposes for healthy adults. The creator is a certified diet planning specialist and corporate professional, not a licensed medical practitioner or clinical dietitian. Consult your personal physician for clinical medical diagnosis or therapeutic dietetics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500">
            <span>© {new Date().getFullYear()} Nourish & Move. All rights reserved.</span>
            <div className="flex items-center gap-4 mt-2 sm:mt-0 font-medium">
              <span>Evidence Grounded</span>
              <span>•</span>
              <span>Non-Dogmatic</span>
              <span>•</span>
              <span>Habit-Focused</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

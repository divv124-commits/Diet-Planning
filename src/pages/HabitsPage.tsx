import React from 'react';
import { PageId } from '../types';
import { HABIT_PSYCHOLOGY_PILLARS } from '../data/habitsData';
import { HabitChallengeTracker } from '../components/HabitChallengeTracker';
import { Brain, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HabitsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onShowToast: (msg: string) => void;
}

export const HabitsPage: React.FC<HabitsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onShowToast,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Behavioral Architecture</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Micro Habits. Frictionless Design. Lasting Adherence.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Willpower is fleeting; systems endure. Learn how to architect your physical environment, stack habits, and build an unshakable identity of health that survives your busiest work quarters.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 6 BEHAVIORAL PSYCHOLOGY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Behavioral Laws</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Principles of Effortless Consistency
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
            Why traditional resolutions fail and how to use habit loops to make optimal health automatic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HABIT_PSYCHOLOGY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-600">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <div className="text-[11px] uppercase tracking-wider text-emerald-700 font-bold font-mono">{pillar.subtitle}</div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 italic">
                "{pillar.quote}" <span className="font-semibold text-slate-800 not-italic">— {pillar.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE 30-DAY CHALLENGE TRACKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HabitChallengeTracker onShowToast={onShowToast} />
      </section>

      {/* 4. THE 4 PROGRESSION PHASES OVERVIEW */}
      <section className="bg-slate-900 text-white py-14 sm:py-18 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 border border-slate-800 shadow-2xl">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Phased Matrix</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            The 30-Day Habit Architecture
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            We introduce one anchor at a time to prevent cognitive overload and ensure each behavior is cemented before moving to the next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Week 1 (Days 1–7)</span>
            <h3 className="font-heading text-lg font-bold text-white">Hydration & Movement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Establishing morning hydration anchor (500ml), 15-minute post-meal walks, and desk worker micro-breaks to reset baseline energy.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Week 2 (Days 8–14)</span>
            <h3 className="font-heading text-lg font-bold text-white">Protein & Balanced Meals</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anchoring breakfast with 20g+ protein, the half-plate vegetable rule, hitting 25g+ fiber, and mindful non-distracted eating.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Week 3 (Days 15–21)</span>
            <h3 className="font-heading text-lg font-bold text-white">Strength & Mobility</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Introducing progressive compound resistance training (3x/week), thoracic spine mobility, and zone 2 aerobic base building.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Week 4 (Days 22–30)</span>
            <h3 className="font-heading text-lg font-bold text-white">Sleep & Lifelong Routine</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Digital sunset protocols, Sunday batch meal prep frameworks, dining out navigation, and graduating with full autonomy.
            </p>
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-md space-y-4 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            Want hands-on guidance through your 30-day transformation?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Join our guided 30-Day Healthy Habits Program with weekly check-ins, meal audits, and direct support.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Enroll in 30-Day Program
            </button>
            <button
              onClick={() => {
                onNavigate('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Print Habit Tracker Sheet
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

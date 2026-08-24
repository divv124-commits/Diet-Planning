import React from 'react';
import { PageId } from '../types';
import { MacroCalculator } from '../components/MacroCalculator';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Dumbbell,
  Apple,
  Clock,
  Play,
  Flame,
  Award,
  Heart,
  Zap,
  Activity,
  Layers,
  Compass,
  Check,
  TrendingUp,
  Cpu,
  BarChart3
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onShowToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onShowToast,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. MODERN PRECISION HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 pb-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            
            {/* Background geometric accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 relative z-10">
              
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-tight">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>EVIDENCE-BASED METABOLIC SYSTEMS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Eat Better.<br />
                Move Better.<br />
                <span className="text-emerald-600">Perform Better.</span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl border-l-2 border-emerald-500 pl-4 font-normal">
                ‘Don’t follow another diet. Learn how to eat.’ Practical nutrition science, progressive resistance protocols, and sustainable behavioral design for high-demand professionals.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply for Coaching</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border border-slate-300/80 cursor-pointer"
                >
                  Explore Programs
                </button>
              </div>

              {/* 3 Core Pillars Preview Bar */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
                <div>
                  <div className="font-heading text-lg font-extrabold text-slate-900">01. Nourish</div>
                  <div className="text-[11px] font-mono text-emerald-600 font-semibold mt-0.5">Protein & Fiber Floor</div>
                </div>
                <div>
                  <div className="font-heading text-lg font-extrabold text-slate-900">02. Move</div>
                  <div className="text-[11px] font-mono text-cyan-600 font-semibold mt-0.5">Strength for Longevity</div>
                </div>
                <div>
                  <div className="font-heading text-lg font-extrabold text-slate-900">03. Sustain</div>
                  <div className="text-[11px] font-mono text-slate-500 font-semibold mt-0.5">Habit Architecture</div>
                </div>
              </div>

            </div>

            {/* Right Column: High-tech Media & Credential Box */}
            <div className="lg:col-span-5 relative bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-2xl z-10">
              
              {/* Featured Episode Card */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                    Featured Video Podcast
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">EPISODE 01</span>
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-white">The Ultimate Guide to Nutrition & Fitness</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deep-dive on macronutrients, strength training, overcoming diet myths, and building sustainable habits that stick.
                </p>
                <div className="pt-1 flex gap-2">
                  <button
                    onClick={() => {
                      onNavigate('podcast');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white transition-colors py-2.5 text-xs font-bold rounded-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Podcast Episode</span>
                  </button>
                  <a
                    href="https://www.youtube.com/watch?v=r_Gew2qKYJs&t=366s"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors flex items-center justify-center"
                    title="Open on YouTube"
                    aria-label="Open on YouTube"
                  >
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Founder Credential Card */}
              <div className="bg-slate-950/60 p-4.5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-slate-950 flex items-center justify-center font-mono font-bold text-xs">
                    DR
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white">Divya Ratnakar</h4>
                    <p className="text-[11px] text-slate-400 font-mono">Corporate Professional & Certified Diet Planner</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "I deliver non-dogmatic, practical frameworks developed through formal certification, continuous study, and 10+ years of empirical testing."
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => {
                      onNavigate('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-emerald-400 hover:text-emerald-300 cursor-pointer flex items-center gap-1 text-xs font-bold"
                  >
                    <span>Read Biography & Method</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. BASICS HUB QUICK SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white px-6 sm:px-10 py-7 flex flex-col md:flex-row items-center border border-slate-200 rounded-2xl gap-6 shadow-sm">
          <div className="w-full md:w-1/4 md:pr-8 md:border-r border-slate-200">
            <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-emerald-600 mb-1">Knowledge Core</h4>
            <p className="text-xs text-slate-600">The foundational bioenergetics of human nutrition.</p>
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-4 md:pl-4">
            <div
              onClick={() => {
                onNavigate('nutrition');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="text-sm font-heading font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Protein</div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">Tissue Repair & Satiety</p>
            </div>
            <div
              onClick={() => {
                onNavigate('nutrition');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="text-sm font-heading font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Fiber</div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">Gut & Glucose Curve</p>
            </div>
            <div
              onClick={() => {
                onNavigate('nutrition');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="text-sm font-heading font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Complex Carbs</div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">Glycogen & Focus</p>
            </div>
            <div
              onClick={() => {
                onNavigate('nutrition');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="text-sm font-heading font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Healthy Fats</div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">Lipids & Endocrine</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE PILLARS: NOURISH, MOVE, SUSTAIN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Core System</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Three Pillars of Sustainable Health
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A scientifically balanced methodology: food fuels metabolic output, movement preserves lean mass, and behavioral architecture guarantees adherence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* PILLAR 1: NOURISH */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 shadow-xs">
                <Apple className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded">
                Pillar 01
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mt-3 mb-2">
                NOURISH
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understand protein, carbohydrates, healthy fats, fiber, and micronutrients. Learn how to structure balanced meals that satisfy your appetite without restriction or guilt.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onNavigate('nutrition');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Learn Nutrition Principles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* PILLAR 2: MOVE */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center mb-6 shadow-xs">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-700 bg-cyan-100/80 px-2.5 py-1 rounded">
                Pillar 02
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mt-3 mb-2">
                MOVE
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Build progressive strength, improve bone mineral density, counteract desk stiffness, and make purposeful daily movement (steps & NEAT) automatic.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onNavigate('fitness');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-wider text-cyan-700 hover:text-cyan-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Strength & Fitness</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* PILLAR 3: SUSTAIN */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-6 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-700 bg-slate-200 px-2.5 py-1 rounded">
                Pillar 03
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mt-3 mb-2">
                SUSTAIN
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Develop habits that fit your career, family, travel, and social calendar. Utilize behavioral psychology, environment architecture, and the "never miss twice" standard.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onNavigate('habits');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Master Behavioral Habits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE PHILOSOPHY MANIFESTO */}
      <section className="bg-slate-900 text-white py-14 sm:py-18 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Practical Paradigm</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Health Should Integrate Into Your Life—Not Dominate It.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Most diets demand that you isolate yourself socially, weigh pinch of spices, or spend hours cooking exotic ingredients. That is why over 90% of traditional diets fail once a high-pressure work quarter begins.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our approach is different: we teach you the <strong className="text-white">foundational bioenergetics</strong> of human nutrition and strength so you can make confident, calculated choices in any boardroom lunch, airport terminal, or home kitchen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">Understanding nutrient density over blindly following restrictive rules.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">Progressive strength training as non-negotiable longevity medicine.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">Protein and fiber prioritized to eliminate false hunger crashes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">Consistency over perfection: 80% daily compliance produces victory.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="font-heading text-xl font-bold text-white">The Non-Restrictive Standard</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold font-mono">✕</span>
                <span>No eliminating cultural staples (rotis, rice, dals, curries).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold font-mono">✕</span>
                <span>No living on bland boiled salads or liquid cleanses.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold font-mono">✕</span>
                <span>No exhausting 2-hour daily gym marathons.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold font-mono">✓</span>
                <span className="text-white font-medium">Mastering the 50-25-25 plate architecture anywhere in the world.</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
              >
                Join the 30-Day Coaching Track
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. START WITH THE BASICS: 8 FOUNDATIONAL CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Essential Modules</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Start With the Basics
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Click any foundational topic to explore deep-dive educational guides and food breakdowns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 'protein',
              title: 'Protein Demystified',
              sub: 'Muscle repair, enzymes & satiety',
              page: 'nutrition' as PageId,
              icon: Dumbbell,
            },
            {
              id: 'carbs',
              title: 'Smart Carbohydrates',
              sub: 'Clean brain & muscular fuel',
              page: 'nutrition' as PageId,
              icon: Zap,
            },
            {
              id: 'fiber',
              title: 'Dietary Fiber',
              sub: 'Gut microbiome & blood sugar',
              page: 'nutrition' as PageId,
              icon: Sparkles,
            },
            {
              id: 'fats',
              title: 'Healthy Fats',
              sub: 'Hormones & nutrient absorption',
              page: 'nutrition' as PageId,
              icon: Heart,
            },
            {
              id: 'hydration',
              title: 'Hydration & Salts',
              sub: 'Cellular energy & alertness',
              page: 'habits' as PageId,
              icon: Activity,
            },
            {
              id: 'plate',
              title: 'Plate Simulator',
              sub: '50-25-25 meal architecture',
              page: 'nutrition' as PageId,
              icon: Layers,
            },
            {
              id: 'strength',
              title: 'Strength Training',
              sub: 'Bone density & muscle retention',
              page: 'fitness' as PageId,
              icon: Dumbbell,
            },
            {
              id: 'habits',
              title: 'Habit Architecture',
              sub: 'Behavioral psychology & routine',
              page: 'habits' as PageId,
              icon: Compass,
            }
          ].map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => {
                  onNavigate(card.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {card.sub}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Explore guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 6. EMBEDDED INTERACTIVE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MacroCalculator />
      </section>

      {/* 7. BEHAVIORAL PSYCHOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <span>Behavioral Science</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Small Habits. Exponential Compounding.
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Willpower is an exhaustible battery. Long-term metabolic transformation is built on friction reduction, habit stacking, and identity shifts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">Start Inconveniently Small</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scale down initial habits until they take under 2 minutes (e.g. drinking 500ml water upon waking). Establish the automatic neural ritual first before escalating volume.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 font-mono font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">Environment Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Make optimal choices the path of least resistance. Keep pre-washed fruit visible on your desk; keep workout gear laid out beside your bed the night before.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 font-mono font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">The "Never Miss Twice" Standard</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Missing a workout or eating an unplanned meal is just an isolated data point. Missing twice begins a counter-habit. Recover immediately at your very next meal.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                onNavigate('habits');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Launch 30-Day Habit Tracker System</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Verified Case Studies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Professionals. Sustainable Habits.
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            How working adults transformed their body composition and metabolic vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "For years I was stuck in the cycle of crash dieting, losing 4kg, and gaining 5kg back during quarterly business reviews. Learning how to structure protein and fiber on the plate completely ended my 4:00 PM sugar crashes."
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                AK
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Anand K.</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Senior Director, IT Services (Age 42)</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "I was always terrified that lifting weights would make me 'bulky'. The coaching debunked that myth with clear physiology. Today, I am lifting dumbbells three times a week, my posture is restored, and I have never felt stronger."
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                SM
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Sunita M.</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Management Consultant (Age 36)</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "As a strict vegetarian, I had no idea how to hit 90g of protein without feeling weighed down. The vegetarian protein hierarchy and food swap cheat-sheets made daily cooking effortless."
            </p>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                RV
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Rahul V.</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Product Lead (Age 31)</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. FINAL HIGH-CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white p-10 sm:p-14 rounded-3xl text-center space-y-6 border border-slate-800 shadow-2xl">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <span>Next Phase</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-2xl mx-auto leading-tight tracking-tight text-white">
            Ready to Build Sustainable Vitality?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Zero extreme cleanses. Zero forbidden foods. Just practical, evidence-based nutrition and strength systems designed for your real life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-lg"
            >
              <span>Apply for Coaching</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onNavigate('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Download Free Toolkits
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

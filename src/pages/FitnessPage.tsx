import React, { useState } from 'react';
import { PageId } from '../types';
import { FITNESS_PILLARS, BEGINNER_FITNESS_MYTHS } from '../data/fitnessData';
import { Dumbbell, CheckCircle2, ShieldCheck, ArrowRight, Zap, Target } from 'lucide-react';

interface FitnessPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const FitnessPage: React.FC<FitnessPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('strength');

  const selectedPillar = FITNESS_PILLARS.find((p) => p.id === selectedPillarId) || FITNESS_PILLARS[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Biomechanical Protocols</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Move With Purpose. Build Physical Sovereignty.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Fitness is not a punishment for calories consumed. It is the mechanical stimulus that signals your body to retain muscle mass, reinforce bone mineral matrix, improve GLUT4 glucose disposal, and thrive as you age.
            </p>
          </div>

          {/* Quick Pillar Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 pb-4 border-b border-slate-200">
            {FITNESS_PILLARS.map((pillar) => {
              const isActive = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Dumbbell className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SELECTED PILLAR DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-600 font-mono text-xs font-bold uppercase tracking-wider">
                <span>Pillar Architecture</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                {selectedPillar.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedPillar.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-slate-900">
                  Key Physiological Adaptations:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedPillar.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1 mt-4">
                <strong className="text-slate-900 uppercase tracking-wider font-mono text-[11px] block">Guiding Execution Law:</strong>
                <p>{selectedPillar.keyPrinciples.join(' • ')}</p>
              </div>
            </div>

            {/* Sample Routine Card */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-cyan-700 tracking-wider">Protocol Template</span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                    {selectedPillar.sampleRoutine.name}
                  </h3>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-white px-2.5 py-1 rounded-lg text-slate-800 font-mono font-bold border border-slate-200 shadow-xs">
                  {selectedPillar.sampleRoutine.duration}
                </span>
              </div>

              <div className="space-y-3">
                {selectedPillar.sampleRoutine.exercises.map((ex, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-sm text-slate-900">{ex.name}</span>
                      <span className="text-[11px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">{ex.sets} • {ex.reps}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 italic leading-tight">
                      Cue: {ex.cues}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY STRENGTH TRAINING MATTERS FOR 25-55 MEN & WOMEN */}
      <section className="bg-slate-900 text-white py-14 sm:py-18 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 border border-slate-800 shadow-2xl">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Longevity Bioenergetics</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Strength Training Is Non-Negotiable (Ages 25–55)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Starting around age 30, adults lose 3–8% of muscle mass per decade without progressive resistance. Lifting weights is the ultimate metabolic antidote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-cyan-400">01</div>
            <h3 className="font-heading text-lg font-bold text-white">Sarcopenia Prevention</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Muscles act as the metabolic engine of your body. Preserving skeletal muscle maintains baseline metabolic rate and halts age-related decline.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-cyan-400">02</div>
            <h3 className="font-heading text-lg font-bold text-white">Bone Mineral Density</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mechanical load during compound squats and presses stimulates osteoblasts to deposit calcium into bone matrix, protecting men and women from osteopenia.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-cyan-400">03</div>
            <h3 className="font-heading text-lg font-bold text-white">Non-Insulin GLUT4 Disposal</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Skeletal muscle absorbs over 80% of post-meal blood glucose via non-insulin GLUT4 translocation during contraction, shielding against insulin resistance.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-cyan-400">04</div>
            <h3 className="font-heading text-lg font-bold text-white">Desk Posture Restoration</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strengthening upper back retractors (rhomboids, rear delts) and hip extensors (glutes) counteracts forward-head slouch and chronic lower back stiffness.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-cyan-400">05</div>
            <h3 className="font-heading text-lg font-bold text-white">Physical Autonomy & Daily Power</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Effortlessly hoisting travel luggage, running up flights of stairs, and moving with agility without strain or joint discomfort.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-cyan-400">06</div>
            <h3 className="font-heading text-lg font-bold text-white">Confidence & Cognitive Fortitude</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Overcoming progressive physical load builds authentic self-efficacy and dopamine resilience that directly translates into executive performance.
            </p>
          </div>

        </div>
      </section>

      {/* 4. BEGINNER FITNESS MYTHS BUSTED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-600 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Evidence Audit</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Fitness Myths Debunked
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BEGINNER_FITNESS_MYTHS.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-red-600">
                <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold">✕</span>
                <span className="line-through">{m.myth}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Physiological Reality:</strong> {m.truth}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-md space-y-4 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to integrate strength training into your busy week?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Download our free 3-Day Beginner Strength Blueprint or apply for structured 1-on-1 lifestyle coaching.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                onNavigate('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Get Free Workout Guide
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Apply for 1-on-1 Guidance
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

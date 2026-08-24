import React from 'react';
import { PageId } from '../types';
import {
  Award,
  BookOpen,
  Briefcase,
  Dumbbell,
  ShieldCheck,
  ArrowRight,
  Compass,
  CheckCircle2,
  Linkedin,
  Instagram,
  Youtube,
  Mail
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. STORY HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Origin & Credentials</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Why I Built Nourish & Move
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Bridging the gap between the demanding pressures of modern careers and the timeless fundamentals of metabolic nutrition and strength longevity.
            </p>
          </div>

          {/* MAIN STORY & CREDENTIALS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 items-start">
            
            {/* Story narrative */}
            <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
              
              <p>
                Like many of you, I spend my days navigating intense deliverables, executive cross-functional meetings, and packed work schedules. For years, I watched dedicated colleagues—and at times, myself—struggle with constant fatigue, afternoon brain fog, and the frustrating cycle of starting and failing extreme diets.
              </p>

              <p>
                Every quarter or before a corporate milestone, people would resort to drastic liquid cleanses, zero-carb mandates, or grueling 60-minute cardio marathons. By Wednesday they were depleted; by month's end they had regained every lost kilo and felt defeated.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500 border-y border-r border-slate-200 text-slate-900 italic font-medium my-4">
                "People don’t fail because they lack willpower. They fail because mainstream diet culture sells restrictive gimmicks that collapse under the reality of a demanding Tuesday at the office."
              </div>

              <h2 className="font-heading text-2xl font-bold text-slate-900 pt-2">
                A Lifelong Commitment to Evidence-Based Nutrition
              </h2>

              <p>
                My passion for human performance led me to formally pursue a certification in diet planning and commit hundreds of hours to studying nutritional bioenergetics, exercise physiology, behavioral psychology, and clinical literature.
              </p>

              <p>
                I immersed myself in the mechanics of macronutrients—how <strong>protein</strong> and <strong>fiber</strong> regulate satiety hormones, how <strong>complex carbohydrates</strong> sustain cognitive endurance, how <strong>healthy fats</strong> support cellular membranes, and why <strong>progressive strength training</strong> is the most potent anti-aging tool for both men and women.
              </p>

              {/* TRANSPARENT SCOPE */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 font-mono font-bold uppercase tracking-wider text-xs text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Scope of Practice & Standards:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I am a corporate professional, fitness enthusiast, and certified diet planning specialist. <strong>I share what I have learned through accredited certification, ongoing scientific study, and 10+ years of real-world consistency.</strong>
                </p>
                <p className="text-[11px] font-mono text-slate-400">
                  I am not a medical doctor or clinical dietitian. My mission is practical lifestyle education, habit architecture, and strength guidance for generally healthy adults.
                </p>
              </div>

            </div>

            {/* Credential summary card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-lg space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
                    <span>Founder Profile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/divyaratnakar/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-sky-600 transition-colors"
                      title="Divya Ratnakar on LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com/divv_a_tara/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-pink-600 transition-colors"
                      title="@divv_a_tara on Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=r_Gew2qKYJs&t=366s"
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-red-600 transition-colors"
                      title="Podcast on YouTube"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="mailto:divyaratnakar07@gmail.com"
                      className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-emerald-600 transition-colors"
                      title="Email: divyaratnakar07@gmail.com"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Divya Ratnakar</h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Corporate Professional & Certified Diet Planner</p>
                </div>

                <ul className="space-y-4 text-xs text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Corporate Professional:</strong> Personally understands the reality of demanding work schedules, executive travel, and desk fatigue.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Certified in Diet Planning:</strong> Structured education in energy balance algorithms, macro ratios, and meal architecture.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Dumbbell className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Strength Practitioner:</strong> 10+ years practicing progressive resistance training and high daily NEAT accumulation.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Continuous Learner:</strong> Grounded in ongoing research, behavioral psychology, and peer-reviewed journals.
                    </div>
                  </li>
                </ul>

                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between">
                    <span>Direct: <a href="mailto:divyaratnakar07@gmail.com" className="text-emerald-700 font-semibold hover:underline">divyaratnakar07@gmail.com</a></span>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Connect & Start Coaching</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. "WHAT I BELIEVE" SECTION */}
      <section className="bg-slate-900 text-white py-14 sm:py-18 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 border border-slate-800 shadow-2xl">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What I Believe
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            These foundational convictions shape every article, coaching framework, and conversation on this platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Belief 01</div>
            <h3 className="font-heading text-lg font-bold text-white">Food should fuel, not create fear.</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No whole food is inherently "toxic". When you understand energy density and nutrient synergy, you can enjoy home-cooked traditional meals without guilt.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Belief 02</div>
            <h3 className="font-heading text-lg font-bold text-white">Fitness should build physical sovereignty.</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Workouts are not punishment for what you ate. Progressive resistance training builds muscle, strengthens bone mineral density, and preserves vitality for decades.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Belief 03</div>
            <h3 className="font-heading text-lg font-bold text-white">Sustainable habits defeat extreme diets.</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              A 70% optimal routine you maintain for 5 years will always outperform a 100% "perfect" extreme diet that you abandon after 14 days.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Belief 04</div>
            <h3 className="font-heading text-lg font-bold text-white">There is no single dogma.</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vegetarian, eggetarian, plant-based, or omnivore—any dietary pattern works when anchored with adequate protein, fiber, and whole foods.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Belief 05</div>
            <h3 className="font-heading text-lg font-bold text-white">Consistency beats perfection.</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              One celebratory meal does not ruin your progress, just as one salad does not make you healthy. Weekly baseline adherence is what produces results.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Belief 06</div>
            <h3 className="font-heading text-lg font-bold text-white">Knowledge creates autonomy.</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When you understand the biological WHY behind your food and movement choices, you will never need to rely on someone else's rigid meal chart again.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-md space-y-4 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to learn how to eat and build lifelong strength?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Explore our educational hubs, interactive simulators, or apply for personal coaching.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                onNavigate('nutrition');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Explore Nutrition Hub
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Apply for Coaching
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

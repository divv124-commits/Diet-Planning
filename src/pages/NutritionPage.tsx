import React, { useState } from 'react';
import { PageId } from '../types';
import { MICRONUTRIENTS_DATA } from '../data/nutritionData';
import { FoodExplorer } from '../components/FoodExplorer';
import { InteractivePlateBuilder } from '../components/InteractivePlateBuilder';
import {
  Dumbbell,
  Zap,
  Sparkles,
  Heart,
  ShieldCheck,
  Utensils
} from 'lucide-react';

interface NutritionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const NutritionPage: React.FC<NutritionPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeNutrientTab, setActiveNutrientTab] = useState<'protein' | 'carbs' | 'fiber' | 'fats' | 'micros'>('protein');

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Bioenergetic Curriculum</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Understand Your Food. Master Your Energy.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Nutrition is about nourishing your biology, not suffering through arbitrary restriction. Learn how protein, carbohydrates, healthy fats, fiber, and micronutrients work together to create sustained metabolic vitality.
            </p>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex flex-wrap gap-2 mt-8 pb-4 border-b border-slate-200">
            {[
              { id: 'protein', label: '1. Protein Floor', icon: Dumbbell },
              { id: 'carbs', label: '2. Complex Carbs', icon: Zap },
              { id: 'fiber', label: '3. Dietary Fiber', icon: Sparkles },
              { id: 'fats', label: '4. Essential Fats', icon: Heart },
              { id: 'micros', label: '5. Micronutrients', icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeNutrientTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveNutrientTab(tab.id as any)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. TABBED DEEP-DIVE CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PROTEIN SECTION */}
        {activeNutrientTab === 'protein' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 animate-in fade-in duration-150">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
                  <span>Macronutrient Deep Dive</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Protein: The Anabolic Engine of Satiety & Longevity
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Protein is made up of 20 amino acids (9 of which are "essential" because the human body cannot manufacture them). Beyond building skeletal muscle tissue, dietary protein provides the biochemical machinery for vital bodily operations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Muscle Protein Synthesis (MPS):</strong> Stimulates cellular repair via the leucine threshold trigger.
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Enzymes & Hormones:</strong> Catalyzes biochemical energy cycles and manufactures peptide signaling molecules.
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Immune Immunoglobulins:</strong> Antibodies protecting you from infection are constructed from amino acids.
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Prolonged Satiety:</strong> Triggers CCK, PYY, and GLP-1, keeping blood sugar and appetite stable for 3–4 hours.
                  </div>
                </div>
                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200/80 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-emerald-800 uppercase tracking-wider text-[11px] block mb-1 font-mono">Protein and Aging (Sarcopenia):</strong> As we age past 35, our muscle tissue exhibits "anabolic resistance"—requiring a slightly higher dose of protein per meal (~25g–35g) paired with progressive resistance training to preserve physical sovereignty.
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-5">
                
                <div>
                  <h3 className="font-bold text-xs text-slate-900 uppercase font-mono tracking-wider mb-2.5">
                    Vegetarian & Plant Protein
                  </h3>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                    {['Paneer (low-fat/regular)', 'Soya chunks (52g/100g dry)', 'Firm Tofu / Tempeh', 'Greek yogurt / Hung curd', 'Moong dal', 'Chickpeas (Chana)', 'Kidney beans (Rajma)', 'Sprouted lentils', 'Edamame', 'Nuts & Seeds'].map((s, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-lg border border-slate-200 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="font-bold text-xs text-slate-900 uppercase font-mono tracking-wider mb-2.5">
                    Lean Animal Protein
                  </h3>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                    {['Whole Eggs & Egg whites', 'Chicken breast', 'Salmon / Rohu / Pomfret', 'Prawns / Shrimp', 'Lean cuts'].map((s, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-lg border border-slate-200 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 pt-1">
                  *Pro-tip: Combine legumes with grains across the day to ensure a full essential amino acid spectrum.
                </div>

              </div>
            </div>

          </div>
        )}

        {/* CARBOHYDRATES SECTION */}
        {activeNutrientTab === 'carbs' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 animate-in fade-in duration-150">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-600 font-mono text-xs font-bold uppercase tracking-wider">
                  <span>Macronutrient Deep Dive</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Carbohydrates: Clean Brain Glycogen & Muscular Fuel
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Carbohydrates are metabolized into glucose—the primary substrate for cognitive executive function, central nervous system signaling, and high-intensity resistance output.
                </p>
                <div className="space-y-3 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong className="text-slate-900">Complex vs. Ultra-Processed Carbs:</strong> Complex carbs (millets, rolled oats, brown/red rice, sweet potatoes) carry intact fiber matrices that slow gastric emptying, preventing reactive hypoglycemia. Refined sugars create violent spikes followed by 3 PM energy crashes.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900">Portion Architecture:</strong> You do not need to eliminate rotis or rice. Keep smart carbs to 25% of your meal plate, always co-consumed with high protein and fibrous greens.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-xs text-slate-900 uppercase font-mono tracking-wider">
                  Nutrient-Dense Carbohydrate Sources
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Millets:</strong> Ragi, Jowar, Bajra, Foxtail
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Whole Grains:</strong> Rolled oats, Whole wheat
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Traditional Rice:</strong> Basmati, Red, Brown
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Tubers:</strong> Sweet potato, Boiled potatoes
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Legumes:</strong> Moong, Chana, Rajma
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Whole Fruits:</strong> Apples, Berries, Papaya
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* FIBER SECTION */}
        {activeNutrientTab === 'fiber' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 animate-in fade-in duration-150">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
                  <span>Macronutrient Deep Dive</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Dietary Fiber: The Unsung Pillar of Gut Microbiome & Lipids
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dietary fiber is non-digestible plant carbohydrate. Over 90% of adults consume under 15g daily, leaving profound metabolic advantages unharvested:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 font-bold block uppercase tracking-wider text-[11px]">Soluble Fiber</strong>
                    <p className="leading-relaxed">Dissolves into a viscous gel. Blunts postprandial glucose surges and binds to bile salts to modulate LDL cholesterol. Found in chia seeds, oats, and legumes.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 font-bold block uppercase tracking-wider text-[11px]">Insoluble Fiber</strong>
                    <p className="leading-relaxed">Adds mechanical bulk to stool, accelerates colonic transit, and prevents constipation. Found in leafy greens, vegetable skins, and whole bran.</p>
                  </div>
                </div>

                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200/80 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-emerald-800 uppercase tracking-wider text-[11px] block font-mono">SCFA Production:</strong> Gut bacteria ferment prebiotic fiber into Short-Chain Fatty Acids (Butyrate) that strengthen the gut barrier and dampen systemic inflammation.
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-xs text-slate-900 uppercase font-mono tracking-wider">
                  High-Yield Fiber Density
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                    <span>Chia Seeds (2 tbsp / 25g)</span>
                    <strong className="text-emerald-600 font-mono">8.6g Fiber</strong>
                  </li>
                  <li className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                    <span>Cooked Moong / Chana (1 cup)</span>
                    <strong className="text-emerald-600 font-mono">12–15g Fiber</strong>
                  </li>
                  <li className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                    <span>Rolled Oats (50g dry)</span>
                    <strong className="text-emerald-600 font-mono">5.0g Fiber</strong>
                  </li>
                  <li className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                    <span>Raw Kachumber / Green Salad Bowl</span>
                    <strong className="text-emerald-600 font-mono">4.8g Fiber</strong>
                  </li>
                  <li className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                    <span>Steamed Broccoli / Spinach (1 cup)</span>
                    <strong className="text-emerald-600 font-mono">4.3g Fiber</strong>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* HEALTHY FATS SECTION */}
        {activeNutrientTab === 'fats' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 animate-in fade-in duration-150">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-amber-600 font-mono text-xs font-bold uppercase tracking-wider">
                  <span>Macronutrient Deep Dive</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Healthy Lipids: Hormonal Synthesis & Nutrient Transport
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dietary fats are crucial steroid hormone precursors and mandatory for the intestinal assimilation of fat-soluble vitamins (A, D, E, and K).
                </p>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">Unsaturated Fats (MUFAs & PUFAs):</strong> Extra virgin olive oil, mustard oil, almonds, walnuts, chia seeds, and avocados support endothelial vascular health.
                  </p>
                  <p>
                    <strong className="text-slate-900">Omega-3 Fatty Acids (EPA/DHA/ALA):</strong> Anti-inflammatory essential fats in cold-water fish, walnuts, and flaxseeds for cognitive and cardiovascular longevity.
                  </p>
                  <p>
                    <strong className="text-slate-900">A2 Desi Ghee in Mindful Portions:</strong> Pure grass-fed ghee provides butyric acid. Practice mindful measuring (1–2 teaspoons daily) to keep energy intake dialed.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-xs text-slate-900 uppercase font-mono tracking-wider">
                  Quality Fat Sources
                </h3>
                <div className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Raw Almonds & Walnuts:</strong> Vitamin E & plant Omega-3s
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Cold-Pressed Olive & Mustard:</strong> Polyphenols & oleic acid
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Desi A2 Ghee:</strong> 1–2 tsp for butyric acid & satiety
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">Avocado & Seeds:</strong> Potassium & healthy monounsaturates
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* MICRONUTRIENTS SECTION */}
        {activeNutrientTab === 'micros' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 animate-in fade-in duration-150">
            
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
                <span>Micronutrient Library</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Vitamins & Minerals: The Essential Spark Plugs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Micronutrients do not directly provide calories, but they are mandatory cofactors for cellular ATP synthesis, oxygen delivery, and nervous system health.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-500 border border-slate-200">
                <em>Scope Notice: Individual requirements vary based on genetics, age, sex, and activity. Verify deficiencies with clinical blood panels under physician guidance.</em>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MICRONUTRIENTS_DATA.map((micro) => (
                <div key={micro.id} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-base text-slate-900">{micro.name}</h3>
                      <span className="text-[10px] font-mono bg-white text-slate-700 font-semibold px-2 py-0.5 rounded border border-slate-200">{micro.dailyNeed}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {micro.role}
                    </p>

                    <div className="space-y-1 text-xs text-slate-700 pt-2 border-t border-slate-200">
                      <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider font-mono">Top Sources:</div>
                      <div className="text-[11px] text-slate-600">{micro.topSources.join(' • ')}</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200 text-xs text-slate-700 leading-snug">
                    <strong className="text-emerald-800 font-semibold">Tip:</strong> {micro.practicalTip}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </section>

      {/* 3. INTERACTIVE PLATE SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractivePlateBuilder />
      </section>

      {/* 4. FOOD EXPLORER DATABASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FoodExplorer />
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-3xl space-y-4 max-w-3xl mx-auto shadow-2xl border border-slate-800">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <span>Action Blueprint</span>
          </div>
          <h3 className="font-heading text-3xl font-extrabold text-white">
            Ready to apply practical nutrition to your everyday meals?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Join our 30-Day Program or apply for coaching to receive tailored meal architectures and weekly feedback.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
            >
              Start Coaching Journey
            </button>
            <button
              onClick={() => {
                onNavigate('fitness');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Explore Fitness Guide
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

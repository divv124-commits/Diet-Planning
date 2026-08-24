import React, { useState } from 'react';
import { Calculator, Flame, Dumbbell, Sparkles, Check, Activity, PieChart, ShieldCheck } from 'lucide-react';

export const MacroCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [age, setAge] = useState<number>(32);
  const [weightKg, setWeightKg] = useState<number>(68);
  const [heightCm, setHeightCm] = useState<number>(168);
  const [activity, setActivity] = useState<'sedentary' | 'light' | 'moderate' | 'active'>('moderate');
  const [goal, setGoal] = useState<'sustainable_loss' | 'vitality_maintenance' | 'strength_muscle'>('sustainable_loss');
  const [dietType, setDietType] = useState<'vegetarian' | 'vegan' | 'non_veg'>('vegetarian');

  // Calculations
  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const activityMultipliers = {
    sedentary: 1.2,       // Desk job, <5,000 steps
    light: 1.375,         // Light walking, 1-2 workouts/week
    moderate: 1.55,       // 3-4 strength workouts/week, 8,000 steps
    active: 1.725,        // 5+ intense workouts/week, 10,000+ steps
  };

  const tdee = Math.round(bmr * activityMultipliers[activity]);

  let targetCalories = tdee;
  let proteinFactor = 1.4; // grams per kg

  if (goal === 'sustainable_loss') {
    targetCalories = Math.round(tdee * 0.82); // 18% deficit
    proteinFactor = 1.6;
  } else if (goal === 'strength_muscle') {
    targetCalories = Math.round(tdee * 1.08); // 8% surplus
    proteinFactor = 1.6;
  } else {
    targetCalories = tdee;
    proteinFactor = 1.4;
  }

  const targetProteinGrams = Math.round(weightKg * proteinFactor);
  const targetFiberGrams = gender === 'male' ? 38 : 28;
  const targetFatGrams = Math.round((targetCalories * 0.28) / 9);
  const targetCarbGrams = Math.max(80, Math.round((targetCalories - targetProteinGrams * 4 - targetFatGrams * 9) / 4));

  const proteinCals = targetProteinGrams * 4;
  const fatCals = targetFatGrams * 9;
  const carbCals = targetCarbGrams * 4;
  const totalMacroCals = proteinCals + fatCals + carbCals;

  const proteinPct = Math.round((proteinCals / totalMacroCals) * 100);
  const fatPct = Math.round((fatCals / totalMacroCals) * 100);
  const carbPct = 100 - proteinPct - fatPct;

  const proteinPerMeal = Math.round(targetProteinGrams / 3);

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-lg">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-mono uppercase font-bold tracking-wider">
              <span>Metabolic Calculator</span>
              <span>•</span>
              <span>Evidence Model</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Macro & Energy Architecture
            </h3>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-600">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span>Mifflin-St Jeor Algorithm</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* INPUT FORM CONTROLS */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Gender & Age */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Biological Sex
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    gender === 'female'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Female
                </button>
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    gender === 'male'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Male
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Age</label>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {age} yrs
                </span>
              </div>
              <input
                type="range"
                min="18"
                max="75"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer mt-2"
              />
            </div>
          </div>

          {/* Weight & Height Sliders */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Body Weight</label>
                <span className="text-sm font-mono font-extrabold text-slate-900">{weightKg} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="130"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Height</label>
                <span className="text-sm font-mono font-extrabold text-slate-900">{heightCm} cm</span>
              </div>
              <input
                type="range"
                min="140"
                max="205"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Weekly Activity Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { id: 'sedentary', label: 'Desk Worker', sub: '<5k steps/day' },
                { id: 'light', label: 'Lightly Active', sub: 'Walking + 1-2 workouts' },
                { id: 'moderate', label: 'Moderately Active', sub: '3-4 strength workouts + 8k steps' },
                { id: 'active', label: 'High Performance', sub: '5+ workouts + 10k steps' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActivity(item.id as any)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    activity === item.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p className="text-xs font-bold">{item.label}</p>
                  <p className={`text-[10px] mt-0.5 ${activity === item.id ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {item.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Primary Goal */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Primary Objective
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sustainable_loss', label: 'Fat Loss & Tone' },
                { id: 'vitality_maintenance', label: 'Vitality & Energy' },
                { id: 'strength_muscle', label: 'Build Lean Muscle' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setGoal(item.id as any)}
                  className={`py-2.5 px-2 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    goal === item.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Preference */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Dietary Pattern
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'vegetarian', label: 'Vegetarian' },
                { id: 'vegan', label: 'Plant-Based' },
                { id: 'non_veg', label: 'Omnivore / Non-Veg' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDietType(item.id as any)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    dietType === item.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RESULTS PANEL */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Target Daily Output
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                {goal === 'sustainable_loss' ? 'Gentle 18% Deficit' : goal === 'strength_muscle' ? '8% Strength Surplus' : 'Energy Balance'}
              </span>
            </div>

            {/* Macro Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              
              {/* Protein Target */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>Protein</span>
                </div>
                <div className="text-3xl font-mono font-extrabold text-white">{targetProteinGrams}g</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">~{proteinPerMeal}g / 3 meals</div>
              </div>

              {/* Fiber Target */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fiber</span>
                </div>
                <div className="text-3xl font-mono font-extrabold text-white">{targetFiberGrams}g</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">Gut motility floor</div>
              </div>

              {/* Calories */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Energy</span>
                </div>
                <div className="text-3xl font-mono font-extrabold text-white">{targetCalories}</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">kcal / day</div>
              </div>

              {/* Fats / Carbs */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-slate-300 mb-1">Fats / Carbs</div>
                <div className="text-sm font-mono font-bold text-white mt-1.5">{targetFatGrams}g / {targetCarbGrams}g</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">Hormones & Brain</div>
              </div>

            </div>

            {/* Macro Distribution Visual Bar */}
            <div className="space-y-2 pt-2 pb-4">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>Macronutrient Ratio</span>
                <span>{proteinPct}% P • {carbPct}% C • {fatPct}% F</span>
              </div>
              <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-800">
                <div style={{ width: `${proteinPct}%` }} className="bg-emerald-500" title={`Protein: ${proteinPct}%`} />
                <div style={{ width: `${carbPct}%` }} className="bg-cyan-500" title={`Carbohydrates: ${carbPct}%`} />
                <div style={{ width: `${fatPct}%` }} className="bg-amber-500" title={`Fats: ${fatPct}%`} />
              </div>
            </div>

            {/* Practical Meal Structure Blueprint */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="text-emerald-400 font-mono font-bold uppercase text-[11px] tracking-wide">
                Evidence Meal Blueprint ({dietType === 'vegetarian' ? 'Vegetarian' : dietType === 'vegan' ? 'Plant-Based' : 'Omnivore'}):
              </div>
              <ul className="space-y-2 text-slate-300">
                {dietType === 'vegetarian' && (
                  <>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Breakfast:</strong> 2 Moong & Paneer Chilas + 100g Greek yogurt (~26g protein)</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Lunch:</strong> 1 cup thick Dal + 100g Low-fat Paneer/Soya chunks curry + 1 Roti + Salad (~35g protein)</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Dinner:</strong> 1 cup Chickpeas/Rajma + 1 bowl Sprouted Moong + Stir-fry veggies (~28g protein)</span>
                    </li>
                  </>
                )}
                {dietType === 'vegan' && (
                  <>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Breakfast:</strong> Tofu Scramble (150g) + 1 tbsp Chia pudding (~25g protein)</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Lunch:</strong> Soya chunks curry (50g dry) + 1 cup Quinoa / Millets + Salad (~32g protein)</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Dinner:</strong> 1.5 cups Edamame & Black Bean Bowl + Green veggies (~28g protein)</span>
                    </li>
                  </>
                )}
                {dietType === 'non_veg' && (
                  <>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Breakfast:</strong> 3 Whole Eggs + 1 slice whole grain sourdough (~22g protein)</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Lunch:</strong> 120g Grilled Chicken Breast or Salmon + 1 cup Rice + Salad (~38g protein)</span>
                    </li>
                    <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Dinner:</strong> 100g Fish or Paneer + 1 cup Moong dal + Sautéed Greens (~30g protein)</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

          </div>

          {/* Adherence Principle */}
          <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 leading-relaxed border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-bold uppercase text-[10px] tracking-wider">Metabolic Adherence Rule:</strong> Targets are biological guideposts rather than strict pass/fail grades. Staying within ±10% of protein targets and hitting 25–35g fiber consistently produces superior body composition results without burnout.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Utensils, Sparkles, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

interface OptionItem {
  id: string;
  name: string;
  portion: string;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  calories: number;
  category: string;
}

const PROTEIN_OPTIONS: OptionItem[] = [
  { id: 'paneer', name: 'Low-Fat Paneer Bhurji', portion: '100g', protein: 25, carbs: 4, fat: 5, fiber: 0, calories: 165, category: 'Vegetarian' },
  { id: 'soya', name: 'Soya Chunks in Light Gravy', portion: '50g dry / 120g cooked', protein: 26, carbs: 16, fat: 0.5, fiber: 6, calories: 170, category: 'Vegan' },
  { id: 'tofu', name: 'Pan-Seared Firm Tofu', portion: '150g', protein: 24, carbs: 4, fat: 12, fiber: 3, calories: 215, category: 'Vegan' },
  { id: 'dal-sprouts', name: 'Thick Moong Dal + Sprouts', portion: '1 cup dal + 1/2 cup sprouts', protein: 18, carbs: 36, fat: 1.2, fiber: 14, calories: 230, category: 'Vegan' },
  { id: 'greek-yogurt', name: 'Greek Yogurt / Hung Curd', portion: '150g bowl', protein: 15, carbs: 6, fat: 3, fiber: 0, calories: 120, category: 'Vegetarian' },
  { id: 'eggs', name: '2 Whole Eggs + 2 Whites Scramble', portion: '4 eggs mix', protein: 20, carbs: 1, fat: 10, fiber: 0, calories: 180, category: 'Non-Vegetarian' },
  { id: 'chicken', name: 'Grilled Herb Chicken Breast', portion: '120g cooked', protein: 36, carbs: 0, fat: 4, fiber: 0, calories: 190, category: 'Non-Vegetarian' },
  { id: 'fish', name: 'Pan-Seared Salmon / Fish Fillet', portion: '120g cooked', protein: 28, carbs: 0, fat: 9, fiber: 0, calories: 210, category: 'Non-Vegetarian' },
];

const CARB_OPTIONS: OptionItem[] = [
  { id: 'millet-roti', name: '2 Millet Rotis (Jowar/Ragi)', portion: '2 rotis (70g flour)', protein: 6, carbs: 48, fat: 2, fiber: 8, calories: 240, category: 'Whole Grain' },
  { id: 'basmati-rice', name: 'Steamed Basmati / Brown Rice', portion: '1 medium cup (150g)', protein: 4, carbs: 40, fat: 1, fiber: 2.5, calories: 185, category: 'Grain' },
  { id: 'whole-wheat', name: '2 Whole Wheat Phulkas', portion: '2 rotis (60g flour)', protein: 6, carbs: 38, fat: 1, fiber: 5.5, calories: 190, category: 'Whole Grain' },
  { id: 'sweet-potato', name: 'Roasted Sweet Potato', portion: '1 large (180g)', protein: 3, carbs: 36, fat: 0.2, fiber: 5.5, calories: 160, category: 'Root Veg' },
  { id: 'rolled-oats', name: 'Savory Oats / Quinoa Bowl', portion: '1 cooked cup (160g)', protein: 7, carbs: 34, fat: 3, fiber: 5, calories: 195, category: 'Whole Grain' },
];

const VEGGIE_OPTIONS: OptionItem[] = [
  { id: 'kachumber', name: 'Crisp Cucumber, Tomato & Radish Salad', portion: '1 large bowl (200g)', protein: 2, carbs: 8, fat: 0.3, fiber: 5, calories: 45, category: 'Raw Veggies' },
  { id: 'palak-methi', name: 'Sautéed Garlic Spinach & Methi', portion: '1 generous bowl (180g)', protein: 5, carbs: 6, fat: 1, fiber: 4.5, calories: 50, category: 'Leafy Greens' },
  { id: 'bhindi-beans', name: 'Spiced Green Beans & Okra', portion: '1 cup cooked (150g)', protein: 3, carbs: 10, fat: 2, fiber: 5.5, calories: 70, category: 'Cooked Veg' },
  { id: 'cruciferous', name: 'Roasted Cauliflower & Broccoli', portion: '1 large cup (160g)', protein: 4, carbs: 8, fat: 1, fiber: 5, calories: 60, category: 'Cruciferous' },
];

const FAT_OPTIONS: OptionItem[] = [
  { id: 'ghee', name: '1 Tsp Pure Desi A2 Ghee', portion: '5g on roti/dal', protein: 0, carbs: 0, fat: 5, fiber: 0, calories: 45, category: 'Clarified Butter' },
  { id: 'olive-oil', name: '1 Tbsp Extra Virgin Olive Oil', portion: '14g in cooking', protein: 0, carbs: 0, fat: 14, fiber: 0, calories: 120, category: 'Plant Oil' },
  { id: 'nuts-seeds', name: 'Crushed Walnuts & Pumpkin Seeds', portion: '15g topping', protein: 3, carbs: 2.5, fat: 9, fiber: 2, calories: 98, category: 'Nuts & Seeds' },
  { id: 'avocado', name: 'Fresh Hass Avocado Slices', portion: '40g sliced', protein: 1, carbs: 3, fat: 6, fiber: 2.5, calories: 65, category: 'Whole Fruit Fat' },
];

export const InteractivePlateBuilder: React.FC = () => {
  const [selectedProtein, setSelectedProtein] = useState<OptionItem>(PROTEIN_OPTIONS[0]);
  const [selectedCarb, setSelectedCarb] = useState<OptionItem>(CARB_OPTIONS[0]);
  const [selectedVeggie, setSelectedVeggie] = useState<OptionItem>(VEGGIE_OPTIONS[0]);
  const [selectedFat, setSelectedFat] = useState<OptionItem>(FAT_OPTIONS[0]);

  const totalProtein = selectedProtein.protein + selectedCarb.protein + selectedVeggie.protein + selectedFat.protein;
  const totalFiber = selectedProtein.fiber + selectedCarb.fiber + selectedVeggie.fiber + selectedFat.fiber;
  const totalCarbs = selectedProtein.carbs + selectedCarb.carbs + selectedVeggie.carbs + selectedFat.carbs;
  const totalFat = selectedProtein.fat + selectedCarb.fat + selectedVeggie.fat + selectedFat.fat;
  const totalCalories = selectedProtein.calories + selectedCarb.calories + selectedVeggie.calories + selectedFat.calories;

  const isHighProtein = totalProtein >= 25;
  const isHighFiber = totalFiber >= 10;
  const balanceScore = (isHighProtein ? 5 : 3) + (isHighFiber ? 4 : 2) + 1;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-lg">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-mono uppercase font-bold tracking-wider">
              <span>Interactive Architecture</span>
              <span>•</span>
              <span>50-25-25 Protocol</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Plate Simulation Lab
            </h3>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Satiety Score: {balanceScore}/10</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SELECTOR CONTROLS */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* STEP 1: PROTEIN */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono">1</span>
                <span>25% Protein Anchor</span>
              </label>
              <span className="text-[11px] font-mono text-emerald-600 font-semibold">Muscle Repair & Satiety</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PROTEIN_OPTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedProtein(item)}
                  className={`p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                    selectedProtein.id === item.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">{item.name}</div>
                  <div className={`text-[10px] font-mono mt-0.5 ${selectedProtein.id === item.id ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {item.protein}g protein | {item.calories} kcal
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: 50% VEGGIES */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-mono">2</span>
                <span>50% Fiber & Vegetables</span>
              </label>
              <span className="text-[11px] font-mono text-emerald-600 font-semibold">Volume & Blood Sugar Control</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {VEGGIE_OPTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedVeggie(item)}
                  className={`p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                    selectedVeggie.id === item.id
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">{item.name}</div>
                  <div className={`text-[10px] font-mono mt-0.5 ${selectedVeggie.id === item.id ? 'text-emerald-200' : 'text-slate-500'}`}>
                    {item.fiber}g fiber | {item.calories} kcal
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: 25% CARBS */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px] font-mono">3</span>
                <span>25% Complex Carbohydrate</span>
              </label>
              <span className="text-[11px] font-mono text-cyan-600 font-semibold">Glycogen & Brain Fuel</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CARB_OPTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedCarb(item)}
                  className={`p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                    selectedCarb.id === item.id
                      ? 'bg-cyan-700 text-white border-cyan-700 shadow-sm'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">{item.name}</div>
                  <div className={`text-[10px] font-mono mt-0.5 ${selectedCarb.id === item.id ? 'text-cyan-200' : 'text-slate-500'}`}>
                    {item.carbs}g carbs | {item.fiber}g fiber
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 4: HEALTHY FAT */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-mono font-bold">4</span>
                <span>Healthy Fat Accent (1–2 tsp)</span>
              </label>
              <span className="text-[11px] font-mono text-amber-600 font-semibold">Lipid & Hormone Absorption</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {FAT_OPTIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedFat(item)}
                  className={`p-2.5 text-center rounded-xl border text-xs transition-all cursor-pointer ${
                    selectedFat.id === item.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold truncate text-[11px]">{item.name}</div>
                  <div className={`text-[10px] font-mono mt-0.5 ${selectedFat.id === item.id ? 'text-amber-400' : 'text-slate-500'}`}>
                    {item.fat}g fat
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* VISUAL PLATE & MACRO READOUT */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
          
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading text-lg font-bold text-white">Plate Geometry</h4>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-full">
                50 / 25 / 25 Ratio
              </span>
            </div>

            {/* Visual Plate Graphic */}
            <div className="relative w-56 h-56 mx-auto rounded-full bg-slate-950 shadow-2xl border-4 border-slate-800 overflow-hidden flex flex-col p-1.5 my-4">
              
              {/* Top Half: 50% Vegetables */}
              <div className="h-1/2 w-full bg-emerald-900/40 border-b-2 border-dashed border-emerald-500/50 rounded-t-full flex flex-col items-center justify-center p-2 text-center">
                <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-emerald-400">50% Greens & Fiber</span>
                <span className="text-xs font-bold text-white truncate max-w-[160px]">{selectedVeggie.name}</span>
                <span className="text-[10px] font-mono text-emerald-300">{selectedVeggie.fiber}g fiber</span>
              </div>

              {/* Bottom Half Split: 25% Protein & 25% Carbs */}
              <div className="h-1/2 w-full flex">
                <div className="w-1/2 h-full bg-slate-800/80 border-r-2 border-dashed border-slate-700 rounded-bl-full flex flex-col items-center justify-center p-1 text-center">
                  <span className="text-[8px] font-mono uppercase font-bold text-slate-300">25% Protein</span>
                  <span className="text-[10px] font-bold text-white line-clamp-2 leading-tight">{selectedProtein.name}</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold mt-0.5">{selectedProtein.protein}g</span>
                </div>
                <div className="w-1/2 h-full bg-cyan-900/30 rounded-br-full flex flex-col items-center justify-center p-1 text-center">
                  <span className="text-[8px] font-mono uppercase font-bold text-cyan-300">25% Carb</span>
                  <span className="text-[10px] font-bold text-white line-clamp-2 leading-tight">{selectedCarb.name}</span>
                  <span className="text-[10px] font-mono text-cyan-400 mt-0.5">{selectedCarb.carbs}g</span>
                </div>
              </div>

              {/* Center Dot for Fat */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-amber-500 text-slate-950 flex flex-col items-center justify-center shadow-lg text-[8px] font-mono font-black">
                <span>FAT</span>
                <span className="text-[8px] font-bold">{selectedFat.fat}g</span>
              </div>
            </div>

          </div>

          {/* Macro Total Bar */}
          <div className="grid grid-cols-4 gap-2 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Protein</div>
              <div className="text-lg font-mono font-extrabold text-white">{totalProtein}g</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-emerald-400">Fiber</div>
              <div className="text-lg font-mono font-extrabold text-emerald-400">{totalFiber}g</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-cyan-400">Carbs</div>
              <div className="text-lg font-mono font-extrabold text-cyan-400">{totalCarbs}g</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-amber-400">Energy</div>
              <div className="text-lg font-mono font-extrabold text-white">~{totalCalories}</div>
            </div>
          </div>

          {/* Why This Plate Works */}
          <div className="space-y-2 text-xs text-slate-300 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400 font-mono uppercase text-[10px] tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Metabolic Mechanics:</span>
            </div>
            <p className="leading-relaxed">
              • <strong>Satiety Window:</strong> The combination of {totalProtein}g protein and {totalFiber}g dietary fiber delays gastric emptying by ~3.5–4 hours.
            </p>
            <p className="leading-relaxed">
              • <strong>Glycemic Curve:</strong> Eating high-fiber greens before complex carbs flattens post-prandial blood glucose spikes by up to 35%.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

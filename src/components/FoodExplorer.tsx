import React, { useState, useMemo } from 'react';
import { FOOD_DATABASE } from '../data/nutritionData';
import { FoodItem } from '../types';
import { Search, Dumbbell, Sparkles, Check, Database, Filter } from 'lucide-react';

export const FoodExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDietType, setSelectedDietType] = useState<string>('all');
  const [indianOnly, setIndianOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'protein' | 'fiber' | 'calories'>('protein');

  const filteredFoods = useMemo(() => {
    return FOOD_DATABASE.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tips.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyNutrients.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesDiet = selectedDietType === 'all' || 
        (selectedDietType === 'vegetarian' && (item.type === 'vegetarian' || item.type === 'vegan')) ||
        (selectedDietType === 'vegan' && item.type === 'vegan') ||
        (selectedDietType === 'non-veg' && item.type === 'non-vegetarian');

      const matchesIndian = !indianOnly || item.isIndianStaple;

      return matchesSearch && matchesCategory && matchesDiet && matchesIndian;
    }).sort((a, b) => {
      if (sortBy === 'protein') return b.protein - a.protein;
      if (sortBy === 'fiber') return b.fiber - a.fiber;
      if (sortBy === 'calories') return a.calories - b.calories;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedDietType, indianOnly, sortBy]);

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-lg">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-mono uppercase font-bold tracking-wider">
              <span>Whole Food Directory</span>
              <span>•</span>
              <span>Nutrient Density</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Macro & Micronutrient Explorer
            </h3>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-600">
          <span>{filteredFoods.length} Verified Whole Foods</span>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="space-y-4 mb-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
        
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by food name or nutrient (e.g., Moong dal, Greek yogurt, Chia seeds, Salmon...)"
            className="w-full bg-white text-slate-900 placeholder-slate-400 text-xs pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500 shadow-xs"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          
          {/* Dietary Type Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold uppercase text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Pattern:
            </span>
            {[
              { id: 'all', label: 'All Foods' },
              { id: 'vegetarian', label: 'Vegetarian' },
              { id: 'vegan', label: 'Plant-Based' },
              { id: 'non-veg', label: 'Non-Veg' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedDietType(t.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedDietType === t.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200 text-xs font-semibold rounded-lg px-3 py-1.5 text-slate-900 focus:outline-none focus:border-emerald-500 shadow-xs"
            >
              <option value="protein">Highest Protein Density</option>
              <option value="fiber">Highest Fiber Content</option>
              <option value="calories">Lowest Calorie Density</option>
            </select>
          </div>

        </div>

      </div>

      {/* FOOD CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFoods.map((item) => (
          <div
            key={item.id}
            className="bg-slate-50 hover:bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {item.servingSize}
                </span>
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">
                {item.name}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {item.tips}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-200/80">
              {/* Macro Bar */}
              <div className="grid grid-cols-4 gap-1.5 text-center bg-white p-2.5 rounded-lg border border-slate-200">
                <div>
                  <div className="text-[9px] font-mono uppercase text-slate-500">Protein</div>
                  <div className="text-sm font-mono font-bold text-slate-900">{item.protein}g</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase text-emerald-600">Fiber</div>
                  <div className="text-sm font-mono font-bold text-emerald-600">{item.fiber}g</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase text-cyan-600">Carbs</div>
                  <div className="text-sm font-mono font-bold text-cyan-600">{item.carbs}g</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase text-amber-600">Energy</div>
                  <div className="text-sm font-mono font-bold text-slate-900">{item.calories}</div>
                </div>
              </div>

              {/* Key micronutrients */}
              <div className="flex flex-wrap gap-1">
                {item.keyNutrients.map((n, i) => (
                  <span key={i} className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

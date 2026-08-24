import React, { useState } from 'react';
import { PageId, ResourceItem } from '../types';
import { DOWNLOADABLE_RESOURCES } from '../data/resourcesData';
import { PrintableResourceModal } from '../components/PrintableResourceModal';
import {
  Printer,
  Download,
  ShieldCheck,
  FileText,
  Sparkles
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onShowToast: (msg: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onShowToast,
}) => {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredResources = DOWNLOADABLE_RESOURCES.filter(
    (res) => filterCategory === 'all' || res.category.toLowerCase() === filterCategory.toLowerCase()
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Open Access Specifications</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Printable Toolkits & Reference Sheets.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              High-resolution, one-page practical reference sheets you can pin to your refrigerator, store on your mobile device, or laminate for your home kitchen.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 pb-4 border-b border-slate-200">
            {['all', 'Nutrition', 'Habits', 'Shopping', 'Fitness'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All Toolkits' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. RESOURCES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all flex flex-col justify-between group space-y-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.format} • {item.fileSize}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-[10px] uppercase font-mono tracking-wider">Module Contents:</div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {item.previewContent.sections.slice(0, 2).map((s, i) => (
                      <li key={i} className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                        <span>{s.heading}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedResource(item)}
                  className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Preview & Print</span>
                </button>
                <button
                  onClick={() => {
                    onShowToast(`Downloading ${item.title} (${item.format})...`);
                  }}
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                  title="Direct Download"
                  aria-label="Direct Download"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. PRINTABLE RESOURCE MODAL */}
      <PrintableResourceModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
        onShowToast={onShowToast}
      />

      {/* 4. DISCLAIMER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 uppercase text-xs font-mono tracking-wider block mb-1">Educational Material Scope:</strong>
            All downloadable cheat-sheets, habit trackers, and meal planning frameworks are developed for personal wellness and general educational purposes for healthy adults. They are not clinical dietetic prescriptions.
          </div>
        </div>
      </section>

    </div>
  );
};

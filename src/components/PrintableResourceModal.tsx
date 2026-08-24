import React from 'react';
import { ResourceItem } from '../types';
import { X, Printer, Download, Check, ShieldCheck, FileText } from 'lucide-react';

interface PrintableResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const PrintableResourceModal: React.FC<PrintableResourceModalProps> = ({
  resource,
  onClose,
  onShowToast,
}) => {
  if (!resource) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast(`Downloading "${resource.title}" (${resource.format}).`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl border border-slate-200 relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* MODAL HEADER */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                {resource.category} • {resource.format}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 truncate max-w-md sm:max-w-xl">
                {resource.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Print document"
              aria-label="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close resource modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PRINTABLE DOCUMENT CONTENT AREA */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-900 leading-relaxed bg-white">
          
          <div className="border-b border-slate-200 pb-6">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-heading font-bold uppercase tracking-wider text-slate-900">NOURISH & MOVE • CLINICAL NUTRITION LAB</span>
              <span className="font-mono text-xs">V2.4 SPEC</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              {resource.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              {resource.description}
            </p>
          </div>

          {/* Printable Sections */}
          <div className="space-y-4">
            {resource.printableSections.map((sec, idx) => (
              <div key={idx} className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <span className="text-xs font-mono text-emerald-600 font-bold">{String(idx + 1).padStart(2, '0')}.</span>
                  <span>{sec.heading}</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {sec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Educational Disclaimer Footer */}
          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-600 font-mono font-bold uppercase text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Educational & Lifestyle Scope</span>
            </div>
            <p>
              This printable resource is designed by a certified diet planner for general wellness among healthy adults. It does not constitute medical therapy or diagnostic advice. Consult a physician for individualized clinical care.
            </p>
          </div>

        </div>

        {/* MODAL ACTION FOOTER */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="text-xs font-mono text-slate-500">
            {resource.downloadsCount.toLocaleString()} downloads by active professionals
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4.5 py-2.5 bg-white text-slate-800 border border-slate-300 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Blueprint</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

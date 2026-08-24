import React, { useState } from 'react';
import { AlertCircle, ShieldCheck, X } from 'lucide-react';
import { MEDICAL_DISCLAIMER_TEXT } from '../data/servicesData';

export const DisclaimerBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2.5 px-4 no-print border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3" />
              Scope of Practice
            </span>
            <span className="truncate max-w-2xl sm:max-w-none text-xs text-slate-300">
              Guidance is designed for healthy adults seeking general nutrition and lifestyle education, not clinical therapy.
            </span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="text-emerald-400 font-semibold text-xs hover:text-emerald-300 transition-colors whitespace-nowrap cursor-pointer ml-auto underline underline-offset-2"
          >
            Review Clinical Disclaimer
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-2xl w-full rounded-xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase font-bold text-emerald-600 tracking-wider">
                  Transparency & Standards
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">Medical & Educational Disclaimer</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              <p>
                <strong className="text-slate-900">Educational & General Wellness Scope:</strong> The founder of this platform is a corporate professional, fitness enthusiast, and certified in diet planning. The knowledge shared here is developed through accredited certification, peer-reviewed clinical nutrition literature, exercise physiology textbooks, and empirical testing.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-800 text-xs italic border-l-4 border-l-emerald-500 leading-relaxed">
                {MEDICAL_DISCLAIMER_TEXT}
              </div>
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Conditions Requiring Direct Physician or Clinical Dietitian Care:
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li>Diagnosed diabetes (Type 1 or Type 2) requiring prescription titration</li>
                  <li>Chronic kidney, hepatic, or advanced cardiovascular conditions</li>
                  <li>Active gastrointestinal disorders (Crohn’s, Ulcerative Colitis, Celiac Disease)</li>
                  <li>Pregnancy, active lactation, or eating disorder clinical rehabilitation</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

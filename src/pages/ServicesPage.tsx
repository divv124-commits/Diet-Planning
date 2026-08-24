import React from 'react';
import { PageId } from '../types';
import { COACHING_SERVICES } from '../data/servicesData';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Coaching & Acceleration</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Coaching Programs Built for Demanding Realities.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Direct, evidence-grounded systems to master your food, accumulate progressive strength, and build lifelong adherence—without tedious macro obsessive tracking or extreme restrictions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 2 CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {COACHING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      {service.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {service.duration}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    {service.tagline}
                  </p>
                </div>

                {/* What You Learn */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <h4 className="font-bold text-xs uppercase font-mono tracking-wider text-slate-900">
                    What You Will Master:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.whatYouLearn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-xs uppercase font-mono tracking-wider text-slate-900">
                    Program Deliverables & Support:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold font-mono">✓</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for & Not for */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-200/80 space-y-1">
                    <strong className="text-emerald-800 uppercase text-[10px] font-mono tracking-wider block">Ideal For:</strong>
                    <p className="text-slate-700 text-xs leading-snug">{service.idealFor[0]}</p>
                  </div>
                  <div className="bg-red-50/50 p-3 rounded-xl border border-red-200/80 space-y-1">
                    <strong className="text-red-800 uppercase text-[10px] font-mono tracking-wider block">Not For:</strong>
                    <p className="text-slate-700 text-xs leading-snug">{service.notFor[0]}</p>
                  </div>
                </div>

              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. TRANSPARENCY & NON-MEDICAL DISCLAIMER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Scope of Coaching & Healthcare Referral Protocol</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Professional Transparency & Boundaries
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our coaching is designed strictly as nutritional education, habit architecture, and general wellness guidance for healthy working adults. <strong>We do not diagnose, prescribe, or claim to treat or cure clinical medical pathologies.</strong>
          </p>
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-400 italic">
            "Clients with medical conditions (such as advanced diabetes, renal disorders, cardiovascular pathologies, thyroid conditions) or specialized clinical requirements will be advised to work directly with a licensed medical practitioner."
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <h4 className="font-heading font-bold text-base text-slate-900">
              Do I have to cook separate meals for myself and my family?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No. Our entire philosophy is built on rebalancing home-cooked traditional meals (dal, sabzi, rotis, rice, curries). You will learn how to adjust plate proportions without needing separate cooking pots.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <h4 className="font-heading font-bold text-base text-slate-900">
              Can this work if I am a strict vegetarian or vegan?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Absolutely. We provide dedicated vegetarian and plant-based protein hierarchies (paneer, soya chunks, tofu, Greek yogurt, sprouted moong, lentils, seeds) so you hit 80g–120g of protein effortlessly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <h4 className="font-heading font-bold text-base text-slate-900">
              What if I travel frequently or eat out at client dinners?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We provide specific restaurant and food delivery playbooks so you can identify high-protein, blood-sugar-friendly options anywhere from airports to hotel buffets without feeling restricted.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <h4 className="font-heading font-bold text-base text-slate-900">
              Do I need a gym membership for the fitness guidance?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No. We offer both home dumbbell routines and gym splits. 3 focused sessions of 40 minutes per week is all that is required to build significant strength and postural support.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

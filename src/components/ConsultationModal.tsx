import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Mail, Send, AlertCircle } from 'lucide-react';
import { COACHING_SERVICES } from '../data/servicesData';
import { notifyEnrollment, ADMIN_NOTIFICATION_EMAIL } from '../services/emailService';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
  initialServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
  initialServiceId = '30-day-habits-program',
}) => {
  const [step, setStep] = useState<1 | 2>(1); // 1 = form, 2 = confirm dispatch
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('Build sustainable nutrition & protein habits');
  const [dietaryType, setDietaryType] = useState('Vegetarian');
  const [biggestChallenge, setBiggestChallenge] = useState('');
  const [confirmedNonMedical, setConfirmedNonMedical] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailDispatchStatus, setEmailDispatchStatus] = useState<'pending' | 'sent' | 'fallback'>('pending');

  if (!isOpen) return null;

  const currentServiceObj = COACHING_SERVICES.find(s => s.id === selectedService) || COACHING_SERVICES[0];

  const handleOpenConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmedNonMedical) {
      alert('Please confirm that you understand this is general nutrition and lifestyle education for healthy adults, not medical treatment.');
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const emailResult = await notifyEnrollment({
        serviceTitle: currentServiceObj.title,
        serviceId: currentServiceObj.id,
        duration: currentServiceObj.duration,
        fullName,
        email,
        phone,
        occupation,
        primaryGoal,
        dietaryType,
        biggestChallenge
      });

      if (emailResult.success) {
        setEmailDispatchStatus('sent');
        onShowToast(`Application submitted! Notification dispatched to ${ADMIN_NOTIFICATION_EMAIL}`);
      } else {
        setEmailDispatchStatus('fallback');
        onShowToast('Application recorded successfully.');
      }
    } catch (err) {
      console.warn('Notification log:', err);
      setEmailDispatchStatus('fallback');
      onShowToast('Application recorded successfully.');
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setEmailDispatchStatus('pending');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl border border-slate-200 relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold shadow-xs">
              DR
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                Application Desk
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                Coaching Program Intake
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close application modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-lg">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-slate-900">
                Application Received
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{fullName || 'there'}</strong>. We have registered your application for the <strong className="text-slate-900">{currentServiceObj.title}</strong>. An initial consultation assessment will be dispatched to <strong className="text-slate-900">{email}</strong> within 24 hours.
              </p>
              {emailDispatchStatus === 'sent' && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl max-w-md mx-auto text-xs text-emerald-800 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Email notification sent to {ADMIN_NOTIFICATION_EMAIL}</span>
                </div>
              )}
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          ) : step === 2 ? (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-150">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-emerald-600 text-white rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-emerald-950">
                    Confirm Application & Email Notification
                  </h4>
                  <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                    Submitting this form will register your coaching intake and dispatch an email notification to <strong className="font-mono">{ADMIN_NOTIFICATION_EMAIL}</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="font-mono font-bold uppercase text-[10px] text-slate-500">Summary of Submission</div>
                <div className="grid grid-cols-2 gap-2 text-slate-700">
                  <div><strong>Applicant:</strong> {fullName}</div>
                  <div><strong>Email:</strong> {email}</div>
                  <div><strong>Track:</strong> {currentServiceObj.title}</div>
                  <div><strong>Diet:</strong> {dietaryType}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Back / Edit Details
                </button>
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending via Gmail...' : 'Confirm & Dispatch'}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleOpenConfirm} className="space-y-4">
              
              {/* Program Selection */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Select Program Track
                </label>
                <div className="space-y-2">
                  {COACHING_SERVICES.map((srv) => (
                    <label
                      key={srv.id}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedService === srv.id
                          ? 'bg-emerald-50/60 border-emerald-500 shadow-xs'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={srv.id}
                        checked={selectedService === srv.id}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="mt-1 accent-emerald-600"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-sm text-slate-900">{srv.title}</span>
                          <span className="text-[10px] font-mono uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">{srv.duration}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{srv.tagline}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Maya Chen"
                    className="w-full bg-slate-50 text-slate-900 text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@work.com"
                    className="w-full bg-slate-50 text-slate-900 text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-50 text-slate-900 text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Occupation / Typical Schedule
                  </label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    placeholder="e.g. Tech Lead / Long desk hours"
                    className="w-full bg-slate-50 text-slate-900 text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Goals & Dietary Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Goal Focus
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option>Build sustainable nutrition & protein habits</option>
                    <option>Lose body fat without crash dieting</option>
                    <option>Begin strength training for longevity</option>
                    <option>Overcome 4 PM energy crashes and sugar cravings</option>
                    <option>Vegetarian/Plant-based protein optimization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Dietary Pattern
                  </label>
                  <select
                    value={dietaryType}
                    onChange={(e) => setDietaryType(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option>Vegetarian (Dairy included)</option>
                    <option>Eggetarian</option>
                    <option>Omnivore / Non-Vegetarian</option>
                    <option>100% Plant-Based (Vegan)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  What is your primary friction point right now?
                </label>
                <textarea
                  rows={2}
                  value={biggestChallenge}
                  onChange={(e) => setBiggestChallenge(e.target.value)}
                  placeholder="e.g. Erratic work travel, evening hunger, lack of simple meal prep systems..."
                  className="w-full bg-slate-50 text-slate-900 text-xs p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* NON-MEDICAL DISCLAIMER ACKNOWLEDGEMENT */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2 text-xs">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={confirmedNonMedical}
                    onChange={(e) => setConfirmedNonMedical(e.target.checked)}
                    className="mt-0.5 accent-emerald-600"
                  />
                  <span className="text-slate-600 text-xs leading-relaxed">
                    <strong className="text-slate-900">Scope of Practice Confirmation:</strong> I understand that this coaching program provides educational and healthy lifestyle guidance for healthy adults. The coach is a certified diet planning specialist, not a licensed physician or clinical dietitian.
                  </span>
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Review & Send Application</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

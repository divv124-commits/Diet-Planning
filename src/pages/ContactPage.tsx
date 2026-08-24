import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Mail,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
  AlertCircle
} from 'lucide-react';
import { notifyContactInquiry, ADMIN_NOTIFICATION_EMAIL } from '../services/emailService';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('30-Day Healthy Habits Program');
  const [message, setMessage] = useState('');
  const [confirmedNonMedical, setConfirmedNonMedical] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handlePreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmedNonMedical) {
      alert('Please confirm that your message is for general nutrition education or lifestyle coaching, not acute medical treatment.');
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmSend = async () => {
    setIsSubmitting(true);
    try {
      const res = await notifyContactInquiry({
        fullName: name,
        email,
        topic: inquiryType,
        message
      });

      if (res.success) {
        onShowToast(`Message received! Notification dispatched to ${ADMIN_NOTIFICATION_EMAIL}`);
      } else {
        onShowToast('Message received! We will reply shortly.');
      }
    } catch (err) {
      console.warn('Inquiry dispatch note:', err);
      onShowToast('Message received! We will reply shortly.');
    } finally {
      setIsSubmitting(false);
      setShowConfirmModal(false);
      setIsSent(true);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Direct Inquiries</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Let's Connect & Architect Your Program.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Have a question about our 30-day program, 1-on-1 coaching, corporate wellness workshops, or podcast collaborations? Reach out below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Information & Social */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
              <h3 className="font-heading text-xl font-bold text-slate-900">Contact Information</h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider">Direct Channel</div>
                    <a
                      href="mailto:divyaratnakar07@gmail.com"
                      className="text-emerald-700 hover:text-emerald-800 font-mono text-xs mt-0.5 block hover:underline"
                    >
                      divyaratnakar07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider">Response Window</div>
                    <div className="text-slate-600 text-xs mt-0.5">Within 24 business hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider">Location & Availability</div>
                    <div className="text-slate-600 text-xs mt-0.5">Remote Global (IST / UTC+5:30)</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider">
                  Media Feeds:
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.youtube.com/watch?v=r_Gew2qKYJs&t=366s"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                    aria-label="YouTube Podcast Video"
                    title="Watch Podcast on YouTube"
                  >
                    <Youtube className="w-4 h-4 text-red-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/divv_a_tara/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                    aria-label="Instagram Profile"
                    title="@divv_a_tara on Instagram"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/divyaratnakar/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                    aria-label="LinkedIn Profile"
                    title="Divya Ratnakar on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-sky-600" />
                  </a>
                </div>
              </div>

            </div>

            {/* Scope Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 uppercase font-mono text-[10px] tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Scope of Guidance Reminder:</span>
              </div>
              <p className="text-xs leading-relaxed">
                All communications and guidance are educational in nature, designed for generally healthy adults. For acute clinical conditions, severe pathologies, or medication-related dietetics, please consult a licensed medical physician.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              
              {isSent ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Message Received</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your note regarding <strong>{inquiryType}</strong> has been logged. We will review and reply to <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-3 px-6 py-2.5 bg-slate-900 text-white text-xs uppercase font-bold tracking-wider rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : showConfirmModal ? (
                <div className="space-y-6 py-2 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                    <div className="p-2 bg-emerald-600 text-white rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-emerald-950">
                        Confirm Message & Email Dispatch
                      </h4>
                      <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                        Are you sure you want to send this inquiry? An email notification will be dispatched to <strong className="font-mono">{ADMIN_NOTIFICATION_EMAIL}</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                    <div><strong>From:</strong> {name} ({email})</div>
                    <div><strong>Topic:</strong> {inquiryType}</div>
                    <div className="text-slate-600 italic line-clamp-3 mt-1">"{message}"</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setShowConfirmModal(false)}
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Back / Edit
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmSend}
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Confirm & Send'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePreSubmit} className="space-y-4">
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                    Send a Message or Question
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aditi Rao"
                        className="w-full bg-slate-50 text-xs text-slate-900 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="aditi@company.com"
                        className="w-full bg-slate-50 text-xs text-slate-900 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Inquiry Subject / Protocol Focus
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-slate-50 text-xs font-medium text-slate-900 px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
                    >
                      <option>30-Day Healthy Habits Program</option>
                      <option>1-on-1 Personal Lifestyle Guidance</option>
                      <option>Corporate Wellness Workshop / Talk</option>
                      <option>Podcast Guest / Media Collaboration</option>
                      <option>General Question on Food or Strength</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Your Message or Background *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a little bit about your current routine, goals, or what you'd like to explore..."
                      className="w-full bg-slate-50 text-xs text-slate-900 p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Non-Medical Disclaimer Checkbox */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                    <input
                      type="checkbox"
                      id="contact-non-medical"
                      checked={confirmedNonMedical}
                      onChange={(e) => setConfirmedNonMedical(e.target.checked)}
                      className="mt-0.5 accent-emerald-600 w-4 h-4 rounded cursor-pointer shrink-0"
                      required
                    />
                    <label htmlFor="contact-non-medical" className="leading-snug cursor-pointer text-xs">
                      I understand that Nourish & Move provides general nutrition, movement, and habit coaching for healthy adults, and this inquiry is not for emergency medical care or clinical dietetics.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Send, CheckCircle2, AlertTriangle, Phone, Mail, Building, User, Briefcase, ChevronDown } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from './BlueprintWrapper';

export function openBookCallModal(options = {}) {
  window.dispatchEvent(new CustomEvent('open-book-call-modal', { detail: options }));
}

export default function BookCallModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    jobTitle: '',
    service: 'Artificial Intelligence & Machine Learning',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM',
    message: '',
    source: 'Book a Call Modal'
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleOpen = (e) => {
      const detail = e.detail || {};
      setFormData((prev) => ({
        ...prev,
        service: detail.service || prev.service || 'Artificial Intelligence & Machine Learning',
        source: detail.source || 'Book a Call Modal'
      }));
      setSuccessMsg('');
      setErrorMsg('');
      setIsOpen(true);
    };

    window.addEventListener('open-book-call-modal', handleOpen);
    return () => window.removeEventListener('open-book-call-modal', handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!formData.name || !formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.company || !formData.company.trim()) {
      setErrorMsg('Please enter your company name.');
      return;
    }
    if (!formData.email || !formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await api.post('/book-a-call', {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone ? formData.phone.trim() : '',
        jobTitle: formData.jobTitle ? formData.jobTitle.trim() : '',
        service: formData.service || 'Artificial Intelligence & Machine Learning',
        preferredDate: formData.preferredDate || '',
        preferredTime: formData.preferredTime || '',
        message: formData.message ? formData.message.trim() : 'Book a Call Request',
        source: formData.source || 'Book a Call Modal'
      });

      setSuccessMsg(res.data?.message || 'Your strategy call request has been received. Our engineering leads will connect with you within 24 business hours.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        jobTitle: '',
        service: 'Artificial Intelligence & Machine Learning',
        preferredDate: '',
        preferredTime: '10:00 AM - 12:00 PM',
        message: '',
        source: 'Book a Call Modal'
      });
    } catch (err) {
      setErrorMsg(err.response?.data?.error || err.message || 'Failed to submit call request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl my-auto">
        <BlueprintWrapper pulseCorners={true} className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden text-[var(--color-text)]">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)] bg-black/10 dark:bg-white/10 hover:border-[var(--color-accent)] transition-all cursor-pointer z-20"
            aria-label="Close Book a Call Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="font-mono text-[10px] sm:text-[11px] text-[var(--color-accent)] uppercase tracking-[0.2em] font-semibold mb-1">
              SCHEDULE A TECHNICAL SESSION
            </div>
            <h2 id="modal-title" className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--color-text)]">
              BOOK A STRATEGY CALL
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
              Connect directly with SMRIKAAM lead solution architects in Coimbatore. Select your preferred slot and project details.
            </p>
          </div>

          {/* Success Alert */}
          {successMsg ? (
            <div className="py-8 px-4 text-center border border-emerald-500/40 bg-emerald-500/10 rounded-sm">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold uppercase text-emerald-300 mb-2">
                SESSION SCHEDULED
              </h3>
              <p className="text-sm text-[var(--color-text)] max-w-md mx-auto leading-relaxed mb-6">
                {successMsg}
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-primary px-8 py-2.5 font-bold uppercase tracking-wider text-xs"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 border-l-4 border-rose-500 bg-rose-500/10 text-xs text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="field">
                  <label htmlFor="modal-name" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      className="input pl-9 w-full text-xs"
                    />
                    <User className="w-4 h-4 absolute left-2.5 top-2.5 text-[var(--color-text-muted)]" />
                  </div>
                </div>

                {/* Company Name */}
                <div className="field">
                  <label htmlFor="modal-company" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Company Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="modal-company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Enterprise Systems"
                      className="input pl-9 w-full text-xs"
                    />
                    <Building className="w-4 h-4 absolute left-2.5 top-2.5 text-[var(--color-text-muted)]" />
                  </div>
                </div>

                {/* Work Email */}
                <div className="field">
                  <label htmlFor="modal-email" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ananya@apexenterprise.com"
                      className="input pl-9 w-full text-xs"
                    />
                    <Mail className="w-4 h-4 absolute left-2.5 top-2.5 text-[var(--color-text-muted)]" />
                  </div>
                </div>

                {/* Phone */}
                <div className="field">
                  <label htmlFor="modal-phone" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="input pl-9 w-full text-xs"
                    />
                    <Phone className="w-4 h-4 absolute left-2.5 top-2.5 text-[var(--color-text-muted)]" />
                  </div>
                </div>

                {/* Job Title */}
                <div className="field">
                  <label htmlFor="modal-jobTitle" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Job Title / Role
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="modal-jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="VP Engineering / CTO / Head of Data"
                      className="input pl-9 w-full text-xs"
                    />
                    <Briefcase className="w-4 h-4 absolute left-2.5 top-2.5 text-[var(--color-text-muted)]" />
                  </div>
                </div>

                {/* Service Area */}
                <div className="field">
                  <label htmlFor="modal-service" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Service Area of Interest *
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input w-full text-xs"
                  >
                    <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & ML</option>
                    <option value="Industrial IoT (IIoT)">Industrial IoT (IIoT) & Edge</option>
                    <option value="Enterprise Data Engineering">Enterprise Data Engineering</option>
                    <option value="Generative AI & LLM Systems">Generative AI & LLM Systems</option>
                    <option value="DevOps & Cloud Infrastructure">DevOps & Cloud Infrastructure</option>
                    <option value="Data Governance & Security">Data Governance & Security</option>
                    <option value="Integration Services">Integration Services</option>
                    <option value="ServiceNow Solutions">ServiceNow Solutions</option>
                    <option value="Technology Advisory">Technology Advisory</option>
                    <option value="Staffing Services">Staffing & Pod Augmentation</option>
                    <option value="Accelerator Demo">BitXhift / MigrateMax / ParseMaster Demo</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="field">
                  <label htmlFor="modal-date" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="modal-date"
                      name="preferredDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="input pl-9 w-full text-xs"
                    />
                    <Calendar className="w-4 h-4 absolute left-2.5 top-2.5 text-[var(--color-text-muted)]" />
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div className="field">
                  <label htmlFor="modal-time" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <select
                      id="modal-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="input pl-9 w-full text-xs"
                    >
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM IST</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM IST</option>
                      <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM IST</option>
                      <option value="07:00 PM - 09:00 PM">07:00 PM - 09:00 PM IST (US / EU)</option>
                    </select>
                    <Clock className="w-4 h-4 absolute left-2.5 top-2.5 text-[var(--color-text-muted)]" />
                  </div>
                </div>
              </div>

              {/* Requirement Details Textarea */}
              <div className="field">
                <label htmlFor="modal-message" className="block text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                  Project Details / Requirement Focus
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current tech stack, machinery count, data goals, or transformation timeline..."
                  className="input w-full text-xs"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full justify-center py-3 text-xs font-bold uppercase tracking-wider mt-2 cursor-pointer"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    SUBMITTING REQUEST...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    CONFIRM &amp; BOOK SESSION <Send className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            </form>
          )}
        </BlueprintWrapper>
      </div>
    </div>
  );
}

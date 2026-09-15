import React, { useState, useRef, useEffect } from 'react';
import PageHero from '@/components/common/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Building,
  ExternalLink,
  ChevronDown,
  Check,
  CalendarCheck,
  ClipboardList
} from 'lucide-react';

interface CustomSelectProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
}

// Custom Luxury Animated Dropdown Component
function CustomSelect({ label, required, value, onChange, options }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
        {label} {required && <span className="text-[#8b1525]">*</span>}
      </label>

      {/* Field Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3.5 bg-white border-2 text-sm font-medium flex items-center justify-between transition-all duration-200 cursor-pointer ${isOpen
            ? 'rounded-t-xl rounded-b-none border-[#c59b27] border-b-transparent shadow-lg text-[#0a192f] ring-2 ring-[#c59b27]/10'
            : 'rounded-xl border-slate-300 hover:border-[#0a192f]/40 text-slate-800 shadow-sm'
          }`}
      >
        <span className="truncate text-left font-medium">{selectedOption.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180 text-[#c59b27]' : ''
            }`}
        />
      </button>

      {/* Connected Dropdown Menu (Zero Gap & Continuous Border) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 z-50 bg-white border-2 border-[#c59b27] border-t-0 rounded-b-xl shadow-2xl overflow-hidden py-1 max-h-60 overflow-y-auto"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm font-medium text-left flex items-center justify-between transition-all duration-150 cursor-pointer border-l-2 ${isSelected
                      ? 'bg-[#0a192f] text-[#e5be58] border-l-[#e5be58] pl-4 font-semibold'
                      : 'text-slate-700 hover:bg-[#c59b27]/10 hover:text-[#0a192f] hover:pl-5 border-l-transparent hover:border-l-[#c59b27]'
                    }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-[#e5be58] flex-shrink-0 ml-2" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const qualificationOptions = [
  { label: '12th Standard (10+2 / Any Stream)', value: '12th Standard (10+2 / Any Stream)' },
  { label: '10th Standard / Matriculation', value: '10th Standard / Matriculation' },
  { label: 'Undergraduate Degree (Completed / Pursuing)', value: 'Undergraduate Degree (Completed / Pursuing)' },
  { label: 'Diploma / Polytechnic Graduate', value: 'Diploma / Polytechnic Graduate' },
  { label: 'Other Educational Background', value: 'Other Educational Background' }
];

const courseOptions = [
  { label: 'Diploma in Hotel Management (15 Months Flagship)', value: 'Diploma in Hotel Management (15 Months Flagship)' },
  { label: 'B.Sc in Hospitality & Hotel Administration (3 Years)', value: 'B.Sc in Hospitality & Hotel Administration (3 Years)' },
  { label: 'Diploma in Culinary Arts & Bakery (1 Year)', value: 'Diploma in Culinary Arts & Bakery (1 Year)' },
  { label: 'Executive Master in Luxury Hotel Operations', value: 'Executive Master in Luxury Hotel Operations' },
  { label: 'Professional Mixology & Bar Operations', value: 'Professional Mixology & Bar Operations' }
];

// Shared field styling: fields sit on a tinted panel, so plain white/focus
// states read clearly instead of disappearing into a white card.
const fieldClass =
  'w-full px-4 py-3.5 rounded-xl bg-white border-2 border-slate-300 text-slate-900 text-sm font-medium shadow-sm ' +
  'focus:outline-none focus:border-[#c59b27] focus:ring-4 focus:ring-[#c59b27]/15 transition-all placeholder:text-slate-400 ' +
  'hover:border-[#0a192f]/40';

const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    qualification: '12th Standard (10+2 / Any Stream)',
    preferredCourse: 'Diploma in Hotel Management (15 Months Flagship)',
    message: '',
    consent: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full bg-[#f8fafc] overflow-hidden">
      {/* Page Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        title="Contact Us & Plan Your Visit"
        description="Connect with our admissions desk, experience our campus simulation labs, and begin your hospitality career."
      />

      {/* FULL WIDTH CONTAINER MATCHING NAVBAR & FOOTER PADDING */}
      <div className="w-full px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16">
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b1525]/10 text-[#8b1525] font-['Outfit'] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Campus Hub</span>
          </div>
          <h1 className="font-['Outfit'] font-black text-3xl sm:text-4xl lg:text-5xl text-[#0a192f] tracking-tight uppercase">
            Get in Touch with <span className="text-[#c59b27]">Nexstay Academy</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Whether you are exploring diploma courses, looking for fee & scholarship assistance, or planning a
            physical campus tour, our academic counselors are here to help.
          </p>
        </motion.div>

        {/* MAIN 2-COLUMN GRID: CONTACT DETAILS & ENQUIRY FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 items-start">
          {/* LEFT COLUMN: COHESIVE CONTACT DETAILS & VISIT CARDS (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Main Headquarters Dark Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#071322] text-white border-2 border-[#c59b27]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="font-['Bebas_Neue','Outfit',sans-serif] text-2xl sm:text-3xl text-white uppercase tracking-wide">Campus Headquarters</h3>
                    <span className="text-[11px] text-[#e5be58] font-bold uppercase tracking-wider">
                      Nexstay Academy of Hotel Management
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#c59b27]/15 text-[#e5be58] flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-8 text-xs sm:text-sm">
                  {/* Campus Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#e5be58] flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-0.5">
                        Campus Address
                      </span>
                      <span className="text-slate-300 leading-relaxed block">
                        6th Floor, V-Zone Building, Parayancheri,
                        <br />
                        Calicut, Pin – 673016
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#e5be58] flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-0.5">
                        Admissions Helplines
                      </span>
                      <a href="tel:+917736797333" className="text-slate-300 hover:text-[#e5be58] transition-colors block">
                        +91 77367 97333
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Direct */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-0.5">
                        WhatsApp Counseling
                      </span>
                      <a
                        href="https://wa.me/917736797333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                      >
                        <span>+91 77367 97333 (Chat Online)</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#e5be58] flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-0.5">
                        Official Inquiries Email
                      </span>
                      <a
                        href="mailto:support@nahm.in"
                        className="text-slate-300 hover:text-[#e5be58] transition-colors break-all block"
                      >
                        support@nahm.in
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#e5be58] flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-0.5">
                        Office & Visiting Hours
                      </span>
                      <span className="text-slate-300 block">Mon – Fri: 9:00 AM – 6:00 PM</span>
                      <span className="text-slate-300 block mt-0.5">Sat: 9:00 AM – 3:00 PM</span>
                      <span className="text-slate-400 text-[11px] block mt-0.5">
                        Sunday: Closed / Guided Tours By Prior Appointment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Harmonized Tour & Accreditation Combined Card */}
            {/* <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#c59b27]/15 text-[#0a192f] flex-shrink-0">
                  <Compass className="w-6 h-6 text-[#8b1525]" />
                </div>
                <div>
                  <h4 className="font-['Outfit'] font-bold text-base text-[#0a192f] uppercase tracking-tight">
                    Free Guided Campus Walkthrough
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Parents & students are invited to experience our mock hotel front desks, commercial culinary
                    suites, and interact with faculty in person.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Govt. Recognized Academy • ISO 9001:2015 Benchmark</span>
              </div>
            </div> */}
          </motion.div>

          {/* RIGHT COLUMN: REFINED HIGH-VISIBILITY ENQUIRY FORM (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-600 shadow-2xl shadow-slate-200/70 relative overflow-hidden"
          >
            {/* Header strip — dark, so the form panel below reads as a distinct highlighted block */}
            <div className="px-7 sm:px-10 pt-7 sm:pt-9 pb-6 bg-[#071322] relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5be58] mb-1">
                <CalendarCheck className="w-4 h-4" />
                <span>Direct Admission Form</span>
              </div>
              <h2 className="relative z-10 font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Admissions & Campus Enquiry
              </h2>
              <p className="relative z-10 text-slate-300 text-xs sm:text-sm mt-1">
                Fill out the official enquiry form below and our counseling desk will reach out within 2 business hours.
              </p>
            </div>

            {/* Field panel — tinted slate background makes the white inputs stand out clearly */}
            <div className="p-7 sm:p-2">
              {submitted ? (
                <div className="p-8 sm:p-12 bg-emerald-50 border border-emerald-200 rounded-3xl text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl text-emerald-950 uppercase tracking-tight mb-2">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry for{' '}
                    <strong>{formData.preferredCourse}</strong> has been logged. An academic counselor will contact
                    you via phone/WhatsApp shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        city: '',
                        qualification: '12th Standard (10+2 / Any Stream)',
                        preferredCourse: 'Diploma in Hotel Management (15 Months Flagship)',
                        message: '',
                        consent: true
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-7">
                  <div className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    <ClipboardList className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>Your Details</span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>
                          Full Name <span className="text-[#8b1525]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Phone Number <span className="text-[#8b1525]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    {/* Email Address & City / Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>
                          Email Address <span className="text-[#8b1525]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="student@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>City / Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Mumbai, Bangalore, Kochi"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    {/* CUSTOM LUXURY ANIMATED DROPDOWNS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <CustomSelect
                        label="Highest Qualification"
                        value={formData.qualification}
                        onChange={(val) => setFormData({ ...formData, qualification: val })}
                        options={qualificationOptions}
                      />

                      <CustomSelect
                        label="Preferred Course"
                        value={formData.preferredCourse}
                        onChange={(val) => setFormData({ ...formData, preferredCourse: val })}
                        options={courseOptions}
                      />
                    </div>

                    {/* Message (Optional) */}
                    <div>
                      <label className={labelClass}>
                        Message / Preferred Campus Visit Date{' '}
                        <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ask questions regarding batch dates, fees, accommodation, or specify your preferred time to visit the campus..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={fieldClass}
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer select-none p-3.5 rounded-xl bg-white border-2 border-slate-200">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-4 h-4 mt-0.5 text-[#0a192f] rounded border-slate-300 focus:ring-0 accent-[#0a192f] cursor-pointer"
                      />
                      <span className="text-xs text-slate-700 font-medium leading-snug">
                        I agree to be contacted regarding admissions, fee details, and academic notifications via
                        Phone, Email, or WhatsApp.
                      </span>
                    </label>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl bg-[#0a192f] hover:bg-[#132a4a] text-white font-['Outfit'] font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#c59b27]" />
                          <span>Submit Official Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* EMBEDDED GOOGLE MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
          className="rounded-3xl bg-white border border-slate-300 shadow-xl overflow-hidden mb-12"
        >
          {/* Map Header */}
          <div className="p-6 sm:p-8 bg-[#071322] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5be58] mb-1">
                <MapPin className="w-4 h-4" />
                <span>Geographic Location</span>
              </div>
              <h3 className="font-['Outfit'] font-bold text-xl text-white uppercase">
                Nexstay Academy Campus Location Map
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                6th Floor, V-Zone Building, Parayancheri, Calicut, Pin – 673016
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=V-Zone+Building+Parayancheri+Calicut+673016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c59b27] hover:bg-[#e5be58] text-[#0a192f] font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Responsive Map Iframe */}
          <div className="w-full h-[380px] sm:h-[450px] relative bg-slate-100">
            <iframe
              title="Nexstay Academy Campus Location Map"
              src="https://maps.google.com/maps?q=Parayancheri%20Calicut%20Kerala%20673016&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[105%]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
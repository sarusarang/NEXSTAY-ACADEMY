import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Users2,
  Globe,
  Award,
  Clock
} from 'lucide-react';
import { navItems } from './Navbar';

const socialLinks = [
  {
    name: 'Facebook',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: 'https://facebook.com'
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: 'https://instagram.com'
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    href: 'https://linkedin.com'
  },
  {
    name: 'YouTube',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: 'https://youtube.com'
  }
];

const topProgramsList = [
  { label: 'Diploma in Hotel Management', href: '/programs' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#071322] text-white overflow-hidden border-t-2 border-[#c59b27]">

      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Dot Matrix on Top Left */}
        <div className="absolute -top-10 -left-10 w-96 h-96 opacity-15 bg-[radial-gradient(#c59b27_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

        {/* Concentric Arc Circles on Bottom Right */}
        <svg
          className="absolute -bottom-36 -right-36 w-[550px] h-[550px] opacity-15 stroke-[#3b82f6]"
          fill="none"
          viewBox="0 0 600 600"
        >
          <circle cx="600" cy="600" r="150" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="600" cy="600" r="260" strokeWidth="1" />
          <circle cx="600" cy="600" r="370" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="600" cy="600" r="480" strokeWidth="1" />
          <circle cx="600" cy="600" r="580" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {/* Ambient Dark Navy Gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* FULL WIDTH CONTAINER - EXACTLY ALIGNED WITH NAVBAR (px-5 sm:px-8 lg:px-12) */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-5">

        {/* 4 COLUMNS MAIN SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 pb-12 sm:pb-14"
        >

          {/* Column 1: Brand & Accreditations (4 cols) */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img
                src="/LOGO-01.webp"
                alt="Nexstay Academy"
                className="w-12 h-12 md:w-13 md:h-13 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-['Outfit'] font-black text-lg md:text-xl text-white tracking-tight uppercase leading-none">
                  NEXSTAY ACADEMY
                </span>
                <span className="text-[9.5px] font-bold tracking-widest text-[#e5be58] uppercase mt-1">
                  OF HOTEL MANAGEMENT
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Owned and operated by Nexstay Hotels &amp; Resorts, offering a comprehensive 15-month Diploma in Hotel Management with live on-the-job training, monthly stipends, and 100% placement.
            </p>

            {/* Certification Box */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-[#e5be58] flex-shrink-0" />
                <span className="text-xs text-slate-200 font-medium leading-snug">
                  Govt. Recognized &<br />ISO 9001:2015 Certified
                </span>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-3">
                FOLLOW US
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#e5be58] text-slate-300 hover:text-[#071322] border border-white/10 hover:border-[#e5be58] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2.5 cols) */}
          <div className="lg:col-span-2 sm:pl-1">
            <h4 className="font-['Outfit'] text-sm font-bold text-white uppercase tracking-wider">
              NAVIGATION
            </h4>
            <div className="w-8 h-[2px] bg-[#c59b27] mt-1.5 mb-5 rounded-full" />

            <ul className="space-y-3 text-xs sm:text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors py-0.5"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e5be58] group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Program (3 cols) */}
          <div className="lg:col-span-3 sm:pl-1">
            <h4 className="font-['Outfit'] text-sm font-bold text-white uppercase tracking-wider">
              OUR PROGRAM
            </h4>
            <div className="w-8 h-[2px] bg-[#c59b27] mt-1.5 mb-5 rounded-full" />

            <ul className="space-y-3.5 text-xs sm:text-sm">
              {topProgramsList.map((program, idx) => (
                <li key={idx}>
                  <Link
                    to={program.href}
                    className="group flex items-start gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="text-[#c59b27] font-bold text-xs mt-0.5">•</span>
                    <span className="group-hover:text-[#e5be58] transition-colors leading-snug">{program.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Outfit'] text-sm font-bold text-white uppercase tracking-wider">
              GET IN TOUCH
            </h4>
            <div className="w-8 h-[2px] bg-[#c59b27] mt-1.5 mb-5 rounded-full" />

            {/* Address */}
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#e5be58] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                6th Floor, V-Zone Building,<br />Parayancheri, Calicut, Pin – 673016
              </span>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#e5be58] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="tel:+917736797333" className="hover:text-white transition-colors">
                  +91 77367 97333
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#e5be58] flex-shrink-0" />
              <a href="mailto:support@nahm.in" className="hover:text-white transition-colors break-all">
                support@nahm.in
              </a>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-[#e5be58] flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span>Mon–Fri: 9:00 AM – 6:00 PM</span>
                <span className="block">Sat: 9:00 AM – 3:00 PM</span>
              </div>
            </div>

            {/* Apply Button Pill */}
            <div className="pt-2">
              <Link
                to="/admission"
                className="group w-full max-w-[260px] inline-flex items-center justify-between px-5 py-3 rounded-full bg-[#e5be58] hover:bg-[#dfb13c] text-[#071322] font-['Outfit'] font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(229,190,88,0.25)] hover:scale-[1.02] active:scale-95"
              >
                <span>Apply For 2025 Intake</span>
                <span className="w-6 h-6 rounded-full bg-[#071322] text-[#e5be58] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>

        </motion.div>

        {/* BOTTOM HIGHLIGHTS RIBBON CARD - FULL WIDTH */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 sm:p-7 mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-center">

            {/* Item 1 */}
            <div className="flex items-center gap-3.5 justify-start lg:justify-center">
              <div className="text-[#e5be58]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="text-xs font-semibold text-white leading-tight">
                Industry-Focused<br />Curriculum
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3.5 justify-start lg:justify-center">
              <div className="text-[#e5be58]">
                <Users2 className="w-7 h-7" />
              </div>
              <div className="text-xs font-semibold text-white leading-tight">
                100% Placement<br />Assistance
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3.5 justify-start lg:justify-center">
              <div className="text-[#e5be58]">
                <Globe className="w-7 h-7" />
              </div>
              <div className="text-xs font-semibold text-white leading-tight">
                Global Career<br />Opportunities
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3.5 justify-start lg:justify-center">
              <div className="text-[#e5be58]">
                <Award className="w-7 h-7" />
              </div>
              <div className="text-xs font-semibold text-white leading-tight">
                Internationally<br />Recognized
              </div>
            </div>

          </div>
        </motion.div>

        {/* BOTTOM METADATA & POLICIES ROW */}
        <div className="w-full pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Nexstay Academy of Hotel Management. All rights reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-xs flex-wrap justify-center">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-600">•</span>
            <Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-slate-600">•</span>
            <Link to="/about" className="hover:text-white transition-colors">Mandatory Disclosures</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

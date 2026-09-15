import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  FileText,
  Shield,
  Scale,
  Building2,
  Mail,
  CheckCircle2,
  ExternalLink,
  Search,
  Printer,
  Copy,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  ArrowUp,
  Share2,
  Info,
  Check,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Section {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
}

const sections: Section[] = [
  { id: 'interpretation-definitions', title: 'Interpretation and Definitions', shortTitle: 'Definitions', icon: FileText },
  { id: 'acknowledgment', title: 'Acknowledgment', shortTitle: 'Acknowledgment', icon: CheckCircle2 },
  { id: 'links-to-other-websites', title: 'Links to Other Websites', shortTitle: 'Third-Party Links', icon: ExternalLink },
  { id: 'links-from-social-media', title: 'Links from a Third-Party Social Media Service', shortTitle: 'Social Media Links', icon: Share2 },
  { id: 'termination', title: 'Termination', shortTitle: 'Termination', icon: Shield },
  { id: 'limitation-of-liability', title: 'Limitation of Liability', shortTitle: 'Liability Limits', icon: Scale },
  { id: 'as-is-disclaimer', title: '"AS IS" and "AS AVAILABLE" Disclaimer', shortTitle: 'Warranty Disclaimer', icon: Info },
  { id: 'governing-law', title: 'Governing Law', shortTitle: 'Governing Law', icon: Scale },
  { id: 'disputes-resolution', title: 'Disputes Resolution', shortTitle: 'Disputes', icon: Scale },
  { id: 'eu-users', title: 'For European Union (EU) Users', shortTitle: 'EU Consumer Rights', icon: Shield },
  { id: 'us-legal-compliance', title: 'United States Legal Compliance', shortTitle: 'US Compliance', icon: Shield },
  { id: 'severability-and-waiver', title: 'Severability and Waiver', shortTitle: 'Severability & Waiver', icon: FileText },
  { id: 'translation-interpretation', title: 'Translation Interpretation', shortTitle: 'Translations', icon: Info },
  { id: 'changes-to-terms', title: 'Changes to These Terms and Conditions', shortTitle: 'Modifications', icon: Clock },
  { id: 'contact-us', title: 'Contact Us', shortTitle: 'Contact Us', icon: Mail },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<string>('interpretation-definitions');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Top reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);

      // Check sections from bottom up to find the currently active section in viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sections[i].id);
            return;
          }
        }
      }
      setActiveSection(sections[0].id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  const copyPageLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 min-h-screen relative selection:bg-[#c59b27]/30 selection:text-[#071322]">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c59b27] via-[#e5be58] to-[#dfb13c] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Luxury Compact Legal Hero Header */}
      <section className="relative w-full bg-[#071322] text-white pt-28 sm:pt-32 pb-12 sm:pb-16 border-b border-[#c59b27]/30 overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            {/* Title & Subtitle */}
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-[#e5be58] transition-colors font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
                <span className="text-slate-600">/</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#c59b27]/15 border border-[#c59b27]/40 text-[#e5be58] font-bold uppercase text-[10px] tracking-wider">
                  <Sparkles className="w-2.5 h-2.5" />
                  Legal Documentation
                </span>
              </div>

              <h1 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
                Terms and <span className="text-gold-gradient">Conditions</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Please read these terms and conditions carefully before using Our Service.
              </p>
            </div>

            {/* Quick Metadata & Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.06] border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                <Clock className="w-4 h-4 text-[#e5be58]" />
                <span>Last updated: <strong>September 03, 2026</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyPageLink}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                  title="Copy link"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#e5be58]" />
                      <span>Share Link</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                  title="Print document"
                >
                  <Printer className="w-3.5 h-3.5 text-[#e5be58]" />
                  <span>Print</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Quick Highlights Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#071322] text-[#e5be58] flex items-center justify-center mb-2.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Operating Entity</div>
            <div className="text-xs font-bold text-[#071322] mt-0.5 leading-snug">
              NEXKARE HOSPITALITY PRIVATE LIMITED
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#071322] text-[#e5be58] flex items-center justify-center mb-2.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Jurisdiction &amp; State</div>
            <div className="text-xs font-bold text-[#071322] mt-0.5 leading-snug">
              Kerala, India (Kozhikode District)
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#071322] text-[#e5be58] flex items-center justify-center mb-2.5">
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Eligibility Age</div>
            <div className="text-xs font-bold text-[#071322] mt-0.5 leading-snug">
              18+ Years Old Required
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#071322] text-[#e5be58] flex items-center justify-center mb-2.5">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Support</div>
            <div className="text-xs font-bold text-[#c59b27] mt-0.5 leading-snug">
              support@nahm.in
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Quick Navigation Bar */}
        <div className="lg:hidden mb-6 sticky top-20 z-30 bg-[#071322]/95 backdrop-blur-md p-2.5 rounded-2xl border border-[#c59b27]/30 shadow-xl">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {sections.map((sec, idx) => {
              const isCurrent = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#c59b27] text-[#071322] shadow-md font-bold'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] opacity-70">{String(idx + 1).padStart(2, '0')}</span>
                  <span>{sec.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Split: Sticky Sidebar (Desktop) + Scrolling Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

          {/* Persistent Left Navigation Sidebar Column (spans full height of content) */}
          <aside className="hidden lg:block lg:col-span-4 h-full relative">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 max-h-[calc(100vh-7.5rem)] flex flex-col">

              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#071322] text-[#e5be58] flex items-center justify-center">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-['Outfit'] font-bold text-xs uppercase tracking-wider text-[#071322]">
                    Table of Contents
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#c59b27]/15 text-[#c59b27]">
                  {sections.length} Clauses
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative my-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search clauses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c59b27]/30 focus:border-[#c59b27] transition-all"
                />
              </div>

              {/* Scrollable List of Sections */}
              <nav className="space-y-1 overflow-y-auto pr-1 flex-1 custom-scrollbar">
                {sections
                  .filter((sec) =>
                    searchQuery === '' ||
                    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    sec.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((sec, idx) => {
                    const isCurrent = activeSection === sec.id;
                    const IconComponent = sec.icon;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full group text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isCurrent
                            ? 'bg-[#071322] text-[#e5be58] font-bold shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                              isCurrent
                                ? 'bg-[#c59b27] text-[#071322]'
                                : 'bg-slate-100 text-slate-500 group-hover:bg-[#c59b27]/20 group-hover:text-[#c59b27]'
                            }`}
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <IconComponent className={`w-3.5 h-3.5 flex-shrink-0 ${isCurrent ? 'text-[#e5be58]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                          <span className="truncate">{sec.shortTitle}</span>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                            isCurrent
                              ? 'text-[#e5be58] translate-x-0.5'
                              : 'text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5'
                          }`}
                        />
                      </button>
                    );
                  })}
              </nav>

              {/* Direct Support Pill at bottom of sidebar */}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="mailto:support@nahm.in"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-[#071322] text-slate-700 hover:text-[#e5be58] border border-slate-200/80 hover:border-[#c59b27] transition-all group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Mail className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>support@nahm.in</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#e5be58]" />
                </a>
              </div>

            </div>
          </aside>

          {/* Right Column: Full Clauses Body */}
          <main className="lg:col-span-8 space-y-6">

            {/* Introductory Notice Card */}
            <div className="bg-gradient-to-br from-[#071322] to-[#0d223d] text-white p-6 sm:p-7 rounded-3xl border border-[#c59b27]/30 shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] text-[#e5be58] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Legal Agreement
                </div>
                <h2 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Terms and Conditions
                </h2>
                <div className="text-xs text-[#e5be58] font-medium">
                  Last updated: September 03, 2026 • <a href="mailto:support@nahm.in" className="underline hover:text-white">support@nahm.in</a>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-200 font-medium leading-relaxed pt-1">
                  Please read these terms and conditions carefully before using Our Service.
                </p>
              </div>
            </div>

            {/* SECTION 1: Interpretation and Definitions */}
            <section
              id="interpretation-definitions"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Interpretation and Definitions
                </h2>
              </div>

              {/* Interpretation Subsection */}
              <div className="space-y-2">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Interpretation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              {/* Definitions Subsection */}
              <div className="space-y-4 pt-2">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Definitions
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  For the purposes of these Terms and Conditions:
                </p>

                <div className="space-y-3">

                  {/* Affiliate */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </p>
                  </div>

                  {/* Country/State */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Country/State</strong> refers to: Kerala, India
                    </p>
                  </div>

                  {/* Company */}
                  <div className="p-4 rounded-2xl bg-[#071322]/[0.03] border border-[#c59b27]/30">
                    <p className="text-sm text-slate-800 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in these Terms and Conditions) refers to NEXKARE HOSPITALITY PRIVATE LIMITED, Floor No.: 2nd Floor Building No./Flat No.: 8/437-F Name Of Premises/Building: Paramban Tower Road/Street: NH 66 Bypass City/Town/Village: Ramanattukara District: Kozhikode State: Kerala PIN Code: 673633.
                    </p>
                  </div>

                  {/* Device */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                    </p>
                  </div>

                  {/* Service */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Service</strong> refers to the Website.
                    </p>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Terms and Conditions</strong> (also referred to as &quot;Terms&quot;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the{' '}
                      <a
                        href="https://www.termsfeed.com/terms-conditions-generator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c59b27] font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        TermsFeed Terms and Conditions Generator
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      .
                    </p>
                  </div>

                  {/* Third-Party Social Media Service */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.
                    </p>
                  </div>

                  {/* Website */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Website</strong> refers to www.nexstayacademy.com, accessible from{' '}
                      <a
                        href="http://nexstayacademy.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c59b27] font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        http://nexstayacademy.com/
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  {/* You */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* SECTION 2: Acknowledgment */}
            <section
              id="acknowledgment"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Acknowledgment
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>

              <div className="p-4 rounded-2xl bg-[#c59b27]/10 border border-[#c59b27]/30 flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#c59b27] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </section>

            {/* SECTION 3: Links to Other Websites */}
            <section
              id="links-to-other-websites"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Links to Other Websites
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
                </p>
              </div>
            </section>

            {/* SECTION 4: Links from a Third-Party Social Media Service */}
            <section
              id="links-from-social-media"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Links from a Third-Party Social Media Service
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service&apos;s terms and privacy policies.
              </p>
            </section>

            {/* SECTION 5: Termination */}
            <section
              id="termination"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  05
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Termination
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </section>

            {/* SECTION 6: Limitation of Liability */}
            <section
              id="limitation-of-liability"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  06
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Limitation of Liability
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.
              </p>
            </section>

            {/* SECTION 7: "AS IS" and "AS AVAILABLE" Disclaimer */}
            <section
              id="as-is-disclaimer"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  07
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Without limiting the foregoing, neither the Company nor any of the company&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </section>

            {/* SECTION 8: Governing Law */}
            <section
              id="governing-law"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  08
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Governing Law
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The laws of the Country/State, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </section>

            {/* SECTION 9: Disputes Resolution */}
            <section
              id="disputes-resolution"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  09
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Disputes Resolution
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </section>

            {/* SECTION 10: For European Union (EU) Users */}
            <section
              id="eu-users"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  10
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  For European Union (EU) Users
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
              </p>
            </section>

            {/* SECTION 11: United States Legal Compliance */}
            <section
              id="us-legal-compliance"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  11
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  United States Legal Compliance
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
              </p>
            </section>

            {/* SECTION 12: Severability and Waiver */}
            <section
              id="severability-and-waiver"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  12
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Severability and Waiver
                </h2>
              </div>

              {/* Severability Subsection */}
              <div className="space-y-2">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Severability
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>
              </div>

              {/* Waiver Subsection */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Waiver
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
              </div>
            </section>

            {/* SECTION 13: Translation Interpretation */}
            <section
              id="translation-interpretation"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  13
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Translation Interpretation
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </section>

            {/* SECTION 14: Changes to These Terms and Conditions */}
            <section
              id="changes-to-terms"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  14
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Changes to These Terms and Conditions
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.
              </p>
            </section>

            {/* SECTION 15: Contact Us */}
            <section
              id="contact-us"
              className="scroll-mt-28 bg-gradient-to-br from-[#071322] to-[#0f274a] text-white p-6 sm:p-8 rounded-3xl border border-[#c59b27]/40 shadow-xl space-y-6 relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c59b27]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="w-8 h-8 rounded-xl bg-[#c59b27] text-[#071322] flex items-center justify-center font-bold text-xs">
                  15
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-white">
                  Contact Us
                </h2>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#c59b27] text-[#071322] flex items-center justify-center flex-shrink-0 font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">By email:</div>
                    <a
                      href="mailto:support@nahm.in"
                      className="text-base sm:text-lg font-bold text-[#e5be58] hover:underline break-all"
                    >
                      support@nahm.in
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:support@nahm.in"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#c59b27] hover:bg-[#e5be58] text-[#071322] font-['Outfit'] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 flex-shrink-0"
                >
                  <span>Send Email</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#071322] text-[#e5be58] border border-[#c59b27]/50 shadow-2xl flex items-center justify-center hover:bg-[#c59b27] hover:text-[#071322] transition-all duration-200 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
}

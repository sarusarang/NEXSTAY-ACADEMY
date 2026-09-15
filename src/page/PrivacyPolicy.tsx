import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Shield,
  FileText,
  Lock,
  Database,
  Trash2,
  Share2,
  ExternalLink,
  Search,
  Printer,
  Copy,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  ArrowUp,
  Mail,
  Check,
  BookOpen,
  ArrowLeft,
  MessageSquare,
  Server,
  UserCheck,
  Building2,
  Activity,
  Layers,
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
  { id: 'collecting-personal-data', title: 'Collecting and Using Your Personal Information', shortTitle: 'Data Collected', icon: Database },
  { id: 'use-of-personal-data', title: 'Use of Your Personal Data', shortTitle: 'Data Usage & Sharing', icon: Layers },
  { id: 'text-messages-privacy', title: 'Text Messages Privacy Notice', shortTitle: 'SMS & Text Notice', icon: MessageSquare },
  { id: 'retention-of-data', title: 'Retention of Your Personal Data', shortTitle: 'Data Retention', icon: Clock },
  { id: 'transfer-of-data', title: 'Transfer of Your Personal Data', shortTitle: 'Data Transfers', icon: Share2 },
  { id: 'delete-personal-data', title: 'Delete Your Personal Data', shortTitle: 'Your Rights & Deletion', icon: Trash2 },
  { id: 'disclosure-of-data', title: 'Disclosure of Your Personal Data', shortTitle: 'Legal Disclosures', icon: Shield },
  { id: 'security-of-data', title: 'Security of Your Personal Data', shortTitle: 'Security Standards', icon: Lock },
  { id: 'service-providers', title: 'Detailed Information on the Processing of Your Personal Data', shortTitle: 'Third-Party Services', icon: Server },
  { id: 'childrens-privacy', title: "Children's and Minors' Privacy", shortTitle: "Children's Privacy", icon: UserCheck },
  { id: 'links-to-other-websites', title: 'Links to Other Websites', shortTitle: 'Third-Party Links', icon: ExternalLink },
  { id: 'changes-to-policy', title: 'Changes to this Privacy Policy', shortTitle: 'Policy Updates', icon: Activity },
  { id: 'contact-us', title: 'Contact Us', shortTitle: 'Contact Us', icon: Mail },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>('interpretation-definitions');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Top reading progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section on scroll with getBoundingClientRect
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);

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
                  <Shield className="w-2.5 h-2.5" />
                  Data Protection &amp; Privacy
                </span>
              </div>

              <h1 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
                Privacy <span className="text-gold-gradient">Policy</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
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
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Data Controller</div>
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
              <Lock className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">SMS Data Guarantee</div>
            <div className="text-xs font-bold text-[#071322] mt-0.5 leading-snug">
              Never Sold or Shared for Ads
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#071322] text-[#e5be58] flex items-center justify-center mb-2.5">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Privacy Desk</div>
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

        {/* 2-Column Split: Persistent Sticky Sidebar (Desktop) + Scrolling Content */}
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
                  {sections.length} Sections
                </span>
              </div>

              {/* Quick Search */}
              <div className="relative my-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search privacy topics..."
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

              {/* Privacy Contact Support Pill at bottom of sidebar */}
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

          {/* Right Column: Full Privacy Clauses Body */}
          <main className="lg:col-span-8 space-y-6">

            {/* Introductory Notice Card */}
            <div className="bg-gradient-to-br from-[#071322] to-[#0d223d] text-white p-6 sm:p-7 rounded-3xl border border-[#c59b27]/30 shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] text-[#e5be58] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Transparency &amp; Trust
                </div>
                <h2 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Privacy Policy
                </h2>
                <div className="text-xs text-[#e5be58] font-medium">
                  Last updated: September 03, 2026 • <a href="mailto:support@nahm.in" className="underline hover:text-white">support@nahm.in</a>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-200 font-medium leading-relaxed pt-1">
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
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
                  For the purposes of this Privacy Policy:
                </p>

                <div className="space-y-3">

                  {/* Account */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Account</strong> means a unique account created for You to access Our Service or parts of Our Service.
                    </p>
                  </div>

                  {/* Affiliate */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </p>
                  </div>

                  {/* Company */}
                  <div className="p-4 rounded-2xl bg-[#071322]/[0.03] border border-[#c59b27]/30">
                    <p className="text-sm text-slate-800 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to NEXKARE HOSPITALITY PRIVATE LIMITED, Floor No.: 2nd Floor Building No./Flat No.: 8/437-F Name Of Premises/Building: Paramban Tower Road/Street: NH 66 Bypass City/Town/Village: Ramanattukara District: Kozhikode State: Kerala PIN Code: 673633.
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
                    </p>
                  </div>

                  {/* Country/State */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Country/State</strong> refers to: Kerala, India.
                    </p>
                  </div>

                  {/* Device */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
                    </p>
                  </div>

                  {/* Personal Data */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.
                    </p>
                  </div>

                  {/* Service */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Service</strong> refers to the Website.
                    </p>
                  </div>

                  {/* Service Provider */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                    </p>
                  </div>

                  {/* Usage Data */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </p>
                  </div>

                  {/* User */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">User</strong> means any individual who accesses or uses the Service.
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

            {/* SECTION 2: Collecting and Using Your Personal Information */}
            <section
              id="collecting-personal-data"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-6"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Collecting and Using Your Personal Information
                </h2>
              </div>

              <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                Types of Data Collected
              </h3>

              {/* Personal Data subsection */}
              <div className="space-y-3">
                <h4 className="font-['Outfit'] text-sm font-bold text-[#071322] uppercase tracking-wider">
                  Personal Data
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    'Email address',
                    'First name and last name',
                    'Phone number',
                    'Address, State, Province, ZIP/Postal code, City'
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#c59b27]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Data subsection */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <h4 className="font-['Outfit'] text-sm font-bold text-[#071322] uppercase tracking-wider">
                  Usage Data
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                </p>
              </div>

              {/* Tracking Technologies and Cookies subsection */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <h4 className="font-['Outfit'] text-sm font-bold text-[#071322] uppercase tracking-wider">
                  Tracking Technologies and Cookies
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#071322] font-bold">Web Beacons.</strong> Certain sections of Our Service may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                </p>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Where required by law, We use non-essential cookies (that is, Cookies other than the Necessary / Essential Cookies described below) only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
                </p>

                <p className="text-sm text-slate-700 font-semibold">
                  We use both Session and Persistent Cookies for the purposes set out below:
                </p>

                {/* Cookie types cards */}
                <div className="space-y-3.5">
                  {/* Necessary / Essential Cookies */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-['Outfit'] font-bold text-sm text-[#071322]">Necessary / Essential Cookies</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#071322] text-[#e5be58] font-bold text-[10px] uppercase">Session Cookies</span>
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Administered by: Us</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                    </p>
                  </div>

                  {/* Cookies Policy / Notice Acceptance Cookies */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-['Outfit'] font-bold text-sm text-[#071322]">Cookies Policy / Notice Acceptance Cookies</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#c59b27]/20 text-[#071322] font-bold text-[10px] uppercase">Persistent Cookies</span>
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Administered by: Us</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Purpose:</strong> These Cookies identify whether users have accepted the use of cookies on the Website and record the consent choices You have made, so that We can honor those choices on future visits.
                    </p>
                  </div>

                  {/* Functionality Cookies */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-['Outfit'] font-bold text-sm text-[#071322]">Functionality Cookies</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#c59b27]/20 text-[#071322] font-bold text-[10px] uppercase">Persistent Cookies</span>
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">Administered by: Us</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Purpose:</strong> These Cookies allow Us to remember choices You make when You use the Website, such as remembering Your Account login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter Your preferences every time You use the Website.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* SECTION 3: Use of Your Personal Data */}
            <section
              id="use-of-personal-data"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-5"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Use of Your Personal Data
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                The Company may use Personal Data for the following purposes:
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: 'To provide and maintain Our Service',
                    desc: 'including to monitor the usage of Our Service.'
                  },
                  {
                    title: 'To manage Your Account',
                    desc: 'to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.'
                  },
                  {
                    title: 'For the performance of a contract',
                    desc: 'the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.'
                  },
                  {
                    title: 'To contact You',
                    desc: "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation."
                  },
                  {
                    title: 'To provide You with news, special offers, and general information',
                    desc: 'about other goods, services and events which We offer that are similar to those that You have already purchased or inquired about. We send such marketing communications only where permitted by applicable law: where prior consent is required (for example, under the laws applicable in the EEA and the UK), We will send them only with Your consent; otherwise, We may send them until You opt out. You may opt out or withdraw Your consent at any time by using the unsubscribe link in any marketing email We send or by contacting Us.'
                  },
                  {
                    title: 'To manage Your requests',
                    desc: 'To attend and manage Your requests to Us.'
                  },
                  {
                    title: 'For business transfers',
                    desc: 'We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about Our Service users is among the assets transferred.'
                  },
                  {
                    title: 'For other purposes',
                    desc: 'We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of Our promotional campaigns, and evaluating and improving Our Service, products, services, marketing and Your experience.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                    <div className="font-['Outfit'] text-sm font-bold text-[#071322]">{item.title}:</div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-800 font-bold">
                  We may share Your Personal Data in the following situations:
                </p>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-[#071322]">With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of Our Service, and to contact You.
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-[#071322]">For business transfers:</strong> We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-[#071322]">With Affiliates:</strong> We may share Your Personal Data with Our affiliates, in which case We will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-[#071322]">With other users:</strong> If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside the Service.
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-[#071322]">With Your consent:</strong> We may disclose Your Personal Data for any other purpose with Your consent.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: Text Messages Privacy Notice */}
            <section
              id="text-messages-privacy"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Text Messages Privacy Notice
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                You have the option to receive text (SMS) messages from Us. If You opt in to text messages, We will send You updates, notifications, and other communications as described below. When You opt in, We will collect and store the information You provide in connection with text messaging, such as Your phone number, the date and method of Your consent, and message delivery and read information.
              </p>

              {/* Strict No-Sale Highlight Box */}
              <div className="p-5 rounded-2xl bg-[#071322] text-white border border-[#c59b27]/40 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#e5be58] text-xs font-bold uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>Strict Mobile Data Protection Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. The phone numbers and consent records We collect for texting are never shared with anyone for any purpose, except the Service Providers that technically have to handle them to deliver the texts.
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Consent to receive text messages is not a condition of any purchase or use of Our Service. If You consent to receive SMS from Us, You agree to receive text messages from Us related to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Customer care and support',
                  'Account notifications, such as activity, status, or renewal reminders',
                  'Delivery notifications and updates on the status of a delivery',
                  'Authentication messages, such as one-time passwords (OTP) and passcodes',
                  'Security alerts, such as suspicious login attempts or unusual account activity',
                  'Marketing and promotional offers, discounts, and other promotional content'
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Reply STOP to opt-out. Reply HELP for support. Message &amp; data rates may apply. Messaging frequency may vary. Carriers are not liable for delayed or undelivered messages.
              </div>
            </section>

            {/* SECTION 5: Retention of Your Personal Data */}
            <section
              id="retention-of-data"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-5"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  05
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Retention of Your Personal Data
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with Our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce Our legal agreements and policies.
              </p>

              <p className="text-sm text-slate-700 leading-relaxed">
                Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data. Unless otherwise stated, the retention periods below are maximum periods (&quot;up to&quot;) and We may delete or anonymize data sooner when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data based on the purpose of processing and legal obligations:
              </p>

              {/* Retention Categories */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                  <div className="font-['Outfit'] font-bold text-sm text-[#071322]">Account Information</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>User Accounts:</strong> retained for the duration of Your Account relationship plus up to 24 months after account closure to handle any post-termination issues or resolve disputes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                  <div className="font-['Outfit'] font-bold text-sm text-[#071322]">Customer Support Data</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Support tickets and correspondence:</strong> up to 24 months from the date of ticket closure to resolve follow-up inquiries, track service quality, and defend against potential legal claims.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Chat transcripts:</strong> up to 24 months for quality assurance and staff training purposes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                  <div className="font-['Outfit'] font-bold text-sm text-[#071322]">Usage Data</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Website analytics data (cookies, IP addresses, device identifiers):</strong> up to 24 months from the date of collection, which allows us to analyze trends while respecting privacy principles.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Server logs (IP addresses, access times):</strong> up to 24 months for security monitoring and troubleshooting purposes.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <p className="text-sm text-slate-800 font-bold">
                  We may retain Personal Data beyond the periods stated above for different reasons:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <strong className="text-[#071322]">Legal obligation:</strong> We are required by law to retain specific data (e.g., financial records for tax authorities).
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <strong className="text-[#071322]">Legal claims:</strong> Data is necessary to establish, exercise, or defend legal claims.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <strong className="text-[#071322]">Your explicit request:</strong> You ask Us to retain specific information.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <strong className="text-[#071322]">Technical limitations:</strong> Data exists in backup systems that are scheduled for routine deletion.
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                You may request information about how long We will retain Your Personal Data by contacting Us.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <p className="text-sm text-slate-800 font-bold">
                  When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:
                </p>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#071322]">Deletion:</strong> Personal Data is removed from Our systems and no longer actively processed.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#071322]">Backup retention:</strong> Residual copies may remain in encrypted backups for a limited period consistent with Our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-700">
                    <strong className="text-[#071322]">Anonymization:</strong> In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: Transfer of Your Personal Data */}
            <section
              id="transfer-of-data"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  06
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Transfer of Your Personal Data
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. This means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate safeguards and, where relevant, supplementary measures. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place, including the security of Your data and other personal information.
              </p>
            </section>

            {/* SECTION 7: Delete Your Personal Data */}
            <section
              id="delete-personal-data"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  07
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Delete Your Personal Data
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Our Service may give You the ability to delete certain information about You from within the Service.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                You may update, amend, or delete Your information at any time by signing in to Your Account, if You have one, and visiting the account settings section that allows You to manage Your personal information. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  Please note, however, that We may need to retain certain information when We have a legal obligation or lawful basis to do so.
                </p>
              </div>
            </section>

            {/* SECTION 8: Disclosure of Your Personal Data */}
            <section
              id="disclosure-of-data"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-5"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  08
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Disclosure of Your Personal Data
                </h2>
              </div>

              {/* Business Transactions */}
              <div className="space-y-1.5">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Business Transactions
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </p>
              </div>

              {/* Law Enforcement */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Law Enforcement
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Under certain circumstances, the Company may disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                </p>
              </div>

              {/* Other Legal Requirements */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Other Legal Requirements
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The Company may disclose Your Personal Data in the good-faith belief that such action is necessary to:
                </p>
                <div className="space-y-2 pt-1">
                  {[
                    'Comply with a legal obligation',
                    'Protect and defend the rights or property of the Company',
                    'Prevent or investigate possible wrongdoing in connection with the Service',
                    'Protect the personal safety of Users of the Service or the public',
                    'Protect against legal liability'
                  ].map((req, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#c59b27]" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 9: Security of Your Personal Data */}
            <section
              id="security-of-data"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  09
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Security of Your Personal Data
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </section>

            {/* SECTION 10: Detailed Information on the Processing of Your Personal Data */}
            <section
              id="service-providers"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-5"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  10
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Detailed Information on the Processing of Your Personal Data
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies.
              </p>

              <div className="space-y-4 pt-1">
                <h3 className="font-['Outfit'] text-base font-bold text-[#071322]">
                  Usage, Performance and Miscellaneous
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We may use third-party Service Providers to maintain and improve Our Service.
                </p>

                {/* Third-party vendors list */}
                <div className="space-y-3.5">

                  {/* Mouseflow */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-['Outfit'] font-bold text-sm sm:text-base text-[#071322]">Mouseflow</span>
                      <span className="text-[11px] font-semibold text-slate-500">Operated by Mouseflow ApS</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Mouseflow is a session replay and heatmap tool that shows how visitors click, move, scroll, browse, and pay attention on websites. The service is operated by Mouseflow ApS.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Mouseflow service may collect information from Your device.
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://mouseflow.com/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#c59b27] hover:underline inline-flex items-center gap-1"
                      >
                        <span>The information gathered by Mouseflow is held in accordance with its Privacy Policy: https://mouseflow.com/privacy/</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* FreshDesk */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-['Outfit'] font-bold text-sm sm:text-base text-[#071322]">FreshDesk</span>
                      <span className="text-[11px] font-semibold text-slate-500">Operated by Freshworks, Inc.</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      FreshDesk is customer support software. The service is operated by Freshworks, Inc.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      FreshDesk service may collect information from Your Device.
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://www.freshworks.com/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#c59b27] hover:underline inline-flex items-center gap-1"
                      >
                        <span>The information gathered by FreshDesk is held in accordance with its Privacy Policy: https://www.freshworks.com/privacy/</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Google Places */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-['Outfit'] font-bold text-sm sm:text-base text-[#071322]">Google Places</span>
                      <span className="text-[11px] font-semibold text-slate-500">Operated by Google</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Google Places is a service that returns information about places using HTTP requests. It is operated by Google.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Google Places service may collect information from You and from Your Device for security purposes.
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://www.google.com/intl/en/policies/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#c59b27] hover:underline inline-flex items-center gap-1"
                      >
                        <span>The information gathered by Google Places is held in accordance with the Privacy Policy of Google: https://www.google.com/intl/en/policies/privacy/</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* SECTION 11: Children's and Minors' Privacy */}
            <section
              id="childrens-privacy"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  11
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Children&apos;s and Minors&apos; Privacy
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                If You are a parent or guardian and You believe Your child has provided Us with Personal Information, please contact Us. If We become aware that We have collected Personal Information from anyone under the age of 16, We will take steps to remove that information from Our servers as soon as reasonably possible.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Some countries and states set a higher age at which an individual can consent to the processing of their own Personal Information. Where We rely on consent as a legal basis and the law applicable to a User sets an age higher than 16, We may require the consent of that User&apos;s parent or guardian before We collect and use their Personal Information.
              </p>
            </section>

            {/* SECTION 12: Links to Other Websites */}
            <section
              id="links-to-other-websites"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  12
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Links to Other Websites
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
              </p>
            </section>

            {/* SECTION 13: Changes to this Privacy Policy */}
            <section
              id="changes-to-policy"
              className="scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm transition-all hover:border-[#c59b27]/40 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-xl bg-[#071322] text-[#e5be58] flex items-center justify-center font-bold text-xs">
                  13
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#071322]">
                  Changes to this Privacy Policy
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* SECTION 14: Contact Us */}
            <section
              id="contact-us"
              className="scroll-mt-28 bg-gradient-to-br from-[#071322] to-[#0f274a] text-white p-6 sm:p-8 rounded-3xl border border-[#c59b27]/40 shadow-xl space-y-6 relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c59b27]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="w-8 h-8 rounded-xl bg-[#c59b27] text-[#071322] flex items-center justify-center font-bold text-xs">
                  14
                </span>
                <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-white">
                  Contact Us
                </h2>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">
                If You have any questions about this Privacy Policy, You can contact Us:
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

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  BookOpen, Briefcase, GraduationCap,
  ChevronRight, Clock, Award, Layers,
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.12 as const };

const sV: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } } };
const iV: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } };


/* ── Data ── */
const STRUCTURE = [
  {
    icon: BookOpen,
    num: '01',
    label: 'Classroom Learning',
    days: '100 Days',
    accent: '#2563eb',
    desc: 'Foundation theory, hospitality concepts, grooming and communication.',
  },
  {
    icon: GraduationCap,
    num: '02',
    label: 'Industrial Training',
    tag: 'With Stipend',
    days: '180 Days',
    accent: '#c59b27',
    desc: 'Supervised real-hotel training inside live Nexstay properties. ₹8,000/month stipend + free food & accommodation.',
  },
  {
    icon: Briefcase,
    num: '03',
    label: 'On-the-Job Training',
    tag: 'With Stipend',
    days: '180 Days',
    accent: '#16a34a',
    desc: 'Live full-role placement within Nexstay Hotels & Resorts. ₹12,000/month stipend + free food & accommodation.',
  },
];

const SUBJECTS = [
  { num: '01', label: 'Hospitality Management' },
  { num: '02', label: 'Front Office Management' },
  { num: '03', label: 'Housekeeping Management' },
  { num: '04', label: 'Food & Beverage Service' },
  { num: '05', label: 'Food & Beverage Production' },
  { num: '06', label: 'Hospitality Sales & Marketing' },
  { num: '07', label: 'Information Technology' },
  { num: '08', label: 'Human Resources Management' },
];

const GAINS = [
  'Working knowledge of Hospitality Management Services',
  'Real, supervised work experience inside live hotel properties',
  'A polished, industry-ready professional presentation and grooming standard',
  'A completed placement record and portfolio, ready for recruiters',
];

const ELIGIBILITY = [
  'Completion of Class 12 (10+2) from a recognized board, any stream',
  'Minimum age of 17 years at the time of admission',
  'Basic spoken/written English ability (spoken English is also taught in-program)',
  'Willingness to relocate for on-the-job training placements, where applicable',
];

/* ── Sub-components ── */
function SectionBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/40 bg-[#c59b27]/[0.08] px-3.5 py-1.5 font-['Outfit'] text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8a6d1a]">
      {label}
    </span>
  );
}

function SectionHeading({ pre, gold, post }: { pre?: string; gold: string; post?: string }) {
  return (
    <h2
      className="mt-3 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-[#0a192f]"
      style={{ fontSize: 'clamp(1.55rem, 0.9rem + 2vw, 2.8rem)' }}
    >
      {pre && <span>{pre} </span>}
      <span className="text-[#c59b27]">{gold}</span>
      {post && <span> {post}</span>}
    </h2>
  );
}

/* ── Component ── */
export default function ProgramDetails() {
  const rm = useReducedMotion();

  return (
    <div className="w-full bg-[#f5f6f8]">

      {/* ═══════════════════════════════════════════
          1. PROGRAM STRUCTURE
      ═══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-white">
        {/* thin top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#071322] via-[#c59b27] to-[#071322]" />

        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-20">

          <motion.div
            variants={sV} initial={rm ? undefined : 'hidden'}
            whileInView="show" viewport={vp}
            className="mb-10 sm:mb-12"
          >
            <motion.div variants={iV}><SectionBadge label="Program Structure" /></motion.div>
            <motion.div variants={iV}>
              <SectionHeading pre="How the" gold="15 Months" post="Are Structured" />
            </motion.div>
            <motion.p variants={iV} className="mt-3 max-w-2xl font-['Outfit'] text-sm text-slate-500 leading-relaxed sm:text-[15px]">
              This diploma is designed to take a student from foundational hospitality knowledge to a job-ready professional in 15 months, through a structured mix of classroom teaching, hands-on training and on-the-job placement within Nexstay properties.
            </motion.p>
          </motion.div>

          {/* Structure cards */}
          <motion.div
            variants={sV} initial={rm ? undefined : 'hidden'}
            whileInView="show" viewport={vp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
          >
            {STRUCTURE.map(({ icon: Icon, label, tag, days, accent, desc }) => (
              <motion.div
                key={label}
                variants={iV}
                whileHover={rm ? undefined : { y: -8, transition: { duration: 0.3 } }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm hover:shadow-xl transition-shadow duration-400"
              >
                {/* Accent top stripe */}
                <div className="h-1.5 w-full rounded-t-2xl" style={{ background: accent }} />

                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl shadow-sm"
                      style={{ background: `${accent}15` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: accent }} />
                    </div>
                    <div className="text-right">
                      <span
                        className="inline-block rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider"
                        style={{ background: `${accent}15`, color: accent }}
                      >
                        {days}
                      </span>
                      {tag && (
                        <div className="mt-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{tag}</div>
                      )}
                    </div>
                  </div>

                  {/* Number + title */}
                  <div>
                    <h3 className="font-['Outfit'] text-[1.05rem] font-extrabold text-[#0a192f] leading-snug">{label}</h3>
                  </div>

                  {/* Description */}
                  <p className="font-['Outfit'] text-[13px] text-slate-500 leading-relaxed flex-1">{desc}</p>

                  {/* Bottom accent bar */}
                  <div
                    className="h-px w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Total duration bar */}
          <motion.div
            initial={rm ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-[#071322] px-6 py-4 sm:px-8 sm:py-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#c59b27]/20">
                <Layers className="h-4 w-4 text-[#c59b27]" />
              </div>
              <span className="font-['Outfit'] text-sm font-bold uppercase tracking-widest text-white/60 sm:text-[13px]">
                Total Program Duration
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#c59b27]" />
              <span className="font-['Bebas_Neue'] text-2xl tracking-wide text-[#c59b27]">15 Months</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. CURRICULUM — full-bleed dark band
      ═══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#071322] py-14 sm:py-20">
        {/* background glow */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#c59b27]/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#8b1525]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            variants={sV} initial={rm ? undefined : 'hidden'}
            whileInView="show" viewport={vp}
            className="mb-10 sm:mb-12"
          >
            <motion.span
              variants={iV}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/40 bg-white/[0.04] px-3.5 py-1.5 font-['Outfit'] text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#D9C08C]"
            >
              Curriculum / Subjects Covered
            </motion.span>
            <motion.h2
              variants={iV}
              className="mt-3 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-white"
              style={{ fontSize: 'clamp(1.55rem, 0.9rem + 2vw, 2.8rem)' }}
            >
              What You'll <span className="text-[#C6A15B]">Study</span>
            </motion.h2>
            <motion.p variants={iV} className="mt-3 max-w-xl font-['Outfit'] text-sm text-white/55 leading-relaxed sm:text-[15px]">
              A comprehensive mix of hospitality theory, live operations and professional development — 8 core disciplines across the full 15-month program.
            </motion.p>
          </motion.div>

          <motion.div
            variants={sV} initial={rm ? undefined : 'hidden'}
            whileInView="show" viewport={vp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {SUBJECTS.map(({ num, label }) => (
              <motion.div
                key={label}
                variants={iV}
                whileHover={rm ? undefined : { x: 6, transition: { duration: 0.22 } }}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-4 hover:border-[#c59b27]/50 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
              >
                {/* Number pill */}
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#c59b27]/15 font-['Bebas_Neue'] text-sm text-[#e5be58]">
                  {num}
                </div>
                <span className="font-['Outfit'] text-[13.5px] font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-snug">
                  {label}
                </span>
                <ChevronRight className="ml-auto h-4 w-4 flex-shrink-0 text-white/20 group-hover:text-[#c59b27]/60 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. YOU'LL GAIN + ELIGIBILITY + CERTIFICATION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full bg-[#f5f6f8] py-14 sm:py-20">
        <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

            {/* ── You'll Gain ── */}
            <motion.div
              variants={sV} initial={rm ? undefined : 'hidden'}
              whileInView="show" viewport={vp}
              className="rounded-2xl border border-gray-300 bg-white p-7 sm:p-9 shadow-sm"
            >
              <motion.div variants={iV}><SectionBadge label="Outcomes" /></motion.div>
              <motion.div variants={iV}>
                <SectionHeading pre="You'll" gold="Gain" />
              </motion.div>
              <motion.p variants={iV} className="mt-2 mb-6 font-['Outfit'] text-[13px] text-slate-500 leading-relaxed">
                Graduates leave with practical skills, professional habits, and a portfolio that recruiters expect from a 5-star hotel candidate.
              </motion.p>
              <div className="space-y-4">
                {GAINS.map((g, idx) => (
                  <motion.div
                    key={g}
                    variants={iV}
                    className="flex items-start gap-4 rounded-xl border border-gray-300 bg-slate-50 px-4 py-4 hover:border-[#c59b27]/30 hover:bg-[#fdf6e3]/40 transition-all duration-300"
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#c59b27] font-['Bebas_Neue'] text-xs text-white mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <p className="font-['Outfit'] text-[13.5px] leading-relaxed text-slate-700 font-medium">{g}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right column stack ── */}
            <div className="flex flex-col gap-6 sm:gap-8">

              {/* Eligibility */}
              <motion.div
                variants={sV} initial={rm ? undefined : 'hidden'}
                whileInView="show" viewport={vp}
                className="rounded-2xl bg-[#071322] p-7 sm:p-9 relative overflow-hidden"
              >
                {/* background ring */}
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#C6A15B]/[0.06]" />
                <div aria-hidden className="pointer-events-none absolute -right-4 -top-4 h-40 w-40 rounded-full border border-[#C6A15B]/[0.04]" />

                <motion.div variants={iV} className="mb-1">
                  <span className="font-['Outfit'] text-[10px] font-bold uppercase tracking-[0.22em] text-[#c59b27]">Eligibility Criteria</span>
                </motion.div>
                <motion.h3
                  variants={iV}
                  className="font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-white mb-5"
                  style={{ fontSize: 'clamp(1.3rem, 0.9rem + 1.3vw, 2.2rem)' }}
                >
                  Who Can <span className="text-[#C6A15B]">Apply</span>
                </motion.h3>

                <div className="space-y-3.5">
                  {ELIGIBILITY.map((e, idx) => (
                    <motion.div
                      key={e}
                      variants={iV}
                      className="flex items-start gap-3.5"
                    >
                      <div
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-['Bebas_Neue'] text-[11px] mt-0.5"
                        style={{ background: 'rgba(197,155,39,0.18)', color: '#e5be58' }}
                      >
                        {idx + 1}
                      </div>
                      <p className="font-['Outfit'] text-[13px] leading-relaxed text-slate-300">{e}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certification */}
              <motion.div
                variants={sV} initial={rm ? undefined : 'hidden'}
                whileInView="show" viewport={vp}
                className="rounded-2xl border-2 border-[#c59b27]/35 bg-gradient-to-br from-[#fdf6e3] via-white to-[#faf8f0] p-7 sm:p-9 relative overflow-hidden"
              >
                {/* decorative watermark */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -bottom-8 select-none font-['Bebas_Neue'] text-[120px] leading-none text-[#c59b27]/[0.06]"
                >
                  CERT
                </div>

                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#c59b27] shadow-lg shadow-[#c59b27]/30">
                    <Award className="h-7 w-7 text-[#071322]" />
                  </div>
                  <div>
                    <motion.div variants={iV}>
                      <span className="font-['Outfit'] text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a6d1a]">Certification</span>
                      <h4
                        className="mt-1.5 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-tight tracking-tight text-[#0a192f]"
                        style={{ fontSize: 'clamp(1.2rem, 0.8rem + 1.2vw, 1.9rem)' }}
                      >
                        Diploma in <span className="text-[#c59b27]">Hotel Management</span>
                      </h4>
                    </motion.div>
                    <motion.p variants={iV} className="mt-3 font-['Outfit'] text-[13.5px] leading-relaxed text-slate-600">
                      Graduates receive a <strong className="text-[#0a192f]">Diploma in Hotel Management</strong> on successful completion of classroom training, industry training, and on-the-job training requirements.
                    </motion.p>
                  </div>
                </div>

                {/* Completion checklist */}
                <motion.div variants={iV} className="mt-6 flex flex-wrap gap-2.5">
                  {['Classroom Training ✓', 'Industry Training ✓', 'On-Job Training ✓'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-[#c59b27]/40 bg-[#c59b27]/10 px-3.5 py-1.5 font-['Outfit'] text-[11px] font-bold text-[#8a6d1a]"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

              </motion.div>

              {/* Batch size info strip */}
              <motion.div
                initial={rm ? undefined : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.85, ease: EASE }}
                className="flex items-center gap-4 rounded-2xl border border-gray-300 bg-white px-6 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0a192f]">
                  <GraduationCap className="h-5 w-5 text-[#c59b27]" />
                </div>
                <div>
                  <div className="font-['Outfit'] text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Batch Size</div>
                  <div className="font-['Outfit'] text-sm font-bold text-[#0a192f]">
                    35 Students per batch —
                    <span className="text-slate-500 font-normal"> ensuring personal attention and hands-on mentoring for every student.</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Clock, Users, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.2 as const };

const imageV: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.8, ease: EASE } },
};
const contentV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const STATS = [
  { icon: Clock,    stat: '15',        sub: 'Months'          },
  { icon: BookOpen, stat: '100',       sub: 'Classroom Days'  },
  { icon: Briefcase,stat: '360',       sub: 'Training Days'   },
  { icon: Users,    stat: '35',        sub: 'Per Batch'       },
];

export default function ProgramOverview() {
  const rm = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#071322]">
      <style>{`
        .po-frame, .po-img { clip-path: none; }
        @media (min-width: 1024px) {
          .po-frame { clip-path: polygon(0 0, 97.5% 0, 90% 50%, 97.5% 100%, 0 100%); }
          .po-img   { clip-path: polygon(0 0, 96.3% 0, 88.8% 50%, 96.3% 100%, 0 100%); }
        }
      `}</style>

      <div className="grid w-full grid-cols-1 lg:grid-cols-[0.9fr_1fr]">

        {/* ── LEFT IMAGE ── */}
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[640px]">
          <div className="po-frame absolute inset-0 bg-gradient-to-b from-[#E7C77E] via-[#C6A15B] to-[#8f7238]" />
          <motion.img
            src="/1200-800.jpg.jpeg"
            alt="Diploma in Hotel Management — NAHM students in training"
            variants={rm ? undefined : imageV}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="po-img absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/75 via-transparent to-transparent" />

          {/* Script overlay */}
          <motion.div
            initial={{ opacity: 0, y: rm ? 0 : -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.45, ease: EASE }}
            className="absolute left-5 top-5 sm:left-8 sm:top-7 lg:left-10 lg:top-9"
          >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');`}</style>
            <p style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(20px, 4vw, 36px)', lineHeight: 1.05, color: '#F1DFAE' }}>
              Learn.
            </p>
            <p style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(20px, 4vw, 36px)', lineHeight: 1.05, color: '#F1DFAE' }}>
              Earn. Get Placed.
            </p>
            <span className="mt-1.5 block h-px w-24 bg-[#C6A15B]/70 sm:w-28" />
          </motion.div>

          {/* Flagship badge */}
          <motion.div
            initial={{ opacity: 0, y: rm ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="absolute bottom-5 left-5 sm:bottom-7 sm:left-8 lg:bottom-9 lg:left-10"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c59b27] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#071322] shadow-lg">
              Flagship Program
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT CONTENT ── */}
        <div className="relative flex min-h-[480px] items-center overflow-hidden bg-[#071322] lg:min-h-[640px]">
          <div aria-hidden className="pointer-events-none absolute -right-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.055]" />
          <div aria-hidden className="pointer-events-none absolute -right-8 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.035]" />

          <motion.div
            variants={contentV}
            initial={rm ? undefined : 'hidden'}
            whileInView="show"
            viewport={vp}
            className="relative z-10 w-full px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-10 xl:px-12"
          >
            {/* Eyebrow */}
            <motion.div variants={itemV} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white/[0.04] px-3.5 py-1.5">
              <span className="font-['Outfit'] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9C08C] sm:text-[11px]">
                Our Program
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemV} className="max-w-[640px]">
              <h2
                className="font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-white"
                style={{ fontSize: 'clamp(1.9rem, 1.3rem + 2.5vw, 3.75rem)' }}
              >
                Diploma in <span className="text-[#C6A15B]">Hotel Management</span>
              </h2>
            </motion.div>

            <motion.p variants={itemV} className="mt-3 max-w-[540px] font-['Outfit'] text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              A 15-month structured program taking students from foundational hospitality knowledge to a job-ready professional — through classroom teaching, hands-on industry training, and on-the-job placement within Nexstay properties.
            </motion.p>

            {/* Quick meta */}
            <motion.div variants={itemV} className="mt-5 flex flex-wrap gap-3 sm:mt-6">
              {[
                { label: '15 Months',        sub: 'Duration' },
                { label: '35 Students',       sub: 'Batch Size' },
                { label: 'Stipend + F&A',     sub: 'From Month 4' },
                { label: '100% Placement',    sub: 'Assistance' },
              ].map(({ label, sub }) => (
                <div key={label} className="rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2.5">
                  <div className="font-['Outfit'] text-xs font-bold text-[#e5be58]">{label}</div>
                  <div className="font-['Outfit'] text-[10px] text-white/50 mt-0.5">{sub}</div>
                </div>
              ))}
            </motion.div>

            {/* Duration stats */}
            <motion.div variants={itemV} className="mt-6 grid grid-cols-4 divide-x divide-white/[0.08] sm:mt-8">
              {STATS.map(({ icon: Icon, stat, sub }) => (
                <div key={sub} className="px-2 first:pl-0 sm:px-3 text-center">
                  <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#C6A15B]/15">
                    <Icon className="h-3.5 w-3.5 text-[#C6A15B]" />
                  </div>
                  <div className="font-['Bebas_Neue'] text-xl text-[#C6A15B] sm:text-2xl">{stat}</div>
                  <div className="font-['Outfit'] text-[9px] leading-tight text-white/55 sm:text-[10px]">{sub}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemV} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.div whileHover={rm ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c59b27] to-[#e5be58] px-7 py-3.5 font-['Outfit'] text-xs font-extrabold uppercase tracking-wider text-[#071322] shadow-[0_4px_20px_rgba(197,155,39,0.4)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(197,155,39,0.6)]"
                >
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <a
                href="https://wa.me/917736797333?text=Hi%20Nexstay%20Academy,%20please%20send%20me%20the%20official%20Diploma%20in%20Hotel%20Management%20brochure."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.05] px-6 py-3.5 font-['Outfit'] text-xs font-bold uppercase tracking-wider text-white hover:border-[#e5be58] hover:text-[#e5be58] transition-colors duration-300"
              >
                Download Brochure
              </a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

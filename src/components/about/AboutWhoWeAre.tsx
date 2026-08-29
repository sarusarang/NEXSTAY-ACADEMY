import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Building2, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.15 as const };

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

export default function AboutWhoWeAre() {
  const rm = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#071322]">
      <style>{`
        .ab-frame, .ab-img { clip-path: none; }
        @media (min-width: 1024px) {
          .ab-frame { clip-path: polygon(0 0, 97.5% 0, 90% 50%, 97.5% 100%, 0 100%); }
          .ab-img   { clip-path: polygon(0 0, 96.3% 0, 88.8% 50%, 96.3% 100%, 0 100%); }
        }
      `}</style>

      <div className="grid w-full grid-cols-1 lg:grid-cols-[0.9fr_1fr]">

        {/* ── LEFT IMAGE ── */}
        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[640px]">
          <div className="ab-frame absolute inset-0 bg-gradient-to-b from-[#E7C77E] via-[#C6A15B] to-[#8f7238]" />
          <motion.img
            src="/who-we-are.jpeg"
            alt="Nexstay Academy of Hotel Management Campus and Training"
            variants={rm ? undefined : imageV}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="ab-img absolute inset-0 h-full w-full object-cover"
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
            <p style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(22px, 4.5vw, 40px)', lineHeight: 1.05, color: '#F1DFAE' }}>
              Real-World Hospitality
            </p>
            <p style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(18px, 3.5vw, 32px)', lineHeight: 1.05, color: '#F1DFAE' }}>
              Built by Hoteliers
            </p>
            <span className="mt-1.5 block h-px w-28 bg-[#C6A15B]/70 sm:w-32" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: rm ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="absolute bottom-5 left-5 sm:bottom-7 sm:left-8 lg:bottom-9 lg:left-10"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c59b27] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#071322] shadow-lg">
              Nexstay Hospitality Group
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
                About Us
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemV} className="max-w-[640px]">
              <h2
                className="font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 1.4rem + 2.8vw, 4rem)' }}
              >
                Who <span className="text-[#C6A15B]">We Are</span>
              </h2>
            </motion.div>

            {/* Paragraph 1 */}
            <motion.p variants={itemV} className="mt-4 max-w-[560px] font-['Outfit'] text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              Nexstay Academy of Hotel Management (NAHM) is owned and operated by Nexstay Hotels &amp; Resorts, a premier hotel chain offering upscale, midscale, and budget properties across South India. Nexstay operates highly-rated properties across the hotel and resort segments, and channels that operational expertise directly into NAHM's training programs.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p variants={itemV} className="mt-3.5 max-w-[560px] font-['Outfit'] text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              NAHM offers a comprehensive Diploma in Hotel Management that prepares students for a successful career in the hospitality industry, combining classroom learning with real, paid, on-the-job training inside Nexstay properties.
            </motion.p>

            {/* Feature Pills */}
            <motion.div variants={itemV} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[560px]">
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#c59b27]/15">
                  <Building2 className="h-4 w-4 text-[#c59b27]" />
                </div>
                <div>
                  <div className="font-['Outfit'] text-xs font-bold text-white">Direct Hotelier Ownership</div>
                  <div className="font-['Outfit'] text-[11px] text-white/50">Nexstay Hotels &amp; Resorts</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#c59b27]/15">
                  <GraduationCap className="h-4 w-4 text-[#c59b27]" />
                </div>
                <div>
                  <div className="font-['Outfit'] text-xs font-bold text-white">Paid On-the-Job Training</div>
                  <div className="font-['Outfit'] text-[11px] text-white/50">Inside Live Properties</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemV} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.div whileHover={rm ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c59b27] to-[#e5be58] px-7 py-3.5 font-['Outfit'] text-xs font-extrabold uppercase tracking-wider text-[#071322] shadow-[0_4px_20px_rgba(197,155,39,0.4)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(197,155,39,0.6)]"
                >
                  Explore Our Program
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.05] px-6 py-3.5 font-['Outfit'] text-xs font-bold uppercase tracking-wider text-white hover:border-[#e5be58] hover:text-[#e5be58] transition-colors duration-300"
              >
                Apply for Admission
              </Link>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

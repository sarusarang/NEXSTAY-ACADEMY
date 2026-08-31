import { motion, useReducedMotion, type Variants } from 'framer-motion';
import LogoLoop from '@/components/LogoLoop';
import type { LogoItem } from '@/components/LogoLoop';

/* ──
   Hotel logos via Clearbit Logo API — serves white/transparent PNGs reliably.
   Format: https://logo.clearbit.com/<domain>
── */
const PARTNERS: LogoItem[] = [
  { title: 'CLIENTS-01', src: '/CLIENTS-01.png', alt: 'CLIENTS-01' },
  { title: 'CLIENTS-02', src: '/CLIENTS-02.png', alt: 'CLIENTS-02' },
  { title: 'CLIENTS-03', src: '/CLIENTS-03.png', alt: 'CLIENTS-03' },
  { title: 'CLIENTS-04', src: '/CLIENTS-04.png', alt: 'CLIENTS-04' },
  { title: 'CLIENTS-05', src: '/CLIENTS-05.png', alt: 'CLIENTS-05' },
  { title: 'CLIENTS-06', src: '/CLIENTS-06.png', alt: 'CLIENTS-06' },
  { title: 'CLIENTS-07', src: '/CLIENTS-07.png', alt: 'CLIENTS-07' },
  { title: 'CLIENTS-08', src: '/CLIENTS-08.png', alt: 'CLIENTS-08' },
  { title: 'CLIENTS-09', src: '/CLIENTS-09.png', alt: 'CLIENTS-09' },
  { title: 'CLIENTS-10', src: '/CLIENTS-10.png', alt: 'CLIENTS-10' },
  { title: 'CLIENTS-11', src: '/CLIENTS-11.png', alt: 'CLIENTS-11' },
  { title: 'CLIENTS-12', src: '/CLIENTS-12.png', alt: 'CLIENTS-12' },
];

const PARTNERS_ROW2: LogoItem[] = [
  { title: 'NSDC', src: '/Affiliated-1.png', alt: 'NSDC' },
  { title: 'THSC', src: '/Affiliated-2.png', alt: 'THSC' },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.2 as const };

const contentVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: EASE } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.8, ease: EASE } },
};

export default function HiringPartners() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#071322]">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Allura&family=Outfit:wght@400;600;700&display=swap');

        /* ── Exact same clip-path as home PlacementStrip ── */
        .hp-diag-frame, .hp-diag-img { clip-path: none; }
        @media (min-width: 1024px) {
          .hp-diag-frame { clip-path: polygon(0 0, 97.5% 0, 90% 50%, 97.5% 100%, 0 100%); transition: clip-path 0.4s ease; }
          .hp-diag-img   { clip-path: polygon(0 0, 96.3% 0, 88.8% 50%, 96.3% 100%, 0 100%); transition: clip-path 0.4s ease; }
        }
      `}</style>

      {/* Same grid ratio as home PlacementStrip */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-[0.9fr_1fr]">

        {/* ══ LEFT IMAGE ══ */}
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[640px]">

          {/* Gold frame behind image — shows on diagonal edge */}
          <div className="hp-diag-frame absolute inset-0 bg-gradient-to-b from-[#E7C77E] via-[#C6A15B] to-[#8f7238]" />

          <motion.img
            src="/where-our-land.jpeg"
            alt="Luxury hotel lobby where NAHM graduates are placed"
            variants={shouldReduceMotion ? undefined : imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="hp-diag-img absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#071322]/10 lg:to-[#071322]/25" />

          {/* Script overlay */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="absolute left-5 top-5 sm:left-8 sm:top-7 lg:left-10 lg:top-9"
          >
            <p style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(22px, 4.2vw, 38px)', lineHeight: 1.05, color: '#F1DFAE' }}>
              Your Future
            </p>
            <p style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(22px, 4.2vw, 38px)', lineHeight: 1.05, color: '#F1DFAE' }}>
              Our Partners
            </p>
            <span className="mt-1.5 block h-px w-24 bg-[#C6A15B]/70 sm:w-28" />
          </motion.div>
        </div>

        {/* ══ RIGHT CONTENT ══ */}
        <div className="relative flex min-h-[480px] items-center overflow-hidden bg-[#071322] lg:min-h-[640px]">

          {/* Decorative rings */}
          <div aria-hidden className="pointer-events-none absolute -right-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.055]" />
          <div aria-hidden className="pointer-events-none absolute -right-8 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.035]" />
          <div aria-hidden className="pointer-events-none absolute -left-32 bottom-[-120px] h-[300px] w-[300px] rounded-full bg-[#C6A15B]/[0.025] blur-3xl" />

          <motion.div
            variants={contentVariants}
            initial={shouldReduceMotion ? undefined : 'hidden'}
            whileInView="show"
            viewport={vp}
            className="relative z-10 w-full px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-10 lg:py-10 xl:px-12 xl:py-12"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white/[0.04] px-3.5 py-1.5 sm:mb-6"
            >
              <span className="font-['Outfit'] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9C08C] sm:text-[11px]">
                Hiring Partners
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="max-w-[660px]">
              <h2
                className="font-['Bebas_Neue','Outfit',sans-serif] font-semibold leading-[1.1] tracking-tight text-white uppercase"
                style={{ fontSize: 'clamp(1.65rem, 1.15rem + 2.1vw, 3.5rem)' }}
              >
                Where Our <span className="text-[#C6A15B]">Graduates Land</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-3 max-w-[540px] font-['Outfit'] text-sm leading-relaxed text-slate-300 sm:text-[15px]"
            >
              Our graduates are placed at India's most iconic luxury hotel brands and top international hospitality chains, with a dedicated campus placement cell to support every student.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-6 grid grid-cols-3 divide-x divide-white/[0.08] sm:mt-8"
            >
              {[
                { stat: '100%', label: 'Placement Rate' },
                { stat: '50+', label: 'Partner Hotels' },
                { stat: 'Pan-India', label: '& International' },
              ].map(({ stat, label }) => (
                <div key={stat} className="px-3 first:pl-0 sm:px-4">
                  <div className="font-['Bebas_Neue'] text-xl text-[#C6A15B] sm:text-2xl md:text-3xl">{stat}</div>
                  <div className="font-['Outfit'] text-[10px] font-medium leading-tight text-white/60 sm:text-[11px]">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* ── Logo loop 1 ── */}
            <motion.div variants={itemVariants} className="mt-7 sm:mt-10">
              <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
                <span className="h-px w-6 bg-[#C6A15B]/60 sm:w-8" />
                <span className="font-['Outfit'] text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-[13px]">
                  Our Hiring Partners
                </span>
              </div>
              <div className="py-2 transition-opacity duration-300 hover:opacity-90">
                <LogoLoop
                  logos={PARTNERS}
                  speed={34}
                  hoverSpeed={8}
                  direction="left"
                  logoHeight={52}
                  gap={40}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#071322"
                  ariaLabel="Hiring partner logos"
                />
              </div>
            </motion.div>

            {/* ── Logo loop 2 ── */}
            <motion.div variants={itemVariants} className="mt-5 sm:mt-8">
              <div className="mb-3.5 flex items-center gap-3 sm:gap-4">
                <span className="h-px flex-1 bg-white/[0.09]" />
                <span className="font-['Outfit'] whitespace-nowrap text-[11px] font-medium text-white/50 sm:text-[13px]">
                  Affiliated &amp; Recognized Nationally
                </span>
                <span className="h-px flex-1 bg-white/[0.09]" />
              </div>
              <div className="py-1.5 transition-opacity duration-300 hover:opacity-90">
                <LogoLoop
                  logos={PARTNERS_ROW2}
                  speed={24}
                  hoverSpeed={8}
                  direction="right"
                  logoHeight={52}
                  gap={40}
                  fadeOut
                  fadeOutColor="#071322"
                  ariaLabel="Affiliated partner logos"
                />
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
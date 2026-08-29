import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  Building2,
  IndianRupee,
  PackageCheck,
  Landmark,
  Globe2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.15 as const };

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

const fadeRightSlow: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 1.3, ease: EASE } },
};

const DIFFERENTIATORS = [
  {
    num: '01',
    icon: Building2,
    title: 'Real-Property Training',
    desc: 'Training happens inside real, operating Nexstay Hotels & Resorts properties',
    tag: 'Live Hotel Operations',
  },
  {
    num: '02',
    icon: IndianRupee,
    title: 'Paid During Training',
    desc: 'Students are paid during training, not just after graduation',
    tag: 'Monthly Stipend & F&A',
  },
  {
    num: '03',
    icon: PackageCheck,
    title: 'Free Essential Resources',
    desc: 'Free resources: uniforms, practical kits, and master record books',
    tag: 'Zero Hidden Fees',
  },
  {
    num: '04',
    icon: Landmark,
    title: 'Education Loan Support',
    desc: 'Support with education loans for eligible students',
    tag: 'Financial Assistance',
  },
  {
    num: '05',
    icon: Globe2,
    title: '100% Placement Assistance',
    desc: '100% placement assistance, domestic and international',
    tag: 'Global Hospitality Careers',
  },
];

const BG_IMAGE = "/why-we-are.jpeg";

export default function AboutWhyDifferent() {
  const rm = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#071322] py-16 sm:py-16 lg:py-24 text-white">
      {/* Background Image with Deep Luxury Overlays */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <motion.img
          src={BG_IMAGE}
          alt="Nexstay Luxury Hotel Interior"
          className="h-full w-full object-cover object-center"
          initial={rm ? undefined : { scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={vp}
          transition={{ duration: 2.2, ease: EASE }}
        />
        <div className="absolute inset-0 bg-[#071322]/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071322] via-[#071322]/20 to-[#071322]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── LEFT COLUMN: STICKY INTRO & FEATURE CALLOUT ── */}
          <motion.div
            variants={fadeRightSlow}
            initial={rm ? undefined : 'hidden'}
            whileInView="show"
            viewport={vp}
            className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white/[0.04] px-4 py-1.5 mb-5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
                <span className="font-['Outfit'] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#D9C08C]">
                  The NAHM Advantage
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.02] tracking-tight text-white"
                style={{ fontSize: 'clamp(2.4rem, 1.6rem + 3.2vw, 4.4rem)' }}
              >
                Why We're <br className="hidden sm:inline" />
                <span className="text-[#C6A15B]">Different</span>
              </h2>

              {/* Description */}
              <p className="mt-5 font-['Outfit'] text-sm sm:text-base leading-relaxed text-slate-300 font-light max-w-lg">
                Built by active hoteliers, our training model solves the biggest gap in hospitality education: real operational competence before graduation.
              </p>
            </div>

            {/* Visual Highlight Card */}
            <div className="mt-8 sm:mt-10 rounded-2xl border border-white/15 bg-[#071322]/80 p-6 sm:p-7 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c59b27]/20 text-[#e5be58] border border-[#c59b27]/40">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#e5be58]">
                    Industry-First Model
                  </div>
                  <div className="font-['Outfit'] text-sm font-semibold text-white">
                    Experience That Counts
                  </div>
                </div>
              </div>

              <p className="font-['Outfit'] text-[13px] text-slate-300 leading-relaxed font-light">
                Graduates step out with real hotel credentials, verified stipend track records, and immediate employability across 5-star chains.
              </p>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 font-['Outfit'] text-xs font-bold text-[#e5be58] hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Explore Admissions</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="font-['Outfit'] text-[11px] text-white/50">Batch 2025–26</span>
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT COLUMN: 5 NUMBERED DIFFERENTIATOR TILES ── */}
          <motion.div
            variants={containerVariants}
            initial={rm ? undefined : 'hidden'}
            whileInView="show"
            viewport={vp}
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-5"
          >
            {DIFFERENTIATORS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  variants={fadeUpSlow}
                  whileHover={rm ? undefined : { x: 6, transition: { duration: 0.25 } }}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 rounded-2xl border border-white/15 bg-[#071322]/80 p-5 sm:p-6 lg:p-7 backdrop-blur-md transition-all duration-300 hover:border-[#c59b27]/60 hover:bg-[#0b1c30]/90 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    {/* Number & Icon Pill */}
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-[#0a192f] text-[#e5be58] border border-white/10 group-hover:border-[#c59b27]/50 group-hover:bg-[#c59b27] group-hover:text-[#071322] transition-colors duration-300 shadow-inner">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-['Bebas_Neue'] text-lg text-[#C6A15B] tracking-wider">
                          #{item.num}
                        </span>
                        <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-[#e5be58]/80">
                          {item.tag}
                        </span>
                      </div>

                      <p className="font-['Outfit'] text-sm sm:text-base font-semibold text-white leading-snug group-hover:text-[#e5be58] transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Accent Pill */}
                  <div className="shrink-0 self-end sm:self-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#c59b27]/10 px-3 py-1 font-['Outfit'] text-[10.5px] font-bold uppercase tracking-wider text-[#e5be58]">
                      <span>Verified</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

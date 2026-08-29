import { motion, useReducedMotion } from 'framer-motion';
import {
  Landmark,
  GraduationCap,
  BedDouble,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';

const WHATSAPP_NUMBER = '917736797333';

function buildWhatsAppLink(context: string) {
  const message = `Hi NAHM, I'd like to apply for admission. (${context})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const feeItems = [
  { icon: Landmark, label: 'Admission Fee', note: 'One-time, secures your seat', amount: 10000, optional: false },
  { icon: GraduationCap, label: 'Course Fee', note: 'Full program tuition & practical labs', amount: 90000, optional: false },
  { icon: BedDouble, label: 'Hostel Fee', note: '3 meals/day · 3 months · optional', amount: 25500, optional: true },
];

const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`;
const totalWithHostel = feeItems.reduce((sum, f) => sum + f.amount, 0);
const totalWithoutHostel = feeItems.filter((f) => !f.optional).reduce((sum, f) => sum + f.amount, 0);

/* ─── Shared easing curve ─── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Reusable animation variants ─── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: EASE } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, delay, ease: EASE } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, delay, ease: EASE } },
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function FeeOverview() {
  const shouldReduceMotion = useReducedMotion();
  const vp = { once: true, margin: '-80px' as const };

  return (
    <section className="relative w-full overflow-hidden bg-[#071322]">
      <div className="relative flex flex-col lg:block w-full lg:min-h-[760px]">

        {/* ── Background photo layer ── */}
        <motion.div
          className="relative order-1 h-[52vw] max-h-[380px] min-h-[240px] w-full overflow-hidden
            sm:h-[50vh] sm:max-h-none
            lg:absolute lg:inset-0 lg:h-full lg:max-h-none lg:min-h-[760px]"
          variants={fadeIn(0.2)}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView="show"
          viewport={vp}
        >
          <motion.img
            src="/one-fee.jpeg"
            alt="NAHM professional training kitchen"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={vp}
            transition={{ duration: 1.6, ease: EASE }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 lg:bg-none" />
        </motion.div>

        {/* ── Diagonal navy content panel ── */}
        <motion.div
          className="relative z-10 order-2 w-full bg-[#071322] pb-14 pt-10 sm:pb-16 sm:pt-14
            lg:absolute lg:inset-y-0 lg:left-0 lg:w-[68%] xl:w-[64%] 2xl:w-[60%] lg:py-0
            lg:[clip-path:polygon(0_0,100%_0,84%_100%,0_100%)] shadow-2xl"
          variants={fadeIn(0)}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView="show"
          viewport={vp}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content */}
          <motion.div
            variants={container}
            initial={shouldReduceMotion ? undefined : 'hidden'}
            whileInView="show"
            viewport={vp}
            className="relative mx-auto max-w-2xl px-4 sm:px-8
              lg:mx-0 lg:max-w-[620px] xl:max-w-[700px] 2xl:max-w-[780px]
              lg:h-full lg:flex lg:flex-col lg:justify-center
              lg:pl-10 xl:pl-16 2xl:pl-20 lg:pr-8 xl:pr-12"
          >
            {/* Eyebrow pill */}
            <motion.div variants={fadeUp(0)}>
              <span className="inline-block rounded-full border border-[#c59b27]/40 bg-[#c59b27]/10
                px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e5be58] font-['Outfit']">
                Course Fee Structure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp(0.05)}
              className="font-['Bebas_Neue','Outfit',sans-serif] mt-4 sm:mt-5
                text-[clamp(2.4rem,5.5vw,4.2rem)] uppercase leading-[0.95] tracking-tight text-white"
            >
              One Fee.<br />Full Clarity.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp(0.1)}
              className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-300 max-w-xl font-['Outfit']"
            >
              No hidden charges, no surprise add-ons — transparent pricing covering uniform kit, practical labs, and placement training.
            </motion.p>

            {/* Fee table */}
            <motion.div
              variants={scaleIn(0.15)}
              className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-md overflow-hidden shadow-2xl"
            >
              <motion.div variants={container} initial={shouldReduceMotion ? undefined : 'hidden'} whileInView="show" viewport={vp}>
                {feeItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={rowItem}
                      className={`flex items-center justify-between gap-3 px-4 sm:px-6 py-4 transition-colors hover:bg-white/[0.05] ${
                        idx !== feeItems.length - 1 ? 'border-b border-white/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#c59b27]/15 border border-[#c59b27]/30 flex items-center justify-center flex-shrink-0"
                        >
                          <Icon className="w-5 h-5 text-[#e5be58]" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-['Outfit'] font-bold text-xs sm:text-sm md:text-base text-white whitespace-nowrap">
                              {item.label}
                            </h3>
                            {item.optional && (
                              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#e5be58] bg-[#e5be58]/15 border border-[#e5be58]/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                                Optional
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-tight">{item.note}</p>
                        </div>
                      </div>
                      <div className="font-['Outfit'] font-bold text-sm sm:text-base md:text-xl text-white flex-shrink-0 whitespace-nowrap tabular-nums text-right pl-2">
                        {formatINR(item.amount)}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Total row */}
                <motion.div
                  variants={fadeUp(0)}
                  className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-r from-[#c59b27]/20 via-[#c59b27]/10 to-transparent border-t border-[#c59b27]/30"
                >
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#e5be58] mb-0.5">
                      Total, With Hostel
                    </div>
                    <div className="text-xs text-slate-300 whitespace-nowrap">
                      {formatINR(totalWithoutHostel)} without optional hostel
                    </div>
                  </div>
                  <div className="font-['Outfit'] font-black text-xl sm:text-2xl md:text-3xl text-[#e5be58] flex-shrink-0 whitespace-nowrap tabular-nums text-right pl-2">
                    {formatINR(totalWithHostel)}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* CTA button */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 sm:mt-7">
              <motion.a
                href={buildWhatsAppLink('Fee overview')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-full border-2 border-[#c59b27] bg-[#c59b27]/10
                  px-7 py-3.5 text-xs sm:text-sm font-bold font-['Outfit'] uppercase tracking-wider text-[#e5be58]
                  transition-colors duration-300 hover:bg-[#c59b27] hover:text-[#071322] shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Apply Now</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

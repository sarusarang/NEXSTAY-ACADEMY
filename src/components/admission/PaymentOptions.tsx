import { motion, useReducedMotion } from 'framer-motion';
import { Wallet, CalendarClock } from 'lucide-react';

const paymentOptions = [
  {
    icon: Wallet,
    title: 'One-Time Payment',
    badge: 'Preferred & Hassle-Free',
    desc: "Pay the full fee upfront and you're set for the entire program — no recurring invoices, fee deadlines, or further paperwork.",
    image: '/online-pay.jpeg',
  },
  {
    icon: CalendarClock,
    title: 'Installment Plan',
    badge: 'Term-Based Flexibility',
    desc: 'Split your fee across the academic term, subject to academy policy. Speak with your counselor for tailored monthly schedules.',
    image: '/offline-pay.jpeg',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: '-80px' as const };

export default function PaymentOptions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-[#071322] text-white py-14 sm:py-14 lg:py-20 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <motion.span
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#e5be58] bg-[#e5be58]/10
              px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#e5be58]/30"
          >
            Payment Options
          </motion.span>

          <motion.h2
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.9, delay: 0.06, ease: EASE }}
            className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none"
          >
            Pay The Way <span className="text-[#e5be58]">That Works For You</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-['Outfit']"
          >
            We provide transparent and versatile payment modes to ensure smooth admission without financial stress.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {paymentOptions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={vp}
                transition={{ duration: 0.9, delay: idx * 0.14, ease: EASE }}
                whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
                className="group relative h-full min-h-[280px] sm:min-h-[280px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-end p-6 sm:p-8 lg:p-10"
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={vp}
                  transition={{ duration: 1.4, delay: idx * 0.1, ease: EASE }}
                />
                {/* Image scale on hover */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04] overflow-hidden" />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#071322]/5 to-[#071322]/10" />
                <div className="absolute inset-0 bg-[#071322]/20 group-hover:bg-[#071322]/10 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.1, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 14 }}
                      className="w-12 h-12 rounded-2xl bg-[#c59b27]/20 border border-[#c59b27]/40 flex items-center justify-center text-[#e5be58] shadow-lg"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e5be58] bg-[#e5be58]/15 border border-[#e5be58]/30 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-black text-xl sm:text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

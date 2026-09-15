import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface BadgeItem {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}

interface AdmissionBadgeRowProps {
  eyebrow: string;
  title: string;
  description?: string;
  items: BadgeItem[];
  columns?: 1 | 2 | 3 | 4;
  theme?: 'light' | 'navy';
}

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: EASE } },
});

const cardVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay, ease: EASE } },
});

export default function AdmissionBadgeRow({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  theme = 'light',
}: AdmissionBadgeRowProps) {
  const shouldReduceMotion = useReducedMotion();
  const isNavy = theme === 'navy';
  const vp = { once: true, margin: '-80px' as const };

  return (
    <div className={`relative w-full overflow-hidden ${isNavy ? 'bg-[#071322] text-white border-y border-white/10' : 'bg-transparent text-slate-900'}`}>

      {/* Navy ambient lights */}
      {isNavy && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-16 lg:py-20">

        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          whileInView="show"
          viewport={vp}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <motion.span
            variants={fadeUp(0)}
            className={`font-['Outfit'] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3 ${
              isNavy
                ? 'text-[#e5be58] bg-[#e5be58]/10 border border-[#e5be58]/30'
                : 'text-[#8b1525] bg-[#8b1525]/10'
            }`}
          >
            {eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp(0.06)}
            initial={shouldReduceMotion ? undefined : 'hidden'}
            whileInView="show"
            viewport={vp}
            className={`font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-none ${
              isNavy ? 'text-white' : 'text-[#0a192f]'
            }`}
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              variants={fadeUp(0.12)}
              initial={shouldReduceMotion ? undefined : 'hidden'}
              whileInView="show"
              viewport={vp}
              className={`text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] ${
                isNavy ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Badges Grid */}
        <div
          className={`grid grid-cols-1 ${
            columns === 1
              ? 'max-w-xl'
              : columns === 2
              ? 'sm:grid-cols-2 max-w-4xl'
              : columns === 4
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          } gap-5 sm:gap-6 lg:gap-8`}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariant(idx * 0.1)}
                initial={shouldReduceMotion ? undefined : 'hidden'}
                whileInView="show"
                viewport={vp}
                whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                className={`group h-full flex items-start gap-4 sm:gap-5 p-6 sm:p-7 rounded-2xl sm:rounded-3xl transition-colors duration-300 ${
                  isNavy
                    ? 'bg-white/[0.04] backdrop-blur-md border border-white/15 shadow-2xl hover:border-[#c59b27] hover:bg-white/[0.07]'
                    : 'bg-white border border-gray-300 shadow-sm hover:border-[#c59b27] hover:shadow-xl'
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.12, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 14 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    isNavy
                      ? 'bg-[#c59b27]/20 border border-[#c59b27]/40 text-[#e5be58] shadow-lg'
                      : 'bg-[#0a192f] text-[#e5be58]'
                  }`}
                >
                  <Icon className="w-6 h-6 text-[#e5be58]" />
                </motion.div>

                {/* Text */}
                <div className="pt-0.5 min-w-0">
                  <h3 className={`font-['Outfit'] font-bold text-base sm:text-lg leading-snug transition-colors duration-300 ${
                    isNavy ? 'text-white group-hover:text-[#e5be58]' : 'text-[#0a192f] group-hover:text-[#8b1525]'
                  }`}>
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                      isNavy ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

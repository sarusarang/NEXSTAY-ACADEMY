import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, FileCheck2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '917736797333';
function buildWhatsAppLink(context: string) {
  const message = `Hi Nexstay Academy (NAHM), I would like to know more about admissions. (${context})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: '-80px' as const };

export default function AboutCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-12">
      <motion.section
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 1, ease: EASE }}
        className="relative w-full overflow-hidden rounded-3xl bg-[#071322] border border-[#c59b27]/30 shadow-2xl text-white"
      >
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59b27]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8b1525]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 xl:p-16">
            <motion.span
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#e5be58] bg-[#e5be58]/10 border border-[#e5be58]/30 px-3.5 py-1.5 rounded-full inline-block mb-3"
            >
              Start Your Career Today
            </motion.span>

            <motion.h2
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.9, delay: 0.07, ease: EASE }}
              className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98] mt-1 mb-4"
            >
              Begin Your Journey with <span className="text-[#e5be58]">Nexstay Academy</span>
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.14, ease: EASE }}
              className="text-slate-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed font-['Outfit']"
            >
              Enroll in our 15-month diploma program, train inside active Nexstay properties with monthly stipends, and secure 100% placement in top hotel chains.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <motion.a
                href={buildWhatsAppLink('About Page Bottom CTA')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05, boxShadow: '0 8px 30px rgba(197,155,39,0.5)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 350, damping: 16 }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#c59b27] to-[#e5be58] text-[#071322] font-['Outfit'] font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(197,155,39,0.35)] transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to a Counsellor</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/admission"
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/25 bg-white/[0.05] text-white text-xs font-bold font-['Outfit'] uppercase tracking-wider hover:border-[#e5be58] hover:text-[#e5be58] transition-colors duration-300"
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-[#e5be58]" />
                  <span>Apply for Admission</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block lg:col-span-5 relative self-stretch overflow-hidden">
            <motion.img
              src="/Begin-Your-Journey.jpeg"
              alt="Nexstay Academy Trainees in Live Hotel Environment"
              className="absolute inset-0 w-full h-full object-cover"
              initial={shouldReduceMotion ? undefined : { scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={vp}
              transition={{ duration: 1.4, delay: 0.1, ease: EASE }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/40 to-transparent" />
          </div>

        </div>
      </motion.section>
    </div>
  );
}

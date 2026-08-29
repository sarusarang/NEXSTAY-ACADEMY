import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Globe2, Building2, MessageCircle, ArrowUpRight } from 'lucide-react';

const WHATSAPP_NUMBER = '917736797333';
const buildWhatsAppLink = () => {
  const msg = 'Hi NAHM, I want to learn more about placement support and career opportunities.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const supportItems = [
  { icon: ShieldCheck, text: 'Dedicated placement assistance for every graduating student' },
  { icon: Building2, text: 'Access to opportunities across Nexstay Hotels & Resorts properties' },
  { icon: Globe2, text: 'Domestic placement opportunities across South India and beyond' },
  { icon: Globe2, text: 'International placement opportunities in the global hospitality sector' },
  { icon: ShieldCheck, text: 'Interview preparation and career counselling' },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: '-80px' as const };

export default function PlacementOverview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#071322]">
      <div className="relative flex flex-col lg:block w-full lg:min-h-[740px]">

        {/* ── Background photo ── */}
        <motion.div
          className="relative order-1 h-[52vw] max-h-[380px] min-h-[240px] w-full overflow-hidden
            sm:h-[50vh] sm:max-h-none
            lg:absolute lg:inset-0 lg:h-full lg:max-h-none lg:min-h-[740px]"
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.img
            src="/100%-job.jpeg"
            alt="Hospitality graduates at a luxury hotel"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={vp}
            transition={{ duration: 1.8, ease: EASE }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 lg:bg-none" />
        </motion.div>

        {/* ── Diagonal navy content panel ── */}
        <motion.div
          className="relative z-10 order-2 w-full bg-[#071322] pb-14 pt-10 sm:pb-16 sm:pt-14
            lg:absolute lg:inset-y-0 lg:left-0 lg:w-[68%] xl:w-[64%] 2xl:w-[60%] lg:py-0
            lg:[clip-path:polygon(0_0,100%_0,84%_100%,0_100%)] shadow-2xl"
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            className="relative mx-auto max-w-2xl px-4 sm:px-8
              lg:mx-0 lg:max-w-[620px] xl:max-w-[700px] 2xl:max-w-[780px]
              lg:h-full lg:flex lg:flex-col lg:justify-center
              lg:pl-10 xl:pl-16 2xl:pl-20 lg:pr-8 xl:pr-12"
          >
            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <span className="inline-block rounded-full border border-[#c59b27]/40 bg-[#c59b27]/10
                px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e5be58] font-['Outfit'] mb-4">
                Placement & Careers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.9, delay: 0.06, ease: EASE }}
              className="font-['Bebas_Neue','Outfit',sans-serif]
                text-[clamp(2.4rem,5.5vw,4.2rem)] uppercase leading-[0.95] tracking-tight text-white"
            >
              100% Job<br />
              <span className="text-[#e5be58]">Placement Assistance</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
              className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-300 max-w-xl font-['Outfit']"
            >
              NAHM provides 100% job placement assistance to every graduating student, with opportunities both within India and internationally, ensuring a bright future in the hospitality sector.
            </motion.p>

            {/* Support list */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
              className="mt-6 sm:mt-7 space-y-3"
            >
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#e5be58] mb-3">
                Placement Support Includes
              </div>
              {supportItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.7, delay: 0.2 + idx * 0.09, ease: EASE }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#c59b27]/20 border border-[#c59b27]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-[#e5be58]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 font-['Outfit'] leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-7 sm:mt-8"
            >
              <motion.a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-full border-2 border-[#c59b27] bg-[#c59b27]/10
                  px-7 py-3.5 text-xs sm:text-sm font-bold font-['Outfit'] uppercase tracking-wider text-[#e5be58]
                  transition-colors duration-300 hover:bg-[#c59b27] hover:text-[#071322] shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to a Counselor</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

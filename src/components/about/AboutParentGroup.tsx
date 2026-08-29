import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Hotel, Sparkles, Compass, MapPin } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.15 as const };

const sV: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const iV: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } };

const RESORT_BG = "/about-bg-nexsaty.jpg.jpeg";

const SEGMENTS = [
  {
    title: 'Upscale Resorts & Hotels',
    tag: 'Luxury Hospitality',
    desc: 'Boutique retreats and luxury experiential properties with personalized guest service and fine dining operations.',
    icon: Sparkles,
  },
  {
    title: 'Midscale Business Properties',
    tag: 'Corporate & Urban',
    desc: 'High-volume urban business hotels featuring modern banquet halls, restaurant services, and dynamic front desk operations.',
    icon: Hotel,
  },
  {
    title: 'Budget & Leisure Stays',
    tag: 'Efficient Operations',
    desc: 'Cost-optimized operational frameworks emphasizing rapid turnarounds, guest satisfaction, and standard operating procedures.',
    icon: Compass,
  },
];

export default function AboutParentGroup() {
  const rm = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 bg-[#071322]">
      {/* Background Resort Image with Luxury Overlays */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <motion.img
          src={RESORT_BG}
          alt="Nexstay Hotels and Resorts Luxury Property"
          className="h-full w-full object-cover object-center"
          initial={rm ? undefined : { scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={vp}
          transition={{ duration: 2.2, ease: EASE }}
        />
        {/* Deep dark gradient washes ensuring high text contrast */}
        <div className="absolute inset-0 bg-[#071322]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071322]/40 via-[#071322]/50 to-[#071322]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* Section Header */}
        <motion.div
          variants={sV}
          initial={rm ? undefined : 'hidden'}
          whileInView="show"
          viewport={vp}
          className="mx-auto max-w-3xl text-center mb-12 sm:mb-16"
        >
          <motion.div variants={iV} className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/50 bg-[#071322]/80 backdrop-blur-md px-4 py-1.5 mb-4 shadow-lg">
            <Hotel className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span className="font-['Outfit'] text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#D9C08C]">
              Parent Hospitality Group
            </span>
          </motion.div>

          <motion.h2
            variants={iV}
            className="font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.2rem, 1.4rem + 3vw, 4.2rem)' }}
          >
            Nexstay <span className="text-[#C6A15B]">Hotels &amp; Resorts</span>
          </motion.h2>

          <motion.p
            variants={iV}
            className="mt-4 font-['Outfit'] text-sm sm:text-base leading-relaxed text-slate-200 max-w-2xl mx-auto font-light"
          >
            Nexstay Hotels &amp; Resorts is the parent hospitality group behind NAHM, operating a portfolio of properties spanning upscale, midscale, and budget segments across South India. This gives NAHM students direct exposure to live hotel operations across multiple market segments — a distinct advantage over academy-only training providers.
          </motion.p>
        </motion.div>

        {/* Multi-segment Grid Showcase */}
        <motion.div
          variants={sV}
          initial={rm ? undefined : 'hidden'}
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          {SEGMENTS.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={seg.title}
                variants={iV}
                whileHover={rm ? undefined : { y: -8, transition: { duration: 0.3 } }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#071322]/80 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#c59b27]/60 hover:bg-[#0a1b2e]/90 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c59b27]/15 text-[#e5be58] border border-[#c59b27]/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-['Bebas_Neue'] text-2xl text-white/25 group-hover:text-[#c59b27]/60 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-[#c59b27] block mb-2">
                    {seg.tag}
                  </span>

                  <h3 className="font-['Outfit'] text-xl font-bold text-white mb-3 group-hover:text-[#e5be58] transition-colors">
                    {seg.title}
                  </h3>

                  <p className="font-['Outfit'] text-sm leading-relaxed text-slate-300 font-light">
                    {seg.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-['Outfit'] text-white/60">
                  <MapPin className="h-3.5 w-3.5 text-[#c59b27]" />
                  <span>South India Portfolio Properties</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live Network Strip */}
        <motion.div
          initial={rm ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.9, ease: EASE }}
          className="rounded-2xl border border-[#c59b27]/35 bg-[#071322]/85 backdrop-blur-md p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl"
        >
          <div className="max-w-2xl">
            <span className="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#c59b27] block mb-1">
              Direct Practical Advantage
            </span>
            <h4 className="font-['Outfit'] text-lg sm:text-xl font-bold text-white">
              Live Hotel Training vs. Simulated Labs
            </h4>
            <p className="font-['Outfit'] text-sm text-slate-300 mt-1 font-light">
              Rather than spending months in synthetic mock rooms, NAHM trainees experience actual customer touchpoints, real front desks, commercial hot kitchens, and corporate event banquet halls.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-center backdrop-blur-sm">
              <div className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#e5be58]">100%</div>
              <div className="font-['Outfit'] text-[10px] uppercase tracking-wider text-white/70">Live Property Access</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-center backdrop-blur-sm">
              <div className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#e5be58]">3+</div>
              <div className="font-['Outfit'] text-[10px] uppercase tracking-wider text-white/70">Market Segments</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

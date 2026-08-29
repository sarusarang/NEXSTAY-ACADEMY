import { motion, useReducedMotion } from 'framer-motion';

const careerPaths = [
  { title: 'Front Office Executive / Guest Relations Associate', dept: 'Front Office' },
  { title: 'Hospitality Customer Relations Executive', dept: 'Guest Services' },
  { title: 'Housekeeping Supervisor / Executive', dept: 'Housekeeping' },
  { title: 'Food & Beverage Service Associate / Steward', dept: 'F&B Service' },
  { title: 'Food & Beverage Production Commi Chef', dept: 'F&B Production' },
  { title: 'Sales & Marketing Coordinator (Hospitality)', dept: 'Sales & Marketing' },
  { title: 'Human Resources Associate (Hospitality)', dept: 'Human Resources' },
  { title: 'Cruise Line & International Hospitality Roles', dept: 'International' },
];

// Unified pill color — every department now shares the same blue treatment.
const PILL_COLOR = { bg: 'bg-gray-900', text: 'text-white', border: 'border-blue-500/30' };

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: '-80px' as const };

export default function CareerPaths() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-white border-t border-b border-slate-200 py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-stretch">

          {/* ── Left Sticky Image ── */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 flex flex-col h-full lg:min-h-[calc(100vh-8rem)] space-y-4">
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, x: -28, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={vp}
                transition={{ duration: 1, ease: EASE }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group flex-1 min-h-[320px]"
              >
                <div className="h-full overflow-hidden relative">
                  <motion.img
                    src="/where-our-go.jpeg"
                    alt="Hospitality career opportunities"
                    className="w-full h-full object-cover"
                    initial={shouldReduceMotion ? undefined : { scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={vp}
                    transition={{ duration: 1.5, ease: EASE }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/5 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c59b27] text-[#0a192f] text-xs font-bold uppercase tracking-wider mb-2.5">
                    8 Career Pathways
                  </span>
                  <h4 className="font-['Outfit'] font-black text-lg sm:text-xl text-white leading-snug">
                    Every role. Every department. One academy.
                  </h4>
                </div>
              </motion.div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-shrink-0">
                {[
                  { stat: '100%', label: 'Placement Guarantee' },
                  { stat: '5★', label: 'Hotel Partners' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.stat}
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.75, delay: idx * 0.1, ease: EASE }}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-300 text-center"
                  >
                    <div className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#c59b27]">{item.stat}</div>
                    <div className="text-xs text-slate-600 font-['Outfit'] font-medium mt-0.5">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Career Paths ── */}
          <div className="lg:col-span-6">
            {/* Header */}
            <div className="max-w-2xl mb-8 sm:mb-10">
              <motion.span
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.8, ease: EASE }}
                className="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#8b1525] bg-[#8b1525]/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
              >
                Career Paths After the Diploma
              </motion.span>
              <motion.h2
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.9, delay: 0.07, ease: EASE }}
                className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl text-[#0a192f] tracking-tight uppercase leading-[0.97]"
              >
                Where Our <span className="text-[#c59b27]">Graduates Go</span>
              </motion.h2>
              <motion.p
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.8, delay: 0.13, ease: EASE }}
                className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-['Outfit']"
              >
                From front-line luxury hotel roles to international cruise postings, NAHM graduates are equipped for every department of the global hospitality industry.
              </motion.p>
            </div>

            {/* Career path cards */}
            <div className="space-y-3 sm:space-y-4">
              {careerPaths.map((path, idx) => (
                <motion.div
                  key={path.title}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.75, delay: idx * 0.08, ease: EASE }}
                  whileHover={shouldReduceMotion ? undefined : { x: 6, transition: { duration: 0.25 } }}
                  className="group flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-300/80 shadow-sm hover:border-[#c59b27] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#0a192f] flex items-center justify-center flex-shrink-0 text-[#e5be58] font-['Bebas_Neue'] text-sm">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-['Outfit'] font-semibold text-sm sm:text-base text-[#0a192f] group-hover:text-[#8b1525] transition-colors duration-300 leading-snug">
                      {path.title}
                    </h3>
                  </div>
                  <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${PILL_COLOR.bg} ${PILL_COLOR.text} ${PILL_COLOR.border} whitespace-nowrap`}>
                    {path.dept}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
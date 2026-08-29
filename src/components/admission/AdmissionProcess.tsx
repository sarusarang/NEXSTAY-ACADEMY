import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { PhoneCall, Users, FileCheck2, Landmark, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const admissionSteps = [
  { icon: PhoneCall, title: 'Submit an Enquiry', desc: 'Fill out the online enquiry form, chat on WhatsApp, or request an instant callback — takes under 2 minutes.', tag: 'Step 01' },
  { icon: Users, title: 'Counselling Session', desc: 'Speak 1-on-1 with an experienced academic counselor in person at our Calicut campus, via phone, or on video call.', tag: 'Step 02' },
  { icon: FileCheck2, title: 'Document Verification', desc: 'Submit your educational certificates (10th/12th mark sheets), government photo ID, and passport photographs.', tag: 'Step 03' },
  { icon: Landmark, title: 'Seat Confirmation & Fee', desc: 'Pay the one-time admission fee or select your convenient installment plan to lock in your confirmed batch seat.', tag: 'Step 04' },
  { icon: Award, title: 'Orientation & Classes', desc: 'Receive your uniform and professional kit, attend campus orientation, and start your simulation lab training.', tag: 'Step 05' },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: '-80px' as const };

export default function AdmissionProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.7', 'end 0.4'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 overflow-hidden border-t border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">

          {/* ── Left: Heading + Timeline ── */}
          <div className="lg:col-span-6 flex flex-col justify-start">

            {/* Header */}
            <div className="max-w-2xl mb-10 sm:mb-14">
              <motion.span
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.8, ease: EASE }}
                className="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#8b1525] bg-[#8b1525]/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
              >
                Admission Process
              </motion.span>

              <motion.h2
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.9, delay: 0.07, ease: EASE }}
                className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl text-[#0a192f] tracking-tight uppercase leading-[0.98]"
              >
                Five Steps <span className="text-[#c59b27]">To Your Seat</span>
              </motion.h2>

              <motion.p
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.8, delay: 0.14, ease: EASE }}
                className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-['Outfit']"
              >
                A straightforward, transparent pathway designed to get you from application to your first class with zero delays.
              </motion.p>
            </div>

            {/* Timeline */}
            <div ref={containerRef} className="relative pl-12 sm:pl-16">
              {/* Background line */}
              <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-0.5 bg-slate-200" />
              {/* Animated gold fill line */}
              <motion.div
                className="absolute left-5 sm:left-6 top-3 w-0.5 bg-[#c59b27] origin-top"
                style={shouldReduceMotion ? { height: '100%' } : { height: lineHeight }}
              />

              <div className="space-y-8 sm:space-y-10">
                {admissionSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={shouldReduceMotion ? undefined : { opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={vp}
                      transition={{ duration: 0.75, delay: idx * 0.1, ease: EASE }}
                      className="relative group"
                    >
                      {/* Step node */}
                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 14 }}
                        className="absolute -left-12 sm:-left-16 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#0a192f] group-hover:border-[#c59b27] shadow-md flex items-center justify-center transition-colors duration-300"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a192f] group-hover:text-[#c59b27] transition-colors duration-300" />
                      </motion.div>

                      {/* Step content */}
                      <div className="pt-0.5">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-['Outfit'] font-black text-xs uppercase tracking-wider text-[#c59b27] bg-[#c59b27]/10 px-2 py-0.5 rounded">
                            {step.tag}
                          </span>
                          <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-[#0a192f] group-hover:text-[#8b1525] transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Outfit'] max-w-xl">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Right: Sticky Image column ── */}
          <div className="lg:col-span-6">
            <div className="sticky top-24 flex flex-col gap-5 sm:gap-6">

              {/* Feature Image Card — fills max available height */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, x: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={vp}
                transition={{ duration: 1, delay: 0.15, ease: EASE }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group min-h-[280px] sm:min-h-[380px] lg:min-h-[520px] xl:min-h-[580px]"
              >
                <motion.img
                  src="/five-steps.jpeg"
                  alt="NAHM orientation and classroom training"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={shouldReduceMotion ? undefined : { scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={vp}
                  transition={{ duration: 1.5, ease: EASE }}
                />
                {/* Hover scale overlay */}
                <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/35 to-transparent" />

                {/* Overlay caption */}
                <motion.div
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
                  className="absolute bottom-0 inset-x-0 p-5 sm:p-7 text-white"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c59b27] text-[#0a192f] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Fast-Track Admission</span>
                  </div>
                  <h4 className="font-['Outfit'] font-black text-lg sm:text-xl leading-snug">
                    From enquiry to orientation in as little as two weeks.
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Our academic coordinators guide you through document validation and hotel internship mapping from Day 1.
                  </p>
                </motion.div>
              </motion.div>

              {/* Quick contact card */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4 shadow-sm"
              >
                <div>
                  <div className="font-['Outfit'] font-bold text-sm text-[#0a192f]">Need counseling assistance?</div>
                  <div className="text-xs text-slate-500 mt-0.5">Our Calicut desk is open Mon–Sat</div>
                </div>
                <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0a192f] hover:bg-[#8b1525] text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap shadow-sm"
                  >
                    <span>Plan Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

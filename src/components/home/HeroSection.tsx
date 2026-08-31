import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const videoList = [
  {
    url: "/NEXSTAY Web Ad.mp4",
    poster: "/about-banner.jpeg"
  },
];

export const HeroSection: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden flex flex-col">

      {/* ── Full-bleed background video (always behind everything) ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              src={videoList[currentVideoIndex].url}
              poster={videoList[currentVideoIndex].poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── MOBILE: dark gradient overlay so text is readable ── */}
      <div className="absolute inset-0 z-10 lg:hidden bg-gradient-to-b from-black/55 via-black/40 to-black/80 pointer-events-none" />

      {/* ── DESKTOP: diagonal white left panel ── */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="hero-white-split hidden lg:flex absolute inset-y-0 left-0 w-[50%] xl:w-[48%] 2xl:w-[46%] bg-white z-20 flex-col justify-between pt-28 pb-10 px-6 lg:pl-14 lg:pr-16 shadow-2xl overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#c59b27]/10 via-[#c59b27]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        />
        <div />
        <div className="max-w-lg my-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-6xl xl:text-8xl tracking-tight text-[#1e293b] leading-[0.92] uppercase select-none">
              BUILD YOUR CAREER<br />IN HOSPITALITY
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-sm sm:max-w-md"
          >
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A 15-month Diploma in Hotel Management from Nexstay Academy, backed by Nexstay Hotels &amp; Resorts, with on-the-job training, a monthly stipend, and 100% placement assistance in India and abroad.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="pt-8 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 lg:gap-7 text-xs w-full max-w-lg"
        >
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-extrabold uppercase tracking-wider text-[#0a192f] text-[11px]">ADMISSIONS OPEN</span>
            <span className="text-slate-500 font-medium text-[11px] mt-0.5">Batch 2025-26</span>
          </div>
          <div className="h-7 w-[1px] bg-slate-300 flex-shrink-0" />
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-extrabold uppercase tracking-wider text-[#0a192f] text-[11px]">Parayancheri, Calicut</span>
            <span className="text-slate-500 font-medium text-[11px] mt-0.5">6th Floor, V-Zone Building</span>
          </div>
          <div className="h-7 w-[1px] bg-slate-300 flex-shrink-0" />
          <div className="whitespace-nowrap">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#8b1525] hover:text-[#c59b27] transition-colors text-[11px]"
            >
              <span>PLAN YOUR VISIT</span>
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* ── MOBILE: content overlaid on video ── */}
      <div className="relative z-20 flex lg:hidden flex-col justify-between h-full w-full px-5 pt-20 pb-8">

        {/* Headline + description pushed slightly up from center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-auto mb-auto -mt-10"
        >
          <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-[3rem] leading-[0.93] uppercase tracking-tight text-white select-none">
            BUILD YOUR<br />CAREER<br />IN HOSPITALITY
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-white/80 text-[13px] leading-relaxed max-w-[280px]"
          >
            A 15-month Diploma backed by Nexstay Hotels &amp; Resorts — stipend, food, stay &amp; 100% placement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex gap-3"
          >
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#c59b27] text-[#0a192f] font-['Outfit'] font-bold text-[11px] tracking-wider uppercase shadow-lg"
            >
              Apply Now
            </Link>
            <a
              href="https://wa.me/917736797333?text=Hi%20Nexstay%20Academy,%20please%20send%20me%20the%20official%20Diploma%20in%20Hotel%20Management%20brochure."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/40 text-white font-['Outfit'] font-semibold text-[11px] tracking-wider uppercase"
            >
              Brochure
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="flex flex-col">
            <span className="font-extrabold uppercase tracking-wider text-white text-[10px]">ADMISSIONS OPEN</span>
            <span className="text-white/60 font-medium text-[10px] mt-0.5">Batch 2025-26</span>
          </div>
          <div className="h-6 w-[1px] bg-white/30 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-extrabold uppercase tracking-wider text-white text-[10px]">Parayancheri, Calicut</span>
            <span className="text-white/60 font-medium text-[10px] mt-0.5">6th Floor, V-Zone Building</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;


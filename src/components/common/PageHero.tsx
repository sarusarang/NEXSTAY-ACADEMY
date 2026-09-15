import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export interface PageHeroProps {
  image: string;
  title: string;
  description?: string;
  className?: string;
}

export default function PageHero({
  image,
  title,
  description,
  className = "",
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax scroll drift
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "18%"]
  );

  // Stagger parent — slower delayChildren
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.18,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  // Title: fade up, slow
  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Gold rule: draw from center, slow
  const rule = {
    hidden: { scaleX: 0, opacity: 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Description: slow fade
  const fadeIn = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden bg-[#000] h-[62vh] sm:h-[80vh] ${className}`}
    >
      {/* Background image — zoom-out Ken Burns on mount */}
      <motion.div
        aria-hidden
        style={{ y: imageY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <motion.img
          src={image}
          alt=""
          initial={prefersReducedMotion ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.25, 1, 0.5, 1] }}
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Overlay — strong enough to guarantee white text readability */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/72"
      />
      {/* Subtle vignette at edges */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_50%,transparent_40%,rgba(0,0,0,0.45)_100%)]"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 sm:px-10 text-center"
      >
        {/* Title matching hero banner font */}
        <motion.h1
          variants={fadeUp}
          className="font-['Bebas_Neue','Outfit',sans-serif] uppercase text-white leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.2rem)" }}
        >
          {title}
        </motion.h1>

        {/* Gold accent rule */}
        <motion.div
          variants={rule}
          className="mt-5 mb-5 h-[2px] w-14 sm:w-18 origin-center bg-gradient-to-r from-[#c59b27] to-[#e5be58] rounded-full"
        />

        {/* Description */}
        {description && (
          <motion.p
            variants={fadeIn}
            className="max-w-md text-white/80 text-sm sm:text-[15px] leading-relaxed font-['Outfit'] font-normal"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
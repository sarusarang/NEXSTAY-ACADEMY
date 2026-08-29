import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
    GraduationCap,
    Briefcase,
    Award,
    Shirt,
    Building2,
    Users,
    ArrowRight,
    Download,
} from 'lucide-react';

const CAMPUS_IMAGE = '/1600-1088.jpg.webp';

const HIGHLIGHTS = [
    { icon: GraduationCap, label: '15-Month Diploma Program' },
    { icon: Briefcase, label: 'IET & OJT with Stipend' },
    { icon: Award, label: '100% Placement Assistance' },
    { icon: Shirt, label: 'Free Uniform Kit' },
    { icon: Building2, label: 'Backed by Nexstay Hotels & Resorts' },
    { icon: Users, label: '35 Students Per Batch — Personal Attention' },
];

const EASE = [0.16, 1, 0.3, 1] as const;
// A gentler, longer-tailed ease for the image — slow start, slow settle, no snap at the end
const SILK_EASE = [0.22, 1, 0.36, 1] as const;

export const HomeAboutSection: React.FC = () => {
    const prefersReducedMotion = useReducedMotion();
    const [imageSettled, setImageSettled] = React.useState(false);

    /* ---------- Shared orchestration variants ---------- */

    // Wraps a group of children and staggers their entrance
    const staggerParent: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.22,
                delayChildren: prefersReducedMotion ? 0 : 0.1,
            },
        },
    };

    // Generic fade + rise, used by most text/UI children
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 32 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, ease: EASE },
        },
    };

    // Slightly larger rise for headline-weight elements
    const fadeUpBig: Variants = {
        hidden: { opacity: 0, y: 46 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: EASE },
        },
    };

    // Highlight cards: soft pop + rise
    const cardVariant: Variants = {
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, ease: EASE },
        },
    };

    // Image: slow curtain-style reveal — clip opens outward from a soft inset frame
    // while the photo very gradually settles from a slight zoom, so nothing "snaps"
    // into place. Runs noticeably longer than the surrounding text so the eye
    // lingers on it rather than the whole hero completing at once.
    const imageReveal: Variants = {
        hidden: {
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 1.14,
            clipPath: prefersReducedMotion
                ? 'inset(0% 0% 0% 0%)'
                : 'inset(9% 9% 9% 9% round 2rem)',
        },
        show: {
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0% round 2rem)',
            transition: {
                opacity: { duration: 1.4, ease: 'easeOut' },
                clipPath: { duration: 2.6, ease: SILK_EASE },
                scale: { duration: 2.6, ease: SILK_EASE },
            },
        },
    };



    return (
        <div className="relative w-full">
            {/* 1. UPPER SECTION (Deep Luxury Navy) */}
            <section className="relative w-full bg-[#071322] pt-14 sm:pt-20 pb-24 sm:pb-30 overflow-hidden">
                {/* Ambient Gold Radial Glow */}
                <div className="absolute top-0 right-1/4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none -z-0" />
                <div className="absolute bottom-0 left-0 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] bg-[#8b1525]/15 rounded-full blur-3xl pointer-events-none -z-0" />

                {/* Subtle Faint Vertical Architectural Grid Lines */}
                <div className="absolute inset-0 pointer-events-none select-none z-0">
                    <div className="w-full h-full max-w-[95rem] mx-auto grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 divide-x divide-white/[0.05] px-4 sm:px-6 lg:px-8">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-full" />
                        ))}
                    </div>
                </div>

                {/* Content Container */}
                <motion.div
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="relative z-10 w-full max-w-[95rem] mx-auto px-4 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center"
                >
                    {/* LEFT COLUMN: TITLE, DESCRIPTION & CTAS */}
                    <div className="lg:col-span-5 text-white">
                        {/* Tag + Gold Accent Line */}
                        <motion.div variants={fadeUp} className="mb-4">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#e5be58] block mb-2 font-['Outfit']">
                                NEXSTAY ACADEMY OF HOTEL MANAGEMENT
                            </span>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 36 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 1.2, delay: prefersReducedMotion ? 0 : 0.35, ease: EASE }}
                                className="h-[2px] bg-[#c59b27] rounded-full"
                            />
                        </motion.div>

                        {/* Serif Heading */}
                        <motion.h2
                            variants={fadeUpBig}
                            className="font-['Playfair_Display',serif] text-[2.15rem] leading-[1.15] sm:text-5xl lg:text-[3.5rem] font-normal text-white sm:leading-[1.12] tracking-normal mb-5 sm:mb-6"
                        >
                            Begin Your
                            <br />
                            Hospitality Career
                        </motion.h2>

                        {/* Description Text */}
                        <motion.p
                            variants={fadeUp}
                            className="text-slate-300 text-[13px] sm:text-sm text-justify leading-relaxed max-w-md font-light mb-7 sm:mb-8 font-['Outfit']"
                        >
                            A 15-month Diploma in Hotel Management from Nexstay Academy, backed by
                            Nexstay Hotels &amp; Resorts, with on-the-job training, a monthly stipend,
                            and 100% placement assistance in India and abroad.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-wrap items-center gap-3 sm:gap-4"
                        >
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                <Link
                                    to="/admission"
                                    className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#c59b27] hover:bg-[#e5be58] text-[#0a192f] font-['Outfit'] font-bold text-[11px] sm:text-sm tracking-wider uppercase transition-colors shadow-lg"
                                >
                                    <span>Apply for Admission</span>
                                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                <a
                                    href="https://wa.me/917736797333?text=Hi%20Nexstay%20Academy,%20please%20send%20me%20the%20official%20Diploma%20in%20Hotel%20Management%20brochure."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/25 text-white font-['Outfit'] font-semibold text-[11px] sm:text-sm tracking-wider uppercase transition-colors hover:border-[#c59b27] hover:text-[#e5be58]"
                                >
                                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5be58]" />
                                    <span>Download Brochure</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: CAMPUS / TRAINING IMAGE */}
                    <motion.div
                        variants={imageReveal}
                        onAnimationComplete={() => setImageSettled(true)}
                        className="lg:col-span-7 relative"
                    >
                        <div className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10">
                            <motion.img
                                src={CAMPUS_IMAGE}
                                alt="Nexstay Academy hospitality training"
                                className="w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-0 object-cover"
                                animate={
                                    imageSettled && !prefersReducedMotion
                                        ? { scale: [1, 1.035, 1] }
                                        : { scale: 1 }
                                }
                                transition={
                                    imageSettled && !prefersReducedMotion
                                        ? { duration: 16, repeat: Infinity, ease: 'easeInOut' }
                                        : undefined
                                }
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. FLOATING OVERLAPPING CARD: PROGRAM HIGHLIGHTS + ABOUT */}
            <div className="relative z-20 -mt-10 sm:-mt-20 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 1.5, ease: EASE }}
                    className="p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-300 shadow-[0_20px_50px_-10px_rgba(10,25,47,0.18)]"
                >
                    {/* Highlight Grid */}
                    <motion.div
                        variants={staggerParent}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3"
                    >
                        {HIGHLIGHTS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.label}
                                    variants={cardVariant}
                                    whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE } }}
                                    className="p-3.5 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-gray-300 flex flex-col gap-2.5 sm:gap-3 hover:border-[#c59b27]/50 hover:shadow-md transition-[border-color,box-shadow]"
                                >
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#0a192f] flex items-center justify-center shrink-0">
                                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5be58]" />
                                    </div>
                                    <span className="text-[11px] sm:text-xs lg:text-[12px] font-semibold text-[#0a192f] leading-tight font-['Outfit']">
                                        {item.label}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* About Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.2, delay: prefersReducedMotion ? 0 : 0.2, ease: EASE }}
                        className="mt-2.5 sm:mt-3 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0a192f] flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-5 lg:gap-8"
                    >
                        <p className="text-slate-300 text-[12px] sm:text-[13px] leading-relaxed font-light font-['Outfit'] flex-1">
                            Nexstay Academy of Hotel Management (NAHM) is owned and operated by
                            Nexstay Hotels &amp; Resorts, a premier hotel chain with upscale,
                            midscale, and budget properties across South India. NAHM channels that
                            real-world hospitality experience directly into the classroom, training
                            students inside actual Nexstay properties rather than simulated labs alone.
                        </p>
                        <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.25, ease: EASE }}>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 shrink-0 text-[#e5be58] hover:text-white font-['Outfit'] font-bold text-[11px] sm:text-sm tracking-wide uppercase transition-colors group"
                            >
                                <span>Learn More About Us</span>
                                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeAboutSection;
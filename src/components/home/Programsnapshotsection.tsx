import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    Clock,
    GraduationCap,
    Briefcase,
    ArrowUpRight,
    BookOpen,
    CheckCircle2,
    Users,
    IndianRupee,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const riseIn: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: EASE },
    },
};

const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 1.06 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.4, ease: EASE },
    },
};

const HIGHLIGHTS = [
    "Front Office",
    "Housekeeping",
    "F&B Service",
    "F&B Production",
    "Sales & Marketing",
    "Information Technology",
    "Human Resources",
    "Placement Training Sessions",
];

const PHASES = [
    {
        icon: BookOpen,
        days: "100 Days",
        title: "Classroom Foundation",
        desc: "Hospitality theory & communication",
        color: "#c59b27",
    },
    {
        icon: GraduationCap,
        days: "180 Days",
        title: "Industrial Training",
        desc: "₹8,000/mo stipend + food & stay",
        color: "#3b82f6",
    },
    {
        icon: Briefcase,
        days: "180 Days",
        title: "On-Job Placement",
        desc: "₹12,000/mo stipend + live operations",
        color: "#10b981",
    },
];

const ProgramSnapshotSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-[#071322] lg:bg-white pb-16 pt-14 sm:pb-24 sm:pt-20 lg:-mt-52 lg:pt-60">
            {/* Diagonal brand-navy background shape — desktop only */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{
                    background: "#071322",
                    clipPath: "polygon(0 0, 72% 0, 44% 100%, 0 100%)",
                }}
            />

            <div className="relative mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="mb-10 sm:mb-14 max-w-3xl"
                >
                    <motion.span
                        variants={riseIn}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]"
                    >
                        <Sparkles className="h-3 w-3" />
                        <span>Our Flagship Program</span>
                    </motion.span>

                    <motion.h2
                        variants={riseIn}
                        className="mt-3 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.02] tracking-tight text-white"
                        style={{ fontSize: "clamp(2.2rem, 1.4rem + 3vw, 4.2rem)" }}
                    >
                        Program <span className="text-[#D4AF37]">Snapshot</span>
                    </motion.h2>

                    <motion.p
                        variants={riseIn}
                        className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 font-light font-['Outfit'] lg:text-slate-300"
                    >
                        Industry-built curriculum that turns classroom hours into guaranteed, paid on-the-job training and 5-star international placements.
                    </motion.p>
                </motion.div>

                {/* Main 2-Column Flagship Program Showcase */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
                >
                    {/* ── LEFT COLUMN: CURRICULUM & PHASE BREAKDOWN CARD (Navy Glassmorphic) ── */}
                    <motion.div
                        variants={riseIn}
                        className="lg:col-span-6 xl:col-span-6 rounded-3xl border border-white/15 bg-[#071322]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl text-white relative overflow-hidden"
                    >
                        {/* Glow accent */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />

                        <div>
                            {/* Top Badge Row */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                                <span className="rounded-full bg-[#D4AF37] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#071322]">
                                    Flagship Program
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white">
                                    <Clock className="h-3 w-3 text-[#D4AF37]" />
                                    15 Months Total Duration
                                </span>
                            </div>

                            <h3 className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-4xl text-white uppercase tracking-tight mb-3">
                                Diploma in <span className="text-[#D4AF37]">Hotel Management</span>
                            </h3>

                            <p className="font-['Outfit'] text-sm leading-relaxed text-slate-300 mb-6 font-light">
                                A 15-month fast-track diploma combining foundation classroom instruction with two full paid training phases inside live Nexstay properties.
                            </p>

                            {/* 3 Training Phases */}
                            <div className="space-y-3 mb-6">
                                {PHASES.map((phase) => {
                                    const Icon = phase.icon;
                                    return (
                                        <div
                                            key={phase.title}
                                            className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4 hover:border-white/25 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                                    style={{ background: `${phase.color}20`, color: phase.color }}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <div className="font-['Outfit'] text-sm font-bold text-white">
                                                        {phase.title}
                                                    </div>
                                                    <div className="font-['Outfit'] text-[11px] text-slate-400">
                                                        {phase.desc}
                                                    </div>
                                                </div>
                                            </div>

                                            <span
                                                className="shrink-0 rounded-full px-3 py-1 font-['Bebas_Neue'] text-sm tracking-wide"
                                                style={{ background: `${phase.color}25`, color: phase.color }}
                                            >
                                                {phase.days}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Subjects Chips */}
                            <div className="mb-6">
                                <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                                    Curriculum Highlights
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {HIGHLIGHTS.map((item) => (
                                        <span
                                            key={item}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold text-slate-200 font-['Outfit'] hover:border-[#D4AF37]/40 hover:text-white transition-all"
                                        >
                                            <CheckCircle2 className="h-3 w-3 text-[#D4AF37]" />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Row */}
                        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                            <Link
                                to="/programs"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C79A2E] px-7 py-3.5 font-['Outfit'] text-xs font-extrabold uppercase tracking-wider text-[#071322] shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:scale-[1.03]"
                            >
                                <span>View Full Curriculum</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>

                            <Link
                                to="/admission"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.05] px-6 py-3.5 font-['Outfit'] text-xs font-bold uppercase tracking-wider text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                            >
                                <span>Apply for Admission</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* ── RIGHT COLUMN: FEATURED RESORT IMAGE & PERKS CARD ── */}
                    <motion.div
                        variants={imageReveal}
                        className="lg:col-span-6 xl:col-span-6 flex flex-col gap-5 justify-between"
                    >
                        {/* Hero Image Box with Overlays */}
                        <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] flex-1 rounded-3xl overflow-hidden  shadow-2xl">
                            <img
                                src="/1200-800.jpg.jpeg"
                                loading="lazy"
                                alt="Nexstay Hotels & Resorts Live Training Facility"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-[#071322]/30 to-transparent" />

                            {/* Floating Top Badge */}
                            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#071322]/85 border border-[#D4AF37]/50 px-3.5 py-1.5 font-['Outfit'] text-[11px] font-bold text-[#E8D19F] backdrop-blur-md">
                                    <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
                                    35 Students Per Batch
                                </span>

                                <span className="inline-flex items-center gap-1 rounded-full bg-[#10b981] px-3 py-1 font-['Outfit'] text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                                    100% Placement
                                </span>
                            </div>

                            {/* Bottom Card Overlay on Image */}
                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#071322]/90 border border-white/15 p-4 sm:p-5 backdrop-blur-md">
                                <div className="flex items-center gap-3.5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] text-[#071322] font-black">
                                        <IndianRupee className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="font-['Outfit'] text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                                            Earn While You Learn
                                        </div>
                                        <div className="font-['Outfit'] text-sm sm:text-base font-bold text-white leading-tight">
                                            Up to ₹1,20,000 Total Stipend + Free Food &amp; Accommodation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Quick Feature Strip */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            <div className="rounded-2xl border border-gray-300 bg-white p-4 text-center shadow-sm">
                                <div className="font-['Bebas_Neue'] text-2xl text-[#0a192f]">100</div>
                                <div className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-slate-500">Days Theory</div>
                            </div>
                            <div className="rounded-2xl border border-gray-300 bg-white p-4 text-center shadow-sm">
                                <div className="font-['Bebas_Neue'] text-2xl text-[#c59b27]">180</div>
                                <div className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-slate-500">Days IT</div>
                            </div>
                            <div className="rounded-2xl border border-gray-300 bg-white p-4 text-center shadow-sm">
                                <div className="font-['Bebas_Neue'] text-2xl text-[#10b981]">180</div>
                                <div className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-slate-500">Days OJT</div>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProgramSnapshotSection;
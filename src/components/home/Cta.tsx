import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles, Building2, GraduationCap, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const RESORT_BG =
    "/Home-cta-banner.jpeg";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

export default function CTASection() {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const riseVariants: Variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: EASE_LUXURY },
        },
    };

    return (
        <section className="relative isolate overflow-hidden bg-[#071322] py-12 sm:py-24 md:py-12 lg:py-16">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

                .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
                .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }

                .cta-text-shadow {
                    text-shadow: 0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.5);
                }
            `}</style>

            {/* ================= BACKGROUND RESORT IMAGE & LUXURY OVERLAYS ================= */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <img
                    src={RESORT_BG}
                    alt="Luxury hospitality resort"
                    className="h-full w-full object-cover object-center scale-105"
                />

                {/* Base tint — even, light, keeps the photo readable as a place */}
                <div className="absolute inset-0 bg-[#071322]/35" />

                {/* Directional fade: airy near the top, deep navy pooling at the bottom
                    where the copy, pills, and buttons live. This is the fix — the old
                    radial wash flattened the whole image; this only darkens where it's needed. */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#071322]/10 via-[#071322]/55 to-[#071322]/97" />
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#071322] via-[#071322]/70 to-transparent" />

                {/* Soft warm glow blooming behind the headline — reads like resort
                    lantern light rather than a generic gradient accent */}
                <div
                    className="absolute left-1/2 top-[30%] h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-40"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(198,161,91,0.35) 0%, rgba(198,161,91,0.08) 45%, transparent 72%)",
                        filter: "blur(10px)",
                    }}
                />

                {/* Edge vignette for focus, left/right */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,transparent_55%,rgba(7,19,34,0.65)_100%)]" />

                {/* Subtle Dot Grid pattern on top right */}
                <div
                    className="absolute right-0 top-0 h-72 w-72 opacity-[0.08]"
                    style={{
                        backgroundImage: "radial-gradient(#C6A15B 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                    }}
                />

                {/* Thin gold threshold line at the very top — a quiet nod to a lit
                    hotel entrance canopy */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/50 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="flex flex-col items-center"
                >
                    {/* ================= EYEBROW BADGE ================= */}
                    <motion.div variants={riseVariants} className="mb-5 sm:mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/50 bg-[#071322]/90 px-4 sm:px-5 py-1.5 backdrop-blur-md shadow-lg shadow-black/40">
                            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
                            <span className="font-body text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E8D19F]">
                                Admissions Open · 2025–26 Batch
                            </span>
                        </div>
                    </motion.div>

                    {/* ================= HEADLINE ================= */}
                    <motion.h2
                        variants={riseVariants}
                        className="cta-text-shadow font-display text-[2rem] sm:text-[2.75rem] md:text-[3.3rem] lg:text-[3.6rem] font-medium leading-[1.15] tracking-[-0.015em] text-white"
                    >
                        Your Career in Hospitality{" "}
                        <br className="hidden sm:inline" />
                        <span className="text-[#D8B56F]">Starts Here.</span>
                    </motion.h2>

                    {/* Subtle underline accent */}
                    <motion.div
                        variants={riseVariants}
                        className="mt-3 h-[2px] w-12 bg-[#C6A15B]/80 rounded-full"
                    />

                    {/* ================= DESCRIPTION ================= */}
                    <motion.p
                        variants={riseVariants}
                        className="font-body mt-5 max-w-2xl text-[14px] leading-relaxed text-white/85 sm:text-[16px] md:text-[17px]"
                    >
                        Apply now and gain access to NAHM's 100% placement support, a monthly stipend
                        <br className="hidden sm:inline" />
                        {" "}during training, and a direct pipeline to Nexstay Hotels &amp; Resorts and 50+ partner properties.
                    </motion.p>

                    {/* ================= 3 CIRCULAR PERK PILLARS ================= */}
                    <motion.div
                        variants={riseVariants}
                        className="mt-9 sm:mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-10 text-white"
                    >
                        {/* 1. Live Resort Training */}
                        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0A1B2E]/70 py-2 pl-2 pr-4 backdrop-blur-md shadow-lg shadow-black/30 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
                            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#071322]/95 text-[#C6A15B] shadow-inner">
                                <Building2 className="h-5 w-5" />
                            </div>
                            <div className="text-left font-body text-[12.5px] sm:text-[13px] font-medium leading-tight text-white/90">
                                Live Resort<br />Training
                            </div>
                        </div>

                        {/* 2. Earn While You Learn */}
                        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0A1B2E]/70 py-2 pl-2 pr-4 backdrop-blur-md shadow-lg shadow-black/30 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
                            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#071322]/95 text-[#C6A15B] shadow-inner">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <div className="text-left font-body text-[12.5px] sm:text-[13px] font-medium leading-tight text-white/90">
                                Earn While<br />You Learn
                            </div>
                        </div>

                        {/* 3. 100% Placement Support */}
                        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0A1B2E]/70 py-2 pl-2 pr-4 backdrop-blur-md shadow-lg shadow-black/30 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
                            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/50 bg-[#071322]/95 text-[#C6A15B] shadow-inner">
                                <Users2 className="h-5 w-5" />
                            </div>
                            <div className="text-left font-body text-[12.5px] sm:text-[13px] font-medium leading-tight text-white/90">
                                100% Placement<br />Support
                            </div>
                        </div>
                    </motion.div>

                    {/* ================= BUTTONS ROW ================= */}
                    <motion.div
                        variants={riseVariants}
                        className="mt-9 sm:mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
                    >
                        {/* Primary Gold Button */}
                        <Link
                            to="/admission"
                            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#C6A15B] px-8 py-3.5 font-body text-[13.5px] sm:text-sm font-semibold text-[#071322] shadow-[0_8px_30px_rgba(198,161,91,0.4)] transition-all duration-300 hover:bg-[#d8b56f] hover:shadow-[0_10px_38px_rgba(198,161,91,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span>Apply For Admission</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        {/* Secondary WhatsApp Button */}
                        <a
                            href="https://wa.me/917736797333?text=Hi%20Nexstay%20Academy,%20I%20would%20like%20to%20know%20more%20about%20admissions."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 font-body text-[13.5px] sm:text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/45 hover:bg-white/[0.1] hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <MessageCircle className="h-4 w-4 text-[#3FCB6E]" />
                            <span>Chat on WhatsApp</span>
                        </a>
                    </motion.div>

                    {/* ================= REASSURANCE FOOTER NOTE ================= */}
                    <motion.p
                        variants={riseVariants}
                        className="mt-6 font-body text-[11px] sm:text-xs text-white/55"
                    >
                        Free career counselling · No application fee required
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Briefcase, Globe2, GraduationCap, ShieldCheck } from "lucide-react";
import LogoLoop from "../LogoLoop";
import type { LogoItem } from "../LogoLoop";

/**
 * NOTE: This assumes `lucide-react` is already a project dependency
 * (it's an extremely common pairing with Tailwind + Framer Motion stacks).
 * If it isn't installed yet: `npm i lucide-react`
 */

const IMAGE_URL =
    "/placement.jpeg";

/* =========================================================
   HIRING PARTNERS — real logos via Clearbit Logo API
========================================================= */

const PARTNERS: LogoItem[] = [
    { title: 'Taj Hotels',   src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',       alt: 'Taj Hotels' },
    { title: 'Marriott',     src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',        alt: 'Marriott' },
    { title: 'Hilton',       src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',          alt: 'Hilton' },
    { title: 'Hyatt',        src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',           alt: 'Hyatt' },
    { title: 'Accor',        src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',           alt: 'Accor' },
    { title: 'The Oberoi',   src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',    alt: 'The Oberoi' },
    { title: 'Radisson',     src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg', alt: 'Radisson' },
    { title: 'ITC Hotels',   src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',      alt: 'ITC Hotels' },
    { title: 'Novotel',      src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg',        alt: 'Novotel' },
    { title: 'Lemon Tree',   src: 'https://images.examples.com/wp-content/uploads/2017/03/business-Logo.jpg', alt: 'Lemon Tree' },
];

/* =========================================================
   ACCREDITATIONS
========================================================= */

const ACCREDITATIONS: LogoItem[] = [
    { title: 'Crowne Plaza',  src: 'https://1000logos.net/wp-content/uploads/2022/11/IGNOU-Logo.png',  alt: 'Crowne Plaza' },
    { title: 'Holiday Inn',   src: 'https://1000logos.net/wp-content/uploads/2022/11/IGNOU-Logo.png',   alt: 'Holiday Inn' },
    { title: 'Sheraton',      src: 'https://1000logos.net/wp-content/uploads/2022/11/IGNOU-Logo.png',     alt: 'Sheraton' },
    { title: 'Four Seasons',  src: 'https://1000logos.net/wp-content/uploads/2022/11/IGNOU-Logo.png', alt: 'Four Seasons' },
    { title: 'Wyndham',       src: 'https://1000logos.net/wp-content/uploads/2022/11/IGNOU-Logo.png',      alt: 'Wyndham' },
];

/* =========================================================
   FEATURE ICONS ROW
========================================================= */

const FEATURES = [
    { Icon: Briefcase, lines: ["Top Hiring", "Partners"] },
    { Icon: Globe2, lines: ["Global Career", "Opportunities"] },
    { Icon: ShieldCheck, lines: ["Dedicated", "Placement Support"] },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PlacementsStrip() {
    const reduceMotion = useReducedMotion();

    /* =========================================================
       ANIMATIONS
    ========================================================= */

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: reduceMotion ? 1 : 1.08 },
        show: { opacity: 1, scale: 1, transition: { duration: 1.8, ease: EASE } },
    };

    const contentVariants: Variants = {
        hidden: { opacity: 0, x: reduceMotion ? 0 : 30 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.3,
                ease: EASE,
                staggerChildren: reduceMotion ? 0 : 0.1,
                delayChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: EASE } },
    };

    return (
        <section className="relative w-full overflow-hidden bg-[#071322]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Allura&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

                .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
                .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
                .font-script { font-family: 'Allura', cursive; }

                /* Diagonal chevron cut — only active at lg+ where the two
                   columns sit side by side. Below lg the image stays a
                   plain full-bleed rectangle. */
                .diag-frame,
                .diag-image {
                    clip-path: none;
                }
                @media (min-width: 1024px) {
                    .diag-frame {
                        clip-path: polygon(0 0, 97.5% 0, 90% 50%, 97.5% 100%, 0 100%);
                        transition: clip-path 0.4s ease;
                    }
                    .diag-image {
                        clip-path: polygon(0 0, 96.3% 0, 88.8% 50%, 96.3% 100%, 0 100%);
                        transition: clip-path 0.4s ease;
                    }
                }
            `}</style>

            <div className="grid w-full grid-cols-1 lg:grid-cols-[0.9fr_1fr]">

                {/* ===================================================== LEFT — IMAGE ===================================================== */}
                <div className="relative min-h-[380px] overflow-hidden sm:min-h-[460px] lg:min-h-[620px]">

                    {/* gold frame layer, only visible where the inner image is inset (the diagonal edge) */}
                    <div className="diag-frame absolute inset-0 bg-gradient-to-b from-[#E7C77E] via-[#C6A15B] to-[#8f7238]" />

                    <motion.img
                        src={IMAGE_URL}
                        alt="Hospitality graduates celebrating placement success"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="diag-image absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#071322]/10 lg:to-[#071322]/25" />

                    <motion.div
                        initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4, ease: EASE }}
                        className="absolute left-5 top-5 sm:left-8 sm:top-7 lg:left-10 lg:top-9"
                    >
                        <p
                            className="font-script leading-[1.05] text-[#F1DFAE]"
                            style={{ fontSize: "clamp(22px, 4.2vw, 38px)" }}
                        >
                            Your Future
                        </p>
                        <p
                            className="font-script leading-[1.05] text-[#F1DFAE]"
                            style={{ fontSize: "clamp(22px, 4.2vw, 38px)" }}
                        >
                            Our Commitment
                        </p>
                        <span className="mt-1.5 block h-px w-24 bg-[#C6A15B]/70 sm:w-28" />
                    </motion.div>
                </div>

                {/* ===================================================== RIGHT — CONTENT ===================================================== */}
                <div className="relative flex min-h-[420px] items-center overflow-hidden bg-[#071322] lg:min-h-[640px]">

                    <div aria-hidden className="pointer-events-none absolute -right-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.055]" />
                    <div aria-hidden className="pointer-events-none absolute -right-8 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.035]" />
                    <div aria-hidden className="pointer-events-none absolute -left-32 bottom-[-120px] h-[300px] w-[300px] rounded-full bg-[#C6A15B]/[0.025] blur-3xl" />

                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="relative z-10 w-full px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-10 lg:py-10 xl:px-10 xl:py-12"
                    >
                        {/* BADGE */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white/[0.04] px-3.5 py-1.5 sm:mb-6"
                        >
                            <GraduationCap className="h-3.5 w-3.5 text-[#C6A15B]" strokeWidth={2} />
                            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9C08C] sm:text-[11px]">
                                Placement Assistance
                            </span>
                        </motion.div>

                        {/* HEADLINE */}
                        <motion.div variants={itemVariants} className="max-w-[660px]">
                            <h2
                                className="font-display font-semibold leading-[1.18] tracking-[-0.02em] text-white"
                                style={{ fontSize: "clamp(1.65rem, 1.15rem + 1.9vw, 2.5rem)" }}
                            >
                                <span className="text-[#C6A15B]">100%</span> Placement Assistance —{" "}
                                <span className="text-white/90">India &amp; International Postings.</span>
                            </h2>
                        </motion.div>

                        {/* FEATURES ROW */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-6 grid grid-cols-3 divide-x divide-white/[0.08] sm:mt-8"
                        >
                            {FEATURES.map(({ Icon, lines }) => (
                                <div key={lines.join(" ")} className="flex items-center gap-2 pl-0 pr-2 first:pl-0 sm:gap-2.5 [&:not(:first-child)]:pl-3 sm:[&:not(:first-child)]:pl-4">
                                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[#C6A15B]/50 sm:h-12 sm:w-12">
                                        <Icon className="h-3.5 w-3.5 text-[#C6A15B] sm:h-5 sm:w-5" strokeWidth={1.75} />
                                    </span>
                                    <span className="font-body text-[11px] font-medium leading-[1.35] text-white/70 sm:text-[12.5px]">
                                        {lines[0]}
                                        <br />
                                        {lines[1]}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* HIRING PARTNERS — LOGO LOOP */}
                        <motion.div variants={itemVariants} className="mt-7 sm:mt-12">
                            <div className="mb-3 flex items-center gap-2.5 sm:gap-3">
                                <span className="h-px w-6 sm:w-8 bg-[#C6A15B]/60" />
                                <span className="font-body text-[11.5px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-[13px] sm:tracking-[0.3em]">
                                    Our Hiring Partners
                                </span>
                            </div>

                            <div className="py-2 transition-opacity duration-300 hover:opacity-90">
                                <LogoLoop
                                    logos={PARTNERS}
                                    speed={34}
                                    hoverSpeed={8}
                                    direction="left"
                                    logoHeight={50}
                                    gap={30}
                                    scaleOnHover
                                    fadeOut
                                    fadeOutColor="#071322"
                                    ariaLabel="Hiring partner logos"
                                />
                            </div>
                        </motion.div>

                        {/* AFFILIATIONS — LOGO LOOP */}
                        <motion.div variants={itemVariants} className="mt-6 sm:mt-12">
                            <div className="mb-3.5 flex items-center gap-3 sm:gap-4">
                                <span className="h-px flex-1 bg-white/[0.09]" />
                                <span className="font-body whitespace-nowrap text-[12px] font-medium text-white/55 sm:text-[13.5px]">
                                    Proudly Affiliated &amp; Recognized.
                                </span>
                                <span className="h-px flex-1 bg-white/[0.09]" />
                            </div>

                            <div className="py-1.5 transition-opacity duration-300 hover:opacity-90">
                                <LogoLoop
                                    logos={ACCREDITATIONS}
                                    speed={24}
                                    hoverSpeed={8}
                                    direction="right"
                                    logoHeight={50}
                                    gap={40}
                                    fadeOut
                                    fadeOutColor="#071322"
                                    ariaLabel="Accreditation marks"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
    Building2,
    IndianRupee,
    Briefcase,
    PackageCheck,
    Sparkles,
    Users2,
    type LucideIcon,
} from "lucide-react";

/**
 * WhyChooseNAHM
 * -------------------------------------------------------------------------
 * Self-contained section. Requires: tailwindcss, framer-motion, lucide-react.
 *
 * Fonts: loaded via an inline <style> @import below so the component works
 * anywhere. If this lives inside a Next.js app, swap that for next/font
 * (Fraunces + Inter) for better performance — the class names
 * `.font-display` / `.font-body` are already wired up either way.
 *
 * Replace IMAGE_URL with a real photo from a live Nexstay property.
 */

type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const FEATURES: Feature[] = [
    {
        icon: Building2,
        title: "Industry-Integrated Training",
        description:
            "Train inside live Nexstay Hotels & Resorts properties, not just a classroom.",
    },
    {
        icon: IndianRupee,
        title: "Get Paid to Learn",
        description:
            "Stipend starts after 100 days of theoretical sessions, alongside free food and accommodation.",
    },
    {
        icon: Briefcase,
        title: "Placement-First Approach",
        description: "100% placement assistance across India and internationally.",
    },
    {
        icon: PackageCheck,
        title: "Complete Support",
        description:
            "Free uniform kit and help securing education loans.",
    },
    {
        icon: Sparkles,
        title: "Well-Rounded Development",
        description: "Placement training sessions and personality development workshops.",
    },
    {
        icon: Users2,
        title: "Small Batches",
        description: "Only 35 students per batch for hands-on, individual mentoring.",
    },
];

const IMAGE_URL = "/why-us.jpeg";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function WhyChooseNAHM() {
    const reduceMotion = useReducedMotion();

    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.18,
                delayChildren: 0.05,
            },
        },
    };

    const fadeLeft: Variants = {
        hidden: { opacity: 0, x: reduceMotion ? 0 : -36 },
        show: { opacity: 1, x: 0, transition: { duration: 1.4, ease: EASE } },
    };

    const fadeUpHero: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
        show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
    };

    const featuresCard: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: EASE,
                staggerChildren: reduceMotion ? 0 : 0.12,
                delayChildren: 0.25,
            },
        },
    };

    const featureItem: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
    };

    return (
        <section
            aria-label="Why choose NAHM"
            className="relative w-full overflow-hidden bg-white py-10 sm:py-8 lg:py-14"
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

            {/* ambient slow-drifting glow */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-[24rem] w-[24rem] rounded-full bg-[#C6A15B]/25 blur-3xl sm:h-[30rem] sm:w-[30rem]"
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            x: [0, 26, -14, 0],
                            y: [0, -18, 12, 0],
                            scale: [1, 1.08, 0.95, 1],
                        }
                }
                transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* right-edge signature sliver, echoes the reference layout's accent bar */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-8 right-0 hidden w-1.5 rounded-full bg-gradient-to-b from-[#C6A15B] via-[#071322] to-[#C6A15B] opacity-70 lg:block"
            />

            <div className="relative mx-auto max-w-[100rem] px-3 sm:px-8 lg:px-14">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6"
                >
                    {/* IMAGE */}
                    <motion.div variants={fadeLeft} className="relative lg:col-span-7">
                        <div className="relative h-full min-h-[380px] overflow-hidden rounded-[1.75rem] sm:min-h-[460px] sm:rounded-[2rem] lg:min-h-[640px]">
                            <motion.img
                                src={IMAGE_URL}
                                alt="Trainees at a live Nexstay Hotels & Resorts property"
                                className="h-full w-full object-cover"
                                initial={{ scale: reduceMotion ? 1 : 1.1 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.2, ease: EASE }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/55 via-[#071322]/0 to-transparent" />
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-5">
                        {/* HERO CARD */}
                        <motion.div
                            variants={fadeUpHero}
                            className="rounded-[1.75rem] bg-[#071322] px-6 py-8 sm:rounded-[2rem] sm:px-9 sm:py-10"
                        >
                            <span className="font-body text-xs font-medium uppercase tracking-[0.22em] text-[#C6A15B] sm:text-sm">
                                Why choose NAHM
                            </span>
                            <p className="font-display mt-4 text-2xl font-semibold leading-[1.15] text-[#F3ECDD] sm:mt-5 sm:text-3xl lg:text-[2.1rem]">
                                This isn&apos;t just classroom training.
                            </p>
                        </motion.div>

                        {/* FEATURES CARD */}
                        <motion.div
                            variants={featuresCard}
                            className="flex-1 rounded-[1.75rem] bg-[#10263B] px-5 py-6 sm:rounded-[2rem] sm:px-7 sm:py-7"
                        >
                            <ul className="divide-y divide-white/10">
                                {FEATURES.map((feature) => {
                                    const Icon = feature.icon;
                                    return (
                                        <motion.li
                                            key={feature.title}
                                            variants={featureItem}
                                            whileHover={reduceMotion ? undefined : { x: 4 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                                        >
                                            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/15 text-[#C6A15B] transition-colors duration-300 group-hover:bg-[#C6A15B]/25">
                                                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                                            </span>
                                            <span>
                                                <span className="font-body block text-[15px] font-semibold text-[#F3ECDD] sm:text-base">
                                                    {feature.title}
                                                </span>
                                                <span className="font-body mt-1 block text-[13.5px] leading-relaxed text-[#C9D2DA] sm:text-sm">
                                                    {feature.description}
                                                </span>
                                            </span>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
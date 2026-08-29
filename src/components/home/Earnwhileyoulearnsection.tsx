"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Utensils, Home, ArrowUpRight } from "lucide-react";

const IMAGE_URL ="/earn-while.jpeg";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function StudentRewardsBanner() {
    const reduceMotion = useReducedMotion();

    const group: Variants = {
        hidden: {},
        show: {
            transition: { staggerChildren: reduceMotion ? 0 : 0.16, delayChildren: 0.15 },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
    };

    return (
        <section className="relative w-full overflow-hidden bg-[#071322]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');
        .font-headline { font-family: 'Oswald', ui-sans-serif, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

            <div className="relative flex w-full flex-col lg:flex-row lg:min-h-[640px]">
                {/* IMAGE */}
                <motion.div
                    className="relative h-[50vh] min-h-[360px] w-full overflow-hidden sm:h-[56vh] sm:min-h-[440px] lg:h-auto lg:min-h-[640px] lg:flex-1 lg:-mr-[8%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.1, ease: EASE }}
                >
                    <motion.img
                        src={IMAGE_URL}
                        alt="A NAHM student during training"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        initial={{ scale: reduceMotion ? 1 : 1.12 }}
                        whileInView={reduceMotion ? { scale: 1 } : { scale: [1.12, 1, 1.04, 1] }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: reduceMotion ? 1.2 : 26,
                            times: reduceMotion ? undefined : [0, 0.08, 0.54, 1],
                            ease: EASE,
                            repeat: reduceMotion ? 0 : Infinity,
                        }}
                    />
                </motion.div>


                <div
                    className="relative w-full bg-[#071322] pt-10 sm:pt-14 lg:mt-0 lg:w-[56%] lg:flex-shrink-0 lg:pt-0
    lg:[clip-path:polygon(0_0,100%_0,100%_100%,14%_100%)]"
                >

                    {/* ambient glow */}
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute left-4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-3xl sm:-left-10 sm:h-80 sm:w-80 lg:-left-24 lg:h-[26rem] lg:w-[26rem]"
                        animate={
                            reduceMotion
                                ? undefined
                                : { x: [0, 24, -12, 0], y: [0, -16, 10, 0] }
                        }
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                        variants={group}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="relative mx-auto max-w-xl px-5 pb-12 pt-2 sm:px-8 sm:pb-16 sm:pt-4 lg:mx-0 lg:px-16 lg:py-24 lg:pl-[16%] xl:px-20 xl:pl-[18%]"
                    >
                        <motion.span
                            variants={item}
                            className="font-body inline-block rounded-full border border-[#C6A15B]/40 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C6A15B] sm:px-4 sm:text-xs"
                        >
                            Student rewards
                        </motion.span>

                        <motion.h2
                            variants={item}
                            className="font-headline mt-4 text-[clamp(1.9rem,7vw,3.4rem)] font-bold uppercase leading-[1.05] tracking-tight text-white sm:mt-6"
                        >
                            Earn while you learn
                        </motion.h2>

                        <motion.p
                            variants={item}
                            className="font-body mt-4 text-[15px] leading-relaxed text-white/70 sm:mt-6 sm:text-lg"
                        >
                            Earn up to{" "}
                            <span className="font-semibold text-[#C6A15B]">₹1,20,000</span> as
                            stipend during your training — plus free food and accommodation.
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3"
                        >
                            <span className="font-body flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[13px] font-medium text-white sm:px-4 sm:py-2.5 sm:text-sm">
                                <Utensils
                                    className="h-4 w-4 shrink-0 text-[#C6A15B]"
                                    strokeWidth={1.75}
                                />
                                Free meals
                            </span>
                            <span className="font-body flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[13px] font-medium text-white sm:px-4 sm:py-2.5 sm:text-sm">
                                <Home
                                    className="h-4 w-4 shrink-0 text-[#C6A15B]"
                                    strokeWidth={1.75}
                                />
                                Free accommodation
                            </span>
                        </motion.div>

                        <motion.a
                            variants={item}
                            href="/earn-while-you-learn"
                            className="font-body group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C6A15B] px-5 py-3.5 text-sm font-semibold text-[#C6A15B] transition-colors duration-300 hover:bg-[#C6A15B] hover:text-[#071322] active:bg-[#C6A15B] active:text-[#071322] sm:mt-10 sm:w-fit sm:justify-start sm:py-3"
                        >
                            View month-by-month stipend table
                            <ArrowUpRight
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                strokeWidth={2}
                            />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
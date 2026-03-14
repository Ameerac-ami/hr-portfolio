"use client";

import { motion, Variants } from "framer-motion";

export default function AboutSection() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section id="about" className="w-full max-w-7xl px-6 py-26">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="flex flex-col items-center text-center"
            >
                <motion.h2 className="mb-8 font-display text-4xl font-bold text-white tracking-tight">
                    About Me
                </motion.h2>
                <motion.div className="max-w-3xl space-y-6 text-xl text-zinc-400 leading-relaxed text-center">
                    <p>
                        I&apos;m Ameera, a dedicated Administrative Professional
                        with 2+ years of experience in streamlining office
                        operations and providing high-level executive support. I
                        specialize in managing complex schedules, coordinating
                        departmental workflows, and maintaining precise
                        organizational systems that drive business efficiency.
                    </p>
                    <p>
                        My approach combines meticulous attention to detail with
                        a proactive mindset, ensuring that every task—from
                        high-stakes executive coordination to daily office
                        management—is executed with professionalism and care. I
                        am passionate about optimizing processes, fostering
                        collaborative environments, and delivering
                        administrative excellence.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}

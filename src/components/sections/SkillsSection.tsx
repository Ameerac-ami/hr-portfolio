"use client";

import { motion, Variants } from "framer-motion";

export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Administration",
            skills: [
                "Office Management",
                "Records Management",
                "Process Optimization",
                "Facility Management",
                "Budget Tracking",
                "Compliance",
            ],
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                </svg>
            ),
        },
        {
            title: "Executive Support",
            skills: [
                "Calendar Management",
                "Travel Coordination",
                "Stakeholder Relations",
                "Meeting Minutes",
                "Secretarial Support",
                "Confidential Documents",
            ],
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            title: "Soft Skills & Tools",
            skills: [
                "MS Office Suite",
                "Google Workspace",
                "Project Coordination",
                "Communication",
                "Conflict Resolution",
                "Time Management",
            ],
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            ),
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <section id="skills" className="w-full max-w-7xl px-6 py-26">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="mb-20 text-center"
            >
                <motion.h2
                    variants={itemVariants}
                    className="mb-4 font-display text-4xl font-bold text-white tracking-tight"
                >
                    Professional Expertise
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-zinc-400 text-lg"
                >
                    A comprehensive overview of my administrative proficiency
                    and executive support highlights.
                </motion.p>
            </motion.div>

            {/* Highlight Cards Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid gap-6 md:grid-cols-3 mb-20"
            >
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-white/5 p-8 backdrop-blur-sm shadow-sm hover:border-emerald-500/50 hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black transition-transform group-hover:scale-110">
                        <span className="text-xl font-bold">2+</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                        Years Experience
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                        Proven track record of managing office operations and
                        providing flawless executive support.
                    </p>
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/10"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-white/5 p-8 backdrop-blur-sm shadow-sm hover:border-emerald-500/50 hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black transition-transform group-hover:scale-110">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                        Executive Services
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                        Specialized in calendar management, stakeholder
                        communication, and high-level secretarial functions.
                    </p>
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-secondary/5 blur-2xl transition-all group-hover:bg-secondary/10"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-white/5 p-8 backdrop-blur-sm shadow-sm hover:border-emerald-500/50 hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black transition-transform group-hover:scale-110">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                        Process Efficiency
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                        Expertise in optimizing administrative workflows,
                        managing projects, and ensuring seamless organizational
                        delivery.
                    </p>
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/10"></div>
                </motion.div>
            </motion.div>

            {/* Skills Categories Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid gap-8 md:grid-cols-3"
            >
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="rounded-3xl border border-zinc-800 bg-white/5 p-8 shadow-sm hover:border-emerald-500/50 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white border border-zinc-800">
                                {cat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                                {cat.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, j) => (
                                <span
                                    key={j}
                                    className="rounded-full bg-zinc-800 px-4 py-1.5 text-sm font-medium text-zinc-300 border border-zinc-700/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion, Variants } from "framer-motion";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        null | "success" | "error"
    >(null);

    useEffect(() => {
        if (submitStatus === "success") {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 60000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            await addDoc(collection(db, "messages"), {
                ...formData,
                timestamp: serverTimestamp(),
            });
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // const fadeIn: Variants = {
    //     hidden: { opacity: 0, y: 30 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: { duration: 0.8, ease: "easeOut" },
    //     },
    // };

    return (
        <div className="w-full flex flex-col items-center">
            {/* CTA Section */}
            <section
                id="contact-cta"
                className="reveal w-full max-w-4xl px-6 py-26 text-center"
            >
                <div className="rounded-[2.5rem] border border-zinc-800 bg-white/5 p-12 backdrop-blur-xl shadow-lg relative overflow-hidden group">
                    <h2 className="mb-6 font-display text-4xl font-bold text-white">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mb-10 text-lg text-zinc-400 max-w-xl mx-auto">
                        I am currently open to new administrative and executive
                        support roles. If you&apos;re looking to streamline your
                        office operations or need dedicated support, I&apos;d
                        love to connect!
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                        <a
                            href="mailto:ameerac.ami@gmail.com"
                            className="flex h-14 items-center justify-center rounded-xl bg-white px-8 font-bold text-black transition-all hover:bg-zinc-200 shadow-xl hover:scale-105 active:scale-95"
                        >
                            Send an Email
                        </a>
                        {/* <a
                            href="https://www.linkedin.com/in/ameera-c/"
                            target="_blank"
                            className="flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 font-bold text-slate-900 backdrop-blur-sm transition-all hover:bg-white/60 hover:border-slate-400"
                        >
                            LinkedIn
                        </a> */}
                    </div>
                </div>
            </section>

            {/* Message Section */}
            <section id="contact" className="w-full max-w-5xl px-6 py-26">
                <div className="grid gap-16 lg:grid-cols-5">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <h2 className="mb-6 font-display text-4xl font-bold text-white">
                            Send a Message
                        </h2>
                        <p className="mb-8 text-lg text-zinc-400">
                            Looking for a reliable administrative partner?
                            Please reach out via the form below for inquiries
                            regarding office management, executive assistance,
                            or professional coordination.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-zinc-300 p-4 rounded-2xl bg-white/5 border border-zinc-800 shadow-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="font-medium">
                                    ameerac.ami@gmail.com
                                </span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-3xl border border-zinc-800 bg-white/5 p-8 shadow-lg backdrop-blur-xl"
                        >
                            <div className="grid gap-6 md:grid-cols-1 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors focus:ring-4 focus:ring-accent/5"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors focus:ring-4 focus:ring-accent/5"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors focus:ring-4 focus:ring-accent/5 resize-none"
                                    placeholder="How can I assist you?"
                                ></textarea>
                            </div>

                            {submitStatus === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-sm font-medium text-emerald-600 flex items-center gap-2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Message sent successfully!
                                </motion.p>
                            )}
                            {submitStatus === "error" && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-sm font-medium text-rose-600"
                                >
                                    Something went wrong. Please try again or
                                    email me directly.
                                </motion.p>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full rounded-xl bg-white py-4 font-bold text-black transition-all hover:bg-zinc-200 hover:shadow-xl ${
                                    isSubmitting
                                        ? "opacity-70 cursor-not-allowed"
                                        : ""
                                }`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

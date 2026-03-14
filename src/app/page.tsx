"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    useReveal();
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero Section */}
            <section
                id="home"
                className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pt-40 max-md:pt-46"
            >
                <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-white/5 blur-[120px]"></div>

                <div className="flex max-w-4xl flex-col items-center text-center animate-fade-in">
                    <p
                        className="hero-kicker text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-4 animate-slide-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Administrative Executive · Administrative Officer ·
                        Office Management
                    </p>

                    <h1
                        className="mb-6 font-display text-3xl font-bold leading-tight text-white md:text-5xl animate-slide-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Driving Efficiency Through <br />
                        <span className="text-gradient">
                            {" "}
                            Expert Administrative Solutions
                        </span>
                    </h1>

                    <p
                        className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl animate-slide-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        I specialize in optimizing office operations, managing
                        executive workflows, and ensuring seamless
                        organizational coordination with a commitment to
                        excellence and productivity.
                    </p>

                    <div
                        className="flex flex-col gap-4 sm:flex-row animate-slide-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="flex h-14 items-center justify-center rounded-xl bg-white px-8 font-bold text-black transition-all hover:scale-105 hover:bg-neutral-100 shadow-xl"
                        >
                            View My Experience
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="flex h-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-8 font-bold text-white transition-all hover:bg-zinc-800"
                        >
                            Let&apos;s Talk
                        </button>
                    </div>

                    <div
                        className="mt-12 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 backdrop-blur-sm animate-slide-up"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-zinc-400 tracking-wider">
                            Available for full-time HR Administrator roles
                        </span>
                    </div>
                </div>
            </section>

            <AboutSection />
            <SkillsSection />
            {/* <ProjectsSection /> */}
            <ContactSection />
        </div>
    );
}

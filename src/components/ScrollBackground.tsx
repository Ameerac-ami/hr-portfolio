"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollBackground() {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    // Smooth out the scroll progress for more fluid animations
    const smoothY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const timer = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(timer);
    }, []);

    // Two Boxes on Left Side moving in opposite directions
    const box1Y = useTransform(smoothY, [0, 1], [0, 600]); // Moves down
    // const box1Rotate = useTransform(smoothY, [0, 1], [0, 45]); // Rotates

    const box2Y = useTransform(smoothY, [0, 1], [0, -600]); // Moves up
    // const box2Rotate = useTransform(smoothY, [0, 1], [0, -45]); // Rotates opposite

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
            {/* Dynamic Mesh Layer (Updated for True Dark Theme) */}
            <div className="absolute inset-0 bg-[#000000] h-screen w-full opacity-100"></div>

            {/* Scroll-Reactive Elements */}

            {/* Box 1: Emerald Glow - Left Side - Moves Down */}
            <motion.div
                style={{ y: box1Y }}
                className="absolute top-[20%] left-[0%] w-90 h-90 bg-emerald-500/10 backdrop-blur-[150px] rounded-full border border-emerald-500/5"
            />

            {/* Box 2: Neutral Highlight - Left Side - Moves Up */}
            <motion.div
                style={{ y: box2Y }}
                className="absolute bottom-[10%] left-[0] w-60 h-60 bg-white/5 opacity-40 backdrop-blur-[120px] rounded-full border border-white/5"
            />
        </div>
    );
}

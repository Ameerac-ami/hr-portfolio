"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    // Motion values for raw mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isVisible, setIsVisible] = useState(false);

    // Spring configurations for the trailing glow
    const springConfigTrailing = { damping: 20, stiffness: 150 };

    const trailingX = useSpring(mouseX, springConfigTrailing);
    const trailingY = useSpring(mouseY, springConfigTrailing);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.classList.contains("clickable") ||
                target.closest("button") ||
                target.closest("a")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);

        window.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            {/* Trailing Glow Effect (Emerald for High Visibility) */}
            <motion.div
                className="absolute top-0 left-0 h-40 w-40 -ml-20 -mt-20 rounded-full mix-blend-screen opacity-15 blur-3xl"
                style={{
                    x: trailingX,
                    y: trailingY,
                    backgroundColor: "#10b981", // Emerald-500
                    scale: isHovering ? 1.5 : 1,
                }}
            />

            {/* Main Cursor Dot */}
            <motion.div
                className="absolute top-0 left-0 flex items-center justify-center -ml-5 -mt-5 h-10 w-10"
                style={{
                    x: mouseX,
                    y: mouseY,
                    scale: isMouseDown ? 0.8 : isHovering ? 1.5 : 1,
                }}
            >
                <motion.div
                    className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
                        isHovering
                            ? "h-10 w-10 bg-emerald-500/10 border-emerald-500/50"
                            : "h-4 w-4 bg-white/10 border-white/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    }`}
                >
                    <motion.div
                        className={`rounded-full border transition-all duration-300 ${
                            isHovering
                                ? "h-2 w-2 bg-emerald-500 border-emerald-400"
                                : "h-1 w-1 bg-emerald-500 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                        }`}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

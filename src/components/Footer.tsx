export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 py-8 px-6 text-center relative overflow-hidden  backdrop-blur-sm">
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div> */}

            <div className="flex justify-between gap-26 mb-2 text-sm font-medium">
                <p className="text-xs text-slate-400">
                    © {new Date().getFullYear()} Ameera. All rights reserved.
                </p>
                <p className="text-xs text-slate-400">
                    Built with Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}

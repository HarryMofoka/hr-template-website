
import React from 'react';
import { ChevronRight, Activity, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video Placeholder (Image) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" // Corporate Team / Collaboration
                    alt="Corporate Team"
                    className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite] filter contrast-125 saturate-0"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-transparent"></div>
                {/* Radial Focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_90%)]"></div>
            </div>

            {/* Technical Grid */}
            <div className="absolute inset-0 tech-grid z-0 opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
                <div className="flex flex-col items-start max-w-4xl">
                    {/* Status Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </div>
                        <span className="font-tech text-xs tracking-[0.2em] text-blue-500 uppercase">System Status: Recruiting Active</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter uppercase leading-[0.9] mb-8 text-glow"
                    >
                        Human <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">Potential</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-slate-400 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 border-l border-blue-600/50 pl-6"
                    >
                        Connecting visionary companies with exceptional talent. Recruiting at a microscopic level for macroscopic success.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col md:flex-row gap-6"
                    >
                        <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-tech uppercase tracking-widest text-sm transition-all duration-300 clip-diagonal overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Find Talent <ChevronRight className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>

                        <button className="group px-8 py-4 border border-white/20 text-white font-tech uppercase tracking-widest text-sm hover:bg-white/5 transition-all duration-300 clip-diagonal">
                            About Us
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Data Strip */}
            <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm z-20 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-slate-500 font-tech tracking-widest uppercase">
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-blue-500" /> Market Demand: High</span>
                        <span className="flex items-center gap-2"><Crosshair className="w-3 h-3 text-blue-500" /> Precision: 99.8%</span>
                    </div>
                    <div>SCROLL TO INITIALIZE</div>
                </div>
            </div>
        </header>
    );
};

export default Hero;

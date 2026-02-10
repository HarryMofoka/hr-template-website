
import React from 'react';
import { ChevronRight, Activity, Crosshair } from 'lucide-react';

const Hero = () => {
    return (
        <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video Placeholder (Image) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                    alt="Industrial Welding Sparks"
                    className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite] filter contrast-125 saturate-0"
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
                    <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </div>
                        <span className="font-tech text-xs tracking-[0.2em] text-orange-500 uppercase">System Status: Recruiting Active</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter uppercase leading-[0.9] mb-8 animate-fade-up text-glow" style={{ animationDelay: '0.2s' }}>
                        Industrial <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">Precision</span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 animate-fade-up border-l border-orange-600/50 pl-6" style={{ animationDelay: '0.3s' }}>
                        Wir verbinden Schwerindustrie mit digitaler Intelligenz. Rekrutierung auf mikroskopischem Niveau für makroskopischen Erfolg.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col md:flex-row gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <button className="group relative px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-tech uppercase tracking-widest text-sm transition-all duration-300 clip-diagonal overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Talente Finden <ChevronRight className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>

                        <button className="group px-8 py-4 border border-white/20 text-white font-tech uppercase tracking-widest text-sm hover:bg-white/5 transition-all duration-300 clip-diagonal">
                            Über Uns
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Data Strip */}
            <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm z-20 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-slate-500 font-tech tracking-widest uppercase">
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-orange-500" /> Market Demand: High</span>
                        <span className="flex items-center gap-2"><Crosshair className="w-3 h-3 text-orange-500" /> Precision: 99.8%</span>
                    </div>
                    <div>SCROLL TO INITIALIZE</div>
                </div>
            </div>
        </header>
    );
};

export default Hero;

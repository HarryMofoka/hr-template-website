
import React from 'react';
import { Microscope, HardHat, Layers, ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <span className="font-tech text-xs text-orange-500 tracking-[0.3em] uppercase mb-4 block">Core Capabilities</span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight uppercase">Operational <br /> Excellence</h2>
                    </div>
                    <div className="hidden md:block w-32 h-[1px] bg-slate-700 mb-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Card 1 */}
                    <div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
                        <div className="absolute top-0 left-0 p-4">
                            <span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">01</span>
                        </div>
                        <div className="relative z-10">
                            <Microscope className="text-orange-500 w-8 h-8 mb-4" />
                            <h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">High-Tech Engineering</h3>
                            <p className="text-sm text-slate-400 max-w-sm">Präzise Vermittlung für R&D, Robotik und Automatisierungstechnik.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
                        <div className="absolute top-0 left-0 p-4">
                            <span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">02</span>
                        </div>
                        <div className="relative z-10">
                            <HardHat className="text-orange-500 w-8 h-8 mb-4" />
                            <h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Executive Construction</h3>
                            <p className="text-sm text-slate-400 max-w-sm">Führungskräfte für Großprojekte, Infrastruktur und Bauwesen.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500 md:col-span-2">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
                        <div className="absolute top-0 left-0 p-4">
                            <span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">03</span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full">
                            <div>
                                <Layers className="text-orange-500 w-8 h-8 mb-4" />
                                <h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Supply Chain Strategy</h3>
                                <p className="text-sm text-slate-400 max-w-md">Optimierung durch Top-Talente in Logistik und Prozessmanagement.</p>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <a href="#" className="inline-flex items-center gap-2 text-xs font-tech text-white uppercase tracking-widest hover:text-orange-500 transition-colors">
                                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

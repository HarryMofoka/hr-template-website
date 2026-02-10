
import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Truck, Code } from 'lucide-react';

const Sectors = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
                        alt="Sectors Skyline"
                        className="w-full h-full object-cover opacity-30 filter grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/60 to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-semibold text-white tracking-tighter uppercase mb-4"
                    >
                        Focused <span className="text-blue-500">Sectors</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Deep specialization in key industrial verticals.
                    </motion.p>
                </div>
            </section>

            {/* Sectors List */}
            <section className="py-24 max-w-7xl mx-auto px-6 space-y-24">
                {/* Tech */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="flex-1">
                        <Code className="w-12 h-12 text-blue-500 mb-6" />
                        <h2 className="text-4xl text-white font-semibold uppercase mb-6">High-Tech & IT</h2>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Software Development & DevOps</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Data Science & AI</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Cybersecurity Infrastructure</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Embedded Systems</li>
                        </ul>
                    </div>
                    <div className="flex-1 h-80 w-full overflow-hidden border border-white/10 group">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Tech" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                </motion.div>

                {/* Construction */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row-reverse items-center gap-12"
                >
                    <div className="flex-1">
                        <HardHat className="w-12 h-12 text-blue-500 mb-6" />
                        <h2 className="text-4xl text-white font-semibold uppercase mb-6">Construction & Engineering</h2>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Project Management</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Civil Engineering</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Architecture & Design</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Site Safety & Operations</li>
                        </ul>
                    </div>
                    <div className="flex-1 h-80 w-full overflow-hidden border border-white/10 group">
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" alt="Construction" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                </motion.div>

                {/* Logistics */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="flex-1">
                        <Truck className="w-12 h-12 text-blue-500 mb-6" />
                        <h2 className="text-4xl text-white font-semibold uppercase mb-6">Logistics & Supply Chain</h2>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Supply Chain Management</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Warehouse Operations</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Fleet Management Support</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Procurement Strategy</li>
                        </ul>
                    </div>
                    <div className="flex-1 h-80 w-full overflow-hidden border border-white/10 group">
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Logistics" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Sectors;

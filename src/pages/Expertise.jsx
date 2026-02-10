
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Crosshair } from 'lucide-react';

const Expertise = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80"
                        alt="Expertise Meeting"
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
                        Our <span className="text-blue-500">Expertise</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Precision recruitment for the industries that shape the future.
                    </motion.p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-8 border border-white/5 bg-slate-900/20 hover:border-blue-500/30 transition-colors"
                    >
                        <Brain className="w-10 h-10 text-blue-500 mb-6" />
                        <h3 className="text-2xl text-white font-semibold uppercase mb-4">Strategic Insight</h3>
                        <p className="text-slate-400 leading-relaxed">
                            We don't just fill roles; we analyze organizational DNA to ensure every placement drives strategic value and long-term growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8 border border-white/5 bg-slate-900/20 hover:border-blue-500/30 transition-colors"
                    >
                        <Cpu className="w-10 h-10 text-blue-500 mb-6" />
                        <h3 className="text-2xl text-white font-semibold uppercase mb-4">Technical Fluency</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Our consultants are industry veterans who speak the language of engineers, developers, and architects.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-8 border border-white/5 bg-slate-900/20 hover:border-blue-500/30 transition-colors"
                    >
                        <Crosshair className="w-10 h-10 text-blue-500 mb-6" />
                        <h3 className="text-2xl text-white font-semibold uppercase mb-4">Precision Formatting</h3>
                        <p className="text-slate-400 leading-relaxed">
                            A rigorous vetting process that filters the top 1% of talent, saving you time and ensuring immediate impact.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Expertise;

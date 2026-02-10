
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';

const Network = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
                        alt="Global Network"
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
                        Global <span className="text-blue-500">Network</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Connecting talent across borders. Offices in major industrial hubs.
                    </motion.p>
                </div>
            </section>

            {/* Map Placeholder / Locations */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {['New York', 'London', 'Berlin', 'Tokyo', 'Singapore', 'Dubai', 'Sydney', 'Toronto'].map((city, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 border border-white/5 bg-slate-900/40 hover:bg-blue-900/10 transition-colors group cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <MapPin className="text-blue-500 w-6 h-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl text-white font-semibold uppercase">{city}</h3>
                            </div>
                            <p className="text-slate-500 text-sm">
                                Regional Hub <br />
                                Recruitment Specialists: 45+ <br />
                                Active Roles: 120+
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Network;

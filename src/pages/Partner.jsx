
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Partner = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80"
                        alt="Handshake"
                        className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
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
                        Become a <span className="text-blue-500">Partner</span>
                    </motion.h1>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl text-white font-semibold uppercase mb-8">Get in Touch</h2>
                        <p className="text-slate-400 mb-12 leading-relaxed">
                            Ready to transform your workforce? Contact our team of specialists to discuss your requirements.
                            We operate with strict confidentiality and efficiency.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <Mail className="text-blue-500 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold uppercase mb-1">Email Us</h4>
                                    <p className="text-slate-400">contact@forthepeople.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <Phone className="text-blue-500 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold uppercase mb-1">Call Us</h4>
                                    <p className="text-slate-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold uppercase mb-1">Headquarters</h4>
                                    <p className="text-slate-400">
                                        123 Innovation Drive, <br />
                                        Tech City, TC 90210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-slate-900/30 p-8 border border-white/10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-tech text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                                    <input type="text" className="w-full bg-[#020408] border border-white/10 p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-tech text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-[#020408] border border-white/10 p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-tech text-slate-500 uppercase tracking-widest mb-2">Company Name</label>
                                <input type="text" className="w-full bg-[#020408] border border-white/10 p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs font-tech text-slate-500 uppercase tracking-widest mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-[#020408] border border-white/10 p-3 text-white focus:border-blue-500 focus:outline-none transition-colors"></textarea>
                            </div>

                            <button className="w-full bg-blue-600 text-white font-tech uppercase tracking-widest py-4 hover:bg-blue-700 transition-colors clip-diagonal">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partner;

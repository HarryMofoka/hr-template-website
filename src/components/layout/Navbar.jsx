
import React, { useState, useEffect } from 'react';
import { Network, Menu, X } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'bg-[#020408]/90 backdrop-blur-md' : 'bg-[#020408]/80 backdrop-blur-md'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer z-50 relative">
                    <Network className="text-blue-500 w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="font-tech text-lg tracking-[0.2em] font-semibold text-white uppercase">For The People</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-tech text-xs tracking-widest text-slate-400 uppercase">
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">Expertise</a>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">Sectors</a>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">Network</a>

                    <MagneticButton className="border border-white/20 px-6 py-2 text-white hover:border-blue-500 hover:text-blue-400 transition-colors duration-300 clip-diagonal">
                        Become a Partner
                    </MagneticButton>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-white z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8 text-blue-500" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-[#020408]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            <div className="flex flex-col items-center gap-8 font-tech text-lg tracking-widest text-white uppercase">
                                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 transition-colors duration-300">Expertise</a>
                                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 transition-colors duration-300">Sectors</a>
                                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 transition-colors duration-300">Network</a>

                                <button className="border border-white/20 px-8 py-3 text-white hover:border-blue-500 hover:text-blue-400 transition-colors duration-300 clip-diagonal bg-blue-600/10" onClick={() => setIsMobileMenuOpen(false)}>
                                    Become a Partner
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;

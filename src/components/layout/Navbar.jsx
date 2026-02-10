
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

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

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
                    className="md:hidden text-white z-50 relative p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8 text-blue-500" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop Blur */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />

                            {/* Sliding Menu */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="fixed inset-y-0 right-0 w-full max-w-sm h-screen bg-[#020408]/80 backdrop-blur-2xl border-l border-white/10 z-50 flex flex-col items-center justify-center shadow-2xl md:hidden relative"
                            >
                                {/* Close Button inside Drawer */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors focus:outline-none"
                                >
                                    <X className="w-8 h-8" />
                                </button>

                                <div className="flex flex-col items-center gap-10 font-tech text-xl tracking-widest text-white uppercase w-full">
                                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 transition-colors duration-300 py-2">Expertise</a>
                                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 transition-colors duration-300 py-2">Sectors</a>
                                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-500 transition-colors duration-300 py-2">Network</a>

                                    <button className="border border-white/20 px-10 py-4 text-white hover:border-blue-500 hover:text-blue-400 transition-colors duration-300 clip-diagonal bg-blue-600/10 mt-6 text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                                        Become a Partner
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Network, Menu, X } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

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

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'bg-[#020408]/90 backdrop-blur-md' : 'bg-[#020408]/80 backdrop-blur-md'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer z-50 relative">
                    <Network className="text-blue-500 w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="font-tech text-lg tracking-[0.2em] font-semibold text-white uppercase">For The People</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-tech text-xs tracking-widest text-slate-400 uppercase">
                    <Link to="/expertise" className="hover:text-blue-500 transition-colors duration-300">Expertise</Link>
                    <Link to="/sectors" className="hover:text-blue-500 transition-colors duration-300">Sectors</Link>
                    <Link to="/network" className="hover:text-blue-500 transition-colors duration-300">Network</Link>

                    <Link to="/partner">
                        <MagneticButton className="border border-white/20 px-6 py-2 text-white hover:border-blue-500 hover:text-blue-400 transition-colors duration-300 clip-diagonal">
                            Become a Partner
                        </MagneticButton>
                    </Link>
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
                            {/* Backdrop Blur (Optional now if menu is full screen, but good for layers) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />

                            {/* Sliding Menu - Full Width */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="fixed inset-0 w-full h-screen bg-[#020408]/95 backdrop-blur-3xl z-50 flex flex-col items-center justify-center md:hidden relative"
                            >
                                {/* Close Button inside Drawer */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors focus:outline-none"
                                >
                                    <X className="w-8 h-8" />
                                </button>

                                <div className="flex flex-col items-center gap-10 font-tech text-xl tracking-widest text-white uppercase w-full">
                                    <button onClick={() => handleNavigation('/expertise')} className="hover:text-blue-500 transition-colors duration-300 py-2">Expertise</button>
                                    <button onClick={() => handleNavigation('/sectors')} className="hover:text-blue-500 transition-colors duration-300 py-2">Sectors</button>
                                    <button onClick={() => handleNavigation('/network')} className="hover:text-blue-500 transition-colors duration-300 py-2">Network</button>

                                    <button onClick={() => handleNavigation('/partner')} className="border border-white/20 px-10 py-4 text-white hover:border-blue-500 hover:text-blue-400 transition-colors duration-300 clip-diagonal bg-blue-600/10 mt-6 text-sm">
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


import React, { useState, useEffect } from 'react';
import { Network } from 'lucide-react'; // Changed icon to represent people/network
import MagneticButton from '../ui/MagneticButton';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-40 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'bg-[#020408]/90 backdrop-blur-md' : 'bg-[#020408]/80 backdrop-blur-md'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    {/* Replaced Hexagon with Network icon for HR theme */}
                    <Network className="text-blue-500 w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="font-tech text-lg tracking-[0.2em] font-semibold text-white uppercase">For The People</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-tech text-xs tracking-widest text-slate-400 uppercase">
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">Expertise</a>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">Sektoren</a>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">Netzwerk</a>

                    <MagneticButton className="border border-white/20 px-6 py-2 text-white hover:border-blue-500 hover:text-blue-400 transition-colors duration-300 clip-diagonal">
                        Partner Werden
                    </MagneticButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

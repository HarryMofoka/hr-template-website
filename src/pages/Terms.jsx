
import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="pt-32 min-h-screen max-w-4xl mx-auto px-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl text-white font-tech uppercase mb-8"
            >
                Terms of Service
            </motion.h1>
            <div className="text-slate-400 space-y-6 leading-relaxed">
                <h2 className="text-xl text-white font-semibold mt-6">1. Introduction</h2>
                <p>
                    Welcome to For The People. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>

                <h2 className="text-xl text-white font-semibold mt-6">2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on For The People's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>

                <h2 className="text-xl text-white font-semibold mt-6">3. Disclaimer</h2>
                <p>
                    The materials on For The People's website are provided on an 'as is' basis. For The People makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-xl text-white font-semibold mt-6">4. Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of South Africa and you irrevocably submit to the exclusive jurisdiction of the courts in Johannesburg.
                </p>

                <div className="h-px w-full bg-white/10 my-8"></div>
                <p className="text-sm">
                    &copy; 2026 For The People. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Terms;

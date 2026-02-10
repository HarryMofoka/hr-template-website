
import React from 'react';
import { motion } from 'framer-motion';

const Legal = ({ title }) => {
    return (
        <div className="pt-32 min-h-screen max-w-4xl mx-auto px-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl text-white font-tech uppercase mb-8"
            >
                {title}
            </motion.h1>
            <div className="text-slate-400 space-y-6 leading-relaxed">
                <p>
                    This is a placeholder for the {title} page. In a production environment,
                    this section would contain the full legal text, compliance details, and
                    regulatory information required for your jurisdiction.
                </p>
                <p>
                    For the purpose of this demo, this page demonstrates the routing and
                    layout consistency across the "For The People" platform.
                </p>
                <div className="h-px w-full bg-white/10 my-8"></div>
                <p className="text-sm">
                    &copy; 2026 For The People. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Legal;


import React from 'react';
import { motion } from 'framer-motion';

const Imprint = () => {
    return (
        <div className="pt-32 min-h-screen max-w-4xl mx-auto px-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl text-white font-tech uppercase mb-8"
            >
                Imprint
            </motion.h1>
            <div className="text-slate-400 space-y-6 leading-relaxed">
                <p>
                    <strong>For The People GmbH</strong><br />
                    123 Innovation Drive<br />
                    Tech City, TC 90210<br />
                    United States
                </p>
                <p>
                    <strong>Represented by:</strong><br />
                    John Doe, CEO<br />
                    Jane Smith, COO
                </p>
                <p>
                    <strong>Contact:</strong><br />
                    Phone: +1 (555) 123-4567<br />
                    Email: contact@forthepeople.com
                </p>
                <p>
                    <strong>Register Entry:</strong><br />
                    Entry in the Commercial Register.<br />
                    Registering Court: District Court of Tech City<br />
                    Registration Number: HRB 12345
                </p>
                <p>
                    <strong>VAT ID:</strong><br />
                    Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
                    US 123 456 789
                </p>
                <div className="h-px w-full bg-white/10 my-8"></div>
                <p className="text-sm">
                    &copy; 2026 For The People. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Imprint;

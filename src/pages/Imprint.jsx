
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
                    <strong>For The People (Pty) Ltd</strong><br />
                    123 Rivonia Road<br />
                    Sandton, Johannesburg, 2196<br />
                    South Africa
                </p>
                <p>
                    <strong>Represented by:</strong><br />
                    Sipho Nkosi, CEO<br />
                    Willem de Villiers, COO
                </p>
                <p>
                    <strong>Contact:</strong><br />
                    Phone: +27 10 123 4567<br />
                    Email: contact@forthepeople.co.za
                </p>
                <p>
                    <strong>Register Entry:</strong><br />
                    Registered with the Companies and Intellectual Property Commission (CIPC).<br />
                    Registration Number: 2026/123456/07
                </p>
                <p>
                    <strong>VAT ID:</strong><br />
                    Value Added Tax identification number according to South African Revenue Service:<br />
                    4900123456
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

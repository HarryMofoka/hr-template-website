
import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="pt-32 min-h-screen max-w-4xl mx-auto px-6">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl text-white font-tech uppercase mb-8"
            >
                Privacy Policy
            </motion.h1>
            <div className="text-slate-400 space-y-6 leading-relaxed">
                <h2 className="text-xl text-white font-semibold mt-6">1. Data Protection Overview</h2>
                <p>
                    General information<br />
                    The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you.
                </p>

                <h2 className="text-xl text-white font-semibold mt-6">2. Hosting and Content Delivery Networks (CDN)</h2>
                <p>
                    We host the content of our website at the following provider:<br />
                    External Hosting<br />
                    This website is externally hosted. The personal data collected on this website are stored on the servers of the host or those of our third-party service providers.
                </p>

                <h2 className="text-xl text-white font-semibold mt-6">3. General Information and Mandatory Information</h2>
                <p>
                    The operators of this website and its pages take the protection of your personal data very seriously. We treat your personal data as confidential and in compliance with the Protection of Personal Information Act (POPIA) and this Data Protection Declaration.
                </p>
                <p className="mt-4">
                    <strong>Responsible Body:</strong><br />
                    For The People (Pty) Ltd<br />
                    123 Rivonia Road<br />
                    Sandton, Johannesburg, 2196<br />
                    South Africa
                </p>

                <div className="h-px w-full bg-white/10 my-8"></div>
                <p className="text-sm">
                    &copy; 2026 For The People. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Privacy;

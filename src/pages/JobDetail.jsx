
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Briefcase, DollarSign, CheckCircle } from 'lucide-react';
import jobs from '../data/jobs.json';

const JobDetail = () => {
    const { id } = useParams();
    const job = jobs.find(j => j.id === id);

    if (!job) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl text-white font-semibold mb-4">Job Not Found</h2>
                <p className="text-slate-400 mb-8">The position you are looking for does not exist or has been filled.</p>
                <Link to="/candidates" className="text-blue-500 hover:text-blue-400 flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Jobs
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 min-h-screen pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/candidates" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-sm font-tech uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4" /> Back to Candidates
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0F1218] border border-white/5 p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Header */}
                    <div className="relative z-10 border-b border-white/5 pb-8 mb-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-[10px] font-tech text-blue-500 uppercase tracking-widest border border-blue-500/20 px-2 py-1 bg-blue-500/10">
                                {job.department}
                            </span>
                            <span className="text-[10px] font-tech text-slate-500 uppercase tracking-widest border border-white/10 px-2 py-1">
                                {job.type}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-500" />
                                {job.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-blue-500" />
                                {job.salary}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-8 text-slate-300 leading-relaxed">
                        <div>
                            <h3 className="text-white font-semibold uppercase tracking-wider mb-4 text-sm font-tech">Role Overview</h3>
                            <p>{job.description}</p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold uppercase tracking-wider mb-4 text-sm font-tech">Key Requirements</h3>
                            <ul className="space-y-3">
                                {job.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Apply Action */}
                    <div className="relative z-10 mt-12 pt-8 border-t border-white/5">
                        <a
                            href={`mailto:careers@forthepeople.co.za?subject=Application for ${job.title} (${job.id})`}
                            className="inline-block bg-blue-600 text-white font-tech uppercase tracking-widest px-8 py-4 hover:bg-blue-700 transition-colors clip-diagonal"
                        >
                            Apply for this Position
                        </a>
                        <p className="mt-4 text-xs text-slate-500">
                            Please assist your CV and cover letter.
                        </p>
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default JobDetail;

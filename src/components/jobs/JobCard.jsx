
import React from 'react';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JobCard = ({ job, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#0F1218] border border-white/5 p-6 md:p-8 hover:border-blue-500/50 transition-colors duration-300"
        >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-tech text-blue-500 uppercase tracking-widest border border-blue-500/20 px-2 py-1 bg-blue-500/10">
                            {job.department}
                        </span>
                        <span className="text-[10px] font-tech text-slate-500 uppercase tracking-widest">
                            {job.type}
                        </span>
                    </div>

                    <h3 className="text-2xl text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {job.title}
                    </h3>

                    <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.salary}
                        </div>
                    </div>
                </div>

                <Link
                    to={`/jobs/${job.id}`}
                    className="self-start md:self-center shrink-0 flex items-center gap-2 text-xs font-tech text-white uppercase tracking-widest bg-white/5 hover:bg-blue-600 hover:text-white px-6 py-3 transition-all clip-diagonal border border-white/10 hover:border-blue-600"
                >
                    View Role <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Hover decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </motion.div>
    );
};

export default JobCard;

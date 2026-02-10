
import React from 'react';
import { Cpu, Globe, Timer } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            icon: <Cpu className="w-6 h-6 text-orange-500" />,
            value: "4.5",
            suffix: "k",
            label: "Engineers Placed",
            progressWidth: "33%"
        },
        {
            icon: <Globe className="w-6 h-6 text-orange-500" />,
            value: "12",
            suffix: "",
            label: "Global Locations",
            progressWidth: "66%"
        },
        {
            icon: <Timer className="w-6 h-6 text-orange-500" />,
            value: "48",
            suffix: <span className="text-sm align-top text-slate-500">h</span>,
            label: "Avg. Response Time",
            progressWidth: "100%"
        }
    ];

    return (
        <section className="py-24 border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="group relative p-8 border border-white/5 hover:border-orange-600/30 bg-[#0A0C10] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                            {stat.icon}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">
                            {stat.value}{typeof stat.suffix === 'string' ? <span className="text-orange-600">{stat.suffix}</span> : stat.suffix}
                        </h3>
                        <p className="font-tech text-xs tracking-widest text-slate-400 uppercase">{stat.label}</p>
                        <div className="w-full h-[1px] bg-slate-800 mt-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-orange-600" style={{ width: stat.progressWidth }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;

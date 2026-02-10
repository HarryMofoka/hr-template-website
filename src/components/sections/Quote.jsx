
import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
    return (
        <section className="relative py-40 flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                    alt="Abstract Concrete Architecture"
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <Quote className="w-12 h-12 text-orange-600 mx-auto mb-8 opacity-50" />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-tight mb-8">
                    "QUALITÄT IST KEIN ZUFALL. <br />
                    SIE IST IMMER DAS ERGEBNIS <br />
                    INTELLIGENTER ANSTRENGUNG."
                </h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-orange-600"></div>
                    <span className="font-tech text-xs tracking-[0.2em] text-slate-400 uppercase">John Ruskin / Industrial Philosophy</span>
                    <div className="h-[1px] w-12 bg-orange-600"></div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;

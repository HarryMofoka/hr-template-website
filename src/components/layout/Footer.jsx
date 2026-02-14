
import React from 'react';
import { Network, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-[#05060A] border-t border-white/10 pt-20 pb-10">
            {/* Decoration Lines */}
            <div className="absolute top-0 left-10 w-[1px] h-full bg-white/5 hidden md:block"></div>
            <div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Col 1 */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Network className="text-blue-600 w-5 h-5" />
                            <span className="font-tech text-md tracking-[0.2em] font-semibold text-white uppercase">For The People</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Defining the standard for industrial recruitment. Built on precision, trust, and technical expertise.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6">Navigation</h4>
                        <ul className="space-y-3 text-sm text-slate-500 font-light">
                            <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                            <li><Link to="/companies" className="hover:text-blue-500 transition-colors">For Companies</Link></li>
                            <li><Link to="/candidates" className="hover:text-blue-500 transition-colors">For Candidates</Link></li>
                            <li><Link to="/insights" className="hover:text-blue-500 transition-colors">Insights</Link></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-slate-500 font-light">
                            <li><Link to="/imprint" className="hover:text-blue-500 transition-colors">Imprint</Link></li>
                            <li><Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-500 transition-colors">Terms</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Newsletter / Input */}
                    <div>
                        <h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6">Stay Connected</h4>
                        <form className="flex flex-col gap-4">
                            <div className="relative">
                                <input type="email" placeholder="E-MAIL ADDRESS" className="w-full bg-[#0F1218] border border-white/10 p-3 pl-4 text-xs text-white focus:outline-none focus:border-blue-600 transition-colors placeholder-slate-600 font-tech tracking-wider uppercase" />
                            </div>
                            <button className="w-full bg-white text-black hover:bg-blue-600 hover:text-white transition-colors p-3 text-xs font-bold uppercase tracking-widest clip-diagonal">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-slate-600 uppercase tracking-widest font-tech">
                        © 2026 For The People. All Systems Operational.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-green-500"></div>
                        <span className="text-[10px] text-slate-600 uppercase tracking-widest font-tech">Server: Johannesburg-1</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

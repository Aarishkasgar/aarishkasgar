import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#04060e] border-t border-white/10 overflow-hidden pt-20 pb-10">
      {/* 3D Decorative Floating Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-cyan-500/10 via-blue-500/20 to-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left Brand Area */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-black text-white">AARISH KASGAR</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Bridging robust IT infrastructure and beautiful frontend design. Helping brands scale fast with InfiTech Creatives.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://github.com/aarish-kasgar" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/aarish-kasgar" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:aarishkasgar934@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 text-slate-300 hover:text-purple-400 transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Navigation</h4>
            <ul className="space-y-2.5 text-slate-400 font-medium text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About & Experience</Link></li>
              <li><Link to="/agency" className="hover:text-cyan-400 transition-colors">InfiTech Creatives</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyan-400 transition-colors">Client Portfolio</Link></li>
            </ul>
          </div>

          {/* Agency Promo Card */}
          <div className="md:col-span-3">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                Agency Work
              </span>
              <h5 className="text-white font-bold text-lg">InfiTech Creatives</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                Need a full-stack digital solution for your business? Let's discuss your project today.
              </p>
              <Link 
                to="/agency"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-white transition-colors pt-2"
              >
                <span>Explore Services</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aarish Kasgar & InfiTech Creatives. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed & Developed with Passion 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
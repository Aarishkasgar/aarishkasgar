import React from 'react';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projectsData';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* Title Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Real World Solutions 💎</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Client & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Agency Work</span>
        </h1>
        <p className="text-slate-400 text-lg font-medium">
          Delivering high-quality digital solutions across healthcare, sports, travel, and corporate sectors.
        </p>
      </motion.div>

      {/* Interactive 3D Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProjects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-[#050811] rounded-3xl p-1.5 bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-400/80 hover:to-pink-500/80 transition-all duration-500 shadow-2xl toy-card-glow"
          >
            <div className="bg-[#080c1a] rounded-[22px] h-full flex flex-col overflow-hidden">
              
              {/* Cover Image Section */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c1a] via-transparent to-transparent z-10" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050811]/90 backdrop-blur-md border border-white/10 shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      proj.status === 'Live' ? 'bg-emerald-400' : 'bg-orange-400'
                    }`} />
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      proj.status === 'Live' ? 'bg-emerald-500' : 'bg-orange-500'
                    }`} />
                  </span>
                  <span className="text-xs font-black text-white tracking-wide uppercase">
                    {proj.status}
                  </span>
                </div>

                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100" 
                />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow relative z-20 -mt-4">
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {proj.name}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6 font-medium">
                  {proj.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1 bg-white/[0.05] text-cyan-300 rounded-xl border border-white/10 group-hover:border-cyan-500/30">
                      {t}
                    </span>
                  ))}
                </div>

                {/* External Action */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-black text-white group-hover:text-pink-400 transition-colors w-fit"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center pt-10">
        <p className="text-slate-400 text-sm font-bold mb-4">Want a similar custom website built for your brand?</p>
        <Link to="/contact">
          <Button variant="primary">Get In Touch With Me →</Button>
        </Link>
      </div>

    </div>
  );
};

export default Portfolio;
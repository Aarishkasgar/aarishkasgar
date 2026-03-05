import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center w-full z-10 gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-3/5 text-center md:text-left"
        >
          <p className="text-cyan-400 font-medium tracking-widest mb-3 uppercase">Hello World, I am</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
            AARISH KASGAR
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            IT Support Engineer & Frontend Developer
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Detail-oriented professional with hands-on experience in hardware troubleshooting, networking, and building responsive, user-friendly websites. Bridging the gap between robust IT infrastructure and beautiful frontend design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition-colors duration-300 shadow-lg shadow-cyan-500/25">
              View My Work
            </a>
            <a href="#experience" className="px-8 py-3 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors duration-300 border border-white/10">
              My Experience
            </a>
          </div>
        </motion.div>

        {/* Profile Image with Floating Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/5 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-40"></div>
            <img 
              src="/myimg.jpeg" 
              alt="Aarish" 
              className="relative w-64 h-64 md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-slate-800 shadow-2xl"
              onError={(e) => e.target.src = 'https://via.placeholder.com/400?text=Aarish'}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
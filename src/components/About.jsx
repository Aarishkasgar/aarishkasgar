import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#04060e] relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl transform rotate-3 scale-105 opacity-50 blur-sm"></div>
            <img 
              src="/myimg.jpeg" 
              alt="Aarish - Founder" 
              className="relative rounded-2xl w-full object-cover border border-white/10 shadow-2xl"
              onError={(e) => e.target.src = 'https://via.placeholder.com/600x700?text=Aarish+Founder'}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About <span className="text-cyan-500">Me</span></h2>
          <h3 className="text-2xl text-blue-400 font-semibold mb-6">Founder of InfiTech Creatives | Frontend Developer</h3>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Hi, I am Aarish Kasgar. My journey started at the intersection of IT hardware and frontend development. Today, I lead my own agency, helping brands scale their digital presence through cutting-edge design, modern web development, and strategic marketing.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            Whether it's deploying a complex hospital management website, creating high-converting travel portals, or designing robust e-commerce and corporate platforms, I blend technical precision with creative vision. My goal is simple: deliver digital solutions that solve real-world problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <FaLaptopCode className="text-3xl text-cyan-400 mb-2" />
              <h4 className="text-white font-bold text-xl">10+</h4>
              <p className="text-slate-400 text-sm">Tech Stacks</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <FaUsers className="text-3xl text-blue-400 mb-2" />
              <h4 className="text-white font-bold text-xl">15+</h4>
              <p className="text-slate-400 text-sm">Happy Clients</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <FaChartLine className="text-3xl text-purple-400 mb-2" />
              <h4 className="text-white font-bold text-xl">100%</h4>
              <p className="text-slate-400 text-sm">Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaTools, FaPaintBrush, FaNetworkWired } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { 
      title: "Frontend Development", 
      desc: "HTML, CSS, JavaScript, React.js, basic Node.js, Responsive UI, basic SEO",
      icon: <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />
    },
    { 
      title: "IT Support & Hardware", 
      desc: "Desktop/Laptop troubleshooting, OS installation, System backup, Printer configuration",
      icon: <FaTools className="text-4xl text-blue-400 mb-4" />
    },
    { 
      title: "Design & Digital Media", 
      desc: "CorelDRAW & Canva, Social media posts, thumbnails, and marketing creatives",
      icon: <FaPaintBrush className="text-4xl text-purple-400 mb-4" />
    },
    { 
      title: "Networking", 
      desc: "LAN/WAN setup, router & switch configuration, IP addressing, internet diagnosis",
      icon: <FaNetworkWired className="text-4xl text-emerald-400 mb-4" />
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-cyan-500">Arsenal</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {skill.icon}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{skill.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
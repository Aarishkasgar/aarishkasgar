import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import { experiencesData } from '../data/experienceData';
import { Award, Briefcase, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const About = () => {
  // Floating toy bounce
  const toyBounce = (delay = 0) => ({
    y: [0, -15, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }
  });

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 max-w-7xl mx-auto space-y-28 relative overflow-hidden">
      
      {/* Background Decorative Emojis */}
      <motion.div animate={toyBounce(0)} className="absolute top-40 -left-4 text-5xl opacity-30 select-none pointer-events-none">
        🎮
      </motion.div>
      <motion.div animate={toyBounce(1)} className="absolute top-1/3 right-4 text-5xl opacity-30 select-none pointer-events-none">
        🎯
      </motion.div>
      <motion.div animate={toyBounce(2)} className="absolute bottom-20 left-10 text-5xl opacity-30 select-none pointer-events-none">
        🏆
      </motion.div>

      {/* --- BIO SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-3xl transform -rotate-3 scale-105 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500" />
          <img 
            src="/myimg.jpeg" 
            alt="Aarish Kasgar" 
            className="relative rounded-3xl w-full object-cover border-2 border-white/20 shadow-2xl z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
            onError={(e) => e.target.src = 'https://via.placeholder.com/600x700?text=Aarish'}
          />
          
          {/* Sticker Tag */}
          <div className="absolute -bottom-4 -right-4 z-20 bg-[#050811] border-2 border-pink-500 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 transform rotate-6">
            <span className="text-xl">🚀</span>
            <span className="text-xs font-black text-white">Always Scaling</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>My Background & Journey 🌟</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Aarish Kasgar</span>
          </h1>
          <h2 className="text-xl text-purple-400 font-bold">
            Founder of InfiTech Creatives | Frontend Developer | IT Specialist
          </h2>
          
          <p className="text-slate-300 text-base leading-relaxed font-medium">
            My journey started at the intersection of IT hardware and frontend development. Today, I lead my own agency, helping brands scale their digital presence through cutting-edge design, modern web development, and strategic marketing.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Whether it's deploying a complex hospital management website, creating high-converting travel portals, or designing robust e-commerce and corporate platforms, I blend technical precision with creative vision. My goal is simple: deliver digital solutions that solve real-world problems.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="primary">
                <span>Let's Talk</span>
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="secondary" icon={false}>
                <span>View Portfolio →</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* --- SKILLS ARSENAL (Gamified Cards) --- */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-black uppercase tracking-widest">
            Level Up Your Tech 🕹️
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border-2 border-white/10 hover:border-cyan-400/80 backdrop-blur-xl transition-all duration-300 group shadow-xl relative overflow-hidden toy-card-glow"
            >
              <div className="mb-6 transform group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- WORK EXPERIENCE TIMELINE --- */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-black uppercase tracking-widest">
            Milestones & Quests 🎒
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-1 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-pink-500">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } gap-8`}
            >
              {/* Timeline Cyber Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050811] border-4 border-pink-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(236,72,153,0.8)]">
                <span className="text-xs font-black">⭐</span>
              </div>

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white/[0.03] border-2 border-white/10 hover:border-pink-500/50 backdrop-blur-xl transition-all shadow-xl group toy-card-glow">
                <span className="text-xs font-black text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 inline-block mb-3">
                  {exp.duration}
                </span>
                <h3 className="text-xl font-black text-white group-hover:text-pink-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-slate-300 font-bold text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2 text-slate-400 text-sm font-medium">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-pink-500 font-bold mt-0.5">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
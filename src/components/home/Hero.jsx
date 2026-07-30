import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Send } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  // Cartoon Toy Bounce Animation
  const toyBounce = (delay = 0) => ({
    y: [0, -18, 0],
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }
  });

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden pt-16">
      
      {/* Deep Cyber Void Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-[140px] -z-10 animate-pulse" />

      {/* Floating Background Toy Emojis */}
      <motion.div animate={toyBounce(0)} className="absolute top-28 left-10 md:left-20 text-4xl md:text-6xl select-none opacity-80 pointer-events-none">
        🚀
      </motion.div>
      <motion.div animate={toyBounce(1)} className="absolute bottom-20 left-16 md:left-1/4 text-4xl md:text-6xl select-none opacity-80 pointer-events-none">
        🕹️
      </motion.div>
      <motion.div animate={toyBounce(2)} className="absolute top-36 right-10 md:right-24 text-4xl md:text-6xl select-none opacity-80 pointer-events-none">
        ⚡
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="lg:col-span-7 text-center lg:text-left z-10"
        >
          {/* Fun Cartoon Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-400/30 mb-6 backdrop-blur-md">
            <span className="text-base">👑</span>
            <span className="text-xs md:text-sm font-black tracking-wide text-cyan-300 uppercase">
              Founder of InfiTech Creatives
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 tracking-tight">
            Level Up Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Digital Presence
            </span> 🎮
          </h1>

          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            Hey, I'm <strong className="text-white font-black underline decoration-pink-500 decoration-wavy">Aarish Kasgar</strong> — Full-Stack Developer & IT Solutions Expert crafting playful, high-performing websites & digital agency experiences.
          </p>

          {/* Action CTA with visible Contact Button */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link to="/portfolio">
              <Button variant="primary">
                <span>View Projects</span>
                <span className="text-lg">✨</span>
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="secondary" icon={false}>
                <span>Contact Me</span>
                <Send className="w-4 h-4 ml-2 text-pink-400" />
              </Button>
            </Link>
          </div>

          {/* Toy Style Live Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mt-14 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <h4 className="text-2xl md:text-3xl font-black text-cyan-400">10+</h4>
              <p className="text-xs text-slate-400 font-bold uppercase mt-1">Tech Stack 🛠️</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <h4 className="text-2xl md:text-3xl font-black text-purple-400">15+</h4>
              <p className="text-xs text-slate-400 font-bold uppercase mt-1">Happy Clients 🤝</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <h4 className="text-2xl md:text-3xl font-black text-pink-400">100%</h4>
              <p className="text-xs text-slate-400 font-bold uppercase mt-1">Success Rate 🔥</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Gamified Toy Profile Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Cyberpunk Dashed Orbit Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-dotted border-pink-400/40 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Profile Avatar Frame */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-2.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/40 overflow-hidden">
              <img 
                src="/myimg.jpeg" 
                alt="Aarish Kasgar" 
                className="w-full h-full object-cover rounded-full border-4 border-[#050811]"
                onError={(e) => e.target.src = 'https://via.placeholder.com/400?text=Aarish+Kasgar'}
              />
            </div>

            {/* Toy Sticker Badges */}
            <motion.div 
              animate={toyBounce(0.5)}
              className="absolute -top-3 -left-3 bg-[#050811]/95 border-2 border-cyan-400 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 transform -rotate-6"
            >
              <span className="text-xl">⚡</span>
              <span className="text-xs font-black text-white">Vite & React Pro</span>
            </motion.div>

            <motion.div 
              animate={toyBounce(1.5)}
              className="absolute -bottom-3 -right-3 bg-[#050811]/95 border-2 border-pink-500 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 transform rotate-6"
            >
              <span className="text-xl">🛠️</span>
              <span className="text-xs font-black text-white">IT Solutions Expert</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
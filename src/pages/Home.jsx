import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, Layers, ExternalLink, ArrowRight, Send } from 'lucide-react';
import Hero from '../components/home/Hero';

const Home = () => {
  const serviceCards = [
    {
      emoji: "🌐",
      title: "Modern Web Development",
      desc: "Building blazing-fast, mobile-friendly web apps using React.js, Tailwind CSS, and Vite.",
      badge: "Frontend & UI",
      border: "hover:border-cyan-400/80"
    },
    {
      emoji: "🛡️",
      title: "IT Support & Hardware",
      desc: "Expert system diagnosis, LAN/WAN setup, desktop troubleshooting, and printer configurations.",
      badge: "Hardware Pro",
      border: "hover:border-purple-400/80"
    },
    {
      emoji: "🎨",
      title: "InfiTech Agency Services",
      desc: "Logo branding, high-converting Meta Ads, social media creatives, and digital marketing.",
      badge: "Digital Agency",
      border: "hover:border-pink-400/80"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <Hero />

      {/* --- CREATIVE TOY CARDS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-black uppercase tracking-widest">
            What I Bring To The Table 🎯
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Expertise That Drives Growth 🚀
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
              className={`p-8 rounded-3xl bg-white/[0.03] border-2 border-white/10 ${item.border} backdrop-blur-xl transition-all duration-300 group shadow-xl relative overflow-hidden toy-card-glow`}
            >
              {/* Top Toy Sticker Badge */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl p-3 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {item.emoji}
                </span>
                <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/10">
                  {item.badge}
                </span>
              </div>

              <h4 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- GAMIFIED CTA BANNER --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-2 border-white/15 p-8 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl shadow-2xl"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-white/10 text-cyan-300 border border-white/20">
              🕹️ Agency Spotlight
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Ready to Start Your Next Digital Project?
            </h3>
            <p className="text-slate-300 text-sm md:text-base font-medium">
              Check out <strong className="text-white underline decoration-cyan-400">InfiTech Creatives</strong> or drop me a message directly!
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/agency"
              className="px-8 py-4 rounded-full bg-white text-[#050811] font-black text-sm hover:bg-cyan-300 transition-colors duration-300 shadow-2xl flex items-center gap-2"
            >
              <span>Visit Agency Page</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-sm hover:scale-105 transition-transform duration-300 shadow-2xl flex items-center gap-2"
            >
              <span>Contact Me</span>
              <Send className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
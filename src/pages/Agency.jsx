import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Code, Server, Megaphone, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Agency = () => {
  const agencyServices = [
    {
      emoji: "🎨",
      title: "Graphic Designing",
      icon: <Palette className="w-10 h-10 text-pink-500" />,
      items: ["Logo Design & Branding", "Social Media Creatives", "Posters & Banners", "Business Cards & UI Kits"],
      gradient: "from-pink-500/10 to-transparent",
      border: "hover:border-pink-500/80"
    },
    {
      emoji: "💻",
      title: "Website Development",
      icon: <Code className="w-10 h-10 text-cyan-400" />,
      items: ["Business Landing Pages", "E-commerce Platforms", "Custom React/Vite Web Apps", "Fast & Mobile Friendly UI"],
      gradient: "from-cyan-500/10 to-transparent",
      border: "hover:border-cyan-400/80"
    },
    {
      emoji: "🛡️",
      title: "IT & Infrastructure Solutions",
      icon: <Server className="w-10 h-10 text-emerald-400" />,
      items: ["Domain & Hosting Setup", "Website Maintenance", "CMS Development", "Enterprise Tech Support"],
      gradient: "from-emerald-500/10 to-transparent",
      border: "hover:border-emerald-400/80"
    },
    {
      emoji: "📣",
      title: "Digital Marketing & Ads",
      icon: <Megaphone className="w-10 h-10 text-orange-400" />,
      items: ["Social Media Marketing", "Meta & Google Ads Campaign", "SEO Optimization", "Brand Growth Strategies"],
      gradient: "from-orange-500/10 to-transparent",
      border: "hover:border-orange-400/80"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 max-w-7xl mx-auto space-y-20">
      
      {/* Agency Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Full-Service Digital Agency 🚀</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 tracking-tight">
          InfiTech Creatives
        </h1>
        
        <p className="text-xl text-slate-200 font-bold">
          A modern digital solutions company empowering businesses to scale and dominate online.
        </p>

        <p className="text-slate-400 leading-relaxed text-base font-medium">
          Hamari team creative design aur latest technology ka use karke brands ko strong online presence dene me help karti hai. Hamara goal hai businesses ko creative design, modern web technology aur effective marketing ke through high revenue aur online success dilana.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <Link to="/contact">
            <Button variant="primary">
              <span>Start Your Project</span>
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Service 3D Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {agencyServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
            className={`p-8 rounded-3xl bg-gradient-to-b ${service.gradient} bg-white/[0.03] border-2 border-white/10 ${service.border} backdrop-blur-xl transition-all duration-300 group shadow-xl flex flex-col justify-between toy-card-glow relative overflow-hidden`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-3xl">{service.emoji}</span>
              </div>

              <h3 className="text-xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <ul className="space-y-3 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-center gap-2 font-medium">
                    <span className="text-cyan-400 font-black">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="w-full py-3.5 rounded-2xl bg-white/[0.05] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 text-white font-black text-xs flex items-center justify-center gap-2 border border-white/10 transition-all duration-300 shadow-md"
            >
              <span>Get Inquiry Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Agency;
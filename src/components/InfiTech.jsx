import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCode, FaServer, FaPaintBrush } from 'react-icons/fa';

const InfiTech = () => {
  const services = [
    {
      title: "Graphic Designing",
      icon: <FaPaintBrush className="text-4xl text-pink-500 mb-4" />,
      items: ["Logo Design", "Social Media Creatives", "Poster / Banner Design", "Business Cards & Branding"]
    },
    {
      title: "Website Development",
      icon: <FaCode className="text-4xl text-blue-500 mb-4" />,
      items: ["Business Websites", "E-commerce Websites", "Custom Web Apps", "Fast & Mobile Friendly"]
    },
    {
      title: "IT Solutions",
      icon: <FaServer className="text-4xl text-emerald-500 mb-4" />,
      items: ["Domain & Hosting Setup", "Website Maintenance", "CMS Development", "Technical Support"]
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn className="text-4xl text-orange-500 mb-4" />,
      items: ["Social Media Marketing", "Meta & Google Ads", "SEO Optimization", "Brand Promotion"]
    }
  ];

  return (
    <section id="infitech" className="py-24 px-6 relative bg-[#080d1a]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            InfiTech Creatives
          </h2>
          <p className="text-xl text-slate-300 font-medium mb-6 max-w-3xl mx-auto">
            A modern digital solutions company empowering businesses to grow online.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 leading-relaxed max-w-4xl mx-auto text-lg">
            Hamari team creative design aur latest technology ka use karke brands ko strong online presence dene me help karti hai. Hamara goal hai businesses ko creative design, modern technology aur effective marketing ke through online success dilana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 group shadow-lg"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-center">
                    <span className="text-blue-500 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiTech;
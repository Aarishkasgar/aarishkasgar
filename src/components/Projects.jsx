import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const allProjects = [
    {
      name: "Infitech Creatives",
      status: "Live",
      tech: ["Digital Agency", "Web Dev", "Marketing"],
      desc: "A modern digital solutions agency empowering businesses with UI/UX, robust development, and marketing strategies.",
      link: "https://www.infitechcreatives.in", // Aap iska real link update kar sakte hain
      image: "/itimg.png"
    },
    {
      name: "Infitech Pharma",
      status: "Live",
      tech: ["React.js", "Tailwind", "Healthcare UI"],
      desc: "A modern digital platform for pharmaceutical services, focusing on trust, clean medical UI, and robust performance.",
      link: "http://www.infitechpharma.com",
      image: "/ipimg.png"
    },
    {
      name: "Tradekul",
      status: "Live",
      tech: ["Web App", "UI/UX", "Frontend"],
      desc: "A dynamic trading and business platform designed for seamless user interaction and real-time data visualization.",
      link: "http://www.tradekul.in",
      image: "/tkimg.png"
    },
    {
      name: "Spot Black Snooker Club",
      status: "Live",
      tech: ["Branding", "Web Design", "Marketing"],
      desc: "Complete digital presence for a premium snooker club, including website, social media creatives, and branding.",
      link: "https://www.spotblacksnookerclub.in",
      image: "/sbimg.png"
    },
    {
      name: "Mumtaz Tours",
      status: "Ongoing",
      tech: ["E-commerce", "React", "Booking UI"],
      desc: "A comprehensive travel and tourism portal featuring customized tour packages and easy inquiry management.",
      link: "http://www.mumtaztours.com",
      image: "/atimg.png"
    },
    {
      name: "Evan Hospital",
      status: "Live",
      tech: ["React.js", "CSS", "JavaScript"],
      desc: "Responsive healthcare website with department details, doctor profiles, and emergency service access.",
      link: "http://www.evanhospital.in",
      image: "/ehimg.png"
    },
    {
      name: "AirTourist Travel",
      status: "Live",
      tech: ["UI/UX", "Social Media", "Web"],
      desc: "Clean UI for a travel agency showcasing tour packages, digital ads, and landing page designs.",
      link: "http://www.airtourist.in",
      image: "/atimg.png"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-[#030712] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Client & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Agency Work</span></h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Delivering high-quality digital solutions across healthcare, sports, travel, and corporate sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.map((proj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0b1120] rounded-3xl p-1 hover:bg-gradient-to-b hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-500 shadow-xl"
            >
              <div className="bg-[#080d1a] rounded-[22px] h-full flex flex-col overflow-hidden relative">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent z-10"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-lg">
                    {proj.status === 'Live' ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                    ) : (
                      <span className="relative flex h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                    )}
                    <span className="text-xs font-bold text-white tracking-wide">{proj.status}</span>
                  </div>

                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" 
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6">
                  <div className="bg-[#080d1a]/90 backdrop-blur-sm rounded-xl p-2 mb-2 inline-block w-max">
                     <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{proj.name}</h3>
                  </div>
                 
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed flex-grow mt-2">{proj.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-white/5 text-cyan-300 rounded-lg border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors w-max"
                  >
                    View Project 
                    <FaArrowRight className="text-cyan-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
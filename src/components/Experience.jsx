import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "IT Incharge & Frontend Developer",
      company: "Evan Hospital, Muzaffarnagar",
      duration: "Oct 2024 - Present",
      details: [
        "Installed and configured 30+ computers, printers, and networking devices.",
        "Developed and maintained the hospital website using React.js and Tailwind.",
        "Resolved daily IT issues for OPD, IPD, and administrative staff."
      ]
    },
    {
      role: "Graphic Designer & Social Media Exec.",
      company: "AirTourist Travel Agency",
      duration: "Jul 2023 - Aug 2024",
      details: [
        "Designed promotional tour creatives, banners, and digital ads.",
        "Managed daily social media content and aligned visuals with brand goals.",
        "Supported landing page updates for new packages."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#060913]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Work <span className="text-cyan-500">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#060913] bg-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="text-sm font-medium text-cyan-400 md:ml-4">{exp.duration}</span>
                </div>
                <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
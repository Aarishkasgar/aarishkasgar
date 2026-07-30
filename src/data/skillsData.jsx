import React from 'react';
import { FaLaptopCode, FaTools, FaPaintBrush, FaNetworkWired } from 'react-icons/fa';

export const skillsData = [
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
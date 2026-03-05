import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import InfiTech from './components/InfiTech';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#0b1120] min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            AARISH KASGAR
          </a>
          
          <div className="hidden lg:flex space-x-6 text-sm font-semibold tracking-wide items-center">
            <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#infitech" className="hover:text-blue-400 transition-colors">Agency</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a 
              href="mailto:aarishkasgar934@gmail.com" 
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>

          <button className="lg:hidden text-2xl text-slate-300 hover:text-cyan-400" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-[#0b1120] border-b border-white/10 absolute w-full left-0 top-full flex flex-col items-center py-6 space-y-5 font-semibold shadow-2xl">
            <a href="#" onClick={toggleMenu} className="hover:text-cyan-400">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-cyan-400">About Me</a>
            <a href="#infitech" onClick={toggleMenu} className="text-blue-400">InfiTech Creatives</a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-cyan-400">Projects</a>
            <a href="mailto:aarishkasgar934@gmail.com" onClick={toggleMenu} className="text-cyan-500">Contact</a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <InfiTech />
        <Projects />
        <Skills />
        <Experience />
      </main>

      <footer className="bg-[#04060e] border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Ready to scale your business?</h2>
          <p className="text-slate-400 mb-8 max-w-xl">Let's build something amazing together with InfiTech Creatives.</p>
          <div className="flex space-x-6 mb-10">
            <a href="https://github.com/aarish-kasgar" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/aarish-kasgar" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:aarishkasgar934@gmail.com" className="p-4 bg-cyan-500/10 rounded-full hover:bg-cyan-500 text-cyan-400 hover:text-white transition-all shadow-lg shadow-cyan-500/20">
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-slate-600 text-sm tracking-wide">
            © {new Date().getFullYear()} Aarish Kasgar & InfiTech Creatives. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
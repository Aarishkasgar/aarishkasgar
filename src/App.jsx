import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import GlowCursor from './components/common/GlowCursor';
import ScrollProgress from './components/common/ScrollProgress'; // 👈 Scroll Progress Bar
import Home from './pages/Home';
import About from './pages/About';
import Agency from './pages/Agency';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-[#050811] min-h-screen text-slate-200 font-sans selection:bg-pink-500 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
        
        {/* Animated Visual Extras */}
        <ScrollProgress />
        <GlowCursor />

        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/agency" element={<Agency />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
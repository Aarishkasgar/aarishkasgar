import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/5 rounded-full blur-[90px] pointer-events-none -z-10 hidden md:block"
      animate={{
        x: mousePosition.x - 160,
        y: mousePosition.y - 160,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5
      }}
    />
  );
};

export default GlowCursor;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Button = ({ 
  children, 
  onClick, 
  href, 
  to, 
  variant = 'primary', 
  icon = true, 
  className = '', 
  type = 'button' 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 backdrop-blur-md";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 border border-cyan-400/20",
    secondary: "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-cyan-500/50 hover:scale-105",
    outline: "border-2 border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500/10"
  };

  const Content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${className} group`}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
    >
      {Content}
    </motion.button>
  );
};

export default Button;
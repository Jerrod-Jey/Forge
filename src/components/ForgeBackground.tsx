import React from 'react';
import { motion } from 'motion/react';

const ForgeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-forge-navy">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forge-navy via-[#0a1120] to-[#0f1a2e]" />

      {/* Soft Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-forge-teal/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-forge-gold/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[100px]" />

      {/* Hexagonal Grid Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Circuit Lines (Subtle) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 100 L200 100 L250 150 L600 150" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
        <path d="M1000 300 L800 300 L750 250 L400 250" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
        <path d="M200 800 L400 800 L450 750 L800 750" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Floating Energy Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[1px] ${i % 3 === 0 ? 'bg-forge-teal' : i % 3 === 1 ? 'bg-forge-gold' : 'bg-cyan-300'}`}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%', 
            opacity: Math.random() * 0.2 + 0.05,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, '-20%', '20%'],
            x: [null, '10%', '-10%'],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ 
            width: Math.random() * 4 + 2 + 'px', 
            height: Math.random() * 4 + 2 + 'px' 
          }}
        />
      ))}

      {/* Subtle Metallic Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    </div>
  );
};

export default ForgeBackground;

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description: "We dive deep into your business goals, audience, and vision to map out your digital blueprint.",
      number: "01"
    },
    {
      title: "Forge",
      description: "Our experts craft your website, AI agents, and branding with precision and premium quality.",
      number: "02"
    },
    {
      title: "Launch & Train",
      description: "We launch your new assets and train you (and your AI) to ensure everything runs smoothly.",
      number: "03"
    },
    {
      title: "Grow",
      description: "Watch your business scale with automated leads and a professional presence that commands respect.",
      number: "04"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-forge-navy text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-forge-teal font-bold text-[10px] tracking-[0.2em] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-forge-teal animate-pulse" />
              Foundry Lifecycle
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-6">The_Forge_Process</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              A high-precision framework designed for your digital evolution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="text-[10rem] font-display font-black text-white/5 absolute -top-20 -left-8 transition-all duration-700 group-hover:text-forge-teal/10">
                {step.number}
              </div>
              <div className="relative h-full flex flex-col pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-forge-teal text-sm flex items-center justify-center font-black group-hover:bg-forge-teal group-hover:text-forge-navy group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                    0{index + 1}
                  </span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-white group-hover:text-forge-teal transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-24 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forge-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-display font-black mb-6 uppercase tracking-tighter leading-tight">Ready to start the evolution?</h2>
              <p className="text-gray-400 text-lg font-medium">
                Our specialists are prepared to engineer your digital weapon. Let's define your market position.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="group relative overflow-hidden whitespace-nowrap bg-white text-forge-navy px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">INIT_PROJECT_LINK</span>
              <div className="absolute inset-0 bg-forge-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;

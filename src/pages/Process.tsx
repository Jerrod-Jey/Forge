import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">The Forge Process</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              A streamlined journey from initial vision to digital dominance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-[10rem] font-display font-black text-white/5 absolute -top-20 -left-8 group-hover:text-forge-teal/10 transition-all duration-500">
                {step.number}
              </div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-forge-teal text-forge-navy text-base flex items-center justify-center font-bold shadow-lg shadow-forge-teal/20">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-8 text-forge-teal/30">
                  <ChevronRight className="w-10 h-10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-24 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-forge-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to start your journey?</h2>
              <p className="text-gray-400 text-xl font-medium">
                We're ready to forge your digital future. Let's build something exceptional together.
              </p>
            </div>
            <button className="whitespace-nowrap bg-white text-forge-navy px-12 py-5 rounded-full text-lg font-bold hover:bg-forge-teal hover:text-white transition-all shadow-2xl">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

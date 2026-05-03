import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyForge = () => {
  const features = [
    {
      title: "Everything Connected",
      description: "Your website and AI agents work in perfect harmony to capture and qualify leads while you sleep.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Premium Quality, Fast",
      description: "We don't believe in long wait times. Get a high-end, professional presence forged in weeks, not months.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Built for Leads",
      description: "We don't just build pretty sites; we build conversion engines designed to put money in your pocket.",
      icon: <ArrowRight className="w-8 h-8" />
    },
    {
      title: "Windsor-Based Insight",
      description: "Local expertise with a global standard. We understand the Ontario market and what drives local success.",
      icon: <MapPin className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-forge-navy relative overflow-hidden">
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
              Core Advantages
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-6">Why Trust Forge</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              We build high-performance digital assets that define your market position.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-24 mb-32">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col gap-6 group relative"
                >
                  <div className="text-[10px] font-bold text-white/10 absolute -top-4 left-0 uppercase tracking-widest">Advantage 0{index + 1}</div>
                  <div className="w-16 h-16 bg-white/5 text-forge-teal rounded-full flex items-center justify-center border border-white/10 group-hover:border-forge-teal group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all relative overflow-hidden">
                    <div className="absolute inset-0 bg-forge-teal/5 translate-y-full group-hover:translate-y-0 transition-transform" />
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-widest">{feature.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group"
            >
              <img 
                src="https://picsum.photos/seed/forge-team-dark/1000/1000" 
                alt="Forge Team at Work" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forge-navy via-transparent to-transparent opacity-90" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 -left-10 glass-card p-10 rounded-[2.5rem] shadow-2xl max-w-sm border-forge-teal/20 backdrop-blur-3xl"
            >
              <div className="text-5xl font-black mb-2 text-forge-teal tabular-nums">100%</div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Uptime Guarantee</p>
              <div className="h-0.5 w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/4 bg-forge-teal" 
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-5" />
          <h2 className="text-3xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter mb-8 max-w-xl mx-auto">Ready to Scale?</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Join the growing list of businesses that have transformed their digital presence with Forge.
          </p>
          <Link 
            to="/contact"
            className="group relative inline-block px-12 py-5 overflow-hidden rounded-full bg-white text-forge-navy text-sm font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Book Consultation</span>
            <div className="absolute inset-0 bg-forge-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyForge;

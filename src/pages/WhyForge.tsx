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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Why Businesses <span className="text-forge-teal">Trust Forge</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              We combine cutting-edge technology with premium design to create digital assets that don't just look good—they perform.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col gap-5 group"
                >
                  <div className="w-16 h-16 bg-white/5 text-forge-teal rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-forge-teal/50 transition-colors shadow-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-medium">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative"
            >
              <img 
                src="https://picsum.photos/seed/forge-team-dark/1000/1000" 
                alt="Forge Team at Work" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forge-navy via-transparent to-transparent" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 -left-10 glass-card p-10 rounded-[2.5rem] shadow-2xl max-w-sm border-forge-teal/20"
            >
              <p className="text-5xl font-black mb-2 text-forge-teal">100%</p>
              <p className="text-lg font-medium text-gray-300 leading-tight">Satisfaction guarantee on every project we forge for our clients.</p>
            </motion.div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to see the difference?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
            Join the growing list of Windsor businesses that have transformed their digital presence with Forge.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-forge-navy px-12 py-5 rounded-full text-lg font-bold hover:bg-forge-teal hover:text-white transition-all shadow-xl"
          >
            Book Your Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyForge;

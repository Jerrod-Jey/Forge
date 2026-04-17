import React from 'react';
import { motion } from 'motion/react';
import { Zap, Bot, ArrowRight, MapPin, Shield, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 glow-mesh" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.15),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-forge-teal-light text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
              <Zap className="w-3 h-3" /> Windsor's Premium Digital Forge
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white leading-[1.05] mb-10 tracking-tight">
              Forge a Stronger <br />
              <span className="text-gradient">Online Presence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              We craft high-converting websites and intelligent AI agents designed to empower local businesses and expand their online prescence. Build your brand, automate your leads, and grow your empire.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="relative group overflow-hidden w-full sm:w-auto bg-white text-forge-navy px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-forge-teal hover:text-white hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Forge Your Website <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-forge-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
              </Link>
              
              <Link 
                to="/services" 
                className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-forge-teal/20 to-forge-gold/20 rounded-[2.5rem] blur-2xl opacity-50" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[21/9]">
            <img 
              src="https://picsum.photos/seed/forge-premium/1920/1080" 
              alt="Premium Digital Experience" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forge-navy via-transparent to-transparent opacity-60" />
            
            {/* Floating UI Elements */}
            <div className="absolute bottom-10 left-10 glass-card p-5 rounded-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-forge-teal/20 rounded-full flex items-center justify-center text-forge-teal border border-forge-teal/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">AI Agent Active</p>
                  <p className="text-xs text-gray-400">Processing 24/7 leads</p>
                </div>
              </div>
            </div>

            <div className="absolute top-10 right-10 glass-card p-4 rounded-xl hidden md:block">
              <div className="flex items-center gap-2 text-forge-teal">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-wider">Performance Optimized</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseForge = () => {
  const features = [
    {
      title: "Everything Connected",
      description: "Your website and AI agents work in perfect harmony to capture and qualify leads while you sleep.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Premium Quality, Fast",
      description: "We don't believe in long wait times. Get a high-end, professional presence forged in weeks, not months.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Built for Leads",
      description: "We don't just build pretty sites; we build conversion engines designed to put money in your pocket.",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: "Windsor-Based Insight",
      description: "Local expertise with a global standard. We understand the Ontario market and what drives local success.",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Why Businesses <br />
              <span className="text-forge-teal">Trust Forge</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              We combine cutting-edge technology with premium design to create digital assets that don't just look good—they perform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-4 group">
                  <div className="w-14 h-14 bg-white/5 text-forge-teal rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-forge-teal/50 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-forge-teal/20 blur-3xl rounded-full opacity-30" />
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/digital-collaboration/800/800" 
                alt="Professional Digital Collaboration" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forge-navy via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-[2rem] shadow-2xl max-w-xs border-forge-teal/20">
              <p className="text-5xl font-bold mb-2 text-forge-teal">100%</p>
              <p className="text-sm font-medium text-gray-300">Satisfaction guarantee on every project we forge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Forge transformed our online presence. Our new site looks incredible, but more importantly, the AI agent has saved us hours of manual lead qualification every week.",
      author: "Sarah Jenkins",
      role: "Lead Agent, Elite Realty",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      quote: "The branding kit was exactly what we needed to look professional. We've seen a 40% increase in inquiries since launching our new brand and website with Forge.",
      author: "Marcus Chen",
      role: "Founder, Windsor Financial",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      quote: "Approachable, professional, and fast. Forge delivered a complete digital package that exceeded our expectations. Highly recommended for any service business.",
      author: "Elena Rodriguez",
      role: "Owner, Luxe Spa",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Client Success Stories</h2>
          <p className="text-xl text-gray-400">Don't just take our word for it—hear from the businesses we've helped grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-10 rounded-[2.5rem] relative group hover:border-forge-teal/30 transition-all">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-forge-teal text-forge-teal" />
                ))}
              </div>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-xs text-forge-teal font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseForge />
      <Testimonials />
    </>
  );
};

export default Home;

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Bot, ArrowRight, MapPin, Shield, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-0 glow-mesh" />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.2),transparent_70%)]" 
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-teal/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-forge-teal-light text-[10px] font-bold uppercase tracking-[0.2em] mb-10 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <div className="w-1.5 h-1.5 rounded-full bg-forge-teal animate-pulse" />
              Windsor's Premium Digital Forge
            </div>
            
            <h1 className="text-7xl md:text-9xl font-display font-black text-white leading-[0.9] mb-10 tracking-tighter">
              FORGE THE <br />
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">FUTURE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              We engineer high-performance digital infrastructure. High-converting frameworks meeting intelligent AI agents to automate your growth and scale your empire.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="relative group overflow-hidden w-full sm:w-auto bg-white text-forge-navy px-12 py-5 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-forge-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/services" 
                className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-12 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm group"
              >
                View Services <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual Element with Parallax */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-forge-teal/30 to-forge-gold/10 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] aspect-[21/9]"
          >
            <img 
              src="https://picsum.photos/seed/forge-industrial/1920/1080" 
              alt="Premium Digital Experience" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forge-navy via-transparent to-transparent opacity-80" />
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            {/* Floating UI Elements */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 glass-card p-6 rounded-2xl hidden md:block border-forge-teal/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-forge-teal/20 rounded-full flex items-center justify-center text-forge-teal border border-forge-teal/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Bot className="w-6 h-6 animate-float" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forge-teal-light mb-1">AUTOMATED_SUCCESS</p>
                  <p className="text-sm font-bold text-white tracking-wide uppercase">AI Capture Active</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-10 right-10 glass-card p-4 rounded-xl hidden md:block border-forge-gold/20"
            >
              <div className="flex items-center gap-2 text-forge-gold">
                <div className="w-2 h-2 rounded-full bg-forge-gold animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Optimized Performance</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseForge = () => {
  const features = [
    {
      id: "01",
      title: "Core Systems",
      description: "Architecture designed for maximum performance and conversion.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Rapid Deployment",
      description: "Fast delivery of enterprise-grade digital assets for your business.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Scale Strategy",
      description: "Intelligent frameworks built to handle your growth seamlessly.",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      id: "04",
      title: "Local Expertise",
      description: "Deep understanding of the local market to drive results.",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-forge-teal font-bold text-xs tracking-[0.3em] mb-6"
            >
              Superior Craftsmanship
            </motion.p>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 leading-[0.9] tracking-tighter">
              BUILT FOR <br />
              <span className="text-forge-teal">GROWTH</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-xl">
              We don't just build websites; we deploy strategic digital weapons designed to expand your territory.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-6 group relative"
                >
                  <div className="text-[10px] font-mono text-white/20 absolute -top-4 left-0">UID_{feature.id}</div>
                  <div className="w-16 h-16 bg-white/5 text-forge-teal rounded-full flex items-center justify-center border border-white/10 group-hover:border-forge-teal/50 transition-all group-hover:scale-110 relative overflow-hidden">
                    <div className="absolute inset-0 bg-forge-teal/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-bold text-white mb-2 tracking-widest">{feature.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-10 bg-forge-teal/20 blur-[100px] rounded-full opacity-20 animate-pulse" />
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/cyber-tech/800/1000" 
                alt="Professional Digital Collaboration" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forge-navy via-transparent to-transparent opacity-90" />
              
              {/* Technical Overlay */}
              <div className="absolute inset-x-8 bottom-8 flex flex-col gap-4">
                <div className="h-0.5 w-full bg-white/10 relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/3 bg-forge-teal" 
                  />
                </div>
                <div className="flex justify-between text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">
                  <span>Optimized</span>
                  <span>Refined</span>
                  <span>Perfected</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-10 -left-10 glass-card p-10 rounded-[2rem] shadow-2xl max-w-xs border-forge-teal/20 backdrop-blur-3xl"
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
          </motion.div>
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
      role: "CEO, Lux Spa",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-forge-teal font-bold text-xs tracking-[0.2em] mb-6 uppercase"
          >
            Trusted by Business Owners
          </motion.p>
          <h2 className="text-4xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter">Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 rounded-[2.5rem] relative group border-white/5 hover:border-forge-teal/30 transition-all flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 font-mono text-white/5 text-4xl">0{i+1}</div>
              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-1 bg-forge-teal opacity-50 group-hover:opacity-100 transition-opacity" />
                ))}
              </div>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg font-medium flex-grow italic">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img src={t.avatar} alt={t.author} className="w-14 h-14 rounded-full object-cover border border-forge-teal/30 grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-white uppercase tracking-tight">{t.author}</p>
                  <p className="text-[10px] text-forge-teal font-bold tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
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

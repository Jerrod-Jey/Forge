import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandForgeOptions = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$100",
      description: "Best for solo entrepreneurs or side hustles just getting started.",
      features: [
        "Logo design (2–3 concepts)",
        "1 revision round",
        "Basic color palette",
        "Font selection",
        "PNG/JPG file delivery"
      ],
      highlight: false
    },
    {
      name: "Business",
      price: "from $400",
      description: "Best for small businesses wanting a cohesive look.",
      features: [
        "Everything in Starter",
        "Full color palette",
        "Brand guidelines doc",
        "Business card design",
        "Letterhead or email signature",
        "Social media templates",
        "2 revision rounds",
        "All file formats (PNG, SVG, PDF)"
      ],
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Premium",
      price: "from $1000",
      description: "Best for established businesses doing a full rebrand.",
      features: [
        "Everything in Business",
        "Full brand identity system",
        "Packaging or signage mockups",
        "Brand style guide",
        "Up to 5 branded collaterals",
        "3 revision rounds",
        "Full source files (AI, PSD)"
      ],
      highlight: false
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-forge-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-forge-teal font-bold text-[10px] tracking-[0.2em] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-forge-teal animate-pulse" />
              Identity Architecture
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-6">Brand Design</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Select the branding framework that aligns with your business's visual maturity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col transition-all group relative overflow-hidden ${tier.highlight ? 'bg-white text-forge-navy scale-105 z-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'glass-card text-white border border-white/10 hover:border-forge-teal/30'}`}
            >
              {tier.badge && (
                <div className="absolute top-8 right-8 bg-forge-navy text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-20">
                  {tier.badge}
                </div>
              )}
              {!tier.badge && <div className="absolute top-6 right-8 font-bold text-[10px] opacity-20 uppercase tracking-widest">Option 0{index + 1}</div>}
              
              {tier.highlight && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-forge-teal">
                  <motion.div 
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/4 bg-forge-navy/10" 
                  />
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{tier.name}</h3>
                
                <div className="mb-6 flex items-baseline gap-2">
                  {tier.price.startsWith('from') ? (
                    <>
                      <span className="text-sm font-bold opacity-60 uppercase shrink-0">from</span>
                      <span className="text-4xl lg:text-5xl font-black tabular-nums tracking-tighter shrink-0">
                        {tier.price.replace('from ', '')}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl lg:text-5xl font-black tabular-nums tracking-tighter shrink-0">
                      {tier.price}
                    </span>
                  )}
                  <span className="text-sm font-bold opacity-60 uppercase shrink-0">
                    one-time
                  </span>
                </div>

                <p className={`text-sm mb-10 leading-relaxed font-medium ${tier.highlight ? 'text-forge-navy/70' : 'text-gray-400'}`}>{tier.description}</p>
                
                <div className="h-px bg-current opacity-10 mb-10" />

                <ul className="space-y-6 mb-12">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex flex-col gap-1">
                      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                        <CheckCircle2 className="w-5 h-5 text-forge-teal shrink-0" />
                        <span>{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to={`/inquiry?package=${encodeURIComponent('Brand Design: ' + tier.name)}`} 
                className={`group relative overflow-hidden w-full text-center py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all ${tier.highlight ? 'bg-forge-navy text-white hover:shadow-[0_0_20px_rgba(15,23,42,0.3)]' : 'bg-white text-forge-navy hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'}`}
              >
                <span className="relative z-10 transition-colors group-hover:text-white">Get Started</span>
                <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${tier.highlight ? 'bg-forge-teal' : 'bg-forge-navy'}`} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 text-center backdrop-blur-sm relative overflow-hidden mb-8"
        >
          <div className="absolute inset-0 grid-pattern opacity-5" />
          <p className="text-sm text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">Printing Services</p>
          <p className="text-xl text-white font-black uppercase tracking-tighter">
            Printing available for cards, signage, packaging, and more.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 text-center backdrop-blur-sm relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 grid-pattern opacity-5" />
          <p className="text-lg text-forge-teal font-black uppercase tracking-[0.2em]">
            Bundle any brand design package with a website package and save 10–15%
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/pricing" 
            className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2"
          >
            ← View All Packages
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandForgeOptions;

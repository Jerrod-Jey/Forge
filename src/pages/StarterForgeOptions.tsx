import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const StarterForgeOptions = () => {
  const tiers = [
    {
      name: "Starter Forge",
      price: "$499",
      description: "Professional high-converting website, custom built to your liking for your business.",
      features: [
        "Custom 5-Page Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        { 
          text: "1 Month Support", 
          subtext: "WITHOUT ADDITIONAL MONTHLY SUPPORT" 
        }
      ],
      highlight: false
    },
    {
      name: "Starter Forge+",
      price: "$499",
      priceSuffix: "+$99/monthly",
      description: "Professional high-converting website, custom built to your liking for your business.",
      features: [
        "Custom 5-Page Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        { 
          text: "1 Month Support", 
          subtext: "ADDITIONAL MONTHLY SUPPORT INCLUDED" 
        }
      ],
      highlight: true
    },
    {
      name: "Starter Forge Monthly",
      price: "$149",
      description: "Perfect for simple to moderately active websites. Prevents small problems from turning into expensive fixes.",
      note: "ONLY PURCHASE IF YOU ALREADY HAVE A COMPLETED WEBSITE FROM FORGE",
      features: [
        "Full Website Backups",
        "Security & Malware Scans",
        "Performance Optimization",
        "1 Hour Monthly Updates",
        "Priority Email Support",
        "Monthly Strategy Check-in"
      ],
      highlight: false,
      isMonthly: true
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
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Starter Forge Options</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Select the support level that best fits your business needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-10 rounded-[3.5rem] flex flex-col h-full transition-all group ${tier.highlight ? 'bg-white text-forge-navy shadow-2xl scale-105 z-10' : 'glass-card text-white border border-white/10 hover:border-forge-teal/30'}`}
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black">{tier.price}</span>
                  <span className="text-base opacity-60">
                    {tier.isMonthly ? '/month' : '/project'}
                    {tier.priceSuffix && <span className="ml-1 text-forge-teal font-bold">{tier.priceSuffix}</span>}
                  </span>
                </div>
                
                {tier.note && (
                  <p className="text-[10px] font-black text-forge-teal mb-4 uppercase tracking-widest leading-tight">
                    {tier.note}
                  </p>
                )}

                <p className={`text-base mb-8 leading-relaxed ${tier.highlight ? 'text-gray-600' : 'text-gray-400'}`}>{tier.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, fIndex) => {
                    const isObject = typeof feature === 'object';
                    const text = isObject ? feature.text : feature;
                    const subtext = isObject ? feature.subtext : null;

                    return (
                      <li key={fIndex} className="flex flex-col gap-1">
                        <div className="flex items-start gap-3 text-sm font-bold">
                          <CheckCircle2 className="w-5 h-5 text-forge-teal shrink-0 mt-0.5" />
                          <span>{text}</span>
                        </div>
                        {subtext && (
                          <div className="pl-8">
                            <p className={`text-[10px] font-black uppercase tracking-wider ${tier.highlight ? 'text-forge-navy/60' : 'text-forge-teal/80'}`}>
                              {subtext}
                            </p>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              <div className="mt-8">
                <Link 
                  to={`/inquiry?package=${encodeURIComponent(tier.name)}`} 
                  className={`w-full block text-center py-4 rounded-full text-base font-bold transition-all ${tier.highlight ? 'bg-forge-navy text-white hover:bg-forge-teal shadow-xl' : 'bg-white text-forge-navy hover:bg-forge-teal hover:text-white shadow-xl'}`}
                >
                  Select Package
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Still have questions?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
            We're here to help you choose the right path for your digital presence.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-forge-navy px-12 py-5 rounded-full text-lg font-bold hover:bg-forge-teal hover:text-white transition-all shadow-xl"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StarterForgeOptions;

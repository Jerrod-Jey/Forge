import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
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
          subtext: "additional Monthly support/maintenance available for additional cost" 
        }
      ],
      highlight: false,
      link: "/starter-forge-options"
    },
    {
      name: "Growth Forge",
      price: "$599",
      pricePrefix: "from",
      description: "Give your business a professional, cohesive brand identity that builds trust and makes your new website look polished and consistent.",
      features: [
        "Custom logo design",
        "Black, white, and full-color logo versions",
        "Typography selection",
        "Basic brand style guide",
        "Business card design",
        "Social media templates",
        "Email signature design",
        "Letterhead template",
        "All source files"
      ],
      highlight: true
    },
    {
      name: "Pro Forge",
      price: "Custom",
      description: "The ultimate all-in-one solution. We combine professional web development with a complete brand identity, plus advanced features to scale your business.",
      features: [
        "Full Starter Forge Website Package",
        "Full Growth Forge Branding Package",
        "E-commerce Integration",
        "Advanced SEO & Analytics",
        "Custom AI-Powered Workflows",
        "Priority 24/7 Support",
        "Monthly Performance Reports",
        "Unlimited Revisions"
      ],
      highlight: false
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
              Premium Packages
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Select the plan that fits your business goals. No hidden fees, just premium results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col h-full transition-all group relative overflow-hidden ${tier.highlight ? 'bg-white text-forge-navy scale-105 z-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'glass-card text-white border border-white/10 hover:border-forge-teal/30 group'}`}
            >
              <div className="absolute top-6 right-8 font-bold text-[10px] opacity-20 uppercase tracking-widest">Package {index + 1}</div>
              
              {tier.highlight && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-forge-teal">
                  <motion.div 
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/4 bg-white opacity-50" 
                  />
                </div>
              )}

              <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                {tier.pricePrefix && <span className="text-sm font-bold opacity-60 uppercase">{tier.pricePrefix}</span>}
                <span className="text-5xl font-black tabular-nums">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-sm font-bold opacity-60 uppercase">/project</span>}
              </div>
              
              <p className={`text-sm mb-10 leading-relaxed font-medium ${tier.highlight ? 'text-forge-navy/70' : 'text-gray-400'}`}>{tier.description}</p>
              
              <div className="h-px bg-current opacity-10 mb-10" />

              <ul className="space-y-6 mb-12 flex-grow">
                {tier.features.map((feature, fIndex) => {
                  const isObject = typeof feature === 'object';
                  const text = isObject ? feature.text : feature;
                  const subtext = isObject ? feature.subtext : null;

                  return (
                    <li key={fIndex} className="flex flex-col gap-1">
                      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-forge-teal' : 'text-forge-teal'}`} />
                        <span>{text}</span>
                      </div>
                      {subtext && (
                        <div className="pl-8">
                          <p className={`text-[10px] font-bold leading-relaxed ${tier.highlight ? 'text-forge-navy/50' : 'text-forge-teal/60'}`}>
                            {subtext}
                          </p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              
              <Link 
                to={tier.link || `/inquiry?package=${encodeURIComponent(tier.name)}`} 
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
          className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-5" />
          <h2 className="text-3xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter mb-8 max-w-xl mx-auto">Custom Solutions</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Standard packages not sufficient? Our lead designers can architect a bespoke digital experience tailored specifically to your business needs.
          </p>
          <Link 
            to="/contact" 
            className="group relative inline-block px-12 py-5 overflow-hidden rounded-full bg-white text-forge-navy text-sm font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Contact Us</span>
            <div className="absolute inset-0 bg-forge-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;

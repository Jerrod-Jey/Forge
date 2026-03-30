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
      price: "$799",
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Transparent Pricing</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Choose the level of forging that fits your business goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-12 rounded-[3.5rem] flex flex-col h-full transition-all group ${tier.highlight ? 'bg-white text-forge-navy shadow-2xl scale-105 z-10' : 'glass-card text-white border border-white/10 hover:border-forge-teal/30'}`}
            >
              <h3 className="text-3xl font-bold mb-3">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                {tier.pricePrefix && <span className="text-lg opacity-60">{tier.pricePrefix}</span>}
                <span className="text-5xl font-black">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-lg opacity-60">/project</span>}
              </div>
              <p className={`text-lg mb-10 leading-relaxed whitespace-pre-line ${tier.highlight ? 'text-gray-600' : 'text-gray-400'}`}>{tier.description}</p>
              <ul className="space-y-5 mb-12 flex-grow">
                {tier.features.map((feature, fIndex) => {
                  const isObject = typeof feature === 'object';
                  const text = isObject ? feature.text : feature;
                  const subtext = isObject ? feature.subtext : null;

                  return (
                    <li key={fIndex} className="flex flex-col gap-1">
                      <div className="flex items-center gap-4 text-base font-bold">
                        <CheckCircle2 className="w-6 h-6 text-forge-teal shrink-0" />
                        <span>{text}</span>
                      </div>
                      {subtext && (
                        <div className="pl-10">
                          <p className={`text-xs font-medium ${tier.highlight ? 'text-forge-navy/60' : 'text-forge-teal/80'}`}>
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
                className={`w-full text-center py-5 rounded-full text-lg font-bold transition-all ${tier.highlight ? 'bg-forge-navy text-white hover:bg-forge-teal shadow-xl' : 'bg-white text-forge-navy hover:bg-forge-teal hover:text-white shadow-xl'}`}
              >
                Select Package
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Need a custom solution?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
            We understand that every business is unique. Contact us to discuss a tailored package that meets your specific needs.
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

export default Pricing;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const StarterForgeOptions = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const tiers = [
    {
      name: "Starter",
      oneTimePrice: "$500",
      monthlyPrice: "$200",
      priceSuffix: "one-time",
      monthlySuffix: "/month",
      monthlyNote: "6 month minimum",
      description: "Essential digital presence for emerging businesses and personal brands.",
      features: [
        "3–5 Professional Pages",
        "Template-based Design",
        "Custom Branding & Colors",
        "Mobile Responsive Architecture",
        "Standard Contact Form",
        "Basic On-Page SEO",
        "1 Round of Revisions"
      ],
      highlight: false
    },
    {
      name: "Business",
      oneTimePrice: "$1,200",
      monthlyPrice: "$250",
      priceSuffix: "one-time",
      monthlySuffix: "/month",
      monthlyNote: "9 month minimum",
      description: "Advanced performance tools for established organizations ready for scale.",
      features: [
        "Up to 10 Custom Pages",
        "Bespoke Custom Design",
        "Mobile Responsive Architecture",
        "Google Maps Integration",
        "CMS (WordPress or Webflow)",
        "Google Analytics Setup",
        "2 Rounds of Revisions"
      ],
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Premium",
      oneTimePrice: "$2,000",
      monthlyPrice: "$325",
      priceSuffix: "one-time",
      monthlySuffix: "/month",
      monthlyNote: "12 month minimum",
      description: "Ultimate digital dominance with fully custom integrations and priority support.",
      features: [
        "Unlimited Pages",
        "Fully Custom Bespoke Design",
        "E-commerce Functionality",
        "Advanced SEO Strategy",
        "Speed & Performance Tuning",
        "3rd-Party Integrations",
        "Priority Turnaround",
        "3 Rounds of Revisions"
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
              Investment Architecture
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-6">Web Design</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium mb-12">
              Select the deployment framework that aligns with your operational requirements.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${!isMonthly ? 'text-white' : 'text-gray-500'}`}>One-Time</span>
              <button 
                onClick={() => setIsMonthly(!isMonthly)}
                className="w-16 h-8 bg-white/5 border border-white/10 rounded-full p-1 relative transition-colors hover:border-forge-teal/50"
              >
                <motion.div 
                  className="w-6 h-6 bg-forge-teal rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                  animate={{ x: isMonthly ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${isMonthly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            </div>
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
                    className="absolute inset-0 w-1/4 bg-white opacity-50" 
                  />
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{tier.name}</h3>
                
                <div className="mb-6 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMonthly ? 'monthly' : 'onetime'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl lg:text-5xl font-black tabular-nums tracking-tighter">
                          {isMonthly ? tier.monthlyPrice : tier.oneTimePrice}
                        </span>
                        <span className="text-sm font-bold opacity-60 uppercase">
                          {isMonthly ? tier.monthlySuffix : tier.priceSuffix}
                        </span>
                      </div>
                      {isMonthly && (
                        <p className={`text-[10px] font-black uppercase tracking-[0.2em] mt-2 ${tier.highlight ? 'text-forge-navy/60' : 'text-forge-teal'}`}>
                          {tier.monthlyNote}
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>
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
                  {isMonthly && (
                    <li className="flex flex-col gap-1">
                      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-forge-teal">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <span>Monthly Support Included</span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              
              <Link 
                to={`/inquiry?package=${encodeURIComponent('Web Design: ' + tier.name)}&billing=${isMonthly ? 'monthly' : 'onetime'}`} 
                className={`group relative overflow-hidden w-full text-center py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all ${tier.highlight ? 'bg-forge-navy text-white hover:shadow-[0_0_20px_rgba(15,23,42,0.3)]' : 'bg-white text-forge-navy hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'}`}
              >
                <span className="relative z-10 transition-colors group-hover:text-white">Get Started</span>
                <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${tier.highlight ? 'bg-forge-teal' : 'bg-forge-navy'}`} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CheckCircle2 className="w-64 h-64 text-forge-teal" />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forge-teal/10 border border-forge-teal/20 text-forge-teal font-bold text-[9px] tracking-[0.2em] mb-6 uppercase">
                  Add-on Protocol
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Monthly Support</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black text-white tracking-tighter">$125</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">/month</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8">
                  Perfect for simple to moderately active websites. Prevents small problems from turning into expensive fixes.
                </p>
                <div className="p-4 rounded-2xl bg-forge-teal/5 border border-forge-teal/10 inline-block">
                  <p className="text-[10px] font-black text-forge-teal uppercase tracking-widest leading-relaxed">
                    Bundle with any website package and pay only $100/month.
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3">
                <ul className="space-y-4">
                  {[
                    "Full Website Backups",
                    "Security & Malware Scans",
                    "Performance Optimization",
                    "Priority Email Support",
                    "Monthly Strategy Check-in"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-forge-teal shrink-0" />
                      <span className="text-sm font-bold text-white uppercase tracking-tight">{feature}</span>
                    </li>
                  ))}
                  <li className="flex flex-col gap-1 ml-8">
                    <span className="text-sm font-bold text-white uppercase tracking-tight">Up to 1 Hour of Monthly Updates</span>
                    <p className="text-[10px] text-gray-500 font-medium italic">
                      Does not roll over, additional hours billed at $65/hr
                    </p>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/3 w-full flex flex-col items-center justify-center">
                <Link 
                  to="/inquiry?package=Monthly%20Support"
                  className="group relative overflow-hidden w-full max-w-sm text-center py-6 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all bg-white text-forge-navy hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10 transition-colors group-hover:text-white">Get Started</span>
                  <div className="absolute inset-0 bg-forge-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-5" />
          <h2 className="text-3xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter mb-8 max-w-xl mx-auto">Need Further Clarification?</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Not sure which framework suits your growth trajectory? Our specialists are available to architect your digital path.
          </p>
          <Link 
            to="/contact" 
            className="group relative inline-block px-12 py-5 overflow-hidden rounded-full bg-white text-forge-navy text-sm font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Consult Our Team</span>
            <div className="absolute inset-0 bg-forge-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default StarterForgeOptions;

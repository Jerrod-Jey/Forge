import React from 'react';
import { motion } from 'motion/react';
import { Layout, Bot, Palette, Share2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Custom Websites",
      description: "High-converting, mobile-first designs forged specifically for real estate and service providers.",
      icon: <Layout className="w-8 h-8" />,
      link: "/starter-forge-options",
      benefits: ["SEO Optimized", "Fast Loading", "Lead Focused"]
    },
    {
      title: "Intelligent AI Agents",
      description: "24/7 automated assistants for lead qualification, appointment booking, and customer support.",
      icon: <Bot className="w-8 h-8" />,
      benefits: ["Instant Response", "CRM Integration", "Multi-lingual"]
    },
    {
      title: "Branding Kits",
      description: "Complete visual identities including logos, color palettes, and comprehensive brand guidelines.",
      icon: <Palette className="w-8 h-8" />,
      benefits: ["Logo Refresh", "Brand Voice", "Visual Assets"]
    },
    {
      title: "Social Media Assets",
      description: "Branded templates and content starters to ensure your presence is consistent across all platforms.",
      icon: <Share2 className="w-8 h-8" />,
      benefits: ["Profile Optimization", "Ready-to-use Templates", "Content Strategy"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-forge-navy min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Comprehensive digital solutions crafted to elevate your brand and automate your growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 rounded-[3rem] flex flex-col h-full group hover:border-forge-teal/30 transition-all"
            >
              {service.link ? (
                <Link 
                  to={service.link}
                  className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-forge-teal mb-10 border border-white/10 hover:border-forge-teal/50 hover:bg-forge-teal/10 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all"
                >
                  {service.icon}
                </Link>
              ) : (
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-forge-teal mb-10 border border-white/10 group-hover:border-forge-teal/50 transition-colors">
                  {service.icon}
                </div>
              )}
              <h3 className="text-3xl font-bold text-white mb-6">{service.title}</h3>
              <p className="text-gray-400 text-lg mb-10 flex-grow leading-relaxed">{service.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-forge-teal" /> {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Featured Package */}
        <div className="bg-forge-navy rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forge-teal/20 blur-[120px] -mr-48 -mt-48" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-forge-teal/20 text-forge-teal text-xs font-bold uppercase tracking-widest mb-6">
                The Ultimate Solution
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">Complete Digital Forge Package</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                The all-in-one transformation for businesses ready to scale. Includes a custom website, AI agent setup, full branding, and 3 months of social media assets.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="whitespace-nowrap bg-forge-teal text-forge-navy px-12 py-5 rounded-full text-lg font-bold hover:bg-white transition-colors shadow-2xl"
            >
              Forge Your Empire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

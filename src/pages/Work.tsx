import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work = () => {
  const projects = [
    {
      title: "Elite Realty Group",
      category: "Real Estate Website + AI Agent",
      image: "https://picsum.photos/seed/realestate/800/600",
      link: "#"
    },
    {
      title: "Luxe Spa & Wellness",
      category: "Branding + Booking Website",
      image: "https://picsum.photos/seed/spa/800/600",
      link: "#"
    },
    {
      title: "Windsor Financial",
      category: "Lead Gen Engine + AI Support",
      image: "https://picsum.photos/seed/finance/800/600",
      link: "#"
    },
    {
      title: "Modern Home Builders",
      category: "Portfolio Website + Branding",
      image: "https://picsum.photos/seed/builders/800/600",
      link: "#"
    },
    {
      title: "Tech Solutions Inc.",
      category: "SaaS Website + AI Support",
      image: "https://picsum.photos/seed/tech/800/600",
      link: "#"
    },
    {
      title: "Local Coffee Roasters",
      category: "E-commerce + Social Media",
      image: "https://picsum.photos/seed/coffee/800/600",
      link: "#"
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
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Forged to Perform</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Take a look at some of the digital assets we've crafted for businesses in Windsor and beyond.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] mb-8 shadow-2xl border border-white/10 group-hover:border-forge-teal/30 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forge-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-forge-navy shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-forge-teal transition-colors">{project.title}</h3>
              <p className="text-lg text-gray-400 font-medium">{project.category}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden group backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-forge-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Want to see your project here?</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              We're always looking for the next great Windsor business to forge into a digital powerhouse. Let's discuss your vision today.
            </p>
            <Link 
              to="/contact"
              className="inline-flex bg-white text-forge-navy px-12 py-5 rounded-full text-lg font-bold hover:bg-forge-teal hover:text-white transition-all shadow-2xl items-center justify-center gap-3 mx-auto group"
            >
              Start Your Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

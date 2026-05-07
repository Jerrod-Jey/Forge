import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Why Forge', href: '/why-forge' },
    { name: 'Process', href: '/process' },
    { name: 'Work', href: '/work' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b bg-forge-navy/80 backdrop-blur-xl border-white/10 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group text-white">
              <img src="/logo.png" alt="FORGE" className="h-10 w-auto transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center gap-2 mr-6 text-[10px] font-bold text-forge-teal/50 uppercase tracking-[0.2em]">
              <div className="w-1.5 h-1.5 rounded-full bg-forge-teal animate-pulse" />
              Foundry Online
            </div>
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href} 
                className={({ isActive }) => 
                  `text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-white ${isActive ? 'text-forge-teal' : 'text-white/40'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              className="group relative px-8 py-3 overflow-hidden rounded-full bg-white text-forge-navy text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">Start Project</span>
              <div className="absolute inset-0 bg-forge-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-forge-navy border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `block px-3 py-4 text-base font-medium rounded-md ${isActive ? 'text-forge-teal bg-white/5' : 'text-white/80 hover:bg-white/5'}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-forge-teal text-forge-navy px-6 py-4 rounded-xl text-base font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

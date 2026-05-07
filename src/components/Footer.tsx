import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import AISearch from './AISearch';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-forge-navy pt-20 pb-10 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-16 pb-16 border-b border-white/5">
          <div className="max-w-xl w-full text-center">
            <h4 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-4">Forge Intel Hub</h4>
            <p className="text-sm text-gray-500 font-medium mb-8">Instant answers to your technical or package inquiries powered by Forge AI.</p>
            <div className="flex justify-center">
              <AISearch />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 text-white">
              <img src="/logo.png" alt="FORGE" className="h-8 w-auto" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering Windsor's businesses with premium digital solutions. We forge high-converting websites and intelligent AI tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-forge-teal transition-colors">Custom Websites</Link></li>
              <li><Link to="/services" className="hover:text-forge-teal transition-colors">AI Agents</Link></li>
              <li><Link to="/services" className="hover:text-forge-teal transition-colors">Branding Kits</Link></li>
              <li><Link to="/services" className="hover:text-forge-teal transition-colors">Social Media</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/why-forge" className="hover:text-forge-teal transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-forge-teal transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-forge-teal transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-forge-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Windsor Forge. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-forge-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-forge-teal transition-colors">Terms of Service</Link>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-forge-teal transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-forge-teal transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-forge-teal transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

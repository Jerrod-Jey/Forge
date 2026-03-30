import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-forge-navy pt-20 pb-10 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Forge Digital Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
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

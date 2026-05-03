import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Custom Website',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your connection.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-forge-navy relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_70%)]" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-2xl"
          >
            <div className="w-24 h-24 bg-forge-teal/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-forge-teal/30">
              <CheckCircle className="w-12 h-12 text-forge-teal" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Request Submitted!</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Thank you for reaching out to Forge. Your inquiry has been received. <br />
              Please allow up to <span className="text-forge-teal font-bold">24 hours</span> for our team to review your request and get back to you.
            </p>
            <div className="space-y-6">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-forge-teal font-bold hover:text-white transition-colors group text-lg"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-forge-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-forge-teal font-bold text-[10px] tracking-[0.2em] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-forge-teal animate-pulse" />
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-6">Let's Get Forging</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Ready to transform your digital presence? Send us a message and we'll start crafting your solution.
            </p>
          </motion.div>
        </div>

        <div className="glass-card rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/10 relative">
          <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
          
          <div className="lg:w-5/12 p-12 md:p-16 bg-white/[0.02] text-white relative border-r border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-forge-teal/5 blur-[120px] -mr-48 -mt-48" />
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-display font-black mb-8 uppercase tracking-tighter"
            >
              Contact Info
            </motion.h2>
            <p className="text-gray-400 text-lg mb-16 leading-relaxed font-medium">
              Direct connection to our team in Windsor. Every message is prioritized.
            </p>
            
            <div className="space-y-12">
              <a href="mailto:jerrodjey@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-forge-teal group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                  <Mail className="w-6 h-6 text-forge-teal group-hover:text-forge-navy transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Email Us</p>
                  <p className="text-lg font-bold text-white group-hover:text-forge-teal transition-colors">jerrodjey@gmail.com</p>
                </div>
              </a>
              <a href="tel:2265068658" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-forge-teal group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                  <Phone className="w-6 h-6 text-forge-teal group-hover:text-forge-navy transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Call Us</p>
                  <p className="text-lg font-bold text-white group-hover:text-forge-teal transition-colors">+1 (226) 506-8658</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-forge-teal group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                  <MapPin className="w-6 h-6 text-forge-teal group-hover:text-forge-navy transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Visit Us</p>
                  <p className="text-lg font-bold text-white group-hover:text-forge-teal transition-colors">Windsor, ON</p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-forge-teal hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all group"><Instagram className="w-5 h-5 group-hover:text-forge-navy transition-colors" /></a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-forge-teal hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all group"><Linkedin className="w-5 h-5 group-hover:text-forge-navy transition-colors" /></a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-forge-teal hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all group"><Twitter className="w-5 h-5 group-hover:text-forge-navy transition-colors" /></a>
            </div>
          </div>

          <div className="lg:w-7/12 p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 p-4 font-bold text-[9px] text-white/10 uppercase tracking-widest hidden md:block">V.2.0</div>
            <form className="space-y-10" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold uppercase tracking-widest">
                  {"Error: " + error}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label htmlFor="fullName" className="text-[10px] font-bold text-forge-teal/60 uppercase tracking-[0.2em] cursor-pointer block">Full Name</label>
                  <input 
                    id="fullName"
                    name="fullName"
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-forge-teal/50 focus:border-forge-teal/50 transition-all text-sm text-white placeholder:text-white/20 relative z-20"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="text-[10px] font-bold text-forge-teal/60 uppercase tracking-[0.2em] cursor-pointer block">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-forge-teal/50 focus:border-forge-teal/50 transition-all text-sm text-white placeholder:text-white/20 relative z-20"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="service" className="text-[10px] font-bold text-forge-teal/60 uppercase tracking-[0.2em] cursor-pointer block">Service Interest</label>
                <div className="relative">
                  <select 
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-forge-teal/50 focus:border-forge-teal/50 transition-all appearance-none text-sm text-white relative z-20"
                  >
                    <option className="bg-forge-navy" value="Custom Website">Custom Website</option>
                    <option className="bg-forge-navy" value="AI Agent Setup">AI Agent Setup</option>
                    <option className="bg-forge-navy" value="Complete Forge Package">Complete Forge Package</option>
                    <option className="bg-forge-navy" value="Branding & Logo">Branding & Logo</option>
                    <option className="bg-forge-navy" value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="message" className="text-[10px] font-bold text-forge-teal/60 uppercase tracking-[0.2em] cursor-pointer block">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-forge-teal/50 focus:border-forge-teal/50 transition-all text-sm text-white placeholder:text-white/20 relative z-20"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative overflow-hidden w-full bg-white text-forge-navy py-6 rounded-xl text-sm font-black transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] active:scale-[0.98] uppercase tracking-[0.3em] relative z-20 disabled:opacity-50"
              >
                <span className="relative z-10 transition-colors group-hover:text-white">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <div className="absolute inset-0 bg-forge-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

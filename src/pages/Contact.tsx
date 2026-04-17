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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Let's Get Forging</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Ready to transform your digital presence? Book a free consultation or send us a message.
            </p>
          </motion.div>
        </div>

        <div className="glass-card rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/10">
          <div className="lg:w-1/2 p-12 md:p-20 bg-white/5 text-white relative border-r border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-forge-teal/10 blur-[120px] -mr-48 -mt-48" />
            <h2 className="text-4xl font-display font-bold mb-8">Ready to Forge Your Success?</h2>
            <p className="text-gray-400 text-xl mb-16 leading-relaxed">
              Book a free consultation and let's discuss how we can build your stronger online presence.
            </p>
            
            <div className="space-y-10">
              <a href="mailto:jerrodjey@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-forge-teal transition-colors duration-300">
                  <Mail className="w-8 h-8 text-forge-teal group-hover:text-forge-navy transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Email us</p>
                  <p className="text-xl font-bold text-white">jerrodjey@gmail.com</p>
                </div>
              </a>
              <a href="tel:2265068658" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-forge-teal transition-colors duration-300">
                  <Phone className="w-8 h-8 text-forge-teal group-hover:text-forge-navy transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Call us</p>
                  <p className="text-xl font-bold text-white">+1 (226) 506-8658</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-forge-teal transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-forge-teal group-hover:text-forge-navy transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Visit us</p>
                  <p className="text-xl font-bold text-white">Windsor, ON, Canada</p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-6">
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-forge-teal transition-colors duration-300"><Instagram className="w-7 h-7" /></a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-forge-teal transition-colors duration-300"><Linkedin className="w-7 h-7" /></a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-forge-teal transition-colors duration-300"><Twitter className="w-7 h-7" /></a>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-20">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="fullName" className="text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Full Name</label>
                  <input 
                    id="fullName"
                    name="fullName"
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all text-lg text-white placeholder:text-gray-600 relative z-20"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all text-lg text-white placeholder:text-gray-600 relative z-20"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Service Interested In</label>
                <div className="relative">
                  <select 
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all appearance-none text-lg text-white relative z-20"
                  >
                    <option className="bg-forge-navy" value="Custom Website">Custom Website</option>
                    <option className="bg-forge-navy" value="AI Agent Setup">AI Agent Setup</option>
                    <option className="bg-forge-navy" value="Complete Forge Package">Complete Forge Package</option>
                    <option className="bg-forge-navy" value="Branding & Logo">Branding & Logo</option>
                    <option className="bg-forge-navy" value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all text-lg text-white placeholder:text-gray-600 relative z-20"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-forge-navy py-6 rounded-2xl text-xl font-black hover:bg-forge-teal hover:text-white transition-all shadow-2xl hover:shadow-forge-teal/20 active:scale-[0.98] uppercase tracking-widest relative z-20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

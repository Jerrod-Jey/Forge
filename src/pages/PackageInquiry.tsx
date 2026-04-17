import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Mail, Phone, Package } from 'lucide-react';

const PackageInquiry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const packageName = queryParams.get('package') || 'Selected Package';
  
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '', // Email or Phone
    paymentMethod: 'Pay Later',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.contact, // Mapping contact to email for the existing API
          service: `Package Inquiry: ${packageName}`,
          message: `Payment Preference: ${formData.paymentMethod}\n\nNotes: ${formData.notes || "No additional notes provided."}`
        }),
      });

      const result = await response.json();

      if (response.ok) {
        if (packageName.toLowerCase().includes('starter forge') && formData.paymentMethod === 'Pay Now') {
          const lowerName = packageName.toLowerCase();
          const paymentUrl = lowerName.includes('starter forge+') 
            ? 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-96A75201HV668221VNHRJTEA'
            : lowerName.includes('starter forge monthly')
            ? 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-88N82570YW9250326NHRJWKQ'
            : 'https://www.paypal.com/ncp/payment/SD9DUB3WHZZUQ';
            
          window.open(paymentUrl, '_blank');
          setIsSubmitted(true);
          return;
        }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    const isRedirectCase = packageName.toLowerCase().includes('starter forge') && formData.paymentMethod === 'Pay Now';
    const lowerName = packageName.toLowerCase();
    const paymentUrl = lowerName.includes('starter forge+') 
      ? 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-96A75201HV668221VNHRJTEA'
      : lowerName.includes('starter forge monthly')
      ? 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-88N82570YW9250326NHRJWKQ'
      : 'https://www.paypal.com/ncp/payment/SD9DUB3WHZZUQ';
    
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {isRedirectCase ? 'Redirecting to Payment...' : 'Inquiry Sent!'}
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              {isRedirectCase ? (
                <>
                  Your inquiry for <span className="text-forge-teal font-bold">{packageName}</span> has been sent. <br />
                  If your payment window didn't open automatically, please click below.
                </>
              ) : (
                <>
                  Thank you for your interest in the <span className="text-forge-teal font-bold">{packageName}</span>. <br />
                  Our team will review your request and get back to you within <span className="text-forge-teal font-bold">24 hours</span>.
                </>
              )}
            </p>
            
            <div className="flex flex-col items-center gap-8">
              {isRedirectCase && (
                <a 
                  href={paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-forge-teal text-forge-navy py-6 rounded-2xl text-xl font-black hover:bg-white transition-all shadow-[0_0_30px_rgba(20,184,166,0.2)] uppercase tracking-widest text-center"
                >
                  Proceed to Payment
                </a>
              )}
              
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
        <div className="mb-12">
          <Link 
            to="/starter-forge-options" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-forge-teal transition-colors group font-bold uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Options
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-10 md:p-16 rounded-[3.5rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-forge-teal/5 blur-[80px] -mr-32 -mt-32" />
              
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-forge-teal/10 border border-forge-teal/20 text-forge-teal text-xs font-black uppercase tracking-widest mb-8">
                <Package className="w-4 h-4" /> Selected Package
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                {packageName}
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
                You've selected the {packageName}. Please provide your details below to start the forging process.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                    <Mail className="w-6 h-6 text-forge-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Direct Contact</p>
                    <p className="text-lg font-bold text-white">jerrodjey@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                    <Phone className="w-6 h-6 text-forge-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Call Support</p>
                    <p className="text-lg font-bold text-white">+1 (226) 506-8658</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-10 md:p-16 rounded-[3.5rem] border border-white/10">
              <h2 className="text-3xl font-display font-bold text-white mb-10">Your Information</h2>
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    {error}
                  </div>
                )}
                
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
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all text-lg text-white placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="contact" className="text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Email or Phone</label>
                  <input 
                    id="contact"
                    name="contact"
                    type="text" 
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="john@example.com or (555) 000-0000"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all text-lg text-white placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pay</label>
                    <span className="text-[10px] text-forge-teal/60 font-medium italic">(Paying now puts you as higher priority)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['Pay Now', 'Pay Later'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: option }))}
                        className={`py-4 px-6 rounded-2xl border transition-all text-sm font-black uppercase tracking-widest ${
                          formData.paymentMethod === option
                            ? 'bg-forge-teal text-forge-navy border-forge-teal shadow-[0_0_20px_rgba(20,184,166,0.2)]'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="notes" className="text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Optional Notes</label>
                  <textarea 
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Any specific requirements or questions?"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all text-lg text-white placeholder:text-gray-600"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-forge-navy py-6 rounded-2xl text-xl font-black hover:bg-forge-teal hover:text-white transition-all shadow-2xl hover:shadow-forge-teal/20 active:scale-[0.98] uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PackageInquiry;

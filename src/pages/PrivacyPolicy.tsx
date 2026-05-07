import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-forge-navy pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-forge-teal font-bold text-[10px] tracking-[0.2em] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-forge-teal animate-pulse" />
            Privacy Guidelines
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-12">Privacy Policy</h1>
          
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] prose prose-invert max-w-none border border-white/10">
            <div className="space-y-10 text-gray-400">
              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">1. Information Collection</h3>
                <p className="leading-relaxed">
                  Forge Brand Design collects essential information required to execute your branding and web projects. This includes your name, business details, contact information, and project-specific requirements provided through our inquiry forms.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">2. Financial Data Integrity</h3>
                <p className="leading-relaxed">
                  We prioritize your financial security. All payments, including deposits and subscriptions, are processed through industry-standard secure gateways (Stripe). We never store nor have access to your full credit card details or bank information locally.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">3. Data Usage & Security</h3>
                <p className="leading-relaxed">
                  Your information is used strictly for project management, service deployment, and essential communication. We implement rigorous security measures to protect against unauthorized access or disclosure of your project parameters and assets.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">4. Third-Party Services</h3>
                <p className="leading-relaxed">
                  We utilize select third-party services (hosting, email systems, payment processors) essential to our operational flow. These partners are vetted for compliance with global privacy standards, and we only share the minimum data necessary for service fulfillment.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">5. Client Rights</h3>
                <p className="leading-relaxed">
                  You have the right to request a summary of the data we hold regarding your projects, as well as the right to request the deletion of non-essential records. For project management reasons, certain operational data may be retained for the duration of our service engagement.
                </p>
              </section>

              <div className="pt-8 border-t border-white/5">
                <p className="text-white/20 font-bold text-xs uppercase tracking-[0.2em]">
                  Privacy Framework 1.9.0 | Updated May 2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

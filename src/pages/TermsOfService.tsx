import React from 'react';
import { motion } from 'motion/react';

const TermsOfService: React.FC = () => {
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
            Legal Guidelines
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter uppercase mb-12">Terms of Service</h1>
          
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] prose prose-invert max-w-none border border-white/10">
            <div className="space-y-10 text-gray-400">
              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">1. Acceptance of Terms</h3>
                <p className="leading-relaxed">
                  By accessing the Forge Brand Design website and engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">2. Service Frameworks</h3>
                <p className="leading-relaxed mb-4">
                  We offer two primary engagement models:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong className="text-white">Web Design:</strong> Development of high-performance digital environments (Starter, Business, Premium).</li>
                  <li><strong className="text-white">Brand Design:</strong> Creation of visual identity systems (Starter, Business, Premium).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">3. Financial Protocols</h3>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    <strong className="text-white uppercase tracking-tighter text-sm">Deposits:</strong> A non-refundable $200 deposit is required to secure your spot in our production queue for all one-time payment web design and brand design packages. Projects will not commence until the deposit is cleared.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white uppercase tracking-tighter text-sm">Monthly Installments:</strong> For monthly-billed web design packages, the first month's payment serves as the commitment fee. These packages carry strict minimum terms (6, 9, or 12 months) as specified during selection.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white uppercase tracking-tighter text-sm">Final Payment:</strong> Remaining balances for one-time projects are due immediately upon project completion and prior to final deployment or high-resolution asset delivery.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">4. Intellectual Property</h3>
                <p className="leading-relaxed">
                  Upon receipt of final payment, full ownership of the customized website design and brand assets is transferred to the client. We retain the right to showcase the completed work in our portfolio and marketing materials. Underlying proprietary code, frameworks, and reusable design patterns remain the property of Forge Brand Design.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">5. Client Responsibility</h3>
                <p className="leading-relaxed">
                  Timely delivery of content, feedback, and approvals is essential. Significant delays in client response (exceeding 14 business days) may result in project suspension and a "Restart Fee" to regain a spot in the production queue.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">6. Maintenance & Support</h3>
                <p className="leading-relaxed">
                  Monthly support subscriptions cover security updates, minor content adjustments, and technical optimization. This does not include full design overhauls or new feature development unless specifically outlined in your service tier.
                </p>
              </section>

              <section>
                <h3 className="text-forge-teal font-black uppercase tracking-widest text-lg mb-4">7. Liability & Limitation</h3>
                <p className="leading-relaxed">
                  Forge Brand Design is not liable for indirect, incidental, or consequential damages resulting from service usage. Our total liability is limited to the total fees paid by the client for the specific project in question.
                </p>
              </section>

              <div className="pt-8 border-t border-white/5">
                <p className="text-white/20 font-bold text-xs uppercase tracking-[0.2em]">
                  System Version 3.1.0 | Updated May 2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;

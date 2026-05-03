import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MouseGlow } from './components/MouseGlow';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyForge from './pages/WhyForge';
import Process from './pages/Process';
import Work from './pages/Work';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import StarterForgeOptions from './pages/StarterForgeOptions';
import PackageInquiry from './pages/PackageInquiry';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 noise-overlay z-[100]" />
        <MouseGlow />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-forge" element={<WhyForge />} />
            <Route path="/process" element={<Process />} />
            <Route path="/work" element={<Work />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/starter-forge-options" element={<StarterForgeOptions />} />
            <Route path="/inquiry" element={<PackageInquiry />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home for unknown routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

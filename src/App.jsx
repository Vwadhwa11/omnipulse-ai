import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleOpenWaitlist = () => {
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsWaitlistModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Clean Hero & Core Features */}
        <HeroSection />

        {/* Short Statement / About */}
        <section id="about" className="py-16 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Built for marketing teams tired of context switching
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Modern growth stacks are fragmented across separate tools for email, creator outreach, ad analytics, and social scheduling. OmniPulse brings these workflows together under a single intelligent system so you can focus on strategy, not tool maintenance.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection />
      </main>

      {/* Clean Minimal Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}

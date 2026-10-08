import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import InteractiveDemo from './components/InteractiveDemo';
import RoiCalculator from './components/RoiCalculator';
import ComparisonSection from './components/ComparisonSection';
import PerksSection from './components/PerksSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleOpenWaitlist = () => {
    // If on screen with #waitlist-form, can either scroll there or open modal
    const formElement = document.getElementById('waitlist-form');
    if (formElement && window.scrollY > 400) {
      setIsWaitlistModalOpen(true);
    } else if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsWaitlistModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* 4 Core Pillars Detail */}
        <PillarsSection />

        {/* Live Interactive Product Sandbox */}
        <InteractiveDemo />

        {/* Dynamic ROI & Time Savings Calculator */}
        <RoiCalculator onOpenWaitlist={() => setIsWaitlistModalOpen(true)} />

        {/* Why OmniPulse Comparison Grid */}
        <ComparisonSection />

        {/* VIP Early Access Perks & Tiers */}
        <PerksSection onOpenWaitlist={() => setIsWaitlistModalOpen(true)} />

        {/* FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenWaitlist={() => setIsWaitlistModalOpen(true)} />

      {/* Pop-up Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { ArrowRight, Menu, X, Command } from 'lucide-react';

export default function Navbar({ onOpenWaitlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs">
              <Command className="w-4 h-4" />
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900">
              OmniPulse
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Platform</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium shadow-xs transition-all cursor-pointer"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-5 bg-white border-b border-slate-200 space-y-2">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
          >
            Platform
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
          >
            About
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
          >
            FAQ
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWaitlist();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm shadow-xs"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}

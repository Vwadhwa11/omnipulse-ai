import React from 'react';
import { X } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export default function WaitlistModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium mb-2.5">
            <span>Private Beta</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Join the Waitlist</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Enter your email to request early access as private beta invites roll out.
          </p>
        </div>

        <WaitlistForm />
      </div>
    </div>
  );
}

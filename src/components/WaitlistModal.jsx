import React from 'react';
import { X, Sparkles } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export default function WaitlistModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0B0D15] border border-indigo-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/70"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pioneer Early Access Cohort</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">Join the Priority Queue</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Unlock 3 months free Pro access, grandfathered 50% discount, and private beta priority.
          </p>
        </div>

        <WaitlistForm />
      </div>
    </div>
  );
}

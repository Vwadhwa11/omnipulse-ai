import React from 'react';
import { Command } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-10 text-slate-500 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center text-white">
            <Command className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-slate-900">OmniPulse</span>
          <span className="text-slate-400">· All-in-one AI Marketing Platform</span>
        </div>

        {/* Right copyright & contact */}
        <div className="flex items-center gap-4 text-slate-500">
          <span>Private Beta Rolling Out</span>
          <span>·</span>
          <span>© 2026 All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}

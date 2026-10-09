import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto p-5 rounded-xl bg-slate-50 border border-slate-200 text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">You're on the early access list</h3>
            <p className="text-xs text-slate-500 mt-0.5">We'll reach out to <span className="font-medium text-slate-800">{email}</span> as soon as access opens.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            required
            placeholder="Enter your work email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 shadow-xs transition-all"
          />
        </div>

        <button
          type="submit"
          className="px-4.5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Get Early Access</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-xs text-slate-400 mt-2 text-center">
        No spam. We'll only email you when private beta invites roll out.
      </p>
    </form>
  );
}

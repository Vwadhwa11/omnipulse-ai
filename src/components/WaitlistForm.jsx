import React, { useState } from 'react';
import { Mail, CheckCircle2, Copy, Users, ArrowRight } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Growth Marketer');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [positionNumber, setPositionNumber] = useState(4821);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    const randOffset = Math.floor(Math.random() * 8) + 1;
    setPositionNumber(4820 + randOffset);
    setIsSubmitted(true);
  };

  const referralLink = `https://wadhwa.shop?ref=${encodeURIComponent(email.split('@')[0] || 'vip')}`;

  const copyLink = () => {
    navigator.clipboard?.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-xl mx-auto p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-premium text-left">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">You're on the early access priority list</h3>
            <p className="text-xs text-slate-500">Invitation confirmation sent to <span className="font-semibold text-slate-800">{email}</span></p>
          </div>
        </div>

        {/* Spot status card */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">Reserved Queue Spot</span>
            <div className="text-2xl font-bold text-slate-900 font-mono mt-0.5">
              #{positionNumber}
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 text-white text-xs font-medium">
              Cohort 1 Reserved
            </span>
            <p className="text-[11px] text-slate-500 mt-1">3 Months Complimentary Pro</p>
          </div>
        </div>

        {/* Share & Move up queue */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-700">Move up 100 spots per friend referred:</label>
            {copied && <span className="text-xs text-emerald-600 font-medium">Copied to clipboard!</span>}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="flex-1 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 font-mono focus:outline-none"
            />
            <button
              onClick={copyLink}
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 mt-4 text-center">
          Strict zero-spam policy. We only reach out when your onboarding access key is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-3">
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
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 shadow-sm transition-all"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Request Early Access</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 px-1 pt-1">
        <div className="flex items-center gap-2">
          <span>Role:</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-white border border-slate-300 rounded-md px-2 py-1 text-slate-700 text-xs focus:outline-none focus:border-slate-900 cursor-pointer shadow-sm"
          >
            <option value="Growth Marketer">Growth Marketer</option>
            <option value="Founder/CEO">Founder / CEO</option>
            <option value="Marketing Agency">Agency Lead</option>
            <option value="E-commerce Brand">E-commerce Brand</option>
            <option value="Creator / Influencer">Content Lead</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>4,820+ marketing leaders waitlisted</span>
        </div>
      </div>
    </form>
  );
}

import React, { useState } from 'react';
import { Mail, CheckCircle2, Copy, Sparkles, Users, Award, ShieldAlert } from 'lucide-react';

export default function WaitlistForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Growth Marketer');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [positionNumber, setPositionNumber] = useState(4821);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    // Simulate submission and calculate unique queue position
    const randOffset = Math.floor(Math.random() * 8) + 1;
    setPositionNumber(4820 + randOffset);
    setIsSubmitted(true);
  };

  const referralLink = `https://omnipulse.ai/vip?ref=${encodeURIComponent(email.split('@')[0] || 'vip')}`;

  const copyLink = () => {
    navigator.clipboard?.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-indigo-950/70 to-slate-900/90 border border-indigo-500/40 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl animate-fade-in text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">You're on the VIP Priority List!</h3>
            <p className="text-xs text-indigo-300">Confirmation sent to <span className="font-semibold text-white">{email}</span></p>
          </div>
        </div>

        {/* Spot status card */}
        <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 mb-5 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Your Reserved Queue Spot</span>
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 font-mono">
              #{positionNumber}
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Tier 1 Early Bird Unlocked
            </span>
            <p className="text-[11px] text-slate-400 mt-1">3 Months Free Pro + 1:1 Setup Call</p>
          </div>
        </div>

        {/* Share & Move up queue */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300">Move up 100 spots per friend referred:</label>
            {copied && <span className="text-xs text-emerald-400 font-medium">Copied to clipboard!</span>}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 font-mono focus:outline-none"
            />
            <button
              onClick={copyLink}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 mt-4 text-center">
          🔒 Zero spam policy. We'll only email you when your private beta onboarding key is generated.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-3">
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Mail className="w-5 h-5" />
          </div>
          <input
            type="email"
            required
            placeholder="Enter your work email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-inner"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 text-indigo-200" />
          <span>Claim VIP Access</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 px-1">
        <div className="flex items-center gap-2">
          <span>I am a:</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-slate-900/80 border border-slate-700/70 rounded-lg px-2.5 py-1 text-slate-300 text-xs focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="Founder/CEO">Founder / CEO</option>
            <option value="Growth Marketer">Growth Marketer</option>
            <option value="Marketing Agency">Agency Director</option>
            <option value="E-commerce Brand">E-commerce Brand</option>
            <option value="Creator / Influencer">Content Strategist</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>4,820+ founders & marketers joined</span>
        </div>
      </div>
    </form>
  );
}

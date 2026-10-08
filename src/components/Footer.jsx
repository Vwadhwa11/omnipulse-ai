import React from 'react';
import { Sparkles, ArrowUp, ShieldCheck, Heart, Globe, MessageSquare, Code2 } from 'lucide-react';

export default function Footer({ onOpenWaitlist }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060A] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      {/* Banner CTA inside Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 p-8 sm:p-12 border border-indigo-500/30 overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              96% of Pioneer Cohort Spots Claimed
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Ready to automate your marketing across all 4 pillars?
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              Join 4,820+ marketing leaders securing their early access invite for the Q2 2026 private beta rollout.
            </p>
            <button
              onClick={onOpenWaitlist}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>Claim Your VIP Priority Spot</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-violet-500 to-pink-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                OmniPulse<span className="text-indigo-400">.ai</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
              The unified AI operating system orchestrating autonomous email marketing, digital performance analytics, influencer outreach, and social campaigns.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SOC2 Type II & GDPR Compliant Infrastructure</span>
            </div>
          </div>

          {/* Column 1: Engines */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">Core Engines</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pillars" className="hover:text-white transition-colors">Autonomous Email</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Performance Analytics</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Influencer Outreach</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">Social Orchestrator</a></li>
              <li><a href="#interactive-demo" className="hover:text-white transition-colors">Interactive Sandbox</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#roi-calc" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Stack Comparison</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Product FAQ</a></li>
              <li><span className="text-slate-600 cursor-not-allowed">API Docs (Beta)</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">Agency Whitepaper</span></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">Community</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>@OmniPulseAI (X / Twitter)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Community</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Developer SDK & API</span>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-indigo-400 font-mono">beta@omnipulse.ai</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 OmniPulse AI Technologies, Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Security Center</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

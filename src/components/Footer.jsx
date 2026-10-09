import React from 'react';
import { Command, ArrowUp, ShieldCheck, Globe, MessageSquare, Code2, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenWaitlist }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs">
      {/* Banner CTA inside Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-900 overflow-hidden text-center shadow-premium relative">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              96% of Pioneer Cohort Spots Reserved
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Ready to unify your entire marketing operation?
            </h3>
            <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">
              Join 4,820+ marketing leaders securing priority early access for the Q2 2026 rollout.
            </p>
            <button
              onClick={onOpenWaitlist}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Priority Invite</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                <Command className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                OmniPulse
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm mb-4">
              The unified marketing operating system orchestrating email automation, performance analytics, influencer outreach, and social campaigns.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>SOC2 Type II & GDPR Compliant Infrastructure</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pillars" className="hover:text-slate-900 transition-colors">Email Automation</a></li>
              <li><a href="#pillars" className="hover:text-slate-900 transition-colors">Performance Analytics</a></li>
              <li><a href="#pillars" className="hover:text-slate-900 transition-colors">Influencer Outreach</a></li>
              <li><a href="#pillars" className="hover:text-slate-900 transition-colors">Social Orchestrator</a></li>
              <li><a href="#interactive-demo" className="hover:text-slate-900 transition-colors">Interactive Demo</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#roi-calc" className="hover:text-slate-900 transition-colors">ROI Calculator</a></li>
              <li><a href="#comparison" className="hover:text-slate-900 transition-colors">Why OmniPulse</a></li>
              <li><a href="#faq" className="hover:text-slate-900 transition-colors">Product FAQ</a></li>
              <li><span className="text-slate-400 cursor-not-allowed">API Docs (Beta)</span></li>
              <li><span className="text-slate-400 cursor-not-allowed">Agency Guide</span></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] mb-3">Community</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-600 hover:text-slate-900 cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>@OmniPulse (X / Twitter)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600 hover:text-slate-900 cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                <span>LinkedIn Community</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600 hover:text-slate-900 cursor-pointer">
                <Code2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Developer SDK</span>
              </li>
              <li className="pt-1">
                <span className="text-[11px] text-slate-700 font-mono">beta@omnipulse.ai</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 OmniPulse Technologies, Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-900 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-900 cursor-pointer">Security Center</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer ml-2"
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

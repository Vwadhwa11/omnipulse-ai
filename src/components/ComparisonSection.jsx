import React from 'react';
import { XCircle, CheckCircle, ArrowRight, Zap, ShieldAlert, Sparkles } from 'lucide-react';

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: 'Architecture & User Interface',
      traditional: '6 separate tools, 6 logins, siloed data and disconnected workflows',
      omnipulse: '1 unified cognitive engine orchestrating all marketing operations',
    },
    {
      feature: 'Email Marketing Execution',
      traditional: 'Manual email copywriting, static segmented lists, and A/B guesswork',
      omnipulse: 'Autonomous 1:1 dynamic personalization with predictive deliverability defense',
    },
    {
      feature: 'Digital Marketing Analytics',
      traditional: 'Conflicting attribution windows, cookie drops, delayed spreadsheet exports',
      omnipulse: 'Cookieless first-party attribution with predictive ROAS & automated budget alerts',
    },
    {
      feature: 'Influencer Discovery & Outreach',
      traditional: 'Hours manual scrolling on Instagram, high risk of fake bots, generic email pitches',
      omnipulse: '20M+ verified creator database with automated tailored outreach referencing creator videos',
    },
    {
      feature: 'Social Media Campaign Management',
      traditional: 'Tab fatigue copying and reformatting posts manually across LinkedIn, X & Instagram',
      omnipulse: 'Single input automatically adapted into platform-native formats and scheduled at peak engagement',
    },
    {
      feature: 'Total Monthly Software Cost',
      traditional: '$1,500 – $3,200/mo across Mailchimp, Hootsuite, Grin, and Looker/Supermetrics',
      omnipulse: 'Starts at $149/mo with zero per-seat penalty and all 4 engines included',
    },
  ];

  return (
    <section id="comparison" className="py-24 relative bg-[#07090E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>The Paradigm Shift</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Unified AI Wins Every Time
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Compare the old fragmented growth stack with the autonomous OmniPulse OS.
          </p>
        </div>

        {/* Table Comparison Card */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-800 bg-slate-900/80 text-xs font-bold uppercase tracking-wider">
            <div className="md:col-span-4 p-4 text-slate-400 hidden md:block">Marketing Dimension</div>
            <div className="md:col-span-4 p-4 text-rose-400 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-slate-800">
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>Fragmented Legacy Stack</span>
            </div>
            <div className="md:col-span-4 p-4 text-emerald-400 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-slate-800 bg-indigo-950/30">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>OmniPulse AI Unified OS</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm transition-colors hover:bg-slate-900/40">
                <div className="md:col-span-4 p-4 font-bold text-white flex items-center">
                  {row.feature}
                </div>
                <div className="md:col-span-4 p-4 text-slate-400 md:border-l border-slate-800 flex items-start gap-2.5 bg-rose-950/5">
                  <XCircle className="w-4 h-4 text-rose-500/80 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>
                <div className="md:col-span-4 p-4 text-slate-200 font-medium md:border-l border-slate-800 flex items-start gap-2.5 bg-indigo-950/20">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.omnipulse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

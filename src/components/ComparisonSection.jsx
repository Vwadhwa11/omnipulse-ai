import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: 'Workflow & Architecture',
      traditional: '6 separate tools, 6 logins, siloed data and disconnected workflows',
      omnipulse: '1 unified platform coordinating all marketing channels and datasets',
    },
    {
      feature: 'Email Marketing Execution',
      traditional: 'Manual email copywriting, static segmented lists, and A/B guesswork',
      omnipulse: 'Autonomous 1:1 personalization with predictive deliverability defense',
    },
    {
      feature: 'Performance Analytics',
      traditional: 'Conflicting attribution windows, cookie drops, delayed spreadsheet exports',
      omnipulse: 'Cookieless first-party attribution with predictive ROAS & automated budget alerts',
    },
    {
      feature: 'Influencer Outreach',
      traditional: 'Manual Instagram searches, high risk of fake followers, generic cold pitch emails',
      omnipulse: '20M+ verified creator database with auto-tailored contextual pitch emails',
    },
    {
      feature: 'Social Media Management',
      traditional: 'Tab fatigue copying and reformatting posts manually across LinkedIn, X & Instagram',
      omnipulse: 'Single input automatically adapted into platform-native formats & queued at peak hours',
    },
    {
      feature: 'Total Monthly Software Cost',
      traditional: '$1,500 – $3,200/mo across Mailchimp, Hootsuite, Grin, and Supermetrics',
      omnipulse: 'Starts at $149/mo with zero per-seat penalty and all 4 modules included',
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium mb-3 shadow-xs">
            <span>The Paradigm Shift</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Unified vs. Fragmented Stack
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Compare the legacy point-solution stack with the unified OmniPulse system.
          </p>
        </div>

        {/* Table Comparison Card */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-premium overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider">
            <div className="md:col-span-4 p-4 text-slate-500 hidden md:block">Marketing Dimension</div>
            <div className="md:col-span-4 p-4 text-slate-600 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-slate-200">
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>Fragmented Legacy Stack</span>
            </div>
            <div className="md:col-span-4 p-4 text-slate-900 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-slate-200 bg-slate-100/60 font-bold">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>OmniPulse Platform</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm transition-colors hover:bg-slate-50/50">
                <div className="md:col-span-4 p-4 font-semibold text-slate-900 flex items-center">
                  {row.feature}
                </div>
                <div className="md:col-span-4 p-4 text-slate-600 md:border-l border-slate-200 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>
                <div className="md:col-span-4 p-4 text-slate-900 font-medium md:border-l border-slate-200 flex items-start gap-2.5 bg-slate-50/40">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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

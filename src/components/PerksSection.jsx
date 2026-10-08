import React from 'react';
import { Award, Check, Sparkles, Shield, Gift, ArrowRight } from 'lucide-react';

export default function PerksSection({ onOpenWaitlist }) {
  const tiers = [
    {
      name: 'Pioneer Cohort (Active Now)',
      badge: 'First 5,000 Spots — 96% Claimed',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      price: 'Free 3 Months',
      sub: 'Then 50% Lifetime Discount',
      isPopular: true,
      perks: [
        'Full access to all 4 AI engines (Email, Analytics, Influencers, Social)',
        '3 months complimentary Pro Plan ($447 value)',
        'Grandfathered 50% lifetime subscription discount forever',
        '1-on-1 dedicated AI marketing setup & strategy onboarding call',
        'Private Slack / Discord access with top growth operators',
        'Voting rights on upcoming roadmap features & integrations',
      ],
      ctaText: 'Claim Pioneer Spot (Free)',
    },
    {
      name: 'Innovator Cohort',
      badge: 'Next 5,000 Spots',
      badgeColor: 'bg-slate-800 text-slate-400 border-slate-700',
      price: 'Free 1 Month',
      sub: 'Then 25% Lifetime Discount',
      isPopular: false,
      perks: [
        'Full access to all 4 AI engines',
        '1 month complimentary Pro Plan ($149 value)',
        '25% lifetime subscription discount',
        'Priority technical support ticket queue',
        'Access to community growth webinars',
      ],
      ctaText: 'Join Waitlist',
    },
    {
      name: 'General Public Launch',
      badge: 'Public Launch (Q3 2026)',
      badgeColor: 'bg-slate-800 text-slate-500 border-slate-700',
      price: '$149 / mo',
      sub: 'Standard Pricing (No discount)',
      isPopular: false,
      perks: [
        'Standard access upon general public rollout',
        'Standard 14-day free trial',
        'Self-serve onboarding documentation',
        'Standard email support',
      ],
      ctaText: 'Notify Me at Launch',
    },
  ];

  return (
    <section className="py-24 relative bg-[#090B12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>VIP Early Access Rewards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Exclusive Benefits for Early Adopters
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We are rewarding the first marketing leaders and founders who join our journey. No credit card required.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-indigo-950/80 to-slate-950 border-2 border-indigo-500 shadow-2xl shadow-indigo-950/50 scale-105 z-10'
                  : 'bg-slate-950 border border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg">
                  🔥 Most Exclusive Tier
                </div>
              )}

              <div>
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${tier.badgeColor}`}>
                  {tier.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                
                <div className="mb-6">
                  <div className="text-3xl font-black text-white font-mono">{tier.price}</div>
                  <div className="text-xs text-indigo-300 font-medium mt-1">{tier.sub}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.perks.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.isPopular ? 'text-indigo-400' : 'text-slate-500'}`} />
                      <span className="leading-snug">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenWaitlist}
                className={`w-full py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  tier.isPopular
                    ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

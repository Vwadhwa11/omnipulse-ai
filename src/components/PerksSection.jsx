import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PerksSection({ onOpenWaitlist }) {
  const tiers = [
    {
      name: 'Pioneer Cohort',
      badge: 'First 5,000 Spots — 96% Claimed',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      price: 'Free 3 Months',
      sub: 'Then 50% Lifetime Discount',
      isPopular: true,
      perks: [
        'Full access to all 4 engines (Email, Analytics, Influencers, Social)',
        '3 months complimentary Pro Plan ($447 value)',
        'Grandfathered 50% lifetime subscription discount forever',
        '1-on-1 dedicated marketing setup & strategy onboarding call',
        'Private Slack community with top growth operators',
        'Voting rights on upcoming roadmap features & integrations',
      ],
      ctaText: 'Claim Pioneer Spot (Free)',
    },
    {
      name: 'Innovator Cohort',
      badge: 'Next 5,000 Spots',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      price: 'Free 1 Month',
      sub: 'Then 25% Lifetime Discount',
      isPopular: false,
      perks: [
        'Full access to all 4 engines',
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
      badgeColor: 'bg-slate-100 text-slate-500 border-slate-200',
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
    <section className="py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-medium mb-3 shadow-xs">
            <span>Early Access Incentives</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Exclusive benefits for early adopters
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We are rewarding the first marketing leaders and founders who join our rollout. No credit card required.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative bg-white transition-all ${
                tier.isPopular
                  ? 'border-2 border-slate-900 shadow-premium z-10'
                  : 'border border-slate-200 shadow-card'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-900 text-white font-medium text-[11px] shadow-xs">
                  Most Exclusive Tier
                </div>
              )}

              <div>
                <div className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium border mb-4 ${tier.badgeColor}`}>
                  {tier.badge}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{tier.name}</h3>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-slate-900 font-mono">{tier.price}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{tier.sub}</div>
                </div>

                <div className="space-y-2.5 mb-8">
                  {tier.perks.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-slate-900" />
                      <span className="leading-snug">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenWaitlist}
                className={`w-full py-2.5 rounded-lg font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  tier.isPopular
                    ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

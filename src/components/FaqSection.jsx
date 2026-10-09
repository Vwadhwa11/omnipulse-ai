import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'When will OmniPulse be accessible to waitlist members?',
      a: 'We are rolling out private beta access in phased weekly cohorts starting in Q2 2026. The Pioneer Cohort (first 5,000 signups) receives priority entry, 3 months complimentary access, and dedicated onboarding with our engineering team.'
    },
    {
      q: 'How does the platform automate lifecycle emails without generic copy?',
      a: 'OmniPulse does not rely on static generic prompts. We ingest your previous top-performing campaigns, brand voice guidelines, product catalog, and real-time customer behavior. Every message is synthesized for the individual subscriber’s intent, purchase history, and reading habits.'
    },
    {
      q: 'Which platforms are supported for analytics & social media?',
      a: 'Out of the box, we natively integrate with Meta Ads (Facebook & Instagram), Google Ads, TikTok Ads, YouTube, LinkedIn, X (Twitter), Shopify, Stripe, Klaviyo, and HubSpot. You can authenticate with 1-click OAuth and start seeing cross-channel attribution immediately.'
    },
    {
      q: 'How does the influencer engine detect fake followers and fraud?',
      a: 'Our vetting engine inspects audience authenticity percentages, comment linguistic variety (flagging generic bot patterns), follower growth velocity, and audience geography concentration across 20M+ creators.'
    },
    {
      q: 'Can marketing agencies manage multiple client brands?',
      a: 'Yes. OmniPulse features dedicated multi-workspace tenancy. Agencies can switch between client accounts with one click, isolate data and brand voices, and generate white-labeled performance reports.'
    },
    {
      q: 'Is our proprietary customer and company data kept private?',
      a: 'Absolutely. We enforce strict data isolation and zero-training retention policies. Your audience data, customer lists, and performance metrics are never used to train public models. Infrastructure complies with SOC2 Type II, GDPR, and CCPA standards.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium mb-3 shadow-xs">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about access, integrations, and data privacy.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-slate-50/70 border border-slate-200 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4.5 pb-4.5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'When will OmniPulse AI be accessible to waitlist members?',
      a: 'We are rolling out private beta invitations in phased weekly cohorts starting in Q2 2026. The Pioneer Cohort (first 5,000 signups) receives priority entry, 3 months complimentary access, and dedicated onboarding with our AI engineering team.'
    },
    {
      q: 'How does the AI automate email marketing without sounding like a generic bot?',
      a: 'OmniPulse doesn’t use generic one-size-fits-all prompts. We ingest your previous top-performing email campaigns, brand voice guidelines, product catalog, and real-time customer behavior. Every email is uniquely synthesized for the individual subscriber’s intent, purchase history, and reading habits.'
    },
    {
      q: 'Which platforms are supported for digital performance analytics & social media?',
      a: 'Out of the box, we natively integrate with Meta Ads (Facebook & Instagram), Google Ads, TikTok Ads, YouTube, LinkedIn, X (Twitter), Shopify, Stripe, Klaviyo, and HubSpot. You can authenticate with 1-click OAuth and start seeing cross-channel attribution immediately.'
    },
    {
      q: 'How does the influencer engine detect fake followers and fraud?',
      a: 'Our intelligence algorithm inspects audience authentic percentage, comment linguistic variety (flagging generic bot emojis), audience geography concentration, and historical follower spike velocity across 20M+ creators on Instagram, TikTok, and YouTube.'
    },
    {
      q: 'Can marketing agencies manage multiple client brands?',
      a: 'Yes! OmniPulse features dedicated multi-workspace tenancy. Agencies can switch between client accounts with 1 click, isolate data and brand voices, and generate white-labeled executive performance reports.'
    },
    {
      q: 'Is our proprietary business and customer data kept private?',
      a: 'Absolutely. We enforce strict data isolation and zero-training retention policies. Your audience data, customer email lists, and analytics metrics are never used to train public foundational AI models. All infrastructure complies with SOC2 Type II, GDPR, and CCPA standards.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#07090E] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about the platform, private beta access, and security.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-slate-900/60 border border-slate-800 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900 transition-colors"
                >
                  <span className="text-base font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-fade-in font-normal">
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

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What is OmniPulse building?',
      a: 'We are developing a unified AI-powered marketing platform that consolidates email automation, digital performance analytics, influencer discovery and outreach, and social media campaign management into one dashboard.'
    },
    {
      q: 'When will early access be available?',
      a: 'We are rolling out access to waitlist members in weekly batches. Joining the waitlist gives you priority access as soon as the private beta opens.'
    },
    {
      q: 'Which channels and ad networks will be supported?',
      a: 'The platform integrates with major ad networks (Meta Ads, Google Ads, TikTok Ads), creator platforms (Instagram, TikTok, YouTube), and lifecycle marketing channels.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg bg-slate-50 border border-slate-200 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
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

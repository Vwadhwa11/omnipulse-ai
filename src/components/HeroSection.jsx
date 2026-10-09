import React from 'react';
import CountdownTimer from './CountdownTimer';
import WaitlistForm from './WaitlistForm';
import { Mail, BarChart3, Users, Share2, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const capabilityTags = [
    { icon: Mail, label: 'Automated Email Marketing' },
    { icon: BarChart3, label: 'Cross-Channel Analytics' },
    { icon: Users, label: 'Influencer Discovery & Outreach' },
    { icon: Share2, label: 'Social Media Campaign Management' },
  ];

  const integrationLogos = [
    'Meta Ads', 'Google Ads', 'Shopify', 'TikTok Ads', 'Klaviyo', 'LinkedIn', 'YouTube', 'Stripe'
  ];

  return (
    <div className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Clean architectural subtle dot grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-slate-900"></span>
          <span>Introducing OmniPulse Marketing OS</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">Private Beta Cohorts Open</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 ml-0.5" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] max-w-5xl mx-auto mb-6">
          The all-in-one marketing platform for high-velocity teams.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Stop managing 6 disconnected tools and fragmented spreadsheets. Automate lifecycle email marketing, analyze digital performance in real time, discover verified influencers, and coordinate social media campaigns—all from a single unified workspace.
        </p>

        {/* 4 Core Pillars Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {capabilityTags.map((tag, i) => {
            const Icon = tag.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 shadow-xs"
              >
                <Icon className="w-3.5 h-3.5 text-slate-500" />
                <span>{tag.label}</span>
              </div>
            );
          })}
        </div>

        {/* Waitlist Form */}
        <div className="mb-14" id="waitlist-form">
          <WaitlistForm />
        </div>

        {/* Live Countdown */}
        <div className="mt-8 mb-16 pt-8 border-t border-slate-200/80 max-w-xl mx-auto">
          <CountdownTimer />
        </div>

        {/* Integrations Strip */}
        <div className="pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">
            Native integrations across your modern growth stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {integrationLogos.map((tool, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

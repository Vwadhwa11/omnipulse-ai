import React from 'react';
import WaitlistForm from './WaitlistForm';
import { Mail, BarChart3, Users, Share2 } from 'lucide-react';

export default function HeroSection() {
  const capabilities = [
    {
      icon: Mail,
      title: 'Automated Email Marketing',
      description: 'Lifecycle email funnels, personalized copywriting, and intelligent send-time optimization.'
    },
    {
      icon: BarChart3,
      title: 'Digital Performance Analytics',
      description: 'Unified cross-channel attribution, real-time ROAS tracking, and actionable growth insights.'
    },
    {
      icon: Users,
      title: 'Influencer Discovery & Outreach',
      description: 'Creator search across TikTok, Instagram & YouTube with automated personalized outreach.'
    },
    {
      icon: Share2,
      title: 'Social Media Campaign Management',
      description: 'Multi-platform scheduling, automated content repurposing, and unified brand coordination.'
    }
  ];

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 mb-6 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Coming Soon · Private Beta</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5">
          An AI-powered marketing platform for modern growth.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          We are building a unified platform to help businesses automate email marketing, analyze digital marketing performance, discover and conduct outreach to influencers, and manage social media campaigns from a single platform.
        </p>

        {/* Waitlist Form */}
        <div className="mb-16" id="waitlist-form">
          <WaitlistForm />
        </div>

        {/* 4 Core Pillars Grid */}
        <div id="features" className="pt-10 border-t border-slate-100 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 transition-all hover:border-slate-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-3 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

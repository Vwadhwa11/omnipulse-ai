import React from 'react';
import CountdownTimer from './CountdownTimer';
import WaitlistForm from './WaitlistForm';
import { Mail, BarChart3, Users, Share2, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const capabilityTags = [
    { icon: Mail, label: 'Autonomous Email Marketing', color: 'from-blue-500 to-indigo-500' },
    { icon: BarChart3, label: 'Cross-Channel Performance Analytics', color: 'from-emerald-500 to-teal-500' },
    { icon: Users, label: 'AI Influencer Discovery & Outreach', color: 'from-purple-500 to-pink-500' },
    { icon: Share2, label: 'Unified Social Campaign Suite', color: 'from-amber-500 to-orange-500' },
  ];

  const integrationLogos = [
    'Meta Ads', 'Google Ads', 'Shopify', 'TikTok Ads', 'Klaviyo', 'LinkedIn', 'YouTube', 'Stripe'
  ];

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic ambient gradient background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-500/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-glow"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 shadow-lg shadow-indigo-950/40 text-xs sm:text-sm text-indigo-300 font-medium mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400"></span>
          <span>Unveiling The Autonomous Growth Engine</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Private Beta Invitations Open</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-400 ml-0.5" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
          The All-In-One{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-pink-400">
            AI Operating System
          </span>{' '}
          for Modern Marketing
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Stop juggling 6 disconnected tools and fragmented dashboards. Automate high-converting email campaigns, decode cross-channel performance, discover and outreach verified influencers, and scale social media—all orchestrated by autonomous AI from a single platform.
        </p>

        {/* 4 Core Pillars Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-12">
          {capabilityTags.map((tag, i) => {
            const Icon = tag.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 hover:border-slate-700 transition-colors"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tag.color}`}></div>
                <Icon className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">{tag.label}</span>
              </div>
            );
          })}
        </div>

        {/* Waitlist Form with conversion focus */}
        <div className="mb-14" id="waitlist-form">
          <WaitlistForm />
        </div>

        {/* Live Countdown to Launch */}
        <div className="mt-8 mb-16 pt-8 border-t border-slate-800/60 max-w-2xl mx-auto">
          <CountdownTimer />
        </div>

        {/* Ecosystem Integrations Ribbon */}
        <div className="pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Pre-built native synchronization with your entire marketing stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-75">
            {integrationLogos.map((tool, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-default"
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

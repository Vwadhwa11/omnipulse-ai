import React from 'react';
import { 
  Mail, BarChart3, Users, Share2, 
  Sparkles, CheckCircle2, TrendingUp, Zap, 
  Send, Compass, Calendar, Layers, Bot, Target 
} from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      id: 'email',
      icon: Mail,
      badge: '01. Autonomous Email Engine',
      badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      gradient: 'from-indigo-600 to-blue-600',
      title: 'Automate Email Marketing at Infinite Scale',
      description: 'Generate hyper-personalized 1:1 emails, automated lifecycle drip funnels, and predictive send-times that drive 3.4x higher conversions without writing manual templates.',
      features: [
        'AI Copywriting & Variant Testing: Self-optimizing subject lines and email copy adapted to each buyer segment.',
        'Dynamic Behavioral Triggers: Automated abandon-cart, churn-recovery, and upsell sequences based on real-time user intent.',
        'Inbox Reputation Guardian: AI deliverability screening that prevents spam folder traps and warms up domain IP reputation.',
      ],
      previewSnippet: {
        title: 'AI Drip Campaign Generator',
        tag: 'Auto-pilot Active',
        stats: [
          { label: 'Avg Open Rate', value: '54.8%', change: '+18.2%' },
          { label: 'Click-to-Convert', value: '14.2%', change: '+4.9%' },
        ],
        recentAction: 'Generated 1,420 personalized dynamic offers tailored to high-LTV cart abandoners.',
      }
    },
    {
      id: 'analytics',
      icon: BarChart3,
      badge: '02. Digital Performance Intelligence',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      gradient: 'from-emerald-500 to-teal-600',
      title: 'Deep Multi-Channel Performance Analytics',
      description: 'End attribution guesswork. Unify your ad spend across Google, Meta, TikTok, and organic channels into a single real-time intelligence hub with automated ROAS forecasting.',
      features: [
        'Unified First-Party Attribution: Cookieless multi-touch attribution that accurately tracks the complete customer buying journey.',
        'Predictive ROAS & CAC Modeling: Machine learning alerts that predict campaign fatigue before you waste ad spend.',
        'Autonomous Budget Rebalancer: AI recommendations that suggest shifting spend to top-performing ad sets and creatives.',
      ],
      previewSnippet: {
        title: 'Unified Attribution Radar',
        tag: 'Live Syncing',
        stats: [
          { label: 'Blended ROAS', value: '4.82x', change: '+32.4%' },
          { label: 'Customer CAC', value: '$28.40', change: '-24.0%' },
        ],
        recentAction: 'Detected 42% efficiency surge on TikTok UGC set; budget reallocated automatically.',
      }
    },
    {
      id: 'influencers',
      icon: Users,
      badge: '03. Influencer Engine',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      gradient: 'from-purple-500 to-pink-600',
      title: 'Discover & Conduct Outreach to Creators',
      description: 'Scan 20M+ verified creators across TikTok, Instagram, and YouTube. Filter for genuine audience demographics, detect fake followers, and launch automated personalized outreach.',
      features: [
        'Semantic Creator Matching: Match influencers based on brand ethos, audience overlap, and verified engagement rates.',
        'AI-Powered Hyper-Outreach: Generate custom pitch emails referencing creator specific recent videos and style.',
        'Automated Contract & Deliverable Tracking: Monitor story mentions, reel postings, coupon redemption, and payout milestones.',
      ],
      previewSnippet: {
        title: 'Creator Match & Pitcher',
        tag: '12 Active Creators',
        stats: [
          { label: 'Pitch Response', value: '62.4%', change: '3x Industry Avg' },
          { label: 'Creator ROI', value: '6.2x', change: '+41.0%' },
        ],
        recentAction: 'Generated 18 custom pitches to micro-creators in the SaaS & Productivity niche.',
      }
    },
    {
      id: 'social',
      icon: Share2,
      badge: '04. Social Media Orchestrator',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      gradient: 'from-amber-500 to-orange-600',
      title: 'Orchestrate Social Media Campaigns in One Place',
      description: 'Transform one core idea into 20 platform-tailored posts across LinkedIn, X/Twitter, Instagram, and TikTok. Schedule, auto-reply, and track viral trend opportunities on autopilot.',
      features: [
        'Multi-Platform Content Repurposer: AI transforms YouTube transcripts or blogs into carousels, threads, and short-form video scripts.',
        'Optimal Timing & Queue Engine: Autonomous scheduler that distributes posts when your audience is most engaged.',
        'Brand Sentiment & Community Autopilot: Live comment monitoring and AI suggested community responses in your brand tone.',
      ],
      previewSnippet: {
        title: 'Multi-Network Scheduler',
        tag: 'Scheduled across 4 Platforms',
        stats: [
          { label: 'Weekly Reach', value: '482.5K', change: '+88.3%' },
          { label: 'Engagement Rate', value: '5.8%', change: '+2.1%' },
        ],
        recentAction: 'Auto-adapted 1 product release into 12 format-compliant posts across X, LinkedIn & IG.',
      }
    },
  ];

  return (
    <section id="pillars" className="py-24 relative border-t border-slate-800/80 bg-[#090B12]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Four Core Superpowers. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              One Unified Command Center.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eliminate communication silos between your email tool, analytics stack, influencer sheets, and social schedulers. OmniPulse synthesizes all four into one unified marketing intelligence.
          </p>
        </div>

        {/* The 4 Pillars Detailed Grid */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${pillar.badgeColor}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{pillar.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                        </div>
                        <span className="text-sm text-slate-300 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Glassmorphic Preview Card */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-6 shadow-xl shadow-black/40 relative overflow-hidden group hover:border-slate-700 transition-all">
                    {/* Top simulated bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${pillar.gradient}`}></div>
                        <span className="text-sm font-semibold text-white">{pillar.previewSnippet.title}</span>
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                        {pillar.previewSnippet.tag}
                      </span>
                    </div>

                    {/* Stats columns */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {pillar.previewSnippet.stats.map((st, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                          <div className="text-xs text-slate-400 font-medium">{st.label}</div>
                          <div className="text-xl font-bold text-white mt-0.5 font-mono">{st.value}</div>
                          <div className="text-[11px] font-semibold text-emerald-400 mt-0.5">{st.change}</div>
                        </div>
                      ))}
                    </div>

                    {/* AI Agent Action Feed */}
                    <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block mb-0.5">Autonomous Agent Execution:</span>
                        <span className="text-slate-300 text-[11px] leading-relaxed">{pillar.previewSnippet.recentAction}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

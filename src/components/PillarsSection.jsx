import React from 'react';
import { 
  Mail, BarChart3, Users, Share2, 
  CheckCircle2, ArrowRight
} from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      id: 'email',
      icon: Mail,
      badge: '01. Automated Email Marketing',
      title: 'Automate high-converting email sequences',
      description: 'Design and deploy hyper-personalized lifecycle emails, behavioral drip funnels, and predictive send-times that drive conversions without manual templates.',
      features: [
        'Dynamic Personalization: Auto-generate tailored subject lines and copy calibrated for each subscriber segment.',
        'Behavioral Event Triggers: Automated abandon-cart, churn-recovery, and upsell sequences tied to real-time user activity.',
        'Deliverability Health: Domain warming, sender reputation monitoring, and automated spam-filter safeguards.',
      ],
      previewSnippet: {
        title: 'Lifecycle Drip Engine',
        tag: 'Active Workflow',
        stats: [
          { label: 'Avg Open Rate', value: '54.8%', change: '+18.2% vs benchmark' },
          { label: 'Click-to-Convert', value: '14.2%', change: '+4.9% uplift' },
        ],
        recentAction: 'Auto-dispatched 1,420 personalized dynamic offers to high-intent cart abandoners.',
      }
    },
    {
      id: 'analytics',
      icon: BarChart3,
      badge: '02. Performance Analytics',
      title: 'Deep multi-channel performance analytics',
      description: 'End attribution guesswork. Unify your ad spend across Google, Meta, TikTok, and organic channels into a single source of truth with automated ROAS modeling.',
      features: [
        'Cookieless Attribution: First-party multi-touch tracking that maps the complete customer conversion journey.',
        'Predictive ROAS & CAC: Machine learning alerts that flag campaign fatigue before ad spend is wasted.',
        'Cross-Channel Rebalancing: Automated recommendations to shift budget toward top-performing ad sets.',
      ],
      previewSnippet: {
        title: 'Unified Attribution Radar',
        tag: 'Live Syncing',
        stats: [
          { label: 'Blended ROAS', value: '4.82x', change: '+32.4% this month' },
          { label: 'Customer CAC', value: '$28.40', change: '-24.0% reduction' },
        ],
        recentAction: 'Detected 42% efficiency surge on TikTok UGC set; recommended $1,500 budget reallocation.',
      }
    },
    {
      id: 'influencers',
      icon: Users,
      badge: '03. Influencer Engine',
      badgeColor: 'text-slate-700 bg-white border-slate-200',
      title: 'Discover and conduct outreach to influencers',
      description: 'Scan millions of verified creators across TikTok, Instagram, and YouTube. Filter for genuine audience demographics, detect fake followers, and launch automated personalized outreach.',
      features: [
        'Creator Search & Vetting: Match creators by audience demographics, niche relevance, and verified engagement rates.',
        'Contextual Outreach: Auto-generate tailored pitch emails that reference recent creator content and style.',
        'Campaign & Payout Tracking: Monitor post deliverables, story mentions, affiliate coupon redemptions, and ROI.',
      ],
      previewSnippet: {
        title: 'Creator CRM & Outreach',
        tag: '12 Active Creators',
        stats: [
          { label: 'Pitch Response', value: '62.4%', change: '3x industry avg' },
          { label: 'Creator ROAS', value: '6.2x', change: '+41.0% revenue lift' },
        ],
        recentAction: 'Generated 18 custom pitches to vetted micro-creators in the B2B & productivity space.',
      }
    },
    {
      id: 'social',
      icon: Share2,
      badge: '04. Social Media Orchestrator',
      title: 'Manage social media campaigns from one interface',
      description: 'Transform core product updates and articles into platform-tailored posts across LinkedIn, X/Twitter, Instagram, and TikTok. Schedule, auto-reply, and track engagement seamlessly.',
      features: [
        'Content Repurposing: Convert 1 article or release note into format-native threads, carousels, and captions.',
        'Predictive Timing Queue: Smart scheduler that publishes when your specific audience is most active.',
        'Unified Social Inbox: Centralize comments and direct messages across all brand accounts into one queue.',
      ],
      previewSnippet: {
        title: 'Multi-Network Scheduler',
        tag: '4 Connected Networks',
        stats: [
          { label: 'Weekly Reach', value: '482.5K', change: '+88.3% reach' },
          { label: 'Avg Engagement', value: '5.8%', change: '+2.1% engagement' },
        ],
        recentAction: 'Auto-adapted 1 release into 12 format-compliant posts across X, LinkedIn, and Instagram.',
      }
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 mb-3 shadow-xs">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Four powerful engines. One unified command center.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminate silos between your email tool, analytics dashboards, creator spreadsheets, and social schedulers. OmniPulse unifies all four into one coherent workflow.
          </p>
        </div>

        {/* Pillars Detailed Grid */}
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border bg-white border-slate-200 text-slate-700 mb-4 shadow-xs">
                    <Icon className="w-3.5 h-3.5 text-slate-600" />
                    <span>{pillar.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-700 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Clean Light Card */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-card hover:shadow-premium transition-shadow">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                        <span className="text-sm font-semibold text-slate-900">{pillar.previewSnippet.title}</span>
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {pillar.previewSnippet.tag}
                      </span>
                    </div>

                    {/* Stats columns */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {pillar.previewSnippet.stats.map((st, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="text-xs text-slate-500 font-medium">{st.label}</div>
                          <div className="text-xl font-bold text-slate-900 mt-0.5 font-mono">{st.value}</div>
                          <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">{st.change}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Feed */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-slate-900 mt-1.5 shrink-0"></div>
                      <div>
                        <span className="font-semibold text-slate-900 block mb-0.5">Automated Platform Activity:</span>
                        <span className="text-slate-600 text-[11px] leading-relaxed">{pillar.previewSnippet.recentAction}</span>
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

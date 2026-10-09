import React, { useState } from 'react';
import { 
  Mail, BarChart3, Users, Share2, 
  RefreshCw, Check, ShieldCheck, Zap, Send
} from 'lucide-react';

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('email');

  // State for Email Demo
  const [emailScenario, setEmailScenario] = useState('cart');
  const [isGeneratingEmail, setIsGeneratingEmail] = useState(false);

  // State for Influencer Demo
  const [selectedCreator, setSelectedCreator] = useState(0);
  const [pitchSent, setPitchSent] = useState(false);

  // State for Social Demo
  const [selectedSocialPlatform, setSelectedSocialPlatform] = useState('linkedin');

  const emailDemos = {
    cart: {
      goal: 'High-Intent Cart Recovery Flow',
      subject: 'Quick question about the items left in your cart, Alex?',
      preheader: 'We saved your reserved items + unlocked priority free shipping',
      openRate: '68.4%',
      clickRate: '21.2%',
      body: `Hey Alex,

We noticed you left our Growth Analytics Suite in your cart earlier today. Did you run into any questions during checkout?

Because our initial onboarding cohort fills up fast, we've locked in your checkout price with complimentary priority onboarding for the next 24 hours.

Click below to complete your setup in under 60 seconds:
[Complete Reservation with Free Onboarding]

Let me know if you need any customized assistance,
The OmniPulse Team`,
      targetAudience: 'Users with cart value > $150 who bounced on payment step',
    },
    winback: {
      goal: 'Dormant Subscriber Re-Activation (45 Days)',
      subject: 'A lot has changed since your last visit (exclusive 25% unlock inside)',
      preheader: 'See what 4,000+ top marketing teams are doing differently',
      openRate: '59.1%',
      clickRate: '18.7%',
      body: `Hey Sarah,

Marketing moves at lightning speed—and in the last 45 days, our engine rolled out 3 major updates to cross-channel attribution and influencer tracking.

We'd love to welcome you back. We just credited your account with an exclusive 25% renewal credit valid until Friday:

[Re-activate & Claim 25% Off]

Check out how brands like Linear and Framer are scaling with us!`,
      targetAudience: 'Inactive users between 30-60 days with high previous activity',
    },
    launch: {
      goal: 'VIP Product Launch Announcement',
      subject: 'OmniPulse 2.0 is officially live: meet your new marketing command center',
      preheader: 'Early access keys are now generated for waitlist members',
      openRate: '72.8%',
      clickRate: '29.4%',
      body: `Hey David,

The wait is officially over. Today, we're unveiling OmniPulse 2.0—the first unified platform combining email automation, digital performance analytics, influencer outreach, and social management.

As an early adopter, your access pass is live right now:
[Access OmniPulse 2.0 Dashboard]

See you inside the future of autonomous growth!`,
      targetAudience: 'VIP Waitlist & Early Access members',
    }
  };

  const creators = [
    {
      name: 'Elena Rostova',
      handle: '@elenagrowth',
      niche: 'B2B SaaS & Tech Growth',
      followers: '142K',
      engagement: '5.8%',
      audienceMatch: '98%',
      platform: 'LinkedIn & YouTube',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      pitch: `Hey Elena, loved your recent breakdown on Cookieless Attribution metrics! We're launching OmniPulse, which directly addresses the exact attribution blindspots you mentioned. Would love to sponsor your next tech breakdown video and give you lifetime access. Open to a 5-min intro?`
    },
    {
      name: 'Marcus Chen',
      handle: '@marcus_marketing',
      niche: 'E-commerce & DTC Scaling',
      followers: '280K',
      engagement: '4.6%',
      audienceMatch: '95%',
      platform: 'TikTok & IG Reels',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      pitch: `Hi Marcus, big fan of your TikTok series on scaling DTC ad spend! We built OmniPulse to eliminate the need for 6 separate marketing tools. Given your audience of e-com founders, we'd love to partner on a 3-part sponsored reel series with dedicated affiliate terms.`
    },
    {
      name: 'Sophia Vance',
      handle: '@sophia_creatormind',
      niche: 'Content Strategy & Creator Economy',
      followers: '96K',
      engagement: '6.4%',
      audienceMatch: '92%',
      platform: 'X / Twitter & Newsletter',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
      pitch: `Hey Sophia, your latest thread on multichannel content operations hit the nail on the head. We've built an autonomous multi-platform campaign manager that coordinates all channels in real time. Would love to sponsor your newsletter next Thursday!`
    }
  ];

  const socialVariations = {
    linkedin: {
      label: 'LinkedIn (Professional & In-Depth)',
      content: `Most marketing teams currently burn 15+ hours every week switching between Mailchimp, Google Analytics, spreadsheets of creators, and Hootsuite.

Here is the inconvenient truth: Fragmented data = Fragmented growth.

When your email funnel doesn't communicate with your influencer conversions or paid ad attribution, your CAC balloons and you miss critical growth loops.

This is why we architected OmniPulse:
1. Automated lifecycle emails that sync with live ad engagement
2. Cookieless first-party attribution
3. 20M+ verified creator discovery with 1-click outreach
4. Multi-platform social management from a single interface

The future of marketing is unified. Are you ready?

#MarketingOps #B2BMarketing #GrowthHacking #ModernMarketing`,
      stats: { impressions: '18.4K', likes: '482', shares: '64' }
    },
    twitter: {
      label: 'X / Twitter Thread (Punchy & Direct)',
      content: `The 2026 marketing stack is broken:

- Email tool: $250/mo
- Attribution dashboard: $600/mo
- Influencer database: $500/mo
- Social scheduler: $150/mo

Total: $1,500/mo + 6 disjointed logins.

We unified all 4 pillars under 1 platform with OmniPulse.

Here's how it works 👇 (1/5)`,
      stats: { impressions: '42.8K', retweets: '210', likes: '1.2K' }
    },
    instagram: {
      label: 'Instagram Reel & Carousel Caption',
      content: `What if your marketing ran on a unified autopilot while you focused on strategic creative? ✨

From personalized emails to cross-channel analytics and automated creator outreach—OmniPulse connects every dot so your brand stays top-of-mind 24/7.

🔗 Link in bio to join our exclusive early access cohort!

#digitalmarketing #growthmindset #ecommerce #growthmarketing`,
      stats: { reach: '24.2K', saves: '380', comments: '94' }
    }
  };

  const handleSimulateEmailGen = (type) => {
    setIsGeneratingEmail(true);
    setEmailScenario(type);
    setTimeout(() => {
      setIsGeneratingEmail(false);
    }, 250);
  };

  return (
    <section id="interactive-demo" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium mb-3 shadow-xs">
            <span>Product Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Test drive the unified platform
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Switch between the four modules below to experience real-time workflow simulations.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('email')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'email'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>01. Email Automation</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>02. Performance Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('influencers')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'influencers'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>03. Influencer Outreach</span>
          </button>

          <button
            onClick={() => setActiveTab('social')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'social'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>04. Social Suite</span>
          </button>
        </div>

        {/* Demo Window Container */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-premium overflow-hidden">
          
          {/* Mock Window Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="text-xs text-slate-500 font-mono ml-2">app.omnipulse.ai / {activeTab}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>WORKSPACE ACTIVE</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            
            {/* TAB 1: EMAIL AUTOMATION */}
            {activeTab === 'email' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-700" />
                      Lifecycle Campaign Generator
                    </h4>
                    <p className="text-xs text-slate-500">Select an intent scenario to review dynamic copy generation & predictive metrics.</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSimulateEmailGen('cart')}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-all ${
                        emailScenario === 'cart' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Cart Abandonment
                    </button>
                    <button
                      onClick={() => handleSimulateEmailGen('winback')}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-all ${
                        emailScenario === 'winback' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Dormant Win-Back
                    </button>
                    <button
                      onClick={() => handleSimulateEmailGen('launch')}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-all ${
                        emailScenario === 'launch' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Product Launch
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Intent Trigger</span>
                      <div className="text-sm font-bold text-slate-900">{emailDemos[emailScenario].goal}</div>
                      <div className="text-xs text-slate-500 mt-1">Segment: {emailDemos[emailScenario].targetAudience}</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Predictive Metrics</span>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-600">Predicted Open Rate:</span>
                        <span className="font-bold text-emerald-600 font-mono">{emailDemos[emailScenario].openRate}</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: emailDemos[emailScenario].openRate }}></div>
                      </div>

                      <div className="flex justify-between items-center text-xs pt-1">
                        <span className="text-slate-600">Click-to-Convert:</span>
                        <span className="font-bold text-slate-900 font-mono">{emailDemos[emailScenario].clickRate}</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-slate-900 h-full rounded-full" style={{ width: emailDemos[emailScenario].clickRate }}></div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Deliverability score: 98/100 (Zero spam flags)</span>
                    </div>
                  </div>

                  {/* Right Column: Email Content */}
                  <div className="lg:col-span-8 rounded-xl bg-slate-50 border border-slate-200 p-5 font-sans">
                    <div className="space-y-2 mb-4 pb-4 border-b border-slate-200 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 font-medium w-20">Subject:</span>
                        <span className="text-slate-900 font-medium bg-white px-2.5 py-1 rounded border border-slate-200 flex-1">
                          {emailDemos[emailScenario].subject}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 font-medium w-20">Preheader:</span>
                        <span className="text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200 flex-1">
                          {emailDemos[emailScenario].preheader}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-slate-200 text-slate-800 text-xs sm:text-sm whitespace-pre-line leading-relaxed font-sans shadow-xs">
                      {emailDemos[emailScenario].body}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        Segment dynamic fields ready
                      </span>
                      <button
                        onClick={() => handleSimulateEmailGen(emailScenario)}
                        className="flex items-center gap-1 text-slate-900 hover:text-slate-700 font-medium cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Regenerate variant</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PERFORMANCE ANALYTICS */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-slate-700" />
                      First-Party Multi-Touch Attribution Radar
                    </h4>
                    <p className="text-xs text-slate-500">Cookieless attribution synchronized across paid and organic touchpoints.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Blended 30-Day ROAS</span>
                    <span className="text-2xl font-black text-slate-900 font-mono">4.82x</span>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500">Total Attributed Rev</span>
                    <div className="text-xl font-bold text-slate-900 mt-1 font-mono">$184,290</div>
                    <span className="text-xs text-emerald-600 font-semibold">+34.8% vs last mo</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500">Blended CAC</span>
                    <div className="text-xl font-bold text-slate-900 mt-1 font-mono">$24.15</div>
                    <span className="text-xs text-emerald-600 font-semibold">-19.4% reduction</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500">Conversions</span>
                    <div className="text-xl font-bold text-slate-900 mt-1 font-mono">7,631</div>
                    <span className="text-xs text-slate-600 font-semibold">99.2% verified</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500">Active Campaigns</span>
                    <div className="text-xl font-bold text-slate-900 mt-1 font-mono">24 Sets</div>
                    <span className="text-xs text-slate-600 font-semibold">8 auto-scaled</span>
                  </div>
                </div>

                {/* Table */}
                <div className="rounded-xl border border-slate-200 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-600 uppercase tracking-wider bg-slate-50 font-semibold">
                        <th className="py-3 px-4">Channel</th>
                        <th className="py-3 px-4">Spend</th>
                        <th className="py-3 px-4">Attributed Rev</th>
                        <th className="py-3 px-4">ROAS</th>
                        <th className="py-3 px-4">Automated Insight</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">Meta Ads (Instagram & FB)</td>
                        <td className="py-3 px-4 font-mono">$18,400</td>
                        <td className="py-3 px-4 font-mono text-slate-900 font-semibold">$84,640</td>
                        <td className="py-3 px-4 font-bold text-slate-900">4.60x</td>
                        <td className="py-3 px-4 text-slate-600">Reallocate 15% spend to UGC carousel</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">Google Ads (Search & PMax)</td>
                        <td className="py-3 px-4 font-mono">$12,200</td>
                        <td className="py-3 px-4 font-mono text-slate-900 font-semibold">$61,000</td>
                        <td className="py-3 px-4 font-bold text-slate-900">5.00x</td>
                        <td className="py-3 px-4 text-emerald-600 font-medium">High bottom-funnel intent; maintain cap</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">TikTok Ads & Spark Ads</td>
                        <td className="py-3 px-4 font-mono">$6,500</td>
                        <td className="py-3 px-4 font-mono text-slate-900 font-semibold">$31,850</td>
                        <td className="py-3 px-4 font-bold text-slate-900">4.90x</td>
                        <td className="py-3 px-4 text-emerald-600 font-medium">Scale +25% spend on winning creator hooks</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-slate-900">Lifecycle Email Flows</td>
                        <td className="py-3 px-4 font-mono">$980</td>
                        <td className="py-3 px-4 font-mono text-slate-900 font-semibold">$26,800</td>
                        <td className="py-3 px-4 font-bold text-slate-900">27.3x</td>
                        <td className="py-3 px-4 text-slate-600">Zero ad fatigue; retention engine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs">
                  <div className="w-2 h-2 rounded-full bg-slate-900 mt-1 shrink-0"></div>
                  <div>
                    <span className="font-bold text-slate-900">Cross-Channel Attribution Synthesis:</span>
                    <p className="text-slate-600 mt-0.5">
                      41% of TikTok ad converters previously opened an abandoned cart email. Shared intelligence between engines accelerated purchase velocity by 3.2 days.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: INFLUENCER OUTREACH */}
            {activeTab === 'influencers' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-700" />
                      Creator Discovery & Outreach CRM
                    </h4>
                    <p className="text-xs text-slate-500">Discover vetted creators, verify authentic audience demographics, and execute outreach.</p>
                  </div>
                  <div className="text-xs font-medium px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                    Directory: 20M+ Creators
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Creator List */}
                  <div className="lg:col-span-5 space-y-2.5">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Recommended Creators</span>
                    {creators.map((c, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelectedCreator(idx);
                          setPitchSent(false);
                        }}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                          selectedCreator === idx
                            ? 'bg-slate-100 border-slate-300 shadow-xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <img src={c.avatar} alt={c.name} className="w-11 h-11 rounded-full object-cover border border-slate-200" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 text-sm truncate">{c.name}</span>
                            <span className="text-[11px] font-semibold text-emerald-600">{c.audienceMatch} Match</span>
                          </div>
                          <span className="text-xs text-slate-500 block">{c.handle} • {c.platform}</span>
                          <div className="flex items-center gap-3 text-[11px] text-slate-600 mt-0.5 font-mono">
                            <span>{c.followers} reach</span>
                            <span>{c.engagement} eng</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Creator Detail */}
                  <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Creator Profile</span>
                        <h5 className="text-sm font-bold text-slate-900 mt-0.5">{creators[selectedCreator].name}</h5>
                        <span className="text-xs text-slate-600">Niche: {creators[selectedCreator].niche}</span>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified Authentic</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-slate-800">Contextual Pitch Email Draft:</label>
                        <span className="text-[11px] text-slate-500">Auto-tailored to creator's style</span>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans shadow-xs min-h-[110px]">
                        {creators[selectedCreator].pitch}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-slate-500">Estimated Response Rate: <strong className="text-slate-900">64%</strong></span>
                      <button
                        onClick={() => setPitchSent(true)}
                        disabled={pitchSent}
                        className={`px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                          pitchSent
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                        }`}
                      >
                        {pitchSent ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Outreach Queued!</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Dispatch Outreach</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: SOCIAL CAMPAIGN SUITE */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-slate-700" />
                      Multi-Network Campaign Orchestrator
                    </h4>
                    <p className="text-xs text-slate-500">Input 1 core announcement—auto-adapt into platform-native posts across all channels.</p>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setSelectedSocialPlatform('linkedin')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        selectedSocialPlatform === 'linkedin' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => setSelectedSocialPlatform('twitter')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        selectedSocialPlatform === 'twitter' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      X / Twitter
                    </button>
                    <button
                      onClick={() => setSelectedSocialPlatform('instagram')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        selectedSocialPlatform === 'instagram' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Instagram
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Schedule Queue */}
                  <div className="lg:col-span-4 space-y-2.5">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Unified Campaign Queue</span>
                    
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">Thursday 10:00 AM</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">Optimal Window</span>
                      </div>
                      <p className="text-xs text-slate-700">Campaign: Autonomous Growth Era Announcement</p>
                      <div className="text-[11px] text-slate-500">Queued for 4 channels simultaneously</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800">Friday 2:30 PM</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">Case Study</span>
                      </div>
                      <p className="text-xs text-slate-600">Customer Story: How Linear reduced CAC by 38%</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800">Sunday 7:00 PM</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">Weekly Digest</span>
                      </div>
                      <p className="text-xs text-slate-600">Top 5 Growth Experiments of the Week</p>
                    </div>
                  </div>

                  {/* Right Column: Native Post Simulation */}
                  <div className="lg:col-span-8 bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-xs text-slate-900 font-semibold">
                          {socialVariations[selectedSocialPlatform].label}
                        </span>
                        <p className="text-xs text-slate-500 mt-0.5">Auto-adapted tone, character count, and hashtag taxonomy</p>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-700">
                        <span>Predicted Reach: <strong className="text-slate-900">{socialVariations[selectedSocialPlatform].stats.impressions || socialVariations[selectedSocialPlatform].stats.reach}</strong></span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-slate-200 text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed font-sans shadow-xs">
                      {socialVariations[selectedSocialPlatform].content}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        Synchronized across all brand accounts
                      </span>
                      <span className="text-slate-600 font-mono">1-Click Multi-Channel Publish</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

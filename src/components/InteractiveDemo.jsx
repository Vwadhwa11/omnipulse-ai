import React, { useState } from 'react';
import { 
  Mail, BarChart3, Users, Share2, Sparkles, Send, 
  ArrowUpRight, RefreshCw, Check, Star, Filter, Heart,
  MessageSquare, Eye, Play, ShieldCheck, Zap
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
      goal: 'High-Intent Abandoned Cart Recovery',
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

Marketing moves at lightning speed—and in the last 45 days, our AI engine has rolled out 3 major updates to cross-channel attribution and influencer tracking.

We'd love to welcome you back. We just credited your account with an exclusive 25% renewal credit valid until Friday:

[Re-activate & Claim 25% Off]

Check out how brands like Linear and Framer are scaling with us!`,
      targetAudience: 'Inactive users between 30-60 days with high previous activity',
    },
    launch: {
      goal: 'VIP Product Launch Announcement',
      subject: 'OmniPulse 2.0 is officially live: meet your new autonomous marketing brain',
      preheader: 'Early access keys are now generated for waitlist members',
      openRate: '72.8%',
      clickRate: '29.4%',
      body: `Hey David,

The wait is officially over. Today, we're unveiling OmniPulse 2.0—the first unified AI platform combining email automation, digital performance analytics, influencer outreach, and social management.

As a VIP Early Adopter, your access pass is live right now:
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
      pitch: `Hey Elena, loved your recent breakdown on Cookieless Attribution metrics! We're launching OmniPulse AI, which directly addresses the exact attribution blindspots you mentioned. Would love to sponsor your next tech breakdown video and give you lifetime access. Open to a 5-min intro?`
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
      pitch: `Hi Marcus, big fan of your TikTok series on scaling DTC ad spend! We built OmniPulse AI to eliminate the need for 6 separate marketing tools. Given your audience of e-com founders, we'd love to partner on a 3-part sponsored reel series with dedicated affiliate terms.`
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
      pitch: `Hey Sophia, your latest thread on AI-driven social content hit the nail on the head. We've built an autonomous multi-platform campaign manager that does that in real-time. Would love to sponsor your newsletter next Thursday!`
    }
  ];

  const socialVariations = {
    linkedin: {
      label: 'LinkedIn Post (Professional & Value-First)',
      content: `Most marketing teams are currently burning 15+ hours every week switching between Mailchimp, Google Analytics, spreadsheets of creators, and Hootsuite.

Here is the inconvenient truth: Fragmented data = Fragmented growth.

When your email funnel doesn't communicate with your influencer conversions or paid ad attribution, your CAC balloons and you miss critical growth loops.

This is why we architected OmniPulse AI:
1. Automated email flows that sync with live ad engagement
2. Cookieless multi-touch attribution
3. 20M+ verified creator discovery with 1-click outreach
4. Multi-platform social management from a single interface

The future of marketing is autonomous. Are you ready?

#MarketingOps #B2BMarketing #GrowthHacking #AITools`,
      stats: { impressions: '18.4K', likes: '482', shares: '64' }
    },
    twitter: {
      label: 'X / Twitter Thread (Punchy & High Engagement)',
      content: `The 2026 marketing stack is broken:

- Email tool: $250/mo
- Attribution dashboard: $600/mo
- Influencer database: $500/mo
- Social scheduler: $150/mo

Total: $1,500/mo + 6 disjointed logins.

We unified all 4 pillars under 1 autonomous AI brain with OmniPulse.

Here's how it works 👇 (1/5)`,
      stats: { impressions: '42.8K', retweets: '210', likes: '1.2K' }
    },
    instagram: {
      label: 'Instagram Reel & Carousel Caption (Visual & Lifestyle)',
      content: `Work smarter, not harder ✨ What if your marketing ran on autopilot while you focused on high-level strategy?

From AI-crafted emails to cross-channel analytics and automated creator outreach—OmniPulse does the heavy lifting so your brand stays top-of-mind 24/7.

🔗 Link in bio to join our exclusive VIP early access cohort!

#digitalmarketing #growthmindset #ecommerce #aiagency #entrepreneurship`,
      stats: { reach: '24.2K', saves: '380', comments: '94' }
    }
  };

  const handleSimulateEmailGen = (type) => {
    setIsGeneratingEmail(true);
    setEmailScenario(type);
    setTimeout(() => {
      setIsGeneratingEmail(false);
    }, 400);
  };

  return (
    <section id="interactive-demo" className="py-24 relative bg-[#07090E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Interactive Product Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Test Drive the Unified AI Engine
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Switch between the 4 modules below to see real-time simulated AI executions in action.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('email')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'email'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>01. Email Automation</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>02. Performance Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('influencers')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'influencers'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>03. Influencer Outreach</span>
          </button>

          <button
            onClick={() => setActiveTab('social')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'social'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 border border-amber-400/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>04. Social Suite</span>
          </button>
        </div>

        {/* Demo Window Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl shadow-indigo-950/20 overflow-hidden">
          
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs text-slate-400 font-mono ml-2">app.omnipulse.ai / workspace / {activeTab}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-mono text-emerald-400">AI AGENT: ONLINE</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            
            {/* TAB 1: EMAIL AUTOMATION */}
            {activeTab === 'email' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Mail className="w-5 h-5 text-indigo-400" />
                      Autonomous Email Flow Generator
                    </h4>
                    <p className="text-xs text-slate-400">Select an intent scenario to simulate instant AI copy synthesis & predictive metrics.</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSimulateEmailGen('cart')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        emailScenario === 'cart' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      Cart Abandonment
                    </button>
                    <button
                      onClick={() => handleSimulateEmailGen('winback')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        emailScenario === 'winback' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      Dormant Win-Back
                    </button>
                    <button
                      onClick={() => handleSimulateEmailGen('launch')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        emailScenario === 'launch' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      VIP Launch Announcement
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Email Configuration & Predictions */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Campaign Intent</span>
                      <div className="text-sm font-bold text-white">{emailDemos[emailScenario].goal}</div>
                      <div className="text-xs text-slate-400 mt-1">Audience: {emailDemos[emailScenario].targetAudience}</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">AI Predictive Performance</span>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-300">Predicted Open Rate:</span>
                        <span className="text-sm font-bold text-emerald-400 font-mono">{emailDemos[emailScenario].openRate}</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-full" style={{ width: emailDemos[emailScenario].openRate }}></div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-slate-300">Click-to-Convert:</span>
                        <span className="text-sm font-bold text-indigo-400 font-mono">{emailDemos[emailScenario].clickRate}</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-400 h-full rounded-full" style={{ width: emailDemos[emailScenario].clickRate }}></div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Deliverability guardian passed: 0 spam triggers detected</span>
                    </div>
                  </div>

                  {/* Right Column: Live Email Preview */}
                  <div className="lg:col-span-8 rounded-xl bg-slate-900 border border-slate-800 p-5 font-sans relative">
                    <div className="space-y-3 mb-4 pb-4 border-b border-slate-800 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 font-semibold w-20">Subject Line:</span>
                        <span className="text-white font-medium bg-slate-950 px-2 py-1 rounded border border-slate-800 flex-1">
                          {emailDemos[emailScenario].subject}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 font-semibold w-20">Preview Text:</span>
                        <span className="text-slate-300 bg-slate-950 px-2 py-1 rounded border border-slate-800 flex-1">
                          {emailDemos[emailScenario].preheader}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 text-slate-200 text-sm whitespace-pre-line leading-relaxed font-sans">
                      {emailDemos[emailScenario].body}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        A/B Variant auto-optimization ready
                      </span>
                      <button
                        onClick={() => handleSimulateEmailGen(emailScenario)}
                        className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Re-synthesize copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PERFORMANCE ANALYTICS */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                      Unified Digital Attribution & ROAS Radar
                    </h4>
                    <p className="text-xs text-slate-400">First-party cookieless attribution synchronized across all paid and organic touchpoints.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Blended 30-Day ROAS</span>
                    <span className="text-2xl font-black text-emerald-400 font-mono">4.82x</span>
                  </div>
                </div>

                {/* Top Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400">Total Attributed Revenue</span>
                    <div className="text-xl font-bold text-white mt-1 font-mono">$184,290</div>
                    <span className="text-xs text-emerald-400 font-semibold">+34.8% vs last mo</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400">Blended CAC</span>
                    <div className="text-xl font-bold text-white mt-1 font-mono">$24.15</div>
                    <span className="text-xs text-emerald-400 font-semibold">-19.4% reduction</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400">Total Conversions</span>
                    <div className="text-xl font-bold text-white mt-1 font-mono">7,631</div>
                    <span className="text-xs text-indigo-400 font-semibold">99.2% verified</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400">Active Ad Sets</span>
                    <div className="text-xl font-bold text-white mt-1 font-mono">24 Sets</div>
                    <span className="text-xs text-purple-400 font-semibold">8 auto-scaled</span>
                  </div>
                </div>

                {/* Channel Breakdown Table */}
                <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider bg-slate-950/60">
                        <th className="py-3 px-4">Marketing Channel</th>
                        <th className="py-3 px-4">Ad Spend</th>
                        <th className="py-3 px-4">Attributed Rev</th>
                        <th className="py-3 px-4">ROAS</th>
                        <th className="py-3 px-4">AI Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-300">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span> Meta Ads (Instagram/FB)
                        </td>
                        <td className="py-3 px-4 font-mono">$18,400</td>
                        <td className="py-3 px-4 font-mono text-emerald-400">$84,640</td>
                        <td className="py-3 px-4 font-bold text-white">4.60x</td>
                        <td className="py-3 px-4 text-indigo-400 font-medium">Reallocate 15% budget to UGC carousel</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500"></span> Google Ads (Search & PMax)
                        </td>
                        <td className="py-3 px-4 font-mono">$12,200</td>
                        <td className="py-3 px-4 font-mono text-emerald-400">$61,000</td>
                        <td className="py-3 px-4 font-bold text-white">5.00x</td>
                        <td className="py-3 px-4 text-emerald-400 font-medium">High intent; maintain search cap</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-pink-500"></span> TikTok Ads & Spark Ads
                        </td>
                        <td className="py-3 px-4 font-mono">$6,500</td>
                        <td className="py-3 px-4 font-mono text-emerald-400">$31,850</td>
                        <td className="py-3 px-4 font-bold text-white">4.90x</td>
                        <td className="py-3 px-4 text-emerald-400 font-medium">Scale +30% spend; creator hook winning</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Autonomous Email Funnel
                        </td>
                        <td className="py-3 px-4 font-mono">$980</td>
                        <td className="py-3 px-4 font-mono text-emerald-400">$26,800</td>
                        <td className="py-3 px-4 font-bold text-white">27.3x</td>
                        <td className="py-3 px-4 text-purple-400 font-medium">Zero marginal ad cost; retention surge</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* AI Executive Action Notice */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-3 text-xs">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">AI Real-Time Optimization Insight:</span>
                    <p className="text-slate-300 mt-0.5">
                      "Cross-channel attribution detected that 41% of TikTok ad converters previously opened an abandoned cart email. Synergistic workflow triggered automated priority retargeting."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: INFLUENCER OUTREACH */}
            {activeTab === 'influencers' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      Creator Discovery & Autonomous Outreach Engine
                    </h4>
                    <p className="text-xs text-slate-400">Discover vetted creators, verify authentic audience demographics, and generate personalized pitches.</p>
                  </div>
                  <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-purple-300">
                    Database: 20M+ Verified Creators
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Creator List */}
                  <div className="lg:col-span-5 space-y-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Recommended Creators</span>
                    {creators.map((c, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelectedCreator(idx);
                          setPitchSent(false);
                        }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                          selectedCreator === idx
                            ? 'bg-purple-950/40 border-purple-500/50 shadow-md shadow-purple-950/30'
                            : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover border border-slate-700" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white text-sm truncate">{c.name}</span>
                            <span className="text-[11px] font-semibold text-emerald-400">{c.audienceMatch} Match</span>
                          </div>
                          <span className="text-xs text-slate-400 block">{c.handle} • {c.platform}</span>
                          <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1 font-mono">
                            <span>{c.followers} reach</span>
                            <span>{c.engagement} eng</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Creator Detail & AI Pitch Generator */}
                  <div className="lg:col-span-7 bg-slate-900 rounded-xl border border-slate-800 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Creator Intelligence Profile</span>
                        <h5 className="text-base font-bold text-white mt-0.5">{creators[selectedCreator].name}</h5>
                        <span className="text-xs text-slate-400">Niche: {creators[selectedCreator].niche}</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Audience Verified Genuine</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                          <span>AI Bespoke Outreach Pitch:</span>
                        </label>
                        <span className="text-[11px] text-slate-400">Contextualized with creator's recent video</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans min-h-[110px]">
                        {creators[selectedCreator].pitch}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-slate-400">Estimated Response Rate: <strong className="text-white">64%</strong></span>
                      <button
                        onClick={() => setPitchSent(true)}
                        disabled={pitchSent}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                          pitchSent
                            ? 'bg-emerald-600 text-white'
                            : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30'
                        }`}
                      >
                        {pitchSent ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Outreach Pitch Queued!</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Launch 1-Click Outreach</span>
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
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-amber-400" />
                      Multi-Network Social Campaign Orchestrator
                    </h4>
                    <p className="text-xs text-slate-400">Input 1 core announcement or blog link—AI reformats it into high-converting native posts for every network.</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                    <button
                      onClick={() => setSelectedSocialPlatform('linkedin')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedSocialPlatform === 'linkedin' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => setSelectedSocialPlatform('twitter')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedSocialPlatform === 'twitter' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      X (Twitter)
                    </button>
                    <button
                      onClick={() => setSelectedSocialPlatform('instagram')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedSocialPlatform === 'instagram' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Instagram
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Scheduled Campaign Calendar Snippet */}
                  <div className="lg:col-span-4 space-y-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Unified Campaign Queue</span>
                    
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">Thursday 10:00 AM</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-semibold">Peak Window</span>
                      </div>
                      <p className="text-xs text-slate-300">Campaign: Autonomous Marketing Era Launch</p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span>Queued for 4 channels</span>
                        <span>•</span>
                        <span className="text-emerald-400">Optimal AI timing</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-300">Friday 2:30 PM</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Case Study</span>
                      </div>
                      <p className="text-xs text-slate-400">Customer Story: How Linear reduced CAC by 38%</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-300">Sunday 7:00 PM</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Weekly Digest</span>
                      </div>
                      <p className="text-xs text-slate-400">Top 5 Growth Experiments of the Week</p>
                    </div>
                  </div>

                  {/* Right Column: Native Post Simulation */}
                  <div className="lg:col-span-8 bg-slate-900 rounded-xl border border-slate-800 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <span className="text-xs text-amber-400 font-semibold">
                          {socialVariations[selectedSocialPlatform].label}
                        </span>
                        <p className="text-xs text-slate-400 mt-0.5">Auto-adapted tone, character count, and hashtag taxonomy</p>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                        <span>Predicted Reach: <strong className="text-white">{socialVariations[selectedSocialPlatform].stats.impressions || socialVariations[selectedSocialPlatform].stats.reach}</strong></span>
                      </div>
                    </div>

                    <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed font-sans">
                      {socialVariations[selectedSocialPlatform].content}
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        Synchronized across all company profiles
                      </span>
                      <span className="text-slate-400 font-mono">1-Click Publish to all channels</span>
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

import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Layers, Check, Sparkles } from 'lucide-react';

export default function RoiCalculator({ onOpenWaitlist }) {
  const [adSpend, setAdSpend] = useState(15000);
  const [teamSize, setTeamSize] = useState(3);

  // Dynamic calculations
  const hoursSavedPerWeek = Math.round(teamSize * 7.5);
  const toolSavingsPerMonth = Math.round(650 + (teamSize * 180) + (adSpend * 0.02));
  const estimatedRevenueUplift = Math.round(adSpend * 0.38);

  return (
    <section id="roi-calc" className="py-24 relative bg-[#090B12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Calculate Your Time & Capital Savings
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how much your business saves by replacing separate subscriptions with a single autonomous AI engine.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">Monthly Digital Marketing / Ad Spend</label>
                <span className="text-base font-extrabold text-indigo-400 font-mono">
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>$2,000/mo</span>
                <span>$50,000/mo</span>
                <span>$100,000+/mo</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">Marketing & Growth Team Size</label>
                <span className="text-base font-extrabold text-indigo-400 font-mono">
                  {teamSize} {teamSize === 1 ? 'Person' : 'People'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>Solo Founder (1)</span>
                <span>Growing Team (5)</span>
                <span>Scale Agency (15)</span>
              </div>
            </div>

            {/* What you replace */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Tools Consolidated Into OmniPulse:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Klaviyo / Mailchimp ($250+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TripleWhale / Supermetrics ($400+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Modash / Grin ($450+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sprout / Hootsuite ($200+)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-6 bg-gradient-to-b from-indigo-950/60 to-slate-950 p-6 sm:p-8 rounded-2xl border border-indigo-500/40 shadow-2xl space-y-6">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Projected Monthly Impact</span>
            </div>

            <div className="space-y-4">
              {/* Stat 1 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Weekly Hours Saved</span>
                    <span className="text-xl sm:text-2xl font-black text-white font-mono">{hoursSavedPerWeek} hrs / week</span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold px-2 py-1 rounded bg-emerald-500/10">+120 hrs/mo bandwidth</span>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Subscription Cost Savings</span>
                    <span className="text-xl sm:text-2xl font-black text-white font-mono">${toolSavingsPerMonth.toLocaleString()} / mo</span>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 font-semibold px-2 py-1 rounded bg-indigo-500/10">Zero tool bloat</span>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Estimated Revenue Lift</span>
                    <span className="text-xl sm:text-2xl font-black text-white font-mono">+${estimatedRevenueUplift.toLocaleString()} / mo</span>
                  </div>
                </div>
                <span className="text-xs text-pink-400 font-semibold px-2 py-1 rounded bg-pink-500/10">3.4x average ROAS</span>
              </div>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Lock In Early Adopter Pricing</span>
              <Sparkles className="w-4 h-4 text-indigo-200" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Check } from 'lucide-react';

export default function RoiCalculator({ onOpenWaitlist }) {
  const [adSpend, setAdSpend] = useState(15000);
  const [teamSize, setTeamSize] = useState(3);

  // Dynamic calculations
  const hoursSavedPerWeek = Math.round(teamSize * 7.5);
  const toolSavingsPerMonth = Math.round(650 + (teamSize * 180) + (adSpend * 0.02));
  const estimatedRevenueUplift = Math.round(adSpend * 0.38);

  return (
    <section id="roi-calc" className="py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-medium mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-slate-500" />
            <span>ROI & Efficiency Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Calculate your time and capital savings
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how much your team saves by consolidating separate point solutions into one platform.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card space-y-7">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-900">Monthly Digital Ad Spend</label>
                <span className="text-base font-bold text-slate-900 font-mono">
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
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>$2,000/mo</span>
                <span>$50,000/mo</span>
                <span>$100,000+/mo</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-900">Growth & Marketing Team Size</label>
                <span className="text-base font-bold text-slate-900 font-mono">
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
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>Solo Operator (1)</span>
                <span>Growing Team (5)</span>
                <span>Agency (15)</span>
              </div>
            </div>

            {/* Replaced tools */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
                Tools Consolidated Into OmniPulse:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Klaviyo / Mailchimp ($250+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>TripleWhale / Supermetrics ($400+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Modash / Grin ($450+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hootsuite / Buffer ($150+)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-premium space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Projected Monthly Impact</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Direct Cost Elimination
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Stat 1 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Weekly Hours Saved</span>
                    <span className="text-xl font-bold text-slate-900 font-mono">{hoursSavedPerWeek} hrs / week</span>
                  </div>
                </div>
                <span className="text-xs text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50">~30 hrs/mo/person</span>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Subscription Cost Savings</span>
                    <span className="text-xl font-bold text-slate-900 font-mono">${toolSavingsPerMonth.toLocaleString()} / mo</span>
                  </div>
                </div>
                <span className="text-xs text-slate-700 font-medium px-2 py-0.5 rounded bg-slate-100">Zero seat penalty</span>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Projected Revenue Lift</span>
                    <span className="text-xl font-bold text-slate-900 font-mono">+${estimatedRevenueUplift.toLocaleString()} / mo</span>
                  </div>
                </div>
                <span className="text-xs text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50">Attribution gain</span>
              </div>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Lock In Early Adopter Pricing</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

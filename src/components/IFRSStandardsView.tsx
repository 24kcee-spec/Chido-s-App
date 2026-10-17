import React, { useState, useMemo } from 'react';
import { IFRS_STANDARDS, IFRSStandard } from '../data/ifrsStandardsData';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Calculator, 
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';

export const IFRSStandardsView: React.FC = () => {
  const [selectedStandard, setSelectedStandard] = useState<IFRSStandard>(IFRS_STANDARDS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Goodwill & NCI Calculator State
  const [showCalculator, setShowCalculator] = useState(false);
  const [consideration, setConsideration] = useState<number>(800000);
  const [nciPercentage, setNciPercentage] = useState<number>(20); // 20% NCI (80% parent)
  const [subNetAssetsBookValue, setSubNetAssetsBookValue] = useState<number>(600000);
  const [fairValueUplift, setFairValueUplift] = useState<number>(100000);
  const [taxRate, setTaxRate] = useState<number>(0.2472); // 24.72% corporate tax rate
  const [nciMethod, setNciMethod] = useState<'fair_value' | 'proportionate'>('fair_value');
  const [nciFairValueManual, setNciFairValueManual] = useState<number>(190000);

  const filteredStandards = useMemo(() => {
    return IFRS_STANDARDS.filter(s => {
      if (selectedCategory !== 'all' && s.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          s.code.toLowerCase().includes(q) ||
          s.title.toLowerCase().includes(q) ||
          s.coreObjective.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Goodwill calculation logic
  const goodwillResult = useMemo(() => {
    const deferredTaxOnUplift = fairValueUplift * taxRate;
    const fairValueOfNetIdentifiableAssets = subNetAssetsBookValue + fairValueUplift - deferredTaxOnUplift;

    let nciValueAtAcquisition = 0;
    if (nciMethod === 'fair_value') {
      nciValueAtAcquisition = nciFairValueManual;
    } else {
      // Proportionate share of net identifiable assets
      nciValueAtAcquisition = fairValueOfNetIdentifiableAssets * (nciPercentage / 100);
    }

    const totalAcquisitionValue = consideration + nciValueAtAcquisition;
    const goodwill = totalAcquisitionValue - fairValueOfNetIdentifiableAssets;
    const isBargainPurchase = goodwill < 0;

    return {
      deferredTaxOnUplift,
      fairValueOfNetIdentifiableAssets,
      nciValueAtAcquisition,
      goodwill: Math.abs(goodwill),
      isBargainPurchase
    };
  }, [consideration, nciPercentage, subNetAssetsBookValue, fairValueUplift, taxRate, nciMethod, nciFairValueManual]);

  return (
    <div className="space-y-6 pb-12">
      {/* Title Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>IFRS &amp; IAS Standards Master &amp; Proforma Journals</span>
          </h2>
          <p className="text-xs text-slate-500">
            Authoritative accounting standards reference, journal entries, and group consolidation calculators.
          </p>
        </div>

        <button
          onClick={() => setShowCalculator(!showCalculator)}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            showCalculator
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/60'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>{showCalculator ? 'Close Consolidation Calculator' : 'Consolidation & Goodwill Calculator'}</span>
        </button>
      </div>

      {/* Interactive Consolidation & Goodwill Calculator Modal/Panel */}
      {showCalculator && (
        <div className="bg-white rounded-2xl border border-indigo-200 p-6 shadow-md space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-indigo-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span>IFRS 3 / IFRS 10 Business Combinations: Goodwill &amp; NCI Calculator</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Calculate acquisition date Goodwill under both Full Goodwill (Fair Value) and Proportionate Share methods.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-bold">
              CTA Exam Standard Model
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Parent Purchase Consideration Transferred ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={consideration}
                  onChange={e => setConsideration(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    NCI Shareholding (%)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={nciPercentage}
                    onChange={e => setNciPercentage(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                  />
                  <span className="text-[10px] text-slate-400">Parent owns {100 - nciPercentage}%</span>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    NCI Measurement Method
                  </label>
                  <select
                    value={nciMethod}
                    onChange={e => setNciMethod(e.target.value as 'fair_value' | 'proportionate')}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
                  >
                    <option value="fair_value">Fair Value (Full Goodwill)</option>
                    <option value="proportionate">Proportionate Share of Net Assets</option>
                  </select>
                </div>
              </div>

              {nciMethod === 'fair_value' && (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    NCI Fair Value at Acquisition ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={nciFairValueManual}
                    onChange={e => setNciFairValueManual(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Subsidiary Net Assets Book Value ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={subNetAssetsBookValue}
                    onChange={e => setSubNetAssetsBookValue(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                  />
                  <span className="text-[10px] text-slate-400">Share capital + Pre-acq reserves</span>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Net Fair Value Uplift on Assets ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={fairValueUplift}
                    onChange={e => setFairValueUplift(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                  />
                  <span className="text-[10px] text-slate-400">e.g. PPE revaluation excess</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Schedule & Result */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs space-y-2 text-slate-800">
              <div className="font-bold text-slate-900 font-sans text-xs pb-1 border-b border-slate-200">
                Working 2: Goodwill on Acquisition
              </div>

              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>Consideration transferred by Parent</span>
                <span>${consideration.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>+ Non-Controlling Interest at Acquisition</span>
                <span className="text-indigo-700 font-bold">
                  ${goodwillResult.nciValueAtAcquisition.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="flex justify-between py-1 text-slate-500">
                <span>Total Value of Business</span>
                <span>${(consideration + goodwillResult.nciValueAtAcquisition).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-1 text-[11px] text-slate-600">
                <div className="flex justify-between">
                  <span>Sub Net Assets (Book value)</span>
                  <span>${subNetAssetsBookValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>+ Fair Value Uplift</span>
                  <span>${fairValueUplift.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-rose-600">
                  <span>- Deferred Tax on FV Uplift ({(taxRate * 100).toFixed(1)}%)</span>
                  <span>(${goodwillResult.deferredTaxOnUplift.toLocaleString(undefined, { maximumFractionDigits: 2 })})</span>
                </div>
                <div className="flex justify-between font-bold text-slate-800 pt-1 border-t border-slate-200">
                  <span>Fair Value of Identifiable Net Assets</span>
                  <span>(${goodwillResult.fairValueOfNetIdentifiableAssets.toLocaleString(undefined, { maximumFractionDigits: 2 })})</span>
                </div>
              </div>

              <div className={`p-3 rounded-xl mt-3 flex justify-between items-center text-sm font-extrabold ${
                goodwillResult.isBargainPurchase
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-emerald-600 text-white shadow-md'
              }`}>
                <span>{goodwillResult.isBargainPurchase ? 'BARGAIN PURCHASE GAIN (P&L)' : 'GOODWILL ON CONSOLIDATION (SFP)'}</span>
                <span>${goodwillResult.goodwill.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Standards Browser */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Standards Navigation List */}
        <div className="space-y-2">
          <div className="relative mb-3">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search standards..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
            />
          </div>

          <div className="space-y-1.5">
            {filteredStandards.map(std => {
              const isSelected = selectedStandard.code === std.code;
              return (
                <button
                  key={std.code}
                  onClick={() => setSelectedStandard(std)}
                  className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs">{std.code}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                      isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {std.category}
                    </span>
                  </div>
                  <div className={`text-xs font-semibold truncate mt-1 ${isSelected ? 'text-indigo-100' : 'text-slate-700'}`}>
                    {std.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Standard Full Details */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                {selectedStandard.code}
              </span>
              <span className="text-xs text-slate-400">Category: {selectedStandard.category}</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {selectedStandard.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mt-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <strong className="text-slate-800">Core Objective:</strong> {selectedStandard.coreObjective}
            </p>
          </div>

          {/* Key Definitions */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>Key Accounting Definitions</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedStandard.keyDefinitions.map((def, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                  <div className="font-bold text-indigo-900 mb-1">{def.term}</div>
                  <div className="text-slate-600 leading-relaxed">{def.definition}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Measurement Principles */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Recognition &amp; Measurement Criteria</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {selectedStandard.recognitionAndMeasurement.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proforma Journal Entries */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
              <span>Proforma Debit &amp; Credit Journals</span>
            </h4>

            <div className="space-y-4">
              {selectedStandard.proformaJournals.map((pf, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <div className="p-3 bg-slate-100/80 border-b border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900">{pf.title}</div>
                    <div className="text-[11px] text-slate-500">{pf.description}</div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs font-mono">
                      <thead className="bg-slate-200/50 text-slate-600 text-[10px] uppercase">
                        <tr>
                          <th className="py-1.5 px-4 text-left font-sans">Account Title</th>
                          <th className="py-1.5 px-4 text-right font-sans">Debit</th>
                          <th className="py-1.5 px-4 text-right font-sans">Credit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {pf.entries.map((entry, eIdx) => (
                          <tr key={eIdx} className="hover:bg-white/80">
                            <td className="py-2 px-4 font-semibold text-slate-900">{entry.account}</td>
                            <td className="py-2 px-4 text-right text-emerald-700">{entry.debit || '-'}</td>
                            <td className="py-2 px-4 text-right text-rose-700">{entry.credit || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Exam Pitfalls */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4">
            <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>Common Student &amp; CTA Exam Traps</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-rose-900">
              {selectedStandard.examPitfalls.map((pitfall, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-rose-600">•</span>
                  <span>{pitfall}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

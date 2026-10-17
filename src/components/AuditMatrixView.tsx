import React, { useState, useMemo } from 'react';
import { AUDIT_ASSERTIONS, AuditAssertion, CPC_THREATS } from '../data/auditingData';
import { 
  Scale, 
  Search, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Calculator, 
  FileCheck2,
  HelpCircle,
  Building,
  DollarSign
} from 'lucide-react';

export const AuditMatrixView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'assertions' | 'materiality' | 'cpc'>('assertions');
  const [selectedAssertion, setSelectedAssertion] = useState<AuditAssertion>(AUDIT_ASSERTIONS[0]);

  // Materiality Calculator State
  const [pbt, setPbt] = useState<number>(2000000); // $2,000,000 Profit before tax
  const [revenue, setRevenue] = useState<number>(40000000); // $40,000,000 Revenue
  const [totalAssets, setTotalAssets] = useState<number>(25000000); // $25,000,000 Total Assets
  const [benchmarkChoice, setBenchmarkChoice] = useState<'pbt' | 'revenue' | 'assets'>('pbt');
  const [materialityPercent, setMaterialityPercent] = useState<number>(5); // 5% of PBT
  const [performancePercent, setPerformancePercent] = useState<number>(65); // 65% of overall materiality

  const materialityCalculations = useMemo(() => {
    let baseAmount = pbt;
    if (benchmarkChoice === 'revenue') baseAmount = revenue;
    if (benchmarkChoice === 'assets') baseAmount = totalAssets;

    const overallMateriality = baseAmount * (materialityPercent / 100);
    const performanceMateriality = overallMateriality * (performancePercent / 100);
    const clearlyTrivialThreshold = overallMateriality * 0.05; // 5% of overall

    return {
      baseAmount,
      overallMateriality,
      performanceMateriality,
      clearlyTrivialThreshold
    };
  }, [pbt, revenue, totalAssets, benchmarkChoice, materialityPercent, performancePercent]);

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-600" />
            <span>Auditing Assertions, Risk &amp; Ethics Matrix</span>
          </h2>
          <p className="text-xs text-slate-500">
            ISA 315 / 500 financial statement assertions, ISA 320 materiality calculator, and CPC ethical threats.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('assertions')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'assertions' ? 'bg-white text-amber-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Audit Assertions Matrix
          </button>
          <button
            onClick={() => setActiveTab('materiality')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'materiality' ? 'bg-white text-amber-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ISA 320 Materiality Calculator
          </button>
          <button
            onClick={() => setActiveTab('cpc')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'cpc' ? 'bg-white text-amber-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            CPC Ethics &amp; Threats
          </button>
        </div>
      </div>

      {/* VIEW 1: ASSERTIONS MASTER */}
      {activeTab === 'assertions' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Assertion Selector List */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Select Financial Statement Assertion
            </div>
            {AUDIT_ASSERTIONS.map((item, idx) => {
              const isSelected = selectedAssertion.name === item.name;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedAssertion(item)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{item.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isSelected ? 'bg-amber-700 text-amber-100' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.category.split('(')[0]}
                    </span>
                  </div>
                  <div className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-amber-100' : 'text-slate-500'}`}>
                    {item.definition}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Assertion Deep Dive Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  {selectedAssertion.category}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Assertion: {selectedAssertion.name}
              </h3>
              <p className="text-xs text-slate-600 mt-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 leading-relaxed">
                <strong className="text-slate-800">Formal Definition:</strong> {selectedAssertion.definition}
              </p>
            </div>

            {/* Typical Exam Misstatement */}
            <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4">
              <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Typical Risk of Material Misstatement (RoMM)</span>
              </h4>
              <p className="text-xs text-rose-800 leading-relaxed">
                {selectedAssertion.typicalMisstatement}
              </p>
            </div>

            {/* Substantive Audit Procedures */}
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Primary Substantive Audit Procedures &amp; Tests of Detail</span>
              </h4>
              <div className="space-y-2.5">
                {selectedAssertion.primaryAuditProcedures.map((proc, pIdx) => (
                  <div key={pIdx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {pIdx + 1}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {proc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Exam Tip */}
            <div className="text-[11px] text-slate-500 bg-amber-50/50 p-3 rounded-xl border border-amber-200/60">
              <strong className="text-amber-800">Direction of Testing Rule:</strong> To test for <em>Completeness</em> (understatement risk), test from physical source documents forward to the ledger. To test for <em>Occurrence/Existence</em> (overstatement risk), test from ledger accounts back to source evidence.
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ISA 320 MATERIALITY CALCULATOR */}
      {activeTab === 'materiality' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inputs */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>Entity Financial Benchmarks</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Profit Before Tax (PBT) ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={pbt}
                  onChange={e => setPbt(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={revenue}
                  onChange={e => setRevenue(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Total Assets ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={totalAssets}
                  onChange={e => setTotalAssets(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Chosen Primary Benchmark
                </label>
                <select
                  value={benchmarkChoice}
                  onChange={e => {
                    const choice = e.target.value as 'pbt' | 'revenue' | 'assets';
                    setBenchmarkChoice(choice);
                    if (choice === 'pbt') setMaterialityPercent(5);
                    if (choice === 'revenue') setMaterialityPercent(1);
                    if (choice === 'assets') setMaterialityPercent(1);
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
                >
                  <option value="pbt">Profit Before Tax (For-profit commercial entity)</option>
                  <option value="revenue">Revenue (Volatile / Low margin entity)</option>
                  <option value="assets">Total Assets (Asset-heavy / Investment holding)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Planning Materiality Percentage (%)
                </label>
                <input
                  type="number"
                  min="0.1"
                  max="15"
                  step="0.1"
                  value={materialityPercent}
                  onChange={e => setMaterialityPercent(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">ISA typical range: PBT 5-10%, Rev 0.5-1%, Assets 1-2%</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Performance Materiality Rate (%)
                </label>
                <input
                  type="number"
                  min="40"
                  max="90"
                  value={performancePercent}
                  onChange={e => setPerformancePercent(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">ISA guidance: 50% (high risk) to 75% (low risk)</span>
              </div>
            </div>
          </div>

          {/* Results Schedule */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900">
              Audit Materiality Schedule (ISA 320)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Overall Materiality</span>
                <div className="text-xl font-extrabold text-amber-900 mt-1 font-mono">
                  ${materialityCalculations.overallMateriality.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <p className="text-[10px] text-amber-700 mt-1">
                  {materialityPercent}% of {benchmarkChoice.toUpperCase()}
                </p>
              </div>

              <div className="bg-indigo-50/70 border border-indigo-200 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider">Performance Materiality</span>
                <div className="text-xl font-extrabold text-indigo-900 mt-1 font-mono">
                  ${materialityCalculations.performanceMateriality.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <p className="text-[10px] text-indigo-700 mt-1">
                  {performancePercent}% of Overall Materiality
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Clearly Trivial Threshold</span>
                <div className="text-xl font-extrabold text-slate-900 mt-1 font-mono">
                  ${materialityCalculations.clearlyTrivialThreshold.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  5% of Overall Materiality (ISA 450)
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 pt-3 border-t border-slate-100">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Audit Sampling Scope:</strong> All individual transaction items or account balances exceeding the performance materiality threshold of <strong>${materialityCalculations.performanceMateriality.toLocaleString()}</strong> should be tested 100% or subjected to key item selection.
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Unadjusted Misstatements Schedule:</strong> Misstatements below <strong>${materialityCalculations.clearlyTrivialThreshold.toLocaleString()}</strong> do not need to be accumulated on the schedule of unadjusted differences unless qualitatively material.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: CODE OF PROFESSIONAL CONDUCT (CPC) */}
      {activeTab === 'cpc' && (
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              IESBA Code of Professional Conduct: The 5 Fundamental Ethical Threats
            </h3>
            <p className="text-xs text-slate-500">
              Auditor independence threats and mandatory safeguards framework examined in CAC 4103 and CTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CPC_THREATS.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-amber-900">{item.threat}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                    CPC Threat
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.definition}
                </p>

                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/60 text-xs">
                  <div className="font-bold text-amber-900 mb-0.5">Exam Scenario Example:</div>
                  <div className="text-slate-700">{item.scenarioExample}</div>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mandatory Safeguards:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {item.appropriateSafeguards.map((sg, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{sg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { 
  ASSET_TYPES, 
  CapitalAllowanceAssetType, 
  TAX_DEDUCTION_RULES, 
  WITHHOLDING_TAX_RATES 
} from '../data/taxationGuide';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  Info, 
  DollarSign, 
  ShieldAlert, 
  HelpCircle,
  TrendingDown,
  Building2,
  Car,
  FileCheck
} from 'lucide-react';

interface AssetEntry {
  id: string;
  name: string;
  assetTypeId: string;
  cost: number;
  yearBroughtIntoUse: number; // 1 to 4
  method: 'SIA' | 'WearAndTear';
}

export const TaxCalculatorView: React.FC = () => {
  // Tabs within tax view: 'allowances' | 'company-tax' | 'rules' | 'withholding'
  const [activeSubTab, setActiveSubTab] = useState<'allowances' | 'company-tax' | 'rules' | 'withholding'>('allowances');

  // Capital Allowances State
  const [assets, setAssets] = useState<AssetEntry[]>([
    {
      id: '1',
      name: 'Factory Assembly Equipment',
      assetTypeId: 'plant-machinery',
      cost: 50000,
      yearBroughtIntoUse: 1,
      method: 'SIA'
    },
    {
      id: '2',
      name: 'CEO Executive Mercedes Sedan',
      assetTypeId: 'passenger-vehicle',
      cost: 45000,
      yearBroughtIntoUse: 1,
      method: 'SIA'
    },
    {
      id: '3',
      name: 'Industrial Warehouse Extension',
      assetTypeId: 'ind-building',
      cost: 120000,
      yearBroughtIntoUse: 1,
      method: 'SIA'
    }
  ]);

  // Form for new asset
  const [newAssetName, setNewAssetName] = useState('');
  const [newAssetType, setNewAssetType] = useState('plant-machinery');
  const [newAssetCost, setNewAssetCost] = useState('10000');
  const [newAssetMethod, setNewAssetMethod] = useState<'SIA' | 'WearAndTear'>('SIA');

  // Corporate Tax Computation State
  const [grossTurnover, setGrossTurnover] = useState<number>(500000);
  const [exemptIncome, setExemptIncome] = useState<number>(20000);
  const [businessExpenses, setBusinessExpenses] = useState<number>(310000);
  const [nonDeductibleAddbacks, setNonDeductibleAddbacks] = useState<number>(35000); // e.g. Depreciation + Fines
  const [taxYearRate, setTaxYearRate] = useState<number>(0.24); // 24% standard rate
  const [aidsLevyRate, setAidsLevyRate] = useState<number>(0.03); // 3% AIDS levy

  // Search in tax rules
  const [rulesSearch, setRulesSearch] = useState('');

  // Handle adding asset
  const handleAddAsset = (e: React.FormEvent) => {
    e.preventDefault();
    const costNum = parseFloat(newAssetCost) || 0;
    if (!newAssetName.trim() || costNum <= 0) return;

    const newEntry: AssetEntry = {
      id: Date.now().toString(),
      name: newAssetName.trim(),
      assetTypeId: newAssetType,
      cost: costNum,
      yearBroughtIntoUse: 1,
      method: newAssetMethod
    };

    setAssets([...assets, newEntry]);
    setNewAssetName('');
    setNewAssetCost('10000');
  };

  const handleRemoveAsset = (id: string) => {
    setAssets(assets.filter(a => a.id !== id));
  };

  // Capital Allowances Calculation Logic
  const allowancesSummary = useMemo(() => {
    let totalActualCost = 0;
    let totalDeemedCost = 0;
    let totalAllowanceClaimed = 0;

    const calculatedList = assets.map(asset => {
      const typeDef = ASSET_TYPES.find(t => t.id === asset.assetTypeId) || ASSET_TYPES[0];
      totalActualCost += asset.cost;

      // Apply deemed cost cap if applicable (e.g. passenger motor vehicles)
      const effectiveCost = typeDef.costCap ? Math.min(asset.cost, typeDef.costCap) : asset.cost;
      totalDeemedCost += effectiveCost;

      let allowance = 0;
      let allowanceTypeLabel = '';

      if (asset.method === 'SIA' && typeDef.qualifiesForSIA) {
        // Special Initial Allowance is 25% of deemed cost
        allowance = effectiveCost * 0.25;
        allowanceTypeLabel = '25% SIA (Year 1)';
      } else {
        // Wear & Tear
        allowance = effectiveCost * typeDef.wearAndTearRate;
        allowanceTypeLabel = `${(typeDef.wearAndTearRate * 100).toFixed(1)}% Wear & Tear`;
      }

      totalAllowanceClaimed += allowance;
      const incomeTaxValueEnd = effectiveCost - allowance;

      return {
        ...asset,
        typeDef,
        effectiveCost,
        isCostCapped: Boolean(typeDef.costCap && asset.cost > typeDef.costCap),
        allowance,
        allowanceTypeLabel,
        incomeTaxValueEnd,
        taxSaving: allowance * 0.2472 // @ 24.72% corporate tax rate
      };
    });

    return {
      items: calculatedList,
      totalActualCost,
      totalDeemedCost,
      totalAllowanceClaimed,
      totalTaxSaving: totalAllowanceClaimed * 0.2472
    };
  }, [assets]);

  // Corporate Tax Computation Breakdown
  const corporateTaxSummary = useMemo(() => {
    // Gross Income = Turnover - Exempt Income
    const taxableRevenue = Math.max(0, grossTurnover - exemptIncome);
    // Allowable deductions excluding capital allowances
    // Net profit before tax = taxableRevenue - businessExpenses + nonDeductibleAddbacks - capitalAllowances
    const allowableBusinessExpenses = Math.max(0, businessExpenses);
    const taxableIncomeBeforeAllowances = taxableRevenue - allowableBusinessExpenses + nonDeductibleAddbacks;
    const taxableIncome = Math.max(0, taxableIncomeBeforeAllowances - allowancesSummary.totalAllowanceClaimed);
    
    // Tax computation
    const baseCorporateTax = taxableIncome * taxYearRate;
    const aidsLevy = baseCorporateTax * aidsLevyRate;
    const totalTaxPayable = baseCorporateTax + aidsLevy;
    const effectiveRate = grossTurnover > 0 ? (totalTaxPayable / grossTurnover) * 100 : 0;

    return {
      taxableRevenue,
      taxableIncomeBeforeAllowances,
      taxableIncome,
      baseCorporateTax,
      aidsLevy,
      totalTaxPayable,
      effectiveRate
    };
  }, [grossTurnover, exemptIncome, businessExpenses, nonDeductibleAddbacks, allowancesSummary.totalAllowanceClaimed, taxYearRate, aidsLevyRate]);

  const filteredRules = useMemo(() => {
    if (!rulesSearch.trim()) return TAX_DEDUCTION_RULES;
    const q = rulesSearch.toLowerCase();
    return TAX_DEDUCTION_RULES.filter(
      r => r.item.toLowerCase().includes(q) || r.statutoryRef.toLowerCase().includes(q) || r.explanation.toLowerCase().includes(q)
    );
  }, [rulesSearch]);

  return (
    <div className="space-y-6 pb-12">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-600" />
            <span>Zimbabwe Tax &amp; Capital Allowances Simulator</span>
          </h2>
          <p className="text-xs text-slate-500">
            Interactive computational engine for 4th Schedule Capital Allowances, Corporate Tax schedules, and Sec 15(2)(a) rules.
          </p>
        </div>

        {/* Subtab Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('allowances')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeSubTab === 'allowances' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Capital Allowances (4th Sched)
          </button>
          <button
            onClick={() => setActiveSubTab('company-tax')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeSubTab === 'company-tax' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Corporate Tax Schedule
          </button>
          <button
            onClick={() => setActiveSubTab('rules')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeSubTab === 'rules' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Deductions (Sec 15/16)
          </button>
          <button
            onClick={() => setActiveSubTab('withholding')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeSubTab === 'withholding' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Withholding Taxes
          </button>
        </div>
      </div>

      {/* SUBTAB 1: CAPITAL ALLOWANCES SIMULATOR */}
      {activeSubTab === 'allowances' && (
        <div className="space-y-6">
          {/* Summary KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Total Asset Cost</span>
              <div className="text-xl font-extrabold text-slate-900 mt-1">
                ${allowancesSummary.totalActualCost.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Historical purchase price</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Statutory Deemed Cost</span>
              <div className="text-xl font-extrabold text-indigo-700 mt-1">
                ${allowancesSummary.totalDeemedCost.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">After statutory vehicle caps</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 shadow-xs">
              <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Total Allowances Claimed</span>
              <div className="text-xl font-extrabold text-emerald-700 mt-1">
                ${allowancesSummary.totalAllowanceClaimed.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </div>
              <p className="text-[11px] text-emerald-600/80 mt-0.5">Deductible under Sec 15(2)(c)</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-teal-200/80 bg-teal-50/40 shadow-xs">
              <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider">Estimated Tax Shield Saved</span>
              <div className="text-xl font-extrabold text-teal-700 mt-1">
                ${allowancesSummary.totalTaxSaving.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </div>
              <p className="text-[11px] text-teal-600/80 mt-0.5">Cash tax reduction @ 24.72%</p>
            </div>
          </div>

          {/* Add Asset Form */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Plus className="w-4 h-4 text-emerald-600" />
              <span>Add Asset to Schedule</span>
            </h3>

            <form onSubmit={handleAddAsset} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Asset Description</label>
                <input
                  type="text"
                  placeholder="e.g. Delivery Van, CNC Milling Machine"
                  value={newAssetName}
                  onChange={e => setNewAssetName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Statutory Asset Category</label>
                <select
                  value={newAssetType}
                  onChange={e => {
                    setNewAssetType(e.target.value);
                    const selected = ASSET_TYPES.find(t => t.id === e.target.value);
                    if (selected && !selected.qualifiesForSIA) {
                      setNewAssetMethod('WearAndTear');
                    }
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                >
                  {ASSET_TYPES.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Actual Purchase Cost ($)</label>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={newAssetCost}
                  onChange={e => setNewAssetCost(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Elected Allowance Method</label>
                <select
                  value={newAssetMethod}
                  onChange={e => setNewAssetMethod(e.target.value as 'SIA' | 'WearAndTear')}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                >
                  <option value="SIA">Special Initial Allowance (25% SIA)</option>
                  <option value="WearAndTear">Wear &amp; Tear (Straight Line / Reducing)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Schedule</span>
                </button>
              </div>
            </form>
          </div>

          {/* Asset Allowances Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="px-5 py-3.5 bg-slate-50/70 border-b border-slate-200/80 flex items-center justify-between">
              <span className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                Capital Allowances Schedule (4th Schedule Income Tax Act)
              </span>
              <span className="text-[11px] text-slate-500">
                {allowancesSummary.items.length} Assets in schedule
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/60 text-slate-600 uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="py-2.5 px-4">Asset Name</th>
                    <th className="py-2.5 px-4">Asset Class</th>
                    <th className="py-2.5 px-4 text-right">Actual Cost</th>
                    <th className="py-2.5 px-4 text-right">Deemed Cost</th>
                    <th className="py-2.5 px-4">Method &amp; Rate</th>
                    <th className="py-2.5 px-4 text-right">Allowance Claimed</th>
                    <th className="py-2.5 px-4 text-right">ITV at Year End</th>
                    <th className="py-2.5 px-4 text-right">Tax Saved</th>
                    <th className="py-2.5 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {allowancesSummary.items.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50/70">
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {item.name}
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                          {item.typeDef.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono">
                        ${item.cost.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right font-mono">
                        ${item.effectiveCost.toLocaleString()}
                        {item.isCostCapped && (
                          <span className="block text-[10px] text-amber-600 font-sans font-semibold">
                            (Capped at ${item.typeDef.costCap?.toLocaleString()})
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                          {item.allowanceTypeLabel}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700">
                        ${item.allowance.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">
                        ${item.incomeTaxValueEnd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-teal-700 font-medium">
                        ${item.taxSaving.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleRemoveAsset(item.id)}
                          className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Remove asset"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50 font-bold border-t border-slate-200">
                  <tr>
                    <td colSpan={2} className="py-3 px-4 text-slate-800">Total Statutory Allowances</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-900">${allowancesSummary.totalActualCost.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right font-mono text-indigo-700">${allowancesSummary.totalDeemedCost.toLocaleString()}</td>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-700 text-sm">
                      ${allowancesSummary.totalAllowanceClaimed.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </td>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 px-4 text-right font-mono text-teal-700 text-sm">
                      ${allowancesSummary.totalTaxSaving.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: CORPORATE TAX COMPUTATION */}
      {activeSubTab === 'company-tax' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inputs Column */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>Taxable Income Variables</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Gross Business Turnover / Revenue ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={grossTurnover}
                  onChange={e => setGrossTurnover(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">Total receipts under Sec 8(1)</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Exempt Income ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={exemptIncome}
                  onChange={e => setExemptIncome(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">3rd Schedule exemptions (e.g. local dividends)</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Accounting Operating Expenses ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={businessExpenses}
                  onChange={e => setBusinessExpenses(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">Per audited statement of profit or loss</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Non-Allowable Expenses Add-backs ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={nonDeductibleAddbacks}
                  onChange={e => setNonDeductibleAddbacks(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">Sec 16 (Depreciation, fines, general provisions)</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Corporate Tax Rate (%)
                </label>
                <select
                  value={taxYearRate}
                  onChange={e => setTaxYearRate(parseFloat(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                >
                  <option value={0.24}>24% (Current Standard Corporate Rate)</option>
                  <option value={0.25}>25% (Historic Standard Rate)</option>
                  <option value={0.15}>15% (Special Economic Zone - SEZ)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  AIDS Levy (%)
                </label>
                <select
                  value={aidsLevyRate}
                  onChange={e => setAidsLevyRate(parseFloat(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
                >
                  <option value={0.03}>3% on Corporate Tax Liability</option>
                  <option value={0}>0% (Exempt)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tax Computation Schedule Column */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Formal Zimbabwe Corporate Tax Computation
              </h3>
              <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg">
                Effective Rate: {corporateTaxSummary.effectiveRate.toFixed(2)}%
              </span>
            </div>

            <div className="font-mono text-xs space-y-2.5 text-slate-800">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span>Gross Turnover (Sec 8(1))</span>
                <span className="font-bold">${grossTurnover.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 text-slate-500 border-b border-slate-100">
                <span>Less: Exempt Income (3rd Schedule)</span>
                <span>(${exemptIncome.toLocaleString()})</span>
              </div>

              <div className="flex justify-between py-1.5 font-bold text-indigo-700 border-b border-slate-200">
                <span>Taxable Revenue</span>
                <span>${corporateTaxSummary.taxableRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 text-slate-500">
                <span>Less: Operating Expenses (Per Accounts)</span>
                <span>(${businessExpenses.toLocaleString()})</span>
              </div>

              <div className="flex justify-between py-1.5 text-amber-700">
                <span>Add: Prohibited Deductions (Sec 16 - Depreciation, Fines)</span>
                <span>+${nonDeductibleAddbacks.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 text-emerald-700 font-semibold border-t border-slate-100">
                <span>Less: Capital Allowances (4th Schedule SIA / Wear &amp; Tear)</span>
                <span>(${allowancesSummary.totalAllowanceClaimed.toLocaleString(undefined, { maximumFractionDigits: 2 })})</span>
              </div>

              <div className="flex justify-between py-2.5 bg-slate-100 px-3 rounded-lg text-sm font-bold text-slate-900 border border-slate-200">
                <span>TAXABLE INCOME (ASSESSED LOSS)</span>
                <span className="text-emerald-700">
                  ${corporateTaxSummary.taxableIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex justify-between py-1 text-slate-700">
                  <span>Corporate Income Tax @ {(taxYearRate * 100).toFixed(0)}%</span>
                  <span>${corporateTaxSummary.baseCorporateTax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between py-1 text-slate-700">
                  <span>AIDS Levy @ {(aidsLevyRate * 100).toFixed(0)}% of Tax Liability</span>
                  <span>${corporateTaxSummary.aidsLevy.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between py-3 bg-emerald-600 text-white px-4 rounded-xl text-base font-extrabold shadow-md">
                  <span>TOTAL TAX PAYABLE TO ZIMRA</span>
                  <span>${corporateTaxSummary.totalTaxPayable.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start gap-2">
              <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
              <span>
                <strong>ZIMRA Exam Note:</strong> Under the Quarterly Payment Dates (QPD) system, companies must pay provisional tax in 4 tranches: 10% by 25 March, 25% by 25 June, 30% by 25 September, and 35% by 20 December.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: GENERAL DEDUCTIONS (SEC 15 vs SEC 16) */}
      {activeSubTab === 'rules' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search deduction rules (e.g. depreciation, repairs, pension, fines)..."
                value={rulesSearch}
                onChange={e => setRulesSearch(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
              />
            </div>
            <div className="text-xs text-slate-500">
              Showing {filteredRules.length} rules
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRules.map((rule, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900">{rule.item}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    rule.category === 'Allowable'
                      ? 'bg-emerald-100 text-emerald-800'
                      : rule.category === 'Prohibited'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {rule.category}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-indigo-600 font-semibold">
                  Ref: {rule.statutoryRef}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rule.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: WITHHOLDING TAXES */}
      {activeSubTab === 'withholding' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900">
            Zimbabwe Statutory Withholding Tax Rates Table
          </h3>
          <p className="text-xs text-slate-500">
            Statutory withholding obligations for resident and non-resident payments under the Income Tax Act.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/70 text-slate-700 uppercase font-semibold text-[10px]">
                <tr>
                  <th className="py-2.5 px-4">Transaction / Payment Type</th>
                  <th className="py-2.5 px-4 text-right">Statutory Rate</th>
                  <th className="py-2.5 px-4">Remittance Window</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {WITHHOLDING_TAX_RATES.map((wht, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold text-slate-900">{wht.name}</td>
                    <td className="py-3 px-4 text-right font-bold text-emerald-700 font-mono">{wht.rate}</td>
                    <td className="py-3 px-4 text-slate-500">Within 10 days of end of month</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

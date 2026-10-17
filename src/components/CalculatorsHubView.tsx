import React, { useState } from 'react';
import { TaxCalculatorView } from './TaxCalculatorView';
import { 
  calculatePAYE, 
  generateLeaseSchedule, 
  calculateDeferredTaxSchedule, 
  calculateCVP, 
  calculateVariances,
  DeferredTaxItem 
} from '../data/advancedSolvers';
import { 
  Calculator, 
  Receipt, 
  FileSpreadsheet, 
  TrendingDown, 
  Layers, 
  BarChart3, 
  DollarSign, 
  Percent, 
  Clock, 
  Building2,
  FileCheck2,
  Plus,
  Trash2
} from 'lucide-react';

export const CalculatorsHubView: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<'zimtax' | 'paye' | 'leases' | 'deferred-tax' | 'costing'>('zimtax');

  // --- PAYE STATE ---
  const [annualSalary, setAnnualSalary] = useState<number>(36000);
  const [nssaDeduction, setNssaDeduction] = useState<number>(540);
  const [pensionContrib, setPensionContrib] = useState<number>(1800);
  const [medicalAid, setMedicalAid] = useState<number>(1200);
  const [isElderly, setIsElderly] = useState<boolean>(false);
  const [isBlindOrDisabled, setIsBlindOrDisabled] = useState<boolean>(false);

  const payeResult = calculatePAYE({
    annualSalary,
    nssaDeduction,
    pensionContribution: pensionContrib,
    medicalAidContributions: medicalAid,
    isElderly,
    isBlindOrDisabled
  });

  // --- LEASE STATE ---
  const [leaseAnnualPayment, setLeaseAnnualPayment] = useState<number>(25000);
  const [leaseTerm, setLeaseTerm] = useState<number>(4);
  const [leaseDiscountRate, setLeaseDiscountRate] = useState<number>(0.10);
  const [leaseInAdvance, setLeaseInAdvance] = useState<boolean>(false);

  const leaseResult = generateLeaseSchedule(
    leaseAnnualPayment,
    leaseTerm,
    leaseDiscountRate,
    leaseInAdvance
  );

  // --- DEFERRED TAX STATE ---
  const [dtItems, setDtItems] = useState<DeferredTaxItem[]>([
    { id: '1', name: 'Plant and Machinery (PPE)', carryingAmount: 180000, taxBase: 120000, type: 'Asset' },
    { id: '2', name: 'Motor Vehicles (Commercial)', carryingAmount: 60000, taxBase: 35000, type: 'Asset' },
    { id: '3', name: 'Warranty Provision', carryingAmount: 25000, taxBase: 0, type: 'Liability' },
    { id: '4', name: 'Allowance for Expected Credit Losses', carryingAmount: 15000, taxBase: 0, type: 'Asset' },
    { id: '5', name: 'Prepaid Rent Expense', carryingAmount: 8000, taxBase: 0, type: 'Asset' }
  ]);
  const [dtTaxRate, setDtTaxRate] = useState<number>(0.2472);

  const deferredTaxResult = calculateDeferredTaxSchedule(dtItems, dtTaxRate);

  // --- CVP & VARIANCES STATE ---
  const [sellingPrice, setSellingPrice] = useState<number>(50);
  const [variableCost, setVariableCost] = useState<number>(30);
  const [fixedCosts, setFixedCosts] = useState<number>(80000);
  const [budgetedUnits, setBudgetedUnits] = useState<number>(6000);

  const cvpResult = calculateCVP({
    sellingPricePerUnit: sellingPrice,
    variableCostPerUnit: variableCost,
    totalFixedCosts: fixedCosts,
    budgetedUnits
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Calculator className="w-5 h-5 text-indigo-600" />
            <span>Interactive Financial Solvers &amp; Calculators Hub</span>
          </h2>
          <p className="text-xs text-slate-500">
            Dedicated computational models for ZimTax, PAYE payslips, IFRS 16 lease schedules, IAS 12 deferred tax, and CVP analysis.
          </p>
        </div>

        {/* Calculator Chooser */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveCalculator('zimtax')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeCalculator === 'zimtax' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ZimTax &amp; 4th Sched
          </button>
          <button
            onClick={() => setActiveCalculator('paye')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeCalculator === 'paye' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PAYE &amp; Payslip
          </button>
          <button
            onClick={() => setActiveCalculator('leases')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeCalculator === 'leases' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            IFRS 16 Lease Schedule
          </button>
          <button
            onClick={() => setActiveCalculator('deferred-tax')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeCalculator === 'deferred-tax' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            IAS 12 Deferred Tax
          </button>
          <button
            onClick={() => setActiveCalculator('costing')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              activeCalculator === 'costing' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            CVP &amp; Breakeven
          </button>
        </div>
      </div>

      {/* CALCULATOR 1: ZIMTAX & 4TH SCHEDULE */}
      {activeCalculator === 'zimtax' && <TaxCalculatorView />}

      {/* CALCULATOR 2: PAYE & PAYSLIP */}
      {activeCalculator === 'paye' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inputs */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Receipt className="w-4 h-4 text-emerald-600" />
              <span>Employment Remuneration &amp; Reliefs</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Gross Annual Salary ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={annualSalary}
                  onChange={e => setAnnualSalary(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">Monthly equivalent: ${(annualSalary / 12).toFixed(2)}</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Pension Contributions ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={pensionContrib}
                  onChange={e => setPensionContrib(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">Sec 15(2)(h) allowable deduction</span>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  NSSA Contributions ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={nssaDeduction}
                  onChange={e => setNssaDeduction(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Medical Aid Contributions ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={medicalAid}
                  onChange={e => setMedicalAid(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
                <span className="text-[10px] text-slate-400">Qualifies for 50% statutory tax credit</span>
              </div>

              <div className="pt-2 space-y-2 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isElderly}
                    onChange={e => setIsElderly(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="font-semibold text-slate-700">Elderly Person (Over 55 yrs - $900 Credit)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isBlindOrDisabled}
                    onChange={e => setIsBlindOrDisabled(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="font-semibold text-slate-700">Disabled / Blind Person ($900 Credit)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Payslip & Progressive Band Schedule */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Statutory Zimbabwe PAYE Computation &amp; Payslip
              </h3>
              <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg">
                Effective Tax: {payeResult.effectiveTaxRate.toFixed(1)}%
              </span>
            </div>

            {/* Bracket Breakdown Table */}
            <div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Progressive Tax Band Apportionment
              </span>
              <table className="w-full text-xs font-mono">
                <thead className="bg-slate-100 text-slate-600 text-[10px] uppercase">
                  <tr>
                    <th className="py-1.5 px-3 text-left">Tax Band</th>
                    <th className="py-1.5 px-3 text-right">Taxed Amount</th>
                    <th className="py-1.5 px-3 text-right">Rate</th>
                    <th className="py-1.5 px-3 text-right">Tax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {payeResult.bandBreakdown.map((b, idx) => (
                    <tr key={idx}>
                      <td className="py-1.5 px-3">{b.bandLabel}</td>
                      <td className="py-1.5 px-3 text-right">${b.taxedAmount.toLocaleString()}</td>
                      <td className="py-1.5 px-3 text-right">{(b.rate * 100).toFixed(0)}%</td>
                      <td className="py-1.5 px-3 text-right font-bold text-slate-900">${b.tax.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Credits and Net */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>Gross Income Tax</span>
                <span>${payeResult.grossTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1 text-emerald-700">
                <span>Less: Medical Aid Credit (50%)</span>
                <span>-${payeResult.medicalCredit.toFixed(2)}</span>
              </div>
              {payeResult.elderlyCredit > 0 && (
                <div className="flex justify-between py-1 text-emerald-700">
                  <span>Less: Elderly Person Credit</span>
                  <span>-${payeResult.elderlyCredit.toFixed(2)}</span>
                </div>
              )}
              {payeResult.disabilityCredit > 0 && (
                <div className="flex justify-between py-1 text-emerald-700">
                  <span>Less: Disability Credit</span>
                  <span>-${payeResult.disabilityCredit.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-t border-slate-200">
                <span>Tax After Credits</span>
                <span>${payeResult.taxAfterCredits.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1 text-slate-600">
                <span>Add: 3% AIDS Levy</span>
                <span>+${payeResult.aidsLevy.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2 bg-indigo-50 px-3 rounded-lg text-sm font-bold text-indigo-900 border border-indigo-200">
                <span>ANNUAL PAYE TAX DEDUCTED</span>
                <span>${payeResult.totalPayePayable.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2 bg-emerald-600 text-white px-3 rounded-lg text-sm font-bold shadow-md">
                <span>MONTHLY NET TAKE-HOME PAY</span>
                <span>${payeResult.monthlyTakeHome.toFixed(2)} / month</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 3: IFRS 16 LEASE AMORTIZATION */}
      {activeCalculator === 'leases' && (
        <div className="space-y-6">
          {/* Inputs Panel */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <span>IFRS 16 Lessee Input Parameters</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Annual Lease Payment ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={leaseAnnualPayment}
                  onChange={e => setLeaseAnnualPayment(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Lease Term (Years)
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={leaseTerm}
                  onChange={e => setLeaseTerm(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Incremental Borrowing Rate (IBR %)
                </label>
                <input
                  type="number"
                  min="0.01"
                  max="50"
                  step="0.5"
                  value={leaseDiscountRate * 100}
                  onChange={e => setLeaseDiscountRate((parseFloat(e.target.value) || 1) / 100)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Payment Timing
                </label>
                <select
                  value={leaseInAdvance ? 'advance' : 'arrears'}
                  onChange={e => setLeaseInAdvance(e.target.value === 'advance')}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
                >
                  <option value="arrears">In Arrears (End of Year)</option>
                  <option value="advance">In Advance (Start of Year)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Initial Recognition & Amortization Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Initial Recognition on Commencement Date:
                </h4>
                <div className="font-mono text-xs text-indigo-700 mt-1">
                  Dr Right-of-Use Asset: <strong>${leaseResult.initialROUAsset.toFixed(2)}</strong> | Cr Lease Liability: <strong>${leaseResult.initialLiability.toFixed(2)}</strong>
                </div>
              </div>
              <div className="text-xs text-slate-500">
                Total Interest Expense over term: <strong className="text-rose-700 font-mono">${leaseResult.totalInterest.toFixed(2)}</strong>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-100 text-slate-600 uppercase text-[10px]">
                  <tr>
                    <th className="py-2.5 px-4 font-sans">Year</th>
                    <th className="py-2.5 px-4 text-right">Opening Liability</th>
                    <th className="py-2.5 px-4 text-right">Interest (P&amp;L)</th>
                    <th className="py-2.5 px-4 text-right">Payment</th>
                    <th className="py-2.5 px-4 text-right">Closing Liability</th>
                    <th className="py-2.5 px-4 text-right text-indigo-700">Current Portion</th>
                    <th className="py-2.5 px-4 text-right text-indigo-700">Non-Current</th>
                    <th className="py-2.5 px-4 text-right text-slate-700">ROU Carrying Val</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {leaseResult.schedule.map(row => (
                    <tr key={row.year} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold font-sans">Year {row.year}</td>
                      <td className="py-3 px-4 text-right">${row.openingLiability.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right text-rose-600 font-semibold">+${row.interestExpense.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right text-emerald-600 font-semibold">-${row.payment.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right font-bold">${row.closingLiability.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right text-indigo-700 font-semibold">${row.currentPortion.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right text-indigo-700">${row.nonCurrentPortion.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right font-semibold">${row.rouCarryingAmount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 4: IAS 12 DEFERRED TAX */}
      {activeCalculator === 'deferred-tax' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                IAS 12 Balance Sheet Liability Method Schedule
              </h3>
              <p className="text-xs text-slate-500">
                Computes taxable and deductible temporary differences comparing Carrying Amount (IFRS) vs Tax Base (ZIMRA).
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-600">Statutory Tax Rate:</span>
              <select
                value={dtTaxRate}
                onChange={e => setDtTaxRate(parseFloat(e.target.value))}
                className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold"
              >
                <option value={0.2472}>24.72% (Standard Corporate)</option>
                <option value={0.2575}>25.75% (Historic 25% + AIDS)</option>
              </select>
            </div>
          </div>

          {/* Deferred Tax Summary KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-rose-50/70 border border-rose-200 p-4 rounded-xl">
              <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider">Gross Deferred Tax Liability (DTL)</span>
              <div className="text-xl font-extrabold text-rose-900 mt-1 font-mono">
                ${deferredTaxResult.grossDTL.toFixed(2)}
              </div>
              <p className="text-[10px] text-rose-700 mt-0.5">Taxable differences: ${deferredTaxResult.totalTaxableTempDiff.toLocaleString()}</p>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Gross Deferred Tax Asset (DTA)</span>
              <div className="text-xl font-extrabold text-emerald-900 mt-1 font-mono">
                ${deferredTaxResult.grossDTA.toFixed(2)}
              </div>
              <p className="text-[10px] text-emerald-700 mt-0.5">Deductible differences: ${deferredTaxResult.totalDeductibleTempDiff.toLocaleString()}</p>
            </div>

            <div className={`p-4 rounded-xl border ${
              deferredTaxResult.isNetLiability
                ? 'bg-amber-50/80 border-amber-300 text-amber-900'
                : 'bg-teal-50/80 border-teal-300 text-teal-900'
            }`}>
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {deferredTaxResult.isNetLiability ? 'Net Deferred Tax Liability' : 'Net Deferred Tax Asset'}
              </span>
              <div className="text-xl font-extrabold mt-1 font-mono">
                ${Math.abs(deferredTaxResult.netDeferredTaxLiability).toFixed(2)}
              </div>
              <p className="text-[10px] mt-0.5">Balance Sheet Net Position</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-100 text-slate-600 uppercase text-[10px]">
                  <tr>
                    <th className="py-2.5 px-4 font-sans">Balance Sheet Item</th>
                    <th className="py-2.5 px-4 font-sans">Type</th>
                    <th className="py-2.5 px-4 text-right">Carrying Amount</th>
                    <th className="py-2.5 px-4 text-right">Tax Base</th>
                    <th className="py-2.5 px-4 font-sans text-center">Category</th>
                    <th className="py-2.5 px-4 text-right">Temporary Diff</th>
                    <th className="py-2.5 px-4 text-right">Deferred Tax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {deferredTaxResult.rows.map(row => (
                    <tr key={row.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold font-sans">{row.name}</td>
                      <td className="py-3 px-4 font-sans text-slate-500">{row.type}</td>
                      <td className="py-3 px-4 text-right">${row.carryingAmount.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right">${row.taxBase.toLocaleString()}</td>
                      <td className="py-3 px-4 text-center font-sans">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          row.category === 'Taxable (DTL)' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {row.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-bold">${row.absDifference.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right font-bold text-indigo-700">${row.deferredTaxAmount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 5: CVP & BREAKEVEN */}
      {activeCalculator === 'costing' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900">
              CVP &amp; Breakeven Variables
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Selling Price per Unit ($)</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={sellingPrice}
                  onChange={e => setSellingPrice(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Variable Cost per Unit ($)</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={variableCost}
                  onChange={e => setVariableCost(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Total Fixed Costs ($)</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={fixedCosts}
                  onChange={e => setFixedCosts(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Budgeted Sales Volume (Units)</label>
                <input
                  type="number"
                  min="0"
                  value={budgetedUnits}
                  onChange={e => setBudgetedUnits(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-900"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Breakeven &amp; Profit Analysis (CAC 4105)
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Unit Contribution</span>
                <div className="text-xl font-extrabold text-slate-900 mt-1 font-mono">${cvpResult.unitContribution.toFixed(2)}</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-slate-500 uppercase">C/S Ratio</span>
                <div className="text-xl font-extrabold text-indigo-700 mt-1 font-mono">{(cvpResult.csRatio * 100).toFixed(1)}%</div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl">
                <span className="text-[10px] font-bold text-amber-800 uppercase">Breakeven Units</span>
                <div className="text-xl font-extrabold text-amber-900 mt-1 font-mono">{Math.ceil(cvpResult.breakevenUnits).toLocaleString()}</div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl">
                <span className="text-[10px] font-bold text-emerald-800 uppercase">Margin of Safety</span>
                <div className="text-xl font-extrabold text-emerald-900 mt-1 font-mono">{cvpResult.marginOfSafetyPercent.toFixed(1)}%</div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs space-y-2">
              <div className="flex justify-between py-1">
                <span>Breakeven Revenue Requirement</span>
                <span className="font-bold">${cvpResult.breakevenRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-t border-slate-200">
                <span>Budgeted Contribution ({budgetedUnits} units × ${cvpResult.unitContribution})</span>
                <span>${(budgetedUnits * cvpResult.unitContribution).toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 text-slate-500">
                <span>Less: Total Fixed Costs</span>
                <span>(${fixedCosts.toLocaleString()})</span>
              </div>
              <div className="flex justify-between py-2 bg-emerald-600 text-white px-3 rounded-lg text-sm font-bold shadow-sm">
                <span>PROJECTED NET OPERATING PROFIT</span>
                <span>${cvpResult.budgetedProfit.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

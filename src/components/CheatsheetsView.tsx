import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Scale, 
  BookOpen, 
  Calculator, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';

const CASE_LAWS = [
  {
    name: 'COT v Lever Brothers (1938)',
    court: 'Court of Appeal',
    principle: 'Originating Cause of Gross Income',
    summary: 'Source is the originating cause of the receipt—what the taxpayer does or gives to get the money. If the originating cause is in Zimbabwe, the income is from a Zimbabwean source regardless of where the contract was signed or funds remitted.',
    examApplication: 'Tested whenever a company manufactures goods locally in Zimbabwe and sells or delivers them cross-border to Zambia, Botswana, or South Africa.'
  },
  {
    name: 'Subun v COT (1985)',
    court: 'High Court of Zimbabwe',
    principle: 'General Deductions - Section 15(2)(a)',
    summary: 'Clarified the dual requirements that expenditure must be "actually incurred" and "in the production of income". Losses or expenses must have a direct causal connection with income-earning activities.',
    examApplication: 'Use to evaluate whether legal defense fees, trading loss compensations, or staff training expenses are deductible.'
  },
  {
    name: 'Port Elizabeth Electric Tramway (1936)',
    court: 'South African Appellate Division',
    principle: 'Expenditure Incurred in Production of Income',
    summary: 'Establishes that expenses necessarily attached to or inherent in the performance of income-producing operations are deductible, even if they result from mishaps or minor negligence.',
    examApplication: 'Deductibility of compensation paid to injured workers or accidental transport damage.'
  },
  {
    name: 'Pyott Ltd v CIR (1945)',
    court: 'Appellate Division',
    principle: 'Gross Income & Deposits for Containers',
    summary: 'Deposits received for returnable biscuit tins became the absolute property of the company upon receipt and formed part of gross income. A general provision for refunding customers is NOT deductible.',
    examApplication: 'Container deposits, customer booking advances, and unearned prepayments.'
  },
  {
    name: 'CIR v Delfos (1933)',
    court: 'Appellate Division',
    principle: 'Accrual of Income',
    summary: 'Income accrues to a taxpayer when they become entitled to claim payment. The tax authority may assess on either the "received" or "accrued" basis, whichever occurs first.',
    examApplication: 'Unbilled sales or accounts receivable where cash is received after the tax year end.'
  },
  {
    name: 'COT v Epsoil Ltd (2001)',
    court: 'Supreme Court of Zimbabwe',
    principle: 'Deemed Source vs Multiple Sources',
    summary: 'Where services are rendered partly within and partly outside Zimbabwe, the court allocates or looks to the dominant originating cause to determine taxable source.',
    examApplication: 'Management fees and cross-border consulting services provided by foreign directors.'
  }
];

export const CheatsheetsView: React.FC = () => {
  const [activeSheet, setActiveSheet] = useState<'caselaw' | 'capital-allowances' | 'ifrs-summary' | 'audit-summary'>('caselaw');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs print:hidden">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>Exam Revision Cheatsheets &amp; Case Law Index</span>
          </h2>
          <p className="text-xs text-slate-500">
            High-yield summary sheets for case law, 4th schedule capital allowances, and IFRS standards.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Sheet Selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveSheet('caselaw')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeSheet === 'caselaw' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tax Case Laws
            </button>
            <button
              onClick={() => setActiveSheet('capital-allowances')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeSheet === 'capital-allowances' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Capital Allowances Rates
            </button>
            <button
              onClick={() => setActiveSheet('ifrs-summary')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeSheet === 'ifrs-summary' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              IFRS Summary Table
            </button>
            <button
              onClick={() => setActiveSheet('audit-summary')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeSheet === 'audit-summary' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Audit Direction Table
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Sheet</span>
          </button>
        </div>
      </div>

      {/* CHEATSHEET 1: TAX CASE LAWS */}
      {activeSheet === 'caselaw' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Landmark Zimbabwe Tax Case Law Directory (CAC 4102 / CTA)
              </h3>
              <p className="text-xs text-slate-500">
                Authoritative judicial precedents for gross income, source doctrine, general deductions, and accruals.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
              {CASE_LAWS.length} Key Authorities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CASE_LAWS.map((c, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-extrabold text-slate-900">{c.name}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 shrink-0">
                    {c.court}
                  </span>
                </div>
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  Principle: {c.principle}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {c.summary}
                </p>
                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-600">
                  <strong className="text-slate-800">CTA Application:</strong> {c.examApplication}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CHEATSHEET 2: CAPITAL ALLOWANCE RATES */}
      {activeSheet === 'capital-allowances' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">
              4th Schedule Statutory Capital Allowances Summary Table
            </h3>
            <p className="text-xs text-slate-500">
              Statutory rates, cost caps, and accelerated wear &amp; tear rules under the Zimbabwe Income Tax Act.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-[10px]">
                <tr>
                  <th className="py-2.5 px-4">Asset Class</th>
                  <th className="py-2.5 px-4 text-center">Qualifies for SIA?</th>
                  <th className="py-2.5 px-4 text-right">SIA Rate</th>
                  <th className="py-2.5 px-4 text-right">Wear &amp; Tear Rate</th>
                  <th className="py-2.5 px-4 text-right">Statutory Cost Limit</th>
                  <th className="py-2.5 px-4">Key Exam Rules</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-sans font-bold text-slate-900">Industrial Buildings (Factory, Workshop)</td>
                  <td className="py-3 px-4 text-center font-sans font-bold text-emerald-700">Yes</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">25%</td>
                  <td className="py-3 px-4 text-right">5% on cost</td>
                  <td className="py-3 px-4 text-right font-sans">No limit</td>
                  <td className="py-3 px-4 font-sans text-[11px] text-slate-600">If SIA elected, accelerated wear &amp; tear is 25% for subsequent 3 yrs.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-sans font-bold text-slate-900">Commercial Buildings (Offices, Retail)</td>
                  <td className="py-3 px-4 text-center font-sans font-bold text-rose-700">No</td>
                  <td className="py-3 px-4 text-right text-slate-400">-</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">2.5% on cost</td>
                  <td className="py-3 px-4 text-right font-sans">No limit</td>
                  <td className="py-3 px-4 font-sans text-[11px] text-slate-600">Strictly 2.5% wear &amp; tear; never qualifies for SIA.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-sans font-bold text-slate-900">Staff Housing</td>
                  <td className="py-3 px-4 text-center font-sans font-bold text-emerald-700">Yes</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">25%</td>
                  <td className="py-3 px-4 text-right">5% on cost</td>
                  <td className="py-3 px-4 text-right font-bold text-rose-700">$25,000 / $10,000</td>
                  <td className="py-3 px-4 font-sans text-[11px] text-slate-600">Capped per residential unit constructed by employer.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-sans font-bold text-slate-900">Plant &amp; Machinery</td>
                  <td className="py-3 px-4 text-center font-sans font-bold text-emerald-700">Yes</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">25%</td>
                  <td className="py-3 px-4 text-right">10% reducing</td>
                  <td className="py-3 px-4 text-right font-sans">No limit</td>
                  <td className="py-3 px-4 font-sans text-[11px] text-slate-600">Qualifies for SIA in full; wear and tear on reducing balance.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-sans font-bold text-slate-900">Commercial Vehicles (Trucks, Vans)</td>
                  <td className="py-3 px-4 text-center font-sans font-bold text-emerald-700">Yes</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">25%</td>
                  <td className="py-3 px-4 text-right">20% reducing</td>
                  <td className="py-3 px-4 text-right font-sans">No limit</td>
                  <td className="py-3 px-4 font-sans text-[11px] text-slate-600">Full actual cost qualifies; no passenger restriction.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-sans font-bold text-slate-900">Passenger Motor Vehicles (Sedans, SUVs)</td>
                  <td className="py-3 px-4 text-center font-sans font-bold text-emerald-700">Yes</td>
                  <td className="py-3 px-4 text-right font-bold text-indigo-700">25%</td>
                  <td className="py-3 px-4 text-right">20% reducing</td>
                  <td className="py-3 px-4 text-right font-bold text-rose-700">$10,000 / $25,000</td>
                  <td className="py-3 px-4 font-sans text-[11px] text-slate-600">Deemed cost cap applied to both allowances and scrapping/recoupment!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CHEATSHEET 3: IFRS MASTER SUMMARY */}
      {activeSheet === 'ifrs-summary' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">
              IFRS &amp; IAS Standards Master Cheatsheet
            </h3>
            <p className="text-xs text-slate-500">
              Consolidated quick reference for recognition criteria, measurement bases, and core balance sheet journals.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 text-sm">IFRS 10: Consolidated Financial Statements</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Group Accounts</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Control established via Power + Variable Returns + Linkage. Acquisition Goodwill = Consideration + NCI - Fair Value of Net Identifiable Assets. Eliminate intercompany balances and PURP.
              </p>
              <div className="font-mono text-[11px] text-slate-800 bg-white p-2.5 rounded border border-slate-200">
                PURP Entry (Downstream): Dr Cost of Sales / Group Retained Earnings | Cr Inventory (SFP)
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 text-sm">IFRS 15: Revenue from Contracts with Customers</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Revenue</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                5-Step Model: Contract → Performance Obligations → Price → Relative Standalone Selling Price Allocation → Point in Time vs Over Time satisfaction.
              </p>
              <div className="font-mono text-[11px] text-slate-800 bg-white p-2.5 rounded border border-slate-200">
                Advance Billing Entry: Dr Cash / Receivable | Cr Contract Liability (Deferred Revenue)
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 text-sm">IFRS 16: Leases</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Leases</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                All leases on-balance sheet for lessees. Initial Lease Liability = PV of lease payments. Initial ROU Asset = Liability + Direct Costs. Separate liability into Current vs Non-Current!
              </p>
              <div className="font-mono text-[11px] text-slate-800 bg-white p-2.5 rounded border border-slate-200">
                Commencement Entry: Dr Right-of-Use Asset (PPE) | Cr Lease Liability
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 text-sm">IAS 12: Income Taxes</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Tax</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Temporary Difference = Carrying Amount - Tax Base. DTL arises on accelerated tax allowances or asset revaluation. DTA arises on provisions and tax loss carryforwards. Never discounted!
              </p>
              <div className="font-mono text-[11px] text-slate-800 bg-white p-2.5 rounded border border-slate-200">
                Revaluation DTL Entry: Dr Revaluation Surplus (OCI) | Cr Deferred Tax Liability (SFP)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHEATSHEET 4: AUDIT DIRECTION TABLE */}
      {activeSheet === 'audit-summary' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">
              Audit Direction of Testing &amp; Assertions Cheat Sheet (ISA 500)
            </h3>
            <p className="text-xs text-slate-500">
              How to structure examination answers when describing substantive audit tests and tests of control.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-[10px]">
                <tr>
                  <th className="py-2.5 px-4">Financial Area</th>
                  <th className="py-2.5 px-4">Primary RoMM Risk</th>
                  <th className="py-2.5 px-4">Tested Assertion</th>
                  <th className="py-2.5 px-4">Direction of Testing</th>
                  <th className="py-2.5 px-4">Key Audit Procedure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Revenue / Sales</td>
                  <td className="py-3 px-4 text-rose-700 font-semibold">Overstatement</td>
                  <td className="py-3 px-4 font-bold text-indigo-700">Occurrence</td>
                  <td className="py-3 px-4">Ledger → GDN / Order</td>
                  <td className="py-3 px-4">Sample sales daybook entries backwards to signed Goods Dispatched Notes and customer orders.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Trade Payables</td>
                  <td className="py-3 px-4 text-rose-700 font-semibold">Understatement</td>
                  <td className="py-3 px-4 font-bold text-indigo-700">Completeness</td>
                  <td className="py-3 px-4">GRN / Bank → Ledger</td>
                  <td className="py-3 px-4">Perform search for unrecorded liabilities; inspect post-year-end bank disbursements and unbilled GRNs.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Inventory</td>
                  <td className="py-3 px-4 text-rose-700 font-semibold">Overstatement / NRV</td>
                  <td className="py-3 px-4 font-bold text-indigo-700">Valuation &amp; Existence</td>
                  <td className="py-3 px-4">Sheet-to-floor &amp; Floor-to-sheet</td>
                  <td className="py-3 px-4">Observe physical stock count; compare unit cost to post-year-end selling prices on customer invoices.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900">Property, Plant &amp; Equip</td>
                  <td className="py-3 px-4 text-rose-700 font-semibold">Fictitious assets / Ownership</td>
                  <td className="py-3 px-4 font-bold text-indigo-700">Existence &amp; Rights</td>
                  <td className="py-3 px-4">Asset Register → Physical Inspection</td>
                  <td className="py-3 px-4">Physically inspect asset tag; inspect original title deeds at deeds registry for unencumbered title.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export interface CapitalAllowanceAssetType {
  id: string;
  category: string;
  name: string;
  siaRate: number; // e.g. 0.25 (25%)
  wearAndTearRate: number; // e.g. 0.05 (5%) or 0.20 (20%)
  costCap?: number;
  qualifiesForSIA: boolean;
  notes: string;
}

export const ASSET_TYPES: CapitalAllowanceAssetType[] = [
  {
    id: 'ind-building',
    category: 'Buildings',
    name: 'Industrial Building (Factory, Workshop, Mill)',
    siaRate: 0.25,
    wearAndTearRate: 0.05,
    qualifiesForSIA: true,
    notes: 'Qualifies for 25% SIA in year brought into use. If SIA elected, accelerated wear & tear is 25% for subsequent 3 years. Otherwise 5% wear & tear on cost.'
  },
  {
    id: 'comm-building',
    category: 'Buildings',
    name: 'Commercial Building (Retail, Offices, Bank, Warehouse)',
    siaRate: 0.0,
    wearAndTearRate: 0.025,
    qualifiesForSIA: false,
    notes: 'Does NOT qualify for SIA. 2.5% Wear & Tear on cost per annum if constructed or purchased after designated date.'
  },
  {
    id: 'staff-housing',
    category: 'Buildings',
    name: 'Staff Housing (Designated Residential Units)',
    siaRate: 0.25,
    wearAndTearRate: 0.05,
    costCap: 25000,
    qualifiesForSIA: true,
    notes: 'Cost deemed to be capped per residential unit (statutory limit $25,000 / $10,000 depending on year). Qualifies for SIA if constructed by employer.'
  },
  {
    id: 'farm-improvement',
    category: 'Farming',
    name: 'Farm Improvements (Fencing, Dipping Tanks, Silos, Barns)',
    siaRate: 0.25,
    wearAndTearRate: 0.05,
    qualifiesForSIA: true,
    notes: 'Qualifies for 25% SIA or 5% wear & tear. Excludes farmer personal homestead dwelling.'
  },
  {
    id: 'plant-machinery',
    category: 'Machinery & Equipment',
    name: 'Plant, Machinery & Manufacturing Equipment',
    siaRate: 0.25,
    wearAndTearRate: 0.10,
    qualifiesForSIA: true,
    notes: 'Qualifies for 25% SIA. If Wear & Tear elected, 10% on reducing balance or Commissioner approved straight line.'
  },
  {
    id: 'commercial-vehicle',
    category: 'Motor Vehicles',
    name: 'Commercial Vehicle (Truck, Delivery Van, Heavy Vehicle, Forklift)',
    siaRate: 0.25,
    wearAndTearRate: 0.20,
    qualifiesForSIA: true,
    notes: 'Full cost qualifies for 25% SIA or 20% wear & tear. No deemed passenger cost cap.'
  },
  {
    id: 'passenger-vehicle',
    category: 'Motor Vehicles',
    name: 'Passenger Motor Vehicle (Sedan, Executive Car, SUV)',
    siaRate: 0.25,
    wearAndTearRate: 0.20,
    costCap: 10000,
    qualifiesForSIA: true,
    notes: 'Restricted deemed cost cap of $10,000 (historic) or $25,000 (revised). All allowances and recoupments must be proportioned to deemed cost.'
  },
  {
    id: 'computers-it',
    category: 'IT Equipment',
    name: 'Computers, Servers & IT Peripherals',
    siaRate: 0.25,
    wearAndTearRate: 0.25,
    qualifiesForSIA: true,
    notes: 'Qualifies for SIA 25% or Wear & Tear at 25% - 33.33% reducing balance or straight line.'
  },
  {
    id: 'furniture-fittings',
    category: 'Furniture & Fittings',
    name: 'Office Furniture, Fittings & Loose Tools',
    siaRate: 0.0,
    wearAndTearRate: 0.10,
    qualifiesForSIA: false,
    notes: 'Does not usually qualify for SIA unless classified as articles/utensils in specific qualifying trades; 10% wear & tear on reducing balance.'
  }
];

export interface TaxDeductionRule {
  item: string;
  category: 'Allowable' | 'Prohibited' | 'Subject to Limitation';
  statutoryRef: string;
  explanation: string;
}

export const TAX_DEDUCTION_RULES: TaxDeductionRule[] = [
  {
    item: 'Depreciation & Accounting Amortisation',
    category: 'Prohibited',
    statutoryRef: 'Section 16(1)(d)',
    explanation: 'Accounting depreciation is non-cash and prohibited for tax purposes. Must be added back to accounting profit; replaced by statutory Capital Allowances (4th Schedule).'
  },
  {
    item: 'General Provisions & Contingent Liabilities',
    category: 'Prohibited',
    statutoryRef: 'Section 16(1)(e)',
    explanation: 'Provisions for doubtful debts or warranties are not allowed. Only specific bad debts proved to have become irrecoverable during the tax year (Sec 15(2)(g)) are deductible.'
  },
  {
    item: 'Donations & Gifts',
    category: 'Subject to Limitation',
    statutoryRef: 'Section 15(2)(r)',
    explanation: 'General donations are prohibited. Only donations to the National Scholarship Fund, designated charitable trusts, or Public Health Fund up to statutory caps (e.g. $100,000) are deductible.'
  },
  {
    item: 'Fines, Penalties & Traffic Infringements',
    category: 'Prohibited',
    statutoryRef: 'Section 16(1)(m)',
    explanation: 'Any fine or penalty imposed by law (including tax penalties and road traffic fines) is strictly prohibited as public policy precludes tax relief on illegal acts.'
  },
  {
    item: 'Interest on Business Loans for Income Production',
    category: 'Allowable',
    statutoryRef: 'Section 15(2)(f)',
    explanation: 'Interest incurred on borrowed capital employed in the production of taxable gross income is fully deductible (subject to Thin Capitalisation debt-to-equity 3:1 rules under Sec 16(1)(q)).'
  },
  {
    item: 'Pension Contributions (Employer & Employee)',
    category: 'Subject to Limitation',
    statutoryRef: 'Section 15(2)(h) & (i)',
    explanation: 'Allowable up to statutory limits per employee per annum (e.g. $5,400 or specified ZWL/USD equivalencies).'
  },
  {
    item: 'Repairs and Maintenance',
    category: 'Allowable',
    statutoryRef: 'Section 15(2)(b)',
    explanation: 'Actual cost of repairs to property, plant, or premises occupied or used for business purposes. Does not include capital improvements or alterations.'
  },
  {
    item: 'Lease Premiums Amortisation',
    category: 'Allowable',
    statutoryRef: 'Section 15(2)(d)',
    explanation: 'Premium paid for the right of use of land, premises, or plant is allowed as a deduction spread evenly over the lease term or 10 years, whichever is shorter.'
  }
];

export const WITHHOLDING_TAX_RATES = [
  { name: 'Non-Resident Shareholders Tax (NRST) on Listed Dividends', rate: '10%' },
  { name: 'Non-Resident Shareholders Tax (NRST) on Unlisted Dividends', rate: '15%' },
  { name: 'Non-Resident Tax on Fees (NRTF)', rate: '15%' },
  { name: 'Non-Resident Tax on Royalties (NRTR)', rate: '15%' },
  { name: 'Withholding Tax on Tenders / Contracts without Tax Clearance (ITF 263)', rate: '30% (previously 10% / 5%)' },
  { name: 'Intermediary Money Transfer Tax (IMTT)', rate: '2% on transactions (with statutory exemptions)' },
  { name: 'Automated Financial Transactions Tax (AFTT)', rate: 'Statutory fixed rate per withdrawal' }
];

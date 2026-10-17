export interface Flashcard {
  id: string;
  courseId: 'cac-4101' | 'cac-4102' | 'cac-4103' | 'cac-4202' | 'cac-4105' | 'cta-icaz';
  category: string;
  front: string;
  back: string;
  citation: string;
  highYieldTip?: string;
}

export const FLASHCARDS_DATA: Flashcard[] = [
  // --- TAXATION & ZIMTAX ---
  {
    id: 'fc-tax-01',
    courseId: 'cac-4102',
    category: 'Source of Income',
    front: 'What is the originating cause test for source of gross income?',
    back: 'Per Lever Brothers (1938) and COT v Epsoil, source is not the place where the contract is signed or money paid, but the "originating cause" of the receipt—namely, the activities or capital employed by the taxpayer to generate the income.',
    citation: 'Income Tax Act Sec 8(1) & Lever Brothers (1938)',
    highYieldTip: 'If manufacturing occurs in Zimbabwe, source is Zimbabwe even if the contract was signed in Zambia and goods delivered to Lusaka.'
  },
  {
    id: 'fc-tax-02',
    courseId: 'cac-4102',
    category: 'General Deductions',
    front: 'What are the core requirements of Section 15(2)(a) General Deductions Formula?',
    back: 'Expenditure and losses must be: (1) actually incurred, (2) by the taxpayer, (3) during the year of assessment, (4) in the production of income, and (5) not of a capital nature (Subun v COT / Port Elizabeth Electric Tramway).',
    citation: 'Section 15(2)(a) Income Tax Act [Chapter 23:06]',
    highYieldTip: 'Anticipated or contingent losses (e.g. general provisions) are NOT deductible because they have not been "actually incurred".'
  },
  {
    id: 'fc-tax-03',
    courseId: 'cac-4102',
    category: 'Capital Allowances',
    front: 'What is the statutory restriction on passenger motor vehicles for capital allowances?',
    back: 'Cost is deemed to be capped at the statutory limit (e.g. $10,000 historic / $25,000 revised). All allowances (SIA, Wear & Tear) and recoupments upon disposal must be restricted proportionately to deemed cost.',
    citation: '4th Schedule, Paragraph 1(1) Income Tax Act',
    highYieldTip: 'Commercial vehicles (delivery trucks, forklifts) have NO cost cap; only passenger sedans/SUVs are capped.'
  },
  {
    id: 'fc-tax-04',
    courseId: 'cac-4102',
    category: 'Prohibited Deductions',
    front: 'Why is accounting depreciation strictly prohibited for tax purposes?',
    back: 'Under Section 16(1)(d), accounting depreciation is non-cash and depends on managerial discretion. It must be added back in full on the tax computation and replaced by statutory capital allowances (4th Schedule).',
    citation: 'Section 16(1)(d) Income Tax Act',
    highYieldTip: 'Always add back accounting depreciation to profit before tax on the very first adjustment line.'
  },
  {
    id: 'fc-tax-05',
    courseId: 'cac-4102',
    category: 'Special Sectors',
    front: 'How is livestock valued for farming tax under the 2nd Schedule?',
    back: 'Farmers may elect: (1) Standard Value (fixed statutory deemed values per head of cattle/sheep), or (2) Fixed Standard Value approved by ZIMRA. Closing livestock at standard value is added to gross income, and opening livestock is deducted.',
    citation: '2nd Schedule, Paragraphs 1–9 Income Tax Act',
    highYieldTip: 'Livestock standard value is normally well below market value, which effectively defers tax until actual slaughter or sale.'
  },
  {
    id: 'fc-tax-06',
    courseId: 'cac-4102',
    category: 'Thin Capitalisation',
    front: 'What is the Thin Capitalisation debt-to-equity ratio rule under Section 16(1)(q)?',
    back: 'If the debt-to-equity ratio exceeds 3:1 in respect of foreign debt or loans from controlling shareholders, interest incurred on the excess portion of debt is disallowed as a deduction and deemed to be a dividend.',
    citation: 'Section 16(1)(q) Income Tax Act',
    highYieldTip: 'Calculate: Excess Debt = Total Debt - (3 × Equity). Excess Interest % disallowed = Excess Debt / Total Debt.'
  },

  // --- IFRS & FINANCIAL REPORTING ---
  {
    id: 'fc-ifrs-01',
    courseId: 'cac-4101',
    category: 'IFRS 10 Consolidation',
    front: 'What are the 3 mandatory criteria to establish "Control" under IFRS 10?',
    back: 'An investor controls an investee if and only if it has: (1) Power over the investee (existing rights to direct relevant activities), (2) Exposure, or rights, to variable returns from involvement, and (3) The ability to use its power to affect those returns.',
    citation: 'IFRS 10 Paragraphs 5–8',
    highYieldTip: 'Control can exist even with less than 50% voting rights through de facto control or contractual veto powers.'
  },
  {
    id: 'fc-ifrs-02',
    courseId: 'cac-4101',
    category: 'IFRS 15 Revenue',
    front: 'What is the 5-Step Model for revenue recognition under IFRS 15?',
    back: 'Step 1: Identify contract with customer.\nStep 2: Identify performance obligations.\nStep 3: Determine transaction price.\nStep 4: Allocate transaction price to obligations (via relative standalone selling prices).\nStep 5: Recognise revenue when/as obligation is satisfied.',
    citation: 'IFRS 15 Paragraph IN7',
    highYieldTip: 'Bundled discounts must be allocated proportionately across ALL distinct performance obligations based on Standalone Selling Prices.'
  },
  {
    id: 'fc-ifrs-03',
    courseId: 'cac-4101',
    category: 'IFRS 16 Leases',
    front: 'How is the Right-of-Use (ROU) Asset measured at lease commencement?',
    back: 'Initial ROU Asset = Lease Liability (PV of future payments) + Initial direct costs incurred by lessee + Upfront payments made at or before commencement + Estimated dismantling/restoration costs - Lease incentives received.',
    citation: 'IFRS 16 Paragraph 24',
    highYieldTip: 'ROU asset is depreciated straight-line over shorter of lease term or useful life (unless ownership transfers at end).'
  },
  {
    id: 'fc-ifrs-04',
    courseId: 'cac-4101',
    category: 'IAS 12 Income Taxes',
    front: 'What is the fundamental difference between Taxable vs Deductible Temporary Differences?',
    back: 'Taxable Temporary Difference (Carrying Amount > Tax Base of Asset) results in future taxable amounts, creating a Deferred Tax Liability (DTL). Deductible Temporary Difference (Carrying Amount < Tax Base of Asset) creates a Deferred Tax Asset (DTA).',
    citation: 'IAS 12 Paragraph 5',
    highYieldTip: 'Deferred tax arising from asset revaluation (IAS 16) is charged to OCI (Revaluation Surplus), NOT to Profit or Loss.'
  },
  {
    id: 'fc-ifrs-05',
    courseId: 'cac-4101',
    category: 'Consolidation PURP',
    front: 'How does Upstream vs Downstream intercompany sales affect NCI?',
    back: 'Downstream (Parent sells to Sub): Unrealised profit is in Parent records; 100% PURP is eliminated against Group Retained Earnings (NCI is NOT affected). Upstream (Sub sells to Parent): Unrealised profit is in Sub records; PURP is split between Group Retained Earnings and NCI based on shareholding %.',
    citation: 'IFRS 10 Paragraph B86',
    highYieldTip: 'Always check who sold the goods! Upstream PURP reduces Sub profit and therefore reduces NCI share of profit.'
  },

  // --- AUDITING & ASSURANCE ---
  {
    id: 'fc-aud-01',
    courseId: 'cac-4103',
    category: 'Audit Assertions',
    front: 'What are the assertions for Account Balances at year-end under ISA 315?',
    back: '1. Existence (assets/liabilities physically exist)\n2. Rights & Obligations (entity legally holds or controls rights)\n3. Completeness (all balances recorded)\n4. Valuation & Allocation (recorded at appropriate amounts per IFRS).',
    citation: 'ISA 315 (Revised) Paragraph A190',
    highYieldTip: 'Receivables circularisation primarily tests Existence and Rights, but does NOT test Valuation (solvency of debtor).'
  },
  {
    id: 'fc-aud-02',
    courseId: 'cac-4103',
    category: 'Materiality',
    front: 'What is Performance Materiality and why is it set lower than Overall Materiality?',
    back: 'Under ISA 320, performance materiality (typically 50%–75% of planning materiality) is set lower to reduce the probability that the aggregate of uncorrected and undetected misstatements exceeds overall materiality for the financial statements as a whole.',
    citation: 'ISA 320 Paragraph 9 & 11',
    highYieldTip: 'Higher assessed risk of material misstatement = lower performance materiality percentage (e.g. 50%).'
  },
  {
    id: 'fc-aud-03',
    courseId: 'cac-4103',
    category: 'Audit Opinions',
    front: 'When is an Adverse Opinion issued vs a Disclaimer of Opinion?',
    back: 'Adverse Opinion (ISA 705): Auditor has obtained sufficient appropriate evidence, but misstatements are BOTH material AND pervasive. Disclaimer of Opinion: Auditor was UNABLE to obtain sufficient appropriate evidence, and possible undetected misstatements could be BOTH material AND pervasive.',
    citation: 'ISA 705 (Revised) Paragraphs 8–9',
    highYieldTip: 'If misstatement is material but NOT pervasive, a Qualified ("except for") opinion is issued.'
  },
  {
    id: 'fc-aud-04',
    courseId: 'cac-4103',
    category: 'CPC Ethics',
    front: 'What is the Self-Review Threat and what is an example?',
    back: 'The threat that an audit team will not appropriately evaluate the results of a previous judgment made or service performed by themselves. Example: Preparing accounting records, tax calculations, or internal audit work for an audit client.',
    citation: 'IESBA Code of Ethics Section 120',
    highYieldTip: 'Providing bookkeeping services to a Public Interest Entity (PIE) audit client is strictly prohibited with NO safeguards allowed.'
  },

  // --- ACCOUNTING INFORMATION SYSTEMS ---
  {
    id: 'fc-ais-01',
    courseId: 'cac-4202',
    category: 'COSO Framework',
    front: 'What are the 5 components of the COSO Internal Control Framework?',
    back: '1. Control Environment (tone at the top)\n2. Risk Assessment (identifying and evaluating risks)\n3. Control Activities (policies, segregation of duties, approvals)\n4. Information & Communication (reliable reporting channels)\n5. Monitoring Activities (ongoing evaluations & internal audit).',
    citation: 'COSO Internal Control Integrated Framework (2013)',
    highYieldTip: 'Remember the acronym CRIME: Control environment, Risk assessment, Info/communication, Monitoring, Existing control activities.'
  },
  {
    id: 'fc-ais-02',
    courseId: 'cac-4202',
    category: 'Expenditure Cycle',
    front: 'What is a 3-Way Match in an automated expenditure cycle?',
    back: 'Automated verification matching: (1) Purchase Order (authorisation & agreed price), (2) Receiving Report / GRN (proof of physical receipt & quantities), and (3) Vendor Invoice (billed amount). Payment is blocked until all 3 match.',
    citation: 'AIS Chapter 5 Expenditure Cycle',
    highYieldTip: 'Eliminates phantom payments and prevents overbilling or paying for goods not yet delivered.'
  }
];

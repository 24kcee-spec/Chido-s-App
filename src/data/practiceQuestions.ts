export interface PracticeQuestion {
  id: string;
  courseId: 'cac-4101' | 'cac-4102' | 'cac-4103' | 'cac-4202' | 'cac-4105' | 'cta-icaz';
  topic: string;
  difficulty: 'Foundation' | 'Intermediate' | 'CTA Exam Level';
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  statutoryOrStandardRef: string;
  detailedCalculation?: string;
}

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  // --- TAXATION QUESTIONS ---
  {
    id: 'q-tax-01',
    courseId: 'cac-4102',
    topic: 'Gross Income & Source Principle',
    difficulty: 'Intermediate',
    question: 'A company resident in Harare entered into a contract negotiated and signed in Lusaka, Zambia to supply machinery fabricated in Harare to a Zambian copper mine. Under Zimbabwe tax law (Income Tax Act Sec 8(1) and the leading case Lever Brothers), what is the tax source of this income?',
    options: [
      { label: 'A', text: 'Zambia, because the contract was executed and final delivery occurred outside Zimbabwe.' },
      { label: 'B', text: 'Zimbabwe, because the originating cause of the income was the manufacturing activity carried out in Harare.' },
      { label: 'C', text: 'Exempt from tax in both jurisdictions under the SADC double taxation model treaty.' },
      { label: 'D', text: 'Deemed source only if the funds are remitted to a Zimbabwean bank account.' }
    ],
    correctAnswer: 'B',
    explanation: 'Under the landmark case Lever Brothers (1938) and COT v Epsoil, the test of source is determining the "originating cause" of the income—what the taxpayer did to earn the money. Since the manufacturing/fabrication activities took place in Harare, the originating cause is situated in Zimbabwe, making the receipts gross income from a Zimbabwean source.',
    statutoryOrStandardRef: 'Section 8(1) Income Tax Act [Chapter 23:06] & Lever Bros Case'
  },
  {
    id: 'q-tax-02',
    courseId: 'cac-4102',
    topic: 'Capital Allowances (Passenger Motor Vehicle Cap)',
    difficulty: 'CTA Exam Level',
    question: 'In year 1, Apex Ltd purchased a luxury executive passenger sedan for the Managing Director for $60,000 cash and brought it into use immediately. The statutory deemed cost limit for passenger motor vehicles is $10,000. If the company elects the 25% Special Initial Allowance (SIA), what is the allowable SIA deduction in Year 1?',
    options: [
      { label: 'A', text: '$15,000 (25% of actual cost $60,000)' },
      { label: 'B', text: '$2,500 (25% of statutory deemed cost cap $10,000)' },
      { label: 'C', text: '$2,000 (20% wear and tear on $10,000)' },
      { label: 'D', text: 'Zero, because passenger motor vehicles are prohibited from qualifying for SIA.' }
    ],
    correctAnswer: 'B',
    explanation: 'Passenger motor vehicles are defined under the 4th Schedule and subject to a statutory deemed cost limit (e.g., $10,000). When SIA is elected, the 25% allowance is computed strictly on the deemed cost limit: 25% × $10,000 = $2,500. Any cost incurred exceeding the statutory cap is ignored for capital allowance purposes.',
    statutoryOrStandardRef: '4th Schedule, Paragraph 1(1) & Section 15(2)(c)',
    detailedCalculation: 'Deemed Cost: $10,000\nSIA Rate: 25%\nAllowable SIA: $10,000 × 25% = $2,500\nIncome tax deduction allowable = $2,500'
  },
  {
    id: 'q-tax-03',
    courseId: 'cac-4102',
    topic: 'General Deductions & Section 16 Prohibitions',
    difficulty: 'Intermediate',
    question: 'Which of the following expenditures incurred by a manufacturing business during the tax year is FULLY DEDUCTIBLE under Section 15(2)(a) of the Income Tax Act?',
    options: [
      { label: 'A', text: 'Depreciation charge of $45,000 on plant and equipment calculated under IAS 16.' },
      { label: 'B', text: 'General provision of $12,000 for warranties on goods sold during the year.' },
      { label: 'C', text: 'Legal fees of $8,000 incurred to defend an existing business trading license against cancellation.' },
      { label: 'D', text: 'A traffic and safety fine of $1,500 imposed by the municipal council on company delivery trucks.' }
    ],
    correctAnswer: 'C',
    explanation: 'Legal fees incurred to preserve and defend existing business capital assets or trading rights are revenue in nature and incurred in the production of income, satisfying Section 15(2)(a). Depreciation is prohibited by Sec 16(1)(d), general warranty provisions are non-actualized and prohibited by Sec 16(1)(e), and legal fines are barred under Sec 16(1)(m).',
    statutoryOrStandardRef: 'Section 15(2)(a) vs Section 16(1) Prohibitions'
  },

  // --- IFRS / FINANCIAL REPORTING QUESTIONS ---
  {
    id: 'q-ifrs-01',
    courseId: 'cac-4101',
    topic: 'IFRS 3 & IFRS 10 (Goodwill on Acquisition)',
    difficulty: 'CTA Exam Level',
    question: 'Parent acquired an 80% interest in Sub for $800,000 cash. At acquisition, Sub\'s identifiable net assets had a book value of $600,000, and fair value adjustments were: PPE undervalued by $100,000 (tax rate 25%). Parent measures Non-Controlling Interest (NCI) at fair value, which was determined to be $190,000. What is the Goodwill recognised on consolidation under the Full Goodwill Method?',
    options: [
      { label: 'A', text: '$240,000' },
      { label: 'B', text: '$315,000' },
      { label: 'C', text: '$290,000' },
      { label: 'D', text: '$300,000' }
    ],
    correctAnswer: 'B',
    explanation: 'Goodwill = Consideration transferred ($800,000) + Fair Value of NCI ($190,000) - Fair Value of Net Identifiable Assets.\nNet assets at book value = $600,000.\nFair value uplift on PPE = +$100,000.\nDeferred tax liability on PPE uplift = 25% × $100,000 = ($25,000).\nFair value of net identifiable assets = $600,000 + $100,000 - $25,000 = $675,000.\nGoodwill = $800,000 + $190,000 - $675,000 = $315,000.',
    statutoryOrStandardRef: 'IFRS 3 Business Combinations & IAS 12',
    detailedCalculation: 'Consideration: $800,000\n+ NCI Fair Value: $190,000\nTotal Value: $990,000\nLess FV Net Assets: ($675,000) [600k + 100k - 25k DTL]\n= Full Goodwill: $315,000'
  },
  {
    id: 'q-ifrs-02',
    courseId: 'cac-4101',
    topic: 'IFRS 15 (5-Step Revenue Model)',
    difficulty: 'Intermediate',
    question: 'A telecom provider enters into a 24-month contract offering a customer a "free" smartphone and monthly voice/data services for $50/month. The smartphone has a standalone selling price (SSP) of $400, and the standalone monthly plan costs $40/month ($960 for 24 months). Under IFRS 15, how much revenue is recognized on day 1 upon delivering the smartphone?',
    options: [
      { label: 'A', text: '$0, because the contract advertises the smartphone as "free".' },
      { label: 'B', text: '$400, the standalone selling price of the smartphone.' },
      { label: 'C', text: '$352.94, based on relative standalone selling price allocation.' },
      { label: 'D', text: '$1,200, recognizing the total contract value immediately.' }
    ],
    correctAnswer: 'C',
    explanation: 'Total transaction price over 24 months = 24 × $50 = $1,200.\nTotal standalone selling prices = Phone $400 + Network service $960 (24 × $40) = $1,360.\nRelative SSP allocation to Phone = ($400 / $1,360) × $1,200 = $352.94.\nOn Day 1 upon physical delivery of handset: Dr Contract Asset $352.94, Cr Revenue $352.94.',
    statutoryOrStandardRef: 'IFRS 15 paragraphs 73–86 (Allocation of Transaction Price)'
  },
  {
    id: 'q-ifrs-03',
    courseId: 'cac-4101',
    topic: 'IFRS 16 (Lease Accounting for Lessees)',
    difficulty: 'Intermediate',
    question: 'On 1 January 2024, Delta Ltd leases a machine for 4 years with annual lease payments of $20,000 payable at the end of each year. Delta\'s incremental borrowing rate is 10%. (Present value of $1 annuity for 4 years at 10% is 3.1699). What is the initial lease liability recognized on 1 January 2024?',
    options: [
      { label: 'A', text: '$80,000 (nominal total payments)' },
      { label: 'B', text: '$63,398 (present value of lease payments)' },
      { label: 'C', text: '$20,000 (first year rental)' },
      { label: 'D', text: 'Zero, operating leases remain off-balance sheet.' }
    ],
    correctAnswer: 'B',
    explanation: 'Under IFRS 16 paragraph 26, at commencement the lessee measures the lease liability at the present value of the lease payments that are not paid at that date: PV = $20,000 × 3.1699 = $63,398. Delta records: Dr Right-of-Use Asset $63,398; Cr Lease Liability $63,398.',
    statutoryOrStandardRef: 'IFRS 16 Leases paragraph 26'
  },

  // --- AUDITING & ASSURANCE QUESTIONS ---
  {
    id: 'q-aud-01',
    courseId: 'cac-4103',
    topic: 'Financial Statement Assertions',
    difficulty: 'Foundation',
    question: 'An auditor selects a sample of shipping documents (Goods Dispatched Notes) recorded during the final week of the financial year and traces them forward to sales invoices and the sales day book. Which assertion is being primarily tested?',
    options: [
      { label: 'A', text: 'Occurrence' },
      { label: 'B', text: 'Completeness' },
      { label: 'C', text: 'Rights and Obligations' },
      { label: 'D', text: 'Valuation and Allocation' }
    ],
    correctAnswer: 'B',
    explanation: 'Direction of testing is critical in auditing! Tracing from source documents (shipping notes) forward to the accounting records (sales journal) tests for COMPLETENESS (verifying that all goods dispatched were actually billed and recorded). Conversely, testing backwards from the ledger to shipping documents tests for OCCURRENCE (verifying recorded sales are not fictitious).',
    statutoryOrStandardRef: 'ISA 500 Audit Evidence & Financial Statement Assertions'
  },
  {
    id: 'q-aud-02',
    courseId: 'cac-4103',
    topic: 'Code of Professional Conduct (CPC) Ethics',
    difficulty: 'Intermediate',
    question: 'A chartered accounting firm is auditing a listed commercial bank. The audit partner has had their home mortgage financed by the same bank on normal commercial terms and standard rates available to general bank customers. What ethical threat exists and what safeguard is required?',
    options: [
      { label: 'A', text: 'Severe self-interest threat requiring mandatory resignation from the audit firm.' },
      { label: 'B', text: 'Advocacy threat requiring the audit partner to publicly defend the bank credit ratings.' },
      { label: 'C', text: 'Self-interest threat, but because the loan was granted under normal commercial lending terms and procedures, it does not create a threat to independence that cannot be reduced to an acceptable level.' },
      { label: 'D', text: 'Familiarity threat that requires cooling off for 5 years.' }
    ],
    correctAnswer: 'C',
    explanation: 'Under the IESBA Code of Ethics (CPC), a loan or guarantee from an audit client that is a bank does not compromise independence provided it is made under normal lending procedures, terms, and requirements (e.g. standard market interest rate and customary security).',
    statutoryOrStandardRef: 'IESBA Code of Ethics Section 511 (Loans and Guarantees)'
  },
  {
    id: 'q-aud-03',
    courseId: 'cac-4103',
    topic: 'Audit Planning & Materiality (ISA 320)',
    difficulty: 'Intermediate',
    question: 'For an entity with Profit Before Tax (PBT) of $2,000,000, Revenue of $40,000,000, and Total Assets of $25,000,000, the engagement partner selects PBT as the benchmark and sets planning materiality at 5% of PBT ($100,000). What is the appropriate range for Performance Materiality under ISA 320?',
    options: [
      { label: 'A', text: '$100,000 to $120,000' },
      { label: 'B', text: '$50,000 to $75,000 (typically 50% to 75% of overall materiality)' },
      { label: 'C', text: '$5,000 (clearly trivial threshold)' },
      { label: 'D', text: '$1,000,000 (50% of PBT)' }
    ],
    correctAnswer: 'B',
    explanation: 'Under ISA 320, performance materiality is set at an amount lower than overall materiality to reduce to an appropriately low level the probability that aggregate uncorrected and undetected misstatements exceed materiality. Firm methodology typically sets performance materiality between 50% and 75% of planning materiality ($50,000 to $75,000 in this case).',
    statutoryOrStandardRef: 'ISA 320 Materiality in Planning and Performing an Audit'
  },

  // --- AIS QUESTIONS ---
  {
    id: 'q-ais-01',
    courseId: 'cac-4202',
    topic: 'Expenditure Cycle & Segregation of Duties',
    difficulty: 'Intermediate',
    question: 'In an automated Accounting Information System, which segregation of duties is MOST CRITICAL to prevent unauthorized disbursements and fraudulent vendor payments?',
    options: [
      { label: 'A', text: 'Separation of sales order entry from customer credit authorization.' },
      { label: 'B', text: 'Separation of authority to approve new vendors / invoices from the authority to sign checks or disburse electronic funds.' },
      { label: 'C', text: 'Separation of the general ledger clerk from inventory warehouse staff.' },
      { label: 'D', text: 'Separation of systems analyst from database administrator.' }
    ],
    correctAnswer: 'B',
    explanation: 'Separating the authorization function (approving vendors and purchase invoices) from the custody function (signing checks, releasing bank EFTs) prevents employees from creating phantom vendors, submitting bogus invoices, and paying themselves.',
    statutoryOrStandardRef: 'COSO Internal Control Integrated Framework - Control Activities'
  }
];

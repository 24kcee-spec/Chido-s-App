export interface CourseInfo {
  id: string;
  code: string;
  title: string;
  level: string;
  department: string;
  description: string;
  units: {
    unitNumber: number;
    title: string;
    description: string;
    keyStandardsOrActs?: string[];
  }[];
  examPattern: string;
  color: string;
  badge: string;
}

export const COURSES_DATA: CourseInfo[] = [
  {
    id: 'cac-4101',
    code: 'CAC 4101 / CAC 4201',
    title: 'Advanced Financial Reporting & IFRS',
    level: 'Part IV / Honours / CTA L1 & L2',
    department: 'Department of Accounting',
    description: 'Mastery of International Financial Reporting Standards (IFRS), International Accounting Standards (IAS), International Public Sector Accounting Standards (IPSAS), complex business combinations, and consolidated financial statements.',
    examPattern: '3-hour examination featuring complex group consolidation scenarios, standard applications, and financial statement disclosures.',
    color: 'from-blue-600 to-indigo-700',
    badge: 'Core Financial Reporting',
    units: [
      {
        unitNumber: 1,
        title: 'Group Financial Statements & Business Combinations',
        description: 'IFRS 10 Consolidated Financial Statements, IFRS 3 Business Combinations, IAS 28 Investments in Associates & Joint Ventures, NCI fair value vs proportionate share, and intra-group elimination.',
        keyStandardsOrActs: ['IFRS 10', 'IFRS 3', 'IAS 28', 'IFRS 11', 'IFRS 12']
      },
      {
        unitNumber: 2,
        title: 'Revenue Recognition & Leases',
        description: 'IFRS 15 5-Step Model for revenue from contracts with customers, contract assets/liabilities, warranties, and IFRS 16 lease accounting for lessees (ROU asset & liability) and lessors.',
        keyStandardsOrActs: ['IFRS 15', 'IFRS 16']
      },
      {
        unitNumber: 3,
        title: 'Non-Current Assets, Borrowing Costs & Impairment',
        description: 'IAS 16 Property, Plant and Equipment (revaluation model vs cost), IAS 23 Borrowing Costs, IAS 36 Impairment of Assets (cash-generating units, value in use), IAS 38 Intangibles, and IAS 40 Investment Property.',
        keyStandardsOrActs: ['IAS 16', 'IAS 23', 'IAS 36', 'IAS 38', 'IAS 40', 'IFRS 5']
      },
      {
        unitNumber: 4,
        title: 'Income Taxes & Employee Benefits',
        description: 'IAS 12 Income Taxes (current tax, deferred tax assets and liabilities, temporary differences, tax base vs carrying amount) and related party disclosures under IAS 24.',
        keyStandardsOrActs: ['IAS 12', 'IAS 24', 'IAS 19']
      },
      {
        unitNumber: 5,
        title: 'Public Sector Accounting & IPSAS',
        description: 'IPSAS 1 Presentation of Financial Statements, IPSAS 12 Inventories, public sector financial performance, fund accounting, and government grant disclosures (IAS 20 / IPSAS 23).',
        keyStandardsOrActs: ['IPSAS 1', 'IPSAS 12', 'IPSAS 23', 'IAS 20']
      }
    ]
  },
  {
    id: 'cac-4102',
    code: 'CAC 4102 & CTA ZimTax',
    title: 'Taxation & Tax Law Practice',
    level: 'Part IV / ICAZ CTA Level 1 & 2',
    department: 'Department of Accounting / ICAZ',
    description: 'Zimbabwe Tax Law and Practice governed by the Income Tax Act [Chapter 23:06], Finance Act, and Capital Gains Tax Act. Covering Gross Income, Capital Allowances, Farming, Mining, Withholding Taxes, and Corporate Tax Computations.',
    examPattern: 'Comprehensive computational & case-law based papers testing practical tax advisory, statutory allowances, and compliance schedules.',
    color: 'from-emerald-600 to-teal-700',
    badge: 'Statutory Tax Law',
    units: [
      {
        unitNumber: 1,
        title: 'Gross Income & General Deductions Formula',
        description: 'Section 8(1) gross income definition, source doctrine, deemed source, capital vs revenue nature, Section 15(2)(a) general deductions test, and Section 16 prohibited deductions.',
        keyStandardsOrActs: ['Income Tax Act Sec 8(1)', 'Sec 15(2)(a)', 'Sec 16', '3rd Schedule']
      },
      {
        unitNumber: 2,
        title: 'Capital Allowances & Leases',
        description: '4th Schedule Capital Allowances: Special Initial Allowance (SIA 25%), Wear & Tear allowances, Accelerated Wear & Tear, Deemed costs on passenger vehicles, Scrapping allowance, and Recoupment.',
        keyStandardsOrActs: ['4th Schedule', 'Sec 15(2)(c)', 'Lease Premiums Sec 8(1)(d)']
      },
      {
        unitNumber: 3,
        title: 'Specialized Tax Sectors: Farming & Mining',
        description: 'Farming valuations (standard values, livestock, growing crops), farm improvements, development expenditure, drought relief, and mining redemption allowances & capital expenditure recoupment.',
        keyStandardsOrActs: ['2nd Schedule (Farming)', '5th Schedule (Mining)', 'Sec 15(2)(f)']
      },
      {
        unitNumber: 4,
        title: 'Withholding Taxes, VAT & International Relief',
        description: 'Value Added Tax Act (Standard, Zero-rated, Exempt supplies), Withholding taxes on non-executive directors, royalties, tenders, contracts, and Double Taxation Relief (DTR) under Section 91.',
        keyStandardsOrActs: ['VAT Act [Chapter 23:12]', 'DTR Sec 91', 'Finance Act Rates']
      },
      {
        unitNumber: 5,
        title: 'Partnerships, Deceased Estates & Trusts',
        description: 'Partnership accounts and joint tax assessments, Section 10 taxation of deceased estates, beneficiaries vs executors, vesting trusts, and discretionary trusts.',
        keyStandardsOrActs: ['Sec 10', 'Trusts & Estates Rules', 'Partnership Accruals']
      }
    ]
  },
  {
    id: 'cac-4103',
    code: 'CAC 4103',
    title: 'Auditing & Professional Assurance',
    level: 'Part IV / CTA Auditing',
    department: 'Department of Accounting',
    description: 'International Standards on Auditing (ISA), code of professional conduct (CPC), audit risk assessment, materiality thresholds, evaluation of internal controls, substantive audit evidence, and auditor reporting.',
    examPattern: 'Scenario-based auditing exam testing risks of material misstatement, audit procedures design, and reporting implications (modified vs unmodified opinions).',
    color: 'from-amber-600 to-orange-700',
    badge: 'ISA & Professional Assurance',
    units: [
      {
        unitNumber: 1,
        title: 'Pre-Acceptance Procedures & CPC',
        description: 'Client acceptance and continuance, ISQM 1 quality management, independence threats (self-interest, self-review, advocacy, familiarity, intimidation), and safeguards under the CPC.',
        keyStandardsOrActs: ['ISA 210', 'ISQM 1', 'IESBA Code of Ethics', 'CPC Unit 2']
      },
      {
        unitNumber: 2,
        title: 'Audit Planning, Risk & Materiality',
        description: 'Understanding the entity and its environment (ISA 315), inherent and control risk assessment, overall materiality, performance materiality, and trivial threshold calculation.',
        keyStandardsOrActs: ['ISA 300', 'ISA 315 (Revised)', 'ISA 320']
      },
      {
        unitNumber: 3,
        title: 'Financial Statement Assertions & Audit Evidence',
        description: 'Audit evidence sufficiency and appropriateness (ISA 500), assertions relating to classes of transactions, account balances at year-end, and disclosures. Substantive analytical procedures and tests of detail.',
        keyStandardsOrActs: ['ISA 500', 'ISA 520', 'ISA 530 Sampling', 'ISA 505 Confirmations']
      },
      {
        unitNumber: 4,
        title: 'Group Audits & Other Engagements',
        description: 'ISA 600 audits of group financial statements, component auditors, review engagements (ISRE 2400), assurance engagements (ISAE 3000), and Companies and Other Business Entities Act (COBE).',
        keyStandardsOrActs: ['ISA 600', 'COBE Act [Chapter 24:31]', 'ISRE 2400', 'ISAE 3000']
      },
      {
        unitNumber: 5,
        title: 'Evaluating, Concluding & Auditor Reporting',
        description: 'Subsequent events (ISA 560), Going concern assessment (ISA 570), Key Audit Matters (ISA 701), unmodified opinion, qualified opinion, adverse opinion, and disclaimer of opinion (ISA 700/705).',
        keyStandardsOrActs: ['ISA 700', 'ISA 701', 'ISA 705', 'ISA 560', 'ISA 570']
      }
    ]
  },
  {
    id: 'cac-4202',
    code: 'CAC 4202 & AIS',
    title: 'Accounting Information Systems & IT Audit',
    level: 'Part IV / Advanced AIS',
    department: 'Department of Accounting',
    description: 'Design, control, and auditing of modern accounting information systems, ERP environments, automated transaction cycles, data analytics in auditing, fraud prevention, and IT governance.',
    examPattern: 'Integrated systems analysis, process flow diagrams, IT general & application control audits, and cyber/fraud risk assessments.',
    color: 'from-purple-600 to-indigo-800',
    badge: 'Systems & Controls',
    units: [
      {
        unitNumber: 1,
        title: 'Transaction Processing & Enterprise Systems',
        description: 'Data flow diagrams, flowcharts, ERP architectures, database management, and accountant roles in systems development life cycle (SDLC).',
        keyStandardsOrActs: ['COSO Internal Control Framework', 'SDLC Principles']
      },
      {
        unitNumber: 2,
        title: 'Business Transaction Cycles',
        description: 'In-depth analysis of Revenue Cycle, Expenditure Cycle (purchases & cash disbursements), Conversion/Production Cycle, and Payroll/Fixed Asset Cycles.',
        keyStandardsOrActs: ['Revenue Cycle Controls', 'Expenditure Cycle Controls', 'Segregation of Duties']
      },
      {
        unitNumber: 3,
        title: 'IT Controls & Fraud Prevention',
        description: 'General IT controls (access controls, change management, backup/disaster recovery) vs Application controls (input validation, processing checks, output controls).',
        keyStandardsOrActs: ['COBIT 2019', 'ISO 27001 Controls', 'Fraud Risk Assessments']
      },
      {
        unitNumber: 4,
        title: 'Auditing and Evaluating the AIS',
        description: 'Computer-Assisted Audit Techniques (CAATs), test data approach, parallel simulation, embedded audit modules, and auditing cloud/blockchain ledger environments.',
        keyStandardsOrActs: ['CAATs Techniques', 'Audit Trail Verification']
      }
    ]
  },
  {
    id: 'cac-4105',
    code: 'CAC 4105 / MANAC II',
    title: 'Management Accounting & Control',
    level: 'Part IV / ACC 405',
    department: 'Department of Accounting',
    description: 'Advanced managerial cost allocation, absorption vs marginal costing, standard costing and variance analysis, pricing decisions, CVP analysis, and organizational performance evaluation.',
    examPattern: 'Managerial decision-making calculations, variance breakdowns, reconciliation of costing profits, and executive board reports.',
    color: 'from-rose-600 to-pink-700',
    badge: 'Costing & Strategy',
    units: [
      {
        unitNumber: 1,
        title: 'Absorption vs Marginal Costing',
        description: 'Comparison of inventory valuation, profit reconciliation between absorption and marginal costing methods, treatment of fixed manufacturing overheads, and under/over-absorption.',
        keyStandardsOrActs: ['Cost Volume Profit (CVP)', 'Overhead Absorption Rates']
      },
      {
        unitNumber: 2,
        title: 'Standard Costing & Variance Analysis',
        description: 'Material price and usage variances, labour rate and efficiency variances, idle time, variable and fixed overhead variances, sales volume and price variances, and operating statements.',
        keyStandardsOrActs: ['Variance Analysis', 'Flexible Budgeting']
      },
      {
        unitNumber: 3,
        title: 'Strategic Performance Evaluation',
        description: 'Divisional performance measurement, Return on Investment (ROI), Residual Income (RI), Economic Value Added (EVA), and Transfer Pricing between decentralized divisions.',
        keyStandardsOrActs: ['Transfer Pricing Methods', 'Balanced Scorecard']
      }
    ]
  },
  {
    id: 'cta-icaz',
    code: 'CTA L1 & L2 / ICAZ',
    title: 'CTA Professional Mock Exams & Question Bank',
    level: 'Post-Graduate / CTA Final Qualifying',
    department: 'Institute of Chartered Accountants of Zimbabwe',
    description: 'Intensive preparation for the ICAZ Certificate in Theory of Accounting (CTA) Level 1 and Level 2 board examinations, encompassing multi-disciplinary cases combining IFRS, ZimTax, Auditing, and Corporate Governance.',
    examPattern: 'Multi-disciplinary 100-mark mock examinations, scenario-based required questions, complex journal proformas, and comprehensive marking rubrics.',
    color: 'from-cyan-600 to-blue-800',
    badge: 'Board Preparation',
    units: [
      {
        unitNumber: 1,
        title: 'CTA Mock Exam Scenarios',
        description: 'Full-length online mock examination scenarios, integrating business combinations, deferred taxation, complex revenue contracts, and statutory corporate audits.',
        keyStandardsOrActs: ['CTA L1 Mock Exam 2 Scenario', 'CTA L1 Mock Exam 2 Required']
      },
      {
        unitNumber: 2,
        title: 'Past Exam Papers & Model Solutions (2016-2024)',
        description: 'Archived past papers from NUST, ICAZ, and partner universities complete with full marking schemes, examiner reports, and common candidate pitfall notes.',
        keyStandardsOrActs: ['CAC 4101 Past Papers', 'CAC 4102 Papers', 'CAC 4201 Papers']
      },
      {
        unitNumber: 3,
        title: 'Complex Consolidation & Question Bank',
        description: 'Comprehensive question banks for complex group consolidations, foreign currency subsidiaries, piecemeal acquisitions, and proforma group journals.',
        keyStandardsOrActs: ['Question Bank 1-3', 'Proforma Journals Template']
      }
    ]
  }
];

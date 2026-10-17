export interface CourseInfo {
  id: string;
  code: string;
  title: string;
  semester: 'Part IV - First Semester' | 'Part IV - Second Semester' | 'Part IV - Full Year';
  level: string;
  department: string;
  description: string;
  status: 'In Repository' | 'Newly Added Module' | 'Needs Additional Files';
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
  // --- PART IV FIRST SEMESTER ---
  {
    id: 'cac-4101',
    code: 'CAC 4101',
    title: 'Financial Reporting',
    semester: 'Part IV - First Semester',
    level: 'Part IV Honours / CTA Level 1',
    department: 'Department of Accounting',
    status: 'In Repository',
    description: 'Mastery of International Financial Reporting Standards (IFRS), International Accounting Standards (IAS), group business combinations, and consolidated financial statements.',
    examPattern: '3-hour examination featuring complex group consolidation scenarios, standard applications, and financial statement disclosures.',
    color: 'from-blue-600 to-indigo-700',
    badge: 'Part 4.1 Core',
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
    code: 'CAC 4102',
    title: 'Taxation I',
    semester: 'Part IV - First Semester',
    level: 'Part IV Honours / CTA ZimTax',
    department: 'Department of Accounting',
    status: 'In Repository',
    description: 'Zimbabwe Tax Law and Practice governed by the Income Tax Act [Chapter 23:06], Finance Act, and Capital Gains Tax Act. Covering Gross Income, Capital Allowances, Deductions, and Corporate Tax.',
    examPattern: 'Comprehensive computational & case-law based papers testing practical tax advisory, statutory allowances, and compliance schedules.',
    color: 'from-emerald-600 to-teal-700',
    badge: 'Part 4.1 Core',
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
        title: 'Employment Tax (PAYE) & Tax Credits',
        description: 'Statutory PAYE progressive tax bands, allowable deductions (pension, NSSA), medical aid credits (50%), elderly credit ($900), disability credit ($900), and 3% AIDS Levy.',
        keyStandardsOrActs: ['PAYE Schedules', 'Finance Act Tax Bands', 'AIDS Levy Act']
      },
      {
        unitNumber: 4,
        title: 'Value Added Tax (VAT)',
        description: 'VAT Act [Chapter 23:12], standard rated supplies, zero-rated supplies, exempt supplies, input tax apportionment, and prohibited input tax deductions.',
        keyStandardsOrActs: ['VAT Act [Chapter 23:12]', 'Sections 15 & 16 VAT Act']
      }
    ]
  },
  {
    id: 'cac-4103',
    code: 'CAC 4103',
    title: 'Audit Skills, Theory and Practice',
    semester: 'Part IV - First Semester',
    level: 'Part IV Honours',
    department: 'Department of Accounting',
    status: 'In Repository',
    description: 'International Standards on Auditing (ISA), code of professional conduct (CPC), audit risk assessment, materiality thresholds, evaluation of internal controls, and substantive audit evidence.',
    examPattern: 'Scenario-based auditing exam testing risks of material misstatement, audit procedures design, and reporting implications.',
    color: 'from-amber-600 to-orange-700',
    badge: 'Part 4.1 Core',
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
        title: 'Evaluating, Concluding & Auditor Reporting',
        description: 'Subsequent events (ISA 560), Going concern assessment (ISA 570), Key Audit Matters (ISA 701), unmodified opinion, qualified opinion, adverse opinion, and disclaimer of opinion (ISA 700/705).',
        keyStandardsOrActs: ['ISA 700', 'ISA 701', 'ISA 705', 'ISA 560', 'ISA 570']
      }
    ]
  },
  {
    id: 'cac-4104',
    code: 'CAC 4104',
    title: 'Accounting Information Systems',
    semester: 'Part IV - First Semester',
    level: 'Part IV Honours',
    department: 'Department of Accounting',
    status: 'In Repository',
    description: 'Design, control, and auditing of modern accounting information systems, ERP environments, automated transaction cycles, data analytics in auditing, fraud prevention, and IT governance.',
    examPattern: 'Integrated systems analysis, process flow diagrams, IT general & application control audits, and cyber/fraud risk assessments.',
    color: 'from-purple-600 to-indigo-800',
    badge: 'Part 4.1 Core',
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
    code: 'CAC 4105',
    title: 'Management and Cost Accounting II',
    semester: 'Part IV - First Semester',
    level: 'Part IV Honours',
    department: 'Department of Accounting',
    status: 'In Repository',
    description: 'Advanced managerial cost allocation, absorption vs marginal costing, standard costing and variance analysis, pricing decisions, CVP analysis, and organizational performance evaluation.',
    examPattern: 'Managerial decision-making calculations, variance breakdowns, reconciliation of costing profits, and executive board reports.',
    color: 'from-rose-600 to-pink-700',
    badge: 'Part 4.1 Core',
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
        title: 'CVP & Breakeven Decisions',
        description: 'Multi-product breakeven analysis, margin of safety, target profit volume calculations, and limiting factor / linear programming optimization.',
        keyStandardsOrActs: ['Breakeven Analysis', 'Limiting Factor Decisions']
      }
    ]
  },
  {
    id: 'cac-4006',
    code: 'CAC 4006',
    title: 'Research Project (Dissertation)',
    semester: 'Part IV - Full Year',
    level: 'Part IV Capstone',
    department: 'Department of Accounting',
    status: 'Newly Added Module',
    description: 'Independent empirical or theoretical research study under academic supervision culminating in a comprehensive dissertation on a contemporary accounting, auditing, taxation, or financial management topic.',
    examPattern: 'Written Dissertation (Chapters 1-5, approx. 10,000-15,000 words) and Oral Defense before Departmental Board of Examiners.',
    color: 'from-slate-700 to-slate-900',
    badge: 'Full Year Capstone',
    units: [
      {
        unitNumber: 1,
        title: 'Research Proposal & Problem Formulation',
        description: 'Identifying researchable problems in Zimbabwean business, crafting research questions, hypotheses, scope, and theoretical foundations (Agency, Stakeholder, Signaling theories).',
        keyStandardsOrActs: ['Research Ethics', 'APA 7th Referencing']
      },
      {
        unitNumber: 2,
        title: 'Literature Review & Theoretical Framework',
        description: 'Critical synthesis of empirical studies from academic journals, identifying gaps in local knowledge, and conceptual model development.',
        keyStandardsOrActs: ['Conceptual Framework', 'Empirical Literature Review']
      },
      {
        unitNumber: 3,
        title: 'Research Methodology & Data Collection',
        description: 'Research philosophy, quantitative vs qualitative designs, target population, sampling methods (purposive, stratified), questionnaire design, and financial report content analysis.',
        keyStandardsOrActs: ['Sample Size Determination', 'Reliability & Validity Tests']
      },
      {
        unitNumber: 4,
        title: 'Data Analysis, Presentation & Findings',
        description: 'Descriptive statistics, regression analysis, correlation matrices, hypothesis testing using SPSS/Excel, and discussion of empirical results.',
        keyStandardsOrActs: ['SPSS Regression', 'Hypothesis Testing']
      },
      {
        unitNumber: 5,
        title: 'Conclusions, Policy Recommendations & Defense',
        description: 'Drawing academic conclusions, formulating actionable policy recommendations for ZIMRA, PAAB, ICAZ, and preparing presentation slides for oral defense.',
        keyStandardsOrActs: ['Oral Defense Rubric', 'Dissertation Formatting']
      }
    ]
  },

  // --- PART IV SECOND SEMESTER ---
  {
    id: 'cac-4201',
    code: 'CAC 4201',
    title: 'Advanced Financial Accounting',
    semester: 'Part IV - Second Semester',
    level: 'Part IV Honours / CTA Level 2',
    department: 'Department of Accounting',
    status: 'In Repository',
    description: 'Complex financial reporting topics: step acquisitions, disposal of subsidiaries, foreign currency translations (IAS 21), financial instruments (IFRS 9), and share-based payments (IFRS 2).',
    examPattern: '3-hour examination featuring complex multi-tier group accounts, foreign subsidiaries, and advanced financial instrument accounting.',
    color: 'from-cyan-600 to-blue-800',
    badge: 'Part 4.2 Core',
    units: [
      {
        unitNumber: 1,
        title: 'Complex Group Reorganizations & Step Acquisitions',
        description: 'Piecemeal acquisitions (associate becoming subsidiary), disposals of controlling interests (with and without loss of control), and deemed disposals.',
        keyStandardsOrActs: ['IFRS 10', 'IFRS 3 (Revised)', 'IAS 27 Separate Financial Statements']
      },
      {
        unitNumber: 2,
        title: 'Foreign Currency Operations (IAS 21)',
        description: 'Functional currency determination, foreign currency transactions, and translation of foreign operations for consolidation using closing rate method.',
        keyStandardsOrActs: ['IAS 21 The Effects of Changes in Foreign Exchange Rates']
      },
      {
        unitNumber: 3,
        title: 'Financial Instruments (IFRS 9)',
        description: 'Classification and measurement of financial assets (Amortised Cost, FVOCI, FVTPL), Expected Credit Loss (ECL) impairment model, and hedge accounting.',
        keyStandardsOrActs: ['IFRS 9 Financial Instruments', 'IAS 32 Presentation']
      }
    ]
  },
  {
    id: 'cac-4202',
    code: 'CAC 4202',
    title: 'Taxation II',
    semester: 'Part IV - Second Semester',
    level: 'Part IV Honours / CTA ZimTax L2',
    department: 'Department of Accounting',
    status: 'In Repository',
    description: 'Advanced statutory taxation covering specialized economic sectors: Farming operations, Mining enterprises, Deceased Estates and Trusts, Capital Gains Tax, and Double Taxation Agreements.',
    examPattern: 'Advanced case law problems, specialized sector tax schedules, and international tax planning scenarios.',
    color: 'from-teal-600 to-emerald-800',
    badge: 'Part 4.2 Core',
    units: [
      {
        unitNumber: 1,
        title: 'Taxation of Farming Operations',
        description: 'Valuation of livestock (standard values, fixed standard value election), growing crops, drought relief sales, farming development expenditure (fencing, dams, dipping tanks).',
        keyStandardsOrActs: ['2nd Schedule Income Tax Act', 'Farming Development Sec 15(2)(f)']
      },
      {
        unitNumber: 2,
        title: 'Taxation of Mining Enterprises',
        description: 'Mining capital expenditure redemption allowance, life of mine calculation, exploratory and prospecting expenses, mineral royalties, and mining corporate tax rates.',
        keyStandardsOrActs: ['5th Schedule (Mining)', 'Sec 15(2)(f)', 'Mining Royalties']
      },
      {
        unitNumber: 3,
        title: 'Deceased Estates, Trusts & Partnerships',
        description: 'Section 10 taxation of deceased estates, period of administration, vesting vs discretionary trusts, conduit pipe principle, and partnership allocation schedules.',
        keyStandardsOrActs: ['Section 10', 'Trust Law', 'Partnership Accruals']
      },
      {
        unitNumber: 4,
        title: 'Capital Gains Tax (CGT) & International Tax',
        description: 'Capital Gains Tax Act [Chapter 23:01], specified assets (immovable property, marketable securities), principal private residence exemption, and Double Taxation Relief (Sec 91).',
        keyStandardsOrActs: ['CGT Act [Chapter 23:01]', 'Double Taxation Relief Sec 91']
      }
    ]
  },
  {
    id: 'cac-4203',
    code: 'CAC 4203',
    title: 'Advanced Auditing',
    semester: 'Part IV - Second Semester',
    level: 'Part IV Honours',
    department: 'Department of Accounting',
    status: 'Newly Added Module',
    description: 'Specialized assurance engagements, forensic audit investigations, Value for Money (VFM) and public sector audits, ESG sustainability assurance, and auditor corporate governance duties.',
    examPattern: 'Scenario-based examination on forensic investigations, specialized assurance reports (ISA 800/805/810), and auditor negligence liability.',
    color: 'from-amber-700 to-red-800',
    badge: 'Part 4.2 Missing/Added',
    units: [
      {
        unitNumber: 1,
        title: 'Specialized Assurance & Review Engagements',
        description: 'Audits of special purpose frameworks (ISA 800), single financial statement elements (ISA 805), summary financial statements (ISA 810), and review engagements (ISRE 2400/2410).',
        keyStandardsOrActs: ['ISA 800', 'ISA 805', 'ISA 810', 'ISRE 2400', 'ISAE 3402']
      },
      {
        unitNumber: 2,
        title: 'Forensic Auditing & Fraud Investigation',
        description: 'Investigating fraudulent financial reporting, asset misappropriation, digital evidence preservation, chain of custody, and expert witness courtroom testimony.',
        keyStandardsOrActs: ['Fraud Triangle', 'Digital Forensics', 'Criminal Evidence Act']
      },
      {
        unitNumber: 3,
        title: 'Public Sector & Value for Money (VFM) Audit',
        description: 'INTOSAI standards, Public Finance Management Act (PFMA), the 3Es framework (Economy, Efficiency, Effectiveness), and Auditor-General statutory mandates.',
        keyStandardsOrActs: ['INTOSAI Guidelines', 'PFMA [Chapter 22:19]']
      },
      {
        unitNumber: 4,
        title: 'Corporate Governance & Legal Liability',
        description: 'Audit committee oversight, National Code on Corporate Governance (ZIMCODE), auditor civil liability to third parties, and the Caparo Industries v Dickman legal precedent.',
        keyStandardsOrActs: ['ZIMCODE', 'Caparo v Dickman', 'Hedley Byrne']
      }
    ]
  },
  {
    id: 'cac-4204',
    code: 'CAC 4204',
    title: 'Financial Management',
    semester: 'Part IV - Second Semester',
    level: 'Part IV Honours',
    department: 'Department of Accounting',
    status: 'Newly Added Module',
    description: 'Strategic corporate finance covering advanced capital investment appraisal (NPV/IRR/APV), Weighted Average Cost of Capital (WACC), capital structure theories, M&A valuation, and treasury risk.',
    examPattern: 'Calculations and analytical board papers on multi-period capital rationing, corporate valuation models, and currency risk hedging.',
    color: 'from-emerald-700 to-teal-900',
    badge: 'Part 4.2 Missing/Added',
    units: [
      {
        unitNumber: 1,
        title: 'Advanced Investment Appraisal',
        description: 'DCF techniques with taxation and inflation, Adjusted Present Value (APV) for geared projects, single/multi-period capital rationing, and Equivalent Annual Cost asset replacement.',
        keyStandardsOrActs: ['NPV & IRR Models', 'Capital Rationing', 'APV Method']
      },
      {
        unitNumber: 2,
        title: 'Cost of Capital & Capital Structure Decisions',
        description: 'CAPM, Dividend Growth Model, WACC computation with market values, Modigliani-Miller propositions I & II (with/without corporate tax), Trade-Off Theory, and Pecking Order.',
        keyStandardsOrActs: ['CAPM Beta Ungearing', 'WACC Formula', 'Modigliani-Miller']
      },
      {
        unitNumber: 3,
        title: 'Business Valuation & Mergers and Acquisitions',
        description: 'Asset-based valuation, P/E multiples, EV/EBITDA, Free Cash Flow to Firm (FCFF), takeover defense mechanisms (poison pills, white knights), and acquisition financing.',
        keyStandardsOrActs: ['FCFF Valuation', 'Takeover Defenses', 'Merger Synergy']
      },
      {
        unitNumber: 4,
        title: 'Treasury & Foreign Exchange Risk Hedging',
        description: 'Managing transaction, translation, and economic currency exposure; internal hedging (netting, leading/lagging) and external instruments (forwards, money market hedge, futures).',
        keyStandardsOrActs: ['Interest Rate Parity', 'Forward Exchange Contracts', 'Money Market Hedge']
      }
    ]
  },
  {
    id: 'cac-4205',
    code: 'CAC 4205',
    title: 'Strategic Management Accounting',
    semester: 'Part IV - Second Semester',
    level: 'Part IV Honours',
    department: 'Department of Accounting',
    status: 'Newly Added Module',
    description: 'Application of advanced management accounting principles to strategic positioning, competitive cost advantage, operations management, and multifaceted performance evaluation.',
    examPattern: 'Strategic management accounting case studies on target costing, throughput accounting ratios, and balanced scorecard implementations.',
    color: 'from-violet-700 to-purple-900',
    badge: 'Part 4.2 Missing/Added',
    units: [
      {
        unitNumber: 1,
        title: 'Strategic Cost Management Techniques',
        description: 'Target costing and value engineering to close cost gaps, life-cycle costing from R&D to disposal, Kaizen continuous improvement costing, and Environmental Management Accounting.',
        keyStandardsOrActs: ['Target Costing Model', 'Life-Cycle Costing', 'EMA Framework']
      },
      {
        unitNumber: 2,
        title: 'Operations & Capacity Management Accounting',
        description: 'Just-In-Time (JIT) production and backflush costing, Theory of Constraints (TOC), and Throughput Accounting Ratio (TPAR) bottleneck optimization.',
        keyStandardsOrActs: ['Throughput Accounting Ratio', 'Theory of Constraints', 'JIT']
      },
      {
        unitNumber: 3,
        title: 'Activity-Based Management & Budgeting',
        description: 'Customer Profitability Analysis (CPA), Direct Product Profitability (DPP), Activity-Based Budgeting (ABB), and rolling forecasts.',
        keyStandardsOrActs: ['Customer Profitability', 'ABB Methodology']
      },
      {
        unitNumber: 4,
        title: 'Strategic Performance Evaluation',
        description: 'The Balanced Scorecard (Kaplan & Norton 4 perspectives), Fitzgerald & Moon Building Block Model for service businesses, and Beyond Budgeting principles.',
        keyStandardsOrActs: ['Balanced Scorecard', 'Building Block Model', 'Beyond Budgeting']
      }
    ]
  }
];

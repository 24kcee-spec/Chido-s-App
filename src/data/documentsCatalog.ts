export interface DocumentItem {
  id: string;
  filename: string;
  title: string;
  courseId: 'cac-4101' | 'cac-4102' | 'cac-4103' | 'cac-4202' | 'cac-4105' | 'cta-icaz';
  category: 'Syllabus & Course Outline' | 'Lecture Notes & Slides' | 'Past Papers & Exams' | 'Practice Questions & Solutions' | 'Accounting Standards' | 'Case Law & Statutes';
  fileType: 'PDF' | 'PPT' | 'DOCX' | 'XLSX' | 'ZIP';
  sizeEstimate?: string;
  description: string;
  keyTopics: string[];
  isEssential: boolean;
}

export const DOCUMENTS_CATALOG: DocumentItem[] = [
  // --- CAC 4102: TAXATION & ZIMTAX ---
  {
    id: 'doc-tax-01',
    filename: '02_CAC4102_Taxation_and_ZimTax/Textbooks_and_Core_Modules/Sabelo Nare. Tax Law  & Practice in Zim New 4th (1).pdf',
    title: 'Tax Law & Practice in Zimbabwe (Sabelo Nare 4th Edition)',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    sizeEstimate: 'Comprehensive Textbook',
    description: 'The premier textbook for Zimbabwean tax law, analyzing the Income Tax Act [Chapter 23:06], case laws, gross income doctrine, general deductions, capital allowances, and CGT.',
    keyTopics: ['Zimbabwe Tax Law', 'Income Tax Act', 'Case Law', 'Gross Income', 'Capital Allowances'],
    isEssential: true
  },
  {
    id: 'doc-tax-02',
    filename: '02_CAC4102_Taxation_and_ZimTax/Textbooks_and_Core_Modules/ICAZ CTA ZIMTAX MODULE 2022.pdf',
    title: 'ICAZ CTA ZimTax Comprehensive Module (2022)',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    sizeEstimate: 'ICAZ Board Pack',
    description: 'Official ICAZ CTA board preparation module for Zimbabwe Taxation covering complex corporate tax, individuals, partnerships, farming, mining, and international tax treaties.',
    keyTopics: ['ICAZ CTA', 'ZimTax', 'Corporate Tax', 'Farming', 'Mining', 'DTR'],
    isEssential: true
  },
  {
    id: 'doc-tax-03',
    filename: '02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/01 Tax Credits & Tax Calculation-1.ppt',
    title: 'Tax Credits & Tax Calculation Slides',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PPT',
    description: 'Slides on computation of tax payable, elderly credit, medical expenses, blind persons credit, invalid appliance credit, and PAYE brackets.',
    keyTopics: ['Tax Credits', 'Finance Act', 'Medical Credit', 'Elderly Credit', 'PAYE'],
    isEssential: true
  },
  {
    id: 'doc-tax-04',
    filename: '02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/02 Gross Income Module.ppt',
    title: 'Gross Income Module & Source Principle',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PPT',
    description: 'In-depth explanation of Section 8(1) gross income components, source test (Lever Brothers case), deemed source rules, and revenue vs capital distinctions.',
    keyTopics: ['Section 8(1)', 'Source Principle', 'Lever Brothers', 'Deemed Source'],
    isEssential: true
  },
  {
    id: 'doc-tax-05',
    filename: '02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/02 Allowable Deductions.ppt',
    title: 'General Deductions Formula & Prohibited Deductions',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PPT',
    description: 'Section 15(2)(a) general deductions formula test, requirements of "actually incurred" and "in the production of income", matched with Section 16 prohibitions.',
    keyTopics: ['Section 15(2)(a)', 'Allowable Deductions', 'Section 16', 'Subun v COT'],
    isEssential: true
  },
  {
    id: 'doc-tax-06',
    filename: '02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/07_Capital_Allowances.ppt',
    title: 'Capital Allowances (4th Schedule) Guide',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PPT',
    description: 'Detailed analysis of Special Initial Allowance (SIA 25%), Wear & Tear allowances, passenger motor vehicle restrictions, commercial buildings, and scrapping allowances.',
    keyTopics: ['Capital Allowances', 'SIA 25%', 'Wear & Tear', 'Scrapping Allowance', 'Recoupment'],
    isEssential: true
  },
  {
    id: 'doc-tax-07',
    filename: '02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/08_Lease_Premiums_and_Lease_Inprovements.ppt',
    title: 'Lease Premiums & Lease Improvements',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PPT',
    description: 'Tax implications of lease premiums for lessor (gross income under Sec 8(1)(d)) and lessee (deduction under Sec 15(2)(d)), plus lease improvements rules under Sec 8(1)(e).',
    keyTopics: ['Lease Premiums', 'Lease Improvements', 'Sec 8(1)(d)', 'Sec 8(1)(e)', 'Lessee Deductions'],
    isEssential: true
  },
  {
    id: 'doc-tax-08',
    filename: '02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Farming/STUDY UNIT J - FARMING (1).pdf',
    title: 'Study Unit J: Taxation of Farming Operations',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Valuation of livestock, standard values, fixed standard value election, crops on hand, drought relief sales, farming development expenditure (fencing, dams, dipping tanks).',
    keyTopics: ['Farming Tax', 'Livestock Standard Value', 'Drought Relief', 'Farm Improvements'],
    isEssential: true
  },
  {
    id: 'doc-tax-09',
    filename: '02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Mining/Study Unit K - Mining.pdf',
    title: 'Study Unit K: Taxation of Mining Enterprises',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Mining capital expenditure redemption allowance, life of mine calculation, exploratory and prospecting expenses, royalties, and mining tax rates.',
    keyTopics: ['Mining Taxation', 'Capital Redemption Allowance', 'Life of Mine', 'Mineral Royalties'],
    isEssential: true
  },
  {
    id: 'doc-tax-10',
    filename: '02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Deceased_Estates_and_Trusts/STUDY UNIT L- DECEASED ESTATES  TRUSTS.pdf',
    title: 'Study Unit L: Deceased Estates and Trusts',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Section 10 taxation of deceased estates, period of administration, vesting vs discretionary trusts, and conduit pipe principle.',
    keyTopics: ['Deceased Estates', 'Trusts', 'Section 10', 'Conduit Principle'],
    isEssential: false
  },
  {
    id: 'doc-tax-11',
    filename: '02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Withholding_and_DTR/STUDY UNIT G WITHHOLDING TAXES.pdf',
    title: 'Study Unit G: Withholding Taxes (WHT)',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Statutory withholding taxes in Zimbabwe: Non-resident shareholders tax (NRST), non-resident tax on fees (NRTF), royalties, contracts, and tenders.',
    keyTopics: ['Withholding Tax', 'NRST', 'NRTF', 'Tenders', '15% WHT'],
    isEssential: true
  },
  {
    id: 'doc-tax-12',
    filename: '02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/VAT_(VALUE_ADDED_TAX).pptx',
    title: 'Value Added Tax (VAT) Presentation',
    courseId: 'cac-4102',
    category: 'Lecture Notes & Slides',
    fileType: 'PPT',
    description: 'VAT Act [Chapter 23:12], standard rate, zero-rated supplies vs exempt supplies, input tax deductions, and prohibited input tax.',
    keyTopics: ['VAT', 'Input Tax', 'Output Tax', 'Zero-Rated Supplies', 'Exempt Supplies'],
    isEssential: true
  },
  {
    id: 'doc-tax-13',
    filename: '02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Farming/Farming example solution.xlsx',
    title: 'Farming Practical Computation & Solution Model',
    courseId: 'cac-4102',
    category: 'Practice Questions & Solutions',
    fileType: 'XLSX',
    description: 'Detailed excel model calculating livestock valuation, sales, natural increase, mortality losses, and tax adjustments for farming income.',
    keyTopics: ['Farming Model', 'Livestock Reconciliation', 'Tax Schedules', 'Excel Model'],
    isEssential: true
  },
  {
    id: 'doc-tax-14',
    filename: '02_CAC4102_Taxation_and_ZimTax/Past_Papers_and_Tutorials/CAC 4102 Past paper.pdf',
    title: 'CAC 4102 Past Exam Paper',
    courseId: 'cac-4102',
    category: 'Past Papers & Exams',
    fileType: 'PDF',
    description: 'University past exam paper covering corporate tax computation, capital allowances schedule, partnership income distribution, and VAT questions.',
    keyTopics: ['CAC 4102 Exam', 'Past Paper', 'Tax Computations', 'Partnerships'],
    isEssential: true
  },
  {
    id: 'doc-tax-15',
    filename: '02_CAC4102_Taxation_and_ZimTax/Capital_Allowances_and_Calculations/Tax Rates.pdf',
    title: 'Statutory Tax Rates & Thresholds Reference',
    courseId: 'cac-4102',
    category: 'Case Law & Statutes',
    fileType: 'PDF',
    description: 'Official tax rate schedules including corporate tax rate, AIDS levy, PAYE tax bands, and capital gains tax rates.',
    keyTopics: ['Tax Rates', 'AIDS Levy', 'PAYE Bands', 'CGT Rates'],
    isEssential: true
  },

  // --- CAC 4101 / CAC 4201: FINANCIAL REPORTING & IFRS ---
  {
    id: 'doc-ifrs-01',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-10-consolidated-financial-statements.pdf',
    title: 'IFRS 10 Consolidated Financial Statements Guide',
    courseId: 'cac-4101',
    category: 'Accounting Standards',
    fileType: 'PDF',
    description: 'Control assessment (power, variable returns, linkage), consolidation procedures, non-controlling interests (NCI), intra-group transactions, and proforma entries.',
    keyTopics: ['IFRS 10', 'Control', 'Consolidation', 'NCI', 'Intercompany Unrealized Profit'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-02',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-3-business-combinations.pdf',
    title: 'IFRS 3 Business Combinations Standard & Practice',
    courseId: 'cac-4101',
    category: 'Accounting Standards',
    fileType: 'PDF',
    description: 'Acquisition method, purchase price allocation, identification of contingent liabilities, measurement of consideration transferred, and goodwill / bargain purchase calculation.',
    keyTopics: ['IFRS 3', 'Goodwill Calculation', 'Fair Value of Net Assets', 'Acquisition Method'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-03',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-15-revenue-from-contracts-with-customers.pdf',
    title: 'IFRS 15 Revenue from Contracts with Customers',
    courseId: 'cac-4101',
    category: 'Accounting Standards',
    fileType: 'PDF',
    description: 'Comprehensive guide to the 5-step model: contract identification, performance obligations, transaction price, allocation, and recognition over time vs point in time.',
    keyTopics: ['IFRS 15', '5-Step Revenue Model', 'Performance Obligations', 'Contract Liabilities'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-04',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-16-leases.pdf',
    title: 'IFRS 16 Leases Standard Summary & Calculations',
    courseId: 'cac-4101',
    category: 'Accounting Standards',
    fileType: 'PDF',
    description: 'Single lessee model: Right-of-Use (ROU) asset recognition, lease liability amortisation schedule, discount rates (IBR), and lessor accounting.',
    keyTopics: ['IFRS 16', 'ROU Asset', 'Lease Liability Amortisation', 'Lessor vs Lessee'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-05',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-16-property-plant-and-equipment.pdf',
    title: 'IAS 16 Property, Plant and Equipment Standard',
    courseId: 'cac-4101',
    category: 'Accounting Standards',
    fileType: 'PDF',
    description: 'Cost model vs Revaluation model, treatment of revaluation surplus, depreciation methods, component depreciation, derecognition, and dismantling provisions.',
    keyTopics: ['IAS 16', 'Revaluation Model', 'Revaluation Surplus', 'Component Depreciation'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-06',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-12-income-taxes.pdf',
    title: 'IAS 12 Income Taxes & Deferred Tax Guide',
    courseId: 'cac-4101',
    category: 'Accounting Standards',
    fileType: 'PDF',
    description: 'Balance sheet liability method: Tax base of assets and liabilities, taxable temporary differences (DTL), deductible temporary differences (DTA), and unused tax losses.',
    keyTopics: ['IAS 12', 'Deferred Tax', 'Tax Base', 'Temporary Differences', 'Tax Loss Recognition'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-07',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-36-impairment-of-assets.pdf',
    title: 'IAS 36 Impairment of Assets',
    courseId: 'cac-4101',
    category: 'Accounting Standards',
    fileType: 'PDF',
    description: 'Impairment triggers, recoverable amount determination (higher of fair value less costs to sell and value in use), cash-generating units (CGU), and goodwill impairment allocation.',
    keyTopics: ['IAS 36', 'Impairment Test', 'Recoverable Amount', 'Value in Use', 'CGU Allocation'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-08',
    filename: '01_CAC4101_Financial_Reporting_IFRS/Group_Accounts_and_Consolidation/PROFORMA_JOURNALS_TEMPLATE_-_GROUPS[1].pdf',
    title: 'Proforma Group Consolidation Journals Template',
    courseId: 'cac-4101',
    category: 'Practice Questions & Solutions',
    fileType: 'PDF',
    description: 'Essential proforma debit/credit journal templates for consolidation: pre-acquisition equity elimination, fair value adjustments, PURP, intra-group management fees, and dividends.',
    keyTopics: ['Proforma Journals', 'Consolidation Entries', 'PURP Adjustment', 'NCI Share'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-09',
    filename: '01_CAC4101_Financial_Reporting_IFRS/Past_Papers_and_Syllabus/CAC4101 Past Paper 2023.pdf',
    title: 'CAC 4101 Financial Reporting Past Paper (2023)',
    courseId: 'cac-4101',
    category: 'Past Papers & Exams',
    fileType: 'PDF',
    description: 'Recent university exam paper testing complex group statements of financial position and profit or loss, lease adjustments, and deferred tax calculations.',
    keyTopics: ['CAC 4101 2023', 'Past Exam', 'Group Accounts', 'Leases', 'Deferred Tax'],
    isEssential: true
  },
  {
    id: 'doc-ifrs-10',
    filename: '01_CAC4101_Financial_Reporting_IFRS/IPSAS_Public_Sector/CAC 4106 Module IPSASCOVEREDONLY.doc',
    title: 'IPSAS Public Sector Financial Reporting Module',
    courseId: 'cac-4101',
    category: 'Lecture Notes & Slides',
    fileType: 'DOCX',
    description: 'Comprehensive study module focusing on International Public Sector Accounting Standards (IPSAS 1, 12, 17, 23) applicable to government entities and parastatals.',
    keyTopics: ['IPSAS', 'Public Sector', 'IPSAS 1', 'IPSAS 12', 'Government Accounting'],
    isEssential: false
  },

  // --- CAC 4103: AUDITING & ASSURANCE ---
  {
    id: 'doc-audit-01',
    filename: '03_CAC4103_Auditing_and_Assurance/Textbooks_and_Guides/Auditing Notes for SA Students (9th ed)-2.pdf',
    title: 'Auditing Notes for Students (Comprehensive 9th Edition)',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    sizeEstimate: 'Full Reference Text',
    description: 'Authoritative auditing reference covering entire audit process: pre-engagement, engagement letters, risk evaluation, internal controls, audit sampling, substantive testing, and report opinions.',
    keyTopics: ['Auditing Process', 'ISA Standards', 'Internal Controls', 'Substantive Testing', 'Audit Opinion'],
    isEssential: true
  },
  {
    id: 'doc-audit-02',
    filename: '03_CAC4103_Auditing_and_Assurance/Study_Units/1. Study unit 1 - The Audit Process.pdf',
    title: 'Study Unit 1: The Audit Process & Legal Framework',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Overview of the statutory audit mandate, expectations gap, agency theory, Companies Act requirements, and five phases of the audit cycle.',
    keyTopics: ['Audit Process', 'Statutory Mandate', 'Expectation Gap', 'Audit Cycle Phases'],
    isEssential: true
  },
  {
    id: 'doc-audit-03',
    filename: '03_CAC4103_Auditing_and_Assurance/Study_Units/2. Study Unit 2 - CPC.pdf',
    title: 'Study Unit 2: Code of Professional Conduct (CPC)',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'IESBA Code of Ethics for Professional Accountants: Integrity, Objectivity, Professional Competence, Confidentiality, and Professional Behaviour; 5 threats and safeguards framework.',
    keyTopics: ['Code of Ethics', 'CPC', 'Independence', 'Self-Review Threat', 'Familiarity Threat'],
    isEssential: true
  },
  {
    id: 'doc-audit-04',
    filename: '03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures/2. Audit Planning 2019.pdf',
    title: 'Audit Planning & ISA 300 / ISA 315 Reference',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Developing the overall audit strategy and detailed audit plan, understanding the entity and its environment, and assessing risks of material misstatement at financial statement and assertion levels.',
    keyTopics: ['Audit Planning', 'ISA 300', 'ISA 315', 'Risk Assessment', 'Audit Strategy'],
    isEssential: true
  },
  {
    id: 'doc-audit-05',
    filename: '03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures/6._Materiality_2020_bm.pdf',
    title: 'Audit Materiality (ISA 320) Calculation Guide',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Determining overall financial statement materiality, performance materiality (typically 50-75%), benchmark selection (PBT, revenue, total assets), and clearly trivial threshold.',
    keyTopics: ['ISA 320', 'Materiality', 'Performance Materiality', 'Benchmarks', 'Trivial Threshold'],
    isEssential: true
  },
  {
    id: 'doc-audit-06',
    filename: '03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures/Assertions.pdf',
    title: 'Financial Statement Assertions Master Matrix',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Complete breakdown of audit assertions for classes of transactions (Occurrence, Completeness, Accuracy, Cut-off, Classification) and account balances (Existence, Rights & Obligations, Completeness, Valuation).',
    keyTopics: ['Assertions', 'Account Balances', 'Transactions', 'Substantive Procedures'],
    isEssential: true
  },
  {
    id: 'doc-audit-07',
    filename: '03_CAC4103_Auditing_and_Assurance/Study_Units/8. Study Unit 8 - Audit Evidence.pdf',
    title: 'Study Unit 8: Audit Evidence & Procedures (ISA 500)',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Inspection, observation, external confirmation, recalculation, reperformance, analytical procedures, and inquiry. Reliability of evidence hierarchy.',
    keyTopics: ['ISA 500', 'Audit Evidence', 'External Confirmations', 'Analytical Procedures'],
    isEssential: true
  },
  {
    id: 'doc-audit-08',
    filename: '03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures/3.Evaluating, Concluding and Reporting.pdf',
    title: 'Evaluating, Concluding and Reporting (ISA 700 / 705 / 706)',
    courseId: 'cac-4103',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Formation of auditor opinion: Unmodified opinion, Qualified opinion (material but not pervasive), Adverse opinion (material and pervasive misstatement), and Disclaimer of opinion (lack of evidence).',
    keyTopics: ['ISA 700', 'ISA 705', 'Audit Opinion', 'Pervasiveness', 'Key Audit Matters'],
    isEssential: true
  },

  // --- CAC 4202: ACCOUNTING INFORMATION SYSTEMS (AIS) ---
  {
    id: 'doc-ais-01',
    filename: '04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/AUDITING AND EVALUATING THE AIS.pdf',
    title: 'Auditing and Evaluating Accounting Information Systems',
    courseId: 'cac-4202',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Framework for auditing automated accounting systems, IT general controls (ITGC), application controls, testing through the computer, and CAATs techniques.',
    keyTopics: ['IT Audit', 'ITGC', 'Application Controls', 'CAATs', 'Information Systems'],
    isEssential: true
  },
  {
    id: 'doc-ais-02',
    filename: '04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/chapter 4 Revenue Cycle.pdf',
    title: 'AIS Chapter 4: The Revenue Cycle Controls & Fraud',
    courseId: 'cac-4202',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Sales order processing, credit authorization, shipping, billing, accounts receivable, and cash receipts with segregation of duty matrices and control objectives.',
    keyTopics: ['Revenue Cycle', 'Sales Order Processing', 'Cash Receipts', 'Credit Approval'],
    isEssential: true
  },
  {
    id: 'doc-ais-03',
    filename: '04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/chapter 5 expenditure cycle.pdf',
    title: 'AIS Chapter 5: The Expenditure Cycle & Purchases',
    courseId: 'cac-4202',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Purchase requisitions, purchase orders, receiving reports, 3-way matching, accounts payable, cash disbursements, and vendor fraud controls.',
    keyTopics: ['Expenditure Cycle', '3-Way Match', 'Purchasing', 'Cash Disbursements'],
    isEssential: true
  },
  {
    id: 'doc-ais-04',
    filename: '04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/chapter 3 ethics fraud and internal control.pdf',
    title: 'AIS Chapter 3: Ethics, Fraud, and Internal Control',
    courseId: 'cac-4202',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'The fraud triangle (pressure, opportunity, rationalization), computer fraud schemes, COSO internal control framework (5 components), and SOX 404 compliance.',
    keyTopics: ['Fraud Triangle', 'COSO Framework', 'Internal Control', 'Computer Fraud'],
    isEssential: true
  },
  {
    id: 'doc-ais-05',
    filename: '04_CAC4202_Accounting_Information_Systems/Quizzes_and_Past_Papers/AIS QUIZ.pdf',
    title: 'AIS Comprehensive Multiple Choice & Problem Quiz',
    courseId: 'cac-4202',
    category: 'Practice Questions & Solutions',
    fileType: 'PDF',
    description: 'Curated quiz questions on database concepts, transaction cycles, data flow diagrams (DFD), and systems development controls with answers.',
    keyTopics: ['AIS Quiz', 'MCQs', 'Database Systems', 'Transaction Cycles'],
    isEssential: true
  },

  // --- CAC 4105: MANAGEMENT ACCOUNTING ---
  {
    id: 'doc-manac-01',
    filename: '05_CAC4105_Management_Accounting/MANAC II MODULE CAC4105 UPDATED.pdf',
    title: 'Management Accounting II (CAC 4105) Module Pack',
    courseId: 'cac-4105',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Complete university course pack for advanced management accounting: cost allocation, standard costing, operating statements, pricing strategies, and transfer pricing.',
    keyTopics: ['Management Accounting', 'Standard Costing', 'Variances', 'Transfer Pricing'],
    isEssential: true
  },
  {
    id: 'doc-manac-02',
    filename: '05_CAC4105_Management_Accounting/Absorption and marginal costing.ppt',
    title: 'Absorption vs Marginal Costing Principles & Reconciliation',
    courseId: 'cac-4105',
    category: 'Lecture Notes & Slides',
    fileType: 'PPT',
    description: 'Theoretical foundations and numerical illustrations comparing absorption and marginal costing, inventory valuation effects, and profit reconciliation.',
    keyTopics: ['Absorption Costing', 'Marginal Costing', 'Profit Reconciliation', 'Overhead Absorption'],
    isEssential: true
  },
  {
    id: 'doc-manac-03',
    filename: '05_CAC4105_Management_Accounting/CAC_4105_past_paper.pdf',
    title: 'CAC 4105 Management Accounting Past Paper',
    courseId: 'cac-4105',
    category: 'Past Papers & Exams',
    fileType: 'PDF',
    description: 'Past examination paper containing advanced variance calculations, sales mix/quantity variances, and CVP multi-product breakeven analysis.',
    keyTopics: ['CAC 4105 Exam', 'Variance Analysis', 'CVP Analysis', 'Breakeven'],
    isEssential: true
  },

  // --- CTA & PROFESSIONAL MOCK EXAMS ---
  {
    id: 'doc-cta-01',
    filename: '07_CTA_ICAZ_Board_Exam_Preparation/CTA L1 ONLINE MOCK EXAM 2 SCENARIO FINAL.pdf',
    title: 'CTA Level 1 Online Mock Exam 2 (Scenario Paper)',
    courseId: 'cta-icaz',
    category: 'Past Papers & Exams',
    fileType: 'PDF',
    description: 'Full scenario for ICAZ CTA Level 1 Mock Exam 2 featuring an integrated corporate entity dealing with business combinations, lease restructuring, and complex tax assessments.',
    keyTopics: ['CTA Level 1', 'Mock Exam 2', 'Integrated Scenario', 'Board Preparation'],
    isEssential: true
  },
  {
    id: 'doc-cta-02',
    filename: '07_CTA_ICAZ_Board_Exam_Preparation/CTA L1 ONLINE MOCK EXAM 2 REQUIRED FINAL.pdf',
    title: 'CTA Level 1 Online Mock Exam 2 (Required Questions)',
    courseId: 'cta-icaz',
    category: 'Past Papers & Exams',
    fileType: 'PDF',
    description: 'The formal required tasks and mark breakdown for CTA Level 1 Mock Exam 2, testing proforma journals, financial statement extracts, and tax advisory memoranda.',
    keyTopics: ['CTA Requirements', 'Mark Allocation', 'Proforma Solutions', 'Advisory Memo'],
    isEssential: true
  },
  {
    id: 'doc-cta-03',
    filename: '07_CTA_ICAZ_Board_Exam_Preparation/ZCTA L2_FT Combined Module 2 2022.pdf',
    title: 'ICAZ Zimbabwe CTA Level 2 Combined Module',
    courseId: 'cta-icaz',
    category: 'Lecture Notes & Slides',
    fileType: 'PDF',
    description: 'Comprehensive Level 2 CTA preparation module integrating advanced tax planning, corporate governance, auditing strategy, and cross-border transactions.',
    keyTopics: ['CTA Level 2', 'ZCTA', 'Advanced Tax Planning', 'Corporate Governance'],
    isEssential: true
  },
  {
    id: 'doc-cta-04',
    filename: '07_CTA_ICAZ_Board_Exam_Preparation/QUESTION BANK.pdf',
    title: 'CTA & Honours Accounting Question Bank (Vol 1)',
    courseId: 'cta-icaz',
    category: 'Practice Questions & Solutions',
    fileType: 'PDF',
    description: 'Multi-chapter question bank containing over 50 exam-level problems on consolidated financial statements, financial instruments, foreign operations, and deferred tax.',
    keyTopics: ['Question Bank', 'Exam Level Problems', 'IFRS Practice', 'Financial Instruments'],
    isEssential: true
  },
  {
    id: 'doc-cta-05',
    filename: '01_CAC4101_Financial_Reporting_IFRS/Group_Accounts_and_Consolidation/Practice-questions-and-answers-Complex-Consolidation-.pdf',
    title: 'Complex Consolidation Practice Questions & Model Answers',
    courseId: 'cta-icaz',
    category: 'Practice Questions & Solutions',
    fileType: 'PDF',
    description: 'Advanced worked examples covering step acquisitions, disposals of subsidiaries, consolidation of foreign subsidiaries, and dividend adjustments.',
    keyTopics: ['Complex Consolidation', 'Step Acquisition', 'Subsidiary Disposal', 'Foreign Subsidiary'],
    isEssential: true
  }
];

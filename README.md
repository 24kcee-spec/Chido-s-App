# Chido's Accounting & CTA Study Repository

A structured, curated academic repository and digital study hub for Honours in Accounting & ICAZ Certificate in Theory of Accounting (CTA) board preparation.

---

## 📁 Repository Directory Structure

```text
├── 01_CAC4101_Financial_Reporting_IFRS/
│   ├── IFRS_and_IAS_Standards/       # Individual IFRS & IAS standards (IAS 1, 10, 12, 16, 20, 24, 28, 36, 37, 38, 40, IFRS 3, 5, 8, 10, 15, 16)
│   ├── Group_Accounts_and_Consolidation/ # Proforma journals, complex group consolidation questions & solutions
│   ├── IPSAS_Public_Sector/          # IPSAS 1, 12, 17, 23 & public sector financial performance modules
│   └── Past_Papers_and_Syllabus/     # Syllabi, past university exams (2016–2023), and tests
│
├── 02_CAC4102_Taxation_and_ZimTax/
│   ├── Textbooks_and_Core_Modules/   # Sabelo Nare 4th Ed, ICAZ CTA ZimTax Module 2022, Taxation 2022
│   ├── Lecture_Slides_and_Topics/    # Gross income, allowable deductions, capital allowances, VAT, withholding taxes
│   ├── Capital_Allowances_and_Calculations/ # 4th schedule schedules, tax rates, tax credit summaries, suspensive sales
│   ├── Specialized_Sectors/
│   │   ├── Farming/                  # Livestock valuation, standard values, drought relief, farming solutions
│   │   ├── Mining/                   # Mining capital redemption allowances & life of mine
│   │   ├── Deceased_Estates_and_Trusts/ # Section 10 rules, vesting vs discretionary trusts
│   │   ├── Partnerships/             # Partnership accruals and tax schedules
│   │   └── Withholding_and_DTR/      # Double taxation relief (Sec 91) & statutory withholding tax rates
│   └── Past_Papers_and_Tutorials/    # Past exam papers, course outlines, tutorial packs 104
│
├── 03_CAC4103_Auditing_and_Assurance/
│   ├── Textbooks_and_Guides/         # Auditing Notes for SA Students (9th ed), CAC4103 study guides, Intro to Audit
│   ├── Study_Units/                  # Units 1–9: Audit process, CPC ethics, COBE Act, Pre-engagement, Evidence
│   ├── Audit_Planning_and_Procedures/ # Materiality calculation, assertions matrix, phase 1 & 2 planning, ISA 600 groups
│   └── Past_Papers/                  # CAC 4103 past papers
│
├── 04_CAC4202_Accounting_Information_Systems/
│   ├── Chapters_and_Textbook/        # Transaction processing, COSO internal controls, Revenue/Expenditure/Conversion cycles
│   ├── Syllabus_and_Notes/           # AIS module synopsis and course outlines
│   └── Quizzes_and_Past_Papers/      # AIS quizzes, exam questions, past papers (2019–2022)
│
├── 05_CAC4105_Management_Accounting/
│   └── (MANAC II module pack, absorption vs marginal costing, standard costing, variances, past papers)
│
├── 06_CAC4201_Advanced_Financial_Reporting/
│   └── (4201 syllabus, past papers 2021–2023, part 4.1 & 4.2 tutorial questions and solutions)
│
├── 07_CTA_ICAZ_Board_Exam_Preparation/
│   └── (CTA Level 1 Mock Exam 2 Scenario & Required, ZCTA Level 2 combined module, Question Bank 1 & 3)
│
└── 08_General_Academic_and_Schedules/
    └── (Academic calendars, master timetables, general practice questions and tutorials)
```

---

## 🎓 Course Overview & Curriculum Focus

### 1. CAC 4101 & CAC 4201: Financial Reporting & IFRS
- **IFRS 10 & 3:** Business combinations, acquisition accounting, Goodwill vs Bargain purchase, Non-Controlling Interest (NCI) fair value vs proportionate share, intra-group eliminations, and unrealised profit in inventory (PURP).
- **IFRS 15:** 5-step revenue recognition model, distinct performance obligations, transaction price allocation based on standalone selling price (SSP), contract assets and liabilities.
- **IFRS 16:** Lessee single model: Right-of-Use (ROU) asset and lease liability amortisation schedules.
- **IAS 12:** Deferred tax balance sheet approach: taxable and deductible temporary differences, tax bases, and deferred tax on revaluation surplus.
- **IPSAS:** Public sector financial statements, fund accounting, and government assistance under IPSAS 1 and IPSAS 12.

### 2. CAC 4102 & ICAZ CTA ZimTax: Zimbabwe Taxation
- **Statute:** Governed by the Income Tax Act [Chapter 23:06], Finance Act, and Capital Gains Tax Act.
- **Gross Income (Sec 8(1)):** Total amount received or accrued from a source within or deemed to be within Zimbabwe, excluding capital receipts (*Lever Brothers* test).
- **General Deductions (Sec 15(2)(a)):** Expenditure and losses actually incurred in the production of income, not being of a capital nature (*Subun v COT*).
- **Capital Allowances (4th Schedule):** Special Initial Allowance (25%), Wear & Tear, Deemed cost restrictions on passenger motor vehicles ($10,000 / $25,000), scrapping allowances, and recoupment.
- **Special Sectors:** Farming livestock standard values, drought relief, mining capital redemption allowances, deceased estates (Sec 10), and Double Taxation Relief (Sec 91).

### 3. CAC 4103: Auditing & Professional Assurance
- **Framework:** International Standards on Auditing (ISA) & IESBA Code of Professional Conduct (CPC).
- **Assertions:** Classes of transactions (Occurrence, Completeness, Accuracy, Cut-off, Classification) & Account Balances (Existence, Rights & Obligations, Completeness, Valuation & Allocation).
- **Audit Materiality (ISA 320):** Determining overall planning materiality, performance materiality (50–75%), and trivial misstatement threshold.
- **Auditor Reporting (ISA 700 / 705):** Unmodified opinion, qualified opinion, adverse opinion, disclaimer of opinion, and Key Audit Matters (ISA 701).

### 4. CAC 4202: Accounting Information Systems (AIS)
- **Controls:** COSO Internal Control Framework, General IT Controls (ITGC) vs Application Controls.
- **Transaction Cycles:** Revenue cycle, Expenditure cycle (3-way match, purchase orders, receiving reports), and Conversion/Payroll cycles.
- **IT Audit:** Computer-Assisted Audit Techniques (CAATs) and fraud prevention.

---

## 💻 Web Study Hub Application

This repository includes an interactive React + Vite + Tailwind revision web application containing:
1. **ZimTax & Capital Allowances Simulator:** Interactive tax computation and 4th schedule capital allowances calculator.
2. **IFRS Standards Explorer & Proformas:** Searchable standard rules with step-by-step proforma debit/credit journal entries.
3. **Audit Assertions & Procedures Generator:** Select financial statement area & assertion to get tailored substantive procedures.
4. **Practice Exam Bank:** Multiple choice and scenario questions with instant grading and step-by-step model solutions.
5. **Study Planner & File Tracker:** Personal study status tracking (Not Started, Reading, Mastered) and personal revision notes.

To run the Study Hub application locally:
```bash
npm install
npm run dev
```
The app will be available at `http://localhost:3000`.

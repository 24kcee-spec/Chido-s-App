import React, { useState, useMemo } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  FileSpreadsheet, 
  Presentation, 
  FileCode,
  Sparkles,
  Layers,
  GitBranch
} from 'lucide-react';
import { DOCUMENTS_CATALOG } from '../data/documentsCatalog';

interface TreeNode {
  name: string;
  path: string;
  isFolder: boolean;
  children?: TreeNode[];
  fileCount?: number;
  catalogId?: string;
  fileType?: string;
}

// Built directly from the organized structure
const FOLDER_TREE: TreeNode = {
  name: "Chido-s-App (Git Root)",
  path: "",
  isFolder: true,
  children: [
    {
      name: "01_CAC4101_Financial_Reporting_IFRS",
      path: "01_CAC4101_Financial_Reporting_IFRS",
      isFolder: true,
      children: [
        {
          name: "IFRS_and_IAS_Standards",
          path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards",
          isFolder: true,
          children: [
            { name: "ias-1-presentation-of-financial-statements.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-1-presentation-of-financial-statements.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-10-events-after-reporting-period.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-10-events-after-reporting-period.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-12-income-taxes.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-12-income-taxes.pdf", isFolder: false, fileType: "PDF" },
            { name: "IAS 12 Question.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/IAS 12 Question.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-16-property-plant-and-equipment.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-16-property-plant-and-equipment.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-20-accounting-for-government-grants-and-disclosure-of-government-assistance.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-20-accounting-for-government-grants-and-disclosure-of-government-assistance.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-24-related-party-disclosures.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-24-related-party-disclosures.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-28-investments-in-associates-and-joint-ventures.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-28-investments-in-associates-and-joint-ventures.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-36-impairment-of-assets.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-36-impairment-of-assets.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-37-provisions-contingent-liabilities-and-contingent-assets.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-37-provisions-contingent-liabilities-and-contingent-assets.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-38-intangible-assets.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-38-intangible-assets.pdf", isFolder: false, fileType: "PDF" },
            { name: "ias-40-investment-property.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ias-40-investment-property.pdf", isFolder: false, fileType: "PDF" },
            { name: "ifrs-3-business-combinations.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-3-business-combinations.pdf", isFolder: false, fileType: "PDF" },
            { name: "ifrs-5-non-current-assets-held-for-sale-and-discontinued-operations.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-5-non-current-assets-held-for-sale-and-discontinued-operations.pdf", isFolder: false, fileType: "PDF" },
            { name: "ifrs-8-operating-segments.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-8-operating-segments.pdf", isFolder: false, fileType: "PDF" },
            { name: "ifrs-10-consolidated-financial-statements.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-10-consolidated-financial-statements.pdf", isFolder: false, fileType: "PDF" },
            { name: "ifrs-15-revenue-from-contracts-with-customers.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-15-revenue-from-contracts-with-customers.pdf", isFolder: false, fileType: "PDF" },
            { name: "Revenue IFRS 15.pptx", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/Revenue IFRS 15.pptx", isFolder: false, fileType: "PPT" },
            { name: "ifrs-16-leases.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/ifrs-16-leases.pdf", isFolder: false, fileType: "PDF" },
            { name: "BORROWING COSTS MUST READ.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IFRS_and_IAS_Standards/BORROWING COSTS MUST READ.pdf", isFolder: false, fileType: "PDF" }
          ]
        },
        {
          name: "Group_Accounts_and_Consolidation",
          path: "01_CAC4101_Financial_Reporting_IFRS/Group_Accounts_and_Consolidation",
          isFolder: true,
          children: [
            { name: "PROFORMA_JOURNALS_TEMPLATE_-_GROUPS[1].pdf", path: "01_CAC4101_Financial_Reporting_IFRS/Group_Accounts_and_Consolidation/PROFORMA_JOURNALS_TEMPLATE_-_GROUPS[1].pdf", isFolder: false, fileType: "PDF" },
            { name: "Practice-questions-and-answers-Complex-Consolidation-.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/Group_Accounts_and_Consolidation/Practice-questions-and-answers-Complex-Consolidation-.pdf", isFolder: false, fileType: "PDF" },
            { name: "questions-and-answers-complex-consolidation.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/Group_Accounts_and_Consolidation/questions-and-answers-complex-consolidation.pdf", isFolder: false, fileType: "PDF" },
            { name: "IFRS_GOOD_Group Group-2022.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/Group_Accounts_and_Consolidation/IFRS_GOOD_Group Group-2022.pdf", isFolder: false, fileType: "PDF" }
          ]
        },
        {
          name: "IPSAS_Public_Sector",
          path: "01_CAC4101_Financial_Reporting_IFRS/IPSAS_Public_Sector",
          isFolder: true,
          children: [
            { name: "CAC 4106 Module IPSASCOVEREDONLY.doc", path: "01_CAC4101_Financial_Reporting_IFRS/IPSAS_Public_Sector/CAC 4106 Module IPSASCOVEREDONLY.doc", isFolder: false, fileType: "DOCX" },
            { name: "IPSAS 1 TUTORIAL.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/IPSAS_Public_Sector/IPSAS 1 TUTORIAL.pdf", isFolder: false, fileType: "PDF" },
            { name: "ipsas12.docx", path: "01_CAC4101_Financial_Reporting_IFRS/IPSAS_Public_Sector/ipsas12.docx", isFolder: false, fileType: "DOCX" }
          ]
        },
        {
          name: "Past_Papers_and_Syllabus",
          path: "01_CAC4101_Financial_Reporting_IFRS/Past_Papers_and_Syllabus",
          isFolder: true,
          children: [
            { name: "4101syllabus.doc", path: "01_CAC4101_Financial_Reporting_IFRS/Past_Papers_and_Syllabus/4101syllabus.doc", isFolder: false, fileType: "DOCX" },
            { name: "CAC 4101 FINANCIAL REPORTING 2016 TEST.docx", path: "01_CAC4101_Financial_Reporting_IFRS/Past_Papers_and_Syllabus/CAC 4101 FINANCIAL REPORTING 2016 TEST.docx", isFolder: false, fileType: "DOCX" },
            { name: "CAC 4101 Past Papers (1).docx", path: "01_CAC4101_Financial_Reporting_IFRS/Past_Papers_and_Syllabus/CAC 4101 Past Papers (1).docx", isFolder: false, fileType: "DOCX" },
            { name: "CAC4101 Past Paper 2023.pdf", path: "01_CAC4101_Financial_Reporting_IFRS/Past_Papers_and_Syllabus/CAC4101 Past Paper 2023.pdf", isFolder: false, fileType: "PDF" }
          ]
        }
      ]
    },
    {
      name: "02_CAC4102_Taxation_and_ZimTax",
      path: "02_CAC4102_Taxation_and_ZimTax",
      isFolder: true,
      children: [
        {
          name: "Textbooks_and_Core_Modules",
          path: "02_CAC4102_Taxation_and_ZimTax/Textbooks_and_Core_Modules",
          isFolder: true,
          children: [
            { name: "Sabelo Nare. Tax Law  & Practice in Zim New 4th (1).pdf", path: "02_CAC4102_Taxation_and_ZimTax/Textbooks_and_Core_Modules/Sabelo Nare. Tax Law  & Practice in Zim New 4th (1).pdf", isFolder: false, fileType: "PDF" },
            { name: "ICAZ CTA ZIMTAX MODULE 2022.pdf", path: "02_CAC4102_Taxation_and_ZimTax/Textbooks_and_Core_Modules/ICAZ CTA ZIMTAX MODULE 2022.pdf", isFolder: false, fileType: "PDF" },
            { name: "Taxation 2022.pdf", path: "02_CAC4102_Taxation_and_ZimTax/Textbooks_and_Core_Modules/Taxation 2022.pdf", isFolder: false, fileType: "PDF" }
          ]
        },
        {
          name: "Lecture_Slides_and_Topics",
          path: "02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics",
          isFolder: true,
          children: [
            { name: "01 Tax Credits & Tax Calculation-1.ppt", path: "02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/01 Tax Credits & Tax Calculation-1.ppt", isFolder: false, fileType: "PPT" },
            { name: "02 Gross Income Module.ppt", path: "02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/02 Gross Income Module.ppt", isFolder: false, fileType: "PPT" },
            { name: "02 Allowable Deductions.ppt", path: "02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/02 Allowable Deductions.ppt", isFolder: false, fileType: "PPT" },
            { name: "07_Capital_Allowances.ppt", path: "02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/07_Capital_Allowances.ppt", isFolder: false, fileType: "PPT" },
            { name: "08_Lease_Premiums_and_Lease_Inprovements.ppt", path: "02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/08_Lease_Premiums_and_Lease_Inprovements.ppt", isFolder: false, fileType: "PPT" },
            { name: "VAT_(VALUE_ADDED_TAX).pptx", path: "02_CAC4102_Taxation_and_ZimTax/Lecture_Slides_and_Topics/VAT_(VALUE_ADDED_TAX).pptx", isFolder: false, fileType: "PPT" }
          ]
        },
        {
          name: "Specialized_Sectors",
          path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors",
          isFolder: true,
          children: [
            {
              name: "Farming",
              path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Farming",
              isFolder: true,
              children: [
                { name: "STUDY UNIT J - FARMING (1).pdf", path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Farming/STUDY UNIT J - FARMING (1).pdf", isFolder: false, fileType: "PDF" },
                { name: "Farming.pptx", path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Farming/Farming.pptx", isFolder: false, fileType: "PPT" },
                { name: "Farming example solution.xlsx", path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Farming/Farming example solution.xlsx", isFolder: false, fileType: "XLSX" }
              ]
            },
            {
              name: "Mining",
              path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Mining",
              isFolder: true,
              children: [
                { name: "Study Unit K - Mining.pdf", path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Mining/Study Unit K - Mining.pdf", isFolder: false, fileType: "PDF" }
              ]
            },
            {
              name: "Withholding_and_DTR",
              path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Withholding_and_DTR",
              isFolder: true,
              children: [
                { name: "STUDY UNIT G WITHHOLDING TAXES.pdf", path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Withholding_and_DTR/STUDY UNIT G WITHHOLDING TAXES.pdf", isFolder: false, fileType: "PDF" },
                { name: "STUDY UNIT F DOUBLE TAXATION RELIEF.pdf", path: "02_CAC4102_Taxation_and_ZimTax/Specialized_Sectors/Withholding_and_DTR/STUDY UNIT F DOUBLE TAXATION RELIEF.pdf", isFolder: false, fileType: "PDF" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "03_CAC4103_Auditing_and_Assurance",
      path: "03_CAC4103_Auditing_and_Assurance",
      isFolder: true,
      children: [
        {
          name: "Textbooks_and_Guides",
          path: "03_CAC4103_Auditing_and_Assurance/Textbooks_and_Guides",
          isFolder: true,
          children: [
            { name: "Auditing Notes for SA Students (9th ed)-2.pdf", path: "03_CAC4103_Auditing_and_Assurance/Textbooks_and_Guides/Auditing Notes for SA Students (9th ed)-2.pdf", isFolder: false, fileType: "PDF" },
            { name: "Auditing 4103.pdf", path: "03_CAC4103_Auditing_and_Assurance/Textbooks_and_Guides/Auditing 4103.pdf", isFolder: false, fileType: "PDF" },
            { name: "CAC4103 Study Guide_bm.pdf", path: "03_CAC4103_Auditing_and_Assurance/Textbooks_and_Guides/CAC4103 Study Guide_bm.pdf", isFolder: false, fileType: "PDF" }
          ]
        },
        {
          name: "Study_Units",
          path: "03_CAC4103_Auditing_and_Assurance/Study_Units",
          isFolder: true,
          children: [
            { name: "1. Study unit 1 - The Audit Process.pdf", path: "03_CAC4103_Auditing_and_Assurance/Study_Units/1. Study unit 1 - The Audit Process.pdf", isFolder: false, fileType: "PDF" },
            { name: "2. Study Unit 2 - CPC.pdf", path: "03_CAC4103_Auditing_and_Assurance/Study_Units/2. Study Unit 2 - CPC.pdf", isFolder: false, fileType: "PDF" },
            { name: "8. Study Unit 8 - Audit Evidence.pdf", path: "03_CAC4103_Auditing_and_Assurance/Study_Units/8. Study Unit 8 - Audit Evidence.pdf", isFolder: false, fileType: "PDF" }
          ]
        },
        {
          name: "Audit_Planning_and_Procedures",
          path: "03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures",
          isFolder: true,
          children: [
            { name: "2. Audit Planning 2019.pdf", path: "03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures/2. Audit Planning 2019.pdf", isFolder: false, fileType: "PDF" },
            { name: "6._Materiality_2020_bm.pdf", path: "03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures/6._Materiality_2020_bm.pdf", isFolder: false, fileType: "PDF" },
            { name: "Assertions.pdf", path: "03_CAC4103_Auditing_and_Assurance/Audit_Planning_and_Procedures/Assertions.pdf", isFolder: false, fileType: "PDF" }
          ]
        }
      ]
    },
    {
      name: "04_CAC4202_Accounting_Information_Systems",
      path: "04_CAC4202_Accounting_Information_Systems",
      isFolder: true,
      children: [
        {
          name: "Chapters_and_Textbook",
          path: "04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook",
          isFolder: true,
          children: [
            { name: "chapter 1, IS accountant perspective.pdf", path: "04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/chapter 1, IS accountant perspective.pdf", isFolder: false, fileType: "PDF" },
            { name: "chapter 3 ethics fraud and internal control.pdf", path: "04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/chapter 3 ethics fraud and internal control.pdf", isFolder: false, fileType: "PDF" },
            { name: "chapter 4 Revenue Cycle.pdf", path: "04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/chapter 4 Revenue Cycle.pdf", isFolder: false, fileType: "PDF" },
            { name: "chapter 5 expenditure cycle.pdf", path: "04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/chapter 5 expenditure cycle.pdf", isFolder: false, fileType: "PDF" },
            { name: "Chapter 6 payroll.pdf", path: "04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/Chapter 6 payroll.pdf", isFolder: false, fileType: "PDF" },
            { name: "Chapter 7 Conversion Cycle.pdf", path: "04_CAC4202_Accounting_Information_Systems/Chapters_and_Textbook/Chapter 7 Conversion Cycle.pdf", isFolder: false, fileType: "PDF" }
          ]
        },
        {
          name: "Quizzes_and_Past_Papers",
          path: "04_CAC4202_Accounting_Information_Systems/Quizzes_and_Past_Papers",
          isFolder: true,
          children: [
            { name: "AIS QUIZ.pdf", path: "04_CAC4202_Accounting_Information_Systems/Quizzes_and_Past_Papers/AIS QUIZ.pdf", isFolder: false, fileType: "PDF" },
            { name: "AIS December 2019.pdf", path: "04_CAC4202_Accounting_Information_Systems/Quizzes_and_Past_Papers/AIS December 2019.pdf", isFolder: false, fileType: "PDF" }
          ]
        }
      ]
    },
    {
      name: "05_CAC4105_Management_Accounting",
      path: "05_CAC4105_Management_Accounting",
      isFolder: true,
      children: [
        { name: "MANAC II MODULE CAC4105 UPDATED.pdf", path: "05_CAC4105_Management_Accounting/MANAC II MODULE CAC4105 UPDATED.pdf", isFolder: false, fileType: "PDF" },
        { name: "Absorption and marginal costing.ppt", path: "05_CAC4105_Management_Accounting/Absorption and marginal costing.ppt", isFolder: false, fileType: "PPT" },
        { name: "CAC_4105_past_paper.pdf", path: "05_CAC4105_Management_Accounting/CAC_4105_past_paper.pdf", isFolder: false, fileType: "PDF" }
      ]
    },
    {
      name: "06_CAC4201_Advanced_Financial_Reporting",
      path: "06_CAC4201_Advanced_Financial_Reporting",
      isFolder: true,
      children: [
        { name: "4201syllabus.doc", path: "06_CAC4201_Advanced_Financial_Reporting/4201syllabus.doc", isFolder: false, fileType: "DOCX" },
        { name: "CAC 4201_2021 question paper.pdf", path: "06_CAC4201_Advanced_Financial_Reporting/CAC 4201_2021 question paper.pdf", isFolder: false, fileType: "PDF" },
        { name: "cac 4201 2023.pdf", path: "06_CAC4201_Advanced_Financial_Reporting/cac 4201 2023.pdf", isFolder: false, fileType: "PDF" }
      ]
    },
    {
      name: "07_CTA_ICAZ_Board_Exam_Preparation",
      path: "07_CTA_ICAZ_Board_Exam_Preparation",
      isFolder: true,
      children: [
        { name: "CTA L1 ONLINE MOCK EXAM 2 SCENARIO FINAL.pdf", path: "07_CTA_ICAZ_Board_Exam_Preparation/CTA L1 ONLINE MOCK EXAM 2 SCENARIO FINAL.pdf", isFolder: false, fileType: "PDF" },
        { name: "CTA L1 ONLINE MOCK EXAM 2 REQUIRED FINAL.pdf", path: "07_CTA_ICAZ_Board_Exam_Preparation/CTA L1 ONLINE MOCK EXAM 2 REQUIRED FINAL.pdf", isFolder: false, fileType: "PDF" },
        { name: "ZCTA L2_FT Combined Module 2 2022.pdf", path: "07_CTA_ICAZ_Board_Exam_Preparation/ZCTA L2_FT Combined Module 2 2022.pdf", isFolder: false, fileType: "PDF" },
        { name: "QUESTION BANK.pdf", path: "07_CTA_ICAZ_Board_Exam_Preparation/QUESTION BANK.pdf", isFolder: false, fileType: "PDF" }
      ]
    },
    {
      name: "08_General_Academic_and_Schedules",
      path: "08_General_Academic_and_Schedules",
      isFolder: true,
      children: [
        { name: "Amended Academic Calendar Oct 2023.pdf", path: "08_General_Academic_and_Schedules/Amended Academic Calendar Oct 2023.pdf", isFolder: false, fileType: "PDF" },
        { name: "Second Semester First Phase Master Teaching Timetable - 2023- 2024.xlsx", path: "08_General_Academic_and_Schedules/Second Semester First Phase Master Teaching Timetable - 2023- 2024.xlsx", isFolder: false, fileType: "XLSX" }
      ]
    }
  ]
};

export const DirectoryExplorerView: React.FC = () => {
  const [expandedPaths, setExpandedPaths] = useState<Record<string, boolean>>({
    "": true,
    "01_CAC4101_Financial_Reporting_IFRS": true,
    "02_CAC4102_Taxation_and_ZimTax": true
  });
  const [selectedFile, setSelectedFile] = useState<TreeNode | null>(null);
  const [copied, setCopied] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  const toggleFolder = (path: string) => {
    setExpandedPaths(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderTree = (node: TreeNode, depth: number = 0) => {
    const isExpanded = Boolean(expandedPaths[node.path]);

    if (node.isFolder) {
      return (
        <div key={node.path} className="select-none">
          <div
            onClick={() => toggleFolder(node.path)}
            style={{ paddingLeft: `${depth * 16 + 8}px` }}
            className={`py-1.5 pr-3 flex items-center gap-2 rounded-lg cursor-pointer hover:bg-slate-100/80 transition-colors text-xs font-semibold text-slate-800 ${
              depth === 0 ? 'bg-slate-100 font-bold' : ''
            }`}
          >
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-amber-500 shrink-0" />
            ) : (
              <Folder className="w-4 h-4 text-amber-500 shrink-0" />
            )}
            <span className="truncate">{node.name}</span>
            {node.children && (
              <span className="text-[10px] text-slate-400 font-mono ml-auto">
                {node.children.length}
              </span>
            )}
          </div>

          {isExpanded && node.children && (
            <div className="space-y-0.5 mt-0.5">
              {node.children.map(child => renderTree(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    // File item
    const isSelected = selectedFile?.path === node.path;
    return (
      <div
        key={node.path}
        onClick={() => setSelectedFile(node)}
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
        className={`py-1.5 pr-3 flex items-center gap-2 rounded-lg cursor-pointer text-xs transition-colors ${
          isSelected
            ? 'bg-indigo-50 text-indigo-700 font-semibold'
            : 'text-slate-600 hover:bg-slate-50'
        }`}
      >
        <FileText className={`w-3.5 h-3.5 shrink-0 ${
          node.fileType === 'PDF' ? 'text-rose-500' : node.fileType === 'PPT' ? 'text-orange-500' : 'text-blue-500'
        }`} />
        <span className="truncate">{node.name}</span>
        <span className="text-[9px] px-1.5 py-0.2 rounded font-bold uppercase bg-slate-100 text-slate-500 ml-auto font-mono">
          {node.fileType || 'FILE'}
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-indigo-600" />
            <span>Git Repository Directory Tree Explorer</span>
          </h2>
          <p className="text-xs text-slate-500">
            Interactive folder structure reflecting the exact file reorganization committed to GitHub main.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg font-bold">
            git branch: main (Synced)
          </span>
        </div>
      </div>

      {/* Main Split: Tree Navigator & File Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Directory Tree Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs max-h-[700px] overflow-y-auto space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Folder Structure</span>
            <button
              onClick={() => {
                const allOpen: Record<string, boolean> = {};
                const markOpen = (n: TreeNode) => {
                  if (n.isFolder) allOpen[n.path] = true;
                  n.children?.forEach(markOpen);
                };
                markOpen(FOLDER_TREE);
                setExpandedPaths(allOpen);
              }}
              className="text-[10px] text-indigo-600 hover:underline cursor-pointer"
            >
              Expand All
            </button>
          </div>

          <div className="space-y-1">
            {renderTree(FOLDER_TREE)}
          </div>
        </div>

        {/* Selected File Details / Actions */}
        <div className="lg:col-span-2">
          {selectedFile ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5 sticky top-24">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">
                    File Details &amp; Inspector
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {selectedFile.name}
                  </h3>
                </div>
                <button
                  onClick={() => handleCopyPath(selectedFile.path)}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy relative file path"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Path'}</span>
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Git Path:</span>
                  <span className="text-slate-800 font-semibold truncate max-w-sm">{selectedFile.path}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">File Format:</span>
                  <span className="font-bold text-indigo-700">{selectedFile.fileType || 'Document'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Git Status:</span>
                  <span className="text-emerald-700 font-sans font-bold">Committed to origin/main</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`/${selectedFile.path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open File in Browser / Download</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
              <Folder className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-slate-700">No file selected</h4>
              <p className="text-xs text-slate-500 mt-1">
                Click on any file in the folder hierarchy on the left to view details and launch.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

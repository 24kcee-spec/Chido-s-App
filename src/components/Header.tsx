import React from 'react';
import { 
  BookOpen, 
  FileText, 
  Calculator, 
  Scale, 
  CheckCircle2, 
  GraduationCap, 
  Search,
  CalendarCheck
} from 'lucide-react';

export type ActiveTab = 'courses' | 'documents' | 'tax-calculator' | 'ifrs-standards' | 'audit-matrix' | 'practice-quiz' | 'study-planner';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  completedDocsCount: number;
  totalDocsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  completedDocsCount,
  totalDocsCount
}) => {
  const tabs = [
    { id: 'courses', label: 'Course Tracks', icon: GraduationCap, badge: '6 Tracks' },
    { id: 'documents', label: 'Study Library', icon: FileText, badge: `${completedDocsCount}/${totalDocsCount}` },
    { id: 'tax-calculator', label: 'ZimTax & Capital Allowances', icon: Calculator, badge: 'Simulator' },
    { id: 'ifrs-standards', label: 'IFRS & Proformas', icon: BookOpen, badge: 'IAS/IFRS' },
    { id: 'audit-matrix', label: 'Audit & Assertions', icon: Scale, badge: 'ISA/CPC' },
    { id: 'practice-quiz', label: 'Exam Question Bank', icon: CheckCircle2, badge: 'Practice' },
    { id: 'study-planner', label: 'Study Planner', icon: CalendarCheck, badge: 'Track' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={() => setActiveTab('courses')}>
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-lg">Chido's Study Hub</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60 hidden sm:inline-block">
                  Accounting &amp; CTA
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden md:block">
                NUST CAC 4101-4202 • ICAZ CTA Board Prep • ZimTax &amp; IFRS
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search standards, tax rules, past papers, lecture notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Progress Pill */}
          <div className="hidden lg:flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-emerald-800 text-xs">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">Revision Progress:</span>
            <span>{Math.round((completedDocsCount / (totalDocsCount || 1)) * 100)}% complete</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm font-medium border-t border-slate-100 pt-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                      isActive
                        ? 'bg-indigo-800/80 text-indigo-100'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

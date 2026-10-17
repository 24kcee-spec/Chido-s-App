import React, { useState, useEffect } from 'react';
import { Header, ActiveTab } from './components/Header';
import { CoursesView } from './components/CoursesView';
import { DocumentLibraryView } from './components/DocumentLibraryView';
import { TaxCalculatorView } from './components/TaxCalculatorView';
import { IFRSStandardsView } from './components/IFRSStandardsView';
import { AuditMatrixView } from './components/AuditMatrixView';
import { PracticeQuizView } from './components/PracticeQuizView';
import { StudyPlannerView } from './components/StudyPlannerView';
import { DOCUMENTS_CATALOG } from './data/documentsCatalog';
import { GraduationCap, Heart, FolderTree } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('courses');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [initialCourseFilter, setInitialCourseFilter] = useState<string>('all');

  // Persistence: Document status (not_started, reading, completed)
  const [documentStatuses, setDocumentStatuses] = useState<Record<string, 'not_started' | 'reading' | 'completed'>>(() => {
    try {
      const saved = localStorage.getItem('chidos_doc_statuses');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persistence: Starred docs
  const [starredDocs, setStarredDocs] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('chidos_starred_docs');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persistence: Notes per doc
  const [docNotes, setDocNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('chidos_doc_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('chidos_doc_statuses', JSON.stringify(documentStatuses));
  }, [documentStatuses]);

  useEffect(() => {
    localStorage.setItem('chidos_starred_docs', JSON.stringify(starredDocs));
  }, [starredDocs]);

  useEffect(() => {
    localStorage.setItem('chidos_doc_notes', JSON.stringify(docNotes));
  }, [docNotes]);

  // Handlers
  const handleToggleDocStatus = (docId: string) => {
    setDocumentStatuses(prev => {
      const current = prev[docId] || 'not_started';
      let next: 'not_started' | 'reading' | 'completed' = 'reading';
      if (current === 'not_started') next = 'reading';
      else if (current === 'reading') next = 'completed';
      else next = 'not_started';
      return { ...prev, [docId]: next };
    });
  };

  const handleToggleStar = (docId: string) => {
    setStarredDocs(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const handleSaveNote = (docId: string, note: string) => {
    setDocNotes(prev => ({
      ...prev,
      [docId]: note
    }));
  };

  const handleSelectCourseFromTrack = (courseId: string) => {
    setInitialCourseFilter(courseId);
    setActiveTab('documents');
  };

  // Completed count for progress pill in header
  const completedDocsCount = Object.values(documentStatuses).filter(s => s === 'completed').length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedDocsCount={completedDocsCount}
        totalDocsCount={DOCUMENTS_CATALOG.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'courses' && (
          <CoursesView
            onSelectCourse={handleSelectCourseFromTrack}
            onNavigateToTab={setActiveTab}
          />
        )}

        {activeTab === 'documents' && (
          <DocumentLibraryView
            initialCourseFilter={initialCourseFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            documentStatuses={documentStatuses}
            starredDocs={starredDocs}
            docNotes={docNotes}
            onToggleStatus={handleToggleDocStatus}
            onToggleStar={handleToggleStar}
            onSaveNote={handleSaveNote}
          />
        )}

        {activeTab === 'tax-calculator' && <TaxCalculatorView />}

        {activeTab === 'ifrs-standards' && <IFRSStandardsView />}

        {activeTab === 'audit-matrix' && <AuditMatrixView />}

        {activeTab === 'practice-quiz' && <PracticeQuizView />}

        {activeTab === 'study-planner' && <StudyPlannerView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-slate-700">Chido's Accounting &amp; CTA Study Hub</span>
            <span>• Organized Course Material &amp; Interactive Revision</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('courses')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Courses
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Documents ({DOCUMENTS_CATALOG.length})
            </button>
            <button
              onClick={() => setActiveTab('tax-calculator')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              ZimTax
            </button>
            <button
              onClick={() => setActiveTab('ifrs-standards')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              IFRS
            </button>
            <button
              onClick={() => setActiveTab('practice-quiz')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Quizzes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

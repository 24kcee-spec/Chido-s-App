import React, { useState, useMemo } from 'react';
import { DOCUMENTS_CATALOG, DocumentItem } from '../data/documentsCatalog';
import { COURSES_DATA } from '../data/coursesData';
import { 
  FileText, 
  Search, 
  Filter, 
  CheckCircle, 
  Circle, 
  Star, 
  ExternalLink, 
  Tag, 
  BookMarked, 
  Sparkles,
  Download,
  CheckCircle2,
  Clock,
  Layers,
  FileSpreadsheet,
  Presentation,
  FileCode
} from 'lucide-react';

interface DocumentLibraryViewProps {
  initialCourseFilter?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  documentStatuses: Record<string, 'not_started' | 'reading' | 'completed'>;
  starredDocs: Record<string, boolean>;
  docNotes: Record<string, string>;
  onToggleStatus: (docId: string) => void;
  onToggleStar: (docId: string) => void;
  onSaveNote: (docId: string, note: string) => void;
}

export const DocumentLibraryView: React.FC<DocumentLibraryViewProps> = ({
  initialCourseFilter = 'all',
  searchQuery,
  setSearchQuery,
  documentStatuses,
  starredDocs,
  docNotes,
  onToggleStatus,
  onToggleStar,
  onSaveNote,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourseFilter);
  const [selectedFileType, setSelectedFileType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyEssential, setOnlyEssential] = useState<boolean>(false);
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const [currentNoteText, setCurrentNoteText] = useState<string>('');

  // When selected doc changes, load its existing note
  const handleSelectDoc = (doc: DocumentItem) => {
    setSelectedDoc(doc);
    setCurrentNoteText(docNotes[doc.id] || '');
  };

  const handleSaveCurrentNote = () => {
    if (selectedDoc) {
      onSaveNote(selectedDoc.id, currentNoteText);
    }
  };

  const filteredDocs = useMemo(() => {
    return DOCUMENTS_CATALOG.filter((doc) => {
      // Course filter
      if (selectedCourse !== 'all' && doc.courseId !== selectedCourse) return false;

      // File type filter
      if (selectedFileType !== 'all' && doc.fileType !== selectedFileType) return false;

      // Category filter
      if (selectedCategory !== 'all' && doc.category !== selectedCategory) return false;

      // Essential filter
      if (onlyEssential && !doc.isEssential) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = doc.title.toLowerCase().includes(query);
        const matchesFilename = doc.filename.toLowerCase().includes(query);
        const matchesDesc = doc.description.toLowerCase().includes(query);
        const matchesTopics = doc.keyTopics.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesFilename && !matchesDesc && !matchesTopics) return false;
      }

      return true;
    });
  }, [selectedCourse, selectedFileType, selectedCategory, onlyEssential, searchQuery]);

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="w-4 h-4 text-rose-600" />;
      case 'PPT':
        return <Presentation className="w-4 h-4 text-orange-600" />;
      case 'XLSX':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-600" />;
      case 'DOCX':
        return <FileCode className="w-4 h-4 text-blue-600" />;
      default:
        return <FileText className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-indigo-600" />
            <span>Academic Documents &amp; Revision Archive</span>
          </h2>
          <p className="text-xs text-slate-500">
            Browse lecture modules, exam questions, proformas, standard solutions, and textbooks imported from the repository.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 font-medium">
            Showing <strong className="text-indigo-600">{filteredDocs.length}</strong> of {DOCUMENTS_CATALOG.length} files
          </div>
          <button
            onClick={() => setOnlyEssential(!onlyEssential)}
            className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              onlyEssential
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Yield Only</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
        {/* Course Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Subject:
          </span>
          <button
            onClick={() => setSelectedCourse('all')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCourse === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Subjects ({DOCUMENTS_CATALOG.length})
          </button>
          {COURSES_DATA.map((course) => {
            const count = DOCUMENTS_CATALOG.filter((d) => d.courseId === course.id).length;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCourse === course.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {course.code} ({count})
              </button>
            );
          })}
        </div>

        {/* Secondary Filters: File Type & Category */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 text-xs">
          {/* File Types */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-semibold text-[10px] uppercase">Format:</span>
            {['all', 'PDF', 'PPT', 'DOCX', 'XLSX'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedFileType(type)}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                  selectedFileType === type
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-semibold text-[10px] uppercase">Category:</span>
            {['all', 'Lecture Notes & Slides', 'Past Papers & Exams', 'Practice Questions & Solutions', 'Accounting Standards'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat.split('&')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout: Documents Grid + Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documents List */}
        <div className={`space-y-3 ${selectedDoc ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          {filteredDocs.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-700">No documents found</h3>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your filters or search terms.</p>
              <button
                onClick={() => {
                  setSelectedCourse('all');
                  setSelectedFileType('all');
                  setSelectedCategory('all');
                  setOnlyEssential(false);
                  setSearchQuery('');
                }}
                className="mt-4 px-3 py-1.5 bg-indigo-50 text-indigo-700 font-medium text-xs rounded-lg hover:bg-indigo-100 cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredDocs.map((doc) => {
              const status = documentStatuses[doc.id] || 'not_started';
              const isStarred = starredDocs[doc.id] || false;
              const hasNote = Boolean(docNotes[doc.id]);
              const course = COURSES_DATA.find((c) => c.id === doc.courseId);
              const isSelected = selectedDoc?.id === doc.id;

              return (
                <div
                  key={doc.id}
                  onClick={() => handleSelectDoc(doc)}
                  className={`bg-white p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-indigo-600 ring-2 ring-indigo-500/20 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    {/* Status Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleStatus(doc.id);
                      }}
                      title="Click to cycle status: Not Started → Reading → Completed"
                      className="mt-0.5 text-slate-300 hover:text-indigo-600 transition-colors shrink-0 cursor-pointer"
                    >
                      {status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      ) : status === 'reading' ? (
                        <Clock className="w-5 h-5 text-amber-500" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                          {getFileTypeIcon(doc.fileType)}
                          <span>{doc.fileType}</span>
                        </span>
                        <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {course?.code}
                        </span>
                        <span className="text-[10px] text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md">
                          {doc.category}
                        </span>
                        {doc.isEssential && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded-md flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" /> High-Yield
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {doc.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-1 mt-2">
                        {doc.keyTopics.slice(0, 3).map((topic, i) => (
                          <span key={i} className="text-[10px] text-slate-600 bg-slate-100/80 px-1.5 py-0.5 rounded">
                            #{topic}
                          </span>
                        ))}
                        {doc.keyTopics.length > 3 && (
                          <span className="text-[10px] text-slate-400">+{doc.keyTopics.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Star */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    {hasNote && (
                      <span className="text-[10px] bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded border border-amber-200">
                        Note saved
                      </span>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleStar(doc.id);
                      }}
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                        isStarred
                          ? 'bg-amber-50 text-amber-500 border-amber-200'
                          : 'text-slate-400 hover:text-amber-500 border-slate-200 hover:bg-slate-50'
                      }`}
                      title={isStarred ? 'Unstar' : 'Star for revision'}
                    >
                      <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`/${doc.filename}`, '_blank');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs flex items-center gap-1.5 border border-indigo-200/60 cursor-pointer"
                      title="Open file from repository"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Open File</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Selected Document Details Drawer */}
        {selectedDoc && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4 h-fit sticky top-24">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">
                  Document Preview &amp; Revision Notes
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-slate-400 hover:text-slate-600 text-xs px-2 py-1 rounded bg-slate-100"
              >
                Close
              </button>
            </div>

            <div className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-2">
              <div className="flex justify-between text-slate-600">
                <span className="font-semibold">Repository File:</span>
                <code className="font-mono text-[11px] text-slate-800 bg-white px-1.5 py-0.5 rounded border border-slate-200 truncate max-w-[180px]">
                  {selectedDoc.filename}
                </code>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="font-semibold">Category:</span>
                <span>{selectedDoc.category}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="font-semibold">Format:</span>
                <span>{selectedDoc.fileType}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="font-semibold">Study Status:</span>
                <span className="capitalize font-bold text-indigo-700">
                  {(documentStatuses[selectedDoc.id] || 'not started').replace('_', ' ')}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-1">Key Curriculum Concepts:</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedDoc.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-1.5">Exam Tags:</h4>
              <div className="flex flex-wrap gap-1">
                {selectedDoc.keyTopics.map((tag, idx) => (
                  <span key={idx} className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Revision Personal Notes */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                  <span>My Revision Notes:</span>
                </label>
                <span className="text-[10px] text-slate-400">Auto-saved locally</span>
              </div>
              <textarea
                value={currentNoteText}
                onChange={(e) => setCurrentNoteText(e.target.value)}
                placeholder="Type your summary, key formulas, case laws or exam reminders for this document..."
                rows={4}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              />
              <button
                onClick={handleSaveCurrentNote}
                className="mt-2 w-full py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Save Notes
              </button>
            </div>

            {/* Launch / Download Button */}
            <a
              href={`/${selectedDoc.filename}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Download / Open in Browser</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

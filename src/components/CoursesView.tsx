import React, { useState, useMemo } from 'react';
import { COURSES_DATA, CourseInfo } from '../data/coursesData';
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Award,
  Calculator,
  CheckCircle2,
  FileText,
  AlertCircle
} from 'lucide-react';
import { ActiveTab } from './Header';

interface CoursesViewProps {
  onSelectCourse: (courseId: string) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({ onSelectCourse, onNavigateToTab }) => {
  const [selectedSemester, setSelectedSemester] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    if (selectedSemester === 'all') return COURSES_DATA;
    return COURSES_DATA.filter(c => c.semester === selectedSemester);
  }, [selectedSemester]);

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-indigo-900/40">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>NUST Part IV (Final Year) Honours Degree &amp; CTA Revision Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Final Year Accounting Curriculum &amp; Exam Portal
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Welcome to <span className="text-indigo-300 font-semibold">Chido's Accounting &amp; CTA Study Hub</span>. Comprehensive syllabus outlines and study materials covering both First Semester (CAC 4101–4105, 4006) and Second Semester (CAC 4201–4205, 4006).
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateToTab('calculators')}
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Financial Solvers</span>
            </button>
            <button
              onClick={() => onNavigateToTab('documents')}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl text-xs sm:text-sm backdrop-blur-xs transition-all border border-white/10 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Browse 100+ Documents</span>
            </button>
            <button
              onClick={() => onNavigateToTab('practice-quiz')}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Test Knowledge</span>
            </button>
          </div>
        </div>

        {/* Decorative Grid Patterns */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            11
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Part IV Modules</div>
            <div className="text-sm font-bold text-slate-800">Semesters 1 &amp; 2</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
            100+
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Study Materials</div>
            <div className="text-sm font-bold text-slate-800">Notes, PPTs &amp; Papers</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            5
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Interactive Solvers</div>
            <div className="text-sm font-bold text-slate-800">ZimTax, PAYE, Leases</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            100%
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Syllabus Mapping</div>
            <div className="text-sm font-bold text-slate-800">Final Year Degree</div>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Final Year (Part IV) Academic Courses</h2>
            <p className="text-xs text-slate-500">Compare curriculum coverage, view syllabus units, and access revision modules.</p>
          </div>

          {/* Semester Filter */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold overflow-x-auto">
            <button
              onClick={() => setSelectedSemester('all')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedSemester === 'all' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Part IV ({COURSES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedSemester('Part IV - First Semester')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedSemester === 'Part IV - First Semester' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              First Semester
            </button>
            <button
              onClick={() => setSelectedSemester('Part IV - Second Semester')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedSemester === 'Part IV - Second Semester' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Second Semester
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course: CourseInfo) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {course.semester}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        course.status === 'In Repository'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {course.code}: {course.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      {course.level} • {course.department}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${course.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Units List */}
                <div className="space-y-2 mb-4 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>Syllabus Highlights ({course.units.length} Units)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {course.units.map((unit) => (
                      <div key={unit.unitNumber} className="bg-white p-2 rounded-lg border border-slate-200/60 shadow-2xs">
                        <span className="font-semibold text-slate-800">Unit {unit.unitNumber}:</span>{' '}
                        <span className="text-slate-600">{unit.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exam Pattern */}
                <div className="text-xs text-slate-500 flex items-start gap-2">
                  <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-700">Exam Format:</strong> {course.examPattern}</span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                {course.status === 'In Repository' ? (
                  <button
                    onClick={() => onSelectCourse(course.id)}
                    className="font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 group-hover:underline cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Repository Files</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <span className="text-slate-500 text-[11px] flex items-center gap-1 italic">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    <span>Syllabus guide created (files pending upload)</span>
                  </span>
                )}

                {course.id === 'cac-4102' || course.id === 'cac-4202' ? (
                  <button
                    onClick={() => onNavigateToTab('calculators')}
                    className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-medium hover:bg-emerald-200 transition-colors cursor-pointer"
                  >
                    Open Tax Calculator
                  </button>
                ) : course.id === 'cac-4101' || course.id === 'cac-4201' ? (
                  <button
                    onClick={() => onNavigateToTab('ifrs-standards')}
                    className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                  >
                    Open IFRS Guide
                  </button>
                ) : course.id === 'cac-4103' || course.id === 'cac-4203' ? (
                  <button
                    onClick={() => onNavigateToTab('audit-matrix')}
                    className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 font-medium hover:bg-amber-200 transition-colors cursor-pointer"
                  >
                    Open Audit Matrix
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigateToTab('practice-quiz')}
                    className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 font-medium hover:bg-purple-200 transition-colors cursor-pointer"
                  >
                    Practice Questions
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

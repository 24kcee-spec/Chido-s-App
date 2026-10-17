import React from 'react';
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
  FileText
} from 'lucide-react';
import { ActiveTab } from './Header';

interface CoursesViewProps {
  onSelectCourse: (courseId: string) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({ onSelectCourse, onNavigateToTab }) => {
  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-indigo-900/40">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Honours in Accounting &amp; CTA Board Revision Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Master Financial Reporting, ZimTax, Auditing &amp; AIS
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Welcome to <span className="text-indigo-300 font-semibold">Chido's Accounting &amp; CTA Study Hub</span>. A structured digital portal connecting over 100+ academic papers, lecture decks, and past examinations with interactive solvers for Zimbabwe capital allowances, IFRS proforma journals, and audit risk matrices.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateToTab('tax-calculator')}
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch ZimTax Simulator</span>
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
            6
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Core Courses</div>
            <div className="text-sm font-bold text-slate-800">Part IV &amp; CTA Track</div>
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
            20+
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Accounting Standards</div>
            <div className="text-sm font-bold text-slate-800">IFRS, IAS &amp; IPSAS</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            100%
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Offline Interactive</div>
            <div className="text-sm font-bold text-slate-800">Local Calculators</div>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Academic Syllabus &amp; Course Tracks</h2>
            <p className="text-xs text-slate-500">Explore modules, learning outcomes, syllabus units, and study assets.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {COURSES_DATA.map((course: CourseInfo) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 inline-block mb-1">
                      {course.badge}
                    </span>
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
                <button
                  onClick={() => onSelectCourse(course.id)}
                  className="font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 group-hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Course Materials</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {course.id === 'cac-4102' ? (
                  <button
                    onClick={() => onNavigateToTab('tax-calculator')}
                    className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-medium hover:bg-emerald-200 transition-colors cursor-pointer"
                  >
                    Open Tax Calculator
                  </button>
                ) : course.id === 'cac-4101' ? (
                  <button
                    onClick={() => onNavigateToTab('ifrs-standards')}
                    className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                  >
                    Open IFRS Guide
                  </button>
                ) : course.id === 'cac-4103' ? (
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

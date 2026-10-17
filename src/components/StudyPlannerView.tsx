import React, { useState, useEffect } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { 
  CalendarCheck, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Flame, 
  Target, 
  BookOpen, 
  Plus, 
  Trash2,
  Calendar,
  Layers
} from 'lucide-react';

export const StudyPlannerView: React.FC = () => {
  // Unit completion state stored in localStorage
  const [completedUnits, setCompletedUnits] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('chidos_completed_units');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Custom study goals
  const [studyGoals, setStudyGoals] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('chidos_study_goals');
      return saved ? JSON.parse(saved) : [
        'Master IFRS 10 Consolidation proforma journals & NCI fair value',
        'Practice Section 15(2)(a) vs Section 16 deduction problems',
        'Memorize 4th Schedule capital allowance rates (SIA 25% vs Wear & Tear)',
        'Complete CTA Mock Exam 2 Case Scenario & Proformas',
        'Review ISA 320 Materiality thresholds & trivial difference rules'
      ];
    } catch {
      return [];
    }
  });

  const [newGoalText, setNewGoalText] = useState('');

  // Target exam date (e.g. November board exams)
  const [examDate, setExamDate] = useState<string>('2026-11-20');

  useEffect(() => {
    localStorage.setItem('chidos_completed_units', JSON.stringify(completedUnits));
  }, [completedUnits]);

  useEffect(() => {
    localStorage.setItem('chidos_study_goals', JSON.stringify(studyGoals));
  }, [studyGoals]);

  const toggleUnit = (unitKey: string) => {
    setCompletedUnits(prev => ({
      ...prev,
      [unitKey]: !prev[unitKey]
    }));
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    setStudyGoals([...studyGoals, newGoalText.trim()]);
    setNewGoalText('');
  };

  const handleRemoveGoal = (index: number) => {
    setStudyGoals(studyGoals.filter((_, i) => i !== index));
  };

  // Days until exam
  const daysUntilExam = () => {
    const target = new Date(examDate).getTime();
    const today = new Date().getTime();
    const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  // Calculate total units and completed count
  let totalUnitsCount = 0;
  let totalCompletedUnitsCount = 0;

  COURSES_DATA.forEach(course => {
    course.units.forEach(unit => {
      totalUnitsCount += 1;
      const key = `${course.id}-unit-${unit.unitNumber}`;
      if (completedUnits[key]) {
        totalCompletedUnitsCount += 1;
      }
    });
  });

  const overallPercent = totalUnitsCount > 0 ? Math.round((totalCompletedUnitsCount / totalUnitsCount) * 100) : 0;

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-indigo-600" />
            <span>Curriculum Syllabus Tracker &amp; Exam Countdown</span>
          </h2>
          <p className="text-xs text-slate-500">
            Track completion of every academic syllabus unit and organize daily study targets.
          </p>
        </div>

        {/* Exam Countdown Pill */}
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl text-xs flex items-center gap-3 shadow-md">
            <Clock className="w-5 h-5 text-amber-100" />
            <div>
              <div className="font-extrabold text-sm">
                {daysUntilExam()} Days Remaining
              </div>
              <div className="text-[10px] text-amber-100">
                Exam Target: {examDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold text-lg flex items-center justify-center">
            {overallPercent}%
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold uppercase">Overall Syllabus Completion</div>
            <div className="text-base font-bold text-slate-900 mt-0.5">
              {totalCompletedUnitsCount} of {totalUnitsCount} Units Mastered
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 font-extrabold text-lg flex items-center justify-center">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold uppercase">Revision Focus</div>
            <div className="text-base font-bold text-slate-900 mt-0.5">
              6 Core Exam Tracks
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <label className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
            Change Target Exam Date
          </label>
          <input
            type="date"
            value={examDate}
            onChange={e => setExamDate(e.target.value)}
            className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Main Grid: Syllabus Units Checklist + Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Syllabus Units Checklist */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Course Syllabus Checklist</span>
          </h3>

          <div className="space-y-4">
            {COURSES_DATA.map(course => {
              const courseUnits = course.units;
              const courseCompletedCount = courseUnits.filter(u => completedUnits[`${course.id}-unit-${u.unitNumber}`]).length;
              const coursePercent = Math.round((courseCompletedCount / courseUnits.length) * 100);

              return (
                <div key={course.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {course.badge}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {course.code}: {course.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-extrabold text-indigo-600">
                        {coursePercent}%
                      </span>
                      <div className="text-[10px] text-slate-400">
                        {courseCompletedCount}/{courseUnits.length} done
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${coursePercent}%` }}
                    />
                  </div>

                  {/* Units list */}
                  <div className="space-y-2 pt-1">
                    {courseUnits.map(unit => {
                      const key = `${course.id}-unit-${unit.unitNumber}`;
                      const isDone = Boolean(completedUnits[key]);

                      return (
                        <div
                          key={unit.unitNumber}
                          onClick={() => toggleUnit(key)}
                          className={`p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-start gap-3 ${
                            isDone
                              ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                              : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          <button
                            type="button"
                            className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors shrink-0"
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                            ) : (
                              <Circle className="w-4 h-4" />
                            )}
                          </button>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">
                                Unit {unit.unitNumber}: {unit.title}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                              {unit.description}
                            </p>
                            {unit.keyStandardsOrActs && (
                              <div className="flex flex-wrap gap-1 mt-1.5">
                                {unit.keyStandardsOrActs.map((tag, tIdx) => (
                                  <span key={tIdx} className="text-[9px] bg-white text-indigo-700 px-1.5 py-0.2 rounded border border-slate-200 font-mono">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Study Goals Column */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-600" />
            <span>Target Revision Milestones</span>
          </h3>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <form onSubmit={handleAddGoal} className="flex gap-2 text-xs">
              <input
                type="text"
                placeholder="Add revision milestone..."
                value={newGoalText}
                onChange={e => setNewGoalText(e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </form>

            <div className="space-y-2">
              {studyGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start justify-between gap-2 text-xs"
                >
                  <span className="text-slate-700 leading-relaxed font-medium">{goal}</span>
                  <button
                    onClick={() => handleRemoveGoal(idx)}
                    className="text-slate-400 hover:text-rose-600 p-1 shrink-0 transition-colors cursor-pointer"
                    title="Remove goal"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

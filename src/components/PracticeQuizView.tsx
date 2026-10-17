import React, { useState, useMemo } from 'react';
import { PRACTICE_QUESTIONS, PracticeQuestion } from '../data/practiceQuestions';
import { COURSES_DATA } from '../data/coursesData';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  ChevronRight, 
  BookOpen, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const PracticeQuizView: React.FC = () => {
  const [selectedCourseFilter, setSelectedCourseFilter] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});

  const filteredQuestions = useMemo(() => {
    return PRACTICE_QUESTIONS.filter(q => {
      if (selectedCourseFilter !== 'all' && q.courseId !== selectedCourseFilter) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }, [selectedCourseFilter, selectedDifficulty]);

  const handleSelectOption = (questionId: string, optionLabel: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionLabel
    }));
    // automatically reveal explanation on answer
    setRevealedExplanations(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setRevealedExplanations({});
  };

  // Score statistics
  const scoreStats = useMemo(() => {
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;
    filteredQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });
    const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    return { answeredCount, correctCount, percentage };
  }, [userAnswers, filteredQuestions]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>CTA &amp; Honours Exam Question Bank</span>
          </h2>
          <p className="text-xs text-slate-500">
            Interactive multiple-choice and scenario problems with model explanations and statutory citations.
          </p>
        </div>

        {/* Score Pill */}
        <div className="flex items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-emerald-900 text-xs flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="font-extrabold text-sm">
                {scoreStats.correctCount} / {scoreStats.answeredCount} Correct
              </div>
              <div className="text-[10px] text-emerald-700">
                Score: {scoreStats.percentage}% accuracy
              </div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            title="Reset Quiz"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-slate-400 font-bold uppercase text-[10px]">Course:</span>
          <button
            onClick={() => setSelectedCourseFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              selectedCourseFilter === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Tracks ({PRACTICE_QUESTIONS.length})
          </button>
          {COURSES_DATA.map(course => {
            const count = PRACTICE_QUESTIONS.filter(q => q.courseId === course.id).length;
            if (count === 0) return null;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourseFilter(course.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedCourseFilter === course.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {course.code} ({count})
              </button>
            );
          })}
        </div>

        {/* Difficulty */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 font-bold uppercase text-[10px]">Difficulty:</span>
          {['all', 'Foundation', 'Intermediate', 'CTA Exam Level'].map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                selectedDifficulty === diff
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, qIndex) => {
          const userAnswer = userAnswers[q.id];
          const isAnswered = Boolean(userAnswer);
          const isCorrect = userAnswer === q.correctAnswer;
          const isRevealed = Boolean(revealedExplanations[q.id]);
          const course = COURSES_DATA.find(c => c.id === q.courseId);

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border p-6 transition-all shadow-xs ${
                isAnswered
                  ? isCorrect
                    ? 'border-emerald-300 ring-2 ring-emerald-500/10'
                    : 'border-rose-300 ring-2 ring-rose-500/10'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                    {qIndex + 1}
                  </span>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {course?.code}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Topic: {q.topic}
                  </span>
                </div>

                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                  q.difficulty === 'CTA Exam Level'
                    ? 'bg-rose-100 text-rose-800'
                    : q.difficulty === 'Intermediate'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {q.difficulty}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed mb-4">
                {q.question}
              </h3>

              {/* Options Grid */}
              <div className="space-y-2.5">
                {q.options.map(opt => {
                  const isSelected = userAnswer === opt.label;
                  const isRightOption = opt.label === q.correctAnswer;

                  let optClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
                  if (isAnswered) {
                    if (isRightOption) {
                      optClass = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-medium';
                    } else if (isSelected && !isRightOption) {
                      optClass = 'bg-rose-50 border-rose-400 text-rose-900 font-medium';
                    } else {
                      optClass = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.label}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(q.id, opt.label)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-all cursor-pointer ${optClass}`}
                    >
                      <span className={`w-5 h-5 rounded-md font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                        isAnswered && isRightOption
                          ? 'bg-emerald-600 text-white'
                          : isAnswered && isSelected && !isRightOption
                          ? 'bg-rose-600 text-white'
                          : 'bg-white border border-slate-300 text-slate-700'
                      }`}>
                        {opt.label}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {isRevealed && (
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Correct! Option {q.correctAnswer}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Incorrect. The correct answer is Option {q.correctAnswer}</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div className="font-bold text-slate-800">Model Solution &amp; Examiner Note:</div>
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {q.explanation}
                    </p>

                    {q.detailedCalculation && (
                      <div className="bg-white p-3 rounded-lg border border-slate-200/80 font-mono text-[11px] text-slate-800 whitespace-pre-wrap mt-2">
                        {q.detailedCalculation}
                      </div>
                    )}

                    <div className="pt-2 text-[11px] font-semibold text-indigo-700 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Statutory Citation: {q.statutoryOrStandardRef}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

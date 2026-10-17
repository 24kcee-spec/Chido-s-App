import React, { useState, useMemo } from 'react';
import { FLASHCARDS_DATA, Flashcard } from '../data/flashcardsData';
import { COURSES_DATA } from '../data/coursesData';
import { 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Shuffle, 
  BookOpen, 
  Lightbulb, 
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const FlashcardsView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('chidos_mastered_flashcards');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const filteredCards = useMemo(() => {
    if (selectedCourse === 'all') return FLASHCARDS_DATA;
    return FLASHCARDS_DATA.filter(c => c.courseId === selectedCourse);
  }, [selectedCourse]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const toggleMastered = (cardId: string) => {
    const updated = {
      ...masteredCards,
      [cardId]: !masteredCards[cardId]
    };
    setMasteredCards(updated);
    localStorage.setItem('chidos_mastered_flashcards', JSON.stringify(updated));
    handleNext();
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  };

  const masteredCount = filteredCards.filter(c => masteredCards[c.id]).length;
  const progressPercent = filteredCards.length > 0 ? Math.round((masteredCount / filteredCards.length) * 100) : 0;

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Active Recall Flashcards &amp; Quick Definitions</span>
          </h2>
          <p className="text-xs text-slate-500">
            Rapid active recall revision for case law, definitions, standard formulas, and exam rules.
          </p>
        </div>

        {/* Progress & Shuffle */}
        <div className="flex items-center gap-3">
          <div className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-amber-900 text-xs flex items-center gap-2 font-bold">
            <Award className="w-4 h-4 text-amber-600" />
            <span>{masteredCount} / {filteredCards.length} Mastered ({progressPercent}%)</span>
          </div>

          <button
            onClick={handleShuffle}
            className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
            title="Random shuffle"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle</span>
          </button>
        </div>
      </div>

      {/* Course Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button
          onClick={() => {
            setSelectedCourse('all');
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
            selectedCourse === 'all'
              ? 'bg-amber-600 text-white'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All Topics ({FLASHCARDS_DATA.length})
        </button>
        {COURSES_DATA.map(course => {
          const count = FLASHCARDS_DATA.filter(c => c.courseId === course.id).length;
          if (count === 0) return null;
          return (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourse(course.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCourse === course.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {course.code} ({count})
            </button>
          );
        })}
      </div>

      {/* Main Flashcard Card */}
      {currentCard ? (
        <div className="max-w-2xl mx-auto space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`min-h-[340px] bg-white rounded-3xl border-2 p-8 shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
              isFlipped
                ? 'border-indigo-400 bg-linear-to-b from-white to-indigo-50/20'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px]">
                {currentCard.category}
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                Card {currentIndex + 1} of {filteredCards.length}
              </span>
            </div>

            {/* Middle Content */}
            <div className="py-6 text-center my-auto">
              {!isFlipped ? (
                <div className="space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    Question / Prompt
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {currentCard.front}
                  </h3>
                  <p className="text-xs text-slate-400 italic">Click card to reveal answer</p>
                </div>
              ) : (
                <div className="space-y-4 text-left animate-in fade-in duration-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                    Model Answer &amp; Legal Principles
                  </span>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium whitespace-pre-line">
                    {currentCard.back}
                  </p>

                  {currentCard.highYieldTip && (
                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2 mt-3">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Exam Takeaway:</strong> {currentCard.highYieldTip}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 text-[11px] font-mono text-indigo-700 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Statutory Authority: {currentCard.citation}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Flip Indicator */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5" /> Click to flip
              </span>
              {masteredCards[currentCard.id] && (
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Mastered
                </span>
              )}
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleMastered(currentCard.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer ${
                  masteredCards[currentCard.id]
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{masteredCards[currentCard.id] ? 'Unmark as Mastered' : 'Mark as Mastered'}</span>
              </button>
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
          <p className="text-xs text-slate-500">No flashcards found for this topic.</p>
        </div>
      )}
    </div>
  );
};

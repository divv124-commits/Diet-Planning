import React, { useState, useEffect } from 'react';
import { THIRTY_DAY_CHALLENGE } from '../data/habitsData';
import { HabitDay } from '../types';
import { CheckCircle2, Circle, Trophy, Flame, ChevronRight, X, Sparkles, BookOpen, RotateCcw, Target } from 'lucide-react';

interface HabitChallengeTrackerProps {
  onShowToast: (msg: string) => void;
}

export const HabitChallengeTracker: React.FC<HabitChallengeTrackerProps> = ({ onShowToast }) => {
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('nourish_move_habit_days');
      return saved ? JSON.parse(saved) : [1, 2, 3];
    } catch {
      return [1, 2, 3];
    }
  });

  const [activeWeek, setActiveWeek] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<HabitDay | null>(null);
  const [journalNotes, setJournalNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('nourish_move_habit_journal');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nourish_move_habit_days', JSON.stringify(completedDays));
    } catch (e) {
      console.error(e);
    }
  }, [completedDays]);

  useEffect(() => {
    try {
      localStorage.setItem('nourish_move_habit_journal', JSON.stringify(journalNotes));
    } catch (e) {
      console.error(e);
    }
  }, [journalNotes]);

  const toggleDayCompletion = (dayNum: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (completedDays.includes(dayNum)) {
      setCompletedDays(completedDays.filter((d) => d !== dayNum));
      onShowToast(`Day ${dayNum} marked as pending.`);
    } else {
      const updated = [...completedDays, dayNum];
      setCompletedDays(updated);
      onShowToast(`Day ${dayNum} completed! Streak updated.`);
    }
  };

  const handleSaveNote = (dayNum: number, note: string) => {
    setJournalNotes((prev) => ({ ...prev, [dayNum]: note }));
    onShowToast(`Journal note saved for Day ${dayNum}.`);
  };

  const handleReset = () => {
    if (window.confirm('Reset all 30-day challenge progress to start fresh?')) {
      setCompletedDays([]);
      setJournalNotes({});
      onShowToast('Habit challenge progress has been reset.');
    }
  };

  const progressPercent = Math.round((completedDays.length / 30) * 100);

  let streak = 0;
  for (let i = 1; i <= 30; i++) {
    if (completedDays.includes(i)) {
      streak++;
    } else {
      break;
    }
  }

  const weekDays = THIRTY_DAY_CHALLENGE.filter((d) => d.week === activeWeek);

  const weekThemes = [
    { week: 1, title: 'Week 1', focus: 'Nutrition Anchors (Protein & Hydration)' },
    { week: 2, title: 'Week 2', focus: 'Frictionless Movement & Steps' },
    { week: 3, title: 'Week 3', focus: 'Sleep Architecture & Stress' },
    { week: 4, title: 'Week 4+', focus: 'Mindset & Long-Term Adherence' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-lg">
      
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-mono uppercase font-bold tracking-wider mb-1">
            <span>Behavioral Lab</span>
            <span>•</span>
            <span>Incremental Compounding</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The 30-Day Sustainable Habit System
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            One high-leverage micro-action each day. Zero overwhelming overhauls. Track compliance and record clinical observations.
          </p>
        </div>

        {/* PROGRESS AND STATS */}
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 self-start md:self-auto shadow-xs">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-200">
            <Flame className="w-5 h-5 text-amber-500" />
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-500">Streak</div>
              <div className="text-base font-mono font-bold text-slate-900">{streak} Days</div>
            </div>
          </div>

          <div className="flex items-center gap-2 pr-4 border-r border-slate-200">
            <Trophy className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-500">Completed</div>
              <div className="text-base font-mono font-bold text-slate-900">{completedDays.length}/30</div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            title="Reset challenge"
            aria-label="Reset challenge"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* OVERALL PROGRESS BAR */}
      <div className="my-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
          <span className="font-mono uppercase tracking-wider text-[11px] text-slate-500">Program Compliance</span>
          <span className="font-mono text-xs text-emerald-600 font-bold">{progressPercent}% Completed ({completedDays.length}/30 days)</span>
        </div>
        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* WEEK SELECTOR TABS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6">
        {weekThemes.map((wt) => {
          const isSelected = activeWeek === wt.week;
          const weekCompletedCount = THIRTY_DAY_CHALLENGE.filter((d) => d.week === wt.week && completedDays.includes(d.day)).length;
          const weekTotal = wt.week === 4 ? 9 : 7;

          return (
            <button
              key={wt.week}
              onClick={() => setActiveWeek(wt.week)}
              className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono uppercase">{wt.title}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-slate-800 text-emerald-400' : 'bg-slate-200 text-slate-700'}`}>
                  {weekCompletedCount}/{weekTotal}
                </span>
              </div>
              <div className={`text-[11px] mt-1.5 truncate font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                {wt.focus}
              </div>
            </button>
          );
        })}
      </div>

      {/* DAY CARDS GRID FOR ACTIVE WEEK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {weekDays.map((dayItem) => {
          const isDone = completedDays.includes(dayItem.day);

          return (
            <div
              key={dayItem.day}
              onClick={() => setSelectedDay(dayItem)}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                isDone
                  ? 'bg-emerald-50/40 border-emerald-300/80 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-400 hover:bg-white hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isDone ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    Day {dayItem.day}
                  </span>
                  <button
                    onClick={(e) => toggleDayCompletion(dayItem.day, e)}
                    className="cursor-pointer focus:outline-none p-1"
                    aria-label={`Mark Day ${dayItem.day} as ${isDone ? 'incomplete' : 'complete'}`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-600 text-white" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                    )}
                  </button>
                </div>

                <h4 className={`font-heading text-base font-bold mb-1.5 transition-colors ${isDone ? 'line-through text-slate-400' : 'text-slate-900 group-hover:text-emerald-700'}`}>
                  {dayItem.title}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {dayItem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-emerald-700 font-bold">
                <span>View Protocol & Steps</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* DETAIL MODAL FOR SELECTED DAY */}
      {selectedDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedDay(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close habit detail"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider mb-2">
              <span>Week {selectedDay.week}</span>
              <span>•</span>
              <span>{selectedDay.phase}</span>
            </div>

            <div className="flex items-center justify-between gap-4 mb-3">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Day {selectedDay.day}: {selectedDay.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {selectedDay.description}
            </p>

            {/* ACTION ITEMS CHECKLIST */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-6">
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600" />
                Action Steps for Today:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedDay.actionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BEHAVIORAL SCIENCE INSIGHT */}
            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200/80 mb-6 text-xs text-slate-700 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold mb-1.5 text-emerald-800 font-mono uppercase text-[10px] tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Behavioral Science Mechanism:</span>
              </div>
              <p>{selectedDay.psychologyInsight}</p>
            </div>

            {/* DAILY REFLECTION */}
            <div className="space-y-2 mb-6">
              <label className="block text-xs font-bold text-slate-900">
                Reflection: {selectedDay.reflectionQuestion}
              </label>
              <textarea
                rows={3}
                value={journalNotes[selectedDay.day] || ''}
                onChange={(e) => handleSaveNote(selectedDay.day, e.target.value)}
                placeholder="Record your observations, obstacles, or wins today..."
                className="w-full bg-slate-50 text-xs text-slate-900 p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* MODAL FOOTER */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedDay(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Dismiss
              </button>

              <button
                onClick={() => {
                  toggleDayCompletion(selectedDay.day);
                }}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-xs ${
                  completedDays.includes(selectedDay.day)
                    ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {completedDays.includes(selectedDay.day) ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed (Click to undo)</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-3.5 h-3.5" />
                    <span>Mark Day {selectedDay.day} Complete</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

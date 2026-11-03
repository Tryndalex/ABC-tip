import React, { useState, useMemo, useRef } from 'react';
import {
  ENGLISH_WORDS,
  ENGLISH_CATEGORIES,
  EnglishWord,
  EnglishCategory
} from '../data/englishCourseData';
import { matchesEnglishWordFuzzy } from '../utils/searchUtils';
import { EnglishIllustration } from './EnglishIllustration';
import {
  Volume2,
  Sparkles,
  Search,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  BookOpen,
  GraduationCap,
  ArrowRight,
  ThumbsUp,
  X,
  VolumeX
} from 'lucide-react';

interface EnglishCourseProps {
  isHighContrast: boolean;
}

export const EnglishCourse: React.FC<EnglishCourseProps> = ({ isHighContrast }) => {
  // Course navigation: 'words' (karty slovíčok) | 'quiz' (cvičný kvíz bez stresu)
  const [activeView, setActiveView] = useState<'words' | 'quiz'>('words');

  // Filtering & search
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Fixed gentle and clear speech pace for seniors
  const SPEECH_RATE = 0.8;
  const [speakingWordId, setSpeakingWordId] = useState<string | null>(null);

  // Audio play id reference to avoid race conditions
  const playIdRef = useRef<number>(0);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Speak English word
  const speakEnglish = (word: EnglishWord) => {
    if (!('speechSynthesis' in window)) return;

    const thisPlayId = ++playIdRef.current;
    window.speechSynthesis.cancel();
    setSpeakingWordId(word.id);

    const utterance = new SpeechSynthesisUtterance(word.english);
    utterance.lang = 'en-US';
    utterance.rate = SPEECH_RATE;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en'));
    if (enVoice) {
      utterance.voice = enVoice;
    }

    utterance.onend = () => {
      if (playIdRef.current === thisPlayId) {
        setSpeakingWordId(null);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        if (playIdRef.current === thisPlayId) {
          setSpeakingWordId(null);
        }
      }
    };

    setTimeout(() => {
      if (playIdRef.current === thisPlayId) {
        window.speechSynthesis.speak(utterance);
      }
    }, 40);
  };

  // Speak Slovak explanation
  const speakSlovak = (word: EnglishWord) => {
    if (!('speechSynthesis' in window)) return;

    const thisPlayId = ++playIdRef.current;
    window.speechSynthesis.cancel();
    setSpeakingWordId(`${word.id}-sk`);

    const text = `${word.english}. Po slovensky znamená: ${word.slovak}. ${word.explanation}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'sk-SK';
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const skVoice = voices.find(v => v.lang.startsWith('sk') || v.lang.startsWith('cs'));
    if (skVoice) {
      utterance.voice = skVoice;
    }

    utterance.onend = () => {
      if (playIdRef.current === thisPlayId) {
        setSpeakingWordId(null);
      }
    };

    utterance.onerror = () => {
      if (playIdRef.current === thisPlayId) {
        setSpeakingWordId(null);
      }
    };

    setTimeout(() => {
      if (playIdRef.current === thisPlayId) {
        window.speechSynthesis.speak(utterance);
      }
    }, 40);
  };

  const stopAudio = () => {
    playIdRef.current++;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingWordId(null);
  };

  // Filtered words with diacritic-tolerant & typo-tolerant fuzzy search (up to 2 letter errors)
  const filteredWords = useMemo(() => {
    return ENGLISH_WORDS.filter(w => {
      const matchesCategory = selectedCategory === 'all' || w.category === selectedCategory;
      if (!matchesCategory) return false;
      return matchesEnglishWordFuzzy(w, searchQuery);
    });
  }, [selectedCategory, searchQuery]);

  // Total matches across all categories (allows helpful one-click switch if current category has 0 matches)
  const allCategoryMatchesCount = useMemo(() => {
    if (!searchQuery.trim()) return ENGLISH_WORDS.length;
    return ENGLISH_WORDS.filter(w => matchesEnglishWordFuzzy(w, searchQuery)).length;
  }, [searchQuery]);

  // Quiz questions generation (10 varied items from course words)
  const quizQuestions = useMemo(() => {
    const step = Math.max(1, Math.floor(ENGLISH_WORDS.length / 10));
    const selectedTargets = Array.from({ length: 10 }, (_, i) => ENGLISH_WORDS[(i * step) % ENGLISH_WORDS.length]);

    const questions = selectedTargets.map((targetWord, index) => {
      // Find 2 wrong alternatives from other words
      const otherWords = ENGLISH_WORDS.filter(w => w.id !== targetWord.id && w.slovak !== targetWord.slovak);
      const wrong1 = otherWords[(index * 4 + 1) % otherWords.length];
      const wrong2 = otherWords[(index * 4 + 3) % otherWords.length];

      // Shuffle options deterministically
      const options = [
        targetWord.slovak,
        wrong1.slovak,
        wrong2.slovak
      ].sort(() => (index % 2 === 0 ? 1 : -1));

      return {
        word: targetWord,
        options,
        correctAnswer: targetWord.slovak
      };
    });
    return questions;
  }, []);

  const currentQuizItem = quizQuestions[quizIndex];

  const handleSelectQuizAnswer = (option: string) => {
    if (selectedAnswer !== null) return; // Already answered this question
    setSelectedAnswer(option);
    if (option === currentQuizItem.correctAnswer) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-8 max-w-full overflow-x-hidden">
      
      {/* Hero / Header Card */}
      <section
        className={`rounded-3xl border-2 p-6 sm:p-8 transition-all ${
          isHighContrast
            ? 'bg-neutral-900 border-4 border-yellow-400 text-white'
            : 'bg-gradient-to-br from-[#EEF2FF] via-[#FFFFFF] to-[#F0FDFA] border-[#CBD5E1] shadow-md'
        }`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-sm font-bold bg-[#DDE1FF] text-[#001453] border border-[#1E40AF] mb-3">
              <GraduationCap className="w-5 h-5 text-[#1E40AF]" />
              <span>Praktická angličtina pre seniorov • Úplne bez stresu</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-3">
              Angličtina pre každodenný život a internet
            </h1>

            <p className="text-base sm:text-xl text-[#334155] leading-relaxed font-normal">
              Nemusíte sa učiť zložitú gramatiku. Tento kurz je pripravený špeciálne pre starších občanov.
              Každé slovíčko má jasný slovenský prepis výslovnosti, zrozumiteľný obrázok a hlasové prehrávanie.
            </p>
          </div>

          {/* Practical Scope Badge */}
          <div className={`p-4 rounded-2xl border-2 flex items-center gap-3.5 min-w-[240px] ${
            isHighContrast
              ? 'bg-black border-yellow-400 text-white'
              : 'bg-white border-[#CBD5E1] shadow-xs'
          }`}>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              isHighContrast ? 'bg-yellow-400 text-black' : 'bg-[#EEF2FF] text-[#1E40AF]'
            }`}>
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                Praktický rozsah
              </div>
              <div className="text-lg font-extrabold text-[#0F172A]">
                {ENGLISH_WORDS.length} praktických slovíčok
              </div>
            </div>
          </div>
        </div>

        {/* View Switcher: Zoznam vs. Kvíz */}
        <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t-2 border-[#CBD5E1]">
          <button
            type="button"
            onClick={() => setActiveView('words')}
            className={`min-h-[52px] px-6 py-2.5 rounded-xl font-bold text-base sm:text-lg flex items-center gap-2.5 border-2 transition-all cursor-pointer ${
              activeView === 'words'
                ? isHighContrast
                  ? 'bg-black text-yellow-300 border-yellow-400 ring-2 ring-yellow-400'
                  : 'bg-[#1E40AF] text-white border-[#00288E] shadow-sm'
                : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF]'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Zoznam slovíčok ({filteredWords.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveView('quiz');
              handleRestartQuiz();
            }}
            className={`min-h-[52px] px-6 py-2.5 rounded-xl font-bold text-base sm:text-lg flex items-center gap-2.5 border-2 transition-all cursor-pointer ${
              activeView === 'quiz'
                ? isHighContrast
                  ? 'bg-black text-yellow-300 border-yellow-400 ring-2 ring-yellow-400'
                  : 'bg-[#1E40AF] text-white border-[#00288E] shadow-sm'
                : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF]'
            }`}
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Cvičný kvíz bez stresu</span>
          </button>
        </div>
      </section>

      {/* VIEW 1: VOCABULARY LIST */}
      {activeView === 'words' && (
        <section aria-label="Slovíčka kurzu">
          
          {/* Controls: Search & Category selector */}
          <div className="space-y-4 mb-6">
            
            {/* Search Input */}
            <div className="relative">
              <label htmlFor="course-search" className="sr-only">
                Hľadať slovíčko v slovenčine alebo angličtine
              </label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#64748B] pointer-events-none" />
              <input
                id="course-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Hľadať slovíčko (napr. Heslo, Káva, Autobus, Hotel, Reštaurácia)..."
                className={`w-full min-h-[54px] pl-13 pr-12 text-base sm:text-lg rounded-2xl border-2 font-medium transition-all focus:outline-none focus:ring-4 focus:ring-[#2563EB]/20 ${
                  isHighContrast
                    ? 'bg-black text-white border-yellow-400 placeholder:text-neutral-400'
                    : 'bg-white text-[#0F172A] border-[#CBD5E1] focus:border-[#1E40AF]'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-slate-100 text-[#64748B] cursor-pointer"
                  aria-label="Vymazať hľadanie"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Results counter when searching */}
            {searchQuery.trim() && (
              <div className="text-sm font-bold text-[#1E40AF] px-1">
                Nájdené slovíčka: {filteredWords.length}
              </div>
            )}

            {/* Category Filter Buttons - clicking resets search */}
            <div className="flex flex-wrap gap-2 pt-1" role="tablist" aria-label="Témy angličtiny">
              {ENGLISH_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSearchQuery('');
                    }}
                    className={`min-h-[46px] px-4 py-2 rounded-xl text-sm sm:text-base font-bold border-2 transition-all cursor-pointer ${
                      isSelected
                        ? isHighContrast
                          ? 'bg-yellow-400 text-black border-yellow-400'
                          : 'bg-[#1E40AF] text-white border-[#1E40AF] shadow-xs'
                        : isHighContrast
                          ? 'bg-black text-white border-white hover:border-yellow-400'
                          : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF]'
                    }`}
                  >
                    <span>{cat.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Words Grid or Empty State */}
          {filteredWords.length === 0 ? (
            <div className={`p-8 text-center rounded-2xl border-2 ${
              isHighContrast ? 'bg-neutral-900 border-yellow-400 text-white' : 'bg-white border-[#CBD5E1]'
            }`}>
              {selectedCategory !== 'all' && allCategoryMatchesCount > 0 ? (
                <div className="max-w-xl mx-auto space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-[#1E40AF] flex items-center justify-center mx-auto">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    V tejto téme sa slovíčko „{searchQuery}“ nenachádza
                  </h3>
                  <p className="text-base text-[#475569]">
                    V ostatných kategóriách sme však našli <strong>{allCategoryMatchesCount}</strong> vyhovujúcich slovíčok.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                    }}
                    className="min-h-[50px] px-6 py-3 rounded-xl font-bold text-base bg-[#1E40AF] text-white hover:bg-[#00288E] cursor-pointer inline-flex items-center gap-2 shadow-sm"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Zobraziť nájdené slovíčka vo všetkých témach ({allCategoryMatchesCount})</span>
                  </button>
                </div>
              ) : (
                <div className="max-w-xl mx-auto space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Nenašli sa žiadne slovíčka pre výraz „{searchQuery}“
                  </h3>
                  <p className="text-base text-[#475569]">
                    Skúste zadať iné slovenské alebo anglické slovo, prípadne vyberte inú kategóriu.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="min-h-[48px] px-5 py-2.5 rounded-xl font-bold text-base bg-[#1E40AF] text-white hover:bg-[#00288E] cursor-pointer"
                  >
                    Zobraziť všetky slovíčka kurzu
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {filteredWords.map((word) => {
                const isSpeakingEn = speakingWordId === word.id;
                const isSpeakingSk = speakingWordId === `${word.id}-sk`;

                return (
                  <article
                    key={word.id}
                    className={`rounded-2xl border-2 p-5 sm:p-6 transition-all flex flex-col justify-between ${
                      isHighContrast
                        ? 'bg-white text-black border-2 border-black hover:border-4'
                        : 'bg-[#FFFFFF] text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF] shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)]'
                    }`}
                  >
                    <div>
                      {/* Top Row: Illustration + English Word & Slovak phonetic pronunciation */}
                      <div className="flex items-start gap-4 mb-4">
                        
                        {/* High visibility illustration (around 64x64px, visible for weak eyes, not oversized) */}
                        <div
                          className={`p-2 rounded-2xl border-2 flex items-center justify-center flex-shrink-0 ${
                            isHighContrast
                              ? 'bg-black border-black'
                              : 'bg-[#F8FAFC] border-[#E2E8F0]'
                          }`}
                        >
                          <EnglishIllustration
                            type={word.iconType}
                            isHighContrast={isHighContrast}
                            className="w-14 h-14 sm:w-16 sm:h-16"
                          />
                        </div>

                        {/* Word Headings */}
                        <div className="flex-grow min-w-0">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00288E] tracking-tight">
                              {word.english}
                            </h2>
                          </div>

                          {/* Slovak phonetic transcription */}
                          <div className="mt-1 flex items-center gap-1.5 text-base sm:text-lg font-semibold text-[#006A61]">
                            <span>Výslovnosť:</span>
                            <span className="font-bold underline decoration-2 decoration-[#86F2E4] px-1 bg-[#F0FDFA] rounded">
                              [{word.phoneticSk}]
                            </span>
                          </div>

                          {/* Slovak Translation */}
                          <div className="mt-1.5 text-lg sm:text-xl font-extrabold text-[#0F172A]">
                            = {word.slovak}
                          </div>
                        </div>
                      </div>

                      {/* Explanation */}
                      <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-4 font-normal">
                        {word.explanation}
                      </p>

                      {/* Example sentence if present */}
                      {word.exampleSentenceEn && (
                        <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-5 text-sm sm:text-base">
                          <div className="font-bold text-[#1E40AF]">
                            „{word.exampleSentenceEn}“
                          </div>
                          <div className="text-[#64748B] italic mt-0.5">
                            ({word.exampleSentenceSk})
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Audio Controls (52px touch buttons) */}
                    <div className="pt-4 border-t-2 border-[#EAEDFF] flex flex-wrap items-center gap-3">
                      
                      {/* English voice button */}
                      <button
                        type="button"
                        onClick={() => speakEnglish(word)}
                        className={`min-h-[50px] px-4 py-2.5 rounded-xl font-bold text-base flex-1 flex items-center justify-center gap-2 border-2 transition-all active:translate-y-[1px] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#2563EB] ${
                          isSpeakingEn
                            ? 'bg-[#166534] text-white border-[#14532D] shadow-inner'
                            : isHighContrast
                              ? 'bg-black text-yellow-300 border-black hover:bg-neutral-900'
                              : 'bg-[#1E40AF] text-white border-[#1E3A8A] hover:bg-[#00288E]'
                        }`}
                        title="Vypočuť si správnu anglickú výslovnosť"
                        aria-label={`Vypočuť anglickú výslovnosť slova ${word.english}`}
                      >
                        <Volume2 className="w-5 h-5 flex-shrink-0" />
                        <span>{isSpeakingEn ? 'Čítam...' : 'Vypočuť anglicky'}</span>
                      </button>

                      {/* Slovak explanation button */}
                      <button
                        type="button"
                        onClick={() => speakSlovak(word)}
                        className={`min-h-[50px] px-3.5 py-2.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-1.5 border-2 transition-all active:translate-y-[1px] cursor-pointer ${
                          isSpeakingSk
                            ? 'bg-[#006A61] text-white border-[#005049]'
                            : isHighContrast
                              ? 'bg-white text-black border-black hover:bg-neutral-100'
                              : 'bg-[#F2F3FF] text-[#00288E] border-[#CBD5E1] hover:bg-[#E2E7FF]'
                        }`}
                        title="Prečítať slovenské vysvetlenie nahlas"
                        aria-label={`Prečítať slovenské vysvetlenie pre ${word.english}`}
                      >
                        <span>Slovensky</span>
                      </button>

                      {(isSpeakingEn || isSpeakingSk) && (
                        <button
                          type="button"
                          onClick={stopAudio}
                          className="min-h-[50px] min-w-[50px] rounded-xl bg-[#FEE2E2] text-[#DC2626] border-2 border-[#FCA5A5] flex items-center justify-center cursor-pointer"
                          title="Zastaviť hlas"
                          aria-label="Zastaviť hlas"
                        >
                          <VolumeX className="w-5 h-5" />
                        </button>
                      )}

                    </div>

                  </article>
                );
              })}
            </div>
          )}

        </section>
      )}

      {/* VIEW 2: GENTLE QUIZ / KVÍZ BEZ STRESU */}
      {activeView === 'quiz' && (
        <section
          aria-label="Cvičný kvíz bez stresu"
          className="max-w-2xl mx-auto"
        >
          {quizFinished ? (
            <div
              className={`rounded-3xl border-2 p-8 text-center transition-all ${
                isHighContrast
                  ? 'bg-black text-white border-4 border-yellow-400'
                  : 'bg-white text-[#0F172A] border-[#CBD5E1] shadow-lg'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
                <ThumbsUp className="w-8 h-8" />
              </div>

              <h2 className="text-3xl font-extrabold mb-3">
                Krásna práca! Precvičili ste si slovíčka.
              </h2>

              <p className="text-xl text-[#334155] mb-6">
                Získali ste <strong>{quizScore} z {quizQuestions.length}</strong> správnych odpovedí.
                Nezáleží na počte bodov, najdôležitejšie je, že ste si slovíčka v pokoji vyskúšali.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleRestartQuiz}
                  className="min-h-[54px] px-8 py-3.5 rounded-xl font-bold text-lg bg-[#1E40AF] text-white hover:bg-[#00288E] flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Vyskúšať kvíz znova</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveView('words')}
                  className="min-h-[54px] px-7 py-3.5 rounded-xl font-bold text-lg bg-[#F2F3FF] text-[#00288E] border-2 border-[#CBD5E1] hover:bg-[#E2E7FF] cursor-pointer"
                >
                  <span>Späť na zoznam slovíčok</span>
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`rounded-3xl border-2 p-6 sm:p-8 transition-all ${
                isHighContrast
                  ? 'bg-white text-black border-4 border-black shadow-xl'
                  : 'bg-white text-[#0F172A] border-[#CBD5E1] shadow-lg'
              }`}
            >
              {/* Quiz Progress header */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b-2 border-[#EAEDFF] mb-6">
                <span className="text-sm sm:text-base font-bold text-[#006A61]">
                  Otázka {quizIndex + 1} z {quizQuestions.length}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#444653]">
                    Správne: {quizScore}
                  </span>
                  <button
                    type="button"
                    onClick={handleRestartQuiz}
                    className="p-1 text-[#64748B] hover:text-[#0F172A] cursor-pointer"
                    title="Reštartovať kvíz"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Word & Question */}
              <div className="text-center space-y-4 mb-8">
                <div className="w-20 h-20 mx-auto p-2 rounded-2xl border-2 border-[#CBD5E1] bg-[#F8FAFC] flex items-center justify-center">
                  <EnglishIllustration
                    type={currentQuizItem.word.iconType}
                    isHighContrast={isHighContrast}
                    className="w-16 h-16"
                  />
                </div>

                <div>
                  <span className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                    Čo znamená anglické slovo:
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00288E] mt-1">
                    {currentQuizItem.word.english}
                  </h2>
                  <div className="text-base text-[#006A61] font-semibold mt-1">
                    Výslovnosť: [{currentQuizItem.word.phoneticSk}]
                  </div>
                </div>

                {/* Listen button in Quiz */}
                <div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(currentQuizItem.word)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-base font-bold bg-[#EFF6FF] text-[#1E40AF] border-2 border-[#BFDBFE] hover:bg-[#DBEAFE] cursor-pointer transition-all"
                  >
                    <Volume2 className="w-5 h-5 text-[#2563EB]" />
                    <span>Prehrať výslovnosť nahlas</span>
                  </button>
                </div>
              </div>

              {/* Answer Options */}
              <div className="space-y-3 mb-6" role="radiogroup" aria-label="Možnosti odpovede">
                {currentQuizItem.options.map((option, idx) => {
                  const isChosen = selectedAnswer === option;
                  const isCorrect = option === currentQuizItem.correctAnswer;
                  const showResult = selectedAnswer !== null;

                  let buttonStyle = 'bg-white text-[#0F172A] border-[#CBD5E1] hover:border-[#1E40AF] hover:bg-[#F8FAFC]';

                  if (showResult) {
                    if (isCorrect) {
                      buttonStyle = 'bg-[#DCFCE7] text-[#14532D] border-[#166534] ring-2 ring-[#166534] font-extrabold';
                    } else if (isChosen) {
                      buttonStyle = 'bg-[#FEE2E2] text-[#991B1B] border-[#DC2626]';
                    } else {
                      buttonStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={showResult}
                      onClick={() => handleSelectQuizAnswer(option)}
                      className={`w-full min-h-[58px] p-4 rounded-2xl border-2 text-left font-bold text-lg sm:text-xl flex items-center justify-between transition-all cursor-pointer ${buttonStyle}`}
                    >
                      <span>{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="w-6 h-6 text-[#166534] flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next button */}
              {selectedAnswer !== null && (
                <div className="pt-4 border-t-2 border-[#EAEDFF] space-y-4">
                  <div
                    className={`p-4 rounded-xl border-2 text-base leading-relaxed ${
                      selectedAnswer === currentQuizItem.correctAnswer
                        ? 'bg-[#F0FDF4] border-[#86EFAC] text-[#166534]'
                        : 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                    }`}
                  >
                    <strong>
                      {selectedAnswer === currentQuizItem.correctAnswer
                        ? '✓ Výborne, presne tak!'
                        : 'ℹ️ Nevadí, nič sa nedeje.'}
                    </strong>{' '}
                    <span>
                      {currentQuizItem.word.english} znamená <strong>{currentQuizItem.correctAnswer}</strong>. {currentQuizItem.word.explanation}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextQuizQuestion}
                    className="w-full min-h-[54px] px-6 py-3.5 rounded-xl font-bold text-lg sm:text-xl bg-[#1E40AF] hover:bg-[#00288E] text-white flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                  >
                    <span>
                      {quizIndex + 1 < quizQuestions.length ? 'Ďalšie slovíčko' : 'Dokončiť kvíz'}
                    </span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              )}

            </div>
          )}
        </section>
      )}

    </div>
  );
};

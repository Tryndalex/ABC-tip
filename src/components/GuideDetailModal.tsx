import React, { useState } from 'react';
import { Guide } from '../types';
import {
  X,
  Volume2,
  Printer,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lightbulb,
  Check,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

interface GuideDetailModalProps {
  guide: Guide | null;
  onClose: () => void;
  onPlayAudio: (text: string, title: string) => void;
  isHighContrast: boolean;
}

export const GuideDetailModal: React.FC<GuideDetailModalProps> = ({
  guide,
  onClose,
  onPlayAudio,
  isHighContrast
}) => {
  if (!guide) return null;

  // Track expanded state of all steps (all open by default for readability, or toggleable)
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    guide.steps.forEach(step => {
      initial[step.id] = true;
    });
    return initial;
  });

  // Track completed steps by user
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (id: number) => {
    setExpandedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleStepCompleted = (id: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const completedCount = Object.values(completedSteps).filter(Boolean).length;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden w-full max-w-full bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 box-border"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-guide-title"
    >
      <div
        className={`w-full max-w-4xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-2xl border-2 flex flex-col transition-all my-auto box-border ${
          isHighContrast
            ? 'bg-white text-black border-4 border-black shadow-2xl'
            : 'bg-[#FFFFFF] text-[#131B2E] border-[#94A3B8] shadow-[0_16px_36px_-6px_rgba(15,23,42,0.2)]'
        }`}
      >
        {/* Modal Sticky Header with Back & Close */}
        <div className="sticky top-0 z-20 bg-[#FFFFFF] border-b-2 border-[#CBD5E1] p-4 sm:p-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className={`min-h-[52px] px-4 py-2 rounded-xl font-bold text-base sm:text-lg flex items-center gap-2 border-2 transition-all active:translate-y-[1px] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#2563EB] ${
              isHighContrast
                ? 'bg-black text-yellow-300 border-black'
                : 'bg-[#FFFFFF] text-[#1E40AF] border-[#1E40AF] hover:bg-[#EFF6FF]'
            }`}
            aria-label="Vrátiť sa späť na zoznam návodov"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Späť na návody</span>
          </button>

          {/* Quick Action Tools in Header */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onPlayAudio(guide.audioText, guide.title)}
              className={`min-h-[52px] px-4 py-2.5 rounded-xl font-bold text-base flex items-center gap-2 border-2 transition-all active:translate-y-[1px] cursor-pointer ${
                isHighContrast
                  ? 'bg-yellow-400 text-black border-black'
                  : 'bg-[#006A61] text-white border-[#005049] hover:bg-[#005049]'
              }`}
              title="Prečítať tento návod nahlas"
              aria-label="Prečítať tento návod nahlas"
            >
              <Volume2 className="w-5 h-5" />
              <span className="hidden sm:inline">Prečítať nahlas</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="min-h-[52px] px-4 py-2.5 rounded-xl font-semibold text-base text-[#444653] hover:text-[#131B2E] bg-[#F2F3FF] hover:bg-[#E2E7FF] border-2 border-[#CBD5E1] flex items-center gap-2 transition-all"
              title="Vytlačiť návod na papier"
              aria-label="Vytlačiť návod"
            >
              <Printer className="w-5 h-5 text-[#1E40AF]" />
              <span className="hidden md:inline">Tlačiť</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="min-h-[52px] min-w-[52px] rounded-xl flex items-center justify-center text-[#444653] hover:text-[#000000] hover:bg-[#F2F3FF] border-2 border-[#CBD5E1] transition-all ml-1"
              aria-label="Zavrieť toto okno"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Category Badge & Meta */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-base font-bold bg-[#DDE1FF] text-[#001453] border-2 border-[#1E40AF]">
              {guide.categoryName}
            </span>
            <span className="text-base text-[#444653] font-medium">
              Čas čítania: cca {guide.readTimeMinutes} minúty • Obtiažnosť: {guide.difficulty}
            </span>
          </div>

          {/* Guide Main Title */}
          <h2 id="modal-guide-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-[#0F172A]">
            {guide.title}
          </h2>

          {/* Reassuring Lead Paragraph */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1] text-lg sm:text-xl text-[#1E293B] leading-relaxed">
            {guide.summary}
          </div>

          {/* Practical Reassurance Tip */}
          {guide.practicalTip && (
            <div className="p-5 rounded-2xl bg-[#F0FDFA] border-2 border-[#006A61] flex items-start gap-4 text-[#004D46]">
              <div className="w-10 h-10 rounded-full bg-[#86F2E4] flex items-center justify-center flex-shrink-0 text-[#004D46]">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Praktická rada odborníka:</h4>
                <p className="text-base sm:text-lg leading-relaxed">{guide.practicalTip}</p>
              </div>
            </div>
          )}

          {/* Interactive Progress tracker */}
          <div className="p-4 rounded-xl bg-[#F2F3FF] border border-[#CBD5E1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-base font-bold text-[#1E40AF]">Váš postup týmto návodom: </span>
              <span className="text-base font-semibold text-[#131B2E]">
                {completedCount} z {guide.steps.length} krokov označených ako splnené
              </span>
            </div>
            {completedCount === guide.steps.length && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] font-bold text-sm border border-[#166534]">
                <Check className="w-4 h-4" /> Všetko máte hotové! Výborne.
              </span>
            )}
          </div>

          {/* Numbered Step-by-Step Accordions */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
              <span>Postup krok za krokom:</span>
            </h3>

            {guide.steps.map((step) => {
              const isExpanded = !!expandedSteps[step.id];
              const isCompleted = !!completedSteps[step.id];

              return (
                <div
                  key={step.id}
                  className={`rounded-2xl border-2 transition-all overflow-hidden ${
                    isCompleted
                      ? 'border-[#006A61] bg-[#F0FDFA]/40'
                      : 'border-[#CBD5E1] bg-white'
                  }`}
                >
                  {/* Step Header / Trigger */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Left: Number circle & Title */}
                    <div 
                      onClick={() => toggleStep(step.id)}
                      className="flex items-center gap-3.5 cursor-pointer flex-grow select-none"
                    >
                      {/* 36px Number badge */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${
                        isCompleted
                          ? 'bg-[#006A61] text-white'
                          : 'bg-[#1E40AF] text-white'
                      }`}>
                        {isCompleted ? <Check className="w-5 h-5 stroke-[3]" /> : step.id}
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                        {step.title}
                      </h4>
                    </div>

                    {/* Right: Expand/Collapse & Completed Checkbox */}
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      
                      {/* Big Accessible Checkbox (28x28 in 52px target zone) */}
                      <label 
                        className="min-h-[52px] min-w-[52px] flex items-center gap-2 px-3 rounded-xl border border-transparent hover:border-[#CBD5E1] cursor-pointer select-none"
                        title="Označiť tento krok ako zvládnutý"
                      >
                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={() => toggleStepCompleted(step.id)}
                          className="w-7 h-7 rounded border-2 border-[#1E40AF] text-[#1E40AF] focus:ring-3 focus:ring-[#2563EB] cursor-pointer accent-[#1E40AF]"
                        />
                        <span className="text-sm sm:text-base font-semibold text-[#444653]">
                          {isCompleted ? 'Zvládnuté' : 'Mám hotovo'}
                        </span>
                      </label>

                      {/* Explicit Rozbaliť / Zabaliť button */}
                      <button
                        type="button"
                        onClick={() => toggleStep(step.id)}
                        className="min-h-[52px] px-3.5 py-2 rounded-xl text-sm sm:text-base font-bold text-[#1E40AF] hover:bg-[#F2F3FF] border border-[#CBD5E1] flex items-center gap-1.5 transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Zabaliť' : 'Rozbaliť'}</span>
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>

                    </div>
                  </div>

                  {/* Expanded Step Body */}
                  {isExpanded && (
                    <div className="px-5 pb-6 pt-1 border-t border-[#EAEDFF] bg-[#FAF8FF]/60 space-y-4">
                      <p className="text-lg sm:text-xl text-[#1E293B] leading-relaxed pt-3">
                        {step.description}
                      </p>

                      {step.detailTips && step.detailTips.length > 0 && (
                        <ul className="space-y-2.5 mt-3 pl-2">
                          {step.detailTips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-[#334155] leading-relaxed">
                              <span className="text-[#006A61] font-bold text-xl leading-none mt-0.5">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {step.warning && (
                        <div className="p-4 rounded-xl bg-[#FFF1F2] border-2 border-[#E11D48] text-[#9F1239] flex items-start gap-3 mt-3">
                          <AlertTriangle className="w-6 h-6 flex-shrink-0 text-[#E11D48]" />
                          <div>
                            <span className="font-bold block text-base sm:text-lg">Dôležité upozornenie:</span>
                            <span className="text-base sm:text-lg leading-relaxed">{step.warning}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Official Resources Links */}
          {guide.officialLinks && guide.officialLinks.length > 0 && (
            <div className="mt-8 p-5 rounded-2xl bg-[#F8FAFC] border-2 border-[#CBD5E1]">
              <h4 className="text-lg font-bold text-[#0F172A] mb-3">
                Overené štátne a oficiálne webové stránky:
              </h4>
              <div className="flex flex-wrap gap-3">
                {guide.officialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[52px] px-5 py-2.5 rounded-xl bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#EFF6FF] font-bold text-base flex items-center gap-2 transition-all shadow-xs"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="sticky bottom-0 bg-[#FFFFFF] border-t-2 border-[#CBD5E1] p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-lg">
          <div className="text-sm sm:text-base text-[#444653] font-medium max-w-xl">
            Potrebujete sa o postupe poradiť? Môžete bezplatne zatelefonovať na verejnú <strong>Linku pre seniorov 0800 172 500</strong> (prevádzkuje nezisková organizácia <em>Fórum pre pomoc starším</em>, nejde o číslo autora ani tohto webu).
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`min-h-[54px] px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:translate-y-[1px] cursor-pointer ${
              isHighContrast
                ? 'bg-black text-yellow-300 border-2 border-black'
                : 'bg-[#1E40AF] hover:bg-[#00288E] text-white border-2 border-[#1E3A8A]'
            }`}
          >
            <span>Rozumiem, zatvoriť návod</span>
          </button>
        </div>

      </div>
    </div>
  );
};

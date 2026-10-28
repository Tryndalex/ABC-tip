import React, { useState } from 'react';
import { SMS_SCENARIOS } from '../data/guidesData';
import { SmsMessage } from '../types';
import { ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle2, RefreshCw, Smartphone, HelpCircle } from 'lucide-react';

interface SmsSimulatorProps {
  isHighContrast: boolean;
}

export const SmsSimulator: React.FC<SmsSimulatorProps> = ({ isHighContrast }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userGuess, setUserGuess] = useState<'scam' | 'safe' | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const scenario: SmsMessage = SMS_SCENARIOS[currentIndex];

  const handleGuess = (guess: 'scam' | 'safe') => {
    setUserGuess(guess);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setUserGuess(null);
    setShowExplanation(false);
    setCurrentIndex((prev) => (prev + 1) % SMS_SCENARIOS.length);
  };

  const isCorrect = userGuess !== null && (
    (userGuess === 'scam' && scenario.isScam) ||
    (userGuess === 'safe' && !scenario.isScam)
  );

  return (
    <div
      className={`rounded-2xl border-2 p-6 sm:p-8 transition-all ${
        isHighContrast
          ? 'bg-white text-black border-4 border-black'
          : 'bg-[#FFFFFF] text-[#131B2E] border-[#CBD5E1] shadow-md'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#EAEDFF] pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-sm font-bold bg-[#86F2E4]/30 text-[#006F66] border border-[#006A61] mb-2">
            <Smartphone className="w-4 h-4" />
            <span>Bezpečný tréning nanečisto</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
            Tréning: Viete rozoznať podvodnú SMS od skutočnej?
          </h3>
          <p className="text-base sm:text-lg text-[#444653] mt-1">
            Vyskúšajte si overenie správy v bezpečnom prostredí. Nikto vám nemôže ublížiť ani stiahnuť peniaze.
          </p>
        </div>

        <div className="text-base font-bold text-[#1E40AF] bg-[#F2F3FF] px-4 py-2 rounded-xl border border-[#CBD5E1] self-start md:self-center">
          Príklad {currentIndex + 1} z {SMS_SCENARIOS.length}
        </div>
      </div>

      {/* Main Interactive Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Simulated Phone Display */}
        <div className="lg:col-span-6 bg-[#0F172A] text-white p-5 sm:p-6 rounded-3xl border-4 border-[#334155] shadow-xl">
          
          {/* Phone Speaker & Status bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-2 border-b border-slate-700">
            <span>Správy (SMS)</span>
            <div className="w-16 h-1.5 bg-slate-600 rounded-full mx-auto" />
            <span>Batéria 94%</span>
          </div>

          {/* Sender Header */}
          <div className="flex items-center gap-3 bg-slate-800/80 p-3.5 rounded-2xl mb-4 border border-slate-700">
            <div className="w-12 h-12 rounded-full bg-[#1E40AF] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {scenario.sender.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase text-slate-400 font-semibold">Odosielateľ správy:</div>
              <div className="text-lg font-bold text-white truncate">{scenario.sender}</div>
            </div>
          </div>

          {/* SMS Bubble */}
          <div className="bg-[#1E293B] border-2 border-slate-600 p-4 sm:p-5 rounded-2xl relative shadow-inner overflow-hidden">
            <div className="text-xs text-slate-400 mb-2 font-medium">
              Prijaté: {scenario.date}
            </div>
            <p className="text-lg sm:text-xl font-medium text-white leading-relaxed select-text break-words [overflow-wrap:anywhere]">
              {scenario.body}
            </p>
          </div>

          <div className="mt-4 text-xs text-slate-400 text-center">
            Simulácia displeja mobilného telefónu
          </div>
        </div>

        {/* Right Column: User Decision & Feedback */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
              Čo si myslíte o tejto správe?
            </h4>
            <p className="text-base sm:text-lg text-[#444653] mb-6">
              Pozrite sa pozorne na odosielateľa a text vľavo. Je táto správa bezpečná, alebo ide o podvod?
            </p>

            {/* Big 52px+ Decision Buttons */}
            {!showExplanation ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => handleGuess('scam')}
                  className={`min-h-[58px] flex-1 px-6 py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 border-2 transition-all active:translate-y-[1px] cursor-pointer shadow-sm ${
                    isHighContrast
                      ? 'bg-red-700 text-white border-black hover:bg-red-800'
                      : 'bg-[#BA1A1A] text-white border-[#93000A] hover:bg-[#93000A]'
                  }`}
                >
                  <ShieldAlert className="w-6 h-6" />
                  <span>Je to PODVOD</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleGuess('safe')}
                  className={`min-h-[58px] flex-1 px-6 py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 border-2 transition-all active:translate-y-[1px] cursor-pointer shadow-sm ${
                    isHighContrast
                      ? 'bg-green-700 text-white border-black hover:bg-green-800'
                      : 'bg-[#006A61] text-white border-[#005049] hover:bg-[#005049]'
                  }`}
                >
                  <ShieldCheck className="w-6 h-6" />
                  <span>Je to BEZPEČNÁ správa</span>
                </button>
              </div>
            ) : (
              /* Immediate Reassuring Result Box */
              <div className={`p-6 rounded-2xl border-2 transition-all ${
                isCorrect 
                  ? 'bg-[#DCFCE7] border-[#166534] text-[#14532D]'
                  : 'bg-[#FEF2F2] border-[#DC2626] text-[#7F1D1D]'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-8 h-8 text-[#166534] flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-8 h-8 text-[#DC2626] flex-shrink-0" />
                  )}
                  <h5 className="text-2xl font-extrabold">
                    {isCorrect ? 'Správne! Výborný postreh.' : 'Pozor, tu je vysvetlenie:'}
                  </h5>
                </div>

                <p className="text-lg font-semibold mb-4 leading-relaxed">
                  {scenario.isScam 
                    ? 'Táto správa je skutočne PODVOD.' 
                    : 'Táto správa je BEZPEČNÁ informačná SMS od pošty.'}
                </p>

                <p className="text-base sm:text-lg mb-4 text-[#1F2937] leading-relaxed">
                  {scenario.explanation}
                </p>

                {/* Suspicious or safe clues list */}
                <div className="bg-white/90 p-4 rounded-xl border border-current/20 mb-4">
                  <div className="font-bold text-base mb-2">
                    {scenario.isScam ? 'Podozrivé znaky v správe:' : 'Znaky, že správa je v poriadku:'}
                  </div>
                  <ul className="space-y-1.5 text-base">
                    {scenario.suspiciousPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safe advice */}
                <div className="text-base font-bold text-[#0F172A] bg-white p-3.5 rounded-xl border border-slate-300">
                  Odporúčanie: {scenario.safeAlternative}
                </div>

                {/* Next scenario button */}
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={handleNext}
                    className={`min-h-[52px] w-full px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 border-2 transition-all active:translate-y-[1px] cursor-pointer ${
                      isHighContrast
                        ? 'bg-black text-yellow-300 border-black'
                        : 'bg-[#1E40AF] text-white border-[#00288E] hover:bg-[#00288E]'
                    }`}
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>Vyskúšať ďalší príklad</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick reassurance hint */}
          <div className="p-4 rounded-xl bg-[#F8FAFC] border-2 border-[#CBD5E1] flex items-start sm:items-center gap-3 text-sm sm:text-base text-[#444653]">
            <HelpCircle className="w-6 h-6 text-[#1E40AF] flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Pochybujete pri skutočnej SMS v telefóne? Neodpovedajte na ňu, ukážte ju niekomu v rodine, alebo sa poraďte na bezplatnej <strong>Linke pre seniorov 0800 172 500</strong> (prevádzkuje neziskové <em>Fórum pre pomoc starším</em>, nie táto webová stránka).
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

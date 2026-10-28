import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play, RotateCcw, AlertCircle } from 'lucide-react';

interface AudioPlayerBarProps {
  currentText: string | null;
  currentTitle: string | null;
  onClose: () => void;
  isHighContrast: boolean;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentText,
  currentTitle,
  onClose,
  isHighContrast
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.85); // Gentle, calm pacing for seniors
  const [supported, setSupported] = useState<boolean>(true);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    if (currentText) {
      startSpeaking(currentText);
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentText]);

  const startSpeaking = (textToRead: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'sk-SK';
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    // Try finding Slovak voice
    const voices = window.speechSynthesis.getVoices();
    const skVoice = voices.find(v => v.lang.startsWith('sk') || v.lang.startsWith('cs'));
    if (skVoice) {
      utterance.voice = skVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      onClose();
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      onClose();
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleTogglePlay = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else if (currentText) {
      startSpeaking(currentText);
    }
  };

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    onClose();
  };

  const handleRateChange = (newRate: number) => {
    setSpeechRate(newRate);
    if (currentText && isPlaying) {
      // restart with new rate
      startSpeaking(currentText);
    }
  };

  if (!currentText) return null;

  return (
    <aside
      aria-label="Ovládanie hlasového predčítania"
      className={`fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 w-full max-w-full overflow-x-hidden box-border transition-all duration-200 border-t-4 shadow-2xl ${
        isHighContrast
          ? 'bg-black text-white border-yellow-400'
          : 'bg-[#00288E] text-white border-[#1E40AF]'
      }`}
    >
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 w-full overflow-hidden">
        {/* Left: Indicator & Title */}
        <div className="flex items-center gap-3 w-full md:w-auto min-w-0">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
            <Volume2 className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
          </div>
          <div className="min-w-0 flex-grow">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-200">
              Hlasové predčítanie článku
            </div>
            <div className="text-base sm:text-lg font-bold truncate max-w-[220px] sm:max-w-[420px]">
              {currentTitle || 'Čítam text na obrazovke'}
            </div>
          </div>
        </div>

        {/* Center: Play/Pause/Stop Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className={`min-h-[52px] min-w-[52px] px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 border-2 transition-all active:translate-y-[1px] focus:outline-none focus:ring-4 focus:ring-yellow-300 ${
              isHighContrast
                ? 'bg-yellow-400 text-black border-white hover:bg-yellow-300'
                : 'bg-white text-[#00288E] border-white hover:bg-blue-50'
            }`}
            aria-label={isPlaying && !isPaused ? 'Pozastaviť čítanie' : 'Pokračovať v čítaní'}
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-6 h-6" />
                <span className="text-base font-bold">Pozastaviť</span>
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                <span className="text-base font-bold">Pokračovať</span>
              </>
            )}
          </button>

          <button
            onClick={handleStop}
            className="min-h-[52px] px-4 py-2.5 rounded-lg font-semibold bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 flex items-center gap-2 active:translate-y-[1px] focus:outline-none focus:ring-4 focus:ring-yellow-300"
            aria-label="Ukončiť hlasové čítanie"
          >
            <VolumeX className="w-6 h-6" />
            <span className="text-base">Zastaviť</span>
          </button>

          {/* Speed selector */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2 bg-black/20 p-1.5 rounded-lg border border-white/20">
            <span className="text-xs uppercase font-semibold text-white/80 px-2">Rýchlosť:</span>
            <button
              onClick={() => handleRateChange(0.75)}
              className={`px-3 py-1.5 rounded text-sm font-bold min-h-[40px] ${
                speechRate === 0.75 ? 'bg-white text-[#00288E]' : 'text-white hover:bg-white/10'
              }`}
            >
              Pomalšie
            </button>
            <button
              onClick={() => handleRateChange(0.9)}
              className={`px-3 py-1.5 rounded text-sm font-bold min-h-[40px] ${
                speechRate === 0.9 ? 'bg-white text-[#00288E]' : 'text-white hover:bg-white/10'
              }`}
            >
              Normálne
            </button>
          </div>
        </div>

        {/* Right: Close bar */}
        <button
          onClick={handleStop}
          className="text-white/80 hover:text-white underline text-sm min-h-[44px] px-3 font-medium"
        >
          Zavrieť lištu
        </button>
      </div>

      {!supported && (
        <div className="max-w-[1140px] mx-auto mt-2 text-xs text-yellow-200 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          Váš prehliadač nepodporuje syntézu reči. Odporúčame novší prehliadač Chrome, Firefox alebo Edge.
        </div>
      )}
    </aside>
  );
};

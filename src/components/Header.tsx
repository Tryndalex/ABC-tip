import React from 'react';
import { FontSizeLevel } from '../types';
import { Volume2, Square, Sun, Moon, Type, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';

interface HeaderProps {
  fontSize: FontSizeLevel;
  setFontSize: (size: FontSizeLevel) => void;
  isHighContrast: boolean;
  setIsHighContrast: (val: boolean) => void;
  onReadPageAloud: () => void;
  isPlayingAudio: boolean;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  fontSize,
  setFontSize,
  isHighContrast,
  setIsHighContrast,
  onReadPageAloud,
  isPlayingAudio,
  onNavigateHome,
}) => {
  return (
    <header className="w-full bg-[#FFFFFF] border-b-2 border-[#CBD5E1] sticky top-0 z-40 shadow-xs">
      
      {/* 
        DESKTOP ONLY: Slim top auxiliary bar (hidden on mobile to guarantee <25% height)
      */}
      <div className={`hidden md:block w-full border-b transition-colors ${
        isHighContrast 
          ? 'bg-[#000000] text-yellow-300 border-yellow-400' 
          : 'bg-[#F2F3FF] text-[#131B2E] border-[#DAE2FD]'
      }`}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs lg:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#006A61] flex-shrink-0" />
            <span>Overené bezplatné informácie a štátne e-služby pre seniorov</span>
          </div>

          <div className="flex items-center gap-2 text-xs lg:text-sm text-[#444653]">
            <span>Bezplatná Linka pre seniorov:</span>
            <a 
              href="tel:0800172500"
              className="font-extrabold text-[#00288E] hover:underline"
            >
              0800 172 500
            </a>
            <span className="text-[11px] text-[#757684]">(Fórum pre pomoc starším)</span>
          </div>
        </div>
      </div>

      {/* 
        MAIN HEADER BAR:
        - Mobile: Single slim row (~65-75px height, strictly <15% of viewport)
        - Desktop: Elegant, compact header with logo, title, and all accessibility controls
      */}
      <div className="max-w-[1140px] mx-auto px-3 sm:px-6 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={onNavigateHome}
            className="cursor-pointer group flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-xl p-1 flex-shrink-0"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onNavigateHome();
              }
            }}
            aria-label="Prejsť na úvodnú stránku Digitálny Sprievodca Seniorov"
          >
            {/* HeartHandshake emblem icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00288E] border border-[#1E40AF] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
              <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-[#86F2E4]" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-[#00288E] leading-none">
                  <span className="hidden sm:inline">Digitálny </span>Sprievodca<span className="hidden xs:inline"> Seniorov</span>
                </span>
                <span className="hidden lg:inline-block px-2 py-0.2 rounded-full text-[11px] font-bold uppercase bg-[#DDE1FF] text-[#001453] border border-[#B8C4FF]">
                  SK
                </span>
              </div>
              <p className="hidden md:block text-xs sm:text-sm text-[#444653] font-medium leading-tight mt-0.5">
                Jednoduché návody a štátne e-služby bez stresu
              </p>
            </div>
          </div>

          {/* Unified Controls Toolbar: Font Size + Contrast + Audio */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0" role="toolbar" aria-label="Nástroje prístupnosti">
            
            {/* Font Size Selector (A / A+ / A++) */}
            <div className="flex items-center bg-[#F2F3FF] border-2 border-[#CBD5E1] rounded-xl p-0.5 sm:p-1 gap-0.5 shadow-2xs">
              <span className="text-[11px] uppercase font-bold text-[#444653] px-1 sm:px-1.5 hidden lg:flex items-center gap-0.5">
                <Type className="w-3.5 h-3.5 text-[#1E40AF]" />
                <span>Písmo:</span>
              </span>

              <button
                type="button"
                onClick={() => setFontSize('standard')}
                className={`min-h-[40px] sm:min-h-[44px] min-w-[36px] sm:min-w-[42px] px-2 sm:px-2.5 py-1 rounded-lg text-sm sm:text-base font-bold transition-all active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer ${
                  fontSize === 'standard'
                    ? 'bg-[#1E40AF] text-white shadow-xs'
                    : 'text-[#131B2E] hover:bg-white'
                }`}
                aria-pressed={fontSize === 'standard'}
                aria-label="Štandardná veľkosť písma"
                title="Písmo: Štandardné"
              >
                A
              </button>

              <button
                type="button"
                onClick={() => setFontSize('large')}
                className={`min-h-[40px] sm:min-h-[44px] min-w-[38px] sm:min-w-[44px] px-2 sm:px-2.5 py-1 rounded-lg text-base sm:text-lg font-bold transition-all active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer ${
                  fontSize === 'large'
                    ? 'bg-[#1E40AF] text-white shadow-xs'
                    : 'text-[#131B2E] hover:bg-white'
                }`}
                aria-pressed={fontSize === 'large'}
                aria-label="Väčšie písmo"
                title="Písmo: Väčšie"
              >
                A+
              </button>

              <button
                type="button"
                onClick={() => setFontSize('xlarge')}
                className={`min-h-[40px] sm:min-h-[44px] min-w-[40px] sm:min-w-[48px] px-2 sm:px-2.5 py-1 rounded-lg text-lg sm:text-xl font-extrabold transition-all active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer ${
                  fontSize === 'xlarge'
                    ? 'bg-[#1E40AF] text-white shadow-xs'
                    : 'text-[#131B2E] hover:bg-white'
                }`}
                aria-pressed={fontSize === 'xlarge'}
                aria-label="Najväčšie písmo"
                title="Písmo: Najväčšie"
              >
                A++
              </button>
            </div>

            {/* High Contrast Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsHighContrast(!isHighContrast)}
              className={`min-h-[40px] sm:min-h-[44px] px-2.5 sm:px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 border-2 transition-all active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer ${
                isHighContrast
                  ? 'bg-yellow-400 text-black border-black shadow-xs'
                  : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:bg-[#F2F3FF]'
              }`}
              title={isHighContrast ? 'Prepnúť na štandardný kontrast' : 'Prepnúť na vysoký kontrast'}
              aria-label={isHighContrast ? 'Vypnúť vysoký kontrast' : 'Zapnúť vysoký kontrast'}
            >
              {isHighContrast ? (
                <>
                  <Sun className="w-5 h-5 text-black" />
                  <span className="hidden xl:inline text-xs font-bold">Kontrast zapnutý</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 text-[#1E40AF]" />
                  <span className="hidden xl:inline text-xs font-bold">Kontrast</span>
                </>
              )}
            </button>

            {/* Read Aloud / Stop Button */}
            <button
              type="button"
              onClick={onReadPageAloud}
              className={`min-h-[40px] sm:min-h-[44px] px-2.5 sm:px-3.5 py-1 rounded-xl font-bold flex items-center gap-1.5 border-2 transition-all active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer ${
                isPlayingAudio
                  ? 'bg-[#BA1A1A] hover:bg-[#93000A] text-white border-[#7F1D1D] shadow-sm'
                  : 'bg-white text-[#006A61] border-[#006A61] hover:bg-[#F0FDFA]'
              }`}
              title={isPlayingAudio ? 'Kliknutím zastavíte hlasové predčítanie' : 'Prečítať nahlas obsah stránky'}
              aria-label={isPlayingAudio ? 'Zastaviť hlasové predčítanie' : 'Prečítať obsah nahlas'}
            >
              {isPlayingAudio ? (
                <>
                  <Square className="w-4 h-4 fill-white" />
                  <span className="text-xs sm:text-sm font-bold">Zastaviť</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5" />
                  <span className="hidden sm:inline text-xs sm:text-sm font-bold">Predčítať</span>
                </>
              )}
            </button>

            {/* Mobile-only Quick Call Icon */}
            <a
              href="tel:0800172500"
              className="md:hidden min-h-[40px] min-w-[40px] rounded-xl bg-[#F0FDFA] border-2 border-[#006A61] text-[#006A61] flex items-center justify-center transition-all active:translate-y-[1px]"
              title="Zavolať na bezplatnú Linku pre seniorov 0800 172 500 (Fórum pre pomoc starším)"
              aria-label="Zavolať na Linku pre seniorov 0800 172 500"
            >
              <Phone className="w-4 h-4" />
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

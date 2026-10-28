import React from 'react';
import { Guide } from '../types';
import { ArrowRight, Clock, Volume2, CheckCircle2 } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
  onSelect: (guide: Guide) => void;
  onPlayAudio: (text: string, title: string) => void;
  isHighContrast: boolean;
}

export const GuideCard: React.FC<GuideCardProps> = ({
  guide,
  onSelect,
  onPlayAudio,
  isHighContrast
}) => {
  // Category badge colors
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'computer':
        return 'bg-[#EDE9FE] text-[#5B21B6] border-[#7C3AED]';
      case 'health':
        return 'bg-[#86F2E4]/25 text-[#006F66] border-[#006A61]';
      case 'security':
        return 'bg-[#FFDAD6] text-[#93000A] border-[#BA1A1A]';
      case 'government':
        return 'bg-[#DDE1FF] text-[#001453] border-[#1E40AF]';
      case 'phone':
        return 'bg-[#E0F2FE] text-[#0369A1] border-[#0284C7]';
      case 'pension':
        return 'bg-[#DCFCE7] text-[#166534] border-[#15803D]';
      default:
        return 'bg-[#EAEDFF] text-[#1E40AF] border-[#1E40AF]';
    }
  };

  return (
    <article
      className={`rounded-2xl transition-all duration-200 border-2 flex flex-col justify-between p-6 sm:p-7 relative group ${
        isHighContrast
          ? 'bg-white text-black border-2 border-black hover:border-4 hover:border-black shadow-none'
          : 'bg-[#FFFFFF] text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF] hover:shadow-lg shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)]'
      }`}
    >
      <div>
        {/* Top Badges: Category & Read Time */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-sm sm:text-base font-bold border-2 ${getBadgeStyle(guide.category)}`}>
            {guide.categoryName}
          </span>

          <div className="flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#444653]">
            <Clock className="w-4 h-4 text-[#757684]" />
            <span>cca {guide.readTimeMinutes} minúty</span>
          </div>
        </div>

        {/* Card Title */}
        <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-[#0F172A] mb-3 group-hover:text-[#00288E] transition-colors">
          {guide.title}
        </h3>

        {/* Summary Description */}
        <p className="text-base sm:text-lg text-[#444653] leading-relaxed mb-6 font-normal">
          {guide.summary}
        </p>

        {/* Quick steps count indicator */}
        <div className="flex items-center gap-2 text-sm font-semibold text-[#006A61] mb-6 bg-[#F0FDFA] p-2.5 rounded-xl border border-[#CCFBF1]">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Obsahuje {guide.steps.length} jednoduché kroky s vysvetlením</span>
        </div>
      </div>

      {/* Action Buttons: Explicit "Čítať odpoveď" + "Počúvať" */}
      <div className="pt-4 border-t-2 border-[#EAEDFF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        
        {/* Primary Card Action: Čítať odpoveď */}
        <button
          type="button"
          onClick={() => onSelect(guide)}
          className={`min-h-[52px] px-6 py-3 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all active:translate-y-[1px] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#2563EB] ${
            isHighContrast
              ? 'bg-black text-yellow-300 border-2 border-black hover:bg-neutral-900'
              : 'bg-[#1E40AF] hover:bg-[#00288E] text-white border-2 border-[#1E3A8A] shadow-xs'
          }`}
          aria-label={`Čítať celý návod: ${guide.title}`}
        >
          <span>Čítať odpoveď</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Audio summary preview button */}
        <button
          type="button"
          onClick={() => onPlayAudio(guide.audioText, guide.title)}
          className={`min-h-[52px] px-4 py-2.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all active:translate-y-[1px] cursor-pointer border-2 focus:outline-none focus:ring-3 focus:ring-[#2563EB] ${
            isHighContrast
              ? 'bg-white text-black border-2 border-black hover:bg-neutral-100'
              : 'bg-[#F2F3FF] text-[#00288E] border-[#CBD5E1] hover:border-[#1E40AF] hover:bg-[#E2E7FF]'
          }`}
          title="Vypočuť si zhrnutie nahlas"
          aria-label={`Vypočuť si zhrnutie pre: ${guide.title}`}
        >
          <Volume2 className="w-5 h-5 text-[#006A61]" />
          <span>Vypočuť si</span>
        </button>

      </div>
    </article>
  );
};

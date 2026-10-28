import React from 'react';
import { HELPLINES } from '../data/guidesData';
import { Phone, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HelplineSectionProps {
  isHighContrast: boolean;
}

export const HelplineSection: React.FC<HelplineSectionProps> = ({ isHighContrast }) => {
  return (
    <section 
      aria-labelledby="helplines-heading"
      className="w-full mt-12 mb-8"
    >
      <div className="border-b-2 border-[#EAEDFF] pb-4 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-sm font-bold bg-[#DDE1FF] text-[#001453] border border-[#1E40AF] mb-2">
          <HeartHandshake className="w-4 h-4" />
          <span>Oficiálne verejné a štátne infolinky</span>
        </div>
        <h2 id="helplines-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Oficiálne telefónne čísla a štátne linky pomoci
        </h2>
        <p className="text-lg sm:text-xl text-[#444653] mt-2 max-w-3xl leading-relaxed">
          Zoznam oficiálnych verejných liniek v Slovenskej republike, kde vám vyškolení pracovníci daných úradov a organizácií pomôžu.
        </p>
      </div>

      {/* Prominent Disclaimer Banner */}
      <div className="p-5 rounded-2xl bg-[#FFFBEB] border-2 border-[#D97706] mb-8 text-[#92400E] flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[#FDE68A] flex items-center justify-center flex-shrink-0 text-[#92400E] font-bold text-xl">
          ℹ️
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-bold mb-1">
            Dôležité upozornenie k telefónnym číslam:
          </h4>
          <p className="text-base sm:text-lg leading-relaxed">
            Žiadne z nižšie uvedených telefónnych čísel <strong>nepatrí autorovi, prevádzkovateľovi ani správcovi tejto vzdelávacej webovej stránky</strong>.
            Všetky kontakty smerujú priamo na <strong>oficiálne klientske centrá štátnych inštitúcií</strong> (Sociálna poisťovňa, Slovenská pošta, NCZI, Polícia SR) a akreditované neziskové organizácie (Fórum pre pomoc starším).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HELPLINES.map((line) => {
          return (
            <div
              key={line.id}
              className={`rounded-2xl border-2 p-6 flex flex-col justify-between transition-all ${
                isHighContrast
                  ? 'bg-white text-black border-2 border-black'
                  : 'bg-[#FFFFFF] text-[#131B2E] border-[#CBD5E1] shadow-xs hover:border-[#1E40AF]'
              }`}
            >
              <div>
                {/* Badge & Organization */}
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${
                      line.isFree 
                        ? 'bg-[#DCFCE7] text-[#166534] border-[#166534]'
                        : 'bg-[#F2F3FF] text-[#1E40AF] border-[#CBD5E1]'
                    }`}>
                      {line.badge}
                    </span>
                    <span className="text-xs font-bold uppercase text-[#757684]">Externá inštitúcia</span>
                  </div>

                  <div className="text-sm font-extrabold text-[#006A61] bg-[#F0FDFA] px-2.5 py-1 rounded-lg border border-[#CCFBF1]">
                    Prevádzkovateľ: {line.organization}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug mb-2">
                  {line.name}
                </h3>

                {/* Description */}
                <p className="text-base text-[#444653] leading-relaxed mb-4">
                  {line.description}
                </p>

                {/* Operating hours */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#444653] mb-4 bg-[#F8FAFC] p-2.5 rounded-xl border border-[#CBD5E1]">
                  <Clock className="w-4 h-4 text-[#757684]" />
                  <span>Dostupnosť: {line.hours}</span>
                </div>

                <div className="text-xs text-[#757684] mb-4 italic">
                  Volaním sa spojíte priamo s pracovníkmi organizácie {line.organization}.
                </div>
              </div>

              {/* Call Button (Min 54px height) */}
              <a
                href={`tel:${line.phoneNumber}`}
                className={`min-h-[54px] w-full px-5 py-3 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 border-2 transition-all active:translate-y-[1px] ${
                  line.isFree
                    ? isHighContrast
                      ? 'bg-black text-yellow-300 border-black'
                      : 'bg-[#006A61] hover:bg-[#005049] text-white border-[#004D46] shadow-sm'
                    : isHighContrast
                      ? 'bg-white text-black border-2 border-black'
                      : 'bg-[#1E40AF] hover:bg-[#00288E] text-white border-[#1E3A8A] shadow-sm'
                }`}
                aria-label={`Zavolať do inštitúcie ${line.organization} na číslo ${line.displayPhone}`}
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">Zavolať: {line.displayPhone}</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

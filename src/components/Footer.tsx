import React from 'react';
import { ArrowUp, Heart, ShieldCheck, Printer, Phone } from 'lucide-react';

interface FooterProps {
  isHighContrast: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isHighContrast }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer 
      className={`w-full max-w-full overflow-x-hidden box-border mt-16 border-t-2 transition-colors ${
        isHighContrast
          ? 'bg-black text-white border-white'
          : 'bg-[#FFFFFF] text-[#131B2E] border-[#CBD5E1]'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12">
        
        {/* Top footer row: Reassurance & Quick Action */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-[#EAEDFF]">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-[#00288E]">
              <Heart className="w-6 h-6 text-[#006A61] fill-[#86F2E4]" />
              <span>Digitálny Sprievodca Seniorov</span>
            </div>
            <p className="text-base sm:text-lg text-[#444653] mt-1 max-w-xl">
              Nezisková iniciatíva pre bezpečný a dôstojný prístup starších občanov k moderným digitálnym službám Slovenskej republiky.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="min-h-[52px] px-5 py-2.5 rounded-xl font-bold text-base flex items-center gap-2 text-[#00288E] bg-[#F2F3FF] hover:bg-[#E2E7FF] border-2 border-[#CBD5E1] transition-all"
            >
              <Printer className="w-5 h-5 text-[#1E40AF]" />
              <span>Vytlačiť stránku</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="min-h-[52px] px-5 py-2.5 rounded-xl font-bold text-base flex items-center gap-2 text-white bg-[#1E40AF] hover:bg-[#00288E] border-2 border-[#1E3A8A] transition-all"
              aria-label="Vrátiť sa na začiatok stránky"
            >
              <ArrowUp className="w-5 h-5" />
              <span>Hore na začiatok</span>
            </button>
          </div>
        </div>

        {/* Middle row: Information Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 text-base">
          
          <div>
            <h4 className="font-bold text-lg text-[#0F172A] mb-3">Základné princípy portálu</h4>
            <ul className="space-y-2 text-[#444653]">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#006A61] flex-shrink-0" />
                <span>Bezpečné overené postupy bez reklám</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#006A61] flex-shrink-0" />
                <span>Veľké písmo s vysokým kontrastom</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#006A61] flex-shrink-0" />
                <span>Hlasové predčítanie pre slabozrakých</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-[#0F172A] mb-3">Oficiálne verejné linky</h4>
            <div className="space-y-3">
              <div>
                <span className="block text-xs uppercase font-bold text-[#006A61]">Fórum pre pomoc starším:</span>
                <span className="block text-sm text-[#444653]">Linka dôvery pre seniorov:</span>
                <a href="tel:0800172500" className="text-xl font-extrabold text-[#00288E] hover:underline">
                  0800 172 500 <span className="text-xs text-[#166534] bg-[#DCFCE7] px-1.5 py-0.5 rounded font-bold">Bezplatná</span>
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase font-bold text-[#006A61]">Sociálna poisťovňa SR:</span>
                <span className="block text-sm text-[#444653]">Infolinka pre dôchodky:</span>
                <a href="tel:0800123123" className="text-xl font-extrabold text-[#00288E] hover:underline">
                  0800 123 123 <span className="text-xs text-[#166534] bg-[#DCFCE7] px-1.5 py-0.5 rounded font-bold">Bezplatná</span>
                </a>
              </div>
              <p className="text-xs text-[#757684] italic pt-1 border-t border-[#EAEDFF]">
                ⚠️ Čísla patria príslušným štátnym inštitúciám a neziskovým organizáciám. Táto webová stránka nemá vlastnú telefónnu linku.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-[#0F172A] mb-3">Vyhlásenie o prístupnosti</h4>
            <p className="text-sm text-[#444653] leading-relaxed">
              Tento portál spĺňa kritériá prístupnosti WCAG 2.1 úroveň AAA. Navrhnuté špeciálne s rešpektom k potrebám starších občanov a osôb so zrakovým obmedzením.
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#EAEDFF] flex flex-col sm:flex-row items-center justify-between text-sm text-[#444653] gap-3">
          <div>
            © 2026 Digitálny Sprievodca Seniorov • Dizajnový štandard Empathetic Clarity
          </div>
          <div className="flex items-center gap-4">
            <span>Slovenská republika</span>
            <span>•</span>
            <span>Prístupnosť pre všetkých</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

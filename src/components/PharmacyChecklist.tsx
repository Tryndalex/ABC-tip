import React, { useState } from 'react';
import { PHARMACY_CHECKLIST_ITEMS } from '../data/guidesData';
import { CheckSquare, Printer, Check, Info, HeartHandshake } from 'lucide-react';

interface PharmacyChecklistProps {
  isHighContrast: boolean;
}

export const PharmacyChecklist: React.FC<PharmacyChecklistProps> = ({ isHighContrast }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'item-id-card': true
  });

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = PHARMACY_CHECKLIST_ITEMS.length;

  return (
    <div
      className={`rounded-2xl border-2 p-6 sm:p-8 transition-all ${
        isHighContrast
          ? 'bg-white text-black border-4 border-black'
          : 'bg-[#FFFFFF] text-[#131B2E] border-[#CBD5E1] shadow-md'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#EAEDFF] pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-sm font-bold bg-[#DCFCE7] text-[#166534] border border-[#166534] mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Praktická pomôcka do peňaženky alebo tašky</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            Zoznam pred odchodom do lekárne (eRecept)
          </h3>
          <p className="text-base sm:text-lg text-[#444653] mt-1">
            Odškrtnite si položky, ktoré už máte nachystané, aby ste v lekárni na nič nezabudli.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="min-h-[52px] px-5 py-2.5 rounded-xl font-bold text-base flex items-center gap-2 text-[#00288E] bg-[#F2F3FF] hover:bg-[#E2E7FF] border-2 border-[#CBD5E1] transition-all self-start sm:self-center"
        >
          <Printer className="w-5 h-5 text-[#1E40AF]" />
          <span>Vytlačiť zoznam</span>
        </button>
      </div>

      {/* Progress alert */}
      <div className="mb-6 p-4 rounded-xl bg-[#F0FDFA] border border-[#0D9488] flex items-center justify-between gap-3">
        <span className="text-base sm:text-lg font-bold text-[#004D46]">
          Stav prípravy: {checkedCount} zo {totalCount} pripravených
        </span>
        {checkedCount === totalCount && (
          <span className="text-sm font-bold bg-[#0D9488] text-white px-3 py-1 rounded-full flex items-center gap-1">
            <Check className="w-4 h-4 stroke-[3]" /> Všetko máte so sebou!
          </span>
        )}
      </div>

      {/* Checklist items with 28x28 inside 52px target zone */}
      <div className="space-y-3">
        {PHARMACY_CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <label
              key={item.id}
              className={`min-h-[64px] p-4 rounded-xl border-2 flex items-start gap-4 cursor-pointer transition-all select-none ${
                isChecked
                  ? isHighContrast
                    ? 'border-black bg-neutral-100'
                    : 'border-[#006A61] bg-[#F0FDFA]'
                  : isHighContrast
                    ? 'border-black bg-white'
                    : 'border-[#CBD5E1] bg-white hover:border-[#1E40AF]'
              }`}
            >
              {/* Enlarged 28px visual indicator in 52px hit box */}
              <div className="min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                  className="w-7 h-7 rounded border-2 border-[#1E40AF] text-[#1E40AF] focus:ring-4 focus:ring-[#2563EB] cursor-pointer accent-[#1E40AF]"
                />
              </div>

              <div className="flex-grow pt-0.5">
                <div className={`text-lg sm:text-xl font-bold leading-snug ${
                  isChecked ? 'text-[#004D46]' : 'text-[#0F172A]'
                }`}>
                  {item.label}
                </div>
                <div className="text-base text-[#444653] mt-1 leading-relaxed">
                  {item.hint}
                </div>
              </div>
            </label>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-[#FAF8FF] border border-[#CBD5E1] text-base text-[#444653] flex items-center gap-3">
        <Info className="w-5 h-5 text-[#1E40AF] flex-shrink-0" />
        <span>
          <strong>Dôležitá pripomienka:</strong> Lekárnikovi v lekárni stačí povedať rodné číslo a predložiť občiansky preukaz. Papierový recept nie je potrebný.
        </span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquareHeart } from 'lucide-react';

interface SeniorSurveyProps {
  isHighContrast: boolean;
}

export const SeniorSurvey: React.FC<SeniorSurveyProps> = ({ isHighContrast }) => {
  const [topicRequest, setTopicRequest] = useState('');
  const [deviceType, setDeviceType] = useState('android');
  const [needLargePrint, setNeedLargePrint] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicRequest.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      className={`rounded-2xl border-2 p-6 sm:p-8 transition-all mt-10 mb-8 ${
        isHighContrast
          ? 'bg-white text-black border-4 border-black'
          : 'bg-[#FFFFFF] text-[#131B2E] border-[#CBD5E1] shadow-md'
      }`}
    >
      <div className="border-b-2 border-[#EAEDFF] pb-4 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-sm font-bold bg-[#F2F3FF] text-[#1E40AF] border border-[#CBD5E1] mb-2">
          <MessageSquareHeart className="w-4 h-4 text-[#1E40AF]" />
          <span>Máte nápad na novú tému?</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
          Nenašli ste odpoveď? Napíšte mi, aký návod vám chýba
        </h3>
        <p className="text-base sm:text-lg text-[#444653] mt-1">
          Ja vyhľadám overené informácie a vytvorím pre vás nový zrozumiteľný návod s veľkými písmenami.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-[#DCFCE7] border-2 border-[#166534] text-[#14532D] text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#166534] mx-auto" />
          <h4 className="text-2xl font-bold">Ďakujem vám za podnet!</h4>
          <p className="text-lg">
            Váš návrh som zaznamenal. Vyhľadám potrebné informácie a vytvorím k nemu podrobný návod čo najskôr.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setTopicRequest('');
            }}
            className="mt-4 px-6 py-2.5 rounded-xl font-bold text-base bg-white border-2 border-[#166534] text-[#166534] hover:bg-[#F0FDF4]"
          >
            Poslať ďalší námet
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text input: 56px minimum height */}
          <div>
            <label htmlFor="topic-request-input" className="block text-lg sm:text-xl font-bold text-[#0F172A] mb-2">
              Akú tému alebo problém by ste chceli v návodoch vysvetliť?
            </label>
            <input
              id="topic-request-input"
              type="text"
              required
              value={topicRequest}
              onChange={(e) => setTopicRequest(e.target.value)}
              placeholder="Napríklad: Ako platiť parkovné cez mobil, ako si vymazať históriu..."
              className={`w-full min-h-[56px] px-5 rounded-xl text-lg sm:text-xl placeholder:text-[#64748B] outline-none transition-all ${
                isHighContrast
                  ? 'bg-white text-black border-2 border-black focus:border-[#2563EB] focus:ring-4 focus:ring-yellow-400'
                  : 'bg-white text-[#131B2E] border-2 border-[#94A3B8] focus:border-[3px] focus:border-[#1E40AF] focus:ring-2 focus:ring-[#2563EB]/20 shadow-xs'
              }`}
            />
          </div>

          {/* Radio group: 28px indicator in 52px target zone */}
          <div>
            <fieldset>
              <legend className="block text-lg sm:text-xl font-bold text-[#0F172A] mb-2">
                Aké zariadenie najčastejšie používate?
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'android', label: 'Smartfón (Android)' },
                  { id: 'iphone', label: 'iPhone (Apple)' },
                  { id: 'computer', label: 'Stolný počítač / Notebook' }
                ].map((device) => (
                  <label
                    key={device.id}
                    className={`min-h-[54px] px-4 py-2 rounded-xl border-2 flex items-center gap-3 cursor-pointer select-none transition-all ${
                      deviceType === device.id
                        ? isHighContrast
                          ? 'border-black bg-neutral-100 font-bold'
                          : 'border-[#1E40AF] bg-[#EFF6FF] text-[#00288E] font-bold shadow-xs'
                        : 'border-[#CBD5E1] bg-white text-[#131B2E] hover:border-[#94A3B8]'
                    }`}
                  >
                    <div className="min-w-[40px] min-h-[40px] flex items-center justify-center">
                      <input
                        type="radio"
                        name="device-type"
                        value={device.id}
                        checked={deviceType === device.id}
                        onChange={() => setDeviceType(device.id)}
                        className="w-7 h-7 text-[#1E40AF] border-2 border-[#1E40AF] focus:ring-3 focus:ring-[#2563EB] cursor-pointer accent-[#1E40AF]"
                      />
                    </div>
                    <span className="text-base sm:text-lg">{device.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Checkbox: 28px indicator inside 52px target zone */}
          <div>
            <label
              className="min-h-[54px] p-3 rounded-xl border-2 border-[#CBD5E1] hover:border-[#1E40AF] flex items-center gap-4 cursor-pointer select-none bg-white transition-all"
            >
              <div className="min-w-[44px] min-h-[44px] flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={needLargePrint}
                  onChange={(e) => setNeedLargePrint(e.target.checked)}
                  className="w-7 h-7 rounded border-2 border-[#1E40AF] text-[#1E40AF] focus:ring-4 focus:ring-[#2563EB] cursor-pointer accent-[#1E40AF]"
                />
              </div>
              <span className="text-base sm:text-lg font-semibold text-[#131B2E]">
                Mám slabší zrak a uprednostňujem návody s extra veľkými obrázkami a písmom
              </span>
            </label>
          </div>

          {/* Explicit Slovak Submit Button */}
          <div>
            <button
              type="submit"
              className={`min-h-[54px] px-8 py-3 rounded-xl font-bold text-lg sm:text-xl flex items-center justify-center gap-3 transition-all active:translate-y-[1px] cursor-pointer ${
                isHighContrast
                  ? 'bg-black text-yellow-300 border-2 border-black'
                  : 'bg-[#1E40AF] hover:bg-[#00288E] text-white border-2 border-[#1E3A8A] shadow-md hover:shadow-lg'
              }`}
            >
              <Send className="w-6 h-6" />
              <span>Odoslať námet na návod</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

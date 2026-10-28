import React, { useState, useEffect, useMemo } from 'react';
import { FontSizeLevel, CategoryId, Guide } from './types';
import { GUIDES, CATEGORIES } from './data/guidesData';
import { scoreGuideSearch } from './utils/searchUtils';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Breadcrumbs, BreadcrumbItem } from './components/Breadcrumbs';
import { GuideCard } from './components/GuideCard';
import { GuideDetailModal } from './components/GuideDetailModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { SmsSimulator } from './components/SmsSimulator';
import { PharmacyChecklist } from './components/PharmacyChecklist';
import { HelplineSection } from './components/HelplineSection';
import { SeniorSurvey } from './components/SeniorSurvey';
import { Footer } from './components/Footer';
import {
  BookOpen,
  ShieldCheck,
  CheckSquare,
  PhoneCall,
  Search,
  Sparkles,
  Heart,
  HelpCircle,
  Smartphone,
  ChevronRight,
  Check
} from 'lucide-react';

export default function App() {
  // Accessibility state
  const [fontSize, setFontSize] = useState<FontSizeLevel>('standard');
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  // Audio read-aloud state
  const [audioText, setAudioText] = useState<string | null>(null);
  const [audioTitle, setAudioTitle] = useState<string | null>(null);

  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  // Navigation tab: 'guides' | 'sms-practice' | 'pharmacy-checklist' | 'helplines'
  const [activeTab, setActiveTab] = useState<'guides' | 'sms-practice' | 'pharmacy-checklist' | 'helplines'>('guides');

  // Active guide in full detail view / modal
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  // Apply font size and contrast classes to HTML root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-standard', 'font-scale-large', 'font-scale-xlarge');
    root.classList.add(`font-scale-${fontSize}`);

    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [fontSize, isHighContrast]);

  // Filtered guides based on search query with fuzzy matching and diacritic tolerance
  const searchResults = useMemo(() => {
    const trimmed = searchQuery.trim();

    return GUIDES.map((guide) => {
      const categoryMatches = selectedCategory === 'all' || guide.category === selectedCategory;
      if (!categoryMatches) {
        return { guide, score: 0, matchedTerms: [] };
      }

      if (!trimmed) {
        return { guide, score: 1, matchedTerms: [] };
      }

      return scoreGuideSearch(guide, trimmed);
    })
      .filter((res) => res.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [searchQuery, selectedCategory]);

  const filteredGuides = useMemo(() => {
    return searchResults.map(r => r.guide);
  }, [searchResults]);

  // Audio Play Trigger
  const handlePlayAudio = (text: string, title: string) => {
    setAudioText(text);
    setAudioTitle(title);
  };

  const handleSearchSubmit = () => {
    // Reset category filter and any open modal so new query searches all guides
    setSelectedCategory('all');
    setSelectedGuide(null);
    setActiveTab('guides');
  };

  const handleReadPageAloud = () => {
    const textToRead =
      'Vitajte na portáli Digitálny Sprievodca Seniorov. Ponúkame zrozumiteľné návody pre starších občanov. Ako si vybrať elektronický recept v lekárni, ako spoznať falošnú SMS správu od pošty, ako si zväčšiť písmo v smartfóne a ako získať potvrdenie o dôchodku cez internet bez čakania na úradoch. V sekcii liniek nájdete oficiálne telefónne čísla štátnych inštitúcií a nezávislej Linky pre seniorov na čísle 0800 172 500, ktorú prevádzkuje neziskové Fórum pre pomoc starším.';
    handlePlayAudio(textToRead, 'Úvodné privítanie a prehľad tém');
  };

  const handleNavigateHome = () => {
    setSelectedGuide(null);
    setActiveTab('guides');
    setSelectedCategory('all');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Build breadcrumbs
  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [
      { label: 'Úvodná stránka', onClick: handleNavigateHome }
    ];

    if (activeTab === 'sms-practice') {
      items.push({ label: 'Cvičná zóna: Falošné SMS', active: true });
      return items;
    }

    if (activeTab === 'pharmacy-checklist') {
      items.push({ label: 'Zoznam do lekárne (eRecept)', active: true });
      return items;
    }

    if (activeTab === 'helplines') {
      items.push({ label: 'Telefónne linky pomoci', active: true });
      return items;
    }

    if (selectedCategory !== 'all') {
      const catObj = CATEGORIES.find(c => c.id === selectedCategory);
      items.push({
        label: catObj ? catObj.name : 'Kategória',
        onClick: () => {
          setSelectedGuide(null);
        }
      });
    }

    if (selectedGuide) {
      items.push({
        label: selectedGuide.title,
        active: true
      });
    }

    return items;
  }, [activeTab, selectedCategory, selectedGuide]);

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden flex flex-col transition-colors duration-200 ${
      isHighContrast ? 'bg-white text-black' : 'bg-[#FAF8FF] text-[#131B2E]'
    }`}>
      
      {/* Sticky Header with Accessibility Bar */}
      <Header
        fontSize={fontSize}
        setFontSize={setFontSize}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
        onReadPageAloud={handleReadPageAloud}
        isPlayingAudio={Boolean(audioText)}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Content Container constrained to max readable width 1140px, 100% width, no x-overflow */}
      <main className="flex-grow w-full max-w-[1140px] mx-auto px-4 sm:px-6 py-6 sm:py-8 overflow-x-hidden box-border">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbItems} isHighContrast={isHighContrast} />

        {/* Hero Section */}
        {activeTab === 'guides' && !selectedGuide && !searchQuery && selectedCategory === 'all' && (
          <section
            aria-label="Úvodné privítanie"
            className={`rounded-3xl border-2 p-6 sm:p-10 mb-8 transition-all ${
              isHighContrast
                ? 'bg-neutral-100 border-4 border-black text-black'
                : 'bg-gradient-to-br from-[#FFFFFF] via-[#FAF8FF] to-[#EAEDFF] border-[#CBD5E1] shadow-md'
            }`}
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-base font-bold bg-[#DCFCE7] text-[#166534] border border-[#166534] mb-4">
                <Heart className="w-5 h-5 text-[#166534]" />
                <span>Trpezlivý digitálny sprievodca bez stresu</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4">
                Vitajte. Všetko si vysvetlíme pokojne, krok za krokom.
              </h1>

              <p className="text-xl sm:text-2xl text-[#334155] leading-relaxed mb-8 font-normal">
                Nebojte sa moderných technológií. Nikam sa neponáhľame. Na tomto portáli nájdete praktické návody k elektronickému receptu, občianskemu preukazu, smartfónom a ochrane pred podvodmi.
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('search-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`min-h-[54px] px-8 py-3.5 rounded-xl font-bold text-lg sm:text-xl flex items-center justify-center gap-3 border-2 transition-all active:translate-y-[1px] cursor-pointer shadow-md ${
                    isHighContrast
                      ? 'bg-black text-yellow-300 border-black'
                      : 'bg-[#1E40AF] hover:bg-[#00288E] text-white border-[#1E3A8A]'
                  }`}
                >
                  <Search className="w-6 h-6" />
                  <span>Vyhľadať návod</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('sms-practice')}
                  className={`min-h-[54px] px-7 py-3.5 rounded-xl font-bold text-lg sm:text-xl flex items-center justify-center gap-3 border-2 transition-all active:translate-y-[1px] cursor-pointer ${
                    isHighContrast
                      ? 'bg-white text-black border-2 border-black'
                      : 'bg-white hover:bg-[#EFF6FF] text-[#1E40AF] border-[#1E40AF] shadow-xs'
                  }`}
                >
                  <Smartphone className="w-6 h-6 text-[#006A61]" />
                  <span>Vyskúšať cvičnú zónu</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Primary Feature Tabs (52px minimum touch target) */}
        <nav
          aria-label="Hlavné sekcie sprievodcu"
          className="flex flex-wrap gap-3 mb-8 border-b-2 border-[#CBD5E1] pb-3"
        >
          <button
            type="button"
            onClick={() => {
              setActiveTab('guides');
              setSelectedGuide(null);
            }}
            className={`min-h-[54px] px-6 py-3 rounded-xl font-bold text-lg sm:text-xl flex items-center gap-2.5 border-2 transition-all cursor-pointer ${
              activeTab === 'guides'
                ? isHighContrast
                  ? 'bg-black text-yellow-300 border-black ring-2 ring-yellow-400'
                  : 'bg-[#1E40AF] text-white border-[#00288E] shadow-sm'
                : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF]'
            }`}
            aria-current={activeTab === 'guides' ? 'page' : undefined}
          >
            <BookOpen className="w-6 h-6" />
            <span>Návody a odpovede ({GUIDES.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('sms-practice');
              setSelectedGuide(null);
            }}
            className={`min-h-[54px] px-6 py-3 rounded-xl font-bold text-lg sm:text-xl flex items-center gap-2.5 border-2 transition-all cursor-pointer ${
              activeTab === 'sms-practice'
                ? isHighContrast
                  ? 'bg-black text-yellow-300 border-black ring-2 ring-yellow-400'
                  : 'bg-[#1E40AF] text-white border-[#00288E] shadow-sm'
                : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF]'
            }`}
            aria-current={activeTab === 'sms-practice' ? 'page' : undefined}
          >
            <ShieldCheck className="w-6 h-6 text-[#006A61]" />
            <span>Cvičná zóna: Falošné SMS</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('pharmacy-checklist');
              setSelectedGuide(null);
            }}
            className={`min-h-[54px] px-6 py-3 rounded-xl font-bold text-lg sm:text-xl flex items-center gap-2.5 border-2 transition-all cursor-pointer ${
              activeTab === 'pharmacy-checklist'
                ? isHighContrast
                  ? 'bg-black text-yellow-300 border-black ring-2 ring-yellow-400'
                  : 'bg-[#1E40AF] text-white border-[#00288E] shadow-sm'
                : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF]'
            }`}
            aria-current={activeTab === 'pharmacy-checklist' ? 'page' : undefined}
          >
            <CheckSquare className="w-6 h-6 text-[#006A61]" />
            <span>Zoznam do lekárne (eRecept)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('helplines');
              setSelectedGuide(null);
            }}
            className={`min-h-[54px] px-6 py-3 rounded-xl font-bold text-lg sm:text-xl flex items-center gap-2.5 border-2 transition-all cursor-pointer ${
              activeTab === 'helplines'
                ? isHighContrast
                  ? 'bg-black text-yellow-300 border-black ring-2 ring-yellow-400'
                  : 'bg-[#1E40AF] text-white border-[#00288E] shadow-sm'
                : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF]'
            }`}
            aria-current={activeTab === 'helplines' ? 'page' : undefined}
          >
            <PhoneCall className="w-6 h-6 text-[#1E40AF]" />
            <span>Oficiálne linky inštitúcií ({CATEGORIES.length})</span>
          </button>
        </nav>

        {/* Tab Content: Guides Section */}
        {activeTab === 'guides' && (
          <section id="search-section" aria-label="Vyhľadávanie a zoznam návodov">
            
            {/* Search Bar & Category Filters */}
            <div className="mb-10">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                isHighContrast={isHighContrast}
                onSearchSubmit={handleSearchSubmit}
              />
            </div>

            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  {searchQuery
                    ? `Výsledky pre výraz „${searchQuery}“ (${filteredGuides.length})`
                    : selectedCategory !== 'all'
                    ? `Návody v kategórii ${CATEGORIES.find(c => c.id === selectedCategory)?.name} (${filteredGuides.length})`
                    : `Všetky dostupné návody a rady (${filteredGuides.length})`}
                </h2>

                {searchQuery && (
                  <p className="text-sm sm:text-base text-[#006A61] font-semibold flex items-center gap-1.5 mt-1">
                    <Check className="w-4 h-4 stroke-[3]" />
                    Vyhľadávanie automaticky dopĺňa dĺžne a mäkčene a toleruje drobné preklepy v písmenkách.
                  </p>
                )}
              </div>

              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-base font-bold text-[#1E40AF] hover:underline self-start sm:self-center bg-[#F2F3FF] px-3.5 py-2 rounded-lg border border-[#CBD5E1]"
                >
                  Zobraziť všetky témy
                </button>
              )}
            </div>

            {/* Empty State */}
            {filteredGuides.length === 0 ? (
              <div className="p-8 sm:p-12 text-center rounded-2xl bg-white border-2 border-[#CBD5E1] space-y-4 my-6">
                <HelpCircle className="w-16 h-16 text-[#757684] mx-auto" />
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Pre tento výraz sme nenašli presný návod
                </h3>
                <p className="text-lg text-[#444653] max-w-lg mx-auto">
                  Skúste hľadať iné slovo (napríklad „recept“, „pošta“, „heslo“, „dôchodok“), alebo si vyberte z kategórií vyššie.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="min-h-[52px] px-6 py-2.5 rounded-xl font-bold text-base bg-[#1E40AF] text-white hover:bg-[#00288E] transition-all"
                >
                  Vynulovať filter a ukázať všetko
                </button>
              </div>
            ) : (
              /* Grid of Guide Cards */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {filteredGuides.map((guide) => (
                  <GuideCard
                    key={guide.id}
                    guide={guide}
                    onSelect={(g) => setSelectedGuide(g)}
                    onPlayAudio={handlePlayAudio}
                    isHighContrast={isHighContrast}
                  />
                ))}
              </div>
            )}

            {/* Interactive Feedback & Suggestion Box */}
            <SeniorSurvey isHighContrast={isHighContrast} />

          </section>
        )}

        {/* Tab Content: SMS Simulator Practice */}
        {activeTab === 'sms-practice' && (
          <section aria-label="Cvičná zóna na overenie SMS správ">
            <SmsSimulator isHighContrast={isHighContrast} />
          </section>
        )}

        {/* Tab Content: Pharmacy Checklist */}
        {activeTab === 'pharmacy-checklist' && (
          <section aria-label="Zoznam do lekárne">
            <PharmacyChecklist isHighContrast={isHighContrast} />
          </section>
        )}

        {/* Tab Content: Helplines */}
        {activeTab === 'helplines' && (
          <section aria-label="Telefónne kontakty">
            <HelplineSection isHighContrast={isHighContrast} />
          </section>
        )}

        {/* Always Visible Helplines Preview at the bottom of Guides tab */}
        {activeTab === 'guides' && (
          <HelplineSection isHighContrast={isHighContrast} />
        )}

      </main>

      {/* Guide Detail View Modal */}
      {selectedGuide && (
        <GuideDetailModal
          guide={selectedGuide}
          onClose={() => setSelectedGuide(null)}
          onPlayAudio={handlePlayAudio}
          isHighContrast={isHighContrast}
        />
      )}

      {/* Audio Player Sticky Bar (When audio is triggered) */}
      <AudioPlayerBar
        currentText={audioText}
        currentTitle={audioTitle}
        onClose={() => {
          setAudioText(null);
          setAudioTitle(null);
        }}
        isHighContrast={isHighContrast}
      />

      {/* Footer */}
      <Footer isHighContrast={isHighContrast} />

    </div>
  );
}

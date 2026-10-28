import React from 'react';
import { Search, X, Sparkles, RotateCcw } from 'lucide-react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/guidesData';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  isHighContrast: boolean;
  onSearchSubmit?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  isHighContrast,
  onSearchSubmit
}) => {
  const popularSuggestions = [
    'Reštart routera',
    'Snímka obrazovky',
    'Čo je to Cloud',
    'Silné heslo',
    'Cookies',
    'Falošný vírus',
    'eRecept v lekárni'
  ];

  const handleClear = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset category filter to 'all' so the new search queries the entire database
    setSelectedCategory('all');
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Always reset category to 'all' before applying suggestion
    setSelectedCategory('all');
    setSearchQuery(suggestion);
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  const handleInputChange = (val: string) => {
    // Automatically reset category restriction when typing a new search
    if (selectedCategory !== 'all') {
      setSelectedCategory('all');
    }
    setSearchQuery(val);
  };

  return (
    <div className="w-full">
      {/* Massive Search Form (56px+ height) */}
      <form 
        onSubmit={handleSubmit}
        className="relative w-full"
        role="search"
        aria-label="Vyhľadávanie v návodoch a otázkach"
      >
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          
          <div className="relative flex-grow">
            <label htmlFor="main-search-input" className="sr-only">
              Zadajte, čo hľadáte
            </label>
            <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-[#757684]">
              <Search className="w-7 h-7 text-[#1E40AF]" />
            </div>

            <input
              id="main-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Napríklad: Ako vyčistiť cache, reštartovať router, Wi-Fi, heslo..."
              className={`w-full min-h-[58px] pl-14 pr-24 rounded-xl text-lg sm:text-xl placeholder:text-[#64748B] transition-all outline-none ${
                isHighContrast
                  ? 'bg-white text-black border-4 border-black focus:border-[#2563EB] focus:ring-4 focus:ring-yellow-400'
                  : 'bg-white text-[#131B2E] border-2 border-[#94A3B8] focus:border-[3px] focus:border-[#1E40AF] focus:ring-2 focus:ring-[#2563EB]/20 shadow-xs'
              }`}
            />

            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute inset-y-0 right-3 my-auto h-10 px-3 flex items-center gap-1 text-base font-bold text-[#444653] hover:text-[#00288E] bg-[#F2F3FF] hover:bg-[#E2E7FF] rounded-lg transition-colors border border-[#CBD5E1] cursor-pointer"
                aria-label="Vymazať zadaný text a zresetovať"
                title="Zmazať a zresetovať vyhľadávanie"
              >
                <X className="w-5 h-5" />
                <span>Zmazať</span>
              </button>
            )}
          </div>

          {/* Search Button with explicit Slovak label */}
          <button
            type="submit"
            className={`min-h-[58px] px-8 py-3 rounded-xl font-bold text-lg sm:text-xl flex items-center justify-center gap-2 transition-all active:translate-y-[1px] cursor-pointer flex-shrink-0 ${
              isHighContrast
                ? 'bg-black text-yellow-300 border-2 border-yellow-400 hover:bg-neutral-900'
                : 'bg-[#1E40AF] hover:bg-[#00288E] text-white border-2 border-[#1E3A8A] shadow-md hover:shadow-lg'
            }`}
          >
            <Search className="w-6 h-6" />
            <span>Hľadať odpoveď</span>
          </button>

        </div>
      </form>

      {/* Quick Search Suggestions & Diacritics Helper */}
      <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm sm:text-base font-semibold text-[#444653] flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-[#006A61]" />
            Často hľadané otázky:
          </span>
          {popularSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-sm sm:text-base px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#CBD5E1] text-[#00288E] font-medium hover:border-[#1E40AF] hover:bg-[#F2F3FF] transition-all cursor-pointer underline-offset-2 hover:underline"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <div className="text-xs sm:text-sm text-[#006A61] font-semibold flex items-center gap-1 bg-[#F0FDFA] px-2.5 py-1 rounded-lg border border-[#CCFBF1] self-start sm:self-center">
          <span>✓ Chápe celé otázky aj slová bez diakritiky</span>
        </div>
      </div>

      {/* Category Filter Tabs with minimum 52px hit targets */}
      <div className="mt-6" role="navigation" aria-label="Filtrovanie podľa kategórií">
        <div className="flex items-center justify-between mb-2.5">
          <div className="text-base sm:text-lg font-bold text-[#131B2E]">
            Alebo filtrujte podľa oblasti:
          </div>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={handleClear}
              className="text-sm sm:text-base font-bold text-[#1E40AF] hover:underline flex items-center gap-1 bg-[#F2F3FF] px-2.5 py-1 rounded-lg border border-[#CBD5E1] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Zresetovať filtre</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as CategoryId)}
                className={`min-h-[52px] px-5 py-2.5 rounded-xl text-base sm:text-lg font-bold flex items-center gap-2.5 border-2 transition-all active:translate-y-[1px] cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#2563EB] ${
                  isSelected
                    ? isHighContrast
                      ? 'bg-black text-yellow-300 border-yellow-400 shadow-md ring-2 ring-yellow-400'
                      : 'bg-[#1E40AF] text-white border-[#00288E] shadow-sm'
                    : isHighContrast
                      ? 'bg-white text-black border-black hover:bg-neutral-100'
                      : 'bg-white text-[#131B2E] border-[#CBD5E1] hover:border-[#1E40AF] hover:bg-[#F2F3FF]'
                }`}
                aria-pressed={isSelected}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

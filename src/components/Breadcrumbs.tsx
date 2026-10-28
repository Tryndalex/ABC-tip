import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isHighContrast: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, isHighContrast }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav 
      aria-label="Navigačná cesta"
      className="w-full py-3 my-1"
    >
      <ol className="flex flex-wrap items-center gap-2 text-lg font-medium text-[#444653]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[#1E40AF] font-bold text-xl px-1 select-none" aria-hidden="true">
                  →
                </span>
              )}
              {isLast || !item.onClick ? (
                <span 
                  className={`text-lg sm:text-xl font-bold truncate max-w-[180px] xs:max-w-[240px] sm:max-w-md ${
                    isHighContrast ? 'text-black font-extrabold underline decoration-2' : 'text-[#00288E]'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={`text-lg sm:text-xl font-semibold underline underline-offset-4 cursor-pointer hover:text-[#00288E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded px-1 min-h-[44px] flex items-center ${
                    index === 0 ? 'text-[#1E40AF]' : 'text-[#444653]'
                  }`}
                >
                  {index === 0 && <Home className="w-5 h-5 mr-1.5 inline flex-shrink-0" />}
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

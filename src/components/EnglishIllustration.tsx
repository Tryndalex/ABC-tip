import React from 'react';

interface EnglishIllustrationProps {
  type: string;
  isHighContrast?: boolean;
  className?: string;
}

export const EnglishIllustration: React.FC<EnglishIllustrationProps> = ({
  type,
  isHighContrast = false,
  className = 'w-16 h-16 sm:w-18 sm:h-18'
}) => {
  // Stroke colors and fill palettes optimized for seniors (WCAG AAA contrast, bold 2.5px strokes)
  const strokeColor = isHighContrast ? '#FFFFFF' : '#0F172A';
  const strokeWidth = 2.5;

  const renderContent = () => {
    switch (type) {
      case 'login':
        return (
          <g>
            {/* Door outline */}
            <rect x="24" y="8" width="32" height="48" rx="4" fill={isHighContrast ? '#000000' : '#E0E7FF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="50" cy="32" r="3" fill={isHighContrast ? '#FACC15' : '#1E40AF'} />
            {/* Person entering with arrow */}
            <circle cx="16" cy="22" r="6" fill={isHighContrast ? '#FACC15' : '#3B82F6'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M8 42 C8 34, 24 34, 24 42" fill={isHighContrast ? '#FACC15' : '#60A5FA'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M18 32 L34 32 M28 26 L34 32 L28 38" fill="none" stroke={isHighContrast ? '#FACC15' : '#1D4ED8'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case 'password':
        return (
          <g>
            {/* Padlock */}
            <path d="M22 26 V18 C22 10, 42 10, 42 18 V26" fill="none" stroke={strokeColor} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            <rect x="14" y="26" width="36" height="28" rx="6" fill={isHighContrast ? '#FACC15' : '#FDE047'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="38" r="4" fill={strokeColor} />
            <path d="M32 42 V46" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
            {/* Golden Key */}
            <circle cx="48" cy="18" r="5" fill="none" stroke={isHighContrast ? '#FACC15' : '#B45309'} strokeWidth={strokeWidth} />
            <path d="M53 18 L59 18 M57 18 V22" stroke={isHighContrast ? '#FACC15' : '#B45309'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'download':
        return (
          <g>
            {/* Tray */}
            <path d="M12 38 V50 H52 V38" fill="none" stroke={strokeColor} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" strokeLinejoin="round" />
            <rect x="18" y="44" width="28" height="5" rx="2" fill={isHighContrast ? '#FACC15' : '#93C5FD'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Big downward arrow */}
            <path d="M32 10 V34 M20 24 L32 36 L44 24" fill="none" stroke={isHighContrast ? '#FACC15' : '#2563EB'} strokeWidth={strokeWidth + 1} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case 'settings':
        return (
          <g>
            {/* Gear */}
            <circle cx="32" cy="32" r="20" fill={isHighContrast ? '#333333' : '#E2E8F0'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="32" r="8" fill={isHighContrast ? '#FACC15' : '#0284C7'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Gear teeth */}
            <path d="M30 6 H34 V12 H30 Z M30 52 H34 V58 H30 Z M6 30 H12 V34 H6 Z M52 30 H58 V34 H52 Z" fill={strokeColor} />
            <path d="M14 14 L18 18 M46 46 L50 50 M14 50 L18 46 M46 18 L50 14" stroke={strokeColor} strokeWidth={strokeWidth + 1} strokeLinecap="round" />
          </g>
        );

      case 'search':
        return (
          <g>
            {/* Magnifying Glass */}
            <circle cx="28" cy="28" r="16" fill={isHighContrast ? '#000000' : '#DBEAFE'} stroke={strokeColor} strokeWidth={strokeWidth + 0.5} />
            <path d="M40 40 L54 54" stroke={isHighContrast ? '#FACC15' : '#1E40AF'} strokeWidth={strokeWidth + 2} strokeLinecap="round" />
            {/* Sparkle highlight */}
            <path d="M22 22 A8 8 0 0 1 30 18" fill="none" stroke={isHighContrast ? '#FFFFFF' : '#3B82F6'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'delete':
        return (
          <g>
            {/* Trash bin */}
            <path d="M16 22 L20 54 H44 L48 22" fill={isHighContrast ? '#111827' : '#FEE2E2'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Lid open */}
            <path d="M12 20 L52 14 M28 13 L36 11" fill="none" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            {/* Lines inside */}
            <path d="M26 28 V46 M38 28 V46" stroke={isHighContrast ? '#EF4444' : '#B91C1C'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'wifi':
        return (
          <g>
            {/* Wi-Fi Waves */}
            <circle cx="32" cy="48" r="4" fill={isHighContrast ? '#FACC15' : '#2563EB'} stroke={strokeColor} strokeWidth={1} />
            <path d="M22 38 A14 14 0 0 1 42 38" fill="none" stroke={isHighContrast ? '#FACC15' : '#2563EB'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            <path d="M14 28 A24 24 0 0 1 50 28" fill="none" stroke={isHighContrast ? '#FACC15' : '#3B82F6'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            <path d="M6 18 A34 34 0 0 1 58 18" fill="none" stroke={isHighContrast ? '#FFFFFF' : '#60A5FA'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
          </g>
        );

      case 'cancel':
        return (
          <g>
            <circle cx="32" cy="32" r="22" fill={isHighContrast ? '#450A0A' : '#FEE2E2'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M22 22 L42 42 M42 22 L22 42" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth={strokeWidth + 1.5} strokeLinecap="round" />
          </g>
        );

      case 'save':
        return (
          <g>
            <rect x="14" y="12" width="36" height="40" rx="4" fill={isHighContrast ? '#1E1B4B' : '#E0E7FF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="22" y="12" width="20" height="14" fill={isHighContrast ? '#000000' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="20" y="34" width="24" height="14" rx="2" fill={isHighContrast ? '#FACC15' : '#3B82F6'} stroke={strokeColor} strokeWidth={strokeWidth} />
          </g>
        );

      case 'click':
        return (
          <g>
            <circle cx="38" cy="18" r="8" fill="none" stroke={isHighContrast ? '#FACC15' : '#60A5FA'} strokeWidth={2} strokeDasharray="3 3" />
            <path d="M24 38 L34 16 L40 26 L48 24 L34 46 Z" fill={isHighContrast ? '#FACC15' : '#1D4ED8'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
          </g>
        );

      case 'hello':
        return (
          <g>
            {/* Waving hand */}
            <path d="M24 48 V34 M24 34 C24 30 28 30 28 34 V22 C28 18 32 18 32 22 V20 C32 16 36 16 36 20 V22 C36 18 40 18 40 22 V36 C40 44 24 52 24 52" fill={isHighContrast ? '#FEF08A' : '#FED7AA'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Friendly motion waves */}
            <path d="M44 14 C48 18 48 24 44 28" fill="none" stroke={isHighContrast ? '#FACC15' : '#EA580C'} strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M50 10 C56 16 56 26 50 32" fill="none" stroke={isHighContrast ? '#FACC15' : '#FB923C'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'morning':
        return (
          <g>
            {/* Horizon */}
            <path d="M8 44 H56" stroke={strokeColor} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            {/* Rising sun */}
            <path d="M18 44 A14 14 0 0 1 46 44 Z" fill={isHighContrast ? '#FACC15' : '#FBBF24'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Rays */}
            <path d="M32 18 V12 M18 24 L14 20 M46 24 L50 20 M12 36 H6 M52 36 H58" stroke={isHighContrast ? '#FACC15' : '#D97706'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'please':
        return (
          <g>
            {/* Two polite palms / gentle heart */}
            <circle cx="32" cy="32" r="22" fill={isHighContrast ? '#064E3B' : '#ECFDF5'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M32 40 C20 30 20 20 28 18 C32 17 32 22 32 22 C32 22 32 17 36 18 C44 20 44 30 32 40 Z" fill={isHighContrast ? '#34D399' : '#10B981'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
          </g>
        );

      case 'thankyou':
        return (
          <g>
            {/* Heart with friendly smile */}
            <path d="M32 50 C12 36 10 20 22 14 C28 11 32 18 32 18 C32 18 36 11 42 14 C54 20 52 36 32 50 Z" fill={isHighContrast ? '#BE123C' : '#F43F5E'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <circle cx="26" cy="24" r="2" fill="#FFFFFF" />
            <circle cx="38" cy="24" r="2" fill="#FFFFFF" />
            <path d="M28 30 Q32 34 36 30" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'welcome':
        return (
          <g>
            {/* Open hospitable gate / door with sunshine */}
            <rect x="12" y="16" width="40" height="36" rx="2" fill={isHighContrast ? '#111827' : '#FEF3C7'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M12 16 L32 24 V52 L12 48 Z" fill={isHighContrast ? '#D97706' : '#F59E0B'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M36 28 L46 28 M42 24 L46 28 L42 32" stroke={isHighContrast ? '#FACC15' : '#B45309'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'yesno':
        return (
          <g>
            {/* Green Check & Red Cross */}
            <circle cx="20" cy="32" r="14" fill={isHighContrast ? '#065F46' : '#D1FAE5'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M14 32 L18 36 L26 26" fill="none" stroke={isHighContrast ? '#34D399' : '#059669'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="44" cy="32" r="14" fill={isHighContrast ? '#881337' : '#FFE4E6'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M38 26 L50 38 M50 26 L38 38" stroke={isHighContrast ? '#FB7185' : '#E11D48'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
          </g>
        );

      case 'excuse':
        return (
          <g>
            {/* Friendly speech bubble with polite mark */}
            <path d="M10 16 H54 V42 H24 L14 50 V42 H10 Z" fill={isHighContrast ? '#1E1B4B' : '#EDE9FE'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <circle cx="32" cy="28" r="3" fill={isHighContrast ? '#A78BFA' : '#7C3AED'} />
            <path d="M32 20 V22" stroke={isHighContrast ? '#A78BFA' : '#7C3AED'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'goodbye':
        return (
          <g>
            {/* Walking away figure waving */}
            <circle cx="24" cy="18" r="6" fill={isHighContrast ? '#FACC15' : '#38BDF8'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M16 52 L22 36 L30 36 L36 52 M22 36 V26 H30 V36" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 26 L42 16" stroke={isHighContrast ? '#FACC15' : '#0284C7'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            <path d="M44 14 C48 18 48 24 44 26" stroke={isHighContrast ? '#FACC15' : '#0284C7'} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
          </g>
        );

      case 'airport':
        return (
          <g>
            {/* Airplane ascending */}
            <path d="M10 44 L54 20 L50 14 L30 22 L18 14 L14 16 L22 26 L12 32 L8 30 Z" fill={isHighContrast ? '#0284C7' : '#BAE6FD'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M8 52 H56" stroke={strokeColor} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" strokeDasharray="4 4" />
          </g>
        );

      case 'passport':
        return (
          <g>
            {/* Passport booklet */}
            <rect x="14" y="10" width="36" height="46" rx="4" fill={isHighContrast ? '#0F172A' : '#1E3A8A'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="28" r="8" fill="none" stroke={isHighContrast ? '#FACC15' : '#FDE047'} strokeWidth={2} />
            <path d="M24 28 H40 M32 20 V36" stroke={isHighContrast ? '#FACC15' : '#FDE047'} strokeWidth={1.5} />
            <path d="M22 44 H42" stroke={isHighContrast ? '#FACC15' : '#FDE047'} strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'hotel':
        return (
          <g>
            {/* Hotel building */}
            <path d="M12 54 V14 H52 V54 Z" fill={isHighContrast ? '#1E293B' : '#E0E7FF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="28" y="42" width="8" height="12" fill={isHighContrast ? '#FACC15' : '#1E40AF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="18" y="20" width="6" height="8" fill={isHighContrast ? '#FDE047' : '#FDE047'} stroke={strokeColor} strokeWidth={1.5} />
            <rect x="40" y="20" width="6" height="8" fill={isHighContrast ? '#FDE047' : '#FDE047'} stroke={strokeColor} strokeWidth={1.5} />
            <rect x="18" y="32" width="6" height="8" fill={isHighContrast ? '#FDE047' : '#FDE047'} stroke={strokeColor} strokeWidth={1.5} />
            <rect x="40" y="32" width="6" height="8" fill={isHighContrast ? '#FDE047' : '#FDE047'} stroke={strokeColor} strokeWidth={1.5} />
            <text x="32" y="11" textAnchor="middle" fontSize="9" fontWeight="bold" fill={isHighContrast ? '#FACC15' : '#1E40AF'}>HOTEL</text>
          </g>
        );

      case 'ticket':
        return (
          <g>
            {/* Ticket with perforated edge */}
            <path d="M12 18 H52 V28 A4 4 0 0 0 52 36 V46 H12 V36 A4 4 0 0 0 12 28 Z" fill={isHighContrast ? '#78350F' : '#FEF3C7'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M24 22 V42" stroke={strokeColor} strokeWidth={1.5} strokeDasharray="3 3" />
            <path d="M34 26 H44 M34 34 H44" stroke={isHighContrast ? '#FACC15' : '#B45309'} strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'help':
        return (
          <g>
            {/* Lifebuoy ring */}
            <circle cx="32" cy="32" r="20" fill={isHighContrast ? '#991B1B' : '#EF4444'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="32" r="10" fill={isHighContrast ? '#000000' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M22 22 L26 26 M42 42 L38 38 M42 22 L38 26 M22 42 L26 38" stroke="#FFFFFF" strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
          </g>
        );

      case 'exit':
        return (
          <g>
            {/* Exit sign green */}
            <rect x="8" y="12" width="48" height="40" rx="4" fill={isHighContrast ? '#064E3B' : '#10B981'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Running figure & door */}
            <rect x="42" y="20" width="8" height="26" fill="#FFFFFF" />
            <circle cx="26" cy="22" r="3" fill="#FFFFFF" />
            <path d="M20 34 L26 28 L32 32 L38 26 M24 44 L28 36 L34 40 L38 46" stroke="#FFFFFF" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        );

      case 'water':
        return (
          <g>
            {/* Water glass & droplet */}
            <path d="M18 16 L24 52 H40 L46 16 Z" fill={isHighContrast ? '#0C4A6E' : '#E0F2FE'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M21 28 Q32 32 43 28" fill="none" stroke={isHighContrast ? '#38BDF8' : '#0284C7'} strokeWidth={2} />
            <path d="M32 32 C26 38 26 44 32 48 C38 44 38 38 32 32 Z" fill={isHighContrast ? '#38BDF8' : '#38BDF8'} stroke={strokeColor} strokeWidth={1.5} />
          </g>
        );

      case 'info':
        return (
          <g>
            <circle cx="32" cy="32" r="22" fill={isHighContrast ? '#1E3A8A' : '#3B82F6'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="22" r="3" fill="#FFFFFF" />
            <path d="M30 28 H33 V44 H36" stroke="#FFFFFF" strokeWidth={strokeWidth + 0.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        );

      case 'doctor':
        return (
          <g>
            {/* Coat with stethoscope */}
            <path d="M16 54 V34 C16 26 24 22 32 22 C40 22 48 26 48 34 V54 Z" fill={isHighContrast ? '#1E293B' : '#F1F5F9'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="14" r="7" fill={isHighContrast ? '#FDE047' : '#FED7AA'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M24 28 C24 38 40 38 40 28" fill="none" stroke={isHighContrast ? '#FACC15' : '#0284C7'} strokeWidth={2.5} strokeLinecap="round" />
            <circle cx="32" cy="40" r="3" fill={isHighContrast ? '#FACC15' : '#0284C7'} stroke={strokeColor} strokeWidth={1.5} />
          </g>
        );

      case 'pharmacy':
        return (
          <g>
            {/* Green medical cross */}
            <rect x="8" y="8" width="48" height="48" rx="8" fill={isHighContrast ? '#064E3B' : '#ECFDF5'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M26 16 H38 V26 H48 V38 H38 V48 H26 V38 H16 V26 H26 Z" fill={isHighContrast ? '#34D399' : '#10B981'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
          </g>
        );

      case 'medicine':
        return (
          <g>
            {/* Pill capsule slanted */}
            <g transform="rotate(35 32 32)">
              <rect x="22" y="14" width="20" height="18" rx="10" fill={isHighContrast ? '#DC2626' : '#EF4444'} stroke={strokeColor} strokeWidth={strokeWidth} />
              <rect x="22" y="32" width="20" height="18" rx="10" fill={isHighContrast ? '#FFFFFF' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
              <line x1="22" y1="32" x2="42" y2="32" stroke={strokeColor} strokeWidth={strokeWidth} />
            </g>
          </g>
        );

      case 'hospital':
        return (
          <g>
            <rect x="12" y="18" width="40" height="36" rx="3" fill={isHighContrast ? '#111827' : '#F8FAFC'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Red cross on top */}
            <rect x="24" y="8" width="16" height="10" rx="2" fill={isHighContrast ? '#991B1B' : '#DC2626'} stroke={strokeColor} strokeWidth={1.5} />
            <path d="M28 28 H36 M32 24 V32" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            <rect x="28" y="42" width="8" height="12" fill={isHighContrast ? '#38BDF8' : '#0284C7'} stroke={strokeColor} strokeWidth={strokeWidth} />
          </g>
        );

      case 'pain':
        return (
          <g>
            {/* Pulsing lightning/ache burst */}
            <circle cx="32" cy="32" r="20" fill={isHighContrast ? '#7F1D1D' : '#FEE2E2'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M34 16 L22 34 H34 L30 48 L44 28 H32 Z" fill={isHighContrast ? '#FACC15' : '#DC2626'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
          </g>
        );

      case 'emergency':
        return (
          <g>
            {/* Flashing siren */}
            <path d="M18 48 C18 30 46 30 46 48 Z" fill={isHighContrast ? '#DC2626' : '#EF4444'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="14" y="48" width="36" height="6" rx="2" fill={isHighContrast ? '#4B5563' : '#64748B'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M12 24 L18 28 M52 24 L46 28 M32 14 V20" stroke={isHighContrast ? '#FACC15' : '#F59E0B'} strokeWidth={strokeWidth + 1} strokeLinecap="round" />
          </g>
        );

      case 'openclose':
        return (
          <g>
            {/* Hanging store sign */}
            <path d="M16 10 L24 22 M48 10 L40 22" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
            <rect x="10" y="22" width="44" height="28" rx="4" fill={isHighContrast ? '#064E3B' : '#ECFDF5'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <text x="32" y="39" textAnchor="middle" fontSize="11" fontWeight="extrabold" fill={isHighContrast ? '#34D399' : '#059669'}>OPEN</text>
          </g>
        );

      case 'price':
        return (
          <g>
            {/* Price tag with Euro sign */}
            <path d="M14 26 L30 10 H50 V30 L34 46 L14 26 Z" fill={isHighContrast ? '#78350F' : '#FEF3C7'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <circle cx="44" cy="16" r="3" fill={strokeColor} />
            <text x="32" y="33" textAnchor="middle" fontSize="13" fontWeight="bold" fill={isHighContrast ? '#FACC15' : '#B45309'}>€</text>
          </g>
        );

      case 'cashcard':
        return (
          <g>
            {/* Banknote under card */}
            <rect x="8" y="24" width="36" height="24" rx="3" fill={isHighContrast ? '#064E3B' : '#D1FAE5'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="26" cy="36" r="4" fill="none" stroke={isHighContrast ? '#34D399' : '#059669'} strokeWidth={1.5} />
            {/* Credit Card in foreground */}
            <rect x="20" y="14" width="38" height="26" rx="4" fill={isHighContrast ? '#1E3A8A' : '#3B82F6'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="26" y="20" width="8" height="6" rx="1" fill={isHighContrast ? '#FACC15' : '#FDE047'} stroke={strokeColor} strokeWidth={1} />
            <path d="M26 32 H48" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'coffee':
        return (
          <g>
            {/* Coffee cup with steam */}
            <path d="M14 24 H42 V42 C42 48 36 52 28 52 C20 52 14 48 14 42 Z" fill={isHighContrast ? '#78350F' : '#D97706'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M42 28 C48 28 50 36 42 40" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
            {/* Saucer */}
            <path d="M10 54 H46" stroke={strokeColor} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
            {/* Steam waves */}
            <path d="M22 18 Q25 12 22 8 M32 18 Q35 12 32 8" fill="none" stroke={isHighContrast ? '#FACC15' : '#B45309'} strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'tea':
        return (
          <g>
            {/* Tea mug with tea bag label */}
            <path d="M16 26 H44 V44 C44 50 38 54 30 54 C22 54 16 50 16 44 Z" fill={isHighContrast ? '#065F46' : '#10B981'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M44 30 C50 30 52 38 44 42" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
            {/* Teabag string and tag */}
            <path d="M30 26 V36 L24 40" fill="none" stroke={strokeColor} strokeWidth={1.5} />
            <rect x="20" y="38" width="6" height="8" rx="1" fill={isHighContrast ? '#FACC15' : '#FDE047'} stroke={strokeColor} strokeWidth={1} />
          </g>
        );

      case 'bread':
        return (
          <g>
            {/* Fresh Bread Loaf */}
            <path d="M12 40 C12 24 22 18 32 18 C42 18 52 24 52 40 C52 46 48 50 32 50 C16 50 12 46 12 40 Z" fill={isHighContrast ? '#78350F' : '#F59E0B'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M22 28 L28 38 M32 26 L36 38 M42 28 L44 38" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'receipt':
        return (
          <g>
            {/* Receipt paper roll */}
            <path d="M18 10 H46 V54 L40 50 L34 54 L28 50 L22 54 L18 50 Z" fill={isHighContrast ? '#1E293B' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M24 20 H40 M24 28 H38 M24 36 H40 M24 44 H32" stroke={isHighContrast ? '#38BDF8' : '#64748B'} strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'goodnight':
        return (
          <g>
            {/* Crescent moon */}
            <path d="M40 12 C24 12 16 26 18 42 C20 50 26 56 34 58 C26 52 24 40 28 30 C32 20 40 14 46 14 C44 13 42 12 40 12 Z" fill={isHighContrast ? '#FACC15' : '#FDE047'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Stars */}
            <path d="M48 24 L50 28 L54 28 L51 31 L52 35 L48 32 L44 35 L45 31 L42 28 L46 28 Z" fill={isHighContrast ? '#FFFFFF' : '#38BDF8'} stroke={strokeColor} strokeWidth={1} />
            <circle cx="54" cy="14" r="2" fill={isHighContrast ? '#FFFFFF' : '#60A5FA'} />
            <circle cx="20" cy="18" r="1.5" fill={isHighContrast ? '#FACC15' : '#F59E0B'} />
          </g>
        );

      case 'meal':
        return (
          <g>
            {/* Plate */}
            <ellipse cx="32" cy="36" rx="20" ry="14" fill={isHighContrast ? '#1E293B' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <ellipse cx="32" cy="36" rx="14" ry="9" fill={isHighContrast ? '#0F172A' : '#EFF6FF'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Fork */}
            <path d="M8 24 V44 M6 24 V30 H10 V24" stroke={isHighContrast ? '#FACC15' : '#1E40AF'} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Knife */}
            <path d="M56 24 V44 C56 44 54 36 54 30 V24 Z" fill={isHighContrast ? '#FACC15' : '#1E40AF'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Cloche steam */}
            <path d="M28 18 Q32 12 36 18" fill="none" stroke={isHighContrast ? '#FACC15' : '#EA580C'} strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'plane':
        return (
          <g>
            {/* Airplane */}
            <path d="M8 34 L32 30 L48 14 L52 16 L42 30 L56 32 L58 26 L60 27 L58 35 L48 36 L12 40 C8 40 6 38 8 34 Z" fill={isHighContrast ? '#0284C7' : '#38BDF8'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Lower wing */}
            <path d="M26 34 L18 48 L22 50 L32 36" fill={isHighContrast ? '#0369A1' : '#0284C7'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Window dots */}
            <circle cx="34" cy="32" r="1.5" fill="#FFFFFF" />
            <circle cx="38" cy="31" r="1.5" fill="#FFFFFF" />
            <circle cx="42" cy="30" r="1.5" fill="#FFFFFF" />
          </g>
        );

      case 'car':
        return (
          <g>
            {/* Car body */}
            <path d="M10 38 L14 26 C16 22 20 20 26 20 H40 C44 20 48 22 52 26 L56 38 H10 Z" fill={isHighContrast ? '#1E3A8A' : '#3B82F6'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="6" y="36" width="52" height="12" rx="4" fill={isHighContrast ? '#3B82F6' : '#60A5FA'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Windows */}
            <polygon points="18,26 28,26 28,34 16,34" fill={isHighContrast ? '#FACC15' : '#EFF6FF'} stroke={strokeColor} strokeWidth={1.5} />
            <polygon points="32,26 44,26 48,34 32,34" fill={isHighContrast ? '#FACC15' : '#EFF6FF'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Wheels */}
            <circle cx="18" cy="48" r="6" fill="#1E293B" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="18" cy="48" r="2.5" fill="#FFFFFF" />
            <circle cx="46" cy="48" r="6" fill="#1E293B" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="46" cy="48" r="2.5" fill="#FFFFFF" />
          </g>
        );

      case 'bus':
        return (
          <g>
            {/* Bus body */}
            <rect x="14" y="14" width="36" height="36" rx="6" fill={isHighContrast ? '#D97706' : '#FBBF24'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Windscreen */}
            <rect x="18" y="20" width="28" height="14" rx="2" fill={isHighContrast ? '#1E293B' : '#E0F2FE'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Headlights */}
            <circle cx="20" cy="42" r="3" fill={isHighContrast ? '#FACC15' : '#FEF08A'} stroke={strokeColor} strokeWidth={1.5} />
            <circle cx="44" cy="42" r="3" fill={isHighContrast ? '#FACC15' : '#FEF08A'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Grille */}
            <line x1="28" y1="42" x2="36" y2="42" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
            {/* Wheels */}
            <rect x="16" y="50" width="8" height="4" rx="2" fill="#1E293B" stroke={strokeColor} strokeWidth={1.5} />
            <rect x="40" y="50" width="8" height="4" rx="2" fill="#1E293B" stroke={strokeColor} strokeWidth={1.5} />
          </g>
        );

      case 'walk':
        return (
          <g>
            {/* Head */}
            <circle cx="34" cy="14" r="5" fill={isHighContrast ? '#FACC15' : '#3B82F6'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Body */}
            <path d="M34 20 L30 34 L22 46 M30 34 L38 48 M28 24 L22 30 M32 24 L40 28" stroke={strokeColor} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Walking Stick / Ground line */}
            <path d="M12 56 H52" stroke={isHighContrast ? '#64748B' : '#94A3B8'} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'shop':
        return (
          <g>
            {/* Building */}
            <rect x="12" y="24" width="40" height="30" rx="2" fill={isHighContrast ? '#1E293B' : '#F1F5F9'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Awning stripes */}
            <path d="M10 16 H54 L50 26 H14 Z" fill={isHighContrast ? '#DC2626' : '#EF4444'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M22 16 L20 26 M32 16 L32 26 M42 16 L44 26" stroke="#FFFFFF" strokeWidth={2} />
            {/* Door & Window */}
            <rect x="16" y="34" width="14" height="20" rx="1" fill={isHighContrast ? '#0F172A' : '#E2E8F0'} stroke={strokeColor} strokeWidth={1.5} />
            <rect x="34" y="34" width="14" height="12" rx="1" fill={isHighContrast ? '#FACC15' : '#BAE6FD'} stroke={strokeColor} strokeWidth={1.5} />
          </g>
        );

      case 'park':
        return (
          <g>
            {/* Big Green Tree */}
            <circle cx="28" cy="22" r="14" fill={isHighContrast ? '#065F46' : '#22C55E'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="38" cy="26" r="12" fill={isHighContrast ? '#047857' : '#16A34A'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Trunk */}
            <rect x="30" y="34" width="6" height="18" rx="1" fill={isHighContrast ? '#78350F' : '#92400E'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Bench */}
            <rect x="10" y="46" width="16" height="4" rx="1" fill={isHighContrast ? '#FACC15' : '#F59E0B'} stroke={strokeColor} strokeWidth={1.5} />
            <line x1="12" y1="50" x2="12" y2="54" stroke={strokeColor} strokeWidth={1.5} />
            <line x1="24" y1="50" x2="24" y2="54" stroke={strokeColor} strokeWidth={1.5} />
          </g>
        );

      case 'taxi':
        return (
          <g>
            {/* TAXI Car body in classic yellow */}
            <path d="M12 36 L16 26 C18 22 22 20 28 20 H38 C42 20 46 22 50 26 L54 36 H12 Z" fill={isHighContrast ? '#CA8A04' : '#FACC15'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="8" y="34" width="50" height="12" rx="4" fill={isHighContrast ? '#EAB308' : '#FDE047'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* TAXI Roof sign */}
            <rect x="24" y="14" width="18" height="6" rx="2" fill="#FFFFFF" stroke={strokeColor} strokeWidth={1.5} />
            <text x="33" y="19" textAnchor="middle" fontSize="5" fontWeight="900" fill="#000000">TAXI</text>
            {/* Wheels */}
            <circle cx="18" cy="46" r="6" fill="#1E293B" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="18" cy="46" r="2.5" fill="#FFFFFF" />
            <circle cx="48" cy="46" r="6" fill="#1E293B" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="48" cy="46" r="2.5" fill="#FFFFFF" />
          </g>
        );

      case 'metro':
        return (
          <g>
            {/* Tunnel Arch */}
            <path d="M12 50 V26 C12 14 20 8 32 8 C44 8 52 14 52 26 V50" fill={isHighContrast ? '#1E293B' : '#E2E8F0'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Metro train front */}
            <rect x="18" y="20" width="28" height="30" rx="4" fill={isHighContrast ? '#DC2626' : '#EF4444'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="22" y="24" width="20" height="12" rx="2" fill={isHighContrast ? '#FFFFFF' : '#BAE6FD'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Metro M icon */}
            <circle cx="32" cy="42" r="4" fill="#FFFFFF" stroke={strokeColor} strokeWidth={1} />
            <path d="M30 44 V40 L32 42 L34 40 V44" fill="none" stroke="#DC2626" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
            {/* Track */}
            <line x1="8" y1="52" x2="56" y2="52" stroke={strokeColor} strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'ship':
        return (
          <g>
            {/* Ship Hull */}
            <path d="M10 38 L16 50 H48 L56 38 Z" fill={isHighContrast ? '#1E3A8A' : '#2563EB'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Cabin */}
            <rect x="20" y="26" width="24" height="12" rx="2" fill={isHighContrast ? '#FACC15' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <rect x="30" y="18" width="6" height="8" rx="1" fill="#DC2626" stroke={strokeColor} strokeWidth={1.5} />
            {/* Windows */}
            <circle cx="26" cy="32" r="2" fill="#0284C7" />
            <circle cx="32" cy="32" r="2" fill="#0284C7" />
            <circle cx="38" cy="32" r="2" fill="#0284C7" />
            {/* Water waves */}
            <path d="M6 54 Q14 50 22 54 T38 54 T54 54" fill="none" stroke={isHighContrast ? '#38BDF8' : '#0284C7'} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
          </g>
        );

      case 'restaurant':
        return (
          <g>
            {/* Dining Table with tablecloth */}
            <path d="M14 36 H50 L46 54 H18 Z" fill={isHighContrast ? '#1E293B' : '#EFF6FF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Cloche cover */}
            <path d="M22 36 C22 24 42 24 42 36 Z" fill={isHighContrast ? '#CA8A04' : '#F59E0B'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="22" r="2.5" fill={isHighContrast ? '#FACC15' : '#D97706'} stroke={strokeColor} strokeWidth={1} />
            {/* Wine glass */}
            <path d="M12 22 H18 L15 28 V34 M13 34 H17" fill="none" stroke={isHighContrast ? '#DC2626' : '#EF4444'} strokeWidth={1.5} strokeLinecap="round" />
            {/* Fork on right */}
            <path d="M52 22 V34 M50 22 V26 H54 V22" fill="none" stroke={strokeColor} strokeWidth={1.5} strokeLinecap="round" />
          </g>
        );

      case 'mall':
        return (
          <g>
            {/* Shopping Center Mall Building */}
            <rect x="12" y="18" width="40" height="36" rx="3" fill={isHighContrast ? '#1E293B' : '#F8FAFC'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Glass Entrance dome */}
            <path d="M24 38 C24 30 40 30 40 38 V54 H24 Z" fill={isHighContrast ? '#0284C7' : '#BAE6FD'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Glass windows grid */}
            <rect x="16" y="24" width="8" height="8" rx="1" fill={isHighContrast ? '#FACC15' : '#E2E8F0'} stroke={strokeColor} strokeWidth={1} />
            <rect x="40" y="24" width="8" height="8" rx="1" fill={isHighContrast ? '#FACC15' : '#E2E8F0'} stroke={strokeColor} strokeWidth={1} />
            {/* Shopping bag tag */}
            <rect x="28" y="10" width="8" height="6" rx="1" fill="#EF4444" stroke={strokeColor} strokeWidth={1} />
          </g>
        );

      case 'parking':
        return (
          <g>
            {/* Classic Blue Parking Sign */}
            <rect x="12" y="10" width="40" height="40" rx="8" fill={isHighContrast ? '#1D4ED8' : '#2563EB'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Bold white letter P */}
            <path d="M26 42 V18 H36 C42 18 42 28 36 28 H26" fill="none" stroke="#FFFFFF" strokeWidth={strokeWidth + 2} strokeLinecap="round" strokeLinejoin="round" />
            {/* Pole */}
            <line x1="32" y1="50" x2="32" y2="58" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          </g>
        );

      case 'groceries':
        return (
          <g>
            {/* Grocery Paper Bag */}
            <path d="M16 26 L20 54 H44 L48 26 Z" fill={isHighContrast ? '#78350F' : '#D97706'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Bag fold lines */}
            <path d="M20 26 L32 32 L44 26" fill="none" stroke={strokeColor} strokeWidth={1.5} />
            {/* Baguette & Apple sticking out */}
            <rect x="22" y="12" width="6" height="18" rx="3" transform="rotate(-15 22 12)" fill={isHighContrast ? '#FACC15' : '#FDE047'} stroke={strokeColor} strokeWidth={1.5} />
            <circle cx="38" cy="20" r="6" fill="#EF4444" stroke={strokeColor} strokeWidth={1.5} />
            <path d="M38 14 C38 11 40 10 42 10" fill="none" stroke="#16A34A" strokeWidth={1.5} strokeLinecap="round" />
          </g>
        );

      case 'clothes':
        return (
          <g>
            {/* Hanger Hook */}
            <path d="M32 14 C32 10 36 10 36 14 C36 17 32 18 32 20" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
            {/* Hanger triangle */}
            <path d="M16 28 L32 20 L48 28 Z" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Shirt */}
            <path d="M18 28 L10 34 L14 40 L18 36 V54 H46 V36 L50 40 L54 34 L46 28 Z" fill={isHighContrast ? '#0369A1' : '#38BDF8'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Collar */}
            <path d="M26 28 L32 34 L38 28" fill="none" stroke={strokeColor} strokeWidth={1.5} />
          </g>
        );

      case 'shoes':
        return (
          <g>
            {/* Comfortable walking shoe */}
            <path d="M10 40 C10 32 18 28 26 28 L34 32 L44 34 C50 34 54 38 54 44 H10 Z" fill={isHighContrast ? '#1E293B' : '#3B82F6'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Sole */}
            <rect x="8" y="44" width="48" height="8" rx="3" fill={isHighContrast ? '#FACC15' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Laces */}
            <line x1="28" y1="30" x2="34" y2="34" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
            <line x1="26" y1="34" x2="32" y2="38" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
          </g>
        );

      case 'cake':
        return (
          <g>
            {/* Slice of cake */}
            <path d="M12 44 L44 22 V38 L12 50 Z" fill={isHighContrast ? '#9333EA' : '#C084FC'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <polygon points="12,44 44,22 52,26 20,48" fill={isHighContrast ? '#CA8A04' : '#FDE047'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Cream layer */}
            <line x1="12" y1="47" x2="44" y2="35" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" />
            {/* Cherry on top */}
            <circle cx="44" cy="20" r="4" fill="#DC2626" stroke={strokeColor} strokeWidth={1.5} />
            <path d="M44 16 Q48 10 52 12" fill="none" stroke="#16A34A" strokeWidth={1.5} strokeLinecap="round" />
          </g>
        );

      case 'softdrink':
        return (
          <g>
            {/* Tall beverage glass */}
            <path d="M20 18 L24 52 H40 L44 18 Z" fill={isHighContrast ? '#DC2626' : '#F87171'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Liquid wave */}
            <path d="M22 28 Q32 30 42 28" fill="none" stroke="#FFFFFF" strokeWidth={1.5} />
            {/* Striped Straw */}
            <path d="M36 10 L30 36" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M36 10 L42 6" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
            {/* Lemon slice */}
            <circle cx="20" cy="18" r="6" fill={isHighContrast ? '#FACC15' : '#FDE047'} stroke={strokeColor} strokeWidth={1.5} />
          </g>
        );

      case 'elevator':
        return (
          <g>
            {/* Elevator door frame */}
            <rect x="14" y="10" width="36" height="44" rx="3" fill={isHighContrast ? '#1E293B' : '#E2E8F0'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Double doors center line */}
            <line x1="32" y1="18" x2="32" y2="54" stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Door panels */}
            <rect x="18" y="24" width="10" height="26" fill={isHighContrast ? '#0F172A' : '#F1F5F9'} stroke={strokeColor} strokeWidth={1} />
            <rect x="36" y="24" width="10" height="26" fill={isHighContrast ? '#0F172A' : '#F1F5F9'} stroke={strokeColor} strokeWidth={1} />
            {/* Up/Down arrow indicators */}
            <polygon points="26,14 29,18 23,18" fill={isHighContrast ? '#22C55E' : '#16A34A'} />
            <polygon points="38,18 41,14 35,14" fill={isHighContrast ? '#EF4444' : '#DC2626'} />
          </g>
        );

      case 'mineralwater':
        return (
          <g>
            {/* Bottle body */}
            <path d="M26 18 V12 H38 V18 L42 24 V50 C42 52 40 54 38 54 H26 C24 54 22 52 22 50 V24 Z" fill={isHighContrast ? '#0369A1' : '#E0F2FE'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Bottle label */}
            <rect x="22" y="30" width="20" height="12" fill={isHighContrast ? '#0284C7' : '#38BDF8'} stroke={strokeColor} strokeWidth={1.5} />
            {/* Effervescent bubbles */}
            <circle cx="30" cy="46" r="1.5" fill="#FFFFFF" />
            <circle cx="34" cy="48" r="2" fill="#FFFFFF" />
            <circle cx="32" cy="22" r="1.5" fill="#FFFFFF" />
            {/* Bottle cap */}
            <rect x="28" y="8" width="8" height="4" rx="1" fill="#2563EB" stroke={strokeColor} strokeWidth={1} />
          </g>
        );

      case 'mildfever':
        return (
          <g>
            {/* Thermometer glass body */}
            <rect x="28" y="10" width="8" height="34" rx="4" fill="#FFFFFF" stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Bottom reservoir bulb */}
            <circle cx="32" cy="46" r="8" fill={isHighContrast ? '#F59E0B' : '#FBBF24'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Medium amber mercury */}
            <rect x="30" y="24" width="4" height="20" rx="2" fill={isHighContrast ? '#F59E0B' : '#FBBF24'} />
            {/* Measurement lines */}
            <line x1="39" y1="18" x2="43" y2="18" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="39" y1="24" x2="45" y2="24" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="39" y1="30" x2="43" y2="30" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            {/* Moderate temperature readout */}
            <text x="14" y="24" fontSize="9" fontWeight="bold" fill={isHighContrast ? '#FACC15' : '#D97706'}>37°</text>
          </g>
        );

      case 'fever':
        return (
          <g>
            {/* Thermometer glass body */}
            <rect x="28" y="8" width="8" height="36" rx="4" fill="#FFFFFF" stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Bottom red reservoir bulb */}
            <circle cx="32" cy="46" r="8" fill={isHighContrast ? '#DC2626' : '#EF4444'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* High red mercury reaching near top */}
            <rect x="30" y="14" width="4" height="30" rx="2" fill={isHighContrast ? '#DC2626' : '#EF4444'} />
            {/* Measurement lines */}
            <line x1="39" y1="14" x2="46" y2="14" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="39" y1="20" x2="44" y2="20" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="39" y1="26" x2="44" y2="26" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
            {/* Sweat / heat droplet */}
            <path d="M16 26 C14 30 12 34 16 36 C20 34 18 30 16 26 Z" fill={isHighContrast ? '#38BDF8' : '#0284C7'} stroke={strokeColor} strokeWidth="1" />
            {/* High temperature badge */}
            <text x="12" y="18" fontSize="10" fontWeight="bold" fill={isHighContrast ? '#EF4444' : '#DC2626'}>39°</text>
          </g>
        );

      case 'ae':
        return (
          <g>
            {/* Red emergency banner badge */}
            <rect x="8" y="12" width="48" height="40" rx="8" fill={isHighContrast ? '#991B1B' : '#DC2626'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Medical cross top badge */}
            <rect x="24" y="6" width="16" height="10" rx="2" fill={isHighContrast ? '#FACC15' : '#FEF08A'} stroke={strokeColor} strokeWidth="1.5" />
            <path d="M28 11 H36 M32 8 V14" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
            {/* Big readable A&E text */}
            <text x="32" y="38" textAnchor="middle" fontSize="15" fontWeight="900" fill="#FFFFFF" letterSpacing="1">A&E</text>
          </g>
        );

      case 'ambulance':
        return (
          <g>
            {/* Van body */}
            <path d="M8 42 V26 C8 24 10 22 13 22 H36 L47 31 V42 Z" fill={isHighContrast ? '#1E293B' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Cab window */}
            <path d="M36 25 H44 L44 32 H36 Z" fill={isHighContrast ? '#38BDF8' : '#BAE6FD'} stroke={strokeColor} strokeWidth="1.5" />
            {/* Red medical cross on body */}
            <path d="M21 28 H25 V24 H29 V28 H33 V32 H29 V36 H25 V32 H21 Z" fill={isHighContrast ? '#EF4444' : '#DC2626'} stroke={strokeColor} strokeWidth="1" strokeLinejoin="round" />
            {/* Flashing blue beacon on top */}
            <rect x="22" y="17" width="6" height="5" rx="1.5" fill={isHighContrast ? '#38BDF8' : '#2563EB'} stroke={strokeColor} strokeWidth="1" />
            <line x1="20" y1="15" x2="16" y2="12" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="15" x2="34" y2="12" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            {/* Wheels */}
            <circle cx="18" cy="44" r="5" fill="#334155" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="18" cy="44" r="2" fill="#94A3B8" />
            <circle cx="39" cy="44" r="5" fill="#334155" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="39" cy="44" r="2" fill="#94A3B8" />
          </g>
        );

      case 'fracture':
        return (
          <g>
            {/* Bone shape with crack */}
            {/* Left bone knobs */}
            <circle cx="16" cy="25" r="5" fill={isHighContrast ? '#F1F5F9' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="16" cy="39" r="5" fill={isHighContrast ? '#F1F5F9' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Right bone knobs */}
            <circle cx="48" cy="25" r="5" fill={isHighContrast ? '#F1F5F9' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="48" cy="39" r="5" fill={isHighContrast ? '#F1F5F9' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Bone shaft */}
            <rect x="18" y="27" width="28" height="10" fill={isHighContrast ? '#F1F5F9' : '#FFFFFF'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Fractured zigzag line in bright red */}
            <path d="M30 20 L35 28 L28 35 L34 44" fill="none" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case 'vomiting':
        return (
          <g>
            {/* Queasy sick face */}
            <circle cx="32" cy="28" r="18" fill={isHighContrast ? '#14532D' : '#DCFCE7'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Queasy eyes (squinting crosses) */}
            <path d="M22 23 L26 27 M26 23 L22 27" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M38 23 L42 27 M42 23 L38 27" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            {/* Open mouth */}
            <path d="M26 34 Q32 39 38 34" fill={strokeColor} stroke={strokeColor} strokeWidth="1.5" />
            {/* Nausea drops */}
            <path d="M32 38 C32 44 35 48 32 52 C29 48 32 44 32 38 Z" fill={isHighContrast ? '#22C55E' : '#16A34A'} stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="38" cy="46" r="2" fill={isHighContrast ? '#22C55E' : '#16A34A'} />
          </g>
        );

      case 'head':
        return (
          <g>
            {/* Head and neck profile/torso */}
            <rect x="27" y="38" width="10" height="12" fill={isHighContrast ? '#1E293B' : '#FEF3C7'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M16 54 C16 48 24 46 27 46 H37 C40 46 48 48 48 54" fill={isHighContrast ? '#334155' : '#E2E8F0'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Head circle */}
            <circle cx="32" cy="26" r="14" fill={isHighContrast ? '#1E293B' : '#FEF3C7'} stroke={strokeColor} strokeWidth={strokeWidth} />
            {/* Forehead sensation / focus waves */}
            <path d="M12 20 Q14 26 12 32" stroke={isHighContrast ? '#FACC15' : '#F59E0B'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M52 20 Q50 26 52 32" stroke={isHighContrast ? '#FACC15' : '#F59E0B'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Pain / pulse indicator on temple */}
            <circle cx="38" cy="22" r="3" fill={isHighContrast ? '#EF4444' : '#DC2626'} />
          </g>
        );

      case 'arm':
        return (
          <g>
            {/* Arm with flexed elbow and open hand */}
            <path d="M14 14 L22 36 L40 28 L46 22 L50 25 L43 32 L38 35 L20 44 L10 20 Z" fill={isHighContrast ? '#1E293B' : '#FED7AA'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Elbow joint circle */}
            <circle cx="21" cy="40" r="3.5" fill={isHighContrast ? '#FACC15' : '#F59E0B'} stroke={strokeColor} strokeWidth="1" />
            {/* Wrist / hand joint indicator */}
            <circle cx="43" cy="29" r="2.5" fill={isHighContrast ? '#EF4444' : '#DC2626'} stroke={strokeColor} strokeWidth="1" />
          </g>
        );

      case 'leg':
        return (
          <g>
            {/* Leg silhouette from thigh down to foot */}
            <path d="M25 10 L29 28 L28 44 L40 44 C43 44 45 47 45 50 C45 53 43 54 38 54 H22 C18 54 17 48 19 44 L20 28 L17 10 Z" fill={isHighContrast ? '#1E293B' : '#FED7AA'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Knee joint highlight circle */}
            <circle cx="25" cy="28" r="4" fill={isHighContrast ? '#EF4444' : '#F87171'} stroke={strokeColor} strokeWidth="1.5" />
            {/* Ankle highlight */}
            <circle cx="24" cy="46" r="2.5" fill={isHighContrast ? '#FACC15' : '#F59E0B'} stroke={strokeColor} strokeWidth="1" />
          </g>
        );

      case 'chest':
        return (
          <g>
            {/* Upper torso / chest */}
            <path d="M28 10 H36 V16 H28 Z" fill={isHighContrast ? '#1E293B' : '#E2E8F0'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <path d="M14 22 L28 16 H36 L50 22 L46 48 H18 Z" fill={isHighContrast ? '#1E293B' : '#E0E7FF'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            {/* Heart beat / ECG line across chest */}
            <path d="M21 33 H27 L29 25 L33 40 L36 30 L38 35 H43" fill="none" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );

      case 'stomach':
        return (
          <g>
            {/* Abdomen / stomach organ silhouette */}
            <path d="M26 12 V18" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M22 20 C28 14 42 16 42 26 C42 38 34 45 26 45 C19 45 17 37 21 28 C23 24 22 22 22 20 Z" fill={isHighContrast ? '#78350F' : '#FED7AA'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M24 45 V50 H29" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
            {/* Stomach cramp / distress cross mark */}
            <path d="M27 30 L35 36 M35 30 L27 36" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );

      case 'diarrhea':
        return (
          <g>
            {/* Abdomen rectangle with belly distress */}
            <rect x="16" y="16" width="32" height="34" rx="8" fill={isHighContrast ? '#3F2C1D' : '#FEF3C7'} stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx="32" cy="25" r="2.5" fill={strokeColor} />
            {/* Distress wavy cramp lines */}
            <path d="M24 35 Q32 30 40 35" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M25 41 Q32 36 39 41" stroke={isHighContrast ? '#EF4444' : '#DC2626'} strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Alert badge */}
            <circle cx="44" cy="18" r="5" fill="#DC2626" />
            <text x="44" y="22" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFFFFF">!</text>
          </g>
        );

      case 'cough':
        return (
          <g>
            {/* Head profile coughing */}
            <path d="M16 14 C24 12 32 14 32 21 C32 24 30 26 33 28 H38 V33 H33 C31 35 33 40 33 44 C33 50 25 52 16 52" fill={isHighContrast ? '#1E293B' : '#E0E7FF'} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <path d="M24 23 L28 25" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
            {/* Cough bursts from mouth */}
            <path d="M42 27 C46 25 48 29 52 27" stroke={isHighContrast ? '#38BDF8' : '#0284C7'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M40 33 C45 33 47 37 54 35" stroke={isHighContrast ? '#38BDF8' : '#0284C7'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M42 39 C46 41 49 39 52 42" stroke={isHighContrast ? '#38BDF8' : '#0284C7'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="48" cy="31" r="1.5" fill={isHighContrast ? '#38BDF8' : '#0284C7'} />
          </g>
        );

      default:
        return (
          <circle cx="32" cy="32" r="20" fill={isHighContrast ? '#333333' : '#E2E8F0'} stroke={strokeColor} strokeWidth={strokeWidth} />
        );
    }
  };

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      {renderContent()}
    </svg>
  );
};

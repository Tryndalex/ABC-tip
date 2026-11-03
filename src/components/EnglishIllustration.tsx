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

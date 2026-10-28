export type FontSizeLevel = 'standard' | 'large' | 'xlarge';

export interface StepItem {
  id: number;
  title: string;
  description: string;
  detailTips?: string[];
  warning?: string;
}

export type CategoryId = 'all' | 'health' | 'security' | 'government' | 'phone' | 'pension' | 'computer';

export interface Guide {
  id: string;
  title: string;
  category: CategoryId;
  categoryName: string;
  categoryColor: string; // Tailwind color class or hex
  summary: string;
  readTimeMinutes: number;
  difficulty: 'Veľmi jednoduché' | 'Jednoduché' | 'Stredné';
  lastUpdated: string;
  steps: StepItem[];
  practicalTip: string;
  officialLinks?: { label: string; url: string }[];
  audioText: string;
}

export interface Helpline {
  id: string;
  name: string;
  organization: string;
  phoneNumber: string;
  displayPhone: string;
  hours: string;
  description: string;
  isFree: boolean;
  badge: string;
}

export interface SmsMessage {
  id: string;
  sender: string;
  date: string;
  body: string;
  isScam: boolean;
  suspiciousPoints: string[];
  explanation: string;
  safeAlternative: string;
}

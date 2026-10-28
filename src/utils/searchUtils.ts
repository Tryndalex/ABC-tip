import { Guide } from '../types';

/**
 * Strips all diacritics and converts to lowercase.
 * Handles Slovak characters: á, ä, č, ď, é, í, ĺ, ľ, ň, ó, ô, ŕ, š, ť, ú, ý, ž
 */
export function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ') // keep letters & numbers
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Standard Levenshtein distance algorithm
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Common Slovak stop words to ignore in query scoring
 */
export const SLOVAK_STOP_WORDS = new Set([
  'a', 'i', 'aj', 'ale', 'alebo', 'ako', 'co', 'kto', 'kde', 'kedy', 'kam',
  'preco', 'precoze', 'ze', 'ci', 'je', 'su', 'sme', 'ste', 'som', 'to',
  'tento', 'tato', 'tieto', 'mi', 'si', 'sa', 'ma', 'ta', 'mu', 'jej', 'im',
  'na', 'v', 'vo', 'do', 'od', 'so', 'za', 'pri', 'pre', 'pod', 'nad', 'o',
  'po', 'u', 'zo', 'bez', 'z', 'cez', 'ked', 'tak', 'len', 'uz', 'este',
  'moj', 'moja', 'moje', 'tvoj', 'vas', 'vasa', 'vase', 'ich', 'nie', 'tam',
  'tu', 'on', 'ona', 'ono', 'oni', 'ony', 'by', 'aby', 'mam', 'mas', 'ma'
]);

/**
 * Common colloquial terms and synonyms frequently used by Slovak seniors
 */
const SYNONYMS_MAP: Record<string, string[]> = {
  'penzia': ['dochodok', 'socpoist', 'starobny'],
  'penziu': ['dochodok', 'socpoist'],
  'dochodok': ['penzia', 'potvrdenie', 'socpoist'],
  'obcianka': ['obciansky', 'preukaz', 'eid'],
  'obciansky': ['obcianka', 'eid', 'doklad'],
  'esemes': ['sms', 'sprava'],
  'esemeska': ['sms', 'spravy'],
  'smska': ['sms'],
  'vatsap': ['whatsapp'],
  'vacap': ['whatsapp'],
  'watsap': ['whatsapp'],
  'wocapp': ['whatsapp'],
  'liek': ['lieky', 'erecept', 'recept'],
  'lieky': ['liek', 'erecept', 'recept', 'doktor'],
  'recept': ['erecept', 'lieky', 'lekaren'],
  'lekaren': ['lekarnik', 'recept', 'erecept', 'lieky'],
  'doktor': ['lekar', 'recept', 'zdravie'],
  'posta': ['balik', 'postou', 'posta'],
  'balik': ['posta', 'zasielka'],
  'podvod': ['fadosny', 'scam', 'kradez', 'bezpecnost', 'phishing'],
  'mobil': ['smartfon', 'telefon'],
  'telefon': ['mobil', 'smartfon'],
  'pismo': ['text', 'velkost', 'zvacsit', 'displej'],
  'router': ['smerovac', 'wifi', 'internet', 'restart'],
  'smerovac': ['router', 'wifi', 'internet'],
  'wifi': ['router', 'internet', 'pripojenie', 'data', 'mobilne'],
  'screenshot': ['snimka', 'obrazovky', 'prtsc', 'printscreen', 'obrazovka'],
  'snimka': ['screenshot', 'obrazovky', 'odfotit', 'displej'],
  'snimku': ['screenshot', 'obrazovky', 'odfotit'],
  'cloud': ['oblak', 'fotky', 'ulozisko', 'disk', 'zaloha'],
  'oblak': ['cloud', 'ulozisko', 'fotky', 'disk'],
  'heslo': ['hesla', 'prihlasenie', 'bezpecnost', 'kod'],
  'hesla': ['heslo', 'prihlasenie', 'bezpecnost'],
  'virus': ['zavireny', 'antivirus', 'poplach', 'okno', 'reklama'],
  'zavireny': ['virus', 'antivirus', 'spomaleny', 'pocitac'],
  'cookies': ['kolaciky', 'suhlas', 'sledovanie', 'web'],
  'cache': ['kecka', 'vyrovnavacia', 'pamat', 'vycistit', 'vymazat'],
  'kecka': ['cache', 'vyrovnavacia', 'pamat'],
  'aktualizacia': ['aktualizovat', 'update', 'system', 'oprava'],
  'aktualizovat': ['aktualizacia', 'update', 'system'],
  'facebook': ['fb', 'priatel', 'video', 'sprava'],
  'pomalost': ['pomaly', 'zrychlit', 'pamat', 'vycistit'],
  'pomaly': ['pomalost', 'zrychlit', 'vycistit', 'seka'],
  'seka': ['pomaly', 'zrychlit', 'pamat', 'vycistit'],
  'receptu': ['erecept', 'lieky', 'lekaren'],
  'recepty': ['erecept', 'lieky', 'lekaren']
};

/**
 * Checks if a single query token matches a target word
 * with diacritic tolerance, prefix matching, or typo distance.
 */
export function isTokenFuzzyMatch(qToken: string, targetToken: string): boolean {
  if (!qToken || !targetToken) return false;

  // Exact normalized match
  if (qToken === targetToken) return true;

  // Substring or prefix match
  if (targetToken.includes(qToken) || qToken.includes(targetToken)) {
    return true;
  }

  // Check synonym mappings
  const synonyms = SYNONYMS_MAP[qToken];
  if (synonyms) {
    if (synonyms.some(s => targetToken.includes(s) || s.includes(targetToken))) {
      return true;
    }
  }

  // Check reverse synonyms
  const targetSynonyms = SYNONYMS_MAP[targetToken];
  if (targetSynonyms) {
    if (targetSynonyms.some(s => qToken.includes(s) || s.includes(qToken))) {
      return true;
    }
  }

  // Levenshtein typo tolerance based on length:
  // 3 to 4 characters: allow 1 edit (e.g., "recept" vs "recep", "sms" vs "smsk")
  // 5+ characters: allow 2 edits (e.g., "dochodok" vs "dochudok", "lekaren" vs "lekaern")
  if (qToken.length >= 3 && targetToken.length >= 3) {
    const maxEdits = qToken.length <= 4 ? 1 : 2;
    const dist = levenshteinDistance(qToken, targetToken);
    if (dist <= maxEdits) {
      return true;
    }
  }

  return false;
}

export interface SearchMatchResult {
  guide: Guide;
  score: number;
  matchedTerms: string[];
}

/**
 * Scores how well a guide matches a user query with fuzzy and diacritic tolerance.
 * Returns score > 0 if matched.
 */
export function scoreGuideSearch(guide: Guide, rawQuery: string): SearchMatchResult {
  const normQuery = normalizeText(rawQuery);
  if (!normQuery) {
    return { guide, score: 1, matchedTerms: [] };
  }

  // Split tokens and separate significant keywords from stop words
  const allTokens = normQuery.split(/\s+/).filter(t => t.length > 0);
  const significantTokens = allTokens.filter(t => t.length > 1 && !SLOVAK_STOP_WORDS.has(t));
  
  // If user only typed stop words (e.g. "ako"), fallback to all tokens
  const queryTokens = significantTokens.length > 0 ? significantTokens : allTokens;

  const normTitle = normalizeText(guide.title);
  const normSummary = normalizeText(guide.summary);
  const normCategory = normalizeText(guide.categoryName);
  const normTip = normalizeText(guide.practicalTip || '');
  const normSteps = normalizeText(
    guide.steps.map(s => `${s.title} ${s.description} ${s.detailTips?.join(' ') || ''}`).join(' ')
  );

  const titleTokens = normTitle.split(/\s+/);
  const summaryTokens = normSummary.split(/\s+/);
  const contentTokens = (normCategory + ' ' + normTip + ' ' + normSteps).split(/\s+/);

  let totalScore = 0;
  const matchedTerms: string[] = [];

  // Direct full-phrase substring match gives massive bonus
  if (normTitle.includes(normQuery)) {
    totalScore += 120;
    matchedTerms.push(normQuery);
  } else if (normSummary.includes(normQuery)) {
    totalScore += 80;
    matchedTerms.push(normQuery);
  } else if (normSteps.includes(normQuery)) {
    totalScore += 60;
    matchedTerms.push(normQuery);
  }

  // Check each query token
  for (const qToken of queryTokens) {
    let tokenScore = 0;

    // 1. Direct title full substring or exact match
    if (normTitle.includes(qToken)) {
      tokenScore = Math.max(tokenScore, 50);
      matchedTerms.push(qToken);
    } else {
      // Fuzzy match in title tokens
      for (const tToken of titleTokens) {
        if (isTokenFuzzyMatch(qToken, tToken)) {
          tokenScore = Math.max(tokenScore, 35);
          matchedTerms.push(tToken);
          break;
        }
      }
    }

    // 2. Summary match
    if (normSummary.includes(qToken)) {
      tokenScore = Math.max(tokenScore, 30);
      matchedTerms.push(qToken);
    } else {
      for (const sToken of summaryTokens) {
        if (isTokenFuzzyMatch(qToken, sToken)) {
          tokenScore = Math.max(tokenScore, 20);
          matchedTerms.push(sToken);
          break;
        }
      }
    }

    // 3. Category match
    if (normCategory.includes(qToken) || isTokenFuzzyMatch(qToken, normCategory)) {
      tokenScore = Math.max(tokenScore, 25);
      matchedTerms.push(guide.categoryName);
    }

    // 4. Content / steps match
    if (normSteps.includes(qToken) || normTip.includes(qToken)) {
      tokenScore = Math.max(tokenScore, 20);
      matchedTerms.push(qToken);
    } else {
      for (const cToken of contentTokens) {
        if (isTokenFuzzyMatch(qToken, cToken)) {
          tokenScore = Math.max(tokenScore, 15);
          matchedTerms.push(cToken);
          break;
        }
      }
    }

    totalScore += tokenScore;
  }

  // If at least one keyword matched with score >= 15, it is a valid match!
  if (totalScore >= 15) {
    return {
      guide,
      score: totalScore,
      matchedTerms: Array.from(new Set(matchedTerms))
    };
  }

  return { guide, score: 0, matchedTerms: [] };
}

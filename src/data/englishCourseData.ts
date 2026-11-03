export interface EnglishWord {
  id: string;
  category: 'digital' | 'basics' | 'travel' | 'health' | 'shopping';
  english: string;
  phoneticSk: string;
  slovak: string;
  explanation: string;
  exampleSentenceEn?: string;
  exampleSentenceSk?: string;
  iconType: 
    | 'login' 
    | 'password' 
    | 'download' 
    | 'settings' 
    | 'search' 
    | 'delete' 
    | 'wifi' 
    | 'cancel' 
    | 'save' 
    | 'click'
    | 'hello' 
    | 'morning' 
    | 'please' 
    | 'thankyou' 
    | 'welcome' 
    | 'yesno' 
    | 'excuse' 
    | 'goodbye'
    | 'airport' 
    | 'passport' 
    | 'hotel' 
    | 'ticket' 
    | 'help' 
    | 'exit' 
    | 'water' 
    | 'info'
    | 'doctor' 
    | 'pharmacy' 
    | 'medicine' 
    | 'hospital' 
    | 'pain' 
    | 'emergency'
    | 'openclose' 
    | 'price' 
    | 'cashcard' 
    | 'coffee' 
    | 'tea' 
    | 'bread' 
    | 'receipt';
}

export interface EnglishCategory {
  id: 'all' | 'digital' | 'basics' | 'travel' | 'health' | 'shopping';
  title: string;
  shortTitle: string;
  description: string;
  badgeColor: string;
}

export const ENGLISH_CATEGORIES: EnglishCategory[] = [
  {
    id: 'all',
    title: 'Všetky slovíčka kurzu',
    shortTitle: 'Všetky',
    description: 'Kompletný prehľad praktických slovíčok pre každodenný život a internet.',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-400'
  },
  {
    id: 'digital',
    title: 'V mobile a na počítači',
    shortTitle: 'Mobil a PC',
    description: 'Najdôležitejšie anglické výrazy, ktoré vidíte na obrazovke mobilu, tabletu a počítača.',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-400'
  },
  {
    id: 'basics',
    title: 'Základné pozdravy a zdvorilosť',
    shortTitle: 'Pozdravy',
    description: 'Jednoduché a milé slová, ako pozdraviť a poďakovať kdekoľvek na svete.',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-400'
  },
  {
    id: 'travel',
    title: 'Cestovanie, letisko a hotel',
    shortTitle: 'Cestovanie',
    description: 'Základné výrazy na dovolenku, pri lete lietadlom alebo návšteve rodiny v zahraničí.',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-400'
  },
  {
    id: 'health',
    title: 'Zdravie, lekáreň a núdza',
    shortTitle: 'Zdravie a lieky',
    description: 'Výrazy, ktoré vám pomôžu, ak sa v cudzine necítite dobre a potrebujete lekára či liek.',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-400'
  },
  {
    id: 'shopping',
    title: 'V obchode a kaviarni',
    shortTitle: 'Nákupy a káva',
    description: 'Ako si vypýtať kávu, čaj, zistiť cenu a zaplatiť kartou alebo v hotovosti.',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-400'
  }
];

export const ENGLISH_WORDS: EnglishWord[] = [
  // --- V mobile a na počítači ---
  {
    id: 'w-login',
    category: 'digital',
    english: 'Login',
    phoneticSk: 'lo-gin / lo-g-in',
    slovak: 'Prihlásiť sa',
    explanation: 'Zadanie vášho mena a hesla pre vstup do účtu (napr. do banky, emailu či portálu).',
    exampleSentenceEn: 'Please enter your login and password.',
    exampleSentenceSk: 'Zadajte prosím vaše prihlasovacie meno a heslo.',
    iconType: 'login'
  },
  {
    id: 'w-password',
    category: 'digital',
    english: 'Password',
    phoneticSk: 'pás-vörd',
    slovak: 'Heslo',
    explanation: 'Tajné slovo alebo kombinácia znakov chrániaca vaše súkromné údaje pred cudzími ľuďmi.',
    exampleSentenceEn: 'Never tell your password to strangers.',
    exampleSentenceSk: 'Nikdy neprezrádzajte svoje heslo cudzím ľuďom.',
    iconType: 'password'
  },
  {
    id: 'w-download',
    category: 'digital',
    english: 'Download',
    phoneticSk: 'daun-loud',
    slovak: 'Stiahnuť súbor',
    explanation: 'Uloženie dokumentu, lekárskeho receptu alebo fotky z internetu do vášho mobilu.',
    exampleSentenceEn: 'Click here to download your recipe.',
    exampleSentenceSk: 'Kliknite sem pre stiahnutie vášho receptu.',
    iconType: 'download'
  },
  {
    id: 'w-settings',
    category: 'digital',
    english: 'Settings',
    phoneticSk: 'set-tings',
    slovak: 'Nastavenia',
    explanation: 'Miesto označené ozubeným kolieskom, kde môžete zväčšiť písmo, jas alebo zmeniť zvonenie.',
    exampleSentenceEn: 'Open settings to increase font size.',
    exampleSentenceSk: 'Otvorte nastavenia pre zväčšenie veľkosti písma.',
    iconType: 'settings'
  },
  {
    id: 'w-search',
    category: 'digital',
    english: 'Search',
    phoneticSk: 'sérč',
    slovak: 'Hľadať / Vyhľadať',
    explanation: 'Políčko s lupou, do ktorého napíšete, čo vás zaujíma alebo čo potrebujete nájsť.',
    exampleSentenceEn: 'Use search to find a guide.',
    exampleSentenceSk: 'Použite vyhľadávanie na nájdenie návodu.',
    iconType: 'search'
  },
  {
    id: 'w-delete',
    category: 'digital',
    english: 'Delete',
    phoneticSk: 'di-lít',
    slovak: 'Vymazať / Odstrániť',
    explanation: 'Tlačidlo (často s ikonou smetného koša), ktoré natrvalo zmaže správu alebo fotku.',
    exampleSentenceEn: 'Do you want to delete this message?',
    exampleSentenceSk: 'Chcete vymazať túto správu?',
    iconType: 'delete'
  },
  {
    id: 'w-wifi',
    category: 'digital',
    english: 'Wi-Fi',
    phoneticSk: 'vaj-faj',
    slovak: 'Bezdrôtový internet',
    explanation: 'Bezdrôtové pripojenie k internetu doma, v nemocnici, kaviarni či na železničnej stanici.',
    exampleSentenceEn: 'Free Wi-Fi is available here.',
    exampleSentenceSk: 'Bezplatné Wi-Fi pripojenie je tu k dispozícii.',
    iconType: 'wifi'
  },
  {
    id: 'w-cancel',
    category: 'digital',
    english: 'Cancel',
    phoneticSk: 'ken-sl',
    slovak: 'Zrušiť / Späť',
    explanation: 'Bezpečné tlačidlo, ktorým zrušíte rozpracovanú akciu bez toho, aby sa niečo pokazilo.',
    exampleSentenceEn: 'Press cancel to go back.',
    exampleSentenceSk: 'Stlačte zrušiť pre návrat späť.',
    iconType: 'cancel'
  },
  {
    id: 'w-save',
    category: 'digital',
    english: 'Save',
    phoneticSk: 'sejv',
    slovak: 'Uložiť',
    explanation: 'Tlačidlo, ktorým potvrdíte a bezpečne uchováte napísaný text, fotku alebo zmeny.',
    exampleSentenceEn: 'Click save to keep your changes.',
    exampleSentenceSk: 'Kliknite na uložiť pre zachovanie zmien.',
    iconType: 'save'
  },
  {
    id: 'w-click',
    category: 'digital',
    english: 'Click',
    phoneticSk: 'klik',
    slovak: 'Kliknúť / Ťuknúť',
    explanation: 'Stlačenie tlačidla myšou na počítači alebo dotyk prstom na displej telefónu.',
    exampleSentenceEn: 'Click on the blue button.',
    exampleSentenceSk: 'Kliknite na modré tlačidlo.',
    iconType: 'click'
  },

  // --- Základné pozdravy a zdvorilosť ---
  {
    id: 'w-hello',
    category: 'basics',
    english: 'Hello',
    phoneticSk: 'he-lóu',
    slovak: 'Dobrý deň / Ahoj',
    explanation: 'Najznámejší a najpriateľskejší univerzálny pozdrav po celom svete.',
    exampleSentenceEn: 'Hello, how are you today?',
    exampleSentenceSk: 'Dobrý deň, ako sa dnes máte?',
    iconType: 'hello'
  },
  {
    id: 'w-morning',
    category: 'basics',
    english: 'Good morning',
    phoneticSk: 'gud mór-ning',
    slovak: 'Dobré ráno',
    explanation: 'Slušný pozdrav, ktorý sa používa ráno a dopoludnia až do 12:00.',
    exampleSentenceEn: 'Good morning, have a nice day!',
    exampleSentenceSk: 'Dobré ráno, prajem vám pekný deň!',
    iconType: 'morning'
  },
  {
    id: 'w-please',
    category: 'basics',
    english: 'Please',
    phoneticSk: 'plííz',
    slovak: 'Prosím',
    explanation: 'Kúzelné zdvorilostné slovíčko, ktoré otvorí dvere ku každej pomoci.',
    exampleSentenceEn: 'Help me, please.',
    exampleSentenceSk: 'Pomôžte mi, prosím.',
    iconType: 'please'
  },
  {
    id: 'w-thankyou',
    category: 'basics',
    english: 'Thank you',
    phoneticSk: 'senk jú',
    slovak: 'Ďakujem vám',
    explanation: 'Vyjadrenie vďaky za pomoc, radu, nákup či ochotu.',
    exampleSentenceEn: 'Thank you very much!',
    exampleSentenceSk: 'Veľmi pekne vám ďakujem!',
    iconType: 'thankyou'
  },
  {
    id: 'w-welcome',
    category: 'basics',
    english: 'You are welcome',
    phoneticSk: 'jú ár vel-kam',
    slovak: 'Niet za čo / Rado sa stalo',
    explanation: 'Prirodzená zdvorilá odpoveď, keď vám niekto povie "Thank you" (Ďakujem).',
    exampleSentenceEn: 'Thank you! – You are welcome.',
    exampleSentenceSk: 'Ďakujem! – Niet za čo, rado sa stalo.',
    iconType: 'welcome'
  },
  {
    id: 'w-yesno',
    category: 'basics',
    english: 'Yes / No',
    phoneticSk: 'jes / nóu',
    slovak: 'Áno / Nie',
    explanation: 'Základná odpoveď na otázky, ktorou vyjadríte súhlas alebo odmietnutie.',
    exampleSentenceEn: 'Yes, I understand. / No, thank you.',
    exampleSentenceSk: 'Áno, rozumiem. / Nie, ďakujem.',
    iconType: 'yesno'
  },
  {
    id: 'w-excuse',
    category: 'basics',
    english: 'Excuse me',
    phoneticSk: 'eks-kjúúz mí',
    slovak: 'Prepáčte / S dovolením',
    explanation: 'Použite, keď chcete niekoho zdvorilo osloviť na ulici alebo prejsť uličkou.',
    exampleSentenceEn: 'Excuse me, where is the pharmacy?',
    exampleSentenceSk: 'Prepáčte, kde je tu lekáreň?',
    iconType: 'excuse'
  },
  {
    id: 'w-goodbye',
    category: 'basics',
    english: 'Goodbye',
    phoneticSk: 'gud-báj',
    slovak: 'Dovidenia',
    explanation: 'Slušné rozlúčenie pri odchode z obchodu, hotela či stretnutia.',
    exampleSentenceEn: 'Goodbye, see you tomorrow!',
    exampleSentenceSk: 'Dovidenia, vidíme sa zajtra!',
    iconType: 'goodbye'
  },

  // --- Cestovanie, letisko a hotel ---
  {
    id: 'w-airport',
    category: 'travel',
    english: 'Airport',
    phoneticSk: 'ér-pórt',
    slovak: 'Letisko',
    explanation: 'Veľká stanica pre odlety a prílety lietadiel.',
    exampleSentenceEn: 'We are going to the airport.',
    exampleSentenceSk: 'Ideme na letisko.',
    iconType: 'airport'
  },
  {
    id: 'w-passport',
    category: 'travel',
    english: 'Passport',
    phoneticSk: 'pás-pórt',
    slovak: 'Cestovný pas',
    explanation: 'Červená knižka s vašou fotkou na cestovanie za hranice Európy.',
    exampleSentenceEn: 'Show your passport, please.',
    exampleSentenceSk: 'Ukážte váš cestovný pas, prosím.',
    iconType: 'passport'
  },
  {
    id: 'w-hotel',
    category: 'travel',
    english: 'Hotel',
    phoneticSk: 'hou-tel',
    slovak: 'Hotel / Ubytovanie',
    explanation: 'Budova s izbami a recepciou, kde ste počas dovolenky ubytovaní.',
    exampleSentenceEn: 'My hotel is near the city center.',
    exampleSentenceSk: 'Môj hotel je blízko centra mesta.',
    iconType: 'hotel'
  },
  {
    id: 'w-ticket',
    category: 'travel',
    english: 'Ticket',
    phoneticSk: 'ti-kit',
    slovak: 'Lístok / Letenka',
    explanation: 'Doklad o zaplatení cesty na vlak, autobus, loď alebo do múzea.',
    exampleSentenceEn: 'One ticket to London, please.',
    exampleSentenceSk: 'Jeden lístok do Londýna, prosím.',
    iconType: 'ticket'
  },
  {
    id: 'w-help',
    category: 'travel',
    english: 'Help',
    phoneticSk: 'help',
    slovak: 'Pomoc / Pomôžte mi',
    explanation: 'Najdôležitejšie slovo, keď sa stratíte alebo potrebujete asistenciu personálu.',
    exampleSentenceEn: 'Can you help me, please?',
    exampleSentenceSk: 'Môžete mi prosím pomôcť?',
    iconType: 'help'
  },
  {
    id: 'w-exit',
    category: 'travel',
    english: 'Exit',
    phoneticSk: 'eg-zit',
    slovak: 'Východ / Únikový východ',
    explanation: 'Svietiaci zelený nápis nad dverami, ktorý ukazuje cestu von z budovy či lietadla.',
    exampleSentenceEn: 'Emergency exit is here.',
    exampleSentenceSk: 'Núdzový východ je tu.',
    iconType: 'exit'
  },
  {
    id: 'w-water',
    category: 'travel',
    english: 'Water',
    phoneticSk: 'vó-tr / vó-ter',
    slovak: 'Voda / Pitná voda',
    explanation: 'Objednanie čistej neochutenej vody v lietadle, reštaurácii či obchode.',
    exampleSentenceEn: 'A glass of still water, please.',
    exampleSentenceSk: 'Pohár neperlivej vody, prosím.',
    iconType: 'water'
  },
  {
    id: 'w-info',
    category: 'travel',
    english: 'Information',
    phoneticSk: 'in-for-mej-šn',
    slovak: 'Informácie / Pult pomoci',
    explanation: 'Stánok označený písmenom "i", kde vám zamestnanci ochotne poradia smer cesty.',
    exampleSentenceEn: 'Information desk is on the left.',
    exampleSentenceSk: 'Informačný pult je naľavo.',
    iconType: 'info'
  },

  // --- Zdravie, lekáreň a núdza ---
  {
    id: 'w-doctor',
    category: 'health',
    english: 'Doctor',
    phoneticSk: 'dok-tor',
    slovak: 'Lekár / Doktor',
    explanation: 'Odborník na vyšetrenie zdravia a predpísanie správnej liečby.',
    exampleSentenceEn: 'I need to see a doctor.',
    exampleSentenceSk: 'Potrebujem navštíviť lekára.',
    iconType: 'doctor'
  },
  {
    id: 'w-pharmacy',
    category: 'health',
    english: 'Pharmacy',
    phoneticSk: 'fár-ma-si',
    slovak: 'Lekáreň',
    explanation: 'Predajňa označená zeleným krížom, kde kúpite lieky a zdravotnícke pomôcky.',
    exampleSentenceEn: 'Is there a pharmacy nearby?',
    exampleSentenceSk: 'Je tu nablízku lekáreň?',
    iconType: 'pharmacy'
  },
  {
    id: 'w-medicine',
    category: 'health',
    english: 'Medicine',
    phoneticSk: 'med-sin',
    slovak: 'Liek / Tabletky',
    explanation: 'Liečivá látka na tlmenie bolesti, zníženie tlaku alebo liečbu ochorenia.',
    exampleSentenceEn: 'I need medicine for high blood pressure.',
    exampleSentenceSk: 'Potrebujem liek na vysoký krvný tlak.',
    iconType: 'medicine'
  },
  {
    id: 'w-hospital',
    category: 'health',
    english: 'Hospital',
    phoneticSk: 'hos-pi-tl',
    slovak: 'Nemocnica',
    explanation: 'Zdravotnícke zariadenie s nepretržitou starostlivosťou a pohotovosťou.',
    exampleSentenceEn: 'Take me to the hospital.',
    exampleSentenceSk: 'Zoberte ma do nemocnice.',
    iconType: 'hospital'
  },
  {
    id: 'w-pain',
    category: 'health',
    english: 'Pain',
    phoneticSk: 'pejn',
    slovak: 'Bolesť',
    explanation: 'Slovo, ktorým lekárovi ukážete, čo vás trápi (napr. bolesť hlavy či chrbta).',
    exampleSentenceEn: 'I have chest pain.',
    exampleSentenceSk: 'Mám bolesť na hrudníku.',
    iconType: 'pain'
  },
  {
    id: 'w-emergency',
    category: 'health',
    english: 'Emergency',
    phoneticSk: 'i-mér-džen-si',
    slovak: 'Pohotovosť / Núdza',
    explanation: 'Urgentný stav vyžadujúci okamžitý zásah záchrannej služby alebo hasičov.',
    exampleSentenceEn: 'Call the emergency service!',
    exampleSentenceSk: 'Zavolajte záchrannú službu!',
    iconType: 'emergency'
  },

  // --- Obchod, kaviareň a reštaurácia ---
  {
    id: 'w-openclose',
    category: 'shopping',
    english: 'Open / Closed',
    phoneticSk: 'óu-pn / klóuzd',
    slovak: 'Otvorené / Zatvorené',
    explanation: 'Oznam na dverách obchodu alebo lekárne, či môžete vstúpiť dovnútra.',
    exampleSentenceEn: 'The shop is open until 6 PM.',
    exampleSentenceSk: 'Obchod je otvorený do 18:00.',
    iconType: 'openclose'
  },
  {
    id: 'w-price',
    category: 'shopping',
    english: 'Price',
    phoneticSk: 'prajs',
    slovak: 'Cena',
    explanation: 'Suma na cenovke, ktorú zaplatíte za vybraný tovar alebo jedlo.',
    exampleSentenceEn: 'What is the price of this bread?',
    exampleSentenceSk: 'Aká je cena tohto chleba?',
    iconType: 'price'
  },
  {
    id: 'w-cashcard',
    category: 'shopping',
    english: 'Cash / Card',
    phoneticSk: 'keš / kárd',
    slovak: 'Hotovosť / Platobná karta',
    explanation: 'Spôsob platenia pri pokladni – papierovými bankovkami alebo bankovou kartou.',
    exampleSentenceEn: 'Can I pay by card, please?',
    exampleSentenceSk: 'Môžem platiť kartou, prosím?',
    iconType: 'cashcard'
  },
  {
    id: 'w-coffee',
    category: 'shopping',
    english: 'Coffee',
    phoneticSk: 'ko-fí',
    slovak: 'Káva',
    explanation: 'Váš obľúbený teplý povzbudzujúci nápoj.',
    exampleSentenceEn: 'One coffee with milk, please.',
    exampleSentenceSk: 'Jednu kávu s mliekom, prosím.',
    iconType: 'coffee'
  },
  {
    id: 'w-tea',
    category: 'shopping',
    english: 'Tea',
    phoneticSk: 'tíí',
    slovak: 'Čaj',
    explanation: 'Horúci bylinkový, čierny alebo zelený čaj na zahriatie.',
    exampleSentenceEn: 'Hot black tea with lemon, please.',
    exampleSentenceSk: 'Horúci čierny čaj s citrónom, prosím.',
    iconType: 'tea'
  },
  {
    id: 'w-bread',
    category: 'shopping',
    english: 'Bread',
    phoneticSk: 'bred',
    slovak: 'Chlieb / Pečivo',
    explanation: 'Základná potravina v každej pekárni a supermarkete.',
    exampleSentenceEn: 'Fresh bread every morning.',
    exampleSentenceSk: 'Čerstvý chlieb každé ráno.',
    iconType: 'bread'
  },
  {
    id: 'w-receipt',
    category: 'shopping',
    english: 'Receipt',
    phoneticSk: 'ri-síít',
    slovak: 'Účtenka / Pokladničný blok',
    explanation: 'Papierik z pokladne potvrdzujúci zaplatenie nákupu s rozpisom cien.',
    exampleSentenceEn: 'Here is your receipt and change.',
    exampleSentenceSk: 'Tu je vaša účtenka a vydané peniaze.',
    iconType: 'receipt'
  }
];

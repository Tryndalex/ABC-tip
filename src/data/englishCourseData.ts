export interface EnglishWord {
  id: string;
  category: 'digital' | 'basics' | 'travel' | 'health' | 'shopping';
  english: string;
  phoneticSk: string;
  slovak: string;
  explanation: string;
  exampleSentenceEn?: string;
  exampleSentenceSk?: string;
  iconType: string;
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
  {
    id: 'w-goodnight',
    category: 'basics',
    english: 'Good night',
    phoneticSk: 'gud nájt',
    slovak: 'Dobrú noc',
    explanation: 'Priateľské prianie pokojného spánku večer pred spaním.',
    exampleSentenceEn: 'Good night, sleep well!',
    exampleSentenceSk: 'Dobrú noc, dobre sa vyspite!',
    iconType: 'goodnight'
  },
  {
    id: 'w-meal',
    category: 'basics',
    english: 'Enjoy your meal',
    phoneticSk: 'en-džoj jór mííl',
    slovak: 'Dobrú chuť',
    explanation: 'Zdvorilé zaželanie príjemného jedenia pri stole alebo v reštaurácii.',
    exampleSentenceEn: 'Enjoy your meal everyone!',
    exampleSentenceSk: 'Dobrú chuť všetkým!',
    iconType: 'meal'
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
  {
    id: 'w-plane',
    category: 'travel',
    english: 'Plane / Airplane',
    phoneticSk: 'plejn / ér-plejn',
    slovak: 'Lietadlo',
    explanation: 'Dopravné lietadlo na pohodlné a rýchle cestovanie na dovolenku či za rodinou.',
    exampleSentenceEn: 'Our plane departs at noon.',
    exampleSentenceSk: 'Naše lietadlo odlieta na poludnie.',
    iconType: 'plane'
  },
  {
    id: 'w-car',
    category: 'travel',
    english: 'Car',
    phoneticSk: 'kár',
    slovak: 'Auto / Vozidlo',
    explanation: 'Osobné auto na cestovanie po cestách alebo požičanie v požičovni.',
    exampleSentenceEn: 'We rented a car for the trip.',
    exampleSentenceSk: 'Požičali sme si auto na výlet.',
    iconType: 'car'
  },
  {
    id: 'w-bus',
    category: 'travel',
    english: 'Bus',
    phoneticSk: 'bas',
    slovak: 'Autobus',
    explanation: 'Mestský alebo diaľkový autobus s označenými zastávkami (Bus stop).',
    exampleSentenceEn: 'Where is the nearest bus stop?',
    exampleSentenceSk: 'Kde je najbližšia autobusová zastávka?',
    iconType: 'bus'
  },
  {
    id: 'w-walk',
    category: 'travel',
    english: 'Walk',
    phoneticSk: 'vók',
    slovak: 'Kráčať / Ísť pešo',
    explanation: 'Pohyb pešo, príjemná prechádzka po pešej zóne alebo meste.',
    exampleSentenceEn: 'We can walk to the beach.',
    exampleSentenceSk: 'Na pláž môžeme ísť pešo.',
    iconType: 'walk'
  },
  {
    id: 'w-travel-shop',
    category: 'travel',
    english: 'Shop / Store',
    phoneticSk: 'šop / stór',
    slovak: 'Obchod / Predajňa',
    explanation: 'Miesto, kde si počas cestovania kúpite suveníry, mapu alebo drobnosti.',
    exampleSentenceEn: 'Is the souvenir shop open?',
    exampleSentenceSk: 'Je obchod so suvenírmi otvorený?',
    iconType: 'shop'
  },
  {
    id: 'w-park',
    category: 'travel',
    english: 'Park',
    phoneticSk: 'párk',
    slovak: 'Park / Zelená zóna',
    explanation: 'Mestský park so stromami, kvetmi a lavičkami na príjemný oddych.',
    exampleSentenceEn: 'Let us rest in the park.',
    exampleSentenceSk: 'Oddýchnime si v parku.',
    iconType: 'park'
  },
  {
    id: 'w-travel-hospital',
    category: 'travel',
    english: 'Hospital',
    phoneticSk: 'hos-pi-tl',
    slovak: 'Nemocnica',
    explanation: 'Zdravotnícke zariadenie a pohotovosť pri úraze alebo náhlej nevoľnosti na cestách.',
    exampleSentenceEn: 'Where is the nearest hospital?',
    exampleSentenceSk: 'Kde je najbližšia nemocnica?',
    iconType: 'hospital'
  },
  {
    id: 'w-travel-pharmacy',
    category: 'travel',
    english: 'Pharmacy',
    phoneticSk: 'fár-ma-si',
    slovak: 'Lekáreň',
    explanation: 'Predajňa so zeleným krížom na nákup liekov, náplastí alebo vitamínov na dovolenke.',
    exampleSentenceEn: 'I need to find a pharmacy.',
    exampleSentenceSk: 'Potrebujem nájsť lekáreň.',
    iconType: 'pharmacy'
  },
  {
    id: 'w-taxi',
    category: 'travel',
    english: 'Taxi',
    phoneticSk: 'tek-si',
    slovak: 'Taxík',
    explanation: 'Osobné auto s označením TAXI na streche, ktoré vás odvezie priamo k dverám hotela.',
    exampleSentenceEn: 'Call a taxi for me, please.',
    exampleSentenceSk: 'Zavolajte mi taxík, prosím.',
    iconType: 'taxi'
  },
  {
    id: 'w-metro',
    category: 'travel',
    english: 'Metro / Subway',
    phoneticSk: 'met-rou / sab-vej',
    slovak: 'Metro / Podzemná dráha',
    explanation: 'Rýchly podzemný vlak vo veľkých mestách so stanicami označenými písmenom M.',
    exampleSentenceEn: 'The metro station is near the hotel.',
    exampleSentenceSk: 'Stanica metra je blízko hotela.',
    iconType: 'metro'
  },
  {
    id: 'w-ship',
    category: 'travel',
    english: 'Ship / Boat',
    phoneticSk: 'šip / bóut',
    slovak: 'Loď / Trajekt',
    explanation: 'Plavidlo na vyhliadkovú plavbu po rieke, jazere alebo prepravu trajektom cez more.',
    exampleSentenceEn: 'We take a boat tour today.',
    exampleSentenceSk: 'Dnes ideme na vyhliadkovú plavbu loďou.',
    iconType: 'ship'
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
  {
    id: 'w-mildfever',
    category: 'health',
    english: 'Mild fever',
    phoneticSk: 'maild fí-vr',
    slovak: 'Zvýšená teplota',
    explanation: 'Mierne zvýšená teplota (okolo 37 až 38 °C), kedy sa človek necíti dobre.',
    exampleSentenceEn: 'I have a mild fever today.',
    exampleSentenceSk: 'Dnes mám zvýšenú teplotu.',
    iconType: 'mildfever'
  },
  {
    id: 'w-fever',
    category: 'health',
    english: 'Fever',
    phoneticSk: 'fí-vr',
    slovak: 'Horúčka',
    explanation: 'Vysoká telesná teplota nad 38 °C so zimnicou alebo potením.',
    exampleSentenceEn: 'He has a high fever and chills.',
    exampleSentenceSk: 'Má vysokú horúčku a triašku.',
    iconType: 'fever'
  },
  {
    id: 'w-ae',
    category: 'health',
    english: 'A&E (Emergency)',
    phoneticSk: 'ej end í',
    slovak: 'Urgentný príjem / Úrazovka',
    explanation: 'Skratka pre Accident & Emergency – nemocničná pohotovosť a úrazovka v zahraničí.',
    exampleSentenceEn: 'Take him to the nearest A&E immediately.',
    exampleSentenceSk: 'Okamžite ho vezmite na najbližší urgentný príjem.',
    iconType: 'ae'
  },
  {
    id: 'w-ambulance',
    category: 'health',
    english: 'Ambulance',
    phoneticSk: 'em-bju-lens',
    slovak: 'Sanitka / Záchranka',
    explanation: 'Zdravotnícke záchranné vozidlo s majákom na rýchly prevoz pacienta.',
    exampleSentenceEn: 'Please call an ambulance right now!',
    exampleSentenceSk: 'Prosím, okamžite zavolajte sanitku!',
    iconType: 'ambulance'
  },
  {
    id: 'w-fracture',
    category: 'health',
    english: 'Fracture / Broken bone',
    phoneticSk: 'frék-čr / bróu-kn bóun',
    slovak: 'Zlomenina',
    explanation: 'Zlomená alebo nalomená kosť po páde či úraze (napr. ruka, noha).',
    exampleSentenceEn: 'I think my wrist has a fracture.',
    exampleSentenceSk: 'Myslím, že mám zlomené zápästie.',
    iconType: 'fracture'
  },
  {
    id: 'w-vomiting',
    category: 'health',
    english: 'Vomiting / Nausea',
    phoneticSk: 'vo-mi-ting / nó-zi-a',
    slovak: 'Zvracanie / Nevoľnosť',
    explanation: 'Žalúdočná nevoľnosť s nutkaním na zvracanie pri otrave či viróze.',
    exampleSentenceEn: 'I feel sick and I am vomiting.',
    exampleSentenceSk: 'Je mi nevoľno a zvraciam.',
    iconType: 'vomiting'
  },
  {
    id: 'w-head',
    category: 'health',
    english: 'Head',
    phoneticSk: 'hed',
    slovak: 'Hlava',
    explanation: 'Hlava človeka – dôležité slovo pri bolestiach hlavy alebo točení hlavy.',
    exampleSentenceEn: 'My head hurts very much.',
    exampleSentenceSk: 'Veľmi ma bolí hlava.',
    iconType: 'head'
  },
  {
    id: 'w-arm',
    category: 'health',
    english: 'Arm / Hand',
    phoneticSk: 'árm / hend',
    slovak: 'Ruka',
    explanation: 'Ruka (arm = celá ruka, hand = dlaň s prstami) pri bolestiach kĺbov a svalov.',
    exampleSentenceEn: 'I cannot lift my left arm.',
    exampleSentenceSk: 'Nemôžem zdvihnúť ľavú ruku.',
    iconType: 'arm'
  },
  {
    id: 'w-leg',
    category: 'health',
    english: 'Leg / Foot',
    phoneticSk: 'leg / fút',
    slovak: 'Noha / Chodidlo',
    explanation: 'Dolná končatina (leg = noha, foot = chodidlo) pri bolesti kolena či vyvrtnutí.',
    exampleSentenceEn: 'My right leg is swollen and painful.',
    exampleSentenceSk: 'Moja pravá noha je opuchnutá a bolestivá.',
    iconType: 'leg'
  },
  {
    id: 'w-chest',
    category: 'health',
    english: 'Chest',
    phoneticSk: 'čest',
    slovak: 'Hrudník',
    explanation: 'Predná časť trupu – kľúčové slovo pri tlaku na hrudi a ťažkostiach s dychom.',
    exampleSentenceEn: 'I have sharp pain in my chest.',
    exampleSentenceSk: 'Mám pichavú bolesť v hrudníku.',
    iconType: 'chest'
  },
  {
    id: 'w-stomach',
    category: 'health',
    english: 'Stomach / Belly',
    phoneticSk: 'sta-mak / be-li',
    slovak: 'Brucho / Žalúdok',
    explanation: 'Brušná dutina a žalúdok pri kŕčoch, pálení záhy alebo tráviacich ťažkostiach.',
    exampleSentenceEn: 'I have severe stomach cramps.',
    exampleSentenceSk: 'Mám silné kŕče v bruchu.',
    iconType: 'stomach'
  },
  {
    id: 'w-diarrhea',
    category: 'health',
    english: 'Diarrhea',
    phoneticSk: 'daj-a-rí-a',
    slovak: 'Hnačka',
    explanation: 'Častá riedka stolica spojená so stratou tekutín a slabosťou.',
    exampleSentenceEn: 'I need pills for severe diarrhea.',
    exampleSentenceSk: 'Potrebujem lieky proti silnej hnačke.',
    iconType: 'diarrhea'
  },
  {
    id: 'w-cough',
    category: 'health',
    english: 'Cough',
    phoneticSk: 'kof',
    slovak: 'Kašeľ',
    explanation: 'Suchý alebo vlhký kašeľ pri zápale priedušiek alebo nachladnutí.',
    exampleSentenceEn: 'I have had a bad cough for three days.',
    exampleSentenceSk: 'Už tri dni mám silný kašeľ.',
    iconType: 'cough'
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
  },
  {
    id: 'w-restaurant',
    category: 'shopping',
    english: 'Restaurant',
    phoneticSk: 'res-to-rant',
    slovak: 'Reštaurácia',
    explanation: 'Podnik s posedením, kde varia teplé obedy a večere s obsluhou.',
    exampleSentenceEn: 'A table for two, please.',
    exampleSentenceSk: 'Stôl pre dvoch, prosím.',
    iconType: 'restaurant'
  },
  {
    id: 'w-shop',
    category: 'shopping',
    english: 'Shop / Store',
    phoneticSk: 'šop / stór',
    slovak: 'Obchod / Predajňa',
    explanation: 'Miesto na nákup tovaru, drogérie, spomienkových predmetov a darčekov.',
    exampleSentenceEn: 'The shop is open every day.',
    exampleSentenceSk: 'Obchod je otvorený každý deň.',
    iconType: 'shop'
  },
  {
    id: 'w-mall',
    category: 'shopping',
    english: 'Shopping Center / Mall',
    phoneticSk: 'šo-ping sen-tr / mól',
    slovak: 'Nákupné centrum / Obchodný dom',
    explanation: 'Veľká budova s desiatkami obchodov, kaviarňami a lavičkami pod jednou strechou.',
    exampleSentenceEn: 'Let us meet at the shopping center.',
    exampleSentenceSk: 'Stretnime sa v nákupnom centre.',
    iconType: 'mall'
  },
  {
    id: 'w-parking',
    category: 'shopping',
    english: 'Parking',
    phoneticSk: 'pár-king',
    slovak: 'Parkovisko / Garáž',
    explanation: 'Vyhradené miesto označené veľkým modrým písmenom P pre autá.',
    exampleSentenceEn: 'Parking is free for customers.',
    exampleSentenceSk: 'Parkovanie je pre zákazníkov zadarmo.',
    iconType: 'parking'
  },
  {
    id: 'w-groceries',
    category: 'shopping',
    english: 'Groceries / Supermarket',
    phoneticSk: 'grou-se-ríz / sú-pr-már-kit',
    slovak: 'Potraviny / Supermarket',
    explanation: 'Predajňa čerstvého chleba, mlieka, ovocia, zeleniny a každodenného jedla.',
    exampleSentenceEn: 'I need to buy some groceries.',
    exampleSentenceSk: 'Potrebujem nakúpiť potraviny.',
    iconType: 'groceries'
  },
  {
    id: 'w-clothes',
    category: 'shopping',
    english: 'Clothes',
    phoneticSk: 'klóuz',
    slovak: 'Oblečenie / Odev',
    explanation: 'Košele, nohavice, svetre, šaty či teplé bundy v oddelení textilu.',
    exampleSentenceEn: 'Where is the warm clothes section?',
    exampleSentenceSk: 'Kde je oddelenie teplého oblečenia?',
    iconType: 'clothes'
  },
  {
    id: 'w-shoes',
    category: 'shopping',
    english: 'Shoes',
    phoneticSk: 'šúúz',
    slovak: 'Topánky / Obuv',
    explanation: 'Pohodlná obuv na chôdzu, vychádzky po meste a do dažďa.',
    exampleSentenceEn: 'These shoes are very comfortable.',
    exampleSentenceSk: 'Tieto topánky sú veľmi pohodlné.',
    iconType: 'shoes'
  },
  {
    id: 'w-cake',
    category: 'shopping',
    english: 'Cake',
    phoneticSk: 'kejk',
    slovak: 'Koláčik / Zákusok',
    explanation: 'Sladký dezert, kúsok torty alebo čerstvý koláčik k poobedňajšej kávičke.',
    exampleSentenceEn: 'One piece of chocolate cake, please.',
    exampleSentenceSk: 'Jeden kúsok čokoládového koláča, prosím.',
    iconType: 'cake'
  },
  {
    id: 'w-softdrink',
    category: 'shopping',
    english: 'Soft drink',
    phoneticSk: 'soft drink',
    slovak: 'Nealko nápoj',
    explanation: 'Osviežujúci chladený nealkoholický nápoj (napr. limonáda, džús alebo cola).',
    exampleSentenceEn: 'A cold soft drink with ice, please.',
    exampleSentenceSk: 'Chladený nealko nápoj s ľadom, prosím.',
    iconType: 'softdrink'
  },
  {
    id: 'w-elevator',
    category: 'shopping',
    english: 'Elevator / Lift',
    phoneticSk: 'e-le-vej-tr / lift',
    slovak: 'Výťah',
    explanation: 'Kabína na presun medzi poschodiami v obchodnom centre či hoteli šetriaca vaše nohy.',
    exampleSentenceEn: 'Take the elevator to the first floor.',
    exampleSentenceSk: 'Vyvezte sa výťahom na prvé poschodie.',
    iconType: 'elevator'
  },
  {
    id: 'w-mineralwater',
    category: 'shopping',
    english: 'Mineral water',
    phoneticSk: 'mi-ne-rl vó-tr',
    slovak: 'Minerálna voda / Minerálka',
    explanation: 'Fľašková minerálna voda perlivá (sparkling) alebo tichá neperlivá (still).',
    exampleSentenceEn: 'A bottle of sparkling mineral water, please.',
    exampleSentenceSk: 'Fľašu perlivej minerálnej vody, prosím.',
    iconType: 'mineralwater'
  }
];

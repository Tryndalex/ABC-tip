import { Guide, Helpline, SmsMessage } from '../types';

export const CATEGORIES = [
  { id: 'all', name: 'Všetky témy', iconName: 'Compass' },
  { id: 'computer', name: 'Počítač a zariadenia', iconName: 'Laptop' },
  { id: 'phone', name: 'Smartfón a internet', iconName: 'Smartphone' },
  { id: 'security', name: 'Bezpečnosť a podvody', iconName: 'ShieldAlert' },
  { id: 'health', name: 'Zdravie a eRecept', iconName: 'HeartPulse' },
  { id: 'government', name: 'Štátne e-služby', iconName: 'Building2' },
  { id: 'pension', name: 'Dôchodok a poisťovňa', iconName: 'Landmark' },
] as const;

export const GUIDES: Guide[] = [
  {
    id: 'erecept-v-lekarni',
    title: 'Ako si vybrať lieky na eRecept v lekárni bez papierového receptu',
    category: 'health',
    categoryName: 'Zdravie a eRecept',
    categoryColor: 'teal',
    summary: 'Lekár vám predpíše lieky elektronicky. Do lekárne nemusíte nosiť žiadny papier, stačí vám iba váš občiansky preukaz alebo rodné číslo.',
    readTimeMinutes: 3,
    difficulty: 'Veľmi jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Ak vám lieky vyberá sused, dcéra alebo známy, nemusí mať váš preukaz – stačí, ak v lekárni nahlási vaše rodné číslo.',
    audioText: 'Ako si vybrať lieky na eRecept v lekárni. Krok jedna: Navštívte ľubovoľnú lekáreň na Slovensku. Krok dva: Pri okienku predložte svoj občiansky preukaz. Krok tri: Lekárnik vám na obrazovke overí platné predpisy a vydá lieky. Papierový recept už vôbec nepotrebujete.',
    steps: [
      {
        id: 1,
        title: 'Lekár vystaví elektronický recept',
        description: 'Váš ošetrujúci lekár zapíše predpísané lieky priamo do štátneho systému eZdravie. Recept je v systéme uložený okamžite po skončení vyšetrenia.',
        detailTips: [
          'Nie je potrebné žiadať papierové potvrdenie ani pečiatku.',
          'Ak máte telefón, lekár vám môže, no nemusí, poslať potvrdzujúcu SMS správu.'
        ]
      },
      {
        id: 2,
        title: 'Zvoľte si ľubovoľnú lekáreň na Slovensku',
        description: 'Elektronický recept neviaže pacienta na konkrétnu lekáreň. Môžete navštíviť akúkoľvek lekáreň vo vašom meste, obci alebo nákupnom centre.',
        detailTips: [
          'Bežný eRecept na lieky platí spravidla 7 dní.',
          'Opakovaný recept na dlhodobé lieky môže platiť až 1 rok.'
        ]
      },
      {
        id: 3,
        title: 'Predložte občiansky preukaz alebo povedzte rodné číslo',
        description: 'Pri okienku lekárnikovi povedzte: „Dobrý deň, prišiel som si vybrať elektronický recept.“ a podajte mu občiansky preukaz.',
        detailTips: [
          'Lekárnik načíta čip alebo zadá rodné číslo do počítača.',
          'Okamžite uvidí všetky lieky, ktoré vám lekári predpísali za posledné obdobie.'
        ]
      },
      {
        id: 4,
        title: 'Skontrolujte lieky a prevezmite si dávkovanie',
        description: 'Lekárnik vám vydá predpísané balenia, vysvetlí, kedy liek užiť (napr. ráno pred jedlom) a vytlačí štítok s presným dávkovaním na škatuľku.',
        warning: 'Vždy sa v lekárni opýtajte, či liek nemá náhradu (generikum) s nižším alebo nulovým doplatkom pre seniorov.'
      }
    ],
    officialLinks: [
      { label: 'Národné centrum zdravotníckych informácií (eZdravie)', url: 'https://www.ezdravotnictvo.sk' }
    ]
  },
  {
    id: 'rozpoznanie-podvodnej-sms',
    title: 'Ako spoznať a nahlásiť falošnú SMS o zadržanom balíku alebo nedoplatku',
    category: 'security',
    categoryName: 'Bezpečnosť a podvody',
    categoryColor: 'amber',
    summary: 'Podvodníci často posielajú správy v mene Slovenskej pošty, bánk či colnice. Naučte sa jedno jednoduché pravidlo, vďaka ktorému nikdy neprídete o peniaze.',
    readTimeMinutes: 4,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Zlaté pravidlo bezpečnosti: Slovenská pošta ani vaša banka od vás NIKDY cez SMS nežiada zadať údaje z platobnej karty ani heslo do internet bankingu.',
    audioText: 'Ako spoznať podvodnú SMS správu. Ak vám príde správa, že vám pošta zadržala balík a žiada doplatok cez internetový odkaz, ide o podvod. Nikdy neklikajte na podozrivé odkazy a nikdy nezadávajte čísla zo svojej bankomatovej karty. Ak si nie ste istí, ukážte správu niekomu v rodine alebo zavolajte na poštu.',
    steps: [
      {
        id: 1,
        title: 'Skontrolujte odosielateľa a divné telefónne číslo',
        description: 'Podvodné SMS často prichádzajú zo zahraničných čísel (napr. s predvoľbou +63, +44, +33) alebo z bežných mobilných čísel, nie z oficiálneho názvu organizácie.',
        detailTips: [
          'Slovenská pošta má ako odosielateľa uvedené meno „Posta“ bez dlhého podivného čísla.',
          'Ak v správe vidíte cudzie slová, zlú gramatiku alebo lámanú slovenčinu, buďte obzvlášť opatrní.'
        ]
      },
      {
        id: 2,
        title: 'Pozor na naliehavé požiadavky na kliknutie na webový odkaz',
        description: 'V správe býva veta ako: „Váš balík nemôže byť doručený, doplaťte 1,50 € na adrese posta-slovensko-sklad-sk.com“.',
        detailTips: [
          'Oficiálna stránka Slovenskej pošty je VÝHRADNE: posta.sk (nič navyše v adrese).',
          'Všetky vymyslené adresy s pomlčkami a cudzími koncovkami (.top, .xyz, .cc) sú podvodné.'
        ]
      },
      {
        id: 3,
        title: 'Nikdy nevypĺňajte 16-miestne číslo bankomatovej karty',
        description: 'Cieľom podvodníkov je získať číslo vašej platobnej karty, dátum platnosti a 3-miestny kód zo zadnej strany (CVV/CVC). Ak by ste ich zadali, môžu vám z účtu stiahnuť peniaze.',
        warning: 'Pošta vyberá poplatok za doručenie VŽDY priamo u poštového doručovateľa alebo pri okienku na pobočke, nie cez neznámy web v SMS!'
      },
      {
        id: 4,
        title: 'Čo urobiť so správou: Jednoducho ju vymažte',
        description: 'Správu nemusíte otvárať, stačí ju označiť a stlačiť tlačidlo „Vymazať“ (kôš). Ak máte pochybnosť, spýtajte sa svojich detí, vnúčat alebo pracovníčky na vašej pošte.',
        detailTips: [
          'Pokiaľ ste na odkaz neklikli a nič nezadali, žiadne nebezpečenstvo vám nehrozí.'
        ]
      }
    ],
    officialLinks: [
      { label: 'Upozornenia Slovenskej pošty na podvody', url: 'https://www.posta.sk/informacie/podvody' }
    ]
  },
  {
    id: 'zvatsenie-pisma-v-smartfone',
    title: 'Ako si na smartfóne (Android aj iPhone) jednoducho zväčšiť písmo a ikony',
    category: 'phone',
    categoryName: 'Smartfón a internet',
    categoryColor: 'blue',
    summary: 'Nemusíte žmúriť na displej. Každý smartfón má v nastaveniach možnosť nastaviť veľké, hrubé a zreteľné písmo aj väčšie ikony aplikácií.',
    readTimeMinutes: 3,
    difficulty: 'Veľmi jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Písmo môžete zväčšiť kedykoľvek a rovnako ho v prípade potreby vrátiť späť. Telefón sa tým nijako nepokazí.',
    audioText: 'Ako si zväčšiť písmo v smartfóne. Na ploche telefónu nájdite ikonu ozubeného kolieska s nápisom Nastavenia. Otvorte položku Displej alebo Zobrazenie. Vyberte možnosť Veľkosť a štýl písma. Posuvníkom posuňte bodku doprava, kým vám veľkosť textu nebude vyhovovať.',
    steps: [
      {
        id: 1,
        title: 'Otvorte aplikáciu „Nastavenia“',
        description: 'Na ploche telefónu alebo v zozname aplikácií nájdite ikonu s ozubeným kolieskom a textom „Nastavenia“ (Settings).',
        detailTips: [
          'Na iPhone je koliesko sivé, na telefónoch Samsung alebo Xiaomi býva modré či fialové.'
        ]
      },
      {
        id: 2,
        title: 'Ťuknite na položku „Displej“ alebo „Zobrazenie“',
        description: 'V zozname prejdite prstom mierne nadol a vyhľadajte riadok so slovom „Displej“, „Jas a displej“ alebo „Zjednodušenie ovládania“.',
        detailTips: [
          'Ťuknite na tento riadok jedným jemným dotykom prsta.'
        ]
      },
      {
        id: 3,
        title: 'Zvoľte „Veľkosť písma“ a posuňte posuvník doprava',
        description: 'Uvidíte ukážkový text a pod ním posuvnú lištu. Prstom posuňte krúžok smerom doprava. Písmo v telefóne sa pred vašimi očami zväčší.',
        detailTips: [
          'Môžete tiež zapnúť voľbu „Tučné písmo“ (hrubší text), aby boli písmená sýtejšie a lepšie čitateľné na slnku.',
          'Vyskúšajte si zväčšenie priamo v správach alebo kontaktoch.'
        ]
      },
      {
        id: 4,
        title: 'Voliteľné: Jednoduchý režim (Easy Mode)',
        description: 'Telefóny značky Samsung, Xiaomi a Motorola ponúkajú aj takzvaný „Jednoduchý režim“, ktorý zväčší ikony, zjednoduší domovskú obrazovku a zamedzí náhodným nechceným dotykom.',
        detailTips: [
          'Túto voľbu nájdete priamo v Nastaveniach displeja pod názvom „Jednoduchý režim“.'
        ]
      }
    ]
  },
  {
    id: 'slovensko-v-mobile',
    title: 'Aplikácia Slovensko v mobile: Ako sa prihlásiť bez čítačky čipových kariet',
    category: 'government',
    categoryName: 'Štátne e-služby',
    categoryColor: 'indigo',
    summary: 'Štátna mobilná aplikácia vám umožní prihlasovať sa do štátnych portálov a schránky správ bez potreby pripájať k počítaču káblovú čítačku občianskeho preukazu.',
    readTimeMinutes: 5,
    difficulty: 'Stredné',
    lastUpdated: 'Október 2026',
    practicalTip: 'Ak máte nový biometrický občiansky preukaz s NFC bezkontaktným čipom (vydaný po decembri 2022), aplikáciu aktivujete jednoduchým priložením preukazu k zadnej strane telefónu.',
    audioText: 'Aplikácia Slovensko v mobile. Umožňuje bezpečné prihlásenie do elektronických služieb štátu. Aplikáciu si stiahnete z obchodu Google Play alebo App Store. Pri prvej aktivácii si zvolíte svoj osobný šesťmiestny PIN kód. Tento PIN kód si starostlivo zapíšte a nikomu ho neprezrádzajte.',
    steps: [
      {
        id: 1,
        title: 'Stiahnite si bezplatnú aplikáciu z oficiálneho obchodu',
        description: 'V obchode Google Play (pre Android) alebo App Store (pre iPhone) vyhľadajte presný názov: „Slovensko v mobile“. Vývojárom je Slovensko IT / Ministerstvo investícií (MIRRI).',
        detailTips: [
          'Aplikácia je pre všetkých občanov úplne bezplatná.',
          'Poznávacím znakom je modrý štátny znak Slovenskej republiky.'
        ]
      },
      {
        id: 2,
        title: 'Zvoľte spôsob aktivácie aplikácie',
        description: 'Aplikácia vám ponúkne 2 možnosti: aktiváciu priložením občianskeho preukazu k telefónu (NFC) alebo cez webovú stránku slovensko.sk pomocou počítača.',
        detailTips: [
          'Ak máte rodinného príslušníka s počítačom, môže vám s jednorazovým spárovaním pomôcť za 5 minút.',
          'Aktiváciu robíte iba raz, potom už aplikácia funguje trvale.'
        ]
      },
      {
        id: 3,
        title: 'Nastavte si vlastný 6-miestny PIN kód',
        description: 'Zvoľte si 6 čísel, ktoré si ľahko zapamätáte (nie však dátum narodenia 111111 alebo 123456). Tento PIN budete zadávať pri každom vstupe do štátnych služieb.',
        warning: 'PIN kód si zapíšte na bezpečné miesto doma. Nikdy ho neposielajte nikomu cez SMS ani e-mail!'
      },
      {
        id: 4,
        title: 'Prihlásenie na portál slovensko.sk QR kódom',
        description: 'Keď nabudúce pôjdete na počítači na slovensko.sk, vyberiete možnosť „Prihlásiť sa cez Slovensko v mobile“. Telefónom odfotíte QR kód z obrazovky, zadáte svoj PIN a ste bezpečne prihlásení.',
        detailTips: [
          'Žiadne hľadanie káblikov, čítačiek ani inštalovanie zložitých ovládačov do počítača.'
        ]
      }
    ],
    officialLinks: [
      { label: 'Oficiálny portál Slovensko v mobile', url: 'https://mobil.slovensko.sk' },
      { label: 'Ústredný portál verejnej správy Slovensko.sk', url: 'https://www.slovensko.sk' }
    ]
  },
  {
    id: 'whatsapp-fotky-videohovor',
    title: 'Ako poslať fotku vnúčatám cez WhatsApp a uskutočniť videohovor',
    category: 'phone',
    categoryName: 'Smartfón a internet',
    categoryColor: 'teal',
    summary: 'Zostaňte v živom kontakte so svojimi deťmi a vnúčatami, nech sú kdekoľvek na svete. Hovory aj posielanie fotiek cez internet sú zadarmo.',
    readTimeMinutes: 4,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Videohovory cez WhatsApp spotrebúvajú internetové dáta. Doma ich odporúčame uskutočňovať cez domáce pripojenie Wi-Fi, aby ste nečerpali predplatené mobilné dáta.',
    audioText: 'Ako sa spojiť s rodinou cez WhatsApp. Otvorte aplikáciu WhatsApp so zelenou ikonou slúchadla. Vyberte zo zoznamu kontakt, napríklad svoje vnúča. V dolnej lište ťuknite na ikonu sponky alebo fotoaparátu, vyberte fotku a stlačte zelené tlačidlo odoslať. Pre videohovor ťuknite hore na ikonu kamery.',
    steps: [
      {
        id: 1,
        title: 'Otvorte aplikáciu WhatsApp a vyberte člena rodiny',
        description: 'Ťuknite na zelenú ikonu WhatsApp. Na obrazovke uvidíte zoznam rozhovorov. Ťuknite na meno osoby, ktorej chcete napísať alebo zavolať.',
        detailTips: [
          'Ak kontakt v zozname nevidíte, ťuknite vpravo dole na zelenú bublinu pre vyhľadanie v kontaktoch.'
        ]
      },
      {
        id: 2,
        title: 'Ako poslať fotografiu z telefónu',
        description: 'V spodnej časti obrazovky vedľa poľa na písanie správy ťuknite na malú ikonu fotoaparátu alebo kancelárskej sponky.',
        detailTips: [
          'Zvoľte možnosť „Galéria“ a vyberte fotku, ktorú chcete poslať.',
          'Ťuknite na zelený krúžok so šípkou vpravo dole – fotka sa okamžite doručí.'
        ]
      },
      {
        id: 3,
        title: 'Ako spustiť videohovor s obrazom a zvukom',
        description: 'V pravej hornej časti obrazovky uvidíte ikonu malej filmovej kamery. Ťuknite na ňu.',
        detailTips: [
          'Telefón začne zvoniť u volaného.',
          'Keď to vnúča alebo dcéra zdvihne, uvidíte ich tvár na celej obrazovke a oni uvidia vás.',
          'Držte telefón pred sebou vo výške očí.'
        ]
      },
      {
        id: 4,
        title: 'Ako hovor ukončiť',
        description: 'Po skončení rozhovoru stlačte veľké červené okrúhle tlačidlo so slúchadlom v dolnej časti displeja.',
        detailTips: [
          'Hovor sa tým bezpečne ukončí.'
        ]
      }
    ]
  },
  {
    id: 'dochodok-potvrdenie-online',
    title: 'Ako získať potvrdenie o poberaní dôchodku zo Sociálnej poisťovne cez internet',
    category: 'pension',
    categoryName: 'Dôchodok a poisťovňa',
    categoryColor: 'emerald',
    summary: 'Potrebujete potvrdenie o výške dôchodku pre banku, zľavu na vlak či mestskú dopravu? Nemusíte stáť v rade na pobočke Sociálnej poisťovne.',
    readTimeMinutes: 4,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Potvrdenie vám Sociálna poisťovňa vie poslať aj poštou priamo do schránky na základe jednoduchého bezplatného telefonátu na ich infolinku 0800 123 123.',
    audioText: 'Potvrdenie o poberaní dôchodku. Ak potrebujete potvrdenie o dôchodku, máte tri možnosti: najjednoduchšie je zavolať na bezplatné telefónne číslo Sociálnej poisťovne 0800 123 123, požiadať cez ich internetovú stránku formulárom, alebo cez elektronický účet poistenca.',
    steps: [
      {
        id: 1,
        title: 'Najjednoduchšia cesta: Bezplatná infolinka 0800 123 123',
        description: 'Zavolajte v pracovných dňoch od 8:00 do 16:00 na bezplatné číslo Sociálnej poisťovne. Hovory z pevnej linky aj mobilu sú úplne zadarmo.',
        detailTips: [
          'Pripravte si svoje rodné číslo.',
          'Operátorke poviete: „Potrebujem vystaviť potvrdenie o poberaní dôchodku.“',
          'Poisťovňa vám originál s pečiatkou pošle poštou domov spravidla do 3 pracovných dní.'
        ]
      },
      {
        id: 2,
        title: 'Cesta cez internetový formulár bez prihlasovania',
        description: 'Na stránke socpoist.sk je k dispozícii verejný formulár pre žiadosti občanov, kde netreba elektronický občiansky preukaz.',
        detailTips: [
          'Vyplníte meno, priezvisko, rodné číslo, adresu a dôvod vystavenia (napr. zľava na cestovanie).',
          'Potvrdenie vám príde do poštovej schránky.'
        ]
      },
      {
        id: 3,
        title: 'Elektronický účet poistenca (EÚP)',
        description: 'Ak už máte aktivovaný Elektronický účet poistenca, potvrdenie si môžete stiahnuť vo formáte PDF do počítača alebo mobilu ihneď kedykoľvek, aj cez víkend.',
        detailTips: [
          'Takéto elektronické potvrdenie obsahuje overovací QR kód a je plnohodnotným úradným dokumentom.'
        ]
      }
    ],
    officialLinks: [
      { label: 'Sociálna poisťovňa – Formuláre a žiadosti', url: 'https://www.socpoist.sk' }
    ]
  },
  {
    id: 'bezpecny-internet-banking',
    title: 'Bezpečné prihlásenie do internet bankingu: 5 pravidiel, ktoré vás ochránia',
    category: 'security',
    categoryName: 'Bezpečnosť a podvody',
    categoryColor: 'amber',
    summary: 'Platenie účtov a kontrola zostatku z pohodlia obývačky je pohodlná. Zoznámte sa s jednoduchými pravidlami, s ktorými sú vaše úspory v úplnom bezpečí.',
    readTimeMinutes: 4,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Nikdy neotvárajte internetové bankovníctvo cez odkaz, ktorý vám prišiel v e-maile alebo SMS. Vždy si adresu banky napíšte do prehliadača sami, alebo použite oficiálnu bankovú aplikáciu v mobile.',
    audioText: 'Bezpečné internetové bankovníctvo. Pravidlo číslo jedna: do banky vstupujte len cez oficiálnu aplikáciu alebo priamym zadaním adresy. Pravidlo číslo dva: banka vám nikdy nevolá s požiadavkou na prevod peňazí na takzvaný bezpečný účet. Ak vám niekto takýto volá, hneď zložte.',
    steps: [
      {
        id: 1,
        title: 'Overte si ikonu zámku v internetovom prehliadači',
        description: 'V hornej lište prehliadača (kde je webová adresa) musí byť pred názvom stránky zobrazená ikona malého zamknutého visiaceho zámku a skratka https://.',
        detailTips: [
          'Zámok znamená, že spojenie medzi vaším počítačom a bankou je šifrované a bezpečné.'
        ]
      },
      {
        id: 2,
        title: 'Pozor na falošné telefonáty o „ohrozenom účte“',
        description: 'Podvodník sa v telefóne predstaví ako pracovník bezpečnostného oddelenia vašej banky alebo policajt a tvrdí, že váš účet bol napadnutý a peniaze musíte previesť na „bezpečný záchranný účet“.',
        warning: 'Žiadny záchranný účet neexistuje! Skutočná banka vás NIKDY nebude telefonicky žiadať o prevod peňazí. V takejto chvíli okamžite zložte hovor.'
      },
      {
        id: 3,
        title: 'Dvojfaktorové overenie (SMS kód alebo potvrdenie v mobile)',
        description: 'Každú platbu alebo prihlásenie potvrdzujete dvomi spôsobmi – heslom a navyše kódom, ktorý vám príde do SMS alebo notifikácie v mobile.',
        detailTips: [
          'Vždy si v SMS správe s kódom prečítajte sumu a účet. Kód zadávajte len vtedy, ak suma presne zodpovedá tomu, čo práve platíte.'
        ]
      },
      {
        id: 4,
        title: 'Nastavte si bezpečné denné limity na karte a účte',
        description: 'Vo vašej banke alebo priamo v pobočke požiadajte o nastavenie rozumného denného limitu pre platby cez internet (napríklad 100 € alebo 200 €).',
        detailTips: [
          'Ak by ste aj náhodou kartu stratili, nikto z nej nemôže jednorazovo vybrať všetky vaše celoživotné úspory.'
        ]
      }
    ]
  },
  {
    id: 'co-robit-pri-podozreni',
    title: 'Čo robiť, ak sa vám zdá, že ste niekomu nechtiac prezradili heslo alebo údaje',
    category: 'security',
    categoryName: 'Bezpečnosť a podvody',
    categoryColor: 'amber',
    summary: 'Stalo sa to už tisícom ľudí. Neprepadajte panike, dôležité je konať rýchlo. Tu je presný postup v 3 krokoch, ako ochrániť svoje peniaze.',
    readTimeMinutes: 3,
    difficulty: 'Veľmi jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Nemusíte sa hanbiť. Podvodníci sú vytrénovaní psychológovia. Okamžite po zistení zavolajte do svojej banky – majú špecializovanú 24-hodinovú linku na zablokovanie karty.',
    audioText: 'Čo robiť pri podozrení na podvod. Krok jedna: Okamžite zavolajte na linku svojej banky a požiadajte o zablokovanie karty alebo účtu. Krok dva: Zmeňte si prihlasovacie heslá. Krok tri: Ak došlo k strate peňazí, nahláste udalosť na najbližšom oddelení Policajného zboru.',
    steps: [
      {
        id: 1,
        title: 'Okamžite zavolajte do svojej banky (číslo býva vzadu na karte)',
        description: 'Každá slovenská banka (Slovenská sporiteľňa, VÚB, Tatra banka, ČSOB, Poštová banka, Prima banka, mBank, Fio) má nepretržitú núdzovú linku 24 hodín denne, 7 dní v týždni.',
        detailTips: [
          'Povedzte operátorovi: „Mám podozrenie, že som klikol na podvodný odkaz, prosím zablokujte moju kartu.“',
          'Operátor kartu okamžite deaktivuje a skontroluje, či neodišli žiadne neoprávnené platby.'
        ]
      },
      {
        id: 2,
        title: 'Zmeňte si prístupové heslo z iného zariadenia',
        description: 'Ak ste zadali heslo do e-mailu alebo inej služby, ihneď sa prihláste a zvoľte si nové, silné heslo.',
        detailTips: [
          'Použite kombináciu aspoň 8 znakov s veľkými písmenami a číslami.'
        ]
      },
      {
        id: 3,
        title: 'V prípade škody kontaktujte políciu na čísle 158',
        description: 'Ak vám z účtu odišli peniaze, zájdite na najbližšie obvodné oddelenie Policajného zboru a podajte trestné oznámenie. Vezmite si so sebou výpis z účtu z banky a mobilný telefón so správou.',
        warning: 'Uchovajte SMS správy aj históriu hovorov ako dôkazový materiál.'
      }
    ]
  },
  {
    id: 'preco-nejde-internet-restart-routera',
    title: 'Prečo nefunguje internet a ako správne reštartovať router',
    category: 'computer',
    categoryName: 'Počítač a zariadenia',
    categoryColor: 'indigo',
    summary: 'Výpadok internetu v 90 % prípadov vyrieši jednoduchý reštart smerovača (čiernej alebo bielej skrinky so svetielkami). Naučte sa správny bezpečný postup bez rizika zmazania hesiel.',
    readTimeMinutes: 3,
    difficulty: 'Veľmi jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Nestláčajte malé tlačidlo „RESET“ s dierkou na zadnej strane – to by vymazalo všetky nastavenia! Vždy len vytiahnite napájací kábel zo zásuvky.',
    audioText: 'Ako správne reštartovať router. Krok jedna: Vytiahnite čierny napájací kábel routera zo zásuvky v stene. Krok dva: Počkajte trpezlivo aspoň desať sekúnd. Krok tri: Kábel zapojte späť a počkajte dve minúty, kým sa kontrolky rozsvietia na zeleno. To vymaže dočasné chyby a internet zvyčajne naskočí.',
    steps: [
      {
        id: 1,
        title: 'Nájdite router a vytiahnite napájací kábel zo zásuvky',
        description: 'Nájdite malú škatuľku s blikajúcimi svetielkami (anténkami), ktorá privádza internet do domácnosti. Zo zadnej strany alebo priamo zo steny vytiahnite napájací elektrický kábel.',
        detailTips: [
          'Svetielka na routeri okamžite zhasnú.',
          'Žiadne nastavenia ani heslo sa vytiahnutím zo zásuvky nezmažú.'
        ]
      },
      {
        id: 2,
        title: 'Počkajte aspoň 10 až 15 sekúnd',
        description: 'Nezapájajte ho ihneď. Počkajte aspoň 10 sekúnd, aby sa z pamäte zariadenia úplne vybila elektrická energia a vymazali sa nahromadené chyby siete.',
        detailTips: [
          'Môžete si v duchu pomaly napočítať do pätnásť.'
        ]
      },
      {
        id: 3,
        title: 'Zapojte kábel späť a počkajte 2 minúty',
        description: 'Kábel pevne zasuňte späť do zásuvky. Svetielka začnú postupne blikať. Dajte zariadeniu 1 až 2 minúty, kým sa spojí s ústredňou vášho poskytovateľa.',
        detailTips: [
          'Znakom úspechu je, keď sa kontrolka s ikonou zemegule alebo nápisom Internet rozsvieti na zeleno alebo na bielo (nesmie blikať na červeno).'
        ]
      },
      {
        id: 4,
        title: 'Skontrolujte káble a reštartujte telefón či počítač',
        description: 'Ak internet stále nejde, skontrolujte, či nie je uvoľnený sivý alebo žltý sieťový kábel vedúci do steny. Následne vypnite a zapnite aj samotný telefón či počítač.',
        warning: 'Ak kontrolka internetu svieti na červeno aj po 5 minútach, ide pravdepodobne o výpadok na strane vášho poskytovateľa (Telekom, Orange, O2, UPC, Slovanet). Zavolajte na ich bezplatnú poruchovú linku.'
      }
    ]
  },
  {
    id: 'ako-urobit-snimku-obrazovky-screenshot',
    title: 'Ako urobiť snímku obrazovky (screenshot) na mobile aj počítači',
    category: 'computer',
    categoryName: 'Počítač a zariadenia',
    categoryColor: 'blue',
    summary: 'Potrebujete rodine či technikovi ukázať, aká chyba alebo správa sa vám zobrazila na obrazovke? Odfotografujte si displej jedným stlačením.',
    readTimeMinutes: 3,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Odfotená snímka sa na smartfóne uloží rovno do vašej Galérie medzi fotky. Odtiaľ ju môžete poslať deťom cez WhatsApp presne tak, ako posielate bežnú fotku z fotoaparátu.',
    audioText: 'Ako urobiť snímku obrazovky. Na mobile Android stlačte naraz bočné tlačidlo vypnutia a tlačidlo zníženia hlasitosti. Displej zabliká a fotka sa uloží do galérie. Na počítači stlačte klávesu Print Screen na klávesnici.',
    steps: [
      {
        id: 1,
        title: 'Na smartfóne Android: Tlačidlo vypnutia + zníženie hlasitosti',
        description: 'Súčasne a krátko stlačte a podržte tlačidlo napájania (vypnutia) a tlačidlo zníženia hlasitosti (stíšenia zvuku).',
        detailTips: [
          'Obrazovka na zlomok sekundy bleskovo zabliká a zaznie tiché cvaknutie fotoaparátu.',
          'V dolnej časti sa objaví malý náhľad vytvorenej snímky.'
        ]
      },
      {
        id: 2,
        title: 'Na iPhone (Apple): Bočné tlačidlo + zvýšenie hlasitosti',
        description: 'Na telefónoch iPhone stlačte naraz pravé bočné tlačidlo a horné tlačidlo na zvýšenie hlasitosti na ľavej strane.',
        detailTips: [
          'Náhľad snímky sa zobrazí v ľavom dolnom rohu displeja.'
        ]
      },
      {
        id: 3,
        title: 'Na počítači so systémom Windows: Klávesa Print Screen (PrtScn)',
        description: 'Na klávesnici v pravej hornej časti nájdite klávesu s nápisom „PrtScn“, „PrtSc“ alebo „Print Screen“ a raz ju stlačte.',
        detailTips: [
          'Obraz sa uloží do pamäte počítača.',
          'Otvorte e-mail alebo program Skicár a stlačte klávesovú skratku Ctrl + V (Vložiť).'
        ]
      },
      {
        id: 4,
        title: 'Ako fotku nájsť a poslať rodine',
        description: 'Otvorte aplikáciu Galéria (alebo Fotky). Vytvorí sa v nej nový priečinok s názvom „Snímky obrazovky“ (Screenshots).',
        detailTips: [
          'Otvorte WhatsApp, kliknite na sponku, vyberte snímku a odošlite.'
        ]
      }
    ]
  },
  {
    id: 'co-je-to-cloud-kde-su-fotky',
    title: 'Čo je to „Cloud“ a kde sú bezpečne uložené moje rodinné fotografie',
    category: 'phone',
    categoryName: 'Smartfón a internet',
    categoryColor: 'teal',
    summary: 'Cloud (oblak) nie je žiadna záhada. Je to bezpečný digitálny trezor na internete, vďaka ktorému neprídete o fotky vnúčat ani pri strate alebo pokazení telefónu.',
    readTimeMinutes: 4,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Ak stratíte telefón, vaše rodinné fotky nie sú stratené! Stačí si na novom mobile zadať váš e-mail a heslo (Google účet alebo Apple ID) a všetky fotografie sa vám samy vrátia.',
    audioText: 'Čo je to Cloud a kde sú moje fotky. Cloud je internetové úložisko. Fotografie sa automaticky zálohujú na zabezpečené servery veľkých spoločností ako Google či Apple. Vďaka tomu o spomienky neprídete, ani keď sa vám telefón pokazí.',
    steps: [
      {
        id: 1,
        title: 'Predstavte si Cloud ako vzdialený bezpečnostný archív',
        description: 'V minulosti boli fotky vyvolané na papieri v albume. Neskôr boli uložené na pamäťovej karte. Cloud je súkromná virtuálna skrinka na internete, chránená vaším heslom.',
        detailTips: [
          'Prístup k fotkám máte len vy a nikto iný bez vášho hesla.',
          'Fotky sa tam ukladajú automaticky vždy, keď sa doma pripojíte na Wi-Fi.'
        ]
      },
      {
        id: 2,
        title: 'Aké služby Cloud prevádzkujú',
        description: 'V telefónoch so systémom Android sa služba volá „Fotky Google“ (Google Photos). Na telefónoch iPhone sa volá „iCloud“. Na počítačoch s Windows ide najčastejšie o „OneDrive“.',
        detailTips: [
          'Tieto služby poskytujú pre bežné rodinné fotky veľký bezplatný úložný priestor.'
        ]
      },
      {
        id: 3,
        title: 'Ako si fotky prezrieť na veľkej obrazovke počítača',
        description: 'Sadnite si k počítaču, otvorte internet a zadajte adresu photos.google.com (alebo icloud.com). Prihláste sa rovnakým e-mailom a uvidíte všetky fotky z mobilu na veľkom monitore.',
        detailTips: [
          'Môžete si ich pohodlne zväčšiť, vytlačiť alebo ukázať návšteve.'
        ]
      },
      {
        id: 4,
        title: 'Ako Cloud pomáha uvoľniť plnú pamäť v mobile',
        description: 'V aplikácii Fotky Google nájdete bezpečné tlačidlo „Uvoľniť miesto“. Z telefónu sa vymažú len kópie, no v Cloude zostanú fotky navždy v plnej kvalite.',
        warning: 'Nikdy nemažte fotky cez ikonu koša bez overenia, či sú v bezpečí v zálohe.'
      }
    ]
  },
  {
    id: 'ako-vytvorit-silne-heslo',
    title: 'Ako si vytvoriť silné heslo, ktoré si ľahko zapamätáte a nikto ho neuhádne',
    category: 'security',
    categoryName: 'Bezpečnosť a podvody',
    categoryColor: 'amber',
    summary: 'Dátum narodenia či meno vnúčaťa podvodník ľahko zistí z Facebooku. Naučte sa jednoduchý vetný trik, vďaka ktorému si vytvoríte nezlomné heslo.',
    readTimeMinutes: 4,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Pravidlo bezpečného domáceho zošitka: Pokojne si svoje heslá zapíšte do malého zošita a odložte ho do zásuvky v obývačke. Zlodej z internetu sa do vášho bytu nedostane. Nebezpečné je iba lepiť papierik s heslom priamo na monitor.',
    audioText: 'Ako si vytvoriť silné heslo. Vymyslite si známu vetu alebo pesničku, napríklad Na chalupe máme tri jablone. Zoberte prvé písmená každého slova, doplňte číslo a výkričník. Vznikne heslo, ktoré je bezpečné a ľahko si ho zapamätáte.',
    steps: [
      {
        id: 1,
        title: 'Prečo sú heslá ako 123456, heslo123 či dátum narodenia nebezpečné',
        description: 'Počítačové programy podvodníkov skúšajú tisíce bežných slov za sekundu. Dátumy narodenia, mená detí či rodné mestá dokážu prelomiť za niekoľko sekúnd.',
        detailTips: [
          'Správne silné heslo by malo mať aspoň 12 znakov.'
        ]
      },
      {
        id: 2,
        title: 'Geniálny trik: Veta z obľúbenej pesničky alebo porekadla',
        description: 'Vymyslite si vetu, ktorú dobre poznáte. Napríklad: „V našej záhrade kvitnú v máji krásne ruže.“',
        detailTips: [
          'Vezmite prvé písmená každého slova: V-n-z-k-v-m-k-r',
          'Doplňte číslo a symbol, napr. rok svadby a výkričník: Vnz1974!kr'
        ]
      },
      {
        id: 3,
        title: 'Základné pravidlo 4 prvkov',
        description: 'Silné heslo má obsahovať: veľké písmeno (A), malé písmená (a), aspoň jedno číslo (7) a aspoň jeden znak (! alebo ?).',
        detailTips: [
          'Výkričník na konci hesla je jednoduchý na zapamätanie a výrazne zvyšuje bezpečnosť.'
        ]
      },
      {
        id: 4,
        title: 'Najdôležitejšie: Nepoužívajte rovnaké heslo do banky a do e-mailu',
        description: 'Pre internetové bankovníctvo a hlavný e-mail majte vždy jedinečné heslo. Ak by niekto zistil heslo z menej dôležitej stránky (napr. z kvetinárstva), nedostane sa k vašim peniazom.',
        warning: 'Nikdy svoje heslá neposielajte nikomu cez SMS, e-mail ani ich nediktujte do telefónu, ani keby tvrdili, že volajú z banky!'
      }
    ]
  },
  {
    id: 'co-robit-ked-vyskoci-okno-pocitac-je-zavireny',
    title: 'Čo robiť, ak na obrazovke vyskočí okno: „Váš počítač je zavírený!“',
    category: 'security',
    categoryName: 'Bezpečnosť a podvody',
    categoryColor: 'amber',
    summary: 'Červené blikajúce okno a hlasný zvuk bývajú v 99 % prípadov falošným poplachom a podvodnou reklamou. Cieľom je vystrašiť vás, aby ste im zavolali a zaplatili.',
    readTimeMinutes: 3,
    difficulty: 'Veľmi jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Skutočný antivírus v počítači (Windows Zabezpečenie či ESET) vás varuje v malom nenápadnom sivom okienku vpravo dole, nikdy nie cez celú webovú stránku s požiadavkou na telefonát.',
    audioText: 'Čo robiť pri vyskakovacom okne o víruse. Neklikajte na tlačidlo Vyčistiť ani nevolajte na zobrazené telefónne číslo. Ide o podvodnú reklamu. Jednoducho zatvorte internetový prehliadač krížikom v pravom hornom rohu, alebo počítač reštartujte.',
    steps: [
      {
        id: 1,
        title: 'Zachovajte pokoj: Je to len falošná reklama na internete',
        description: 'Útočníci vedia, že seniori majú strach o svoj počítač. Texty ako „Váš systém bol napadnutý trojanom, volajte na číslo podpory“ sú vymyslené.',
        detailTips: [
          'Pokiaľ ste na nič neklikli, v počítači žiaden vírus nemáte.'
        ]
      },
      {
        id: 2,
        title: 'Neklikajte na tlačidlá „Vyčistiť“, „Odstrániť“ ani „OK“',
        description: 'Práve kliknutie na takéto tlačidlo by mohlo stiahnuť nežiaduci softvér. Žiadne telefónne čísla zo stránky nevolajte.',
        warning: 'Podvodníci na druhej strane linky by predstierali technikov Microsoftu a pýtali poplatok za „opravu“.'
      },
      {
        id: 3,
        title: 'Ako okno bezpečne zatvoriť',
        description: 'Pozrite sa do pravého horného rohu celej obrazovky a kliknite na červený krížik [X] internetového prehliadača.',
        detailTips: [
          'Na klávesnici môžete stlačiť klávesovú skratku Alt + F4, ktorá okno okamžite zatvorí.'
        ]
      },
      {
        id: 4,
        title: 'Reštartujte počítač alebo mobil',
        description: 'Po zatvorení okna zariadenie normálne reštartujte (Štart → Reštartovať). Pamäť sa vyčistí a strašidelné okno bude preč.',
        detailTips: [
          'Môžete pokojne pokračovať v bežnom používaní.'
        ]
      }
    ]
  },
  {
    id: 'cookies-co-to-je-co-kliknut',
    title: 'Čo sú to „Cookies“ na stránkach a na ktoré tlačidlo mám bezpečne kliknúť',
    category: 'computer',
    categoryName: 'Počítač a zariadenia',
    categoryColor: 'indigo',
    summary: 'Pri otvorení takmer každej stránky vyskočí tabuľka so slovom Cookies. Vysvetlíme si po ľudsky, čo to znamená a čo bez obáv stlačiť.',
    readTimeMinutes: 3,
    difficulty: 'Veľmi jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Zlaté pravidlo pre seniorov: Ak vidíte voľbu „Iba nevyhnutné“ alebo „Odmietnuť nepovinné“, kliknite na ňu. Webová stránka bude fungovať úplne normálne a vy nebudete sledovaní reklamami.',
    audioText: 'Čo sú to cookies. Sú to malé textové súbory, ktoré si web ukladá, aby si pamätal napríklad vaše prihlásenie. Vždy keď sa vás stránka opýta na súhlas, bezpečne zvoľte možnosť Odmietnuť nepovinné alebo Prijať iba nevyhnutné.',
    steps: [
      {
        id: 1,
        title: 'Cookies sú ako šatňový lístok v divadle',
        description: 'Sú to drobné textové súbory, ktoré si webová stránka uloží do vášho počítača, aby vedela, že ste to vy (napríklad aby ste nemuseli zadávať heslo pri každom kliknutí).',
        detailTips: [
          'Cookies samy o sebe nie sú vírusom a nemôžu poškodiť váš počítač.'
        ]
      },
      {
        id: 2,
        title: 'Rozdiel: Nevyhnutné cookies vs. Reklamné sledovanie',
        description: '„Nevyhnutné cookies“ sú potrebné, aby stránka vôbec fungovala. „Marketingové cookies“ slúžia reklamným spoločnostiam na to, aby zistili, aké topánky či lieky ste si pozerali.',
        detailTips: [
          'Preto európsky zákon vyžaduje, aby sa vás web najskôr opýtal na súhlas.'
        ]
      },
      {
        id: 3,
        title: 'Ktoré tlačidlo bezpečne stlačiť',
        description: 'Ak chcete mať pokoj, kliknite na: „Prijať iba nevyhnutné“, „Odmietnuť všetko“ (Reject all) alebo „Nastavenia → Uložiť nevyhnutné“.',
        detailTips: [
          'Ak také tlačidlo nevidíte a je tam len „Súhlasím“, pokojne ho stlačte – žiadne nebezpečenstvo vám nehrozí.'
        ]
      },
      {
        id: 4,
        title: 'Ako cookies a vyrovnávaciu pamäť (cache) občas vymazať',
        description: 'Ak sa vám nejaká stránka nechce načítať alebo ukazuje staré údaje, v prehliadači stačí stlačiť klávesovú skratku Ctrl + Shift + Delete a zvoliť Vymazať údaje.',
        detailTips: [
          'Stránky potom nabehnú v najnovšej čistej podobe.'
        ]
      }
    ]
  },
  {
    id: 'vycistenie-pamate-a-zrychlenie-mobilu',
    title: 'Prečo je smartfón alebo počítač zrazu pomalý a ako jednoducho vyčistiť pamäť',
    category: 'phone',
    categoryName: 'Smartfón a internet',
    categoryColor: 'blue',
    summary: 'Seká vám telefón alebo sa aplikácie otvárajú pridlho? V 4 jednoduchých krokoch vyčistíte nahromadené nepotrebné súbory a vrátite zariadeniu rýchlosť.',
    readTimeMinutes: 4,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Elektronika potrebuje oddych: Odporúčame smartfón aj počítač aspoň raz za týždeň úplne vypnúť na 1 minútu a znova zapnúť. Prečistí sa operačná pamäť a telefón citeľne ožije.',
    audioText: 'Ako zrýchliť pomalý smartfón. Krok jedna: Zariadenie úplne vypnite a znova zapnite. Tým sa prečistí operačná pamäť. Krok dva: Otvorte galériu a vymažte rozmazané fotky a staré videá. Krok tri: Odinštalujte aplikácie, ktoré už nepoužívate.',
    steps: [
      {
        id: 1,
        title: 'Zlaté pravidlo: Úplné vypnutie a zapnutie zariadenia (reštart)',
        description: 'Mnoho seniorov má telefón zapnutý celé mesiace bez prestávky. V pamäti RAM bežia na pozadí desiatky uspatých procesov.',
        detailTips: [
          'Podržte bočné tlačidlo vypnutia na 3 sekundy.',
          'Vyberte možnosť „Reštartovať“ (alebo Vypnúť a po chvíli znova zapnúť).'
        ]
      },
      {
        id: 2,
        title: 'Prečistite galériu fotografií a stiahnuté videá',
        description: 'Najviac miesta v pamäti zaberajú videá z WhatsAppu a rozmazané fotky. Otvorte Galériu a nepodarené zábery označte a vymažte.',
        detailTips: [
          'Nezabudnite vysypať „Kôš“ v galérii, pretože vymazané fotky v ňom často zostávajú ešte 30 dní.'
        ]
      },
      {
        id: 3,
        title: 'Prejdite si priečinok „Stiahnuté súbory“ (Downloads)',
        description: 'Pri prezeraní internetu sa do tohto priečinka ukladajú rôzne PDF letáky, recepty a faktúry, ktoré už nepotrebujete.',
        detailTips: [
          'V aplikácii Moje súbory otvorte priečinok Stiahnuté a zmažte staré dokumenty.'
        ]
      },
      {
        id: 4,
        title: 'Odinštalujte hry a aplikácie, ktoré už nepoužívate',
        description: 'Ak ste si kedysi nainštalovali aplikáciu, ktorú ste už rok neotvorili, prstom na nej podržte ikonu a zvoľte „Odinštalovať“.',
        warning: 'Uvoľníte tým dôležitý priestor, ktorý systém potrebuje pre plynulý chod.'
      }
    ]
  },
  {
    id: 'aktualizacie-preco-ich-instalovat',
    title: 'Prečo mobil a počítač neustále ponúkajú aktualizácie a prečo ich neodkladať',
    category: 'computer',
    categoryName: 'Počítač a zariadenia',
    categoryColor: 'indigo',
    summary: 'Hláška „Je k dispozícii aktualizácia softvéru“ vás nemusí strašiť. Predstavte si ju ako výmenu starého zámku na vchodových dverách za nový a pevnejší.',
    readTimeMinutes: 3,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Aktualizáciu spustite večer, keď už telefón nepotrebujete. Pripojte ho do nabíjačky a uistite sa, že ste doma pripojení na domáce Wi-Fi.',
    audioText: 'Prečo inštalovať aktualizácie. Aktualizácie opravujú bezpečnostné chyby, aby boli vaše údaje v bezpečí pred útočníkmi. Inštalujte ich večer, keď máte telefón na nabíjačke a pripojený na Wi-Fi. Telefón sa počas inštalácie môže sám reštartovať.',
    steps: [
      {
        id: 1,
        title: 'Čo aktualizácia v skutočnosti robí',
        description: 'Výrobcovia systémov (Google pre Android, Apple pre iPhone, Microsoft pre Windows) v aktualizáciách opravujú novoobjavené bezpečnostné slabiny, cez ktoré by sa inak mohli dostať vírusy.',
        detailTips: [
          'Nejde o žiaden vírus, je to oficiálna starostlivosť výrobcu o váš prístroj.'
        ]
      },
      {
        id: 2,
        title: 'Kedy je ideálny čas na inštaláciu',
        description: 'Neinštalujte aktualizáciu, keď ste vonku v meste alebo čakáte dôležitý hovor. Najlepší čas je večer doma v obývačke.',
        detailTips: [
          'Dajte telefón do elektrickej nabíjačky, aby sa počas inštalácie nevybil.',
          'Uistite sa, že máte zapnuté domáce Wi-Fi.'
        ]
      },
      {
        id: 3,
        title: 'Čo sa deje počas inštalácie: Zariadenie sa reštartuje',
        description: 'Obrazovka môže na niekoľko minút sčernieť a zobrazí sa ozubené koliesko alebo logo výrobcu s percentami priebehu. To je úplne normálne.',
        warning: 'Počas inštalácie nevytahujte batériu ani telefón nasilu nevypínajte. Nechajte ho v pokoji pracovať.'
      },
      {
        id: 4,
        title: 'Po dokončení zadajte svoj bežný PIN kód',
        description: 'Po skončení aktualizácie sa telefón zapne ako obvykle. Zadáte svoj bežný kód obrazovky alebo priložíte prst a všetky vaše správy a fotky zostanú neporušené na svojom mieste.',
        detailTips: [
          'Zariadenie je teraz maximálne chránené.'
        ]
      }
    ]
  },
  {
    id: 'podvodna-sprava-od-priatela-na-facebooku',
    title: 'Správa na Facebooku: „Pozri, nie si na tomto videu?“ – Ako spoznať falošného priateľa',
    category: 'security',
    categoryName: 'Bezpečnosť a podvody',
    categoryColor: 'amber',
    summary: 'Píše vám kamarátka či sused a posiela odkaz na video alebo pýta vaše telefónne číslo? Zistite, prečo to v skutočnosti nepíšu oni a ako správne zareagovať.',
    readTimeMinutes: 3,
    difficulty: 'Jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Najjednoduchší test pravdy: Zdvihnite telefón a zavolajte kamarátovi klasickým hovorom: „Janko, posielal si mi niečo na Facebooku?“ Zvyčajne zistíte, že o ničom nevie a niekto mu ukradol účet.',
    audioText: 'Falošná správa od priateľa na Facebooku. Ak vám známy zrazu pošle odkaz s otázkou, či nie ste na videu, alebo od vás pýta kód z SMS, neklikajte. Podvodníci mu ukradli účet. Zavolajte priateľovi na telefón a upozornite ho.',
    steps: [
      {
        id: 1,
        title: 'Prečo správa prichádza od vášho skutočného známeho',
        description: 'Útočník zistil heslo vášho priateľa alebo príbuzného a cez jeho účet rozosiela falošné správy všetkým jeho kontaktom. Známy o tom často vôbec netuší.',
        detailTips: [
          'Správy posiela automatický robot bez vedomia majiteľa účtu.'
        ]
      },
      {
        id: 2,
        title: 'Typické vety, ktorými vás chcú nachytať',
        description: '„Pozri, kto zomrel pri nehode...“, „Nie si to ty na tom videu?“, alebo „Nemôžem sa dostať do banky, pošli mi prosím kód z tvojej SMS.“',
        detailTips: [
          'Všetky tieto správy sa snažia vyvolať zvedavosť, paniku alebo ochotu pomôcť.'
        ]
      },
      {
        id: 3,
        title: 'Na odkaz v žiadnom prípade neklikajte',
        description: 'Odkaz by vás presmeroval na falošnú stránku Facebooku, kde by od vás pýtali znovu zadať heslo. Keby ste ho zadali, ukradli by aj váš profil.',
        warning: 'Nikdy nikomu neposielajte číselné kódy, ktoré vám prídu v SMS správach!'
      },
      {
        id: 4,
        title: 'Zavolajte priateľovi na jeho bežné telefónne číslo',
        description: 'Otvorte kontakty v mobile a normálne mu zavolajte: „Ahoj, chcem ťa upozorniť, že z tvojho Facebooku mi chodia podozrivé správy, asi ťa napadli.“',
        detailTips: [
          'Priateľ si bude musieť na Facebooku zmeniť heslo a vy ste uchránili seba aj ostatných.'
        ]
      }
    ]
  },
  {
    id: 'wifi-vs-mobilne-data-rozdiel-a-platby',
    title: 'Wi-Fi a mobilné dáta: Aký je medzi nimi rozdiel a kedy surfujete úplne zadarmo',
    category: 'phone',
    categoryName: 'Smartfón a internet',
    categoryColor: 'teal',
    summary: 'Pýtate sa, prečo vám niekedy odchádzajú dáta z paušálu a inokedy nie? Vysvetlíme si rozdiel medzi domácou Wi-Fi a mobilnými dátami na ulici.',
    readTimeMinutes: 3,
    difficulty: 'Veľmi jednoduché',
    lastUpdated: 'Október 2026',
    practicalTip: 'Symbol vejárika (Wi-Fi) na displeji hore znamená, že surfujete cez domáci internet a neplatíte žiadne mobilné dáta navyše. WhatsApp hovory a pozeranie videí robte hlavne doma na Wi-Fi.',
    audioText: 'Rozdiel medzi Wi-Fi a mobilnými dátami. Domáca Wi-Fi je označená symbolom vejárika a môžete na nej surfovať, pozerať videá a volať bez obmedzenia. Mobilné dáta využívate vonku cez mobilného operátora.',
    steps: [
      {
        id: 1,
        title: 'Symbol vejárika: Čo je domáca Wi-Fi sieť a prečo je neobmedzená',
        description: 'Wi-Fi je bezdrôtové spojenie medzi vaším telefónom a domácim routerom. Doma máte internet zvyčajne predplatený paušálne, takže môžete preniesť koľkokoľvek fotiek a videí bez ďalších poplatkov.',
        detailTips: [
          'Wi-Fi funguje len v dosahu vášho bytu či domu (cca 15 metrov od routera).'
        ]
      },
      {
        id: 2,
        title: 'Symbol 4G / 5G: Čo sú mobilné dáta od operátora vonku na ulici',
        description: 'Keď vyjdete z domu von do mesta alebo záhrady, spojenie s routerom sa preruší a telefón sa prepne na mobilné dáta operátora (Telekom, Orange, O2, 4ka).',
        detailTips: [
          'Tieto dáta sa odpočítavajú z vášho mesačného balíčka (napríklad 2 GB alebo 5 GB).'
        ]
      },
      {
        id: 3,
        title: 'Aplikácie ako WhatsApp a Messenger: Samotné sú zadarmo',
        description: 'Mnoho seniorov sa pýta, či sa za WhatsApp platí. Samotná aplikácia je 100 % zadarmo. Spotrebúva len internet.',
        detailTips: [
          'Doma na Wi-Fi voláte vnúčatám cez videohovor úplne zadarmo neobmedzený čas.',
          'Pozor na podvodné správy, ktoré by pýtali predplatné – oficiálny WhatsApp nikdy peniaze nepýta.'
        ]
      },
      {
        id: 4,
        title: 'Ako si skontrolovať, či máte zapnutú Wi-Fi',
        description: 'Potiahnite prstom z hornej hrany obrazovky nadol. Uvidíte ikonu vejárika. Ak svieti namodro, ste na Wi-Fi. Ak je sivá, jedným ťuknutím ju zapnite.',
        detailTips: [
          'Telefón si vašu domácu sieť pamätá a pripojí sa k nej automaticky vždy, keď prídete domov.'
        ]
      }
    ]
  }
];

export const HELPLINES: Helpline[] = [
  {
    id: 'senior-linka',
    name: 'Linka dôvery a pomoci pre seniorov',
    organization: 'Fórum pre pomoc starším',
    phoneNumber: '0800172500',
    displayPhone: '0800 172 500',
    hours: 'Pracovné dni 8:00 – 16:00',
    description: 'Bezplatná anonymná linka pre seniorov v krízových situáciách, pri osamelosti, otázkach sociálnej pomoci či podozrení na nekalé konanie.',
    isFree: true,
    badge: 'Bezplatná linka'
  },
  {
    id: 'soc-poistovna',
    name: 'Infolinka Sociálnej poisťovne',
    organization: 'Sociálna poisťovňa SR',
    phoneNumber: '0800123123',
    displayPhone: '0800 123 123',
    hours: 'Po – Pia 8:00 – 16:00',
    description: 'Otázky týkajúce sa výplaty starobného, invalidného a vdovského dôchodku, valorizácie, zmeny čísla bankového účtu a potvrdení.',
    isFree: true,
    badge: 'Bezplatná linka'
  },
  {
    id: 'slovenska-posta',
    name: 'Zákaznícke centrum Slovenskej pošty',
    organization: 'Slovenská pošta, a. s.',
    phoneNumber: '0850122413',
    displayPhone: '0850 122 413',
    hours: 'Po – Pia 8:00 – 18:00',
    description: 'Overenie doručovania zásielok, vyjasnenie podozrivých SMS správ o balíkoch a informácie o poštových službách.',
    isFree: false,
    badge: 'Miestna tarifa'
  },
  {
    id: 'nczie-zdravie',
    name: 'Call centrum eZdravie (eRecept)',
    organization: 'Národné centrum zdravotníckych informácií',
    phoneNumber: '0232323838',
    displayPhone: '02 / 3232 3838',
    hours: 'Po – Pia 7:00 – 19:00',
    description: 'Informácie o fungovaní elektronického receptu, elektronickej zdravotnej knižke a prístupe k záznamom lekárov.',
    isFree: false,
    badge: 'Bratislavské číslo'
  },
  {
    id: 'policia-nudza',
    name: 'Polícia SR – Núdzová linka',
    organization: 'Policajný zbor SR',
    phoneNumber: '158',
    displayPhone: '158',
    hours: 'Nepretržite 24/7',
    description: 'V prípade bezprostredného podvodu, krádeže alebo podozrenia zo spáchania trestného činu.',
    isFree: true,
    badge: 'Núdzová tiesňová linka'
  }
];

export const SMS_SCENARIOS: SmsMessage[] = [
  {
    id: 'sms-scam-posta',
    sender: '+63 948 213 901',
    date: 'Dnes, 10:24',
    body: 'SLOVENSKA POSTA: Vas balik cislo SK98214 nemohol byt doruceny pre nespravnu adresu. Prosim aktualizujte udaje a uhradte poplatok 1.85 EUR do 12 hodin na: http://posta-sklad-dorucenie.top/sk',
    isScam: true,
    suspiciousPoints: [
      'Odosielateľ má zahraničné číslo s predvoľbou Filipín (+63)',
      'Nátlak na rýchle konanie: „uhradte poplatok do 12 hodín“',
      'Webová adresa končí podozrivou doménou „.top“, nie oficiálnou „posta.sk“',
      'Pošta nikdy nežiada platbu cez SMS odkaz'
    ],
    explanation: 'Toto je typický podvod zameraný na vylákanie čísla vašej bankomatovej karty. Oficiálna Slovenská pošta nikdy neposiela správy zo zahraničných čísel a nikdy nežiada platbu cez externý internetový odkaz.',
    safeAlternative: 'Správu neotvárajte, neklikajte na odkaz a rovno ju vymažte. Ak reálne čakáte balíček, overte si ho priamo na stránke posta.sk v sekcii Sledovanie zásielok.'
  },
  {
    id: 'sms-real-posta',
    sender: 'Posta',
    date: 'Včera, 14:15',
    body: 'Vazeny zakaznik, zasielka podacoe cislo SK123456789SK bola dorucena na Postu 1, Hlavna 12. Ulozena je do 04.11.2026. Dobierka: 0 EUR. Pri prevzati predlozte obciansky preukaz.',
    isScam: false,
    suspiciousPoints: [
      'Odosielateľ je oficiálne overený názov „Posta“',
      'Správa NEOBSAHUJE žiadny odkaz na kliknutie ani platbu kartou',
      'Uvádza konkrétnu pobočku pošty a poučenie predložiť občiansky preukaz na mieste',
      'Nevyvíja žiadny nátlak na peniaze cez internet'
    ],
    explanation: 'Toto je skutočná, bezpečná informačná SMS od Slovenskej pošty. Upozorňuje vás, že na vašej miestnej pobočke máte uložený list alebo balíček.',
    safeAlternative: 'Vezmite si občiansky preukaz a zájdite na vašu poštu v bežných otváracích hodinách.'
  },
  {
    id: 'sms-scam-banka',
    sender: '+421 905 112 884',
    date: 'Dnes, 08:05',
    body: 'VUB Banka: Vas pristup k uctu bol docasne zablokovany z dovodu bezpecnosti. Pre odblokovanie potvrdte identitu na: https://vub-prihlasenie-overenie.cc',
    isScam: true,
    suspiciousPoints: [
      'Odoslané z obyčajného mobilného čísla, nie z oficiálnej bankovej brány',
      'Zastrašovanie: „Váš účet bol zablokovaný“',
      'Falošná adresa končiaca „.cc“ namiesto oficiálnej „vub.sk“',
      'Banka nikdy nežiada prihlásenie cez odkaz v SMS'
    ],
    explanation: 'Podvodník sa snaží vyvolať strach, aby ste v zhone zadali svoje prihlasovacie meno a heslo na jeho falošnej stránke.',
    safeAlternative: 'Na odkaz neklikajte. Ak máte obavu o svoj účet, otvorte si oficiálnu aplikáciu banky v mobile, alebo zatelefonujte na oficiálne klientske centrum svojej banky.'
  }
];

export const PHARMACY_CHECKLIST_ITEMS = [
  { id: 'item-id-card', label: 'Platný občiansky preukaz (alebo preukaz poistenca)', hint: 'Preukaz obsahuje vaše rodné číslo, ktorým sa overujú všetky predpísané lieky v systéme eZdravie.' },
  { id: 'item-list-meds', label: 'Zoznam užívaných liekov na papieriku', hint: 'Užitočné najmä vtedy, ak beriete viac druhov liekov a chcete sa uistiť, že vám lekár predpísal všetky.' },
  { id: 'item-payment', label: 'Peniaze alebo platobná karta na doplatky', hint: 'Mnohé lieky majú pre seniorov znížený alebo nulový doplatok, no niektoré špeciálne lieky vyžadujú malý doplatok.' },
  { id: 'item-bag', label: 'Vlastná plátenná taška na lieky', hint: 'Pomôže vám pohodlne odniesť balenia domov bez poplatku za igelitovú tašku.' }
];

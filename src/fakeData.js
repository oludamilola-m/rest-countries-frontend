const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    region: "Europe",
    population: 28875,

    flag: "https://restcountries.eu/data/ala.svg",
  },
  {
    name: "Albania",
    topLevelDomain: [".al"],
    alpha2Code: "AL",
    alpha3Code: "ALB",
    callingCodes: ["355"],
    capital: "Tirana",
    altSpellings: ["AL", "Shqipëri", "Shqipëria", "Shqipnia"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 2886026,
    latlng: [41.0, 20.0],
    demonym: "Albanian",
    area: 28748.0,
    gini: 34.5,
    timezones: ["UTC+01:00"],
    borders: ["MNE", "GRC", "MKD", "KOS"],
    nativeName: "Shqipëria",
    numericCode: "008",
    currencies: [
      {
        code: "ALL",
        name: "Albanian lek",
        symbol: "L",
      },
    ],
    languages: [
      {
        iso639_1: "sq",
        iso639_2: "sqi",
        name: "Albanian",
        nativeName: "Shqip",
      },
    ],
    translations: {
      de: "Albanien",
      es: "Albania",
      fr: "Albanie",
      ja: "アルバニア",
      it: "Albania",
      br: "Albânia",
      pt: "Albânia",
      nl: "Albanië",
      hr: "Albanija",
      fa: "آلبانی",
    },
    flag: "https://restcountries.eu/data/alb.svg",
    regionalBlocs: [
      {
        acronym: "CEFTA",
        name: "Central European Free Trade Agreement",
        otherAcronyms: [],
        otherNames: [],
      },
    ],
    cioc: "ALB",
  },
  {
    name: "Algeria",
    topLevelDomain: [".dz"],
    alpha2Code: "DZ",
    alpha3Code: "DZA",
    callingCodes: ["213"],
    capital: "Algiers",
    altSpellings: ["DZ", "Dzayer", "Algérie"],
    region: "Africa",
    subregion: "Northern Africa",
    population: 40400000,
    latlng: [28.0, 3.0],
    demonym: "Algerian",
    area: 2381741.0,
    gini: 35.3,
    timezones: ["UTC+01:00"],
    borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    nativeName: "الجزائر",
    numericCode: "012",
    currencies: [
      {
        code: "DZD",
        name: "Algerian dinar",
        symbol: "د.ج",
      },
    ],
    languages: [
      {
        iso639_1: "ar",
        iso639_2: "ara",
        name: "Arabic",
        nativeName: "العربية",
      },
    ],
    translations: {
      de: "Algerien",
      es: "Argelia",
      fr: "Algérie",
      ja: "アルジェリア",
      it: "Algeria",
      br: "Argélia",
      pt: "Argélia",
      nl: "Algerije",
      hr: "Alžir",
      fa: "الجزایر",
    },
    flag: "https://restcountries.eu/data/dza.svg",
    regionalBlocs: [
      {
        acronym: "AU",
        name: "African Union",
        otherAcronyms: [],
        otherNames: [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika",
        ],
      },
      {
        acronym: "AL",
        name: "Arab League",
        otherAcronyms: [],
        otherNames: [
          "جامعة الدول العربية",
          "Jāmiʻat ad-Duwal al-ʻArabīyah",
          "League of Arab States",
        ],
      },
    ],
    cioc: "ALG",
  },
  {
    name: "American Samoa",
    topLevelDomain: [".as"],
    alpha2Code: "AS",
    alpha3Code: "ASM",
    callingCodes: ["1684"],
    capital: "Pago Pago",
    altSpellings: ["AS", "Amerika Sāmoa", "Amelika Sāmoa", "Sāmoa Amelika"],
    region: "Oceania",
    subregion: "Polynesia",
    population: 57100,
    latlng: [-14.33333333, -170.0],
    demonym: "American Samoan",
    area: 199.0,
    gini: null,
    timezones: ["UTC-11:00"],
    borders: [],
    nativeName: "American Samoa",
    numericCode: "016",
    currencies: [
      {
        code: "USD",
        name: "United State Dollar",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
      {
        iso639_1: "sm",
        iso639_2: "smo",
        name: "Samoan",
        nativeName: "gagana fa'a Samoa",
      },
    ],
    translations: {
      de: "Amerikanisch-Samoa",
      es: "Samoa Americana",
      fr: "Samoa américaines",
      ja: "アメリカ領サモア",
      it: "Samoa Americane",
      br: "Samoa Americana",
      pt: "Samoa Americana",
      nl: "Amerikaans Samoa",
      hr: "Američka Samoa",
      fa: "ساموآی آمریکا",
    },
    flag: "https://restcountries.eu/data/asm.svg",
    regionalBlocs: [],
    cioc: "ASA",
  },
  {
    name: "Andorra",
    topLevelDomain: [".ad"],
    alpha2Code: "AD",
    alpha3Code: "AND",
    callingCodes: ["376"],
    capital: "Andorra la Vella",
    altSpellings: ["AD", "Principality of Andorra", "Principat d'Andorra"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 78014,
    latlng: [42.5, 1.5],
    demonym: "Andorran",
    area: 468.0,
    gini: null,
    timezones: ["UTC+01:00"],
    borders: ["FRA", "ESP"],
    nativeName: "Andorra",
    numericCode: "020",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€",
      },
    ],
    languages: [
      {
        iso639_1: "ca",
        iso639_2: "cat",
        name: "Catalan",
        nativeName: "català",
      },
    ],
    translations: {
      de: "Andorra",
      es: "Andorra",
      fr: "Andorre",
      ja: "アンドラ",
      it: "Andorra",
      br: "Andorra",
      pt: "Andorra",
      nl: "Andorra",
      hr: "Andora",
      fa: "آندورا",
    },
    flag: "https://restcountries.eu/data/and.svg",
    regionalBlocs: [],
    cioc: "AND",
  },
  {
    name: "Angola",
    topLevelDomain: [".ao"],
    alpha2Code: "AO",
    alpha3Code: "AGO",
    callingCodes: ["244"],
    capital: "Luanda",
    altSpellings: ["AO", "República de Angola", "ʁɛpublika de an'ɡɔla"],
    region: "Africa",
    subregion: "Middle Africa",
    population: 25868000,
    latlng: [-12.5, 18.5],
    demonym: "Angolan",
    area: 1246700.0,
    gini: 58.6,
    timezones: ["UTC+01:00"],
    borders: ["COG", "COD", "ZMB", "NAM"],
    nativeName: "Angola",
    numericCode: "024",
    currencies: [
      {
        code: "AOA",
        name: "Angolan kwanza",
        symbol: "Kz",
      },
    ],
    languages: [
      {
        iso639_1: "pt",
        iso639_2: "por",
        name: "Portuguese",
        nativeName: "Português",
      },
    ],
    translations: {
      de: "Angola",
      es: "Angola",
      fr: "Angola",
      ja: "アンゴラ",
      it: "Angola",
      br: "Angola",
      pt: "Angola",
      nl: "Angola",
      hr: "Angola",
      fa: "آنگولا",
    },
    flag: "https://restcountries.eu/data/ago.svg",
    regionalBlocs: [
      {
        acronym: "AU",
        name: "African Union",
        otherAcronyms: [],
        otherNames: [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika",
        ],
      },
    ],
    cioc: "ANG",
  },
  {
    name: "Anguilla",
    topLevelDomain: [".ai"],
    alpha2Code: "AI",
    alpha3Code: "AIA",
    callingCodes: ["1264"],
    capital: "The Valley",
    altSpellings: ["AI"],
    region: "Americas",
    subregion: "Caribbean",
    population: 13452,
    latlng: [18.25, -63.16666666],
    demonym: "Anguillian",
    area: 91.0,
    gini: null,
    timezones: ["UTC-04:00"],
    borders: [],
    nativeName: "Anguilla",
    numericCode: "660",
    currencies: [
      {
        code: "XCD",
        name: "East Caribbean dollar",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
    ],
    translations: {
      de: "Anguilla",
      es: "Anguilla",
      fr: "Anguilla",
      ja: "アンギラ",
      it: "Anguilla",
      br: "Anguila",
      pt: "Anguila",
      nl: "Anguilla",
      hr: "Angvila",
      fa: "آنگویلا",
    },
    flag: "https://restcountries.eu/data/aia.svg",
    regionalBlocs: [],
    cioc: "",
  },
];

export default countries;

/**
 * SOURCE UNIQUE des informations variables du site.
 *
 * Tout ce qui est entre [crochets] est un placeholder visible sur le site :
 * remplacez-le par l'information réelle (voir TODO.md).
 * Ne mettez ici que des informations vraies et vérifiables : pas d'avis inventés,
 * pas de chiffres, pas de garanties ou de délais que vous ne pouvez pas tenir.
 * (Les données fictives du mode démo sont à part, dans demo.ts.)
 */

import { demo } from './demo';

export type Lang = 'fr' | 'en' | 'ar';
export type Localized = Record<Lang, string>;

export interface Service {
  id: string;
  icon: string;
  title: Localized;
  text: Localized;
  /** Prix indicatif affiché sur la carte. '' = placeholder visible. Valeurs actuelles À VÉRIFIER. */
  price: Localized;
}

export interface Zone {
  /** Nom affiché dans chaque langue. */
  name: Localized;
  /** Slug de la page quartier dédiée, si elle existe. */
  page?: 'gueliz' | 'medina' | 'hivernage' | 'palmeraie';
}

export interface OpeningHours {
  /** Jours schema.org : Monday, Tuesday… */
  days: string[];
  opens: string; // "08:00"
  closes: string; // "20:00"
}

export interface Review {
  /** Prénom + initiale, tel qu'affiché sur Google. */
  author: string;
  zone: string;
  /** Note sur 5. */
  rating: number;
  /** Langue dans laquelle l'avis a été écrit (il est affiché tel quel). */
  lang: Lang;
  text: string;
}

const baseSite = {
  name: 'Serrurerie Marrakech',

  /** URL de production, sans slash final. Sert aux canoniques, au sitemap, à Open Graph. */
  url: 'https://serrurier-marrakech.ma',

  phone: {
    display: '06 04 01 94 95',
    international: '+212 6 04 01 94 95',
    e164: '+212604019495',
  },

  whatsapp: {
    number: '212604019495',
    /** Message pré-rempli. {zone} est remplacé par le quartier quand il est connu. */
    message: {
      fr: "Bonjour, j'ai un problème de serrure à {zone}",
      en: 'Hello, I have a lock problem in {zone}',
      ar: 'السلام عليكم، عندي مشكل فالقفل ديال الباب ف {zone}',
    } satisfies Localized,
    /** Valeur de {zone} quand le visiteur n'a pas choisi de quartier. */
    zoneFallback: { fr: '[quartier]', en: '[neighbourhood]', ar: '[الحي]' } satisfies Localized,
  },

  /** Disponibilité affichée dans le hero. À VÉRIFIER : c'est un engagement affiché aux clients. */
  availability: {
    fr: 'Disponible 7j/7, de 7h à 23h',
    en: 'Available 7 days a week, 7 am – 11 pm',
    ar: 'متوفرون طيلة أيام الأسبوع، من 7 صباحًا إلى 11 ليلًا',
  } satisfies Localized,

  /** Délai d'intervention affiché dans le hero. À VÉRIFIER : c'est un engagement affiché aux clients. */
  responseTime: {
    fr: 'Sur place en 30 à 45 min en moyenne',
    en: 'On site in 30–45 min on average',
    ar: 'نصل في 30 إلى 45 دقيقة في المتوسط',
  } satisfies Localized,

  hours: {
    /** Texte affiché dans le pied de page. À VÉRIFIER, et garder cohérent avec `availability`. */
    label: {
      fr: 'Tous les jours, 7h – 23h',
      en: 'Every day, 7 am – 11 pm',
      ar: 'كل يوم، من 7 صباحًا إلى 11 ليلًا',
    } satisfies Localized,
    /** Horaires pour Google (JSON-LD). Doivent correspondre à `label` et à la fiche Google. */
    schema: [
      {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '23:00',
      },
    ] as OpeningHours[],
  },

  /** Bandeau de confiance sous le hero. */
  trust: [
    {
      icon: 'tag',
      text: {
        fr: 'Prix annoncé au téléphone, avant tout déplacement',
        en: 'Price given over the phone, before we travel',
        ar: 'نُخبرك بالسعر عبر الهاتف قبل التنقل',
      },
    },
    {
      icon: 'door-open',
      text: {
        fr: 'Ouverture sans casse quand c’est possible',
        en: 'Damage-free opening whenever possible',
        ar: 'فتح الباب دون كسر كلما أمكن ذلك',
      },
    },
    {
      icon: 'map-pin',
      text: {
        fr: 'Guéliz, Médina, Hivernage, Palmeraie et d’autres quartiers',
        en: 'Guéliz, Medina, Hivernage, Palmeraie and more',
        ar: 'جليز، المدينة القديمة، الحي الشتوي، النخيل وأحياء أخرى',
      },
    },
  ] satisfies { icon: string; text: Localized }[],

  services: [
    {
      id: 'porte-simple',
      icon: 'door-open',
      title: { fr: 'Porte simple', en: 'Standard door', ar: 'باب عادي' },
      text: {
        fr: 'Porte claquée (clé restée à l’intérieur) ou verrouillée (perte de clé, crochetage ou perçage) : on ouvre en préservant la serrure dès que possible.',
        en: 'Door slammed shut (keys left inside) or locked (lost key, picking or drilling): we open it while preserving the lock whenever possible.',
        ar: 'باب مغلق (مفاتيح بقيت بالداخل) أو مقفل (ضياع المفتاح، فتح بدون مفتاح أو ثقب): نفتحه مع الحفاظ على القفل كلما أمكن.',
      },
      price: {
        fr: 'Claquée : 150 DH – 300 DH · Verrouillée : 250 DH – 400 DH',
        en: 'Slammed shut: 150 MAD – 300 MAD · Locked: 250 MAD – 400 MAD',
        ar: 'مغلق: 150 – 300 درهم · مقفل: 250 – 400 درهم',
      },
    },
    {
      id: 'porte-blindee',
      icon: 'key',
      title: { fr: 'Porte blindée', en: 'Armored door', ar: 'باب مصفح' },
      text: {
        fr: 'Porte de sécurité claquée ou verrouillée : intervention adaptée aux serrures multipoints et blindées.',
        en: 'Security door slammed shut or locked: handled with multi-point and armored lock expertise.',
        ar: 'باب أمني مغلق أو مقفل: تدخل مناسب للأقفال المتعددة النقاط والمصفحة.',
      },
      price: {
        fr: 'Claquée : 300 DH – 500 DH · Verrouillée : 450 DH – 800 DH+',
        en: 'Slammed shut: 300 MAD – 500 MAD · Locked: 450 MAD – 800 MAD+',
        ar: 'مغلق: 300 – 500 درهم · مقفل: 450 درهم فما فوق',
      },
    },
    {
      id: 'changement',
      icon: 'lock',
      title: { fr: 'Changement de serrure', en: 'Lock replacement', ar: 'تغيير القفل' },
      text: {
        fr: 'Remplacement du cylindre ou de la serrure complète, après une perte de clés ou un déménagement.',
        en: 'New cylinder or complete lock after lost keys or moving in.',
        ar: 'تغيير الأسطوانة أو القفل كاملًا بعد ضياع المفاتيح أو الانتقال إلى مسكن جديد.',
      },
      price: { fr: 'à partir de 350 DH, serrure comprise', en: 'from 350 MAD, lock included', ar: 'ابتداءً من 350 درهم، مع القفل' },
    },
    {
      id: 'cle-cassee',
      icon: 'key-broken',
      title: { fr: 'Clé cassée', en: 'Broken key', ar: 'مفتاح مكسور' },
      text: {
        fr: 'Extraction du morceau resté dans la serrure, puis remise en service ou remplacement.',
        en: 'We extract the piece stuck in the lock, then get it working again or replace it.',
        ar: 'نستخرج الجزء العالق داخل القفل، ثم نصلحه أو نستبدله.',
      },
      price: { fr: 'à partir de 200 DH', en: 'from 200 MAD', ar: 'ابتداءً من 200 درهم' },
    },
    {
      id: 'reparation',
      icon: 'wrench',
      title: { fr: 'Réparation de serrure', en: 'Lock repair', ar: 'إصلاح الأقفال' },
      text: {
        fr: 'Serrure qui force, clé qui tourne mal, pêne bloqué : diagnostic et réparation sur place.',
        en: 'Stiff lock, key that won’t turn, jammed bolt: diagnosed and repaired on site.',
        ar: 'قفل صعب، مفتاح لا يدور جيدًا، لسان عالق: تشخيص وإصلاح في عين المكان.',
      },
      price: { fr: 'à partir de 200 DH', en: 'from 200 MAD', ar: 'ابتداءً من 200 درهم' },
    },
    {
      id: 'cambriolage',
      icon: 'shield',
      title: { fr: 'Après cambriolage', en: 'After a break-in', ar: 'بعد السرقة' },
      text: {
        fr: 'Sécurisation de la porte forcée et remplacement de la serrure endommagée.',
        en: 'We secure the forced door and replace the damaged lock.',
        ar: 'تأمين الباب المكسور وتغيير القفل المتضرر.',
      },
      price: { fr: 'sur devis, après diagnostic', en: 'quote after inspection', ar: 'حسب التقدير بعد المعاينة' },
    },
    {
      id: 'electronique',
      icon: 'keypad',
      title: { fr: 'Serrures électroniques', en: 'Electronic locks', ar: 'الأقفال الإلكترونية' },
      text: {
        fr: 'Installation et dépannage de serrures à code, à badge ou connectées.',
        en: 'Installation and repair of keypad, card and smart locks.',
        ar: 'تركيب وإصلاح الأقفال بالرمز أو بالبطاقة أو الأقفال الذكية.',
      },
      price: { fr: 'à partir de 400 DH', en: 'from 400 MAD', ar: 'ابتداءً من 400 درهم' },
    },
    {
      id: 'voiture',
      icon: 'car',
      title: { fr: 'Ouverture de voiture', en: 'Car opening', ar: 'فتح السيارات' },
      text: {
        fr: 'Clés enfermées dans le véhicule : ouverture de la portière sur place.',
        en: 'Keys locked in the car: we open the door where you are.',
        ar: 'مفاتيح مغلقة داخل السيارة: نفتح الباب في مكانك.',
      },
      price: { fr: '300 DH – 600 DH', en: '300 MAD – 600 MAD', ar: '300 – 600 درهم' },
    },
  ] satisfies Service[],

  zones: [
    { name: { fr: 'Guéliz', en: 'Guéliz', ar: 'جليز' }, page: 'gueliz' },
    { name: { fr: 'Hivernage', en: 'Hivernage', ar: 'الحي الشتوي' }, page: 'hivernage' },
    { name: { fr: 'Médina', en: 'Medina', ar: 'المدينة القديمة' }, page: 'medina' },
    { name: { fr: 'Palmeraie', en: 'Palmeraie', ar: 'النخيل' }, page: 'palmeraie' },
    { name: { fr: 'Semlalia', en: 'Semlalia', ar: 'السملالية' } },
    { name: { fr: 'Daoudiate', en: 'Daoudiate', ar: 'الداوديات' } },
    { name: { fr: 'Massira', en: 'Massira', ar: 'المسيرة' } },
    { name: { fr: 'Targa', en: 'Targa', ar: 'تاركة' } },
    { name: { fr: 'Sidi Youssef Ben Ali', en: 'Sidi Youssef Ben Ali', ar: 'سيدي يوسف بن علي' } },
    { name: { fr: "M'hamid", en: "M'hamid", ar: 'المحاميد' } },
    { name: { fr: 'Azli', en: 'Azli', ar: 'أزلي' } },
    { name: { fr: 'Agdal', en: 'Agdal', ar: 'أكدال' } },
  ] satisfies Zone[],

  links: {
    /** Fiche Google Business Profile (lien public). */
    googleBusiness: '',
    /** Lien Google Maps vers l'emplacement ou la zone. */
    googleMaps: '',
  },

  /** Mentions légales : informations à fournir. */
  legal: {
    owner: '[Nom du responsable]',
    status: '[Statut juridique : auto-entrepreneur, SARL…]',
    ice: '[ICE]',
    address: '[Adresse]',
    email: '[E-mail de contact]',
    host: '[Hébergeur du site]',
  },

  /**
   * Avis clients RÉELS uniquement, recopiés de la fiche Google avec l'accord des auteurs.
   * Vide = bloc TODO + lien vers la fiche Google.
   */
  reviews: [] as Review[],

  /** Mesure d'audience. Plausible est désactivé tant que `domain` est vide. */
  analytics: {
    plausible: {
      domain: '',
      src: 'https://plausible.io/js/script.js',
    },
  },
};

/**
 * Mode démo (`--mode demo`, voir .env.demo) : remplace les placeholders par les
 * données FICTIVES de demo.ts, affiche un bandeau et désindexe les pages.
 * `import.meta.env` n'existe pas quand astro.config.mjs charge ce fichier : d'où le `?.`.
 */
export const DEMO = import.meta.env?.PUBLIC_DEMO === '1';

export const site: typeof baseSite = DEMO
  ? {
      ...baseSite,
      availability: demo.availability,
      responseTime: demo.responseTime,
      hours: demo.hours,
      services: baseSite.services.map((s) => ({ ...s, price: demo.prices[s.id as keyof typeof demo.prices] ?? s.price })),
      links: demo.links,
      legal: demo.legal,
      reviews: demo.reviews,
    }
  : baseSite;

export const LANGS: Lang[] = ['fr', 'en', 'ar'];
export const DEFAULT_LANG: Lang = 'fr';

/** Vrai si la valeur est un placeholder à compléter. */
export const isPlaceholder = (v: string | null | undefined) => !v || /^\[.*\]$/.test(v.trim());

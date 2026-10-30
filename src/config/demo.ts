/**
 * DONNÉES FICTIVES — mode démo uniquement (`npm run dev:demo` / `npm run build:demo`).
 *
 * Servent à voir le site « rempli » avant d'avoir les vraies informations.
 * En mode démo, chaque page affiche un bandeau « données fictives » et porte
 * <meta name="robots" content="noindex">. Ne jamais recopier ces valeurs dans
 * site.ts sans les remplacer par des informations réelles : avis, prix, prénom,
 * délais et mentions légales ci-dessous sont INVENTÉS.
 */

import type { Lang, Localized, OpeningHours, Review } from './site';

export const demo = {
  availability: {
    fr: 'Disponible 7j/7, de 7h à 23h',
    en: 'Available 7 days a week, 7 am – 11 pm',
    ar: 'متوفرون طيلة أيام الأسبوع، من 7 صباحًا إلى 11 ليلًا',
  } satisfies Localized,

  responseTime: {
    fr: 'Sur place en 30 à 45 min en moyenne',
    en: 'On site in 30–45 min on average',
    ar: 'نصل في 30 إلى 45 دقيقة في المتوسط',
  } satisfies Localized,

  hours: {
    label: {
      fr: 'Tous les jours, 7h – 23h',
      en: 'Every day, 7 am – 11 pm',
      ar: 'كل يوم، من 7 صباحًا إلى 11 ليلًا',
    } satisfies Localized,
    schema: [
      {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '23:00',
      },
    ] satisfies OpeningHours[],
  },

  /** Prix indicatifs par identifiant de service : uniquement ceux encore provisoires dans site.ts
   * (porte-simple, porte-blindée et voiture ont désormais de vrais prix vérifiés). */
  prices: {
    changement: { fr: 'à partir de 350 DH, serrure comprise', en: 'from 350 MAD, lock included', ar: 'ابتداءً من 350 درهم، مع القفل' },
    'cle-cassee': { fr: 'à partir de 200 DH', en: 'from 200 MAD', ar: 'ابتداءً من 200 درهم' },
    reparation: { fr: 'à partir de 200 DH', en: 'from 200 MAD', ar: 'ابتداءً من 200 درهم' },
    cambriolage: { fr: 'sur devis, après diagnostic', en: 'quote after inspection', ar: 'حسب التقدير بعد المعاينة' },
    electronique: { fr: 'à partir de 400 DH', en: 'from 400 MAD', ar: 'ابتداءً من 400 درهم' },
  } satisfies Record<string, Localized>,

  links: {
    googleBusiness: 'https://maps.google.com/?q=Marrakech',
    googleMaps: 'https://maps.google.com/?q=Marrakech',
  },

  legal: {
    owner: 'Youssef A. (fictif)',
    status: 'Auto-entrepreneur (fictif)',
    ice: '000000000000000 (fictif)',
    address: 'Guéliz, Marrakech (fictif)',
    email: 'contact@example.com',
    host: 'Hébergeur à définir (fictif)',
  },

  /** Avis INVENTÉS : ne servent qu'à montrer la mise en page. */
  reviews: [
    {
      author: 'Karim B.',
      zone: 'Guéliz',
      rating: 5,
      lang: 'fr',
      text: 'Porte claquée un dimanche soir avec les clés à l’intérieur. Prix donné au téléphone, respecté sur place, et la serrure n’a pas été abîmée.',
    },
    {
      author: 'Sophie L.',
      zone: 'Médina',
      rating: 5,
      lang: 'fr',
      text: 'Riad au fond d’un derb : il a trouvé grâce à la localisation WhatsApp. Vieille serrure réparée au lieu d’être changée.',
    },
    {
      author: 'Hamza E.',
      zone: 'Palmeraie',
      rating: 4,
      lang: 'fr',
      text: 'Trois cylindres changés après une perte de clés. Un peu d’attente à cause de la distance, mais travail propre.',
    },
    {
      author: 'Fatima Z.',
      zone: 'Hivernage',
      rating: 5,
      lang: 'fr',
      text: 'Clé cassée dans la serrure un matin avant le travail. Extraite en quelques minutes sans avoir à tout changer. Rapide et honnête sur le prix.',
    },
    {
      author: 'David M.',
      zone: 'Agdal',
      rating: 5,
      lang: 'en',
      text: 'Locked my keys in the car on a Friday night. He was there in about 30 minutes and opened it without a scratch on the door. Fair price, told me upfront on the phone.',
    },
    {
      author: 'ياسين ب.',
      zone: 'Targa',
      rating: 5,
      lang: 'ar',
      text: 'قفل إلكتروني بالرمز توقف عن العمل. تم تشخيص المشكل وتركيب قفل جديد بالمقاس في نفس اليوم. تعامل محترم وسعر واضح من البداية.',
    },
  ] satisfies Review[],

  /** Réponses de FAQ fictives, dans l'ordre de faq.items. */
  faqAnswers: {
    fr: [
      'Le prix dépend de la porte et de la serrure. Pour une porte claquée, comptez à partir de 250 DH. Le prix exact vous est annoncé au téléphone, avant le déplacement.',
      'Oui, jusqu’à 23h, tous les jours. Un supplément de 100 DH s’applique après 21h.',
      'En moyenne 30 à 45 minutes à Guéliz, Hivernage et dans la Médina, un peu plus pour la Palmeraie.',
      'Oui, pour la plupart des voitures récentes, sans abîmer la portière.',
      'Oui : installation et dépannage des serrures à code, à badge et connectées des marques courantes.',
      'En espèces ou par virement. Une facture est remise sur demande.',
    ],
    en: [
      'The price depends on the door and the lock. For a door slammed shut, expect from 250 MAD. We tell you the exact price over the phone, before we travel.',
      'Yes, until 11 pm, every day. A 100 MAD surcharge applies after 9 pm.',
      'On average 30–45 minutes in Guéliz, Hivernage and the Medina, a little longer for the Palmeraie.',
      'Yes, for most recent cars, without damaging the door.',
      'Yes: installation and repair of keypad, card and smart locks from common brands.',
      'Cash or bank transfer. An invoice is available on request.',
    ],
    ar: [
      'يختلف السعر حسب الباب والقفل. بالنسبة لباب أُغلق، ابتداءً من 250 درهم. نخبرك بالسعر الدقيق عبر الهاتف قبل التنقل.',
      'نعم، حتى الساعة 11 ليلًا، كل يوم. تُضاف 100 درهم بعد الساعة 9 ليلًا.',
      'في المتوسط من 30 إلى 45 دقيقة في جليز والحي الشتوي والمدينة القديمة، وأكثر قليلًا بالنسبة للنخيل.',
      'نعم، بالنسبة لأغلب السيارات الحديثة، دون إتلاف الباب.',
      'نعم: تركيب وإصلاح الأقفال بالرمز وبالبطاقة والأقفال الذكية من العلامات الشائعة.',
      'نقدًا أو بالتحويل البنكي. تُسلَّم فاتورة عند الطلب.',
    ],
  } satisfies Record<Lang, string[]>,
};

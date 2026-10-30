// Contenu propre à chaque page quartier. Chaque texte est écrit pour le quartier :
// ne pas dupliquer d'un quartier à l'autre (Google pénalise les pages copiées).
// À faire relire par le serrurier : ces textes décrivent son terrain.

import type { Lang } from '../config/site';
import type { AreaSlug } from './utils';

export interface AreaContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  section: { title: string; paragraphs: string[] };
  access: string[];
  /** Identifiants de services (site.services[].id) mis en avant pour ce quartier. */
  services: string[];
}

export const areas: Record<AreaSlug, Record<Lang, AreaContent>> = {
  gueliz: {
    fr: {
      title: 'Serrurier à Guéliz, Marrakech – Porte d’appartement claquée',
      description:
        'Serrurier à Guéliz : porte d’appartement claquée, porte blindée, cylindre à changer, bureaux et commerces. Prix annoncé au téléphone. 06 04 01 94 95.',
      h1: 'Serrurier à Guéliz',
      intro:
        'Guéliz, c’est la ville nouvelle : des immeubles d’appartements, des bureaux et des commerces autour de l’avenue Mohammed V. La plupart des appels viennent de portes d’appartement claquées et de cylindres à remplacer après une perte de clés.',
      section: {
        title: 'Portes d’appartement et serrures de sécurité',
        paragraphs: [
          'Dans les immeubles, les portes d’entrée d’appartement sont souvent blindées ou équipées d’une serrure multipoints. Une porte simplement claquée, sans tour de clé, peut souvent s’ouvrir sans abîmer la serrure.',
          'Si la porte est fermée à clé, le serrurier vous explique les options et le prix avant de commencer. Pour les bureaux et les commerces, il intervient aussi sur les portes d’accès et les cylindres à remplacer après le départ d’un employé.',
        ],
      },
      access: [
        'Donnez le nom de l’immeuble ou de la résidence, l’étage et le numéro d’appartement.',
        'Précisez s’il y a un interphone, un code d’accès ou un concierge.',
        'Un repère proche (café, pharmacie, carrefour) aide à trouver l’entrée de l’immeuble.',
      ],
      services: ['porte-simple', 'changement', 'cle-cassee', 'electronique'],
    },
    en: {
      title: 'Locksmith in Guéliz, Marrakech – Locked out of your flat',
      description:
        'Locksmith in Guéliz: flat door slammed shut, security doors, cylinder replacement, offices and shops. Price given over the phone. +212 6 04 01 94 95.',
      h1: 'Locksmith in Guéliz',
      intro:
        'Guéliz is the new town: apartment buildings, offices and shops around Avenue Mohammed V. Most calls here are about flat doors slammed shut and cylinders to replace after lost keys.',
      section: {
        title: 'Flat doors and security locks',
        paragraphs: [
          'In apartment buildings, front doors are often reinforced or fitted with a multi-point lock. A door that has only been pulled shut, without turning the key, can often be opened without damaging the lock.',
          'If the door is locked with the key, the locksmith explains the options and the price before starting. For offices and shops, he also works on entrance doors and replaces cylinders after an employee leaves.',
        ],
      },
      access: [
        'Give the name of the building or residence, the floor and the flat number.',
        'Tell us if there is an intercom, an access code or a concierge.',
        'A nearby landmark (café, pharmacy, junction) helps find the building entrance.',
      ],
      services: ['porte-simple', 'changement', 'cle-cassee', 'electronique'],
    },
    ar: {
      title: 'صانع أقفال في جليز، مراكش – باب الشقة مغلق',
      description:
        'صانع أقفال في جليز: باب شقة أُغلق، أبواب مصفحة، تغيير الأسطوانة، مكاتب ومحلات. نخبرك بالسعر عبر الهاتف. 06 04 01 94 95.',
      h1: 'صانع أقفال في جليز',
      intro:
        'جليز هي المدينة الجديدة: عمارات سكنية ومكاتب ومحلات تجارية حول شارع محمد الخامس. أغلب الاتصالات هنا تخص أبواب شقق أُغلقت، وأسطوانات يجب تغييرها بعد ضياع المفاتيح.',
      section: {
        title: 'أبواب الشقق وأقفال الأمان',
        paragraphs: [
          'في العمارات، تكون أبواب الشقق غالبًا مصفحة أو مزودة بقفل متعدد النقاط. الباب الذي أُغلق فقط دون تدوير المفتاح يمكن فتحه في الغالب دون إتلاف القفل.',
          'إذا كان الباب مقفلًا بالمفتاح، يشرح لك صانع الأقفال الحلول الممكنة والسعر قبل البدء. وبالنسبة للمكاتب والمحلات، يتدخل أيضًا على أبواب الدخول ويغيّر الأسطوانات بعد مغادرة أحد الموظفين.',
        ],
      },
      access: [
        'أعطنا اسم العمارة أو الإقامة، والطابق ورقم الشقة.',
        'أخبرنا إن كان هناك جرس داخلي أو رمز دخول أو حارس.',
        'معلم قريب (مقهى، صيدلية، ملتقى طرق) يساعد على إيجاد مدخل العمارة.',
      ],
      services: ['porte-simple', 'changement', 'cle-cassee', 'electronique'],
    },
  },

  medina: {
    fr: {
      title: 'Serrurier dans la Médina de Marrakech – Portes de riad',
      description:
        'Serrurier dans la Médina de Marrakech : portes de riad en bois, serrures anciennes, clé cassée, accès à pied par les derbs. Prix annoncé au téléphone. 06 04 01 94 95.',
      h1: 'Serrurier dans la Médina',
      intro:
        'Dans la Médina, beaucoup de maisons et de riads donnent sur des ruelles étroites, les derbs, où les voitures ne passent pas. Le serrurier finit souvent le trajet à pied avec son matériel : bien décrire l’accès fait gagner du temps.',
      section: {
        title: 'Portes de riad et serrures anciennes',
        paragraphs: [
          'Les portes de riad sont souvent en bois massif, parfois anciennes, avec une serrure à grosse clé, des verrous, ou une serrure récente posée sur une porte traditionnelle. Sur ces portes, l’objectif est d’ouvrir sans abîmer le bois quand c’est possible.',
          'Une vieille serrure qui force ou une clé cassée dans le mécanisme se répare souvent sans changer la porte. Pour les maisons d’hôtes, le serrurier peut aussi remplacer les cylindres des chambres après une perte de clé.',
        ],
      },
      access: [
        'Donnez un repère connu : une place, une mosquée, une fontaine, une porte de la Médina ou le nom du riad.',
        'Envoyez votre localisation sur WhatsApp : dans les derbs, c’est souvent le plus simple.',
        'Si possible, quelqu’un peut venir chercher le serrurier au point de repère.',
      ],
      services: ['porte-simple', 'cle-cassee', 'reparation', 'changement'],
    },
    en: {
      title: 'Locksmith in Marrakech Medina – Riad doors',
      description:
        'Locksmith in Marrakech Medina: wooden riad doors, old locks, broken keys, access on foot through the derbs. Price given over the phone. +212 6 04 01 94 95.',
      h1: 'Locksmith in the Medina',
      intro:
        'In the Medina, many houses and riads open onto narrow alleys, the derbs, where cars cannot go. The locksmith often finishes the trip on foot with his tools, so a clear description of the way in saves time.',
      section: {
        title: 'Riad doors and old locks',
        paragraphs: [
          'Riad doors are often solid wood, sometimes old, with a large-key lock, bolts, or a modern lock fitted to a traditional door. On these doors the aim is to open them without damaging the wood whenever possible.',
          'An old lock that sticks or a key broken inside the mechanism can often be repaired without replacing the door. For guesthouses, the locksmith can also replace room cylinders after a key is lost.',
        ],
      },
      access: [
        'Give a well-known landmark: a square, a mosque, a fountain, a Medina gate or the name of the riad.',
        'Send your location on WhatsApp: in the derbs it is often the easiest way.',
        'If possible, someone can meet the locksmith at the landmark.',
      ],
      services: ['porte-simple', 'cle-cassee', 'reparation', 'changement'],
    },
    ar: {
      title: 'صانع أقفال في المدينة القديمة بمراكش – أبواب الرياضات',
      description:
        'صانع أقفال في المدينة القديمة بمراكش: أبواب رياضات خشبية، أقفال قديمة، مفاتيح مكسورة، وصول مشيًا عبر الدروب. نخبرك بالسعر عبر الهاتف. 06 04 01 94 95.',
      h1: 'صانع أقفال في المدينة القديمة',
      intro:
        'في المدينة القديمة، تطل منازل ورياضات كثيرة على أزقة ضيقة، هي الدروب، لا تدخلها السيارات. غالبًا ما يكمل صانع الأقفال الطريق مشيًا مع أدواته، لذلك فإن وصف الطريق بدقة يوفر الوقت.',
      section: {
        title: 'أبواب الرياضات والأقفال القديمة',
        paragraphs: [
          'أبواب الرياضات غالبًا من الخشب الصلب، وأحيانًا قديمة، بقفل ذي مفتاح كبير أو مزاليج، أو بقفل حديث رُكّب على باب تقليدي. الهدف مع هذه الأبواب هو فتحها دون إتلاف الخشب كلما أمكن.',
          'القفل القديم الصعب أو المفتاح المكسور داخل الآلية يمكن إصلاحه في الغالب دون تغيير الباب. وبالنسبة لدور الضيافة، يمكن لصانع الأقفال أيضًا تغيير أسطوانات الغرف بعد ضياع مفتاح.',
        ],
      },
      access: [
        'أعطنا معلمًا معروفًا: ساحة، مسجد، سقاية، باب من أبواب المدينة أو اسم الرياض.',
        'أرسل موقعك عبر واتساب: في الدروب، هذه غالبًا أسهل طريقة.',
        'إن أمكن، يمكن لأحدكم أن يلتقي بصانع الأقفال عند المعلم.',
      ],
      services: ['porte-simple', 'cle-cassee', 'reparation', 'changement'],
    },
  },

  hivernage: {
    fr: {
      title: 'Serrurier à l’Hivernage, Marrakech – Résidences et serrures électroniques',
      description:
        'Serrurier à l’Hivernage : villas, résidences avec gardien, serrures électroniques à code ou à badge, sécurisation après effraction. Prix annoncé au téléphone. 06 04 01 94 95.',
      h1: 'Serrurier à l’Hivernage',
      intro:
        'L’Hivernage est un quartier calme de villas, de résidences et d’hôtels, entre la Médina et Guéliz. On y trouve beaucoup de résidences avec gardien et de portes équipées de serrures électroniques ou de serrures de sécurité.',
      section: {
        title: 'Résidences sécurisées et serrures électroniques',
        paragraphs: [
          'Une serrure électronique peut bloquer pour une raison simple, comme des piles vides, un code oublié ou un badge perdu, ou à cause d’une panne. Au téléphone, donnez la marque et le modèle si vous les connaissez : le serrurier saura quoi apporter.',
          'Après une tentative d’effraction sur une villa ou un appartement, il sécurise d’abord la porte, puis remplace la serrure endommagée.',
        ],
      },
      access: [
        'Prévenez le gardien ou l’accueil de la résidence de l’arrivée du serrurier.',
        'Indiquez le nom de la résidence ou de la villa et le numéro de la porte.',
        'Pour une serrure électronique, notez la marque et le modèle (souvent visibles sur la serrure ou sur la facture).',
      ],
      services: ['electronique', 'porte-simple', 'cambriolage', 'changement'],
    },
    en: {
      title: 'Locksmith in Hivernage, Marrakech – Residences and electronic locks',
      description:
        'Locksmith in Hivernage: villas, gated residences, keypad and card locks, securing doors after a break-in. Price given over the phone. +212 6 04 01 94 95.',
      h1: 'Locksmith in Hivernage',
      intro:
        'Hivernage is a quiet area of villas, residences and hotels between the Medina and Guéliz. Many residences have a guard, and many doors are fitted with electronic or high-security locks.',
      section: {
        title: 'Gated residences and electronic locks',
        paragraphs: [
          'An electronic lock can stop working for a simple reason, such as flat batteries, a forgotten code or a lost card, or because of a fault. On the phone, give the brand and model if you know them so the locksmith brings the right equipment.',
          'After an attempted break-in at a villa or flat, he first secures the door, then replaces the damaged lock.',
        ],
      },
      access: [
        'Let the guard or the residence reception know the locksmith is coming.',
        'Give the name of the residence or villa and the door number.',
        'For an electronic lock, note the brand and model (often shown on the lock or the invoice).',
      ],
      services: ['electronique', 'porte-simple', 'cambriolage', 'changement'],
    },
    ar: {
      title: 'صانع أقفال في الحي الشتوي، مراكش – الإقامات والأقفال الإلكترونية',
      description:
        'صانع أقفال في الحي الشتوي: فيلات، إقامات بحراسة، أقفال إلكترونية بالرمز أو بالبطاقة، تأمين الأبواب بعد محاولة السرقة. نخبرك بالسعر عبر الهاتف. 06 04 01 94 95.',
      h1: 'صانع أقفال في الحي الشتوي',
      intro:
        'الحي الشتوي حي هادئ يضم فيلات وإقامات وفنادق، بين المدينة القديمة وجليز. فيه إقامات كثيرة بحارس، وأبواب مزودة بأقفال إلكترونية أو أقفال أمان.',
      section: {
        title: 'الإقامات المحروسة والأقفال الإلكترونية',
        paragraphs: [
          'قد يتوقف القفل الإلكتروني لسبب بسيط، مثل نفاد البطاريات أو نسيان الرمز أو ضياع البطاقة، أو بسبب عطل. عبر الهاتف، أعطنا العلامة والطراز إن كنت تعرفهما، حتى يحضر صانع الأقفال ما يلزم.',
          'بعد محاولة سرقة في فيلا أو شقة، يقوم أولًا بتأمين الباب، ثم يغيّر القفل المتضرر.',
        ],
      },
      access: [
        'أخبر الحارس أو استقبال الإقامة بقدوم صانع الأقفال.',
        'أعطنا اسم الإقامة أو الفيلا ورقم الباب.',
        'بالنسبة للقفل الإلكتروني، سجّل العلامة والطراز (غالبًا ما يكونان ظاهرين على القفل أو على الفاتورة).',
      ],
      services: ['electronique', 'porte-simple', 'cambriolage', 'changement'],
    },
  },

  palmeraie: {
    fr: {
      title: 'Serrurier à la Palmeraie, Marrakech – Villas et maisons d’hôtes',
      description:
        'Serrurier à la Palmeraie : villas, maisons d’hôtes, plusieurs portes à sécuriser, changement de cylindres après perte de clés. Prix annoncé au téléphone. 06 04 01 94 95.',
      h1: 'Serrurier à la Palmeraie',
      intro:
        'La Palmeraie s’étend au nord-est de Marrakech, avec de grandes propriétés, des villas et des maisons d’hôtes éloignées les unes des autres. Les adresses y sont parfois difficiles à trouver : la localisation précise compte autant que la description du problème.',
      section: {
        title: 'Villas avec plusieurs accès',
        paragraphs: [
          'Une villa a souvent plusieurs portes : entrée principale, portes de service, portes donnant sur le jardin. Après une perte de clés, il est souvent utile de changer plusieurs cylindres en une seule intervention. Le serrurier vous dit au téléphone ce qu’il faut prévoir.',
          'Le trajet est plus long que vers le centre-ville : demandez le délai au moment de l’appel.',
        ],
      },
      access: [
        'Envoyez votre position GPS sur WhatsApp : c’est le moyen le plus sûr de vous trouver.',
        'Indiquez le nom de la propriété ou de la maison d’hôtes, et la route ou le douar le plus proche.',
        'Précisez quelle porte est bloquée et par où le serrurier peut entrer sur la propriété.',
      ],
      services: ['porte-simple', 'changement', 'cambriolage', 'reparation'],
    },
    en: {
      title: 'Locksmith in the Palmeraie, Marrakech – Villas and guesthouses',
      description:
        'Locksmith in the Palmeraie: villas, guesthouses, several doors to secure, cylinder replacement after lost keys. Price given over the phone. +212 6 04 01 94 95.',
      h1: 'Locksmith in the Palmeraie',
      intro:
        'The Palmeraie stretches north-east of Marrakech, with large estates, villas and guesthouses spread far apart. Addresses can be hard to find, so an exact location matters as much as a description of the problem.',
      section: {
        title: 'Villas with several entrances',
        paragraphs: [
          'A villa often has several doors: the main entrance, service doors and doors onto the garden. After losing keys, it is often worth replacing several cylinders in a single visit. The locksmith tells you on the phone what to plan for.',
          'The journey is longer than to the city centre, so ask about the response time when you call.',
        ],
      },
      access: [
        'Send your GPS location on WhatsApp: it is the surest way to find you.',
        'Give the name of the property or guesthouse, and the nearest road or douar.',
        'Tell us which door is stuck and how the locksmith can get onto the property.',
      ],
      services: ['porte-simple', 'changement', 'cambriolage', 'reparation'],
    },
    ar: {
      title: 'صانع أقفال في النخيل، مراكش – الفيلات ودور الضيافة',
      description:
        'صانع أقفال في النخيل: فيلات، دور ضيافة، عدة أبواب يجب تأمينها، تغيير الأسطوانات بعد ضياع المفاتيح. نخبرك بالسعر عبر الهاتف. 06 04 01 94 95.',
      h1: 'صانع أقفال في النخيل',
      intro:
        'تمتد منطقة النخيل شمال شرق مراكش، وتضم ضيعات كبيرة وفيلات ودور ضيافة متباعدة. العناوين فيها صعبة أحيانًا، لذلك فإن الموقع الدقيق مهم بقدر وصف المشكلة.',
      section: {
        title: 'فيلات بمداخل متعددة',
        paragraphs: [
          'للفيلا غالبًا عدة أبواب: المدخل الرئيسي، أبواب الخدمة، وأبواب تطل على الحديقة. بعد ضياع المفاتيح، يكون من المفيد غالبًا تغيير عدة أسطوانات في تدخل واحد. يخبرك صانع الأقفال عبر الهاتف بما يجب توقعه.',
          'المسافة أطول مقارنة بوسط المدينة، لذا اسأل عن مدة الوصول عند الاتصال.',
        ],
      },
      access: [
        'أرسل موقعك عبر واتساب: إنها الطريقة الأضمن للعثور عليك.',
        'أعطنا اسم الضيعة أو دار الضيافة، وأقرب طريق أو دوار.',
        'حدد الباب المغلق، ومن أين يمكن لصانع الأقفال الدخول إلى الملكية.',
      ],
      services: ['porte-simple', 'changement', 'cambriolage', 'reparation'],
    },
  },
};

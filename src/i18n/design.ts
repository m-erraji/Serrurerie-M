import type { Lang } from '../config/site';

// Editorial copy for the redesign; business facts remain in config/site.ts.
const fr = {
  local: 'Votre serrurier à Marrakech', tagline: 'Serrurerie & sécurité',
  home: 'Accueil', expertise: 'Notre approche', menu: 'Ouvrir le menu', close: 'Fermer le menu',
  eyebrow: 'SERRURERIE · MARRAKECH', title: 'Votre porte s’ouvre.', accent: 'La sérénité revient.',
  intro: 'Une porte claquée, une clé perdue ou une serrure à remplacer ? Retrouvez l’accès à votre chez-vous, avec un prix annoncé avant le déplacement.',
  discover: 'Découvrir nos services', message: 'Parlons de votre besoin',
  imageAlt: 'Poignée et clé sur une porte en bois, baignées de lumière', imageNote: 'La sécurité commence à votre porte.',
  photoNote: 'Photographies d’illustration',
  serviceEyebrow: 'À CHAQUE PROBLÈME, SA SOLUTION', serviceTitle: 'Le bon geste pour chaque serrure.',
  request: 'Demander une intervention', moreServices: 'Voir les autres services', lessServices: 'Réduire la liste',
  quote: 'Sur devis', priceNote: 'Tarifs indicatifs. Le montant est confirmé avant le déplacement.',
  approachEyebrow: 'LE SENS DU TRAVAIL BIEN FAIT', approachTitle: 'Votre tranquillité, dans les moindres détails.',
  approachText: 'De la première prise de contact à la remise en service de votre porte, vous savez ce qui va être fait. Une solution adaptée à votre serrure, à votre lieu de vie et à votre besoin.',
  approachItems: ['Un prix expliqué avant le déplacement', 'Votre serrure préservée quand c’est possible', 'Un échange direct, par téléphone ou WhatsApp'],
  keyAlt: 'Clé insérée dans la serrure d’une porte blanche', smartAlt: 'Serrure électronique installée sur une porte en bois',
  stepsEyebrow: 'SIMPLE, DU PREMIER APPEL À L’OUVERTURE', stepsTitle: 'On s’occupe de la suite.',
  zonesEyebrow: 'PROCHE DE CHEZ VOUS', zonesTitle: 'Marrakech, quartier par quartier.',
  zonesText: 'Au cœur de la Médina, à Guéliz ou dans les quartiers alentour : indiquez votre adresse pour organiser votre intervention.',
  cityAlt: 'Détails de zellige et de stuc de l’architecture de Marrakech',
  faqEyebrow: 'TOUT SIMPLEMENT', faqTitle: 'Les réponses à vos questions.', faqText: 'Un doute sur votre serrure ? Décrivez-nous le problème, nous vous orientons.',
  contactEyebrow: 'FAISONS LE PREMIER PAS', contactTitle: 'Une porte fermée ?\nRestons en contact.',
  contactText: 'Dites-nous ce qui se passe et dans quel quartier vous êtes. Une photo de la serrure peut nous aider à comprendre votre besoin.',
  contactHint: 'Échange direct · Français, anglais et arabe', copyError: 'Copie indisponible. Vous pouvez sélectionner le numéro ci-dessus.',
  footerText: 'Ouverture de porte, dépannage et solutions de sécurité à Marrakech.', legal: 'Mentions légales', rights: 'Tous droits réservés.',
};
type Copy = typeof fr;
const en: Copy = {
  local: 'Your locksmith in Marrakech', tagline: 'Locksmith & security', home: 'Home', expertise: 'Our approach', menu: 'Open menu', close: 'Close menu',
  eyebrow: 'LOCKSMITH · MARRAKECH', title: 'Your door opens.', accent: 'Peace of mind returns.',
  intro: 'A slammed door, lost keys or a lock to replace? Get back into your home, with a price explained before we travel.',
  discover: 'Explore our services', message: 'Tell us what you need', imageAlt: 'Door handle and key on a sunlit wooden door', imageNote: 'Security starts at your door.', photoNote: 'Illustrative photography',
  serviceEyebrow: 'A SOLUTION FOR EVERY SITUATION', serviceTitle: 'The right approach to every lock.', request: 'Request a visit', moreServices: 'View more services', lessServices: 'Show fewer services', quote: 'On quotation', priceNote: 'Indicative prices. The amount is confirmed before we travel.',
  approachEyebrow: 'CARE IN EVERY DETAIL', approachTitle: 'Your peace of mind, down to the details.', approachText: 'From your first call to a working door, you know what to expect. A solution suited to your lock, your home and your needs.',
  approachItems: ['A price explained before we travel', 'Your lock preserved whenever possible', 'Direct contact by phone or WhatsApp'], keyAlt: 'Key inserted in the lock of a white door', smartAlt: 'Electronic lock on a wooden door',
  stepsEyebrow: 'STRAIGHTFORWARD, FROM CALL TO OPEN DOOR', stepsTitle: 'We take it from here.',
  zonesEyebrow: 'CLOSE TO HOME', zonesTitle: 'Marrakech, neighbourhood by neighbourhood.', zonesText: 'In the heart of the Medina, in Guéliz or nearby: share your address to arrange your visit.', cityAlt: 'Zellige tiles and carved plaster in Marrakech',
  faqEyebrow: 'GOOD TO KNOW', faqTitle: 'Your questions, answered.', faqText: 'Not sure what is wrong with your lock? Describe the problem and we will guide you.',
  contactEyebrow: 'LET’S GET STARTED', contactTitle: 'A closed door?\nLet’s stay in touch.', contactText: 'Tell us what happened and which neighbourhood you are in. A photo of the lock can help us understand your needs.', contactHint: 'Direct contact · French, English and Arabic', copyError: 'Copy unavailable. You can select the number above.',
  footerText: 'Door opening, lock repairs and security solutions in Marrakech.', legal: 'Legal notice', rights: 'All rights reserved.',
};
const ar: Copy = {
  local: 'خدمات الأقفال في مراكش', tagline: 'الأقفال والأمان', home: 'الرئيسية', expertise: 'طريقتنا', menu: 'فتح القائمة', close: 'إغلاق القائمة',
  eyebrow: 'الأقفال · مراكش', title: 'نفتح بابك.', accent: 'وتعود راحة بالك.',
  intro: 'باب مغلق، مفتاح ضائع أو قفل يحتاج إلى التغيير؟ نساعدك على العودة إلى بيتك، مع توضيح السعر قبل التنقل.',
  discover: 'اكتشف خدماتنا', message: 'أخبرنا بما تحتاج', imageAlt: 'مقبض ومفتاح على باب خشبي مضاء بالشمس', imageNote: 'الأمان يبدأ من بابك.', photoNote: 'صور توضيحية',
  serviceEyebrow: 'لكل مشكلة حل', serviceTitle: 'الحل المناسب لكل قفل.', request: 'اطلب تدخلاً', moreServices: 'عرض المزيد من الخدمات', lessServices: 'عرض أقل', quote: 'حسب التقدير', priceNote: 'أسعار تقريبية. يتم تأكيد المبلغ قبل التنقل.',
  approachEyebrow: 'عناية بكل التفاصيل', approachTitle: 'راحة بالك في أدق التفاصيل.', approachText: 'من أول اتصال إلى إصلاح بابك، نوضح لك ما سنقوم به. حل يناسب قفلك ومنزلك واحتياجاتك.',
  approachItems: ['توضيح السعر قبل التنقل', 'الحفاظ على قفلك كلما أمكن', 'تواصل مباشر بالهاتف أو واتساب'], keyAlt: 'مفتاح داخل قفل باب أبيض', smartAlt: 'قفل إلكتروني على باب خشبي',
  stepsEyebrow: 'خطوات بسيطة من الاتصال إلى فتح الباب', stepsTitle: 'نعتني بالباقي.', zonesEyebrow: 'بالقرب منك', zonesTitle: 'مراكش، حيّاً بحيّ.', zonesText: 'في قلب المدينة القديمة أو جليز أو الأحياء المجاورة: أرسل عنوانك لتنظيم التدخل.', cityAlt: 'تفاصيل الزليج والجص المنحوت في مراكش',
  faqEyebrow: 'بكل وضوح', faqTitle: 'أجوبة عن أسئلتك.', faqText: 'لست متأكداً من مشكلة قفلك؟ صف لنا ما يحدث وسنرشدك.',
  contactEyebrow: 'لنبدأ بالتواصل', contactTitle: 'باب مغلق؟\nلنبقَ على تواصل.', contactText: 'أخبرنا بما حدث والحي الذي تتواجد فيه. صورة القفل قد تساعدنا على فهم احتياجاتك.', contactHint: 'تواصل مباشر · الفرنسية والإنجليزية والعربية', copyError: 'النسخ غير متاح. يمكنك تحديد الرقم أعلاه.',
  footerText: 'فتح الأبواب وإصلاح الأقفال وحلول الأمان في مراكش.', legal: 'البيانات القانونية', rights: 'جميع الحقوق محفوظة.',
};
export const design: Record<Lang, Copy> = { fr, en, ar };

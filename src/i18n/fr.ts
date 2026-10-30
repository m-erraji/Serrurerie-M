// Textes d'interface en français (langue de référence : les autres fichiers suivent ce type).
// Les informations variables (téléphone, horaires, délais, zones, services, prix) sont dans src/config/site.ts.

export const fr = {
  langName: 'Français',
  ogLocale: 'fr_MA',

  meta: {
    homeTitle: 'Serrurier à Marrakech – Ouverture de porte, changement de serrure',
    homeDescription:
      'Serrurier à domicile à Marrakech : ouverture de porte, clé cassée, changement de serrure, voiture. Prix annoncé au téléphone avant déplacement. Appelez le 06 04 01 94 95.',
    legalTitle: 'Mentions légales – Serrurerie Marrakech',
    legalDescription: 'Mentions légales du site Serrurerie Marrakech.',
  },

  a11y: {
    skip: 'Aller au contenu',
    home: 'Serrurerie Marrakech, accueil',
    language: 'Changer de langue',
    sections: 'Sections de la page',
  },

  header: {
    call: 'Appeler',
  },

  hero: {
    title: 'Porte bloquée ? On vous ouvre.',
    callNow: 'Appeler maintenant',
    whatsapp: 'Écrire sur WhatsApp',
  },

  trust: { title: 'Nos engagements' },

  services: {
    title: 'Nos services',
    intro: 'Un seul appel pour décrire le problème : on vous dit si on peut intervenir et à quel prix.',
    pricePrefix: 'Prix indicatif :',
    pricePlaceholder: '[Prix à compléter]',
  },

  steps: {
    title: 'Comment ça se passe',
    items: [
      { title: 'Vous appelez', text: 'Vous décrivez la porte, la serrure et votre quartier. On vous annonce le prix.' },
      { title: 'On se déplace', text: 'Le serrurier vient à votre adresse avec le matériel adapté.' },
      { title: 'Porte réparée', text: 'La porte est ouverte ou la serrure remplacée, sur place.' },
    ],
  },

  reviews: {
    title: 'Avis clients',
    todo: 'TODO : aucun avis n’est affiché pour l’instant. Les avis réels de la fiche Google seront ajoutés ici.',
    rating: (n: number) => `Note : ${n} sur 5`,
  },

  zones: {
    title: 'Zones d’intervention',
    hint: 'Touchez votre quartier pour nous écrire sur WhatsApp.',
    notListed: 'Votre quartier n’est pas listé ? Appelez-nous.',
    pagesTitle: 'Serrurier par quartier',
    pageLink: (zone: string) => `Serrurier à ${zone}`,
  },

  faq: {
    title: 'Questions fréquentes',
    items: [
      { q: 'Combien coûte une intervention ?', a: 'Le prix dépend de la porte et de la serrure. Pour une porte claquée, comptez à partir de 250 DH. Le prix exact vous est annoncé au téléphone, avant le déplacement.' },
      { q: 'Intervenez-vous la nuit ?', a: 'Oui, jusqu’à 23h, tous les jours. Un supplément de 100 DH s’applique après 21h.' },
      { q: 'En combien de temps arrivez-vous ?', a: 'En moyenne 30 à 45 minutes à Guéliz, Hivernage et dans la Médina, un peu plus pour la Palmeraie.' },
      { q: 'Ouvrez-vous les voitures ?', a: 'Oui, pour la plupart des voitures récentes, sans abîmer la portière.' },
      { q: 'Travaillez-vous sur les serrures électroniques ?', a: 'Oui : installation et dépannage des serrures à code, à badge et connectées des marques courantes.' },
      { q: 'Comment peut-on payer ?', a: 'En espèces ou par virement. Une facture est remise sur demande.' },
    ],
  },

  contact: {
    title: 'Contact',
    lead: 'Appelez ou écrivez-nous, on vous répond directement.',
    international: 'Depuis l’étranger :',
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    copy: 'Copier le numéro',
    copied: 'Numéro copié',
  },

  footer: {
    hours: 'Horaires',
    zone: 'Zone',
    zoneValue: 'Marrakech et environs',
    languages: 'Langues',
  },

  fab: { label: 'WhatsApp', aria: 'Nous écrire sur WhatsApp' },

  rail: { services: 'Services', zones: 'Quartiers', faq: 'FAQ', contact: 'Contact' },

  area: {
    breadcrumbHome: 'Accueil',
    otherAreas: 'Autres quartiers',
    ctaTitle: (zone: string) => `Un problème de serrure à ${zone} ?`,
    servicesTitle: 'Interventions courantes dans le quartier',
    accessTitle: 'Pour que le serrurier vous trouve vite',
    allServices: 'Tous nos services',
  },

  legal: {
    title: 'Mentions légales',
    owner: 'Responsable',
    status: 'Statut',
    ice: 'ICE',
    address: 'Adresse',
    email: 'Contact',
    phone: 'Téléphone',
    host: 'Hébergement',
    data: 'Données personnelles',
    dataText:
      '[À compléter] Ce site ne contient pas de formulaire. Si la mesure d’audience Plausible est activée, elle ne dépose pas de cookie et ne collecte pas de donnée personnelle.',
  },
};

export type Dict = typeof fr;

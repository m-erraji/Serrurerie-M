import type { Dict } from './fr';

export const en: Dict = {
  langName: 'English',
  ogLocale: 'en_US',

  meta: {
    homeTitle: 'Locksmith in Marrakech – Door opening, lock replacement',
    homeDescription:
      'Mobile locksmith in Marrakech: locked-out door opening, broken keys, lock replacement, car opening. Price given over the phone before we travel. Call +212 6 04 01 94 95.',
    legalTitle: 'Legal notice – Serrurerie Marrakech',
    legalDescription: 'Legal notice for the Serrurerie Marrakech website.',
  },

  a11y: {
    skip: 'Skip to content',
    home: 'Serrurerie Marrakech, home',
    language: 'Change language',
    sections: 'Page sections',
  },

  header: {
    call: 'Call',
  },

  hero: {
    title: 'Locked out? We’ll open up.',
    callNow: 'Call now',
    whatsapp: 'Message on WhatsApp',
  },

  trust: { title: 'Our commitments' },

  services: {
    title: 'Our services',
    intro: 'One call to describe the problem: we tell you whether we can help and at what price.',
    pricePrefix: 'Indicative price:',
    pricePlaceholder: '[Price to be completed]',
  },

  steps: {
    title: 'How it works',
    items: [
      { title: 'You call', text: 'Describe the door, the lock and your neighbourhood. We tell you the price.' },
      { title: 'We come to you', text: 'The locksmith comes to your address with the right tools.' },
      { title: 'Door fixed', text: 'The door is opened or the lock replaced, on site.' },
    ],
  },

  reviews: {
    title: 'Customer reviews',
    todo: 'TODO: no reviews are shown yet. Real reviews from the Google listing will be added here.',
    rating: (n: number) => `Rating: ${n} out of 5`,
  },

  zones: {
    title: 'Areas we cover',
    hint: 'Tap your neighbourhood to message us on WhatsApp.',
    notListed: 'Your neighbourhood isn’t listed? Call us.',
    pagesTitle: 'Locksmith by neighbourhood',
    pageLink: (zone: string) => `Locksmith in ${zone}`,
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'How much does a call-out cost?', a: 'The price depends on the door and the lock. For a door slammed shut, expect from 250 MAD. We tell you the exact price over the phone, before we travel.' },
      { q: 'Do you work at night?', a: 'Yes, until 11 pm, every day. A 100 MAD surcharge applies after 9 pm.' },
      { q: 'How quickly can you get here?', a: 'On average 30–45 minutes in Guéliz, Hivernage and the Medina, a little longer for the Palmeraie.' },
      { q: 'Do you open cars?', a: 'Yes, for most recent cars, without damaging the door.' },
      { q: 'Do you work on electronic locks?', a: 'Yes: installation and repair of keypad, card and smart locks from common brands.' },
      { q: 'How can I pay?', a: 'Cash or bank transfer. An invoice is available on request.' },
    ],
  },

  contact: {
    title: 'Contact',
    lead: 'Call or message us and we’ll answer directly.',
    international: 'From abroad:',
    call: 'Call',
    whatsapp: 'WhatsApp',
    copy: 'Copy number',
    copied: 'Number copied',
  },

  footer: {
    hours: 'Hours',
    zone: 'Area',
    zoneValue: 'Marrakech and surroundings',
    languages: 'Languages',
  },

  fab: { label: 'WhatsApp', aria: 'Message us on WhatsApp' },

  rail: { services: 'Services', zones: 'Areas', faq: 'FAQ', contact: 'Contact' },

  area: {
    breadcrumbHome: 'Home',
    otherAreas: 'Other neighbourhoods',
    ctaTitle: (zone: string) => `Lock problem in ${zone}?`,
    servicesTitle: 'Common jobs in this neighbourhood',
    accessTitle: 'Help the locksmith find you quickly',
    allServices: 'All our services',
  },

  legal: {
    title: 'Legal notice',
    owner: 'Owner',
    status: 'Legal status',
    ice: 'ICE',
    address: 'Address',
    email: 'Contact',
    phone: 'Phone',
    host: 'Hosting',
    data: 'Personal data',
    dataText:
      '[To be completed] This website has no forms. If Plausible analytics is enabled, it sets no cookies and collects no personal data.',
  },
};

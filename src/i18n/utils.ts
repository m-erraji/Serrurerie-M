import { site, LANGS, type Lang } from '../config/site';
import { fr } from './fr';
import { en } from './en';
import { ar } from './ar';

export const dicts = { fr, en, ar } as const;
export const t = (lang: Lang) => dicts[lang];

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

export type AreaSlug = 'gueliz' | 'medina' | 'hivernage' | 'palmeraie';
export const AREA_SLUGS: AreaSlug[] = ['gueliz', 'medina', 'hivernage', 'palmeraie'];

/** Logical page identifiers, mapped to a localized URL per language. */
export type PageId = { kind: 'home' } | { kind: 'legal' } | { kind: 'area'; slug: AreaSlug };

const prefix = (lang: Lang) => (lang === 'fr' ? '' : `/${lang}`);
const areaSegment: Record<Lang, string> = { fr: 'quartiers', en: 'areas', ar: 'ahya' };
const legalSegment: Record<Lang, string> = { fr: 'mentions-legales', en: 'legal-notice', ar: 'legal' };

export function pathFor(page: PageId, lang: Lang): string {
  switch (page.kind) {
    case 'home':
      return `${prefix(lang)}/`;
    case 'legal':
      return `${prefix(lang)}/${legalSegment[lang]}/`;
    case 'area':
      return `${prefix(lang)}/${areaSegment[lang]}/${page.slug}/`;
  }
}

export const absolute = (path: string) => new URL(path, site.url).href;

/** hreflang alternates for a page, x-default pointing to French. */
export function alternates(page: PageId) {
  return [
    ...LANGS.map((l) => ({ hreflang: l, href: absolute(pathFor(page, l)) })),
    { hreflang: 'x-default', href: absolute(pathFor(page, 'fr')) },
  ];
}

export const telHref = `tel:${site.phone.e164}`;

/** wa.me link with the localized pre-filled message. */
export function waHref(lang: Lang, zone?: string) {
  const text = site.whatsapp.message[lang].replace('{zone}', zone ?? site.whatsapp.zoneFallback[lang]);
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export const zoneName = (slug: AreaSlug, lang: Lang) =>
  site.zones.find((z) => z.page === slug)!.name[lang];

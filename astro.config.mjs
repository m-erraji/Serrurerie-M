import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        // Mêmes codes que les balises hreflang du HTML (src/i18n/utils.ts).
        locales: { fr: 'fr', en: 'en', ar: 'ar' },
      },
    }),
  ],
  // Paquet de custom elements déjà compilé : Vite ne doit pas le pré-bundler.
  vite: { optimizeDeps: { exclude: ['@awc-ui/core'] } },
});

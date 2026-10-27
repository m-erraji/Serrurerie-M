# Serrurerie Marrakech

Site vitrine statique, en trois langues (français, anglais, arabe en RTL). Objectif : obtenir un appel ou un message WhatsApp.

- **Astro 7** : sortie 100 % statique, i18n Astro.
- **AWC UI** (`@awc-ui/core`) : composants Material Design 3 en web components, aux couleurs du site.
- **CSS natif**, sans framework CSS.
- Le peu de JavaScript ne fait qu'activer les composants.

Les informations réelles à fournir sont listées dans [TODO.md](TODO.md).

## Commandes

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # sert dist/ en local
```

Node ≥ 22.12 requis.

### Mode démo (données fictives)

```sh
npm run dev:demo       # site rempli avec les données fictives de src/config/demo.ts
npm run build:demo     # → dist-demo/
npm run preview:demo
```

Le mode démo remplit les placeholders avec des données **inventées** : prix, délais, horaires, prénom, photos (des illustrations), avis, réponses de FAQ et mentions légales. Il sert à montrer le site avant d'avoir les vraies informations.

- Chaque page affiche un bandeau jaune « données fictives ».
- Chaque page porte `noindex, nofollow`.
- Chaque avis est étiqueté « Avis fictif ».

**Ne pas déployer `dist-demo/` comme site public.**

Le build normal (`npm run build`) n'utilise jamais ces données.

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Téléphone, WhatsApp, horaires, délai, zones, services, prix, liens, Plausible | `src/config/site.ts` |
| Textes d'interface et FAQ | `src/i18n/fr.ts`, `en.ts`, `ar.ts` |
| Textes des pages quartier | `src/i18n/areas.ts` |
| Couleurs, polices, tokens AWC | `src/styles/global.css` |
| URL des pages par langue | `src/i18n/utils.ts` (`pathFor`) |

## Pages

| | FR | EN | AR |
|---|---|---|---|
| Accueil | `/` | `/en/` | `/ar/` |
| Quartiers (×4) | `/quartiers/gueliz/` … | `/en/areas/gueliz/` … | `/ar/ahya/gueliz/` … |
| Mentions légales | `/mentions-legales/` | `/en/legal-notice/` | `/ar/legal/` |

Seuls Guéliz, Médina, Hivernage et Palmeraie ont une page dédiée, chacune avec un texte propre.

## Comment AWC UI est intégré

- **Rendu au build.** `src/middleware.ts` passe chaque page dans `@awc-ui/core/hydrate`, qui produit du Declarative Shadow DOM. Les composants arrivent donc déjà dessinés : il n'y a pas de flash de contenu non stylé.
- **Liens sans JavaScript.** `md-button href` rend un vrai `<a>`, donc les liens `tel:` et `wa.me` marchent même avant le chargement du JS, ou sans JS du tout. C'est pour cette raison que le bouton WhatsApp flottant est un `md-button` et non un `md-fab`, qui n'a pas de `href`.
- **Activation des composants.** `src/scripts/awc.ts` enregistre chaque composant utilisé avec `defineCustomElement()`. L'import seul n'enregistre rien.
- **Icônes.** Ce sont des SVG inline à trait simple (`src/components/Icon.astro`). La police Material Symbols n'est pas chargée.
- **Ce qui dépend du JavaScript** (limites d'AWC, sans équivalent sans JS) :
  - le menu de langue de l'en-tête (des liens de langue en HTML simple sont aussi dans le pied de page) ;
  - les chips de quartiers (WhatsApp pré-rempli) ;
  - l'ouverture de la FAQ ;
  - le bouton « Copier le numéro » ;
  - le rail de navigation (écrans ≥ 1200 px).
- **Poids du HTML.** Chaque composant embarque son CSS dans son shadow root : environ 1 Mo de HTML brut pour l'accueil, mais **26 Ko en brotli et 50 Ko en gzip**. Il faut un hébergeur qui compresse : Netlify, Vercel et Cloudflare Pages le font par défaut.

## Contrastes (WCAG AA)

| Paire | Ratio |
|---|---|
| Texte `#EEF1F6` sur fond `#0A0F1C` | 16.9:1 |
| Texte secondaire `#B8C1D3` sur fond | 10.6:1 |
| Orange `#FF7A30` sur fond | 7.4:1 |
| Texte `#1A0A00` sur bouton orange | 7.4:1 (le blanc échouerait : 2.6:1) |
| Texte `#062A12` sur bouton WhatsApp `#25D366` | 7.9:1 |

## Déploiement

Le dossier `dist/` est un site statique : il se dépose sur n'importe quel hébergeur.

**Avant le premier déploiement**, renseigner `site.url` dans `src/config/site.ts`, puis relancer le build. Sinon, les canoniques et le sitemap pointent vers `example.com`.

```sh
# Netlify
npx netlify-cli deploy --dir=dist --prod

# Vercel
npx vercel deploy --prod      # framework détecté : Astro

# Cloudflare Pages
npx wrangler pages deploy dist --project-name=serrurerie-marrakech
```

Après la mise en ligne :
1. Déclarer le site dans Google Search Console.
2. Y soumettre `https://<domaine>/sitemap-index.xml`.
3. Lier le site à la fiche Google Business Profile.

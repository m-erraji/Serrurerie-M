# Serrurerie Marrakech

Site vitrine Astro en français, anglais et arabe (RTL), avec appel direct,
WhatsApp et pages locales pour Guéliz, Médina, Hivernage et Palmeraie.

## Démarrage

Node **≥ 22.23.4** est requis par la version d’Astro verrouillée dans le dépôt.
`.nvmrc` sélectionne Node 24.

```sh
nvm install
nvm use
npm ci
npm run dev        # http://localhost:4321
npm run build      # site statique dans dist/
npm run preview    # prévisualisation du build
```

## Interface

Identité ivoire, vert profond et laiton ; photos locales ; navigation responsive ;
barre d’appel et WhatsApp sur mobile ; FAQ native ; sélecteur de langues qui
conserve la page courante ; prestations complémentaires dépliables ; copie du
numéro avec message de confirmation ou d’erreur.

Les fonctions essentielles (liens d’appel, WhatsApp, langues, quartiers, FAQ et
liste des services) utilisent du HTML natif et restent disponibles sans JS.
Le menu mobile utilise un bouton accessible, avec un repli sans JS.
AWC UI est conservé uniquement pour les cartes des pages de quartier et légales.
Aucun formulaire n’est ajouté : la prise de contact passe par téléphone ou WhatsApp.

## Modifier le contenu

| Contenu | Fichier |
| --- | --- |
| Coordonnées, horaires, tarifs, services, zones et données légales | `src/config/site.ts` |
| Nouveaux textes éditoriaux FR / EN / AR | `src/i18n/design.ts` |
| Textes d’origine et FAQ | `src/i18n/fr.ts`, `en.ts`, `ar.ts` |
| Pages de quartier | `src/i18n/areas.ts` |
| Thème et responsive | `src/styles/global.css` |
| Photos et sources | `public/images/photos/`, `DESIGN.md` |

## Pages

| | FR | EN | AR |
| --- | --- | --- | --- |
| Accueil | `/` | `/en/` | `/ar/` |
| Quartiers ×4 | `/quartiers/gueliz/`… | `/en/areas/gueliz/`… | `/ar/ahya/gueliz/`… |
| Mentions légales | `/mentions-legales/` | `/en/legal-notice/` | `/ar/legal/` |

## Vérification navigateur

Le script `scripts/ui-smoke.cjs` vérifie les 18 pages, les liens internes, les
accueils à 1440 / 768 / 390 / 360 pixels, le menu mobile, la FAQ, les services,
le changement de langue, la copie du numéro, le mode sans JS et les règles axe
WCAG A/AA. Il enregistre les captures et le rapport dans `artifacts/` (ignoré par Git).

Avec Chrome installé, installer les outils de test dans un dossier séparé :

```sh
npm install --prefix /tmp/serrurerie-qa playwright @axe-core/playwright
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
# Dans un autre terminal :
NODE_PATH=/tmp/serrurerie-qa/node_modules node scripts/ui-smoke.cjs
```

`PREVIEW_URL` et `CHROME_BIN` permettent de changer l’URL ou le navigateur.
Un audit automatisé ne remplace pas une validation humaine complète de l’accessibilité.

## Mode démo et publication

```sh
npm run dev:demo
npm run build:demo   # dist-demo/, avec noindex
```

Les données du mode démo sont fictives : ne pas publier `dist-demo/` comme site réel.
Avant publication, compléter les mentions légales et vérifier les engagements,
les prix et le domaine canonique dans `src/config/site.ts` et `TODO.md`.
Le dossier `dist/` peut être hébergé comme site statique. Aucune publication
ni modification du dépôt GitHub distant n’est effectuée par cette refonte.

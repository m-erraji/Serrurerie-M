# Refonte UX/UI

Identité : ivoire, vert profond et laiton. Typographies Manrope et DM Sans,
Noto Sans Arabic pour l’arabe. Mise en page responsive, navigation clavier,
liens natifs, menus de langue et FAQ utilisables sans JavaScript.

## Inspirations de structure

- https://www.maisonducylindre.fr/services : présentation des prestations et contact direct.
- https://www.urgences-serrurier.com/ : articulation services et zones d’intervention.

Le design, les textes éditoriaux et les composants ont été réécrits pour ce
projet. Aucun témoignage, agrément ou chiffre de performance n’a été inventé.
Les coordonnées, horaires et tarifs proviennent de `src/config/site.ts`.
Les mentions légales à compléter et les engagements à valider restent ceux
du dépôt d’origine : voir `TODO.md` avant toute publication.

## Photographies

Les fichiers sont hébergés localement dans `public/images/photos/`.
Ce sont des **photos d’illustration**, pas des réalisations de l’entreprise.

| Fichier | Auteur / source |
| --- | --- |
| door-handle.jpg | Esra Erdem — https://www.pexels.com/photo/door-with-a-simple-lock-25745081/ |
| keys.jpg | cottonbro studio — https://www.pexels.com/photo/a-key-in-a-keyhole-5485767/ |
| smart-lock.jpg | Sucipta Mahendra — https://www.pexels.com/photo/close-up-of-a-door-knob-20901468/ |
| marrakech.jpg | Unsplash — https://images.unsplash.com/photo-1555169048-ee590a06ab39 |

Licences : https://www.pexels.com/license/ et https://unsplash.com/license.
Remplacer ces photographies par les photos réelles de l’entreprise lorsqu’elles
sont disponibles. Les anciennes illustrations du dépôt sont conservées.

## Organisation

- `src/styles/global.css` : thème, composants et points de rupture responsive.
- `src/i18n/design.ts` : nouveaux textes éditoriaux FR / EN / AR.
- `src/components/Approach.astro` : section photographique et présentation de l’approche.
- `src/components/Header.astro` : navigation mobile, sélecteur de langue et raccourcis.
- `src/components/Services.astro` : prestations, tarifs et liens WhatsApp contextualisés.
- `src/components/Contact.astro` : coordonnées, actions et copie du numéro avec retour d’état.

Les trois accueils, les douze pages de quartier et les trois pages légales
partagent la même identité. Les liens de langue conservent la page courante.

# TODO — informations réelles à fournir

Tout ce qui apparaît sur le site entre **[crochets]**, en jaune italique, est un placeholder.
Presque tout se remplit dans **`src/config/site.ts`**. Les exceptions sont indiquées.

> Règle : ne mettre que des informations vraies. Pas d'avis inventés, pas de chiffres
> (« 500 clients »), pas de certifications ni de garanties qu'on ne peut pas prouver.

> **Mode démo** : `npm run dev:demo` affiche le site rempli de données fictives
> (`src/config/demo.ts`) pour visualiser le résultat. Ces valeurs sont inventées :
> à remplacer par les vraies dans `site.ts`, jamais à recopier telles quelles.

## Indispensable avant la mise en ligne

- [x] **Nom de domaine** → `site.url` = `https://serrurier-marrakech.ma`.
      Sert aux URL canoniques, au sitemap, à Open Graph et au JSON-LD.
- [ ] **Vérifier la disponibilité** → `site.availability` : actuellement « Disponible 7j/7, de 7h à 23h ».
      Valeur provisoire, à confirmer ou corriger : elle s'affiche en haut de chaque page.
- [ ] **Vérifier le délai d'intervention** → `site.responseTime` : actuellement « Sur place en 30 à 45 min
      en moyenne ». Valeur provisoire : un client stressé la prendra au mot.
- [ ] **Vérifier les horaires** : actuellement « Tous les jours, 7h – 23h » (valeur provisoire).
  - texte affiché → `site.hours.label` (fr / en / ar)
  - horaires envoyés à Google → `site.hours.schema` (JSON-LD)
  - les deux doivent correspondre à `site.availability` et aux horaires de la fiche Google.
- [ ] **Mentions légales** → `site.legal` : responsable, statut, ICE, adresse, e-mail, hébergeur.
      Texte « Données personnelles » → `legal.dataText` dans `src/i18n/fr.ts`, `en.ts`, `ar.ts`.

## Prix

- [x] **Porte simple / porte blindée / voiture** → `site.services[].price` mis à jour avec la
      grille tarifaire moyenne constatée à Marrakech (claquée vs verrouillée).
- [ ] **Vérifier les autres prix indicatifs** → `site.services[].price` (fr / en / ar). Valeurs
      encore provisoires : changement 350 DH serrure comprise, clé cassée 200 DH, réparation 200 DH,
      cambriolage sur devis, électronique 400 DH (tous « à partir de »).
      Un prix affiché engage : corriger ce qui ne correspond pas aux vrais tarifs.

## Google

- [ ] **Fiche Google Business Profile** → `site.links.googleBusiness`
      (ajoute aussi `sameAs` dans le JSON-LD).
- [ ] **Lien Google Maps** → `site.links.googleMaps` (`hasMap` dans le JSON-LD)

## Photos

- [ ] **Image de partage** `public/og-image.png` (1200×630) : actuellement générique
      (logo + numéro). La remplacer par une vraie photo si possible.

## FAQ

- [ ] Vérifier les **6 réponses** (`src/i18n/fr.ts`, `en.ts`, `ar.ts` → `faq.items`). Elles sont
      provisoires et contiennent des engagements : ouvert jusqu'à 23h, **supplément de 100 DH
      après 21h**, 30 à 45 min, voitures récentes, paiement en espèces ou virement, facture sur demande.
      Corriger tout ce qui est faux, dans les 3 langues.

## Mesure d'audience

- [ ] Créer le site sur plausible.io (ou une instance auto-hébergée), puis renseigner
      `site.analytics.plausible.domain` (et `src` si auto-hébergé).
      Événements suivis : **Appel** (clic `tel:`) et **WhatsApp** (clic `wa.me` ou chip quartier),
      avec la propriété `position` (header, hero, zones, contact, fab).
      Dans Plausible : *Site settings → Goals → Add goal → Custom event* « Appel » et « WhatsApp ».

## Relectures

- [ ] **Pages quartier** (`src/i18n/areas.ts`) : faire relire par le serrurier.
      Les textes décrivent son terrain (types de portes, accès) et doivent correspondre à la réalité.
- [ ] **Arabe** : faire relire `src/i18n/ar.ts` et `areas.ts` par un arabophone.
      Le message WhatsApp pré-rempli est en darija (`site.whatsapp.message.ar`) : à vérifier aussi.
- [ ] **Bandeau de confiance** (`site.trust`) : vérifier que chaque phrase est vraie.
- [ ] **Descriptions des services** (`site.services[].text`) : retirer un service qui n'est pas proposé.

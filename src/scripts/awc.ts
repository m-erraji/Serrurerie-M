// Enregistrement des composants AWC UI utilisés + comportements interactifs.
// Le HTML arrive déjà rendu (Declarative Shadow DOM généré au build) : ce script
// ne fait qu'« adopter » ce rendu. Les liens tel: et wa.me fonctionnent sans lui.

// Les modules par composant n'enregistrent rien à l'import : defineCustomElement() est obligatoire.
import { defineCustomElement as appBar } from '@awc-ui/core/components/md-app-bar';
import { defineCustomElement as button } from '@awc-ui/core/components/md-button';
import { defineCustomElement as iconButton } from '@awc-ui/core/components/md-icon-button';
import { defineCustomElement as menu } from '@awc-ui/core/components/md-menu';
import { defineCustomElement as menuItem } from '@awc-ui/core/components/md-menu-item';
import { defineCustomElement as card } from '@awc-ui/core/components/md-card';
import { defineCustomElement as chip } from '@awc-ui/core/components/md-chip';
import { defineCustomElement as accordion } from '@awc-ui/core/components/md-accordion';
import { defineCustomElement as accordionItem } from '@awc-ui/core/components/md-accordion-item';
import { defineCustomElement as avatar } from '@awc-ui/core/components/md-avatar';
import { defineCustomElement as snackbar } from '@awc-ui/core/components/md-snackbar';
import { defineCustomElement as navRail } from '@awc-ui/core/components/md-navigation-rail';
import { defineCustomElement as navRailTab } from '@awc-ui/core/components/md-navigation-rail-tab';

[appBar, button, iconButton, menu, menuItem, card, chip, accordion, accordionItem, avatar, snackbar, navRail, navRailTab].forEach((define) =>
  define(),
);

type AnyEl = HTMLElement & Record<string, any>;

// Sélecteur de langue.
const langTrigger = document.getElementById('lang-trigger');
const langMenu = document.getElementById('lang-menu') as AnyEl | null;
langTrigger?.addEventListener('mdClick', () => {
  if (langMenu?.open) langMenu.close();
  else langMenu?.show();
});
langMenu?.addEventListener('mdClick', (e) => {
  const item = (e.target as HTMLElement).closest<HTMLElement>('md-menu-item[data-href]');
  if (item?.dataset.href) window.location.assign(item.dataset.href);
});

// Chips des quartiers : WhatsApp avec le quartier pré-rempli.
document.querySelectorAll<HTMLElement>('md-chip[data-wa]').forEach((chip) => {
  chip.addEventListener('mdClick', () => {
    window.open(chip.dataset.wa, '_blank', 'noopener');
  });
});

// Copier le numéro : affiché seulement si le presse-papiers est disponible.
const copyBtn = document.getElementById('copy-number');
const toast = document.getElementById('copy-toast') as AnyEl | null;
if (copyBtn && navigator.clipboard) {
  copyBtn.hidden = false;
  copyBtn.addEventListener('mdClick', async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.number ?? '');
      toast?.show();
    } catch {
      /* refus du navigateur : le numéro reste affiché à l'écran */
    }
  });
}

// Rail (grand écran) : met en évidence la section visible.
const rail = document.getElementById('section-rail') as AnyEl | null;
if (rail && 'IntersectionObserver' in window) {
  const ids = Array.from(rail.querySelectorAll<HTMLElement>('md-navigation-rail-tab')).map((tab) => tab.getAttribute('value'));
  const sections = ids.map((id) => (id ? document.getElementById(id) : null));
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) rail.activeIndex = sections.indexOf(entry.target as HTMLElement);
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  sections.forEach((s) => s && observer.observe(s));
}

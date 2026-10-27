import type { MiddlewareHandler } from 'astro';
// Exécuté pour chaque page, y compris au build (pages statiques) : le module hydrate
// d'AWC UI injecte le Declarative Shadow DOM de chaque <md-*>. Résultat : la page
// s'affiche stylée et les liens (tel:, wa.me) fonctionnent avant tout JavaScript.
import { renderToString } from '@awc-ui/core/hydrate';

export const onRequest: MiddlewareHandler = async (_context, next) => {
  const response = await next();
  if (!(response.headers.get('content-type') ?? '').includes('text/html')) return response;
  const html = await response.text();
  if (!html.includes('<md-')) return new Response(html, { status: response.status, headers: response.headers });
  const { html: hydrated } = await renderToString(html, {
    fullDocument: true,
    serializeShadowRoot: 'declarative-shadow-dom',
    removeScripts: false,
    removeHtmlComments: false,
  });
  return new Response(hydrated, { status: response.status, headers: response.headers });
};

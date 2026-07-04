// Gedeelde helper om title/description/canonical/OG/Twitter-tags in een gebouwde
// index.html te vervangen door pagina-specifieke waarden. Gebruikt door
// generate-city-pages.mjs en generate-static-routes.mjs zodat beide scripts
// dezelfde vervanglogica gebruiken in plaats van gedupliceerde regexes.
//
// De vervangen tags krijgen data-default zodat main.tsx ze kan verwijderen
// zodra React (en dus <SEO>/react-helmet-async) heeft gemount. Zonder dat
// zouden de statische tags en de door Helmet gerenderde tags naast elkaar
// blijven staan (dubbele <title>, dubbele meta description, dubbele OG-tags).
export function applySeoToHtml(baseHtml, { title, description, canonical }) {
  let html = baseHtml;

  html = html.replace(
    /<title[^>]*>[^<]*<\/title>/,
    `<title data-default>${title}</title>`
  );

  html = html.replace(
    /<meta name="description"[^>]*\/?>/,
    `<meta name="description" content="${description}" data-default />`
  );

  if (!/<link rel="canonical"/.test(html)) {
    html = html.replace("</head>", `  <link rel="canonical" href="${canonical}" data-default />\n  </head>`);
  } else {
    html = html.replace(/<link rel="canonical"[^>]*\/?>/, `<link rel="canonical" href="${canonical}" data-default />`);
  }

  html = html.replace(/<meta property="og:title"[^>]*\/?>/, `<meta property="og:title" content="${title}" data-default />`);
  html = html.replace(/<meta property="og:description"[^>]*\/?>/, `<meta property="og:description" content="${description}" data-default />`);
  html = html.replace(/<meta property="og:url"[^>]*\/?>/, `<meta property="og:url" content="${canonical}" data-default />`);

  html = html.replace(/<meta name="twitter:title"[^>]*\/?>/, `<meta name="twitter:title" content="${title}" data-default />`);
  html = html.replace(/<meta name="twitter:description"[^>]*\/?>/, `<meta name="twitter:description" content="${description}" data-default />`);

  return html;
}

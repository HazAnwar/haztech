// Everything search engines and AI crawlers read about the site: each page's title, description, canonical URL and
// structured data, plus robots.txt, sitemap.xml and llms.txt. Used at build time by prerender.js, and by the app to
// keep document.title in step as you navigate.
import { COMPANY } from './company.js';
import { PRODUCTS } from './products.js';

export const SITE_URL = 'https://haztech.services';
const SITE_NAME = 'HazTech Services';

// Mirrors the Person on hazanwar.github.io (HazAnwarDocs: src/data/profile.js and prerender.js). Both sites use the
// same @id, so search engines treat them as one person: keep the name, title and links in step with that site.
export const DEVELOPER = {
  name: 'Hazik Anwar',
  jobTitle: 'Lead Full Stack Engineer',
  url: 'https://hazanwar.github.io/',
  github: 'https://github.com/HazAnwar',
  linkedin: 'https://www.linkedin.com/in/HazAnwar',
  stackoverflow: 'https://stackoverflow.com/users/9378550/hazanwar',
};

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${DEVELOPER.url}#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const productRoute = (p) => ({
  path: p.path,
  title: `${p.seoTitle} | ${COMPANY.shortName}`,
  description: p.desc,
  image: p.image,
  product: p,
});

// `path` is the app route. Pages are served at `${path}/` (GitHub Pages redirects /markaz to /markaz/), so that's
// the canonical form.
export const ROUTES = [
  {
    path: '/',
    title: `${SITE_NAME} - Independent UK Game & App Developer`,
    description: `${COMPANY.name} is an independent UK developer and publisher of Bloop Brigade, Markaz and Leap Launcher.`,
    image: '/og-image.jpg',
  },
  {
    path: '/apps',
    title: `Our Apps & Games | ${SITE_NAME}`,
    description: 'Bloop Brigade, Markaz and Leap Launcher: games and apps for phones, tablets, computers and TVs, with no ads.',
    image: '/og-image.jpg',
  },
  ...PRODUCTS.map(productRoute),
  {
    path: '/privacy',
    title: `Privacy Policy | ${SITE_NAME}`,
    description: 'Read the privacy policy for HazTech Services and our applications.',
    image: '/og-image.jpg',
  },
  {
    path: '/terms',
    title: `Terms of Service | ${SITE_NAME}`,
    description: 'Read the terms of service for HazTech Services and our applications.',
    image: '/og-image.jpg',
  },
  {
    path: '/data-deletion',
    title: `Data Deletion | ${SITE_NAME}`,
    description: 'Learn how to request deletion of your account and associated data.',
    image: '/og-image.jpg',
  },
];

export const NOT_FOUND = {
  path: null,
  title: `Page Not Found | ${SITE_NAME}`,
  description: "We couldn't find the page you're looking for.",
  image: '/og-image.jpg',
  noindex: true,
};

const trimSlash = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);
export const routeFor = (pathname) => ROUTES.find((r) => r.path === trimSlash(pathname)) || NOT_FOUND;
export const canonicalUrl = (route) => `${SITE_URL}${route.path === '/' ? '/' : `${route.path}/`}`;

// --- Structured data (schema.org JSON-LD) ---

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: COMPANY.name,
  url: `${SITE_URL}/`,
  email: COMPANY.email,
  founder: { '@id': PERSON_ID },
  identifier: { '@type': 'PropertyValue', propertyID: 'Companies House', value: COMPANY.companyNumber },
  address: { '@type': 'PostalAddress', addressCountry: 'GB' },
  sameAs: [`https://find-and-update.company-information.service.gov.uk/company/${COMPANY.companyNumber}`],
};

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: DEVELOPER.name,
  url: DEVELOPER.url,
  jobTitle: DEVELOPER.jobTitle,
  sameAs: [DEVELOPER.linkedin, DEVELOPER.github, DEVELOPER.stackoverflow, `${SITE_URL}/`],
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-GB',
};

const application = (p) => ({
  '@type': p.schema.type,
  '@id': `${SITE_URL}${p.path}/#app`,
  name: p.name,
  description: p.desc,
  url: `${SITE_URL}${p.path}/`,
  image: `${SITE_URL}${p.image}`,
  applicationCategory: p.schema.category,
  operatingSystem: p.schema.os,
  ...(p.schema.genre && { genre: p.schema.genre }),
  author: { '@id': PERSON_ID },
  publisher: { '@id': ORG_ID },
  sameAs: Object.values(p.stores),
});

export function jsonLd(route) {
  const graph = [organization, person, website];
  if (route.path === '/' || route.path === '/apps') {
    graph.push({
      '@type': 'ItemList',
      name: 'Products by HazTech Services',
      itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}${p.path}/`, name: p.name })),
    });
  }
  if (route.product) graph.push(application(route.product));
  return { '@context': 'https://schema.org', '@graph': graph };
}

// --- <head> tags ---

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function headTags(route, extra = '') {
  const url = route.path ? canonicalUrl(route) : null;
  const image = `${SITE_URL}${route.image}`;
  const t = esc(route.title);
  const d = esc(route.description);
  // `<` is escaped so the JSON can never close the script tag early.
  const ld = JSON.stringify(jsonLd(route)).replace(/</g, '\\u003c');
  return [
    `<meta name="description" content="${d}" />`,
    route.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta name="author" content="${esc(DEVELOPER.name)}" />`,
    `<link rel="alternate" type="text/markdown" href="${SITE_URL}/llms.txt" title="HazTech Services (summary for AI assistants)" />`,
    '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    url && `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:image" content="${image}" />`,
    '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    extra,
    '',
    `<script type="application/ld+json">${ld}</script>`,
  ]
    .filter((l) => l !== null && l !== undefined && l !== false)
    .map((l) => (l ? `    ${l}` : ''))
    .join('\n');
}

// --- Crawler files ---

export const robotsTxt = () => `# Every crawler, search engines and AI assistants alike, is welcome to read the whole site.
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const sitemapXml = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url><loc>${canonicalUrl(r)}</loc></url>`).join('\n')}
</urlset>
`;

// https://llmstxt.org: a plain summary of the site for language models.
export const llmsTxt = () => `# ${SITE_NAME}

> ${COMPANY.name} is an independent UK developer and publisher of games and apps (registered in ${COMPANY.registeredIn}, company number ${COMPANY.companyNumber}). Its products are designed and built by ${DEVELOPER.name} (${DEVELOPER.url}, ${DEVELOPER.github}). Every product is simple, fast and free of ads.

## Products

${PRODUCTS.map((p) => `- [${p.name}](${SITE_URL}${p.path}/): ${p.kind}. ${p.desc}`).join('\n')}

## Developer

- [${DEVELOPER.name}](${DEVELOPER.url}): ${DEVELOPER.jobTitle} in London; founder and developer of ${SITE_NAME}
- [GitHub](${DEVELOPER.github}): source code for Markaz, Leap Launcher and other projects
- [LinkedIn](${DEVELOPER.linkedin})

## Company

- [All apps and games](${SITE_URL}/apps/)
- [Privacy policy](${SITE_URL}/privacy/)
- [Terms of service](${SITE_URL}/terms/)
- Contact: ${COMPANY.email}
`;

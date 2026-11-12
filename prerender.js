// Runs after the client and server builds (see package.json "build"). For every route it writes an index.html with
// the page already rendered, plus that page's title, description, canonical URL and structured data, so search
// engines and AI crawlers (most of which don't run JavaScript) see the real content. Also writes 404.html,
// robots.txt, sitemap.xml and llms.txt.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { ROUTES, NOT_FOUND, headTags, robotsTxt, sitemapXml, llmsTxt } from './src/seo.js';
import { product } from './src/products.js';

const distDir = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// Safari's Smart App Banner on iPhone, iPad and Mac.
const appStoreId = product('Bloop Brigade').stores.appStore.match(/id(\d+)/)[1];
const EXTRA_HEAD = { '/bloop-brigade': `<meta name="apple-itunes-app" content="app-id=${appStoreId}" />` };

function page(route, url) {
  const START = '<!-- METADATA_START -->';
  const END = '<!-- METADATA_END -->';
  const start = baseHtml.indexOf(START);
  const end = baseHtml.indexOf(END);
  if (start === -1 || end === -1) throw new Error('index.html is missing the METADATA_START/END markers.');
  if (!baseHtml.includes('<div id="root"></div>')) throw new Error('index.html is missing <div id="root"></div>.');

  let html = baseHtml.slice(0, start + START.length) + '\n' + headTags(route, EXTRA_HEAD[route.path]) + '\n    ' + baseHtml.slice(end);
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>`);
  // Replacer function, so `$` in the rendered HTML isn't read as a replacement pattern.
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render(url)}</div>`);
  return html;
}

for (const route of ROUTES) {
  const dir = route.path === '/' ? distDir : path.join(distDir, route.path);
  let html = page(route, route.path);
  // Point the preload scanner at the right assets from a subdirectory (the <base> tag fixes them up once JS runs).
  if (route.path !== '/') html = html.replace(/(src|href)="\.\/assets\//g, '$1="../assets/');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// GitHub Pages serves this for any unknown URL, at any depth.
fs.writeFileSync(path.join(distDir, '404.html'), page(NOT_FOUND, '/404'));

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt());
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml());
fs.writeFileSync(path.join(distDir, 'llms.txt'), llmsTxt());

fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${ROUTES.map((r) => r.path).join(', ')} and 404.html; wrote robots.txt, sitemap.xml and llms.txt.`);

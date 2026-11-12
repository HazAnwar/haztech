import fs from 'fs';
import path from 'path';
import { PRODUCTS } from './src/products.js';

const productDesc = (name) => PRODUCTS.find((p) => p.name === name).desc;

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');

if (!fs.existsSync(indexFile)) {
  console.error('dist/index.html not found. Run npm run build first.');
  // eslint-disable-next-line no-undef
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexFile, 'utf8');

const generateHtml = (title, desc, urlPath, imageUrl, extraMeta = '') => {
  const metadataBlock = `
    <!-- Primary Meta Tags -->
    <meta name="title" content="${title}" />
    <meta name="description" content="${desc}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://haztech.services${urlPath}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:image" content="https://haztech.services${imageUrl}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://haztech.services${urlPath}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${desc}" />
    <meta property="twitter:image" content="https://haztech.services${imageUrl}" />
${extraMeta}  `;

  // Replace <title>
  let newHtml = baseHtml.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  // Replace the metadata block
  const startMarker = '<!-- METADATA_START -->';
  const endMarker = '<!-- METADATA_END -->';

  const startIndex = newHtml.indexOf(startMarker);
  const endIndex = newHtml.indexOf(endMarker) + endMarker.length;

  if (startIndex !== -1 && endIndex !== -1) {
    newHtml = newHtml.substring(0, startIndex) + startMarker + metadataBlock + endMarker + newHtml.substring(endIndex);
  }

  // Fix relative asset paths for subdirectories so the preload scanner doesn't 404
  newHtml = newHtml.replace(/(src|href)="\.\/assets\//g, '$1="../assets/');

  return newHtml;
};

// --- Markaz ---
const markazHtml = generateHtml('HazTech Services | Markaz', productDesc('Markaz'), '/markaz', '/markaz.png');
fs.mkdirSync(path.join(distDir, 'markaz'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'markaz', 'index.html'), markazHtml);

// --- Bloop Brigade ---
const bloopHtml = generateHtml(
  'HazTech Services | Bloop Brigade',
  `${productDesc('Bloop Brigade')} Out now on the App Store and Google Play.`,
  '/bloop-brigade',
  '/bloop-brigade-og.jpg',
  // Safari's Smart App Banner on iPhone, iPad and Mac.
  '    <meta name="apple-itunes-app" content="app-id=6818502459" />\n',
);
fs.mkdirSync(path.join(distDir, 'bloop-brigade'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'bloop-brigade', 'index.html'), bloopHtml);

// --- Leap Launcher ---
const leapHtml = generateHtml('HazTech Services | Leap Launcher', productDesc('Leap Launcher'), '/leap-launcher', '/leap.png');
fs.mkdirSync(path.join(distDir, 'leap-launcher'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'leap-launcher', 'index.html'), leapHtml);

// --- Apps ---
const appsHtml = generateHtml('HazTech Services | Apps', 'Bloop Brigade, Markaz and Leap Launcher: games and apps for phones, tablets, computers and TVs, with no ads.', '/apps', '/og-image.jpg');
fs.mkdirSync(path.join(distDir, 'apps'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'apps', 'index.html'), appsHtml);

// --- Privacy Policy ---
const privacyHtml = generateHtml('HazTech Services | Privacy Policy', 'Read the privacy policy for HazTech Services and our applications.', '/privacy', '/og-image.jpg');
fs.mkdirSync(path.join(distDir, 'privacy'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'privacy', 'index.html'), privacyHtml);

// --- Terms of Service ---
const termsHtml = generateHtml('HazTech Services | Terms of Service', 'Read the terms of service for HazTech Services and our applications.', '/terms', '/og-image.jpg');
fs.mkdirSync(path.join(distDir, 'terms'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'terms', 'index.html'), termsHtml);

// --- Data Deletion ---
const dataDeletionHtml = generateHtml('HazTech Services | Data Deletion', 'Learn how to request deletion of your account and associated data.', '/data-deletion', '/og-image.jpg');
fs.mkdirSync(path.join(distDir, 'data-deletion'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'data-deletion', 'index.html'), dataDeletionHtml);

console.log('Successfully generated specific metadata for /markaz, /bloop-brigade, /leap-launcher, /apps, /privacy, /terms, and /data-deletion routes.');

import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexFile = path.join(distDir, 'index.html');

if (!fs.existsSync(indexFile)) {
  console.error('dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexFile, 'utf8');

const generateHtml = (title, desc, urlPath, imageUrl) => {
  const metadataBlock = `
    <!-- Primary Meta Tags -->
    <meta name="title" content="${title}" />
    <meta name="description" content="${desc}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hazanwar.github.io/haztech${urlPath}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:image" content="https://hazanwar.github.io/haztech${imageUrl}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://hazanwar.github.io/haztech${urlPath}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${desc}" />
    <meta property="twitter:image" content="https://hazanwar.github.io/haztech${imageUrl}" />
  `;

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
  
  return newHtml;
};

// --- Markaz ---
const markazHtml = generateHtml(
  'HazTech Services | Markaz App',
  'Discover Markaz: the ultimate all-in-one, cross-platform companion for Muslims. Accurate prayer times, Qibla, and completely ad-free.',
  '/markaz',
  '/markaz.png'
);
fs.mkdirSync(path.join(distDir, 'markaz'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'markaz', 'index.html'), markazHtml);

// --- Leap Launcher ---
const leapHtml = generateHtml(
  'HazTech Services | Leap Launcher',
  'A simple and elegant launcher for your Android Mobile & TV. Experience a distraction-free digital life.',
  '/leap-launcher',
  '/leap.png'
);
fs.mkdirSync(path.join(distDir, 'leap-launcher'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'leap-launcher', 'index.html'), leapHtml);

console.log('Successfully generated specific metadata for /markaz and /leap-launcher routes.');

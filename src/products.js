// The one place each product is summarised, so the home page, the products page, the product pages' store links
// and the page metadata and structured data (src/seo.js) all say the same thing.
export const PRODUCTS = [
  {
    name: 'Bloop Brigade',
    icon: 'bloop-brigade.png',
    path: '/bloop-brigade',
    kind: 'Game · iPhone, iPad, Mac and Android',
    desc: 'A colourful co-op tower defence game for all ages. Pop the Grumbles, build towers and protect the Star Seed on a volcano island that grows every few waves, solo or with friends online.',
    // Search result title: what it is comes before who made it.
    seoTitle: 'Bloop Brigade - Co-op Tower Defence Game',
    image: '/bloop-brigade-og.jpg',
    schema: { type: 'VideoGame', category: 'GameApplication', os: 'iOS, iPadOS, macOS, visionOS, Android', genre: 'Tower defense' },
    stores: {
      appStore: 'https://apps.apple.com/app/bloop-brigade/id6818502459',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.haztech.bloopbrigade',
    },
  },
  {
    name: 'Markaz',
    icon: 'markaz.png',
    path: '/markaz',
    kind: 'App · iOS, Android, macOS, Windows, Linux and web',
    desc: 'An all-in-one companion for Muslims: accurate prayer times, the Quran with audio, a Qibla compass, step-by-step prayer guides and more. No ads.',
    seoTitle: 'Markaz - Prayer Times, Quran & Qibla App',
    image: '/markaz.png',
    schema: { type: 'SoftwareApplication', category: 'LifestyleApplication', os: 'iOS, iPadOS, watchOS, Android, Wear OS, macOS, Windows, Linux, Web' },
    stores: {
      appStore: 'https://apps.apple.com/us/app/markaz/id6783402543',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.haztech.prayer',
      microsoft: 'https://apps.microsoft.com/detail/9N53LTXNFFTZ',
      snapcraft: 'https://snapcraft.io/markaz',
      web: 'https://markaz.haztech.services/',
      github: 'https://github.com/HazAnwar/markaz',
    },
  },
  {
    name: 'Leap Launcher',
    icon: 'leap.png',
    path: '/leap-launcher',
    kind: 'App · Android phones, tablets, foldables and Android TV',
    desc: 'A fast, clean home screen that keeps the stock Android feel and adds the controls you actually want. No ads.',
    seoTitle: 'Leap Launcher - Fast, Clean Android Launcher',
    image: '/leap.png',
    schema: { type: 'SoftwareApplication', category: 'UtilitiesApplication', os: 'Android, Android TV' },
    stores: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.haztech.launcher',
      github: 'https://github.com/HazAnwar/leap-launcher',
    },
  },
];

export const product = (name) => PRODUCTS.find((p) => p.name === name);

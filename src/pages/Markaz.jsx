import React from 'react';
import { GitBranch } from 'lucide-react';
import AppPage from '../components/app/AppPage';
import FeatureGrid from '../components/app/FeatureGrid';
import Section from '../components/app/Section';
import Gallery from '../components/Gallery';
import { product } from '../products';

const STORES = product('Markaz').stores;
const APP_STORE = STORES.appStore;

const PLATFORMS = [
  { id: 'android', desc: 'Mobile, Tablet & Watch', url: STORES.googlePlay },
  { id: 'ios', desc: 'iOS, iPadOS & watchOS', url: APP_STORE },
  { id: 'mac', desc: 'Apple Silicon & Intel', url: APP_STORE },
  { id: 'windows', desc: 'Windows 10 & 11', url: STORES.microsoft },
  { id: 'linux', desc: 'Debian, Fedora, Ubuntu', url: STORES.snapcraft },
  { id: 'web', desc: 'Any Browser', url: STORES.web },
];

const LINKS = [{ href: STORES.github, Icon: GitBranch, label: 'View / Download on GitHub' }];

const GALLERIES = {
  phone: {
    label: 'Phone',
    dir: 'phone/',
    portrait: true,
    shots: [
      ['01-dashboard.jpg', 'Accurate prayer times with a live countdown'],
      ['02-quran.jpg', 'The Holy Quran, with translations in 14 languages'],
      ['03-qibla.jpg', 'A Qibla compass that points you to the Kaaba'],
      ['04-explore.jpg', 'Fasting, Hajj, Zakat, Hadith, the 99 Names and more'],
      ['05-tracker.jpg', 'Track your prayers, streaks and make-up prayers'],
      ['06-fasting.jpg', 'Suhoor and iftar times, a fasting log and Sunnah fasts'],
      ['07-duas.jpg', 'Authentic duas with Arabic, transliteration and meaning'],
      ['08-learn.jpg', 'Step-by-step guides to Salah, Wudu and more'],
    ],
  },
  desktop: {
    label: 'Desktop',
    dir: 'desktop/',
    aspect: '16 / 10',
    shots: [
      ['01-dashboard.jpg', 'Prayer times on the desktop'],
      ['02-quran.jpg', 'Reading the Quran'],
      ['03-qibla.jpg', 'The Qibla compass'],
      ['04-explore.jpg', 'Explore: tools for every part of your deen'],
      ['05-tracker.jpg', 'The prayer tracker'],
      ['06-fasting.jpg', 'Your Ramadan companion'],
      ['07-duas.jpg', 'A dua for every moment'],
      ['08-learn.jpg', 'Learn how to pray'],
      ['09-dhikr.jpg', 'A digital tasbih for your daily dhikr'],
      ['10-names.jpg', 'The 99 Names of Allah, with a practice mode'],
    ],
  },
};

const FEATURES = [
  { title: 'Precise Prayer Times', desc: 'All five daily prayers plus Sunrise, Duha, Qiyam and Tahajjud, worked out on your device and offline, with over 20 calculation methods.' },
  { title: 'The Holy Quran', desc: 'Read the whole Quran with translations in 14 languages, listen to recitations, and pick up exactly where you left off.' },
  { title: 'Qibla Compass', desc: 'The exact direction of the Kaaba from wherever you are, with a live bearing in degrees.' },
  { title: 'Learn How to Pray', desc: 'Step-by-step Salah walkthroughs with an animated 3D guide, synced recitation and translation, plus guides to Wudu and more.' },
  { title: 'Prayer Tracker', desc: 'Log your prayers, build streaks and keep on top of any make-up prayers.' },
  { title: 'Ramadan & Fasting', desc: 'Suhoor and iftar times, a fasting log, and reminders for Sunnah fasts.' },
  { title: 'Duas & Dhikr', desc: 'Authentic duas with Arabic, transliteration and meaning, a digital tasbih, and the 99 Names of Allah.' },
  { title: 'Everything for Your Deen', desc: 'Hajj and Umrah guides, a Zakat calculator, Hadith, the Islamic calendar and moon sighting.' },
  { title: 'Adhan & Notifications', desc: 'Adhan from Makkah, Madinah, Al-Aqsa and more, with sound, vibration or silent for each prayer.' },
  { title: 'Find Places', desc: 'Discover nearby masjids and halal restaurants on a map, with updates and offers from the places themselves.' },
  { title: 'Everywhere You Are', desc: 'Widgets, Live Activities, Apple Watch, Wear OS, CarPlay, Android Auto, and the menu bar or system tray on desktop.' },
  { title: 'No Ads', desc: 'A clean, distraction-free experience with no ads, in multiple languages with full right-to-left support.' },
];

export default function Markaz() {
  return (
    <AppPage
      name='Markaz'
      icon='markaz.png'
      tagline='The centre of your deen: accurate prayer times, the Quran, Qibla direction and much more, on every device.'
      platforms={PLATFORMS}
      fallback='android'
      links={LINKS}
      repo='markaz'
    >
      <Section id='about' title='About Markaz' prose>
        <p>Assalamualaikum!</p>
        <p>Markaz is built for Muslims, by Muslims. Our goal is simple: to provide a single, comprehensive app for all your Islamic needs without compromising on privacy or performance.</p>
        <p>
          While there are many prayer apps available, most are bloated, filled with ads, or sell your data. We built Markaz to be different: no ads, no selling your data, and prayer times worked out
          on your device so they keep working offline.
        </p>
        <p>
          All of this comes without compromise. Markaz delivers a lightning-fast, lightweight experience with a beautiful, modern design, while making the most of the latest technologies available on
          your device.
        </p>
        <p>
          If you find Markaz beneficial, please consider subscribing to Markaz Pro. Your support directly funds ongoing development and helps us to continue improving the app and add new features. We
          truly value every single user and hope Markaz helps you centre your deen.
        </p>
        <p>Jazak'Allah Khairan for your support!</p>
      </Section>

      <Gallery root='markaz/' galleries={GALLERIES} />

      <FeatureGrid features={FEATURES} />
    </AppPage>
  );
}

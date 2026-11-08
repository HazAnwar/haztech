import React from 'react';
import { GitBranch } from 'lucide-react';
import AppPage from '../components/app/AppPage';
import FeatureGrid from '../components/app/FeatureGrid';
import Section from '../components/app/Section';

const APP_STORE = 'https://apps.apple.com/us/app/markaz/id6783402543';

const PLATFORMS = [
  { id: 'android', desc: 'Mobile, Tablet & Watch', url: 'https://play.google.com/store/apps/details?id=com.haztech.prayer' },
  { id: 'ios', desc: 'iOS, iPadOS & watchOS', url: APP_STORE },
  { id: 'mac', desc: 'Apple Silicon & Intel', url: APP_STORE },
  { id: 'windows', desc: 'Windows 10 & 11', url: 'https://apps.microsoft.com/detail/9N53LTXNFFTZ' },
  { id: 'linux', desc: 'Debian, Fedora, Ubuntu', url: 'https://snapcraft.io/markaz' },
  { id: 'web', desc: 'Any Browser', url: 'https://markaz.haztech.services/' },
];

const LINKS = [{ href: 'https://github.com/HazAnwar/markaz', Icon: GitBranch, label: 'View / Download on GitHub' }];

const FEATURES = [
  { title: 'Prayer Times', desc: 'Accurate, location-based prayer times ensuring you never miss a prayer.' },
  { title: 'Qibla Locator', desc: 'Find the exact direction of the Qibla no matter where you are in the world.' },
  { title: 'Ad-Free', desc: 'A completely distraction-free, privacy-respecting experience with zero ads.' },
  { title: 'Privacy', desc: 'No tracking, no data collection and no dodgy deals.' },
];

export default function Markaz() {
  return (
    <AppPage
      name='Markaz'
      icon='markaz.png'
      tagline='Your all in one deen companion for Islamic prayer times, Qibla direction, and much more!'
      platforms={PLATFORMS}
      fallback='android'
      links={LINKS}
      repo='markaz'
    >
      <Section id='about' title='About Markaz' prose>
        <p>Assalamualaikum!</p>
        <p>Markaz is built for Muslims, by Muslims. Our goal is simple: to provide a single, comprehensive app for all your Islamic needs without compromising on privacy or performance.</p>
        <p>
          While there are many prayer apps available, most are bloated, filled with ads, or secretly sell your data. We built Markaz to be different; no ads, no data collection, no location tracking,
          and no intrusive permissions!
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

      <FeatureGrid features={FEATURES} />
    </AppPage>
  );
}

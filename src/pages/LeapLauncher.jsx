import React from 'react';
import { GitBranch, Download } from 'lucide-react';
import AppPage from '../components/app/AppPage';
import FeatureGrid from '../components/app/FeatureGrid';
import Section from '../components/app/Section';
import Gallery from '../components/Gallery';
import { product } from '../products';

const STORES = product('Leap Launcher').stores;

const PLATFORMS = [{ id: 'android', url: STORES.googlePlay, cta: 'Download on Google Play', store: 'Google Play' }];

const LINKS = [
  { href: `${STORES.github}/releases/latest`, Icon: Download, label: 'Download APK' },
  { href: STORES.github, Icon: GitBranch, label: 'View on GitHub' },
];

const GALLERIES = {
  phone: {
    label: 'Phone',
    dir: 'phone/',
    portrait: true,
    shots: [
      ['01_home.jpg', 'A clean home screen with the control you actually want'],
      ['02_search.jpg', 'Universal search for apps, shortcuts, settings, contacts, notes and the web'],
      ['03_appmenu.jpg', 'Custom icons, swipe actions, app pairs and app timers'],
      ['04_icons.jpg', 'Icon shapes, icon packs, themed icons and Material You'],
      ['05_drawer.jpg', 'An app drawer that sorts itself into categories'],
      ['06_scenes.jpg', 'Scenes that change your home screen by time, place, Wi-Fi or headphones'],
      ['07_wellbeing.jpg', 'App timers and mindful pauses built into your home screen'],
      ['08_everywhere.jpg', 'One launcher for phones, tablets, foldables and TV'],
    ],
  },
  tablet: {
    label: 'Tablet & foldable',
    dir: 'tablet/',
    shots: [
      ['01_tablet.jpg', 'Wider grids, a roomy dock and widgets on tablets'],
      ['02_fold.jpg', 'Mirrored pages or a separate inner-screen layout on foldables'],
      ['03_power.jpg', 'Universal search and scenes'],
      ['04_tablet_drawer.jpg', 'Smart categories in the tablet app drawer'],
      ['05_fold_settings.jpg', '3D fold effect and tabletop layout'],
    ],
  },
  tv: {
    label: 'Android TV',
    dir: 'tv/',
    shots: [
      ['01_home.jpg', 'Your apps, your rows and your background, with no ads'],
      ['02_playnext.jpg', 'Play Next and channel rows'],
      ['03_profiles.jpg', 'Profiles for everyone in the house'],
      ['04_kids.jpg', 'Kids profiles with allowed apps, a daily limit and a PIN'],
      ['05_focus.jpg', 'Focus borders, scaling and sounds tuned for the remote'],
      ['06_quick.jpg', 'Quick settings, sleep timer and screensaver'],
    ],
  },
};

const FEATURES = [
  { title: 'Your Home Screen', desc: 'Any grid size, multiple pages, a scrolling dock, widget stacks, folders, app pairs and At a Glance with live weather.' },
  { title: 'Make It Yours', desc: 'Icon packs, icon shapes, themed icons, Material You colours, label fonts, video wallpapers and glass or solid styles.' },
  { title: 'Universal Search', desc: 'Apps, shortcuts, settings, contacts, events, files and notes in one place, plus a calculator, unit conversions and quick commands.' },
  { title: 'A Smarter App Drawer', desc: 'Automatic categories, tabs, folders, suggested apps, hidden apps, work profile and app lock.' },
  { title: 'Scenes', desc: 'Your dock and home page adapt to the time, place, Wi-Fi, Bluetooth, headphones or charging. It all stays on your device.' },
  { title: 'Digital Wellbeing', desc: 'Daily app timers, mindful pauses before distracting apps open and focus scenes for when you work.' },
  { title: 'Foldables & Tablets', desc: 'Mirror pages side by side or build a separate inner-screen layout, with a 3D fold animation and tabletop mode.' },
  { title: 'Android TV & Google TV', desc: 'Favourite app rows, Play Next, profiles, Kids mode with a PIN, an HDMI input switcher, bedtime and a screensaver.' },
];

export default function LeapLauncher() {
  return (
    <AppPage
      name='Leap Launcher'
      icon='leap.png'
      tagline='A fast, clean home screen for Android phones, tablets, foldables and Android TV.'
      platforms={PLATFORMS}
      fallback='android'
      links={LINKS}
      repo='leap-launcher'
    >
      <Section id='about' title='About Leap Launcher' prose>
        <p>
          Leap Launcher keeps the stock Android feel and adds the controls you actually want, with no ads. Places used by scenes and smart suggestions never leave your device, and weather only uses
          the town you type in.
        </p>
        <p>It&apos;s free to download. An optional Leap Pro subscription unlocks extra features and supports development, and one subscription covers your phone, tablet and TV.</p>
      </Section>

      <Gallery root='leap-launcher/' galleries={GALLERIES} />

      <FeatureGrid features={FEATURES} />
    </AppPage>
  );
}

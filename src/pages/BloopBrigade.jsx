import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import { COMPANY } from '../company';
import AppPage from '../components/app/AppPage';
import DownloadOptions from '../components/app/DownloadOptions';
import FeatureGrid from '../components/app/FeatureGrid';
import Section from '../components/app/Section';
import TrailerBanner from '../components/bloop/TrailerBanner';
import Gallery from '../components/bloop/Gallery';
import Shorts from '../components/bloop/Shorts';
import { useOneVideoAtATime } from '../hooks/useVideoPlayback';

const APP_STORE = 'https://apps.apple.com/app/bloop-brigade/id6818502459';
const GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.haztech.bloopbrigade';

// Checked against the game's export settings: iOS 15+ (A12), macOS 12+ universal, Android 7.0+ 64-bit.
const PLATFORMS = [
  { id: 'ios', desc: 'iPhone, iPad & Vision Pro', url: APP_STORE, store: 'the App Store' },
  { id: 'mac', desc: 'Apple Silicon & Intel', url: APP_STORE, store: 'the App Store' },
  { id: 'android', desc: 'Phones & Tablets', url: GOOGLE_PLAY, store: 'Google Play' },
  { id: 'pc', name: 'PC & Consoles', Icon: Gamepad2, desc: 'Coming later' },
];

const FEATURES = [
  { title: 'Pop the Grumbles', desc: 'Blast bubbles and build towers to stop the grumpy Grumbles draining the Star Seed’s energy.' },
  { title: 'Play Together', desc: 'Team up with up to 4 players on one screen in split-screen, or online with friends on other devices.' },
  { title: 'A Growing Island', desc: 'Every few waves the volcano erupts and your island grows, with new paths, shops and burrows. No two runs are alike.' },
  { title: 'Build and Upgrade', desc: 'Place Poppers, Honey Pots, Mortars and more, then upgrade them between waves to face tougher Grumbles and boss waves.' },
  { title: 'Dress Up Your Bloop', desc: 'Unlock dozens of outfits, hats and accessories in the Locker just by playing. No real-money purchases.' },
  { title: 'Made for Everyone', desc: 'Bright and friendly, designed for all ages. No ads, no chat and no pay-to-win.' },
];

const DETAILS = [
  ['Developer and publisher', COMPANY.name],
  ['Genre', 'Co-op tower defence'],
  ['Players', '1 to 4 (local split-screen and online co-op)'],
  ['Available on', 'iPhone, iPad, Mac and Apple Vision Pro (App Store); Android phones and tablets (Google Play)'],
  ['Coming later', 'PC and consoles (planned)'],
  ['Requires', 'iOS / iPadOS 15 or later (A12 Bionic or newer), macOS 12 or later, Android 7.0 or later'],
  ['Price', 'One-off purchase. No ads, no loot boxes and no in-app purchases'],
  ['Languages', 'English, French, German, Spanish, Italian, Portuguese (Brazil), Japanese, Simplified Chinese, Arabic'],
  ['Age rating', 'App Store 4+ · PEGI 3. Designed for all ages'],
];

export default function BloopBrigade() {
  useOneVideoAtATime();

  return (
    <AppPage name='Bloop Brigade' icon='bloop-brigade.png' tagline='A colourful co-op tower defence game for 1 to 4 players. Pop the Grumbles and protect the Star Seed!' platforms={PLATFORMS}>
      <Section>
        <TrailerBanner />
      </Section>

      <Section id='about' title='About Bloop Brigade' prose>
        <p>
          Grumbles are hopping along the island paths towards the volcano, where the Star Seed glows with Star Energy. Grab your bubble blaster, build towers, pick upgrades after each wave and keep
          the Grumbles away for as long as you can.
        </p>
        <p>Play solo, with friends and family on the same screen, or online with players on other devices.</p>
      </Section>

      <Gallery />

      <Shorts />

      <FeatureGrid features={FEATURES} />

      <Section>
        <div className='glass panel panel-center'>
          <h2>Ready to pop some Grumbles?</h2>
          <p>One purchase, the whole game. Every outfit is unlocked by playing.</p>
          <DownloadOptions />
        </div>
      </Section>

      <Section>
        <div className='glass panel'>
          <h2>Game details</h2>
          <dl className='bb-details'>
            {DETAILS.map(([k, v]) => (
              <React.Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </React.Fragment>
            ))}
            <dt>Get the game</dt>
            <dd>
              <a href={APP_STORE} target='_blank' rel='noopener noreferrer'>
                App Store
              </a>{' '}
              ·{' '}
              <a href={GOOGLE_PLAY} target='_blank' rel='noopener noreferrer'>
                Google Play
              </a>
            </dd>
            <dt>Support</dt>
            <dd>
              <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a>
            </dd>
            <dt>Your data</dt>
            <dd>
              <Link to='/privacy#bloop-brigade'>Privacy Policy</Link> · <Link to='/data-deletion'>Delete your data</Link>
            </dd>
          </dl>
        </div>
      </Section>
    </AppPage>
  );
}

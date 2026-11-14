import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import { IconApple } from '../components/PlatformIcons';
import { COMPANY } from '../company';
import { product } from '../products';
import AppPage from '../components/app/AppPage';
import DownloadOptions from '../components/app/DownloadOptions';
import FeatureGrid from '../components/app/FeatureGrid';
import Section from '../components/app/Section';
import TrailerBanner from '../components/bloop/TrailerBanner';
import Gallery from '../components/Gallery';
import Shorts from '../components/bloop/Shorts';
import { useOneVideoAtATime } from '../hooks/useVideoPlayback';

const { appStore: APP_STORE, googlePlay: GOOGLE_PLAY, epic: EPIC } = product('Bloop Brigade').stores;

// Checked against the game's export settings: iOS 15+ (A12), macOS 12+ universal, Android 7.0+ 64-bit, Windows 10+ 64-bit.
const PLATFORMS = [
  { id: 'ios', desc: 'iPhone, iPad & Vision Pro', url: APP_STORE, store: 'the App Store' },
  { id: 'mac', desc: 'Apple Silicon & Intel · App Store', url: APP_STORE, store: 'the App Store' },
  // Mac is also on Epic: its own card (Mac visitors' main button stays the App Store).
  { id: 'mac-epic', name: 'macOS', Icon: IconApple, desc: 'Apple Silicon & Intel · Epic Games Store', url: EPIC, store: 'the Epic Games Store' },
  { id: 'android', desc: 'Phones & Tablets', url: GOOGLE_PLAY, store: 'Google Play' },
  { id: 'windows', name: 'Windows PC', desc: 'Windows 10 & 11 · Epic Games Store', url: EPIC, store: 'the Epic Games Store' },
  { id: 'consoles', name: 'Consoles', Icon: Gamepad2, desc: 'Coming later' },
];

const GALLERIES = {
  mobile: {
    label: 'On your phone',
    dir: 'mobile/',
    shots: [
      ['01_swarm.jpg', 'Holding back a swarm of Grumbles with the touch controls'],
      ['02_poppers.jpg', 'A line of Popper towers guarding the path'],
      ['03_night.jpg', 'Defending the island at night'],
      ['04_locker.jpg', 'Dressing up a Bloop in the Locker'],
      ['05_place.jpg', 'Placing a new tower beside the path'],
      ['06_king.jpg', 'Facing the King Grumble boss'],
      ['07_chase.jpg', 'Heading out past a blaster kiosk as the Grumbles arrive'],
      ['08_storm.jpg', 'Fighting on through a storm'],
    ],
  },
  scenes: {
    label: 'Around the island',
    dir: '',
    shots: [
      ['01_island.jpg', 'The island and its volcano at dawn'],
      ['04_friends.jpg', 'Four friends in costumes defending together'],
      ['05_splitscreen.jpg', 'Four-player split-screen'],
      ['03_chase.jpg', 'A Bloop running from a pack of Grumbles'],
      ['02_portal.jpg', 'Grumbles pouring out of a portal'],
      ['06_defend.jpg', 'Towers and Bloops defending the path'],
      ['07_boss.jpg', 'The King Grumble boss'],
      ['08_eruption.jpg', 'The volcano erupting and the island growing'],
      ['09_night.jpg', 'The island at night'],
      ['10_towers.jpg', 'A wall of upgraded towers'],
    ],
  },
};

const FEATURES = [
  {
    title: 'Pop the Grumbles',
    desc: 'Blast bubbles and build towers to stop the grumpy Grumbles draining the Star Seed’s energy. Ten kinds of Grumble and four giant bosses, including King Grumble.',
  },
  { title: 'Play Together', desc: 'Host an online party and share a six-letter code, or play split-screen with controllers: two players on iPad and tablets, up to four on PC and Mac.' },
  { title: 'A Growing Island', desc: 'Every few waves the volcano erupts and your island grows, with new paths, shops and burrows. No two runs are alike.' },
  { title: 'Build and Upgrade', desc: 'Four towers to build and upgrade, five bubble blasters to buy, and new upgrades to pick after every wave.' },
  { title: 'Dress Up Your Bloop', desc: 'Unlock over 100 outfits, hats and accessories in 15 colours with Sparkles you earn by playing.' },
  { title: 'Play Your Way', desc: 'Touch controls or a game controller, third- or first-person view and Chill, Normal or Hardcore difficulty.' },
  {
    title: 'Achievements & Cloud Saves',
    desc: '26 achievements, a best-wave leaderboard, and progress that follows you to your other devices with your Epic account, Game Center or Google Play Games.',
  },
  { title: 'Made for Everyone', desc: 'Bright and friendly, designed for all ages. No ads, no chat, no loot boxes and no pay-to-win.' },
];

const DETAILS = [
  ['Developer and publisher', COMPANY.name],
  ['Genre', 'Co-op tower defence'],
  ['Players', '1 to 4: online co-op on every device, plus split-screen with controllers (2 on iPad and tablets, up to 4 on PC and Mac)'],
  ['Available on', 'Windows PC and Mac (Epic Games Store); iPhone, iPad, Mac and Apple Vision Pro (App Store); Android phones and tablets (Google Play)'],
  ['Coming later', 'Consoles (planned)'],
  ['Requires', 'Windows 10 or later (64-bit), macOS 12 or later, iOS / iPadOS 15 or later (A12 Bionic or newer), Android 7.0 or later'],
  ['Price', 'One-off purchase. No ads, no loot boxes and no in-app purchases'],
  ['Achievements', '26 achievements (Epic Games Store, Game Center and Google Play Games) and a best-wave leaderboard (Game Center and Google Play Games)'],
  ['Languages', 'English, French, German, Spanish, Italian, Portuguese (Brazil), Japanese, Simplified Chinese, Arabic'],
  ['Age rating', 'App Store 4+ · PEGI 3. Designed for all ages'],
];

export default function BloopBrigade() {
  useOneVideoAtATime();

  return (
    <AppPage
      name='Bloop Brigade'
      icon='bloop-brigade.png'
      tagline='A colourful co-op tower defence game for all ages. Pop the Grumbles, build towers and protect the Star Seed, solo or with friends!'
      platforms={PLATFORMS}
    >
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

      <Gallery root='bloop-brigade/' galleries={GALLERIES} />

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
              </a>{' '}
              ·{' '}
              <a href={EPIC} target='_blank' rel='noopener noreferrer'>
                Epic Games Store
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

import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa';
import { COMPANY } from '../company';
import { IconApple } from '../components/PlatformIcons';

const STORES = {
  apple: { label: 'App Store', icon: IconApple, url: 'https://apps.apple.com/app/bloop-brigade/id6818502459' },
  google: { label: 'Google Play', icon: FaGooglePlay, url: 'https://play.google.com/store/apps/details?id=com.haztech.bloopbrigade' },
};

const FEATURES = [
  { title: 'Pop the Grumbles', desc: 'Blast bubbles and build towers to stop the grumpy Grumbles draining the Star Seed’s energy.' },
  { title: 'Play Together', desc: 'Team up with up to 4 players on one screen in split-screen, or online with friends on other devices.' },
  { title: 'A Growing Island', desc: 'Every few waves the volcano erupts and your island grows, with new paths, shops and burrows. No two runs are alike.' },
  { title: 'Build and Upgrade', desc: 'Place Poppers, Honey Pots, Mortars and more, then upgrade them between waves to face tougher Grumbles and boss waves.' },
  { title: 'Dress Up Your Bloop', desc: 'Unlock dozens of outfits, hats and accessories in the Locker just by playing. No real-money purchases.' },
  { title: 'Made for Everyone', desc: 'Bright and friendly, designed for all ages. No ads, no chat and no pay-to-win.' },
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
      ['07_challenges.jpg', 'The Challenges screen'],
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

const SHORTS = [
  ['squad', 'Online co-op with a six-letter code'],
  ['towers', 'Build, upgrade and defend'],
  ['closet', 'Over 100 outfits to unlock'],
  ['nope', 'Things this game doesn’t have'],
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

function detectStore(param) {
  const p = (param || '').toLowerCase();
  if (['ios', 'iphone', 'ipad', 'mac', 'macos', 'apple'].includes(p)) return 'apple';
  if (['android', 'google', 'play'].includes(p)) return 'google';
  if (typeof navigator === 'undefined') return null;
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('android')) return 'google';
  if (/iphone|ipad|ipod|macintosh|mac os x/.test(ua)) return 'apple';
  return null;
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function StoreButton({ id, primary }) {
  const s = STORES[id];
  const Icon = s.icon;
  return (
    <a href={s.url} className={`btn ${primary ? 'btn-primary' : 'btn-secondary'} bb-store-btn`} target='_blank' rel='noopener noreferrer'>
      <Icon size={22} />
      <span className='bb-store-text'>
        <small>{id === 'apple' ? 'Download on the' : 'Get it on'}</small>
        {s.label}
      </span>
    </a>
  );
}

/** A muted highlight loop that swaps to the full trailer (with sound) on demand. */
function TrailerBanner({ base }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [autoLoop] = useState(() => !prefersReducedMotion());

  // Once the trailer <video> mounts, start it (the click counts as the user gesture for sound).
  useEffect(() => {
    if (playing) ref.current?.play().catch(() => {});
  }, [playing]);

  return (
    <div className='bb-trailer'>
      {playing ? (
        <video ref={ref} key='trailer' src={`${base}bloop-brigade/trailer.mp4`} poster={`${base}bloop-brigade/trailer.jpg`} controls playsInline preload='auto' />
      ) : (
        <>
          <video
            key='loop'
            src={autoLoop ? `${base}bloop-brigade/highlights.mp4` : undefined}
            poster={`${base}bloop-brigade/highlights.jpg`}
            autoPlay={autoLoop}
            muted
            loop
            playsInline
            aria-hidden='true'
          />
          <button className='bb-play' onClick={() => setPlaying(true)}>
            <span className='bb-play-icon'>
              <Play size={26} fill='currentColor' />
            </span>
            Watch the trailer
          </button>
        </>
      )}
    </div>
  );
}

function Gallery({ base }) {
  const [tab, setTab] = useState('mobile');
  const [open, setOpen] = useState(-1);
  const g = GALLERIES[tab];
  const n = g.shots.length;
  const src = (file) => `${base}bloop-brigade/${g.dir}${file}`;
  const step = (d) => setOpen((i) => (i + d + n) % n);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % n);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + n) % n);
    };
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, n]);

  return (
    <section style={{ padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', textAlign: 'center' }}>Screenshots</h2>
      <div className='bb-tabs' role='tablist'>
        {Object.entries(GALLERIES).map(([id, v]) => (
          <button key={id} role='tab' aria-selected={tab === id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>
            {v.label}
          </button>
        ))}
      </div>
      <div className='bb-grid'>
        {g.shots.map(([file, alt], i) => (
          <button key={tab + file} className='bb-shot' onClick={() => setOpen(i)} aria-label={`View larger: ${alt}`}>
            <img src={src(file)} alt={alt} loading='lazy' />
          </button>
        ))}
      </div>

      {open >= 0 && (
        <div className='bb-lightbox' role='dialog' aria-modal='true' aria-label={g.shots[open][1]} onClick={() => setOpen(-1)}>
          <button className='bb-lb-btn bb-lb-close' aria-label='Close' onClick={() => setOpen(-1)}>
            <X size={24} />
          </button>
          <button
            className='bb-lb-btn bb-lb-prev'
            aria-label='Previous screenshot'
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft size={28} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={src(g.shots[open][0])} alt={g.shots[open][1]} />
            <figcaption>
              {g.shots[open][1]} · {open + 1} / {n}
            </figcaption>
          </figure>
          <button
            className='bb-lb-btn bb-lb-next'
            aria-label='Next screenshot'
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

function Shorts({ base }) {
  const refs = useRef([]);
  // Only one short plays at a time.
  const onPlay = (i) => refs.current.forEach((v, j) => j !== i && v && !v.paused && v.pause());
  return (
    <section style={{ padding: '4rem 0 2rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', textAlign: 'center' }}>Watch it in action</h2>
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>Short clips, recorded straight from the game.</p>
      <div className='bb-shorts'>
        {SHORTS.map(([id, title], i) => (
          <figure key={id}>
            <video
              ref={(el) => (refs.current[i] = el)}
              src={`${base}bloop-brigade/shorts/${id}.mp4`}
              poster={`${base}bloop-brigade/shorts/${id}.jpg`}
              preload='none'
              controls
              playsInline
              onPlay={() => onPlay(i)}
              aria-label={title}
            />
            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function BloopBrigade() {
  const base = import.meta.env.BASE_URL;
  const [searchParams] = useSearchParams();
  const detected = detectStore(searchParams.get('platform'));
  // ?redirect sends phones and Macs straight to their store (handy for QR codes and video links).
  const [redirecting, setRedirecting] = useState(searchParams.has('redirect') && !!detected);

  useEffect(() => {
    if (!redirecting) return;
    window.location.href = STORES[detected].url;
    const t = setTimeout(() => setRedirecting(false), 2500);
    return () => clearTimeout(t);
  }, [redirecting, detected]);

  if (redirecting) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <div className='animate-float'>
          <img src={`${base}bloop-brigade.png`} alt='Bloop Brigade icon' style={{ width: '64px', height: '64px', borderRadius: '16px' }} />
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>Opening {STORES[detected].label}...</p>
      </div>
    );
  }

  // The visitor's own store goes first (and is highlighted); otherwise both look the same.
  const order = detected === 'google' ? ['google', 'apple'] : ['apple', 'google'];

  return (
    <div className='app-page'>
      <section className='hero' style={{ minHeight: 'auto', paddingBottom: '1rem' }}>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <img src={`${base}bloop-brigade.png`} alt='Bloop Brigade icon' style={{ width: '96px', height: '96px', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }} />
        </div>
        <span className='bb-badge'>Out now</span>
        <h1 className='gradient-text'>Bloop Brigade</h1>
        <p>A colourful co-op tower defence game for 1 to 4 players. Pop the Grumbles and protect the Star Seed!</p>
        <div className='bb-stores'>
          {order.map((id, i) => (
            <StoreButton key={id} id={id} primary={!detected || i === 0} />
          ))}
        </div>
        <p className='bb-fineprint'>iPhone, iPad, Mac and Android · No ads or in-app purchases · Developed and published by {COMPANY.name}</p>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <TrailerBanner base={base} />
      </section>

      <section id='about' style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Bloop Brigade</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Grumbles are hopping along the island paths towards the volcano, where the Star Seed glows with Star Energy. Grab your bubble blaster, build towers, pick upgrades after each wave and keep
          the Grumbles away for as long as you can.
        </p>
        <br />
        <p style={{ color: 'var(--text-secondary)' }}>Play solo, with friends and family on the same screen, or online with players on other devices.</p>
      </section>

      <Gallery base={base} />

      <Shorts base={base} />

      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem', textAlign: 'left' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 0 4rem' }}>
        <div className='glass' style={{ padding: '2.5rem 1.5rem', borderRadius: '1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Ready to pop some Grumbles?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>One purchase, the whole game. Every outfit is unlocked by playing.</p>
          <div className='bb-stores'>
            {order.map((id, i) => (
              <StoreButton key={id} id={id} primary={!detected || i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 4rem' }}>
        <div className='glass' style={{ padding: '2.5rem', borderRadius: '1rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Game details</h2>
          <dl className='bb-details'>
            {DETAILS.map(([k, v]) => (
              <React.Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </React.Fragment>
            ))}
            <dt>Get the game</dt>
            <dd>
              <a href={STORES.apple.url} target='_blank' rel='noopener noreferrer'>
                App Store
              </a>{' '}
              ·{' '}
              <a href={STORES.google.url} target='_blank' rel='noopener noreferrer'>
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
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../company';

const FEATURES = [
  { title: 'Pop the Grumbles', desc: 'Blast bubbles and build towers to stop the grumpy Grumbles draining the Star Seed’s energy.' },
  { title: 'Play Together', desc: 'Team up with up to 4 players on one screen in split-screen, or online with friends on other devices.' },
  { title: 'A Growing Island', desc: 'Every few waves the volcano erupts and your island grows, with new paths, shops and burrows. No two runs are alike.' },
  { title: 'Build and Upgrade', desc: 'Place Poppers, Honey Pots, Mortars and more, then upgrade them between waves to face tougher Grumbles and boss waves.' },
  { title: 'Dress Up Your Bloop', desc: 'Unlock dozens of outfits, hats and accessories in the Locker just by playing. No real-money purchases.' },
  { title: 'Made for Everyone', desc: 'Bright and friendly, designed for all ages. No ads, no chat and no pay-to-win.' },
];

const SHOTS = [
  ['01_island.jpg', 'The island and its volcano at dawn'],
  ['04_friends.jpg', 'Four friends in costumes defending together'],
  ['05_splitscreen.jpg', 'Four-player split-screen'],
  ['03_chase.jpg', 'A Bloop running from a pack of Grumbles'],
  ['07_boss.jpg', 'The King Grumble boss'],
  ['08_eruption.jpg', 'The volcano erupting and the island growing'],
];

const DETAILS = [
  ['Developer and publisher', COMPANY.name],
  ['Genre', 'Co-op tower defence'],
  ['Players', '1 to 4 (local split-screen and online co-op)'],
  ['Platforms', 'PC, consoles and mobile (planned)'],
  ['Release', 'Q4 2026'],
  ['Languages', 'English, French, German, Spanish, Italian, Portuguese (Brazil), Japanese, Simplified Chinese, Arabic'],
  ['Age', 'Designed for all ages (age rating pending)'],
];

export default function BloopBrigade() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className='app-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <img src={`${base}bloop-brigade.png`} alt='Bloop Brigade icon' style={{ width: '96px', height: '96px', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }} />
        </div>
        <h1 className='gradient-text'>Bloop Brigade</h1>
        <p>A colourful co-op tower defence game for 1 to 4 players. Pop the Grumbles and protect the Star Seed!</p>
        <p style={{ fontSize: '0.95rem' }}>Developed and published by {COMPANY.name}</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', width: '100%' }}>
          <span className='btn btn-secondary' style={{ width: '100%', maxWidth: '320px', cursor: 'default' }}>
            Coming Q4 2026
          </span>
        </div>
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

      <section style={{ padding: '2rem 0' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Screenshots</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1rem' }}>
          {SHOTS.map(([file, alt]) => (
            <img key={file} src={`${base}bloop-brigade/${file}`} alt={alt} loading='lazy' style={{ width: '100%', borderRadius: '0.75rem', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }} />
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className='glass' style={{ padding: '2rem', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 0 4rem' }}>
        <div className='glass' style={{ padding: '2.5rem', borderRadius: '1rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Game details</h2>
          <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, max-content) 1fr', gap: '0.6rem 1.5rem', margin: 0 }}>
            {DETAILS.map(([k, v]) => (
              <React.Fragment key={k}>
                <dt style={{ fontWeight: 600 }}>{k}</dt>
                <dd style={{ color: 'var(--text-secondary)', margin: 0 }}>{v}</dd>
              </React.Fragment>
            ))}
            <dt style={{ fontWeight: 600 }}>Support</dt>
            <dd style={{ color: 'var(--text-secondary)', margin: 0 }}>
              <a href={`mailto:${COMPANY.supportEmail}`} style={{ color: 'var(--primary-color)' }}>
                {COMPANY.supportEmail}
              </a>
            </dd>
            <dt style={{ fontWeight: 600 }}>Your data</dt>
            <dd style={{ color: 'var(--text-secondary)', margin: 0 }}>
              <Link to='/privacy#bloop-brigade' style={{ color: 'var(--primary-color)' }}>
                Privacy Policy
              </Link>{' '}
              ·{' '}
              <Link to='/data-deletion' style={{ color: 'var(--primary-color)' }}>
                Delete your data
              </Link>
            </dd>
          </dl>
        </div>
      </section>
    </div>
  );
}

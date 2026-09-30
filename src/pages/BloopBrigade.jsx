import React from 'react';

const FEATURES = [
  { title: 'Pop the Grumbles', desc: 'Blast bubbles and build towers to stop the grumpy Grumbles draining your Star Energy.' },
  { title: 'Play Together', desc: 'Team up with up to 4 players on one screen, with online co-op on the way.' },
  { title: 'A Growing Island', desc: 'Every few waves the volcano erupts and your island grows, with new paths and shops. No two runs are alike.' },
  { title: 'Dress Up Your Bloop', desc: 'Unlock outfits, hats and accessories in the Locker just by playing.' },
  { title: 'Made for Everyone', desc: 'Bright, friendly and PEGI 3. No ads, no chat and no pay-to-win.' },
  { title: 'Plays Everywhere', desc: 'Built for PC, consoles, tablets and phones, with controller, keyboard and touch support.' },
];

export default function BloopBrigade() {
  return (
    <div className='app-page'>
      <section className='hero'>
        <div className='animate-float' style={{ marginBottom: '2rem' }}>
          <img
            src={`${import.meta.env.BASE_URL}bloop-brigade.png`}
            alt='Bloop Brigade Icon'
            style={{ width: '96px', height: '96px', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}
          />
        </div>
        <h1 className='gradient-text'>Bloop Brigade</h1>
        <p>A colourful co-op tower defence game. Pop the Grumbles and protect the Star Energy!</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', width: '100%' }}>
          <span className='btn btn-secondary' style={{ width: '100%', maxWidth: '320px', cursor: 'default' }}>
            Coming soon
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
        <p style={{ color: 'var(--text-secondary)' }}>Play solo, with friends and family on the same screen, or (soon) online with players on other devices.</p>
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
    </div>
  );
}

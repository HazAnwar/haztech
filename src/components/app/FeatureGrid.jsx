import React from 'react';
import Section from './Section';

/** The "Features" section: a responsive grid of cards. features: [{ title, desc }] */
export default function FeatureGrid({ features, title = 'Features' }) {
  return (
    <Section title={title}>
      <div className='feature-grid'>
        {features.map((f) => (
          <div key={f.title} className='glass feature-card'>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

import React from 'react';

export default function Privacy() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className='glass' style={{ padding: '3rem', borderRadius: '1rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          HazTech Services Limited respects your privacy. Our applications are built with data protection and user privacy in mind. We do not collect personally identifiable information without your explicit consent.
          <br /><br />
          Any anonymous analytics and crash reports we collect are strictly used for improving the application experience and fixing bugs. You can opt-out of these features within our apps where applicable.
          <br /><br />
          If you have any questions or concerns regarding our privacy practices, please contact us at HazTechServices@gmail.com.
        </p>
      </div>
    </div>
  );
}

import React from 'react';

export default function Terms() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className='glass' style={{ padding: '3rem', borderRadius: '1rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          By using any applications provided by HazTech Services Limited, you agree to comply with our terms of service. Our applications are provided "as is" without warranties of any kind.
          <br /><br />
          <strong>1. Subscriptions & Purchases:</strong> Certain features may require a premium subscription or one-time purchase. All payments are securely processed through your device's respective app store (e.g., Google Play or Apple App Store). Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.
          <br /><br />
          <strong>2. Usage Restrictions:</strong> You agree not to misuse our services or attempt to circumvent any security features, licensing, or payment mechanisms within our applications.
          <br /><br />
          HazTech Services Limited reserves the right to modify or terminate any services or applications at any time without prior notice.
          <br /><br />
          If you encounter any issues or need further assistance, please reach
          out to our support team at <a href='mailto:terms@haztech.services' style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>terms@haztech.services</a>.
        </p>
      </div>
    </div>
  );
}

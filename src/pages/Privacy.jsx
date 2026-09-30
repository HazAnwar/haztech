import React from 'react';

export default function Privacy() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className='glass' style={{ padding: '3rem', borderRadius: '1rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          HazTech Services Limited respects your privacy. Our applications are built with data protection in mind, but to provide core functionality, we do request access to certain device features
          and data:
          <br />
          <br />
          <strong>1. Location Data:</strong> Applications such as Markaz require background location access to calculate accurate prayer times and Qibla direction. This data is processed locally and
          is not sold to third parties.
          <br />
          <br />
          <strong>2. Sensitive Device Access:</strong> Leap Launcher utilizes Accessibility Services and Notification Listeners to provide custom home screen features. The content of your
          notifications and screen is processed strictly on-device and is never transmitted to our servers.
          <br />
          <br />
          <strong>3. Analytics & Crash Reporting:</strong> We utilize third-party services (such as Firebase) to improve stability. These services may collect anonymous device identifiers, IP
          addresses, and usage metrics.
          <br />
          <br />
          <strong>4. Authentication & Payments:</strong> We use secure third-party providers (like Google Sign-In and RevenueCat) for authentication and subscription management. We do not store your
          payment credentials.
          <br />
          <br />
          <strong>5. Online Games (Bloop Brigade):</strong> Bloop Brigade uses Epic Online Services for online co-op, cross-platform play and syncing your progress between devices. When you use online
          features, Epic Online Services may process an account identifier, your display name, a device identifier, any platform account you choose to link (such as Epic, PlayStation Network, Xbox or
          Nintendo), your game progress, and your IP address to connect you with other players. Playing offline or in local split-screen does not use these services. Bloop Brigade is designed for all
          ages and has no chat, messaging or advertising. See the{' '}
          <a href='https://www.epicgames.com/site/privacypolicy' target='_blank' rel='noopener noreferrer' style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
            Epic Games Privacy Policy
          </a>{' '}
          for how Epic handles this data.
          <br />
          <br />
          <strong>6. Data Deletion:</strong> If you wish to delete your account or any associated data, please follow the instructions on our{' '}
          <a href='/data-deletion' style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
            Data Deletion
          </a>{' '}
          page.
          <br />
          <br />
          If you have any questions or concerns regarding our privacy practices, please contact us at{' '}
          <a href='mailto:privacy@haztech.services' style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
            privacy@haztech.services
          </a>
          .
        </p>
      </div>
    </div>
  );
}

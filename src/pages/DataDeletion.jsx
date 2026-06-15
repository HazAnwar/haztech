import React from 'react';

export default function DataDeletion() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className='glass' style={{ padding: '3rem', borderRadius: '1rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Account & Data Deletion</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          At HazTech Services Limited, we value your privacy and give you full control over your data. If you wish to delete your account and all associated data from any of our applications
          (including Markaz), you can do so by following the instructions below.
          <br />
          <br />
          <strong>Method 1: In-App Deletion</strong>
          <br />
          If the application supports user accounts, you can usually delete your account directly from within the app:
          <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
            <li>Open the application.</li>
            <li>
              Navigate to the <strong>Settings</strong> or <strong>Profile</strong> section.
            </li>
            <li>
              Tap on <strong>Delete Account</strong> or <strong>Account Management</strong> and follow the on-screen prompts.
            </li>
          </ul>
          <br />
          <strong>Method 2: Email Request</strong>
          <br />
          If you no longer have the app installed or prefer to request deletion via email, please send an email to our support team:
          <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
            <li>
              <strong>Email:</strong>{' '}
              <a href='mailto:delete@haztech.services' style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
                delete@haztech.services
              </a>
            </li>
            <li>
              <strong>Subject:</strong> Account Data Deletion Request
            </li>
            <li>
              <strong>Body:</strong> Please include the email address associated with your account and the name of the app (e.g., Markaz).
            </li>
          </ul>
          <br />
          <strong>What happens when you request deletion?</strong>
          <br />
          Upon receiving your request, we will permanently delete your account profile, preferences, and any personally identifiable information associated with your account from our active databases
          within 30 days. Please note that some anonymous telemetry or crash data may be retained as it cannot be linked back to you.
        </p>
      </div>
    </div>
  );
}

import React from 'react';

export default function BugReport({ repoName }) {
  const getFormData = () => {
    const title = document.getElementById('bugTitle').value.trim();
    const device = document.getElementById('bugDevice').value.trim();
    const steps = document.getElementById('bugSteps').value.trim();
    const expected = document.getElementById('bugExpected').value.trim();
    return { title, device, steps, expected };
  };

  const handleGitHub = (e) => {
    e.preventDefault();
    const { title, device, steps, expected } = getFormData();
    if (!title) return;

    let body = '';
    if (device) body += `**Device / OS Version:** ${device}\n\n`;
    if (steps) body += `**Steps to Reproduce:**\n${steps}\n\n`;
    if (expected) body += `**Expected Behaviour:**\n${expected}\n`;

    const url = new URL(`https://github.com/HazAnwar/${repoName}/issues/new`);
    url.searchParams.set('title', title);
    if (body) url.searchParams.set('body', body);
    url.searchParams.set('labels', 'bug');

    window.open(url.toString(), '_blank', 'noopener,noreferrer');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const { title, device, steps, expected } = getFormData();
    if (!title) return;

    let body = '';
    if (device) body += `Device / OS Version: ${device}\n\n`;
    if (steps) body += `Steps to Reproduce:\n${steps}\n\n`;
    if (expected) body += `Expected Behaviour:\n${expected}\n`;

    const mailtoUrl = `mailto:support@haztech.services?subject=${encodeURIComponent(`[Bug] ${title}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      className='bug-report'
      id='report'
      style={{
        padding: '4rem 0',
        marginTop: '4rem',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className='container'>
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Report a Bug
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
          }}
        >
          Found an issue? Fill in the details below and submit via GitHub or
          email.
        </p>
        <form
          className='glass'
          style={{
            padding: '2rem',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <label htmlFor='bugTitle' style={{ fontWeight: '600' }}>
              Summary <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              id='bugTitle'
              placeholder='Brief description of the issue'
              required
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-primary)',
              }}
            />
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <label htmlFor='bugDevice' style={{ fontWeight: '600' }}>
              Device / OS Version
            </label>
            <input
              type='text'
              id='bugDevice'
              placeholder='e.g. iPhone 15 Pro, iOS 17.2'
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-primary)',
              }}
            />
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <label htmlFor='bugSteps' style={{ fontWeight: '600' }}>
              Steps to Reproduce
            </label>
            <textarea
              id='bugSteps'
              rows='4'
              placeholder='1. Open the app&#10;2. Navigate to...&#10;3. See error'
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-primary)',
                resize: 'vertical',
              }}
            ></textarea>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <label htmlFor='bugExpected' style={{ fontWeight: '600' }}>
              Expected Behaviour
            </label>
            <textarea
              id='bugExpected'
              rows='2'
              placeholder='What did you expect to happen?'
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-primary)',
                resize: 'vertical',
              }}
            ></textarea>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type='submit'
              onClick={handleGitHub}
              className='btn btn-primary'
            >
              Open Issue on GitHub
            </button>
            <button
              type='submit'
              onClick={handleEmail}
              className='btn btn-secondary'
            >
              Email Support
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, POLICY_UPDATED } from '../company';

const link = { color: 'var(--primary-color)', textDecoration: 'underline' };
const muted = { color: 'var(--text-secondary)' };

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginTop: '2.5rem' }}>
      <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{title}</h2>
      <div style={muted}>{children}</div>
    </section>
  );
}

function Part({ title, children }) {
  return (
    <div style={{ marginTop: '1.25rem' }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
      {children}
    </div>
  );
}

const list = { marginLeft: '1.5rem', marginTop: '0.5rem', display: 'grid', gap: '0.4rem' };

export default function Privacy() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className='glass' style={{ padding: '3rem', borderRadius: '1rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={muted}>Last updated: {POLICY_UPDATED}</p>

        <Section id='who-we-are' title='Who we are'>
          <p>
            This policy explains how {COMPANY.name} ("{COMPANY.shortName}", "we", "us") collects, uses, shares and keeps information when you use our products: <strong>Bloop Brigade</strong>,{' '}
            <strong>Markaz</strong> and <strong>Leap Launcher</strong>, and this website. We are responsible for (the "controller" of) the personal data described here. Each product has its own
            section below, because each one handles different data.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Questions or requests:{' '}
            <a href={`mailto:${COMPANY.privacyEmail}`} style={link}>
              {COMPANY.privacyEmail}
            </a>
            .{COMPANY.registeredOffice && <> Postal address: {COMPANY.registeredOffice}.</>}
          </p>
          {COMPANY.companyNumber && (
            <p style={{ marginTop: '0.75rem' }}>
              {COMPANY.name} is a company registered in {COMPANY.registeredIn} (company number {COMPANY.companyNumber}). Its registered office address is on the public register at Companies House.
            </p>
          )}
          <p style={{ marginTop: '0.75rem' }}>In every product: we do not sell your personal data, we do not use it for advertising, and we only collect what the product needs to work.</p>
        </Section>

        <Section id='bloop-brigade' title='Bloop Brigade'>
          <p>
            Bloop Brigade can be played entirely offline, including local split-screen. Most of the information below only applies when you use the game&apos;s optional online features: online co-op
            parties, playing with friends, and backing up your progress so it is shared between your devices. The one exception is anonymous crash reports, which the game sends (offline or online) if
            it crashes or hits an error, unless you turn them off.
          </p>

          <Part title='What we collect'>
            <ul style={list}>
              <li>
                <strong>On your device only:</strong> your settings, game progress and outfits are saved on your device. They are not sent anywhere unless you play online.
              </li>
              <li>
                <strong>A player ID:</strong> a random identifier created for your device the first time you play online. It is not linked to your name, email address or phone number.
              </li>
              <li>
                <strong>Your display name:</strong> an automatically generated name (for example, &quot;Bloop 1234&quot;), or your Epic account display name if you choose to link an Epic account.
              </li>
              <li>
                <strong>Game progress backup:</strong> your best wave and score, unlocked outfits, the outfits you wear, your Sparkle totals and which tips you have seen.
              </li>
              <li>
                <strong>Party information:</strong> when you host or join an online party: the party code, the game version, and the display names and player IDs of the people in the party.
              </li>
              <li>
                <strong>Connection information:</strong> your IP address and basic network information, which are needed to connect your game to other players&apos; games.
              </li>
              <li>
                <strong>Only if you link an Epic account (optional):</strong> your Epic account ID and display name; your Epic friends list, to show which friends are playing and let you invite them;
                and your in-game status (for example, &quot;In a party&quot;), which your friends can see.
              </li>
              <li>
                <strong>Crash reports (you can turn these off):</strong> if the game crashes or hits an error, a report with what went wrong (including the game&apos;s technical log), the game
                version, details of your device (operating system, graphics card and memory), your language and graphics settings, the state of the game at the time (for example, the wave number and
                how many players were playing) and an anonymous ID for the report. Crash reports do not include your display name, player ID, screenshots or IP address.
              </li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              We do <strong>not</strong> collect your real name, email address, phone number, contacts, precise location or payment details. The game has no chat, no messaging, no advertising, no
              analytics and no tracking. Crash reports are only used to find and fix problems in the game.
            </p>
          </Part>

          <Part title='How we use it'>
            <ul style={list}>
              <li>To run online parties and co-op games, including between different devices and platforms.</li>
              <li>To back up your progress and keep it the same on all of your devices.</li>
              <li>To show your display name to the other players in your party, and (if you linked an Epic account) to show your friends that you are playing.</li>
              <li>To keep online play working and fair, and to answer your support requests.</li>
              <li>To find and fix crashes and errors (crash reports).</li>
            </ul>
          </Part>

          <Part title='Who we share it with'>
            <ul style={list}>
              <li>
                <strong>Epic Games, Inc.</strong> We use Epic Online Services, provided by Epic Games, Inc., to run Bloop Brigade&apos;s online features (player IDs, parties, connections between
                players and progress backups). We share the information listed above with Epic Games only so that it can provide these services to us. Epic Games&apos; own privacy policy is available
                at{' '}
                <a href='https://www.epicgames.com/site/privacypolicy' target='_blank' rel='noopener noreferrer' style={link}>
                  epicgames.com/site/privacypolicy
                </a>
                .
              </li>
              <li>
                <strong>Sentry</strong> (Functional Software, Inc.) receives crash reports and stores them for us, in the European Union (Germany), acting only on our behalf to help us fix the game.
                Its privacy policy is available at{' '}
                <a href='https://sentry.io/privacy/' target='_blank' rel='noopener noreferrer' style={link}>
                  sentry.io/privacy
                </a>
                .
              </li>
              <li>
                <strong>Other players in your party</strong> see your display name, your Bloop&apos;s outfit and what your character does in the game. To connect your games directly, other
                players&apos; devices may receive your IP address.
              </li>
              <li>
                <strong>Console platforms</strong> (where the game is available on PlayStation, Xbox or Nintendo consoles): online features use the account you are signed in to on that console, under
                that platform&apos;s own terms.
              </li>
              <li>
                <strong>When the law requires it:</strong> we may disclose information if required to by law, or to protect the safety of our players.
              </li>
            </ul>
          </Part>

          <Part title='How long we keep it'>
            <ul style={list}>
              <li>
                <strong>On your device:</strong> until you delete the game or its data.
              </li>
              <li>
                <strong>Progress backup:</strong> until you delete it. You can do this at any time in the game (<strong>Settings › Account › Delete my online data</strong>) or by asking us (see{' '}
                <Link to='/data-deletion' style={link}>
                  Data Deletion
                </Link>
                ). We complete deletion requests within 30 days.
              </li>
              <li>
                <strong>Party information:</strong> only while the party exists. It is removed when the party ends.
              </li>
              <li>
                <strong>Your in-game status:</strong> only while you are playing online.
              </li>
              <li>
                <strong>Connection information:</strong> used only to connect players during a game. We do not store it.
              </li>
              <li>
                <strong>Player ID and display name:</strong> kept with your progress backup, and deleted with it.
              </li>
              <li>
                <strong>Crash reports:</strong> kept for up to 90 days and then deleted automatically. You can stop the game sending them at any time in{' '}
                <strong>Settings › Gameplay › Send crash reports</strong>.
              </li>
            </ul>
          </Part>

          <Part title='Children'>
            <p>
              Bloop Brigade is designed for players of all ages. Because it has no chat, uses automatically generated names unless you link an account, and collects no contact details, it does not ask
              for personal information from children. If you believe a child has given us personal information, contact us and we will delete it.
            </p>
          </Part>
        </Section>

        <Section id='markaz' title='Markaz'>
          <Part title='What we collect'>
            <ul style={list}>
              <li>
                <strong>Location:</strong> your device&apos;s location, including in the background if you allow it, to calculate accurate prayer times and the Qibla direction.
              </li>
              <li>
                <strong>Account details</strong> if you sign in, through a sign-in provider such as Google Sign-In.
              </li>
              <li>
                <strong>Subscription status</strong> if you subscribe, through our subscription provider (RevenueCat). We never receive or store your payment details.
              </li>
              <li>
                <strong>Crash reports:</strong> if the app crashes, a report with an anonymous installation ID, details of your device and app version, and what went wrong.
              </li>
            </ul>
          </Part>
          <Part title='How we use it'>
            <p>
              To show prayer times and the Qibla direction for where you are, to provide your account and subscription, and to find and fix crashes. Location is processed on your device to calculate
              prayer times and the Qibla direction.
            </p>
          </Part>
          <Part title='Who we share it with'>
            <p>
              Service providers that help us run the app: Google (Firebase Crashlytics, for crash reports, and Google Sign-In) and RevenueCat (subscriptions). They act on our behalf for these purposes
              only. We do not sell your data.
            </p>
          </Part>
          <Part title='How long we keep it'>
            <p>
              Your account and subscription details are kept until you delete your account (see{' '}
              <Link to='/data-deletion' style={link}>
                Data Deletion
              </Link>
              ). Crash reports are kept for 90 days and then deleted automatically. Location stays on your device.
            </p>
          </Part>
        </Section>

        <Section id='leap-launcher' title='Leap Launcher'>
          <Part title='What we collect'>
            <ul style={list}>
              <li>
                <strong>Accessibility and notification access</strong> (only if you turn these on), to provide the launcher&apos;s home screen features.
              </li>
              <li>
                <strong>Crash reports:</strong> if the app crashes, a report with an anonymous installation ID, details of your device and app version, and what went wrong.
              </li>
            </ul>
          </Part>
          <Part title='How we use it'>
            <p>
              The content of your screen and notifications is processed strictly on your device to power the launcher&apos;s features, and is never sent to us. Crash reports are used to find and fix
              crashes.
            </p>
          </Part>
          <Part title='Who we share it with'>
            <p>Google (Firebase Crashlytics), for crash reports, acting on our behalf. Nothing from your screen or notifications is shared with anyone.</p>
          </Part>
          <Part title='How long we keep it'>
            <p>Crash reports are kept for 90 days and then deleted automatically. Screen and notification content is never stored by us.</p>
          </Part>
        </Section>

        <Section id='website' title='This website'>
          <p>
            This website does not use cookies, analytics or tracking. Your light or dark theme choice is saved in your own browser. Our hosting provider (GitHub Pages) may record standard technical
            logs, such as IP addresses, to deliver the site securely. If you report a bug, the website opens GitHub or your email app; nothing is sent until you choose to send it.
          </p>
        </Section>

        <Section id='your-rights' title='Your rights'>
          <p>
            Depending on where you live, you may have the right to access, correct, delete or receive a copy of your personal data, and to object to or restrict how we use it. To make a request, email{' '}
            <a href={`mailto:${COMPANY.privacyEmail}`} style={link}>
              {COMPANY.privacyEmail}
            </a>{' '}
            (or{' '}
            <a href={`mailto:${COMPANY.deletionEmail}`} style={link}>
              {COMPANY.deletionEmail}
            </a>{' '}
            for deletion). We respond within 30 days. You can also complain to a data protection authority: in the UK, the Information Commissioner&apos;s Office (
            <a href='https://ico.org.uk' target='_blank' rel='noopener noreferrer' style={link}>
              ico.org.uk
            </a>
            ), or your local authority if you live elsewhere.
          </p>
        </Section>

        <Section id='security' title='Security and international transfers'>
          <p>
            We use service providers that protect data with industry-standard security, including encryption in transit. Some of them process data in other countries; where that happens, they use
            appropriate safeguards required by data protection law.
          </p>
        </Section>

        <Section id='changes' title='Changes to this policy'>
          <p>If we change this policy, we will update the date at the top of this page, and tell you in the app or game when a change is significant.</p>
        </Section>

        <Section id='contact' title='Contact'>
          <p>
            {COMPANY.name}
            <br />
            Email:{' '}
            <a href={`mailto:${COMPANY.privacyEmail}`} style={link}>
              {COMPANY.privacyEmail}
            </a>
            {COMPANY.registeredOffice && (
              <>
                <br />
                {COMPANY.registeredOffice}
              </>
            )}
          </p>
        </Section>
      </div>
    </div>
  );
}

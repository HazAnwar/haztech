import React from 'react';
import { GitBranch, Download } from 'lucide-react';
import AppPage from '../components/app/AppPage';
import FeatureGrid from '../components/app/FeatureGrid';

const PLATFORMS = [{ id: 'android', url: 'https://play.google.com/store/apps/details?id=com.haztech.launcher', cta: 'Download on Play Store', store: 'Google Play' }];

const LINKS = [
  { href: 'https://github.com/HazAnwar/leap-launcher/releases/latest', Icon: Download, label: 'Download artifact' },
  { href: 'https://github.com/HazAnwar/leap-launcher', Icon: GitBranch, label: 'View on GitHub' },
];

const FEATURES = [
  { title: 'Blazing Fast', desc: 'Highly optimized for performance on all Android devices, including older TVs.' },
  { title: 'Clean UI', desc: 'A distraction-free interface designed to help you get to your content quickly.' },
  { title: 'Customizable', desc: 'Tailor your home screen experience to exactly what you need.' },
];

export default function LeapLauncher() {
  return (
    <AppPage name='Leap Launcher' icon='leap.png' tagline='A simple and elegant launcher for your Android Mobile & TV.' platforms={PLATFORMS} fallback='android' links={LINKS} repo='leap-launcher'>
      <FeatureGrid features={FEATURES} />
    </AppPage>
  );
}

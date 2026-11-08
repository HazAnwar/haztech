import { Globe } from 'lucide-react';
import { IconApple, IconAndroid, IconWindows, IconLinux } from '../components/PlatformIcons';

/** Default name and icon for each platform id. A product's own platform entry can override either. */
export const PLATFORM_META = {
  android: { name: 'Android', Icon: IconAndroid },
  ios: { name: 'iOS', Icon: IconApple },
  mac: { name: 'macOS', Icon: IconApple },
  windows: { name: 'Windows', Icon: IconWindows },
  linux: { name: 'Linux', Icon: IconLinux },
  web: { name: 'Web App', Icon: Globe, cta: 'Launch Web App', cardCta: 'Launch' },
};

// Other spellings accepted in ?platform=
const ALIASES = {
  iphone: 'ios',
  ipad: 'ios',
  ipados: 'ios',
  apple: 'ios',
  macos: 'mac',
  osx: 'mac',
  win: 'windows',
  google: 'android',
  play: 'android',
};

/** The visitor's platform: from ?platform= when given, otherwise from the browser. null when unknown. */
export function detectPlatform(param) {
  const p = (param || '').toLowerCase();
  if (p) return ALIASES[p] || p;
  if (typeof navigator === 'undefined') return null;
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('android')) return 'android';
  if (/iphone|ipad|ipod/.test(ua)) return 'ios';
  // iPadOS reports itself as a Mac, so tell them apart by touch support.
  if (ua.includes('mac')) return navigator.maxTouchPoints > 1 ? 'ios' : 'mac';
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux')) return 'linux';
  return null;
}

/** Fills in each platform's default name/icon. */
export const withPlatformMeta = (platforms) => platforms.map((p) => ({ ...PLATFORM_META[p.id], ...p }));

/** The platform to put on the main button: the visitor's own if it has a link, else the fallback, else none. */
export function pickPrimary(platforms, detected, fallback) {
  const available = (id) => platforms.find((p) => p.id === id && p.url);
  return available(detected) || available(fallback) || null;
}

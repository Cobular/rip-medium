import type { Browser, DetectedInfoType, OperatingSystem } from 'detect-browser';
import type { platform } from 'node:process';

export function isChromiumBrowser(browser: Browser | DetectedInfoType): boolean {
	switch (browser) {
		case 'chrome':
		case 'edge-chromium':
		case 'opera':
			return true;
		default:
			return false;
	}
}

export function isDesktopOs(os: OperatingSystem | typeof platform): boolean {
	switch (os) {
		case 'Mac OS':
		case 'Linux':
			return true;
		default:
			return os.toString().startsWith('Windows');
	}
}

export function isAndroid(browser: Browser | DetectedInfoType,os: OperatingSystem | typeof platform) {
  return browser === 'android' || os === 'Android OS' || os === "Amazon OS";
}

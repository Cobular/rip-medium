import { detectOS, browserName } from 'detect-browser';
import type { PageServerLoad } from './$types';


// We want to know if this is chrome desktop, chrome android, firefox of any kind, or something else.
export const load = (({ params, request, url }) => {
  const user_agent = request.headers.get('user-agent');

  const is_pwa = url.pathname.includes('?pwa');

  console.debug("is_pwa: " + is_pwa);
  

  if (user_agent === null) {
    return {
      chrome_desktop: false,
      chrome_android: false,
      firefox: false,
      other: true,
      is_pwa
    }
  }

  const os = detectOS(user_agent);
  const browser = browserName(user_agent);

  if (os === null || browser === null) {
    return {
      chrome_desktop: false,
      chrome_android: false,
      firefox: false,
      other: true,
      is_pwa
    }
  }

  const chrome_desktop = (os === 'Mac OS' || os.includes("Windows")) && browser === 'chrome';
  const chrome_android = os === 'Android OS' && browser === 'chrome';
  const firefox = browser === 'firefox';

  return {
    chrome_desktop: chrome_desktop,
    chrome_android: chrome_android,
    firefox: firefox,
    other: !chrome_desktop && !chrome_android && !firefox,
    is_pwa
  }
}) satisfies PageServerLoad;
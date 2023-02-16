import { detectOS, browserName } from 'detect-browser';
import type { PageServerLoad } from './$types';
 

// We want to know if this is chrome desktop, chrome android, firefox of any kind, or something else.
export const load = (({ params, request }) => {
  const user_agent = request.headers.get('user-agent');

  if (user_agent === null) {
    return {
      chrome_desktop: false,
      chrome_android: false,
      firefox: false,
      other: true
    }
  }

  const os = detectOS(user_agent);
  const browser = browserName(user_agent);

  if (os === null || browser === null) {
    return {
      chrome_desktop: false,
      chrome_android: false,
      firefox: false,
      other: true
    }
  }

  const chrome_desktop = (os === 'Mac OS' || os.includes("Windows")) && browser === 'chrome';
  const chrome_android = os === 'Android OS' && browser === 'chrome';
  const firefox = browser === 'firefox';

  console.log("chrome_desktop: " + chrome_desktop);
  console.log("chrome_android: " + chrome_android);
  console.log("firefox: " + firefox);
  console.log("other: " + (!chrome_desktop && !chrome_android && !firefox));
  

  return {
    chrome_desktop: chrome_desktop,
    chrome_android: chrome_android,
    firefox: firefox,
    other: !chrome_desktop && !chrome_android && !firefox
  }
}) satisfies PageServerLoad;
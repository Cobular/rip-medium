'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const MEDIUM_REGEX = /^https?:\/\/(?!scribe\.rip).*(?<medium_slug>\/[\w-]+[0-9a-f]{12})$/;
function isMediumPostUrl(url) {
  return MEDIUM_REGEX.test(url);
}
function getRedirectURL(url) {
  if (isMediumPostUrl(url)) {
    return url.replace(MEDIUM_REGEX, "https://scribe.rip$<medium_slug>");
  } else {
    return false;
  }
}

exports.getRedirectURL = getRedirectURL;
exports.isMediumPostUrl = isMediumPostUrl;
//# sourceMappingURL=redirector.js.map

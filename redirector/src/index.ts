const MEDIUM_REGEX =
  /^https?:\/\/(?!scribe\.rip).*(?<medium_slug>\/[\w-]+[0-9a-f]{12})$/;
  
export function isMediumPostUrl(url: string): boolean {
  return MEDIUM_REGEX.test(url);
}

export function getRedirectURL(url: string): string | false {
  if (isMediumPostUrl(url)) {
    return url.replace(MEDIUM_REGEX, "https://scribe.rip$<medium_slug>");
  } else {
    return false;
  }
}

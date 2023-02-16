import { isMediumPostUrl } from "@rip-medium/redirector";


export function try_parse_medium_url(url: string | null): string | undefined {
  if (url === null) {
    return undefined;
  }

  if (isMediumPostUrl(url)) {
    return url;
  }

  return undefined;
}

export function check_url_object(url_obj: URL): string | undefined {
  const title = try_parse_medium_url(url_obj.searchParams.get('title'));
  const text  = try_parse_medium_url(url_obj.searchParams.get('text'));
  const url   = try_parse_medium_url(url_obj.searchParams.get('url'));

  // If any of these are not undefined, redirect to the medium post.
  if (title !== undefined) {
    return title;
  } else if (text !== undefined) {
    return text;
  } else if (url !== undefined) {
    return url;
  }

  return undefined;
}
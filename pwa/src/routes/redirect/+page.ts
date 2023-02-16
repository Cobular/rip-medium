
import { check_url_object } from '$lib/utils/url_parsing';
import { isMediumPostUrl } from '@rip-medium/redirector';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ url: loading_url }) => {
  const parsedUrl = new URL(loading_url);

  const redirect_url = check_url_object(parsedUrl)

  if (redirect_url !== undefined) {
    throw redirect(302, redirect_url);
  }

  // Otherwise, redirect to the home page.
  throw redirect(302, '/')

}) satisfies PageLoad;
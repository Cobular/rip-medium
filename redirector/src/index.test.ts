import { getRedirectURL } from "./index";

test("that on-medium post URLS are detected", () => {
  expect(
    getRedirectURL(
      "https://humanparts.medium.com/when-was-the-last-time-you-edited-your-phone-contacts-a9ffb4a80c83"
    )
  ).toBe(
    "https://scribe.rip/when-was-the-last-time-you-edited-your-phone-contacts-a9ffb4a80c83"
  );

  expect(
    getRedirectURL(
      "https://medium.com/general_knowledge/terra-luna-v2-what-will-happen-to-your-old-luna-what-is-lunc-my-opinion-6159e41d57f0"
    )
  ).toBe(
    "https://scribe.rip/terra-luna-v2-what-will-happen-to-your-old-luna-what-is-lunc-my-opinion-6159e41d57f0"
  );
});

test("that non-medium urls are parsed correctly", () => {
  expect(
    getRedirectURL(
      "https://towardsdatascience.com/how-git-truly-works-cd9c375966f6"
    )
  ).toBe("https://scribe.rip/how-git-truly-works-cd9c375966f6");

  expect(
    getRedirectURL(
      "https://uxdesign.cc/how-to-ask-for-a-promotion-8cb53d06c416"
    )
  ).toBe("https://scribe.rip/how-to-ask-for-a-promotion-8cb53d06c416");
});

test("that random strings are not parsed", () => {
  expect(
    getRedirectURL(
      "asdfasdfasdf"
    )
  ).toBe(false);

  expect(
    getRedirectURL(
      "thisisnot a URL"
    )
  ).toBe(false);
});

test("that other site URLs are not parsed", () => {
  expect(
    getRedirectURL(
      "https://dmitripavlutin.com/typescript-function-overloading/"
    )
  ).toBe(false);
});


test("that scribe.rip is not parsed", () => {
  expect(
    getRedirectURL(
      "https://scribe.rip/terra-luna-v2-what-will-happen-to-your-old-luna-what-is-lunc-my-opinion-6159e41d57f0"
    )
  ).toBe(false);
});
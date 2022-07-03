import { getRedirectURL } from "@rip-medium/redirector";

chrome.action.onClicked.addListener((tab) => {
  const redirect = getRedirectURL(tab.url);
  if (redirect !== false) {
    chrome.tabs.update(tab.id, { url: redirect });
  }
});

// Grey out the icon when on a non medium post page
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && getRedirectURL(tab.url) !== false) {
    chrome.action.setIcon({
      tabId: tabId,
      path: {
        "16": "images/red/logo_red-16_x_16.png",
        "32": "images/red/logo_red-32_x_32.png",
        "64": "images/red/logo_red-64_x_64.png",
        "128": "images/red/logo_red-128_x_128.png",
      },
    });
  } else {
    chrome.action.setIcon({
      tabId: tabId,
      path: {
        "16": "images/grey/logo_grey-16_x_16.png",
        "32": "images/grey/logo_grey-32_x_32.png",
        "64": "images/grey/logo_grey-64_x_64.png",
        "128": "images/grey/logo_grey-128_x_128.png",
      },
    });
  }
});

import { getRedirectURL } from "redirector";

chrome.action.onClicked.addListener((tab) => {
  console.log("eee");
  let redirect = getRedirectURL(tab.url);
  if (redirect !== false) {
    chrome.tabs.update(tab.id, { url: redirect });
  }
});

// Grey out the icon when on a non medium post page
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("tab updated");
  console.log(changeInfo);
  if (changeInfo.status === "complete" && getRedirectURL(tab.url) !== false) {
    chrome.action.enable(tabId, () => console.log("enabled"));
    chrome.action.setIcon({
      path: "icon16.png",
    })
  } else {
    chrome.action.disable(tabId, () => console.log("disabled"));
    chrome.action.setIcon({
      path: "icon16_grey.png",
    })
  }
});

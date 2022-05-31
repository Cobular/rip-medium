import { ManifestV3 } from "rollup-plugin-chrome-extension";

const manifest: ManifestV3 = {
  manifest_version: 3,
  content_scripts: [
    {
      js: ["medium-content-script.ts"],
      matches: ["https://*.medium.com/*"],
    },
  ],
  action: {
    default_title: "Redirect To Scribe",
  },
  background: {
    service_worker: "background.ts",
  },
  permissions: ["activeTab", "scripting", "tabs"],
  icons: {
    16: "icon16.png",
  },
  web_accessible_resources: [
    {
      resources: ["icon16_grey.png"],
      matches: ["<all_urls>"],
    }
  ],
};

export default manifest;

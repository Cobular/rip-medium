import { ManifestV3 } from "rollup-plugin-chrome-extension";

const manifest: ManifestV3 = {
  manifest_version: 3,
  action: {
    default_title: "R.I.P Medium",
  },
  background: {
    service_worker: "background.ts",
  },
  permissions: ["activeTab", "scripting", "tabs"],
  icons: {
    16: "images/main/main_logo-16_x_16.png",
    32: "images/main/main_logo-32_x_32.png",
    64: "images/main/main_logo-64_x_64.png",
    128: "images/main/main_logo-128_x_128.png",
  },
  web_accessible_resources: [
    {
      resources: [
        "images/grey/logo_grey-16_x_16.png",
        "images/grey/logo_grey-32_x_32.png",
        "images/grey/logo_grey-64_x_64.png",
        "images/grey/logo_grey-128_x_128.png",
        "images/red/logo_red-16_x_16.png",
        "images/red/logo_red-32_x_32.png",
        "images/red/logo_red-64_x_64.png",
        "images/red/logo_red-128_x_128.png",
      ],
      matches: ["<all_urls>"],
    }
  ],
};

export default manifest;

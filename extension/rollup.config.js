import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import { emptyDir } from 'rollup-plugin-empty-dir'

import {
  chromeExtension,
  simpleReloader,
} from "rollup-plugin-chrome-extension";

export default {
  input: ["src/manifest.ts", "src/onclick_content_script.ts"],
  output: {
    dir: "dist",
    format: "esm",
    chunkFileNames: "chunks\\[name]-[hash].js",
  },
  plugins: [
    // always put chromeExtension() before other plugins
    chromeExtension(),
    simpleReloader(),
    // the plugins below are optional
    emptyDir(),
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
};

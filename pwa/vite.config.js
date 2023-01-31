// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [ sveltekit() ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;'
      }
    }
  }
};
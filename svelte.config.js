import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
      // pages: 'public',
      // assets: 'public',
      // fallback: null,
    })
  },

};

export default config;

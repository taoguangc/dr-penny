// import preprocess from "svelte-preprocess";
import adapter from "sveltekit-adapter-html-like"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      },
      pages: 'public',
      assets: 'public',
      fallback: null,
    })
  },
}

export default config

import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
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

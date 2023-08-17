import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex, escapeSvelte  } from 'mdsvex'
import highlighter from './src/lib/utils/codeHighlLighter.js'

const mdsvexOptions = {
	extensions: ['.md'],
    highlight: {
        highlighter,
	},
    //highlight: false,
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
    extensions: ['.svelte', '.md'],
    preprocess: [
        sveltePreprocess(),
        mdsvex(mdsvexOptions),
      ]


};

export default config;

import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeCodeTitles from 'rehype-code-titles'

const mdsvexOptions = {
	extensions: ['.md'],
    rehypePlugins: [rehypeCodeTitles]
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

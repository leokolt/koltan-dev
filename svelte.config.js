import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import autoprefixer from 'autoprefixer';
import rehypeCodeTitles from 'rehype-code-titles'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
    extensions: ['.svelte', '.md'],
    preprocess: [
        sveltePreprocess({
            plugins: [autoprefixer]

            /* Other sveltePreprocess options here, like SCSS */
        }),
        mdsvex({
          extensions: ['.md'],
          rehypePlugins: [
            rehypeCodeTitles
          ]
        })
      ]


};

export default config;

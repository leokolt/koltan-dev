import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex  } from 'mdsvex'
import highlighter from './src/lib/utils/codeHighlLighter.js'
import rehypeExternalLinks from 'rehype-external-links'
import remarkFootnotes from 'remark-footnotes'

const mdsvexOptions = {
	extensions: ['.md'],
    highlight: {
        highlighter,
	},
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]],
    remarkPlugins: [[remarkFootnotes, {inlineNotes: true}]]
    //highlight: false,
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(
            {
                fallback: 'index.html' // may differ from host to host
            }
        )
	},
    extensions: ['.svelte', '.md'],
    preprocess: [
        sveltePreprocess(),
        mdsvex(mdsvexOptions),
    ]
};

export default config;

// import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node';

import { mdsvex, escapeSvelte  } from 'mdsvex'
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
                out: 'build'
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

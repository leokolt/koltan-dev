import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite'


export default defineConfig({
	plugins: [sveltekit(), imagetools({
        runDefaultDirectives: new URLSearchParams('w=480w;1024;1920&format=webp;jpg')
    })]
});

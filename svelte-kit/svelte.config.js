import preprocess from 'svelte-preprocess';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [vanillaExtractPlugin()],
			ssr: {
				noExternal: [
					'@vanilla-extract/css',
					'@vanilla-extract/css/fileScope'
				],
			}
		}
	}
};

export default config;

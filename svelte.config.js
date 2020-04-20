const sveltePreprocess = require("svelte-preprocess");

module.exports = {
	preprocess: sveltePreprocess({
		postcss: true,
		transformers: {
			postcss: {
				config: {
					path: "./postcss.config.js",
				},
			},
		},
	}),
};

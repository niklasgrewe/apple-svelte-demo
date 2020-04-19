const sveltePreprocess = require("svelte-preprocess");

module.exports = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [require("postcss-nested"), require("autoprefixer")],
		},
	}),
	// ...other svelte options
};

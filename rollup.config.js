import terser from "@rollup/plugin-terser";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

export default {
	input: "src/index.js",
	output: {
		file: "dist/bloopstrap.min.js",
		format: "esm",
		name: "Bloopstrap",
		plugins: [terser()],
	},
	plugins: [
		postcss({
			extract: true,
			minimize: true,
			plugins: [autoprefixer()],
		}),
	],
};

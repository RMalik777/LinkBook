import adapter from "@sveltejs/adapter-cloudflare";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		enhancedImages(),
		// SvelteKit 3: Svelte/SvelteKit config lives here (svelte.config.js is no longer supported).
		// See https://svelte.dev/docs/kit/configuration
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter(),
		}),
		tailwindcss(),
	],
});

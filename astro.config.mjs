import { defineConfig } from "astro/config"

export default defineConfig({
	site: "https://duduardeagle.github.io",
	base: "/chirp-landing/",
	build: {
		assets: "assets"
	}
})

// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://sukreshmanda.github.io",
  base: "/portfolio",
  
  integrations: [react(), markdoc(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  adapter: node({ mode: "standalone" }),
});

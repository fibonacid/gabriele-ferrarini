import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: {
        applyBaseStyles: false,
      },
    }),
    solidJs(),
    sanity({
      projectId: "3xwy9afs",
      dataset: "production",
      useCdn: true,
      apiVersion: "2022-11-01",
    }),
  ],
  adapter: vercel(),
});

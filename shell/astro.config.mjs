import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ["**/react/*"]
  }), solid({
    include: ["**/solid/*"]
  }),
 {
    name: "importmap-externals",
    hooks: {
      "astro:build:setup": ({ vite, target }) => {
        if (target === "client") {
          vite.build.rollupOptions["external"] = [
            "react",
            "react-dom",
            "solid-js",
          ];
        }
      },
    },
  },
  , tailwind()]
});

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  preview: {
    port: 7300,
    open: true,
  },
  build: {
    target: "esnext",
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, "src/Root.jsx"),
      preserveEntrySignatures: "exports-only",
      external: ["solid-js"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
     },
    },
  },
});

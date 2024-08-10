import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import { BuildSettings } from "./devtools/build-settings";

export default defineConfig({
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: BuildSettings.aliases,
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  build: {
    sourcemap: BuildSettings.PRODUCTION,
    minify: "terser",
    target: "es2015",
    outDir: "build",
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      entry: path.join(BuildSettings.SRC, "Root/index.tsx"),
      template: "public/index.html",
    }),
  ],
  optimizeDeps: {
    include: ["@figliolia/ripples"],
  },
});

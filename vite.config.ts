import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

const SRC = path.resolve("src");

export default defineConfig({
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      Components: path.join(SRC, "Components"),
      Images: path.join(SRC, "Images"),
      Icons: path.join(SRC, "Icons"),
      Models: path.join(SRC, "Models"),
      Pages: path.join(SRC, "Pages"),
      Root: path.join(SRC, "Root"),
      State: path.join(SRC, "State"),
      Styles: path.join(SRC, "Styles"),
      Tools: path.join(SRC, "Tools"),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  build: {
    minify: "terser",
    target: "es2015",
    outDir: "build",
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      entry: path.join(SRC, "Root/index.tsx"),
      template: "public/index.html",
      viteNext: true,
    }),
  ],
  optimizeDeps: {
    include: ["@figliolia/ripples"],
    force: process.env.NODE_ENV === "development",
  },
});

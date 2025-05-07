// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  esbuild: {
    include: /\.[jt]sx?$/,
    exclude: [],
    loader: "jsx",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/variables.scss";`,
      },
    },
  },
});

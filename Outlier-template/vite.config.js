import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import vercel from "vite-plugin-vercel";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), vercel()],
  server: {
    port: process.env.PORT,
    open: true,
  },
});

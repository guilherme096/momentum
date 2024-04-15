import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.ico",
        "logo_azul.png",
        "robots.txt",
        "site.webmanifest",
      ],
      manifest: {
        icons: [
          {
            src: "logo_azul.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#000000",
      },
    }),
  ],
});

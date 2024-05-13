import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/momentum/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["logo_azul.png"],
      manifest: {
        icons: [
          {
            src: "maskable-icon-512x512.png",
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

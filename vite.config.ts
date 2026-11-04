import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages is connected to the studio's custom domain, which serves at /
  // rather than under the repository path.
  base: "/",
  preview: { host: "127.0.0.1" },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: { tsconfigPaths: true },
});

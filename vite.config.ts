import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const PROJECT_ROOT = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@/components/ui", replacement: PROJECT_ROOT },
      { find: "@/components", replacement: PROJECT_ROOT },
      { find: "@/pages", replacement: PROJECT_ROOT },
      { find: "@/contexts", replacement: PROJECT_ROOT },
      { find: "@/hooks", replacement: PROJECT_ROOT },
      { find: "@/lib", replacement: PROJECT_ROOT },
      { find: "@shared", replacement: PROJECT_ROOT },
      { find: "@assets", replacement: PROJECT_ROOT },
      { find: "@", replacement: PROJECT_ROOT },
    ],
  },
  envDir: PROJECT_ROOT,
  root: PROJECT_ROOT,
  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: false,
  },
});

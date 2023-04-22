import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  plugins: [paths()]
});
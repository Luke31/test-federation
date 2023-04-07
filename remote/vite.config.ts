import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./MyButton": "./src/components/MyButton.vue",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 8081,
  },
  build: {
    target: "esnext",
  },
});

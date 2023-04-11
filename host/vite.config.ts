import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host",
      remotes: {
        // remote: "http://localhost:8081/dist/assets/remoteEntry.js",
        remote: "http://localhost:8081/v2/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
  },
});

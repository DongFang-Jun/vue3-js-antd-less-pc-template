import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  esbuild: {
    target: "esnext",
  },
  build: {
    outDir: "test",
    chunkSizeWarningLimit: 2000,
  },
  server: {
    port: 3333,
    open: true, //运行项目时，自动打开于默认浏览器
    proxy: {
      "/api": {
        target: "https://baobab.kaiyanapp.com",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\api/, ""),
      },
    },
  },
});

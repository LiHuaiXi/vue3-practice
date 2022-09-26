import { fileURLToPath, URL } from "node:url";

// 全局配置的
// import { devPort } from './src/config/index.js';

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// unplugin
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  ArcoResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from "unplugin-vue-components/resolvers";

// Unocss 插件
import Unocss from "unocss/vite";
// Unocss 默认预设
import presetUno from "@unocss/preset-uno";
// Unocss 属性模式预设
import presetAttributify from "@unocss/preset-attributify";
// Unocss 指令转换插件
import transformerDirective from "@unocss/transformer-directives";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, "./");
  return {
    base: viteEnv.VITE_BASE,
    server: {
      host: "0.0.0.0",
      port: "8085",
      open: true,
      // 端口占用直接退出
      strictPort: true,
      // 本地服务 CORS 是否开启
      // cors: true,
      // proxy: {
      //   [viteEnv.VITE_BASE_URL]: {
      //     target: viteEnv.VITE_BASE_SERVER_URL,
      //     // 允许跨域
      //     changeOrigin: true,
      //     rewrite: path => path.replace(viteEnv.VITE_BASE_URL, '/')
      //   }
      // }
    },
    build: {
      outDir: "dist",
      assetsDir: "static/assets",
      // sourcemap: true,
      // 规定触发警告的 chunk 大小，消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "pinia", "vue-router", "@vueuse/core"],
        resolvers: [ArcoResolver()],
      }),
      Components({
        dirs: ["src/components/", "src/view/", "@vueuse/core"],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          VueUseComponentsResolver(),
          VueUseDirectiveResolver(),
          ArcoResolver({
            sideEffect: true,
          }),
        ],
      }),
      // 新增一个 Unocss 插件配置
      Unocss({
        // 预设
        presets: [presetUno(), presetAttributify()],
        // 指令转换插件
        transformers: [transformerDirective()],
        // 自己自定义规则
        rules: [],
      }),
    ],
    // scss
    pluginOptions: {
      "style-resources-loader": {
        preProcessor: "scss",
        patterns: [],
      },
    },
  };
});

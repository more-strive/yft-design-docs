import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  host: 'localhost',
  port: 8090,
  locales: {
    "/": {
      lang: "en-US",
      title: "yft-design",
      description: "Canvas based business card and poster editor",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "yft-design",
      description: "基于Canvas的名片，海报编辑器",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

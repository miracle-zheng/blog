import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "后端技术分享",
  description: "wangzheng's blog",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

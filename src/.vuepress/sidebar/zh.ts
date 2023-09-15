import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "功能",
      icon: "laptop-code",
      prefix: "main/",
      link: "main/",
      children: "structure",
    },
    {
      text: "指南",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    // "slides",
  ],
});

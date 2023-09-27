---
# 这是文章的标题
title: 画布功能
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Nevermore
# 设置写作时间
date: 2023-09-15
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: ''
# 你可以自定义版权信息
copyright: GPL-3.0 | Copyright © 2023 Nevermore
---

## 画布信息

![画布演示](/assets/gif/canvas.gif)

## 元素内容

鼠标左键点击选择元素之后，画布中会显示元素宽高。

- 支持框选元素。
- 元素有具体标尺坐标显示。
- 右边栏显示元素可编辑信息。

## 操作内容

- 鼠标滚轮，画布可以上下滚动。
- Shift + 鼠标滚轮，画布可以左右滚动。
- Ctrl  + 鼠标滚动，画布缩放

::: tip

- 可以点击画布底部的![](/assets/image/click-tap.svg)按钮使画布处于拖拽状态。

- 可以点击画布底部的![](/assets/image/cutting-one.svg) 增加裁切辅助线。

- 可以点击画布底部的![](/assets/image/shield.svg) 增加安全辅助线。

:::

主题包含了一个自定义徽章可以使用:

> 文字结尾应该有深蓝色的 徽章文字 徽章。 <Badge text="徽章文字" color="#242378" />

## 页面结构

此页面应当包含:

- [路径导航](https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html)
- [标题和页面信息](https://theme-hope.vuejs.press/zh/guide/feature/page-info.html)
- [TOC (文章标题列表)](https://theme-hope.vuejs.press/zh/guide/layout/page.html#标题列表)
- [贡献者、更新时间等页面元信息](https://theme-hope.vuejs.press/guide/feature/meta.html)
- [评论](https://theme-hope.vuejs.press/zh/guide/feature/comment.html)
- [导航栏](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)
- [侧边栏](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html)
- [页脚](https://theme-hope.vuejs.press/zh/guide/layout/footer.html)
- 返回顶部按钮

你可以通过主题选项和页面 Frontmatter 自定义它们。

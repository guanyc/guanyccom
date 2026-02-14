---
title: 快速开始
weight: 1
---

本节帮助你在当前仓库下新增与预览文档内容。

## 新增页面
- 在 `content/docs/intro/` 下创建 Markdown 文件（如 `getting-started.md`）
- 在 Front Matter 中设置 `title` 与 `weight` 控制侧边导航顺序

## 本地预览
如果需要本地预览，确保安装 Hugo（建议 v0.155.3 或以上），在项目根目录运行：

```bash
hugo server -D
```

## 部署预览
- 推送至分支或创建 PR，Netlify 将自动生成 Deploy Preview
- 在预览环境检查导航、目录（ToC）、搜索与资源路径是否正常

## 注意
- 站点别名（aliases）以 “/” 开头，符合 Hugo 0.155.0 行为（站点相对）
- 主题为 Relearn，支持章节、搜索与常用短代码，后续可按需启用

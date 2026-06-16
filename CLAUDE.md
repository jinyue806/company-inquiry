# 企业信息查询站 — AI 编码规约

> 本文件为 AI 编码助手专属项目规则，所有代码生成、修改必须严格遵守。
> 适用工具：Claude Code / Cursor / Copilot / 通用 AI 编码助手

## 1. 项目信息

- **定位**：企业官网静态展示站，零构建工具
- **技术栈**：原生 HTML5 + CSS3 + JavaScript（ES6）
- **零外部依赖**：无框架、无 npm 包、无构建步骤
- **部署方式**：纯静态文件 → GitHub Pages

## 2. 目录规范

```
├── index.html          # 主站首页
├── product.html        # 产品详情页
├── styles.css          # 全局样式
├── main.js             # 表单 + 导航 + 交互
├── product-data.js     # 产品数据（6 款）
├── product.js          # 产品详情渲染
├── product.css         # 产品详情页样式
├── sitemap.xml         # SEO 站点地图
├── robots.txt          # 爬虫规则
└── assets/             # 所有图片资源
```

- 页面文件放根目录，不嵌套
- 图片统一放 `assets/`，不允许其他目录
- 无 `node_modules`、无构建产物

## 3. 强制编码规则

### 3.1 HTML
- 语义化标签（`<header>` / `<main>` / `<section>` / `<footer>` / `<nav>`）
- 所有图片必须写 `alt` 属性
- 交互元素必须写 `aria-label` / `aria-expanded` 等无障碍属性
- 引用路径统一用 `./` 相对路径（⚠️ GitHub Pages 子路径部署不支持绝对路径）
  - ✅ `<img src="./assets/product.jpg">`
  - ❌ `<img src="/assets/product.jpg">`

### 3.2 CSS
- 类名用小写短横线命名：`.product-card` / `.nav-toggle`
- 不允许使用 `!important`
- 不允许全局样式污染：`* { box-sizing: border-box }` 例外
- 响应式断点标准：桌面 1024px+ / 平板 768-1023px / 手机 <768px
- 颜色变量用 `--color-*` 放在 `:root` 中，不硬编码色值
- 过渡动画统一用 `transition: 0.25s ease`

### 3.3 JavaScript
- 使用 `const` / `let`，禁用 `var`
- 函数优先用 `function` 声明提升，DOM 事件回调用箭头函数
- DOM 查询用 `querySelector` / `querySelectorAll`，非过时 `getElement*`
- 异步请求用 `async/await` + `try/catch`，禁用裸 `.then()`
- 敏感配置（webhook URL、API key、电话）声明为模块顶部常量，集中管理
- 表单提交必须有 loading 状态和防重复提交

### 3.4 图片与资源
- 新增图片放 `assets/`，WebP 优先
- 修改图片路径后同步更新 `.gitignore` negation 规则（`!assets/*.webp`）
- 图片必须 lazy loading：`<img loading="lazy">`

## 4. 工程命令

- 本地预览：`npx http-server . -p 8090` 或直接双击 HTML 文件
- 部署：`git push` 触发 GitHub Pages 自动部署

## 5. AI 输出约束

1. 生成代码必须可直接运行，无需二次改造
2. 新增功能贴合现有文件结构，不随意新建目录
3. 修改 CSS 先查 `:root` 变量，不硬编码新色值
4. 不生成冗余兼容代码（项目仅需现代浏览器）
5. 复杂逻辑必须写行内注释，简洁清晰
6. 产品数据格式必须匹配 `product-data.js` 的已有 schema
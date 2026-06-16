# 企业信息查询站 — Company Inquiry

企业官网静态展示站，用于产品展示、应用场景、解决方案介绍与客户咨询。

## 项目概览

纯静态 HTML/CSS/JS 项目，零构建工具，直接打开或任意 HTTP Server 即可运行。

| 文件 | 说明 |
|:-----|:------|
| `index.html` | 主站首页：产品展示、应用场景、解决方案、关于我们、联系表单、FAQ、在线咨询 |
| `styles.css` | 全局样式，响应式布局（桌面 + 移动端适配） |
| `main.js` | 表单处理、产品渲染、导航交互、微信弹窗 |
| `product.html` | 产品详情页 |
| `product-data.js` | 6 款产品数据 |
| `product.js` | 产品详情渲染逻辑 |
| `product.css` | 产品详情页样式 |
| `sitemap.xml` | SEO 站点地图（7 个 URL） |
| `robots.txt` | 搜索引擎爬虫规则 |
| `assets/` | 产品图、场景图、工厂图等图片资源 |

## 快速开始

```bash
npx http-server . -p 8090
# 访问 http://127.0.0.1:8090
```

或直接双击 `index.html` 在浏览器中打开。

## 功能特性

- **产品展示** — 6 款产品详情页，分类浏览
- **应用场景** — 行业场景案例展示
- **解决方案** — 定制化方案介绍
- **在线咨询** — 联系表单 + 浮动聊天按钮
- **微信客服** — 二维码弹窗集成
- **FAQ** — 常见问题折叠展示
- **SEO 优化** — 语义化 HTML、sitemap.xml、robots.txt、lazy loading、非阻塞 CSS
- **响应式** — 桌面 + 平板 + 手机全适配

## 技术栈

- 原生 HTML5 / CSS3 / JavaScript（ES6）
- 零外部依赖，零构建工具
- 图片懒加载 + JS defer + CSS 非阻塞加载

## 部署

纯静态文件，任意 Web Server 或 CDN 均可部署。

## 待办

- [ ] 替换微信二维码 `assets/wechat-qr.png` 为真实二维码
- [ ] 配置百度统计 Key
- [ ] 产品图片替换为正式素材

## License

MIT

# 会话交接：company-inquiry 项目

> 最后由 CODEX 处理 SEO + 性能优化。换到 CODEX 继续开发。

## 项目状态

公司-company-inquiry 已从 company-site 复制完整功能版，含全部 assets。

**当前文件：**（7 个核心文件 + assets 目录）

| 文件 | 说明 |
|------|------|
| \index.html\ (26KB) | 完整官网：产品展示、应用场景、解决方案、关于我们、联系表单、FAQ、聊天浮动按钮 |
| \styles.css\ (20KB) | 全局样式，响应式 |
| \main.js\ (4.8KB) | 表单处理、产品渲染、导航交互、微信弹窗 |
| \product.html\ (7KB) | 产品详情页 |
| \product-data.js\ (9KB) | 6 款产品数据 |
| \product.js\ (2KB) | 产品详情渲染 |
| \product.css\ (3KB) | 产品详情样式 |
| \sitemap.xml\ | SEO 站点地图 |
| \obots.txt\ | 搜索引擎爬虫规则（刚创建） |
| \ssets/\ | 15 个图片资源（产品图、场景图、工厂图等） |

**已清除：** \product.json\（多余文件）

**运行端口：** http://127.0.0.1:8090/（http-server）

## 最新改动（CODEX 会话 - SEO/性能优化）

### 2026-06-15 已完成：

1. **图片 lazy loading** — 12 张非首屏图片加了 \loading="lazy"\（首屏 hero 图保持 eager）
2. **JS defer** — \main.js\、\product-data.js\、\product.js\ 全部加了 defer 属性
3. **CSS 非阻塞加载** — 两个 CSS 文件用了 \media="print" onload="this.media='all'"\ 模式
4. **sitemap.xml** — 从只有首页扩展到 7 个 URL（6 个产品页）
5. **robots.txt** — 新建，Allow: / + 指向 sitemap
6. **SEO meta** — index.html 和 product.html 都加了 \<meta name="robots" content="index, follow">\ 和 \<meta name="theme-color">\

### 注意事项：
- CSS 非阻塞加载用了 \media="print" onload\ 技巧，如果遇到问题可以改回 \media="all"\
- 所有改动已保持原始 HTML 结构不变，只是加了属性和 meta
- 备份文件已清理，无 .bak 残留

### 2026-06-15 响应式布局优化：
1. **移动端导航** — 汉堡菜单添加平滑过渡动画
2. **产品卡片** — 移动端调整为单列，图片高度180px
3. **场景卡片** — 移动端调整为单列，图片比例16/9
4. **优势区域** — 移动端调整为单列
5. **关于我们** — 移动端调整为单列
6. **联系表单** — 移动端调整为单列
7. **浮动按钮** — 移动端位置和大小调整
8. **微信弹窗** — 移动端位置调整

## 恢复过程（之前）

1. 错误：先删了 \product.json\（以为被别的 agent 添加的）
2. 错误：从 OpenCode 会话 \W1xFEPP\ 提取了初始版本覆盖了开发版
3. 修复：从 \company-site\ 复制完整功能版到 \company-inquiry\
4. 补充：复制 \ssets/\ 目录修复图片挂掉的问题

## 关键技术细节

- **OpenCode 导出恢复方法**（已记入全局记忆 \opencode-html-extraction-method\）：
  - 文件内容在 HTML 内 2MB+ JS 变量 \$R[n]\ 中
  - 定位 \ilePath:\（大写 P）+ \"content:"\
  - 解析 \\\x3C\ hex escapes、\\\" \ 转义、\\\\n\ 换行
  - \ilepath:\（小写 p）是元数据无内容

## 遗留问题

- 微信二维码 \ssets/wechat-qr.png\ 是灰色占位图（0.6KB），需替换为真实二维码
- 百度统计 Key 为 \YOUR_BAIDU_ANALYTICS_KEY\（占位符）
- 暂无图片生成 AI 图（当前资产是 ai-generated 占位图，约 2.5MB）

## 建议技能

- \rainstorming\ — 如果要先梳理下一步需求
- \karpathy-guidelines\ — 写代码前加载，保持极简
- \guizang-social-card-skill\ — 如需生成社交卡片
- \pi-kit\ — 如需调用生图 API
- \	dd\ — 先写测试再改代码

## 环境

- 路径：\G:\\Documents\\skills\\.projects\\company-inquiry\\\
- 运行：\
px http-server . -p 8090\
- 项目类型：纯静态 HTML/CSS/JS，无构建工具

## CODEX 评价

- 上下文窗口较小，建议交接时提供完整文件路径和最新改动摘要
- SEO 优化已完整处理，下一位可继续其他方向开发

# wendylzw.github.io

个人学术主页。纯静态 HTML/CSS，无需任何构建工具，由 GitHub Pages 直接托管：
<https://liangwendy.org>

## 文件结构

| 路径 | 内容 |
| --- | --- |
| `index.html` | 全部页面内容：简介、教育、研究、教学、经历、联系方式 |
| `assets/css/style.css` | 样式与配色（顶部变量是浅色，`html[data-theme="dark"]` 是深色） |
| `assets/js/main.js` | 深色模式切换、手机端菜单、标题滚动淡入、点击头像看大图 |
| `images/` | 头像、网站图标、学校 logo |
| `files/` | CV 等 PDF 文件 |
| `.nojekyll` | 告诉 GitHub Pages 直接发布文件，不用 Jekyll 处理 |
| `CNAME` | 自定义域名 liangwendy.org（DNS 在 Cloudflare 管理，别删这个文件） |

## 常见修改

`index.html` 里所有需要改的地方都用 `✏️` 注释标出来了。

- **加一篇论文**：在 Research 部分复制一行 `<li>…</li>`，改标题、链接、合作者和期刊。
- **换头像**：把照片（建议正方形，至少 400×400）放到 `images/`，修改 `<img class="profile__avatar" src="…">`。
- **更新 CV**：用新文件覆盖 `files/CV.pdf`（文件名保持不变，导航栏的链接就不用改）。
- **增删板块**：每个板块是一个 `<section class="band" id="…">`；同时增删顶部导航里对应的 `<li>`。
- **改配色**：编辑 `assets/css/style.css` 顶部的颜色变量。
- **改了 CSS/JS 之后**：把 `index.html` 里 `style.css?v=2`、`main.js?v=2` 的数字加 1。GitHub Pages 会让浏览器缓存这些文件 10 分钟，不改版本号的话，访客可能看到新内容配旧样式。

## 本地预览

```bash
python3 -m http.server 8000
```

然后在浏览器打开 <http://localhost:8000>。

## 发布更新

```bash
git add -A && git commit -m "Update website" && git push
```

推送后约 1 分钟，<https://liangwendy.org> 会自动更新。

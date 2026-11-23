# wendylzw.github.io

Personal academic website. Plain static HTML/CSS with no build tools, hosted directly by GitHub Pages at
<https://liangwendy.org>.

## File structure

| Path | Contents |
| --- | --- |
| `index.html` | All page content: bio, education, research, teaching, experience, contact |
| `assets/css/style.css` | Styles and colors (light theme variables at the top, dark theme under `html[data-theme="dark"]`) |
| `assets/js/main.js` | Dark-mode toggle, mobile menu, heading fade-in on scroll, click the avatar to enlarge |
| `images/` | Profile photo, favicon, university logo |
| `files/` | PDFs such as the CV |
| `.nojekyll` | Tells GitHub Pages to publish files as-is, without Jekyll processing |
| `CNAME` | Custom domain liangwendy.org (DNS is managed in Cloudflare; do not delete this file) |

## Common edits

Every spot in `index.html` that you are likely to edit is marked with a `✏️` comment.

- **Add a paper**: in the Research section, copy one `<li>…</li>` and change the title, link, coauthors and journal.
- **Change the profile photo**: put the photo in `images/` (portrait 4:5, at least 480×600) and update `<img class="profile__avatar" src="…">`.
- **Update the CV**: overwrite `files/CV.pdf` (keep the same file name so the nav link doesn't need to change).
- **Add or remove a section**: each section is a `<section class="band" id="…">`; add or remove the matching `<li>` in the top nav as well.
- **Change colors**: edit the color variables at the top of `assets/css/style.css`.
- **After changing CSS/JS**: bump the numbers in `style.css?v=3` and `main.js?v=2` in `index.html`. GitHub Pages lets browsers cache these files for 10 minutes, so without a new version number visitors may see new content with old styles.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

## Publishing updates

```bash
git add -A && git commit -m "Update website" && git push
```

About a minute after pushing, <https://liangwendy.org> updates automatically.

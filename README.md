# পেয়ালা — Peala Tea House

A single-page, mobile-first site for Peala tea house: the brand story, the
tea menu with introductory-offer pricing, the story behind the cup design
(featuring Rajshahi landmarks), and links to social media.

## What's inside

- `index.html` — all page content and structure
- `css/styles.css` — design tokens, layout, and components
- `js/main.js` — scroll reveal, ambient steam animation, and the landmark
  detail modal (the page still works with this disabled — nothing critical
  depends on JS except the "বিস্তারিত জানুন" pop-ups)
- `assets/` — logo, favicons, and the cup demonstration video
- `assets/video/peala-cup.mp4` — re-encoded from your uploaded clip (720p,
  ~1.7MB) so it loads quickly on mobile data

No build step, no dependencies to install. It's plain HTML/CSS/JS, so it can
be served as-is.

## Deploying with GitHub Pages

1. Push this folder's contents to the root of a GitHub repository (or the
   `docs/` folder, or a `gh-pages` branch — whatever you prefer).
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, pick the branch/folder you pushed to and save.
4. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

## Updating content later

- **Social links** live in three places: the top bar, the "অনলাইনে আমাদের
  খুঁজুন" section, and the footer. Search `index.html` for `pealacafe` and
  `PealaCafe` to find every instance.
- **Tea menu & prices** are in the `#teas` section — each tea is one
  `<article class="tea-card">` block; the price line is
  `<p class="tea-price"><span class="price-old">…</span><span class="price-new">…</span></p>`.
- **Landmark descriptions** (the four "বিস্তারিত জানুন" pop-ups) are stored
  as plain text in `js/main.js`, inside the `landmarkData` object near the
  top of the file — edit the `title`/`body` strings there.
- **Colors and fonts** are set once as CSS variables at the top of
  `css/styles.css` under `:root`.


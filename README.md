# Daniel Distor — Personal Website

Live at https://danieldistor.com

Personal portfolio site: home, about, and projects pages. Plain HTML, CSS, and JavaScript with no build step.

## Structure

```
index.html      Home: intro, education, selected work, experience, contact
about.html      About: background, what I bring, full experience, education, skills
projects.html   Projects: Digital / Physical tabs
404.html        Not-found page (served automatically by Cloudflare Pages)
styles.css      All styles
script.js       Nav highlighting, project tabs
assets/         Images and logos
_headers        Cloudflare Pages caching and security headers
```

## Run locally

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

## Updating

After editing `styles.css` or `script.js`, bump the `?v=N` number where each file is linked in the HTML pages so browsers load the new version.

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, pick this repo.
3. Build settings: **Framework preset: None**, **Build command:** *(leave empty)*, **Build output directory:** `/`.
4. Deploy. Every push to `main` redeploys automatically.
5. Custom domain: in the Pages project → **Custom domains** → add `danieldistor.com`, then add `www.danieldistor.com` too. Cloudflare sets up DNS and HTTPS.
6. Send `www` to the main domain: **Rules → Redirect Rules** → create a rule from the "Redirect from WWW to root" template (301).

# xrmconsultancy.com

Source for the XRM Consultancy marketing site: static HTML/CSS/JS, no build step.
XRM Consultancy is the advisory practice of VR Masters, LLC (DBA: XR Masters).

## Structure

- `index.html`, `services.html`, `about.html`, `insights.html`, `contact.html`: the five pages
- `css/style.css`: shared stylesheet
- `js/main.js`: mobile nav toggle, Talks & Insights filter tabs, Web3Forms handling (contact + newsletter)
- `assets/`: `xrm-logo.png` (header mark, on light bg / favicon), `xrm-logo-footer.png` (footer mark: white X + grey R + orange band, for the dark footer), `ali-hantal.jpg` (founder headshot)

## Local preview

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Deployment

Served via GitHub Pages (`main` branch, root). `CNAME` = `xrmconsultancy.com` (apex is
canonical; `www.` 301-redirects to it). Target repo: **`github.com/ahantal/xrmconsultancy.com`**
— a fresh repo the user created (currently holds only a placeholder `README`); the rebranded
site here still needs to be pushed to it. The old `github.com/ahantal/hantal.com` repo +
`www.hantal.com` Pages site are separate and still live.

Forms POST to Web3Forms (`api.web3forms.com/submit`); the access key in the form markup
delivers to the address that created it.

## Rebrand note (2026-09-09)

Migrated from Hantal Advising / hantal.com to XRM Consultancy / xrmconsultancy.com.
Contact address is `info@xr-masters.com`. The local project folder is now
`Web Sites/xrmconsultancy.com/` (was `Hantal.com/`). The `xrmconsultancy.com` domain is
live (placeholder page); this site is staged locally and not yet pushed.

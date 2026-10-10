# Restaurant-Landing-Page

Calzone Point website (React/Vite), connected to Sanity project `vpdloifa`, dataset `production`.

- `/admin/` serves a standalone Sanity Studio with its own dependencies.
- The website loads published menu and website settings from Sanity. No write credentials are shipped to visitors.
- Netlify builds the public site and Studio together on Node 24. CMS publishing does not require rebuilding the site.
- Existing menu data remains bundled as a fallback during initialization or API outages.

Run `npm ci`, `npm run dev`, `npm test`, or `npm run build` from the repository root. Studio setup and editing instructions are in [studio/README.md](studio/README.md).

Search metadata updates in the browser; social previews and structured data in the static HTML remain the existing values until updated in code.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/RobasAhmedShah/Restaurant-Landing-Page)

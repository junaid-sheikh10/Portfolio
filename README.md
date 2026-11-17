# Portfolio

My personal portfolio website, built with [Astro](https://astro.build) and published on GitHub Pages:
https://junaid-sheikh10.github.io/Portfolio/

## Editing content

All content (name, bio, skills, projects, experience, links) lives in **`src/data/site.ts`**.
To add a project, copy one block in the `projects` list, change the text, and push to `main`.
GitHub Actions rebuilds and republishes the site automatically.

## Run locally

Requires Node 20+.

```
npm install
npm run dev        # http://localhost:4321/Portfolio/
npm run build      # outputs the static site to dist/
```

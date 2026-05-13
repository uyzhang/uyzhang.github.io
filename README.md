# Yi Zhang — Personal Homepage

Source for [https://uyzhang.github.io](https://uyzhang.github.io), built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000).

## Deployment

This repo is automatically built and deployed by the GitHub Action defined in `.github/workflows/deploy.yml` whenever changes land on `main`.

## Content layout

- `_pages/about.md` — landing page (bio, research interests)
- `_bibliography/papers.bib` — publications (BibTeX)
- `_news/` — news items (one Markdown file per item)
- `_data/socials.yml` — email, GitHub, Google Scholar, etc.
- `_data/venues.yml` — venue badge colors
- `_data/coauthors.yml` — coauthor name → personal page links
- `_config.yml` — global site configuration

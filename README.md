# Ahmed Elkassas — Data Science Portfolio (v2)

A hand-coded, single-page portfolio — HTML, CSS, and a little JS. No
frameworks, no build step.

## What's in v2

- **New Services section** — five numbered, editorial-style rows
  (data analysis, ML prototyping, cloud AI on AWS, automation, mobile/embedded).
- **Upgraded Skills section** — grouped cards with tag chips
  (core / familiar / in-progress) instead of plain bullet lists.
- **Upgraded Projects section** — tech chips per project, hover
  micro-interactions, "view" links, and an honest "in the lab" card for
  the ML capstone in progress.
- **Polish everywhere** — dual-layer nav hover, active-section nav
  highlighting, scroll progress bar, terminal line-by-line reveal,
  tools marquee, quick-facts panel in About, oversized footer mark.

## Sections

Hero → About → Services → Skills → Experience → Projects → Contact

## Editing checklist

1. **Contact links** (`index.html`, near the bottom) — replace
   `your.email@example.com`, `github.com/yourusername`, and
   `linkedin.com/in/yourusername` with the real ones.
2. **Project links** — each project card has a "View details ↗" link
   with `href="#"` and an `EDIT:` comment. Point them at repos/demos
   or delete the links.
3. **Hero metadata** — the mono line under the CTA buttons (location,
   status). Edit or remove freely.
4. **Re-theme** — every color lives in `:root` at the top of
   `style.css`.

## Running it

Open `index.html` in a browser. That's it.

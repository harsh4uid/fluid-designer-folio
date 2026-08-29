# Neo-Brutalist Portfolio — Single Scrolling Page

Build a one-page portfolio matching the uploaded Figma design exactly, with Framer Motion animations. All three design frames become sections of one continuously scrolling page.

## Visual system (taken from the design)

- Off-white background (#F7F7F5), pure black text and 2-3px black borders on everything.
- Hard offset drop shadows (solid black, no blur), slight rotations on cards and highlight blocks.
- Accents: yellow (#FFD400), cyan (#22D3EE), pink (#F9A8D4), light grey card fills.
- Type: heavy geometric sans for headings (Poppins/Archivo-style bold), monospace for tags, buttons, and small labels.
- Sharp corners, chunky buttons that press down on hover.

## Page structure (top to bottom)

```text
Sticky header: HA logo | Home About Skills Projects Contact | Resume button
1. Hero        "HI THERE! I'M HARSH AGRAWAL." + yellow highlight, bio card,
               View Projects / Contact Me buttons, stacked photo frame
2. Tech strip  Grey band with mono chips: Python, TensorFlow, React, Docker, AWS, Tailwind
3. About       "About Me" pink tag, "I'm a curious and motivated student." headline,
               intro paragraph, handwritten-style note card
4. Highlights  Bento grid: Physics Instructor (large), Web Dev, Algorithms (tilted),
               AI & Machine Learning with "Current Focus" tag
5. Skills      "TECHNICAL ARSENAL" with terminal icon — 3 cards: AI/ML (cyan),
               Frontend (pink), Algorithms (yellow), each with description + mono chips
6. Projects    "FEATURED PROJECTS" with rocket icon — cards for VisionNet AI and
               AlgoVisual (Live Demo / GitHub), plus Neural Style Transfer and
               Data Vis Dashboard cards with category badges
7. Contact     Brutalist call-to-action block with email button and social links
Footer         HA. | © 2024 Harsh Agrawal. Built with Neo-Brutalism. | GitHub LinkedIn Twitter Email
```

Nav links scroll smoothly to sections; the active section underlines in the header while scrolling.

## Animations (Framer Motion)

- Section headings and cards fade + slide up on scroll into view, staggered per group.
- Hero elements enter in sequence: tag, headline lines, highlight bar wipe, bio card, buttons, photo.
- Tech chips stagger in; skill/project cards lift and shift their shadow on hover.
- Buttons translate into their shadow on press. Motion respects reduced-motion settings.

## Content

All copy, project titles, and descriptions from the design are used as-is so you can swap in your own details later. Placeholder links (#) for GitHub/live demos and resume; images for the hero portrait and project thumbnails are generated to match the design's illustration style.

## Technical notes

- Single route at `/` (rewrites `src/routes/index.tsx`), composed of section components under `src/components/sections/`.
- `motion` (Framer Motion) added as a dependency; shared brutalist primitives (Card, Button, Tag) in `src/components/brutal/`.
- Colors, shadows, and fonts added as design tokens in `src/styles.css` — no hardcoded color classes in components.
- Fonts loaded via a `<link>` in `src/routes/__root.tsx`.
- Page-specific SEO title/description/OG tags on the index route.
- Fully responsive: multi-column grids collapse to single column, header turns into a mobile menu.
- No backend — the contact section links to email and socials rather than submitting a form.

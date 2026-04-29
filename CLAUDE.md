# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-file HTML presentation deck for the AV Distribution team briefing (2026). No build step, no package manager — open `AV Distribution.html` directly in a browser.

## Architecture

The deck has three layers:

1. **`deck-stage.js`** — a self-contained custom element (`<deck-stage>`) that handles navigation, viewport scaling (1920×1080 design canvas), print/PDF output, speaker notes via `postMessage`, and localStorage slide persistence. No dependencies.

2. **`components.jsx`** — shared React primitives and slide chrome (typography scale, spacing constants, three visual variants A/B/C). Globals used by slides: `VARIANTS`, `SPACING`, `TYPE_SCALE`, and all exported components (`SlideFrame`, `BigTitle`, `Eyebrow`, etc.).

3. **`slides.jsx`** — 12 slide components (`Slide01`–`Slide12`), each receiving a `{ variant }` prop. All slides share `SlideInner` and the globals from `components.jsx`.

The HTML file loads React 18 and Babel Standalone from unpkg, then includes both `.jsx` files as `type="text/babel"` script tags. Babel transpiles JSX in the browser at load time — there is no offline compilation. Each `<section>` slide mounts a separate React root.

## Visual Variants

Three themes are toggled via a `data-variant` attribute on `<deck-stage>` and a `#tweaks` panel (toggle with the `T` key):

- **A** — Editorial Broadcast: cream background, Newsreader serif titles
- **B** — Timecode Grid: cooler paper, all-monospace (JetBrains Mono)
- **C** — Film Leader: dark background (#1C1A17), amber accent

## Slide Animations

Elements with `data-anim` attributes animate in when their slide becomes active (`[data-deck-active]`). Animation types: `up`, `right`, `fade`, `scale`, `grow`, `grow-y`. Stagger delay is controlled by `data-delay="N"` (CSS variable `--anim-delay`).

## Navigation Keys

`←` / `→`, `Space`, `PgUp` / `PgDn`, `Home` / `End`, `R` (reset), `1`–`9` (jump to slide), `T` (toggle tweaks panel).

## Speaker Notes

Stored as a JSON array in `<script type="application/json" id="speaker-notes">` in the HTML. Index maps to slide number. The `<deck-stage>` broadcasts `{ slideIndexChanged: N }` via `postMessage` for external speaker-notes windows.

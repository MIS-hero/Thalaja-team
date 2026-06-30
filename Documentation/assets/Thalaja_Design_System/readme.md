# Thalaja Design System

**Thalaja** (ثلاجة — Arabic for *"the fridge"*) is a groceries-coordination mobile app for Saudi families and groups. Households keep shared lists, split the shopping, and see in real time what's already in the cart — so nobody buys two trays of eggs and nobody forgets the laban.

This repository is the brand's design system: tokens, fonts, reusable React components, a full mobile UI kit, and the brand guidelines below. Consuming projects link **`styles.css`** (the only fixed entry point) and pull components from the compiled bundle.

> **Vibe in one line:** a warm, playful sticker-book — bold rounded type, candy-bright colors, heavy navy outlines, and the signature red *starburst* mark, equally at home in Arabic and English.

---

## Sources & provenance

Provided by the client (stored in `assets/`):
- `assets/logo-app-icon.png` — the Thalaja app icon (red starburst on an indigo tile).
- `assets/brand-sheet.png` — the master brand sheet (logo lockups + the six-color palette). All palette hex values were sampled directly from this file.
- `assets/fonts/CooperArabic.ttf` — the Arabic display face (client-supplied).

No codebase, Figma file, or slide deck was provided — the component and screen designs are an original system *derived from* the brand sheet's palette, type, and starburst motif, not a recreation of an existing product UI. If a production codebase or Figma exists, re-attach it and this system should be reconciled against it.

---

## Content fundamentals

How Thalaja talks. The product is **bilingual (Arabic + English)**; Arabic is first-class, not an afterthought.

- **Warm, second-person, and familial.** We address the user directly ("you"/"أنت") and by name. Copy sounds like a helpful family member, not a corporation. Greetings use everyday Gulf Arabic transliterations: *"Sabah al-khair, Reem"*, *"Suhoor is in 3 days."*
- **Short and concrete.** Labels are 1–3 words ("To buy", "Bought", "Add item", "Invite"). Helper lines are one breath: *"12 items · shared with 4."*
- **Sentence case, never SHOUTY.** Buttons and titles are sentence case ("Add to list", not "ADD TO LIST"). Overlines/eyebrows are the only uppercase, and only at micro size.
- **Culturally grounded.** Real Saudi grocery vocabulary and context: *laban, tamees bread, Sukkari dates, Arabic coffee beans, cardamom, suhoor, Ramadan pantry.* Households are named ("Al-Otaibi household").
- **Gently encouraging, lightly celebratory.** Completion is rewarded with warmth, not confetti spam: *"All bought! 🎉"*, *"Nothing here yet."*
- **Emoji: yes, but as functional category tokens** (🥛 dairy, 🥬 produce, 🍞 bakery, 🍗 meat, 🫙 pantry) and the occasional friendly greeting (👋). Never as decorative filler in body copy.
- **Numbers are friendly fractions, not dashboards.** "5/12 done" beats a percentage. Avoid data-slop stats.

**Voice cheat-sheet**
- ✅ "Sabah al-khair, Reem 👋 — suhoor is in 3 days."
- ✅ "Add to a list…"  ·  "2 cartons · full fat"  ·  "Reem checked off 3 items"
- ❌ "OPTIMIZE YOUR GROCERY WORKFLOW"  ·  "Click here to proceed"  ·  "Item successfully added to database"

---

## Visual foundations

The look is **flat, bold, and sticker-like** — closer to a children's-book sticker sheet or a fruit-stand crate label than a typical fintech app.

### Color
Six brand colors, all high-chroma, sampled from the brand sheet:
- **Red `#FF4924`** — the primary. Energy, CTAs, the starburst mark.
- **Mint `#00EE8E`** — fresh/success/"in stock"; takes **navy** ink on top.
- **Indigo `#4444D5`** — secondary brand, links, info.
- **Navy `#0D0050`** — the ink. All text, all outlines, deep surfaces.
- **Lilac `#F3CDEA`** — soft accent, tags, gentle cards.
- **Cream `#FFF8ED`** — the paper. The default app background; *never* pure white at full bleed.

Surfaces stack cream → sunken-cream → white card. Each action color has a `-tint` (soft fill) and `-press` (darker) step. See `tokens/colors.css`.

### Type
- **Display:** `CooperArabic` (Arabic) + **Baloo 2** (Latin) — friendly, rounded, retro warmth. Used for screen titles, card titles, numbers.
- **Body/UI:** **Tajawal** — a clean geometric bilingual sans, excellent for Arabic. All body, labels, inputs.
- **CooperArabic covers Arabic glyphs only**; the cascade renders Latin in Baloo 2 — see *Font substitutions* below. Because Cooper's Arabic line metrics are tall, give **multi-line Latin display headings `line-height: ~1.2`** to avoid clipping.
- Display is set tight (`-0.01em`, line-height 1.05–1.2) and heavy (700–800). Body is 16px, weight 400–500, line-height 1.45.

### Shape, border & elevation — the signature
- **Everything is rounded.** Radii run 8 → 40px, with `--radius-pill` (999) for all buttons, chips, avatars, and steppers.
- **Heavy navy outlines.** Primary controls and emphasis cards carry a `2.5px` navy stroke. This is the system's backbone — when in doubt, outline it in navy.
- **The "hard pop" shadow.** The brand's signature elevation is a *hard, blur-less offset shadow* in navy (`--shadow-pop: 4px 5px 0 navy`), not a soft blur. Buttons and pop-cards visibly **depress into their shadow on press** (translate 2px/3px, shadow → none). Soft blurry shadows (`--shadow-md`) are reserved for floating sheets, menus, and toasts only.
- **Cards:** white fill, either a soft `1.5px` cream hairline (default) or the navy outline + hard-pop (featured). Tinted pastel cards (`tone="lilac"` etc.) for callouts. Corner radius `--radius-lg` (24px).

### The starburst blob
The most recognizable device. A wavy 9-point **sticker seal** (`assets/blob-starburst.svg`, and the `Blob` component) with a cream "peel" halo stroke. Used as: avatars, category/empty-state art, the icon backdrop in headers, and decorative "sticker stacks" (several overlapping at different sizes/tones/rotations). Content inside a rotated blob is auto-counter-rotated to stay upright.

### Motion
Quick and tactile, never floaty. Transitions are `.08–.15s ease`. The vocabulary is **press feedback**: buttons depress into their shadow; icon buttons and chips `scale(0.9–0.96)`; checkboxes fill mint with a chunky tick. Progress bars ease their width. No long fades, no parallax, no infinite decorative loops.

### Backgrounds & imagery
Solid cream, or a soft radial warm-peach glow from the top (`radial-gradient(circle at 50% 0%, #ffe6df, cream)`). No photography in the core UI; imagery is emoji category tokens + starburst stickers. Imagery, where used, should read **warm and bright**, never cold or desaturated.

### States
- **Hover/active:** color controls keep their fill; feedback comes from the press transform, not a color shift.
- **Press:** solid buttons translate into the shadow; soft/ghost controls scale down.
- **Disabled:** `opacity 0.45`, `not-allowed`.
- **Focus:** `2px indigo` border + a `4px` indigo-tint ring on inputs.
- **Checked (list rows):** row dims to `0.72`, label strikes through in `ink-300`.

### Layout
Mobile-first, `390px` phone canvas, `20px` gutters. Sticky bottom CTA over a cream protection-gradient. Bottom tab bar with the active tab in red. Content scrolls under fixed headers/footers; never use `scrollIntoView`.

---

## Iconography

- **System:** **Lucide** (line icons, ~2.2px stroke, round caps/joins) is the canonical icon set — it matches the brand's rounded, friendly geometry. In the UI kit these are inlined as a small hand-picked set (`ui_kits/thalaja-app/icons.jsx`) so the kit is self-contained; in production, pull from Lucide directly (`lucide-react` or the CDN). **This is a substitution** — no icon assets shipped with the brand — chosen for stroke-weight and corner-radius compatibility. ⚠️ *If the real product uses a different icon set, swap `icons.jsx`.*
- **Stroke, not fill.** Icons are outline-style in navy (or the control's ink color), never duotone or filled.
- **Emoji as category tokens.** Grocery categories use emoji (🥛🥬🍞🍗🫙) inside tinted rounded squares — this is intentional and on-brand, the one sanctioned "illustrative" device alongside the starburst.
- **The starburst** (`assets/blob-starburst.svg` / `Blob`) is the brand's own icon-shape; use it for avatars and decorative accents rather than inventing new illustrative SVGs.
- Icon sizes: 18 (sm) / 24 (md) / 28 (lg), from `--icon-*` tokens.

---

## Font substitutions ⚠️

Only **`CooperArabic.ttf`** (Arabic display) was supplied. To complete a working bilingual system we added two Google Fonts:
- **Baloo 2** — the **Latin display** companion (CooperArabic has no Latin glyphs). Rounded and warm to match.
- **Tajawal** — the **bilingual body/UI** face.

If the brand has official Latin-display or body fonts, **please send the files** and we'll swap them in `tokens/fonts.css` + `tokens/typography.css`.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry point (imports only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `base.css`.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`components/`, namespace `window.ThalajaDesignSystem_ed2185`)
- `core/` — `Button`, `IconButton`, `Badge`, `Avatar` + `AvatarGroup`, `Card`.
- `forms/` — `Input`, `Checkbox`, `QtyStepper`, `SegmentedControl`.
- `patterns/` — `Blob` (starburst), `GroceryItem`, `CategoryChip`, `ListSummaryCard`.
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each directory ships one `*.card.html` for the Design System tab.

**UI kit** (`ui_kits/thalaja-app/`)
- `index.html` — interactive click-through: home (shared lists) → list detail (filter, check off, adjust qty) → add-item sheet → aggregated Shop view → Household. `ui.jsx` (primitives), `icons.jsx` (Lucide set), `app.jsx` (screens + state).

**Assets** (`assets/`)
- `logo-app-icon.png`, `brand-sheet.png`, `blob-starburst.svg`, `fonts/CooperArabic.ttf`.

**Other**
- `SKILL.md` — Agent-Skills manifest for use in Claude Code.

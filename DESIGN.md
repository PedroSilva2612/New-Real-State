---
name: New Real State
description: One-page site for a real estate agency, told as a walk through a house.
colors:
  stone: "#dfdedb"
  stone-surface: "#d3d2ce"
  graphite: "#26251e"
  graphite-muted: "#57564f"
  graphite-surface: "#313029"
  stone-on-dark: "#dfdedb"
  stone-muted-on-dark: "#9e9d99"
  logo-cobalt: "#0069ff"
  on-cobalt: "#ffffff"
typography:
  display:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "clamp(38px, 3.24vw + 25.4px, 72px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "clamp(30px, 1.72vw + 23.3px, 48px)"
    fontWeight: 400
    letterSpacing: "-0.025em"
  statement:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.4vw + 14px, 64px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  code:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "clamp(32px, 2vw + 20px, 48px)"
    fontWeight: 400
    letterSpacing: "0.06em"
  title:
    fontFamily: "Red Hat Display, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
  body:
    fontFamily: "Red Hat Text, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Red Hat Text, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  btn: "8px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
  s10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.logo-cobalt}"
    textColor: "{colors.on-cobalt}"
    rounded: "{rounded.btn}"
    height: "44px"
  button-secondary:
    textColor: "{colors.graphite}"
    height: "44px"
  form-card:
    backgroundColor: "{colors.stone-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.s6}"
  photo-frame:
    rounded: "{rounded.lg}"
---

# Design System: New Real State

## Overview

**Creative North Star: "The Walk-Through".** The page is a visit to a house: you cross the threshold in the hero, walk room by room through the purchase, and leave with a date for a real visit. It is calm, architectural and exact, closer to a good architect's site than to a property portal. Photographs of houses and rooms carry every section. The interface stays almost neutral; the only colour is the cobalt of the logo, which the owner asked to keep exactly as it was.

The anti-reference is the category default: a search bar over a skyline, a grid of listing cards with heart icons and a stat strip.

## Colors

Restrained: stone and graphite neutrals with one accent taken from the logo.

### Primary
- **Logo Cobalt** (#0069ff): the logo, the primary button (one filled button per view), the focus ring, links, the strong word of the statement and the tour's floor plan (room in hand, route, dot). Never a ground.

### Neutral
- **Stone** (#dfdedb): the page ground.
- **Stone Surface** (#d3d2ce): the form card.
- **Graphite** (#26251e): text, hairlines (at 11 to 15%), the dark band (Descuento) and the footer ground.
- **Graphite Muted** (#57564f): the grey second half of a heading and labels only, never body text.
- **Stone on Dark** (#dfdedb) and **Stone Muted on Dark** (#9e9d99): text on the dark band; body text on dark stays in Stone on Dark (7:1).

### Named Rules
**The Logo Owns the Blue.** Cobalt appears only where it marks an action, focus or where you are; it never fills a section.

## Typography

**Display Font:** Red Hat Display (weight 400 only).
**Body Font:** Red Hat Text (400 and 500).

Headlines carry size and tight tracking, never weight. Sentence case everywhere; no all-caps labels.

### Hierarchy
- **Display** (400, 72px at 1440 down to 38px, 1.02): the hero h1 only, at most three lines.
- **Statement** (400, 64px down to 32px, 1.12): the Sobre nosotros statement only, one clear step above its h2.
- **Code** (400, 48px down to 32px, tracking +0.06em): the discount code only.
- **Headline** (400, 48px down to 30px): section h2. A heading may end in a grey second sentence (`.muted`) after a full stop.
- **Title** (400, 20px): column titles in the method row; tour chapter titles at 28px in the live panel.
- **Body** (400, 16px/26px): all reading text, lines at most 62 characters.
- **Label** (500, 13px): small labels such as the code label and the tour's chapter count.

## Layout

One section per screen. Every section is exactly one or two viewport heights (two on a phone when stacking needs it), its h2 first, 120px from its top (96px on a phone). One 1280px wrap with 80px gutters (48px on tablet, 24px on a phone), a 12-column grid, 24px gaps. Splits are always text left (columns 1 to 5) and picture right (columns 7 to 12), top-aligned; the picture runs down to the section's foot. The h2 sits above the split on the left line. Separation is by ground change or space, never by rules.

## Elevation & Depth

Flat. No shadows. Depth comes from photographs and from the one dark band. The tour panel is opaque Stone, never glass.

## Shapes

Soft radius: 20px on photographs and the form card, 12px on panels, 8px on buttons and fields. Photographs are always cropped by `object-fit: cover`. On a phone, tall frames load a portrait crop made for them (art direction with `<picture>`), never a landscape file cropped away.

## Components

- **Buttons:** one primary (cobalt, 44px, arrow glyph) per view and one secondary look (text with an underline and arrow). They step on hover and press on click.
- **Tour panel:** chapter count, a 168px floor plan (walls in 2.4px graphite with door openings, the terrace's open edge dashed, visited rooms shaded, the room in hand in cobalt, and the dotted cobalt route from the front door that only ever passes through openings), the chapter title and two lines. On a phone the panel is compact: the plan (84px) sits beside the count at the panel's top right.
- **Hero facts:** the offer as three short facts (offer, end date, code; label in muted 14px, value in 500) at the foot of the words' column on the photograph's bottom line, desktop only. No float card on the photograph.
- **Services list:** rows with a 1px rule; the photograph beside them swaps instantly to the row under the pointer, focus or tap.
- **Discount code:** the code set large in the display face with wide tracking, a secondary "Copiar el código" button whose label swaps with a 2px blur for 2 seconds, and a status line.
- **Form:** visible labels, 48px fields, the kit's two-up grid from 640px (name and email, need and code), the message full width and growing to the card's foot on a desktop, errors under each field in Spanish, one status line, sent through Netlify Forms. The form card sizes to its content. On tablet and phone the order is words, form, then the photograph taking the spare height.

## Do's and Don'ts

- Do show a real photograph of a house or room in every section except the statement.
- Do keep cobalt for actions, focus and wayfinding.
- Do keep the tour as the page's one big motion; the statement highlight is the only other moment.
- Don't add an eyebrow or kicker label above a heading.
- Don't fade sections in on scroll, tilt cards or add parallax.
- Don't recolour, redraw or restyle the logo.
- Don't print phone numbers, street numbers or email addresses; the form is the contact.

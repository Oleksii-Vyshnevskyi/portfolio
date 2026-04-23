# Portfolio Case Study Style Guide

This guide documents the visual system currently used on the portfolio case study pages, especially the Shopmonkey Accounting page. It is written for recreating or exploring the system in Figma.

## Design Direction

The style is dark, restrained, editorial, and product-focused. The page relies on large type, generous spacing, thin structural borders, and full-width product screenshots. The system should feel premium but simple: fewer decorative elements, more rhythm and hierarchy.

## Typeface

Primary family:

```css
Inter, "Helvetica Neue", Arial, sans-serif
```

Rules:

- Keep the current font family.
- Letter spacing is `0` for normal text and headings.
- Use uppercase tracking only for small labels/eyebrows.
- Do not use italics.
- Use weight changes sparingly.

## Color Tokens

Core page colors:

| Token | Hex | Figma name | Usage |
| --- | --- | --- | --- |
| `--bg` | `#05070B` | `Background / Base` | Main page background |
| `--fg` | `#F5F7FB` | `Text / Primary` | Main headings and high-emphasis text |
| `--muted` | `#A6ADBA` | `Text / Secondary` | Body copy, descriptions, captions |
| `--soft` | `#737B8F` | `Text / Tertiary` | Lower-emphasis metadata |
| `--line` | `#25283C` | `Border / Subtle` | Dividers, screenshot borders |
| `--panel` | `#0B101A` | `Surface / Panel` | Product screenshot containers |
| `--panel-strong` | `#111827` | `Surface / Strong` | Stronger dark surface when needed |

Shopmonkey case accent colors:

| Token | Hex | Figma name | Usage |
| --- | --- | --- | --- |
| `accentPrimary` | `#70A0FF` | `Accent / Blue` | Eyebrows and key section labels |
| `accentSecondary` | `#5060FF` | `Accent / Indigo` | Secondary accents |
| `hoverTint` | `rgba(112, 160, 255, 0.11)` | `Accent / Hover Tint` | Subtle hover/focus background |

Figma setup:

- Create color styles under `Background`, `Text`, `Border`, `Surface`, and `Accent`.
- Keep the palette mostly neutral. Blue should be an accent, not the dominant page color.

## Spacing Tokens

Base spacing scale:

| Token | Value | Figma name |
| --- | ---: | --- |
| `--space-1` | `8px` | `Space / 1` |
| `--space-2` | `16px` | `Space / 2` |
| `--space-3` | `24px` | `Space / 3` |
| `--space-4` | `40px` | `Space / 4` |
| `--space-5` | `64px` | `Space / 5` |
| `--space-6` | `96px` | `Space / 6` |

Responsive layout tokens:

| Token | Value | Usage |
| --- | --- | --- |
| `--gutter` | `clamp(24px, 3.6vw, 64px)` | Page side padding and major grid gaps |
| `--section-space` | `clamp(64px, 8vw, 128px)` | Vertical section padding |
| `--max` | `1440px` | Max content container width |
| `--measure` | `64ch` | Body copy max line length |
| `--measure-tight` | `42ch` | Short intro copy |
| `--measure-wide` | `76ch` | Wider editorial text |

Case-study block tokens:

| Token | Value | Usage |
| --- | --- | --- |
| `--case-page-stack` | `clamp(72px, 9vw, 140px)` | Default vertical rhythm between major case-study blocks |
| `--case-block-space` | `clamp(18px, 1.7vw, 28px)` | Label, heading, and text spacing inside text blocks |
| `--case-body-space` | `28px` | Paragraph and heading-to-list rhythm |
| `--case-section-padding` | `var(--section-space) 0` | Shared section top/bottom padding |
| `--case-panel-padding` | `clamp(28px, 3vw, 48px)` | Story grid panel padding |
| `--case-media-stack` | `clamp(72px, 8vw, 132px)` | Spacing between large screenshots |
| `--case-media-separator-space` | `clamp(var(--space-3), 4vw, var(--space-5))` | Screenshot separator padding |
| `--case-reflection-padding` | `clamp(96px, 12vw, 176px) 0` | Reflection section padding |

Mobile overrides:

- Gutter: `20px`
- Section space: `64px`
- Use `Space / 5` between major stacked screenshots or sections when unsure.

## Typography Styles

Use these as Figma text styles.

### Case Hero Title

Example: `Shopmonkey Accounting`

```css
font-size: clamp(3.25rem, 5.4vw, 6.9rem);
font-weight: 760;
line-height: 0.94;
letter-spacing: 0;
```

Figma approximation:

- Desktop: `96-110px / 0.94`
- Tablet: `64-84px / 0.94`
- Mobile: `47-67px / 0.94`
- Weight: `760` if variable Inter is available, otherwise `Bold`.

Usage:

- Keep the title on one line when it fits naturally.
- Allow two lines on smaller screens.
- Do not shrink aggressively just to force one line.

### Case Hero Description

Example: `Accounting views for auto repair shops.`

```css
font-size: clamp(1.05rem, 1.18vw, 1.22rem);
line-height: 1.64;
font-weight: normal;
color: Text / Secondary;
```

Figma approximation:

- `18-20px`
- Line height: `160-165%`
- Weight: `Regular`

Current spacing above description:

- `20-36px` from title to description.

### Eyebrow / Section Label

Examples: `Enterprise SaaS`, `Problem`, `Product UI`

```css
font-size: 0.73rem;
font-weight: 700;
letter-spacing: 0.14em;
line-height: 1.15;
text-transform: uppercase;
```

Figma approximation:

- Size: `12px`
- Line height: `14px`
- Weight: `Bold`
- Letter spacing: `14%`
- Case: uppercase
- Color: Accent / Blue for case study labels.

### Section Headline

Examples:

- `Designed for clarity, not accounting complexity.`
- `Shops needed financial visibility without leaving their operating system.`

```css
font-size: clamp(1.38rem, 1.48vw, 1.95rem);
font-weight: 680;
line-height: 1.24;
letter-spacing: 0;
```

Figma approximation:

- Desktop: `28-31px / 124%`
- Mobile: `22-32px / 124%`
- Weight: `Semibold` or `680` variable.

### Body Copy

```css
font-size: clamp(1rem, 1.08vw, 1.12rem);
line-height: 1.68;
font-weight: normal;
color: Text / Secondary;
```

Figma approximation:

- Size: `16-18px`
- Line height: `168%`
- Weight: `Regular`
- Max width: roughly `64ch`.

### Metadata Label

Examples: `Role`, `Timeline`, `Team`, `Year`

```css
font-size: 0.72rem;
font-weight: 700;
letter-spacing: 0.12em;
line-height: 1.1;
text-transform: uppercase;
color: muted mixed down against background;
```

Figma approximation:

- Size: `11-12px`
- Weight: `Bold`
- Letter spacing: `12%`
- Color: Text / Tertiary.

### Metadata Value

```css
font-size: clamp(0.98rem, 1vw, 1.08rem);
line-height: 1.45;
font-weight: bold/inherited strong;
color: Text / Primary;
```

Figma approximation:

- Size: `16-17px`
- Line height: `145%`
- Weight: `Semibold` or `Bold`.

### Captions

```css
font-size: 0.76rem;
line-height: 1.45;
color: Text / Secondary;
```

Figma approximation:

- Size: `12px`
- Line height: `145%`
- Weight: `Regular`.

## Layout Components

### Center

Used to cap content width and center the page.

```css
max-width: 1440px;
margin-inline: auto;
```

Figma equivalent:

- Desktop frame max content width: `1440px`.
- Side padding: `24-64px`, depending on viewport.

### Stack

Used for vertical rhythm.

```css
display: flex;
flex-direction: column;
gap: variable spacing;
```

Common stack values:

- Small content stack: `16-24px`
- Section content stack: `40-64px`
- Screenshot stack: `64-132px`

### Cluster

Used for horizontal groups that wrap naturally.

```css
display: flex;
flex-wrap: wrap;
gap: 16px;
align-items: center;
```

Use for:

- Navigation
- Metadata rows
- Link groups
- Tags or controls

### Grid

Used for cards, story panels, and responsive groups.

```css
grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
gap: var(--gutter);
```

Figma equivalent:

- Use auto layout or layout grid that collapses from multi-column to one column.
- Avoid fixed desktop-only side rails unless they add real scanning value.

## Case Study Hero

Structure:

1. Small `OV` nav mark.
2. Eyebrow.
3. Large title.
4. Description.
5. Metadata row.
6. Hero screenshot.

Current behavior:

- Hero content is one column.
- Metadata always sits below the title/description.
- Metadata is a four-column row on large screens.
- Metadata collapses to one column on mobile.

Recommended Figma spacing:

- Nav to hero content: `64-108px`
- Eyebrow to title: `18-26px`
- Title to description: `20-36px`
- Description to metadata row: `40-64px`
- Metadata to hero image: `56-96px`

## Product UI Section

Desktop:

- Eyebrow sits in a left column.
- Headline and supporting copy sit in the right column.

Mobile:

- Single column only.
- Order: eyebrow, headline, supporting copy.
- Keep text left aligned.

Recommended spacing:

- Eyebrow to headline: `8-24px`
- Headline to description: `24px`
- Intro to first screenshot: `64px`
- Screenshot to screenshot: `64px` on mobile, up to `132px` on desktop.

## Borders And Surfaces

Borders:

```css
1px solid #25283C
```

Use borders for:

- Product screenshot frames.
- Major section separators.
- Story grid on desktop.

Avoid borders for:

- Every mobile text block.
- Decorative containers that do not structure content.

Screenshots:

- Keep screenshots large.
- Use no border radius.
- Use subtle dark border.
- Avoid cards inside cards.

## Motion

Motion is subtle and functional:

- Fade/slide in on section reveal.
- No heavy animation.
- Respect reduced motion.

Figma prototype guidance:

- Use `Smart Animate` sparingly.
- Keep transition duration around `180-520ms`.
- Use ease-out.

## Responsive Rules

Desktop:

- Max content width: `1440px`.
- Large headings can be oversized.
- Metadata and supporting content can use horizontal rows.

Tablet:

- Let grids collapse naturally.
- Avoid forcing side columns if readability suffers.

Mobile:

- Page gutter: `20px`.
- Stack most content vertically.
- Keep section spacing consistent at `64px`.
- Product UI intro should be one column.
- Metadata should be one column.

## Figma Setup Checklist

Create these Figma styles:

- Color styles from the color token tables.
- Text styles:
  - `Display / Case Hero`
  - `Heading / Section`
  - `Body / Default`
  - `Label / Eyebrow`
  - `Meta / Label`
  - `Meta / Value`
  - `Caption / Default`
- Spacing variables:
  - `8, 16, 24, 40, 64, 96`
- Layout variables:
  - `Page max width: 1440`
  - `Desktop gutter: 64`
  - `Mobile gutter: 20`
  - `Section space: 64-128`

## Practical Notes

- The system works because type scale and spacing are doing most of the visual work.
- Keep screenshots visually dominant.
- Use blue labels to create hierarchy, not decoration.
- When a section feels cramped, prefer stacking and spacing over adding containers.
- When a section feels too loose, reduce vertical spacing before changing typography.

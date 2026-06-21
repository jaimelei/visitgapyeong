# Visit Gapyeong — Complete Implementation Plan

## Decisions

- **Animation**: Framer Motion
- **Language**: Korean + English (Korean primary for poetic elements, always with English translation)
- **Navigation**: Floating chapter indicator (side dots on desktop, bottom progress bar on mobile)

---

## Dependencies

### Install

```bash
npm install framer-motion
```

No other new dependencies. Everything else is vanilla React + Tailwind + CSS.

---

## Design System

### Color Palette (Tailwind extended)

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#1a1714` | Primary text, dark backgrounds |
| `paper` | `#f5f0e8` | Main background |
| `paper-light` | `#faf7f2` | Lighter paper variant |
| `mist` | `#d4cfc5` | Borders, dividers, muted elements |
| `stone` | `#8a8378` | Captions, secondary text |
| `shadow` | `#2c2822` | Dark overlays, dark sections |
| `autumn` | `#c4775a` | Warm accent (autumn, letter) |
| `spring` | `#7a9e7e` | Cool accent (spring) |
| `winter` | `#e8e4de` | Very light, near-white |
| `summer` | `#4a7c6f` | Deep green accent |

### Typography

| Role | Font | Weights | Tailwind Key |
|------|------|---------|-------------|
| Display | Cormorant Garamond | 300, 400, 500, 600 | `font-display` |
| Body | Inter | 300, 400 | `font-body` |

Scale (using `clamp` for fluid sizing):

| Token | Desktop | Mobile | Tailwind Class |
|-------|---------|--------|---------------|
| `hero` | `6rem` | `2.5rem` | `text-hero` → `clamp(2.5rem, 7vw, 6rem)` |
| `chapter` | `3.5rem` | `1.75rem` | `text-chapter` → `clamp(1.75rem, 4.5vw, 3.5rem)` |
| `quote` | `2.5rem` | `1.5rem` | `text-quote` → `clamp(1.5rem, 3.5vw, 2.5rem)` |
| `subheading` | `1.5rem` | `1.125rem` | `text-subheading` → `clamp(1.125rem, 2vw, 1.5rem)` |
| `body` | `1.0625rem` | `0.9375rem` | `text-body` → `clamp(0.9375rem, 1.2vw, 1.0625rem)` |
| `caption` | `0.8125rem` | `0.75rem` | `text-caption` → `clamp(0.75rem, 1vw, 0.8125rem)` |
| `small` | `0.6875rem` | `0.625rem` | `text-small` → `clamp(0.625rem, 0.8vw, 0.6875rem)` |

### Animation Tokens (Framer Motion defaults)

| Name | Properties | Usage |
|------|-----------|-------|
| `fadeUp` | `{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }` | Most elements |
| `fadeIn` | `{ hidden: { opacity: 0 }, visible: { opacity: 1 } }` | Quotes, subtle elements |
| `letterReveal` | Staggered children, each letter fades in | Chapter titles |
| `staggerChildren` | `{ staggerChildren: 0.1 }` | Fragment items |

Transition defaults: `duration: 0.8, ease: [0.25, 0.1, 0.25, 1]` (custom cubic-bezier, smooth and cinematic)

---

## Navigation — Floating Chapter Indicator

### Desktop (≥768px)

- **Position**: Fixed, right edge, vertically centered
- **Appearance**: 9 small dots (6px diameter), spaced 20px apart, arranged vertically
- **Active state**: Active dot expands to 8px with `bg-ink` fill; inactive dots are `bg-stone/40`
- **Label on hover**: On hovering a dot, the chapter name appears to the left in `text-small font-body text-stone`, offset by `right: 28px`
- **Animation**: Dot size and color transition with `duration: 0.3`
- **Z-index**: `z-50`

### Mobile (<768px)

- **Position**: Fixed, bottom of screen, centered horizontally
- **Appearance**: A thin horizontal progress bar (2px height), spanning `calc(100% - 3rem)` width, centered
- **Fill**: `bg-stone/60` track, `bg-ink` fill that grows proportionally based on scroll progress
- **Z-index**: `z-50`

### Implementation

- Uses IntersectionObserver to detect which chapter is currently in view (threshold `0.3`)
- Each chapter root element gets a `data-chapter` attribute
- Clicking a dot smooth-scrolls to that chapter

---

## File Structure (New / Modified)

```
src/
├── components/
│   ├── common/
│   │   ├── ScrollReveal.tsx        [NEW]
│   │   └── ImagePlaceholder.tsx    [NEW]
│   └── layout/
│       └── ChapterNav.tsx          [NEW]
├── data/
│   └── gapyeong.ts                [NEW]
├── hooks/
│   ├── useActiveChapter.ts        [NEW]
│   └── useParallax.ts             [NEW]
├── lib/
│   └── animations.ts              [NEW]
├── pages/
│   └── home/
│       ├── index.tsx               [MODIFY]
│       └── components/
│           ├── Arrival.tsx         [NEW]
│           ├── Exists.tsx          [NEW]
│           ├── PauseQuote.tsx      [NEW]
│           ├── Landscape.tsx       [NEW]
│           ├── Seasons.tsx         [NEW]
│           ├── Fragments.tsx       [NEW]
│           ├── Letter.tsx          [NEW]
│           └── Ending.tsx          [NEW]
├── index.css                       [MODIFY]
├── App.tsx                         [UNCHANGED]
├── main.tsx                        [UNCHANGED]
tailwind.config.js                  [MODIFY]
index.html                          [MODIFY]
```

---

# Chapter Specifications

Every chapter below is described with exact content, layout, sizing, positioning, and animation. Nothing is left to interpretation.

---

## Chapter 1 — The Arrival

### Emotional Role
Mystery, threshold, anticipation. The visitor has not yet arrived — they're approaching.

### Layout

```
┌──────────────────────────────────────────────┐
│                                              │
│          (full-screen background image)       │
│          with dark gradient overlay           │
│                                              │
│                                              │
│               가 평                           │  ← hero text, centered
│              Gapyeong                         │  ← subtitle below
│                                              │
│                                              │
│                                              │
│                  ↓                            │  ← scroll indicator
└──────────────────────────────────────────────┘
```

### Dimensions
- Height: `100vh`, `100svh` on mobile (safe viewport)
- Width: full viewport
- Overflow: hidden

### Background
- `ImagePlaceholder` spanning full container with `object-fit: cover` equivalent
- Dark gradient overlay: `linear-gradient(to bottom, rgba(26,23,20,0.3) 0%, rgba(26,23,20,0.6) 100%)`

### Text Content & Positioning

**Korean title: `가평`**
- Font: `font-display`, weight 300
- Size: `text-hero` → `clamp(2.5rem, 7vw, 6rem)`
- Color: `text-paper`
- Letter-spacing: `0.2em`
- Position: centered both axes (flexbox)
- Animation: Each character (가, 평) fades in sequentially with `letterReveal`, 0.4s stagger, 0.8s duration each. Starts 0.5s after page load.

**English subtitle: `Gapyeong`**
- Font: `font-body`, weight 300
- Size: `text-caption`
- Color: `text-paper/60` (60% opacity)
- Letter-spacing: `0.3em`
- Text-transform: uppercase
- Position: directly below Korean title, `mt-4`
- Animation: fades in 0.6s after the Korean title finishes (total delay ~2s)

**Scroll indicator**
- A thin vertical line (1px wide, 40px tall) with a small circle (4px) at the top
- Color: `text-paper/40`
- Position: `absolute bottom-12 left-1/2 -translate-x-1/2`
- Animation: gentle bounce — `y: [0, 8, 0]` repeating every 2s, `opacity` pulsing `[0.4, 0.7, 0.4]`

### Image Prompt

**`arrival-hero.jpg` — 1920×1080px (16:9)**
> Aerial view of a winding two-lane road cutting through dense, lush green forest in the mountains of Gapyeong county, South Korea. Early morning, golden hour light filtering through low-hanging mist that hovers between the treetops. The road curves gently and disappears into the forest. Shot from a drone at medium altitude (approximately 100 meters), camera angled 30 degrees downward. Warm cinematic color grading: desaturated greens with golden-amber highlights, slight teal in the shadows. Soft natural lens flare from the sun peeking over the mountain ridge. The atmosphere is humid and misty. No vehicles, no people. The forest is a mix of pine and deciduous trees. Mood: mysterious, inviting, like the first frame of a film. Reference: Terrence Malick landscape cinematography, the opening shots of "The New World." Dimensions: 1920×1080 pixels, 16:9 aspect ratio.

---

## Chapter 2 — A Place That Simply Exists

### Emotional Role
The first real content. A quiet introduction — the visitor has arrived, and they're seeing Gapyeong for the first time. Wonder, stillness.

### Layout

```
Desktop (≥768px):
┌──────────────────────────────────────────────┐
│                                              │
│   (padding-top: ~20vh)                       │
│                                              │
│   ┌─────────────────┐                        │
│   │                 │     어떤 곳은            │
│   │                 │     찾아가는 게 아니라     │
│   │    IMAGE        │     그저 거기에 있다.      │
│   │  (55% width)    │                        │
│   │                 │     Some places are not  │
│   │                 │     found.               │
│   │                 │     They simply exist.    │
│   └─────────────────┘                        │
│                              ── text is       │
│                              vertically offset│
│                              lower than image │
│                              top by ~8rem     │
│                                              │
│   (padding-bottom: ~16vh)                    │
│                                              │
│                                              │
│        가평은 서울에서 한 시간 거리에 있다.       │  ← second text block
│        그러나 시간이 다르게 흐르는 곳이다.        │
│                                              │
│        Gapyeong is an hour from Seoul.        │
│        But time moves differently here.       │
│                                              │
│        산과 강 사이, 계절이 천천히 지나가고,       │
│        아침 안개가 마을을 감싸는 곳.             │
│                                              │
│        Between mountains and rivers,          │
│        where seasons pass slowly              │
│        and morning mist wraps around villages.│
│                                              │
│   (padding-bottom: ~12vh)                    │
└──────────────────────────────────────────────┘

Mobile (<768px):
┌────────────────────┐
│                    │
│  (padding-top: 8vh)│
│                    │
│  ┌──────────────┐  │
│  │              │  │
│  │    IMAGE     │  │
│  │  (100% width)│  │
│  │              │  │
│  └──────────────┘  │
│                    │
│  Korean text       │
│  English text      │
│                    │
│  Second block      │
│                    │
└────────────────────┘
```

### Specific Layout Details (Desktop)

- Container: `max-w-[1400px] mx-auto px-8`
- Top section: `flex` row, `gap-16`
  - Image: `w-[55%]` — ImagePlaceholder with aspect ratio 3:4 (portrait)
  - Text column: `w-[35%]`, `pt-32` (8rem offset to sit lower than image top)
- Bottom text block: `max-w-[600px]`, `ml-[15%]`, `mt-24`

### Text Content

**Block 1 — Poetic Introduction (beside image)**

Korean:
```
어떤 곳은
찾아가는 게 아니라
그저 거기에 있다.
```

English:
```
Some places are not found.
They simply exist.
```

- Korean: `font-display`, weight 400, `text-chapter`, `leading-[1.6]`, `text-ink`
- English: `font-body`, weight 300, `text-body`, `text-stone`, `mt-6`

**Block 2 — Contextual Introduction**

Korean:
```
가평은 서울에서 한 시간 거리에 있다.
그러나 시간이 다르게 흐르는 곳이다.

산과 강 사이, 계절이 천천히 지나가고,
아침 안개가 마을을 감싸는 곳.
```

English:
```
Gapyeong is an hour from Seoul.
But time moves differently here.

Between mountains and rivers,
where seasons pass slowly
and morning mist wraps around villages.
```

- Korean: `font-display`, weight 400, `text-subheading`, `leading-[1.8]`, `text-ink`
- English: `font-body`, weight 300, `text-body`, `leading-[1.8]`, `text-stone`, `mt-4`
- Paragraph gap between stanzas: `mt-6`

### Animations
- Image: `fadeUp`, delay `0s`, duration `1s`
- Text block 1: `fadeUp`, delay `0.3s`, duration `0.8s`
- Text block 2: `fadeUp`, delay `0.2s`, duration `0.8s` (triggered when it enters viewport)

### Image Prompt

**`exists-village.jpg` — 1200×1600px (3:4 portrait)**
> A quiet village street in rural Gapyeong county, South Korea, during late afternoon. No people visible. A narrow paved road with low stone walls on either side. Traditional Korean low-rise houses with dark clay tile roofs (giwa) visible behind the walls. A single mature persimmon tree (감나무) with bright orange persimmons hanging from bare autumn branches stands prominently on the left side. Soft, overcast sky providing even, diffused light with no harsh shadows. A few potted plants near doorways. The road gently curves and disappears. Shot at eye level with a 50mm lens equivalent, shallow depth of field with the persimmon tree sharp and background softly blurred. Color palette: muted earth tones — warm browns, soft grays, dusty greens, the orange of the persimmons as the only vivid color. Slight film grain. Mood: stillness, everyday beauty, timelessness, a place that exists quietly. Reference: Cereal Magazine travel photography, Korean rural lifestyle editorial. Dimensions: 1200×1600 pixels, 3:4 portrait aspect ratio.

---

## Chapter 3 — First Pause

### Emotional Role
Stillness. The visitor stops scrolling instinctively. A single thought to sit with.

### Layout

```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                                              │
│                                              │
│          소리 없이 흐르는 것들이                  │
│          가장 오래 남는다.                       │
│                                              │
│          The things that flow                 │
│          without sound                        │
│          stay the longest.                    │
│                                              │
│                                              │
│                                              │
│                                              │
└──────────────────────────────────────────────┘
```

### Dimensions
- Height: `100vh`
- Background: `bg-paper` (warm parchment)
- Flexbox: centered both axes

### Text Content

Korean:
```
소리 없이 흐르는 것들이
가장 오래 남는다.
```

English:
```
The things that flow without sound
stay the longest.
```

- Korean: `font-display`, weight 300, `text-quote`, `leading-[1.6]`, `text-ink`, `text-center`
- English: `font-body`, weight 300, `text-body`, `text-stone`, `text-center`, `mt-8`
- Container: `max-w-[36ch] mx-auto px-6`

### Animations
- Entire text block: `fadeIn`, duration `2s`, ease `easeOut`
- Very slow, deliberate fade — the slowness itself communicates "pause"

---

## Chapter 4 — The Landscape

### Emotional Role
Awe, immersion, scale. This is Gapyeong's grandeur — mountains, water, forest. The visitor feels small.

### Layout

```
Desktop:
┌──────────────────────────────────────────────┐
│                                              │
│  (padding-top: ~12vh)                        │
│                                              │
│         산이 말을 걸어온다                       │  ← chapter title
│         The mountains speak first             │
│                                              │
│  (gap: ~8vh)                                 │
│                                              │
│ ┌────────────────────────────────────────────┐│
│ │                                            ││  ← FULL-BLEED panorama
│ │        IMAGE 1: Mountains panorama         ││     (100% width, parallax)
│ │        (parallax: moves at 0.3x scroll)    ││
│ │                                            ││
│ └────────────────────────────────────────────┘│
│                                              │
│  (gap: ~10vh)                                │
│                                              │
│            ┌──────────────┐                  │
│            │              │   물은 항상        │  ← IMAGE 2 (40% width)
│            │  IMAGE 2:    │   어디론가 가고     │     offset left with text
│            │  River       │   있다.            │     to the right
│            │  close-up    │                   │
│            │              │   The water is     │
│            │              │   always going     │
│            │              │   somewhere.       │
│            └──────────────┘                  │
│                                              │
│  (gap: ~8vh)                                 │
│                                              │
│                    ┌─────────────────────┐    │
│                    │                     │    │  ← IMAGE 3 (60% width)
│                    │   IMAGE 3:          │    │     offset right
│                    │   Forest trail      │    │
│                    │                     │    │
│                    │                     │    │
│                    └─────────────────────┘    │
│                   길은 어디로 가는지              │  ← caption below image
│                   묻지 않아도 된다.              │
│                                              │
│                   You don't need to ask       │
│                   where the path leads.       │
│                                              │
│  (padding-bottom: ~12vh)                     │
└──────────────────────────────────────────────┘
```

### Specific Layout Details (Desktop)

- Chapter title: `max-w-[1400px] mx-auto px-8`, left-aligned
- Image 1 (panorama): `w-full`, no horizontal padding, overflow hidden. Container height `60vh`. Image inside with parallax offset.
- Image 2 + text row: `max-w-[1400px] mx-auto px-8`, flex row
  - Image: `w-[40%]`, `ml-[5%]`, aspect ratio 2:3 portrait
  - Text: `w-[35%]`, `pt-16`, `pl-12`
- Image 3: `max-w-[1400px] mx-auto px-8`
  - Image: `w-[60%]`, `ml-auto` (pushed to right), aspect ratio 5:7 portrait
  - Caption: `ml-auto`, `w-[60%]`, `pr-8`, `mt-4`

### Text Content

**Chapter Title**

Korean: `산이 말을 걸어온다`
English: `The mountains speak first`

- Korean: `font-display`, weight 300, `text-chapter`, `tracking-[0.06em]`, `text-ink`
- English: `font-body`, weight 300, `text-caption`, `text-stone`, `tracking-[0.2em]`, `uppercase`, `mt-3`

**Text beside Image 2**

Korean:
```
물은 항상
어디론가 가고 있다.
```
English:
```
The water is always
going somewhere.
```

- Korean: `font-display`, weight 400, `text-subheading`, `leading-[1.7]`, `text-ink`
- English: `font-body`, weight 300, `text-body`, `text-stone`, `mt-4`

**Caption below Image 3**

Korean:
```
길은 어디로 가는지
묻지 않아도 된다.
```
English:
```
You don't need to ask
where the path leads.
```

- Korean: `font-display`, weight 300, italic, `text-body`, `text-stone`
- English: `font-body`, weight 300, `text-caption`, `text-stone/70`, `mt-2`

### Animations
- Chapter title: `fadeUp`, delay `0s`, duration `0.8s`
- Image 1: `fadeIn`, duration `1.2s`. Parallax: `useParallax` hook with speed `0.3` (moves at 30% of scroll speed)
- Image 2: `fadeUp` from left (`x: -30, opacity: 0` → `x: 0, opacity: 1`), duration `0.8s`
- Text beside image 2: `fadeUp`, delay `0.2s`
- Image 3: `fadeUp`, duration `0.8s`
- Caption: `fadeIn`, delay `0.3s`

### Image Prompts

**`landscape-mountains.jpg` — 1920×800px (2.4:1 ultrawide)**
> Panoramic view of Gapyeong's mountain ranges with Cheongpyeong Lake (청평호) visible as a sliver of blue-green water in the valley below. Multiple layers of mountain ridges receding into misty distance — at least four visible layers. Late afternoon golden hour light, warm amber tones illuminating the nearest ridge, transitioning to progressively cooler blue-gray tones on distant ridges. Low-hanging clouds nestled between the second and third ridges. Dense forest of pine and deciduous trees covering every mountainside. Shot from an elevated viewpoint (mountaintop or high overlook) with a wide-angle lens (24mm equivalent). No human structures visible. The atmosphere is humid with a slight haze that adds depth. Color grading: warm foreground, cool background, cinematic contrast. Mood: vast, awe-inspiring, serene, ancient. Reference: Makoto Shinkai background paintings (Your Name, Weathering With You), Korean national park photography. Dimensions: 1920×800 pixels, 2.4:1 ultrawide.

**`landscape-river.jpg` — 800×1200px (2:3 portrait)**
> Close-up of a rocky mountain stream in Gapyeong. Crystal clear water flowing over smooth gray and brown river stones, some covered with bright green moss. The stream is narrow — perhaps 2 meters wide. Dappled sunlight filtering through an overhead canopy of trees, creating shifting patterns of light on the water surface. Shot from a low angle, camera positioned just above water level, looking slightly upstream. 35mm lens equivalent, shallow depth of field: foreground rocks and water razor-sharp, background foliage rendered as a soft green blur. The water has subtle blue and green reflections. A few fallen autumn leaves caught between rocks. Cool green dominant tones with warm golden highlights where sunlight hits. Slight mist rising from the water. Mood: intimate, meditative, the sound of water made visible. Reference: Japanese nature photobooks. Dimensions: 800×1200 pixels, 2:3 portrait.

**`landscape-forest.jpg` — 1000×1400px (5:7 portrait)**
> A narrow dirt walking trail through a mature pine forest in the mountains near Gapyeong. The path curves gently to the right and disappears behind tall, straight pine trunks. The trees are tall (15+ meters) with bark in shades of gray-brown, forming a natural corridor. The canopy is dense, creating a cathedral-like filtered light effect with visible god rays (shafts of golden sunlight) angling through gaps in the foliage. The forest floor is covered with a thick carpet of fallen pine needles in warm orange-brown tones. A few ferns grow at the edges of the path. Shot at eye level, standing on the path, looking forward with a 35mm lens. Slight natural vignette at the edges. Muted, moody color palette: earthy browns, deep greens, golden light shafts. The overall feel is hushed and still. Mood: mystery, solitude, invitation to walk deeper, sacred. Reference: Japanese forest photography, pilgrimage trail imagery. Dimensions: 1000×1400 pixels, 5:7 portrait.

---

## Chapter 5 — Seasons

### Emotional Role
The passage of time, cyclical beauty, nostalgia. Gapyeong seen through the lens of four seasons — each one a different mood, a different memory.

### Overall Structure

Four sub-sections, each with a **completely different layout**. They share a chapter intro, then diverge.

```
Chapter Title Area:
┌──────────────────────────────────────────────┐
│                                              │
│  (padding-top: ~16vh)                        │
│                                              │
│         계절은 가평을 네 번 다시 쓴다             │
│         The seasons rewrite                   │
│         Gapyeong four times                   │
│                                              │
│  (gap: ~12vh)                                │
│                                              │
```

**Chapter title positioning**: centered, `text-center`
- Korean: `font-display`, weight 300, `text-chapter`, `tracking-[0.04em]`
- English: `font-body`, weight 300, `text-caption`, `text-stone`, `tracking-[0.2em]`, `uppercase`, `mt-3`

---

### Season: Spring (봄)

```
Desktop:
┌──────────────────────────────────────────────┐
│                                              │
│                    ┌─────────────────┐        │
│    봄               │                 │        │
│    Spring           │   IMAGE         │        │
│                    │   (50% width)    │        │
│    벚꽃이 지면       │   offset right   │        │
│    비로소 봄이       │                 │        │
│    왔다는 걸 안다.    │                 │        │
│                    └─────────────────┘        │
│    When the cherry                            │
│    blossoms fall,                             │
│    you finally know                           │
│    spring has come.                           │
│                                              │
└──────────────────────────────────────────────┘
```

**Layout (Desktop)**:
- `max-w-[1400px] mx-auto px-8`, flex row
- Text column: `w-[35%]`, `pl-[8%]`
- Image: `w-[50%]`, `ml-auto`, aspect ratio 4:5 portrait

**Season label**:
- Korean `봄`: `font-display`, weight 600, `text-subheading`, `text-spring`
- English `Spring`: `font-body`, weight 300, `text-small`, `text-spring/70`, `tracking-[0.2em]`, `uppercase`, `mt-1`

**Text**:

Korean:
```
벚꽃이 지면
비로소 봄이 왔다는 걸 안다.
```
English:
```
When the cherry blossoms fall,
you finally know spring has come.
```

- `mt-8` from season label
- Korean: `font-display`, weight 400, `text-subheading`, `leading-[1.7]`, `text-ink`
- English: `font-body`, weight 300, `text-body`, `text-stone`, `mt-4`

**Image Prompt — `season-spring.jpg` — 1200×1500px (4:5)**
> A row of cherry blossom trees (벚나무) along a quiet walking path beside a stream in Gapyeong county. The blossoms are at peak bloom — dense clusters of pale pink and white flowers covering every branch. Petals are actively falling, caught mid-air, creating a gentle snowfall effect. The ground and stream surface are dusted with fallen petals. Soft overcast sky — flat, pale gray-white, providing perfectly even diffused light. No people. The path is unpaved, light brown earth. Young green grass is emerging along the stream bank. Shot at eye level with a 50mm lens, medium depth of field. Color palette: soft pastels — pale pink, cream white, light green, gray-white sky. Very slight warm film grain. The atmosphere is quiet and ephemeral. Mood: gentle, bittersweet, the beauty of something about to end. Reference: Japanese sakura photography, Kinfolk Magazine spring editorials. Dimensions: 1200×1500 pixels, 4:5 portrait.

---

### Season: Summer (여름)

```
Desktop:
┌──────────────────────────────────────────────┐
│                                              │
│  (gap: ~10vh from Spring)                    │
│                                              │
│ ┌────────────────────────────────────────────┐│
│ │                                            ││
│ │            IMAGE (full-bleed)              ││  ← 100% width, 60vh height
│ │                                            ││
│ │                                            ││
│ │    여름                                     ││  ← text overlay,
│ │    Summer                                  ││     bottom-left,
│ │                                            ││     on dark gradient
│ │    매미 소리가 시간을 대신한다.                  ││
│ │    Cicadas tell the time                   ││
│ │    instead of clocks.                      ││
│ │                                            ││
│ └────────────────────────────────────────────┘│
│                                              │
└──────────────────────────────────────────────┘
```

**Layout (Desktop)**:
- Full-bleed image: `w-full`, `h-[60vh]`, `relative`, overflow hidden
- Dark gradient overlay at bottom: `linear-gradient(to top, rgba(26,23,20,0.7) 0%, transparent 60%)`
- Text: `absolute bottom-12 left-12` (desktop), `bottom-8 left-6` (mobile)

**Text**:

Korean:
```
매미 소리가 시간을 대신한다.
```
English:
```
Cicadas tell the time instead of clocks.
```

- Season label: same treatment as Spring but `text-summer`
- Korean: `font-display`, weight 400, `text-subheading`, `text-paper`, `leading-[1.6]`
- English: `font-body`, weight 300, `text-body`, `text-paper/70`, `mt-3`

**Image Prompt — `season-summer.jpg` — 1920×1080px (16:9)**
> Dense, lush green mountainside in Gapyeong during peak summer. The entire frame is filled with rich, vibrant foliage — multiple shades of green from emerald to jade to forest green. A thin, distant waterfall is barely visible as a white thread cascading down the mountainside through a gap in the trees. The atmosphere is visibly humid — a warm haze softens the distant portions of the mountain. Bright midday sun creates strong highlights on the canopy with deep shadows beneath. A narrow hiking trail is just barely visible as a gap in the foliage. Shot from a valley viewpoint looking upward at the mountainside with a standard lens (50mm). Rich, saturated color grading: deep greens dominating, warm golden highlights. The air looks thick and warm. Mood: abundant, alive, the fullness of summer, almost overwhelming in its greenness. Reference: Studio Ghibli countryside summer scenes, lush Korean forest photography. Dimensions: 1920×1080 pixels, 16:9 landscape.

---

### Season: Autumn (가을)

```
Desktop:
┌──────────────────────────────────────────────┐
│                                              │
│  (gap: ~10vh from Summer)                    │
│                                              │
│   가을                                        │
│   Autumn                                      │
│                                              │
│   가장 아름다운 계절은                            │
│   가장 짧다.                                   │
│                                              │
│   The most beautiful season                   │
│   is always the shortest.                     │
│                                              │
│  (gap: ~4vh)                                 │
│                                              │
│       ┌────────┐                             │
│       │ IMG A  │  ┌──────────┐               │  ← scattered polaroid-style
│       │(rotate │  │  IMG B   │               │    3 images with slight
│       │ -3deg) │  │(rotate   │               │    rotations and overlap
│       └────────┘  │  2deg)   │  ┌─────────┐  │
│                   └──────────┘  │  IMG C   │  │
│                                 │(rotate   │  │
│                                 │ -1deg)   │  │
│                                 └─────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

**Layout (Desktop)**:
- Text: `max-w-[1400px] mx-auto px-8`, `ml-[8%]`
- Images container: `max-w-[1400px] mx-auto px-8`, `relative`, `h-[500px]` (desktop)
- Image A: `absolute`, `left-[5%]`, `top-0`, `w-[320px]`, `rotate-[-3deg]`, aspect ratio 4:5
- Image B: `absolute`, `left-[30%]`, `top-[40px]`, `w-[350px]`, `rotate-[2deg]`, aspect ratio 3:4
- Image C: `absolute`, `right-[10%]`, `top-[80px]`, `w-[300px]`, `rotate-[-1deg]`, aspect ratio 4:5

**On mobile**: images stack vertically at full width, no rotations, with `8px` gap.

**Text**:

Korean:
```
가장 아름다운 계절은
가장 짧다.
```
English:
```
The most beautiful season
is always the shortest.
```

- Season label: same treatment, `text-autumn`
- Korean: `font-display`, weight 400, `text-subheading`, `text-ink`, `leading-[1.7]`, `mt-6`
- English: `font-body`, weight 300, `text-body`, `text-stone`, `mt-4`

**Image Prompts:**

**`season-autumn-a.jpg` — 900×1125px (4:5)**
> A small traditional Korean pavilion (정자) with dark wooden columns and curved tile roof, surrounded by peak autumn foliage in Gapyeong. Trees in brilliant red, deep orange, and golden yellow frame the pavilion. A few fallen leaves scattered on the stone base. Soft, warm afternoon light creating a golden glow. Shot from a slight distance with a 50mm lens. Warm color grading: rich amber, deep reds, golden yellows. A hint of mist in the background. Mood: warm nostalgia, the beauty of impermanence. Reference: Korean autumn temple photography, Wong Kar-wai warm color palette. Dimensions: 900×1125 pixels, 4:5 portrait.

**`season-autumn-b.jpg` — 900×1200px (3:4)**
> A quiet country road in Gapyeong lined with golden ginkgo trees (은행나무). The road is covered in a thick carpet of bright yellow ginkgo leaves. A low stone wall runs along one side. Late afternoon light streams horizontally through the tree trunks, creating long shadows across the yellow carpet. No people, no vehicles. Shot at eye level looking down the road as it recedes into the golden canopy. 35mm lens. Color palette dominated by warm yellows and golds with cool gray shadows. Slight film grain effect. Mood: golden, nostalgic, a perfect moment. Dimensions: 900×1200 pixels, 3:4 portrait.

**`season-autumn-c.jpg` — 900×1125px (4:5)**
> Close-up of red maple leaves (단풍) reflected in the still surface of a small pond in Gapyeong. The reflection is almost perfect — the water is very still with only the faintest ripple. Above the water, a branch with vivid red maple leaves extends into the frame. Below, the reflection shows the same leaves surrounded by reflected blue-gray sky. Shot from above the water at a slight angle with a 50mm macro lens. Shallow depth of field. Color palette: vivid reds, cool blue-gray water, dark reflections. Mood: contemplative, the duality of reality and reflection, autumn's intensity. Dimensions: 900×1125 pixels, 4:5 portrait.

---

### Season: Winter (겨울)

```
Desktop:
┌──────────────────────────────────────────────┐
│                                              │
│  (gap: ~14vh from Autumn — extra breathing)  │
│                                              │
│                                              │
│                                              │
│                겨울                            │
│                Winter                         │
│                                              │
│              ┌──────────┐                    │
│              │          │                    │  ← single small image
│              │  IMAGE   │                    │    centered, modest size
│              │ (35% w)  │                    │    (35% width on desktop)
│              │          │                    │
│              └──────────┘                    │
│                                              │
│              눈이 모든 것을 지우면                │
│              남는 건 고요뿐이다.                  │
│                                              │
│              When snow erases everything,     │
│              only silence remains.            │
│                                              │
│                                              │
│                                              │
└──────────────────────────────────────────────┘
```

**Layout (Desktop)**:
- Everything centered: `text-center`, `flex flex-col items-center`
- Image: `w-[35%]` desktop, `w-[70%]` mobile, aspect ratio 7:5 landscape, `mt-8`
- Text below image: `mt-8`, `max-w-[28ch]`
- **Massive whitespace** — `py-24` (6rem) top and bottom padding on this sub-section

**Text**:

Korean:
```
눈이 모든 것을 지우면
남는 건 고요뿐이다.
```
English:
```
When snow erases everything,
only silence remains.
```

- Season label: same treatment, `text-stone` (muted, like winter)
- Korean: `font-display`, weight 300, `text-subheading`, `text-ink`, `leading-[1.7]`
- English: `font-body`, weight 300, `text-body`, `text-stone`, `mt-4`

**Image Prompt — `season-winter.jpg` — 1400×1000px (7:5)**
> A solitary bare deciduous tree standing on a gentle snow-covered hillside in Gapyeong county during winter. Minimalist composition with the tree placed slightly off-center to the right. The sky is overcast, white-gray, blending almost seamlessly with the snowy ground at the horizon — creating an ethereal, boundaryless feel. The tree's dark, intricate branches create a delicate silhouette against the white background. Faint blue-gray shadows in the snow indicate subtle undulations in the terrain. A few tiny footprints (possibly animal tracks) lead away from the tree. Shot from a medium distance with a telephoto lens (85mm equivalent), compressing the space. Almost monochrome color palette: pure whites, pale grays, faint blue shadows, the dark brown-black of the tree. Very clean, very minimal. Mood: solitude, profound silence, stark beauty, the world reduced to its essence. Reference: Korean minimalist photography, Scandinavian winter landscapes, Michael Kenna. Dimensions: 1400×1000 pixels, 7:5 landscape.

---

## Chapter 6 — Second Pause

### Emotional Role
After the intensity of four seasons, a moment to breathe. A Korean poem that holds the weight of what just passed.

### Layout
- Identical structure to Chapter 3 (First Pause)
- Height: `100vh`, centered
- Background: `bg-paper` — but with a very subtle change: a thin horizontal line (`1px`, `bg-mist`, `w-16`) centered above the text at `mb-12`, as a visual divider/ornament

### Text Content

Korean:
```
어디선가 바람이 불어와
이름 모를 꽃잎을 데려다 놓고
아무 말 없이 떠난다.

그런 곳이 있다.
```

English:
```
From somewhere the wind arrives,
carries petals of unnamed flowers,
sets them down, and leaves
without a word.

Such a place exists.
```

- Korean: `font-display`, weight 300, `text-quote`, `leading-[1.8]`, `text-ink`, `text-center`
- English: `font-body`, weight 300, `text-body`, `leading-[2]`, `text-stone`, `text-center`, `mt-10`
- Container: `max-w-[32ch] mx-auto px-6`

### Animations
- Thin horizontal line: `scaleX` from 0 to 1, duration `1s`, origin center
- Text: `fadeIn`, delay `0.5s`, duration `2s`

---

## Chapter 7 — Fragments of Gapyeong

### Emotional Role
Intimacy, discovery, the texture of small moments. After grand landscapes and seasons, we zoom into the details — the café, the trail, the steam, the bridge. These are personal memories, scattered like journal pages.

### Layout

```
Desktop:
┌──────────────────────────────────────────────┐
│                                              │
│  (padding-top: ~12vh)                        │
│                                              │
│           기억의 조각들                         │  ← chapter title
│           Fragments                           │
│                                              │
│  (gap: ~8vh)                                 │
│                                              │
│  ┌────────┐              ┌──────────────┐    │
│  │ IMG A  │              │              │    │
│  │ Café   │              │   IMG B      │    │
│  │ 1:1    │              │   Trail      │    │
│  │rotate  │              │   7:10       │    │
│  │-2deg   │              │   rotate 1deg│    │
│  └────────┘              │              │    │
│  차 한 잔의 시간           └──────────────┘    │
│  The time of                                  │
│  one cup of tea  ┌──────────────┐            │
│                  │              │             │
│                  │   IMG C      │             │
│                  │   Bridge     │   ┌────────┐│
│                  │   10:7       │   │ IMG D  ││
│                  │   rotate     │   │ Market ││
│                  │   -1deg      │   │ 1:1    ││
│                  └──────────────┘   │rotate  ││
│                                     │ 2deg   ││
│                  다리를 건너면         └────────┘│
│                  새로운 길이 있다                │
│                  Cross the bridge,             │
│                  find a new path               │
│                                              │
│                         ┌──────────┐          │
│                         │  IMG E   │          │
│                         │  Steam   │          │
│                         │  4:5     │          │
│                         │  no      │          │
│                         │  rotation│          │
│                         └──────────┘          │
│                         따뜻한 것은              │
│                         항상 가까이에 있다        │
│                         Warmth is always       │
│                         close by               │
│                                              │
│  (padding-bottom: ~12vh)                     │
└──────────────────────────────────────────────┘
```

### Specific Layout Details (Desktop)

This uses **CSS Grid** with 12 columns and intentionally irregular placement:

```
grid: 12 columns, auto rows, gap: 2rem
```

| Item | Grid Position | Width | Rotation | Aspect Ratio |
|------|-------------|-------|----------|-------------|
| IMG A (café) | col 1-4, row 1 | — | `-2deg` | 1:1 |
| Caption A | col 1-4, row 2 | — | `0deg` | — |
| IMG B (trail) | col 8-12, row 1-2 | — | `1deg` | 7:10 |
| IMG C (bridge) | col 4-8, row 3 | — | `-1deg` | 10:7 |
| IMG D (market) | col 9-12, row 3-4 | — | `2deg` | 1:1 |
| Caption C | col 4-8, row 4 | — | `0deg` | — |
| IMG E (steam) | col 6-9, row 5 | — | `0deg` | 4:5 |
| Caption E | col 6-9, row 6 | — | `0deg` | — |

### Mobile Layout
- Simple single-column stack, no rotations
- Each image at `w-full` with caption below
- `gap-12` between items

### Chapter Title

Korean: `기억의 조각들`
English: `Fragments`

- Korean: `font-display`, weight 300, `text-chapter`, `text-center`
- English: `font-body`, weight 300, `text-caption`, `text-stone`, `tracking-[0.2em]`, `uppercase`, `text-center`, `mt-3`

### Fragment Captions

**Café (A)**:
- Korean: `차 한 잔의 시간` — English: `The time of one cup of tea`

**Bridge (C)**:
- Korean: `다리를 건너면 새로운 길이 있다` — English: `Cross the bridge, find a new path`

**Steam (E)**:
- Korean: `따뜻한 것은 항상 가까이에 있다` — English: `Warmth is always close by`

Caption styling: Korean `font-display italic text-body text-stone`, English `font-body text-caption text-stone/60 mt-1`

### Animations
- Each fragment: `fadeUp` with `staggerChildren: 0.15` — items appear one by one as the user scrolls
- Rotations are static (CSS `rotate`), not animated

### Image Prompts

**`fragment-cafe.jpg` — 800×800px (1:1)**
> Interior of a small, cozy Korean countryside café in Gapyeong. Shot from above a worn wooden table looking down at a steaming ceramic cup of green tea (녹차). The cup is simple, handmade-looking, in a matte earth tone. Beside it, a small plate with a piece of yakgwa (약과, traditional Korean cookie). The table surface is weathered natural wood with visible grain. Warm afternoon sunlight streams in from a window just outside the frame, creating a diagonal beam of light across the table surface. Steam from the tea is visible in the light beam. Shallow depth of field — the tea cup is sharp, the edges of the frame are soft. Color palette: warm browns, amber, cream, soft green of the tea. No people visible, but the scene suggests someone has just sat down. Mood: warmth, solitude, a pause in time, intimacy. Dimensions: 800×800 pixels, 1:1 square.

**`fragment-trail.jpg` — 700×1000px (7:10)**
> A narrow forest trail with old wooden steps going upward through deciduous trees in Gapyeong. The steps are weathered, slightly mossy, irregular in spacing. Autumn leaves in orange and gold have accumulated on the steps and along the edges. The trail curves slightly to the left and disappears upward into the canopy. Dappled light filters through the partially bare branches above. Shot looking upward along the trail from the bottom of the steps. 35mm lens, moderate depth of field. Color palette: warm earth tones — russet browns, golden oranges, muted greens, gray-brown wood. Mood: journey, invitation, discovery, the reward of climbing. Dimensions: 700×1000 pixels, 7:10 portrait.

**`fragment-bridge.jpg` — 1000×700px (10:7)**
> A small, arched wooden footbridge spanning a narrow rocky stream in a rural area of Gapyeong. The bridge has simple wooden railings and weathered planks. The stream below has clear water flowing over rounded stones. Dense green vegetation (ferns, low bushes) grows on both banks. Soft, overcast light providing even illumination with no harsh shadows. Shot from one end of the bridge looking across to the other side, where the path continues into trees. 35mm lens, wide depth of field (everything in focus). Muted color palette: grays of the wood and stone, various greens of vegetation, the clear water. A sense of crossing from one place to another. Mood: transition, quiet beauty, a simple passage. Dimensions: 1000×700 pixels, 10:7 landscape.

**`fragment-market.jpg` — 900×900px (1:1)**
> A traditional Korean countryside market stall (시장) in Gapyeong county. An abundant display of fresh local produce arranged on simple wooden tables and in woven baskets. Bright red chili peppers (고추) piled high, deep green cucumbers, yellow-orange pumpkins (호박), white radishes (무), and bunches of green onions. An overhead canvas tarp or awning casts warm, diffused shade with light filtering through. No vendor or customers visible. The arrangement is naturally beautiful but not styled — this is real market abundance. Shot at eye level, straight on, with a 50mm lens. Medium depth of field. Color palette: vivid reds, greens, yellows, and oranges against muted wood and canvas backgrounds. Mood: abundance, authenticity, everyday life, the colors of the earth. Dimensions: 900×900 pixels, 1:1 square.

**`fragment-steam.jpg` — 800×1000px (4:5)**
> Close-up of steam rising from a hot stone pot (뚝배기) of Korean stew (된장찌개 or 순두부찌개) at an outdoor table in Gapyeong. The pot is dark brown/black traditional earthenware, sitting on a wooden trivet. The stew is bubbling slightly — visible red chili flakes, white tofu cubes, green onion slices. Abundant steam rises vertically, caught beautifully by warm backlight (late afternoon sun behind the steam). The background is blurred but suggests an outdoor terrace with green foliage. Shot from slightly above and to the side with a macro-style lens, very shallow depth of field. The steam is the hero of the image. Color palette: warm golds, reds, deep browns, green blur in background. Mood: comfort, warmth, sensory richness, home-cooked nourishment. Dimensions: 800×1000 pixels, 4:5 portrait.

---

## Chapter 8 — A Letter from Gapyeong

### Emotional Role
Longing, farewell, a personal goodbye. As if Gapyeong itself is writing the visitor a letter. Intimate, slightly melancholic, warm.

### Layout

```
Desktop:
┌──────────────────────────────────────────────┐
│                                              │
│      bg-paper-light, subtle paper texture    │
│                                              │
│  (padding-top: ~20vh)                        │
│                                              │
│         ┌────────────────────────┐           │
│         │                        │           │
│         │   가평에서 보내는 편지      │           │  ← styled like a letter
│         │   A Letter from Gapyeong│           │    on a postcard
│         │                        │           │
│         │   ─────                 │           │  ← thin line divider
│         │                        │           │
│         │   당신이 이곳에 온 건      │           │
│         │   우연이 아닐지도 모릅니다.  │           │
│         │                        │           │
│         │   나는 당신을 부르지       │           │
│         │   않았습니다.             │           │
│         │   광고도, 초대장도         │           │
│         │   보내지 않았습니다.       │           │
│         │                        │           │
│         │   그저 여기 있었을 뿐입니다. │           │
│         │                        │           │
│         │   ...                   │           │
│         │                        │           │
│         │   다시 올 필요는 없습니다.  │           │
│         │   하지만 당신이 온다면,     │           │
│         │   나는 여전히             │           │
│         │   여기 있을 것입니다.      │           │
│         │                        │           │
│         │           가평           │           │  ← signature
│         │                        │           │
│         └────────────────────────┘           │
│                                              │
│  (padding-bottom: ~16vh)                     │
│                                              │
└──────────────────────────────────────────────┘
```

### Layout Details
- Background: `bg-paper-light`
- Letter container: `max-w-[32rem] mx-auto px-8 md:px-12`
- Optional: A very subtle `border border-mist/50` around the letter, or a faint `shadow-sm` to give it a slightly raised postcard/paper feel
- Or no border at all — just the centered narrow column against wide whitespace

### Full Letter Text

Korean:
```
가평에서 보내는 편지

당신이 이곳에 온 건
우연이 아닐지도 모릅니다.

나는 당신을 부르지 않았습니다.
광고도, 초대장도 보내지 않았습니다.

그저 여기 있었을 뿐입니다.

아침이면 안개가 내려오고,
저녁이면 산이 붉어지고,
밤이면 별이 이 작은 마을 위로
쏟아지는 그런 곳.

나는 화려하지 않습니다.
빠르지도 않습니다.
하지만 여기에는
다른 곳에 없는 것이 있습니다.

시간이 느려지는 순간.
아무것도 하지 않아도 되는 오후.
바람이 대신 말해주는 이야기.

당신이 여기서 본 것들 —
산, 강, 계절, 그리고 고요함 —
그것들은 늘 여기에 있었습니다.

다시 올 필요는 없습니다.
하지만 당신이 온다면,
나는 여전히 여기 있을 것입니다.

가평
```

English:
```
A Letter from Gapyeong

Your coming here
may not have been an accident.

I did not call for you.
I sent no advertisement, no invitation.

I was simply here.

A place where mist descends each morning,
mountains turn red each evening,
and stars spill over this small village
each night.

I am not glamorous.
I am not fast.
But here, there is something
that exists nowhere else.

Moments where time slows down.
Afternoons where nothing needs to be done.
Stories the wind tells on your behalf.

The things you saw here —
mountains, rivers, seasons, and silence —
they were always here.

You don't need to come back.
But if you do,
I will still be here.

Gapyeong
```

### Typography

- Title `가평에서 보내는 편지`: `font-display`, weight 400, `text-subheading`, `text-ink`
- English title: `font-body`, weight 300, `text-caption`, `text-stone`, `tracking-[0.15em]`, `mt-2`
- Divider: `w-12 h-px bg-mist mx-0 my-8` (thin line, not centered — left-aligned like a real letter)
- Body Korean: `font-display`, weight 300, italic, `text-body`, `leading-[2.2]`, `text-ink`
- Body English: `font-body`, weight 300, `text-body`, `leading-[2]`, `text-stone`, `mt-6`
- Paragraph spacing: `mt-6` between stanzas (both Korean and English)
- Signature `가평`: `font-display`, weight 400, `text-subheading`, `text-ink`, `mt-12`, `text-right`

### Animations
- Letter container fades in as a whole: `fadeUp`, duration `1.2s`
- Then each paragraph within stagger-reveals: `staggerChildren: 0.2`, each paragraph `fadeIn` with `duration: 0.6s`

---

## Chapter 9 — The Ending

### Emotional Role
Quiet closure. A full stop that lingers. The screen should feel nearly empty — like the last page of a book, or the credits rolling on a black screen.

### Layout

```
┌──────────────────────────────────────────────┐
│                                              │
│         bg-ink (dark)                        │
│                                              │
│                                              │
│                                              │
│                                              │
│               가평                            │  ← small, centered
│              Gapyeong                         │
│                                              │
│        37.8315° N, 127.5108° E               │  ← coordinates
│                                              │
│                                              │
│                                              │
│                                              │
└──────────────────────────────────────────────┘
```

### Dimensions
- Height: `100vh`
- Background: `bg-ink` (dark, `#1a1714`)
- Flexbox: centered both axes

### Text Content

**Korean: `가평`**
- `font-display`, weight 300, `text-subheading`, `text-paper/80`, `tracking-[0.15em]`

**English: `Gapyeong`**
- `font-body`, weight 300, `text-caption`, `text-paper/40`, `tracking-[0.3em]`, `uppercase`, `mt-2`

**Coordinates: `37.8315° N, 127.5108° E`**
- `font-body`, weight 300, `text-small`, `text-stone/50`, `tracking-[0.1em]`, `mt-8`

### Animations
- Entire text group: `fadeIn`, duration `2.5s`, ease `easeInOut`
- Very slow, meditative appearance — the slowest animation on the page

---

## Shared Components API

### `ScrollReveal`

```tsx
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;       // seconds, default 0
  duration?: number;    // seconds, default 0.8
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // default 'up'
  once?: boolean;       // default true
  amount?: number;      // viewport threshold 0-1, default 0.2
}
```

Uses Framer Motion's `motion.div` with `whileInView` and `viewport={{ once, amount }}`.

### `ImagePlaceholder`

```tsx
interface ImagePlaceholderProps {
  name: string;         // filename like "arrival-hero"
  aspectRatio: string;  // CSS aspect-ratio value, e.g. "16/9"
  description: string;  // short description shown visually
  prompt: string;       // full ChatGPT prompt stored in data-prompt
  className?: string;
}
```

Renders a `div` with:
- `bg-mist/30` background
- Correct `aspect-ratio` via inline style
- Description text centered in `text-small text-stone/40 font-body`
- `data-prompt` attribute with the full generation prompt
- Smooth `bg-gradient` subtle pattern to look like a refined placeholder (not just flat gray)

### `ChapterNav`

```tsx
interface ChapterNavProps {
  chapters: { id: string; label: string }[];
}
```

- Reads active chapter via `useActiveChapter` hook
- Desktop: renders dot column, fixed right
- Mobile: renders progress bar, fixed bottom

---

## Hooks API

### `useActiveChapter`

```tsx
function useActiveChapter(chapterIds: string[]): string
```

- Observes all elements with matching `id` attributes
- Returns the `id` of the chapter currently most in view
- Uses IntersectionObserver with `threshold: [0, 0.3, 0.6, 1]`

### `useParallax`

```tsx
function useParallax(speed?: number): { ref: RefObject, style: MotionStyle }
```

- `speed` default `0.3` (30% of scroll speed)
- Returns `ref` to attach to container and `style` with `translateY` transform
- Disabled on mobile (returns identity transform when `window.innerWidth < 768`)
- Uses Framer Motion's `useScroll` and `useTransform`

---

## Animations Library (`lib/animations.ts`)

Exports reusable Framer Motion variant objects:

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

export const stagger = (staggerAmount = 0.1) => ({
  visible: { transition: { staggerChildren: staggerAmount } }
});

export const defaultTransition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1]
};

export const slowTransition = {
  duration: 1.5,
  ease: [0.25, 0.1, 0.25, 1]
};

export const cinematicTransition = {
  duration: 2.5,
  ease: [0.25, 0.1, 0.25, 1]
};
```

---

## Data File Structure (`data/gapyeong.ts`)

All text content and image metadata organized by chapter:

```ts
export const chapters = [
  { id: "arrival", label: "도착" },
  { id: "exists", label: "존재" },
  { id: "pause-1", label: "멈춤" },
  { id: "landscape", label: "풍경" },
  { id: "seasons", label: "계절" },
  { id: "pause-2", label: "바람" },
  { id: "fragments", label: "조각" },
  { id: "letter", label: "편지" },
  { id: "ending", label: "끝" },
];

// Each chapter's text content and image data exported separately
export const arrivalContent = { ... };
export const existsContent = { ... };
// etc.
```

---

## Modified Files Detail

### [MODIFY] [tailwind.config.js](file:///D:/Lei/Websites/2026/visitgapyeong/tailwind.config.js)

Extend with:
- `colors`: all palette tokens
- `fontFamily`: `display` and `body`
- `fontSize`: all custom sizes with `clamp` values
- `letterSpacing`: `widest: '0.2em'`, `cinematic: '0.08em'`
- `animation` + `keyframes`: for scroll indicator bounce

### [MODIFY] [index.css](file:///D:/Lei/Websites/2026/visitgapyeong/src/index.css)

- Google Fonts import: `@import url(...)` for Cormorant Garamond (300,400,500,600,300italic) and Inter (300,400)
- Base layer: set `html` background to `paper`, color to `ink`, font to `body`, smooth scroll
- Selection color styling
- Any custom utilities not possible in Tailwind config

### [MODIFY] [index.html](file:///D:/Lei/Websites/2026/visitgapyeong/index.html)

- `<title>`: `가평 · Gapyeong`
- `<meta name="description">`: `A place that simply exists. Gapyeong, South Korea.`
- Google Fonts preconnect links
- `lang="ko"` on `<html>` tag (primary language is Korean)

### [MODIFY] [index.tsx](file:///D:/Lei/Websites/2026/visitgapyeong/src/pages/home/index.tsx)

Compose all chapters:
```tsx
<>
  <ChapterNav chapters={chapters} />
  <Arrival />
  <Exists />
  <PauseQuote content={pause1Content} />
  <Landscape />
  <Seasons />
  <PauseQuote content={pause2Content} />
  <Fragments />
  <Letter />
  <Ending />
</>
```

---

## Build Order

1. Install Framer Motion
2. Update `tailwind.config.js` with design system
3. Update `index.html` with meta tags and font preconnects
4. Update `index.css` with font imports and base styles
5. Create `lib/animations.ts`
6. Create `data/gapyeong.ts` with all content
7. Create `hooks/useActiveChapter.ts`
8. Create `hooks/useParallax.ts`
9. Create `components/common/ScrollReveal.tsx`
10. Create `components/common/ImagePlaceholder.tsx`
11. Create `components/layout/ChapterNav.tsx`
12. Create each chapter component (Arrival → Ending)
13. Update `pages/home/index.tsx` to compose everything
14. Visual review and polish

---

## Verification Plan

### Build
```bash
npm run build
```
Must compile cleanly with no TypeScript errors.

### Visual Check
- Dev server scroll-through of all 9 chapters
- Verify at `375px` (mobile), `768px` (tablet), `1440px` (desktop)
- Confirm scroll animations trigger at correct viewport positions
- Confirm parallax works on desktop and is disabled on mobile
- Confirm chapter navigation dots track active chapter correctly
- Confirm no horizontal overflow at any viewport width

### Performance
- Smooth 60fps scrolling
- No layout shifts
- Framer Motion animations don't cause jank

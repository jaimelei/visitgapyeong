# 가평 · Gapyeong

A cinematic, editorial web experience for Gapyeong, South Korea — built not to advertise, but to *evoke*.

This is not a tourism portal or booking platform. It is a place that simply exists on the web, the way Gapyeong simply exists in the world.

---

## Concept

> *"Some places are not found. They simply exist."*

The site is structured as a journey through 9 chapters — from arrival to ending — each with its own visual personality, pacing, and emotional register. The visitor does not browse content. They experience it.

Inspired by editorial publications like **Kinfolk** and **Cereal Magazine**, and the visual language of filmmakers like **Wong Kar-wai**, **Terrence Malick**, and **Makoto Shinkai**.

---

## Chapters

| # | ID | Korean | Role |
|---|-----|--------|------|
| 1 | `arrival` | 도착 | Cinematic hero — the threshold |
| 2 | `exists` | 존재 | First encounter — asymmetric layout |
| 3 | `pause-1` | 멈춤 | Stillness — slow full-screen quote |
| 4 | `landscape` | 풍경 | Awe — parallax panorama + offset imagery |
| 5 | `seasons` | 계절 | Passage of time — four distinct layouts |
| 6 | `pause-2` | 바람 | Breath — poem about wind and petals |
| 7 | `fragments` | 조각 | Intimacy — scrapbook grid of small moments |
| 8 | `letter` | 편지 | Farewell — a letter from Gapyeong itself |
| 9 | `ending` | 끝 | Quiet closure — dark screen, coordinates |

---

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 3**
- **Framer Motion 12**
- **React Router 7**

---

## Design System

### Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `ink` | `#1a1714` | Primary text, dark backgrounds |
| `paper` | `#f5f0e8` | Main background (warm parchment) |
| `paper-light` | `#faf7f2` | Lighter paper variant |
| `mist` | `#d4cfc5` | Borders, dividers |
| `stone` | `#8a8378` | Captions, secondary text |
| `shadow` | `#2c2822` | Dark overlays |
| `autumn` | `#c4775a` | Warm accent |
| `spring` | `#7a9e7e` | Cool accent |
| `winter` | `#e8e4de` | Near-white |
| `summer` | `#4a7c6f` | Deep green accent |

### Typography

| Role | Font | Tailwind Class |
|------|------|---------------|
| Display / Korean | Cormorant Garamond | `font-display` |
| Body / UI | Inter | `font-body` |

All font sizes use fluid `clamp()` values: `text-hero`, `text-chapter`, `text-quote`, `text-subheading`, `text-body`, `text-caption`, `text-small`.

---

## Key Components

```
src/
├── components/
│   ├── common/
│   │   ├── ScrollReveal.tsx       Scroll-triggered entrance animations
│   │   └── ImagePlaceholder.tsx   Renders image or styled placeholder
│   └── layout/
│       ├── ScreenGate.tsx         Blocks experience on < lg screens
│       └── ChapterNav.tsx         Fixed floating dot navigation (right edge)
├── hooks/
│   ├── useActiveChapter.ts        IntersectionObserver-based active tracking
│   └── useParallax.ts             Scroll-linked y-offset for parallax images
├── lib/
│   └── animations.ts              Framer Motion variants & transitions
├── data/
│   └── gapyeong.ts                All content: chapters, text, image metadata
└── pages/
    └── home/
        ├── index.tsx
        └── components/
            ├── Arrival.tsx         Ch.1 — hero with letter-by-letter title
            ├── Exists.tsx          Ch.2 — asymmetric image + text layout
            ├── PauseQuote.tsx      Ch.3 & 6 — full-screen slow fade quote
            ├── Landscape.tsx       Ch.4 — parallax panorama + offset images
            ├── Seasons.tsx         Ch.5 — four distinct seasonal layouts
            ├── Fragments.tsx       Ch.7 — scrapbook grid, row-by-row reveal
            ├── Letter.tsx          Ch.8 — stanza-by-stanza scroll reveal
            └── Ending.tsx          Ch.9 — dark cinematic fade-in close
```

---

## Responsive Strategy

This experience is **designed exclusively for `lg` screens (1024px+)**.

On anything smaller, a full-screen gate message is displayed:

> 이 경험은 큰 화면을 위해 만들어졌습니다.  
> *This experience is designed for larger screens.*

No mobile layouts are built. The `ScreenGate` component handles this.

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Images

All images are generated via **ChatGPT image generation**. Detailed prompts (including composition, camera angle, lens, lighting, mood, color grading, cinematic references, and exact pixel dimensions) are documented in [`image-prompts.md`](./image-prompts.md), organized by chapter.

Images are served as `.webp` files from `src/assets/images/`.

---

## References

- **Publications**: Kinfolk, Cereal Magazine, Monocle Travel Guide
- **Film**: Wong Kar-wai, Terrence Malick, Makoto Shinkai, Studio Ghibli
- **Photography**: Japanese photobooks, Korean lifestyle editorials

---

*Gapyeong exists, quietly, between mountains and rivers. This website tries to do the same.*

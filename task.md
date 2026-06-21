# Visit Gapyeong — Development Task Checklist

> Responsive strategy: experience is built for `lg` screens and up.  
> On anything below `lg`, a full-screen message is shown instead.  
> No mobile layouts are built.

---

## Phase 1 — Project Setup & Design Tokens

> Goal: get the design system in place so every subsequent phase has tokens to work with. Nothing visual is built for the site itself yet.

### Tasks

- [ ] `npm install framer-motion`
- [ ] Update `tailwind.config.js`
  - [ ] Extend `colors` with all palette tokens (`ink`, `paper`, `paper-light`, `mist`, `stone`, `shadow`, `autumn`, `spring`, `winter`, `summer`)
  - [ ] Extend `fontFamily` with `display` (Cormorant Garamond) and `body` (Inter)
  - [ ] Extend `fontSize` with all custom `clamp`-based scale tokens (`hero`, `chapter`, `quote`, `subheading`, `body`, `caption`, `small`)
  - [ ] Extend `letterSpacing` with `cinematic: '0.08em'` and `widest: '0.2em'`
  - [ ] Extend `screens` to confirm `lg: '1024px'` is the primary breakpoint
- [ ] Update `src/index.css`
  - [ ] Add Google Fonts import (`@import`) for Cormorant Garamond (300, 300i, 400, 400i, 500, 600) and Inter (300, 400)
  - [ ] Set base `html` styles: `bg-paper`, `text-ink`, `font-body`, `scroll-behavior: smooth`
  - [ ] Keep existing scrollbar-hide rules
- [ ] Update `index.html`
  - [ ] Set `lang="ko"` on `<html>`
  - [ ] Set `<title>` to `가평 · Gapyeong`
  - [ ] Add `<meta name="description">` with `A place that simply exists. Gapyeong, South Korea.`
  - [ ] Add Google Fonts preconnect links (`fonts.googleapis.com`, `fonts.gstatic.com`)
- [ ] Delete `src/App.css` (not needed)

### Commit
```
feat: design system — tailwind tokens, fonts, base html meta
```

---

## Phase 2 — Mobile Gate

> Goal: show a full-screen landscape/desktop prompt on anything below `lg`. All subsequent development only targets `lg+`.

### Tasks

- [ ] Create `src/components/layout/ScreenGate.tsx`
  - [ ] Renders a full-screen centered message below `lg`
  - [ ] Dark background (`bg-ink`), light text (`text-paper`)
  - [ ] Korean: `이 경험은 큰 화면을 위해 만들어졌습니다.`
  - [ ] English: `This experience is designed for larger screens.`
  - [ ] Subtext: `Please view on a desktop or landscape tablet.`
  - [ ] Font: `font-display` for Korean, `font-body text-caption text-stone` for English + subtext
  - [ ] Optional: a small horizontal ornament line between Korean and English text
  - [ ] Component is `hidden lg:hidden` — visible only when screen is `< lg`
  - [ ] The rest of the page content is wrapped in a `hidden lg:block` container
- [ ] Wire into `src/pages/home/index.tsx`
  - [ ] `<ScreenGate />` shown on small screens
  - [ ] Actual page content wrapped in `<div className="hidden lg:block">` (or `lg:flex`, as needed)

### Commit
```
feat: screen gate — lock experience to lg+ viewports
```

---

## Phase 3 — Chapter 1: The Arrival

> Goal: the hero chapter is live. Parallax-ready image placeholder, animated title, scroll indicator.

### New files this phase:
- `src/lib/animations.ts`
- `src/data/gapyeong.ts` (partial — arrival content only)
- `src/components/common/ImagePlaceholder.tsx`
- `src/pages/home/components/Arrival.tsx`

### Tasks

- [ ] Create `src/lib/animations.ts`
  - [ ] Export `fadeUp`, `fadeIn`, `fadeLeft`, `fadeRight` Framer Motion variant objects
  - [ ] Export `defaultTransition`, `slowTransition`, `cinematicTransition` objects
  - [ ] Export `stagger(amount)` helper
- [ ] Create `src/components/common/ImagePlaceholder.tsx`
  - [ ] Props: `name`, `aspectRatio` (CSS string), `description`, `prompt`, `className`
  - [ ] Renders a `div` with `bg-mist/20`, correct `aspect-ratio`, and `data-prompt` attribute
  - [ ] Displays description as faint centered label (`text-stone/30 text-small font-body`)
  - [ ] Subtle gradient: `bg-gradient-to-br from-mist/10 to-mist/30`
- [ ] Create `src/data/gapyeong.ts`
  - [ ] Export `chapters` array (all 9 with `id` and `label` in Korean)
  - [ ] Export `arrivalContent` with image prompt, dimensions, alt text
- [ ] Create `src/pages/home/components/Arrival.tsx`
  - [ ] Full `100vh` container, `overflow-hidden`, `relative`
  - [ ] `ImagePlaceholder` fills full container (absolute inset-0)
  - [ ] Dark overlay: `bg-gradient-to-b from-ink/30 to-ink/60`
  - [ ] Title: `가평` — letter-by-letter staggered `fadeIn` using Framer Motion stagger (delay 0.5s after mount)
  - [ ] Subtitle: `Gapyeong` — fades in after title animation completes
  - [ ] Scroll indicator: animated bouncing chevron or line, `absolute bottom-12`
  - [ ] Section gets `id="arrival"` and `data-chapter="arrival"`
- [ ] Update `src/pages/home/index.tsx`
  - [ ] Import and render `<Arrival />`
  - [ ] Remove old placeholder sections

### Commit
```
feat(ch1): arrival hero — animated title, image placeholder, scroll indicator
```

---

## Phase 4 — Chapter 2: A Place That Simply Exists

> Goal: first content chapter. Asymmetric two-column layout with the intro text, image, and second body text block.

### New files this phase:
- `src/components/common/ScrollReveal.tsx`
- `src/pages/home/components/Exists.tsx`

### Tasks

- [ ] Create `src/components/common/ScrollReveal.tsx`
  - [ ] Props: `children`, `className?`, `delay? = 0`, `duration? = 0.8`, `direction? = 'up'`, `once? = true`, `amount? = 0.2`
  - [ ] Uses Framer Motion `motion.div` with `whileInView` and `viewport={{ once, amount }}`
  - [ ] Maps `direction` to the correct variant (`fadeUp`, `fadeIn`, `fadeLeft`, `fadeRight`)
  - [ ] Applies `defaultTransition` with `delay` override
- [ ] Add `existsContent` to `src/data/gapyeong.ts`
  - [ ] Korean/English block 1 (poetic intro: `어떤 곳은...`)
  - [ ] Korean/English block 2 (contextual: `가평은 서울에서...`)
  - [ ] Image prompt and metadata for `exists-village.jpg`
- [ ] Create `src/pages/home/components/Exists.tsx`
  - [ ] Section `id="exists"`, `data-chapter="exists"`
  - [ ] Top portion: `flex` row, `gap-16`, `max-w-[1400px] mx-auto px-16`
    - [ ] Image column: `w-[55%]` — `ImagePlaceholder` with `aspectRatio="3/4"`
    - [ ] Text column: `w-[35%]`, `pt-32` (offset lower than image top)
      - [ ] Korean block 1 in `font-display text-chapter leading-relaxed`
      - [ ] English block 1 in `font-body text-body text-stone mt-6`
    - [ ] Both wrapped in `ScrollReveal` (image no delay, text delay 0.3s)
  - [ ] Bottom portion: `max-w-[600px] ml-[15%] mt-24`
    - [ ] Korean block 2 in `font-display text-subheading leading-loose`
    - [ ] English block 2 in `font-body text-body text-stone leading-loose mt-4`
    - [ ] Wrapped in `ScrollReveal`
  - [ ] Generous vertical padding: `py-40`

### Commit
```
feat(ch2): exists — asymmetric layout, poetic intro, scroll reveal
```

---

## Phase 5 — Chapter 3: First Pause

> Goal: first pause moment. Full-screen centered quote. Slowest animation on the page so far.

### New files this phase:
- `src/pages/home/components/PauseQuote.tsx`

### Tasks

- [ ] Add `pause1Content` to `src/data/gapyeong.ts`
  - [ ] Korean: `소리 없이 흐르는 것들이 / 가장 오래 남는다.`
  - [ ] English: `The things that flow without sound / stay the longest.`
- [ ] Create `src/pages/home/components/PauseQuote.tsx`
  - [ ] Props: `content: { korean: string; english: string }`, `id: string`
  - [ ] `100vh`, `bg-paper`, `flex items-center justify-center`
  - [ ] Inner container: `max-w-[36ch] px-6 text-center`
  - [ ] Korean in `font-display font-light text-quote leading-relaxed text-ink`
  - [ ] English in `font-body font-light text-body text-stone mt-8`
  - [ ] Entire block wrapped in a single Framer Motion `motion.div` `whileInView` with `fadeIn` variant, `duration: 2`, `ease: easeOut`
  - [ ] Gets `id` and `data-chapter` from props
- [ ] Update `src/pages/home/index.tsx`
  - [ ] Render `<PauseQuote id="pause-1" content={pause1Content} />` after `<Exists />`

### Commit
```
feat(ch3): pause — full-screen quote with slow cinematic fade
```

---

## Phase 6 — Chapter 4: The Landscape

> Goal: the visual centrepiece. Parallax hero image, offset image compositions, and captioned imagery.

### New files this phase:
- `src/hooks/useParallax.ts`
- `src/pages/home/components/Landscape.tsx`

### Tasks

- [ ] Create `src/hooks/useParallax.ts`
  - [ ] Uses Framer Motion `useScroll` and `useTransform`
  - [ ] Props: `speed = 0.3`, `containerRef`
  - [ ] `useScroll({ target: containerRef, offset: ['start end', 'end start'] })`
  - [ ] `useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])`
  - [ ] Returns `{ style: { y } }` as a Framer Motion style object
  - [ ] No disable-on-mobile logic needed (gate already handles this)
- [ ] Add `landscapeContent` to `src/data/gapyeong.ts`
  - [ ] Chapter title: `산이 말을 걸어온다` / `The mountains speak first`
  - [ ] Image 2 text: `물은 항상 / 어디론가 가고 있다.` / `The water is always going somewhere.`
  - [ ] Image 3 caption: `길은 어디로 가는지 / 묻지 않아도 된다.` / `You don't need to ask where the path leads.`
  - [ ] Image prompts for `landscape-mountains.jpg` (1920×800), `landscape-river.jpg` (800×1200), `landscape-forest.jpg` (1000×1400)
- [ ] Create `src/pages/home/components/Landscape.tsx`
  - [ ] Section `id="landscape"`, `data-chapter="landscape"`, `py-32`
  - [ ] **Chapter title block**: `max-w-[1400px] mx-auto px-16`
    - [ ] Korean in `font-display font-light text-chapter tracking-cinematic`
    - [ ] English in `font-body font-light text-caption text-stone tracking-widest uppercase mt-3`
    - [ ] Wrapped in `ScrollReveal`
  - [ ] **Full-bleed panorama** (Image 1): `mt-20 w-full overflow-hidden` at `h-[60vh]`
    - [ ] Inner `motion.div` with `useParallax` style applied — `y` offset creates parallax
    - [ ] `ImagePlaceholder` at `h-[75vh]` inside to allow parallax travel room
    - [ ] `fadeIn` on entry, 1.2s duration
  - [ ] **Image 2 + text row**: `mt-32 max-w-[1400px] mx-auto px-16 flex gap-16`
    - [ ] Image: `w-[40%] ml-[5%]` — `ImagePlaceholder` `aspectRatio="2/3"`
    - [ ] Text: `w-[35%] pt-16 pl-12`
    - [ ] Image wrapped in `ScrollReveal direction="left"`
    - [ ] Text wrapped in `ScrollReveal delay={0.2}`
  - [ ] **Image 3 + caption**: `mt-32 max-w-[1400px] mx-auto px-16`
    - [ ] Image: `w-[60%] ml-auto` — `ImagePlaceholder` `aspectRatio="5/7"`
    - [ ] Caption below: `w-[60%] ml-auto pr-8 mt-4`
    - [ ] Caption Korean: `font-display italic text-body text-stone`
    - [ ] Caption English: `font-body text-caption text-stone/60 mt-2`
    - [ ] Both wrapped in `ScrollReveal`

### Commit
```
feat(ch4): landscape — parallax panorama, offset images, captioned compositions
```

---

## Phase 7 — Chapter 5: Seasons

> Goal: four distinct season sub-layouts, each with its own personality. No repeating grid.

### New files this phase:
- `src/pages/home/components/Seasons.tsx`

### Tasks

- [ ] Add `seasonsContent` to `src/data/gapyeong.ts`
  - [ ] Chapter title: `계절은 가평을 네 번 다시 쓴다` / `The seasons rewrite Gapyeong four times`
  - [ ] Spring label + text: `봄 / Spring`, `벚꽃이 지면 / 비로소 봄이 왔다는 걸 안다.` / `When the cherry blossoms fall, / you finally know spring has come.`
  - [ ] Summer label + text: `여름 / Summer`, `매미 소리가 시간을 대신한다.` / `Cicadas tell the time instead of clocks.`
  - [ ] Autumn label + text: `가을 / Autumn`, `가장 아름다운 계절은 / 가장 짧다.` / `The most beautiful season / is always the shortest.`
  - [ ] Winter label + text: `겨울 / Winter`, `눈이 모든 것을 지우면 / 남는 건 고요뿐이다.` / `When snow erases everything, / only silence remains.`
  - [ ] Image prompts for all 5 season images
- [ ] Create `src/pages/home/components/Seasons.tsx`
  - [ ] Section `id="seasons"`, `data-chapter="seasons"`, `pt-40 pb-32`
  - [ ] **Chapter title**: centered, `text-center`, `max-w-[1400px] mx-auto px-16`, `ScrollReveal`
  - [ ] **Spring**: `mt-32 max-w-[1400px] mx-auto px-16 flex items-start gap-16`
    - [ ] Text left: `w-[35%] pl-[8%]`
      - [ ] Season label `봄` in `font-display font-semibold text-subheading text-spring`
      - [ ] `Spring` in `font-body font-light text-small text-spring/70 tracking-widest uppercase mt-1`
      - [ ] Korean + English text `mt-8`
    - [ ] Image right: `w-[50%] ml-auto` `ImagePlaceholder aspectRatio="4/5"`
    - [ ] Wrapped in `ScrollReveal`
  - [ ] **Summer**: `mt-32 w-full relative h-[60vh] overflow-hidden`
    - [ ] `ImagePlaceholder` fills full container
    - [ ] Dark gradient overlay: `absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent`
    - [ ] Text: `absolute bottom-12 left-16`
      - [ ] Season label `여름` in `font-display font-semibold text-subheading text-summer`
      - [ ] `Summer` label
      - [ ] Korean + English body text in `text-paper`/`text-paper/70`
    - [ ] `motion.div whileInView fadeIn`
  - [ ] **Autumn**: `mt-32 max-w-[1400px] mx-auto px-16`
    - [ ] Season label + text above images: `ml-[8%]`, `ScrollReveal`
    - [ ] Images container: `mt-12 relative h-[520px]`
      - [ ] Image A: `absolute left-[5%] top-0 w-[320px] rotate-[-3deg]` — `ImagePlaceholder aspectRatio="4/5"`
      - [ ] Image B: `absolute left-[30%] top-[40px] w-[350px] rotate-[2deg]` — `ImagePlaceholder aspectRatio="3/4"`
      - [ ] Image C: `absolute right-[10%] top-[80px] w-[300px] rotate-[-1deg]` — `ImagePlaceholder aspectRatio="4/5"`
      - [ ] Each image wrapped in `motion.div` with staggered `fadeUp` (0, 0.15, 0.3s delays)
  - [ ] **Winter**: `mt-40 mb-16 max-w-[1400px] mx-auto px-16 flex flex-col items-center text-center py-24`
    - [ ] Season label `겨울` in `font-display font-semibold text-subheading text-stone`
    - [ ] Image: `w-[35%] mt-8` — `ImagePlaceholder aspectRatio="7/5"`
    - [ ] Korean + English text below image: `mt-8 max-w-[28ch]`
    - [ ] Everything wrapped in `ScrollReveal`

### Commit
```
feat(ch5): seasons — four distinct layouts (offset, full-bleed, scattered, minimal)
```

---

## Phase 8 — Chapter 6 (Second Pause) + Chapter 7: Fragments

> Goal: second pause moment, then the scrapbook chapter. Both require `PauseQuote` (already built) and a new grid-based collage component.

### New files this phase:
- `src/pages/home/components/Fragments.tsx`

### Tasks

- [ ] Add `pause2Content` and `fragmentsContent` to `src/data/gapyeong.ts`
  - [ ] Pause 2 poem (Korean + English)
  - [ ] Chapter title: `기억의 조각들` / `Fragments`
  - [ ] Fragment captions: café, bridge, steam
  - [ ] Image prompts for all 5 fragment images
- [ ] Update `src/pages/home/index.tsx`
  - [ ] Render `<PauseQuote id="pause-2" content={pause2Content} />` after `<Seasons />`
- [ ] Create `src/pages/home/components/Fragments.tsx`
  - [ ] Section `id="fragments"`, `data-chapter="fragments"`, `pt-40 pb-32`
  - [ ] **Chapter title**: centered, `ScrollReveal`
  - [ ] **Grid**: `max-w-[1400px] mx-auto px-16 mt-20`
    - [ ] CSS Grid: `grid-cols-12 auto-rows-auto gap-8` using Tailwind arbitrary grid utilities or inline style
    - [ ] Image A (café 1:1): `col-span-3 row-start-1 rotate-[-2deg]` + caption below
    - [ ] Image B (trail 7:10): `col-start-8 col-span-5 row-start-1 rotate-[1deg]`
    - [ ] Image C (bridge 10:7): `col-start-4 col-span-4 row-start-3 rotate-[-1deg]` + caption below
    - [ ] Image D (market 1:1): `col-start-9 col-span-4 row-start-3 rotate-[2deg]`
    - [ ] Image E (steam 4:5): `col-start-6 col-span-4 row-start-5` + caption below
    - [ ] Each image+caption pair wrapped in `motion.div` with staggered `fadeUp`
    - [ ] Captions: Korean `font-display italic text-body text-stone`, English `font-body text-caption text-stone/60 mt-1`

### Commit
```
feat(ch6-ch7): second pause + fragments scrapbook grid
```

---

## Phase 9 — Chapter 8: The Letter + Chapter 9: The Ending

> Goal: the emotional close. A handwritten letter and a quiet dark ending screen.

### New files this phase:
- `src/pages/home/components/Letter.tsx`
- `src/pages/home/components/Ending.tsx`

### Tasks

- [ ] Add `letterContent` and `endingContent` to `src/data/gapyeong.ts`
  - [ ] Full letter text (Korean + English, structured as paragraph array for stagger animation)
  - [ ] Letter title, divider marker, signature
  - [ ] Coordinates: `37.8315° N, 127.5108° E`
- [ ] Create `src/pages/home/components/Letter.tsx`
  - [ ] Section `id="letter"`, `data-chapter="letter"`, `bg-paper-light py-48`
  - [ ] Container: `max-w-[32rem] mx-auto px-8`
  - [ ] **Letter header**:
    - [ ] Korean title `가평에서 보내는 편지` in `font-display text-subheading text-ink`
    - [ ] English title in `font-body text-caption text-stone tracking-[0.15em] mt-2`
    - [ ] Thin divider: `w-12 h-px bg-mist my-8`
  - [ ] **Letter body**: paragraphs mapped from array
    - [ ] Korean: `font-display font-light italic text-body leading-[2.2] text-ink`
    - [ ] English: `font-body font-light text-body leading-[2] text-stone mt-4`
    - [ ] `mt-6` between stanzas
  - [ ] **Signature**: `가평` in `font-display text-subheading text-ink mt-12 text-right`
  - [ ] Animation: container fades up (`fadeUp`, 1.2s), then paragraphs stagger-reveal (`staggerChildren: 0.2`) as user scrolls
- [ ] Create `src/pages/home/components/Ending.tsx`
  - [ ] Section `id="ending"`, `data-chapter="ending"`
  - [ ] `100vh`, `bg-ink`, `flex flex-col items-center justify-center`
  - [ ] `가평` in `font-display font-light text-subheading text-paper/80 tracking-[0.15em]`
  - [ ] `Gapyeong` in `font-body font-light text-caption text-paper/40 tracking-widest uppercase mt-2`
  - [ ] Coordinates in `font-body font-light text-small text-stone/50 tracking-[0.1em] mt-8`
  - [ ] Entire group: `motion.div` `whileInView` `fadeIn`, `duration: 2.5`, `easeInOut`
- [ ] Update `src/pages/home/index.tsx`
  - [ ] Render `<Letter />` and `<Ending />` at the end

### Commit
```
feat(ch8-ch9): letter + ending — cinematic close
```

---

## Phase 10 — Chapter Navigation

> Goal: the floating dot nav is the last thing built because it requires all chapters to exist. Wiring it up now against real `id` anchors.

### New files this phase:
- `src/hooks/useActiveChapter.ts`
- `src/components/layout/ChapterNav.tsx`

### Tasks

- [ ] Create `src/hooks/useActiveChapter.ts`
  - [ ] Accepts `chapterIds: string[]`
  - [ ] Sets up `IntersectionObserver` on each element with matching `id`
  - [ ] Threshold: `[0.3]`
  - [ ] Returns the `id` of the chapter most recently intersecting
- [ ] Create `src/components/layout/ChapterNav.tsx`
  - [ ] Props: `chapters: { id: string; label: string }[]`
  - [ ] Uses `useActiveChapter(chapters.map(c => c.id))`
  - [ ] Fixed, right edge, vertically centered, `z-50`
  - [ ] 9 dots, 6px diameter, 20px apart, vertically stacked
  - [ ] Active dot: expands to 8px, `bg-ink` fill, animated with `motion.div layoutId`
  - [ ] Inactive dots: `bg-stone/40`
  - [ ] Hover on a dot: chapter label appears to the left (`right-7`, absolute, `text-small font-body text-stone`)
  - [ ] Clicking a dot: `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`
  - [ ] Label transition: `opacity 0.2s`
- [ ] Update `src/pages/home/index.tsx`
  - [ ] Import `ChapterNav` and `chapters` from data file
  - [ ] Render `<ChapterNav chapters={chapters} />` at the top level (outside scroll container)

### Commit
```
feat: chapter navigation — fixed dot nav with active tracking and smooth scroll
```

---

## Phase 11 — Polish & Image Prompts Export

> Goal: final visual polish pass and generate the complete image prompt document for handoff to ChatGPT.

### Tasks

- [ ] Visual review pass — scroll through all chapters
  - [ ] Verify `ScrollReveal` triggers feel correct (not too early, not too late)
  - [ ] Verify parallax in Chapter 4 looks smooth
  - [ ] Verify season image rotations and overlaps don't clip or overflow
  - [ ] Verify fragments grid aligns correctly
  - [ ] Verify letter paragraphs stagger nicely
  - [ ] Check chapter nav dots track the right chapter at transitions
- [ ] Typography audit
  - [ ] All display text uses `font-display`
  - [ ] All UI/caption text uses `font-body`
  - [ ] Letter spacing is consistent on chapter titles
- [ ] Spacing audit
  - [ ] Between-chapter whitespace feels generous and intentional
  - [ ] No sections feel squished or cramped
- [ ] `npm run build` — confirm no TypeScript errors, clean build
- [ ] Create `image-prompts.md` in project root
  - [ ] Export all 14 image prompts from the implementation plan in copy-paste format, organised by chapter
  - [ ] Each entry: filename, dimensions, aspect ratio, and full prompt text

### Commit
```
chore: polish pass + export image prompts for ChatGPT generation
```

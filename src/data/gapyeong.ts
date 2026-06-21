export interface ChapterInfo {
  id: string;
  label: string;
}

export interface ImageMetadata {
  name: string;
  aspectRatio: string;
  description: string;
  prompt: string;
  src?: string; // Optional local path if it already exists
}

export const chapters: ChapterInfo[] = [
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

export const arrivalContent = {
  image: {
    name: "arrival-hero",
    aspectRatio: "16/9",
    description: "가평의 숲길 / Winding forest path in morning mist",
    prompt: "Aerial view of a winding two-lane road cutting through dense, lush green forest in the mountains of Gapyeong county, South Korea. Early morning, golden hour light filtering through low-hanging mist that hovers between the treetops. The road curves gently and disappears into the forest. Shot from a drone at medium altitude (approximately 100 meters), camera angled 30 degrees downward. Warm cinematic color grading: desaturated greens with golden-amber highlights, slight teal in the shadows. Soft natural lens flare from the sun peeking over the mountain ridge. The atmosphere is humid and misty. No vehicles, no people. The forest is a mix of pine and deciduous trees. Mood: mysterious, inviting, like the first frame of a film. Reference: Terrence Malick landscape cinematography, the opening shots of 'The New World.' Dimensions: 1920x1080 pixels, 16:9 aspect ratio.",
  } as ImageMetadata
};

export const existsContent = {
  block1: {
    korean: "어떤 곳은\n찾아가는 게 아니라\n그저 거기에 있다.",
    english: "Some places are not found.\nThey simply exist."
  },
  block2: {
    korean: [
      "가평은 서울에서 한 시간 거리에 있다.\n그러나 시간이 다르게 흐르는 곳이다.",
      "산과 강 사이, 계절이 천천히 지나가고,\n아침 안개가 마을을 감싸는 곳."
    ] as [string, string],
    english: [
      "Gapyeong is an hour from Seoul.\nBut time moves differently here.",
      "Between mountains and rivers,\nwhere seasons pass slowly\nand morning mist wraps around villages."
    ] as [string, string]
  },
  image: {
    name: "exists-village",
    aspectRatio: "3/4",
    description: "가평의 한적한 마을 골목 / Quiet village street in Gapyeong",
    prompt: "A quiet village street in rural Gapyeong county, South Korea, during late afternoon. No people visible. A narrow paved road with low stone walls on either side. Traditional Korean low-rise houses with dark clay tile roofs (giwa) visible behind the walls. A single mature persimmon tree (감나무) with bright orange persimmons hanging from bare autumn branches stands prominently on the left side. Soft, overcast sky providing even, diffused light with no harsh shadows. A few potted plants near doorways. The road gently curves and disappears. Shot at eye level with a 50mm lens equivalent, shallow depth of field with the persimmon tree sharp and background softly blurred. Color palette: muted earth tones — warm browns, soft grays, dusty greens, the orange of the persimmons as the only vivid color. Slight film grain. Mood: stillness, everyday beauty, timelessness, a place that exists quietly. Reference: Cereal Magazine travel photography, Korean rural lifestyle editorial. Dimensions: 1200x1600 pixels, 3:4 portrait aspect ratio.",
  } as ImageMetadata
};

export const pause1Content = {
  korean: "소리 없이 흐르는 것들이\n가장 오래 남는다.",
  english: "The things that flow without sound\nstay the longest."
};

export const landscapeContent = {
  title: {
    korean: "산이 말을 걸어온다",
    english: "The mountains speak first"
  },
  img1: {
    name: "landscape-mountains",
    aspectRatio: "2.4/1",
    description: "청평호가 보이는 가평의 산자락 / Mountain ridges of Gapyeong and Cheongpyeong Lake",
    prompt: "Panoramic view of Gapyeong's mountain ranges with Cheongpyeong Lake (청평호) visible as a sliver of blue-green water in the valley below. Multiple layers of mountain ridges receding into misty distance — at least four visible layers. Late afternoon golden hour light, warm amber tones illuminating the nearest ridge, transitioning to progressively cooler blue-gray tones on distant ridges. Low-hanging clouds nestled between the second and third ridges. Dense forest of pine and deciduous trees covering every mountainside. Shot from an elevated viewpoint (mountaintop or high overlook) with a wide-angle lens (24mm equivalent). No human structures visible. The atmosphere is humid with a slight haze that adds depth. Color grading: warm foreground, cool background, cinematic contrast. Mood: vast, awe-inspiring, serene, ancient. Reference: Makoto Shinkai background paintings (Your Name, Weathering With You), Korean national park photography. Dimensions: 1920×800 pixels, 2.4:1 ultrawide."
  } as ImageMetadata,
  img2: {
    name: "landscape-river",
    aspectRatio: "2/3",
    description: "이끼 낀 바위 사이로 흐르는 계곡물 / Forest stream flowing through mossy rocks",
    prompt: "Close-up of a rocky mountain stream in Gapyeong. Crystal clear water flowing over smooth gray and brown river stones, some covered with bright green moss. The stream is narrow — perhaps 2 meters wide. Dappled sunlight filtering through an overhead canopy of trees, creating shifting patterns of light on the water surface. Shot from a low angle, camera positioned just above water level, looking slightly upstream. 35mm lens equivalent, shallow depth of field: foreground rocks and water razor-sharp, background foliage rendered as a soft green blur. The water has subtle blue and green reflections. A few fallen autumn leaves caught between rocks. Cool green dominant tones with warm golden highlights where sunlight hits. Slight mist rising from the water. Mood: intimate, meditative, the sound of water made visible. Reference: Japanese nature photobooks. Dimensions: 800×1200 pixels, 2:3 portrait."
  } as ImageMetadata,
  img3: {
    name: "landscape-forest",
    aspectRatio: "5/7",
    description: "울창한 잣나무 숲길 / Quiet walking path in dense pine forest",
    prompt: "A narrow dirt walking trail through a mature pine forest in the mountains near Gapyeong. The path curves gently to the right and disappears behind tall, straight pine trunks. The trees are tall (15+ meters) with bark in shades of gray-brown, forming a natural corridor. The canopy is dense, creating a cathedral-like filtered light effect with visible god rays (shafts of golden sunlight) angling through gaps in the foliage. The forest floor is covered with a thick carpet of fallen pine needles in warm orange-brown tones. A few ferns grow at the edges of the path. Shot at eye level, standing on the path, looking forward with a 35mm lens. Slight natural vignette at the edges. Muted, moody color palette: earthy browns, deep greens, golden light shafts. The overall feel is hushed and still. Mood: mystery, solitude, invitation to walk deeper, sacred. Reference: Japanese forest photography, pilgrimage trail imagery. Dimensions: 1000×1400 pixels, 5:7 portrait."
  } as ImageMetadata,
  block2: {
    korean: "물은 항상\n어디론가 가고 있다.",
    english: "The water is always\ngoing somewhere."
  },
  caption3: {
    korean: "길은 어디로 가는지\n묻지 않아도 된다.",
    english: "You don't need to ask\nwhere the path leads."
  }
};

export const seasonsContent = {
  title: {
    korean: "계절은 가평을 네 번 다시 쓴다",
    english: "The seasons rewrite Gapyeong four times"
  },
  spring: {
    labelKorean: "봄",
    labelEnglish: "Spring",
    textKorean: "벚꽃이 지면\n비로소 봄이 왔다는 걸 안다.",
    textEnglish: "When the cherry blossoms fall,\nyou finally know spring has come.",
    image: {
      name: "season-spring",
      aspectRatio: "4/5",
      description: "벚꽃이 흩날리는 가평의 개천가 / Cherry blossoms falling by a stream in Gapyeong",
      prompt: "A row of cherry blossom trees (벚나무) along a quiet walking path beside a stream in Gapyeong county. The blossoms are at peak bloom — dense clusters of pale pink and white flowers covering every branch. Petals are actively falling, caught mid-air, creating a gentle snowfall effect. The ground and stream surface are dusted with fallen petals. Soft overcast sky — flat, pale gray-white, providing perfectly even diffused light. No people. The path is unpaved, light brown earth. Young green grass is emerging along the stream bank. Shot at eye level with a 50mm lens, medium depth of field. Color palette: soft pastels — pale pink, cream white, light green, gray-white sky. Very slight warm film grain. The atmosphere is quiet and ephemeral. Mood: gentle, bittersweet, the beauty of something about to end. Reference: Japanese sakura photography, Kinfolk Magazine spring editorials. Dimensions: 1200×1500 pixels, 4:5 portrait."
    } as ImageMetadata
  },
  summer: {
    labelKorean: "여름",
    labelEnglish: "Summer",
    textKorean: "매미 소리가 시간을 대신한다.",
    textEnglish: "Cicadas tell the time instead of clocks.",
    image: {
      name: "season-summer",
      aspectRatio: "16/9",
      description: "녹음이 우거진 여름날의 가평 산자락 / Dense green forest on a summer day in Gapyeong",
      prompt: "Dense, lush green mountainside in Gapyeong during peak summer. The entire frame is filled with rich, vibrant foliage — multiple shades of green from emerald to jade to forest green. A thin, distant waterfall is barely visible as a white thread cascading down the mountainside through a gap in the trees. The atmosphere is visibly humid — a warm haze softens the distant portions of the mountain. Bright midday sun creates strong highlights on the canopy with deep shadows beneath. A narrow hiking trail is just barely visible as a gap in the foliage. Shot from a valley viewpoint looking upward at the mountainside with a standard lens (50mm). Rich, saturated color grading: deep greens dominating, warm golden highlights. The air looks thick and warm. Mood: abundant, alive, the fullness of summer, almost overwhelming in its greenness. Reference: Studio Ghibli countryside summer scenes, lush Korean forest photography. Dimensions: 1920×1080 pixels, 16:9 landscape."
    } as ImageMetadata
  },
  autumn: {
    labelKorean: "가을",
    labelEnglish: "Autumn",
    textKorean: "가장 아름다운 계절은\n가장 짧다.",
    textEnglish: "The most beautiful season\nis always the shortest.",
    imgA: {
      name: "season-summer-a",
      aspectRatio: "4/5",
      description: "단풍에 둘러싸인 한옥 정자 / Traditional pavilion surrounded by autumn leaves",
      prompt: "A small traditional Korean pavilion (정자) with dark wooden columns and curved tile roof, surrounded by peak autumn foliage in Gapyeong. Trees in brilliant red, deep orange, and golden yellow frame the pavilion. A few fallen leaves scattered on the stone base. Soft, warm afternoon light creating a golden glow. Shot from a slight distance with a 50mm lens. Warm color grading: rich amber, deep reds, golden yellows. A hint of mist in the background. Mood: warm nostalgia, the beauty of impermanence. Reference: Korean autumn temple photography, Wong Kar-wai warm color palette. Dimensions: 900×1125 pixels, 4:5 portrait."
    } as ImageMetadata,
    imgB: {
      name: "season-summer-b",
      aspectRatio: "3/4",
      description: "은행나무 잎이 깔린 시골길 / Country road carpeted with yellow ginkgo leaves",
      prompt: "A quiet country road in Gapyeong lined with golden ginkgo trees (은행나무). The road is covered in a thick carpet of bright yellow ginkgo leaves. A low stone wall runs along one side. Late afternoon light streams horizontally through the tree trunks, creating long shadows across the yellow carpet. No people, no vehicles. Shot at eye level looking down the road as it recedes into the golden canopy. 35mm lens. Color palette dominated by warm yellows and golds with cool gray shadows. Slight film grain effect. Mood: golden, nostalgic, a perfect moment. Dimensions: 900×1200 pixels, 3:4 portrait."
    } as ImageMetadata,
    imgC: {
      name: "season-summer-c",
      aspectRatio: "4/5",
      description: "물 위에 투영된 붉은 단풍 / Red maple leaves reflected on still water",
      prompt: "Close-up of red maple leaves (단풍) reflected in the still surface of a small pond in Gapyeong. The reflection is almost perfect — the water is very still with only the faintest ripple. Above the water, a branch with vivid red maple leaves extends into the frame. Below, the reflection shows the same leaves surrounded by reflected blue-gray sky. Shot from above the water at a slight angle with a 50mm macro lens. Shallow depth of field. Color palette: vivid reds, cool blue-gray water, dark reflections. Mood: contemplative, the duality of reality and reflection, autumn's intensity. Dimensions: 900×1125 pixels, 4:5 portrait."
    } as ImageMetadata
  },
  winter: {
    labelKorean: "겨울",
    labelEnglish: "Winter",
    textKorean: "눈이 모든 것을 지우면\n남는 건 고요뿐이다.",
    textEnglish: "When snow erases everything,\nonly silence remains.",
    image: {
      name: "season-winter",
      aspectRatio: "7/5",
      description: "눈 덮인 언덕 위의 외딴 나무 / Solitary tree on a snow-covered hill",
      prompt: "A solitary bare deciduous tree standing on a gentle snow-covered hillside in Gapyeong county during winter. Minimalist composition with the tree placed slightly off-center to the right. The sky is overcast, white-gray, blending almost seamlessly with the snowy ground at the horizon — creating an ethereal, boundaryless feel. The tree's dark, intricate branches create a delicate silhouette against the white background. Faint blue-gray shadows in the snow indicate subtle undulations in the terrain. A few tiny footprints (possibly animal tracks) lead away from the tree. Shot from a medium distance with a telephoto lens (85mm equivalent), compressing the space. Almost monochrome color palette: pure whites, pale grays, faint blue shadows, the dark brown-black of the tree. Very clean, very minimal. Mood: solitude, profound silence, stark beauty, the world reduced to its essence. Reference: Korean minimalist photography, Scandinavian winter landscapes, Michael Kenna. Dimensions: 1400×1000 pixels, 7:5 landscape."
    } as ImageMetadata
  }
};
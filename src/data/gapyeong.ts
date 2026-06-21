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
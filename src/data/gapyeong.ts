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
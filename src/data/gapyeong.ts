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

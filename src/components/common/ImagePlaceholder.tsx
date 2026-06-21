interface ImagePlaceholderProps {
  name: string;
  aspectRatio: string;
  description: string;
  prompt: string;
  src?: string;
  className?: string;
}

export default function ImagePlaceholder({
  name,
  aspectRatio,
  description,
  prompt,
  src,
  className = "",
}: ImagePlaceholderProps) {
  // If an actual image source is passed (or we match it dynamically), render the image
  if (src) {
    return (
      <div 
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio }}
        data-prompt={prompt}
      >
        <img
          src={src}
          alt={description}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  // Otherwise, render the refined placeholder
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-mist/10 to-mist/30 border border-mist/20 p-6 text-center select-none overflow-hidden ${className}`}
      style={{ aspectRatio }}
      data-prompt={prompt}
    >
      <div className="z-10 max-w-xs">
        <span className="block font-body text-small uppercase tracking-widest text-stone/40 mb-1">
          {name}
        </span>
        <p className="font-display italic text-body text-stone/60">
          {description}
        </p>
      </div>
      
      {/* Absolute positioning pattern decoration */}
      <div className="absolute inset-4 border border-dashed border-stone/5 pointer-events-none" />
    </div>
  );
}

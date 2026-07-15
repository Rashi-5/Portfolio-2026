/**
 * Drop-in image placeholder. To use a real image, put the file in /public
 * (or import it) and pass its URL as `src`. Until then it shows the hint text.
 */
export function ImageSlot({
  src,
  alt,
  placeholder,
}: {
  src?: string;
  alt?: string;
  placeholder: string;
}) {
  return (
    <div className="image-slot">
      {src ? <img src={src} alt={alt ?? placeholder} /> : <span>{placeholder}</span>}
    </div>
  );
}

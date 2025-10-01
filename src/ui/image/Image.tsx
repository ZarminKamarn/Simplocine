import "./image.css";

interface ImageProps {
  src: string;
  alt: string;
  origin:
    | "card"
    | "banner"
    | "casting"
    | "title"
    | "overview"
    | "season"
    | "person";
}

export function Image({ src, alt, origin }: ImageProps) {
  return <img src={src} alt={alt} className={`${origin}-img`} />;
}

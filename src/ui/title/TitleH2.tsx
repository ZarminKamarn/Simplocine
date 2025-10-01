interface TitleH2Props {
  text: string;
  origin: "section" | "banner";
}

export function TitleH2({ text, origin }: TitleH2Props) {
  return <h2 className={`${origin === "banner" && "banner-title"}`}>{text}</h2>;
}

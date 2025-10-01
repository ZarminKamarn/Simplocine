import "./paragraph.css";

interface ParagraphProps {
  text: string;
  type?: "description" | "overview-info";
}

export function Paragraph({ text, type }: ParagraphProps) {
  return <p className={type}>{text}</p>;
}

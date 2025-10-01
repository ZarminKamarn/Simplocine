import { Paragraph } from "../paragraph/Paragraph";
import { Legals } from "./legals/Legals";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <Paragraph text="@2025 - Site développé par Emilie Marion - All rights reserved" />
      <Legals />
    </div>
  );
}

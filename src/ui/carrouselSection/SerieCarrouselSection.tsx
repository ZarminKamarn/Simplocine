import type { ListSeries } from "../../tmpTypes";
import { SerieCarrousel } from "../carrousel/SerieCarrousel";

interface SerieCarrouselSectionProps {
  title: string;
  data: ListSeries | undefined;
}

export function SerieCarrouselSection({
  title,
  data,
}: SerieCarrouselSectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {data && <SerieCarrousel data={data.results} />}
    </section>
  );
}

import type { ListMovies } from "../../tmpTypes";
import { MovieCarrousel } from "../carrousel/MovieCarrousel";

interface MovieCarrouselSectionProps {
  title: string;
  data: ListMovies | undefined;
}

export function MovieCarrouselSection({
  title,
  data,
}: MovieCarrouselSectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {data && <MovieCarrousel data={data.results} />}
    </section>
  );
}

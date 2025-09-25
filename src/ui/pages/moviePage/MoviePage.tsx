import { useParams } from "react-router";
import { useFetcher } from "../../../useFetcher";
import type { ListMovies } from "../../../tmpTypes";
import { useState } from "react";
import { MovieCarrouselSection } from "../../carrouselSection/MovieCarrouselSection";

export function MoviePage() {
  const [bottomDiv, setBottomDiv] = useState<
    "overview" | "casting" | "recommendations"
  >("recommendations");
  const params = useParams();
  const recommendedMovies = useFetcher<ListMovies>(
    `https://api.themoviedb.org/3/movie/${params.id}/recommendations?language=fr-FR&page=1`
  );

  return (
    <>
      {bottomDiv === "overview"}
      {bottomDiv === "casting"}
      {bottomDiv === "recommendations" && (
        <MovieCarrouselSection
          title="Recommandations"
          data={recommendedMovies.data}
        />
      )}
    </>
  );
}

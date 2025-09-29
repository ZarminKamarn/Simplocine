import { useParams } from "react-router";
import { useFetcher } from "../../../useFetcher";
import {
  type MovieDetails,
  type ListCasting,
  type ListMovies,
} from "../../../tmpTypes";
import { useState } from "react";
import { MovieCarrouselSection } from "../../carrouselSection/MovieCarrouselSection";
import { CastingSection } from "../../castingSection/CastingSection";
import { Button } from "../../button/Button";
import { MovieSection } from "../../detailSection/MovieSection";
import { MovieOverview } from "../../overview/MovieOverview";

export function MoviePage() {
  const [bottomDiv, setBottomDiv] = useState<
    "overview" | "casting" | "recommendations"
  >("recommendations");
  const params = useParams();
  const movie = useFetcher<MovieDetails>(
    `https://api.themoviedb.org/3/movie/${params.id}?language=fr-FR`
  );
  const casting = useFetcher<ListCasting>(
    `https://api.themoviedb.org/3/movie/${params.id}/credits?language=fr-FR`
  );
  const recommendedMovies = useFetcher<ListMovies>(
    `https://api.themoviedb.org/3/movie/${params.id}/recommendations?language=fr-FR&page=1`
  );

  return (
    <>
      {movie.data && <MovieSection movie={movie.data} />}
      <div>
        <Button
          name="Informations"
          onClick={() => {
            setBottomDiv("overview");
          }}
        />
        <Button
          name="Casting"
          onClick={() => {
            setBottomDiv("casting");
          }}
        />
        <Button
          name="Recommandations"
          onClick={() => {
            setBottomDiv("recommendations");
          }}
        />
      </div>
      {bottomDiv === "overview" && movie.data && (
        <MovieOverview movie={movie.data} />
      )}
      {bottomDiv === "casting" && casting.data && (
        <CastingSection casts={casting.data.cast} />
      )}
      {bottomDiv === "recommendations" && (
        <MovieCarrouselSection
          title="Recommandations"
          data={recommendedMovies.data}
        />
      )}
    </>
  );
}

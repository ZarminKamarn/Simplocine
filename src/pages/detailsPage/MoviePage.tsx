import { useParams } from "react-router";
import { useFetcher } from "../../core/useFetcher";
import {
  type MovieDetails,
  type ListCasting,
  type Person,
  type ListElement,
  type Movie,
} from "../../core/types";
import { useState } from "react";
import { MovieCarrouselSection } from "../../ui/carrouselSection/MovieCarrouselSection";
import { CastingSection } from "../../ui/castingSection/CastingSection";
import { Button } from "../../ui/button/Button";
import { MovieSection } from "../../ui/detailSection/MovieSection";
import { MovieOverview } from "../../ui/overview/MovieOverview";
import "./detailsPage.css";

export function MoviePage() {
  const [bottomDiv, setBottomDiv] = useState<
    "overview" | "casting" | "recommendations"
  >("overview");
  const params = useParams();
  const movie = useFetcher<MovieDetails>(
    `https://api.themoviedb.org/3/movie/${params.id}?language=fr-FR`
  );
  const casting = useFetcher<ListCasting<Person>>(
    `https://api.themoviedb.org/3/movie/${params.id}/credits?language=fr-FR`
  );
  const recommendedMovies = useFetcher<ListElement<Movie>>(
    `https://api.themoviedb.org/3/movie/${params.id}/recommendations?language=fr-FR&page=1`
  );

  return (
    <div className="details-page-main">
      <MovieSection
        movie={movie.data}
        isError={movie.isError}
        isLoading={movie.isLoading}
        errorMessage={movie.errorMsg}
      />
      <div>
        <div className="btn-div">
          <Button
            name="Informations"
            onClick={() => {
              setBottomDiv("overview");
            }}
            usage="details-selector"
            isSelected={bottomDiv === "overview"}
          />
          <Button
            name="Casting"
            onClick={() => {
              setBottomDiv("casting");
            }}
            usage="details-selector"
            isSelected={bottomDiv === "casting"}
          />
          <Button
            name="Recommandations"
            onClick={() => {
              setBottomDiv("recommendations");
            }}
            usage="details-selector"
            isSelected={bottomDiv === "recommendations"}
          />
        </div>

        {bottomDiv === "overview" && movie.data && (
          <MovieOverview
            movie={movie.data}
            isError={movie.isError}
            isLoading={movie.isLoading}
            errorMessage={movie.errorMsg}
          />
        )}
        {bottomDiv === "casting" && casting.data && (
          <CastingSection
            data={casting.data}
            isError={casting.isError}
            isLoading={casting.isLoading}
            errorMessage={casting.errorMsg}
          />
        )}
        {bottomDiv === "recommendations" && (
          <MovieCarrouselSection
            data={recommendedMovies.data}
            isLoading={recommendedMovies.isLoading}
            isError={recommendedMovies.isError}
            errorMessage={recommendedMovies.errorMsg}
          />
        )}
      </div>
    </div>
  );
}

import { useParams } from "react-router";
import { useFetcher } from "../../../useFetcher";
import {
  type MovieDetails,
  type ListCasting,
  type Person,
  type ListElement,
  type Movie,
} from "../../../tmpTypes";
import { useState } from "react";
import { MovieCarrouselSection } from "../../carrouselSection/MovieCarrouselSection";
import { CastingSection } from "../../castingSection/CastingSection";
import { Button } from "../../button/Button";
import { MovieSection } from "../../detailSection/MovieSection";
import { MovieOverview } from "../../overview/MovieOverview";
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
      {movie.data && <MovieSection movie={movie.data} />}
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
          <MovieOverview movie={movie.data} />
        )}
        {bottomDiv === "casting" && casting.data && (
          <CastingSection casts={casting.data.cast} />
        )}
        {bottomDiv === "recommendations" && (
          <MovieCarrouselSection data={recommendedMovies.data} />
        )}
      </div>
    </div>
  );
}

import { Link } from "react-router";
import type { ListMoviesSingleResult } from "../../tmpTypes";
import "./banner.css";
import { TitleH2 } from "../title/TitleH2";
import { Image } from "../image/Image";

interface BannerProps {
  movie: ListMoviesSingleResult;
}

export function Banner({ movie }: BannerProps) {
  return (
    <section className="banner-section">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`image de ${movie.title}`}
        origin="banner"
      />
      <div className="banner-info">
        <TitleH2 origin="banner" text={movie.title} />
        <p className="banner-description">{movie.overview}</p>
        <Link to={`/movies/${movie.id}`} className="banner-link">
          Voir
        </Link>
      </div>
    </section>
  );
}

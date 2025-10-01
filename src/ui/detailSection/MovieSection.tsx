import type { MovieDetails } from "../../tmpTypes";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";
import { TitleH2 } from "../title/TitleH2";
import "./detailsSection.css";

interface MovieSectionProps {
  movie: MovieDetails;
}

export function MovieSection({ movie }: MovieSectionProps) {
  return (
    <section className="details-section">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`image de ${movie.title}`}
        origin="banner"
      />
      <div className="details-info">
        <TitleH2 origin="banner" text={movie.title} />
        <Paragraph text={movie.overview} type="description" />
        <Paragraph text={`Note: ${movie.vote_average}/10`} />
      </div>
    </section>
  );
}

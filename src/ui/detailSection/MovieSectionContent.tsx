import type { MovieDetails } from "../../core/types";
import { Image } from "../image/Image";
import { Paragraph } from "../paragraph/Paragraph";
import { TitleH2 } from "../title/TitleH2";

interface MovieSectionContentProps {
  movie: MovieDetails;
}

export function MovieSectionContent({ movie }: MovieSectionContentProps) {
  return (
    <>
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
    </>
  );
}

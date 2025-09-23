import { Carrousel } from "../../carrousel/Carrousel";

export function Homepage() {
  return (
    <>
      <section>
        <h2>Les films populaires</h2>
        <Carrousel apiLink="https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1" />
      </section>
      <section>
        <h2>Les films les mieux notés</h2>
        <Carrousel apiLink="https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1" />
      </section>
      <section>
        <h2>Les films à venir</h2>
        <Carrousel apiLink="https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1" />
      </section>
    </>
  );
}

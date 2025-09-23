import { Carrousel } from "../../carrousel/Carrousel";

export function MovieListPage() {
  return (
    <>
      <section>
        <h2>Les films d'action</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=23"
          page="movies"
        />
      </section>
      <section>
        <h2>Les films romantiques</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=23"
          page="movies"
        />
      </section>
      <section>
        <h2>Les films polars</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=23"
          page="movies"
        />
      </section>
      <section>
        <h2>Les films historiques</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=23"
          page="movies"
        />
      </section>
      <section>
        <h2>Les films fantasy</h2>
        <Carrousel
          apiLink="https://api.themoviedb.org/3/discover/movie?language=fr-FR&page=1&with_genres=23"
          page="movies"
        />
      </section>
    </>
  );
}

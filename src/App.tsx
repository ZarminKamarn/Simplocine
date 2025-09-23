import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./ui/header/Header";
import { Homepage } from "./ui/pages/homepage/Homepage";
import { SeriePage } from "./ui/pages/seriePage/SeriePage";
import { MoviePage } from "./ui/pages/moviePage/MoviePage";
import { SerieListPage } from "./ui/pages/serieListPage/SerieListPage";
import { MovieListPage } from "./ui/pages/movieListPage/MovieListPage";
import { PersonPage } from "./ui/pages/personPage/PersonPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/series" element={<SerieListPage />} />
          <Route path="/movies" element={<MovieListPage />} />
          <Route path="/series/:id" element={<SeriePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/people/:id" element={<PersonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

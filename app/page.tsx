import { Montserrat } from "next/font/google";
import TMDB, { Movie } from "tmdb-ts";
import MovieCard from "./MovieCard";
const montserrat = Montserrat({ subsets: ["latin"] });

export default async function Home() {
  const tmdb = new TMDB(process.env.API!);
  const movies = await tmdb.movies.popular();
  console.log("hello");
  return (
    <main className={montserrat.className}>
      {movies && movies.results.map((e: Movie) => (
        <MovieCard key={e.id} data={e} />
      ))}
    </main>
  );
}

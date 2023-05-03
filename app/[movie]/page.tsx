import type {} from "next/router";
import TMDB, { Movie } from "tmdb-ts";
import MetaLoader from "./MetaLoader";

type URL = {
  params: {
    movie: string;
  };
  searchParams: string;
};

export default async function MovieDetail({ params }: URL) {
  const tmdb = new TMDB(process.env.API!);
  const movie = await tmdb.movies.details(parseInt(params.movie));

  return (
    <div>
      {movie.title}
      <MetaLoader />
    </div>
  );
}

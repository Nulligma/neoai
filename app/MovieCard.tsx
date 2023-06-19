import Image from "next/image";
import Link from "next/link";
import { Movie } from "tmdb-ts";

type Props = {
  data: Movie;
}

function MovieCard({ data }: Props) {
  return (
    <Link href={`/${data.id}`} className="movie">
      <Image
        src={process.env.IMAGE_PATH + data.poster_path}
        alt={data.title}
        height={200}
        width={150}
      />
      <div className="movie-item p-2">{data.title}</div>
    </Link>
  );
}

export default MovieCard;

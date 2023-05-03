import Image from "next/image";
import Link from "next/link";
import { Movie } from "tmdb-ts";
import "./style.css";

type Props = {
  data: Movie;
}

function MovieCard({ data }: Props) {
  return (
    <Link href={`/${data.id}`} className="movie">
      <div className="movie-item">{data.title}</div>
      <Image
        src={process.env.IMAGE_PATH + data.poster_path}
        alt={data.title}
        height={200}
        width={150}
      />
    </Link>
  );
}

export default MovieCard;

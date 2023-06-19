import TMDB, { Movie } from "tmdb-ts";
import MovieCard from "./MovieCard";
import "./style.css";

export default async function Home() {
  const tmdb = new TMDB(process.env.API!);
  const movies = await tmdb.movies.popular({ page: 1 });
  return (
    <main>
      <section
        id="hero"
        className="container bg-body-tertiary p-5 rounded-3 border"
      >
        <div className="container-fluid py-5">
          <h1 className="display-6">Wiki for next gen AI tools</h1>
          <p className="col-md-8 fs4">
            Sample news ticker
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            deserunt ullam architecto doloribus asperiores nostrum ad tempore
            illum qui necessitatibus.
          </p>
          <button className="btn btn-info btn-lg" type="button">
            Read more
          </button>
        </div>
      </section>

      <section id="list">
        <div className="container bg-dark text-light p-4 search-bar rounded-3 border">
          <form className="d-flex gap-3">
            <input
              type="search"
              className="form-control"
              id="searchInput"
              aria-describedby="emailHelp"
              placeholder="Search"
            />
            <select className="form-select" aria-label="Tags for ai tools" defaultValue="0">
              <option value="0">All Tools</option>
              <option value="1">Video</option>
              <option value="2">Audio</option>
              <option value="3">Coding</option>
            </select>
            <button type="submit" className="btn btn-light text-dark">
              Submit
            </button>
          </form>
        </div>

        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {movies &&
              movies.results.map((e: Movie) => (
                <div key={e.id} className="col">
                  <div className="bg-body-tertiary p-3 border rounded-3">
                    <MovieCard data={e} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

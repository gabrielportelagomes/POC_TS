import { duplicatedItem, notFoundError } from "../../errors";
import moviesRepositoy from "../../repositories/movies-repository";

async function postMovie(
  name: string,
  streaming_service_id: number,
  genre_id: number
) {
  const movies = await moviesRepositoy.selectMoviesByInfos(
    name,
    streaming_service_id,
    genre_id
  );

  if (movies.rowCount !== 0) {
    throw duplicatedItem();
  }

  await moviesRepositoy.createMovie(name, streaming_service_id, genre_id);
}

async function getMovies() {
  const movies = await moviesRepositoy.selectMovies();

  if (!movies) {
    throw notFoundError();
  }

  return movies;
}

const moviesService = {
  postMovie,
  getMovies,
};

export default moviesService;

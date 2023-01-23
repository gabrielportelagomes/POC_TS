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

async function deleteMovie(movie_id: number) {
  const movie = await moviesRepositoy.selectMovieById(movie_id);

  if (movie.rowCount === 0) {
    throw notFoundError();
  }

  await moviesRepositoy.deleteMovieById(movie_id);
}

async function updateMovie(
  movie_id: number,
  rating: number,
  date_watched: string
) {
  const movie = await moviesRepositoy.selectMovieById(movie_id);

  if (movie.rowCount === 0) {
    throw notFoundError();
  }

  await moviesRepositoy.updateMovieById(movie_id, rating, date_watched);
}

const moviesService = {
  postMovie,
  getMovies,
  deleteMovie,
  updateMovie,
};

export default moviesService;

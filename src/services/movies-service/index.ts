import { DuplicatedItem } from "../../errors";
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
    throw DuplicatedItem();
  }

  await moviesRepositoy.createMovie(name, streaming_service_id, genre_id);
}

const moviesService = {
  postMovie,
};

export default moviesService;

import { connection } from "../../database/db";
import { Movie, MovieInfos } from "../../protocols";
import { QueryResult } from "pg";

async function selectMoviesByInfos(
  name: string,
  streaming_service_id: number,
  genre_id: number
): Promise<QueryResult<Movie>> {
  return await connection.query(
    `
        SELECT 
            *
        FROM movies
        WHERE name = $1 AND streaming_service_id = $2 AND genre_id = $3;
        `,
    [name, streaming_service_id, genre_id]
  );
}

async function createMovie(
  name: string,
  streaming_service_id: number,
  genre_id: number
): Promise<QueryResult<Movie>> {
  return await connection.query(
    `
        INSERT INTO movies
          (name, streaming_service_id, genre_id)
        VALUES ($1, $2, $3);
        `,
    [name, streaming_service_id, genre_id]
  );
}

async function selectMovies(): Promise<QueryResult<MovieInfos>> {
  return await connection.query(
    `
        SELECT 
            movies.id, movies.name, streaming_services.name AS streamign_service, movie_genres.name AS genre, movies.watched, movies.date_watched, movies.review, movies.created_at
        FROM movies
        JOIN streaming_services ON movies.streaming_service_id = streaming_services.id
        JOIN movie_genres ON movies.genre_id = movie_genres.id;
        `
  );
}

const moviesRepositoy = {
  selectMoviesByInfos,
  createMovie,
  selectMovies,
};

export default moviesRepositoy;

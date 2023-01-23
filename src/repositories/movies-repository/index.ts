import { connection } from "../../database/db";
import { Movie } from "../../protocols";
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

const moviesRepositoy = {
  selectMoviesByInfos,
  createMovie,
};

export default moviesRepositoy;

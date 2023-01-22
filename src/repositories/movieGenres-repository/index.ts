import { connection } from "../../database/db";
import { MovieGenre } from "../../protocols";
import { QueryResult } from "pg";

async function selectMovieGenres(): Promise<QueryResult<MovieGenre>> {
  return await connection.query(
    `
        SELECT 
            id AS movie_genre_id, 
            name AS movie_genre_name 
        FROM movie_genres;
        `
  );
}

const movieGenresRepositoy = {
  selectMovieGenres,
};

export default movieGenresRepositoy;

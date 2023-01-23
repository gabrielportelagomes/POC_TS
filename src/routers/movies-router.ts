import {
  validateBody,
  validateParams,
} from "../middlewares/validation-middleware";
import { Router } from "express";
import {
  createMovieSchema,
  genreIdSchema,
  movieIdSchema,
  movieRatingSchema,
} from "../schemas";
import {
  deleteMovie,
  getMovies,
  getMoviesByGenre,
  postMovie,
  updateMovie,
} from "../controllers/movies-controller";

const moviesRouter = Router();

moviesRouter.get("/", getMovies);
moviesRouter.post("/", validateBody(createMovieSchema), postMovie);
moviesRouter.patch(
  "/:id",
  validateParams(movieIdSchema),
  validateBody(movieRatingSchema),
  updateMovie
);
moviesRouter.get("/:id", validateParams(genreIdSchema), getMoviesByGenre);
moviesRouter.delete("/:id", validateParams(movieIdSchema), deleteMovie);

export { moviesRouter };

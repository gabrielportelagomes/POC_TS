import {
  validateBody,
  validateParams,
} from "../middlewares/validation-middleware";
import { Router } from "express";
import { createMovieSchema, movieIdSchema } from "../schemas";
import { deleteMovie, getMovies, postMovie } from "../controllers/movies-controller";

const moviesRouter = Router();

moviesRouter.get("/", getMovies);
moviesRouter.post("/", validateBody(createMovieSchema), postMovie);
moviesRouter.delete("/:id", validateParams(movieIdSchema), deleteMovie);

export { moviesRouter };

import { validateBody } from "../middlewares/validation-middleware";
import { Router } from "express";
import { createMovieSchema } from "../schemas/movies-schemas";
import { getMovies, postMovie } from "../controllers/movies-controller";

const moviesRouter = Router();

moviesRouter.get("/", getMovies);
moviesRouter.post("/", validateBody(createMovieSchema), postMovie);

export { moviesRouter };

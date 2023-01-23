import { validateBody } from "../middlewares/validation-middleware";
import { Router } from "express";
import { createMovieSchema } from "../schemas/movies-schemas";
import { postMovie } from "../controllers/movies-controller";

const moviesRouter = Router();

moviesRouter.post("/", validateBody(createMovieSchema), postMovie);

export { moviesRouter };

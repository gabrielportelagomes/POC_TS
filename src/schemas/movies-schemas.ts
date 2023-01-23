import { CreateMovie } from "../protocols";
import Joi from "joi";

export const createMovieSchema = Joi.object<CreateMovie>({
  name: Joi.string().min(3).required(),
  streaming_service_id: Joi.number().integer().required(),
  genre_id: Joi.number().integer().required(),
});

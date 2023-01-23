import moviesService from "../services/movies-service";
import { Request, Response } from "express";
import { CreateMovie } from "../protocols";

export async function postMovie(req: Request, res: Response) {
  const { name, streaming_service_id, genre_id } = req.body as CreateMovie;
  try {
    await moviesService.postMovie(name, streaming_service_id, genre_id);
console.log("final")
    return res.sendStatus(201);
  } catch (error) {
    if (error.name === "DuplicatedItem") {
      return res.status(500).send(error.message);
    }
    return res.sendStatus(500);
  }
}

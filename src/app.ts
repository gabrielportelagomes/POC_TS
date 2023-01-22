import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { movieGenresRouter, streamingServicesRouter } from "./routers";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(json())
  .get("/health", (req, res) => res.send("OK!"))
  .use("/streaming-services", streamingServicesRouter)
  .use("/movie-genres", movieGenresRouter);

export default app;

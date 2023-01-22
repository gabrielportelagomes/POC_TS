import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { streamingServicesRouter } from "./routers";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(json())
  .get("/health", (req, res) => res.send("OK!"))
  .use("/streaming-services", streamingServicesRouter);

export default app;

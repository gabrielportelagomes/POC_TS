import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(json())
  .get("/health", (req, res) => res.send("OK!"));

export default app;

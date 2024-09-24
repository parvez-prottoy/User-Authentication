import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const app = express();
connectDB.apply();
app.use([
  morgan("dev"),
  cors(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
]);

export default app;

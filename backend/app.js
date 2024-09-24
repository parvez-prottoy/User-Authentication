import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use([
  morgan("dev"),
  cors(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
]);

export default app;

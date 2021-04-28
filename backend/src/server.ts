import express, { NextFunction, Request, Response } from "express";

import cors from "cors";

import { AppError } from "./errors/AppError";
import "express-async-errors";

import { router } from "./routes";

//database connection
import "./database";

const app = express();

app.use(express.json());

app.use(cors());
app.options("*", cors());

app.use(router);

//middleware para tratar erros
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error -  ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running in port 3333"));

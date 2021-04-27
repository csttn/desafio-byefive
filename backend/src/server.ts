import express, { NextFunction, Request, Response } from "express";

import path from "path";
import cors from "cors";

import { AppError } from "./errors/AppError";
import "express-async-errors";

import { router } from "./routes";

//database connection
import "./database";

const publicPath = path.join(__dirname, "..");

const app = express();

app.use(express.json());

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

// var corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

// app.use(cors(corsOptions));

app.listen(3333, () => console.log("Server is running in port 3333"));

import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateTransactionController } from "../modules/transactions/useCase/createTransaction/CreateTransactionController";
import { ListTransactionsController } from "../modules/transactions/useCase/listTransaction/ListTransactionsController";
import cors from "cors";

const transactionsRoutes = Router();

transactionsRoutes.post("/", ensureAuthenticated, (req, res) =>
  CreateTransactionController(req, res)
);

transactionsRoutes.get(
  "/",
  cors(corsOptions),
  ensureAuthenticated,
  (req, res) => ListTransactionsController(req, res)
);

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export { transactionsRoutes };

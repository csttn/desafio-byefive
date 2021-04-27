import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateTransactionController } from "../modules/transactions/useCase/createTransaction/CreateTransactionController";
import { ListTransactionsController } from "../modules/transactions/useCase/listTransaction/ListTransactionsController";

const transactionsRoutes = Router();

transactionsRoutes.post("/", ensureAuthenticated, (req, res) =>
  CreateTransactionController(req, res)
);

transactionsRoutes.get("/", ensureAuthenticated, (req, res) =>
  ListTransactionsController(req, res)
);

export { transactionsRoutes };

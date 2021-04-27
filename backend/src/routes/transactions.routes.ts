import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateTransactionController } from "../modules/transactions/useCase/createTransaction/CreateTransactionController";

const transactionsRoutes = Router();

transactionsRoutes.post("/", ensureAuthenticated, (req, res) =>
  CreateTransactionController(req, res)
);

export { transactionsRoutes };

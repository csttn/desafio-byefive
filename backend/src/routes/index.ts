import { Router } from "express";
import { transactionsRoutes } from "./transactions.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/transactions", transactionsRoutes);

router.use("/users", usersRoutes);

export { router };

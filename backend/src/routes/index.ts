import { Router } from "express";
import { authenticatedRoutes } from "./authenticated.routes";
import { transactionsRoutes } from "./transactions.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/transactions", transactionsRoutes);

router.use("/users", usersRoutes);

router.use(authenticatedRoutes);

export { router };

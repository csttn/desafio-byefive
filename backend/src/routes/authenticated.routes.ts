import { Router } from "express";
import { AuthenticatedUserController } from "../modules/users/useCase/authenticatedUser/AuthenticatedUserController";

const authenticatedRoutes = Router();

authenticatedRoutes.post("/sessions", (req, res) =>
  AuthenticatedUserController(req, res)
);
export { authenticatedRoutes };

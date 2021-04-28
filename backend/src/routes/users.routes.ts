import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/users/useCase/createUser/CreateUserController";
import { ListUserByIdController } from "../modules/users/useCase/listUserByID/ListUserByIdController";

const usersRoutes = Router();

usersRoutes.post("/create", (req, res) => CreateUserController(req, res));
usersRoutes.get("/", ensureAuthenticated, (req, res) =>
  ListUserByIdController(req, res)
);

export { usersRoutes };

import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/users/useCase/createUser/CreateUserController";
import { ListUserByIdController } from "../modules/users/useCase/listUserByID/ListUserByIdController";
import { ListUsersController } from "../modules/users/useCase/listUsers/ListUserController";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => CreateUserController(req, res));
// usersRoutes.get("/", (req, res) => ListUsersController(req, res));
usersRoutes.get("/", ensureAuthenticated, (req, res) =>
  ListUserByIdController(req, res)
);

export { usersRoutes };

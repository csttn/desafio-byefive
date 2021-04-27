import { Router } from "express";
import { CreateUserController } from "../modules/users/useCase/CreateUser/CreateUserController";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => CreateUserController(req, res));
usersRoutes.get("/", (req, res) => {
  res.json("EAE").send();
});

export { usersRoutes };

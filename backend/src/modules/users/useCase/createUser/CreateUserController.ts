import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";

async function CreateUserController(request: Request, response: Response) {
  const { name, email, password } = request.body;

  if (name === "" || email === "" || password === "") {
    throw new AppError("Invalid data", 406);
  }

  await CreateUserUseCase({ email, name, password });

  return response.status(201).send();
}

export { CreateUserController };

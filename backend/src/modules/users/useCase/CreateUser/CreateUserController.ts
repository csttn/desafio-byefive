import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";

async function CreateUserController(request: Request, response: Response) {
  const { name, email, password } = request.body;

  if (name === "" || email === "" || password === "") {
    throw new AppError("Dados inválidos", 406);
  }

  try {
    await CreateUserUseCase({ email, name, password });
  } catch (error) {
    throw new AppError("Erro ao salvar usuário");
  }

  return response.status(201).send();
}

export { CreateUserController };

import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUserUseCase";
import { AppError } from "../../../../errors/AppError";

async function ListUsersController(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const all = await ListUsersUseCase();

    return response.json(all).send();
  } catch (error) {
    throw new AppError("Erro ao receber informações do ListUserUseCase");
  }
}

export { ListUsersController };

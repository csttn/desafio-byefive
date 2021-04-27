import { Request, Response } from "express";
import queryString from "querystring";
import { AppError } from "../../../../errors/AppError";
import { ListUserByIdUseCase } from "./ListUserByIdUseCase";

async function ListUserByIdController(
  request: Request,
  response: Response
): Promise<Response> {
  const { _id } = request.user;

  try {
    const user = await ListUserByIdUseCase(_id);

    return response.json(user).send();
  } catch (error) {
    throw new AppError("Erro ao receber informações do ListUserUseCase");
  }
}

export { ListUserByIdController };

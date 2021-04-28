import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { ListTransactionsUseCase } from "./ListTransactionsUseCase";

async function ListTransactionsController(
  request: Request,
  response: Response
) {
  const { _id } = request.user;
  console.log(request.headers);

  try {
    const transactions = await ListTransactionsUseCase(_id);
    return response.json(transactions).send();
  } catch (error) {
    throw new AppError("Erro ao buscar lista de tarnsações", 401);
  }
}

export { ListTransactionsController };

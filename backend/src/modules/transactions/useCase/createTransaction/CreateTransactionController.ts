import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

async function CreateTransactionController(
  request: Request,
  response: Response
) {
  const { title, type, category, amount } = request.body;
  const { _id } = request.user;

  if (title === "" || type === "" || category === "" || amount === null) {
    throw new AppError("Invalid data", 406);
  }

  try {
    const transaction = await CreateTransactionUseCase({
      title,
      type,
      category,
      amount,
      user_id: _id,
    });

    return response.status(201).json(transaction).send();
  } catch (error) {
    throw new AppError(error);
  }
}

export { CreateTransactionController };

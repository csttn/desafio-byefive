import { User } from "../../../users/repositories/implementations/schemas/UserSchema";
import { AppError } from "../../../../errors/AppError";

async function ListTransactionsUseCase(_id: string) {
  try {
    // Realizando consulta no banco
    const transactions = await User.find({ _id }).populate("transactions");
    return transactions;
  } catch (error) {
    throw new AppError("Erro ao buscar transactions no banco");
  }
}

export { ListTransactionsUseCase };

import { AppError } from "../../../../errors/AppError";
import { User } from "../../repositories/implementations/schemas/UserSchema";
import { IUser } from "../../repositories/IUser";

async function ListUsersUseCase(): Promise<IUser[]> {
  try {
    // Realizando consulta no banco
    const users = await User.find({});
    return users;
  } catch (error) {
    throw new AppError("Erro ao buscar usuários no banco");
  }
}

export { ListUsersUseCase };

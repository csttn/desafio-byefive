import { AppError } from "../../../../errors/AppError";
import { User } from "../../repositories/implementations/schemas/UserSchema";
import { IUser } from "../../repositories/IUser";

async function ListUserByIdUseCase(_id: String): Promise<IUser> {
  try {
    // Realizando consulta no banco
    const user = await User.findById(_id).exec();
    return user;
  } catch (error) {
    throw new AppError("Erro ao buscar usuário por ID no banco");
  }
}

export { ListUserByIdUseCase };

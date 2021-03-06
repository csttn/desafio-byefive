import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../repositories/implementations/schemas/UserSchema";
import { v4 as uuidV4 } from "uuid";
import { AppError } from "../../../../errors/AppError";

async function CreateUserUseCase({ email, name, password }: ICreateUserDTO) {
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new AppError("User already exists", 401);
  }
  const passwordHash = await hash(password, 8);
  const user = new User();
  user.id = uuidV4();
  user.email = email;
  user.name = name;
  user.password = passwordHash;

  await user.save();
}
export { CreateUserUseCase };

import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../repositories/implementations/schemas/UserSchema";
import { v4 as uuidV4 } from "uuid";

async function CreateUserUseCase({ email, name, password }: ICreateUserDTO) {
  const passwordHash = await hash(password, 8);

  const user = new User();
  user.id = uuidV4();
  user.email = email;
  user.name = name;
  user.password = passwordHash;

  await user.save();
  return user;
}
export { CreateUserUseCase };

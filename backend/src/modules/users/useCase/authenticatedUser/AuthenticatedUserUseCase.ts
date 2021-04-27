import { User } from "../../repositories/implementations/schemas/UserSchema";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { request } from "express";

interface IRequest {
  email: string;
  password: string;
}

async function AuthenticatedUserUseCase({ email, password }: IRequest) {
  //buscando usuario no banco
  const user = await User.findOne({ email: email });

  // validando usuário existente
  if (!user) {
    throw new AppError("Email or password incorrect!");
  }
  //comparando senha recebeida com a senha encriptografada no mongo
  // utilizei o valueOf porque o parametro do compare é de tipo string primitivo, e o tipo do password é uma String Object wrapper
  const passwordMatch = await compare(password, user.password.valueOf());
  //   validando a senha criptografada do usuario a partir do retorno do compare
  if (!passwordMatch) {
    // os retorno de erros são iguais para o usuario não descobrir qual campo esta errado, é uma medida de segurança.
    throw new AppError("Email or password incorrect!");
  }

  //gerando JWT
  // chave de encripatação utilizada = "desafio-byefive"
  // algortimo SHA256 para geração da chave

  const token = sign(
    {},
    "e8fd4d09b4788e143dc2ff69b9493552267406ae4e4300a05ebc8382e7b83fe7",
    {
      subject: user._id.toString(),
      expiresIn: "1d",
    }
  );

  // valores do usuario armazenados no token, e expiração de 1 dia

  return {
    user,
    token,
  };
}

export { AuthenticatedUserUseCase };

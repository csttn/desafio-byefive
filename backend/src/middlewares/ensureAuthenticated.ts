import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { User } from "../modules/users/repositories/implementations/schemas/UserSchema";

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  // transforming string into array, separating positions by spaces in the string
  // selecting the second position where the token is located, (Baerer "Token")
  const [, token] = authHeader.split(" ");

  try {
    const { sub: _id } = verify(
      token,
      "e8fd4d09b4788e143dc2ff69b9493552267406ae4e4300a05ebc8382e7b83fe7"
    ) as IPayload;

    const user = await User.findById(_id).exec();

    if (!user) {
      throw new AppError("User not Exists", 401);
    }

    // adding authenticated user id within the request
    request.user = {
      _id,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid Token", 401);
  }
}

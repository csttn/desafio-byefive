import { Request, Response } from "express";
import { AuthenticatedUserUseCase } from "./AuthenticatedUserUseCase";

async function AuthenticatedUserController(
  request: Request,
  response: Response
): Promise<Response> {
  const { email, password } = request.body;

  const token = await AuthenticatedUserUseCase({ userEmail: email, password });

  return response.json(token).send();
}

export { AuthenticatedUserController };

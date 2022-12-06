import { TypeORMUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUserRepository";
import { AuthService } from "@/app/services/auth/AuthService";
import { AuthController } from "@/app/controllers/auth/AuthController";

export const makeAuthController = (): AuthController => {
  const findUserByEmailRepository = new TypeORMUserRepository();
  const authService = new AuthService(findUserByEmailRepository);
  const authController = new AuthController(authService);
  return authController;
};

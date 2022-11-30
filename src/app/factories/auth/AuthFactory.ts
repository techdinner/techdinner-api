import { MysqlFindUserByEmailRepository } from "@/infra/mysql/users/MysqlFindUserByEmailRepository";
import { AuthService } from "@/app/services/auth/AuthService";
import { AuthController } from "@/app/controllers/auth/AuthController";

export const makeAuthController = (): AuthController => {
  const findUserByEmailRepository = new MysqlFindUserByEmailRepository();
  const authService = new AuthService(findUserByEmailRepository);
  const authController = new AuthController(authService);
  return authController;
};

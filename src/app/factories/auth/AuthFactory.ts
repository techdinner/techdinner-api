import { MysqlFindUserByEmailRepository } from "../../../infra/mysql/users/MysqlFindUserByEmailRepository";
import { AuthService } from "../../services/auth/AuthService";
import { AuthController } from "../../controllers/auth/AuthController";

export const makeAuthController = () => {
	const findUserByEmailRepository = new MysqlFindUserByEmailRepository();
	const authService = new AuthService(findUserByEmailRepository);
	const authController = new AuthController(authService);
	return authController;
};

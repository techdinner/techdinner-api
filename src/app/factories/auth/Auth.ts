import { MysqlFindUserByEmailRepository } from "../../../infra/mysql/users/MysqlFindUserByEmailRepository";
import { AuthService } from "../../services/auth/AuthService";
import { AuthController } from "../../controllers/auth/AuthController";

const repository = new MysqlFindUserByEmailRepository();

const service = new AuthService(repository);

const authController = new AuthController(service);

export { authController };

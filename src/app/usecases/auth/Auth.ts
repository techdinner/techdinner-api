import { UserRepository } from "../../repositories/implementations/UserRepository";
import { AuthService } from "../../services/auth/AuthService";
import { AuthController } from "../../controllers/auth/AuthController";

const userRepository = new UserRepository();

const authService = new AuthService(userRepository);

const authController = new AuthController(authService);

export { authService, authController };

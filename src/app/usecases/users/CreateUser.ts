import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserService } from "../../services/users/CreateUserService";
import { CreateUserController } from "../../controllers/users/CreateUserController";

const userRepository = new UserRepository();

const createUserService = new CreateUserService(userRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserService, createUserController };

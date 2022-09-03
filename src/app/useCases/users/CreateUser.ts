import { TypeORMUserRepository } from "../../repositories/implementations/typeorm/TypeORMUserRepository";
import { CreateUserService } from "../../services/users/CreateUserService";
import { CreateUserController } from "../../controllers/users/CreateUserController";

const repository = new TypeORMUserRepository();

const createUserService = new CreateUserService(repository);

const createUserController = new CreateUserController(createUserService);

export { createUserService, createUserController };

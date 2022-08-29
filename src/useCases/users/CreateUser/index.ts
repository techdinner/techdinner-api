import { CreateUserService } from "../../../services/users/CreateUserService";
import { CreateUserController } from "../../../controllers/users/CreateUserController";
import { TypeORMUserRepository } from "../../../repositories/implementations/typeorm/TypeORMUserRepository";

const repository = new TypeORMUserRepository();

const createUserService = new CreateUserService(repository);

const createUserController = new CreateUserController(createUserService);

export { createUserService, createUserController };

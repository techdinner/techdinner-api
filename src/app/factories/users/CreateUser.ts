import { MysqlCreateUserRepository } from "../../../infra/mysql/users/MysqlCreateUserRepository";
import { CreateUserService } from "../../services/users/CreateUserService";
import { CreateUserController } from "../../controllers/users/CreateUserController";

const repository = new MysqlCreateUserRepository();

const service = new CreateUserService(repository);

const createUserController = new CreateUserController(service);

export { createUserController };

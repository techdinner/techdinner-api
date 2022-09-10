import { MysqlCreateUserRepository } from "../../../infra/mysql/users/MysqlCreateUserRepository";
import { CreateUserService } from "../../services/users/CreateUserService";
import { CreateUserController } from "../../controllers/users/CreateUserController";

export const makeCreateUserController = () => {
	const createUserRepository = new MysqlCreateUserRepository();
	const createUserService = new CreateUserService(createUserRepository);
	const createUserController = new CreateUserController(createUserService);
	return createUserController;
};
import { MysqlUpdateUserRepository } from "../../../infra/mysql/users/MysqlUpdateUserRepository";
import { UpdateUserService } from "../../services/users/UpdateUserService";
import { UpdateUserController } from "../../controllers/users/UpdateUserController";

export const makeUpdateUserController = () => {
	const updateUserRepository = new MysqlUpdateUserRepository();
	const updateUserService = new UpdateUserService(updateUserRepository);
	const updateUserController = new UpdateUserController(updateUserService);
	return updateUserController;
};

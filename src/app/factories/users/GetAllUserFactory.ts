import { MysqlGetAllUserRepository } from "../../../infra/mysql/users/MysqlGetAllUserRepository";
import { GetAllUserService } from "../../services/users/GetAllUserService";
import { GetAllUserController } from "../../controllers/users/GetAllUserController";

export const makeGetAllUserController = () => {
	const getAllUserRepository = new MysqlGetAllUserRepository();
	const getAllUserService = new GetAllUserService(getAllUserRepository);
	const getAllUserController = new GetAllUserController(getAllUserService);
	return getAllUserController;
};

import { MysqlFindUserByIdRepository } from "../../../infra/mysql/users/MysqlFindUserByIdRepository";
import { FindUserByIdService } from "../../services/users/FindUserByIdService";
import { FindUserByIdController } from "../../controllers/users/FindUserByIdController";

export const makeFindUserByIdController = () => {
	const findUserByIdRepository = new MysqlFindUserByIdRepository();
	const findUserByIdService = new FindUserByIdService(findUserByIdRepository);
	const findUserByIdController = new FindUserByIdController(
		findUserByIdService,
	);
	return findUserByIdController;
};

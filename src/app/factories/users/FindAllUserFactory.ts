import { MysqlFindAllUserRepository } from "@infra/mysql/users/MysqlFindAllUserRepository";
import { FindAllUserService } from "@services/users/FindAllUserService";
import { FindAllUserController } from "@controllers/users/FindAllUserController";
import { ControllerServerErrorDecorator } from "@decorators/ControllerServerErrorDecorator";

export const makeFindAllUserController = () => {
	const findAllUserRepository = new MysqlFindAllUserRepository();
	const findAllUserService = new FindAllUserService(findAllUserRepository);
	const findAllUserController = new FindAllUserController(findAllUserService);

	return new ControllerServerErrorDecorator(findAllUserController);
};

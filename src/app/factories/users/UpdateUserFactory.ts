import { MysqlUpdateUserRepository } from "@infra/mysql/users/MysqlUpdateUserRepository";
import { UpdateUserService } from "@services/users/UpdateUserService";
import { UpdateUserController } from "@controllers/users/UpdateUserController";
import { ControllerServerErrorDecorator } from "@decorators/ControllerServerErrorDecorator";

export const makeUpdateUserController = () => {
	const updateUserRepository = new MysqlUpdateUserRepository();
	const updateUserService = new UpdateUserService(updateUserRepository);
	const updateUserController = new UpdateUserController(updateUserService);

	return new ControllerServerErrorDecorator(updateUserController);
};

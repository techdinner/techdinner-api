import { MysqlDeleteUserRepository } from "@infra/mysql/users/MysqlDeleteUserRepository";
import { DeleteUserService } from "@services/users/DeleteUserService";
import { DeleteUserController } from "@controllers/users/DeleteUserController";
import { ControllerServerErrorDecorator } from "@decorators/ControllerServerErrorDecorator";

export const makeDeleteUserController = () => {
	const deleteUserRepository = new MysqlDeleteUserRepository();
	const deleteUserService = new DeleteUserService(deleteUserRepository);
	const deleteUserController = new DeleteUserController(deleteUserService);

	return new ControllerServerErrorDecorator(deleteUserController);
};

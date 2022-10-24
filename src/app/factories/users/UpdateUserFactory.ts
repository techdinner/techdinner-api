import { MysqlUpdateUserRepository } from "@infra/mysql/users/MysqlUpdateUserRepository";
import { UpdateUserService } from "@services/users/UpdateUserService";
import { BcryptHashAdapter } from "@infra/bcrypt/BcryptHashAdapter";
import { UpdateUserController } from "@controllers/users/UpdateUserController";
import { ControllerServerErrorDecorator } from "@decorators/ControllerServerErrorDecorator";

export const makeUpdateUserController = () => {
	const updateUserRepository = new MysqlUpdateUserRepository();
	const bcryptHashAdapter = new BcryptHashAdapter();
	const updateUserService = new UpdateUserService(
		updateUserRepository,
		bcryptHashAdapter,
	);
	const updateUserController = new UpdateUserController(updateUserService);

	return new ControllerServerErrorDecorator(updateUserController);
};

import { MysqlUpdateUserRepository } from "@/infra/mysql/users/MysqlUpdateUserRepository";
import { UpdateUserService } from "@/app/services/users/UpdateUserService";
import { BcryptHashAdapter } from "@/infra/bcrypt/BcryptHashAdapter";
import { UpdateUserController } from "@/app/controllers/users/UpdateUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeUpdateUserController = (): ControllerServerErrorDecorator => {
  const updateUserRepository = new MysqlUpdateUserRepository();
  const bcryptHashAdapter = new BcryptHashAdapter();
  const updateUserService = new UpdateUserService(
    updateUserRepository,
    bcryptHashAdapter,
  );
  const updateUserController = new UpdateUserController(updateUserService);

  return new ControllerServerErrorDecorator(updateUserController);
};

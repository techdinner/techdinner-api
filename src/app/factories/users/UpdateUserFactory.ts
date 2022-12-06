import { TypeORMUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUserRepository";
import { UpdateUserService } from "@/app/services/users/UpdateUserService";
import { UpdateUserController } from "@/app/controllers/users/UpdateUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeUpdateUserController = (): ControllerServerErrorDecorator => {
  const updateUserRepository = new TypeORMUserRepository();
  const updateUserService = new UpdateUserService(updateUserRepository);
  const updateUserController = new UpdateUserController(updateUserService);

  return new ControllerServerErrorDecorator(updateUserController);
};

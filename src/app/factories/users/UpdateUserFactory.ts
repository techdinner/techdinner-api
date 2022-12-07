import { TypeORMUpdateUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUpdateUserRepository";
import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/TypeORMFindUserByIdRepository";
import { UpdateUserService } from "@/app/services/users/UpdateUserService";
import { UpdateUserController } from "@/app/controllers/users/UpdateUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeUpdateUserController = (): ControllerServerErrorDecorator => {
  const updateUserRepository = new TypeORMUpdateUserRepository();
  const findUserByIdRepository = new TypeORMFindUserByIdRepository();
  const updateUserService = new UpdateUserService(
    updateUserRepository,
    findUserByIdRepository,
  );
  const updateUserController = new UpdateUserController(updateUserService);

  return new ControllerServerErrorDecorator(updateUserController);
};

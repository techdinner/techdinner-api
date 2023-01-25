import { TypeORMUpdateUserRepository } from "@/infra/typeorm/repositories/users/typeorm-update-user.repository";
import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/typeorm-find-user-by-id.repository";
import { UpdateUserService } from "@/app/services/users/update-user.service";
import { UpdateUserController } from "@/app/controllers/users/update-user.controller";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

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

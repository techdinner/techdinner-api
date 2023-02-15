import { TypeORMDeleteUserRepository } from "@/infra/typeorm/repositories/users/typeorm-delete-user.repository";
import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/typeorm-find-user-by-id.repository";
import { DeleteUserService } from "@/app/services/users/delete-user.service";
import { DeleteUserController } from "@/infra/http/controllers/users/delete-user.controller";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

export const makeDeleteUserController = (): ControllerServerErrorDecorator => {
  const deleteUserRepository = new TypeORMDeleteUserRepository();
  const findUserByIdRepository = new TypeORMFindUserByIdRepository();
  const deleteUserService = new DeleteUserService(
    deleteUserRepository,
    findUserByIdRepository,
  );
  const deleteUserController = new DeleteUserController(deleteUserService);

  return new ControllerServerErrorDecorator(deleteUserController);
};

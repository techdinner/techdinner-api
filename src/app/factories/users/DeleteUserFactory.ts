import { TypeORMDeleteUserRepository } from "@/infra/typeorm/repositories/users/TypeORMDeleteUserRepository";
import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/TypeORMFindUserByIdRepository";
import { DeleteUserService } from "@/app/services/users/DeleteUserService";
import { DeleteUserController } from "@/app/controllers/users/DeleteUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

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

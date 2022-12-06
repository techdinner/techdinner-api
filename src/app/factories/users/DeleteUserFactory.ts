import { TypeORMUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUserRepository";
import { DeleteUserService } from "@/app/services/users/DeleteUserService";
import { DeleteUserController } from "@/app/controllers/users/DeleteUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeDeleteUserController = (): ControllerServerErrorDecorator => {
  const deleteUserRepository = new TypeORMUserRepository();
  const findUserByIdRepository = new TypeORMUserRepository();
  const deleteUserService = new DeleteUserService(
    deleteUserRepository,
    findUserByIdRepository,
  );
  const deleteUserController = new DeleteUserController(deleteUserService);

  return new ControllerServerErrorDecorator(deleteUserController);
};

import { MysqlDeleteUserRepository } from "@/infra/mysql/users/MysqlDeleteUserRepository";
import { MysqlFindUserByIdRepository } from "@/infra/mysql/users/MysqlFindUserByIdRepository";
import { DeleteUserService } from "@/app/services/users/DeleteUserService";
import { DeleteUserController } from "@/app/controllers/users/DeleteUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeDeleteUserController = (): ControllerServerErrorDecorator => {
  const deleteUserRepository = new MysqlDeleteUserRepository();
  const findUserByIdRepository = new MysqlFindUserByIdRepository();
  const deleteUserService = new DeleteUserService(
    deleteUserRepository,
    findUserByIdRepository,
  );
  const deleteUserController = new DeleteUserController(deleteUserService);

  return new ControllerServerErrorDecorator(deleteUserController);
};

import { MysqlCreateUserRepository } from "@/infra/mysql/users/MysqlCreateUserRepository";
import { MysqlFindUserByEmailRepository } from "@/infra/mysql/users/MysqlFindUserByEmailRepository";
import { CreateUserService } from "@/app/services/users/CreateUserService";
import { CreateUserController } from "@/app/controllers/users/CreateUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeCreateUserController = (): ControllerServerErrorDecorator => {
  const createUserRepository = new MysqlCreateUserRepository();
  const findUserByEmailRepository = new MysqlFindUserByEmailRepository();
  const createUserService = new CreateUserService(
    createUserRepository,
    findUserByEmailRepository,
  );
  const createUserController = new CreateUserController(createUserService);

  return new ControllerServerErrorDecorator(createUserController);
};

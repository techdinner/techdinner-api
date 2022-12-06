import { TypeORMUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUserRepository";
import { CreateUserService } from "@/app/services/users/CreateUserService";
import { CreateUserController } from "@/app/controllers/users/CreateUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeCreateUserController = (): ControllerServerErrorDecorator => {
  const createUserRepository = new TypeORMUserRepository();
  const findUserByEmailRepository = new TypeORMUserRepository();
  const createUserService = new CreateUserService(
    createUserRepository,
    findUserByEmailRepository,
  );
  const createUserController = new CreateUserController(createUserService);

  return new ControllerServerErrorDecorator(createUserController);
};

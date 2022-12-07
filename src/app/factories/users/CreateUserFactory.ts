import { TypeORMCreateUserRepository } from "@/infra/typeorm/repositories/users/TypeORMCreateUserRepository";
import { TypeORMFindUserByEmailRepository } from "@/infra/typeorm/repositories/users/TypeORMFindUserByEmailRepository";
import { BcryptHashAdapter } from "@/infra/bcrypt/BcryptHashAdapter";
import { CreateUserService } from "@/app/services/users/CreateUserService";
import { CreateUserController } from "@/app/controllers/users/CreateUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeCreateUserController = (): ControllerServerErrorDecorator => {
  const createUserRepository = new TypeORMCreateUserRepository();
  const findUserByEmailRepository = new TypeORMFindUserByEmailRepository();
  const hashRepository = new BcryptHashAdapter();
  const createUserService = new CreateUserService(
    createUserRepository,
    findUserByEmailRepository,
    hashRepository,
  );
  const createUserController = new CreateUserController(createUserService);

  return new ControllerServerErrorDecorator(createUserController);
};

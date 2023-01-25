import { TypeORMCreateUserRepository } from "@/infra/typeorm/repositories/users/typeorm-create-user.repository";
import { TypeORMFindUserByEmailRepository } from "@/infra/typeorm/repositories/users/typeorm-find-user-by-email.repository";
import { BcryptHashAdapter } from "@/infra/bcrypt/bcrypt-hash.adapter";
import { CreateUserService } from "@/app/services/users/create-user.service";
import { CreateUserController } from "@/app/controllers/users/create-user.controller";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

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

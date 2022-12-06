import { TypeORMUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUserRepository";
import { FindAllUserService } from "@/app/services/users/FindAllUserService";
import { FindAllUserController } from "@/app/controllers/users/FindAllUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeFindAllUserController = (): ControllerServerErrorDecorator => {
  const findAllUserRepository = new TypeORMUserRepository();
  const findAllUserService = new FindAllUserService(findAllUserRepository);
  const findAllUserController = new FindAllUserController(findAllUserService);

  return new ControllerServerErrorDecorator(findAllUserController);
};

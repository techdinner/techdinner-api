import { TypeORMFindAllUserRepository } from "@/infra/typeorm/repositories/users/typeorm-find-all-user.repository";
import { FindAllUserService } from "@/app/services/users/find-all-user.service";
import { FindAllUserController } from "@/infra/http/controllers/users/find-all-user.controller";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

export const makeFindAllUserController = (): ControllerServerErrorDecorator => {
  const findAllUserRepository = new TypeORMFindAllUserRepository();
  const findAllUserService = new FindAllUserService(findAllUserRepository);
  const findAllUserController = new FindAllUserController(findAllUserService);

  return new ControllerServerErrorDecorator(findAllUserController);
};

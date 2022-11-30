import { MysqlFindAllUserRepository } from "@/infra/mysql/users/MysqlFindAllUserRepository";
import { FindAllUserService } from "@/app/services/users/FindAllUserService";
import { FindAllUserController } from "@/app/controllers/users/FindAllUserController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeFindAllUserController = (): ControllerServerErrorDecorator => {
  const findAllUserRepository = new MysqlFindAllUserRepository();
  const findAllUserService = new FindAllUserService(findAllUserRepository);
  const findAllUserController = new FindAllUserController(findAllUserService);

  return new ControllerServerErrorDecorator(findAllUserController);
};

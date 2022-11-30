import { MysqlFindUserByIdRepository } from "@/infra/mysql/users/MysqlFindUserByIdRepository";
import { FindUserByIdService } from "@/app/services/users/FindUserByIdService";
import { FindUserByIdController } from "@/app/controllers/users/FindUserByIdController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeFindUserByIdController =
  (): ControllerServerErrorDecorator => {
    const findUserByIdRepository = new MysqlFindUserByIdRepository();
    const findUserByIdService = new FindUserByIdService(findUserByIdRepository);
    const findUserByIdController = new FindUserByIdController(
      findUserByIdService,
    );

    return new ControllerServerErrorDecorator(findUserByIdController);
  };

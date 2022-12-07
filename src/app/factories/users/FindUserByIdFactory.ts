import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/TypeORMFindUserByIdRepository";
import { FindUserByIdService } from "@/app/services/users/FindUserByIdService";
import { FindUserByIdController } from "@/app/controllers/users/FindUserByIdController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeFindUserByIdController =
  (): ControllerServerErrorDecorator => {
    const findUserByIdRepository = new TypeORMFindUserByIdRepository();
    const findUserByIdService = new FindUserByIdService(findUserByIdRepository);
    const findUserByIdController = new FindUserByIdController(
      findUserByIdService,
    );

    return new ControllerServerErrorDecorator(findUserByIdController);
  };

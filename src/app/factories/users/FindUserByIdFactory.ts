import { TypeORMUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUserRepository";
import { FindUserByIdService } from "@/app/services/users/FindUserByIdService";
import { FindUserByIdController } from "@/app/controllers/users/FindUserByIdController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeFindUserByIdController =
  (): ControllerServerErrorDecorator => {
    const findUserByIdRepository = new TypeORMUserRepository();
    const findUserByIdService = new FindUserByIdService(findUserByIdRepository);
    const findUserByIdController = new FindUserByIdController(
      findUserByIdService,
    );

    return new ControllerServerErrorDecorator(findUserByIdController);
  };

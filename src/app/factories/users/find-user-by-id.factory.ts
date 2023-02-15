import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/typeorm-find-user-by-id.repository";
import { FindUserByIdService } from "@/app/services/users/find-user-by-id.service";
import { FindUserByIdController } from "@/infra/http/controllers/users/find-user-by-id.controller";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

export const makeFindUserByIdController =
  (): ControllerServerErrorDecorator => {
    const findUserByIdRepository = new TypeORMFindUserByIdRepository();
    const findUserByIdService = new FindUserByIdService(findUserByIdRepository);
    const findUserByIdController = new FindUserByIdController(
      findUserByIdService,
    );

    return new ControllerServerErrorDecorator(findUserByIdController);
  };

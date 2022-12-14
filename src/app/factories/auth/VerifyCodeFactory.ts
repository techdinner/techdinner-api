import { TypeORMFindUserOTPRepository } from "@/infra/typeorm/repositories/auth/TypeORMFindUserOTPRepository";
import { TypeORMDeleteUserOTPRepository } from "@/infra/typeorm/repositories/auth/TypeORMDeleteUserOTPRepository";
import { BcryptCompareAdapter } from "@/infra/bcrypt/BcryptCompareAdapter";
import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/TypeORMFindUserByIdRepository";
import { TypeORMUpdateUserRepository } from "@/infra/typeorm/repositories/users/TypeORMUpdateUserRepository";
import { VerifyCodeService } from "@/app/services/auth/VerifyCodeService";
import { VerifyCodeController } from "@/app/controllers/auth/VerifyCodeController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

export const makeVerifyCodeController = (): ControllerServerErrorDecorator => {
  const findUserOTPRepository = new TypeORMFindUserOTPRepository();
  const deleteUserOTPRepository = new TypeORMDeleteUserOTPRepository();
  const bcryptCompareAdapter = new BcryptCompareAdapter();
  const findUserByIdRepository = new TypeORMFindUserByIdRepository();
  const updateUserRepository = new TypeORMUpdateUserRepository();
  const verifyCodeService = new VerifyCodeService(
    findUserOTPRepository,
    deleteUserOTPRepository,
    bcryptCompareAdapter,
    findUserByIdRepository,
    updateUserRepository,
  );
  const verifyCodeController = new VerifyCodeController(verifyCodeService);

  return new ControllerServerErrorDecorator(verifyCodeController);
};

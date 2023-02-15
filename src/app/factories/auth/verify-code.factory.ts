import { TypeORMFindUserOTPRepository } from "@/infra/typeorm/repositories/auth/typeorm-find-user-otp.repository";
import { TypeORMDeleteUserOTPRepository } from "@/infra/typeorm/repositories/auth/typeorm-delete-user-otp.repository";
import { BcryptCompareAdapter } from "@/infra/bcrypt/bcrypt-compare.adapter";
import { TypeORMFindUserByIdRepository } from "@/infra/typeorm/repositories/users/typeorm-find-user-by-id.repository";
import { TypeORMUpdateUserRepository } from "@/infra/typeorm/repositories/users/typeorm-update-user.repository";
import { VerifyCodeService } from "@/app/services/auth/verify-code.service";
import { VerifyCodeController } from "@/infra/http/controllers/auth/verify-code.controller";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

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

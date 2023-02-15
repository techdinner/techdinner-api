import { TypeORMFindUserByEmailRepository } from "@/infra/typeorm/repositories/users/typeorm-find-user-by-email.repository";
import { TypeORMCreateUserRepository } from "@/infra/typeorm/repositories/users/typeorm-create-user.repository";
import { TypeORMSaveUserOTPRepository } from "@/infra/typeorm/repositories/auth/typeorm-save-user-otp.repository";
import { BcryptHashAdapter } from "@/infra/bcrypt/bcrypt-hash.adapter";
import { MailProviderAdapter } from "@/infra/nodemailer/mail-provider.adapter";
import { SignUpService } from "@/app/services/auth/sign-up.service";
import { SignUpController } from "@/infra/http/controllers/auth/sign-up.controller";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

export const makeSignController = (): ControllerServerErrorDecorator => {
  const findUserByEmailRepository = new TypeORMFindUserByEmailRepository();
  const createUserRepository = new TypeORMCreateUserRepository();
  const saveUserOTPRepository = new TypeORMSaveUserOTPRepository();
  const hashRepository = new BcryptHashAdapter();
  const mailProvider = new MailProviderAdapter();
  const signUpService = new SignUpService(
    createUserRepository,
    findUserByEmailRepository,
    hashRepository,
    mailProvider,
    saveUserOTPRepository,
  );
  const signUpController = new SignUpController(signUpService);

  return new ControllerServerErrorDecorator(signUpController);
};

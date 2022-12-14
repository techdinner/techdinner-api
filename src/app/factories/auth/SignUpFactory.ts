import { TypeORMFindUserByEmailRepository } from "@/infra/typeorm/repositories/users/TypeORMFindUserByEmailRepository";
import { TypeORMCreateUserRepository } from "@/infra/typeorm/repositories/users/TypeORMCreateUserRepository";
import { TypeORMSaveUserOTPRepository } from "@/infra/typeorm/repositories/auth/TypeORMSaveUserOTPRepository";
import { BcryptHashAdapter } from "@/infra/bcrypt/BcryptHashAdapter";
import { MailProviderAdapter } from "@/infra/nodemailer/MailProviderAdapter";
import { SignUpService } from "@/app/services/auth/SignUpService";
import { SignUpController } from "@/app/controllers/auth/SignUpController";
import { ControllerServerErrorDecorator } from "@/app/decorators/ControllerServerErrorDecorator";

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

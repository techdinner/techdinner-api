import { TypeORMFindUserByEmailRepository } from "@/infra/typeorm/repositories/users/typeorm-find-user-by-email.repository";
import { TypeORMSaveUserOTPRepository } from "@/infra/typeorm/repositories/auth/typeorm-save-user-otp.repository";
import { BcryptCompareAdapter } from "@/infra/bcrypt/bcrypt-compare.adapter";
import { BcryptHashAdapter } from "@/infra/bcrypt/bcrypt-hash.adapter";
import { MailProviderAdapter } from "@/infra/nodemailer/mail-provider.adapter";
import { LoginService } from "@/app/services/auth/login.service";
import { LoginController } from "@/infra/http/controllers/auth/login.controller";
import { SendMailService } from "@/app/services/mail/send-mail.service";
import { ControllerServerErrorDecorator } from "@/app/decorators/controller-server-error.decorator";

export const makeLoginController = (): ControllerServerErrorDecorator => {
  const findUserByEmailRepository = new TypeORMFindUserByEmailRepository();
  const saveUserOTPRepository = new TypeORMSaveUserOTPRepository();
  const compareRepository = new BcryptCompareAdapter();
  const hashRepository = new BcryptHashAdapter();
  const mailProvider = new MailProviderAdapter();
  const sendMailService = new SendMailService(
    hashRepository,
    mailProvider,
    saveUserOTPRepository,
  );
  const loginService = new LoginService(
    findUserByEmailRepository,
    compareRepository,
    sendMailService,
  );
  const loginController = new LoginController(loginService);

  return new ControllerServerErrorDecorator(loginController);
};

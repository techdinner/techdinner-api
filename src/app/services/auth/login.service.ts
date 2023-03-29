import type { User } from "@/domain/entities/user";
import type { Login } from "@/domain/use-cases/auth/login";
import type { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import type { CompareRepository } from "@/app/repositories/crypt/compare.repository";
import type { HashRepository } from "@/app/repositories/crypt/hash.repository";
import type { MailProvider } from "@/app/providers/mail.provider";
import { UserOTP } from "@/domain/entities/user-otp";
import type { SaveUserOTPRepository } from "@/app/repositories/auth/save-user-otp.repository";
import { HttpError } from "@/app/helpers/http-error";
import type { LoginDTO } from "@/app/dtos/auth/login.dto";
import { UniqueEntityID } from "@/domain/entities/core/unique-entity-id";
import { UserOTPType } from "@/domain/entities/value-objects/user-otp-type";
import { OTPTypes } from "@/app/enums/otp-types.enum";
import { UserOTPNumber } from "@/domain/entities/value-objects/user-otp";

export class LoginService implements Login {
  constructor(
    private readonly _findUserByEmailRepository: FindUserByEmailRepository,
    private readonly _compareRepository: CompareRepository,
    private readonly _hashRepository: HashRepository,
    private readonly _mailProvider: MailProvider,
    private readonly _saveUserOTPRepository: SaveUserOTPRepository,
  ) {}

  private async _verifyCredentials(
    email: string,
    password: string,
  ): Promise<User> {
    const user = await this._findUserByEmailRepository.findByEmail(email);

    if (
      !user ||
      !(await this._compareRepository.compare(password, user.password.value))
    ) {
      throw new HttpError("Invalid credentials!", 400);
    }

    if (!user.verified) {
      throw new HttpError("User is not verified!", 400);
    }

    return user;
  }

  private async _sendMailLogin(
    userId: string,
    name: string,
    email: string,
  ): Promise<void> {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const userOtp = new UserOTP({
      userId: new UniqueEntityID(userId),
      otp: new UserOTPNumber(otp, false, this._hashRepository),
      type: new UserOTPType(OTPTypes.LOGIN),
    });

    userOtp.expires();

    await this._saveUserOTPRepository.save(userOtp);

    await this._mailProvider.sendMail({
      to: {
        name,
        email,
      },
      subject: "Seja bem-vindo novamente à plataforma",
      body: `<p>Você já pode fazer login em nossa plataforma, use o código: <strong>${otp}</strong>.</p>`,
    });
  }

  async execute(data: LoginDTO): Promise<{ userId: string }> {
    const user = await this._verifyCredentials(data.email, data.password);

    this._sendMailLogin(user.id.value, user.name, data.email);

    return { userId: user.id.value };
  }
}

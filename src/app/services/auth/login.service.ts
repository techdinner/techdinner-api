import { type User } from "@/domain/entities/user";
import { type Login } from "@/domain/use-cases/auth/login";
import { type FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import { type CompareRepository } from "@/app/repositories/crypt/compare.repository";
import { HttpError } from "@/app/helpers/http-error";
import { type LoginDTO } from "@/app/dtos/auth/login.dto";
import { OTPTypes } from "@/app/enums/otp-types.enum";
import { type SendMail } from "@/domain/use-cases/mail/send-mail";

export class LoginService implements Login {
  constructor(
    private readonly _findUserByEmailRepository: FindUserByEmailRepository,
    private readonly _compareRepository: CompareRepository,
    private readonly _sendMail: SendMail,
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

  async execute(data: LoginDTO): Promise<{ userId: string }> {
    const user = await this._verifyCredentials(data.email, data.password);

    await this._sendMail.execute({
      userId: user.id.value,
      name: user.name,
      email: data.email,
      otpType: OTPTypes.LOGIN,
    });

    return { userId: user.id.value };
  }
}

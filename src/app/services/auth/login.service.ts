import { User } from "@/domain/entities/user";
import { Login } from "@/domain/usecases/auth/login";
import { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import { CompareRepository } from "@/app/repositories/crypt/compare.repository";
import { HashRepository } from "@/app/repositories/crypt/hash.repository";
import { MailProvider } from "@/app/providers/mail.provider";
import { UserOTP } from "@/domain/entities/user-otp";
import { SaveUserOTPRepository } from "@/app/repositories/auth/save-user-otp.repository";
import { HttpError } from "@/app/helpers/http-error";
import { LoginDTO } from "@/app/dtos/auth/login.dto";

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
      !(await this._compareRepository.compare(password, user.password))
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

    const hashedOtp = await this._hashRepository.hash(otp);

    const userOtp = new UserOTP({
      userId,
      otp: hashedOtp,
      type: "LOGIN",
    });

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

  async execute(data: LoginDTO): Promise<string> {
    const user = await this._verifyCredentials(data.email, data.password);

    this._sendMailLogin(user.id as string, user.name, data.email);

    return user.id as string;
  }
}

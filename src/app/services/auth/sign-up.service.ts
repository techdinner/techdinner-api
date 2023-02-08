import { User } from "@/domain/entities/user";
import { SignUp } from "@/domain/usecases/auth/sign-up";
import { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import { HashRepository } from "@/app/repositories/crypt/hash.repository";
import { MailProvider } from "@/app/providers/mail.provider";
import { UserOTP } from "@/domain/entities/user-otp";
import { SaveUserOTPRepository } from "@/app/repositories/auth/save-user-otp.repository";
import { HttpError } from "@/app/helpers/http-error";

export class SignUpService implements SignUp {
  constructor(
    private readonly _createUserRepository: CreateUserRepository,
    private readonly _findUserByEmailRepository: FindUserByEmailRepository,
    private readonly _hashRepository: HashRepository,
    private readonly _mailProvider: MailProvider,
    private readonly _saveUserOTPRepository: SaveUserOTPRepository,
  ) {}

  private async _sendMailSignUp(
    userId: string,
    name: string,
    email: string,
  ): Promise<void> {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const hashedOtp = await this._hashRepository.hash(otp);

    const userOtp = new UserOTP({
      userId,
      otp: hashedOtp,
      type: "SIGN_UP",
    });

    await this._saveUserOTPRepository.save(userOtp);

    await this._mailProvider.sendMail({
      to: {
        name,
        email,
      },
      subject: "Seja bem-vindo à plataforma",
      body: `<p>Você já pode fazer login em nossa plataforma, use o código: <strong>${otp}</strong>.</p>`,
    });
  }

  async execute(data: CreateUserDTO): Promise<string> {
    const userExists = await this._findUserByEmailRepository.findByEmail(
      data.email,
    );

    if (userExists) {
      throw new HttpError(
        "The email is invalid or has already been used.",
        400,
      );
    }

    data.password = await this._hashRepository.hash(data.password);
    data.verified = false;

    const user = new User(data);

    if (await this._createUserRepository.create(user)) {
      this._sendMailSignUp(user.id as string, data.name, data.email);
    }

    return user.id as string;
  }
}

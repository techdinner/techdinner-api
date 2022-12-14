import { User } from "@/domain/entities/User";
import { SignUp } from "@/domain/usecases/auth/SignUp";
import { CreateUserRepository } from "@/app/repositories/users/CreateUserRepository";
import { FindUserByEmailRepository } from "@/app/repositories/users/FindUserByEmailRepository";
import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";
import { HashRepository } from "@/app/repositories/crypt/HashRepository";
import { MailProvider } from "@/app/providers/MailProvider";
import { UserOTP } from "@/domain/entities/UserOTP";
import { SaveUserOTPRepository } from "@/app/repositories/auth/SaveUserOTPRepository";

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
      throw new Error("The email is invalid or has already been used.");
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

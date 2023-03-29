import { User } from "@/domain/entities/user";
import type { SignUp } from "@/domain/use-cases/auth/sign-up";
import type { CreateUserRepository } from "@/app/repositories/users/create-user.repository";
import type { FindUserByEmailRepository } from "@/app/repositories/users/find-user-by-email.repository";
import type { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import type { HashRepository } from "@/app/repositories/crypt/hash.repository";
import type { MailProvider } from "@/app/providers/mail.provider";
import { UserOTP } from "@/domain/entities/user-otp";
import type { SaveUserOTPRepository } from "@/app/repositories/auth/save-user-otp.repository";
import { HttpError } from "@/app/helpers/http-error";
import { UniqueEntityID } from "@/domain/entities/core/unique-entity-id";
import { UserEmail } from "@/domain/entities/value-objects/user-email";
import { UserPhone } from "@/domain/entities/value-objects/user-phone";
import { UserRole } from "@/domain/entities/value-objects/user-role";
import { UserPassword } from "@/domain/entities/value-objects/user-password";
import { UserCPF } from "@/domain/entities/value-objects/user-cpf";
import { UserOTPType } from "@/domain/entities/value-objects/user-otp-type";
import { OTPTypes } from "@/app/enums/otp-types.enum";
import { UserOTPNumber } from "@/domain/entities/value-objects/user-otp";

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

    const userOtp = new UserOTP({
      userId: new UniqueEntityID(userId),
      otp: new UserOTPNumber(otp, false, this._hashRepository),
      type: new UserOTPType(OTPTypes.SIGN_UP),
    });

    userOtp.expires();

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

  async execute(data: CreateUserDTO): Promise<{ userId: string }> {
    const userExists = await this._findUserByEmailRepository.findByEmail(
      data.email,
    );

    if (userExists) {
      throw new HttpError(
        "The email is invalid or has already been used.",
        400,
      );
    }

    const user = new User({
      name: data.name,
      email: new UserEmail(data.email),
      password: new UserPassword(data.password, false, this._hashRepository),
      cpf: new UserCPF(data.cpf),
      phone: new UserPhone(data.phone),
      companyId: new UniqueEntityID(data.companyId),
      role: new UserRole(data.role),
      photo: data.photo,
      verified: false,
    });

    if (await this._createUserRepository.create(user)) {
      this._sendMailSignUp(user.id.value, data.name, data.email);
    }

    return { userId: user?.id.value };
  }
}

import { type MailProvider } from "@/app/providers/mail.provider";
import { type SaveUserOTPRepository } from "@/app/repositories/auth/save-user-otp.repository";
import { type HashRepository } from "@/app/repositories/crypt/hash.repository";
import { UniqueEntityID } from "@/domain/entities/core/unique-entity-id";
import { UserOTP } from "@/domain/entities/user-otp";
import { UserOTPNumber } from "@/domain/entities/value-objects/user-otp";
import { UserOTPType } from "@/domain/entities/value-objects/user-otp-type";
import { type SendMailDTO } from "@/app/dtos/mail/send-mail.dto";
import { type SendMail } from "@/domain/use-cases/mail/send-mail";

interface GenerateOTPResponse {
  otp: string;
  userOtp: UserOTP;
}

export class SendMailService implements SendMail {
  constructor(
    private readonly _hashRepository: HashRepository,
    private readonly _mailProvider: MailProvider,
    private readonly _saveUserOTPRepository: SaveUserOTPRepository,
  ) {}

  private async _generateOtp(
    userId: string,
    otpType: string,
  ): Promise<GenerateOTPResponse> {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const userOtp = new UserOTP({
      userId: new UniqueEntityID(userId),
      otp: new UserOTPNumber(otp, false, this._hashRepository),
      type: new UserOTPType(otpType),
    });

    userOtp.expires();

    return { otp, userOtp };
  }

  async execute(data: SendMailDTO): Promise<void> {
    const { otp, userOtp } = await this._generateOtp(data.userId, data.otpType);

    await this._saveUserOTPRepository.save(userOtp);

    await this._mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      subject: "Seja bem-vindo novamente à plataforma",
      body: `<p>Você já pode fazer login em nossa plataforma, use o código: <strong>${otp}</strong>.</p>`,
    });
  }
}

import { type VerifyCode } from "@/domain/use-cases/auth/verify-code";
import {
  type VerifyCodeDTO,
  type VerifyCodeResponse,
} from "@/app/dtos/auth/verify-code.dto";
import { type FindUserOTPRepository } from "@/app/repositories/auth/find-user-otp.repository";
import { type DeleteUserOTPRepository } from "@/app/repositories/auth/delete-user-otp.repository";
import { type CompareRepository } from "@/app/repositories/crypt/compare.repository";
import { type SignTokenRepository } from "@/app/repositories/jwt/sign-token.repository";
import { type FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { type UpdateUserRepository } from "@/app/repositories/users/update-user.repository";
import { HttpError } from "@/app/helpers/http-error";
import { auth } from "@/config/auth";

interface OtpTypes {
  SIGN_UP: () => Promise<{ message: string; data: null }>;
  LOGIN: () => { message: string; data: string };
}

export class VerifyCodeService implements VerifyCode {
  constructor(
    private readonly _findUserOTPRepository: FindUserOTPRepository,
    private readonly _deleteUserOTPRepository: DeleteUserOTPRepository,
    private readonly _compareRepository: CompareRepository,
    private readonly _signTokenRepository: SignTokenRepository,
    private readonly _findUserByIdRepository: FindUserByIdRepository,
    private readonly _updateUserRepository: UpdateUserRepository,
  ) {}

  async execute(data: VerifyCodeDTO): Promise<VerifyCodeResponse> {
    const userOtp = await this._findUserOTPRepository.findUserOtp(
      data.userId,
      data.type,
    );

    if (!userOtp?.length) {
      throw new HttpError(
        "Account record doesn't exist or has been verified already. Please sign up or sign in.",
        400,
      );
    }

    const { expiresAt, otp: hashedOtp } = userOtp[0];

    if (!!expiresAt && expiresAt < new Date()) {
      await this._deleteUserOTPRepository.deleteUserOtp(data.userId, data.type);

      throw new HttpError("Code has expired. Please request again", 400);
    }

    const validOtp = await this._compareRepository.compare(
      data.otp,
      await hashedOtp.getHashedValue(),
    );

    if (!validOtp) {
      throw new HttpError("Invalid code passed. Check your inbox.", 400);
    }

    const user = await this._findUserByIdRepository.findById(data.userId);

    if (!user) {
      throw new HttpError("User is invalid or does not exist!", 400);
    }

    const otpTypes: OtpTypes = {
      SIGN_UP: async () => {
        user.verified = true;
        await this._updateUserRepository.update(data.userId, user);
        return { message: "Registered account!", data: null };
      },
      LOGIN: () => {
        const token = this._signTokenRepository.sign(
          { id: data.userId, email: user.email },
          auth.secret,
          {
            expiresIn: auth.expires,
          },
        );

        return { message: "User logged!", data: token };
      },
    };

    await this._deleteUserOTPRepository.deleteUserOtp(data.userId, data.type);

    return await otpTypes[data.type as keyof OtpTypes]();
  }
}

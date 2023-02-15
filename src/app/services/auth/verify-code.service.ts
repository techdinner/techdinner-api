import { VerifyCode } from "@/domain/usecases/auth/verify-code";
import {
  VerifyCodeDTO,
  VerifyCodeResponse,
} from "@/app/dtos/auth/verify-code.dto";
import { FindUserOTPRepository } from "@/app/repositories/auth/find-user-otp.repository";
import { DeleteUserOTPRepository } from "@/app/repositories/auth/delete-user-otp.repository";
import { CompareRepository } from "@/app/repositories/crypt/compare.repository";
import { SignTokenRepository } from "@/app/repositories/jwt/sign-token.repository";
import { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { UpdateUserRepository } from "@/app/repositories/users/update-user.repository";
import { HttpError } from "@/app/helpers/http-error";
import { auth } from "@/config/auth";

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

    const validOtp = await this._compareRepository.compare(data.otp, hashedOtp);

    if (!validOtp) {
      throw new HttpError("Invalid code passed. Check your inbox.", 400);
    }

    const user = await this._findUserByIdRepository.findById(data.userId);

    if (!user) {
      throw new HttpError("User is invalid or does not exist!", 400);
    }

    let token;
    let response;

    switch (data.type) {
      case "SIGN_UP":
        user.verified = true;
        await this._updateUserRepository.update(data.userId, user);
        response = { message: "Registered account!" };
        break;

      case "LOGIN":
        token = this._signTokenRepository.sign(
          { id: data.userId, email: user.email },
          auth.secret,
          {
            expiresIn: auth.expires,
          },
        );

        response = { token };
        break;
    }

    await this._deleteUserOTPRepository.deleteUserOtp(data.userId, data.type);

    return response;
  }
}

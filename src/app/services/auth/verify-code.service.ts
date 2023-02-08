import { VerifyCode } from "@/domain/usecases/auth/verify-code";
import { VerifyCodeDTO } from "@/app/dtos/auth/verify-code.dto";
import { FindUserOTPRepository } from "@/app/repositories/auth/find-user-otp.repository";
import { DeleteUserOTPRepository } from "@/app/repositories/auth/delete-user-otp.repository";
import { CompareRepository } from "@/app/repositories/crypt/compare.repository";
import { FindUserByIdRepository } from "@/app/repositories/users/find-user-by-id.repository";
import { UpdateUserRepository } from "@/app/repositories/users/update-user.repository";
import { HttpError } from "@/app/helpers/http-error";

export class VerifyCodeService implements VerifyCode {
  constructor(
    private readonly _findUserOTPRepository: FindUserOTPRepository,
    private readonly _deleteUserOTPRepository: DeleteUserOTPRepository,
    private readonly _compareRepository: CompareRepository,
    private readonly _findUserByIdRepository: FindUserByIdRepository,
    private readonly _updateUserRepository: UpdateUserRepository,
  ) {}

  async execute(data: VerifyCodeDTO): Promise<void> {
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

    user.verified = true;

    await this._updateUserRepository.update(data.userId, user);
    await this._deleteUserOTPRepository.deleteUserOtp(data.userId, data.type);
  }
}

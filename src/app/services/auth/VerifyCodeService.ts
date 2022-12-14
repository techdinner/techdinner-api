import { VerifyCode } from "@/domain/usecases/auth/VerifyCode";
import { VerifyCodeDTO } from "@/app/dtos/auth/VerifyCodeDTO";
import { FindUserOTPRepository } from "@/app/repositories/auth/FindUserOTPRepository";
import { DeleteUserOTPRepository } from "@/app/repositories/auth/DeleteUserOTPRepository";
import { CompareRepository } from "@/app/repositories/crypt/CompareRepository";
import { FindUserByIdRepository } from "@/app/repositories/users/FindUserByIdRepository";
import { UpdateUserRepository } from "@/app/repositories/users/UpdateUserRepository";

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
      throw new Error(
        "Account record doesn't exist or has been verified already. Please sign up or sign in.",
      );
    }

    const { expiresAt, otp: hashedOtp } = userOtp[0];

    if (!!expiresAt && expiresAt < new Date()) {
      await this._deleteUserOTPRepository.deleteUserOtp(data.userId, data.type);

      throw new Error("Code has expired. Please request again");
    }

    const validOtp = await this._compareRepository.compare(data.otp, hashedOtp);

    if (!validOtp) {
      throw new Error("Invalid code passed. Check your inbox.");
    }

    const user = await this._findUserByIdRepository.findById(data.userId);

    if (!user) {
      throw new Error("User is invalid or does not exist!");
    }

    user.verified = true;

    await this._updateUserRepository.update(data.userId, user);
    await this._deleteUserOTPRepository.deleteUserOtp(data.userId, data.type);
  }
}
